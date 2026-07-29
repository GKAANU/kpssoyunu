/* ============================================================
   engine.js — soru seçimi, tur mantığı, puanlama, madalyalar
   ============================================================ */
(function () {

  /* ---------- yardımcılar ---------- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0;
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* son turda çıkan sorular — arka arkaya aynı soruyu görmeyi engeller */
  var lastRound = [];

  /**
   * Ağırlıklı soru seçimi. Her tur farklı sorular gelmesini sağlar:
   *  - hiç görülmemiş sorular en yüksek şansa sahip
   *  - yanlış yapılmış ve henüz düzeltilmemiş sorular hemen arkasında
   *  - üst üste doğru bilinen sorular geri plana atılır (ama tamamen kaybolmaz)
   *  - önceki turda çıkanların şansı ciddi biçimde düşürülür
   */
  function weightOf(q) {
    var st = Store.data.qstats[q.id];
    var w;
    if (!st || !st.s) {
      w = 34;                                  // yepyeni soru
    } else if (st.w > 0 && st.streak === 0) {
      w = 52;                                  // borcu olan soru: öne al
    } else if (st.streak === 1) {
      w = 16;                                  // bir kez doğru, pekiştir
    } else {
      w = 5 / st.streak;                       // sağlam biliniyor, seyrek gelsin
      if (w < 0.7) w = 0.7;
    }
    /* uzun süredir görülmediyse hafif canlandır (aralıklı tekrar) */
    if (st) {
      var age = Store.data.rounds - st.last;
      if (age > 6) w *= 1.45;
      else if (age > 3) w *= 1.15;
    }
    if (lastRound.indexOf(q.id) !== -1) w *= 0.10;
    return w;
  }

  function weightedPick(pool, n) {
    var items = pool.slice();
    var picked = [];
    n = Math.min(n, items.length);
    for (var k = 0; k < n; k++) {
      var total = 0, i, ws = [];
      for (i = 0; i < items.length; i++) { var w = weightOf(items[i]); ws.push(w); total += w; }
      var r = Math.random() * total, acc = 0, idx = items.length - 1;
      for (i = 0; i < items.length; i++) {
        acc += ws[i];
        if (r <= acc) { idx = i; break; }
      }
      picked.push(items[idx]);
      items.splice(idx, 1);
    }
    return picked;
  }

  /* ---------- tur oluşturma ---------- */
  var MODE_CFG = {
    classic:  { timer: 0,  hearts: 0, boss: false },
    time:     { timer: 20, hearts: 0, boss: false },
    boss:     { timer: 0,  hearts: 3, boss: true  },
    survival: { timer: 0,  hearts: 1, boss: false }
  };

  /**
   * @param opts {sectionId|'mixed'|'weak', len, mode}
   */
  function buildRound(opts) {
    var pool, label, sec = null;

    if (opts.sectionId === 'weak') {
      pool = Store.weakQuestions(null);
      label = 'Hata Kampı';
    } else if (opts.sectionId === 'mixed') {
      pool = [];
      KPSS.SECTIONS.forEach(function (s) { pool = pool.concat(KPSS.BANKS[s.id] || []); });
      label = 'Karışık Arena';
    } else {
      sec = KPSS.getSection(opts.sectionId);
      pool = (KPSS.BANKS[opts.sectionId] || []).slice();
      label = sec ? sec.name : '';
    }

    if (!pool.length) return null;

    var picked = weightedPick(pool, opts.len);

    /* şıkları da karıştır — cevap ezberi olmasın */
    var qs = picked.map(function (q) {
      var idxs = shuffle(q.o.map(function (_, i) { return i; }));
      return {
        ref: q,
        options: idxs.map(function (i) { return q.o[i]; }),
        answer: idxs.indexOf(q.a),
        origAnswerText: q.o[q.a]
      };
    });

    lastRound = picked.map(function (q) { return q.id; });

    var cfg = MODE_CFG[opts.mode] || MODE_CFG.classic;

    return {
      key: opts.sectionId,
      label: label,
      section: sec,
      mode: opts.mode,
      cfg: cfg,
      questions: qs,
      i: 0,
      score: 0,
      correct: 0,
      wrong: 0,
      skipped: 0,
      streak: 0,
      bestStreak: 0,
      hearts: cfg.hearts,
      bossMax: qs.length * 100,
      bossHp: qs.length * 100,
      bossDown: false,
      dead: false,
      results: [],          // {q, chosen, correct, timeout, skipped}
      startedAt: Date.now(),
      usedTools: 0
    };
  }

  /* ---------- puanlama ---------- */
  function scoreFor(round, secondsLeft) {
    var base = 100;
    var comboBonus = Math.min(round.streak, 10) * 22;
    var speed = 0;
    if (round.cfg.timer && secondsLeft != null) {
      speed = Math.round((secondsLeft / round.cfg.timer) * 60);
    }
    var diff = (round.questions[round.i].ref.d - 1) * 15;   // zor soru daha çok puan
    return base + comboBonus + speed + diff;
  }

  /* zarar: boss modunda */
  function damageFor(round) {
    return 100 + Math.min(round.streak, 8) * 30;
  }

  /* ---------- madalyalar ---------- */
  var BADGES = [
    { id: 'first',      emoji: '🐣', name: 'İlk Adım',          desc: 'İlk turunu tamamla.' },
    { id: 'perfect',    emoji: '💯', name: 'Kusursuz',           desc: 'Bir turda hiç yanlış yapma.' },
    { id: 'streak10',   emoji: '🔥', name: 'Alev Serisi',        desc: 'Üst üste 10 doğru yap.' },
    { id: 'streak20',   emoji: '☄️', name: 'Meteor',             desc: 'Üst üste 20 doğru yap.' },
    { id: 'bossfirst',  emoji: '🗡️', name: 'Boss Avcısı',        desc: 'İlk bossu devir.' },
    { id: 'boss5',      emoji: '👑', name: 'Boss Kâbusu',        desc: '5 boss devir.' },
    { id: 'rounds10',   emoji: '🎖️', name: 'Düzenli Çalışan',    desc: '10 tur tamamla.' },
    { id: 'rounds50',   emoji: '🏆', name: 'Maratoncu',          desc: '50 tur tamamla.' },
    { id: 'q100',       emoji: '💪', name: 'Yüz Doğru',          desc: 'Toplam 100 doğru cevap.' },
    { id: 'q500',       emoji: '🧠', name: 'Beş Yüz Doğru',      desc: 'Toplam 500 doğru cevap.' },
    { id: 'lvl5',       emoji: '⭐', name: 'Seviye 5',            desc: '5. seviyeye ulaş.' },
    { id: 'lvl10',      emoji: '🌟', name: 'Seviye 10',           desc: '10. seviyeye ulaş.' },
    { id: 'allsec',     emoji: '🗺️', name: 'Kâşif',              desc: 'Her bölümden en az bir tur oyna.' },
    { id: 'master1',    emoji: '🎓', name: 'Bölüm Ustası',        desc: 'Bir bölümde %80 hakimiyete ulaş.' },
    { id: 'masterall',  emoji: '👨‍🎓', name: 'Tam Hakimiyet',    desc: 'Tüm bölümlerde %60 hakimiyete ulaş.' },
    { id: 'camp',       emoji: '🩹', name: 'Hatalarını Yedi',    desc: 'Hata Kampında bir turu kusursuz bitir.' },
    { id: 'survivor',   emoji: '💀', name: 'Hayatta Kalan',      desc: 'Hayatta Kalma modunda 15 soruyu bitir.' },
    { id: 'nohelp',     emoji: '🧘', name: 'Yardımsız',          desc: '20 soruluk turu joker kullanmadan bitir.' }
  ];

  var playedSections = null;
  function markPlayed(id) {
    if (!playedSections) {
      try { playedSections = JSON.parse(localStorage.getItem('kpss-played') || '[]'); }
      catch (e) { playedSections = []; }
    }
    if (KPSS.getSection(id) && playedSections.indexOf(id) === -1) {
      playedSections.push(id);
      try { localStorage.setItem('kpss-played', JSON.stringify(playedSections)); } catch (e) {}
    }
    return playedSections;
  }

  var bossKills = 0;
  try { bossKills = parseInt(localStorage.getItem('kpss-bosskills') || '0', 10) || 0; } catch (e) {}

  /** tur sonunda yeni açılan madalyaları döndürür */
  function checkBadges(round) {
    var D = Store.data, got = [], li = Store.levelInfo();
    var played = markPlayed(round.key);

    function give(id) {
      if (D.badges[id]) return;
      D.badges[id] = Date.now();
      for (var i = 0; i < BADGES.length; i++) if (BADGES[i].id === id) got.push(BADGES[i]);
    }

    give('first');
    if (round.wrong === 0 && round.skipped === 0 && round.questions.length >= 5 && !round.dead) give('perfect');
    if (D.bestStreak >= 10) give('streak10');
    if (D.bestStreak >= 20) give('streak20');
    if (round.cfg.boss && round.bossDown) {
      bossKills++;
      try { localStorage.setItem('kpss-bosskills', String(bossKills)); } catch (e) {}
      give('bossfirst');
      if (bossKills >= 5) give('boss5');
    }
    if (D.rounds >= 10) give('rounds10');
    if (D.rounds >= 50) give('rounds50');
    if (D.totalCorrect >= 100) give('q100');
    if (D.totalCorrect >= 500) give('q500');
    if (li.level >= 5) give('lvl5');
    if (li.level >= 10) give('lvl10');
    if (played.length >= KPSS.SECTIONS.length) give('allsec');
    if (round.key === 'weak' && round.wrong === 0 && round.questions.length >= 5) give('camp');
    if (round.mode === 'survival' && round.correct >= 15) give('survivor');
    if (round.questions.length >= 20 && round.usedTools === 0 && round.wrong === 0) give('nohelp');

    var maxM = 0, minM = 101, any = false;
    KPSS.SECTIONS.forEach(function (s) {
      if (!(KPSS.BANKS[s.id] || []).length) return;
      any = true;
      var m = Store.mastery(s.id);
      if (m > maxM) maxM = m;
      if (m < minM) minM = m;
    });
    if (maxM >= 80) give('master1');
    if (any && minM >= 60) give('masterall');

    Store.save();
    return got;
  }

  window.Engine = {
    buildRound: buildRound,
    scoreFor: scoreFor,
    damageFor: damageFor,
    checkBadges: checkBadges,
    BADGES: BADGES,
    MODE_CFG: MODE_CFG,
    shuffle: shuffle,
    markPlayed: markPlayed,
    playedSections: function () { return markPlayed('__noop__'); }
  };
})();

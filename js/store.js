/* ============================================================
   store.js — localStorage kalıcı kayıt
   Soru bazlı istatistik tutar, bu sayede yanlışlar tekrar gelir.
   ============================================================ */
(function () {
  var KEY = 'kpss-arena-v1';

  var DEFAULTS = {
    xp: 0,
    coins: 60,
    bestStreak: 0,
    rounds: 0,
    totalCorrect: 0,
    totalWrong: 0,
    badges: {},          // badgeId: timestamp
    qstats: {},          // qid: {s:görülme, c:doğru, w:yanlış, last:tur no, streak:üst üste doğru}
    settings: { sound: true, motion: true, bigtext: false, autonext: true },
    lastSection: null
  };

  var S = null;

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      S = raw ? JSON.parse(raw) : {};
    } catch (e) { S = {}; }
    for (var k in DEFAULTS) {
      if (S[k] === undefined) S[k] = (typeof DEFAULTS[k] === 'object' && DEFAULTS[k] !== null)
        ? JSON.parse(JSON.stringify(DEFAULTS[k])) : DEFAULTS[k];
    }
    for (var sk in DEFAULTS.settings) {
      if (S.settings[sk] === undefined) S.settings[sk] = DEFAULTS.settings[sk];
    }
    return S;
  }

  var saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
    }, 120);
  }

  /* ---------- seviye sistemi ---------- */
  // Her seviye kademeli olarak daha fazla XP ister.
  function xpForLevel(lvl) { return Math.round(90 * Math.pow(lvl, 1.45)); }

  function levelInfo() {
    var lvl = 1, need = xpForLevel(1), acc = 0;
    while (S.xp >= acc + need) { acc += need; lvl++; need = xpForLevel(lvl); }
    return {
      level: lvl,
      into: S.xp - acc,
      need: need,
      pct: Math.min(100, ((S.xp - acc) / need) * 100)
    };
  }

  var TITLES = [
    [1, 'Çaylak'], [3, 'Not Avcısı'], [5, 'Konu Fatihi'], [8, 'Madde Ustası'],
    [12, 'Kanun Kâşifi'], [16, 'Doktrin Şövalyesi'], [21, 'Arena Gladyatörü'],
    [27, 'KPSS Kâhini'], [34, 'Efsane'], [42, 'Yürüyen Mevzuat']
  ];
  function title() {
    var l = levelInfo().level, t = TITLES[0][1];
    for (var i = 0; i < TITLES.length; i++) if (l >= TITLES[i][0]) t = TITLES[i][1];
    return t;
  }

  /* ---------- soru istatistikleri ---------- */
  function stat(qid) {
    if (!S.qstats[qid]) S.qstats[qid] = { s: 0, c: 0, w: 0, last: -999, streak: 0 };
    return S.qstats[qid];
  }

  function recordAnswer(qid, isCorrect, wasSkipped) {
    var st = stat(qid);
    st.s++;
    st.last = S.rounds;
    if (wasSkipped) { st.streak = 0; return; }
    if (isCorrect) { st.c++; st.streak++; S.totalCorrect++; }
    else { st.w++; st.streak = 0; S.totalWrong++; }
  }

  /* bir bölümün hakimiyet yüzdesi: soru başına en fazla 2 doğru sayılır */
  function mastery(sectionId) {
    var bank = KPSS.BANKS[sectionId] || [];
    if (!bank.length) return 0;
    var pts = 0;
    for (var i = 0; i < bank.length; i++) {
      var st = S.qstats[bank[i].id];
      if (!st) continue;
      pts += Math.min(2, st.streak);   // üst üste 2 doğru = tam hakimiyet
    }
    return Math.round((pts / (bank.length * 2)) * 100);
  }

  function overallMastery() {
    var tot = 0, n = 0;
    for (var i = 0; i < KPSS.SECTIONS.length; i++) {
      var id = KPSS.SECTIONS[i].id;
      if (!(KPSS.BANKS[id] || []).length) continue;
      tot += mastery(id); n++;
    }
    return n ? Math.round(tot / n) : 0;
  }

  function sectionStats(sectionId) {
    var bank = KPSS.BANKS[sectionId] || [];
    var seen = 0, weak = 0, solid = 0;
    for (var i = 0; i < bank.length; i++) {
      var st = S.qstats[bank[i].id];
      if (!st || !st.s) continue;
      seen++;
      if (st.streak >= 2) solid++;
      else if (st.w > 0 && st.streak === 0) weak++;
    }
    return { total: bank.length, seen: seen, weak: weak, solid: solid, mastery: mastery(sectionId) };
  }

  /* daha önce yanlış yapılıp henüz düzeltilmemiş sorular */
  function weakQuestions(sectionId) {
    var out = [];
    var secs = sectionId ? [sectionId] : KPSS.SECTIONS.map(function (s) { return s.id; });
    secs.forEach(function (sid) {
      (KPSS.BANKS[sid] || []).forEach(function (q) {
        var st = S.qstats[q.id];
        if (st && st.w > 0 && st.streak === 0) out.push(q);
      });
    });
    return out;
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch (e) {}
    S = null; load();
  }

  load();

  window.Store = {
    get data() { return S; },
    save: save,
    levelInfo: levelInfo,
    title: title,
    stat: stat,
    recordAnswer: recordAnswer,
    mastery: mastery,
    overallMastery: overallMastery,
    sectionStats: sectionStats,
    weakQuestions: weakQuestions,
    reset: reset,
    addXp: function (n) { S.xp += n; save(); },
    addCoins: function (n) { S.coins = Math.max(0, S.coins + n); save(); },
    spend: function (n) {
      if (S.coins < n) return false;
      S.coins -= n; save(); return true;
    }
  };
})();

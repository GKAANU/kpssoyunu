/* ============================================================
   ui.js — ekranlar, quiz akışı, sonuç ve yanlış analizi
   ============================================================ */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var LETTERS = ['A', 'B', 'C', 'D', 'E'];

  var UI = {};
  var R = null;              // aktif tur
  var setup = { sectionId: null, len: 10, mode: 'classic' };
  var locked = false;        // cevap verildi mi
  var timerId = null, timeLeft = 0;
  var eliminated = [];

  /* ---------------- ekran yönetimi ---------------- */
  function show(id) {
    var scr = document.querySelectorAll('.screen');
    for (var i = 0; i < scr.length; i++) scr[i].classList.remove('active');
    $(id).classList.add('active');
    $('topbar').classList.toggle('hidden', id === 'scr-splash');
    window.scrollTo({ top: 0, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' });
  }
  UI.show = show;

  function toast(msg, kind) {
    var t = document.createElement('div');
    t.className = 'toast' + (kind ? ' ' + kind : '');
    t.textContent = msg;
    $('toast-wrap').appendChild(t);
    setTimeout(function () {
      t.classList.add('out');
      setTimeout(function () { t.remove(); }, 340);
    }, 2600);
  }
  UI.toast = toast;

  /* ---------------- üst bar ---------------- */
  function paintTop() {
    var li = Store.levelInfo();
    $('lvl-badge').textContent = 'Sv ' + li.level;
    $('player-title').textContent = Store.title();
    $('xp-fill').style.width = li.pct + '%';
    $('xp-text').textContent = li.into + ' / ' + li.need + ' XP';
    $('coin-count').textContent = Store.data.coins;
    $('best-streak').textContent = Store.data.bestStreak;
  }
  UI.paintTop = paintTop;

  /* ---------------- bölüm haritası ---------------- */
  function paintMap() {
    var grid = $('section-grid');
    grid.innerHTML = '';
    KPSS.SECTIONS.forEach(function (s, idx) {
      var st = Store.sectionStats(s.id);
      var card = document.createElement('button');
      card.className = 'sec-card';
      card.style.setProperty('--c', s.color);
      card.style.animationDelay = (idx * 0.055) + 's';

      var flag = st.mastery >= 80 ? '🏆' : st.mastery >= 50 ? '🥈' : st.mastery >= 20 ? '🥉' : '';
      var lvl = Math.floor(st.mastery / 20) + 1;

      card.innerHTML =
        (flag ? '<span class="sec-flag">' + flag + '</span>' : '') +
        '<div class="sec-top">' +
          '<div class="sec-emoji">' + s.emoji + '</div>' +
          '<div><div class="sec-name">' + s.name + '</div>' +
          '<div class="sec-tag">' + s.tag + '</div></div>' +
        '</div>' +
        '<div class="sec-mid">' +
          '<span class="sec-lvl">Kademe ' + lvl + '</span>' +
          '<span class="sec-qn">' + st.total + ' soru</span>' +
        '</div>' +
        '<div class="sec-track"><div class="sec-fill" style="width:' + st.mastery + '%"></div></div>' +
        '<div class="sec-bot">' +
          '<span class="mst">Hakimiyet ' + st.mastery + '%</span>' +
          '<span>' + (st.weak ? '🩹 ' + st.weak + ' eksik' : (st.seen ? '✔ ' + st.solid + ' sağlam' : 'hiç oynanmadı')) + '</span>' +
        '</div>';

      card.onclick = function () { SFX.click(); openSetup(s.id); };
      card.onmouseenter = function () { SFX.hover(); };
      grid.appendChild(card);
    });

    var om = Store.overallMastery();
    $('overall-pct').textContent = om + '%';
    setTimeout(function () { $('overall-fill').style.width = om + '%'; }, 60);

    var weak = Store.weakQuestions(null).length;
    $('mistake-count').textContent = weak ? weak + ' soru bekliyor' : 'şimdilik boş 🎉';
    $('btn-mistake-camp').disabled = weak < 3;

    var bc = Object.keys(Store.data.badges).length;
    $('badge-count-lbl').textContent = bc + ' / ' + Engine.BADGES.length + ' kazanıldı';
  }
  UI.paintMap = paintMap;

  /* ---------------- tur kurulumu ---------------- */
  function openSetup(sectionId) {
    setup.sectionId = sectionId;
    var isSpecial = sectionId === 'weak' || sectionId === 'mixed';
    var s = isSpecial ? null : KPSS.getSection(sectionId);

    document.documentElement.style.setProperty('--sec', s ? s.color : '#7c5cff');

    if (sectionId === 'weak') {
      $('setup-emoji').textContent = '🩹';
      $('setup-title').textContent = 'Hata Kampı';
      $('setup-sub').textContent = 'Sadece daha önce yanlış yaptığın sorular. Borcunu kapat.';
    } else if (sectionId === 'mixed') {
      $('setup-emoji').textContent = '🎲';
      $('setup-title').textContent = 'Karışık Arena';
      $('setup-sub').textContent = 'Dokuz bölümün tamamından rastgele sorular. Gerçek sınav hissi.';
    } else {
      $('setup-emoji').textContent = s.emoji;
      $('setup-title').textContent = s.name;
      $('setup-sub').textContent = 'Kaynak: ' + s.src;
    }

    var box = $('setup-stats');
    if (isSpecial) {
      var pool = sectionId === 'weak' ? Store.weakQuestions(null).length : KPSS.totalQuestions();
      box.innerHTML = '<div class="sstat"><b>' + pool + '</b><span>Havuz</span></div>' +
        '<div class="sstat"><b>' + Store.data.rounds + '</b><span>Toplam Tur</span></div>' +
        '<div class="sstat"><b>' + Store.data.bestStreak + '</b><span>Rekor Seri</span></div>';
    } else {
      var st = Store.sectionStats(sectionId);
      box.innerHTML =
        '<div class="sstat"><b>' + st.mastery + '%</b><span>Hakimiyet</span></div>' +
        '<div class="sstat"><b>' + st.total + '</b><span>Soru</span></div>' +
        '<div class="sstat"><b>' + st.solid + '</b><span>Sağlam</span></div>' +
        '<div class="sstat"><b>' + st.weak + '</b><span>Eksik</span></div>';
    }

    /* havuz küçükse uzun tur seçeneklerini kapat */
    var poolSize = sectionId === 'weak' ? Store.weakQuestions(null).length
      : sectionId === 'mixed' ? KPSS.totalQuestions()
      : (KPSS.BANKS[sectionId] || []).length;
    var chips = $('len-row').children;
    for (var i = 0; i < chips.length; i++) {
      var n = +chips[i].dataset.len;
      chips[i].disabled = n > poolSize;
      chips[i].style.opacity = n > poolSize ? .3 : '';
    }
    if (setup.len > poolSize) {
      setup.len = poolSize >= 10 ? 10 : (poolSize >= 5 ? 5 : poolSize);
      syncChips();
    }

    Store.data.lastSection = sectionId;
    Store.save();
    show('scr-setup');
  }
  UI.openSetup = openSetup;

  function syncChips() {
    var chips = $('len-row').children;
    for (var i = 0; i < chips.length; i++) {
      chips[i].classList.toggle('active', +chips[i].dataset.len === setup.len);
    }
    var modes = $('mode-row').children;
    for (var j = 0; j < modes.length; j++) {
      modes[j].classList.toggle('active', modes[j].dataset.mode === setup.mode);
    }
  }
  UI.syncChips = syncChips;
  UI.setup = setup;

  /* ---------------- tur başlat ---------------- */
  function startRound() {
    R = Engine.buildRound({ sectionId: setup.sectionId, len: setup.len, mode: setup.mode });
    if (!R) { toast('Bu bölümün soru bankası henüz boş.', 'warn'); return; }

    var color = R.section ? R.section.color : (setup.sectionId === 'weak' ? '#ff4f6d' : '#7c5cff');
    document.documentElement.style.setProperty('--sec', color);

    $('q-total').textContent = '/' + R.questions.length;
    $('score-num').textContent = '0';
    $('streak-num').textContent = '0';
    $('streak-box').classList.remove('hot');

    /* boss paneli */
    var bp = $('boss-panel');
    if (R.cfg.boss) {
      bp.classList.remove('hidden');
      var bf = $('boss-face');
      bf.className = 'boss-face';
      bf.textContent = R.section ? R.section.bossEmoji : '👹';
      $('boss-name').textContent = R.section ? R.section.boss : 'Karışık Boss';
      $('boss-fill').style.width = '100%';
      $('boss-hp').textContent = R.bossHp + ' / ' + R.bossMax;
    } else bp.classList.add('hidden');

    paintHearts();
    $('timer-wrap').classList.toggle('hidden', !R.cfg.timer);
    show('scr-quiz');
    renderQuestion();
  }
  UI.startRound = startRound;

  function paintHearts() {
    var h = $('hearts');
    h.innerHTML = '';
    if (!R.cfg.hearts) return;
    for (var i = 0; i < R.cfg.hearts; i++) {
      var s = document.createElement('span');
      s.className = 'heart' + (i < R.cfg.hearts - R.hearts ? ' lost' : '');
      s.textContent = '❤️';
      h.appendChild(s);
    }
  }

  /* ---------------- soru göster ---------------- */
  function renderQuestion() {
    locked = false;
    eliminated = [];
    var item = R.questions[R.i];
    var q = item.ref;

    $('q-index').textContent = R.i + 1;
    $('q-topic').textContent = q.t;
    $('q-topic').title = q.t;
    $('prog-fill').style.width = ((R.i) / R.questions.length * 100) + '%';
    $('q-diff').textContent = ['', '●', '●●', '●●●'][q.d] || '●●';
    $('q-diff').style.color = ['', '#22d67f', '#ffc93c', '#ff4f6d'][q.d] || '#ffc93c';
    $('q-text').textContent = q.q;

    var card = $('q-card');
    card.classList.remove('shake');
    if (Store.data.settings.motion) { card.style.animation = 'none'; void card.offsetWidth; card.style.animation = ''; }

    var box = $('options');
    box.innerHTML = '';
    item.options.forEach(function (text, i) {
      var b = document.createElement('button');
      b.className = 'opt';
      b.innerHTML = '<span class="opt-key">' + LETTERS[i] + '</span><span class="opt-txt">' + esc(text) + '</span>';
      b.onclick = function () { answer(i, b); };
      b.onmouseenter = function () { if (!locked) SFX.hover(); };
      box.appendChild(b);
    });

    /* joker butonları */
    $('btn-5050').disabled = false;
    $('btn-hint').disabled = false;
    $('btn-skip').disabled = false;

    if (R.cfg.timer) startTimer();
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------------- sayaç ---------------- */
  function startTimer() {
    stopTimer();
    timeLeft = R.cfg.timer;
    var wrap = $('timer-wrap');
    wrap.classList.remove('panic');
    $('timer-fill').classList.remove('danger');
    $('timer-fill').style.width = '100%';
    $('timer-num').textContent = timeLeft;

    timerId = setInterval(function () {
      timeLeft--;
      $('timer-num').textContent = Math.max(0, timeLeft);
      $('timer-fill').style.width = (timeLeft / R.cfg.timer * 100) + '%';
      if (timeLeft <= 5) {
        $('timer-fill').classList.add('danger');
        wrap.classList.add('panic');
        if (timeLeft > 0) SFX.tick();
      }
      if (timeLeft <= 0) { stopTimer(); timeUp(); }
    }, 1000);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  function timeUp() {
    if (locked) return;
    locked = true;
    var item = R.questions[R.i];
    revealOptions(-1);
    R.wrong++;
    R.streak = 0;
    Store.recordAnswer(item.ref.id, false, false);
    R.results.push({ item: item, chosen: -1, ok: false, timeout: true, skipped: false });
    $('streak-num').textContent = '0';
    $('streak-box').classList.remove('hot');
    popFeedback('⏰ Süre bitti!', '#ff9f45');
    SFX.wrong();
    FX.shake(360);
    loseHeart();
    afterAnswer();
  }

  /* ---------------- cevap ---------------- */
  function answer(chosen, btn) {
    if (locked) return;
    locked = true;
    stopTimer();

    var item = R.questions[R.i];
    var ok = chosen === item.answer;
    var secLeft = R.cfg.timer ? timeLeft : null;

    revealOptions(chosen);
    Store.recordAnswer(item.ref.id, ok, false);
    R.results.push({ item: item, chosen: chosen, ok: ok, timeout: false, skipped: false });

    if (ok) {
      R.streak++;
      if (R.streak > R.bestStreak) R.bestStreak = R.streak;
      if (R.streak > Store.data.bestStreak) { Store.data.bestStreak = R.streak; Store.save(); }
      var pts = Engine.scoreFor(R, secLeft);
      R.score += pts;
      R.correct++;

      $('score-num').textContent = R.score;
      $('streak-num').textContent = R.streak;
      $('streak-box').classList.toggle('hot', R.streak >= 3);

      SFX.correct(R.streak);
      FX.burstAt(btn, 22, ['#22d67f', '#00e5c0', '#ffc93c']);
      popFeedback(pickPraise(R.streak) + ' +' + pts, '#22d67f');
      if (R.streak >= 3) popCombo(R.streak);

      if (R.cfg.boss) hitBoss();
    } else {
      R.wrong++;
      R.streak = 0;
      $('streak-num').textContent = '0';
      $('streak-box').classList.remove('hot');
      SFX.wrong();
      $('q-card').classList.add('shake');
      FX.shake(400);
      popFeedback('Yanlış — tur sonunda açıklayacağım', '#ff4f6d');
      loseHeart();
    }

    paintTop();
    afterAnswer();
  }

  var PRAISE = ['Doğru! ✅', 'Harika! 🎯', 'Tam isabet! 💥', 'Bildin! 🌟', 'Süper! ⚡', 'Efsane! 🔥'];
  function pickPraise(streak) {
    if (streak >= 8) return 'DURDURULAMAZ! 🚀';
    if (streak >= 5) return 'ÇOK İYİ! 🔥';
    return PRAISE[(Math.random() * PRAISE.length) | 0];
  }

  function revealOptions(chosen) {
    var item = R.questions[R.i];
    var opts = $('options').children;
    for (var i = 0; i < opts.length; i++) {
      opts[i].classList.add('locked');
      if (i === item.answer) {
        opts[i].classList.add('correct');
        opts[i].insertAdjacentHTML('beforeend', '<span class="opt-mark">✓</span>');
      } else if (i === chosen) {
        opts[i].classList.add('wrong');
        opts[i].insertAdjacentHTML('beforeend', '<span class="opt-mark">✗</span>');
      } else {
        opts[i].classList.add('dimmed');
      }
    }
    $('btn-5050').disabled = true;
    $('btn-hint').disabled = true;
    $('btn-skip').disabled = true;
  }

  function popFeedback(txt, color) {
    var el = $('feedback-pop');
    el.textContent = txt;
    el.style.color = color;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
  }

  function popCombo(n) {
    var el = $('combo-pop');
    el.textContent = n + 'x SERİ!';
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    SFX.combo(n);
  }

  /* ---------------- boss ---------------- */
  function hitBoss() {
    var dmg = Engine.damageFor(R);
    R.bossHp = Math.max(0, R.bossHp - dmg);
    $('boss-fill').style.width = (R.bossHp / R.bossMax * 100) + '%';
    $('boss-hp').textContent = R.bossHp + ' / ' + R.bossMax;
    var bf = $('boss-face');
    bf.classList.remove('hit'); void bf.offsetWidth; bf.classList.add('hit');
    SFX.hit();
    if (R.bossHp <= 0 && !R.bossDown) {
      R.bossDown = true;
      bf.classList.add('dead');
      SFX.bossDown();
      FX.confetti(110);
      toast('👹 ' + (R.section ? R.section.boss : 'Boss') + ' devrildi!');
    }
  }

  function loseHeart() {
    if (!R.cfg.hearts) return;
    R.hearts--;
    var hs = $('hearts').children;
    var idx = R.cfg.hearts - R.hearts - 1;
    if (hs[idx]) {
      hs[idx].classList.add('breaking');
      setTimeout(function () { hs[idx].classList.add('lost'); }, 300);
    }
    SFX.heartLost();
    if (R.hearts <= 0) R.dead = true;
  }

  /* ---------------- sonraki soru ---------------- */
  function afterAnswer() {
    var delay = Store.data.settings.autonext ? 1250 : 0;

    if (!Store.data.settings.autonext) {
      var box = $('options');
      var nb = document.createElement('button');
      nb.className = 'btn btn-primary btn-block';
      nb.style.marginTop = '10px';
      nb.textContent = (R.i + 1 >= R.questions.length || R.dead) ? 'Sonuçları gör →' : 'Sonraki soru →';
      nb.onclick = function () { SFX.click(); next(); };
      box.appendChild(nb);
      return;
    }
    setTimeout(next, delay);
  }

  function next() {
    if (R.dead) { finish(); return; }
    R.i++;
    if (R.i >= R.questions.length) { finish(); return; }
    renderQuestion();
  }

  /* ---------------- jokerler ---------------- */
  function use5050() {
    if (locked) return;
    if (!Store.spend(15)) { toast('Altın yetmiyor 🪙', 'warn'); return; }
    R.usedTools++;
    var item = R.questions[R.i];
    var wrongIdx = [];
    for (var i = 0; i < item.options.length; i++) if (i !== item.answer) wrongIdx.push(i);
    wrongIdx = Engine.shuffle(wrongIdx).slice(0, Math.min(2, wrongIdx.length));
    var opts = $('options').children;
    wrongIdx.forEach(function (i) { opts[i].classList.add('eliminated'); eliminated.push(i); });
    $('btn-5050').disabled = true;
    SFX.coin(); paintTop();
  }

  function useHint() {
    if (locked) return;
    if (!Store.spend(10)) { toast('Altın yetmiyor 🪙', 'warn'); return; }
    R.usedTools++;
    var q = R.questions[R.i].ref;
    var words = String(q.e).split(/\s+/).slice(0, 14).join(' ');
    toast('💡 ' + q.t + ' → ' + words + '…');
    $('btn-hint').disabled = true;
    SFX.coin(); paintTop();
  }

  function useSkip() {
    if (locked) return;
    if (!Store.spend(25)) { toast('Altın yetmiyor 🪙', 'warn'); return; }
    R.usedTools++;
    locked = true;
    stopTimer();
    var item = R.questions[R.i];
    revealOptions(-1);
    R.skipped++;
    Store.recordAnswer(item.ref.id, false, true);
    R.results.push({ item: item, chosen: -1, ok: false, timeout: false, skipped: true });
    popFeedback('⏭️ Pas geçildi', '#a2a7cc');
    SFX.coin(); paintTop();
    afterAnswer();
  }

  UI.use5050 = use5050;
  UI.useHint = useHint;
  UI.useSkip = useSkip;

  /* ---------------- tur sonu ---------------- */
  function finish() {
    stopTimer();
    $('prog-fill').style.width = '100%';

    var D = Store.data;
    D.rounds++;

    var answered = R.correct + R.wrong + R.skipped;
    var acc = answered ? Math.round(R.correct / answered * 100) : 0;

    /* XP: doğru bol, yanlış da az da olsa ödüllü — vazgeçirmemek için */
    var xp = R.correct * 14 + R.wrong * 4 + R.skipped * 1;
    if (R.wrong === 0 && R.skipped === 0 && R.questions.length >= 5) xp += 30;      // kusursuz bonusu
    if (R.cfg.boss && R.bossDown) xp += 45;
    xp += Math.min(R.bestStreak, 12) * 3;

    var coins = R.correct * 6 + (R.wrong === 0 ? 25 : 0) + (R.bossDown ? 40 : 0);

    var beforeLvl = Store.levelInfo().level;
    Store.addXp(xp);
    Store.addCoins(coins);
    var after = Store.levelInfo();
    var leveled = after.level > beforeLvl;

    /* --- başlık --- */
    var emoji, title, sub;
    if (R.dead && R.hearts <= 0) {
      emoji = '💀'; title = 'Canların bitti!';
      sub = R.correct + ' doğru yaptın. Yanlışlarını oku, tekrar dene.';
    } else if (R.cfg.boss && R.bossDown) {
      emoji = '🏆'; title = 'Boss devrildi!';
      sub = 'Efsanevi performans. ' + (R.section ? R.section.boss : 'Boss') + ' yenildi.';
    } else if (acc === 100) {
      emoji = '💯'; title = 'Kusursuz tur!';
      sub = 'Tek yanlış yok. Bu bölüm sende.';
    } else if (acc >= 80) {
      emoji = '🎉'; title = 'Çok iyi!';
      sub = 'Neredeyse tamam. Aşağıdaki ' + R.wrong + ' soruyu bir oku, bitti.';
    } else if (acc >= 50) {
      emoji = '💪'; title = 'Fena değil!';
      sub = 'Yarısından fazlası doğru. Yanlışları okuyunca bir sonraki tur çok daha iyi olacak.';
    } else {
      emoji = '🌱'; title = 'Başlangıç bu!';
      sub = 'Bu konu yeni. Aşağıdaki açıklamaları oku — bu sorular tekrar gelecek.';
    }
    $('result-emoji').textContent = emoji;
    $('result-title').textContent = title;
    $('result-sub').textContent = sub;

    /* --- sayılar --- */
    $('res-correct').textContent = R.correct;
    $('res-wrong').textContent = R.wrong;
    $('res-skip').textContent = R.skipped;
    $('res-streak').textContent = R.bestStreak;
    $('res-score').textContent = R.score;
    $('res-coins').textContent = '+' + coins;
    $('acc-pct').textContent = acc + '%';

    var ring = $('ring-fg');
    ring.style.stroke = acc >= 80 ? '#22d67f' : acc >= 50 ? '#ffc93c' : '#ff4f6d';
    ring.style.strokeDashoffset = 327;
    setTimeout(function () { ring.style.strokeDashoffset = 327 - (327 * acc / 100); }, 120);

    $('res-xp').textContent = '+' + xp;
    $('res-xp-fill').style.width = '0%';
    $('res-xp-text').textContent = 'Seviye ' + after.level + ' — ' + after.into + ' / ' + after.need + ' XP';
    setTimeout(function () { $('res-xp-fill').style.width = after.pct + '%'; }, 260);

    var lb = $('levelup-banner');
    lb.classList.toggle('hidden', !leveled);
    if (leveled) {
      $('levelup-lvl').textContent = 'Seviye ' + after.level + ' — ' + Store.title();
      setTimeout(function () { SFX.levelup(); FX.fountain(70); }, 500);
    }

    /* --- madalyalar --- */
    var got = Engine.checkBadges(R);
    var bd = $('badge-drops');
    bd.innerHTML = '';
    bd.classList.toggle('hidden', !got.length);
    got.forEach(function (b, i) {
      var el = document.createElement('div');
      el.className = 'badge-drop';
      el.style.animationDelay = (0.5 + i * 0.22) + 's';
      el.innerHTML = '<span class="bd-emoji">' + b.emoji + '</span><div><b>Yeni madalya: ' + b.name + '</b><small>' + b.desc + '</small></div>';
      bd.appendChild(el);
      setTimeout(function () { SFX.badge(); }, 620 + i * 240);
    });

    /* --- yanlış analizi --- */
    paintReview();

    /* --- ses & konfeti --- */
    var good = acc >= 70;
    setTimeout(function () { SFX.finish(good); }, 220);
    if (acc === 100) FX.confetti(130);
    else if (good) FX.confetti(60);

    Store.save();
    paintTop();
    show('scr-result');

    /* yanlış varsa "sadece yanlışlarım" düğmesini aç */
    var badOnes = R.results.filter(function (r) { return !r.ok; });
    $('btn-retry-wrong').disabled = badOnes.length < 3;
    $('btn-retry-wrong').style.display = badOnes.length ? '' : 'none';
  }

  /* ---------------- YANLIŞ AÇIKLAMALARI ---------------- */
  function paintReview() {
    var list = $('review-list');
    list.innerHTML = '';
    var bad = R.results.filter(function (r) { return !r.ok; });

    if (!bad.length) {
      $('review-title').textContent = '🔍 Tur Analizi';
      list.innerHTML =
        '<div class="all-correct">' +
          '<div class="ac-emoji">🌟</div>' +
          '<h4>Açıklayacak yanlış yok!</h4>' +
          '<p class="sub">Hepsini doğru bildin. Bir üst zorluğa geç ya da yeni bir bölüm dene.</p>' +
        '</div>';
      return;
    }

    $('review-title').textContent = '🔍 Yanlışlarının Açıklaması (' + bad.length + ')';

    bad.forEach(function (r, n) {
      var q = r.item.ref;
      var sec = KPSS.getSection(q.sec);
      var kind = r.skipped ? 'skipped' : (r.timeout ? 'timeout' : '');
      var kindLbl = r.skipped ? 'Pas geçtin' : (r.timeout ? 'Süre bitti' : 'Yanlış');

      var yours = r.chosen >= 0
        ? '<div class="rev-ans yours"><span class="lbl">Senin cevabın</span><span>' + esc(r.item.options[r.chosen]) + '</span></div>'
        : '<div class="rev-ans yours"><span class="lbl">Senin cevabın</span><span><i>' + (r.skipped ? 'Pas geçtin' : 'Süre doldu, cevap vermedin') + '</i></span></div>';

      var el = document.createElement('div');
      el.className = 'rev-item ' + kind;
      el.style.animationDelay = (n * 0.08) + 's';
      el.innerHTML =
        '<div class="rev-top">' +
          '<span class="rev-num">' + (n + 1) + '</span>' +
          '<span class="rev-badge">' + kindLbl + '</span>' +
          '<span class="rev-sec">' + (sec ? sec.emoji + ' ' + sec.name : '') + '</span>' +
          '<span class="rev-sec">' + esc(q.t) + '</span>' +
        '</div>' +
        '<p class="rev-q">' + esc(q.q) + '</p>' +
        '<div class="rev-answers">' +
          yours +
          '<div class="rev-ans truth"><span class="lbl">Doğru cevap</span><span>' + esc(r.item.origAnswerText) + '</span></div>' +
        '</div>' +
        '<div class="rev-why"><b>Neden?</b>' + esc(q.e) + '</div>';
      list.appendChild(el);
    });
  }

  /* ---------------- madalya ekranı ---------------- */
  function paintBadges() {
    var g = $('badge-grid');
    g.innerHTML = '';
    Engine.BADGES.forEach(function (b) {
      var got = !!Store.data.badges[b.id];
      var c = document.createElement('div');
      c.className = 'badge-cell ' + (got ? 'unlocked' : 'locked');
      c.innerHTML = '<span class="be">' + (got ? b.emoji : '🔒') + '</span><b>' + b.name + '</b><small>' + b.desc + '</small>';
      g.appendChild(c);
    });
  }
  UI.paintBadges = paintBadges;

  UI.currentRound = function () { return R; };
  UI.replayWrong = function () {
    /* yanlış yapılanları hemen tekrar sor */
    var bad = R.results.filter(function (r) { return !r.ok; }).map(function (r) { return r.ref || r.item.ref; });
    if (bad.length < 1) return;
    setup.sectionId = 'weak';
    setup.len = Math.min(bad.length, 20);
    startRound();
  };

  window.UI = UI;
})();

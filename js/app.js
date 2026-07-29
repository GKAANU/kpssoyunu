/* ============================================================
   app.js — olay bağlama ve başlatma
   ============================================================ */
(function () {
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- ayarları uygula ---------- */
  function applySettings() {
    var s = Store.data.settings;
    document.body.classList.toggle('no-motion', !s.motion);
    document.body.classList.toggle('bigtext', !!s.bigtext);
    $('set-sound').checked = s.sound;
    $('set-motion').checked = s.motion;
    $('set-bigtext').checked = !!s.bigtext;
    $('set-autonext').checked = s.autonext;
  }

  function bindSetting(id, key) {
    $(id).addEventListener('change', function () {
      Store.data.settings[key] = this.checked;
      Store.save();
      applySettings();
      SFX.click();
    });
  }

  /* ---------- splash ---------- */
  function paintSplash() {
    $('splash-qcount').textContent = KPSS.totalQuestions();
    $('splash-seccount').textContent = KPSS.SECTIONS.length;
    var D = Store.data;
    if (D.rounds > 0) {
      $('splash-resume').textContent = D.rounds + ' tur • Seviye ' + Store.levelInfo().level;
    }
  }

  /* ---------- olaylar ---------- */
  function bind() {
    $('btn-start').onclick = function () {
      SFX.click();
      UI.paintTop(); UI.paintMap(); UI.show('scr-map');
    };

    $('btn-home').onclick = function () {
      SFX.click();
      UI.paintTop(); UI.paintMap(); UI.show('scr-map');
    };

    $('btn-settings').onclick = function () { SFX.click(); $('modal-settings').classList.remove('hidden'); };
    $('btn-close-settings').onclick = function () { SFX.click(); $('modal-settings').classList.add('hidden'); };
    $('modal-settings').addEventListener('click', function (e) {
      if (e.target === this) this.classList.add('hidden');
    });

    $('btn-reset').onclick = function () {
      if (!confirm('Tüm ilerleme, seviye, madalya ve soru geçmişin silinecek. Emin misin?')) return;
      Store.reset();
      try { localStorage.removeItem('kpss-played'); localStorage.removeItem('kpss-bosskills'); } catch (e) {}
      applySettings();
      UI.paintTop(); UI.paintMap();
      $('modal-settings').classList.add('hidden');
      UI.toast('İlerleme sıfırlandı. Temiz sayfa!');
    };

    /* harita aksiyonları */
    $('btn-mistake-camp').onclick = function () { SFX.click(); UI.openSetup('weak'); };
    $('btn-mixed').onclick = function () { SFX.click(); UI.openSetup('mixed'); };
    $('btn-badges').onclick = function () { SFX.click(); UI.paintBadges(); UI.show('scr-badges'); };

    /* setup */
    Array.prototype.forEach.call($('len-row').children, function (c) {
      c.onclick = function () {
        if (this.disabled) return;
        UI.setup.len = +this.dataset.len;
        UI.syncChips(); SFX.click();
      };
    });
    Array.prototype.forEach.call($('mode-row').children, function (c) {
      c.onclick = function () {
        UI.setup.mode = this.dataset.mode;
        UI.syncChips(); SFX.click();
      };
    });
    $('btn-go').onclick = function () { SFX.click(); UI.startRound(); };

    /* jokerler */
    $('btn-5050').onclick = function () { UI.use5050(); };
    $('btn-hint').onclick = function () { UI.useHint(); };
    $('btn-skip').onclick = function () { UI.useSkip(); };

    /* sonuç */
    $('btn-again').onclick = function () { SFX.click(); UI.startRound(); };
    $('btn-retry-wrong').onclick = function () {
      SFX.click();
      UI.openSetup('weak');
    };
    $('btn-to-map').onclick = function () {
      SFX.click();
      UI.paintTop(); UI.paintMap(); UI.show('scr-map');
    };

    /* klavye: 1-5 / A-E ile cevap, Enter ile ilerle */
    document.addEventListener('keydown', function (e) {
      var quizOpen = $('scr-quiz').classList.contains('active');
      if (!quizOpen) {
        if (e.key === 'Enter' && $('scr-splash').classList.contains('active')) $('btn-start').click();
        return;
      }
      var map = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, a: 0, b: 1, c: 2, d: 3, e: 4 };
      var k = e.key.toLowerCase();
      if (map[k] !== undefined) {
        var opts = $('options').getElementsByClassName('opt');
        if (opts[map[k]] && !opts[map[k]].classList.contains('locked')) opts[map[k]].click();
      }
      if (e.key === 'Enter') {
        var nb = $('options').querySelector('.btn-primary');
        if (nb) nb.click();
      }
    });
  }

  /* ---------- başla ---------- */
  function boot() {
    /* bankası boş bölümleri gizle (henüz yazılmamışsa haritayı kirletmesin) */
    KPSS.SECTIONS = KPSS.SECTIONS.filter(function (s) {
      return (KPSS.BANKS[s.id] || []).length > 0;
    });

    if (!KPSS.SECTIONS.length) {
      document.getElementById('app').innerHTML =
        '<div style="padding:60px 20px;text-align:center">' +
        '<h2>Soru bankası bulunamadı</h2>' +
        '<p class="sub">js/banks/ altındaki dosyalar yüklenemedi.</p></div>';
      return;
    }

    applySettings();
    paintSplash();
    UI.paintTop();
    bind();
    UI.syncChips();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

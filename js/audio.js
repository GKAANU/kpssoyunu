/* ============================================================
   audio.js — WebAudio ile üretilen ses efektleri.
   Dış dosya yok, tarayıcıda sentezlenir (file:// ile de çalışır).
   ============================================================ */
(function () {
  var ctx = null;

  function ac() {
    if (!ctx) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function on() { return Store.data.settings.sound; }

  /** tek nota */
  function tone(freq, dur, type, vol, delay, slideTo) {
    var c = ac(); if (!c) return;
    var t0 = c.currentTime + (delay || 0);
    var osc = c.createOscillator();
    var g = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(vol == null ? 0.16 : vol, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g); g.connect(c.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.03);
  }

  /** gürültü patlaması (vuruş / hata) */
  function noise(dur, vol, filterFreq) {
    var c = ac(); if (!c) return;
    var len = Math.floor(c.sampleRate * dur);
    var buf = c.createBuffer(1, len, c.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    var src = c.createBufferSource(); src.buffer = buf;
    var f = c.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = filterFreq || 900;
    var g = c.createGain(); g.gain.value = vol == null ? 0.13 : vol;
    src.connect(f); f.connect(g); g.connect(c.destination);
    src.start();
  }

  var SFX = {
    correct: function (combo) {
      if (!on()) return;
      var base = 523.25;                       // do
      var step = Math.min(combo || 0, 8);
      var f = base * Math.pow(1.0595, step * 2);
      tone(f, 0.11, 'triangle', 0.14, 0);
      tone(f * 1.5, 0.16, 'triangle', 0.11, 0.07);
      tone(f * 2, 0.2, 'sine', 0.07, 0.14);
    },
    wrong: function () {
      if (!on()) return;
      tone(196, 0.2, 'sawtooth', 0.1, 0, 120);
      noise(0.16, 0.08, 620);
    },
    click: function () { if (on()) tone(700, 0.045, 'square', 0.05); },
    hover: function () { if (on()) tone(1100, 0.03, 'sine', 0.025); },
    tick: function () { if (on()) tone(1500, 0.035, 'square', 0.045); },
    combo: function (n) {
      if (!on()) return;
      for (var i = 0; i < 3; i++) tone(660 * Math.pow(1.26, i) + n * 12, 0.1, 'triangle', 0.09, i * 0.055);
    },
    levelup: function () {
      if (!on()) return;
      [523, 659, 784, 1047, 1319].forEach(function (f, i) {
        tone(f, 0.28, 'triangle', 0.13, i * 0.09);
      });
    },
    badge: function () {
      if (!on()) return;
      [784, 988, 1319].forEach(function (f, i) { tone(f, 0.34, 'sine', 0.12, i * 0.11); });
    },
    hit: function () { if (on()) { noise(0.13, 0.16, 420); tone(110, 0.14, 'square', 0.11, 0, 62); } },
    heartLost: function () {
      if (!on()) return;
      tone(330, 0.3, 'sine', 0.13, 0, 90);
      noise(0.2, 0.1, 380);
    },
    bossDown: function () {
      if (!on()) return;
      noise(0.6, 0.2, 260);
      [220, 165, 110, 82].forEach(function (f, i) { tone(f, 0.42, 'sawtooth', 0.13, i * 0.11); });
      [659, 784, 1047, 1319].forEach(function (f, i) { tone(f, 0.3, 'triangle', 0.1, 0.5 + i * 0.1); });
    },
    finish: function (good) {
      if (!on()) return;
      var seq = good ? [523, 659, 784, 1047] : [440, 392, 330];
      seq.forEach(function (f, i) { tone(f, 0.3, 'triangle', 0.12, i * 0.12); });
    },
    coin: function () {
      if (!on()) return;
      tone(1319, 0.07, 'square', 0.08);
      tone(1760, 0.14, 'square', 0.06, 0.06);
    }
  };

  window.SFX = SFX;
  /* ilk dokunuşta audio context'i aç (mobil kısıtı) */
  ['pointerdown', 'keydown'].forEach(function (ev) {
    window.addEventListener(ev, function () { ac(); }, { once: true });
  });
})();

/* ============================================================
   fx.js — canvas parçacık efektleri (konfeti, patlama, yıldız)
   ============================================================ */
(function () {
  var cv = document.getElementById('fx');
  var cx = cv.getContext('2d');
  var parts = [];
  var running = false;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + 'px';
    cv.style.height = innerHeight + 'px';
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  addEventListener('resize', resize);

  function motionOn() { return Store.data.settings.motion; }

  function loop() {
    if (!parts.length) { running = false; cx.clearRect(0, 0, innerWidth, innerHeight); return; }
    running = true;
    cx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = parts.length - 1; i >= 0; i--) {
      var p = parts[i];
      p.vy += p.g;
      p.vx *= p.fr;
      p.vy *= p.fr;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.life--;
      var a = Math.max(0, Math.min(1, p.life / p.maxLife));
      cx.save();
      cx.globalAlpha = a;
      cx.translate(p.x, p.y);
      cx.rotate(p.rot);
      cx.fillStyle = p.c;
      if (p.shape === 'rect') {
        cx.fillRect(-p.r, -p.r * 0.45, p.r * 2, p.r * 0.9);
      } else if (p.shape === 'star') {
        star(cx, 0, 0, 5, p.r, p.r * 0.45);
      } else {
        cx.beginPath(); cx.arc(0, 0, p.r, 0, 6.2832); cx.fill();
      }
      cx.restore();
      if (p.life <= 0 || p.y > innerHeight + 60) parts.splice(i, 1);
    }
    requestAnimationFrame(loop);
  }

  function star(c, x, y, n, ro, ri) {
    c.beginPath();
    for (var i = 0; i < n * 2; i++) {
      var r = i % 2 ? ri : ro;
      var a = (Math.PI / n) * i - Math.PI / 2;
      c[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * r, y + Math.sin(a) * r);
    }
    c.closePath(); c.fill();
  }

  function push(p) {
    parts.push(p);
    if (parts.length > 620) parts.splice(0, parts.length - 620);
    if (!running) requestAnimationFrame(loop);
  }

  var PAL = ['#7c5cff', '#00e5c0', '#ffc93c', '#ff4f6d', '#22d67f', '#a855f7', '#ff9f45'];

  var FX = {
    /** ekranın üstünden konfeti yağmuru */
    confetti: function (n) {
      if (!motionOn()) return;
      n = n || 70;
      for (var i = 0; i < n; i++) {
        push({
          x: Math.random() * innerWidth,
          y: -20 - Math.random() * 120,
          vx: (Math.random() - 0.5) * 3.4,
          vy: Math.random() * 2.4 + 1.4,
          g: 0.11, fr: 0.995,
          r: 4 + Math.random() * 5,
          rot: Math.random() * 6.28,
          vr: (Math.random() - 0.5) * 0.34,
          c: PAL[(Math.random() * PAL.length) | 0],
          shape: Math.random() < 0.65 ? 'rect' : 'circle',
          life: 150 + Math.random() * 90, maxLife: 200
        });
      }
    },

    /** bir noktadan patlama */
    burst: function (x, y, n, colors) {
      if (!motionOn()) return;
      n = n || 26;
      var pal = colors || PAL;
      for (var i = 0; i < n; i++) {
        var a = (Math.PI * 2 * i) / n + Math.random() * 0.5;
        var sp = 2.6 + Math.random() * 6.5;
        push({
          x: x, y: y,
          vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1.4,
          g: 0.15, fr: 0.965,
          r: 2.6 + Math.random() * 4.4,
          rot: 0, vr: (Math.random() - 0.5) * 0.4,
          c: pal[(Math.random() * pal.length) | 0],
          shape: Math.random() < 0.3 ? 'star' : 'circle',
          life: 44 + Math.random() * 34, maxLife: 74
        });
      }
    },

    /** yukarı doğru yıldız akışı (seviye atlama) */
    fountain: function (n) {
      if (!motionOn()) return;
      n = n || 60;
      for (var i = 0; i < n; i++) {
        push({
          x: innerWidth / 2 + (Math.random() - 0.5) * 160,
          y: innerHeight * 0.72,
          vx: (Math.random() - 0.5) * 5,
          vy: -(7 + Math.random() * 8),
          g: 0.2, fr: 0.99,
          r: 3 + Math.random() * 6,
          rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.35,
          c: ['#ffc93c', '#ff8a3c', '#fff2b8', '#00e5c0'][(Math.random() * 4) | 0],
          shape: 'star',
          life: 90 + Math.random() * 60, maxLife: 150
        });
      }
    },

    /** öğenin merkezinden patlama */
    burstAt: function (el, n, colors) {
      if (!el) return;
      var r = el.getBoundingClientRect();
      FX.burst(r.left + r.width / 2, r.top + r.height / 2, n, colors);
    },

    /** ekran sarsıntısı */
    shake: function (ms) {
      if (!motionOn()) return;
      var app = document.getElementById('app');
      app.style.animation = 'none';
      void app.offsetWidth;
      app.style.animation = 'shakeX ' + (ms || 400) + 'ms cubic-bezier(.22,1,.36,1)';
      setTimeout(function () { app.style.animation = ''; }, (ms || 400) + 40);
    },

    clear: function () { parts.length = 0; cx.clearRect(0, 0, innerWidth, innerHeight); }
  };

  window.FX = FX;
})();

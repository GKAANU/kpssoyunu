/* Soru bankalarını doğrular:  node tools/validate.js  */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
global.window = global;
global.KPSS = undefined;

// bank.js yükle
eval(fs.readFileSync(path.join(root, 'js/bank.js'), 'utf8'));

const bankDir = path.join(root, 'js/banks');
const files = fs.existsSync(bankDir) ? fs.readdirSync(bankDir).filter(f => f.endsWith('.js')) : [];

let hardErrors = 0, warnings = 0;

for (const f of files) {
  try {
    eval(fs.readFileSync(path.join(bankDir, f), 'utf8'));
  } catch (e) {
    console.log(`\x1b[31mSÖZDİZİMİ HATASI\x1b[0m ${f}: ${e.message}`);
    hardErrors++;
  }
}

console.log('\n=== BÖLÜM ÖZETİ ===');
let total = 0;
for (const sec of KPSS.SECTIONS) {
  const bank = KPSS.BANKS[sec.id];
  if (!bank) { console.log(`  ${sec.id.padEnd(14)} — banka YOK`); continue; }
  total += bank.length;

  const seenQ = new Map();
  const topics = new Set();
  const diff = { 1: 0, 2: 0, 3: 0 };
  let answerPos = {};

  bank.forEach((q, i) => {
    const where = `${sec.id}[${i}] ${String(q.q || '').slice(0, 55)}`;

    if (!q.q || typeof q.q !== 'string') { console.log(`\x1b[31m  soru metni yok\x1b[0m ${where}`); hardErrors++; }
    if (!Array.isArray(q.o) || q.o.length < 4) { console.log(`\x1b[31m  şık sayısı <4\x1b[0m ${where}`); hardErrors++; }
    if (typeof q.a !== 'number' || q.a < 0 || (q.o && q.a >= q.o.length)) {
      console.log(`\x1b[31m  cevap indeksi geçersiz (a=${q.a})\x1b[0m ${where}`); hardErrors++;
    }
    if (!q.e || String(q.e).length < 25) { console.log(`\x1b[33m  açıklama kısa/yok\x1b[0m ${where}`); warnings++; }
    if (!q.t) { console.log(`\x1b[33m  konu etiketi yok\x1b[0m ${where}`); warnings++; }

    // aynı şıkkın iki kez geçmesi
    if (Array.isArray(q.o)) {
      const norm = q.o.map(s => String(s).trim().toLowerCase());
      const dup = norm.filter((s, j) => norm.indexOf(s) !== j);
      if (dup.length) { console.log(`\x1b[31m  tekrarlanan şık: "${dup[0]}"\x1b[0m ${where}`); hardErrors++; }
    }

    // aynı soru metni iki kez
    const key = String(q.q).trim().toLowerCase().replace(/\s+/g, ' ');
    if (seenQ.has(key)) { console.log(`\x1b[31m  yinelenen soru (ilk: index ${seenQ.get(key)})\x1b[0m ${where}`); hardErrors++; }
    else seenQ.set(key, i);

    topics.add(q.t);
    diff[q.d] = (diff[q.d] || 0) + 1;
    answerPos[q.a] = (answerPos[q.a] || 0) + 1;
  });

  console.log(`  ${sec.id.padEnd(14)} ${String(bank.length).padStart(3)} soru | ${String(topics.size).padStart(2)} konu | kolay/orta/zor: ${diff[1] || 0}/${diff[2] || 0}/${diff[3] || 0}`);
}

console.log(`\nTOPLAM: ${total} soru, ${files.length} banka dosyası`);
console.log(hardErrors ? `\x1b[31m${hardErrors} HATA\x1b[0m` : '\x1b[32mHata yok\x1b[0m',
            warnings ? `| \x1b[33m${warnings} uyarı\x1b[0m` : '');
process.exit(hardErrors ? 1 : 0);

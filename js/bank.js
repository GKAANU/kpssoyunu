/* ============================================================
   bank.js — bölüm tanımları ve soru bankası kaydı
   Her not PDF'i kendi bölümü. Bankalar js/banks/*.js içinde.
   ============================================================ */
window.KPSS = window.KPSS || {};

KPSS.SECTIONS = [
  {
    id: 'idare',
    name: 'İdare Hukuku ve İdari Yargı',
    tag: 'Hukuk',
    emoji: '🏛️',
    color: '#7c5cff',
    boss: 'Yürütmenin Gölgesi',
    bossEmoji: '🏛️',
    src: '2024.pdf'
  },
  {
    id: 'borclar',
    name: 'Borçlar Hukuku',
    tag: 'Hukuk',
    emoji: '📜',
    color: '#ff7a45',
    boss: 'Sözleşme Ejderi',
    bossEmoji: '🐉',
    src: 'Bor.pdf'
  },
  {
    id: 'ticaret',
    name: 'Ticaret Hukuku',
    tag: 'Hukuk',
    emoji: '💼',
    color: '#00b8d9',
    boss: 'Kambiyo Kralı',
    bossEmoji: '👑',
    src: 'TİCARET HUK. HAP DERS NOTLARI (1).pdf'
  },
  {
    id: 'icra',
    name: 'İcra ve İflas Hukuku',
    tag: 'Hukuk',
    emoji: '⚖️',
    color: '#f5487f',
    boss: 'Haciz Memuru',
    bossEmoji: '🔨',
    src: '19faa5cd6fc61283cee1.pdf'
  },
  {
    id: 'trekonomi',
    name: 'Türkiye Ekonomisi — Ders Notu',
    tag: 'İktisat',
    emoji: '🇹🇷',
    color: '#e5484d',
    boss: 'Kriz Kasırgası',
    bossEmoji: '🌪️',
    src: 'M-TREKODERSNOTU(güncel).pdf'
  },
  {
    id: 'trdonem',
    name: 'Türkiye Ekonomisi — Dönemler',
    tag: 'İktisat',
    emoji: '📅',
    color: '#ffb02e',
    boss: 'Zaman Bekçisi',
    bossEmoji: '⏳',
    src: 'Tr ekonomisi not .pdf'
  },
  {
    id: 'uluslararasi',
    name: 'Uluslararası İktisat',
    tag: 'İktisat',
    emoji: '🌍',
    color: '#22d67f',
    boss: 'Küresel Tüccar',
    bossEmoji: '🚢',
    src: 'Uluslararası iktisat not .pdf'
  },
  {
    id: 'para',
    name: 'Para Teorisi ve Politikası',
    tag: 'İktisat',
    emoji: '💰',
    color: '#00e5c0',
    boss: 'Merkez Bankası Muhafızı',
    bossEmoji: '🏦',
    src: 'J-PARATEOPOLDERSNOTU.pdf'
  },
  {
    id: 'buyume',
    name: 'İktisadi Büyüme ve Kalkınma',
    tag: 'İktisat',
    emoji: '📈',
    color: '#a855f7',
    boss: 'Solow Devi',
    bossEmoji: '🗿',
    src: 'Büyüme ve Kalkınma.pdf'
  },

  /* ---- Sınav tarzı soru bankası bölümleri (3Y Özgün Hukuk Soruları) ----
     Bu bölümlerdeki sorular, şıklar ve çözümler kitabın kendi metnidir.
     Notlardan türetilen bölümlerden ayrı tutulur ki hangisini çalıştığı belli olsun. */
  { id: 'cAnayasa',   name: 'Anayasa Hukuku',       tag: 'Sınav Sorusu', emoji: '📕', color: '#e0245e', boss: 'Kurucu İktidar',   bossEmoji: '📕', src: '3Y Özgün Hukuk Soruları' },
  { id: 'cIdare',     name: 'İdare Hukuku',         tag: 'Sınav Sorusu', emoji: '🏛️', color: '#7c5cff', boss: 'Vesayet Makamı',   bossEmoji: '🏛️', src: '3Y Özgün Hukuk Soruları' },
  { id: 'cIdariUsul', name: 'İdari Usul Hukuku',    tag: 'Sınav Sorusu', emoji: '⚖️', color: '#00b3a4', boss: 'Süre Aşımı',       bossEmoji: '⏳', src: '3Y Özgün Hukuk Soruları' },
  { id: 'cCezaGenel', name: 'Ceza Genel Hukuku',    tag: 'Sınav Sorusu', emoji: '🚨', color: '#ff4d4d', boss: 'Kast ve Taksir',   bossEmoji: '🚨', src: '3Y Özgün Hukuk Soruları' },
  { id: 'cCezaUsul',  name: 'Ceza Usul Hukuku',     tag: 'Sınav Sorusu', emoji: '🔍', color: '#f7931a', boss: 'Koruma Tedbiri',   bossEmoji: '🔍', src: '3Y Özgün Hukuk Soruları' },
  { id: 'cMedeni',    name: 'Medeni Hukuk',         tag: 'Sınav Sorusu', emoji: '👥', color: '#3b82f6', boss: 'Ehliyet Sınavı',   bossEmoji: '👥', src: '3Y Özgün Hukuk Soruları' },
  { id: 'cBorclar',   name: 'Borçlar Hukuku',       tag: 'Sınav Sorusu', emoji: '📜', color: '#ff7a45', boss: 'Sözleşme Ejderi',  bossEmoji: '🐉', src: '3Y Özgün Hukuk Soruları' },
  { id: 'cTicaret',   name: 'Ticaret Hukuku',       tag: 'Sınav Sorusu', emoji: '💼', color: '#0ea5e9', boss: 'Kambiyo Kralı',    bossEmoji: '👑', src: '3Y Özgün Hukuk Soruları' },
  { id: 'cIcra',      name: 'İcra ve İflas Hukuku', tag: 'Sınav Sorusu', emoji: '⚖️', color: '#a855f7', boss: 'Haciz Memuru',     bossEmoji: '📋', src: '3Y Özgün Hukuk Soruları' },

  /* ---- Gerçek çıkmış sorular (taranmış kitaplardan OCR ile) ----
     Şıkların yanında geldiği sınav ve yıl (ör. 2012-KPSS, 2009-Kaymakamlık)
     konu etiketi olarak görünür. Bu bankalar da telifli, depoya gönderilmez. */
  { id: 'xKamu',      name: 'ÇIKMIŞ — Kamu Hukuku',      tag: 'Çıkmış Soru', emoji: '🎯', color: '#22c55e', boss: 'Sınav Kurdu',    bossEmoji: '🎯', src: '4T Hukuk Çıkmış 1. Cilt' },
  { id: 'xOzelHukuk', name: 'ÇIKMIŞ — Özel Hukuk',       tag: 'Çıkmış Soru', emoji: '🎯', color: '#14b8a6', boss: 'İçtihat Avcısı', bossEmoji: '🎯', src: '4T TÜYO Hukuk Çıkmış 2. Cilt' },
  { id: 'xMakroPara', name: 'ÇIKMIŞ — Makro İktisat ve Para', tag: 'Çıkmış Soru', emoji: '🎯', color: '#f59e0b', boss: 'Enflasyon Devi', bossEmoji: '🎯', src: 'Makro İktisat ve Para Çıkmış 2025' },
  { id: 'xMikro',     name: 'ÇIKMIŞ — Mikro İktisat',      tag: 'Çıkmış Soru', emoji: '🎯', color: '#8b5cf6', boss: 'Marjinal Fayda',  bossEmoji: '🎯', src: 'Mikro İktisat Çıkmış 2025' }
];

/* soru bankaları buraya dolar: KPSS.BANKS[sectionId] = [ {...}, ... ] */
KPSS.BANKS = {};

/**
 * Banka kaydı. Her soru:
 *   q  : soru metni
 *   o  : şıklar (dizi, 4-5 adet)
 *   a  : doğru şıkkın o[] içindeki indeksi
 *   e  : tur sonunda gösterilecek açıklama
 *   t  : konu etiketi
 *   d  : zorluk 1|2|3
 * id otomatik atanır (sectionId + sıra no).
 * Aynı bölüm için birden fazla kez çağrılabilir; sorular mevcut bankaya eklenir
 * (büyük dersleri birkaç dosyaya bölebilmek için).
 */
KPSS.registerBank = function (sectionId, questions) {
  var bank = KPSS.BANKS[sectionId] || (KPSS.BANKS[sectionId] = []);
  var offset = bank.length;
  questions.forEach(function (q, i) {
    q.id = sectionId + '-' + String(offset + i + 1).padStart(3, '0');
    q.sec = sectionId;
    if (!q.d) q.d = 2;
    if (!q.t) q.t = 'Genel';
    bank.push(q);
  });
};

KPSS.getSection = function (id) {
  for (var i = 0; i < KPSS.SECTIONS.length; i++) {
    if (KPSS.SECTIONS[i].id === id) return KPSS.SECTIONS[i];
  }
  return null;
};

KPSS.totalQuestions = function () {
  var n = 0;
  for (var k in KPSS.BANKS) n += KPSS.BANKS[k].length;
  return n;
};

KPSS.findQuestion = function (qid) {
  var sec = qid.split('-')[0];
  var bank = KPSS.BANKS[sec] || [];
  for (var i = 0; i < bank.length; i++) if (bank[i].id === qid) return bank[i];
  return null;
};

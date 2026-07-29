# KPSS Arena

KPSS ders notlarından üretilmiş, oyunlaştırılmış test uygulaması. Kurulum yok, derleme yok — `index.html`'i açman yeterli.

**1.969 soru · 9 bölüm · 4 oyun modu**

## Neden böyle tasarlandı

Uygulama DEHB'li bir öğrenci için yapıldı. Tasarım kararları buna göre:

- **Kısa turlar** — 5 / 10 / 15 / 20 soru. Bir oturum 2 dakikada bitebilir.
- **Anında geri bildirim** — her cevaptan sonra doğru/yanlış hemen görünür.
- **Cezalandırmayan ilerleme** — yanlış yapmak turu bitirmez (Hayatta Kalma modu hariç).
- **Her tur farklı sorular** — aynı soru listesi tekrar gelmez, ezberlemeye yer yok.
- **Tur sonunda açıklama** — her yanlış için "senin cevabın / doğru cevap / neden" bloğu.

## Bölümler

Her ders notu kendi arenası:

| Bölüm | Soru |
|---|---|
| İdare Hukuku ve İdari Yargı | 693 |
| İcra ve İflas Hukuku | 212 |
| Ticaret Hukuku | 211 |
| Türkiye Ekonomisi — Ders Notu | 206 |
| Borçlar Hukuku | 151 |
| Uluslararası İktisat | 146 |
| Para Teorisi ve Politikası | 126 |
| Türkiye Ekonomisi — Dönemler | 126 |
| İktisadi Büyüme ve Kalkınma | 98 |

## Oyun modları

- **Klasik** — baskı yok, seri tut, puan topla.
- **Zamana Karşı** — soru başına 20 saniye, hız bonusu var.
- **Boss Savaşı** — 3 can, bölümün bossunu deviriyorsun.
- **Hayatta Kalma** — tek yanlışta tur biter.

Ek modlar: **Hata Kampı** (sadece daha önce yanlış yapılan sorular) ve **Karışık Arena** (dokuz bölümün tamamından rastgele).

## Nasıl çalıştırılır

En basit yol — dosyayı çift tıkla ya da:

```bash
open index.html
```

Yerel sunucu tercih edersen:

```bash
python3 -m http.server 8777
```

Sonra `http://localhost:8777` adresine git.

## Soru seçimi nasıl çalışıyor

Her turda sorular ağırlıklı olarak çekilir — hiç görülmemiş sorular en yüksek ağırlıkta, sonra yanlış yapılıp henüz düzeltilmemiş olanlar, sonra pekiştirme, en sonda ustalaştığın sorular. Bir önceki turda çıkan sorular baskılanır. Şıklar da her seferinde karıştırılır, yani "cevap C'ydi" diye hatırlamak işe yaramaz.

İlerleme `localStorage`'da tutulur (`kpss-arena-v1`) — soru başına doğru/yanlış sayısı, seri, seviye, altın, madalyalar.

## Soru bankasına ekleme yapmak

Bankalar `js/banks/` altında düz JS dosyaları. Format:

```js
KPSS.registerBank('idare', [
  {
    q: "Soru metni?",
    o: ["Doğru cevap", "Çeldirici", "Çeldirici", "Çeldirici", "Çeldirici"],
    a: 0,
    e: "Neden bu cevap doğru — tur sonunda gösterilir.",
    t: "Konu adı", d: 2   // d: 1 kolay, 2 orta, 3 zor
  }
]);
```

Doğru cevap her zaman `0` indeksinde yazılır; motor şıkları çalışma zamanında karıştırdığı için bu güvenli. Yeni dosya eklersen `index.html`'e `<script>` etiketini de eklemen gerekiyor.

Eklemeden sonra doğrulayıcıyı çalıştır:

```bash
node tools/validate.js
```

Şema hatalarını, eksik açıklamaları, 4'ten az şıkkı, tekrar eden soruları ve geçersiz cevap indekslerini yakalar.

## Yapı

```
index.html          tüm ekranlar (splash, harita, kurulum, quiz, sonuç, madalyalar)
css/style.css       tema, animasyonlar, responsive düzen
js/bank.js          bölüm tanımları + banka kaydı
js/banks/*.js       soru bankaları
js/engine.js        tur kurma, ağırlıklandırma, puanlama, madalyalar
js/store.js         localStorage kalıcılığı, seviye/XP hesabı
js/ui.js            ekran render'ları, yanlış açıklama ekranı
js/fx.js            canvas partikül efektleri
js/audio.js         WebAudio ile üretilen ses efektleri (dosya yok)
js/app.js           önyükleme ve yönlendirme
tools/validate.js   soru bankası doğrulayıcı
```

Bağımlılık yok, build adımı yok, harici istek yok — `file://` üzerinden bile çalışır.

## Not

Ders notu PDF'leri bu depoya dahil edilmedi; telif hakları yayınevlerine ait. Depoda yalnızca notlardan üretilmiş soru bankaları ve uygulama kodu var.

Yerel kurulumda ayrıca ticari soru bankası kitaplarından çıkarılmış "Sınav Sorusu" ve "ÇIKMIŞ" bölümleri de bulunuyor (`js/banks/c_*.js`). Bu dosyalar sorunun, şıkların ve çözümün kitabın kendi metni olduğu için `.gitignore` ile depo dışında tutuldu; yalnızca kişisel çalışma amacıyla kullanılıyor. Bu dosyalar olmadan uygulama sorunsuz açılır — `boot()` bankası boş bölümleri otomatik gizler, notlardan üretilmiş 9 bölüm çalışmaya devam eder.

### Soru kalitesi

Sorular "en uzun şık doğrudur" ipucuna karşı ölçülüp düzeltildi. Ölçüt, doğru şıkkın en uzun çeldiriciden kaç karakter uzun olduğu (`fark`); 15 karakterden fazlası sömürülebilir ipucu sayıldı. Düzeltme kalıbı: kuralın ayrıntısı soru gövdesine taşınır, şıklar kısa ve birbirine paralel kardeş kavramlara indirilir.

OCR ile çıkarılan çıkmış sorularda ayrıca bir güvenlik kilidi var: bir sorunun kendi `Cevap X seçeneğidir` satırı OCR'da bozulmuşsa (ör. `Gevap`) blok sonraki sorunun cevap harfini yakalayabiliyor. Şıklardan sonra yeni bir soru başlangıcı görülen bloklar, sessizce yanlış cevap üretmemek için tamamen atılıyor.

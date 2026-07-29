/* Para Teorisi ve Politikası — kaynak: "J-PARATEOPOLDERSNOTU.pdf" (Dr. Ahmet Emrah Tayyar) */
KPSS.registerBank('para', [

/* ---------- PARANIN TANIMI VE FONKSİYONLARI ---------- */
{
  q: "Parayı 'ekonominin üzerini örten tülden ibarettir' şeklinde değerlendiren iktisatçı kimdir?",
  o: ["A. Smith", "M. Friedman", "J. M. Keynes", "I. Fisher", "J. Tobin"],
  a: 0,
  e: "A. Smith'e göre para ekonominin üzerini örten tülden ibarettir; yani takas ekonomisinin zorluklarını giderir. Friedman'a göre ise paranın seviyesi ekonomi için oldukça önemlidir ve para kurala bağlı olmalıdır.",
  t: "Paranın Tanımı", d: 2
},
{
  q: "Paranın özellikleri arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Kendi başına değerli bir maden olması", "Homojen olması", "Bölünebilmesi", "Genel anlamda kabul görmesi", "Kolaylıkla taşınabilir olması"],
  a: 0,
  e: "Notta özellikle belirtilir: bir paranın para olabilmesi için DEĞERLİ OLMASINA GEREK YOKTUR. Diğer özellikler: homojenlik, bölünebilirlik, genel kabul, taşınabilirlik ve taklit edilememe.",
  t: "Paranın Tanımı", d: 2
},
{
  q: "Bir malın diğer mal cinsinden değerini ifade eden fiyat türü hangisidir?",
  o: ["Nispi fiyat", "Mutlak fiyat", "Nominal fiyat", "Gölge fiyat", "Cari fiyat"],
  a: 0,
  e: "MUTLAK FİYAT bir malın TL cinsinden tek bir fiyatının olmasıdır. NİSPİ FİYAT ise bir malın diğer mal cinsinden değeridir; takas ekonomisinde bir malın diğer mal cinsinden birden fazla fiyatı olur.",
  t: "Paranın Tanımı", d: 2
},
{
  q: "Bir ekonomide n adet mal varsa toplam nispi fiyat sayısı hangi formülle bulunur?",
  o: ["n·(n−1)/2", "n·(n+1)/2", "n²", "n−1", "2n"],
  a: 0,
  e: "Nispi fiyat sayısı formülü n·(n−1)/2'dir. Örneğin 20 mal varsa 20·19/2 = 190 nispi fiyat vardır.",
  t: "Paranın Tanımı", d: 2
},
{
  q: "Enflasyonist dönemlerde yerli paradan vazgeçip yabancı para tutmaya ne ad verilir?",
  o: ["Para ikamesi", "Tersine para ikamesi", "Tağşiş", "Senyoraj", "Sterilizasyon"],
  a: 0,
  e: "PARA İKAMESİ, enflasyonist zamanlarda yerli paradan vazgeçip yabancı para tutmaktır. TERSİNE PARA İKAMESİ ise fiyat istikrarı olan dönemlerde yabancı paradan vazgeçip yerli para tutmaktır.",
  t: "Para İkamesi", d: 1
},
{
  q: "McKinnon'a göre yerli finansal araçlar yerine yabancı finansal araçların kullanılması hangi para ikamesi türüdür?",
  o: ["Dolaylı para ikamesi", "Doğrudan para ikamesi", "Tam dolarizasyon", "Kısmi dolarizasyon", "Tersine para ikamesi"],
  a: 0,
  e: "McKinnon'a göre DOĞRUDAN para ikamesi yerli para yerine yabancı paraların kullanılması, DOLAYLI para ikamesi ise yerli finansal araçlar yerine yabancı finansal araçların kullanılmasıdır.",
  t: "Para İkamesi", d: 3
},
{
  q: "Ulusal paranın terk edilerek resmi para birimi olarak yabancı bir paranın kullanılması hangi kavramla ifade edilir?",
  o: ["Tam dolarizasyon", "Kısmi dolarizasyon", "Dolaylı para ikamesi", "Para kurulu", "Bimetalizm"],
  a: 0,
  e: "TAM DOLARİZASYON ulusal paranın terk edilip resmi para birimi olarak yabancı paranın kullanılmasıdır. KISMİ DOLARİZASYON ise yerleşiklerin ulusal para cinsinden finansal varlıklar yerine yabancı para cinsinden varlıkları seçmesidir.",
  t: "Para İkamesi", d: 2
},
{
  q: "Klasik iktisat ekolüne göre paranın ekonomi üzerindeki etkisi ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Para sadece işlem amaçlıdır, dikotomi geçerlidir ve paranın ekonomi üzerinde etkisi yoktur", "Para ekonominin seviyesini belirleyen temel unsurdur", "Para talebinin faiz esnekliği sonsuzdur", "Para lüks maldır, gelir esnekliği birden büyüktür", "Paranın dolaşım hızı istikrarsızdır"],
  a: 0,
  e: "Klasiklere göre para sadece işlem amaçlıdır, DİKOTOMİ özelliği vardır ve paranın ekonomi üzerinde etkisi yoktur. Keynesyen devrimle birlikte paranın ekonominin seviyesini etkilediği dile getirilmiştir.",
  t: "Paranın Fonksiyonları", d: 2
},

/* ---------- PARA SİSTEMLERİ ---------- */
{
  q: "Hem kullanım değeri hem de değişim değeri olan, nominal değeri ile reel değeri arasında fark bulunmayan para türü hangisidir?",
  o: ["Mal-para", "Temsili para", "İtibari (fiat) para", "Kaydi para", "Para benzeri"],
  a: 0,
  e: "MAL-PARA'nın hem kullanım hem değişim değeri vardır; nominal ve reel değeri arasında fark yoktur. Bilinen en büyük mal para ALTINDIR.",
  t: "Para Sistemleri", d: 2
},
{
  q: "Osmanlı zamanında uluslararası işlemlerde altının, ülke sınırı içindeki işlemlerde gümüşün kullanılması hangi sistemle ifade edilir?",
  o: ["Topal Mikyas Sistemi", "Bimetalizm", "Simmetalizm", "Altın Standardı", "Para Kurulu"],
  a: 0,
  e: "TOPAL MİKYAS SİSTEMİ, Osmanlı'da uluslararası işlemlerde altının, ülke içi işlemlerde gümüşün kullanılmasıdır.",
  t: "Para Sistemleri", d: 3
},
{
  q: "Altın standardı ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Ülkedeki para arzı hükümetin bütçe kararlarıyla belirlenir", "1890-1914 yılları arası uygulanmıştır", "Ülke parasının ne kadar altına denk geldiği belirlenir", "D. Hume tarafından öne sürülmüştür", "Karşılıksız para basılmasının önüne geçilir"],
  a: 0,
  e: "Altın standardında ülkedeki para arzı ALTIN STOĞU tarafından belirlenir, hükümet kararlarıyla değil. Sistem D. Hume tarafından öne sürülmüş; döviz kurlarının sabit kalmasıyla dünya ticareti sağlıklı işlemiştir.",
  t: "Para Sistemleri", d: 2
},
{
  q: "Kötü paranın iyi parayı piyasadan kovması olayına ne ad verilir?",
  o: ["Gresham Kanunu", "Thiers Kanunu", "Say Yasası", "Walras Yasası", "Tinbergen Kuralı"],
  a: 0,
  e: "GRESHAM KANUNU kötü paranın iyi parayı piyasadan kovmasıdır. THIERS KANUNU ise iyi paranın kötü parayı kovmasıdır ve enflasyonist zamanlarda ortaya çıkar.",
  t: "Para Sistemleri", d: 1
},
{
  q: "İyi paranın kötü parayı piyasadan kovması ve bu durumun enflasyonist zamanlarda ortaya çıkması hangi kanunla ifade edilir?",
  o: ["Thiers Kanunu", "Gresham Kanunu", "Paraşüt Kuramı", "Say Yasası", "Okun Yasası"],
  a: 0,
  e: "THIERS KANUNU iyi paranın kötü parayı piyasadan kovmasıdır ve enflasyonist zamanlarda ortaya çıkar.",
  t: "Para Sistemleri", d: 2
},
{
  q: "Dolaşımdaki paranın miktarının değersiz madenlerle karıştırılıp çoğaltılması olayına ne ad verilir?",
  o: ["Tağşiş etme", "Senyoraj", "Emisyon", "Sterilizasyon", "Devalüasyon"],
  a: 0,
  e: "TAĞŞİŞ ETME, dolaşımdaki paranın değersiz madenlerle karıştırılıp çoğaltılmasıdır (altın yerine yarı altın yarı gümüş para sürülmesi). METAL DEVALÜASYONU olarak da bilinir.",
  t: "Para Sistemleri", d: 2
},
{
  q: "Bimetalist sistemlerde gümüş miktarı arttırıldığında paranın değerinin hemen düşmemesini açıklayan kuram ve sahibi hangisidir?",
  o: ["Paraşüt Kuramı — Walras", "Simmetalizm — Marshall", "Gresham Kanunu — Gresham", "Miktar Teorisi — Fisher", "Likidite Tercihi — Keynes"],
  a: 0,
  e: "PARAŞÜT KURAMI WALRAS'a aittir. Gümüşe göre altın kıt kaldığı için gümüşteki değer düşüklüğünü altındaki değer artışı dengeler ve paranın değeri daha yumuşak düşer.",
  t: "Para Sistemleri", d: 3
},
{
  q: "Para biriminin kıymetinin altın ve gümüşe bağlanarak ekonominin istikrara kavuşacağını belirten Simmetalizm kavramı kime aittir?",
  o: ["Marshall", "Walras", "Gresham", "Thiers", "Hume"],
  a: 0,
  e: "SİMMETALİZM MARSHALL'a aittir: para biriminin kıymetinin altın ve gümüşe bağlanmasıyla ekonominin istikrara kavuşacağını belirtir.",
  t: "Para Sistemleri", d: 3
},
{
  q: "Üzerindeki yazılı değere yasallığından dolayı itibar edilen, bir karşılığı bulunmayan para sistemi hangisidir?",
  o: ["İtibari (fiat) kağıt para sistemi", "Temsili para sistemi", "Mal-para sistemi", "Tek metal sistemi", "Kaydi para"],
  a: 0,
  e: "İTİBARİ-FİAT-KAĞIT PARA SİSTEMİ'nde para üzerindeki yazılı değere yasallığından dolayı itibar edilir; karşılığı yoktur. Kapsamına nakit para ve vadesiz mevduatlar girer. TEMSİLİ PARA ise altın-gümüş karşılığı çıkarılır ve %100 karşılığı vardır.",
  t: "Para Sistemleri", d: 2
},
{
  q: "Ticari bankalar tarafından yaratılan paraya ne ad verilir?",
  o: ["Kaydi (mevduat, banka) para", "İtibari para", "Temsili para", "Mal-para", "Para benzeri"],
  a: 0,
  e: "KAYDİ-MEVDUAT-SOYUT-BANKA PARASI ticari bankalar tarafından yaratılır. Vadesiz mevduat hesabı açılması ve para yatırılmasıyla süreç başlar; bir kısmı zorunlu rezerv olarak ayrılır, kalanı kredi olarak verilir.",
  t: "Para Sistemleri", d: 1
},
{
  q: "Tahvil, çek, bono ve senet gibi likiditesi yüksek olmayan ve genel olarak kabul görmeyen varlıklara ne ad verilir?",
  o: ["Para benzeri", "Kaydi para", "Temsili para", "Rezerv para", "Parasal taban"],
  a: 0,
  e: "PARA BENZERİ, likiditesi yüksek olmayan ve genel olarak kabul görmeyen varlıklardır: tahvil, çek, bono, senet vb.",
  t: "Para Sistemleri", d: 2
},

/* ---------- PARA ARZI ---------- */
{
  q: "M2 para arzı tanımı aşağıdakilerden hangisidir?",
  o: ["M1 + Vadeli Mevduat + Mevduat Sertifikası", "M1 + Döviz Tevdiat Hesabı", "M1 + Resmi Mevduat", "M1 + Repo İşlemlerinin Fonları", "Dolaşımdaki Para + Vadesiz Mevduat"],
  a: 0,
  e: "M1 = C + DD + TCMB Mevduatı; M2 = M1 + Vadeli Mevduat + Mevduat Sertifikası; M2Y = M2 + FX (Döviz Tevdiat Hesabı); M3A = M2 + Resmi Mevduat.",
  t: "Para Arzı", d: 2
},
{
  q: "M2Y para arzı tanımı aşağıdakilerden hangisidir?",
  o: ["M2 + Döviz Tevdiat Hesabı (FX)", "M2 + Resmi Mevduat", "M2 + Repo fonları", "M1 + Vadeli Mevduat", "M3A + Diğer Mevduatlar"],
  a: 0,
  e: "M2Y = M2 + FX (Döviz Tevdiat Hesabı). M2YR = M2 + FX + Repo İşlemlerinin Fonları; M3 = M3A + Diğer Mevduatlar; M3Y = M3 + Döviz Tevdiat Hesabı.",
  t: "Para Arzı", d: 2
},
{
  q: "M0 (dolaşımdaki para) nasıl hesaplanır?",
  o: ["Emisyon − Banka kasasındaki paralar", "Emisyon + Banka kasasındaki paralar", "Vadesiz mevduat + Vadeli mevduat", "Parasal taban + Rezervler", "Emisyon + Zorunlu karşılıklar"],
  a: 0,
  e: "M0 (Dolaşımdaki Para) = Emisyon − Banka kasasındaki paralar.",
  t: "Para Arzı", d: 2
},
{
  q: "TCMB'nin 2005 Aralık ayı itibarıyla yaptığı para arzı değişiklikleri arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["M2Y, M2YR, M3, M3Y ve M3YR tanımları korunmuştur", "Katılım, kalkınma ve yatırım bankalarının parasal yükümlülükleri para arzına ilave edilmiştir", "B tipi likit fonlar para arzına dahil edilmiştir", "Bankalararası işlemler para arzı tanımlarından çıkarılmıştır", "M2Y'de yer alan yabancı para cinsinden yükümlülükler M1 ve M2'ye katılmıştır"],
  a: 0,
  e: "2005 Aralık'tan itibaren M2Y, M2YR, M3, M3Y, M3YR tanımları KALDIRILMIŞTIR. Yeni tanımlar: M1 = Dolaşımdaki para + Vadesiz Mevduat, M2 = M1 + Vadeli Mevduat.",
  t: "Para Arzı", d: 3
},
{
  q: "Aralık 2010'dan itibaren geçerli olan M3 para arzı tanımı hangisidir?",
  o: ["M2 + Repo + Para piyasası fonları + İhraç edilen menkul kıymet", "M2 + Resmi mevduat", "M2 + Döviz tevdiat hesabı", "M1 + Vadeli mevduat", "Parasal taban × Para çarpanı"],
  a: 0,
  e: "Aralık 2010'dan itibaren M3 = M2 + Repo + Para piyasası fonları + İhraç edilen Menkul Kıymet. Bankalarca yurtiçine TL üzerinden ihraç edilen, vadeleri 2 yıla kadar olan bono ve tahviller eklenmiştir.",
  t: "Para Arzı", d: 3
},
{
  q: "'Gücü yüksek para' olarak ifade edilen ve para çarpanı yoluyla para arzının belirlenmesinde büyük rol oynayan kavram hangisidir?",
  o: ["Parasal taban", "Kaydi para", "Rezerv para", "Merkez bankası parası", "Para benzeri"],
  a: 0,
  e: "PARASAL TABAN (baz para, high money) gücü yüksek paradır; merkez bankası tarafından belirlenir ve para çarpanı yoluyla para arzının belirleniminde büyük rol oynar. Para Tabanı = C + RR + ER.",
  t: "Para Arzı", d: 2
},
{
  q: "Parasal taban (B) kullanımına göre nasıl ifade edilir?",
  o: ["C + R (Dolaşımdaki para + Rezervler)", "NDA − NFA", "M1 × m1", "C + DD + TD", "Zorunlu karşılık − Serbest karşılık"],
  a: 0,
  e: "NDA + NFA = B = C + R. NDA ve NFA parasal tabanın KAYNAĞINA göre toplamını (MB bilançosunun pasifini) verir; C + R ise KULLANIMINA göre parasal tabanı gösterir.",
  t: "Para Arzı", d: 3
},
{
  q: "Para arzı belirleniminde 'Chicago Yaklaşımı' hangi para arzı tanımını temel alır ve hangi ekole aittir?",
  o: ["M2 — Monetarist", "M1 — Klasik", "M3 — Keynesyen", "M0 — Neo-klasik", "M2Y — Post-Keynesyen"],
  a: 0,
  e: "CHICAGO YAKLAŞIMI monetarist yaklaşımdır (Friedman, Meiselman, Schwartz) ve M2 para arzını temel alır. KLASİK yaklaşım ise M1'i temel alır (para tüldür, dikotomi geçerlidir).",
  t: "Para Arzı Yaklaşımları", d: 2
},
{
  q: "Bireylerin alternatif likit değerler olarak kabul edebileceği tüm değerlerin para arzı kapsamına dahil edilebileceğini savunan yaklaşım hangisidir?",
  o: ["Gurley-Shaw Yaklaşımı", "Chicago Yaklaşımı", "Radcliffe Yaklaşımı", "Holdrop Yaklaşımı", "Krediyi İçeren Görüş"],
  a: 0,
  e: "GURLEY-SHAW YAKLAŞIMI'na göre bireylerin alternatif likit değerler olarak kabul edebileceği tüm değerler para arzı kapsamına dahil edilebilir.",
  t: "Para Arzı Yaklaşımları", d: 3
},
{
  q: "Para arzı tanımını birincil likidite ve ikincil likidite olarak ikiye ayıran yaklaşım hangisidir?",
  o: ["Holdrop Yaklaşımı", "Radcliffe Yaklaşımı", "Gurley-Shaw Yaklaşımı", "Chicago Yaklaşımı", "Klasik Yaklaşım"],
  a: 0,
  e: "HOLDROP YAKLAŞIMI para arzını birincil ve ikincil likidite olarak ikiye ayırır: birincil likiditede para, ikincil likiditede para benzerleri vardır.",
  t: "Para Arzı Yaklaşımları", d: 3
},
{
  q: "Merkez bankasının yanı sıra ticari bankaların ve halkın da para arzının belirlenmesinde etkili olduğunu savunan yaklaşım hangisidir?",
  o: ["İçsel para arzı yaklaşımı", "Dışsal para arzı yaklaşımı", "Klasik yaklaşım", "Radcliffe yaklaşımı", "İşlemler yaklaşımı"],
  a: 0,
  e: "DIŞSAL para arzı sadece merkez bankasının para arzını belirlemesini ifade eder. İÇSEL para arzı ise MB'nin yanı sıra ticari bankaların ve halkın da etkili olduğunu savunur.",
  t: "Para Arzı Yaklaşımları", d: 2
},
{
  q: "Yükümlülüklerine eşit derecede rezerv ayıran, riski ve kazancı düşük olan bankacılık türü hangisidir?",
  o: ["Mutlak rezerv bankacılığı", "Kısmi rezerv bankacılığı", "Katılım bankacılığı", "Yatırım bankacılığı", "Kalkınma bankacılığı"],
  a: 0,
  e: "MUTLAK REZERV BANKACILIĞI'nda banka yükümlülüklerine eşit rezerv ayırır; risk ve kazanç düşüktür, banka net sermayesi kadar kredi verebilir. KISMİ REZERV BANKACILIĞI'nda daha az rezerv ayrılır, risk ve kazanç yüksektir.",
  t: "Bankacılık", d: 2
},

/* ---------- KAYDİ PARA ---------- */
{
  q: "Kaydi para miktarı hangi formülle hesaplanır? (rDD: zorunlu rezerv oranı)",
  o: ["(1 / rDD) × Vadesiz Mevduat", "(1 − rDD) / rDD × Vadesiz Mevduat", "rDD × Vadesiz Mevduat", "(1 / (1 − rDD)) × Vadesiz Mevduat", "Vadesiz Mevduat / (1 + rDD)"],
  a: 0,
  e: "Kaydi Para Miktarı = (1 / rDD) × Vadesiz Mevduat. Mevduat Kredi Para ise = ((1 − rDD) / rDD) × Vadesiz Mevduat'tır ve Kaydi Para − Vadesiz Mevduat'a eşittir.",
  t: "Kaydi Para", d: 2
},
{
  q: "Zorunlu rezerv oranı %100 olduğunda kaydi para çarpanı kaç olur?",
  o: ["1", "0", "Sonsuz", "2", "0,5"],
  a: 0,
  e: "Zorunlu rezerv oranı %100 ise kaydi para çarpanı 1 olur ve kaydi para vadesiz mevduatlara eşit olur. Zorunlu rezerv oranı %0 ise kaydi para çarpanı SONSUZ olur.",
  t: "Kaydi Para", d: 2
},
{
  q: "Zorunlu rezerv oranı arttığında kaydi para çarpanı ve para miktarı nasıl değişir?",
  o: ["Kaydi para çarpanı azalır, para miktarı azalır", "Kaydi para çarpanı artar, para miktarı artar", "Kaydi para çarpanı azalır, para miktarı artar", "İkisi de değişmez", "Kaydi para çarpanı artar, para miktarı azalır"],
  a: 0,
  e: "Zorunlu rezerv oranı artarsa kaydi para çarpanı AZALIR; çarpanın azalması da para miktarının azalmasına yol açar.",
  t: "Kaydi Para", d: 2
},
{
  q: "Sadece bankacılık sistemi tarafından yaratılan ekstra paraya ne ad verilir?",
  o: ["Mevduat kredi para", "Kaydi para", "Rezerv para", "Parasal taban", "Merkez bankası parası"],
  a: 0,
  e: "MEVDUAT KREDİ PARA = Kaydi Para − Vadesiz Mevduat. Sadece bankacılık sistemi tarafından yaratılan ekstra paradır.",
  t: "Kaydi Para", d: 3
},
{
  q: "Geri dönüş oranı (g) arttıkça kaydi para miktarı nasıl değişir?",
  o: ["Azalır", "Artar", "Değişmez", "Önce artar sonra azalır", "Sonsuza gider"],
  a: 0,
  e: "Notta belirtildiği üzere geri dönüş oranı arttıkça kaydi para miktarı AZALIR. Geri dönüş oranı kapsamında Kaydi Para = (1 / (1 − g(1 − rDD))) × Vadesiz Mevduat'tır.",
  t: "Kaydi Para", d: 3
},
{
  q: "Bankaların kendi isteğine bağlı olarak ayırdıkları rezerve ne ad verilir?",
  o: ["Serbest rezerv", "Zorunlu rezerv", "Munzam karşılık", "Disponibilite", "İthalat teminatı"],
  a: 0,
  e: "SERBEST REZERV (e) bankaların kendi isteğine bağlı ayırdıkları rezervdir; e = Serbest Rezerv Miktarı / Vadesiz Mevduat. ZORUNLU REZERV ise MB tarafından belirlenen yasal karşılıktır.",
  t: "Kaydi Para", d: 2
},
{
  q: "Serbest rezerv oranı ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Faizler artarsa serbest rezerv oranı azalır", "Faizler artarsa serbest rezerv oranı artar", "Banka borçlanma maliyeti artarsa serbest rezerv oranı azalır", "Mevduat giriş-çıkışı istikrarsız ise serbest rezerv oranı azalır", "Serbest rezerv oranı merkez bankası tarafından belirlenir"],
  a: 0,
  e: "Faizler artarsa serbest rezerv oranı AZALIR (banka parayı boş tutmak istemez). Banka borçlanma maliyeti artarsa ve mevduat giriş-çıkışı istikrarsız ise serbest rezerv oranı ARTAR.",
  t: "Kaydi Para", d: 3
},
{
  q: "Nakit tercih oranı (c) ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Banka panikleri arttıkça nakit tercih oranı azalır", "Gelir ve refah düzeyi artarsa nakit tercih oranı azalır", "Vadesiz mevduat faiz oranı artarsa nakit tercih oranı azalır", "Alternatif değerlerin beklenen getirileri arttıkça nakit tercih oranı azalır", "Yasa dışı faaliyetler arttıkça nakit tercih oranı artar"],
  a: 0,
  e: "Banka panikleri arttıkça nakit tercih oranı ARTAR (insanlar parasını bankadan çeker). c = Dolaşımdaki Para / Vadesiz Mevduat.",
  t: "Kaydi Para", d: 2
},
{
  q: "Vadeli mevduat tercih oranı (t) ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Bankaya güven artarsa vadeli mevduat tercih oranı artar", "Vadeli mevduat faizi artarsa tercih oranı azalır", "Alternatif tasarruf araçlarının getirisi artarsa tercih oranı artar", "Bankaya güven artarsa tercih oranı azalır", "t = Vadesiz Mevduat / Vadeli Mevduat"],
  a: 0,
  e: "t = Vadeli Mevduat / Vadesiz Mevduat. Vadeli mevduat faizi artarsa tercih oranı ARTAR; alternatif tasarruf araçlarının getirisi artarsa AZALIR; bankaya güven artarsa ARTAR.",
  t: "Kaydi Para", d: 3
},
{
  q: "Basit kaydi para çarpanı ile geniş kaydi para çarpanının etkileri karşılaştırıldığında aşağıdakilerden hangisi doğrudur?",
  o: ["Basit kaydi para çarpanı geniş çarpandan daha fazla etki yaratır", "Geniş kaydi para çarpanı basit çarpandan daha fazla etki yaratır", "İkisi eşit etki yaratır", "Geniş çarpan her zaman 1'e eşittir", "Basit çarpan sadece zorunlu rezerv %100 iken etkilidir"],
  a: 0,
  e: "Notta belirtildiği üzere BASİT kaydi para çarpanı, geniş kaydi para çarpanından DAHA FAZLA etki yaratır. Çünkü geniş çarpanda serbest rezerv, nakit tercihi ve vadeli mevduat gibi sızıntılar da paydaya eklenir.",
  t: "Kaydi Para", d: 3
},

/* ---------- PARA TALEBİ ---------- */
{
  q: "Klasik para talebi kuramına göre para talebinin faiz ve gelir esnekliği nasıldır?",
  o: ["Faiz esnekliği sıfır, gelir esnekliği 1'e eşittir", "Faiz esnekliği sonsuz, gelir esnekliği sıfırdır", "Faiz esnekliği 1, gelir esnekliği sıfırdır", "Her ikisi de sonsuzdur", "Faiz esnekliği yüksek, gelir esnekliği 1'den büyüktür"],
  a: 0,
  e: "Klasiklere göre para talebi sadece işlem amaçlıdır, para talebinin FAİZ ESNEKLİĞİ SIFIRDIR ve para talebi gelire bağlı olduğu için GELİR ESNEKLİĞİ 1'E EŞİTTİR.",
  t: "Para Talebi", d: 2
},
{
  q: "Irving Fisher'in klasik miktar teorisi denklemi hangisidir?",
  o: ["M·V = P·T", "M = k·P·Y", "Md/P = f(i, Y)", "M/P = √(b·Y / 2i)", "M1 = m1 × B"],
  a: 0,
  e: "Fisher'in Klasik Miktar Teorisi: M·V = P·T. Ekonomi tam istihdamda olduğu için T yerine Y yazılabilir: M·V = P·Y. Cambridge tipi denklem ise M = k·P·Y'dir.",
  t: "Para Talebi", d: 1
},
{
  q: "Paranın dolaşım hızı (V) neyi ifade eder?",
  o: ["1 TL'nin üretilen mal ve hizmetleri ortalama olarak kaç kez satın aldığını", "Toplam para arzının milli gelire oranını", "Bankaların kredi verme hızını", "Enflasyonun aylık artış oranını", "Paranın nominal değeriyle reel değeri arasındaki farkı"],
  a: 0,
  e: "V dolaşım hızıdır; 1 TL'nin üretilen mal ve hizmetleri ortalama kaç kez satın aldığını, yani 1 TL'nin el değiştirme hızını gösterir.",
  t: "Para Talebi", d: 2
},
{
  q: "Para talebi ile paranın dolaşım hızı arasındaki ilişki nasıldır?",
  o: ["Ters yönlüdür; para talebi arttıkça dolaşım hızı azalır", "Aynı yönlüdür; para talebi arttıkça dolaşım hızı artar", "İlişki yoktur", "Para talebi arttıkça dolaşım hızı önce artar sonra azalır", "Dolaşım hızı her zaman sabittir"],
  a: 0,
  e: "Para talebi ile dolaşım hızı arasında TERS YÖNLÜ ilişki vardır: para talebi arttıkça dolaşım hızı azalır. Kredi kartı kullanımı arttıkça para talebi azalır, dolaşım hızı artar.",
  t: "Para Talebi", d: 2
},
{
  q: "Fisher'e göre paranın dolaşım hızındaki değişimler neye bağlıdır?",
  o: ["Teknolojik ve kurumsal faktörlere", "Faiz oranlarındaki dalgalanmalara", "Sürekli gelirdeki değişmelere", "Servetin bileşimine", "Merkez bankası politikasına"],
  a: 0,
  e: "Fisher'e göre dolaşım hızı değişimleri TEKNOLOJİK ve KURUMSAL faktörlere bağlıdır. (Keynes'e göre ise dolaşım hızı istikrarsızdır ve faiz dalgalanmaları bu istikrarsızlığı açıklar.)",
  t: "Para Talebi", d: 3
},
{
  q: "Cambridge tipi miktar teorisinde Marshall'ın k'sı neye eşittir?",
  o: ["1/V", "V", "P·Y", "M/P", "V/P"],
  a: 0,
  e: "Fisher denkleminin her iki yanı V'ye bölünürse M = (1/V)·P·Y olur. Formülde 1/V yerine k (Marshall'ın k'sı) yazılır: M = k·P·Y. Dolaşım hızı ile k TERS çalışır.",
  t: "Para Talebi", d: 2
},
{
  q: "Cambridge tipi yaklaşım ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Para hem işlem hem de servet saklama aracı olarak tutulur", "Para sadece işlem amaçlı tutulur", "Para talebinin faiz esnekliği sonsuzdur", "Dolaşım hızı ile k aynı yönde hareket eder", "Para talebi yalnızca sürekli gelire bağlıdır"],
  a: 0,
  e: "Cambridge tipi yaklaşımda para hem İŞLEM hem de SERVET SAKLAMA aracı olarak tutulur (Walras Yasası). Para talebi servetin, para tutmanın alternatif maliyetinin ve gelecek hakkındaki belirsizliğin fonksiyonudur.",
  t: "Para Talebi", d: 2
},
{
  q: "Keynes'in Likidite Tercihi Teorisi'ne göre para talebinin amaçları hangileridir?",
  o: ["İşlem, ihtiyat ve spekülasyon", "İşlem, tasarruf ve yatırım", "İhtiyat, servet ve vergi", "Sadece işlem", "Spekülasyon ve arbitraj"],
  a: 0,
  e: "Keynes'e göre para talebinin üç amacı vardır: İŞLEM, İHTİYAT ve SPEKÜLASYON amaçlı para talebi. Bireylerin ortaya çıkacak fırsatlardan yararlanmak için varlıklarını para olarak tutması spekülasyon amaçlı para talebidir.",
  t: "Para Talebi", d: 1
},
{
  q: "Keynes'e göre bireyler varlıklarını hangi iki biçimde tutar ve faiz oranı ile tahvil fiyatı arasındaki ilişki nasıldır?",
  o: ["Tahvil ve para; faiz ile tahvil fiyatı arasında ters yönlü ilişki vardır", "Tahvil ve hisse senedi; aralarında doğru yönlü ilişki vardır", "Para ve altın; ilişki yoktur", "Tahvil ve para; aralarında doğru yönlü ilişki vardır", "Hisse senedi ve döviz; ters yönlü ilişki vardır"],
  a: 0,
  e: "Keynes'e göre bireyler varlıklarını TAHVİL ve PARA olarak tutar. Faiz oranı ile tahvil fiyatı arasında TERS YÖNLÜ ilişki vardır. Faiz Oranı = (Nominal Değer − Fiyat) / Fiyat.",
  t: "Para Talebi", d: 2
},
{
  q: "Keynes'e göre faiz oranındaki artışın elde para tutma üzerindeki etkisi nedir?",
  o: ["Para tutmanın fırsat maliyetini arttırır, bu da dolaşım hızının artması anlamına gelir", "Para tutmanın fırsat maliyetini azaltır, dolaşım hızı düşer", "Para talebini arttırır", "Dolaşım hızını sabit tutar", "Tahvil fiyatlarını yükseltir"],
  a: 0,
  e: "Keynes'e göre faiz oranındaki artış elde para tutmanın FIRSAT MALİYETİNİ ARTTIRIR; bu durum dolaşım hızının artması anlamına gelir.",
  t: "Para Talebi", d: 3
},
{
  q: "Friedman'ın Modern Miktar Teorisi'ne göre paranın gelir esnekliği ve para talebinin faiz esnekliği nasıldır?",
  o: ["Para lüks maldır, gelir esnekliği 1'den büyüktür; faiz esnekliği düşüktür ve LM dike yakındır", "Para zorunlu maldır, gelir esnekliği 1'den küçüktür; faiz esnekliği yüksektir", "Gelir esnekliği 1'e eşittir, faiz esnekliği sıfırdır", "Gelir esnekliği sıfırdır, faiz esnekliği sonsuzdur", "Her ikisi de 1'e eşittir"],
  a: 0,
  e: "Friedman'a göre PARA LÜKS MALDIR ve gelir esnekliği BİRDEN BÜYÜKTÜR. Para talebinin faiz esnekliği DÜŞÜKTÜR, dolayısıyla LM eğrisi dike yakındır.",
  t: "Modern Miktar Teorisi", d: 2
},
{
  q: "Friedman'ın reel para talebi fonksiyonunda sürekli gelir (Ys) arttıkça para talebi nasıl değişir?",
  o: ["Artar", "Azalır", "Değişmez", "Önce azalır sonra artar", "Sonsuza gider"],
  a: 0,
  e: "Friedman'a göre sürekli gelir (Ys) arttıkça para talebi ARTAR. Buna karşılık tahvil, hisse senedi ve malların paraya göre beklenen getirisi arttıkça para talebi AZALIR. Sürekli gelir arttıkça dolaşım hızı azalır.",
  t: "Modern Miktar Teorisi", d: 2
},
{
  q: "Modern miktar teorisinde beklenen enflasyon ve gerçekleşen enflasyonun para talebi üzerindeki etkisi nasıldır?",
  o: ["Gerçekleşen enflasyon arttıkça para talebi artar, beklenen enflasyon arttıkça para talebi azalır", "İkisi de para talebini arttırır", "İkisi de para talebini azaltır", "Gerçekleşen enflasyon para talebini azaltır, beklenen enflasyon arttırır", "İkisinin de etkisi yoktur"],
  a: 0,
  e: "Modern miktar teorisinde GERÇEKLEŞEN enflasyon arttıkça para talebi ARTAR; BEKLENEN enflasyon arttıkça para talebi AZALIR.",
  t: "Modern Miktar Teorisi", d: 3
},
{
  q: "Friedman'ın para talebi analizi ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Friedman para talebine alternatif olarak döviz talebini saymamıştır", "Friedman para talebinin en önemli alternatifi olarak dövizi görmüştür", "Friedman'a göre faizlerdeki değişmeler para talebi üzerinde çok etkilidir", "Friedman'a göre dolaşım hızı istikrarsızdır", "Friedman'a göre para talebi cari gelire bağlıdır"],
  a: 0,
  e: "Friedman para talebine alternatif olarak DÖVİZ TALEBİNİ SAYMAMIŞTIR. Keynes'in aksine faizlerdeki değişmeler para talebi üzerinde çok az etkilidir, bu nedenle dolaşım hızı İSTİKRARLIDIR. Para talebi SÜREKLİ gelire bağlıdır.",
  t: "Modern Miktar Teorisi", d: 3
},

/* ---------- NEOKEYNESYEN PARA TALEBİ ---------- */
{
  q: "Portföy Dengesi Yaklaşımı hangi iktisatçıya aittir ve temel önerisi nedir?",
  o: ["Tobin — yatırımcı riski azaltmak için portföyünü çeşitlendirir", "Baumol — işlem amaçlı para talebi faizden de etkilenir", "Brunner-Meltzer — para talebi servete ve nispi faizlere bağlıdır", "Friedman — para lüks maldır", "Fisher — dolaşım hızı sabittir"],
  a: 0,
  e: "PORTFÖY DENGESİ YAKLAŞIMI TOBIN'e aittir. Tobin'e göre insanlar riski sevmezler; riski düşük ve getirisi sıfır olan varlık paradır. Rasyonel yatırımcı riski azaltmak için portföyünü çeşitlendirir.",
  t: "Neokeynesyen Para Talebi", d: 2
},
{
  q: "Tobin'in Portföy Dengesi Yaklaşımı'na göre bireyin portföyü sadece tahvilden oluşursa beklenen getiri ve risk nasıldır?",
  o: ["Her ikisi de maksimumdur", "Her ikisi de sıfırdır", "Getiri maksimum, risk sıfırdır", "Getiri sıfır, risk maksimumdur", "Her ikisi de yarı düzeydedir"],
  a: 0,
  e: "Tobin'e göre üç durum geçerlidir: (1) Portföy sadece tahvilden oluşursa beklenen getiri ve risk MAKSİMUMDUR. (2) Yarısı tahvil yarısı para ise getiri ve risk bir öncekinin yarısıdır. (3) Hiç menkul kıymet yoksa getiri ve risk SIFIRDIR.",
  t: "Neokeynesyen Para Talebi", d: 3
},
{
  q: "Portföy dengesi yaklaşımında bir aktifin kendi faizi artarsa toplam aktifler içindeki payı nasıl değişir?",
  o: ["Artar", "Azalır", "Değişmez", "Sıfırlanır", "Önce azalır sonra artar"],
  a: 0,
  e: "Portföy dengesi yaklaşımı bir AKTİF SEÇİM teorisidir. Bir aktifin kendi faizi artarsa toplam aktifler içindeki payı ARTAR; ikame aktifin faiz oranları artarsa sözü edilen aktifin payı AZALIR.",
  t: "Neokeynesyen Para Talebi", d: 2
},
{
  q: "Tobin'in para talebi fonksiyonuna göre para talebinin faize ve servete olan esnekliği nasıldır?",
  o: ["1'e yakındır", "Sıfıra eşittir", "Sonsuzdur", "1'den çok büyüktür", "Negatiftir"],
  a: 0,
  e: "Tobin'in yaklaşımında para talebinin faize ve servete olan esnekliği 1'E YAKINDIR. Faiz oranı arttıkça para talebi azalır, servet arttıkça para talebi artar.",
  t: "Neokeynesyen Para Talebi", d: 3
},
{
  q: "Servet Uyumlanması Yaklaşımı hangi iktisatçılara aittir?",
  o: ["Brunner-Meltzer", "Baumol-Tobin", "Grossman-Helpman", "Gurley-Shaw", "Aghion-Howitt"],
  a: 0,
  e: "SERVET UYUMLANMASI YAKLAŞIMI BRUNNER-MELTZER'e aittir. Bu yaklaşımda para talebi nispi faiz oranlarına ve servete (toplam aktiflere) bağlıdır; para talebi fonksiyonu istikrarlıdır.",
  t: "Neokeynesyen Para Talebi", d: 2
},
{
  q: "Baumol-Tobin envanter (işlem) para talebi teorisine göre aşağıdakilerden hangisi doğrudur?",
  o: ["Gelir arttıkça işlem amaçlı para talebi artar, faiz arttıkça azalır", "Gelir arttıkça işlem amaçlı para talebi azalır, faiz arttıkça artar", "İşlem amaçlı para talebi sadece gelirden etkilenir", "İşlem amaçlı para talebi sadece faizden etkilenir", "İşlem amaçlı para talebi hiçbir değişkenden etkilenmez"],
  a: 0,
  e: "Baumol-Tobin teorisine göre işlem amaçlı para talebi sadece gelirden değil FAİZ ORANLARINDAN da etkilenir: gelir arttıkça artar, faiz arttıkça azalır. Bu teori PARA TALEBİ STOK KURAMI olarak da anılır.",
  t: "Baumol-Tobin", d: 2
},
{
  q: "Baumol-Tobin para talebi denkleminde komisyon ücreti (b) arttıkça para talebi nasıl değişir?",
  o: ["Artar", "Azalır", "Değişmez", "Sıfırlanır", "Sonsuza gider"],
  a: 0,
  e: "Baumol-Tobin denklemi M/P = √(b·Y / 2i)'dir. Komisyon ücreti (b) arttıkça para talebi ARTAR; nominal faiz arttıkça AZALIR; reel gelir arttıkça ARTAR.",
  t: "Baumol-Tobin", d: 2
},
{
  q: "Baumol-Tobin modelinde para talebinin gelir esnekliği ve bunun sonucu nedir?",
  o: ["Gelir esnekliği 1'den küçüktür; yüksek gelirli kişiler daha az para talep eder (para talebinde ölçek ekonomisi)", "Gelir esnekliği 1'den büyüktür; yüksek gelirli kişiler daha fazla para talep eder", "Gelir esnekliği tam 1'dir", "Gelir esnekliği sıfırdır", "Gelir esnekliği negatiftir"],
  a: 0,
  e: "Baumol-Tobin para talebinin gelir esnekliği 1'DEN KÜÇÜKTÜR. Daha yüksek gelir seviyesindeki kişiler daha az para talep eder; buna PARA TALEBİNDE ÖLÇEK EKONOMİSİ denir.",
  t: "Baumol-Tobin", d: 3
},
{
  q: "Baumol-Tobin modelinde bireylerin gelirlerinin bir bölümüyle bono alırken karşılaştıkları enerji, zaman ve ayakkabı eskitme maliyetleri neyi ifade eder?",
  o: ["Komisyon ücretini (b)", "Menü maliyetini", "Enflasyon vergisini", "Olivera-Tanzi etkisini", "Fırsat maliyetini"],
  a: 0,
  e: "Bu maliyetler KOMİSYON ÜCRETİ olarak b şeklinde gösterilir. Toplam işlem maliyeti C = b·n'dir. n'nin optimal değeri, ilave işlemin hasılatının ilave işlemin maliyetine eşit olmasıyla bulunur.",
  t: "Baumol-Tobin", d: 3
},
{
  q: "Ardışık Kuşaklar Modeli'nde para hangi gerekçeyle talep edilir?",
  o: ["Kuşaklar arası değişim aracı olması ve serveti nesilden nesile aktarması nedeniyle", "Sadece işlem amaçlı olması nedeniyle", "En riskli varlık olması nedeniyle", "Spekülasyon amaçlı olması nedeniyle", "Enflasyondan korunma aracı olması nedeniyle"],
  a: 0,
  e: "ARDIŞIK KUŞAKLAR MODELİ'nde para kuşaklar arası değişim aracı olması nedeniyle talep edilir; serveti muhafaza edip nesilden nesile aktarır. Para talebi ile faiz oranı arasında negatif ilişki vardır.",
  t: "Ardışık Kuşaklar", d: 3
},

/* ---------- FAİZ TEORİLERİ ---------- */
{
  q: "Ödünç verilebilir fon teorisi temelinde oluşan klasik faiz teorisi kime aittir?",
  o: ["Wicksell", "Keynes", "Fisher", "Tobin", "Friedman"],
  a: 0,
  e: "KLASİK FAİZ TEORİSİ ödünç verilebilir fon teorisi temelinde oluşur ve WICKSELL'e aittir. Buna göre faiz oranı tasarruf ve yatırım eşitliği ile kurulur; tasarruf faizle pozitif, yatırım faizle negatif yönlüdür.",
  t: "Faiz Teorileri", d: 2
},
{
  q: "Klasiklere göre tasarruf neyin bedelidir?",
  o: ["Tüketimden vazgeçmenin", "Likiditeden vazgeçmenin", "Riskten kaçınmanın", "Yatırım yapmanın", "Para tutmanın"],
  a: 0,
  e: "Klasiklere göre tasarruf TÜKETİMDEN VAZGEÇMENİN bedelidir.",
  t: "Faiz Teorileri", d: 2
},
{
  q: "Keynesyen faiz teorisine göre para arzı ve para talebinin faiz esnekliği nasıldır?",
  o: ["Para arzı dışsaldır ve sadece MB tarafından belirlenir; para talebinin faiz esnekliği oldukça yüksektir", "Para arzı içseldir; para talebinin faiz esnekliği sıfırdır", "Para arzı dışsaldır; para talebinin faiz esnekliği sıfırdır", "Para arzı içseldir; para talebinin faiz esnekliği düşüktür", "Her ikisi de sonsuzdur"],
  a: 0,
  e: "Keynesyen yaklaşımda para arzı DIŞSALDIR (sadece MB belirler) ve para talebinin FAİZ ESNEKLİĞİ OLDUKÇA YÜKSEKTİR. Para talebinin üç amacı işlem, ihtiyat ve spekülasyondur.",
  t: "Faiz Teorileri", d: 2
},

/* ---------- PARA ARZI ARTIŞININ ETKİLERİ ---------- */
{
  q: "Para arzı artışıyla likit olmayan varlıkların kolaylıkla paraya çevrilebilmesi sonucu faiz oranlarının azalmasına ne ad verilir?",
  o: ["Likidite etkisi", "Gelir etkisi", "Fiyat etkisi", "Fisher etkisi", "Tobin etkisi"],
  a: 0,
  e: "LİKİDİTE ETKİSİ: para arzı artışıyla ekonominin likiditesi artar ve faiz oranları azalır. GELİR ETKİSİ'nde ise artan reel gelir para talebini arttırır ve faiz ARTAR.",
  t: "Para Arzı Artışı", d: 2
},
{
  q: "Enflasyon beklentisi varsa fon sahiplerinin tasarrufları için ek prim talep etmesi hangi etki ile ifade edilir?",
  o: ["Fisher etkisi (beklenen enflasyon etkisi)", "Likidite etkisi", "Gelir etkisi", "Fiyat etkisi", "Olivera-Tanzi etkisi"],
  a: 0,
  e: "Beklenen enflasyon etkisi FISHER ETKİSİ olarak adlandırılır: enflasyon beklentisi varsa fon sahipleri tasarrufları için ek prim talep eder.",
  t: "Para Arzı Artışı", d: 2
},
{
  q: "Klasik anlayışta parasal aktarım mekanizmasının bulunmama nedeni nedir?",
  o: ["Tam istihdam olduğu için para arzı artarsa doğrudan fiyatlar yükselir", "Para talebinin faiz esnekliği sonsuz olduğu için", "Para arzı içsel olduğu için", "Bankacılık sistemi kaydi para yaratmadığı için", "Faiz oranları sabit olduğu için"],
  a: 0,
  e: "Paranın işe yarayıp yaramayacağı istihdamın seviyesine bağlıdır. Tam istihdamın olduğu Klasik anlayışta aktarma mekanizması YOKTUR, çünkü para arzı artarsa DOĞRUDAN fiyatlar yükselir.",
  t: "Parasal Aktarım", d: 3
},
{
  q: "Tobin kanalı ile parasal aktarım mekanizması nasıl işler?",
  o: ["Para arzı ↑ → Hisse fiyatı ↑ → q ↑ → Yatırım ↑ → Gelir ↑", "Para arzı ↑ → Faiz ↓ → Tüketim ↑ → Gelir ↑", "Para arzı ↑ → Rezerv ↑ → Kredi ↑ → Yatırım ↑ → Gelir ↑", "Para arzı ↑ → Kur ↑ → Net ihracat ↑ → Gelir ↑", "Para arzı ↑ → Likidite ↑ → Güven ↑ → Tüketim ↑ → Gelir ↑"],
  a: 0,
  e: "TOBIN KANALI: Ms ↑ → Hisse fiyatı ↑ → q ↑ → I ↑ → Y ↑. Yatırım harcamaları kanalları arasında faiz kanalı, kredi kanalı ve Tobin kanalı yer alır.",
  t: "Parasal Aktarım", d: 3
},

/* ---------- SENYORAJ VE ENFLASYON ---------- */
{
  q: "Paranın üzerindeki yazılı değerle üretim maliyeti arasındaki farktan elde edilen gelire ne ad verilir?",
  o: ["Senyoraj", "Emisyon", "Enflasyon vergisi", "Sterilizasyon", "Reeskont"],
  a: 0,
  e: "SENYORAJ, paranın üzerindeki yazılı değerle üretim maliyeti arasındaki farktan elde edilen gelirdir. EMİSYON ise bir ülkede menkul kıymetlerin ilk kez piyasaya sürülmesidir.",
  t: "Senyoraj", d: 2
},
{
  q: "Senyoraj geliri ile enflasyon vergisi hangi durumda aynı anlama gelir?",
  o: ["Basılan para kadar enflasyon oluşursa", "Enflasyon sıfır olursa", "Para arzı sabit tutulursa", "Merkez bankası bağımsız olursa", "Her zaman aynı anlama gelirler"],
  a: 0,
  e: "Senyoraj geliri ve enflasyon vergisi AYNI KAVRAMLAR DEĞİLDİR. Ancak basılan para kadar enflasyon olursa ikisi aynı anlama gelir. Bir ülkede enflasyonun para arzı artışı kadar olacağına dair bir kaide yoktur.",
  t: "Senyoraj", d: 3
},
{
  q: "Senyoraj eğrisinin ters U şeklinde olmasının nedeni nedir?",
  o: ["Basılan paranın enflasyon yaratarak bir noktadan sonra senyorajı azaltması", "Para talebinin faiz esnekliğinin sıfır olması", "Kaydi para çarpanının sabit olması", "Merkez bankasının bağımsız olması", "Dolaşım hızının sabit olması"],
  a: 0,
  e: "Devlet para basarak sonsuza kadar gelir elde edemez; basılan paranın enflasyonist sonuçları vardır ve basılan para enflasyon yaratarak bir noktadan sonra senyorajı AZALTIR. Bu nedenle senyoraj eğrisi TERS U şeklindedir.",
  t: "Senyoraj", d: 3
},
{
  q: "Firmaların enflasyona göre sıklıkla fiyat kataloglarını değiştirmesinin ortaya çıkardığı maliyete ne ad verilir?",
  o: ["Menü maliyeti", "Ayakkabı-kösele maliyeti", "Enflasyon vergisi", "Olivera-Tanzi etkisi", "Komisyon ücreti"],
  a: 0,
  e: "MENÜ MALİYETİ firmaların fiyat kataloglarını sıklıkla değiştirmesinin maliyetidir. AYAKKABI-KÖSELE MALİYETİ ise daha az para tutulması nedeniyle sıklıkla bankaya gidilmesinin ortaya çıkardığı maliyettir. İkisi de BEKLENEN enflasyonun maliyetidir.",
  t: "Enflasyonun Maliyeti", d: 2
},
{
  q: "Verginin tarh ve tahsil süresince enflasyonun reel vergi gelirini azaltmasına ne ad verilir?",
  o: ["Olivera-Tanzi etkisi", "Fisher etkisi", "Menü maliyeti", "Enflasyon vergisi", "Gresham etkisi"],
  a: 0,
  e: "OLIVERA-TANZI ETKİSİ, verginin tarh ve tahsil süresince enflasyonun reel vergi gelirini azaltmasıdır. Beklenen enflasyonun maliyetleri arasında yer alır.",
  t: "Enflasyonun Maliyeti", d: 2
},
{
  q: "Beklenmeyen enflasyonun etkileri arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Uzun dönemli kararlar alınmaya başlanır", "Gelir dağılımında adaletsizlikler artar", "Ekonominin faaliyet hacminde daralmalar görülür", "Para daha çok spekülatif alanlara kayar", "Kısa dönemli kararlar alınır"],
  a: 0,
  e: "Beklenmeyen enflasyonda UZUN dönemli kararlardan VAZGEÇİLEREK KISA dönemli kararlar alınır. Ayrıca gelir dağılımı bozulur, faaliyet hacmi daralır ve para spekülatif alanlara kayar.",
  t: "Enflasyonun Maliyeti", d: 2
},

/* ---------- TAHVİL PİYASASI VE FAİZ YAPISI ---------- */
{
  q: "Tahvil piyasasında tahvil arzı ve talebinin eğimleri nasıldır?",
  o: ["Tahvil arzı negatif eğimli, tahvil talebi pozitif eğimlidir", "Tahvil arzı pozitif eğimli, tahvil talebi negatif eğimlidir", "İkisi de pozitif eğimlidir", "İkisi de negatif eğimlidir", "İkisi de yataydır"],
  a: 0,
  e: "TAHVİL ARZI negatif eğimlidir (arz edenler borçlanmak isteyenlerdir; faiz arttıkça borçlanma azalır). TAHVİL TALEBİ pozitif eğimlidir (talep edenler borç vermek isteyenlerdir; faiz arttıkça borç verme artar).",
  t: "Tahvil Piyasası", d: 3
},
{
  q: "Tahvil talebini etkileyen etmenler arasında aşağıdakilerden hangisi tahvil talebini AZALTIR?",
  o: ["Beklenen enflasyondaki artış", "Servetteki artış", "Beklenen getirideki artış", "Likiditedeki artış", "Risk primindeki artış"],
  a: 0,
  e: "Tahvil talebini AZALTAN etmenler: risk (−), bilgi edinme maliyeti (−) ve BEKLENEN ENFLASYON (−). Arttıranlar: servet, beklenen getiri, likidite, risk primi ve genişleme evresi.",
  t: "Tahvil Piyasası", d: 3
},
{
  q: "Aynı risk primine sahip olup vadeleri farklı olan menkul kıymetlerin vadeleri ile faiz oranları arasındaki ilişkiyi gösteren eğri hangisidir?",
  o: ["Getiri eğrisi", "Lorenz eğrisi", "Senyoraj eğrisi", "Phillips eğrisi", "Laffer eğrisi"],
  a: 0,
  e: "GETİRİ EĞRİSİ, aynı risk primine sahip olup vadeleri farklı olan menkul kıymetlerin vadeleri ve faiz oranları arasındaki ilişkiyi gösterir. RİSK YAPISI ise aynı vadeye sahip varlıkların özelliklerini karşılaştırır.",
  t: "Faiz Yapısı", d: 2
},
{
  q: "Negatif eğimli getiri eğrisi hangi durumu ifade eder?",
  o: ["Vade uzadıkça faizin azalması; kısa dönemli faizin uzun dönemli faizden yüksek olması", "Vade uzadıkça faizin artması", "Vade uzadıkça faizin değişmemesi", "Vade arttıkça faizin önce artıp sonra azalması", "Faiz oranlarının sıfır olması"],
  a: 0,
  e: "NEGATİF EĞİMLİ getiri eğrisinde vade uzadıkça faiz AZALIR; kısa dönemli faiz uzun dönemli faizden YÜKSEKTİR. (Notta bu durum 'kısa dönemli faizin uzun dönemli faizden düşük olduğu durum' şeklinde yazılmışsa da eğrinin tanımı gereği kısa vade faizi daha yüksektir.)",
  t: "Faiz Yapısı", d: 3
},
{
  q: "Bekleyişler hipotezine göre kısa ve uzun vadeli tahviller arasındaki ikame ilişkisi nasıldır?",
  o: ["Birbirlerini tam ikame ederler", "Aralarında hiç ikame yoktur", "İkame vardır ancak zayıftır", "Sadece kriz dönemlerinde ikame ederler", "Uzun vadeli tahvil kısa vadeliyi ikame eder, tersi olmaz"],
  a: 0,
  e: "BEKLEYİŞLER HİPOTEZİ'ne göre kısa ve uzun vadeli tahviller birbirlerini TAM İKAME EDER. BÖLÜNMÜŞ PİYASALAR hipotezinde hiç ikame yoktur; VADE TERCİHİ hipotezinde ikame vardır ama zayıftır.",
  t: "Faiz Yapısı", d: 2
},
{
  q: "Bekleyişler hipotezine göre kısa vadeli faiz oranlarının artması beklenirse getiri eğrisi nasıl olur?",
  o: ["Pozitif eğimli", "Negatif eğimli", "Yatay", "Ters U şeklinde", "Dikey"],
  a: 0,
  e: "Bekleyişler hipotezine göre: kısa vadeli faizlerin ARTMASI beklenirse POZİTİF eğimli, AZALMASI beklenirse NEGATİF eğimli, DEĞİŞMEMESİ durumunda YATAY getiri eğrisi oluşur.",
  t: "Faiz Yapısı", d: 2
},
{
  q: "Farklı vadelere sahip tahviller arasında hiçbir ikamenin olmadığını, faiz oranlarının birbirinden bağımsız oluştuğunu savunan hipotez hangisidir?",
  o: ["Bölünmüş Piyasalar Hipotezi", "Bekleyişler Hipotezi", "Vade Tercihi Hipotezi", "Etkin Piyasa Hipotezi", "Rasyonel Bekleyişler Hipotezi"],
  a: 0,
  e: "BÖLÜNMÜŞ PİYASALAR HİPOTEZİ farklı vadeli tahviller arasında ikame olmadığını savunur; menkul kıymetlerin faiz oranı arz-talep koşullarına bağlı olarak birbirinden bağımsızdır.",
  t: "Faiz Yapısı", d: 2
},
{
  q: "Vade Tercihi Hipotezi'ne göre bireylerin uzun vadeli tahvili tercih etmeleri için ödenen ek faize ne ad verilir?",
  o: ["Vade primi", "Risk primi", "Likidite primi", "Senyoraj", "Reeskont"],
  a: 0,
  e: "VADE TERCİHİ HİPOTEZİ'ne göre bireyler kısa vadeli tahvili tercih eder; uzun vadeli tahvili tercih etmeleri için daha fazla faiz ödenmelidir. Buna VADE PRİMİ denir. Bu nedenle vade arttıkça faiz artar ve pozitif getiri eğrisi oluşur.",
  t: "Faiz Yapısı", d: 2
},
{
  q: "Etkin Piyasa Hipotezi kim tarafından ortaya atılmıştır?",
  o: ["Eugene Fama", "James Tobin", "Milton Friedman", "Irving Fisher", "Knut Wicksell"],
  a: 0,
  e: "ETKİN PİYASA HİPOTEZİ EUGENE FAMA tarafından ortaya atılmıştır ve rasyonel beklentilerin finansal piyasaya uyarlanmış halidir. Buna göre mevcut bilgilerle ekstra para kazanmak mümkün değildir.",
  t: "Etkin Piyasa", d: 2
},

/* ---------- PARA POLİTİKASI ARAÇLARI ---------- */
{
  q: "Para politikasının genel araçları arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Disponibilite", "Açık piyasa işlemleri", "Zorunlu rezerv politikası", "Reeskont politikası", "Bunların hiçbiri genel araç değildir"],
  a: 0,
  e: "Para politikasının GENEL araçları: açık piyasa işlemleri, zorunlu rezerv politikası ve reeskont politikası. DİSPONİBİLİTE ise ÖZEL araçlardandır (selektif kredi kontrolü, kredi tavanı, ithalat teminat oranı, ikna yolu ile birlikte).",
  t: "Para Politikası Araçları", d: 2
},
{
  q: "Açık piyasa işlemleri ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Ekonomi üzerindeki etkisi çok geniş ve kalıcıdır", "En sık kullanılan para politikası aracıdır", "En esnek para politikası aracıdır", "Kolaylıkla tersine çevrilebilir", "Türkiye'de 1987 yılından itibaren uygulanmaya başlanmıştır"],
  a: 0,
  e: "APİ en sık kullanılan ve en esnek araçtır, kolaylıkla tersine çevrilebilir; ancak EKONOMİ ÜZERİNDEKİ ETKİSİ SINIRLIDIR. TCMB tahvil alırsa piyasadaki para miktarı artar.",
  t: "Para Politikası Araçları", d: 2
},
{
  q: "Merkez bankası dışındaki faktörler tarafından ortaya çıkan değişiklikleri dengelemek için yapılan açık piyasa işlemi türü hangisidir?",
  o: ["Defansif APİ", "Dinamik APİ", "Kesin alım-satım", "Repo", "Ters repo"],
  a: 0,
  e: "DEFANSİF APİ, MB dışındaki faktörlerce ortaya çıkan değişiklikleri dengelemek için yapılır. DİNAMİK APİ ise ekonomik faaliyet hacmini etkilemek için doğrudan yapılan işlemdir.",
  t: "Para Politikası Araçları", d: 3
},
{
  q: "Geri satma vaadiyle alma işlemine ne ad verilir ve maksimum vadesi kaç gündür?",
  o: ["Repo — 91 gün", "Ters repo — 91 gün", "Repo — 30 gün", "Ters repo — 30 gün", "Kesin alım — 91 gün"],
  a: 0,
  e: "Geri satma vaadiyle alma işlemi REPO, geri alma vaadiyle satma işlemi TERS REPO'dur. Maksimum vade 91 gündür. Kalıcı değişiklik istenirse kesin alım-satım yapılır.",
  t: "Para Politikası Araçları", d: 3
},
{
  q: "Döviz kurundaki bozulmaları dengelemek için kullanılan para miktarının açık piyasa işlemleri yoluyla dengelenmesi işlemine ne ad verilir?",
  o: ["Sterilizasyon", "Senyoraj", "Emisyon", "Tağşiş", "Disponibilite"],
  a: 0,
  e: "STERİLİZASYON, döviz kurundaki bozulmaları dengelemek için kullanılan para miktarının APİ yoluyla dengelenmesi işlemidir.",
  t: "Para Politikası Araçları", d: 2
},
{
  q: "Zorunlu rezerv (munzam karşılık) politikası ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Esnek bir araç değildir; zorunlu karşılık oranı artarsa piyasaya verilen para miktarı azalır", "En esnek para politikası aracıdır", "Zorunlu karşılık oranı artarsa piyasadaki para miktarı artar", "Ticari bankalar tarafından belirlenir", "2005 yılında kaldırılmıştır"],
  a: 0,
  e: "Zorunlu rezerv politikası kaydi para yaratmada en önemli etmenlerden biridir ancak ESNEK BİR ARAÇ DEĞİLDİR. Zorunlu karşılık oranı artarsa piyasaya verilen para miktarı AZALIR. (2005'te kaldırılan DİSPONİBİLİTE'dir.)",
  t: "Para Politikası Araçları", d: 2
},
{
  q: "Reeskont oranı azaldığında piyasadaki para miktarı nasıl değişir?",
  o: ["Artar", "Azalır", "Değişmez", "Önce azalır sonra artar", "Sıfırlanır"],
  a: 0,
  e: "Ticari bankalar reeskont oranı üzerinden MB'den kredi çeker. Reeskont oranı AZALIRSA piyasadaki para miktarı ARTAR. Reeskont politikasının avantajı likiditenin son kaynağı olma vasfını yerine getirmesidir.",
  t: "Para Politikası Araçları", d: 2
},
{
  q: "Reeskont oranındaki değişmeler yoluyla para politikası değişiklik sinyalinin piyasalara verilmesi olayına ne ad verilir?",
  o: ["Anons etkisi", "Likidite etkisi", "Fisher etkisi", "Sterilizasyon", "Sinyal primi"],
  a: 0,
  e: "ANONS ETKİSİ, reeskont oranındaki değişmeler yoluyla para politikası değişiklik sinyalinin piyasalara verilmesidir.",
  t: "Para Politikası Araçları", d: 3
},
{
  q: "Bankaların günlük kasalarında bulundurmak zorunda olduğu para miktarını ifade eden ve 2005 yılında kaldırılan uygulama hangisidir?",
  o: ["Disponibilite", "Zorunlu karşılık", "İthalat teminatı", "Kredi tavanı", "Mevduat faiz kontrolü"],
  a: 0,
  e: "DİSPONİBİLİTE, bankaların günlük kasalarında bulundurmak zorunda olduğu para miktarıdır ve 2005 yılında KALDIRILMIŞTIR.",
  t: "Para Politikası Araçları", d: 2
},
{
  q: "Bazı ekonomik faaliyetleri desteklemek için uzun vadeli ve daha düşük maliyetli kredi sağlanmasına ne ad verilir?",
  o: ["Selektif kredi denetimleri", "Kredi tavanı", "İthalat teminatı", "Disponibilite", "Reeskont"],
  a: 0,
  e: "SELEKTİF KREDİ DENETİMLERİ, bazı ekonomik faaliyetleri desteklemek için uzun vadeli ve daha düşük maliyetli kredi sağlanmasıdır. KREDİ TAVANI ise kredi miktarının sınırlandırılmasıdır.",
  t: "Para Politikası Araçları", d: 2
},

/* ---------- GELENEKSEL OLMAYAN ARAÇLAR ---------- */
{
  q: "TCMB'nin gecelik borç verme ve borç alma faizi arasında kalan aralığa ne ad verilir?",
  o: ["Faiz koridoru", "Geç likidite penceresi", "Rezerv opsiyon mekanizması", "Gösterge faiz", "Politika faizi"],
  a: 0,
  e: "FAİZ KORİDORU, ekonomik belirsizlikleri azaltmak amacıyla TCMB'nin gecelik borç verme ve borç alma faizi arasında kalan aralıktır. Geleneksel olmayan para politikası araçlarındandır.",
  t: "Geleneksel Olmayan Araçlar", d: 2
},
{
  q: "Gün sonunda bankalar arasında yaşanabilecek ödeme sorunlarını engellemek için bankalara tanınan borçlanma ve borç verme imkanına ne ad verilir?",
  o: ["Geç likidite penceresi", "Faiz koridoru", "Rezerv opsiyon mekanizması", "Gecelik repo", "Depo alım ihalesi"],
  a: 0,
  e: "GEÇ LİKİDİTE PENCERESİ, gün sonunda bankalar arasında yaşanabilecek ödeme sorunlarını engellemek için tanınan borçlanma ve borç verme imkanıdır.",
  t: "Geleneksel Olmayan Araçlar", d: 2
},
{
  q: "Bankaların TL zorunlu karşılıklarının belirli bir yüzdesini döviz ve altın cinsinden saklayabilmesine olanak sağlayan mekanizma hangisidir?",
  o: ["Rezerv Opsiyon Mekanizması (ROM)", "Faiz koridoru", "Geç likidite penceresi", "Disponibilite", "Sterilizasyon"],
  a: 0,
  e: "ROM (Rezerv Opsiyon Mekanizması) bankaların TL zorunlu karşılıklarının belirli bir yüzdesini döviz ve altın cinsinden saklamasına olanak sağlar. Hangi ağırlıklara göre kullanılacağı ROK (Rezerv Opsiyon Katsayısı)'na bağlıdır.",
  t: "Geleneksel Olmayan Araçlar", d: 3
},
{
  q: "DİBS temelinde ikincil piyasada en çok işlem gören devlet tahvillerinin faizine ne ad verilir?",
  o: ["Gösterge faiz", "Politika faizi", "Reeskont oranı", "Gecelik repo faizi", "Vade primi"],
  a: 0,
  e: "GÖSTERGE FAİZ, DİBS temelinde ikincil piyasada en çok işlem gören devlet tahvillerinin faizidir.",
  t: "Geleneksel Olmayan Araçlar", d: 3
},
{
  q: "Günümüzde TCMB'nin kullandığı politika faiz oranı hangisidir?",
  o: ["1 haftalık vadeli repo faiz oranı", "Gecelik borç alma faiz oranı", "Reeskont oranı", "Gösterge faiz", "3 aylık repo faiz oranı"],
  a: 0,
  e: "Günümüzde merkez bankası politika faiz oranını kullanır ve politika faiz oranı 1 HAFTALIK VADELİ REPO FAİZ ORANIDIR.",
  t: "Geleneksel Olmayan Araçlar", d: 2
},

/* ---------- MERKEZ BANKACILIĞI ---------- */
{
  q: "Dünyada ilk merkez bankası hangisidir ve hangi yıl kurulmuştur?",
  o: ["İsveç merkez bankası Riksbank — 1668", "İngiltere merkez bankası — 1668", "Fransa merkez bankası — 1700", "Hollanda merkez bankası — 1609", "ABD Federal Reserve — 1913"],
  a: 0,
  e: "Dünyada ilk merkez bankası 1668 yılında kurulan İSVEÇ merkez bankası RİKSBANK'tır. Dünyadaki ikinci merkez bankası İNGİLTERE merkez bankasıdır.",
  t: "Merkez Bankacılığı", d: 2
},
{
  q: "TCMB hangi yıl, hangi sayılı yasa ile kurulmuş ve hangi yıl faaliyetine başlamıştır?",
  o: ["1930 — 1715 sayılı yasa — 1931", "1923 — 1715 sayılı yasa — 1930", "1931 — 1211 sayılı yasa — 1932", "1930 — 1211 sayılı yasa — 1931", "1933 — 1715 sayılı yasa — 1934"],
  a: 0,
  e: "İzmir İktisat Kongresi'nde (1923) merkez bankası gerekliliği tartışılmış; 1930'da 1715 SAYILI YASA ile TCMB kurulmuş ve 1931'de faaliyetine başlamıştır. 15.000.000 TL sermaye ile A.Ş. olarak kurulmuştur.",
  t: "Merkez Bankacılığı", d: 2
},
{
  q: "TCMB'nin mülkiyet yapısı 14 Ocak 1970 değişikliğinden sonra nasıl olmuştur?",
  o: ["%51'i devlete, %49'u özel kesime ait (karma mülkiyet)", "%100'ü devlete ait", "%100'ü özel kesime ait", "%49'u devlete, %51'i özel kesime ait", "%75'i devlete, %25'i özel kesime ait"],
  a: 0,
  e: "TCMB kurulduğunda sermayesinin %100'ü devlete aitti. 14 Ocak 1970 değişikliğiyle %51'i devlete, %49'u özel kesime ait olmuştur; yani şu an TCMB KARMA MÜLKİYETE sahiptir.",
  t: "Merkez Bankacılığı", d: 3
},
{
  q: "TCMB'nin A grubu senetleri kime aittir?",
  o: ["Devlete ve hazineye", "Milli bankalara", "Yabancı bankalara ve imtiyazlı şirketlere", "TTK'ya tabi gerçek ve tüzel kişilere", "Para Politikası Kurulu üyelerine"],
  a: 0,
  e: "A grubu: Devlete ve hazineye; B grubu: Milli bankalara; C grubu: Yabancı bankalara ve imtiyazlı şirketlere; D grubu: TTK'ya tabi gerçek ve tüzel kişilere aittir.",
  t: "Merkez Bankacılığı", d: 3
},
{
  q: "TCMB'nin örgütsel yapısında en yüksek karar organı hangisidir?",
  o: ["Banka meclisi", "Hissedarlar genel kurulu", "Para politikası kurulu", "Denetleme kurulu", "Yönetim komitesi"],
  a: 0,
  e: "BANKA MECLİSİ en yüksek karar organıdır. Para Politikası Kurulu 2001 yılında oluşturulmuştur. Başkan ise en yüksek icra amiridir ve 4 yıllığına cumhurbaşkanı kararıyla atanır.",
  t: "Merkez Bankacılığı", d: 2
},
{
  q: "TCMB Para Politikası Kurulu hangi yıl oluşturulmuştur?",
  o: ["2001", "1970", "1930", "2005", "2010"],
  a: 0,
  e: "Para Politikası Kurulu 2001 yılında oluşturulmuştur. TCMB de aynı yıl (2001) ARAÇ BAĞIMSIZLIĞI kazanmıştır.",
  t: "Merkez Bankacılığı", d: 2
},
{
  q: "Merkez bankasının amaçlarını serbestçe belirlemesi hangi bağımsızlık türüdür?",
  o: ["Politik bağımsızlık", "Araç (ekonomik) bağımsızlık", "Mali bağımsızlık", "Kurumsal bağımsızlık", "Personel bağımsızlığı"],
  a: 0,
  e: "MB amaçlarını serbestçe belirliyorsa POLİTİK BAĞIMSIZLIK, araçlarını serbestçe seçiyorsa ARAÇ (EKONOMİK) BAĞIMSIZLIK sağlanmıştır. TCMB 2001'de ARAÇ bağımsızlığı kazanmıştır.",
  t: "Merkez Bankacılığı", d: 2
},
{
  q: "Merkez bankasının fonksiyonları arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Ticari kredi verip kar maksimizasyonu sağlamak", "Yerli paranın iç ve dış değerinde istikrar sağlamak", "Bankaların bankası olmak", "Likiditenin son kaynağı olmak", "Devletin bankacılığını yapmak"],
  a: 0,
  e: "MB'nin fonksiyonları: yerli paranın iç ve dış değerinde istikrar sağlamak, bankaların bankası olmak, likiditenin son kaynağı olmak ve devletin bankacılığını yapmak. Kar maksimizasyonu MB'nin fonksiyonu değildir.",
  t: "Merkez Bankacılığı", d: 1
},

/* ---------- HEDEFLEME STRATEJİLERİ ---------- */
{
  q: "Bir para politikasındaki amaç sayısı kadar politika aracı kullanılması gerektiğini belirten kural hangisidir?",
  o: ["Tinbergen Kuralı", "Taylor Kuralı", "Say Yasası", "Walras Yasası", "Gresham Kanunu"],
  a: 0,
  e: "TİNBERGEN KURALI: bir para politikasındaki amaç sayısı ne kadarsa o kadar politika aracı kullanılmalıdır. 2008 krizinden sonra amaç sayısındaki artış araç sayısında da artışa neden olmuştur.",
  t: "Hedefleme Stratejileri", d: 2
},
{
  q: "Merkez bankası faizleri hedef olarak seçerse ne olur?",
  o: ["Parasal büyüklükler dalgalanır", "Faiz oranları dalgalanır", "Her ikisi de sabit kalır", "Enflasyon otomatik olarak düşer", "Döviz kuru sabitlenir"],
  a: 0,
  e: "MB faizleri hedef olarak seçerse PARASAL BÜYÜKLÜKLER dalgalanır. Eğer parasal büyüklükleri seçerse FAİZ ORANLARI dalgalanır.",
  t: "Hedefleme Stratejileri", d: 3
},
{
  q: "Harcama dengesizliği durumunda uygun hedef seçimi hangisidir?",
  o: ["Parasal büyüklüklerle müdahale edilir", "Faiz hedeflemesiyle müdahale edilir", "Döviz kuru hedeflemesiyle müdahale edilir", "Hiçbir müdahale yapılmaz", "Zorunlu karşılık oranı değiştirilir"],
  a: 0,
  e: "HARCAMA dengesizliğinde parasal büyüklüklerle müdahale edilir. ARZ YÖNLÜ ve PORTFÖY dengesizliğinde faiz hedeflemesiyle; PARA ARZI dengesizliğinde parasal büyüklük veya faiz hedeflemesiyle müdahale edilir.",
  t: "Hedefleme Stratejileri", d: 3
},
{
  q: "Döviz kuru hedeflemesi (nominal çıpa) stratejisinde merkez bankası görevini hangi kuruma devreder?",
  o: ["Para kuruluna", "Hazineye", "IMF'ye", "Bankacılık Düzenleme ve Denetleme Kurumu'na", "Para Politikası Kurulu'na"],
  a: 0,
  e: "Döviz kuru hedeflemesinde MB görevini PARA KURULUNA devreder. Para kurulu sabit döviz kuru üzerinden döviz karşılığında piyasaya para sürer; yerli paranın karşılığı tamamıyla yabancı paradır ve karşılıksız para basımı engellenir. Dezavantajı aktif para politikası izlenememesidir.",
  t: "Hedefleme Stratejileri", d: 2
},
{
  q: "Türkiye'de 1 Ocak 2000 tarihinde uygulamaya konan sabit kur sistemi hangi adla bilinir ve ne zaman terk edilmiştir?",
  o: ["Enflasyonu Düşürme Programı — 2001'de esnek kura geçilmiştir", "Güçlü Ekonomiye Geçiş Programı — 2002'de terk edilmiştir", "Para Kurulu Programı — 2005'te terk edilmiştir", "İstikrar Programı — 2003'te terk edilmiştir", "Nominal Çıpa Programı — 1999'da terk edilmiştir"],
  a: 0,
  e: "Türkiye'de 1 Ocak 2000'de uygulamaya konan sabit kur sistemi ENFLASYONU DÜŞÜRME PROGRAMI olarak geçer. Başarısız olduğu için 2001 yılında ESNEK KUR sistemine geçilmiştir.",
  t: "Hedefleme Stratejileri", d: 2
},
{
  q: "Türkiye'de parasal hedefleme stratejisi hangi yıllarda uygulanmıştır?",
  o: ["1990, 1994, 1996 ve 1998", "2000, 2001, 2002 ve 2003", "1980, 1983, 1985 ve 1987", "2002, 2004, 2006 ve 2008", "1970, 1975, 1980 ve 1985"],
  a: 0,
  e: "Türkiye'de parasal hedefleme 1990, 1994, 1996 ve 1998 yıllarında uygulanmış ancak enflasyon kontrol altına alınamamıştır. Dünyada parasal hedefleme ile fiyat istikrarı sağlayan iki ülke ALMANYA ve İSVİÇRE'dir.",
  t: "Hedefleme Stratejileri", d: 3
},
{
  q: "Dünyada parasal hedefleme uygulayarak fiyat istikrarı sağlayan iki ülke hangileridir?",
  o: ["Almanya ve İsviçre", "ABD ve İngiltere", "Yeni Zelanda ve Kanada", "Japonya ve Güney Kore", "Fransa ve İtalya"],
  a: 0,
  e: "Dünyada parasal hedefleri uygulayıp fiyat istikrarı sağlayan iki ülke ALMANYA ve İSVİÇRE'dir. Parasal hedeflemeyi uygulamak için serbest döviz kuru rejimi gerekir.",
  t: "Hedefleme Stratejileri", d: 3
},
{
  q: "Enflasyon hedeflemesi stratejisi ilk kez hangi ülkede uygulanmıştır?",
  o: ["Yeni Zelanda", "Almanya", "İsviçre", "İngiltere", "Kanada"],
  a: 0,
  e: "Enflasyon hedeflemesi ilk kez 1990'lı yıllarda YENİ ZELANDA'da uygulanmıştır. Çok katı uygulanan bu stratejide enflasyondan sapma olması durumunda MB başkanı görevden alınmıştır.",
  t: "Hedefleme Stratejileri", d: 2
},
{
  q: "Türkiye'de örtük ve açık enflasyon hedeflemesi hangi yıllarda uygulanmıştır?",
  o: ["2002-2005 örtük, 2006'dan itibaren açık", "2001-2003 örtük, 2004'ten itibaren açık", "2000-2002 örtük, 2003'ten itibaren açık", "2006-2008 örtük, 2009'dan itibaren açık", "1998-2001 örtük, 2002'den itibaren açık"],
  a: 0,
  e: "Türkiye'de enflasyon hedeflemesi 2001 Güçlü Ekonomiye Geçiş Programı'nda kararlaştırılıp 2002'den itibaren uygulanmaya başlanmıştır: 2002-2005 arası ÖRTÜK, 2006'dan itibaren AÇIK enflasyon hedeflemesi yapılmıştır.",
  t: "Hedefleme Stratejileri", d: 2
},
{
  q: "Enflasyon hedeflemesinin uygulanabilmesi için gereken ön şartlar arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Sabit döviz kuru rejiminin uygulanması", "Merkez bankasının bağımsız olması", "Para politikasının şeffaf olması", "Mali disiplinin sağlanması", "Gelişmiş finansal sistemin bulunması"],
  a: 0,
  e: "Enflasyon hedeflemesinin ön şartları: MB bağımsızlığı, şeffaflık, kurala bağlılık, mali disiplin ve gelişmiş finansal sistem. Sabit döviz kuru rejimi bir ön şart DEĞİLDİR (parasal hedefleme için de serbest kur rejimi gerekir).",
  t: "Hedefleme Stratejileri", d: 2
},

/* ---------- FİNANSAL PİYASALAR ---------- */
{
  q: "Vadesi 1 yıldan az olan menkul kıymetlerin alınıp satıldığı piyasa hangisidir?",
  o: ["Para piyasası", "Sermaye piyasası", "Vadeli piyasa", "Birincil piyasa", "Tezgahüstü piyasa"],
  a: 0,
  e: "PARA PİYASASI vadesi 1 yıldan AZ, SERMAYE PİYASASI ise vadesi 1 yıldan FAZLA menkul kıymetlerin alınıp satıldığı piyasadır.",
  t: "Finansal Piyasalar", d: 1
},
{
  q: "Borsa dışında, organize olmamış piyasalarda menkul kıymetlerin alınıp satıldığı ortamlara ne ad verilir?",
  o: ["Tezgahüstü piyasa", "Spot piyasa", "Birincil piyasa", "Para piyasası", "Sermaye piyasası"],
  a: 0,
  e: "TEZGAHÜSTÜ PİYASA, borsa dışında organize olmamış piyasalarda menkul kıymetlerin alınıp satıldığı ortamlardır. Bankalararası repo, para, tahvil ve döviz piyasaları örnektir.",
  t: "Finansal Piyasalar", d: 2
},
{
  q: "Menkul kıymetin ilk kez işlem gördüğü piyasa ile el değiştirdiği piyasa sırasıyla hangileridir?",
  o: ["Birincil piyasa — İkincil piyasa", "İkincil piyasa — Birincil piyasa", "Spot piyasa — Vadeli piyasa", "Para piyasası — Sermaye piyasası", "Borsa — Tezgahüstü piyasa"],
  a: 0,
  e: "Menkul kıymetin ilk kez işlem gördüğü piyasa BİRİNCİL PİYASA, kıymetlerin el değiştirdiği piyasa İKİNCİL PİYASA'dır.",
  t: "Finansal Piyasalar", d: 1
},
{
  q: "Menkul kıymetlerin alışverişinde teslim ve ödemenin anında yapıldığı piyasa hangisidir?",
  o: ["Spot piyasa", "Vadeli piyasa", "Birincil piyasa", "İkincil piyasa", "Tezgahüstü piyasa"],
  a: 0,
  e: "SPOT PİYASA'da teslim ve ödeme anında yapılır. VADELİ PİYASA'da ise gelecekteki bir tarih için bugünden anlaşılan fiyat üzerinden işlem yapılır.",
  t: "Finansal Piyasalar", d: 1
},
{
  q: "Para politikasının amaçları arasında birbiriyle çelişen amaçlar hangileridir?",
  o: ["Fiyat istikrarı ile tam istihdam; fiyat istikrarı ile ekonomik büyüme", "Tam istihdam ile ekonomik büyüme", "Finansal istikrar ile faiz istikrarı", "Döviz piyasasında istikrar ile ödemeler bilançosunda istikrar", "Hiçbir amaç birbiriyle çelişmez"],
  a: 0,
  e: "Para politikası amaçlarının hepsi birbiriyle örtüşmez. Notta çelişen amaçlar 1-2 ve 1-3 olarak verilir: FİYAT İSTİKRARI ile TAM İSTİHDAM ve FİYAT İSTİKRARI ile EKONOMİK BÜYÜME.",
  t: "Para Politikası Amaçları", d: 3
},
{
  q: "Türkiye'de bankalararası para piyasası hangi yıl kurulmuştur?",
  o: ["1986", "1987", "1980", "1990", "2001"],
  a: 0,
  e: "Bankalar arası para piyasası 1986 yılında kurulmuştur. Rezerv piyasasında işlemler gecelik faiz oranı üzerinden yürütülür; 2006 yılıyla birlikte DEPO ALIM İHALELERİNE başlanmıştır. (APİ ise 1987'de başlamıştır.)",
  t: "Finansal Piyasalar", d: 3
}

]);

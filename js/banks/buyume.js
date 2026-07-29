/* İktisadi Büyüme ve Kalkınma — kaynak: "Büyüme ve Kalkınma.pdf" */
KPSS.registerBank('buyume', [

/* ---------- TEMEL KAVRAMLAR ---------- */
{
  q: "Reel GSYİH'daki artış oranına ne ad verilir?",
  o: ["Brüt büyüme oranı", "Net büyüme oranı", "Potansiyel büyüme", "Doğal büyüme hızı", "Garantili büyüme hızı"],
  a: 0,
  e: "Brüt büyüme oranı (hızı) reel GSYİH'daki artış oranıdır. Net büyüme oranı ise KİŞİ BAŞI reel GSYİH'daki artıştır; brüt büyüme oranından nüfus artış hızı çıkarılarak bulunur.",
  t: "Temel Kavramlar", d: 1
},
{
  q: "Net büyüme oranı nasıl hesaplanır?",
  o: ["Brüt büyüme oranından nüfus artış hızı çıkarılarak", "Brüt büyüme oranına nüfus artış hızı eklenerek", "Reel GSYİH'nın nominal GSYİH'ya bölünmesiyle", "Tasarruf oranının sermaye hasıla katsayısına bölünmesiyle", "Doğum oranından ölüm oranı çıkarılarak"],
  a: 0,
  e: "Net büyüme oranı kişi başı reel GSYİH'daki artış oranıdır ve brüt büyüme oranından nüfus artış hızı çıkarılarak hesaplanır.",
  t: "Temel Kavramlar", d: 1
},
{
  q: "Üretim imkanları eğrisinin sağa kayması aşağıdakilerden hangisini ifade eder?",
  o: ["Potansiyel büyümeyi", "Konjonktürel dalgalanmayı", "Enflasyonist açığı", "Deflasyonist süreci", "Gelir dağılımının düzelmesini"],
  a: 0,
  e: "Potansiyel büyüme, ekonominin tam istihdam düzeyindeki GSYİH'sinin büyüme oranıdır ve üretim imkanları eğrisinin sağa kayması ile gösterilir.",
  t: "Temel Kavramlar", d: 1
},
{
  q: "Büyüme ve kalkınma ayrımı ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Kalkınma niceliksel (kantitatif) bir olgudur ve kolayca ölçülebilir", "Büyüme niceliksel (kantitatif) bir olgudur", "Kalkınma niteliksel (kalitatif) bir olgudur ve ölçülemez", "Kalkınma = Büyüme + yapısal (sosyo-kültürel) değişiklikler", "Kalkınma az gelişmiş, büyüme gelişmiş ekonomilerin sonucudur"],
  a: 0,
  e: "Tam tersi: BÜYÜME niceliksel (kantitatif), KALKINMA niteliksel (kalitatif) bir olgudur ve kalkınma ölçülemez. Kalkınma, büyümenin üzerine yapısal ve sosyo-kültürel değişiklikleri ekler.",
  t: "Temel Kavramlar", d: 2
},
{
  q: "Ekonomik büyüme sağlanmasına rağmen işsizliğin arttığı büyüme türü hangisidir?",
  o: ["İşsiz büyüme", "Acımasız büyüme", "Sessiz büyüme", "Köksüz büyüme", "Geleceksiz büyüme"],
  a: 0,
  e: "Kaçınılması gereken büyüme çeşitlerinden İŞSİZ BÜYÜME, büyüme olmasına rağmen işsizliğin arttığı durumdur.",
  t: "Büyüme Çeşitleri", d: 1
},
{
  q: "Gelir dağılımının daha adaletsiz hale geldiği büyüme türü hangisidir?",
  o: ["Acımasız büyüme", "İşsiz büyüme", "Sessiz büyüme", "Köksüz büyüme", "Geleceksiz büyüme"],
  a: 0,
  e: "ACIMASIZ BÜYÜME, gelir dağılımının daha adaletsiz hale geldiği büyüme çeşididir.",
  t: "Büyüme Çeşitleri", d: 2
},
{
  q: "Demokratik hak ve özgürlüklerde iyileşmenin yaşanmadığı büyüme türü hangisidir?",
  o: ["Sessiz büyüme", "Köksüz büyüme", "İşsiz büyüme", "Acımasız büyüme", "Geleceksiz büyüme"],
  a: 0,
  e: "SESSİZ BÜYÜME, demokratik hak ve özgürlüklerde iyileşmenin yaşanmadığı büyüme çeşididir.",
  t: "Büyüme Çeşitleri", d: 2
},
{
  q: "Büyümenin, toplumun yozlaşması ve kültürel kimlik kaybı pahasına gerçekleşmesine ne ad verilir?",
  o: ["Köksüz büyüme", "Geleceksiz büyüme", "Sessiz büyüme", "Acımasız büyüme", "İşsiz büyüme"],
  a: 0,
  e: "KÖKSÜZ BÜYÜME, ekonomik büyümenin toplumun yozlaşması ve kültürel kimlik kaybı pahasına gerçekleşmesidir. GELECEKSİZ BÜYÜME ise yenilenemeyen doğal kaynakların tüketilmesi pahasına gerçekleşen büyümedir.",
  t: "Büyüme Çeşitleri", d: 2
},
{
  q: "Büyümenin, yenilenemeyen doğal kaynakların tüketilmesi pahasına gerçekleşmesine ne ad verilir?",
  o: ["Geleceksiz büyüme", "Köksüz büyüme", "Sessiz büyüme", "İşsiz büyüme", "Acımasız büyüme"],
  a: 0,
  e: "GELECEKSİZ BÜYÜME, büyümenin yenilenemeyen doğal kaynakların tüketilmesi pahasına gerçekleşmesidir.",
  t: "Büyüme Çeşitleri", d: 2
},

/* ---------- KLASİK BÜYÜME ---------- */
{
  q: "Adam Smith'in büyüme görüşleri ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Toplumların zenginleşmesinin kökeninde iş bölümü ve uzmanlaşma sayesinde artan verimlilik ile sermaye birikimi yatar", "Ekonomiler durgunluğa ve yoksulluğa mahkumdur", "Gıda aritmetik, nüfus geometrik dizi şeklinde artar", "Yatırımların tek kaynağı kapitalist sınıfın karıdır", "Kapitalist sistem emek sömürüsüne dayanır"],
  a: 0,
  e: "Smith'e göre zenginleşmenin kökeninde iş bölümü ve uzmanlaşmayla artan verimlilik ve sermaye birikimi yatar; bunun için pazarın yeterince büyük olması gerekir. Smith İYİMSER klasikler arasındadır.",
  t: "Klasik Büyüme", d: 2
},
{
  q: "Gıda ürünlerinin aritmetik, nüfusun ise geometrik dizi şeklinde arttığını savunan iktisatçı kimdir?",
  o: ["Thomas Malthus", "Adam Smith", "David Ricardo", "Karl Marx", "J. Schumpeter"],
  a: 0,
  e: "Malthus'un Nüfus Teorisi'ne göre gıda ürünleri aritmetik, nüfus ise geometrik dizi şeklinde artar. Malthus KÖTÜMSER klasiklerdendir.",
  t: "Klasik Büyüme", d: 1
},
{
  q: "Nüfusun artmasına ya da azalmasına imkan vermeyen gelir düzeyine ne ad verilir?",
  o: ["Geçimlik ücret", "Piyasa ücreti", "Asgari ücret", "Etkin ücret", "Nominal ücret"],
  a: 0,
  e: "Malthus'a göre ekonomi kararlı denge noktasında iken oluşan kişi başı gelire GEÇİMLİK ÜCRET denir; bu, nüfusun artmasına ya da azalmasına imkan vermeyen gelir düzeyidir.",
  t: "Klasik Büyüme", d: 2
},
{
  q: "Ricardo'nun büyüme görüşleri ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Ricardo iyimser klasikler arasında değerlendirilir", "Yatırımların tek kaynağı kapitalist sınıfın elde ettiği kardır", "Tarıma açılan yeni arazilerde azalan verimler yasası devreye girer", "Diferansiyel Rant Teorisi'ni geliştirmiştir", "Piyasa ücreti ve doğal ücret olmak üzere iki ücret düzeyinden bahseder"],
  a: 0,
  e: "Ricardo, azalan verimler nedeniyle karlılığın düşeceği ve büyümenin durağan duruma ulaşacağı görüşüyle KÖTÜMSER klasikler arasındadır. İyimser olan Adam Smith'tir.",
  t: "Klasik Büyüme", d: 3
},
{
  q: "Ricardo'ya göre emek sahibinin nesillerinin ancak aynı düzeyde devamına imkan veren, çoğalmalarına ya da azalmalarına imkan vermeyen ücret hangisidir?",
  o: ["Doğal ücret", "Piyasa ücreti", "Etkin ücret", "Reel ücret", "Artık değer"],
  a: 0,
  e: "Ricardo iki ücret düzeyinden bahseder: PİYASA ÜCRETİ emek arz ve talebiyle piyasada belirlenir; DOĞAL ÜCRET ise emek sahibinin nesillerinin aynı düzeyde devamına imkan veren, çoğalma veya azalmaya imkan vermeyen ücrettir.",
  t: "Klasik Büyüme", d: 3
},
{
  q: "Marx'a göre ücret oranını belirleyen unsur aşağıdakilerden hangisidir?",
  o: ["Yedek sanayi ordusu (iş arayanlar)", "Merkez bankası politikası", "Sendikaların gücü", "Marjinal verimlilik", "Devletin asgari ücret kararı"],
  a: 0,
  e: "Marx'a göre ücret oranını belirleyen, YEDEK SANAYİ ORDUSU olarak nitelendirilen iş arayanlardır. Ücretlerin düşmesi ve sermaye yoğun teknoloji ile artan işsizlik talep yetersizliğine ve krizlere yol açar.",
  t: "Klasik Büyüme", d: 3
},
{
  q: "Marx'ın, kar oranlarının zaman içinde azalarak tekelci kapitalizme yol açmasını ifade eden yasası hangisidir?",
  o: ["Azalan kar oranları yasası", "Azalan verimler yasası", "Mahreçler yasası", "Gresham yasası", "Okun yasası"],
  a: 0,
  e: "Marx'a göre burjuva sınıfı kar oranlarını arttırmak için sermaye yoğun teknolojiye geçer; ancak bu süreç kar oranlarını zamanla azaltır. AZALAN KAR ORANLARI YASASI olarak ifade edilen bu süreç tekelci kapitalizme yol açar.",
  t: "Klasik Büyüme", d: 2
},
{
  q: "Yeniliklerin yapılmasıyla eski malların ve endüstrilerin yıkılıp yerlerine yenilerinin gelmesi olgusuna ne ad verilir ve bu kavram kime aittir?",
  o: ["Yaratıcı yıkım — Schumpeter", "Büyük itiş — Rosenstein-Rodan", "Yaparak öğrenme — Arrow", "Yoksulluğun kısır döngüsü — Nurkse", "Kritik minimum çaba — Leibenstein"],
  a: 0,
  e: "YARATICI YIKIM Schumpeter'e aittir. Ayrıca DİNAMİK GİRİŞİMCİLİK kavramı da Schumpeter'e aittir. Schumpeter'e göre kapitalizmi sürekli değişim içinde tutan asıl güç yeniliklerdir.",
  t: "Klasik Büyüme", d: 1
},
{
  q: "Dinamik girişimcilik kavramı aşağıdaki iktisatçılardan hangisine aittir?",
  o: ["Schumpeter", "Arrow", "Romer", "Lucas", "Barro"],
  a: 0,
  e: "Dinamik girişimcilik kavramı Schumpeter'e aittir. Schumpeter yaratıcı yıkım modeliyle, devrime gerek kalmadan kapitalizmin evrimle sosyalist sisteme geçeceğini savunur.",
  t: "Klasik Büyüme", d: 2
},

/* ---------- HARROD-DOMAR ---------- */
{
  q: "Harrod-Domar büyüme modeli ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Yatırımların hem kapasite arttırıcı hem gelir arttırıcı etkisini inceleyen uzun dönemli ve dinamik bir modeldir", "Yatırımların yalnızca gelir arttırıcı etkisini inceler", "Yatırımların yalnızca kapasite arttırıcı etkisini inceler", "Cobb-Douglas tipi üretim fonksiyonu kullanır", "Girdiler arasında tam ikame vardır"],
  a: 0,
  e: "Klasikler yatırımların sadece kapasite arttırıcı, Keynes ise sadece gelir arttırıcı etkisini incelemiştir. Harrod-Domar iki etkiyi birlikte ele alan UZUN DÖNEMLİ ve DİNAMİK bir modeldir.",
  t: "Harrod-Domar", d: 2
},
{
  q: "Harrod-Domar modelinde kullanılan üretim fonksiyonu ve girdi ilişkisi nasıldır?",
  o: ["Leontief tipi üretim fonksiyonu; girdiler arasında ikame yoktur, tam tamamlayıcılık vardır", "Cobb-Douglas tipi üretim fonksiyonu; girdiler birbirinin ikamesidir", "Leontief tipi üretim fonksiyonu; girdiler birbirinin tam ikamesidir", "CES tipi üretim fonksiyonu; kısmi ikame vardır", "Doğrusal olmayan fonksiyon; ikame esnekliği sonsuzdur"],
  a: 0,
  e: "Harrod-Domar modelinde LEONTIEF tipi üretim fonksiyonu kullanılır: girdiler arasında ikame yoktur, tam tamamlayıcılık söz konusudur ve K/L oranı sabittir. Cobb-Douglas ise SOLOW modelinin varsayımıdır.",
  t: "Harrod-Domar", d: 3
},
{
  q: "Harrod-Domar modelinde büyüme oranı aşağıdakilerden hangisi ile ifade edilir? (s: marjinal tasarruf eğilimi, v: sermaye hasıla katsayısı)",
  o: ["s / v", "v / s", "s × v", "s + v", "s − v"],
  a: 0,
  e: "Harrod-Domar modelinde büyüme oranı = s / v'dir. Burada s marjinal tasarruf eğilimi, v ise hızlandıran yani sermaye hasıla katsayısıdır.",
  t: "Harrod-Domar", d: 1
},
{
  q: "Harrod-Domar modelinde sermaye hasıla katsayısı (v) nasıl tanımlanır?",
  o: ["Sermaye stokundaki artışın hasıladaki artışa oranı (ΔK/ΔY)", "Hasıladaki artışın sermaye stokundaki artışa oranı (ΔY/ΔK)", "Tasarrufun gelire oranı", "Tüketimin gelire oranı", "Yatırımın tasarrufa oranı"],
  a: 0,
  e: "Sermaye hasıla katsayısı v = ΔK/ΔY'dir. ΔK sermaye stokundaki artışı, yani yatırımı ifade eder (ΔK = I). Bu nedenle v = I/ΔY ve I = v·ΔY yazılabilir.",
  t: "Harrod-Domar", d: 2
},
{
  q: "Harrod-Domar modelinde planlanan (dönem başı, ex-ante) tasarruf ve yatırım eşitliğini sağlayan büyüme hızı hangisidir?",
  o: ["Gerekli (garantili) büyüme hızı", "Gerçekleşen (fiili) büyüme hızı", "Doğal büyüme hızı", "Potansiyel büyüme hızı", "Net büyüme hızı"],
  a: 0,
  e: "GEREKLİ (GARANTİLİ) BÜYÜME HIZI (Gw) dönem başı (ex-ante) yani planlanan değerlere göre hesaplanır. GERÇEKLEŞEN (FİİLİ) büyüme hızı (Ga) ise dönem sonu (ex-post) gerçekleşen değerlere göre hesaplanır.",
  t: "Harrod-Domar", d: 2
},
{
  q: "Harrod-Domar modelinde gerçekleşen büyüme hızının gerekli büyüme hızından büyük olması (Ga > Gw) ekonomide neye işaret eder?",
  o: ["Canlanma ve enflasyonist sürece", "Durgunluk ve deflasyonist sürece", "Bıçak sırtı dengeye", "Tam istihdam dengesine", "Durağan duruma"],
  a: 0,
  e: "Ga > Gw ise ekonomide canlanma, yani ENFLASYONİST SÜREÇ vardır. Ga < Gw ise durgunluk (deflasyonist süreç), Ga = Gw ise ekonomi dengededir ve bu denge BIÇAK SIRTI DENGE olarak adlandırılır.",
  t: "Harrod-Domar", d: 2
},
{
  q: "Harrod-Domar modelinde 'bıçak sırtı denge' hangi durumu ifade eder?",
  o: ["Gerçekleşen büyüme hızının gerekli büyüme hızına eşit olduğu, kolayca bozulabilen dengeyi", "Doğal büyüme hızının maksimum olduğu durumu", "Kişi başı büyümenin sıfır olduğu durağan durumu", "Tasarruf oranının altın kurala eşit olduğu durumu", "Yakınsamanın tamamlandığı durumu"],
  a: 0,
  e: "Yatırımların kapasite ve gelir arttırıcı etkilerinin gerçek hayatta birbirine eşit olması güç olduğu için Ga = Gw dengesi BIÇAK SIRTI DENGE olarak adlandırılır. Bu iki etki eşit değilse ekonomi hızla dengeden uzaklaşır.",
  t: "Harrod-Domar", d: 2
},
{
  q: "Harrod-Domar modelinde doğal büyüme hızı (GN) nasıl hesaplanır?",
  o: ["Nüfus artış hızı + teknolojik gelişme hızı + sermaye yıpranma oranı", "Nüfus artış hızı − teknolojik gelişme hızı", "Tasarruf oranı / sermaye hasıla katsayısı", "Nüfus artış hızı + tasarruf oranı", "Teknolojik gelişme hızı − amortisman oranı"],
  a: 0,
  e: "Doğal büyüme hızı GN = n + t + d şeklindedir (nüfus artış hızı + teknolojik gelişme hızı + sermaye yıpranma oranı). Üretim faktörlerinin sonuna kadar kullanılmasıyla oluşur; maksimum büyüme oranı ya da tam istihdam tavanı da denir.",
  t: "Harrod-Domar", d: 2
},
{
  q: "Harrod-Domar modelinin varsayımları arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Teknolojik gelişme vardır ve büyümeyi belirler", "Ölçeğe göre sabit getiri söz konusudur", "Fiyatlar genel düzeyi sabittir", "Ekonomi dışa kapalıdır ve kamu harcamaları yoktur", "Sermaye hasıla katsayısı sabittir"],
  a: 0,
  e: "Harrod-Domar modelinde teknolojik gelişme YOKTUR; ayrıca amortisman, dışsallık ve kamu harcamaları da yoktur, ekonomi dışa kapalıdır, tek mal üretilir ve APS = MPS'dir.",
  t: "Harrod-Domar", d: 3
},

/* ---------- SOLOW ---------- */
{
  q: "Solow (Neo-Klasik) büyüme modelinin varsayımları ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Girdiler arasında ikame yoktur, tam tamamlayıcılık vardır", "Cobb-Douglas tipi üretim fonksiyonu kullanılır", "Azalan verimler yasası geçerlidir", "Ölçeğe göre sabit getiri vardır (α + β = 1)", "Tam rekabet ve tam istihdam koşulları geçerlidir"],
  a: 0,
  e: "Solow modelinde Cobb-Douglas üretim fonksiyonu kullanılır ve girdiler BİRBİRİNİN İKAMESİDİR. Girdiler arasında ikamenin olmadığı, tam tamamlayıcılığın geçerli olduğu model Harrod-Domar'dır (Leontief).",
  t: "Solow Modeli", d: 2
},
{
  q: "Solow büyüme modelinde tasarruf eğilimi, nüfus artış oranı, amortisman oranı ve teknolojik gelişme hızı nasıl kabul edilmiştir?",
  o: ["Dışsal", "İçsel", "Rassal", "Devlet tarafından belirlenen", "Sıfır"],
  a: 0,
  e: "Solow modelinde toplumun tasarruf eğilimi, nüfus artış oranı, amortisman oranı ve teknolojik gelişme hızı DIŞSAL kabul edilmiştir. Bu nedenle Solow bir DIŞSAL büyüme modelidir.",
  t: "Solow Modeli", d: 2
},
{
  q: "Durağan durumda işçi başına tüketimi maksimize eden işçi başı sermaye birikimine ne ad verilir?",
  o: ["Sermaye birikiminin altın kuralı", "Solow artığı", "Solow paradoksu", "Yakınsama hipotezi", "Bıçak sırtı denge"],
  a: 0,
  e: "Durağan durumda işçi başına tüketimi maksimize eden işçi başı sermaye birikimine SERMAYENİN ALTIN KURALI denir. Altın kural analizi Solow modeline PHELPS tarafından eklenmiştir.",
  t: "Solow Modeli", d: 2
},
{
  q: "Sermaye birikiminin altın kuralı analizini Solow büyüme modeline ekleyen iktisatçı kimdir?",
  o: ["Phelps", "Swan", "Romer", "Rebelo", "Lucas"],
  a: 0,
  e: "Altın kural analizi Solow Büyüme Modeline PHELPS tarafından eklenmiştir.",
  t: "Solow Modeli", d: 2
},
{
  q: "Solow paradoksu (Solow sürprizi) aşağıdakilerden hangisini ifade eder?",
  o: ["Durağan durumda çıktı, sermaye ve işgücü artmasına rağmen işçi başına çıktı ve sermayenin artmamasını", "Tasarruf oranının uzun dönemde işçi başına hasılayı sürekli arttırmasını", "Az gelişmiş ülkelerin gelişmiş ülkeleri yakalayamamasını", "Teknolojik ilerlemenin hasılayı azaltmasını", "Nüfus artışının kişi başı geliri arttırmasını"],
  a: 0,
  e: "Solow paradoksu, durağan durumun büyümenin olmadığı değil İŞÇİ BAŞINA büyümenin olmadığı bir durum olduğunu ifade eder. Tasarruf oranı kısa dönemde işçi başına hasıla ve sermayeyi arttırır, ancak uzun dönemde bu değişkenler üzerinde büyüme etkisi yaratmaz.",
  t: "Solow Modeli", d: 3
},
{
  q: "Solow modelinde teknolojik ilerlemeden kaynaklanan hasıla artışına ne ad verilir?",
  o: ["Solow artığı (Solow bakiyesi)", "Solow paradoksu", "Horndal etkisi", "Altın kural", "Yakınsama"],
  a: 0,
  e: "Solow, ekonomik büyüme oranının emek ve sermaye artışı oranından fazla olmasının teknoloji kaynaklı olduğunu kabul etmiştir. Teknolojik ilerlemeden kaynaklanan hasıla artışına SOLOW ARTIĞI (Solow bakiyesi) denir.",
  t: "Solow Modeli", d: 2
},
{
  q: "Az gelişmiş ülkelerin gelişmiş ülkelere göre daha yüksek büyüme performansı göstererek zaman içinde kişi başı gelir seviyelerini yakalayacağını ileri süren hipotez hangisidir?",
  o: ["Yakınsama hipotezi", "Bağımlılık yaklaşımı", "Kuznets ters U hipotezi", "Singer-Prebisch yaklaşımı", "Demografik geçiş teorisi"],
  a: 0,
  e: "YAKINSAMA HİPOTEZİ Solow büyüme modelinden çıkarılan bir sonuçtur. Önemli ayrım: yakınsama hipotezi Solow modelinde GEÇERLİ, içsel büyüme modellerinde GEÇERSİZDİR.",
  t: "Solow Modeli", d: 2
},

/* ---------- İÇSEL BÜYÜME ---------- */
{
  q: "İçsel büyüme modellerinin özellikleri ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Yakınsama hipotezi geçerlidir", "Eksik rekabet koşulları söz konusudur", "Ölçeğe göre artan getiri vardır", "Teknolojik gelişme içsel kabul edilmiştir", "Optimal büyüme için devlet müdahalesi gereklidir"],
  a: 0,
  e: "İçsel büyüme modellerinde YAKINSAMA HİPOTEZİ GEÇERSİZDİR. Ayrıca Solow'da azalan verimler geçerliyken içsel büyüme modellerinde beşeri sermayeden ötürü ARTAN VERİMLER geçerlidir.",
  t: "İçsel Büyüme", d: 2
},
{
  q: "AK büyüme modeli aşağıdaki iktisatçılardan hangisine aittir?",
  o: ["Rebelo", "Lucas", "Romer", "Barro", "Arrow"],
  a: 0,
  e: "AK MODELİ Rebelo'ya aittir. Neo-Klasik (Solow) modelde teknolojik gelişme dışsal kabul edilirken AK modelde İÇSEL kabul edilmiştir.",
  t: "İçsel Büyüme", d: 2
},
{
  q: "Beşeri sermayeyi diğer girdilerin verimini arttıran ayrı bir girdi olarak tanımlayan ve uzun dönemde büyümenin kaynağının beşeri sermaye olduğunu savunan iktisatçı kimdir?",
  o: ["Lucas", "Romer", "Barro", "Rebelo", "Arrow"],
  a: 0,
  e: "Beşeri Sermaye Modeli LUCAS'a aittir. Beşeri sermaye beceri kazandırılmış iş gücüdür; beşeri sermaye ile birlikte sermaye için azalan verimler yasası geçerliliğini yitirir.",
  t: "İçsel Büyüme", d: 2
},
{
  q: "Ekonomik büyümenin temel kaynağının teknolojik gelişme, teknolojik gelişmenin itici gücünün ise AR-GE faaliyetleri olduğunu savunan içsel büyüme modeli kime aittir?",
  o: ["Romer", "Lucas", "Barro", "Arrow", "Rebelo"],
  a: 0,
  e: "AR-GE Modeli ROMER'e aittir. Romer'e göre dışsallıklar iktisadi büyümede önemli bir faktördür.",
  t: "İçsel Büyüme", d: 2
},
{
  q: "Verimli kamu harcamalarının iktisadi büyümeyi arttırdığını savunan içsel büyüme modeli kime aittir?",
  o: ["Barro", "Romer", "Lucas", "Rebelo", "Grossman-Helpman"],
  a: 0,
  e: "Kamu Harcamaları Modeli BARRO'ya aittir. Barro'ya göre hükümet sektörü hem AR-GE hem de eğitim, sağlık ve altyapı harcamalarıyla verimlilik düzeyini ve büyümeyi doğrudan etkiler.",
  t: "İçsel Büyüme", d: 2
},
{
  q: "Bir işçinin aynı işi tekrarlayarak geliştirdiği tecrübeler sayesinde üretim sürecinin hızlanmasını açıklayan model ve sahibi hangisidir?",
  o: ["Yaparak öğrenme modeli — Arrow", "AK modeli — Rebelo", "Beşeri sermaye modeli — Lucas", "AR-GE modeli — Romer", "Yaratıcı yıkım — Schumpeter"],
  a: 0,
  e: "YAPARAK ÖĞRENME MODELİ ARROW'a aittir. Tecrübe ile üretim süreci hızlanır, birim maliyetler azalır, ürün kalitesi yükselir; böylece toplam üretim düzeyi artar.",
  t: "İçsel Büyüme", d: 2
},
{
  q: "İsveç'te Horndal demir atölyesinde 19 yıl boyunca hiçbir yatırım yapılmamasına rağmen üretimin %30 artması hangi modeli destekler?",
  o: ["Arrow'un yaparak öğrenme modelini", "Romer'in AR-GE modelini", "Barro'nun kamu harcamaları modelini", "Rebelo'nun AK modelini", "Solow'un neo-klasik modelini"],
  a: 0,
  e: "HORNDAL ETKİSİ olarak adlandırılan bu gözlem, ARROW'un yaparak öğrenme modelini destekler niteliktedir.",
  t: "İçsel Büyüme", d: 3
},
{
  q: "Büyümenin kaynağının AR-GE sektöründeki dikey teknolojik yenilikler olduğunu savunan içsel büyüme modeli hangisidir?",
  o: ["Aghion-Howitt modeli", "Grossman-Helpman modeli", "Barro modeli", "Lucas modeli", "Rebelo modeli"],
  a: 0,
  e: "AGHION-HOWITT modelinde büyümenin kaynağı AR-GE sektöründeki DİKEY teknolojik yeniliklerdir; böylece yaratıcı yıkım işlemektedir. Grossman-Helpman modelinde ise içsel büyüme malların niteliğinin iyileştirilmesi ve ürün çeşidinin artmasıyla olur.",
  t: "İçsel Büyüme", d: 3
},

/* ---------- KALKINMA ---------- */
{
  q: "Washington Konsensüsü olarak adlandırılan neo-liberal politikalar arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Kamu harcamalarının arttırılması", "Dış ticaretin serbestleştirilmesi", "Özelleştirme", "Faiz oranlarının serbestleştirilmesi", "Deregülasyon (piyasaya giriş engellerinin kaldırılması)"],
  a: 0,
  e: "Washington Konsensüsü KAMU HARCAMALARININ AZALTILMASINI öngörür. Diğer başlıklar: dış ticaretin serbestleştirilmesi, rekabetçi kur politikası, faizlerin serbestleştirilmesi, özelleştirme, deregülasyon, vergi reformu, mali disiplin, mülkiyet haklarının güvenceye alınması.",
  t: "Kalkınma", d: 2
},
{
  q: "Washington Konsensüsü'ne göre ekonomik büyüme gerçekleştikçe diğer sorunların kendiliğinden çözüleceğini ifade eden etki hangisidir?",
  o: ["Damlama-sızma etkisi (trickle down effect)", "Horndal etkisi", "İleriye doğru bağlantı etkisi", "Yaratıcı yıkım etkisi", "Bağımlılık etkisi"],
  a: 0,
  e: "Washington Konsensüsü temel hedef olarak ekonomik büyümeyi alır; büyüme gerçekleştikçe diğer sorunların bir DAMLAMA-SIZMA ETKİSİYLE (trickle down effect) kendiliğinden çözüleceğini savunur.",
  t: "Kalkınma", d: 2
},
{
  q: "Sürdürülebilir kalkınma kavramı ilk defa hangi yıl ve hangi raporda tanımlanmıştır?",
  o: ["1987 — Brundtland Raporu (Ortak Geleceğimiz)", "1960 — Singer-Prebisch Raporu", "1972 — Roma Kulübü Raporu", "1990 — İnsani Gelişme Raporu", "2000 — Binyıl Kalkınma Hedefleri"],
  a: 0,
  e: "Sürdürülebilir kalkınma ilk defa 1987'de Birleşmiş Milletlerin hazırlattığı BRUNDTLAND RAPORU'nda (diğer adı Ortak Geleceğimiz) tanımlanmıştır: bugünün gereksinimlerini gelecek kuşakların gereksinimlerinden ödün vermeden karşılayan kalkınma.",
  t: "Kalkınma", d: 2
},
{
  q: "Az gelişmişliği 'görüldüğü zaman tanınması kolay ancak tanımlanması güç olan zürafaya' benzeten iktisatçı kimdir?",
  o: ["W. Singer", "S. Kuznets", "R. Nurkse", "G. Myrdal", "W. Rostow"],
  a: 0,
  e: "Bu benzetme W. SINGER'e aittir. Az gelişmişlik olgusu ise S. KUZNETS'in yaklaşımına uygun olarak üç temel kıstasa göre tanımlanabilir.",
  t: "Az Gelişmişlik", d: 2
},
{
  q: "Kalkınmışlığın ölçülmesinde kullanılan en yaygın ölçüt olan İnsani Gelişme Endeksi (İGE) hangi kuruluş tarafından yayınlanır?",
  o: ["Birleşmiş Milletler Kalkınma Örgütü (UNDP)", "Dünya Bankası", "IMF", "OECD", "Dünya Ticaret Örgütü"],
  a: 0,
  e: "İnsani Gelişme Endeksi her yıl UNDP (Birleşmiş Milletler Kalkınma Örgütü) tarafından yayınlanır. Endeks ülkelerin gelir, eğitim ve sağlık verilerini içerir.",
  t: "Az Gelişmişlik", d: 1
},
{
  q: "Bir ekonomide kişi başına GSYİH düzeyinin orta gelir seviyesinde sıkışıp kalmasını, bir üst gelir grubuna yükselememesini ifade eden kavram hangisidir?",
  o: ["Orta gelir tuzağı", "Yoksulluğun kısır döngüsü", "Düşük gelir tuzağı", "Malthus tuzağı", "Bıçak sırtı denge"],
  a: 0,
  e: "ORTA GELİR TUZAĞI, kişi başına GSYİH'nın orta gelir seviyesinde sıkışıp kalmasıdır. Bu sınır, ABD'deki kişi başına GSYİH'nın %20'si olarak kabul edilmektedir.",
  t: "Az Gelişmişlik", d: 2
},

/* ---------- GELİR DAĞILIMI ---------- */
{
  q: "Üretim faktörlerinin üretime katılmaları sonucu milli gelirden aldıkları payları gösteren gelir dağılımı türü hangisidir?",
  o: ["Fonksiyonel gelir dağılımı", "Kişisel gelir dağılımı", "Bölgesel gelir dağılımı", "Sektörel gelir dağılımı", "İkincil gelir dağılımı"],
  a: 0,
  e: "FONKSİYONEL GELİR DAĞILIMI üretim faktörlerinin milli gelirden aldıkları payları gösterir: MG = Ücret + Faiz + Kar + Rant. Aynı zamanda sosyal sınıflar arasındaki gelir farkını ifade eder.",
  t: "Gelir Dağılımı", d: 2
},
{
  q: "Devletin piyasada oluşan gelire müdahale ederek oluşturduğu gelir dağılımına ne ad verilir?",
  o: ["İkincil gelir dağılımı", "Birincil gelir dağılımı", "Fonksiyonel gelir dağılımı", "Kişisel gelir dağılımı", "Sektörel gelir dağılımı"],
  a: 0,
  e: "İKİNCİL GELİR DAĞILIMI devletin müdahalesiyle oluşan dağılımdır; gelirin yeniden dağılımı olarak da ifade edilir. BİRİNCİL gelir dağılımı ise hiçbir devlet müdahalesi olmadan serbest piyasada oluşan dağılımdır.",
  t: "Gelir Dağılımı", d: 2
},
{
  q: "Lorenz eğrisi ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Lorenz eğrisi mutlak eşitlik doğrusuna yaklaştıkça gelir dağılımındaki adaletsizlik artar", "Dikey eksende milli gelir yer alır", "Yatay eksende nüfusun yüzdelik dilimleri yer alır", "45 derecelik doğru gelirin nüfus arasında eşit dağılımını gösterir", "Gerçek hayatta Lorenz eğrisinin mutlak adalet doğrusu ile çakışması imkansızdır"],
  a: 0,
  e: "Tam tersi: Lorenz eğrisi mutlak eşitlik doğrusuna YAKLAŞTIKÇA ADALET ARTAR; doğrudan UZAKLAŞTIKÇA adaletsizlik artar.",
  t: "Gelir Dağılımı", d: 2
},
{
  q: "Gini katsayısı ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Gini katsayısı bire eşitse gelir dağılımı tam eşitsizdir, sıfıra eşitse mutlak adalet vardır", "Gini katsayısı sıfıra eşitse gelir dağılımı tam eşitsizdir", "Gini katsayısı bir ile iki arasında değer alır", "Gelişmiş ülkelerde gini katsayısı bire yakındır", "Adaletsizlik arttıkça gini katsayısı küçülür"],
  a: 0,
  e: "Gini katsayısı 0 ile 1 arasındadır. 1'e eşitse tam eşitsizlik, 0'a eşitse mutlak adalet vardır. Adaletsizlik arttıkça gini büyür. Gelişmiş ülkelerde sıfıra, az gelişmiş ülkelerde bire yakındır. Gini = A / (A+B)'dir.",
  t: "Gelir Dağılımı", d: 2
},
{
  q: "P80/P20 katsayısı neyi gösterir?",
  o: ["En yüksek gelirli %20'lik kesim ile en düşük gelirli %20'lik kesim arasında kaç kat gelir farkı olduğunu", "Nüfusun %80'inin gelirin %20'sini aldığını", "Yoksul kişi sayısının toplam nüfusa oranını", "Gelir dağılımının Lorenz eğrisine uzaklığını", "Toplumun eşitsizliğe verdiği değeri"],
  a: 0,
  e: "Yüzde Paylar Analizi'nde haneler %20'lik 5 gruba ayrılır. P80/P20 katsayısı en yüksek gelirli %20 ile en düşük gelirli %20 arasındaki gelir farkının kaç kat olduğunu gösterir.",
  t: "Gelir Dağılımı", d: 2
},
{
  q: "Kişi başına gelir düzeyi arttıkça gelir dağılımındaki adaletsizliğin önce arttığını sonra azaldığını ters U eğrisi ile açıklayan iktisatçı kimdir?",
  o: ["Simon Kuznets", "Atkinson", "Pareto", "Lorenz", "Amartya Sen"],
  a: 0,
  e: "KUZNETS KATSAYISI ve TERS U EĞRİSİ Simon Kuznets'e aittir. Kişi başı gelir Yo seviyesine gelene kadar gini katsayısı artar, Yo'da maksimuma ulaşır, sonra gelir arttıkça adalet düzelir.",
  t: "Gelir Dağılımı", d: 2
},
{
  q: "Gelir dağılımı adaletsizliğini göstermeyen, bireylerin gelir seviyesi yükseldikçe üst gelir grubuna yükselme ihtimalinin nasıl arttığını gösteren katsayı hangisidir?",
  o: ["Pareto katsayısı", "Gini katsayısı", "Atkinson katsayısı", "Kuznets katsayısı", "Sen endeksi"],
  a: 0,
  e: "PARETO KATSAYISI gelir dağılım adaletsizliğini GÖSTERMEZ; bireylerin gelir seviyesi yükseldikçe üst gelir grubuna yükselme ihtimalinin nasıl arttığını gösterir.",
  t: "Gelir Dağılımı", d: 3
},

/* ---------- YOKSULLUK ---------- */
{
  q: "Bir kişinin yaşamını devam ettirebilmesi için gerekli asgari geliri elde edememesi durumu hangi yoksulluk türüdür?",
  o: ["Mutlak yoksulluk", "Nispi yoksulluk", "Subjektif yoksulluk", "İnsani yoksulluk", "Göreli yoksulluk"],
  a: 0,
  e: "MUTLAK YOKSULLUK, yaşamı sürdürmek için gerekli asgari geliri elde edememektir. Sübjektif görüşlere yer olmadığı için 'mutlak' denir. Dünya Bankası'na göre günlük asgari kalori miktarı 2400 K/cal'dır ve bu oran ülkeden ülkeye değişmez.",
  t: "Yoksulluk", d: 1
},
{
  q: "Mutlak yoksulluk kavramına göre bireylerin günlük alması gereken asgari kalori miktarı nedir?",
  o: ["2400 K/cal", "1800 K/cal", "2000 K/cal", "3000 K/cal", "1200 K/cal"],
  a: 0,
  e: "Dünya Bankası tarafından açıklanan bu oran 2400 K/cal'dır. Oran ülkeden ülkeye değişmez, ancak bu kalorinin alınabileceği besin düzeyleri farklılık gösterir.",
  t: "Yoksulluk", d: 2
},
{
  q: "Gıda, giyim ve barınma imkanlarına sahip olmasına rağmen toplumun genel düzeyinin gerisinde kalmayı ifade eden yoksulluk türü hangisidir?",
  o: ["Nispi (göreli) yoksulluk", "Mutlak yoksulluk", "Subjektif yoksulluk", "İnsani yoksulluk", "Kronik yoksulluk"],
  a: 0,
  e: "NİSPİ (GÖRELİ) YOKSULLUK, temel imkanlara sahip olmasına rağmen toplumun genel düzeyinin gerisinde kalmaktır; kişilerin kendilerini toplumun belli oranının altında gördüğü yoksulluk türüdür.",
  t: "Yoksulluk", d: 2
},
{
  q: "Toplumun kabul edebileceği en az refah düzeyinin anketlerle belirlendiği, bireylerin algılamasına bağlı yoksulluk türü hangisidir?",
  o: ["Subjektif (öznel) yoksulluk", "Mutlak yoksulluk", "Nispi yoksulluk", "İnsani yoksulluk", "Mutlak açlık"],
  a: 0,
  e: "SUBJEKTİF (ÖZNEL) YOKSULLUKTA belli bir maddi sınır yoktur; kişilerin kendilerini yoksul olarak tanımlamaları yoksul sayılmaları için yeterlidir. Ölçüm yöntemine 'Leyden Yaklaşımı' da denir.",
  t: "Yoksulluk", d: 2
},
{
  q: "Yoksulluğun belirlenmesinde parasal olmayan değişkenlerin dikkate alındığı yöntem hangi yoksulluk türüdür?",
  o: ["İnsani yoksulluk", "Mutlak yoksulluk", "Nispi yoksulluk", "Subjektif yoksulluk", "Gıda yoksulluğu"],
  a: 0,
  e: "İNSANİ YOKSULLUK parasal olmayan değişkenleri (temiz suya, eğitime, sağlığa erişim, uzun yaşam vb.) dikkate alır. UNDP bu çerçevede İnsani Gelişme Endeksi'ni oluşturmuştur; İGE'nin üç bileşeni uzun ömür, eğitimli-sağlıklı yaşam ve gelir düzeyidir.",
  t: "Yoksulluk", d: 2
},
{
  q: "Toplumda yaratılan medyan gelirin yarısının yoksulluk sınırı olarak belirlendiği yaklaşım hangisidir?",
  o: ["Medyan gelir yaklaşımı", "Açlık sınırı yaklaşımı", "Temel ihtiyaçlar yaklaşımı", "Gıda oranı yaklaşımı", "Öznel (Leyden) yaklaşım"],
  a: 0,
  e: "MEDYAN GELİR YAKLAŞIMI (nispi/göreli yoksulluk yaklaşımı) medyan gelirin yarısını yoksulluk sınırı kabul eder. Bu sınırın altında gelire sahip olanlara nispi yoksul denir.",
  t: "Yoksulluk", d: 2
},
{
  q: "Yoksul kişi sayısının toplam nüfusa oranlanmasıyla bulunan ve yoksulluk ölçümlerinde en sık kullanılan endeks hangisidir?",
  o: ["Kafa sayısı endeksi (Rowntree)", "Yoksulluk açığı endeksi (Batchelder)", "Sen endeksi", "P ölçütü", "Atkinson katsayısı"],
  a: 0,
  e: "KAFA SAYISI ENDEKSİ (Rowntree) yoksul kişi sayısının toplam nüfusa oranıdır; 0 ile 1 arasında değer alır. Endeksin 1 olması herkesin yoksul olduğunu, 0 olması yoksul bulunmadığını gösterir.",
  t: "Yoksulluk", d: 2
},
{
  q: "Kafa Sayısı Endeksi ve Yoksulluk Açığı Endeksi'ne yoksul kişilere ait Gini katsayısını ilave eden endeks hangisidir?",
  o: ["Sen endeksi", "P ölçütü", "Atkinson katsayısı", "Pareto katsayısı", "Kuznets katsayısı"],
  a: 0,
  e: "SEN ENDEKSİ Amartya Kumar Sen tarafından geliştirilmiştir; Kafa Sayısı ve Yoksulluk Açığı endekslerini yoksul kişilere ait Gini katsayısı ile ağırlıklandırır.",
  t: "Yoksulluk", d: 3
},
{
  q: "Foster, Greer ve Thorbecke tarafından geliştirilen ve bölgesel yoksulluk yoğunluğunun ölçülmesinde kullanılan ölçüt hangisidir?",
  o: ["P ölçütü", "Sen endeksi", "Kafa sayısı endeksi", "Yoksulluk açığı endeksi", "Atkinson katsayısı"],
  a: 0,
  e: "P ÖLÇÜTÜ Foster, Greer ve Thorbecke tarafından geliştirilmiştir; farklı bölgelerdeki yoksul grupların ağırlıklı ortalamasını dikkate alarak bölgesel yoksulluk yoğunluğunu ölçer.",
  t: "Yoksulluk", d: 3
},

/* ---------- AZ GELİŞMİŞLİK YAKLAŞIMLARI ---------- */
{
  q: "'Fakir ülkeler fakir oldukları için fakirdirler' görüşüyle yoksulluğun kısır döngüsünü açıklayan iktisatçı kimdir?",
  o: ["Nurkse", "Myrdal", "Boeke", "Gerschenkron", "Lewis"],
  a: 0,
  e: "YOKSULLUĞUN KISIR DÖNGÜSÜ NURKSE'a aittir. Düşük gelir → az tasarruf → az yatırım → düşük gelir artışı şeklindeki döngüden çıkmak için yabancı tasarruflara (dış yatırımcılara) ihtiyaç vardır.",
  t: "Az Gelişmişlik Kuramları", d: 2
},
{
  q: "Kuzey yarım küredeki zengin ülkelerle güney yarım küredeki fakir ülkelerin ticaretinin zengin ülkeler lehine olduğunu savunan yaklaşım kime aittir?",
  o: ["Myrdal", "Nurkse", "Boeke", "Rostow", "Bhagwati"],
  a: 0,
  e: "KUZEY-GÜNEY DİYALOĞU YAKLAŞIMI MYRDAL'a aittir. Çözüm için güney ülkeleri kendi aralarında ticaret yapmalı veya kuzey ülkeleriyle diyaloglarını arttırmalıdır.",
  t: "Az Gelişmişlik Kuramları", d: 2
},
{
  q: "Az gelişmiş ülkelerin geri kalmasını sosyal ve kültürel etkenlere bağlayan, 'sosyal ikililik' kavramını kullanan iktisatçı kimdir?",
  o: ["Boeke", "Myrdal", "Nurkse", "Lewis", "Frank"],
  a: 0,
  e: "SOSYO-KÜLTÜREL ETKENLER YAKLAŞIMI BOEKE'ye aittir. Boeke, az gelişmiş ülkelerin ekonomik birimlerinin iktisadi rasyonellikten uzak olduğunu belirtir ve 'sosyal ikililik' kavramını kullanır; kalkınma için zihniyet değişiminin önemine vurgu yapar.",
  t: "Az Gelişmişlik Kuramları", d: 3
},
{
  q: "Geri kalmış ülkelerin sanayileşme için gereken bilgi ve tecrübeyi gelişmiş ülkelerin deneyimlerinden faydalanarak elde edeceğini savunan ve 'geriden gelmenin avantajı' kavramını ortaya koyan iktisatçı kimdir?",
  o: ["A. Gerschenkron", "W. Rostow", "R. Nurkse", "G. Myrdal", "J. Boeke"],
  a: 0,
  e: "FARKLILAŞTIRILMIŞ SİSTEM KURAMI A. GERSCHENKRON'a aittir. Sosyal yetenekler açığı ve teknolojik açık kavramları üzerine kuruludur; buna GERİDEN GELMENİN AVANTAJI denir.",
  t: "Az Gelişmişlik Kuramları", d: 3
},
{
  q: "Rostow'un Gelişme Aşamaları Kuramı'ndaki aşamaların doğru sıralaması hangisidir?",
  o: ["Geleneksel toplum → Kalkışa hazırlık → Kalkış → Olgunlaşma → Kitle tüketim", "Kalkış → Geleneksel toplum → Olgunlaşma → Kalkışa hazırlık → Kitle tüketim", "Geleneksel toplum → Kalkış → Kalkışa hazırlık → Kitle tüketim → Olgunlaşma", "Kalkışa hazırlık → Geleneksel toplum → Kalkış → Kitle tüketim → Olgunlaşma", "Geleneksel toplum → Olgunlaşma → Kalkış → Kalkışa hazırlık → Kitle tüketim"],
  a: 0,
  e: "Rostow'a göre bütün toplumlar beş aşamadan geçer: Geleneksel toplum, Kalkışa hazırlık, Kalkış (take-off), Olgunlaşma, Kitle tüketim.",
  t: "Rostow", d: 1
},
{
  q: "Rostow'a göre kalkış (take-off) aşamasında tasarruf ve yatırımların ulusal gelire oranı nasıl değişir?",
  o: ["%5'ten %10'un üzerine yükselir", "%10'dan %5'e düşer", "%20'den %30'a çıkar", "Değişmeden kalır", "%1'den %5'e yükselir"],
  a: 0,
  e: "Kalkış aşamasında kişi başına gelirin yeterince yükselmesi için tasarruflar ve yatırımlar ulusal gelirin %5'inden %10'unun üzerine çıkar. Rostow'un belirttiği koşullardan biri üretken yatırım oranının en azından milli gelirin %10'unun üzerine çıkarılmasıdır.",
  t: "Rostow", d: 2
},
{
  q: "Rostow'a göre bir sektörün 'önder sektör' olabilmesi için aşağıdaki bağlantı etkilerinden hangisinin/hangilerinin yüksek olması gerekir?",
  o: ["İleriye, geriye ve yana doğru bağlantı etkilerinin tamamının", "Yalnızca ileriye doğru bağlantı etkisinin", "Yalnızca geriye doğru bağlantı etkisinin", "Yalnızca yana doğru bağlantı etkisinin", "İleriye ve geriye doğru bağlantı etkilerinin düşük olması"],
  a: 0,
  e: "Bir sektörün önder sektör olabilmesi için ileriye, geriye ve yana doğru bağlantı etkilerinin tamamının YÜKSEK olması gerekir.",
  t: "Rostow", d: 2
},
{
  q: "Bir sektörün kendi dışındaki sektörlerden girdi olarak aldığı miktarın kendi üretimi içindeki payını ifade eden etki hangisidir?",
  o: ["Geriye doğru bağlantı etkisi", "İleriye doğru bağlantı etkisi", "Yana doğru bağlantı etkisi", "Damlama-sızma etkisi", "Horndal etkisi"],
  a: 0,
  e: "GERİYE DOĞRU BAĞLANTI ETKİSİ, bir sektörün kendi dışındaki sektörlerden girdi olarak aldığı miktarın kendi üretimi içindeki payıdır. İLERİYE doğru bağlantı ise sektörün ürettiği mala olan talebin, o malı talep eden sektörün üretimi içindeki payıdır.",
  t: "Rostow", d: 3
},
{
  q: "Rostow'a göre İngiltere'nin kalkış aşamasındaki önder sektörü hangisidir?",
  o: ["Pamuklu dokuma sanayi", "Demiryolu sanayi", "Kereste sanayi", "Askeri mallar üreten sanayi", "Et üretimi (hayvancılık)"],
  a: 0,
  e: "Rostow'a göre önder sektörler: İngiltere — pamuklu dokuma; ABD, Fransa, Almanya, Rusya — demiryolu; Japonya — askeri mallar; İsveç — kereste; Avustralya — et üretimi; Danimarka — çiftlik ürünleri.",
  t: "Rostow", d: 3
},
{
  q: "Dünya ticaret hadlerinin, tarım ürünü ihraç eden az gelişmiş ülkelerin aleyhine seyrettiğini savunan yaklaşım hangisidir?",
  o: ["Singer-Prebisch yaklaşımı", "Bağımlılık yaklaşımı", "Sınırsız emek arzı modeli", "Fakirleştiren büyüme", "Kuzey-Güney diyaloğu"],
  a: 0,
  e: "SINGER-PREBISCH YAKLAŞIMI (1960) ticaret hadlerinin sanayi ürünü ihraç eden gelişmiş ülkeler lehine, tarım ürünü ihraç eden az gelişmiş ülkeler aleyhine olduğunu belirtir. Neden: tarım ürünlerinin gelir esnekliği 1'den küçük, sanayi ürünlerinin 1'den büyüktür.",
  t: "Az Gelişmişlik Kuramları", d: 2
},
{
  q: "Tarım sektöründe verimliliği düşük olan emeğin, verimliliği daha yüksek olan sanayi sektörüne kaydırılmasını öngören model ve sahibi hangisidir?",
  o: ["Sınırsız emek arzı modeli — Lewis", "Bağımlılık yaklaşımı — Frank", "Büyük itiş — Rosenstein-Rodan", "Kalkınma kutupları — Perroux", "Fakirleştiren büyüme — Bhagwati"],
  a: 0,
  e: "SINIRSIZ EMEK ARZI MODELİ LEWIS'e aittir. Az gelişmiş ülkelerde emek bol ve ucuzdur; verimliliği düşük tarımdaki emek verimliliği yüksek sanayiye kaydırılarak kalkınma sağlanır.",
  t: "Az Gelişmişlik Kuramları", d: 2
},
{
  q: "Gelişmiş ve az gelişmiş ülkeleri merkez-çevre biçiminde ayıran Bağımlılık Yaklaşımı hangi iktisatçılara aittir?",
  o: ["G. Frank ve P. Baran", "Singer ve Prebisch", "Fischer ve Clark", "Chenery ve Leibenstein", "Grossman ve Helpman"],
  a: 0,
  e: "BAĞIMLILIK YAKLAŞIMI G. Frank ve P. Baran'a aittir. Merkez (gelişmiş) ve çevre (az gelişmiş) ayrımı yapılır; az gelişmişliğin nedeni kapitalist gelişme ve yayılmadır. Bağımlı ülkeler bu bağımlılıktan kurtulmadıkça kalkınamazlar.",
  t: "Az Gelişmişlik Kuramları", d: 2
},
{
  q: "Dış ticaret hadlerindeki bozulma sonucu ekonomik büyümenin ülke refahını eskisinden daha düşük bir düzeye indirebileceğini savunan 'fakirleştiren büyüme' kavramı kime aittir?",
  o: ["J. Bhagwati", "R. Prebisch", "A. Lewis", "G. Frank", "R. Nurkse"],
  a: 0,
  e: "FAKİRLEŞTİREN (YOKSULLAŞTIRAN) BÜYÜME J. BHAGWATI'ye aittir. Ülke daha fazla üretmesine rağmen fiyatların düşmesine bağlı gelir kaybı yaşar ve refahı azalır.",
  t: "Az Gelişmişlik Kuramları", d: 3
},

/* ---------- KALKINMA STRATEJİLERİ ---------- */
{
  q: "Bir ekonomideki tüm sektörlerin aynı anda eş zamanlı olarak kalkındırılması gerektiğini ilk kez ortaya atan iktisatçı kimdir?",
  o: ["F. List", "R. Nurkse", "Rosenstein-Rodan", "A. Lewis", "O. Hirschman"],
  a: 0,
  e: "Dengeli kalkınma görüşünü ilk kez ortaya atan iktisatçı F. LIST'tir. List'e göre ekonomide tarım, imalat ve ticaret kesimlerinin aynı anda canlandırılması gerekir.",
  t: "Kalkınma Stratejileri", d: 3
},
{
  q: "Az gelişmiş ülkelerde bir anda büyük ve çeşitli yatırımlara girişilmesi gerektiğini savunan 'Büyük İtiş' teorisi kime aittir?",
  o: ["Rosenstein-Rodan", "Hirschman", "Perroux", "Scitovsky", "Chenery"],
  a: 0,
  e: "BÜYÜK İTİŞ teorisi ROSENSTEIN-RODAN'a aittir. Kalkınmanın ilk hareketini yatırımlar başlatır; aynı anda birçok sektöre yatırım yapılması gerekir. Büyük itiş ekonomide sıçrama etkisi yaratır ve dışsal ekonomilerin önemi vurgulanır.",
  t: "Kalkınma Stratejileri", d: 2
},
{
  q: "Dengeli kalkınma stratejisini savunan iktisatçılar arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["O. Hirschman", "R. Nurkse", "Rosenstein-Rodan", "A. Lewis", "Chenery"],
  a: 0,
  e: "O. HIRSCHMAN DENGESİZ kalkınma stratejisinin en önemli temsilcisidir. Dengeli kalkınmayı savunanlar: Nurkse, F. List, Rosenstein-Rodan, A. Lewis, A. Young, H. Leibenstein, Chenery, Fleming.",
  t: "Kalkınma Stratejileri", d: 2
},
{
  q: "Gelirdeki artış oranının nüfus artış oranının kalıcı biçimde üzerinde olmasını sağlayacak yatırımlar için gereken asgari çabaya ne ad verilir?",
  o: ["Kritik minimum çaba", "Büyük itiş", "Geriden gelmenin avantajı", "Kalkış eşiği", "Altın kural"],
  a: 0,
  e: "Düşük Gelir Tuzağı (Chenery-Leibenstein) yaklaşımında, gelir artış oranının nüfus artış oranının kalıcı olarak üzerinde olmasını sağlayacak yatırımlar için gereken asgari çabaya KRİTİK MİNİMUM ÇABA denir.",
  t: "Kalkınma Stratejileri", d: 3
},
{
  q: "Dengesiz kalkınma stratejisinin en önemli temsilcisi kimdir ve bu yaklaşıma göre hangi sektöre öncelik verilmelidir?",
  o: ["Hirschman — toplam sektörler arası bağlılık katsayısı en yüksek sektöre", "Nurkse — stratejik olarak belirlenen sektörlere", "List — tarım, imalat ve ticaretin tamamına", "Perroux — hizmet sektörüne", "Chenery — sosyal karı en yüksek sektöre"],
  a: 0,
  e: "Dengesiz kalkınmanın en önemli temsilcisi O. HIRSCHMAN'dır. Hirschman'a göre 'toplam sektörler arası bağlılık' katsayısı en yüksek sektöre öncelik verilmelidir (örneğin demir-çelik gibi ara mallar üretimi).",
  t: "Kalkınma Stratejileri", d: 3
},
{
  q: "Dengesiz kalkınma yaklaşımını 'dışsal ekonomilere' dayandıran iktisatçı kimdir?",
  o: ["Scitovsky", "Hirschman", "Streeten", "Perroux", "Nurkse"],
  a: 0,
  e: "Dengesiz kalkınmayı dışsal ekonomilere dayandıran iktisatçı SCITOVSKY'dir. İki tür dışsal ekonomiden bahseder: teknolojik dışsallık ve piyasa aracılığıyla ortaya çıkan parasal dışsallık.",
  t: "Kalkınma Stratejileri", d: 3
},
{
  q: "İktisadi kalkınmanın ülkenin her yerinde dengeli gerçekleşmeyeceğini, bazı bölgelerin öncelikli olması gerektiğini savunan Kalkınma Kutupları Yaklaşımı kime aittir?",
  o: ["F. Perroux", "O. Hirschman", "T. Scitovsky", "P. Streeten", "R. Nurkse"],
  a: 0,
  e: "KALKINMA KUTUPLARI YAKLAŞIMI F. PERROUX'ya aittir ve dengesiz kalkınma stratejilerinden biridir. Devlet kalkınmada öncelikli bölgeleri belirleyerek etkin sermaye kullanımı sağlamalıdır.",
  t: "Kalkınma Stratejileri", d: 2
},
{
  q: "Üretim faaliyetlerini birincil (tarım, ormancılık, madencilik), ikincil (imalat, inşaat) ve üçüncül (hizmetler) olarak sınıflandıran iktisatçı kimdir?",
  o: ["Fischer", "Clark", "Perroux", "Hirschman", "Streeten"],
  a: 0,
  e: "Bu sınıflandırma FISCHER'a aittir. C. CLARK ise üretim aşamalarını 'Üç Sektör Teorisi' ile açıklamıştır. İkisi birlikte Öncü Sektörler Teorisi'ni oluşturur.",
  t: "Kalkınma Stratejileri", d: 3
},

/* ---------- SANAYİLEŞME POLİTİKALARI ---------- */
{
  q: "İthal ikameci (içe dönük) sanayileşme politikası ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Daha önce ithal edilen malların koruyucu ve özendirici önlemlerle yurt içinde üretilmesini öngörür ve karşılaştırmalı üstünlüklerden yararlanılmaz", "Karşılaştırmalı üstünlükleri ön plana çıkarır", "Dış ticarette liberalizmi esas alır", "İhracatı özendirmeyi temel amaç edinir", "Serbest piyasayı temel alan bir yapı oluşturmayı hedefler"],
  a: 0,
  e: "İthal ikameci sanayileşme, ithal edilen malların koruyucu-özendirici önlemlerle yurt içinde üretilmesidir ve bu yöntemde KARŞILAŞTIRMALI ÜSTÜNLÜKLERDEN YARARLANILMAZ. Diğer seçenekler ihracata dayalı (dışa dönük) stratejinin özellikleridir.",
  t: "Sanayileşme Politikaları", d: 2
},
{
  q: "İthal ikameci sanayileşme stratejisinin neden olabileceği sorunlar arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["İç piyasalarda rekabetin aşırı artması", "Rekabet yoksunluğundan dolayı tekelleşme süreci başlaması", "İthal ara malların maliyetleri ihracatla karşılanamadığından dış borçlanmanın artması", "Kaynak dağılımında etkinliğin bozulması", "Tasarrufların azalması"],
  a: 0,
  e: "İthal ikamesinin sorunu rekabetin artması değil, REKABET YOKSUNLUĞUDUR; bu da tekelleşmeye yol açar. Ayrıca iç pazara dönük olmasına rağmen ithal girdilere gereksinim duyması eleştirilir.",
  t: "Sanayileşme Politikaları", d: 2
},
{
  q: "Ülkelerin üretimde dışa kapanarak ithal ikameci politikalar izlemelerinin nedenleri arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Döviz fazlası ve yüksek rezerv birikimi", "Savaşlar", "Döviz darboğazları", "Sermaye birikiminin yetersizliği", "Dış ticaret açıkları"],
  a: 0,
  e: "İthal ikameye yönelmenin nedenleri arasında DÖVİZ DARBOĞAZLARI vardır; döviz fazlası değil. Diğer nedenler: savaşlar, sermaye birikiminin yetersizliği, global ticaret krizleri, yerli-milli ekonomi politikalarının benimsenmek istenmesi, dış ticaret açıkları.",
  t: "Sanayileşme Politikaları", d: 2
},

/* ---------- NÜFUS ---------- */
{
  q: "Nüfus artış oranı nasıl hesaplanır?",
  o: ["Doğum oranı − Ölüm oranı + Net göç oranı", "Doğum oranı − Ölüm oranı", "Doğum oranı + Ölüm oranı − Net göç oranı", "Doğum oranı + Net göç oranı", "Ölüm oranı − Doğum oranı + Net göç oranı"],
  a: 0,
  e: "Nüfus Artış Oranı = Doğum Oranı − Ölüm Oranı + Net Göç Oranı. DOĞAL nüfus artış oranı ise sadece Doğum Oranı − Ölüm Oranı'dır (göç dahil edilmez).",
  t: "Nüfus ve Kalkınma", d: 2
},
{
  q: "Bir ülkede ölüm oranlarının düşmeye başladığı zaman ile doğum oranlarının düşmeye başladığı zaman arasındaki aralığa ne ad verilir?",
  o: ["Demografik geçiş aralığı", "Kritik minimum çaba", "Demografik fırsat penceresi", "Bağımlılık aralığı", "Malthus aralığı"],
  a: 0,
  e: "Demografik Geçiş Teorisi'ne göre sanayileşmeyle önce ölüm oranları düşer, doğum oranları hemen düşürülemez. Bu iki zaman arasındaki aralığa DEMOGRAFİK GEÇİŞ ARALIĞI denir.",
  t: "Nüfus ve Kalkınma", d: 2
},
{
  q: "Kindleberger'in araştırmasına göre kişi başı gelir düzeyi arttıkça doğum oranları nasıl değişir?",
  o: ["Azalma gösterir", "Artma gösterir", "Değişmez", "Önce azalır sonra artar", "Nüfusun yaş bileşimine bağlı olarak rassal değişir"],
  a: 0,
  e: "Kindleberger'in araştırmasına göre kişi başı gelir düzeyi arttıkça doğum oranları AZALIR. Gelir düzeyinin en yüksek olduğu ülkelerde doğum oranı binde 10-15 dolayındadır.",
  t: "Nüfus ve Kalkınma", d: 3
},
{
  q: "Nüfus artışının ekonomik kalkınmayı engellediği yönündeki görüşler arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Çalışan başına sermaye miktarını arttırır", "Kişi başı gelirin düşmesine ve tasarrufların azalmasına yol açar", "Tarım sektöründe azalan verimler yasasını ortaya çıkarır", "Bağımlılık oranını artırır", "Kentleşme sorunları yaratır"],
  a: 0,
  e: "Nüfus artışı çalışan başına sermaye miktarının ARTMASINA değil DÜŞMESİNE yol açar. Ayrıca işsizliği ortaya çıkarır, sermaye birikimini yavaşlatır, yenilenemeyen kaynakların tükenmesine ve yatırım sapmasına yol açar.",
  t: "Nüfus ve Kalkınma", d: 2
},
{
  q: "Az gelişmiş ülkelerin ekonomik özellikleri arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Yüksek teknoloji kullanımı ve yüksek verimlilik", "GSMH içinde tarımın yüksek payı", "Kişi başına düşük gelir ve düşük tasarruf sonucu düşük yatırımlar", "Gelir dağılımının bozuk olması", "Ekonomik düalizm (ikili yapı)"],
  a: 0,
  e: "Az gelişmiş ülkelerde DÜŞÜK teknoloji kullanımı ve DÜŞÜK verimlilik vardır. Ayrıca ihracat ağırlıkla tarımsal ürünlerden oluşur ve tarımda küçük topraklarda aile işletmeciliği yaygındır.",
  t: "Az Gelişmişlik", d: 1
},
{
  q: "Gelişmişlik düzeyinin ölçülmesinde kullanılan yöntemler arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Gini katsayısı ile ölçüm", "Kişi başına GSYİH ile ölçüm", "İnsani Gelişim Endeksi ile ölçüm", "Satın Alma Gücü Paritesi ile ölçüm", "Bunların hiçbiri kullanılmaz"],
  a: 0,
  e: "Notta gelişmişlik düzeyinin ölçülmesi için üç yöntem sayılır: Kişi başına GSYİH, İnsani Gelişim Endeksi (İGE) ve Satın Alma Gücü Paritesi. Gini katsayısı ise GELİR DAĞILIMI EŞİTSİZLİĞİ ölçütüdür.",
  t: "Az Gelişmişlik", d: 2
},
{
  q: "Belirli sayıdaki mal veya hizmetin başka ülkelerde satın alınabilmesi için gerekli döviz miktarını gösteren katsayı hangisidir?",
  o: ["Satın alma gücü paritesi", "Gini katsayısı", "Sermaye hasıla katsayısı", "Pareto katsayısı", "Atkinson katsayısı"],
  a: 0,
  e: "SATIN ALMA GÜCÜ PARİTESİ, belirli sayıdaki mal veya hizmetin başka ülkelerde satın alınabilmesi için gerekli döviz miktarını gösteren bir katsayıdır ve gelişmişlik ölçüm yöntemlerinden biridir.",
  t: "Az Gelişmişlik", d: 2
},
{
  q: "Toplumun eşitsizliğe verdiği değeri esas alan, katsayı arttıkça toplumun eşitsizliğe daha duyarlı hale geldiğini gösteren ölçüt hangisidir?",
  o: ["Atkinson katsayısı", "Pareto katsayısı", "Gini katsayısı", "Kuznets katsayısı", "Sen endeksi"],
  a: 0,
  e: "ATKINSON KATSAYISI'nda bir toplumun eşitsizliğe verdiği değer sıfır ise toplum gelir dağılımına kayıtsızdır. Katsayı arttıkça toplum eşitsizliğe daha duyarlı hale gelir; değer sonsuz ise gelir dağılımı çok bozuktur.",
  t: "Gelir Dağılımı", d: 3
},
{
  q: "Bireylerin ve hane halklarının gıda tüketimine yaptıkları harcamanın toplam harcamaya oranına bakılan yoksulluk ölçüm yaklaşımı hangisidir?",
  o: ["Gıda oranı yaklaşımı", "Açlık sınırı yaklaşımı", "Temel ihtiyaçlar yaklaşımı", "Medyan gelir yaklaşımı", "Öznel yaklaşım"],
  a: 0,
  e: "GIDA ORANI YAKLAŞIMI'nda gıda tüketimine yapılan harcamanın toplam harcamaya oranına bakılır. AÇLIK SINIRI yaklaşımı minimum kalori miktarına, TEMEL İHTİYAÇLAR yaklaşımı ise barınma, giyinme, sağlık gibi ihtiyaçları da dahil eder.",
  t: "Yoksulluk", d: 3
},
{
  q: "Açlık sınırı yaklaşımının en önemli sakıncası nedir?",
  o: ["Alınması gereken kalori ihtiyacı açısından toplumdaki tüm bireyleri aynı görmesi", "Barınma ve giyim ihtiyaçlarını fazla ağırlıklandırması", "Anketlere dayanması nedeniyle sübjektif olması", "Medyan geliri esas alması", "Bölgesel farklılıkları aşırı vurgulaması"],
  a: 0,
  e: "Açlık sınırı (minimum kalori) yaklaşımının en önemli sakıncası, alınması gereken kalori ihtiyacı açısından toplumdaki TÜM BİREYLERİ AYNI GÖRMESİDİR.",
  t: "Yoksulluk", d: 3
}

]);

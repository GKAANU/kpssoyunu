/* İcra ve İflas Hukuku — 2. bölüm (satış, davalar, ihtiyati haciz, iflas) */
KPSS.registerBank('icra', [
{
  q: "Alacaklı veya borçlu haczedilen malın satışını hangi süre içinde isteyebilir?",
  o: ["Hacizden itibaren 1 yıl içinde", "Hacizden itibaren 6 ay içinde", "Ödeme emrinin tebliğinden itibaren 1 yıl içinde", "Hacizden itibaren 2 yıl içinde", "Hacizden itibaren 3 ay içinde"],
  a: 0,
  e: "Alacaklı veya borçlu, HACİZDEN İTİBAREN BİR YIL içinde haczolunan malın satışını isteyebilir. Borçlunun üçüncü şahıslardaki alacağı da bu hükme tabidir.",
  t: "Satış", d: 2
},
{
  q: "Sicile kayıtlı motorlu kara araçlarında satış istenirken üç talebin birlikte yapılması ve giderlerinin tamamının birlikte peşin yatırılması zorunludur. Bu üç talep hangileridir?",
  o: ["Muhafaza – kıymet takdiri – satış", "Haciz – muhafaza – satış", "Kıymet takdiri – ihale – tescil", "Haciz – kıymet takdiri – tescil", "Muhafaza – tebligat – tescil"],
  a: 0,
  e: "Sicile kayıtlı MOTORLU KARA ARAÇLARI bakımından MUHAFAZA, KIYMET TAKDİRİ ve SATIŞ talebinin BİRLİKTE yapılması ve bunlara ilişkin giderlerin tamamının BİRLİKTE VE PEŞİN yatırılması zorunludur. Aksi takdirde satış talebi yapılmamış sayılır.",
  t: "Satış", d: 3
},
{
  q: "Satış talebiyle peşin yatırılan giderin yetersiz kaldığı anlaşılırsa icra müdürü satış isteyene eksiği tamamlaması için süre verir; bu sürede tamamlanmazsa satış talebi yapılmamış sayılır. Verilen süre kaç gündür?",
  o: ["15 gün", "7 gün", "10 gün", "1 ay", "3 gün"],
  a: 0,
  e: "Peşin yatırılan miktarın yetersiz kaldığı anlaşılırsa icra müdürü tarafından satış isteyene ON BEŞ GÜNLÜK süre verilir; bu sürede eksik miktar tamamlanmazsa SATIŞ TALEBİ YAPILMAMIŞ SAYILIR.",
  t: "Satış", d: 3
},
{
  q: "Bir malın satılması kanuni süre içinde istenmezse ne olur?",
  o: ["O mal üzerindeki haciz kalkar", "İcra takibi düşer", "Dosya işlemden kaldırılır", "Mal re'sen satılır", "Hiçbir şey olmaz"],
  a: 0,
  e: "Bir malın satılması kanuni müddet içinde istenmez veya talep geri alınıp da kanuni müddet içinde yenilenmezse O MAL ÜZERİNDEKİ HACİZ KALKAR. Hacizli malın satılması yönündeki talep BİR DEFA geri alınabilir.",
  t: "Satış", d: 2
},
{
  q: "Borçluya rızaen satış yetkisi verilmesinde borçlu kıymet takdirinin tebliğinden itibaren belli bir süre içinde talepte bulunur; icra müdürü de kıymet takdirinin kesinleşmesinden sonra satış için süre verir. Bu iki süre sırasıyla nedir?",
  o: ["7 gün – 15 gün", "15 gün – 7 gün", "7 gün – 7 gün", "15 gün – 15 gün", "10 gün – 30 gün"],
  a: 0,
  e: "Borçlu, kıymet takdirinin tebliğinden itibaren 7 GÜN içinde haczedilen malının rızaen satışı için kendisine yetki verilmesini talep edebilir. İcra müdürü kıymet takdirinin kesinleşmesinden sonra cebri satış işlemlerini durdurarak borçluya 15 GÜNLÜK süre verir. Bu süreçte alacaklı bakımından satış isteme süresi işlemez.",
  t: "Satış", d: 3
},
{
  q: "Rızai satışta bedel, malın muhammen kıymetinin belli bir oranı ile rüçhanlı alacaklar toplamından hangisi fazlaysa o miktardan (artı takip masrafları) aşağı olamaz. Buradaki oran nedir?",
  o: ["%90", "%50", "%75", "%100", "%10"],
  a: 0,
  e: "Rızai satışta bedel, malın MUHAMMEN KIYMETİNİN YÜZDE DOKSANINA karşılık gelen miktar ile o malla güvence altına alınan ve satış isteyenin alacağına rüçhanı olan alacakların toplamından HANGİSİ FAZLA ise bu miktar ve ayrıca bu aşamaya kadar yapılan TAKİP MASRAFLARI toplamından az olamaz.",
  t: "Satış", d: 3
},
{
  q: "Rızai satışta borçluyla anlaşan alıcı bedeli yatırırsa icra müdürü dosyayı derhal gönderir ve dosya üzerinden kesin karar verilir. Karar mercii ve karar süresi nedir?",
  o: ["İcra mahkemesi – en geç 10 gün", "İcra müdürü – derhal", "Asliye ticaret mahkemesi – 10 gün", "Genel mahkeme – 30 gün", "İcra mahkemesi – 30 gün"],
  a: 0,
  e: "İcra müdürü şartların bulunduğunu tespit ederse satışın onayı ile devir-teslim işlemlerinin yapılması için dosyayı DERHAL İCRA MAHKEMESİNE gönderir. Mahkeme EN GEÇ 10 GÜN içinde dosya üzerinden talebin kabulüne veya reddine KESİN OLARAK karar verir. Kabul kararıyla malın mülkiyeti alıcıya geçer ve tüm hacizler kaldırılır.",
  t: "Satış", d: 3
},
{
  q: "Elektronik ortamda açık artırmada teklif verme süresi kaç gündür?",
  o: ["7 gün", "10 gün", "15 gün", "3 gün", "30 gün"],
  a: 0,
  e: "Haczolunan malın satışı UYAP'a entegre ELEKTRONİK SATIŞ PORTALINDA açık artırma ile yapılır ve AÇIK ARTIRMADA TEKLİF VERME SÜRESİ 7 GÜNDÜR.",
  t: "Satış", d: 2
},
{
  q: "Elektronik açık artırmada teklifler arasındaki fark en az ne kadar olabilir?",
  o: ["Muhammen kıymetin binde birinden ve her halde 100 TL'den az olamaz", "Muhammen kıymetin yüzde birinden az olamaz", "Her halde 50 TL'den az olamaz", "Muhammen kıymetin binde birinden ve her halde 1000 TL'den az olamaz", "Sınır yoktur"],
  a: 0,
  e: "Teklifler arasındaki fark, satışa çıkarılan malın MUHAMMEN KIYMETİNİN BİNDE BİRİNDEN ve her halde YÜZ TÜRK LİRASINDAN az olamaz.",
  t: "Satış", d: 3
},
{
  q: "Açık artırma süresinin son 10 dakikası içinde yeni bir teklif verilirse ne olur?",
  o: ["Açık artırma bir defaya mahsus olmak üzere 10 dakika uzatılır", "Artırma sona erer", "Artırma 1 gün uzatılır", "Artırma iptal edilir", "Artırma sınırsız uzatılabilir"],
  a: 0,
  e: "Açık artırma süresinin SON ON DAKİKASI içinde yeni bir teklifin verilmesi halinde açık artırma BİR DEFAYA MAHSUS OLMAK ÜZERE ON DAKİKA UZATILIR.",
  t: "Satış", d: 3
},
{
  q: "Elektronik satış portalının işleyişini tehlikeye sokan kişilerin portala girişi ne kadar süreyle engellenir?",
  o: ["Adalet Bakanlığınca 3 ay süreyle", "İcra mahkemesince 1 ay süreyle", "Adalet Bakanlığınca 6 ay süreyle", "İcra müdürünce 1 yıl süreyle", "Süresiz olarak"],
  a: 0,
  e: "Elektronik satış portalının işleyişini ya da güvenliğini tehlikeye sokan, portala erişimi engelleyen veya zorlaştıran nitelikte eylemlerde bulunan gerçek ve tüzel kişilerin satış portalına girişi ADALET BAKANLIĞINCA 3 AY SÜREYLE engellenir.",
  t: "Satış", d: 3
},
{
  q: "Artırma ilanı, artırmaya başlangıç tarihinden en az kaç gün önce yapılır?",
  o: ["15 gün önce", "7 gün önce", "10 gün önce", "30 gün önce", "3 gün önce"],
  a: 0,
  e: "Birinci ve ikinci artırmanın yapılacağı gün ve saat aralığı, artırmaya başlangıç tarihinden EN AZ ON BEŞ GÜN ÖNCE ilan edilir. İkinci artırmanın başlangıç tarihi, birinci artırmanın bitimi tarihinden itibaren BİR AYI GEÇMEYECEK şekilde belirlenir.",
  t: "Satış", d: 2
},
{
  q: "Artırmaya katılabilmek için mahcuzun kıymetinin belli bir oranında teminat gösterilir; nakit teminat en geç artırma süresinin bitiminden önceki gün belirli bir saate kadar yatırılır. Oran ve saat nedir?",
  o: ["%10 – 23:30", "%10 – 17:00", "%20 – 23:30", "%5 – 23:30", "%10 – 12:00"],
  a: 0,
  e: "Artırmaya katılabilmek için MAHCUZUN KIYMETİNİN YÜZDE ONUNU karşılayacak tutardaki teminatın satışı yapan icra dairesinin banka hesabına yatırılması zorunludur. Teminat nakit ise en geç artırma süresinin bitiminden ÖNCEKİ GÜN SAAT 23:30'A KADAR yatırılmalıdır.",
  t: "Satış", d: 3
},
{
  q: "İhale, haczedilen malın muhammen kıymetinin yüzde kaçı üzerinden başlatılır?",
  o: ["%50'si", "%90'ı", "%100'ü", "%10'u", "%75'i"],
  a: 0,
  e: "Birinci ve ikinci ihale, icra müdürü tarafından ilanda belirlenen gün ve saatte, haczedilen malın MUHAMMEN KIYMETİNİN YÜZDE ELLİSİ üzerinden başlatılır.",
  t: "Satış", d: 2
},
{
  q: "İhale bedelinin, muhammen kıymetin belli bir oranı ile rüçhanlı alacaklar toplamından fazla olanını ve ayrıca paraya çevirme ile paylaştırma masraflarını geçmesi gerekir. Buradaki oran nedir?",
  o: ["%50", "%90", "%75", "%100", "%25"],
  a: 0,
  e: "Artırma bedelinin, haczedilen malın MUHAMMEN KIYMETİNİN YÜZDE ELLİSİ ile o malla güvence altına alınan ve satış isteyenin alacağına RÜÇHANI OLAN ALACAKLARIN TOPLAMINDAN HANGİSİ FAZLA ise bu miktarı ve ayrıca PARAYA ÇEVİRME VE PAYLAŞTIRMA MASRAFLARINI da geçmesi şarttır.",
  t: "Satış", d: 3
},
{
  q: "İhale alıcısı, ihalenin feshi talep edilmiş olsa dahi satış bedelini nakden ödemek zorundadır. Bu ödeme hangi andan itibaren kaç gün içinde yapılır?",
  o: ["Artırma sonuç tutanağının ilanından itibaren 7 gün", "İhalenin kesinleşmesinden itibaren 7 gün", "Artırma sonuç tutanağının ilanından itibaren 30 gün", "İhalenin kesinleşmesinden itibaren 10 gün", "İhale gününde derhal"],
  a: 0,
  e: "İhale alıcısı, İHALENİN FESHİ TALEP EDİLMİŞ OLSA DAHİ artırma sonuç tutanağının ilanından itibaren 7 GÜN içinde satış bedelini NAKDEN ödemek zorundadır. Satılan mal, ihale kesinleşmeden teslim olunmaz ve resmi sicilde alıcı adına tescil edilmez.",
  t: "Satış", d: 2
},
{
  q: "En yüksek teklifi veren alıcı süresi içinde ihale bedelini yatırmazsa gösterdiği teminat iade edilmez. Bu teminat, satış masraflarından düşüldükten sonra kime ödenir?",
  o: ["Alacaklarına mahsuben hak sahiplerine", "Aynen alıcının kendisine", "Hazineye irat olarak", "Doğrudan borçluya", "İcra dairesi bütçesine"],
  a: 0,
  e: "İhale alıcısının en yüksek teklifi verip de süresi içinde ihale bedelini yatırmaması halinde ALINAN TEMİNAT İADE EDİLMEYİP öncelikle satış masraflarından düşülmek üzere HAK SAHİPLERİNE ALACAKLARINA MAHSUBEN ÖDENİR.",
  t: "Satış", d: 3
},
{
  q: "Altın ve gümüş eşya ile ilgili satış kuralı nedir?",
  o: ["Maden halindeki kıymetlerinden daha aşağı bir bedel ile satılamaz", "Muhammen kıymetin %50'sinden aşağı satılamaz", "Sadece pazarlık usulüyle satılır", "Hiçbir şekilde satılamaz", "Serbestçe satılır"],
  a: 0,
  e: "ALTIN VE GÜMÜŞ EŞYA, MADEN HALİNDEKİ KIYMETLERİNDEN DAHA AŞAĞI BİR BEDEL İLE SATILAMAZ.",
  t: "Satış", d: 3
},
{
  q: "Mahcuz malın pazarlık suretiyle satılmasını haklı kılan durum aşağıdakilerden hangisidir?",
  o: ["Malın süratle bozulacak olması", "Alacaklının bunu talep etmesi", "Borçlunun bunu talep etmesi", "İcra müdürünün uygun görmesi", "Malın kıymetinin yüksek olması"],
  a: 0,
  e: "Pazarlık suretiyle satış halleri: mahcuz mallar BOZULACAKSA/değeri süratle düşecekse/muhafazası masraflıysa, BÜTÜN ALAKADARLAR isterse, borsa veya piyasada fiyatı bulunan kıymetli evrakta o günün fiyatı teklif edilirse, artırmada maden kıymetini bulmamış altın-gümüşe bu kıymet verilirse ve tahmin edilen değer kanuni sınırı geçmezse.",
  t: "Satış", d: 3
},
{
  q: "Pazarlık usulü ile satışlarda alıcı malın mülkiyetini nasıl kazanır?",
  o: ["Teslim ile", "İhale anında", "Bedeli ödemekle", "Tescil ile", "İcra mahkemesinin onayı ile"],
  a: 0,
  e: "PAZARLIK USULÜ ile satışlarda alıcı malın mülkiyetini TESLİMLE kazanır. (Açık artırmada ise artırmanın sona erdiği gün ve saatte şartlar varsa mülkiyet ihale alıcısına geçer.)",
  t: "Satış", d: 3
},
{
  q: "Taşınır ve taşınmaz mallar satış talebinden itibaren en fazla ne kadar sürede satılır?",
  o: ["Taşınırlar 2 ay, taşınmazlar 3 ay içinde", "Taşınırlar 3 ay, taşınmazlar 2 ay içinde", "İkisi de 1 ay içinde", "İkisi de 3 ay içinde", "Taşınırlar 1 ay, taşınmazlar 6 ay içinde"],
  a: 0,
  e: "TAŞINIR mallar satış talebinden nihayet İKİ AY içinde, TAŞINMAZLAR ise satış talebinden nihayet ÜÇ AY içinde icra dairesi tarafından açık artırma ile satılır.",
  t: "Satış", d: 2
},
{
  q: "Mükellefiyetler listesi, artırma şartnamesinin bir bölümü olarak tapu sicili hükmü taşır. Bunun yanındaki ikinci fonksiyonu nedir?",
  o: ["Bir sıra cetveli işlevi görmek", "Kıymet takdiri yerine geçmek", "Artırma ilanı yerine geçmek", "Tapuya haciz şerhi koymak", "Aciz belgesi işlevi görmek"],
  a: 0,
  e: "MÜKELLEFİYETLER LİSTESİ taşınmaz üzerindeki yükümlülükleri gösterir. İki fonksiyonu: (1) artırma şartnamesinin bir bölümü olarak TAPU SİCİLİ HÜKMÜ taşımak, (2) satış bedelinin paylaştırılmasını gösteren bir SIRA CETVELİ olmak.",
  t: "Satış", d: 3
},
{
  q: "Kıymet takdirine karşı tebliğden itibaren icra mahkemesine şikayet edilir; kesinleşen kıymet takdirinden itibaren belli bir süre geçmedikçe yeniden kıymet takdiri istenemez. Bu iki süre sırasıyla nedir?",
  o: ["7 gün – 2 yıl", "7 gün – 1 yıl", "3 gün – 2 yıl", "15 gün – 2 yıl", "7 gün – 6 ay"],
  a: 0,
  e: "İlgililer kıymet takdiri raporunun tebliğinden itibaren 7 GÜN içinde icra mahkemesinde şikayet başvurusu yapabilir. İcra mahkemesinin yaptığı ve KESİNLEŞEN kıymet takdirine karşı yapılmasından itibaren 2 YIL geçmedikçe yeniden kıymet takdiri istenemez. İcra mahkemesinin kıymet takdirine ilişkin kararları KESİNDİR.",
  t: "Satış", d: 3
},
{
  q: "İhalenin feshi talebinin hukuki niteliği, başvurulacak merci ve kural olarak süresi aşağıdakilerden hangisinde birlikte doğru verilmiştir?",
  o: ["Şikayet – icra mahkemesi – 7 gün", "Dava – genel mahkeme – 7 gün", "Şikayet – icra dairesi – 7 gün", "Dava – icra mahkemesi – 1 yıl", "Şikayet – icra mahkemesi – 1 ay"],
  a: 0,
  e: "İHALENİN FESHİ BİR DAVA DEĞİLDİR; şikayet üzerine İCRA MAHKEMESİNDEN talep edilir. Kural olarak ihalenin yapılmasından itibaren 7 GÜN içinde yazılı veya sözlü olarak talep edilir.",
  t: "İhalenin Feshi", d: 2
},
{
  q: "İhalenin feshi sebebi sonradan öğrenilmişse talep, öğrenmeden itibaren belli bir süre içinde yapılır; ancak sebebin en geç artırmadan itibaren belirli bir süre içinde öğrenilmiş olması gerekir. Bu iki süre nedir?",
  o: ["7 gün – 1 yıl", "7 gün – 6 ay", "3 gün – 6 ay", "1 yıl – 1 yıl", "7 gün – 2 yıl"],
  a: 0,
  e: "İhalenin feshi sebeplerinin sonradan öğrenilmesi durumunda ihalenin feshi ÖĞRENMEDEN İTİBAREN 7 GÜN içinde talep edilebilir. Ancak sebep EN GEÇ ARTIRMADAN İTİBAREN 1 YIL içinde öğrenilmelidir; aksi halde bir daha talep edilemez.",
  t: "İhalenin Feshi", d: 3
},
{
  q: "İhalenin feshini borçlu, satış talep eden alacaklı, resmi sicilde kayıtlı ilgililer ve sınırlı ayni hak sahipleri talep edebilir. Bunların yanında aşağıdakilerden hangisi de talep edebilir?",
  o: ["Pey sürerek ihaleye katılan alıcılar", "Artırmayı izleyen üçüncü kişiler", "Borçlunun mirasçı olmayan yakınları", "Takibe taraf olmayan alacaklılar", "Menfaati bulunmayan herkes"],
  a: 0,
  e: "İhalenin feshini şunlar talep edebilir: BORÇLU, SATIŞ TALEP EDEN ALACAKLI, mahcuzun resmi sicilinde kayıtlı olan ilgililer ve SINIRLI AYNİ HAK SAHİPLERİ ile PEY (teklif) SÜRMEK SURETİYLE ihaleye katılan ALICILAR.",
  t: "İhalenin Feshi", d: 2
},
{
  q: "Pey sürmek suretiyle ihaleye katılan alıcı ihalenin feshini isterken nispi harcın yanında ne yatırmak zorundadır?",
  o: ["İhale bedelinin %5'i oranında teminat", "İhale bedelinin %10'u oranında teminat", "İhale bedelinin %20'si oranında teminat", "Muhammen kıymetin %10'u oranında teminat", "Ayrıca bir şey yatırması gerekmez"],
  a: 0,
  e: "Pey sürmek suretiyle ihaleye iştirak eden ALICI fesih talebinde bulunurken hem İHALE BEDELİ ÜZERİNDEN NİSPİ BİR HARÇ hem de İHALE BEDELİNİN %5'İ oranında bir TEMİNAT yatırmak zorundadır.",
  t: "İhalenin Feshi", d: 3
},
{
  q: "İhalenin feshi talebinin incelenmesi ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Talep dosya üzerinden duruşmasız incelenir", "Mutlaka duruşmalı olarak incelenir", "Mahkeme 20 gün içinde tarafları duruşmaya çağırır", "Mahkeme tanık dinler ve bilirkişi raporlarına başvurabilir", "Verilen kararlar maddi anlamda kesin hüküm teşkil eder"],
  a: 0,
  e: "İhalenin feshi talebi MUTLAKA DURUŞMALI olarak incelenir. Mahkeme 20 GÜN içinde tarafları duruşmaya çağırır ve taraflar gelmese bile her halde kararını verir; tanık ve yemin dinleyebilir, bilirkişiye başvurabilir.",
  t: "İhalenin Feshi", d: 2
},
{
  q: "İcra mahkemesi ihalenin feshi talebini işin esasına girerek reddederse ne olur?",
  o: ["Haksız yere fesih talep eden kişiye ihale bedelinin %10'u kadar para cezası verir", "Ceza verilmez", "İhale bedelinin %20'si para cezası verilir", "Tazminata hükmedilir", "Teminat irat kaydedilir"],
  a: 0,
  e: "İcra mahkemesi ihalenin feshi talebini İŞİN ESASINA GİREREK reddetmişse, haksız yere fesih talep eden kişiye İHALE BEDELİNİN %10'U kadar PARA CEZASI verir. Mahkeme USULDEN ret kararı vermişse PARA CEZASI VERİLMEZ.",
  t: "İhalenin Feshi", d: 3
},
{
  q: "İhalenin feshi kararı kesinleşirse alıcının artırma anında kazandığı mülkiyet hakkı son bulur ve tescil iptal edilir. İhale bedeli bakımından sonuç nedir?",
  o: ["Alıcıya iade edilir", "Alacaklılara paylaştırılır", "Borçluya ödenir", "Hazineye irat kaydedilir", "İcra dairesinde bloke kalır"],
  a: 0,
  e: "İhalenin feshi kararı kesinleşirse alıcının artırma anında iktisap ettiği MÜLKİYET HAKKI SON BULUR, tapuda tescil yapılmışsa İPTAL edilir ve malın mülkiyeti borçluya döner; alıcının yatırdığı İHALE BEDELİ KENDİSİNE İADE EDİLİR. Asıl amaç malı yeniden usulüne uygun satışa çıkarmaktır. Feshi kararından önce 3. kişilerin iyi niyetli kazanımları KORUNUR.",
  t: "İhalenin Feshi", d: 3
},
{
  q: "Sıra cetvelinde alacakların ödeme sırası aşağıdakilerden hangisidir?",
  o: ["Rehinli → Amme → İmtiyazlı → İmtiyazsız", "Amme → Rehinli → İmtiyazlı → İmtiyazsız", "İmtiyazlı → Rehinli → Amme → İmtiyazsız", "Rehinli → İmtiyazlı → Amme → İmtiyazsız", "İmtiyazsız → İmtiyazlı → Amme → Rehinli"],
  a: 0,
  e: "Sıra cetvelinde ödeme sırası: I. REHİNLİ ALACAKLAR, II. AMME (KAMU) ALACAKLARI, III. İMTİYAZLI ALACAKLAR, IV. İMTİYAZSIZ (haciz sahibi) alacaklar (haciz talep tarihine göre sıralanır).",
  t: "Sıra Cetveli", d: 2
},
{
  q: "İmtiyazlı alacaklar içinde 1. sırada hangi alacaklar yer alır?",
  o: ["İşçi / işveren / nafaka alacakları", "Velayet-vesayet ilişkisinden kaynaklanan alacaklar", "Özel kanunlarda imtiyazlı sayılan alacaklar", "Rehinli alacaklar", "Amme alacakları"],
  a: 0,
  e: "İmtiyazlı alacaklarda: 1. SIRA İŞÇİ/İŞVEREN/NAFAKA alacakları, 2. SIRA VELAYET-VESAYET ilişkisinden kaynaklanan alacaklar, 3. SIRA ÖZEL KANUNLARDA imtiyazlı olarak sayılan alacaklardır.",
  t: "Sıra Cetveli", d: 3
},
{
  q: "Sıra cetveline karşı şikayet takip hukuku kurallarının ihlaline, itiraz davası ise sıra veya miktara itiraza dayanır. Bu iki yolda görevli merciler sırasıyla hangileridir?",
  o: ["İcra mahkemesi – genel mahkeme", "Genel mahkeme – icra mahkemesi", "İcra mahkemesi – icra mahkemesi", "Genel mahkeme – genel mahkeme", "İcra dairesi – icra mahkemesi"],
  a: 0,
  e: "ŞİKAYET, sıra cetvelinin usule ve kanuna aykırı düzenlenmesine dayanır ve 7 gün içinde İCRA MAHKEMESİNE yapılır. İTİRAZ DAVASI ise bir alacaklının başka bir alacaklının sırasına/alacak miktarına ya da kendi alacak miktarına karşı gelmesine dayanır ve 7 gün içinde GENEL MAHKEMELERDE açılır.",
  t: "Sıra Cetveli", d: 3
},
{
  q: "Sıra cetveline karşı şikayet sonucu yapılan düzeltmeden tüm alacaklılar yararlanır. İtiraz davasında verilen karardan kim yararlanır?",
  o: ["Yalnızca davayı açan alacaklı", "Bütün alacaklılar", "Yalnızca rehinli alacaklılar", "Yalnızca imtiyazlı alacaklılar", "Yalnızca borçlu"],
  a: 0,
  e: "ŞİKAYET sonucu icra mahkemesinin sıra cetvelinin düzeltilmesi kararından SADECE ŞİKAYETTE BULUNAN DEĞİL TÜM ALACAKLILAR yararlanır. İTİRAZ DAVASINDA ise verilen karardan YALNIZCA DAVA AÇAN ALACAKLI yararlanır. Ayrıca itiraz davasını BORÇLU AÇAMAZ.",
  t: "Sıra Cetveli", d: 3
},
{
  q: "Kesin borç ödemeden aciz belgesinin takip hukuku bakımından sonuçları arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Alacaklıya borçtan kurtulma davası açma hakkı verir", "Borç ikrarı içerir", "Alacaklıya itirazın kesin kaldırılmasını talep etme yetkisi verir", "Alacaklıya hacze iştirak etme hakkı tanır", "Tasarrufun iptali davası açma hakkı verir"],
  a: 0,
  e: "Kesin borç ödemeden aciz belgesi: BORÇ İKRARI içerir, itirazın KESİN KALDIRILMASINI talep etme yetkisi verir, düzenlenmesinden itibaren 1 YIL içinde başlatılacak takiplerde ÖDEME EMRİ GÖNDERİLMESİNE GEREK YOKTUR, HACZE İŞTİRAK hakkı tanır ve TASARRUFUN İPTALİ DAVASI açma hakkı verir. Borçtan kurtulma davası BORÇLUNUN açtığı bir davadır.",
  t: "Aciz Belgesi", d: 3
},
{
  q: "Kesin borç ödemeden aciz belgesine bağlanan alacak, maddi hukuk bakımından 20 yıl (mirasçılara karşı 1 yıl) zamanaşımına uğramaz. Faiz ve borcun tecdidi bakımından sonuç nedir?",
  o: ["Faiz istenemez, borç tecdit edilmiş sayılmaz", "Faiz istenebilir, borç tecdit edilmiş sayılmaz", "Faiz istenemez, borç tecdit edilmiş sayılır", "Faiz istenebilir, borç tecdit edilmiş sayılır", "Faiz istenebilir, alacak temlik edilemez"],
  a: 0,
  e: "Kesin aciz belgesine bağlanan alacak 20 YIL boyunca zamanaşımına uğramaz (MİRASÇILARA karşı hükmü 1 YILDIR). Bu alacaklar için FAİZ TALEP EDİLEMEZ. Borç TECDİT EDİLMİŞ (yenilenmiş) SAYILMAZ; bu sebeple alacaklı KEFİLDEN FAİZ TALEP EDEBİLİR.",
  t: "Aciz Belgesi", d: 3
},
{
  q: "Geçici borç ödemeden aciz belgesinin tek hükmü nedir?",
  o: ["Alacaklısına tasarrufun iptali davası açma hakkı verir", "İtirazın kesin kaldırılmasını talep hakkı verir", "Hacze iştirak hakkı verir", "Borç ikrarı içerir", "20 yıl zamanaşımı korumasını sağlar"],
  a: 0,
  e: "GEÇİCİ borç ödemeden aciz belgesinin TEK HÜKMÜ vardır: alacaklısına TASARRUFUN İPTALİ DAVASINI açma hakkı verir. Tasarrufun iptali davasının özel dava şartı, alacaklının elinde KESİN YA DA GEÇİCİ borç ödemeden aciz belgesinin bulunmasıdır.",
  t: "Aciz Belgesi", d: 2
},
{
  q: "Kambiyo senetlerine mahsus haciz yolunda ödeme, itiraz ve mal beyanı süreleri sırasıyla nedir?",
  o: ["Ödeme 10 gün, itiraz 5 gün, mal beyanı 10 gün", "Ödeme 7 gün, itiraz 7 gün, mal beyanı 7 gün", "Ödeme 10 gün, itiraz 7 gün, mal beyanı 10 gün", "Ödeme 5 gün, itiraz 5 gün, mal beyanı 7 gün", "Ödeme 15 gün, itiraz 7 gün, mal beyanı 10 gün"],
  a: 0,
  e: "Kambiyo senetlerine mahsus haciz yolunda BORCUN ÖDEME SÜRESİ 10 GÜN, ÖDEME EMRİNE İTİRAZ SÜRESİ 5 GÜN (icra mahkemesine) ve MAL BEYANINDA BULUNMA SÜRESİ 10 GÜNDÜR (icra dairesine).",
  t: "Kambiyo Senetleri", d: 2
},
{
  q: "Kambiyo senetlerine mahsus haciz yolunda ödeme emrine itiraz nereye yapılır ve takip üzerindeki etkisi nedir?",
  o: ["İcra mahkemesine; satıştan başka işlemleri durdurmaz", "İcra dairesine; takibi kendiliğinden durdurur", "İcra mahkemesine; takibi tamamen durdurur", "İcra dairesine; takibi durdurmaz", "Genel mahkemeye; takibi durdurur"],
  a: 0,
  e: "Kambiyo senetlerine mahsus haciz yolunda ödeme emrine itiraz İCRA MAHKEMESİNE bir dilekçe ile (YAZILI olarak) yapılır ve SATIŞTAN BAŞKA icra takip işlemlerini DURDURMAZ.",
  t: "Kambiyo Senetleri", d: 2
},
{
  q: "Kambiyo senetlerine mahsus haciz yolunda takip talebini alan icra dairesi neyi inceleyemez?",
  o: ["Senede bağlı alacağın zamanaşımına uğrayıp uğramadığını", "Takip talebinde kanuni unsurların bulunup bulunmadığını", "Senedin kambiyo senedi niteliği taşıyıp taşımadığını", "Alacaklının yetkili hamil olup olmadığını", "Senedin vadesinin gelip gelmediğini"],
  a: 0,
  e: "İcra müdürünün SENEDE BAĞLI ALACAĞIN ZAMANAŞIMINA UĞRAYIP UĞRAMADIĞINI İNCELEME YETKİSİ YOKTUR. Diğer dört hususu inceler.",
  t: "Kambiyo Senetleri", d: 3
},
{
  q: "Kambiyo senetlerine mahsus haciz yolunda GENEL şikayet sebepleri ve süresi nedir?",
  o: ["Takip talebinde kanuni unsurların bulunmaması ve senedin vadesinin gelmemesi — 7 gün", "Senedin kambiyo senedi niteliği taşımaması ve alacaklının yetkili hamil olmaması — 7 gün", "Takip talebinde kanuni unsurların bulunmaması — 5 gün", "Senedin vadesinin gelmemesi — 5 gün", "Tüm sebepler için süre 5 gündür"],
  a: 0,
  e: "GENEL şikayet sebepleri (süre 7 GÜN): takip talebinde kanuni unsurlar bulunmaması ve senedin vadesi gelmemesi. ÖZEL şikayet sebepleri (süre 5 GÜN): senedin kambiyo senedi niteliği taşımaması ve alacaklının yetkili hamil olmaması. Yetkili merci her ikisinde de icra mahkemesidir.",
  t: "Kambiyo Senetleri", d: 3
},
{
  q: "Kambiyo senetlerine mahsus haciz yolunda hangi kurumlar söz konusu OLMAZ?",
  o: ["İtirazın kesin/geçici kaldırılması ve borçtan kurtulma davası", "Haciz ve satış aşamaları", "Ödeme emrine şikayet", "Mal beyanı", "Sıra cetveli"],
  a: 0,
  e: "İtiraz İCRA MAHKEMESİNDE yapıldığı için bu takipte İTİRAZIN KESİN YA DA GEÇİCİ KALDIRILMASI söz konusu OLMAZ ve BORÇTAN KURTULMA DAVASI AÇILMAZ. Haciz, satış ve paraların paylaştırılması aşamaları genel haciz yolu ile aynıdır.",
  t: "Kambiyo Senetleri", d: 3
},
{
  q: "Kambiyo senetlerine mahsus haciz yolunda takip talebine eklenmesi gereken zorunlu unsurlar arasında aşağıdakilerden hangisi vardır?",
  o: ["Kambiyo senedinin aslı ve borçlu sayısı kadar onaylı örneği", "Sadece senedin fotokopisi", "Aciz belgesi", "İlam", "Noter senedi"],
  a: 0,
  e: "Zorunlu unsurlar: KAMBİYO SENEDİNİN ASLI VE BORÇLU SAYISI KADAR ONAYLI ÖRNEĞİ, ödememe protestosu zorunluysa protestonun çekilip eklenmesi, çeklerde kısmi ödeme yapılmışsa bankaca verilen çekin arkalı önlü fotokopisi.",
  t: "Kambiyo Senetleri", d: 3
},
{
  q: "Alacağı hem rehinle güvence altına alınmış hem de kambiyo senedine bağlı olan alacaklı hangi yolu izleyebilir?",
  o: ["Rehne başvurmadan doğrudan kambiyo takibi", "Önce mutlaka rehnin paraya çevrilmesi", "Yalnızca genel haciz yolu", "Yalnızca ilamlı icra takibi", "Yalnızca iflas yolu"],
  a: 0,
  e: "Alacağını rehinle teminat altına almış olan alacaklı, bu alacak için aynı zamanda KAMBİYO SENEDİ de almışsa ÖNCE REHNE BAŞVURMAK ZORUNDA DEĞİLDİR. Doğrudan kambiyo senetlerine mahsus haciz yolu ile takip başlatabilir.",
  t: "Kambiyo Senetleri", d: 3
},
{
  q: "Kambiyo senetlerine mahsus haciz yolunda icra mahkemesi, ödeme emrine itiraz üzerine haksız çıkan tarafa hangi oranlarda tazminat ve para cezası hükmeder?",
  o: ["%20'den az olmamak üzere tazminat ve %10 para cezası", "%10'dan az olmamak üzere tazminat ve %20 para cezası", "%40'tan az olmamak üzere tazminat ve %10 para cezası", "%20 oranında tazminat; para cezası hükmedilmez", "%10 oranında para cezası; tazminat hükmedilmez"],
  a: 0,
  e: "İcra mahkemesi ödeme emrine itiraz edilmesi durumunda HAKSIZ ÇIKAN TARAFA %20'DEN AZ OLMAMAK ÜZERE TAZMİNATLA BİRLİKTE %10 ORANINDA PARA CEZASI hükmeder.",
  t: "Kambiyo Senetleri", d: 3
},
{
  q: "İlamlı icra takibinde yetkili icra dairesi ve borçluya gönderilecek emir bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Türkiye'deki herhangi bir icra dairesi; icra emri", "Türkiye'deki herhangi bir icra dairesi; ödeme emri", "Yalnızca borçlunun yerleşim yeri; icra emri", "Yalnızca ilamı veren mahkemenin yeri; icra emri", "Yalnızca alacaklının yerleşim yeri; ödeme emri"],
  a: 0,
  e: "İlamlı icra takibi TÜRKİYE'DEKİ HERHANGİ BİR İCRA DAİRESİNDE başlatılabilir ve borçluya ödeme emri yerine İCRA EMRİ gönderilir. Borçlunun icra emrine itiraz ederek takibi durdurma imkanı YOKTUR.",
  t: "İlamlı İcra", d: 2
},
{
  q: "Para veya teminat alacağı dışındaki alacaklar için (taşınmaz teslimi, çocuk teslimi, altın para alacağı gibi) hangi takip yolu zorunludur?",
  o: ["İlamlı icra takibi", "Genel haciz yolu", "Kambiyo senetlerine mahsus haciz yolu", "Rehnin paraya çevrilmesi yolu", "İflas yolu"],
  a: 0,
  e: "Para veya teminat alacağı DIŞINDAKİ bir alacak için (taşınır teslimi, taşınmaz teslimi, çocuk teslimi, bir şeyin yapılması/yapılmaması ve ALTIN PARA alacağı gibi) başvurulması ZORUNLU olan takip türü İLAMLI İCRA TAKİBİDİR.",
  t: "İlamlı İcra", d: 2
},
{
  q: "Bir mahkeme hükmü (ilam) kaç yılda zamanaşımına uğrar ve hangi ilamlar zamanaşımına uğramaz?",
  o: ["10 yıl; taşınmazların aynına ve aile hukukuna ilişkin ilamlar zamanaşımına uğramaz", "20 yıl; ceza ilamları zamanaşımına uğramaz", "10 yıl; tüm ilamlar zamanaşımına uğrar", "5 yıl; nafaka ilamları uğramaz", "20 yıl; taşınmazların aynına ilişkin ilamlar uğramaz"],
  a: 0,
  e: "Bir mahkeme hükmü (ilam) 10 YIL geçmekle zamanaşımına uğrar. Ancak TAŞINMAZLARIN AYNINA ve AİLE HUKUKUNA ilişkin ilamlar zamanaşımına UĞRAMAZLAR.",
  t: "İlamlı İcra", d: 2
},
{
  q: "Aşağıdakilerden hangisi ilamlı icra takibine konu OLMAZ?",
  o: ["Tespit ve inşai nitelikteki mahkeme kararları", "Hukuk mahkemelerinin eda kararları", "Ceza mahkemelerinin tazminata ilişkin kararları", "Sayıştay ilamları", "Hakem kararları"],
  a: 0,
  e: "USULE İLİŞKİN KARARLAR, ARA KARARLAR ve TESPİT-İNŞAİ nitelikteki kararlar ilamlı icraya KONU OLMAZLAR; çünkü tespit hükümleri EDA HÜKMÜ İÇERMEZ. Konu olanlar: eda kararları, ceza mahkemelerinin tazminat/yargılama gideri kararları, idari yargıda tam yargı davası kararları, Sayıştay ilamları, hakem kararları ve tenfizine karar verilmiş yabancı kararlar.",
  t: "İlamlı İcra", d: 3
},
{
  q: "İİK 38. maddeye göre aşağıdaki noter senetlerinden hangisi ilam niteliğinde belge sayılır?",
  o: ["Kayıtsız şartsız para borcu ikrarı içeren düzenleme biçimindeki senet", "Kayıtsız şartsız para borcu ikrarı içeren onaylama biçimindeki senet", "Şarta bağlı para borcu ikrarı içeren düzenleme biçimindeki senet", "Taşınmaz satış vaadi içeren düzenleme biçimindeki senet", "İmzası noter tarafından onaylanmış adi senet"],
  a: 0,
  e: "İİK 38'e göre ilam niteliğindeki belgeler: mahkeme huzurunda yapılan SULHLER ve KABULLER, İSTİNAF VE TEMYİZ KEFALETNAMELERİ, İCRA DAİRESİNDEKİ KEFALETLER ve kayıtsız şartsız para borcu ikrarı içeren DÜZENLEME biçimindeki noter senetleri. Ayrıca kayıtsız şartsız para borcu ikrarı içeren İPOTEK AKİT TABLOSU da ilam niteliğindedir.",
  t: "İlamlı İcra", d: 3
},
{
  q: "Özel yasalarda sayılan ilam niteliğindeki belgeler arasında aşağıdakilerden hangisi vardır?",
  o: ["Tüketici sorunları hakem heyetinin verdiği kararlar", "Ticaret odası aidat bildirimleri", "Vergi ihbarnameleri", "Banka kredi sözleşmeleri", "Sigorta poliçeleri"],
  a: 0,
  e: "Özel yasalarda sayılan ilam niteliğindeki belgeler: avukatlarla müvekkillerinin imzaladıkları UZLAŞMA TUTANAKLARI, TÜKETİCİ SORUNLARI HAKEM HEYETİ kararları, BAROLARIN para cezası/gider kararları, ODALARIN aidat ve para cezalarına ilişkin kararları ve NOTERLER BİRLİĞİ DİSİPLİN KURULU kararları.",
  t: "İlamlı İcra", d: 3
},
{
  q: "Aşağıdakilerden hangisi KESİNLEŞMEDİKÇE icraya konulamayacak ilamlardan biri DEĞİLDİR?",
  o: ["Nafaka hükümleri", "Taşınmazlar ve üzerindeki ayni haklara ilişkin ilamlar", "Kişiler hukukuna ilişkin ilamlar", "Sayıştay ilamları", "İstihkak davasının kabulüne ilişkin ilamlar"],
  a: 0,
  e: "NAFAKA HÜKÜMLERİ, hakem kararları, tahliye davası, alacak davası ve tazminat davası kararları KESİNLEŞMEDEN İCRAYA KONULABİLİR. Kesinleşmedikçe icraya konulamayanlar: taşınmaz/ayni hak ilamları, aile hukuku (nafaka hariç) ve kişiler hukuku ilamları, Sayıştay ilamları, menfi tespitte tazminata ilişkin ilamlar, tenfiz kararları, istihkak davasının kabulü ilamları ve gemilere ilişkin kararlar.",
  t: "İlamlı İcra", d: 3
},
{
  q: "2021 değişikliğine göre icranın durdurulması kararı nereden talep edilir?",
  o: ["İcra mahkemesinden", "Bölge adliye mahkemesinden", "Yargıtay'dan", "İcra dairesinden", "Genel mahkemeden"],
  a: 0,
  e: "2021 değişikliğine göre icranın durdurulması kararı artık ÜST MAHKEMELERDEN DEĞİL İCRA MAHKEMESİNDEN talep edilir. Borçlu bu kararı almak için icra dairesinden alacağın tamamı karşılığında TEMİNAT yatırmak koşuluyla süre verilmesini talep eder.",
  t: "İlamlı İcra", d: 3
},
{
  q: "İcranın iadesi, bölge adliye mahkemesinin ilk derece hükmünü kaldırması veya Yargıtay'ın hükmü bozması halinde söz konusu olur. Nereden talep edilir?",
  o: ["İcra dairesinden", "İcra mahkemesinden", "Genel mahkemeden", "Hükmü veren mahkemeden", "Bölge adliye mahkemesinden"],
  a: 0,
  e: "Bir ilamın icrası yerine getirildikten sonra istinaf aşamasında BAM ilk derece mahkemesinin HÜKMÜNÜ KALDIRIRSA ya da temyiz aşamasında Yargıtay HÜKMÜ BOZARSA icranın iadesi söz konusu olur. İcranın iadesi İCRA DAİRESİNDEN talep edilir.",
  t: "İlamlı İcra", d: 3
},
{
  q: "İcranın geri bırakılması talebinde süre, dayanılan sebebin icra emrinin tebliğinden önce mi sonra mı doğduğuna göre değişir. Bu iki halde süre sırasıyla nedir?",
  o: ["7 gün – süresiz", "Süresiz – 7 gün", "7 gün – 7 gün", "3 gün – süresiz", "Süresiz – süresiz"],
  a: 0,
  e: "İcra emrinin tebliğinden ÖNCE borç ödenmiş, ertelenmiş veya zamanaşımına uğramışsa borçlu 7 GÜN içinde icranın geri bırakılmasını talep eder. Bu sebepler icra emrinin tebliğinden SONRA doğmuşsa borçlu SÜRESİZ olarak (takip sona erinceye kadar) talep edebilir.",
  t: "İlamlı İcra", d: 3
},
{
  q: "Alacağı rehinle güvence altına alınmış alacaklı, kural olarak öncelikle hangi yola başvurmak zorundadır?",
  o: ["Rehinli malların paraya çevrilmesi", "Genel haciz yolu", "İflas yolu", "İlamlı icra", "Kambiyo senetlerine mahsus haciz"],
  a: 0,
  e: "Alacak rehinle teminat altına alınmışsa alacaklı DOĞRUDAN HACİZ YA DA DOĞRUDAN İFLAS yolu ile takip BAŞLATAMAZ. Öncelikle rehinli malların paraya çevrilmesini talep etmeli; rehin alacağı karşılamazsa kalan kısım için haciz ya da iflas takibi başlatabilir.",
  t: "Rehnin Paraya Çevrilmesi", d: 2
},
{
  q: "İİK'nın uygulanmasında 'taşınır rehni' tabiri; teslime bağlı rehinleri, TMK 940'taki rehinleri, ticari işletme rehnini ve alacak-haklar üzerindeki rehinleri kapsar. Bunların yanında aşağıdakilerden hangisi de bu kapsamdadır?",
  o: ["Hapis hakkı", "İpotek", "İrat senedi", "Taşınmaz mükellefiyeti", "İntifa hakkı"],
  a: 0,
  e: "'TAŞINIR REHNİ' tabiri teslime bağlı rehinleri, TMK 940. maddesinde öngörülen rehinleri, TİCARİ İŞLETME REHNİNİ, HAPİS HAKKINI ve alacak ve sair haklar üzerindeki rehinleri kapsar. Bayrağına ve sicile kayıtlı olup olmadığına bakılmaksızın bütün GEMİLER hakkında TAŞINIRLARA ilişkin hükümler uygulanır.",
  t: "Rehnin Paraya Çevrilmesi", d: 3
},
{
  q: "Üst, kaynak, mecra, geçit, irtifak, intifa, sükna, alım, önalım ve geri alım haklarının rehin hakkı bakımından ortak özelliği nedir?",
  o: ["Hiçbiri alacaklısına rehin hakkı vermez", "Hepsi alacaklısına rehin hakkı verir", "Yalnızca irtifak nitelikli olanlar verir", "Yalnızca tapuya şerh edilenler verir", "Yalnızca süreye bağlı olanlar verir"],
  a: 0,
  e: "Alacaklısına REHİN HAKKI VERMEYEN haklar: ÜST HAKKI, KAYNAK HAKKI, MECRA HAKKI, GEÇİT HAKKI, İRTİFAK HAKKI, İNTİFA HAKKI, SÜKNA (oturma) HAKKI, ALIM HAKKI, ÖNALIM HAKKI ve GERİ ALIM HAKKI. Alacaklı bu haklara dayanarak rehnin paraya çevrilmesi yolu ile takip başlatamaz.",
  t: "Rehnin Paraya Çevrilmesi", d: 3
},
{
  q: "Taşınır rehninin paraya çevrilmesi yoluyla İLAMSIZ takipte ödeme ve itiraz süreleri nedir?",
  o: ["Ödeme 15 gün, itiraz 7 gün", "Ödeme 30 gün, itiraz 7 gün", "Ödeme 7 gün, itiraz 7 gün", "Ödeme 10 gün, itiraz 5 gün", "Ödeme 15 gün, itiraz 5 gün"],
  a: 0,
  e: "TAŞINIR rehninin paraya çevrilmesi yoluyla ilamsız takipte ÖDEME SÜRESİ 15 GÜN, İTİRAZ SÜRESİ 7 GÜNDÜR. Borçlu 7 gün içinde açıkça REHİN HAKKINA itiraz etmezse rehin hakkını kabul etmiş sayılır.",
  t: "Rehnin Paraya Çevrilmesi", d: 3
},
{
  q: "İpoteğin paraya çevrilmesi yoluyla ilamsız takipte ödeme süresi ile borca itiraz süresi sırasıyla nedir?",
  o: ["30 gün – 7 gün", "15 gün – 7 gün", "7 gün – 7 gün", "30 gün – 5 gün", "10 gün – 5 gün"],
  a: 0,
  e: "İPOTEĞİN paraya çevrilmesi yoluyla ilamsız takipte ÖDEME SÜRESİ 30 GÜN, BORCA İTİRAZ SÜRESİ 7 GÜNDÜR. İPOTEK HAKKINA İTİRAZ EDİLEMEZ. Ayrıca ZAMANAŞIMI itirazı sonuç doğurmaz, zira taşınmaz rehni ile teminat altına alınmış alacaklar ZAMANAŞIMINA UĞRAMAZ.",
  t: "Rehnin Paraya Çevrilmesi", d: 3
},
{
  q: "Rehnin paraya çevrilmesi yoluyla takipte hangi aşama YOKTUR?",
  o: ["Haciz aşaması", "Takip talebi", "Ödeme emrinin tebliği", "Satış", "Paranın ödenmesi"],
  a: 0,
  e: "Rehnin paraya çevrilmesi yoluyla takipte HACİZ AŞAMASI YOKTUR. Takip kesinleştikten sonra doğrudan rehinli malların satışı aşamasına geçilir. Ayrıca ödeme/icra emrinde MAL BEYANINDA BULUNULMASI gibi bir kayda da yer verilmez.",
  t: "Rehnin Paraya Çevrilmesi", d: 2
},
{
  q: "Rehinli malların satış talep süreleri ve icra dairesinin satış süreleri nedir?",
  o: ["Taşınırda 6 ay içinde talep, 2 ay içinde satış; taşınmazda 1 yıl içinde talep, 3 ay içinde satış", "Taşınırda 1 yıl talep, 3 ay satış; taşınmazda 6 ay talep, 2 ay satış", "İkisinde de 1 yıl talep, 3 ay satış", "Taşınırda 6 ay talep, 3 ay satış; taşınmazda 1 yıl talep, 2 ay satış", "İkisinde de 6 ay talep, 2 ay satış"],
  a: 0,
  e: "TAŞINIR rehninde satış talep süresi 6 AY, icra dairesi 2 AY içinde satar. TAŞINMAZ rehninde satış talep süresi 1 YIL, icra dairesi 3 AY içinde satar. Alacaklı bu hak düşürücü süreler içinde satış talep etmezse İCRA TAKİBİ DÜŞER.",
  t: "Rehnin Paraya Çevrilmesi", d: 3
},
{
  q: "Kesin rehin açığı belgesi ile borç ödemeden aciz belgesi arasındaki en önemli fark nedir?",
  o: ["Kesin rehin açığı belgesi ile tasarrufun iptali davası açılamaz", "Kesin rehin açığı belgesi ile itirazın kesin kaldırılması istenemez", "Kesin rehin açığı belgesi hacze iştirak yetkisi vermez", "Kesin rehin açığı belgesi borç ikrarı içermez", "Aralarında hiçbir fark yoktur"],
  a: 0,
  e: "Kesin rehin açığı belgesi ile borç ödemeden aciz belgeleri AYNI BELGELER DEĞİLDİR. Bu sebeple alacaklı kesin rehin açığı belgesi ile TASARRUFUN İPTALİ DAVASI AÇAMAZ. Ancak bu belge itirazın kesin kaldırılmasını isteme hakkı ve hacze iştirak yetkisi verir.",
  t: "Rehin Açığı Belgesi", d: 3
},
{
  q: "Rehin açığı belgesi neyi gösterir?",
  o: ["Sadece rehinli mallar hakkında yorum yapılmasını sağlar; borçlunun aczini göstermez", "Borçlunun tüm malvarlığının yetersizliğini gösterir", "Borçlunun iflas ettiğini gösterir", "Borç ikrarı içermez", "Alacağın zamanaşımına uğradığını gösterir"],
  a: 0,
  e: "Rehin açığı belgesi BORÇLUNUN ACZİNİ GÖSTERMEZ; borçlunun tüm malvarlığı hakkında bir yorum yapılamaz. Sadece SADECE REHİNLİ MALLAR hakkında yorum yapılabilir: rehinli mal satılmış ancak satış bedeli alacağı karşılamaya yetmemiştir.",
  t: "Rehin Açığı Belgesi", d: 3
},
{
  q: "Geçici rehin açığı belgesi sahibi alacaklı, borçlunun rehin dışındaki mallarını haczettirebilir. Buna karşılık rehinli mallar satılıp açık kesinleşmedikçe ne yapamaz?",
  o: ["Haczettirdiği malların satışını isteyemez", "Borçlunun mallarına haciz koydurtamaz", "Haciz yolu ile takip başlatamaz", "İflas yolu ile takip başlatamaz", "Hacze iştirak edemez"],
  a: 0,
  e: "Geçici rehin açığı belgesi sahibi alacaklı, rehinli mallar satılıp da açık kesinleşmedikçe (yani geçici rehin açığı belgesi KESİN rehin açığı belgesine dönüşmedikçe) HACZETTİRDİĞİ MALLARIN SATIŞINI İSTEYEMEZ.",
  t: "Rehin Açığı Belgesi", d: 3
},
{
  q: "Menfi tespit davasında süre ve ispat yükü bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Süreye tabi değildir; ispat yükü kural olarak davalı alacaklıdadır", "Bir yıllık hak düşürücü süreye tabidir; ispat yükü alacaklıdadır", "Süreye tabi değildir; ispat yükü kural olarak davacı borçludadır", "İki yıllık zamanaşımına tabidir; ispat yükü davacı borçludadır", "Süreye tabi değildir; ispat yükünü mahkeme serbestçe belirler"],
  a: 0,
  e: "MENFİ TESPİT DAVASI'nda HAK DÜŞÜRÜCÜ VEYA ZAMANAŞIMI SÜRESİ YOKTUR; borç ödeninceye kadar her zaman açılabilir. Davacı BORÇLU, davalı ALACAKLIDIR. İSPAT YÜKÜ kural olarak DAVALI ALACAKLIYA düşer. Görevli mahkeme GENEL MAHKEMELERDİR ve kararlar maddi anlamda kesin hüküm teşkil eder.",
  t: "Menfi Tespit", d: 2
},
{
  q: "Takipten ÖNCE açılan menfi tespit davasında borçlu, ihtiyati tedbir kararı alarak takibi durdurabilmek için alacağın en az yüzde kaçı oranında teminat yatırmalıdır?",
  o: ["%15", "%10", "%20", "%25", "Teminat gerekmez"],
  a: 0,
  e: "Borçlunun takibi durdurması için menfi tespit davasının açıldığı mahkemede ALACAĞIN YÜZDE ON BEŞİNDEN AŞAĞI OLMAMAK ÜZERE teminat yatırması gerekir. Bu durumda mahkeme dava sonuçlanıncaya kadar İHTİYATİ TEDBİR kararı verebilir.",
  t: "Menfi Tespit", d: 2
},
{
  q: "Takipten SONRA açılan menfi tespit davasında borçlu takibi durduramaz. Buna karşılık %15'ten aşağı olmayan teminat göstererek neyi sağlayabilir?",
  o: ["Paranın alacaklıya ödenmesinin engellenmesini", "İhtiyati tedbirle takibin durmasını", "Haczin tümüyle kaldırılmasını", "Satışın süresiz ertelenmesini", "Takibin iptal edilmesini"],
  a: 0,
  e: "Borçlu takipten sonra açılan menfi tespit davasında İCRA TAKİBİNİ DURDURAMAZ; ancak alacağın YÜZDE ON BEŞİNDEN AŞAĞI OLMAMAK ÜZERE göstereceği teminat karşılığında İCRA DAİRESİNİN BANKA HESABINA GİREN PARANIN ALACAKLIYA ÖDENMESİNİ ENGELLEYEBİLİR.",
  t: "Menfi Tespit", d: 3
},
{
  q: "Menfi tespit davasında yetkili mahkeme takipten önce yalnızca davalı alacaklının yerleşim yeri mahkemesidir. Takipten sonra açılan davada ayrıca hangi mahkeme yetkilidir?",
  o: ["İcra takibinin yapıldığı yer mahkemesi", "Davacı borçlunun yerleşim yeri mahkemesi", "Malın bulunduğu yer mahkemesi", "Sözleşmenin yapıldığı yer mahkemesi", "Yalnızca asliye ticaret mahkemesi"],
  a: 0,
  e: "TAKİPTEN ÖNCE açılan menfi tespit davasında yetkili mahkeme HMK 6'ya göre DAVALI ALACAKLININ YERLEŞİM YERİ mahkemesidir. TAKİPTEN SONRA açılan davada kesin olmayan yetki söz konusudur: borçlu davayı alacaklının yerleşim yerinde veya İCRA TAKİBİNİN YAPILDIĞI YER mahkemesinde açabilir.",
  t: "Menfi Tespit", d: 3
},
{
  q: "Menfi tespit davası reddedildiğinde mahkemenin re'sen %20'den az olmayan tazminata hükmedebilmesi için hangi şart gerekir?",
  o: ["Borçlunun ihtiyati tedbirle takibi durdurmuş olması", "Alacaklının tazminat talebinde bulunmuş olması", "Borçlunun kötü niyetli olduğunun kanıtlanması", "Takip konusu borcun tamamen ödenmiş olması", "Ayrıca herhangi bir şart gerekmez"],
  a: 0,
  e: "Dava reddedildiğinde alacaklı lehine tazminata hükmedilebilmesi için BORÇLUNUN İHTİYATİ TEDBİR YOLUYLA İCRA TAKİBİNİ DURDURMUŞ OLMASI gerekir. Bu halde mahkeme RE'SEN (alacaklının talebi aranmaksızın) dava konusu alacağın %20'SİNDEN AŞAĞI OLMAYAN tazminata hükmeder.",
  t: "Menfi Tespit", d: 3
},
{
  q: "Menfi tespit davası hangi durumda kendiliğinden istirdat davasına dönüşür?",
  o: ["Tedbir alınmadan borç icra tehdidiyle ödenmişse", "Borçlu ihtiyati tedbir kararı almışsa", "Borçlu borcu rızası ile ödemişse", "Alacaklı davadan feragat etmişse", "Mahkeme davayı reddetmişse"],
  a: 0,
  e: "Borçlu menfi tespit davası devam ederken İHTİYATİ TEDBİR KARARI ALMAMIŞ ve takip konusu borcu CEBRİ İCRA TEHDİDİ ALTINDA ÖDEMİŞSE, dava KENDİLİĞİNDEN İSTİRDAT DAVASINA DÖNÜŞÜR. Bu halde sadece BORÇLU LEHİNE tazminata hükmedilir.",
  t: "Menfi Tespit", d: 3
},
{
  q: "İstirdat davasının hak düşürücü süresi ve ispat yükü nedir?",
  o: ["Paranın ödenmesinden itibaren 1 yıl; ispat yükü davacı borçludadır", "Paranın ödenmesinden itibaren 2 yıl; ispat yükü alacaklıdadır", "Süre yoktur; ispat yükü borçludadır", "1 yıl; ispat yükü alacaklıdadır", "6 ay; ispat yükü borçludadır"],
  a: 0,
  e: "İSTİRDAT DAVASI paranın ödenmesinden itibaren 1 YIL içinde açılmalıdır; bu süre HAK DÜŞÜRÜCÜDÜR ve mahkemece RE'SEN dikkate alınır. Menfi tespitten farklı olarak İSPAT YÜKÜ DAVACI BORÇLUDADIR.",
  t: "İstirdat", d: 2
},
{
  q: "Aşağıdakilerden hangisi rıza ile ödeme sayılır ve bu nedenle istirdat davası açılmasını engeller?",
  o: ["Borcun, icra takibinden önce ödenmesi", "Takip kesinleştikten sonra icra dairesi aracılığı ile ödeme", "Cebri icra tehdidi altında ödeme", "Haciz sonrası satıştan elde edilen para ile ödeme", "Hiçbiri rıza ile ödeme sayılmaz"],
  a: 0,
  e: "Rıza ile ödeme sayılan durumlar: BORCUN İCRA TAKİBİNDEN ÖNCE ÖDENMESİ, takipten sonra ödeme emri tebliğ edilmiş ancak borcun İTİRAZ SÜRESİ İÇİNDE ödenmesi ve ödemenin icra dairesi aracılığı olmadan HARİCEN yapılması. Bu hallerde istirdat davası açılamaz ama SEBEPSİZ ZENGİNLEŞME DAVASI açılabilir.",
  t: "İstirdat", d: 3
},
{
  q: "İstirdat davasının kabul veya reddi halinde tazminat durumu nedir?",
  o: ["Haksız çıkan taraf aleyhine tazminata hükmedilmez", "Haksız çıkan tarafa %20 tazminat hükmedilir", "Sadece borçlu lehine tazminata hükmedilir", "Sadece alacaklı lehine tazminata hükmedilir", "%15 tazminata hükmedilir"],
  a: 0,
  e: "İstirdat davasının kabul ya da ret edilmesi halinde HAKSIZ ÇIKAN TARAF ALEYHİNE TAZMİNATA HÜKMEDİLMEZ.",
  t: "İstirdat", d: 3
},
{
  q: "Hacizli mal BORÇLUNUN elinde iken açılan istihkak davasında davacı ve davalı kimlerdir?",
  o: ["Davacı üçüncü kişi; davalı alacaklı ve itiraz eden borçlu", "Davacı alacaklı; davalı üçüncü kişi ve borçlu", "Davacı borçlu; davalı alacaklı ve üçüncü kişi", "Davacı alacaklı; davalı yalnızca borçlu", "Davacı üçüncü kişi; davalı yalnızca borçlu"],
  a: 0,
  e: "Hacizli mal BORÇLUNUN ELİNDE ise DAVACI 3. KİŞİ, DAVALI ALACAKLI ve (istihkak iddiasına itiraz etmişse) BORÇLUDUR. Mal 3. KİŞİNİN elinde ise DAVACI ALACAKLI, DAVALI 3. KİŞİDİR.",
  t: "İstihkak Davası", d: 2
},
{
  q: "Malın haczedildiğini öğrenen 3. kişi istihkak iddiasını hangi süre içinde ve nereye yapmalıdır?",
  o: ["Haczi öğrendiği tarihten itibaren 7 gün içinde icra dairesine", "7 gün içinde icra mahkemesine", "3 gün içinde icra dairesine", "7 gün içinde genel mahkemeye", "Süresiz olarak icra dairesine"],
  a: 0,
  e: "Malın haczedildiğini öğrenen 3. kişi, haczi öğrendiği tarihten itibaren 7 GÜN içinde İCRA DAİRESİNDE istihkak iddiasında bulunmalıdır. Aksi takdirde aynı takip için bu iddiayı bir daha ileri süremez.",
  t: "İstihkak Davası", d: 2
},
{
  q: "Üçüncü kişinin istihkak iddiası üzerine alacaklı ve borçluya itiraz için kaç günlük süre verilir ve itiraz etmezlerse sonuç ne olur?",
  o: ["3 gün; iddia kabul edilmiş sayılır, haciz kalkar", "7 gün; iddia kabul edilmiş sayılır, haciz kalkar", "3 gün; haciz devam eder, dava açılması gerekir", "7 gün; haciz devam eder, mal satışa çıkarılır", "Süre verilmez; haciz kendiliğinden kalkar"],
  a: 0,
  e: "İcra dairesi istihkak iddiasına karşı itirazları olup olmadığını bildirmek üzere alacaklı ve borçluya 3 GÜNLÜK süre verir. Bu süre içinde itiraz etmezlerse 3. kişinin iddiasını KABUL ETMİŞ SAYILIRLAR; mallar üzerindeki HACİZ KALKAR ve mal 3. KİŞİYE VERİLİR.",
  t: "İstihkak Davası", d: 3
},
{
  q: "Alacaklı veya borçlu istihkak iddiasına itiraz ederse icra dairesi dosyayı derhal icra mahkemesine gönderir. Mahkemenin kararından sonra üçüncü kişi istihkak davasını hangi süre içinde açmalıdır?",
  o: ["Tefhim veya tebliğden itibaren 7 gün", "Tefhim veya tebliğden itibaren 3 gün", "Tefhim veya tebliğden itibaren 1 ay", "Haciz tarihinden itibaren 7 gün", "Herhangi bir süreye bağlı değildir"],
  a: 0,
  e: "İcra dairesi takip dosyasını DERHAL İCRA MAHKEMESİNE gönderir. Mahkeme ilk olarak TAKİBİN DEVAMINA VEYA ERTELENMESİNE karar verir. 3. kişi bu kararın tefhim veya tebliğinden itibaren 7 GÜN içinde AYNI İCRA MAHKEMESİNDE istihkak davası açabilir.",
  t: "İstihkak Davası", d: 3
},
{
  q: "Borçlu ile üçüncü kişinin bir taşınır malı BİRLİKTE ellerinde bulundurmaları halinde mal kimin elinde sayılır?",
  o: ["Borçlu elinde sayılır", "3. kişi elinde sayılır", "İkisinin de elinde sayılır", "Hiçbirinin elinde sayılmaz", "İcra memuru takdir eder"],
  a: 0,
  e: "Borçlu ile üçüncü kişinin bir taşınır malı BİRLİKTE ellerinde bulundurmaları halinde dahi mal BORÇLU ELİNDE SAYILIR.",
  t: "İstihkak Davası", d: 3
},
{
  q: "Hacizli mal 3. kişi elinde ise alacaklıya istihkak davası açması için kaç günlük süre verilir ve açmazsa ne olur?",
  o: ["7 gün süre verilir; açmazsa 3. kişinin iddiası kabul edilmiş sayılır", "3 gün süre verilir; açmazsa haciz devam eder", "7 gün süre verilir; açmazsa mal satılır", "15 gün süre verilir; açmazsa iddia reddedilmiş sayılır", "Süre verilmez"],
  a: 0,
  e: "İcra müdürü, üçüncü kişi aleyhine icra mahkemesinde istihkak davası açması için ALACAKLIYA 7 GÜN süre verir. Bu süre içinde dava açılmazsa ÜÇÜNCÜ KİŞİNİN İDDİASI KABUL EDİLMİŞ SAYILIR. Süresinde açılan dava sonuçlanıncaya kadar haczedilen malın satışı yapılamaz.",
  t: "İstihkak Davası", d: 3
},
{
  q: "Mal borçlunun elinde ise açılan istihkak davasında 3. kişinin talebi kabul edilir ve karşı taraf kötüniyetli bulunursa tazminat oranı nedir?",
  o: ["Dava konusu malın değerinin %15'inden aşağı olmamak üzere", "Dava konusu malın değerinin %20'sinden aşağı olmamak üzere", "Dava konusu malın değerinin %10'undan aşağı olmamak üzere", "Sabit bir miktar", "Tazminata hükmedilmez"],
  a: 0,
  e: "3. kişinin talebi kabul edilir ve itiraz eden alacaklı (veya borçlu) KÖTÜNİYETLİ bulunursa, dava konusu MALIN DEĞERİNİN %15'İNDEN AŞAĞI OLMAMAK ÜZERE itiraz eden taraftan tazminat alınmasına hükmolunur. Dava reddedilirse (takip ertelenmişse) alınması geciken miktarın %20'sinden aşağı olmamak üzere 3. kişiden tazminat alınır.",
  t: "İstihkak Davası", d: 3
},
{
  q: "Mal ÜÇÜNCÜ KİŞİ elinde ise açılan istihkak davasında (İİK 99) tazminat durumu nedir?",
  o: ["Haksız çıkan taraf aleyhine tazminata hükmedilmez", "Haksız çıkan tarafa %15 tazminat hükmedilir", "Haksız çıkan tarafa %20 tazminat hükmedilir", "Sadece alacaklı aleyhine tazminata hükmedilir", "Sadece 3. kişi aleyhine tazminata hükmedilir"],
  a: 0,
  e: "İİK 99. maddesine göre malın ÜÇÜNCÜ KİŞİ ELİNDE olması durumunda açılan istihkak davasında HAKSIZ ÇIKAN TARAF ALEYHİNE TAZMİNATA HÜKMEDİLMEZ.",
  t: "İstihkak Davası", d: 3
},
{
  q: "Üçüncü kişinin istihkak davasına karşı alacaklı, karşı dava olarak tasarrufun iptali davası açarsa görevli mahkeme ve aciz belgesi şartı bakımından sonuç nedir?",
  o: ["İcra mahkemesi bakar; aciz belgesi ibrazı gerekmez", "İcra mahkemesi bakar; aciz belgesi ibrazı gerekir", "Genel mahkeme bakar; aciz belgesi ibrazı gerekir", "Genel mahkeme bakar; aciz belgesi ibrazı gerekmez", "Karşı dava açılamaz; ayrı dava açılması gerekir"],
  a: 0,
  e: "3. kişinin istihkak davası açması üzerine alacaklı hileli tasarruf iddiasıyla KARŞI DAVA olarak TASARRUFUN İPTALİ DAVASI açabilir. Bu takdirde HER İKİ DAVAYA DA İCRA MAHKEMESİ BAKAR ve tasarrufun iptali davasında özel dava şartı olarak aranan KESİN YA DA GEÇİCİ ACİZ BELGESİNİN İBRAZI ZORUNLULUĞU YOKTUR.",
  t: "İstihkak Davası", d: 3
},
{
  q: "İhtiyati haczin şartları arasında alacağın para alacağı olması ve kural olarak vadesinin gelmiş olması yer alır. Buna hangi şart eklenir?",
  o: ["Rehinle teminat altına alınmamış olması", "Rehinle teminat altına alınmış olması", "Bir ilama bağlanmış olması", "Borçlunun tacir sıfatını taşıması", "Alacağın senede bağlanmış olması"],
  a: 0,
  e: "İhtiyati haczin şartları: alacağın türü PARA ALACAĞI olmalı, kural olarak VADESİ GELMİŞ olmalı ve REHİNLE TEMİNAT ALTINA ALINMAMIŞ olmalıdır.",
  t: "İhtiyati Haciz", d: 2
},
{
  q: "Vadesi gelmemiş bir alacak için ihtiyati haciz istisnai olarak hangi halde talep edilebilir?",
  o: ["Borçlunun mallarını kaçırmaya hazırlanması", "Alacaklının bunu talep etmesi", "Borçlunun tacir sıfatını taşıması", "Alacağın bir ilama bağlı olması", "Alacağın rehinle güvence altına alınması"],
  a: 0,
  e: "Vadesi gelmemiş olsa bile istisnai olarak şu durumlarda ihtiyati haciz talep edilebilir: BORÇLUNUN YERLEŞİM YERİNİN BULUNMAMASI, borçlunun taahhütlerinden kurtulmak amacıyla MALLARINI GİZLEMESİ, borçlunun KAÇMAYA HAZIRLANMASI veya MALLARINI KAÇIRMAYA HAZIRLANMASI.",
  t: "İhtiyati Haciz", d: 3
},
{
  q: "İhtiyati haciz kararı, takibin başlatılacağı icra dairesinin bulunduğu yerdeki mahkemeden alınır. Bu mahkeme hangisidir?",
  o: ["Genel mahkeme", "İcra mahkemesi", "Asliye ticaret mahkemesi", "Sulh hukuk mahkemesi", "Bölge adliye mahkemesi"],
  a: 0,
  e: "Alacaklı, icra takibinden önce GENEL MAHKEMELERDE bir ihtiyati haciz kararı almak zorundadır. İİK 50'ye göre görevli ve yetkili mahkeme, TAKİBİN BAŞLATILACAĞI İCRA DAİRESİNİN BULUNDUĞU YERDEKİ GENEL MAHKEMEDİR. İhtiyati haciz bir dava ya da icra işlemi sayılmaz; GEÇİCİ HUKUKİ KORUMA TEDBİRİDİR.",
  t: "İhtiyati Haciz", d: 2
},
{
  q: "İhtiyati haciz yargılamasında ispat ölçütü ve borçlunun dinlenmesi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Yaklaşık ispat aranır; borçlu dinlenmeden karar verilebilir", "Yaklaşık ispat aranır; borçlunun dinlenmesi zorunludur", "Tam ispat aranır; borçlunun dinlenmesi zorunludur", "Tam ispat aranır; borçlu dinlenmeden karar verilebilir", "İspat aranmaz; borçlunun dinlenmesi zorunludur"],
  a: 0,
  e: "İhtiyati haciz yargılamasında BASİT YARGILAMA USULÜ uygulanır ve alacağın-sebeplerin varlığı hakkında YAKLAŞIK İSPAT ölçütü aranır. Mahkeme İKİ TARAFI DİNLEYİP DİNLEMEMEKTE SERBESTTİR; borçluyu dinlemeden de (yokluğunda) karar verebilir.",
  t: "İhtiyati Haciz", d: 3
},
{
  q: "İhtiyati haciz talebinde alacak bir ilama veya ilam niteliğinde bir belgeye dayanmıyorsa alacaklıdan alınacak teminat oranı nedir?",
  o: ["%10 ile %15 arası", "%15 ile %20 arası", "Sabit olarak %15", "Sabit olarak %20", "Mahkemenin serbest takdiri"],
  a: 0,
  e: "Alacak İLAMA BAĞLI ise ya da alacaklı ADLİ YARDIMDAN faydalanıyorsa TEMİNAT ARANMAZ. Alacak İLAM NİTELİĞİNDE bir belgeye dayanıyorsa teminat alınıp alınmayacağına MAHKEME KANAAT GETİRİR. Alacak ilam ya da ilam niteliğinde belgeye bağlı DEĞİLSE mahkeme ancak alacağın %10'U İLE %15'İ ARASINDA teminat karşılığında karar verir.",
  t: "İhtiyati Haciz", d: 3
},
{
  q: "Borçlu ihtiyati haciz kararı verilirken mahkemede DİNLENMEMİŞSE hangi sebeplere itiraz edebilir?",
  o: ["Mahkemenin yetkisine, teminatın oranına ve ihtiyati haczin dayandığı sebeplere", "Sadece mahkemenin yetkisine", "Sadece teminatın oranına", "Hiçbir sebebe itiraz edemez, doğrudan istinafa gider", "Sadece alacağın miktarına"],
  a: 0,
  e: "Borçlu dinlenmemişse doğrudan istinafa BAŞVURAMAZ; MAHKEMENİN YETKİSİNE, TEMİNATIN ORANINA ve İHTİYATİ HACZİN DAYANDIĞI SEBEPLERE (para alacağı, vadenin gelmesi, rehne bağlı olmama) itiraz edebilir. Borçlu DİNLENMİŞSE itiraz etmeden doğrudan istinaf yoluna başvurabilir.",
  t: "İhtiyati Haciz", d: 3
},
{
  q: "İhtiyati haciz kararına itiraz eden üçüncü kişiler hangi sebebe itiraz EDEMEZ?",
  o: ["Mahkemenin yetkisine", "İhtiyati haczin dayandığı sebeplere", "Teminatın oranına", "Hepsine itiraz edebilir", "Hiçbirine itiraz edemez"],
  a: 0,
  e: "İhtiyati haciz kararı ile menfaati ihlal edilen üçüncü kişiler de itiraz edebilir; ancak sadece İHTİYATİ HACZİN DAYANDIĞI SEBEPLERE ve TEMİNATIN ORANINA itiraz edebilirler. Borçludan farklı olarak MAHKEMENİN YETKİSİNE İTİRAZ EDEMEZLER (zira yetki itirazını sadece taraflar yapabilir).",
  t: "İhtiyati Haciz", d: 3
},
{
  q: "İhtiyati haciz kararının infazı, kararın verildiği tarihten itibaren hangi süre içinde ve nereden talep edilmelidir?",
  o: ["10 gün içinde icra dairesinden", "7 gün içinde icra dairesinden", "10 gün içinde icra mahkemesinden", "1 ay içinde icra dairesinden", "3 gün içinde genel mahkemeden"],
  a: 0,
  e: "İhtiyati haciz kararını alan alacaklı, kararın infazını KARARIN VERİLDİĞİ TARİHTEN İTİBAREN 10 GÜN içinde kararı vermiş olan mahkemenin yargı çevresindeki İCRA DAİRESİNDEN talep etmelidir. Aksi takdirde ihtiyati haciz kararı KENDİLİĞİNDEN KALKAR.",
  t: "İhtiyati Haciz", d: 2
},
{
  q: "İhtiyati hacizde tamamlayıcı merasim süresi nedir?",
  o: ["İhtiyati haczin uygulanmasından itibaren 7 gün", "İhtiyati haczin uygulanmasından itibaren 10 gün", "Kararın verilmesinden itibaren 7 gün", "1 ay", "3 gün"],
  a: 0,
  e: "Borçluya karşı dava açılmadan veya takip yapılmadan önce ihtiyati haciz kararı alınmışsa, alacaklının ihtiyati haczin UYGULANMASINDAN İTİBAREN 7 GÜN içinde ihtiyati haczi tamamlattırması gerekir. İHTİYATİ HACİZDE TAMAMLAYICI MERASİM SÜRESİ 7 GÜNDÜR.",
  t: "İhtiyati Haciz", d: 2
},
{
  q: "İhtiyati hacizden sonra açtığı davada ilam alan alacaklı, ihtiyati haczin kendiliğinden kalkmaması için esasa ilişkin kararla hangi süre içinde takip başlatmalıdır?",
  o: ["1 ay", "7 gün", "6 ay", "1 yıl", "Süre öngörülmemiştir"],
  a: 0,
  e: "Alacaklı davayı kazanıp lehine ilam alır ve bu kararla 1 AY İÇİNDE takip başlatır, sonrasında icra emri kesinleşirse ihtiyati haciz KESİN HACZE DÖNÜŞÜR. Aksi takdirde esas hakkındaki kararın tebliğinden itibaren 1 AY içinde (ilamlı) takip başlatılmazsa ihtiyati haciz KENDİLİĞİNDEN KALKAR.",
  t: "İhtiyati Haciz", d: 3
},
{
  q: "İhtiyati hacizden sonra başlatılan takipte borçlu ödeme emrine itiraz etmişse alacaklı, ihtiyati haczin kalkmaması için itirazın tebliğinden itibaren hangi süre içinde itirazın iptali veya kaldırılması yoluna başvurmalıdır?",
  o: ["7 gün", "1 ay", "6 ay", "1 yıl", "Başvurmasına gerek yoktur"],
  a: 0,
  e: "Borçlu ödeme emrine itiraz ederse, alacaklının İTİRAZIN TEBLİĞİNDEN İTİBAREN 7 GÜN içinde ya genel mahkemelerde İTİRAZIN İPTALİ DAVASI açması ya da icra mahkemesinden İTİRAZIN KALDIRILMASINI talep etmesi gerekir. Aksi takdirde takibe devam edilse bile İHTİYATİ HACİZ KALKAR. Bu 7 günlük süre ihtiyati haczin kalkmaması ile ilgilidir.",
  t: "İhtiyati Haciz", d: 3
},
{
  q: "Haksız ihtiyati hacizden doğan tazminat davasında alacaklının sorumluluğunun türü ve zamanaşımı süresi nedir?",
  o: ["Kusursuz sorumluluk; 2 yıl", "Kusur sorumluluğu; 2 yıl", "Kusursuz sorumluluk; 1 yıl", "Kusur sorumluluğu; 1 yıl", "Sorumluluk hiç doğmaz"],
  a: 0,
  e: "Haksız ihtiyati hacizden dolayı tazminat davasında ALACAKLININ KUSURLU OLMASI ŞARTI ARANMAZ; alacaklı KUSURSUZ SORUMLUDUR. ZAMANAŞIMI SÜRESİ 2 YILDIR ve bu süre İHTİYATİ HACZİN KALDIRILMASI KARARININ KESİNLEŞMESİNDEN itibaren başlar.",
  t: "İhtiyati Haciz", d: 3
},
{
  q: "Haksız ihtiyati haciz tazminat davasında yetkili mahkemeler alacaklının yerleşim yeri, haksız fiilin gerçekleştiği yer ve hangi mahkemedir?",
  o: ["İhtiyati haciz kararını veren mahkeme", "Borçlunun yerleşim yeri mahkemesi", "Malın bulunduğu yer mahkemesi", "Takibin yapıldığı yer icra mahkemesi", "Asliye ticaret mahkemesi"],
  a: 0,
  e: "Haksız ihtiyati hacizden dolayı açılacak tazminat davası GENEL MAHKEMELERDE normal bir alacak davası gibi görülür. Yetkili mahkeme ALACAKLININ YERLEŞİM YERİ, HAKSIZ FİİLİN GERÇEKLEŞTİĞİ YER veya İHTİYATİ HACİZ KARARINI VERMİŞ OLAN MAHKEMEDİR.",
  t: "İhtiyati Haciz", d: 3
},
{
  q: "İflas kararını hangi mahkeme verir ve iflas eden tacire ne ad verilir?",
  o: ["Asliye ticaret mahkemesi; müflis", "İcra mahkemesi; müflis", "Genel mahkeme; müflis", "Asliye ticaret mahkemesi; mültezim", "İcra dairesi; müflis"],
  a: 0,
  e: "İFLAS KARARINI ASLİYE TİCARET MAHKEMESİ verir. İflas eden tacire MÜFLİS adı verilir. İflas tasfiyesinde amaç alacaklılar arasında EŞİTLİĞİN sağlanmasıdır; her alacaklıya alacağı oranında (GARAMETEN) ödeme yapılır.",
  t: "İflas", d: 2
},
{
  q: "Aşağıdakilerden hangisi ÖZEL iflas organlarından biri DEĞİLDİR?",
  o: ["İflas dairesi", "Birinci alacaklılar toplanması", "İflas bürosu", "İflas idaresi", "İkinci alacaklılar toplanması"],
  a: 0,
  e: "RESMİ iflas organları: icra dairesi, asliye ticaret mahkemesi, İFLAS DAİRESİ, icra mahkemesi, BAM ve Yargıtay. ÖZEL iflas organları: I. alacaklılar toplanması (acele kararlar), iflas bürosu (oy/uyuşmazlık çözmek), iflas idaresi (masanın kanuni temsilcisi) ve II. alacaklılar toplanması (önemli kararlar).",
  t: "İflas", d: 2
},
{
  q: "Basit tasfiye ile adi tasfiye arasındaki fark, tasfiyeyi yürüten organ bakımından nasıldır?",
  o: ["Basit tasfiyede iflas dairesi, adi tasfiyede iflas idaresi", "Basit tasfiyede iflas idaresi, adi tasfiyede iflas dairesi", "İkisinde de tasfiyeyi iflas dairesi yapar", "İkisinde de tasfiyeyi iflas idaresi yapar", "İkisinde de tasfiyeyi alacaklılar toplanması yapar"],
  a: 0,
  e: "BASİT TASFİYE sürecinde sadece RESMİ iflas organları görev alır ve tasfiyeyi bizzat İFLAS DAİRESİ yapar. ADİ TASFİYE sürecinde hem resmi hem ÖZEL organlar birlikte görev alır; adi tasfiyeyi iflas dairesinin gözetim ve denetiminde İFLAS İDARESİ yapar.",
  t: "İflas", d: 3
},
{
  q: "Aşağıdakilerden hangisi iflasa TABİ DEĞİLDİR?",
  o: ["Tüzel kişiliği olmayan adi şirketler", "Kolektif şirketler", "Anonim şirketler", "Kooperatifler", "Amacına ulaşmak için ticari işletme işleten dernekler"],
  a: 0,
  e: "TÜZEL KİŞİLİĞİ OLMAYAN ADİ ŞİRKETLER İFLASA TABİ DEĞİLDİR (ancak adi şirket ortakları tacir sayılır ve iflas ettirilebilir). KIZILAY gibi kamuya yararlı dernekler de iflasa tabi değildir.",
  t: "İflas", d: 2
},
{
  q: "Ticareti terk eden kimse ne kadar süre iflasa tabi olmaya devam eder?",
  o: ["Ticareti terk ettiğinin ilanından itibaren 1 yıl", "Ticareti terk ettiği andan itibaren 6 ay", "İlanından itibaren 2 yıl", "İlanından itibaren 10 yıl", "Terk ile birlikte iflasa tabi olmaktan çıkar"],
  a: 0,
  e: "Ticareti terk eden kimse, TİCARETİ TERK ETTİĞİNİN İLANINDAN İTİBAREN 1 YIL boyunca iflasa tabi olmaya devam eder.",
  t: "İflas", d: 2
},
{
  q: "Ticaretten men edilmelerine rağmen (devlet memurları, avukat, hakim, noter gibi) ısrarla ticari işletme işleten kimseler için kural nedir?",
  o: ["Tacir sayılırlar ve iflas ettirilebilirler", "Tacir sayılmazlar ve iflas ettirilemezler", "Sadece disiplin cezası alırlar", "Sadece adi şirket ortağı sayılırlar", "Sadece haciz yolu ile takip edilebilirler"],
  a: 0,
  e: "Ticaretten men edilmelerine rağmen (devlet memurları, avukat, hakim ya da noter gibi) ISRARLA ticari işletme işleten kimseler TACİR SAYILIR ve BUNLAR DA İFLAS ETTİRİLİR.",
  t: "İflas", d: 3
},
{
  q: "Küçük ya da kısıtlı adına ticari işletme işletiliyorsa kim tacir sayılır ve iflasın suç teşkil etmesi halinde cezai sorumluluk kime aittir?",
  o: ["Tacir küçük/kısıtlıdır; cezai sorumluluk kanuni temsilcidedir", "Tacir kanuni temsilcidir; cezai sorumluluk da kendisindedir", "Tacir küçük/kısıtlıdır; cezai sorumluluk da kendisindedir", "Tacir kanuni temsilcidir; cezai sorumluluk küçüktedir", "Hiç kimse tacir sayılmaz; cezai sorumluluk da doğmaz"],
  a: 0,
  e: "Küçük ya da kısıtlılar adına ticari işletme işletiliyorsa KÜÇÜK YA DA KISITLININ KENDİSİ TACİR SAYILIR ve iflas ettirilebilir. Ancak iflas bir SUÇ TEŞKİL EDİYORSA cezai sorumluluk KANUNİ TEMSİLCİSİNE aittir.",
  t: "İflas", d: 3
},
{
  q: "Genel iflas sebebi nedir ve iflas talebinde alacak miktarının önemi var mıdır?",
  o: ["Muaccel para borcunun ödenmemesi; miktarın önemi yoktur", "Muaccel para borcunun ödenmemesi; miktar önem taşır", "Borca batık olma; miktarın önemi yoktur", "Borca batık olma; miktar önem taşır", "Ticareti terk etme; miktar önem taşır"],
  a: 0,
  e: "GENEL İFLAS SEBEBİ bir tacirin MUACCEL olan para borcunu ödememesidir. İflas talep edilebilmesi için PARA ALACAĞININ MİKTARININ ve borçlunun sahip olduğu MALVARLIĞININ HİÇBİR ÖNEMİ YOKTUR. Örneğin tacirin 1 milyar doları olsa bile 1 liralık borcunu ödememişse iflası talep edilebilir.",
  t: "İflas", d: 2
},
{
  q: "İflas takibinde icra dairesinin yetkisi ile iflas davasında asliye ticaret mahkemesinin yetkisi arasındaki fark nedir?",
  o: ["İcra dairesinin yetkisi kesin değil, mahkemenin yetkisi kesindir", "İcra dairesinin yetkisi kesin, mahkemenin yetkisi kesin değildir", "İkisinin de yetkisi kesin ve kamu düzenine ilişkindir", "İkisinin de yetkisi kesin ve kamu düzenine ilişkin değildir", "İcra dairesinin yetkisi kamu düzenine ilişkin, mahkemenin değil"],
  a: 0,
  e: "İFLAS TAKİBİNDE icra dairesinin yetkisi KESİN DEĞİLDİR (taraflar yetki sözleşmesi yapabilir) ve KAMU DÜZENİNE İLİŞKİN SAYILMAZ. İFLAS DAVASINDA asliye ticaret mahkemesinin yetkisi KESİNDİR (yetki sözleşmesi yapılamaz) ve KAMU DÜZENİNE İLİŞKİNDİR (re'sen inceler). Her ikisinde de borçlu tacirin MUAMELE (İŞLEM) MERKEZİ esas alınır.",
  t: "İflas", d: 3
},
{
  q: "Bir banka yöneticisi veya deneticisinin iflasına, bankanın faaliyet izninin kaldırılmasına ya da Fona devrine neden olduklarının tespiti halinde kimin talebiyle karar verilir?",
  o: ["TMSF", "BDDK", "Hazine ve Maliye Bakanlığı", "Bankanın alacaklıları", "Türkiye Bankalar Birliği"],
  a: 0,
  e: "Bir banka yöneticisi veya deneticisi, bankanın FAALİYET İZNİNİN KALDIRILMASINA veya FONA DEVREDİLMESİNE neden olduklarının tespiti halinde TMSF TALEBİ ÜZERİNE mahkemece bunların iflasına karar verilebilir.",
  t: "İflas", d: 3
},
{
  q: "İflasta itirazın kaldırılması nereden istenir?",
  o: ["İflas davası ile birlikte asliye ticaret mahkemesinden", "İcra mahkemesinden", "İcra dairesinden", "Genel mahkemeden", "Bölge adliye mahkemesinden"],
  a: 0,
  e: "İFLASTA İTİRAZIN KALDIRILMASI, İFLAS DAVASI İLE BİRLİKTE ASLİYE TİCARET MAHKEMESİNDEN istenir. Asliye ticaret mahkemesi iflas kararı vermedikçe iflasın hüküm ve sonuçları doğmaz.",
  t: "İflas", d: 3
},
{
  q: "Yetkili iflas dairesi hangi merciin yargı çevresi içinde bulunan iflas dairesidir?",
  o: ["İflasa karar veren asliye ticaret mahkemesi", "Borçlunun yerleşim yeri icra dairesi", "Alacaklının yerleşim yeri icra dairesi", "Takibin başlatıldığı yer icra dairesi", "Bölge adliye mahkemesi"],
  a: 0,
  e: "İflas kararından sonra iflas dairesi görev almaya başlar. Yetkili iflas dairesi, İFLASA KARAR VERMİŞ OLAN ASLİYE TİCARET MAHKEMESİNİN YARGI ÇEVRESİ İÇİNDEKİ iflas dairesidir.",
  t: "İflas", d: 3
},
{
  q: "Kolektif şirket ortakları ve komandit şirketlerde komandite ortak için iflas bakımından kural nedir?",
  o: ["Şirket borçlarından dolayı iflasa tabidirler", "İflasa tabi değildirler", "Sadece kendi borçlarından iflasa tabidirler", "Sadece şirket iflas ederse iflas ederler", "Sadece komanditer ortaklar iflasa tabidir"],
  a: 0,
  e: "KOLEKTİF ŞİRKET ORTAKLARI ve KOMANDİT ŞİRKETLERDE KOMANDİTE ORTAK, ŞİRKET BORÇLARINDAN DOLAYI İFLASA TABİDİRLER.",
  t: "İflas", d: 3
},
{
  q: "Bir gerçek kişi fiilen işletmeye başlamamış olsa dahi hangi halde tacir sayılıp iflas ettirilebilir?",
  o: ["İşletme açtığını ilan araçlarıyla halka duyurmuşsa", "Yalnızca vergi kaydını açtırmışsa", "Yalnızca kira sözleşmesi imzalamışsa", "Yalnızca ticaret unvanını seçmişse", "Hiçbir halde tacir sayılmaz"],
  a: 0,
  e: "Bir gerçek kişi, FİİLEN İŞLETMEYE BAŞLAMAMIŞ OLSA DAHİ ticari işletme kurup açtığını İLAN ARAÇLARI İLE HALKA DUYURMUŞ ya da TİCARET SİCİLİNE KAYDETTİRİP BUNU İLAN ETMİŞSE tacir sayılır ve iflas ettirilebilir.",
  t: "İflas", d: 3
},
]);

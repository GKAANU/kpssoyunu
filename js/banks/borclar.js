/* Borçlar Hukuku — 1. bölüm (hukuki işlemler, sözleşmenin kurulması, geçerlilik
   koşulları, irade sakatlıkları) — kaynak: "Bor.pdf" */
KPSS.registerBank('borclar', [

/* ---------- HUKUKİ İŞLEMLER ---------- */
{
  q: "Borçlar Kanunu'nun Medeni Kanun karşısındaki konumu nedir?",
  o: ["Medeni Kanunun mütemmim cüzü (bütünleyici parçası) olma özelliği taşır", "Medeni Kanundan tamamen bağımsızdır", "Medeni Kanunun yerine geçer", "Sadece ticari işlerde uygulanır", "Medeni Kanunun eki niteliğinde değildir"],
  a: 0,
  e: "Borçlar Kanunu, MEDENİ KANUNUN MÜTEMMİM CÜZÜ (bütünleyici parçası) OLMA ÖZELLİĞİ TAŞIR.",
  t: "Genel Kavramlar", d: 2
},
{
  q: "Hukuki işlem nedir?",
  o: ["Hukuki bir sonuç yaratmaya yönelmiş irade beyanıdır", "Hukuka aykırı her fiildir", "Kanunla düzenlenen her olaydır", "Sadece sözleşmelerdir", "Hukuki olayın kendisidir"],
  a: 0,
  e: "HUKUKİ İŞLEM, HUKUKİ BİR SONUÇ YARATMAYA YÖNELMİŞ İRADE BEYANIDIR. Hukuki olaydan ayrı, hukuki fiiller içinde yer alan HUKUKA UYGUN FİİLLERİN İRADE AÇIKLAMALARI türlerinden biridir.",
  t: "Hukuki İşlemler", d: 2
},
{
  q: "Hukuka uygun fiiller içinde irade açıklamaları kaç türe ayrılır?",
  o: ["Hukuki işlemler, hukuki işlem benzeri fiiller ve maddi fiiller", "Sadece hukuki işlemler ve maddi fiiller", "Bilgi ve tasavvur açıklamaları ile duygu açıklamaları", "Sadece sözleşmeler ve kararlar", "Tek taraflı ve çok taraflı işlemler"],
  a: 0,
  e: "Hukuka uygun fiiller BİLGİ VE TASAVVUR AÇIKLAMALARI, İRADE AÇIKLAMALARI ve DUYGU AÇIKLAMALARI olarak ayrılır. İRADE AÇIKLAMALARI ise HUKUKİ İŞLEMLER, HUKUKİ İŞLEM BENZERİ FİİLLER ve MADDİ FİİLLER olarak üçe ayrılır.",
  t: "Hukuki İşlemler", d: 3
},
{
  q: "Hukuki işlem benzeri fiil nedir ve örneği hangisidir?",
  o: ["Bir irade açıklamasında hukuki sonuç düşünülmemiş olsa dahi hukukun belirli sonuçlar bağladığı fiillerdir; örnek: temerrüde düşüren 'öde!' ihtarı", "Sadece sözleşmelerdir; örnek: satım sözleşmesi", "Hukuka aykırı fiillerdir; örnek: haksız fiil", "Tek taraflı işlemlerdir; örnek: vasiyetname", "Maddi fiillerdir; örnek: zilyetliğin devri"],
  a: 0,
  e: "HUKUKİ İŞLEM BENZERİ FİİL: bir irade açıklamasında HUKUKİ SONUÇ DÜŞÜNÜLMEMİŞ OLSA DAHİ bu açıklamanın hukuk tarafından belirli hukuki sonuçların ortaya çıkmasına etki ettiğinin kabul edildiği fiillerdir. ÖRNEK: TEMERRÜDE DÜŞÜREN 'ÖDE!' İHTARI.",
  t: "Hukuki İşlemler", d: 3
},
{
  q: "Tek taraflı hukuki işlemler arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Kira sözleşmesi", "Vasiyetname", "Mirası reddetmek", "Temsilciyi azil", "Sözleşmeden dönmek"],
  a: 0,
  e: "TEK TARAFLI hukuki işlemler: VASİYETNAME, MİRASI REDDETMEK, ÖNERİ, TEMSİLCİYİ AZİL, VAKIF KURMAK, SÖZLEŞMEDEN DÖNMEK. KİRA SÖZLEŞMESİ ise ÇOK TARAFLI bir işlemdir. Bazı tek taraflı işlemlerin karşı tarafa ULAŞMASI gerekirken vasiyetname gibi ulaşmasına gerek olmayanlar da vardır.",
  t: "Hukuki İşlemler", d: 2
},
{
  q: "Tek tarafa borç yükleyen sözleşmeler arasında aşağıdakilerden hangisi vardır?",
  o: ["Bağışlama vaadi ve kefalet sözleşmesi", "Satım ve trampa", "Kira ve trampa", "Kullanım ödüncü ve faizsiz tüketim ödüncü", "Ücretsiz vekalet ve satım"],
  a: 0,
  e: "TEK TARAFA BORÇ YÜKLEYEN sözleşmelerde taraflardan yalnız biri borç altına girer: BAĞIŞLAMA VAADİ ve KEFALET SÖZLEŞMESİ. TAM İKİ TARAFA borç yükleyenler: satım, trampa, kira. EKSİK İKİ TARAFA borç yükleyenler: kullanım ödüncü, faizsiz tüketim ödüncü, ücretsiz vekalet.",
  t: "Hukuki İşlemler", d: 3
},
{
  q: "Eksik iki tarafa borç yükleyen sözleşmeler arasında aşağıdakilerden hangisi vardır?",
  o: ["Kullanım ödüncü, faizsiz tüketim ödüncü ve ücretsiz vekalet", "Satım, trampa ve kira", "Bağışlama vaadi ve kefalet", "Vasiyetname ve miras sözleşmesi", "Sadece kefalet"],
  a: 0,
  e: "EKSİK İKİ TARAFA BORÇ YÜKLEYENLER: KULLANIM ÖDÜNCÜ, FAİZSİZ TÜKETİM ÖDÜNCÜ ve ÜCRETSİZ VEKALET. TAM İKİ TARAFA borç yükleyenler ise satım, trampa ve kiradır.",
  t: "Hukuki İşlemler", d: 3
},
{
  q: "Karar (çok taraflı işlem türü) nedir?",
  o: ["İradenin karşılıklı değil aynı yönde açıklanması ile kurulan işlemlerdir", "İradelerin karşılıklı açıklanmasıyla kurulan işlemlerdir", "Tek taraflı bir işlemdir", "Sadece mahkemelerin verdiği hükümlerdir", "Ölüme bağlı bir işlemdir"],
  a: 0,
  e: "KARAR, iradenin KARŞILIKLI DEĞİL AYNI YÖNDE açıklanması ile kurulan işlemlerdir. Örnek: eşya hukukunda pay ve paydaş çoğunluğu ile önemli yönetim işlerinin düzenlenmesi. SÖZLEŞMELERDE ise iradeler KARŞILIKLI açıklanır.",
  t: "Hukuki İşlemler", d: 3
},
{
  q: "Borçlandırıcı (taahhüt) işlem ile tasarruf işlemi arasındaki fark nedir?",
  o: ["Borçlandırıcı işlem kişinin malvarlığı pasifini çoğaltır; tasarruf işlemi malvarlığının aktifini azaltır", "Borçlandırıcı işlem aktifi azaltır, tasarruf işlemi pasifi çoğaltır", "İkisi de pasifi çoğaltır", "İkisi de aktifi azaltır", "Aralarında fark yoktur"],
  a: 0,
  e: "BORÇLANDIRICI / TAAHHÜT İŞLEM kişinin MALVARLIĞI PASİFİNİ ÇOĞALTIR (sözleşmelerin neredeyse tamamı böyledir; örneğin satış sözleşmesi yapılmış ama teslim gerçekleşmemiştir). TASARRUF İŞLEMİ ise kişinin MALVARLIĞININ AKTİFİNİ AZALTIR (örneğin malın alıcıya teslimi).",
  t: "Hukuki İşlemler", d: 3
},
{
  q: "Tasarruf yetkisine sahip olma zorunluluğu hangi işlemde aranır?",
  o: ["Tasarruf işleminde aranır; borçlandırıcı işlem yapanın tasarruf yetkisine sahip olması gerekmez", "Borçlandırıcı işlemde aranır", "Her ikisinde de aranır", "Hiçbirinde aranmaz", "Sadece ölüme bağlı işlemlerde aranır"],
  a: 0,
  e: "TASARRUF İŞLEMİ YAPANIN TASARRUF YETKİSİNE SAHİP OLMASI GEREKİR. BORÇLANDIRICI İŞLEMİ YAPANIN İSE TASARRUF YETKİSİNE SAHİP OLMASI GEREKMEZ. Tasarruf işleminin özelliği her daim devri gerektirmemesidir; hakkı SINIRLAYAN veya DEĞİŞTİREN işlemler de tasarruf işlemidir.",
  t: "Hukuki İşlemler", d: 3
},
{
  q: "Ölüme bağlı hukuki işlemler hangileridir?",
  o: ["Vasiyetname ve miras sözleşmesi", "Kira sözleşmesi ve satım", "Bağışlama vaadi ve kefalet", "Öneri ve kabul", "Vakıf kurmak ve azil"],
  a: 0,
  e: "ÖLÜME BAĞLI HUKUKİ İŞLEMLERDE işlemi yapanlar işlemin sonucunun ÖLÜMLERİ SONUNDA doğmasını arzu etmektedirler: VASİYETNAME ve MİRAS SÖZLEŞMESİ. SAĞLARARASI işlemlerde ise sonucun HAYATTA İKEN gerçekleşmesi arzu edilir (örn. kira sözleşmeleri).",
  t: "Hukuki İşlemler", d: 2
},
{
  q: "Konkordato dışında kalan borç neden eksik borç sayılır?",
  o: ["Alacaklı konkordato dışında kalan alacak tutarını dava edemez; ancak borçlu öderse geçerli bir ifa söz konusu olur", "Alacaklı dava edebilir ancak icra takibi yapamaz", "Borç tamamen sona ermiştir", "Borçlu ödese bile geçersizdir", "Alacaklı sadece kefile başvurabilir"],
  a: 0,
  e: "KONKORDATO, alacaklıların alacaklarının belli bir kısmından vazgeçmeleri esasına dayanan ve kanunla belli usule tabi tutulan bir sözleşmedir. ALACAKLI KONKORDATO DIŞINDA KALAN ALACAK TUTARINI DAVA EDEMEZ. ANCAK BORÇLU bu borcunu ÖDERSE GEÇERLİ BİR İFA söz konusu olur (eksik borç).",
  t: "Eksik Borçlar", d: 3
},

/* ---------- SÖZLEŞMENİN KURULMASI ---------- */
{
  q: "Borçlar Kanunu'na göre sözleşme nasıl kurulur?",
  o: ["Tarafların iradelerini birbirine uygun karşılıklı olarak açıklamalarıyla", "Sadece yazılı beyanla", "Tescil ile", "Noter onayı ile", "Tek taraflı beyanla"],
  a: 0,
  e: "Borçlar Kanunu'na göre SÖZLEŞME, TARAFLARIN İRADELERİNİ BİRBİRİNE UYGUN KARŞILIKLI OLARAK AÇIKLAMALARIYLA kurulur. Açıklama SÖZ, YAZI, İŞARETLE olabileceği gibi ZIMNİ de olabilir.",
  t: "Sözleşmenin Kurulması", d: 1
},
{
  q: "Zihni kayıt nedir ve hukuki sonucu ne olur?",
  o: ["Beyan sahibinin aslında istemediği bir beyanda bulunmasıdır; karşı taraf irade açıklamasıyla bağlı olduğundan işlem geçerli kabul edilir", "Beyan geçersizdir", "Beyan iptal edilebilir", "Beyan yok hükmündedir", "Karşı taraf zihindeki kayıtla bağlıdır"],
  a: 0,
  e: "ZİHNİ KAYIT, beyan sahibi olan kişinin ASLINDA İSTEMEDİĞİ bir beyanda bulunması halinde ortaya çıkar. Karşı taraf kural olarak kişinin ZİHNİNDEKİ KAYITLA DEĞİL, İRADE AÇIKLAMASIYLA BAĞLIDIR. Dolayısıyla oluşan işlem GEÇERLİ kabul edilir.",
  t: "Sözleşmenin Kurulması", d: 3
},
{
  q: "Latife beyanı ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Ciddiyetten yoksun olan ve karşı tarafça ciddiyetten yoksunluğu anlaşılan irade açıklamaları geçerli değildir; ancak beyan akla yatkın olursa geçerli olur", "Her halde geçerlidir", "Her halde geçersizdir", "İptal edilebilir bir işlemdir", "Sadece yazılı yapılırsa geçersizdir"],
  a: 0,
  e: "LATİFE BEYANI, beyan sahibi tarafından ciddi manada istenmeyen öylesine ortaya atılmış bir beyandır. CİDDİYETTEN YOKSUN olan ve KARŞI TARAFÇA CİDDİYETTEN YOKSUNLUĞU ANLAŞILAN irade açıklamaları GEÇERLİ DEĞİLDİR. Ancak BEYAN AKLA YATKIN OLURSA GEÇERLİ OLUR.",
  t: "Sözleşmenin Kurulması", d: 3
},
{
  q: "Bir beyanın öneri olarak kabul edilmesi için gereken unsurlar hangileridir?",
  o: ["Sözleşmenin esaslı unsurlarını içermesi, önerisi ile bağlı kalma niyeti olması ve kişiye yahut genele açıklanması", "Sadece yazılı olması", "Sadece esaslı unsurları içermesi", "Noter onayı taşıması", "Belirli bir süre içermesi"],
  a: 0,
  e: "Bir beyanın ÖNERİ olarak kabul edilmesi için: SÖZLEŞMENİN ESASLI UNSURLARINI İÇERMESİ, ÖNERİSİ İLE BAĞLI KALMA NİYETİ OLMASI ve KİŞİYE YAHUT GENELE AÇIKLANMASI gerekir. Öneri BAĞLANMA İRADESİ taşır ve TEK TARAFLI bir işlemdir.",
  t: "Öneri", d: 2
},
{
  q: "Öneriye davet nedir?",
  o: ["Öneri unsurlarından birinin yokluğu halinde o beyanın aldığı niteliktir; öneri için tahrik denilebilir", "Kabul beyanının bir türüdür", "Bağlayıcı bir öneridir", "Sözleşmenin kurulmasıdır", "Ölüme bağlı bir işlemdir"],
  a: 0,
  e: "ÖNERİYE DAVET, ÖNERİ UNSURLARINDAN BİRİNİN YOKLUĞU halinde o beyanın aldığı niteliktir; 'ÖNERİ İÇİN TAHRİK' denilebilir. Örnek: marketin posta kutusuna bıraktığı fiyat listesi bir ÖNERİ iken, 'mağaza fiyatları değiştirme hakkını saklı tutar' ifadesi varsa artık ÖNERİYE DAVETTİR.",
  t: "Öneri", d: 2
},
{
  q: "Fiyatını göstererek mal sergilenmesi veya fiyat listesi gönderilmesi ne sayılır?",
  o: ["Aksi açıkça ve kolaylıkla anlaşılmadığı sürece öneri sayılır", "Her halde öneriye davet sayılır", "Her halde kabul sayılır", "Hiçbir hukuki sonuç doğurmaz", "Sadece tacirler için öneri sayılır"],
  a: 0,
  e: "FİYATINI GÖSTEREREK MAL SERGİLENMESİ veya TARİFE, FİYAT LİSTESİ ya da benzerlerinin gönderilmesi, AKSİ AÇIKÇA VE KOLAYLIKLA ANLAŞILMADIĞI SÜRECE ÖNERİ SAYILIR.",
  t: "Öneri", d: 2
},
{
  q: "Ismarlanmamış bir şeyin gönderilmesinin hukuki niteliği nedir?",
  o: ["Öneri sayılmaz; bu şeyi alan kişi onu geri göndermek veya saklamakla yükümlü değildir", "Öneri sayılır ve alan kişi saklamakla yükümlüdür", "Kabul sayılır", "Alan kişi bedelini ödemek zorundadır", "Alan kişi geri göndermek zorundadır"],
  a: 0,
  e: "ISMARLANMAMIŞ BİR ŞEYİN GÖNDERİLMESİ ÖNERİ SAYILMAZ. Bu şeyi alan kişi, onu GERİ GÖNDERMEK VEYA SAKLAMAKLA YÜKÜMLÜ DEĞİLDİR.",
  t: "Öneri", d: 2
},
{
  q: "Süreli öneride öneriden dönme mümkün müdür ve süre geçtikten sonra gelen kabul haberinin niteliği nedir?",
  o: ["Süre sonuna kadar öneriden dönülmesi mümkün değildir; süre geçtikten sonra gelen kabul haberi artık öneridir", "Her zaman dönülebilir; geç gelen kabul geçerlidir", "Dönülemez; geç gelen kabul de geçerlidir", "Dönülebilir; geç gelen kabul yok hükmündedir", "Süre önemli değildir"],
  a: 0,
  e: "SÜRELİ ÖNERİDE SÜRE SONUNA KADAR ÖNERİDEN DÖNÜLMESİ MÜMKÜN DEĞİLDİR. SÜRE GEÇTİKTEN SONRA BİR KABUL HABERİ GELMİŞSE BUNUN NİTELİĞİ ARTIK ÖNERİDİR. Örnek: '15 gün içinde 100 liraya satıyorum' denmişse ve kabul 16. gün gelirse artık bu KARŞI TARAFIN ÖNERİSİDİR.",
  t: "Öneri", d: 3
},
{
  q: "Hazır olanlar arasında yapılan süresiz öneride ne gerekir?",
  o: ["Önerinin derhal kabulü gerekir", "Bir hafta içinde kabul gerekir", "Kabul için makul süre tanınır", "Kabul beyanı yazılı olmalıdır", "Öneri hiçbir zaman bağlayıcı değildir"],
  a: 0,
  e: "HAZIR OLANLAR ARASINDA yapılan süresiz öneride ÖNERİNİN DERHAL KABULÜ GEREKİR. TELEFON, BİLGİSAYAR gibi iletişim sağlayabilen araçlarla DOĞRUDAN İLETİŞİM sırasında yapılan öneri de HAZIR OLANLAR ARASINDA yapılmış sayılır.",
  t: "Öneri", d: 2
},
{
  q: "Hazır olmayan bir kişiye kabul için süre belirlenmeksizin yapılan öneri önereni ne zamana kadar bağlar?",
  o: ["Zamanında ve usulüne uygun olarak gönderilmiş bir yanıtın ulaşmasının beklenebileceği ana kadar", "1 hafta boyunca", "1 ay boyunca", "Süresiz olarak", "Hiç bağlamaz"],
  a: 0,
  e: "Kabul için süre belirlenmeksizin HAZIR OLMAYAN bir kişiye yapılan öneri, ZAMANINDA VE USULÜNE UYGUN OLARAK GÖNDERİLMİŞ BİR YANITIN ULAŞMASININ BEKLENEBİLECEĞİ ANA KADAR öneceni bağlar.",
  t: "Öneri", d: 3
},
{
  q: "Zamanında gönderilen kabul önerene geç ulaşır ve öneren onunla bağlı olmak istemezse ne yapmalıdır?",
  o: ["Durumu hemen kabul edene bildirmek zorundadır", "Hiçbir şey yapmasına gerek yoktur", "Mahkemeye başvurmalıdır", "Yeni bir öneri yapmalıdır", "Kabulü aynen kabul etmek zorundadır"],
  a: 0,
  e: "ZAMANINDA GÖNDERİLEN KABUL, ÖNERENE GEÇ ULAŞIR VE ÖNEREN ONUNLA BAĞLI OLMAK İSTEMEZSE, DURUMU HEMEN KABUL EDENE BİLDİRMEK ZORUNDADIR. Aksi halde öneren önerisini zamanında ulaşmış sayabilir.",
  t: "Öneri", d: 3
},
{
  q: "Önerinin geri alınması hangi durumda hükümsüzleşmeye yol açar?",
  o: ["Geri alma haberi önerinin ulaşmasından önce veya aynı anda karşı tarafa ulaşmışsa ya da geri alma gönderisi öneriden önce öğrenilirse", "Her zaman geri alınabilir", "Hiçbir şekilde geri alınamaz", "Sadece yazılı geri alma geçerlidir", "Sadece süreli önerilerde geri alınabilir"],
  a: 0,
  e: "GERİ ALMA HABERİ önerinin ulaşmasından ÖNCE veya AYNI ANDA karşı tarafa ulaşmışsa ya da önerinin geri alındığına ilişkin gönderi ÖNERİDEN ÖNCE karşı tarafça ÖĞRENİLİRSE, ÖNERİ GERİ ALINMIŞ SAYILIR VE HÜKÜMSÜZLEŞİR.",
  t: "Öneri", d: 3
},
{
  q: "Kabulün geçerli olması için gereken koşullar hangileridir?",
  o: ["Öneri ile bağlılık süresi içinde önerene ulaşmış olmalı ve öneriye uygun olup onu değiştirmemelidir", "Sadece yazılı olmalıdır", "Sadece süre içinde ulaşmalıdır", "Noter onayı taşımalıdır", "Öneriyi değiştirebilir"],
  a: 0,
  e: "KABUL, ÖNERİ İLE BAĞLILIK SÜRESİ İÇİNDE ÖNERENE ULAŞMIŞ OLMALI ve ÖNERİYE UYGUN OLMALI, ONU DEĞİŞTİRMEMELİDİR. Kabul haberinin ulaşması ile sözleşme kurulmuş olur.",
  t: "Kabul", d: 2
},
{
  q: "Öneren kanun veya işin özelliği gereği kabulü beklemek zorunda değilse ne olur?",
  o: ["Öneri uygun bir sürede reddedilmediği takdirde sözleşme kurulmuş sayılır", "Sözleşme kurulmaz", "Yazılı kabul gerekir", "Öneri kendiliğinden düşer", "Mahkeme kararı gerekir"],
  a: 0,
  e: "Öneren, KANUN VEYA İŞİN ÖZELLİĞİ YA DA DURUMUN GEREĞİ açık bir kabulü beklemek zorunda değilse, ÖNERİ UYGUN BİR SÜREDE REDDEDİLMEDİĞİ TAKDİRDE SÖZLEŞME KURULMUŞ SAYILIR.",
  t: "Kabul", d: 3
},
{
  q: "Hazırlar arası öneride sözleşme ne zaman kurulur ve sonuçlarını ne zaman doğurur?",
  o: ["Kabul haberi önerene yöneltilir yöneltilmez kurulur ve hüküm-sonuçlarını o an itibarıyla doğurur", "Kabul haberinin ulaşmasıyla kurulur, geriye etkili sonuç doğurur", "Kabulün gönderilmesiyle kurulur", "Önerinin yapılmasıyla kurulur", "Yazılı sözleşme yapılmasıyla kurulur"],
  a: 0,
  e: "HAZIRLAR ARASI öneride önerinin DERHAL KABULÜ gerekir. Dolayısıyla KABUL HABERİ ÖNERENE YÖNELTİLİR YÖNELTİLMEZ sözleşme kurulmuş olup HÜKÜM VE SONUÇLARINI DA O AN İTİBARIYLA doğurur.",
  t: "Sözleşmenin Kurulması", d: 3
},
{
  q: "Hazır olmayanlar arası öneride sözleşme ne zaman kurulur ve sonuçlarını ne zaman doğurur?",
  o: ["Kabul haberinin önerene varması ile kurulur; ancak hüküm ve sonuçlarını geriye etkili olarak kabulün gönderilme anından başlayarak doğurur", "Kabulün gönderilmesiyle kurulur ve o an sonuç doğurur", "Kabul haberinin varmasıyla kurulur ve o an sonuç doğurur", "Öneri anında kurulur", "Yazılı sözleşme ile kurulur"],
  a: 0,
  e: "HAZIR OLMAYANLAR ARASI öneride sözleşme KABUL HABERİNİN ÖNERENE VARMASI ile kurulur. Ancak hüküm ve sonuçlarını BU ANDAN GERİYE ETKİLİ OLARAK 'KABULÜN GÖNDERİLME ANINDAN' BAŞLAYARAK doğurur.",
  t: "Sözleşmenin Kurulması", d: 3
},
{
  q: "Hazır olmayanlar arası öneri açık bir kabul beyanı gerektirmiyorsa sözleşme hangi andan itibaren hükümlerini doğurur?",
  o: ["Önerinin ulaşma anından başlayarak", "Kabulün gönderilme anından", "Kabulün ulaşma anından", "Sözleşmenin yazılı hale getirilmesinden", "Tescil anından"],
  a: 0,
  e: "Hazır olmayanlar arası öneri olup AÇIK BİR KABUL BEYANI GEREKTİRMİYORSA, sözleşme ÖNERİNİN ULAŞMA ANINDAN BAŞLAYARAK hükümlerini doğurmaktadır.",
  t: "Sözleşmenin Kurulması", d: 3
},
{
  q: "İlan yoluyla ödül sözü veren kişi sonucun gerçekleşmesinden önce sözünden cayarsa ne olur?",
  o: ["Dürüstlük kurallarına uygun olarak yapılan giderleri ödemekle yükümlüdür; ancak ödenecek giderlerin toplamı ödülün değerini aşamaz", "Hiçbir yükümlülüğü yoktur", "Ödülün tamamını ödemek zorundadır", "Sadece manevi tazminat öder", "Giderler sınırsız olarak ödenir"],
  a: 0,
  e: "Ödül sözü veren, sonucun gerçekleşmesinden ÖNCE SÖZÜNDEN CAYARSA veya sonucun gerçekleşmesini ENGELLERSE, dürüstlük kurallarına uygun olarak yapılan GİDERLERİ ÖDEMEKLE yükümlüdür. Ancak ödenecek giderlerin toplamı ÖDÜLÜN DEĞERİNİ AŞAMAZ. Beklenen sonucu gerçekleştiremeyeceklerini ispat ederse bu yükümlülükten kurtulur.",
  t: "Ödül Sözü", d: 3
},

/* ---------- GEÇERLİLİK KOŞULLARI ---------- */
{
  q: "Kanunun emredici hükümlerine, ahlaka, kamu düzenine ve kişilik haklarına aykırı sözleşmelerin yaptırımı nedir?",
  o: ["Kesin hükümsüzdür", "İptal edilebilir", "Askıda hükümsüzdür", "Geçerlidir ancak tazminat gerektirir", "Tek taraflı bağlamazlık"],
  a: 0,
  e: "Kanunun EMREDİCİ HÜKÜMLERİNE, AHLAKA, KAMU DÜZENİNE, KİŞİLİK HAKLARINA AYKIRI sözleşmeler KESİN HÜKÜMSÜZDÜR.",
  t: "Geçerlilik Koşulları", d: 2
},
{
  q: "Objektif imkansızlık ile subjektif imkansızlık arasındaki fark nedir?",
  o: ["Objektif imkansızlık akdin tarafları dışında onlar yerinde kim olsa da sonucun değişmeyeceği hallerdir; subjektif imkansızlık sadece taraflar veya biri için var olan imkansızlıktır", "Objektif imkansızlık sadece bir taraf için vardır", "İkisi arasında fark yoktur", "Subjektif imkansızlık herkes için geçerlidir", "Objektif imkansızlık sözleşmeyi geçerli kılar"],
  a: 0,
  e: "OBJEKTİF İMKANSIZLIK: yalnız akdin tarafları bakımından değil, ONLAR YERİNDE KİM OLSA DA SONUCUN DEĞİŞMEYECEĞİ imkansızlık halleridir. SUBJEKTİF İMKANSIZLIK: SADECE AKDİN TARAFLARI VEYA TARAFLARDAN YALNIZ BİRİ için var olan imkansızlık halleridir.",
  t: "Geçerlilik Koşulları", d: 3
},
{
  q: "Objektif ve subjektif imkansızlığın hukuki sonuçları nasıl farklılaşır?",
  o: ["Objektif imkansızlıkta culpa in contrahendo sorumluluğuna dikkat edilmediyse borçlu menfi zararı giderir; subjektif imkansızlıkta sözleşme geçerli kabul edilir ve borçlu ifa edemediği borcundan sorumludur", "İkisinde de sözleşme geçersizdir", "İkisinde de sözleşme geçerlidir", "Objektif imkansızlıkta sözleşme geçerlidir", "Subjektif imkansızlıkta borçlu sorumlu değildir"],
  a: 0,
  e: "OBJEKTİF İMKANSIZLIKTA CULPA IN CONTRAHENDO sorumluluğuna dikkat edilmediyse BORÇLU MENFİ ZARARI GİDERİR. SUBJEKTİF İMKANSIZLIKTA SÖZLEŞME GEÇERLİ KABUL EDİLİR, bu sebeple BORÇLU İFA EDEMEDİĞİ BORCUNDAN SORUMLUDUR.",
  t: "Geçerlilik Koşulları", d: 3
},
{
  q: "Muvazaa (danışıklılık) nedir?",
  o: ["Üçüncü kişileri aldatmak maksadıyla tarafların gerçek iradelerine uymayan ve aralarında hüküm-sonuç doğurmayan bir görünüş yaratma hususunda anlaşmalarıdır", "Bir tarafın diğerini aldatmasıdır", "İrade ile beyan arasındaki uyumsuzluktur", "Korkutma yoluyla sözleşme yapılmasıdır", "Sözleşmenin şekle aykırı yapılmasıdır"],
  a: 0,
  e: "MUVAZAA (DANIŞIKLILIK), ÜÇÜNCÜ KİŞİLERİ ALDATMAK MAKSADI İLE tarafların GERÇEK İRADELERİNE UYMAYAN ve aralarında HÜKÜM VE SONUÇ DOĞURMAYAN bir GÖRÜNÜŞ YARATMA hususunda ANLAŞMALARIDIR.",
  t: "Muvazaa", d: 2
},
{
  q: "Mutlak muvazaa ile nisbi muvazaa arasındaki fark nedir?",
  o: ["Mutlak muvazaada tek işlem görünürdeki işlemdir ve gizli sözleşme yoktur; nisbi muvazaada bir açığa vurulan bir de gizlenen işlem vardır", "Mutlak muvazaada gizli işlem vardır", "İkisi arasında fark yoktur", "Nisbi muvazaada tek işlem vardır", "Mutlak muvazaa nitelikli, nisbi muvazaa basittir"],
  a: 0,
  e: "MUTLAK MUVAZAADA TEK İŞLEM GÖRÜNÜRDEKİ İŞLEMDİR; bu işlemin hüküm ifade etmeyeceği konusunda anlaşırlar ve ARALARINDA BAŞKA GİZLİ BİR SÖZLEŞME YOKTUR. NİSBİ MUVAZAADA ise BİR AÇIĞA VURULAN BİR DE GİZLENEN İŞLEM VARDIR; görünürdeki işlem gizli olanı saklamak için yapılmıştır. Mutlak muvazaa BASİT, nisbi muvazaa NİTELİKLİDİR.",
  t: "Muvazaa", d: 3
},
{
  q: "Kızına malını satış olarak gösteren babanın aslında bağış yapmış olması hangi muvazaa türüdür?",
  o: ["Nisbi muvazaa", "Mutlak muvazaa", "Basit muvazaa", "Muvazaa değildir", "Latife beyanıdır"],
  a: 0,
  e: "Bu bir NİSBİ MUVAZAA örneğidir: GÖRÜNÜRDEKİ İŞLEM (satış) GİZLİ OLANI (bağış) SAKLAMAK İÇİN yapılmıştır. Gizli olan işlem GEREKLİ ŞEKİL ŞARTINA SAHİPSE geçerli olabilir.",
  t: "Muvazaa", d: 3
},
{
  q: "Muvazaanın ispatı bakımından üçüncü kişiler ile taraflar arasındaki fark nedir?",
  o: ["Üçüncü kişiler her türlü delille ileri sürebilir; tarafların senede bağlı bir sözleşmeye karşı muvazaa iddiası ancak yazılı belge ile ispat edilebilir", "İkisi de her türlü delille ispat edebilir", "İkisi de sadece yazılı belge ile ispat edebilir", "Üçüncü kişiler sadece yazılı belge ile ispat edebilir", "Muvazaa ispat edilemez"],
  a: 0,
  e: "ÜÇÜNCÜ KİŞİLER HER TÜRLÜ DELİLE dayalı ispat yolu ile muvazaa iddiasını ileri sürebilirler. TARAFLARIN SENEDE BAĞLI bir sözleşmeye karşı muvazaa iddiası ise ANCAK (YAZILI) BELGE İLE ispat edilebilir. GÖRÜNÜRDEKİ İŞLEM HER HALÜKARDA GEÇERSİZDİR.",
  t: "Muvazaa", d: 3
},

/* ---------- İRADE SAKATLIKLARI ---------- */
{
  q: "Borçlar Kanunu'nda düzenlenen irade sakatlığı halleri hangileridir?",
  o: ["Yanılma, aldatma ve korkutma", "Yanılma, muvazaa ve korkutma", "Aldatma, muvazaa ve gabin", "Yanılma, aldatma ve imkansızlık", "Sadece yanılma ve aldatma"],
  a: 0,
  e: "Borçlar yasamızda toplamda ÜÇ adet irade sakatlığı hali düzenlenmiştir: YANILMA, ALDATMA ve KORKUTMA. İrade sakatlığı halleri tüm sözleşmeler adına bir GEÇERSİZLİK NEDENİDİR.",
  t: "İrade Sakatlıkları", d: 1
},
{
  q: "Yanılma (hata) ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Karşılıklı beyanlarda aykırılık yoktur ancak irade ile beyan arasında arzu edilmeyen bir uyumsuzluk oluşmuştur; sadece 'esaslı' yanılma iptal nedenidir", "Her türlü yanılma iptal nedenidir", "Karşılıklı beyanlarda aykırılık vardır", "Yanılma sözleşmeyi kesin hükümsüz kılar", "Yanılma hiçbir sonuç doğurmaz"],
  a: 0,
  e: "YANILMADA karşılıklı beyanlarda BİRBİRİNE AYKIRILIK YOKTUR; ancak İRADE İLE BEYAN ARASINDA arzu edilmeyecek bir UYUMSUZLUK oluşmuştur. SADECE 'ESASLI' YANILMA İPTAL NEDENİ olarak kabul edilmiştir.",
  t: "Yanılma", d: 2
},
{
  q: "B'ye satmak istediği bilgisayarı yanlışlıkla bağışladığını beyan eden kişinin durumu hangi yanılma türüdür?",
  o: ["Sözleşmenin niteliğinde yanılma", "Sözleşmenin konusunda yanılma", "Şahısta yanılma", "Miktarda yanılma", "Saikte yanılma"],
  a: 0,
  e: "SÖZLEŞMENİN NİTELİĞİNDE YANILMA: BAŞKA BİR SÖZLEŞME BEYAN EDİLMİŞTİR (satmak isterken bağışlama beyanında bulunmak).",
  t: "Yanılma", d: 3
},
{
  q: "Tapuda 2 numaralı daireyi satacakken 3 numaralı daireyi satıp tescillettirme hangi yanılma türüdür?",
  o: ["Sözleşmenin konusunda yanılma", "Sözleşmenin niteliğinde yanılma", "Şahısta yanılma", "İletmede yanılma", "Saikte yanılma"],
  a: 0,
  e: "SÖZLEŞMENİN KONUSUNDA YANILMA: 2 nolu daire satılacakken 3 numaralı dairenin satılıp tescillenmesi ya da menüden 154 nolu sipariş verilecekken 145 numaralı siparişin verilmesi bu türe örnektir.",
  t: "Yanılma", d: 3
},
{
  q: "A'nın B'ye yöneltmek istediği icabı hatayla C'ye yöneltmesi ve C'nin kabulü ile sözleşmenin kurulması hangi yanılma türüdür?",
  o: ["Şahısta (tarafta) yanılma", "Kişinin niteliğinde yanılma", "Sözleşmenin konusunda yanılma", "İletmede yanılma", "Miktarda yanılma"],
  a: 0,
  e: "ŞAHISTA (TARAFTA) YANILMA: A'nın B'ye yöneltmek istediği icabı hatayla C'ye yöneltmesi ve C'nin kabulü ile sözleşmenin kurulmasıdır. Bunun için KİŞİNİN KİMLİĞİ DİKKATE ALINMAK suretiyle sözleşme yapılmış olmalıdır.",
  t: "Yanılma", d: 3
},
{
  q: "Metin yazarı S ile sözleşme yapılmak istenirken aynı ada sahip başka biriyle sözleşme yapılması hangi yanılma türüdür?",
  o: ["Kişinin niteliğinde (taraf şahsında) yanılma", "Şahısta yanılma", "Sözleşmenin niteliğinde yanılma", "İletmede yanılma", "Saikte yanılma"],
  a: 0,
  e: "KİŞİNİN NİTELİĞİNDE (TARAF ŞAHSINDA) YANILMA: yanılan, sözleşmeyi yaparken BELİRLİ NİTELİKLERİ OLAN bir kişiyi dikkate almasına karşın BAŞKA BİR KİŞİ için iradesini açıklamışsa bu tür yanılma söz konusudur.",
  t: "Yanılma", d: 3
},
{
  q: "Miktarda yanılmanın esaslı sayılabilmesi için hangi koşullar gerekir?",
  o: ["Miktar farkının esaslı olması ve anlaşılabilir bir beyan hatasına mahal verebilir olması", "Sadece miktar farkının büyük olması", "Karşı tarafın kötü niyetli olması", "Yazılı sözleşme yapılmış olması", "Hiçbir koşul gerekmez"],
  a: 0,
  e: "MİKTARDA YANILMADA MİKTAR FARKININ ESASLI OLMASI ve ANLAŞILABİLİR BİR BEYAN HATASINA MAHAL VEREBİLİR OLMASI gerekmektedir. Örnek: 12.220 lira olan şala vitrinde 1.220 lira yazılması.",
  t: "Yanılma", d: 3
},
{
  q: "İletmede yanılma nedir?",
  o: ["Sözleşmenin kurulmasına yönelik iradenin haberci veya çevirmen gibi aracı ya da araç tarafından yanlış iletilmesidir", "Beyanın hiç iletilmemesidir", "Kişinin niteliğinde yanılmadır", "Saikte yanılmadır", "Miktarda yanılmadır"],
  a: 0,
  e: "İLETMEDE YANILMA, sözleşmenin kurulmasına yönelik iradenin HABERCİ VEYA ÇEVİRMEN gibi ARACI VEYA ARAÇ tarafından YANLIŞ İLETİLMESİDİR. Buradaki yanılma 'VASITA' MARİFETİYLE oluşur.",
  t: "Yanılma", d: 3
},
{
  q: "Saikte yanılma ile diğer yanılma türleri arasındaki temel fark nedir?",
  o: ["Saikte yanılmada irade ile beyan arasında uyumsuzluk YOKTUR; beklentiler hatalıdır ve kişiyi o isteğe sevk eden sebepler hukuken mümkünatı olmayan sebeplerdir", "Saikte yanılmada irade ile beyan arasında uyumsuzluk vardır", "Saikte yanılma hiçbir zaman esaslı olamaz", "Saikte yanılma kesin hükümsüzlük doğurur", "Saikte yanılma sadece ticari işlerde olur"],
  a: 0,
  e: "SAİKTE YANILMADA İRADE İLE BEYAN ARASINDA UYUMSUZLUK YOKTUR. BEKLENTİLER HATALIDIR; kişiyi o isteğe sevk eden sebepler HUKUKEN MÜMKÜNATI OLMAYAN sebeplerdir. Örnek: belirli bir ile atandığı düşüncesiyle orada ev kiralamak ancak atamanın başka yere olduğunun anlaşılması; orijinal zannedilen halının fabrikasyon olduğunun anlaşılması.",
  t: "Yanılma", d: 3
},
{
  q: "Saikte yanılmanın esaslı sayılabilmesi için hangi ölçütler aranır?",
  o: ["Boşa oluşan bir arzu olması, bilinseydi hiç yapılmayacak olması ve gerekli dikkat gösterilse anlaşılabilir olması", "Sadece zararın büyük olması", "Karşı tarafın kusurlu olması", "Yazılı sözleşme bulunması", "Hiçbir ölçüt aranmaz"],
  a: 0,
  e: "Saikte hatanın esaslı yanılma olabilmesi için: BOŞA OLUŞAN BİR ARZU OLMASI, BİLSEYDİM HİÇ YAPMAYACAKTIM denilebilmesi ve GEREKLİ DİKKAT GÖSTERİLSE İDİ GAYET DE ANLAŞILABİLİR OLMASI ölçütleri aranır.",
  t: "Yanılma", d: 3
},
{
  q: "BK md. 30'a göre sözleşme kurulurken esaslı yanılmaya düşen tarafın durumu nedir?",
  o: ["Sözleşme ile bağlı olmaz", "Sözleşme kesin hükümsüzdür", "Sözleşme aynen geçerlidir", "Sadece tazminat isteyebilir", "Sözleşme askıda hükümsüzdür"],
  a: 0,
  e: "Borçlar Kanunu md. 30'a göre SÖZLEŞME KURULURKEN ESASLI YANILMAYA DÜŞEN TARAF, SÖZLEŞME İLE BAĞLI OLMAZ. İradesi sakatlanan kişi sözleşme ile bağlı olmadığını beyan edebilir; iptal halinde SEBEPSİZ ZENGİNLEŞME hükümlerine göre KARŞILIKLI İADE sorumluluğu vardır.",
  t: "Yanılma", d: 2
},
{
  q: "Yanılanın karşı tarafın iyiniyetli olması iptal hakkını etkiler mi?",
  o: ["Etkilemez; yanılgıya düşenin iptal hakkı ortadan kalkmaz, ancak tazminat sorumluluğu doğabilir", "İptal hakkı ortadan kalkar", "Sözleşme kesin geçerli olur", "Sadece tazminat istenebilir", "Karşı taraf da iptal edebilir"],
  a: 0,
  e: "Bir kişinin yanılgıya düşmesi ve KARŞI TARAFIN DA İYİNİYETLİ OLMASI, yanılgıya düşenin o sözleşmeyi YANILMA NEDENİYLE İPTAL HAKKINI ORTADAN KALDIRMAZ. Ancak TAZMİNAT SORUMLULUĞU olduğu unutulmamalıdır.",
  t: "Yanılma", d: 3
},
{
  q: "Yanılan, yanıldığını hangi durumda ileri süremez?",
  o: ["Dürüstlük kurallarına aykırı olarak ileri süremez", "Hiçbir durumda ileri süremez", "Karşı taraf kusurluysa ileri süremez", "Sözleşme yazılıysa ileri süremez", "Her durumda ileri sürebilir"],
  a: 0,
  e: "YANILAN, YANILDIĞINI DÜRÜSTLÜK KURALLARINA AYKIRI OLARAK İLERİ SÜREMEZ. Örnek: deri sanılan koltuğun deri olmadığını fark edip satıcıya söylediğinde satıcı 'ver, değiştirelim' dediyse, bundan sonra 'ben bu sözleşme ile bağlı değilim' denilemez.",
  t: "Yanılma", d: 3
},
{
  q: "Yanılmada hak düşürücü süre nedir?",
  o: ["Yanılmayı öğrenmeden başlayarak 1 yıl", "2 yıl", "6 ay", "10 yıl", "Süre yoktur"],
  a: 0,
  e: "Yanılmada HAK DÜŞÜRÜCÜ SÜRE, YANILMAYI ÖĞRENMEDEN BAŞLAYARAK 1 YILDIR.",
  t: "Yanılma", d: 2
},
{
  q: "Yanılan, yanılmasında kusurlu ise sorumluluğu nedir?",
  o: ["Sözleşmenin hükümsüzlüğünden doğan zararı gidermekle yükümlüdür; ancak diğer taraf yanılmayı biliyor veya bilmesi gerekiyorsa tazminat istenemez", "Hiçbir sorumluluğu yoktur", "Her halde tazminat öder", "Sadece manevi tazminat öder", "Sözleşmeye devam etmek zorundadır"],
  a: 0,
  e: "Yanılan, yanılmasında KUSURLU ise sözleşmenin hükümsüzlüğünden doğan ZARARI GİDERMEK ile yükümlüdür. Eğer DİĞER TARAF YANILMAYI BİLİYOR VEYA BİLMESİ GEREKİYOR ise TAZMİNAT İSTENEMEZ. Hakim hakkaniyet gerektiren hallerde, İFADAN BEKLENEN YARARI AŞMAMAK kaydıyla daha fazla tazminata hükmedebilir.",
  t: "Yanılma", d: 3
},
{
  q: "Menfi zarar ile müspet zarar arasındaki fark nedir?",
  o: ["Menfi zarar sözleşmenin hüküm ifade etmemesi nedeniyle güvenin boşa çıkmasından doğan zarardır; müspet zarar sözleşmenin hiç veya gereği gibi yerine getirilmemesinden doğan zarardır", "Menfi zarar ifa etmemekten, müspet zarar güvenin boşa çıkmasından doğar", "İkisi arasında fark yoktur", "Menfi zarar sadece manevi zararı kapsar", "Müspet zarar sadece maddi zararı kapsar"],
  a: 0,
  e: "MENFİ ZARAR: yerine getirileceğine inanılan bir sözleşmenin HÜKÜM İFADE ETMEMESİ veya yerine getirilmemesi yüzünden GÜVENİN BOŞA ÇIKMASI nedeniyle uğranılan zarardır (örn. sözleşmeye güvenerek depo kiralamak). MÜSPET ZARAR: sözleşmenin HİÇ VEYA GEREĞİ GİBİ YERİNE GETİRİLMEMESİNDEN doğan zarardır.",
  t: "Zarar Türleri", d: 3
},

/* ---------- ALDATMA ---------- */
{
  q: "Aldatma (hile) nedir?",
  o: ["Bir kişinin sözü veya davranışı ile sözleşmeci tarafta yanlış bir fikir uyandırması ve bunun devamını kasıtlı olarak sağlamasıdır", "İrade ile beyan arasındaki uyumsuzluktur", "Üçüncü kişileri aldatmak için görünüş yaratmadır", "Korkutma yoluyla iradeyi sakatlamaktır", "Sözleşmenin şekle aykırı yapılmasıdır"],
  a: 0,
  e: "ALDATMA, bir kişinin SÖZÜ VEYA DAVRANIŞI ile sözleşmeci tarafta YANLIŞ BİR FİKİR UYANDIRMASI ve bunun devamını KASITLI OLARAK SAĞLAMASIDIR.",
  t: "Aldatma", d: 2
},
{
  q: "Aldatmada yanılgının esaslı olması gerekir mi?",
  o: ["Gerekmez; yanılgı esaslı olmasa bile aldanan taraf sözleşme ile bağlı değildir", "Gerekir; esaslı olmayan yanılgı sonuç doğurmaz", "Sadece ticari işlerde gerekmez", "Sadece yazılı sözleşmelerde gerekmez", "Her halde gerekir"],
  a: 0,
  e: "ALDATMADA YANILGININ ESASLI OLMASI GEREKMEZ; buradaki yanılgı ESASLI OLMASA BİLE ALDANAN TARAF SÖZLEŞME İLE BAĞLI DEĞİLDİR. (Yanılmada ise sadece ESASLI yanılma iptal nedenidir.)",
  t: "Aldatma", d: 2
},
{
  q: "Aldatmanın şartları arasında aşağıdakilerden hangisi vardır?",
  o: ["Sözleşmeci taraflardan birinin karşı tarafın hileli davranışı ile yanılgıya düşmesi, buna kasıtlı yol açılması ve nihai olarak sözleşmenin yapılması", "Sadece yanılgıya düşülmesi yeterlidir", "Sadece kasıt yeterlidir", "Zararın doğması şarttır", "Yazılı sözleşme şarttır"],
  a: 0,
  e: "ALDATMANIN ŞARTLARI: (1) sözleşmeci taraflardan biri karşı tarafın HİLELİ DAVRANIŞI İLE YANILGIYA DÜŞMÜŞ olacak, (2) aldananın sözleşmeyi bu koşullar altında yapmasına KASITLI YOL AÇILMIŞ olacak, (3) aldatma kastı sonucu NİHAİ OLARAK SÖZLEŞME YAPILMIŞ olacak.",
  t: "Aldatma", d: 3
},
{
  q: "Yanılanın kendi kanaati ile hataya düşmesi, bunun diğer tarafça anlaşılması ve buna rağmen sözleşmeye devam edilmesi halinde ne olur?",
  o: ["Kast oluşmuştur (aldatma söz konusudur)", "Sadece yanılma söz konusudur", "Hiçbir sakatlık yoktur", "Muvazaa söz konusudur", "Sözleşme kesin hükümsüzdür"],
  a: 0,
  e: "YANILANIN KENDİ KANAATİ İLE HATAYA DÜŞMESİ, bunun DİĞER TARAFÇA ANLAŞILMASI ve BUNA RAĞMEN SÖZLEŞMENİN YAPILMASINA DEVAM EDİLMESİ halinde de KAST OLUŞMUŞTUR.",
  t: "Aldatma", d: 3
},
{
  q: "Üçüncü kişinin aldatması halinde aldatmanın unsurlarının varlığı için ne gerekir?",
  o: ["Aldatılanın karşısında yer alan sözleşmecinin aldatmayı biliyor olması ya da bilmesi gerekiyor olması", "Üçüncü kişinin kusurlu olması yeterlidir", "Hiçbir şart gerekmez", "Sözleşmecinin de kasıtlı olması gerekir", "Üçüncü kişinin sözleşmede taraf olması gerekir"],
  a: 0,
  e: "ÜÇÜNCÜ KİŞİNİN ALDATMASI halinde ALDATILAN TARAFIN KARŞISINDA YER ALAN SÖZLEŞMECİNİN ALDATMAYI BİLİYOR OLMASI YA DA BİLMESİ GEREKİYOR OLMASI, tüm aldatma unsurlarının varlığı adına GEREKLİ VE YETERLİDİR.",
  t: "Aldatma", d: 3
},
{
  q: "Aldatılan kişinin iptal hakkı ve tazminat hakkı bakımından durumu nedir?",
  o: ["Öğrendiği andan başlayarak 1 yıl içinde iptal beyanında bulunabilir, menfi zararını talep edebilir; sözleşmeye bağlı kalsa dahi tazminat isteme hakkı ortadan kalkmaz", "İptal hakkı yoktur, sadece tazminat isteyebilir", "Sözleşmeye bağlı kalırsa tazminat hakkı düşer", "İptal süresi 2 yıldır", "Üçüncü kişiden talep edemez"],
  a: 0,
  e: "Aldatılan kişi SÖZLEŞMEYLE BAĞLI DEĞİLDİR; iptal hakkını ÖĞRENDİĞİ ANDAN BAŞLAYARAK 1 YIL içinde kullanmalıdır. MENFİ ZARARINI da talep edebilir. ALDATILANIN BU SÖZLEŞMEYE BAĞLI KALMASI HALİNDE DAHİ TAZMİNAT İSTEME HAKKI ORTADAN KALKMAZ; ÜÇÜNCÜ KİŞİDEN de talep etmesi mümkündür.",
  t: "Aldatma", d: 3
}

]);

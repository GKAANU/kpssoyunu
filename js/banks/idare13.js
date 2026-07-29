/* İdare Hukuku — 13. bölüm (dava açma süresinin başlaması ve durması, iptal
   davasında taraflar ve sonuçlar, tam yargı davası, dilekçe koşulları,
   yürütmenin durdurulması) */
KPSS.registerBank('idare', [

/* ---------- SÜRENİN BAŞLAMASI ---------- */
{
  q: "İdari makamların sükutu (zımni ret) halinde dava açma süresi nasıl işler?",
  o: ["Başvurudan itibaren otuz gün içinde cevap verilmezse istek reddedilmiş sayılır ve ilgililer otuz günün bittiği tarihten itibaren dava açma süresi içinde dava açabilirler", "Süre başvuru tarihinden itibaren işler", "Süre hiç işlemez", "Altmış gün beklenir", "Dava açılamaz"],
  a: 0,
  e: "İDARİ MAKAMLARIN SÜKUTU: İlgililer, haklarında idari davaya konu olabilecek bir işlem veya eylemin yapılması için idari makamlara başvurabilirler. OTUZ GÜN İÇİNDE BİR CEVAP VERİLMEZSE İSTEK REDDEDİLMİŞ SAYILIR. İlgililer OTUZ GÜNÜN BİTTİĞİ TARİHTEN İTİBAREN DAVA AÇMA SÜRESİ İÇİNDE, konusuna göre Danıştay'a, idare ve vergi mahkemelerine dava açabilirler.",
  t: "Dava Süresinin Başlaması", d: 2
},
{
  q: "İdare başvuruya kesin olmayan bir cevap verirse ilgili ne yapabilir ve bekleme süresi ne kadardır?",
  o: ["Bu cevabı isteminin reddi sayarak dava açabileceği gibi kesin cevabı da bekleyebilir; bu takdirde dava açma süresi işlemez ancak bekleme süresi başvuru tarihinden itibaren dört ayı geçemez", "Sadece dava açabilir", "Sadece beklemek zorundadır", "Bekleme süresi altı ayı geçemez", "Bekleme süresi sınırsızdır"],
  a: 0,
  e: "İDARİ MAKAMIN KESİN OLMAYAN BİR CEVAP VERMESİ: ilgili bu cevabı, İSTEMİNİN REDDİ SAYARAK DAVA AÇABİLECEĞİ GİBİ, KESİN CEVABI DA BEKLEYEBİLİR. Bu takdirde DAVA AÇMA SÜRESİ İŞLEMEZ. ANCAK BEKLEME SÜRESİ BAŞVURU TARİHİNDEN İTİBAREN DÖRT AYI GEÇEMEZ. Başvurucu 4 ayın sonunda süresi içinde dava açmalıdır.",
  t: "Dava Süresinin Başlaması", d: 3
},
{
  q: "Zımni ret üzerine süresinde dava açılmamış ve sonradan idare açık ret cevabı vermişse ne olur?",
  o: ["İlgililer bu cevabın tebliğinden itibaren 60 gün içinde dava açabilir", "Dava açma hakkı düşmüştür", "30 gün içinde dava açabilir", "Sadece Kamu Denetçiliğine başvurabilir", "15 gün içinde dava açabilir"],
  a: 0,
  e: "Başvurunun ZIMNEN REDDEDİLMESİ durumunda bu işleme karşı DAVA AÇILMAMASI veya SÜRESİNDE DAVA AÇILMADIĞI gerekçesiyle davanın SÜREDEN REDDEDİLMESİ durumunda, idare tarafından OTUZ GÜNLÜK SÜRENİN BİTMESİNİN ARDINDAN AÇIK BİR RET CEVABI VERİLİRSE, İLGİLİLER BU CEVABIN TEBLİĞİNDEN İTİBAREN 60 GÜN İÇİNDE DAVA AÇABİLİR.",
  t: "Dava Süresinin Başlaması", d: 3
},

/* ---------- SÜRENİN DURMASI ---------- */
{
  q: "İYUK m. 11'e göre dava açma süresini durduran başvuru hangi istemlerle ve kime yapılır?",
  o: ["İdari işlemin kaldırılması, geri alınması, değiştirilmesi veya yeni bir işlem yapılması istemiyle üst makamdan, üst makam yoksa işlemi yapmış olan makamdan idari dava açma süresi içinde istenir", "Her türlü istemle Danıştay'a başvurulur", "Sadece işlemin iptali istemiyle mahkemeye başvurulur", "Sadece işlemi yapan makama başvurulur", "Süre durdurma mümkün değildir"],
  a: 0,
  e: "İYUK m. 11: İlgililer tarafından idari dava açılmadan önce, İDARİ İŞLEMİN KALDIRILMASI, GERİ ALINMASI, DEĞİŞTİRİLMESİ VEYA YENİ BİR İŞLEM YAPILMASI ÜST MAKAMDAN, ÜST MAKAM YOKSA İŞLEMİ YAPMIŞ OLAN MAKAMDAN, İDARİ DAVA AÇMA SÜRESİ İÇİNDE istenebilir. BU BAŞVURMA, İŞLEMEYE BAŞLAMIŞ OLAN İDARİ DAVA AÇMA SÜRESİNİ DURDURUR.",
  t: "Dava Süresinin Durması", d: 3
},
{
  q: "Süreyi durduran başvuru reddedilirse dava açma süresi nasıl işler?",
  o: ["İsteğin reddedilmesi veya reddedilmiş sayılması halinde dava açma süresi yeniden işlemeye başlar ve başvurma tarihine kadar geçmiş süre de hesaba katılır", "Süre baştan başlar", "Başvurma tarihine kadar geçen süre hesaba katılmaz", "Süre hiç işlemez", "Yeni bir 60 günlük süre başlar"],
  a: 0,
  e: "Süreyi durduran başvuruda OTUZ GÜN İÇİNDE BİR CEVAP VERİLMEZSE İSTEK REDDEDİLMİŞ SAYILIR. İSTEĞİN REDDEDİLMESİ VEYA REDDEDİLMİŞ SAYILMASI HALİNDE DAVA AÇMA SÜRESİ YENİDEN İŞLEMEYE BAŞLAR VE BAŞVURMA TARİHİNE KADAR GEÇMİŞ SÜRE DE HESABA KATILIR.",
  t: "Dava Süresinin Durması", d: 3
},
{
  q: "Dava açma süresinin durması hangi yargılama usullerinde uygulanmaz?",
  o: ["İvedi yargılama usulü ile merkezi ve ortak sınavlara ilişkin yargılama usulüne tabi işlerde", "Vergi davalarında", "Tam yargı davalarında", "Tüm davalarda uygulanır", "Danıştay'da açılan davalarda"],
  a: 0,
  e: "DAVA AÇMA SÜRESİNİN DURMASI, İVEDİ YARGILAMA USULÜ İLE MERKEZİ VE ORTAK SINAVLARA İLİŞKİN YARGILAMA USULÜNE TABİ İŞLERDE UYGULANMAZ.",
  t: "Dava Süresinin Durması", d: 3
},
{
  q: "Hangi kurumlara yapılan başvurular da dava açma süresini durdurur?",
  o: ["Kamu Denetçiliği Kurumu, Bilgi Edinme Değerlendirme Kurulu ve Türkiye İnsan Hakları ve Eşitlik Kurumu'na yapılan başvurular", "Sadece Kamu Denetçiliği Kurumu'na", "Sayıştay'a yapılan başvurular", "Danıştay'a yapılan başvurular", "Hiçbir kuruma yapılan başvuru süreyi durdurmaz"],
  a: 0,
  e: "KAMU DENETÇİLİĞİ KURUMU'NA, BİLGİ EDİNME DEĞERLENDİRME KURULU'NA, TÜRKİYE İNSAN HAKLARI VE EŞİTLİK KURUMU'NA YAPILAN BAŞVURULAR DA DAVA AÇMA SÜRESİNİ DURDURACAKTIR. UYARI: Dava açma süresinin durabilmesi için BAŞVURUNUN DAVA AÇMA SÜRESİ İÇİNDE YAPILMASI gerekir ve İDARİ BAŞVURU YOLUNUN KAPALI OLMAMASI gerekir.",
  t: "Dava Süresinin Durması", d: 3
},

/* ---------- İPTAL DAVASINDA TARAFLAR ---------- */
{
  q: "İptal davasında davacıya ilişkin şartlar nelerdir?",
  o: ["Objektif dava açma yeteneği (genel ehliyet: taraf ve dava ehliyeti) ve sübjektif dava açma yeteneği (özel ehliyet: menfaat ihlali)", "Sadece menfaat ihlali", "Sadece hak ihlali", "Sadece taraf ehliyeti", "Vekil ile temsil edilme zorunluluğu"],
  a: 0,
  e: "İPTAL DAVASINDA DAVACIYA İLİŞKİN ŞARTLAR: ▪ OBJEKTİF DAVA AÇMA YETENEĞİ (GENEL EHLİYET): TARAF EHLİYETİ (medeni hukuktaki HAK EHLİYETİNİN karşılığı) ve DAVA EHLİYETİ (medeni hukuktaki FİİL EHLİYETİNİN karşılığı); fiil ehliyetine sahip olmayanlar KANUNİ TEMSİLCİLERİ aracılığıyla dava açabilir. ▪ SÜBJEKTİF DAVA AÇMA YETENEĞİ (ÖZEL EHLİYET): MENFAATLERİ İHLÂL EDİLENLER iptal davası açabilir.",
  t: "İptal Davasında Taraflar", d: 3
},
{
  q: "İptal davasında davalı olarak kim gösterilir ve yanlış gösterilirse ne olur?",
  o: ["Daima idare gösterilir; hasım göstermede yapılacak yanlışlığı idari yargı yeri kendiliğinden düzeltir ve davalının yanlış gösterilmesi davanın reddi sonucunu doğurmaz", "İşlemi yapan kamu görevlisi gösterilir", "Yanlış gösterme davanın reddine yol açar", "Mahkeme hatayı düzeltmez", "Davacı hatayı düzeltmek zorundadır"],
  a: 0,
  e: "İptal davasında DAVALI OLARAK DAİMA İDARE GÖSTERİLİR. Dava konusu işlemi yapmış olan kişiler ya da kamu görevlileri HASIM OLARAK GÖSTERİLEMEZ. HASIM GÖSTERMEDE YAPILACAK YANLIŞLIĞI İDARİ YARGI YERİ KENDİLİĞİNDEN DÜZELTİR; DAVALININ YANLIŞ GÖSTERİLMESİ DAVANIN YA DA DİLEKÇENİN REDDİ SONUCUNU DOĞURMAZ. Mahkeme husumete ilişkin hatayı RE'SEN GİDERMEKLE yükümlüdür.",
  t: "İptal Davasında Taraflar", d: 3
},
{
  q: "Davalı olarak idare yerine özel kişinin (örneğin kamu görevlisinin) gösterilmesi halinde ne olur?",
  o: ["Adli yargının görevli olduğu gerekçesi ile davanın reddi sonucunu doğurur", "Mahkeme re'sen düzeltir", "Dava esastan incelenir", "Dilekçe reddedilir", "Hiçbir sonuç doğmaz"],
  a: 0,
  e: "DAVALI OLARAK İDARE YERİNE, ÖZEL KİŞİNİN (örneğin KAMU GÖREVLİSİNİN) GÖSTERİLMESİ ADLİ YARGININ GÖREVLİ OLDUĞU GEREKÇESİ İLE DAVANIN REDDİ SONUCUNU DOĞURACAKTIR. (Bu, mahkemenin re'sen düzelttiği 'hasım gösterme yanlışlığından' farklıdır.)",
  t: "İptal Davasında Taraflar", d: 3
},

/* ---------- İPTAL DAVASININ SONUÇLARI ---------- */
{
  q: "İptal kararının etkisi nasıldır?",
  o: ["Dava konusu işlemi yapıldığı andan itibaren ortadan kaldırır; iptal kararları geçmişe etkilidir ve işlem yapılmamış gibi eski durum geri gelir", "Sadece geleceğe etkilidir", "Karar tarihinden itibaren etkilidir", "Kesinleşme tarihinden itibaren etkilidir", "Etkisi taraflarca belirlenir"],
  a: 0,
  e: "İPTAL KARARI DAVA KONUSU İŞLEMİ YAPILDIĞI ANDAN İTİBAREN ORTADAN KALDIRIR. Yani İPTAL KARARLARI GEÇMİŞE ETKİLİDİR. İPTAL KARARIYLA BİRLİKTE İŞLEM YAPILMAMIŞ GİBİ, ESKİ DURUM GERİYE GELİR. DÜZENLEYİCİ İŞLEMLER (yönetmelik gibi) iptal edilmişse BUNDAN ÜÇÜNCÜ KİŞİLER DE YARARLANIR — iptal GENELE ETKİLİ sonuç doğurabilir.",
  t: "İptal Davasının Sonuçları", d: 2
},
{
  q: "İptal kararının yerine getirilmesi süresi ne kadardır ve kasten yerine getirilmezse ne olur?",
  o: ["Kararın idareye tebliğinden başlayarak 30 günü geçemez; 30 gün içinde kasten yerine getirilmemesi halinde ilgili idare aleyhine dava açabilir, kararı yerine getirmeyen kamu görevlisi aleyhine tazminat davası açılamaz", "60 gün; kamu görevlisi aleyhine dava açılır", "30 gün; sadece kamu görevlisi aleyhine dava açılır", "Süre öngörülmemiştir", "15 gün; hiçbir dava açılamaz"],
  a: 0,
  e: "İDARE İPTAL KARARLARINI YERİNE GETİRMEK ZORUNDADIR. İptal kararının yerine getirilmesi zaman alacaksa, bu süre HİÇBİR ŞEKİLDE KARARIN İDAREYE TEBLİĞİNDEN BAŞLAYARAK 30 GÜNÜ GEÇEMEZ. Mahkeme kararlarının '30 GÜN' içinde kamu görevlilerince KASTEN YERİNE GETİRİLMEMESİ halinde İLGİLİ, İDARE ALEYHİNE DAVA AÇABİLİR; KARARI YERİNE GETİRMEYEN KAMU GÖREVLİSİ ALEYHİNE TAZMİNAT DAVASI AÇILAMAZ.",
  t: "İptal Davasının Sonuçları", d: 3
},
{
  q: "İptal davasının reddedilmesinin sonuçları nelerdir?",
  o: ["İşlemin hukuksal durumunda değişiklik olmaz, daha önce verilmiş yürütmenin durdurulması kararı başka bir karara gerek kalmaksızın kendiliğinden kalkar ve davanın reddi üçüncü kişilerin tekrar iptal davası açmasını engellemez", "İşlem kesinleşir ve hiç kimse dava açamaz", "Yürütmenin durdurulması devam eder", "Üçüncü kişiler dava açamaz", "İşlem geriye yürür"],
  a: 0,
  e: "İPTAL DAVASININ REDDEDİLMESİ durumunda: ▪ İŞLEMİN HUKUKSAL DURUMUNDA BİR DEĞİŞİKLİK OLMAZ. ▪ Eğer daha önce işlem hakkında YÜRÜTMENİN DURDURULMASI kararı verilmişse BAŞKA BİR KARARA GEREK KALMAKSIZIN yürütmenin durdurulması kararı KENDİLİĞİNDEN KALKAR. ▪ DAVANIN REDDİ, dava konusu işlemle ilgili olan ÜÇÜNCÜ KİŞİLERİN TEKRAR İPTAL DAVASI AÇMASINI ENGELLEMEZ.",
  t: "İptal Davasının Sonuçları", d: 3
},
{
  q: "Sebep ikamesi nedir?",
  o: ["İdari yargı yerinin, taraflar ileri sürmese de incelediği işlemin hukuka aykırı sayılması ya da sayılmaması için başka bir sebep görürse bu sebebe dayanarak karar verebilmesidir", "Davacının dava sebebini değiştirmesidir", "İdarenin işlemin sebebini değiştirmesidir", "Mahkemenin işlem yerine yeni işlem yapmasıdır", "Davalının değiştirilmesidir"],
  a: 0,
  e: "İdari yargıda RE'SEN ARAŞTIRMA İLKESİ geçerlidir; mahkeme TARAFLARIN İDDİA, SAVUNMA VE DELİLLERİ İLE BAĞLI DEĞİLDİR. Yargılama sırasında İDARİ YARGI YERİNİN TARAFLAR İLERİ SÜRMESE DE İNCELEDİĞİ İŞLEMİN HUKUKA AYKIRI SAYILMASI YA DA SAYILMAMASI İÇİN BAŞKA BİR SEBEP GÖRÜRSE, BU SEBEBE DAYANARAK KARAR VEREBİLMESİ durumuna 'SEBEP İKAMESİ' denir. Tespit edilen sebep SAKATLIK yönünde ise İPTAL; HUKUKA UYGUNLUK yönünde ise RET kararı verilir.",
  t: "İptal Davasının Sonuçları", d: 3
},

/* ---------- TAM YARGI DAVASI ---------- */
{
  q: "Tam yargı davası nasıl tanımlanır?",
  o: ["İdari nitelikteki işlem ve eylemlerden kişisel hakları doğrudan muhtel olanlar tarafından açılan ve doğan zararın tazminine veya hakkın geri verilmesine mahkum edilmesi isteklerini konu edinen davadır", "İdari işlemin iptalini isteyen davadır", "Sadece sözleşmelerden doğan davadır", "Tespit davasıdır", "İdarenin açtığı davadır"],
  a: 0,
  e: "TAM YARGI DAVASI: İDARİ NİTELİKTEKİ İŞLEM VE EYLEMLERDEN KİŞİSEL HAKLARI DOĞRUDAN MUHTEL OLANLAR tarafından açılan ve idarenin, KAMU HUKUKU KURALLARINA GÖRE SORUMLULUĞUNU gündeme getirerek DOĞAN ZARARIN TAZMİNİNE VEYA HAKKIN GERİ VERİLMESİNE MAHKUM EDİLMESİ isteklerini konu edinen davadır.",
  t: "Tam Yargı Davası", d: 2
},
{
  q: "İptal davası ile tam yargı davası arasındaki farklar bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["İptal davasında menfaat ihlali yeterlidir ve düzenleyici işlemin iptalinde genele etkili sonuç doğar; tam yargı davasında hak ihlali gerekir ve dava öznel niteliktedir (sonuç sadece tarafları bağlar)", "İkisinde de hak ihlali gerekir", "İkisinde de genele etkili sonuç doğar", "İptal davasında hak ihlali, tam yargıda menfaat ihlali gerekir", "İkisinin yargılama usulü farklıdır"],
  a: 0,
  e: "İPTAL DAVASI: konusunu İDARİ İŞLEMLER oluşturur, amaç işlemin ORTADAN KALDIRILMASIDIR, MENFAAT İHLALİ YETERLİDİR, düzenleyici işlem iptalinde GENELE ETKİLİ sonuç doğar. TAM YARGI DAVASI: konusunu İDARİ İŞLEM, İDARİ EYLEM, İDARİ SÖZLEŞME oluşturabilir, davacı HAKKIN YERİNE GETİRİLMESİNİ ya da ZARARIN GİDERİLMESİNİ talep eder, HAK İHLALİ (hakkın muhtel olması) GEREKİR, dava ÖZNEL NİTELİKTEDİR (sonuç sadece tarafları bağlar). HER İKİ DAVA TÜRÜNDE DE YARGILAMA USULÜ AYNIDIR (İYUK).",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "İdari eylemlerden doğan tam yargı davalarında ön karar prosedürü nedir?",
  o: ["Hakları ihlal edilenlerin durumu öğrendikleri andan itibaren BİR YIL ve her durumda eylemin yapıldığı tarihten itibaren BEŞ YIL içinde idareye başvurarak haklarının yerine getirilmesini istemeleri gerekir", "Doğrudan dava açılır, başvuru gerekmez", "İki yıl ve on yıl içinde başvurulur", "Altı ay ve iki yıl içinde başvurulur", "Sadece beş yıl içinde başvurulur"],
  a: 0,
  e: "ÖN KARAR PROSEDÜRÜ: İDARİ EYLEMLERDEN HAKLARI İHLÂL EDİLMİŞ OLANLARIN, DURUMU ÖĞRENDİKLERİ ANDAN İTİBAREN BİR YIL ve HER DURUMDA EYLEMİN YAPILDIĞI TARİHTEN İTİBAREN BEŞ YIL İÇİNDE İDAREYE BAŞVURARAK, HAKLARININ YERİNE GETİRİLMESİNİ İSTEMELERİ GEREKİR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "İdari eylemde ön karar başvurusu reddedilirse dava açma süresi nasıl işler?",
  o: ["İsteğin kısmen ya da tamamen reddi durumunda işlemin tebliğini izleyen tarihten itibaren ya da otuz gün içinde cevap verilmezse bu sürenin bittiği tarihten itibaren 60 gün içinde dava açılabilir", "30 gün içinde dava açılabilir", "Doğrudan bir yıl içinde dava açılabilir", "Süre yoktur", "15 gün içinde dava açılabilir"],
  a: 0,
  e: "Ön karar başvurusunun KISMEN YA DA TAMAMEN REDDİ durumunda, bu konudaki İŞLEMİN TEBLİĞİNİ İZLEYEN TARİHTEN İTİBAREN ya da istek hakkında OTUZ GÜN İÇİNDE CEVAP VERİLMEDİĞİ takdirde BU SÜRENİN BİTTİĞİ TARİHTEN İTİBAREN 60 GÜN İÇİNDE DAVA AÇILABİLİR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "Bayındırlık-ulaştırma hizmeti veya idari eylemden doğan tam yargı davasında yetkili mahkeme hangisidir?",
  o: ["Hizmetin görüldüğü veya eylemin yapıldığı yer idare mahkemesi", "İşlemi yapan idarenin bulunduğu yer mahkemesi", "Davacının ikametgahı mahkemesi", "Ankara idare mahkemesi", "Danıştay"],
  a: 0,
  e: "BAYINDIRLIK-ULAŞTIRMA HİZMETİ VEYA İDARİ EYLEMDEN doğan tam yargı davasında yetkili mahkeme HİZMETİN GÖRÜLDÜĞÜ VEYA EYLEMİN YAPILDIĞI YER İDARE MAHKEMESİDİR. NOT: ZARAR, İDAREYE YABANCI ÜÇÜNCÜ KİŞİNİN EYLEMİNDEN kaynaklanıyorsa yetkili mahkeme DAVACININ İKAMETGAHININ BULUNDUĞU YER İDARE MAHKEMESİDİR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "İdari sözleşmeden doğan tam yargı davasında yetkili mahkeme ve süre nedir?",
  o: ["Sözleşmeyi yapan idari kuruluşun bulunduğu yer idare mahkemesi; dava açma süresi 60 gündür", "Sözleşmenin ifa yeri mahkemesi; 30 gün", "Davacının ikametgahı mahkemesi; 60 gün", "Danıştay; 60 gün", "Asliye hukuk mahkemesi; 1 yıl"],
  a: 0,
  e: "İDARİ SÖZLEŞMEDEN doğan tam yargı davasında yetkili mahkeme SÖZLEŞMEYİ YAPAN İDARİ KURULUŞUN BULUNDUĞU YER İDARE MAHKEMESİDİR. Sözleşmenin karşı tarafı olan kişi, FESİH KARARI veya sözleşmenin uygulanması amacıyla alınan TEK YANLI KARARLARDAN dolayı zarara uğramışsa tam yargı davası açabilir; DAVA AÇMA SÜRESİ 60 GÜNDÜR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "İdari işleme karşı iptal davası ve tam yargı davası birlikte açılabilir mi?",
  o: ["Birlikte açılabileceği gibi önce iptal davası açılıp bu dava sonuçlandıktan sonra tam yargı davası da açılabilir", "Sadece birlikte açılabilir", "Sadece ayrı ayrı açılabilir", "Önce tam yargı davası açılmalıdır", "Aynı işleme karşı iki dava açılamaz"],
  a: 0,
  e: "İDARİ İŞLEME KARŞI İPTAL DAVASI VE TAM YARGI DAVASI BİRLİKTE AÇILABİLECEĞİ GİBİ ÖNCE İPTAL DAVASI AÇILIP BU DAVA SONUÇLANDIKTAN SONRA TAM YARGI DAVASI DA AÇILABİLİR. İdari işlemden doğan tam yargı davasında yetkili mahkeme İŞLEMİ YAPAN İDARİ KURULUŞUN BULUNDUĞU YER İDARE MAHKEMESİ, süre İŞLEMİN YAZILI BİLDİRİMİNİ İZLEYEN GÜNDEN İTİBAREN 60 GÜNDÜR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "Tam yargı davasında hükmedilen tazminat nasıl ödenir?",
  o: ["Davacının veya vekilinin davalı idareye yazılı bildireceği banka hesap numarasına idare tarafından yatırılır; süre gerekiyorsa bu süre 30 günden fazla olamaz, ödenmezse karar genel hükümlere göre icra olunur", "Doğrudan icra takibi yapılır", "Mahkeme veznesine yatırılır", "Süre 60 günden fazla olamaz", "Ödeme zorunluluğu yoktur"],
  a: 0,
  e: "Tam yargı davasında davacının talepleri kabul edilip idarenin tazminat ödemesine hükmedilirse, HÜKMEDİLEN TAZMİNAT MİKTARI (vekâlet ücreti ve yargılama giderleri ile) DAVACININ VEYA VEKİLİNİN DAVALI İDAREYE YAZILI ŞEKİLDE BİLDİRECEĞİ BANKA HESAP NUMARASINA İDARE TARAFINDAN YATIRILIR. Hesap numarasının bildirildiği tarihten itibaren DERHAL yatırılması gerekir; süre gerekiyorsa BU SÜRE 30 GÜNDEN FAZLA OLAMAZ. Belirtilen süre içinde ödeme yapılmazsa MAHKEME KARARI GENEL HÜKÜMLER DAİRESİNDE İNFAZ VE İCRA OLUNUR.",
  t: "Tam Yargı Davası", d: 3
},

/* ---------- DİLEKÇE KOŞULLARI ---------- */
{
  q: "Dava dilekçeleri hangi yerlere verilebilir?",
  o: ["Danıştay ya da ilgili idare/vergi mahkemesi başkanlıklarına, bunlara gönderilmek üzere idare veya vergi mahkemesi başkanlıklarına, bu mahkemelerin bulunmadığı yerlerde asliye hukuk hâkimliklerine ve yurt dışında Türk konsolosluklarına", "Sadece Danıştay'a", "Sadece ilgili mahkemeye", "Sadece valiliklere", "Sadece Adalet Bakanlığına"],
  a: 0,
  e: "Dava dilekçeleri, savunmalar ve davaya ilişkin her türlü yazı: ▪ DANIŞTAY ya da İLGİLİ İDARE VEYA VERGİ MAHKEMESİ BAŞKANLIKLARINA, ▪ bunlara gönderilmek üzere İDARE VEYA VERGİ MAHKEMESİ BAŞKANLIKLARINA, ▪ idare veya vergi mahkemesi bulunmayan yerlerde (büyükşehir belediyesi sınırları içinde olup olmadığına bakılmaksızın) 'ASLİYE HUKUK' HÂKİMLİKLERİNE, ▪ yurt dışında TÜRK KONSOLOSLUKLARINA verilebilir.",
  t: "Dilekçe Koşulları", d: 3
},
{
  q: "Dava dilekçesindeki eksiklikler için ne kadar süre verilir ve giderilmezse ne olur?",
  o: ["Dilekçe reddedilir ve eksikliğin tamamlanması için 30 gün süre verilir; eksiklikler 30 gün içinde giderilirse davaya devam olunur, giderilmezse açılan dava reddedilir", "15 gün süre verilir", "60 gün süre verilir", "Süre verilmez, dava reddedilir", "Eksiklik mahkeme tarafından giderilir"],
  a: 0,
  e: "İYUK m. 3'te belirtilen hususlarda EKSİKLİKLER OLMASI halinde DAVA DİLEKÇESİ REDDEDİLİR. EKSİKLİĞİN TAMAMLANMASI İÇİN 30 GÜN SÜRE VERİLİR. EKSİKLİKLER 30 GÜN İÇİNDE GİDERİLMİŞ İSE DAVAYA DEVAM OLUNUR; EKSİKLİKLER GİDERİLMEZSE AÇILAN DAVA REDDEDİLİR.",
  t: "Dilekçe Koşulları", d: 3
},
{
  q: "Dilekçelerde bulunması zorunlu hususlar arasında aşağıdakilerden hangisi vardır?",
  o: ["Tarafların ad-soyad ve adresleri ile TC kimlik numarası, davanın konu ve sebepleri ile dayandığı deliller, dava konusu işlemin yazılı bildirim tarihi ve tam yargı davalarında uyuşmazlık konusu miktar", "Sadece tarafların adı", "Sadece davanın konusu", "Sadece deliller", "Tanık listesi"],
  a: 0,
  e: "İYUK m. 3'e göre dilekçelerde: TARAFLARIN VE VARSA VEKİLLERİNİN AD-SOYAD/UNVAN VE ADRESLERİ ile gerçek kişilere ait TC KİMLİK NUMARASI; DAVANIN KONU VE SEBEPLERİ İLE DAYANDIĞI DELİLLER; DAVA KONUSU İDARİ İŞLEMİN YAZILI BİLDİRİM TARİHİ; vergi/tam yargı davalarında UYUŞMAZLIK KONUSU MİKTAR; vergi davalarında verginin NEVİ VE YILI, ihbarnamenin tarih-numarası bulunur. DAVA KONUSU KARARIN VE BELGELERİN ASILLARI VEYA ÖRNEKLERİ dilekçeye eklenir; DİLEKÇELER KARŞI TARAF SAYISINDAN BİR FAZLA olur.",
  t: "Dilekçe Koşulları", d: 3
},
{
  q: "Harç veya posta ücreti eksik ödenerek dava açılmışsa süreç nasıl işler?",
  o: ["30 gün içinde tamamlanması ilgiliye tebliğ olunur, gereği yerine getirilmezse bildirim bir daha tekrarlanır; süresinde tamamlanmazsa davanın açılmamış sayılmasına karar verilir", "Dava doğrudan reddedilir", "Harç mahkeme tarafından tamamlanır", "15 gün süre verilir", "Dava esastan incelenir"],
  a: 0,
  e: "Herhangi bir sebeple HARCI VEYA POSTA ÜCRETİ VERİLMEDEN veya EKSİK harç/posta ücreti ile dava açılmışsa, 30 GÜN İÇİNDE harcın ve posta ücretinin verilmesi/tamamlanması ilgiliye TEBLİĞ OLUNUR. Tebligata rağmen gereği yerine getirilmezse BİLDİRİM AYNI ŞEKİLDE BİR DAHA TEKRARLANIR. Harç veya posta ücreti süresi içinde verilmez/tamamlanmazsa DAVANIN AÇILMAMIŞ SAYILMASINA KARAR VERİLİR ve bu karar davacıya tebliğ olunur.",
  t: "Dilekçe Koşulları", d: 3
},
{
  q: "Dava açıldıktan sonra posta ücreti tebliğ işlemlerini engelleyecek şekilde azalırsa ne olur?",
  o: ["30 gün içinde tamamlanması tebliğ olunur; tamamlanmazsa dosyanın işlemden kaldırılmasına karar verilir ve bu kararın tebliğinden başlayarak üç ay içinde noksan tamamlanarak yeniden işleme konulması istenmezse davanın açılmamış sayılmasına karar verilir", "Dava doğrudan reddedilir", "Dosya derhal işlemden kaldırılır", "Bir yıl süre verilir", "Hiçbir işlem yapılmaz"],
  a: 0,
  e: "Dava açıldıktan sonra POSTA ÜCRETİNDE tebliğ işlemlerinin yapılmasını engelleyecek şekilde AZALMA olması halinde, 30 GÜN İÇİNDE posta ücretinin tamamlanması ilgiliye tebliğ olunur; gereği yerine getirilmezse bildirim BİR DAHA TEKRARLANIR. Posta ücreti süresi içinde tamamlanmazsa DOSYANIN İŞLEMDEN KALDIRILMASINA karar verilir. Bu kararın tebliği tarihinden başlayarak ÜÇ AY İÇİNDE noksanı tamamlanmak suretiyle yeniden işleme konulması istenmezse DAVANIN AÇILMAMIŞ SAYILMASINA karar verilir.",
  t: "Dilekçe Koşulları", d: 3
},

/* ---------- YÜRÜTMENİN DURDURULMASI ---------- */
{
  q: "Anayasa m. 125'e göre yürütmenin durdurulması kararı hangi şartların birlikte gerçekleşmesi durumunda verilebilir?",
  o: ["İdari işlemin uygulanması halinde telafisi güç veya imkansız zararların doğması VE idari işlemin açıkça hukuka aykırı olması", "Sadece telafisi güç zarar doğması", "Sadece işlemin hukuka aykırı olması", "Davacının talebi yeterlidir", "İdarenin kabulü gerekir"],
  a: 0,
  e: "AY m. 125: 'İDARİ İŞLEMİN UYGULANMASI HALİNDE TELAFİSİ GÜÇ VEYA İMKANSIZ ZARARLARIN DOĞMASI VE İDARİ İŞLEMİN AÇIKÇA HUKUKA AYKIRI OLMASI ŞARTLARININ BİRLİKTE GERÇEKLEŞMESİ DURUMUNDA GEREKÇE GÖSTERİLEREK YÜRÜTMENİN DURDURULMASINA KARAR VERİLEBİLİR.'",
  t: "Yürütmenin Durdurulması", d: 2
},
{
  q: "Anayasa m. 125'e göre kanunla yürütmenin durdurulması kararı verilmesi hangi hallerde sınırlanabilir?",
  o: ["Olağanüstü hallerde, seferberlik ve savaş halinde, milli güvenlik, kamu düzeni ve genel sağlık nedenleri ile", "Sadece savaş halinde", "Sadece olağanüstü hallerde", "Hiçbir halde sınırlanamaz", "Sadece milli güvenlik nedeniyle"],
  a: 0,
  e: "AY m. 125'e göre KANUNLA: ▪ OLAĞANÜSTÜ HALLERDE, ▪ SEFERBERLİK VE SAVAŞ HALİNDE, ▪ MİLLİ GÜVENLİK, ▪ KAMU DÜZENİ, ▪ GENEL SAĞLIK NEDENLERİ İLE yürütmenin durdurulması kararı verilmesi SINIRLANABİLİR.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Yürütmenin durdurulması kararının hukuki niteliği bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["İstisnai bir önlemdir, geçici bir önlemdir ve bir ara karar niteliğindedir; iptal davasını sonuçlandırmadığı için ayrıca istinaf ya da temyiz olunamaz", "Nihai karardır ve temyiz edilebilir", "Kalıcı bir önlemdir", "Kendiliğinden verilir", "Kesin hüküm niteliğindedir"],
  a: 0,
  e: "YÜRÜTMENİN DURDURULMASI KARARI: ▪ İSTİSNAİ (AYRIKSI) BİR ÖNLEMDİR — işleme iptal davası açılması işlemin yürütmesini KENDİLİĞİNDEN DURDURMAZ. ▪ GEÇİCİ BİR ÖNLEMDİR — işlemin uygulanmasını belli bir süre ve en geç DAVA SONUNA KADAR erteler. ▪ BİR ARA KARAR NİTELİĞİNDEDİR — iptal davasını sonuçlandırmadığı için AYRICA İSTİNAF YA DA TEMYİZ OLUNAMAZ.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Vergi mahkemelerinde vergi uyuşmazlığından doğan dava açılmasının etkisi nedir?",
  o: ["Tarh edilen vergi, resim ve harçlar ile benzeri mali yükümlerin ve bunların zam ve cezalarının dava konusu edilen bölümünün tahsil işlemlerini durdurur", "Hiçbir etkisi yoktur", "Tüm tahsil işlemlerini durdurur", "Sadece yürütmenin durdurulması kararıyla durur", "Cezaların tahsilini durdurmaz"],
  a: 0,
  e: "Danıştay'da veya idari mahkemelerde dava açılması, dava edilen idari işlemin yürütülmesini DURDURMAZ ve YD kararı verilmesi DAVACI TARAFINDAN İSTENMESİ gerekir. BUNUNLA BİRLİKTE VERGİ MAHKEMELERİNDE, VERGİ UYUŞMAZLIKLARINDAN DOĞAN DAVALARIN AÇILMASI, TARH EDİLEN VERGİ, RESİM VE HARÇLAR İLE BENZERİ MALİ YÜKÜMLERİN VE BUNLARIN ZAM VE CEZALARININ DAVA KONUSU EDİLEN BÖLÜMÜNÜN TAHSİL İŞLEMLERİNİ DURDURUR. TEMYİZ VEYA İSTİNAF yoluna başvurulmuş olması da işlemin yürütülmesini kendiliğinden durdurmaz.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Yürütmenin durdurulması ne zaman istenebilir ve teminat bakımından durum nedir?",
  o: ["Dava açıldığında dilekçede ya da dava açıldıktan sonra nihai karar verilinceye kadar istenebilir; bir teminat karşılığı verilir ancak duruma göre güvence aranmayabilir, idareden ve adli yardımdan faydalananlardan teminat alınmaz", "Sadece dava dilekçesinde istenebilir", "Teminat her halde zorunludur", "İdareden de teminat alınır", "Dava açılmadan önce istenebilir"],
  a: 0,
  e: "Yürütmenin durdurulması ANCAK AÇILMIŞ BİR İPTAL DAVASINDA verilebilir; ya DAVA AÇILDIĞINDA DAVA DİLEKÇESİNDE ya da DAVA AÇILDIKTAN SONRA NİHAİ KARAR VERİLİNCEYE KADAR istenebilir. YD kararı BİR TEMİNAT KARŞILIĞI VERİLİR; ancak DURUMA GÖRE GÜVENCE ARANMAYABİLİR. İDAREDEN VE ADLİ YARDIMDAN FAYDALANAN KİMSELERDEN TEMİNAT ALINMAZ.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Yürütmenin durdurulması kararında gerekçe bakımından hangi zorunluluk vardır?",
  o: ["İdari işlemin hangi gerekçelerle açıkça hukuka aykırı olduğu ve uygulanması halinde doğacak telafisi güç veya imkânsız zararların neler olduğunun kararda belirtilmesi zorunludur", "Gerekçe gerekmez", "Sadece hukuka aykırılık belirtilir", "Sadece zarar belirtilir", "Gerekçe sonradan yazılabilir"],
  a: 0,
  e: "YD kararı GEREKÇELİ OLARAK VERİLİR: İDARİ İŞLEMİN HANGİ GEREKÇELERLE HUKUKA AÇIKÇA AYKIRI OLDUĞU VE İŞLEMİN UYGULANMASI HALİNDE DOĞACAK TELAFİSİ GÜÇ VEYA İMKÂNSIZ ZARARLARIN NELER OLDUĞUNUN KARARDA BELİRTİLMESİ ZORUNLUDUR. SADECE İLGİLİ KANUN HÜKMÜNÜN İPTALİ İSTEMİYLE ANAYASA MAHKEMESİNE BAŞVURULDUĞU GEREKÇESİYLE YD KARARI VERİLEMEZ.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "İdarenin savunması alınmadan yürütmenin durdurulması kararı verilebilir mi?",
  o: ["Kural olarak verilemez; ancak uygulanmakla etkisi tükenecek olan idari işlemlerin yürütülmesi, savunma alındıktan sonra yeniden karar verilmek üzere idarenin savunması alınmaksızın da durdurulabilir", "Her zaman verilebilir", "Hiçbir istisna yoktur", "Sadece vergi davalarında verilebilir", "Savunma hiç alınmaz"],
  a: 0,
  e: "İDARENİN SAVUNMASI ALINMADAN VEYA SAVUNMA SÜRESİ GEÇMEDEN YD KARARI VERİLEMEZ. İSTİSNA: UYGULANMAKLA ETKİSİ TÜKENECEK OLAN İDARİ İŞLEMLERİN YÜRÜTÜLMESİ, SAVUNMA ALINDIKTAN SONRA YENİDEN KARAR VERİLMEK ÜZERE, İDARENİN SAVUNMASI ALINMAKSIZIN DA DURDURULABİLİR.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Kamu görevlileri hakkındaki atama, naklen atama, görev ve unvan değişikliği işlemleri uygulanmakla etkisi tükenen işlem sayılır mı?",
  o: ["Sayılmaz; bu nedenle bu durumlarda idarenin savunması alınmadan yürütmenin durdurulması kararı verilemez", "Sayılır ve savunma alınmadan YD verilebilir", "Sadece atama işlemleri sayılır", "Bu işlemlere YD verilemez", "Savunma hiç alınmaz"],
  a: 0,
  e: "İSTİSNANIN İSTİSNASI: KAMU GÖREVLİLERİ HAKKINDA TESİS EDİLEN ATAMA, NAKLEN ATAMA, GÖREV VE UNVAN DEĞİŞİKLİĞİ, GEÇİCİ VEYA SÜREKLİ GÖREVLENDİRMELERE İLİŞKİN İDARİ İŞLEMLER, UYGULANMAKLA ETKİSİ TÜKENECEK OLAN İDARİ İŞLEMLERDEN SAYILMAZ. Yani bu durumlarda İDARENİN SAVUNMASI ALINMADAN YD VERİLEMEZ.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Yürütmenin durdurulması isteminin reddi kararı için idarenin savunmasını almak şart mıdır?",
  o: ["Şart değildir; dava dilekçesi ve eklerinden istemin yerinde olmadığı anlaşılırsa davalı idarenin savunması alınmaksızın istem reddedilebilir", "Şarttır", "Sadece vergi davalarında şart değildir", "Her halde savunma alınır", "Ret kararı verilemez"],
  a: 0,
  e: "DAVA DİLEKÇESİ VE EKLERİNDEN YÜRÜTMENİN DURDURULMASI İSTEMİNİN YERİNDE OLMADIĞI ANLAŞILIRSA, DAVALI İDARENİN SAVUNMASI ALINMAKSIZIN İSTEM REDDEDİLEBİLİR. Yani YD KARARI VERMEDEN ÖNCE İDARENİN SAVUNMASINI ALMAK ŞARTTIR FAKAT YD İSTEMİNİN REDDİ KARARI İÇİN İDARENİN SAVUNMASINI ALMIŞ OLMAK ŞART DEĞİLDİR.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Yürütmenin durdurulması kararları ne kadar sürede yazılıp tebliğ edilir ve aynı sebeplerle ikinci kez istenebilir mi?",
  o: ["15 gün içinde yazılıp imzalanarak taraflara tebliğ edilir; aynı sebeplere dayanılarak ikinci kez yürütmenin durdurulması isteminde bulunulamaz", "30 gün içinde tebliğ edilir; ikinci kez istenebilir", "7 gün içinde tebliğ edilir", "Süre yoktur", "Sınırsız sayıda istenebilir"],
  a: 0,
  e: "▪ Yürütmenin durdurulması kararı verilen dava dosyaları ÖNCELİKLE İNCELENİR ve karara bağlanır. ▪ YD kararlarının GECİKMEKSİZİN UYGULANABİLMESİNİ sağlamak amacıyla 15 GÜN İÇİNDE YAZILIP İMZALANARAK TARAFLARA TEBLİĞ EDİLİR. ▪ AYNI SEBEPLERE DAYANILARAK İKİNCİ KEZ YÜRÜTMENİN DURDURULMASI İSTEMİNDE BULUNULAMAZ.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "İdare/vergi mahkemeleri ile tek hakim tarafından verilen yürütmenin durdurulması kararlarına itiraz nereye ve kaç gün içinde yapılır?",
  o: ["Bölge idare mahkemesine 7 gün içinde ve bir defaya mahsus olarak", "Danıştay'a 30 gün içinde", "BİM'e 30 gün içinde", "Danıştay'a 7 gün içinde", "İtiraz yolu kapalıdır"],
  a: 0,
  e: "İYUK m. 27/7 ile yürütmenin durdurulmasının KABUL YA DA RET şeklindeki kararlarına karşı BİR DEFAYA MAHSUS İTİRAZ yolu öngörülmüştür. Karar İDARE/VERGİ MAHKEMELERİ İLE TEK HAKİM tarafından verilmişse 7 GÜN İÇİNDE BÖLGE İDARE MAHKEMESİNE itiraz edilir.",
  t: "Yürütmenin Durdurulması", d: 3
}

]);

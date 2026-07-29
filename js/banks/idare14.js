/* İdare Hukuku — 14. bölüm (YD itiraz mercileri, duruşma, ilk inceleme,
   kanun yolları: istinaf, temyiz, kanun yararına temyiz, yargılamanın
   yenilenmesi, karşılaştırmalı yargılama usulleri) */
KPSS.registerBank('idare', [

/* ---------- YD İTİRAZ MERCİLERİ ---------- */
{
  q: "Danıştay idari dava dairesince verilen yürütmenin durdurulması kararına itiraz nereye yapılır?",
  o: ["Danıştay İdari Dava Daireleri Kuruluna 7 gün içinde", "Danıştay Genel Kuruluna 30 gün içinde", "Bölge idare mahkemesine 7 gün içinde", "Vergi Dava Daireleri Kuruluna", "İtiraz edilemez"],
  a: 0,
  e: "YD kararına itiraz mercileri (hepsinde süre 7 GÜNDÜR): İDARE/VERGİ MAHKEMELERİ ile TEK HAKİM kararlarına karşı → BİM; BİM tarafından verilmişse → EN YAKIN BİM; DANIŞTAY İDARİ DAVA DAİRESİNCE verilmişse → DANIŞTAY İDARİ DAVA DAİRELERİ KURULUNA; DANIŞTAY VERGİ DAVA DAİRESİNCE verilmişse → DANIŞTAY VERGİ DAVA DAİRELERİ KURULUNA.",
  t: "YD İtiraz", d: 3
},
{
  q: "Yürütmenin durdurulması itirazı üzerine mercilerin karar verme süresi ve kararın niteliği nedir?",
  o: ["Dosyanın kendisine gelişinden itibaren 7 gün içinde karar vermek zorundadır ve itiraz üzerine verilen kararlar kesindir", "30 gün içinde karar verir ve karar temyiz edilebilir", "15 gün içinde karar verir", "Süre yoktur", "Karar kesin değildir"],
  a: 0,
  e: "İTİRAZ EDİLEN MERCİLER, DOSYANIN KENDİSİNE GELİŞİNDEN İTİBAREN 7 GÜN İÇİNDE KARAR VERMEK ZORUNDADIR. İTİRAZ ÜZERİNE VERİLEN KARARLAR KESİNDİR. Ayrıca İSTİNAF VE TEMYİZ İNCELEMESİ sırasında YD istemleri hakkında verilen kararlar KESİNDİR, İTİRAZ EDİLEMEZ.",
  t: "YD İtiraz", d: 3
},
{
  q: "Hangi yargılama usullerinde yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez?",
  o: ["İvedi yargılama usulü ile merkezî ve ortak sınavlara ilişkin yargılama usulünün uygulandığı davalarda", "Vergi davalarında", "Tam yargı davalarında", "Tüm davalarda itiraz edilebilir", "İptal davalarında"],
  a: 0,
  e: "İVEDİ YARGILAMA USULÜNÜN UYGULANDIĞI İŞLER İLE MERKEZÎ VE ORTAK SINAVLARA İLİŞKİN YARGILAMA USULÜNÜN UYGULANDIĞI DURUMLARDA YÜRÜTMENİN DURDURULMASI TALEBİNE İLİŞKİN OLARAK VERİLECEK KARARLARA İTİRAZ EDİLEMEZ.",
  t: "YD İtiraz", d: 3
},
{
  q: "BİM'in istinaf makamı sıfatıyla verdiği yürütmenin durdurulması kararlarına itiraz edilebilir mi?",
  o: ["Edilemez; itiraz edilebilen, BİM'in ilk derece mahkemesinin yerine geçerek baktığı davada verdiği YD kararlarıdır", "Her halde itiraz edilebilir", "Danıştay'a itiraz edilir", "Hiçbir BİM kararına itiraz edilemez", "TBMM'ye başvurulur"],
  a: 0,
  e: "BİM'İN İSTİNAF MAKAMI SIFATIYLA VERDİĞİ YD VEYA YD İSTEMİNİN REDDİ KARARLARINA KARŞI İTİRAZ EDİLEMEZ. İtiraz edilebilen, BİM'İN İLK DERECE MAHKEMESİNİN YERİNE GEÇEREK baktığı davada verdiği YD kararlarıdır: idare/vergi mahkemelerindeki üç kişilik kurulun İKİ VEYA ÜÇ ÜYESİ hakkında HAKİMİN REDDİ istemi veya ÇEKİNME istemi olursa bu talep BİM tarafından karara bağlanır; BİM talepleri kabul ederse BU KURULUN YERİNE GEÇEREK davayı görür. Bu davada verdiği YD kararlarına EN YAKIN BİM'e itiraz edilebilir.",
  t: "YD İtiraz", d: 3
},

/* ---------- DURUŞMA ---------- */
{
  q: "İdare ve vergi mahkemelerinde hangi davalarda taraflardan birinin isteği üzerine duruşma yapılır?",
  o: ["İptal davaları ile 270 bin TL'yi (2024) aşan tam yargı davaları ve toplamı 270 bin TL'yi aşan vergi davalarında", "Tüm davalarda", "Sadece iptal davalarında", "Sadece vergi davalarında", "Hiçbir davada duruşma yapılmaz"],
  a: 0,
  e: "İlk derece mahkemesi olarak Danıştay ile idare ve vergi mahkemelerinde açılan İPTAL DAVALARI ve 270 BİN TÜRK LİRASINI (2024 yılı için) AŞAN TAM YARGI DAVALARI ile tarh edilen vergi, resim, harçlar ve zam-cezaları TOPLAMI 270 BİN TL'Yİ AŞAN VERGİ DAVALARINDA, TARAFLARDAN BİRİNİN İSTEĞİ ÜZERİNE DURUŞMA YAPILIR. MAHKEME VE HAKİM DE KENDİLİĞİNDEN duruşma yapılmasına karar verebilir; RE'SEN duruşmaya karar verilen durumlarda PARASAL SINIRLAR UYGULANMAZ.",
  t: "Duruşma", d: 3
},
{
  q: "Temyiz ve istinaflarda duruşma yapılması neye bağlıdır?",
  o: ["Tarafların istemine ve Danıştay veya ilgili bölge idare mahkemesi kararına bağlıdır; tarafların talebi yeterli değildir, mahkemenin de uygun görmesi gerekir", "Sadece tarafların talebine bağlıdır", "Duruşma yapılamaz", "Sadece mahkemenin kararına bağlıdır ve taraflar talep edemez", "Zorunludur"],
  a: 0,
  e: "TEMYİZ VE İSTİNAFLARDA DURUŞMA YAPILMASI TARAFLARIN İSTEMİNE VE DANIŞTAY VEYA İLGİLİ BÖLGE İDARE MAHKEMESİ KARARINA BAĞLIDIR (TARAFLARIN TALEBİ YETERLİ DEĞİL, MAHKEMENİN DE UYGUN GÖRMESİ GEREKİR). MAHKEME DE KENDİLİĞİNDEN duruşma yapılmasına karar verebilir.",
  t: "Duruşma", d: 3
},
{
  q: "Duruşma talebi ne zaman yapılabilir ve davetiyeler ne kadar önce gönderilir?",
  o: ["Talep, dava dilekçesi ile cevap ve savunmalarda yapılabilir, bunun dışında talep mümkün değildir; davetiyeler duruşma gününden en az otuz gün önce gönderilir", "Her zaman talep edilebilir; davetiye 15 gün önce gönderilir", "Sadece dava dilekçesinde talep edilebilir", "Davetiye 7 gün önce gönderilir", "Talep süresi yoktur"],
  a: 0,
  e: "DURUŞMA TALEBİ, DAVA DİLEKÇESİ İLE CEVAP VE SAVUNMALARDA YAPILABİLİR. BUNUN DIŞINDA DURUŞMA TALEBİNDE BULUNULABİLMESİ MÜMKÜN DEĞİLDİR. DURUŞMA DAVETİYELERİ DURUŞMA GÜNÜNDEN EN AZ OTUZ GÜN ÖNCE TARAFLARA GÖNDERİLİR.",
  t: "Duruşma", d: 3
},
{
  q: "İdari yargıda duruşmanın yürütülmesi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Duruşma açık yapılır (genel ahlak veya kamu güvenliği gerektirirse gizli olabilir), duruşmayı başkan yönetir, taraflara ikişer defa söz verilir ve hiçbiri gelmezse duruşma açılmaz inceleme evrak üzerinde yapılır", "Duruşma her halde gizli yapılır", "Taraflara birer defa söz verilir", "Taraflar gelmezse dava reddedilir", "Duruşmayı savcı yönetir"],
  a: 0,
  e: "DURUŞMA AÇIK OLARAK YAPILIR; GENEL AHLAKIN VEYA KAMU GÜVENLİĞİNİN gerekli kıldığı hallerde görevli daire/mahkeme kararı ile duruşmanın bir kısmı veya tamamı GİZLİ yapılır. DURUŞMAYI BAŞKAN YÖNETİR. Duruşmada TARAFLARA İKİŞER DEFA SÖZ VERİLİR. TARAFLARDAN YALNIZ BİRİ GELİRSE ONUN AÇIKLAMALARI DİNLENİR; HİÇ BİRİ GELMEZSE DURUŞMA AÇILMAZ, İNCELEME EVRAK ÜZERİNDE YAPILIR.",
  t: "Duruşma", d: 3
},
{
  q: "Danıştay'da görülen davaların duruşmalarında savcı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Savcının bulunması şarttır; taraflar dinlendikten sonra savcı yazılı düşüncesini açıklar, ardından taraflara son söz sorulur ve duruşmaya son verilir", "Savcı bulunmaz", "Savcı ilk sözü alır", "Savcı sadece vergi davalarında bulunur", "Savcı karar verir"],
  a: 0,
  e: "DANIŞTAY'DA GÖRÜLEN DAVALARIN DURUŞMALARINDA SAVCININ BULUNMASI ŞARTTIR. TARAFLAR DİNLENDİKTEN SONRA SAVCI YAZILI DÜŞÜNCESİNİ AÇIKLAR. Bundan sonra TARAFLARA SON OLARAK NE DİYECEKLERİ SORULUR ve duruşmaya son verilir. DURUŞMA YAPILDIKTAN SONRA EN GEÇ 15 GÜN İÇİNDE KARAR VERİLİR.",
  t: "Duruşma", d: 3
},

/* ---------- İLK İNCELEME ---------- */
{
  q: "Dava dilekçeleri üzerinde ilk inceleme kim tarafından ve ne kadar sürede yapılır?",
  o: ["Danıştay'da daire başkanının görevlendireceği bir tetkik hakimi, idare ve vergi mahkemelerinde mahkeme başkanı veya görevlendireceği bir üye tarafından on beş gün içinde", "Savcı tarafından 30 gün içinde", "Kurul tarafından 7 gün içinde", "Mahkeme başkanı tarafından 30 gün içinde", "İlk inceleme yapılmaz"],
  a: 0,
  e: "Dava dilekçeleri, DANIŞTAY'DA DAİRE BAŞKANININ GÖREVLENDİRECEĞİ BİR TETKİK HAKİMİ, İDARE VE VERGİ MAHKEMELERİNDE İSE MAHKEME BAŞKANI VEYA GÖREVLENDİRECEĞİ BİR ÜYE tarafından ilk incelemeye tabi tutulur. Kanun, İLK İNCELEME İŞLEMLERİNİN ON BEŞ GÜN İÇİNDE SONUÇLANDIRILMASINI hükme bağlamıştır.",
  t: "İlk İnceleme", d: 3
},
{
  q: "İlk inceleme konuları hangi sırayla incelenir?",
  o: ["Görev ve yetki, idari merci tecavüzü, ehliyet, kesin ve yürütülmesi gereken işlem olup olmadığı, süre aşımı, husumet, 3. ve 5. maddelere uygunluk", "Süre aşımı, görev, ehliyet, husumet", "Ehliyet, görev, süre, husumet", "Husumet, süre, görev, ehliyet", "Sıra önemli değildir"],
  a: 0,
  e: "İLK İNCELEME SIRASI: a) GÖREV VE YETKİ, b) İDARİ MERCİ TECAVÜZÜ, c) EHLİYET, d) İDARİ DAVAYA KONU OLACAK KESİN VE YÜRÜTÜLMESİ GEREKEN BİR İŞLEM OLUP OLMADIĞI, e) SÜRE AŞIMI, f) HUSUMET, g) 3. VE 5. MADDELERE UYGUN OLUP OLMADIKLARI.",
  t: "İlk İnceleme", d: 3
},
{
  q: "İdari merci tecavüzü halinde hangi karar verilir?",
  o: ["Kanunla zorunlu kılınan bir idari başvuru yapılmadan dava açılmışsa dilekçenin görevli idari mercie gönderilmesine karar verilir", "Davanın reddine karar verilir", "Dilekçenin reddine karar verilir", "Dava esastan incelenir", "Dosya Danıştay'a gönderilir"],
  a: 0,
  e: "İDARİ MERCİ TECAVÜZÜ: KANUNLA ZORUNLU KILINAN BİR İDARİ BAŞVURU YAPILMADAN DAVA AÇILMASI halinde DİLEKÇENİN GÖREVLİ İDARİ MERCİE GÖNDERİLMESİNE karar verilir. Bu karara karşı İSTİNAF/TEMYİZ YOLU AÇIKTIR.",
  t: "İlk İnceleme", d: 3
},
{
  q: "Dava açma ehliyeti olan kişinin avukat olmayan vekili tarafından dava açılması halinde hangi karar verilir?",
  o: ["30 gün içinde bizzat veya bir avukat vasıtasıyla dava açılmak üzere dilekçenin reddine karar verilir; bu karara karşı istinaf/temyiz yolu kapalıdır", "Davanın reddine karar verilir", "Dava esastan incelenir", "Süre verilmez, dava reddedilir", "İstinaf/temyiz yolu açıktır"],
  a: 0,
  e: "DAVA AÇMA EHLİYETİ OLAN ŞAHSIN AVUKAT OLMAYAN VEKİLİ TARAFINDAN DAVA AÇILMASI halinde 30 GÜN İÇİNDE BİZZAT VEYA BİR AVUKAT VASITASIYLA DAVA AÇILMAK ÜZERE DİLEKÇENİN REDDİNE karar verilir; bu karara karşı İSTİNAF/TEMYİZ YOLU KAPALIDIR. (DAVA AÇMA EHLİYETİ BULUNMAYAN kişinin dava açması halinde ise DAVANIN REDDİNE karar verilir ve istinaf/temyiz yolu AÇIKTIR.)",
  t: "İlk İnceleme", d: 3
},
{
  q: "Hasmın (davalının) yanlış gösterilmesi halinde ilk incelemede hangi karar verilir?",
  o: ["Davanın gerçek hasma tebliğine karar verilir; bu karara karşı istinaf/temyiz yolu kapalıdır", "Davanın reddine karar verilir", "Dilekçenin reddine karar verilir", "İstinaf/temyiz yolu açıktır", "Dosya işlemden kaldırılır"],
  a: 0,
  e: "HUSUMET — HASMIN (DAVALININ) YANLIŞ GÖSTERİLMESİ halinde DAVANIN GERÇEK HASMA TEBLİĞİNE karar verilir; bu karara karşı İSTİNAF/TEMYİZ YOLU KAPALIDIR. Aynı şekilde İYUK 3. VE 5. MADDELERE AYKIRILIK halinde 30 GÜN İÇİNDE YENİDEN DÜZENLENMEK ÜZERE DİLEKÇENİN REDDİ kararına karşı da istinaf/temyiz yolu KAPALIDIR.",
  t: "İlk İnceleme", d: 3
},

/* ---------- İSTİNAF ---------- */
{
  q: "İdare ve vergi mahkemelerinin kararlarına karşı istinaf yoluna nereye ve kaç gün içinde başvurulur?",
  o: ["Mahkemenin bulunduğu yargı çevresindeki bölge idare mahkemesine, kararın tebliğinden itibaren 30 gün içinde", "Danıştay'a 30 gün içinde", "BİM'e 15 gün içinde", "Danıştay'a 60 gün içinde", "BİM'e 60 gün içinde"],
  a: 0,
  e: "İdare ve vergi mahkemelerinin kararlarına karşı, BAŞKA KANUNLARDA FARKLI BİR KANUN YOLU ÖNGÖRÜLMÜŞ OLSA DAHİ, MAHKEMENİN BULUNDUĞU YARGI ÇEVRESİNDEKİ BÖLGE İDARE MAHKEMESİNE, KARARIN TEBLİĞİNDEN İTİBAREN 30 GÜN İÇİNDE istinaf yoluna başvurulabilir.",
  t: "İstinaf", d: 2
},
{
  q: "Konusu kaç TL'yi geçmeyen davalarda idare ve vergi mahkemesi kararları kesin olup istinaf yoluna başvurulamaz?",
  o: ["31 bin Türk lirası", "270 bin Türk lirası", "920 bin Türk lirası", "275 bin Türk lirası", "10 bin Türk lirası"],
  a: 0,
  e: "KONUSU 31 BİN TÜRK LİRASINI GEÇMEYEN; VERGİ DAVALARI, TAM YARGI DAVALARI VE İDARİ İŞLEMLERE KARŞI AÇILAN İPTAL DAVALARI hakkında idare ve vergi mahkemelerince verilen kararlar KESİN OLUP, BUNLARA KARŞI İSTİNAF YOLUNA BAŞVURULAMAZ.",
  t: "İstinaf", d: 3
},
{
  q: "BİM istinaf incelemesinde ilk derece mahkemesi kararını hukuka uygun bulmazsa ne yapar?",
  o: ["İstinaf başvurusunun kabulü ile ilk derece mahkemesi kararının kaldırılmasına karar verir ve işin esası hakkında yeniden bir karar verir", "Dosyayı her halde ilk derece mahkemesine gönderir", "Kararı bozar ve Danıştay'a gönderir", "İstinaf başvurusunu reddeder", "Davayı düşürür"],
  a: 0,
  e: "BİM, ilk derece mahkemesi kararını HUKUKA UYGUN BULURSA İSTİNAF BAŞVURUSUNUN REDDİNE karar verir (maddi yanlışlıkların düzeltilmesi mümkünse gerekli düzeltmeyi yaparak AYNI KARARI verir). HUKUKA UYGUN BULMADIĞI TAKDİRDE İSTİNAF BAŞVURUSUNUN KABULÜ İLE İLK DERECE MAHKEMESİ KARARININ KALDIRILMASINA karar verir; bu hâlde BİM İŞİN ESASI HAKKINDA YENİDEN BİR KARAR VERİR.",
  t: "İstinaf", d: 3
},
{
  q: "BİM hangi hallerde işin esasına girmeden dosyayı ilk derece mahkemesine gönderir?",
  o: ["İlk inceleme konularında verdiği kararın hatalı olduğu, görevsiz veya yetkisiz mahkemece davaya bakıldığı ya da reddedilmiş/yasaklanmış hakim tarafından davaya bakıldığı anlaşılmışsa", "Her halde esasa girer", "Sadece görevsizlik halinde", "Sadece süre aşımı halinde", "Hiçbir halde göndermez"],
  a: 0,
  e: "BİM şu hallerde İŞİN ESASINA KENDİSİ GİRMEDEN DOSYAYI İLK DERECE MAHKEMESİNE GÖNDERİR: ▪ İLK İNCELEME KONULARINDA VERDİĞİ KARARIN HATALI OLDUĞU anlaşılmışsa, ▪ GÖREVSİZ VEYA YETKİSİZ MAHKEMECE DAVAYA BAKILDIĞI anlaşılmışsa, ▪ REDDEDİLMİŞ YA DA YASAKLANMIŞ HAKİM TARAFINDAN DAVAYA BAKILDIĞI anlaşılmışsa.",
  t: "İstinaf", d: 3
},
{
  q: "İstinaf başvurusuna konu kararı veren hakim aynı davanın istinaf incelemesinde bulunabilir mi?",
  o: ["Bulunamaz; istinaf başvurusuna konu edilen kararı veren ya da karara katılan hâkim, aynı davanın istinaf yoluyla BİM'ce incelenmesinde bulunamaz", "Bulunabilir", "Sadece başkan olarak bulunabilir", "Tarafların onayıyla bulunabilir", "Bu konuda düzenleme yoktur"],
  a: 0,
  e: "İSTİNAF BAŞVURUSUNA KONU EDİLEN KARARI VEREN YA DA KARARA KATILAN HÂKİM, AYNI DAVANIN İSTİNAF YOLUYLA BÖLGE İDARE MAHKEMESİNCE İNCELENMESİNDE BULUNAMAZ. BÖLGE İDARE MAHKEMELERİNİN TEMYİZE AÇIK OLMAYAN KARARLARI KESİNDİR.",
  t: "İstinaf", d: 3
},
{
  q: "Hangi davalarda istinaf yoluna başvurulamaz?",
  o: ["İvedi yargılama usulü ile merkezi ve ortak sınavlara ilişkin yargılama usulüne tabi davalarda ve Danıştay Kanunu m. 24 gereği ilk derece mahkemesi olarak görev yapan Danıştay dairelerinin kararlarına karşı", "Vergi davalarında", "Tam yargı davalarında", "Tüm davalarda istinaf yolu açıktır", "Sadece iptal davalarında"],
  a: 0,
  e: "İSTİNAF YOLUNA BAŞVURULAMAYAN HALLER: ▪ İVEDİ YARGILAMA USULÜ ile MERKEZİ VE ORTAK SINAVLARA İLİŞKİN yargılama usulüne tabi olan davalarda, ▪ DANIŞTAY KANUNU'NUN 24. MADDESİ gereği İLK DERECE MAHKEMESİ OLARAK GÖREV YAPAN DANIŞTAY DAİRELERİNİN kararlarına karşı.",
  t: "İstinaf", d: 3
},

/* ---------- TEMYİZ ---------- */
{
  q: "Temyiz yoluna hangi kararlara karşı ve kaç gün içinde başvurulur?",
  o: ["Danıştay dava dairelerinin ilk derece mahkemesi sıfatıyla verdiği nihai kararlar ile BİM'lerin İYUK m. 46'da sınırlı sayılan kararlarına karşı Danıştay'da kararın tebliğinden itibaren 30 gün içinde", "Tüm kararlara karşı 60 gün içinde", "BİM'e 30 gün içinde", "Danıştay'a 15 gün içinde", "Sadece BİM kararlarına karşı"],
  a: 0,
  e: "DANIŞTAY DAVA DAİRELERİNİN İLK DERECE MAHKEMESİ SIFATIYLA VERDİĞİ NİHAİ KARARLARI ile BÖLGE İDARE MAHKEMELERİNİN İSTİNAF İNCELEMESİ SONUCUNDA VERDİĞİ KANUNDA SINIRLI ŞEKİLDE SAYILI BAZI KARARLARI (İYUK m. 46) başka kanunlarda aksine hüküm bulunsa dahi DANIŞTAY'DA, KARARIN TEBLİĞİNDEN İTİBAREN 30 GÜN İÇİNDE TEMYİZ EDİLEBİLİR. İVEDİ YARGILAMA USULÜ ile görülen davalarda verilen kararlara karşı da — istinaf yoluna değil — TEMYİZ yoluna gidilir.",
  t: "Temyiz", d: 3
},
{
  q: "Katılma yoluyla temyiz nedir?",
  o: ["Taraflardan biri kararı temyiz etmişse karşı taraf tebliğ tarihini izleyen otuz gün içinde cevap verebilir ve kararı süresinde temyiz etmemiş olsa bile bu dilekçesinde temyiz isteminde bulunabilir", "İki tarafın birlikte temyiz etmesidir", "Üçüncü kişinin temyiz etmesidir", "Savcının temyiz etmesidir", "Temyiz süresinin uzatılmasıdır"],
  a: 0,
  e: "İYUK m. 48/3: taraflardan biri kararı temyiz etmişse KARŞI TARAF TEBLİĞ TARİHİNİ İZLEYEN OTUZ GÜN İÇİNDE CEVAP VEREBİLİR. CEVAP VEREN, KARARI SÜRESİNDE TEMYİZ ETMEMİŞ OLSA BİLE DÜZENLEYECEĞİ DİLEKÇESİNDE TEMYİZ İSTEMİNDE BULUNABİLİR; bu takdirde bu dilekçeler TEMYİZ DİLEKÇESİ YERİNE GEÇER. Buna 'KATILMA YOLUYLA TEMYİZ' adı verilir.",
  t: "Temyiz", d: 3
},
{
  q: "Temyiz dilekçesinde İYUK m. 3'e aykırılık varsa eksiklikler ne kadar sürede tamamlanır?",
  o: ["On beş gün içinde; tamamlanmazsa temyiz isteminde bulunulmamış sayılmasına karar verilir", "30 gün içinde", "7 gün içinde", "60 gün içinde", "Süre verilmez"],
  a: 0,
  e: "Temyiz dilekçelerinin İYUK m. 3'teki esaslara göre düzenlenmesi gereklidir. NOKSANLIK VARSA, EKSİKLİKLERİN ONBEŞ GÜN İÇİNDE TAMAMLATILMASI hususu kararı veren Danıştay veya BİM'ce ilgiliye tebliğ olunur. BU SÜREDE EKSİKLİKLER TAMAMLANMAZSA TEMYİZ İSTEMİNDE BULUNULMAMIŞ SAYILMASINA karar verilir.",
  t: "Temyiz", d: 3
},
{
  q: "Temyiz dilekçesi verilirken harç ve giderlerin ödenmemiş olması halinde ne kadar süre verilir?",
  o: ["Yedi günlük süre verilir; aksi halde temyizden vazgeçilmiş sayılacağı bildirilir ve tamamlanmazsa kararın temyiz edilmemiş sayılmasına karar verilir", "15 gün", "30 gün", "Süre verilmez", "60 gün"],
  a: 0,
  e: "Temyiz dilekçesi verilirken GEREKLİ HARÇ VE GİDERLERİN TAMAMININ ÖDENMEMİŞ OLMASI halinde kararı veren merci tarafından verilecek YEDİ GÜNLÜK SÜRE içerisinde tamamlanması, AKSİ HALDE TEMYİZDEN VAZGEÇİLMİŞ SAYILACAĞI hususu temyiz edene yazılı bildirilir. Verilen süre içinde tamamlanmazsa ilgili merci KARARIN TEMYİZ EDİLMEMİŞ SAYILMASINA karar verir.",
  t: "Temyiz", d: 3
},
{
  q: "Temyiz isteminde bulunulmamış sayılması, temyiz edilmemiş sayılma ve temyiz isteminin reddi kararlarına karşı ne yapılabilir?",
  o: ["Tebliğ tarihini izleyen günden itibaren 7 gün içinde temyiz yoluna başvurulabilir", "30 gün içinde temyiz edilir", "İtiraz edilemez", "İstinaf yoluna başvurulur", "15 gün içinde temyiz edilir"],
  a: 0,
  e: "TEMYİZ İSTEMİNDE BULUNULMAMIŞ SAYILMASI, KARARIN TEMYİZ EDİLMEMİŞ SAYILMASI VE TEMYİZ İSTEMİNİN REDDİ KARARLARINA KARŞI TEBLİĞ TARİHİNİ İZLEYEN GÜNDEN İTİBAREN 7 GÜN İÇİNDE TEMYİZ YOLUNA BAŞVURULABİLİR. Temyizin KANUNİ SÜRE GEÇTİKTEN SONRA yapılması veya KESİN BİR KARAR hakkında olması halinde de kararı veren merci TEMYİZ İSTEMİNİN REDDİNE karar verir.",
  t: "Temyiz", d: 3
},
{
  q: "BİM'in temyizi mümkün kararları arasında aşağıdakilerden hangisi vardır?",
  o: ["Düzenleyici işlemlere karşı açılan iptal davaları, konusu 920 bin TL'yi aşan davalar, meslekten-kamu görevinden-öğrencilik statüsünden çıkarma sonucunu doğuran işlemlere karşı iptal davaları", "31 bin TL'yi geçmeyen davalar", "Tüm vergi davaları", "Sadece iptal davaları", "Tüm BİM kararları temyize açıktır"],
  a: 0,
  e: "BİM'İN TEMYİZİ MÜMKÜN BAZI KARARLARI: ▪ DÜZENLEYİCİ İŞLEMLERE karşı açılan iptal davaları, ▪ Konusu 920 BİN TL'Yİ AŞAN vergi davaları, tam yargı davaları ve idari işlemler hakkında açılan davalar, ▪ Konusu 275 BİN TL'Yİ AŞIP 920 BİN TL'Yİ AŞMAYAN ve istinafta KALDIRMA KARARI ÜZERİNE YENİDEN KARAR VERİLEN davalar, ▪ BELLİ BİR MESLEKTEN, KAMU GÖREVİNDEN VEYA ÖĞRENCİLİK STATÜSÜNDEN ÇIKARMA sonucunu doğuran işlemlere karşı iptal davaları, ▪ BELLİ BİR TİCARİ FAALİYETİN İCRASINI süresiz veya OTUZ GÜN YAHUT DAHA UZUN süreyle engelleyen işlemlere karşı iptal davaları.",
  t: "Temyiz", d: 3
},
{
  q: "Temyiz incelemesinde karar hukuka uygun bulunursa hangi kararlar verilebilir?",
  o: ["Karar onanır; sonucu hukuka uygun olmakla birlikte gerekçe doğru/yeterli bulunmazsa gerekçesi değiştirilerek onanır; yeniden yargılama gerektirmeyen maddi hatalar varsa karar düzeltilerek onanır", "Sadece onama kararı verilir", "Karar bozulur", "Gerekçe değiştirilemez", "Maddi hatalar düzeltilemez"],
  a: 0,
  e: "Temyiz incelemesinde KARAR HUKUKA UYGUN BULUNURSA: ▪ KARAR ONANIR. ▪ Kararın SONUCU HUKUKA UYGUN OLMAKLA BİRLİKTE GÖSTERİLEN GEREKÇEYİ DOĞRU BULMAZ VEYA EKSİK BULURSA, kararı GEREKÇESİNİ DEĞİŞTİREREK ONAR. ▪ Kararda YENİDEN YARGILAMA YAPILMASINA İHTİYAÇ DUYULMAYAN MADDİ HATALAR ile düzeltilmesi mümkün eksiklik veya yanlışlıklar varsa KARARI DÜZELTEREK ONAR.",
  t: "Temyiz", d: 3
},
{
  q: "BİM Danıştay'ın bozma kararına uymayıp ısrar ederse ne olur?",
  o: ["Israr kararının temyizi hâlinde talep, konusuna göre Danıştay İdari veya Vergi Dava Daireleri Kurulunca incelenir ve bu kurulların kararlarına uyulması zorunludur", "Israr edemez", "Danıştay dairesi tekrar inceler", "Karar kesinleşir", "Uyuşmazlık Mahkemesi karar verir"],
  a: 0,
  e: "BÖLGE İDARE MAHKEMESİ, Danıştayca verilen BOZMA KARARINA UYABİLECEĞİ GİBİ KARARINDA ISRAR DA EDEBİLİR. Bölge idare mahkemesi bozmaya uymayarak ısrar ederse, ISRAR KARARININ TEMYİZİ hâlinde talep, konusuna göre DANIŞTAY İDARİ VEYA VERGİ DAVA DAİRELERİ KURULUNCA incelenir ve karara bağlanır. DANIŞTAY İDARİ VE VERGİ DAVA DAİRELERİ KURULLARI KARARLARINA UYULMASI ZORUNLUDUR.",
  t: "Temyiz", d: 3
},
{
  q: "Danıştay dairelerinin ilk derece olarak baktığı davaların temyiz incelemesinde ısrar yetkisi var mıdır?",
  o: ["Yoktur; bu davaların temyiz incelemesi doğrudan İdari veya Vergi Dava Daireleri Kurullarınca yapıldığından Danıştay dairelerinin bozma kararı karşısında ısrar etme yetkisi bulunmamaktadır", "Vardır", "Sadece vergi dairelerinde vardır", "Genel Kurul karar verir", "Danıştay Başkanlar Kurulu karar verir"],
  a: 0,
  e: "DANIŞTAY DAİRELERİNİN İLK DERECE MAHKEMESİ OLARAK BAKTIĞI DAVALARIN TEMYİZ İNCELEMESİ DOĞRUDAN İDARİ VEYA VERGİ DAVA DAİRELERİ KURULLARINCA YAPILDIĞINDAN, DANIŞTAY DAİRELERİNİN TEMYİZ İNCELEMESİ SONUCUNDA VERİLEN BOZMA KARARI KARŞISINDA ISRAR ETME YETKİSİ BULUNMAMAKTADIR. Temyiz sonucu verilen karar dosyayla birlikte kararı veren mercie gönderilir ve dosyanın geldiği tarihten itibaren YEDİ GÜN içinde taraflara tebliğe çıkarılır.",
  t: "Temyiz", d: 3
},

/* ---------- KANUN YARARINA TEMYİZ ---------- */
{
  q: "Kanun yararına temyiz kim tarafından yapılabilir ve süresi ne kadardır?",
  o: ["İlgili bakanlıkların göstereceği lüzum üzerine veya kendiliğinden Danıştay Başsavcısı tarafından yapılır; herhangi bir süre öngörülmemiştir", "Taraflarca 30 gün içinde", "Danıştay Başkanı tarafından 60 gün içinde", "Adalet Bakanı tarafından 1 yıl içinde", "Savcı tarafından 15 gün içinde"],
  a: 0,
  e: "İdare ve vergi mahkemeleri ile BİM'lerin KESİN OLARAK VERDİĞİ KARARLAR ile İSTİNAF VEYA TEMYİZ İNCELEMESİNDEN GEÇMEDEN KESİNLEŞMİŞ bulunan kararlardan, NİTELİĞİ BAKIMINDAN YÜRÜRLÜKTEKİ HUKUKA AYKIRI BİR SONUCU İFADE EDENLER, İLGİLİ BAKANLIKLARIN GÖSTERECEĞİ LÜZUM ÜZERİNE VEYA KENDİLİĞİNDEN DANIŞTAY BAŞSAVCISI TARAFINDAN KANUN YARARINA TEMYİZ OLUNABİLİR. KANUN YARARINA TEMYİZ BAŞVURUSU İÇİN HERHANGİ BİR SÜRE ÖNGÖRÜLMEMİŞTİR.",
  t: "Kanun Yararına Temyiz", d: 3
},
{
  q: "Kanun yararına bozma kararının etkisi nedir?",
  o: ["Daha önce kesinleşmiş olan mercii kararının hukuki sonuçlarını kaldırmaz; bozma kararının bir örneği ilgili bakanlığa gönderilir ve Resmi Gazete'de yayımlanır", "Kesinleşmiş kararı ortadan kaldırır", "Sadece taraflar arasında etkilidir", "Resmi Gazete'de yayımlanmaz", "Yeniden yargılama yapılır"],
  a: 0,
  e: "Kanun yararına temyiz isteği yerinde görüldüğü takdirde KARAR, KANUN YARARINA BOZULUR. BU BOZMA KARARI, DAHA ÖNCE KESİNLEŞMİŞ OLAN MERCİİ KARARININ HUKUKİ SONUÇLARINI KALDIRMAZ. BOZMA KARARININ BİR ÖRNEĞİ İLGİLİ BAKANLIĞA GÖNDERİLİR VE RESMİ GAZETE'DE YAYIMLANIR.",
  t: "Kanun Yararına Temyiz", d: 3
},

/* ---------- YARGILAMANIN YENİLENMESİ ---------- */
{
  q: "Yargılamanın yenilenmesi talepleri hangi mahkeme tarafından karara bağlanır ve genel süre nedir?",
  o: ["Esas kararı vermiş olan mahkemece karara bağlanır; süre kural olarak 60 gündür", "Danıştay tarafından; 30 gün", "BİM tarafından; 60 gün", "Danıştay tarafından; 1 yıl", "Uyuşmazlık Mahkemesi tarafından"],
  a: 0,
  e: "Kanunda sınırlı olarak sayılmış nedenlere dayalı olarak KESİNLEŞMİŞ HÜKMÜN KALDIRILMASINI ve davanın 'YENİDEN TETKİKİNİ' sağlayan olağanüstü yasa yoluna 'YARGILAMANIN İADESİ' ya da 'YARGILAMANIN YENİLENMESİ' denir. YARGILAMANIN YENİLENMESİ TALEPLERİ ESAS KARARI VERMİŞ OLAN MAHKEMECE KARARA BAĞLANIR. SÜRE KURAL OLARAK 60 GÜNDÜR.",
  t: "Yargılamanın Yenilenmesi", d: 3
},
{
  q: "Yargılamanın yenilenmesi sebepleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Zorlayıcı sebeplerle elde edilemeyen belgenin sonradan ele geçirilmesi, karara esas belgenin sahteliği, bilirkişinin kasten gerçeğe aykırı beyanı, lehine karar verilenin hile kullanması, çekinmeye mecbur hakimin katılımı", "Kararın hatalı olduğu düşüncesi", "Yeni bir kanun çıkarılması", "Tarafların anlaşması", "İdarenin talebi"],
  a: 0,
  e: "YARGILAMANIN YENİLENMESİ SEBEPLERİ: 1) ZORLAYICI SEBEPLER veya lehine karar verilen tarafın eyleminden doğan sebeple ELDE EDİLEMEYEN BİR BELGENİN SONRADAN ELE GEÇİRİLMESİ, 2) Karara esas alınan belgenin SAHTELİĞİNE HÜKMEDİLMESİ, 3) Karara esas alınan İLAM HÜKMÜNÜN BOZULARAK ORTADAN KALKMASI, 4) BİLİRKİŞİNİN KASITLA GERÇEĞE AYKIRI BEYANDA BULUNMASI, 5) Lehine karar verilenin HİLE KULLANMASI, 6) VEKİL VEYA KANUNİ TEMSİLCİ OLMAYAN kimselerle davanın görülmesi, 7) ÇEKİNMEYE MECBUR başkan/üye/hakimin KATILMASIYLA karar verilmesi, 8) AYNI DAVA HAKKINDA AYKIRI KARAR verilmesi, 9) AİHM kararıyla SÖZLEŞME İHLALİNİN tespiti.",
  t: "Yargılamanın Yenilenmesi", d: 3
},
{
  q: "Aynı dava hakkında aykırı karar verilmesi ile AİHM ihlal kararı hallerinde yargılamanın yenilenmesi süresi ne kadardır?",
  o: ["Aynı dava hakkında aykırı karar halinde 10 yıl, AİHM ihlal kararı halinde kararın kesinleştiği tarihten itibaren 1 yıl", "İkisinde de 60 gün", "İkisinde de 1 yıl", "İkisinde de 10 yıl", "İkisinde de 5 yıl"],
  a: 0,
  e: "Yargılamanın yenilenmesi süresi kural olarak 60 GÜNDÜR. FAKAT: ▪ TARAFLARI, KONUSU VE SEBEBİ AYNI OLAN bir dava hakkında verilen karara AYKIRI YENİ BİR KARAR verilmiş bulunması durumunda 10 YIL; ▪ Hükmün İNSAN HAKLARINI VE ANA HÜRRİYETLERİ KORUMAYA DAİR SÖZLEŞMENİN veya eki protokollerin İHLÂLİ suretiyle verildiğinin AİHM'İN KESİNLEŞMİŞ KARARIYLA tespit edilmiş olması durumunda KARARIN KESİNLEŞTİĞİ TARİHTEN İTİBAREN 1 YILDIR.",
  t: "Yargılamanın Yenilenmesi", d: 3
},

/* ---------- KARŞILAŞTIRMALI YARGILAMA USULLERİ ---------- */
{
  q: "İvedi yargılama usulünde dava açma süresi ve ilk inceleme süresi ne kadardır?",
  o: ["Dava açma süresi 30 gün, ilk inceleme süresi 7 gündür", "60 gün ve 15 gün", "10 gün ve 7 gün", "30 gün ve 15 gün", "15 gün ve 7 gün"],
  a: 0,
  e: "İVEDİ YARGILAMA USULÜ: DAVA AÇMA SÜRESİ 30 GÜN, İLK İNCELEME SÜRESİ 7 GÜN, SAVUNMA SÜRESİ 15 GÜN (bir defaya mahsus 15 gün uzatılabilir), 2. DİLEKÇE/SAVUNMA YOK, YD KARARLARINA İTİRAZ YOK, dava dosyanın tekemmülünden itibaren 1 AY içinde karara bağlanır, İSTİNAF YOK, TEMYİZE BAŞVURU 15 GÜN, temyizin karara bağlanması 2 AY.",
  t: "Yargılama Usulleri", d: 3
},
{
  q: "Merkezi ve ortak sınavlara ilişkin yargılama usulünde dava açma ve savunma süreleri ne kadardır?",
  o: ["Dava açma süresi 10 gün, savunma süresi 3 gün (bir defaya mahsus 3 gün uzatılabilir)", "30 gün ve 15 gün", "10 gün ve 7 gün", "15 gün ve 3 gün", "60 gün ve 30 gün"],
  a: 0,
  e: "MERKEZİ VE ORTAK SINAVLARA İLİŞKİN YARGILAMA USULÜ (MEB ile ÖSYM tarafından yapılan merkezî ve ortak sınavlar, bunlara ilişkin iş-işlemler ve sınav sonuçları hakkında açılan davalar): DAVA AÇMA SÜRESİ 10 GÜN, İLK İNCELEME 7 GÜN, SAVUNMA SÜRESİ 3 GÜN (bir defaya mahsus 3 gün uzatılabilir), 2. DİLEKÇE YOK, YD İTİRAZI YOK, dava tekemmülden itibaren 15 GÜN içinde karara bağlanır, İSTİNAF YOK, TEMYİZ 5 GÜN, temyizin karara bağlanması 15 GÜN.",
  t: "Yargılama Usulleri", d: 3
},
{
  q: "Genel yargılama usulünde savunma süresi ve davanın karara bağlanma süresi ne kadardır?",
  o: ["Savunma süresi 30 gün (bir defaya mahsus 30 gün uzatılabilir), dava dosyanın tekemmülünden itibaren 6 ay içinde karara bağlanır", "15 gün ve 1 ay", "3 gün ve 15 gün", "30 gün ve 1 yıl", "60 gün ve 6 ay"],
  a: 0,
  e: "GENEL YARGILAMA USULÜ: DAVA AÇMA SÜRESİ 60 GÜN (vergide 30), İLK İNCELEME 15 GÜN, SAVUNMA SÜRESİ 30 GÜN (bir defaya mahsus 30 gün uzatılabilir), 2. DİLEKÇE/SAVUNMA VAR, YD KARARLARINA İTİRAZ VAR (7 gün), dava dosyanın TEKEMMÜLÜNDEN İTİBAREN 6 AY içinde karara bağlanır, İSTİNAF VAR (30 gün), TEMYİZE BAŞVURU 30 GÜN.",
  t: "Yargılama Usulleri", d: 3
},
{
  q: "İvedi yargılama usulü hangi işlemlerden doğan uyuşmazlıklarda uygulanır?",
  o: ["İhaleden yasaklama kararları hariç ihale işlemleri, acele kamulaştırma işlemleri, Özelleştirme Yüksek Kurulu kararları, Turizmi Teşvik Kanunu uyarınca satış-tahsis-kiralama, ÇED sonucu alınan kararlar ve 6306 sayılı Kanun uyarınca alınan Cumhurbaşkanı kararları", "Tüm iptal davalarında", "Sadece vergi davalarında", "Memur davalarında", "Sınav davalarında"],
  a: 0,
  e: "İVEDİ YARGILAMA USULÜ (İYUK 20/A) şu işlemlerden doğan uyuşmazlıklarda uygulanır: a) İHALEDEN YASAKLAMA KARARLARI HARİÇ İHALE İŞLEMLERİ, b) ACELE KAMULAŞTIRMA İŞLEMLERİ, c) ÖZELLEŞTİRME YÜKSEK KURULU kararları, d) 2634 sayılı TURİZMİ TEŞVİK KANUNU uyarınca yapılan SATIŞ, TAHSİS VE KİRALAMA işlemleri, e) 2872 sayılı ÇEVRE KANUNU uyarınca (idari yaptırım kararları hariç) ÇEVRESEL ETKİ DEĞERLENDİRMESİ sonucu alınan kararlar, f) 6306 sayılı AFET RİSKİ ALTINDAKİ ALANLARIN DÖNÜŞTÜRÜLMESİ Hakkında Kanun uyarınca alınan CUMHURBAŞKANI KARARLARI.",
  t: "Yargılama Usulleri", d: 3
},
{
  q: "Danıştay, bölge idare, idare ve vergi mahkemelerinde dosyalar ne kadar sürede sonuçlandırılır?",
  o: ["Tekemmül tarihinden itibaren en geç 6 ay içinde", "3 ay içinde", "1 yıl içinde", "30 gün içinde", "Süre öngörülmemiştir"],
  a: 0,
  e: "DANIŞTAY, BÖLGE İDARE, İDARE VE VERGİ MAHKEMELERİNDE DOSYALAR, TEKEMMÜL TARİHİNDEN İTİBAREN EN GEÇ 6 AY İÇİNDE SONUÇLANDIRILIR.",
  t: "Mahkeme Kararları", d: 2
},
{
  q: "Mahkeme kararlarında bulunması gereken hususlar arasında aşağıdakilerden hangisi vardır?",
  o: ["Kararın dayandığı hukuki sebepler ile gerekçesi ve hüküm, tazminat davalarında hükmedilen miktar, yargılama giderleri ve hangi tarafa yükletildiği, kararın oybirliği ile mi oyçokluğu ile mi verildiği", "Sadece hüküm", "Sadece tarafların adları", "Sadece gerekçe", "Tanık beyanları"],
  a: 0,
  e: "Mahkeme kararlarında: a) TARAFLARIN ve varsa vekillerinin AD-SOYAD/UNVAN VE ADRESLERİ, b) davacının ileri sürdüğü OLAYLARIN VE HUKUKİ SEBEPLERİN ÖZETİ ile davalının SAVUNMASININ ÖZETİ, c) Danıştay'da TETKİK HAKİMİ VE SAVCININ ad-soyadları ile DÜŞÜNCELERİ, d) DURUŞMA yapılıp yapılmadığı, e) KARARIN DAYANDIĞI HUKUKİ SEBEPLER İLE GEREKÇESİ VE HÜKÜM (tazminat davalarında HÜKMEDİLEN TAZMİNAT MİKTARI), f) YARGILAMA GİDERLERİ VE HANGİ TARAFA YÜKLETİLDİĞİ, g) kararın tarihi ve OYBİRLİĞİ Mİ OYÇOKLUĞU İLE Mİ verildiği, h) BAŞKAN VE ÜYELERİN ad-soyad-imzaları ve varsa KARŞI OYLARI, i) dairenin/mahkemenin adı ve ESAS-KARAR NUMARASI belirtilir.",
  t: "Mahkeme Kararları", d: 3
}

]);

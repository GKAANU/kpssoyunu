/* İdare Hukuku — 12. bölüm (idari yargılama usulünün genel özellikleri,
   idari yargı teşkilatı, Danıştay'ın ilk derece görevleri, iptal davası,
   görev ve yetki kuralları, Uyuşmazlık Mahkemesi, dava açma süreleri) */
KPSS.registerBank('idare', [

/* ---------- İYU GENEL ÖZELLİKLERİ ---------- */
{
  q: "İdari yargıda uygulanan yargılama usulünün özelliği nedir?",
  o: ["Yazılı yargılama usulü uygulanır; idari davalar duruşmasız olur, duruşma yapılsa bile tanık dinlenmez", "Sözlü yargılama usulü uygulanır", "Her davada duruşma yapılır", "Duruşmada tanık dinlenir", "Basit yargılama usulü uygulanır"],
  a: 0,
  e: "İdari yargıda YAZILI YARGILAMA USULÜ uygulanır. İDARİ DAVALAR DURUŞMASIZ OLUR. DURUŞMA, TALEP ÜZERİNE YAPILSA BİLE, duruşmada ancak DOSYADA BULUNAN İDDİA, KANIT VE BELGELERİN AÇIKLANMASI için yapılır. DURUŞMA YAPILSA BİLE TANIK DİNLENMEZ.",
  t: "İdari Yargılama Usulü", d: 2
},
{
  q: "İdari yargıda re'sen inceleme yöntemi ne anlama gelir?",
  o: ["Mahkeme, tarafların talebi olmasa da bilgi, belge, bilirkişi ve keşif isteyebilir", "Mahkeme dava açılmadan inceleme yapabilir", "Taraflar delil sunamaz", "Mahkeme yerindelik denetimi yapabilir", "Mahkeme kendiliğinden dava açabilir"],
  a: 0,
  e: "İdari yargıda RE'SEN İNCELEME YÖNTEMİ uygulanır: MAHKEME, TARAFLARIN TALEBİ OLMASA DA BİLGİ, BELGE, BİLİRKİŞİ VE KEŞİF İSTEYEBİLİR.",
  t: "İdari Yargılama Usulü", d: 2
},
{
  q: "İdari yargı denetiminin sınırı nedir?",
  o: ["Hukuka uygunluk denetimi ile sınırlıdır; yargı yetkisi hiçbir surette yerindelik denetimi şeklinde kullanılamaz ve idari eylem-işlem niteliğinde veya takdir yetkisini kaldıracak biçimde karar verilemez", "Hem hukukilik hem yerindelik denetimi yapılır", "Sadece yerindelik denetimi yapılır", "Mahkeme idare yerine işlem yapabilir", "Denetim sınırsızdır"],
  a: 0,
  e: "İdari yargı denetimi HUKUKA UYGUNLUK DENETİMİ İLE SINIRLIDIR. YARGI YETKİSİ, HİÇBİR SURETLE YERİNDELİK DENETİMİ ŞEKLİNDE KULLANILAMAZ. Yürütme görevinin kanunlarda gösterilen şekil ve esaslara uygun yerine getirilmesini KISITLAYACAK, İDARİ EYLEM VE İŞLEM NİTELİĞİNDE VEYA TAKDİR YETKİSİNİ KALDIRACAK BİÇİMDE YARGI KARARI VERİLEMEZ.",
  t: "İdari Yargılama Usulü", d: 2
},

/* ---------- İDARİ YARGI TEŞKİLATI ---------- */
{
  q: "Danıştay daireleri nasıl toplanır ve daireler arasında işbölümünü kim belirler?",
  o: ["Daireler başkan ve dört üye ile toplanır (1+4); işbölümü Başkanlık Kurulu tarafından belirlenir, görev uyuşmazlıkları Başkanlar Kurulu tarafından çözülür", "Başkan ve iki üye ile toplanır; işbölümü Başkanlar Kurulu belirler", "Başkan ve altı üye ile toplanır", "İşbölümü Genel Kurul belirler", "Görev uyuşmazlıklarını Başkanlık Kurulu çözer"],
  a: 0,
  e: "Danıştay 10 DAİREDEN oluşur (1. DAİRE İDARİ DAİRE; VERGİ DAVA DAİRELERİ 3, 7, 9; İDARİ DAVA DAİRELERİ 2, 4, 5, 6, 8, 10). Her dairede bir başkan ve yeteri kadar üye bulunur; DAİRELER BAŞKAN VE DÖRT ÜYE İLE TOPLANIR (1+4). İŞBÖLÜMÜ 'BAŞKANLIK KURULU' tarafından belirlenir; daireler arasındaki GÖREV UYUŞMAZLIKLARI 'BAŞKANLAR KURULU' tarafından çözülür.",
  t: "İdari Yargı Teşkilatı", d: 3
},
{
  q: "Bölge idare mahkemeleri nasıl kurulur ve kaldırılmasına kim karar verir?",
  o: ["İçişleri, Hazine ve Maliye ile Ticaret Bakanlıklarının görüşleri alınarak Adalet Bakanlığınca kurulur; kaldırılmasına aynı görüşler alındıktan sonra Adalet Bakanlığının teklifi üzerine HSK karar verir", "Kanunla kurulur ve kaldırılır", "Cumhurbaşkanlığı kararnamesiyle kurulur", "HSK tarafından kurulur ve kaldırılır", "Danıştay tarafından kurulur"],
  a: 0,
  e: "BİM'ler İÇİŞLERİ, HAZİNE VE MALİYE BAKANLIĞI İLE TİCARET BAKANLIKLARININ GÖRÜŞLERİ ALINARAK ADALET BAKANLIĞINCA KURULUR ve yargı çevreleri tespit olunur. KALDIRILMASINA VE YARGI ÇEVRELERİNİN DEĞİŞTİRİLMESİNE ise aynı bakanlıkların görüşü alındıktan sonra ADALET BAKANLIĞININ TEKLİFİ ÜZERİNE HSK TARAFINDAN KARAR VERİLİR. (Aynı usul İDARE VE VERGİ MAHKEMELERİ için de geçerlidir.)",
  t: "İdari Yargı Teşkilatı", d: 3
},
{
  q: "Bölge idare mahkemelerinde kaç daire bulunur ve başkan-üyeleri kim atar?",
  o: ["Biri idare diğeri vergi olmak üzere en az iki daire bulunur; başkan ve üyeliklerine HSK tarafından atama yapılır", "Tek daire bulunur ve Adalet Bakanı atar", "En az üç daire bulunur", "Danıştay tarafından atama yapılır", "Cumhurbaşkanı atar"],
  a: 0,
  e: "BÖLGE İDARE MAHKEMELERİNDE BİRİ İDARE DİĞERİ VERGİ olmak üzere EN AZ İKİ DAİRE bulunur. Gerekli hâllerde dairelerin sayısı, ADALET BAKANLIĞININ TEKLİFİ ÜZERİNE HSK'CA artırılıp azaltılabilir. Dairelerde bir başkan ile yeteri kadar üye bulunur; BAŞKAN VE ÜYELİKLERİNE HSK TARAFINDAN ATAMA YAPILIR.",
  t: "İdari Yargı Teşkilatı", d: 3
},
{
  q: "Bölge idare mahkemesinin görevleri bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["İlk derece mahkemesi değildir, hiçbir dava doğrudan BİM'de açılmaz; temel görevi istinaf başvurularını incelemektir ve savcı bulunmaz", "İlk derece mahkemesidir", "Temyiz merciidir", "Savcı bulunur", "Sadece vergi davalarına bakar"],
  a: 0,
  e: "BİM İLK DERECE MAHKEMESİ DEĞİLDİR; HİÇBİR DAVA DOĞRUDAN BİM'DE AÇILMAZ. TEMEL GÖREVİ İSTİNAF BAŞVURULARINI İNCELEYİP KARARA BAĞLAMAKTIR. Ayrıca kendine bağlı idare ve vergi mahkemeleri arasında oluşacak GÖREV/YETKİ UYUŞMAZLIKLARINI da çözer. BİM'DE SAVCI BULUNMAMAKTADIR.",
  t: "İdari Yargı Teşkilatı", d: 2
},
{
  q: "İdare ve vergi mahkemeleri nasıl karar alır?",
  o: ["Kural olarak kurul halinde (bir başkan ve iki üye) toplanır ve oy çokluğuyla karar alır; ancak parasal miktarı 270 bin TL'yi (2024) aşmayan davalar tek hakimle karara bağlanır", "Her zaman tek hakimle karar verir", "Beş üye ile karar verir", "Oybirliğiyle karar verir", "Başkan tek başına karar verir"],
  a: 0,
  e: "İdare ve vergi mahkemeleri KURAL OLARAK KURUL HALİNDE (BİR BAŞKAN VE İKİ ÜYE) toplanır ve OY ÇOKLUĞUYLA karar alır. ANCAK PARASAL MİKTARI 270 BİN TÜRK LİRASINI (2024 yılı için) AŞMAYAN DAVALAR TEK HAKİMLE karara bağlanır. İDARE VE VERGİ MAHKEMELERİNDE SAVCI BULUNMAZ.",
  t: "İdari Yargı Teşkilatı", d: 3
},
{
  q: "İdare mahkemesi ile vergi mahkemesi arasındaki temel fark nedir?",
  o: ["İdare mahkemesi genel görevli ilk derece mahkemesidir ve dava açma süresi 60 gündür; vergi mahkemesi özel görevli ilk derece mahkemesidir ve dava açma süresi 30 gündür", "İkisi de genel görevlidir", "İkisinde de süre 60 gündür", "Vergi mahkemesi genel görevlidir", "İkisi de özel görevlidir"],
  a: 0,
  e: "İDARE MAHKEMESİ: GENEL GÖREVLİ İLK DERECE MAHKEMESİDİR; GENEL DAVA AÇMA SÜRESİ 60 GÜNDÜR. VERGİ MAHKEMESİ: ÖZEL GÖREVLİ ilk derece mahkemesidir — genel bütçeye, il özel idareleri, belediye ve köylere ait VERGİ, RESİM VE HARÇLAR ile benzeri MALİ YÜKÜMLER ve bunların ZAM VE CEZALARI ile TARİFELERE ilişkin davalara bakar; DAVA AÇMA SÜRESİ 30 GÜNDÜR.",
  t: "İdari Yargı Teşkilatı", d: 2
},

/* ---------- DANIŞTAY İLK DERECE ---------- */
{
  q: "Danıştay Kanunu m. 24'e göre Danıştay'ın ilk derece mahkemesi olarak baktığı davalar arasında aşağıdakilerden hangisi vardır?",
  o: ["Cumhurbaşkanı kararları, CBK dışındaki düzenleyici işlemler, bakanlıkların ülke çapında uygulanacak düzenleyici işlemleri, birden çok idare veya vergi mahkemesinin yetki alanına giren işler", "Memur disiplin cezaları", "Belediye meclisi kararları", "Vergi cezaları", "Kamulaştırma işlemleri"],
  a: 0,
  e: "DANIŞTAY KANUNU m. 24'e göre Danıştay ilk derece olarak: 1) CUMHURBAŞKANI KARARLARI, 2) CBK DIŞINDAKİ DÜZENLEYİCİ İŞLEMLER, 3) BAKANLIKLAR ile kamu kuruluşları veya meslek kuruluşlarınca çıkarılan ve ÜLKE ÇAPINDA UYGULANACAK düzenleyici işlemler, 4) Danıştay İdari Dairesi/İdari İşler Kurulu kararları üzerine uygulanan işlemler, 5) DANIŞTAY YÜKSEK DİSİPLİN KURULU kararları, 6) BİRDEN ÇOK İDARE VEYA VERGİ MAHKEMESİNİN YETKİ ALANINA GİREN İŞLER, 7) TAHKİM ÖNGÖRÜLMEYEN İMTİYAZ sözleşmelerinden doğan davalar, 8) belediye ve il özel idarelerinin seçimle gelen ORGANLARININ ORGANLIK SIFATLARINI KAYBETMELERİ.",
  t: "Danıştay İlk Derece", d: 3
},
{
  q: "Özel yasalar gereği Danıştay'da ilk derece olarak görülen davalar arasında aşağıdakilerden hangisi vardır?",
  o: ["HSK'nın meslekten çıkarma kararlarına karşı iptal davaları ve özelleştirme uygulamalarına ilişkin idari davalar", "Tüm HSK kararları", "Tüm memur atama işlemleri", "Belediye kararları", "Trafik cezaları"],
  a: 0,
  e: "ÖZEL YASALARDAKİ DÜZENLEMELER: 6087 sayılı HSK Kanunu m. 33/5 — HSK'nın hâkim ve savcılarla ilgili 'MESLEKTEN ÇIKARMA KARARLARINA KARŞI açılan iptal davaları' ilk derece olarak Danıştay'da görülür. 4046 sayılı ÖZELLEŞTİRME KANUNU m. 27(a) — ÖZELLEŞTİRME UYGULAMALARINA ilişkin idari davalar. 6112 sayılı Kanun — OLAĞANÜSTÜ DÖNEMLERDE getirilen YAYIN YASAKLARI. 6491 sayılı TÜRK PETROL KANUNU'na göre bazı davalar.",
  t: "Danıştay İlk Derece", d: 3
},
{
  q: "Danıştay ilk derece mahkemesi olarak baktığı işlerde dava açma süresi ne kadardır?",
  o: ["60 gün", "30 gün", "90 gün", "15 gün", "45 gün"],
  a: 0,
  e: "DANIŞTAY İDARİ YARGIDA TEMYİZ MERCİİDİR; bazı davalara da İLK DERECE MAHKEMESİ olarak bakar. İLK DERECE MAHKEMESİ OLARAK BAKTIĞI İŞLERDE DAVA AÇMA SÜRESİ 60 GÜNDÜR.",
  t: "Danıştay İlk Derece", d: 2
},

/* ---------- İPTAL DAVASI ---------- */
{
  q: "İptal davası nasıl tanımlanır?",
  o: ["İdari işlemin yetki, şekil, sebep, konu ve maksat yönlerinden biri veya birkaçı nedeniyle menfaati ihlal edilenler tarafından işlemin ortadan kaldırılması için açılan davadır", "İdari eylemden doğan zararın giderilmesi için açılan davadır", "Sözleşmeden doğan uyuşmazlıklarda açılan davadır", "Tespit davasıdır", "İdarenin tazminat davasıdır"],
  a: 0,
  e: "İPTAL DAVASI: İDARİ İŞLEMİN YETKİ, ŞEKİL, SEBEP, KONU VE MAKSAT YÖNLERİNDEN BİRİ VEYA BİRKAÇI NEDENİYLE MENFAATİ İHLAL EDİLENLER TARAFINDAN İŞLEMİN ORTADAN KALDIRILMASI İÇİN AÇILAN DAVADIR.",
  t: "İptal Davası", d: 1
},
{
  q: "İptal davasının objektif (nesnel) niteliğinin sonuçları arasında aşağıdakilerden hangisi vardır?",
  o: ["Davalının hiç gösterilmemiş veya yanlış gösterilmiş olması davanın reddi sebebi sayılmaz, menfaat ihlali yeterlidir (hak ihlali şart değil) ve düzenleyici işlemin iptalinde karar genel etkilidir", "Davalının doğru gösterilmesi zorunludur", "Hak ihlali şarttır", "İptal kararı sadece davacıyı etkiler", "Menfaat ihlali yeterli değildir"],
  a: 0,
  e: "İptal davaları OBJEKTİF (NESNEL) NİTELİĞİ AĞIR BASAN davalardır. Sonuçları: ▪ İPTAL DAVASINDA DAVALININ HİÇ GÖSTERİLMEMİŞ OLMASI VEYA YANLIŞ GÖSTERİLMİŞ OLMASI DAVANIN REDDİ SEBEBİ OLARAK GÖRÜLMEZ. ▪ İptal davasının açılabilmesi için MENFAAT İHLALİ YETERLİDİR (HAK İHLALİ ŞART DEĞİL). ▪ İPTAL EDİLEN İŞLEM DÜZENLEYİCİ İŞLEM İSE, İPTAL KARARININ SONUCU GENEL ETKİLİDİR.",
  t: "İptal Davası", d: 3
},
{
  q: "İptal davası açma hakkından vazgeçilebilir mi ve bu hak kanunla kapatılabilir mi?",
  o: ["Kamu düzeni ile ilgili olduğu için bu haktan önceden (hak doğmadan) vazgeçmek mümkün değildir ve iptal davası açma hakkı kanunla kapatılamaz; anayasal bir haktır", "Vazgeçilebilir ve kanunla kapatılabilir", "Vazgeçilemez ama kanunla kapatılabilir", "Vazgeçilebilir ama kanunla kapatılamaz", "Sadece yazılı feragat geçerlidir"],
  a: 0,
  e: "İPTAL DAVASI AÇMA HAKKI KAMU DÜZENİ İLE İLGİLİDİR. Bu sebeple BU HAKTAN ÖNCEDEN (HAK DOĞMADAN) VAZGEÇMEK MÜMKÜN DEĞİLDİR. Ayrıca İPTAL DAVASI AÇMA HAKKI KANUN İLE KAPATILAMAZ; ANAYASAL BİR HAKTIR.",
  t: "İptal Davası", d: 3
},
{
  q: "İptal davası hangi tür işlemlere karşı açılabilir?",
  o: ["İcrai (hukuksal sonuç doğuran) ve kesin idari işlemler hakkında açılır", "Her türlü idari faaliyete karşı", "Hazırlık işlemlerine karşı da açılabilir", "Bilgilendirici işlemlere karşı", "İdarenin iç yazışmalarına karşı"],
  a: 0,
  e: "İptal davasının konusunu İDARİ İŞLEMLER teşkil eder ve iptal davaları İCRAİ (HUKUKSAL SONUÇ DOĞURAN) VE KESİN İDARİ İŞLEMLER HAKKINDA AÇILIR. İptal davasının amacı İDARİ İŞLEMİN HUKUKA UYGUNLUĞU KARİNESİNİ ÇÜRÜTMEKTİR. Öngörülmüşse ZORUNLU İDARİ BAŞVURU YOLLARININ TÜKETİLMİŞ OLMASI gerekir.",
  t: "İptal Davası", d: 2
},

/* ---------- GÖREV KURALLARI ---------- */
{
  q: "Görev kurallarının kamu düzenine ilişkin olmasının sonuçları arasında aşağıdakilerden hangisi vardır?",
  o: ["Taraflar anlaşarak görevli mahkemeyi değiştiremez, mahkeme her aşamada re'sen görevini araştırır, görevsiz mahkemede görülme bozma sebebidir ve görev kuralları kazanılmış hak doğurmaz", "Taraflar görevli mahkemeyi değiştirebilir", "Görev sadece davalının itirazıyla incelenir", "Görev kuralları kazanılmış hak doğurur", "Görevsizlik bozma sebebi değildir"],
  a: 0,
  e: "GÖREV KAMU DÜZENİNE İLİŞKİNDİR. Sonuçları: ▪ TARAFLAR ANLAŞARAK GÖREVLİ MAHKEMEYİ DEĞİŞTİREMEZLER. ▪ Görevsizlik itirazı yapılsın veya yapılmasın MAHKEME DAVANIN HER AŞAMASINDA RE'SEN görevli olup olmadığını araştırır. ▪ Davanın GÖREVSİZ MAHKEMECE GÖRÜLMESİ kanun yolları bakımından BOZMA SEBEBİDİR. ▪ GÖREV KURALLARI TARAFLAR İÇİN KAZANILMIŞ HAK DOĞURMAZ.",
  t: "Görev Kuralları", d: 3
},
{
  q: "Dava tamamen idari yargı kolunun görev alanı dışında ise ne yapılır?",
  o: ["Görevsizlik kararı verilerek davanın reddine karar verilir; dosya re'sen görevli adli yargı yerine gönderilemez", "Dosya adli yargıya gönderilir", "Dava esastan incelenir", "Uyuşmazlık Mahkemesine gönderilir", "Dava Danıştay'a gönderilir"],
  a: 0,
  e: "Açılmış olan dava TAMAMEN İDARİ YARGI KOLUNUN GÖREV ALANI DIŞINDA ise GÖREVSİZLİK KARARI VERİLEREK DAVANIN REDDİNE KARAR VERİLİR. (DOSYA RE'SEN GÖREVLİ ADLİ YARGI YERİNE GÖNDERİLEMEZ.) Buna karşılık dava İDARİ YARGININ GÖREV ALANINA GİRMEKLE BİRLİKTE YANLIŞ İDARİ YARGI YERİNDE açılmışsa, görevsizlik kararı verilir ancak MAHKEME DOSYAYI GÖREVLİ İDARİ YARGI YERİNE GÖNDERİR.",
  t: "Görev Kuralları", d: 3
},
{
  q: "Adli yargıda açılıp görev noktasından reddedilen davalar için idari yargıda dava açma süresi nedir?",
  o: ["Görevsizlik kararının kesinleşmesini izleyen günden itibaren 30 gün içinde; bu süre içinde açılan dava görevsiz yargı yerinde davanın açıldığı tarihte açılmış sayılır", "60 gün içinde", "15 gün içinde", "Süre yoktur", "90 gün içinde"],
  a: 0,
  e: "Danıştay'ın, idare ve vergi mahkemelerinin görevine girdiği halde ADLİ YARGI YERLERİNE açılmış davaların GÖREV NOKTASINDAN REDDİ halinde, GÖREVSİZLİK KARARININ KESİNLEŞMESİNİ İZLEYEN GÜNDEN İTİBAREN 30 GÜN İÇİNDE görevli idari yargı yerinde dava açılabilir. Bu süre içinde açılan dava, 'GÖREVSİZ YARGI YERİNDE DAVANIN AÇILDIĞI TARİHTE' AÇILMIŞ SAYILIR. 30 GÜNLÜK SÜRE GEÇMİŞ OLSA DAHİ İDARİ DAVA AÇMA SÜRESİ HENÜZ DOLMAMIŞSA bu süre içinde dava açılabilir.",
  t: "Görev Kuralları", d: 3
},
{
  q: "Görevsizlik kararı veren mahkemeler aynı bölge idare mahkemesinin yargı çevresinde ise görev uyuşmazlığı nasıl çözülür?",
  o: ["Bölge idare mahkemesince kesin olarak giderilir ve görevli mahkeme belirtilir", "Danıştay tarafından çözülür", "Uyuşmazlık Mahkemesi çözer", "HSK çözer", "Adalet Bakanlığı çözer"],
  a: 0,
  e: "Görevsizlik kararları veren mahkemeler AYNI BÖLGE İDARE MAHKEMESİNİN YARGI ÇEVRESİ İÇİNDE ise görev uyuşmazlığı BÖLGE İDARE MAHKEMESİNCE KESİN OLARAK GİDERİLİR. FARKLI BİM'lerin yargı çevresinde iseler görev uyuşmazlığı DANIŞTAY (BAŞKANLAR KURULU) tarafından kesin olarak giderilir. DANIŞTAY'IN İKİ DAİRESİ ARASINDAKİ görev uyuşmazlıklarını DANIŞTAY BAŞKANLAR KURULU karara bağlar.",
  t: "Görev Uyuşmazlıkları", d: 3
},
{
  q: "İdare veya vergi mahkemesi davanın Danıştay'ın görevinde olduğu kanısıyla görevsizlik kararı verirse süreç nasıl işler?",
  o: ["Dosya Danıştay'a gönderilir; Danıştay kendini görevli görürse davayı sonuçlandırır, mahkemeyi görevli sayarsa dosyayı geri gönderir ve Danıştay'ın görev konusundaki kararı kesindir", "Dosya BİM'e gönderilir", "Danıştay'ın kararı kesin değildir", "Dava reddedilir", "Uyuşmazlık Mahkemesine gönderilir"],
  a: 0,
  e: "İdare ve vergi mahkemeleri davanın Danıştay'ın görevi içinde olduğu kanısı ile görevsizlik kararı verdiklerinde DOSYA DANIŞTAY'A GÖNDERİLİR. DANIŞTAY, KENDİNİ GÖREVLİ GÖRÜRSE DAVAYI SONUÇLANDIRIR; EĞER İDARE VEYA VERGİ MAHKEMESİNİ GÖREVLİ SAYARSA DOSYAYI BU MAHKEMELERE GÖNDERİR. DANIŞTAY'IN GÖREV KONUSUNDA VERDİĞİ KARAR KESİNDİR; idare ve vergi mahkemeleri bu karara UYMAK ZORUNDADIRLAR.",
  t: "Görev Uyuşmazlıkları", d: 3
},

/* ---------- UYUŞMAZLIK MAHKEMESİ ---------- */
{
  q: "Uyuşmazlık Mahkemesi'nin görevi nedir?",
  o: ["Adlî ve idarî yargı mercileri arasındaki görev ve hüküm uyuşmazlıklarını kesin olarak çözümlemeye yetkilidir", "Anayasaya aykırılık iddialarını inceler", "Temyiz mercii olarak görev yapar", "İdari işlemleri iptal eder", "Hesap yargılaması yapar"],
  a: 0,
  e: "UYUŞMAZLIK MAHKEMESİ, ADLÎ VE İDARÎ YARGI MERCİLERİ ARASINDAKİ GÖREV VE HÜKÜM UYUŞMAZLIKLARINI KESİN OLARAK ÇÖZÜMLEMEYE YETKİLİDİR. ANAYASA MAHKEMESİ İLE DİĞER MAHKEMELER ARASINDAKİ görev uyuşmazlıklarında ANAYASA MAHKEMESİ'NİN KARARI ESAS ALINIR.",
  t: "Uyuşmazlık Mahkemesi", d: 2
},
{
  q: "Uyuşmazlık Mahkemesi'nin yapısı ve başkanı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Bir başkan ve altı asıl, altı yedek üyeden oluşur; başkanlığını Anayasa Mahkemesinin kendi üyeleri arasından görevlendireceği bir üye yapar ve bu üyenin AYM üyeliği sona ermez", "Başkanı Yargıtay Başkanıdır", "Bir başkan ve on üyeden oluşur", "Başkanı Danıştay Başkanıdır", "Başkanı Cumhurbaşkanı atar"],
  a: 0,
  e: "Uyuşmazlık Mahkemesi BİR BAŞKAN VE ALTI ASIL, ALTI YEDEK ÜYEDEN oluşur. Anayasa bu mahkemenin BAŞKANLIĞINI ANAYASA MAHKEMESİNİN KENDİ ÜYELERİ ARASINDAN GÖREVLENDİRECEĞİ BİR ÜYENİN YAPACAĞINI belirtmiştir. ANAYASA MAHKEMESİ'NİN UYUŞMAZLIK MAHKEMESİ'NE BAŞKAN SEÇECEĞİ ÜYENİN ANAYASA MAHKEMESİ ÜYELİĞİ SONA ERMEZ.",
  t: "Uyuşmazlık Mahkemesi", d: 3
},
{
  q: "Uyuşmazlık Mahkemesi üyeleri nasıl seçilir ve görev süreleri ne kadardır?",
  o: ["Yargıtay Hukuk Genel Kurulu ile Danıştay Genel Kurulu tarafından kendi daire başkanı ve üyeleri arasından üçer asıl ve üçer yedek üye seçilir; başkan, başkanvekili ve üyeler dört yıl için seçilir", "HSK tarafından seçilir; beş yıl", "Cumhurbaşkanı atar; dört yıl", "TBMM seçer; altı yıl", "Anayasa Mahkemesi seçer; dört yıl"],
  a: 0,
  e: "'YARGITAY HUKUK GENEL KURULU' ile 'DANIŞTAY GENEL KURULU' tarafından KENDİ DAİRE BAŞKANI VE ÜYELERİ ARASINDAN ÜÇER ASIL VE ÜÇER YEDEK ÜYE seçilir. Uyuşmazlık Mahkemesinin BAŞKANI, BAŞKANVEKİLİ VE ÜYELERİ DÖRT YIL İÇİN SEÇİLİR. GÖREV SÜRESİ BİTENLER YENİDEN SEÇİLEBİLİR.",
  t: "Uyuşmazlık Mahkemesi", d: 3
},

/* ---------- YETKİ KURALLARI ---------- */
{
  q: "İdari yargıda genel yetki kuralı nedir?",
  o: ["Yasalarda yetkili idari yargı yeri belirtilmemişse, yetkili yer dava konusu idari işlemi yapan idari kuruluşun bulunduğu yerdeki idare mahkemesidir", "Davacının ikametgahının bulunduğu yer mahkemesidir", "Her zaman Ankara idare mahkemesidir", "Danıştay'dır", "Taşınmazın bulunduğu yer mahkemesidir"],
  a: 0,
  e: "GENEL YETKİ KURALI: YASALARDA YETKİLİ İDARİ YARGI YERİNİN BELİRTİLMEMESİ HALİNDE, YETKİLİ İDARİ YARGI YERİ, DAVA KONUSU OLAN İDARİ İŞLEMİ YAPAN İDARİ KURULUŞUN BULUNDUĞU YERDEKİ İDARE MAHKEMESİDİR. ÖZEL YETKİ KURALLARININ BULUNDUĞU DURUMLARDA GENEL YETKİ KURALI UYGULANMAZ.",
  t: "Yetki Kuralları", d: 2
},
{
  q: "Kamu görevlilerinin atanması ve nakilleri ile ilgili davalarda yetkili mahkeme hangisidir?",
  o: ["Kamu görevlilerinin yeni veya eski görev yeri idare mahkemesi", "Sadece yeni görev yeri idare mahkemesi", "Sadece eski görev yeri idare mahkemesi", "Ankara idare mahkemesi", "Kamu görevlisinin ikametgahı mahkemesi"],
  a: 0,
  e: "KAMU GÖREVLİLERİNİN ATANMASI VE NAKİLLERİ ile ilgili davalarda yetkili mahkeme, KAMU GÖREVLİLERİNİN YENİ VEYA ESKİ GÖREV YERİ İDARE MAHKEMESİDİR.",
  t: "Yetki Kuralları", d: 3
},
{
  q: "Kamu görevlilerinin görevlerine son verilmesi, emekli edilmeleri ya da görevden uzaklaştırılmaları durumunda yetkili mahkeme hangisidir?",
  o: ["Kamu görevlisinin son görev yaptığı yer idare mahkemesi", "Yeni görev yeri idare mahkemesi", "Ankara idare mahkemesi", "İkametgahının bulunduğu yer mahkemesi", "Danıştay"],
  a: 0,
  e: "KAMU GÖREVLİLERİNİN GÖREVLERİNE SON VERİLMESİ, EMEKLİ EDİLMELERİ YA DA GÖREVDEN UZAKLAŞTIRILMALARI durumunda yetkili mahkeme, KAMU GÖREVLİSİNİN SON GÖREV YAPTIĞI YER İDARE MAHKEMESİDİR.",
  t: "Yetki Kuralları", d: 3
},
{
  q: "Kamu görevlilerinin görevle ilişiğinin kesilmesi sonucunu doğurmayan disiplin cezaları ile yükselme, sicil, intibak ve parasal hakları ile ilgili davalarda yetkili mahkeme hangisidir?",
  o: ["Kamu görevlisinin görevli bulunduğu yer idare mahkemesi", "Son görev yaptığı yer idare mahkemesi", "Yeni veya eski görev yeri idare mahkemesi", "Ankara idare mahkemesi", "Danıştay"],
  a: 0,
  e: "KAMU GÖREVLİLERİNİN GÖREVLE İLİŞİĞİNİN KESİLMESİ SONUCUNU DOĞURMAYAN DİSİPLİN CEZALARI ile YÜKSELME, SİCİL, İNTİBAK VE DİĞER ÖZLÜK VE PARASAL HAKLARI ile ilgili davalarda yetkili mahkeme, KAMU GÖREVLİSİNİN GÖREVLİ BULUNDUĞU YER İDARE MAHKEMESİDİR.",
  t: "Yetki Kuralları", d: 3
},
{
  q: "Hâkim ve savcıların mali-sosyal haklarına ve sicillerine ilişkin açacakları davalarda yetkili mahkeme hangisidir?",
  o: ["Hâkim veya savcının görev yaptığı yerin idari yargı yetkisi yönünden bağlı olduğu bölge idare mahkemesine en yakın bölge idare mahkemesinin bulunduğu yer idare mahkemesi", "Görev yaptığı yer idare mahkemesi", "Ankara idare mahkemesi", "Danıştay", "HSK"],
  a: 0,
  e: "HÂKİM VE SAVCILARIN MALİ VE SOSYAL HAKLARINA VE SİCİLLERİNE ilişkin konularla, MÜFETTİŞ HAL KÂĞITLARINA karşı açacakları ve idare mahkemelerinin görevine giren davalarda yetkili mahkeme, HÂKİM VEYA SAVCININ GÖREV YAPTIĞI YERİN İDARİ YARGI YETKİSİ YÖNÜNDEN BAĞLI OLDUĞU BÖLGE İDARE MAHKEMESİNE EN YAKIN BÖLGE İDARE MAHKEMESİNİN BULUNDUĞU YER İDARE MAHKEMESİDİR.",
  t: "Yetki Kuralları", d: 3
},
{
  q: "Taşınır ve taşınmaz mallarla ilgili davalarda yetkili mahkeme hangisidir?",
  o: ["Taşınır/taşınmaz malın bulunduğu yerdeki idare mahkemesi", "İşlemi yapan idarenin bulunduğu yer mahkemesi", "Davacının ikametgahı mahkemesi", "Ankara idare mahkemesi", "Danıştay"],
  a: 0,
  e: "TAŞINIR/TAŞINMAZ MALLARLA İLGİLİ DAVALARDA YETKİLİ MAHKEME, TAŞINIR/TAŞINMAZ MALIN BULUNDUĞU YERDEKİ İDARE MAHKEMESİDİR.",
  t: "Yetki Kuralları", d: 2
},
{
  q: "Milli Savunma Bakanlığı'nda çalışan personel ile askerlik hizmetini yerine getirenleri ilgilendiren askerî hizmete ilişkin uyuşmazlıklarda yetkili mahkeme hangisidir?",
  o: ["İlgilinin görev yaptığı yerin idari yargı yetkisi yönünden bağlı olduğu bölge idare mahkemesinin bulunduğu yerdeki idare mahkemesi", "Ankara idare mahkemesi", "Askeri Yüksek İdare Mahkemesi", "Danıştay", "En yakın BİM'in bulunduğu yer mahkemesi"],
  a: 0,
  e: "MİLLİ SAVUNMA BAKANLIĞI'NDA ÇALIŞAN KAMU PERSONELİ ile askerlik hizmetini yerine getiren YEDEK SUBAY VE YEDEK ASTSUBAYLAR ile ERBAŞ VE ERLERİ ilgilendiren ve ASKERÎ HİZMETE İLİŞKİN idari işlem ve eylemlerden doğan uyuşmazlıklarda İLGİLİNİN GÖREV YAPTIĞI YERİN İDARİ YARGI YETKİSİ YÖNÜNDEN BAĞLI OLDUĞU BÖLGE İDARE MAHKEMESİNİN BULUNDUĞU YERDEKİ İDARE MAHKEMESİ YETKİLİDİR.",
  t: "Yetki Kuralları", d: 3
},
{
  q: "Yetkisizlik kararı veren mahkemeler farklı bölge idare mahkemelerinin yargı çevresinde ise yetki uyuşmazlığı nasıl çözülür?",
  o: ["Danıştayca giderilir", "Bölge idare mahkemesince giderilir", "Uyuşmazlık Mahkemesi çözer", "HSK çözer", "Taraflar anlaşarak belirler"],
  a: 0,
  e: "YETKİSİZLİK KARARI VEREN idare veya vergi mahkemeleri AYNI BÖLGE İDARE MAHKEMESİNİN yargı çevresi içinde iseler yetki uyuşmazlığı BÖLGE İDARE MAHKEMESİNCE karara bağlanır. AYNI BİM'İN YARGI ÇEVRESİ İÇİNDE DEĞİLLERSE YETKİ UYUŞMAZLIĞI DANIŞTAYCA GİDERİLİR. Yetkiye ilişkin itirazlar YARGILAMANIN HER AŞAMASINDA yapılabilir ve mahkeme yetki sorununu KENDİLİĞİNDEN inceler.",
  t: "Yetki Uyuşmazlıkları", d: 3
},

/* ---------- DAVA AÇMA SÜRELERİ ---------- */
{
  q: "Özel kanunlarında ayrı süre gösterilmeyen hallerde dava açma süresi ne kadardır?",
  o: ["Danıştay'da ve idare mahkemelerinde altmış, vergi mahkemelerinde otuz gün", "Her yerde altmış gün", "Her yerde otuz gün", "Danıştay'da otuz, idare mahkemelerinde altmış gün", "Danıştay'da doksan gün"],
  a: 0,
  e: "DAVA AÇMA SÜRESİ, ÖZEL KANUNLARINDA AYRI SÜRE GÖSTERİLMEYEN HALLERDE DANIŞTAYDA VE İDARE MAHKEMELERİNDE ALTMIŞ, VERGİ MAHKEMELERİNDE OTUZ GÜNDÜR.",
  t: "Dava Açma Süreleri", d: 1
},
{
  q: "Bireysel işlemlerde dava açma süresi ne zaman işlemeye başlar?",
  o: ["İdari uyuşmazlıklarda yazılı bildirimi izleyen günden itibaren", "İşlemin yapıldığı günden itibaren", "İşlemin Resmi Gazetede yayımı ile", "Öğrenme tarihinden itibaren her halde", "Tebliğ tarihinden itibaren"],
  a: 0,
  e: "BİREYSEL İŞLEMLERDE, İDARİ UYUŞMAZLIKLARDA dava açma süresi YAZILI BİLDİRİMİ İZLEYEN GÜNDEN İTİBAREN işlemeye başlar.",
  t: "Dava Açma Süreleri", d: 2
},
{
  q: "Adresleri belli olmayanlara yapılan ilanlarda dava açma süresi ne zaman başlar?",
  o: ["Özel kanununda aksine hüküm bulunmadıkça son ilan tarihini izleyen günden itibaren on beş gün sonra", "Son ilan tarihini izleyen günden itibaren", "İlk ilan tarihinden itibaren", "Otuz gün sonra", "Öğrenme tarihinden itibaren"],
  a: 0,
  e: "ADRESLERİ BELLİ OLMAYANLARA yapılan ilanlarda ÖZEL KANUNUNDA AKSİNE BİR HÜKÜM BULUNMADIKÇA SÜRE, SON İLAN TARİHİNİ İZLEYEN GÜNDEN İTİBAREN ON BEŞ GÜN SONRA İŞLEMEYE BAŞLAR.",
  t: "Dava Açma Süreleri", d: 3
},
{
  q: "İlanı gereken düzenleyici işlemlerde dava süresi ne zaman başlar?",
  o: ["İlan ya da yayım tarihini izleyen günden itibaren", "İlan tarihinden on beş gün sonra", "Öğrenme tarihinden itibaren", "İşlemin yapıldığı tarihten itibaren", "Uygulama işlemi yapıldığında"],
  a: 0,
  e: "İLANI GEREKEN DÜZENLEYİCİ İŞLEMLERDE DAVA SÜRESİ, İLAN YA DA YAYIM TARİHİNİ İZLEYEN GÜNDEN İTİBAREN BAŞLAR.",
  t: "Dava Açma Süreleri", d: 2
},
{
  q: "Düzenleyici işlemin iptali için süresinde dava açılmamışsa, bu işleme dayanılarak birel işlem yapıldığında ilgililer ne yapabilir?",
  o: ["Sadece düzenleyici işlem veya sadece uygulanan işlem veya her ikisine birden iptali için dava açabilir; düzenleyici işlemin iptal edilmemiş olması, buna dayalı işlemin iptaline engel olmaz", "Sadece uygulama işlemine dava açabilir", "Hiçbir dava açamaz", "Sadece düzenleyici işleme dava açabilir", "Düzenleyici işlem iptal edilmedikçe uygulama işlemi iptal edilemez"],
  a: 0,
  e: "İLAN TARİHİNİ İZLEYEN GÜNDEN İTİBAREN SÜRESİ İÇİNDE DÜZENLEYİCİ İŞLEMİN İPTALİ İÇİN DAVA AÇILMAMIŞ OLSA DA bu düzenleyici işleme dayanılarak BİREL İŞLEM TESİS EDİLMESİ durumunda ilgililer SADECE DÜZENLEYİCİ İŞLEM VEYA SADECE UYGULANAN İŞLEM VEYA HER İKİSİNE BİRDEN iptali için dava açabilir. DÜZENLEYİCİ İŞLEMİN İPTAL EDİLMEMİŞ OLMASI, BU DÜZENLEMEYE DAYALI İŞLEMİN İPTALİNE ENGEL OLMAZ.",
  t: "Dava Açma Süreleri", d: 3
},
{
  q: "Tebliğ edilemeyen bireysel işlemler veya usulüne uygun ilan edilmeyen düzenleyici işlemler için dava süresi ne zaman başlar?",
  o: ["Öğrenme tarihinden itibaren; aksini yani ilgilinin daha önceden haberdar olduğunu somut verilerle idarenin kanıtlaması gerekir", "İşlemin yapıldığı tarihten itibaren", "Dava süresi işlemez", "İlan tarihinden itibaren", "İdarenin beyan ettiği tarihten itibaren"],
  a: 0,
  e: "İLGİLİSİNE TEBLİĞ EDİLEMEYEN BİREYSEL İŞLEMLER veya USULÜNE UYGUN BİÇİMDE İLAN EDİLMEYEN DÜZENLEYİCİ İŞLEMLER için dava süresi 'ÖĞRENME' TARİHİNDEN İTİBAREN BAŞLAR. İlgili ne zaman haberdar olduğunu beyan ederse kural olarak dava süresi bu öğrenme tarihinden başlar. BUNUN AKSİNİ, yani ilgilinin işlemden DAHA ÖNCESİNDEN HABERDAR OLDUĞUNU SOMUT VERİLERLE İDARENİN KANITLAMASI GEREKİR.",
  t: "Dava Açma Süreleri", d: 3
},
{
  q: "Vergi uyuşmazlıklarında tahakkuku tahsile bağlı olan vergilerde dava süresi ne zaman başlar?",
  o: ["Tahsilatın yapıldığı tarihi izleyen günden itibaren", "Tebliğ tarihinden itibaren", "Tescil tarihinden itibaren", "Ödeme tarihinden itibaren", "Beyan tarihinden itibaren"],
  a: 0,
  e: "Vergi, resim ve harçlar ile benzeri mali yükümler ve bunların zam ve cezalarından doğan uyuşmazlıklarda süre şu tarihleri izleyen günden başlar: ▪ TAHAKKUKU TAHSİLE BAĞLI OLAN vergilerde TAHSİLATIN; ▪ TEBLİĞ YAPILAN hallerde veya tebliğ yerine geçen işlemlerde TEBLİĞİN; ▪ TEVKİF YOLUYLA alınan vergilerde İSTİHKAK SAHİPLERİNE ÖDEMENİN; ▪ TESCİLE BAĞLI vergilerde TESCİLİN yapıldığı; ▪ İDARENİN DAVA AÇMASI GEREKEN konularda İLGİLİ MERCİ VEYA KOMİSYON KARARININ İDAREYE GELDİĞİ tarih.",
  t: "Dava Açma Süreleri", d: 3
},
{
  q: "Dava açma süresinin son gününün resmi tatile rastlaması halinde ne olur?",
  o: ["Süre, tatili izleyen ilk iş gününün akşamı çalışma saati sonunda biter; sürenin hesabında kural olarak resmi tatiller düşülmez, tatil günleri de hesaba katılır", "Süre tatil kadar uzar", "Tatil günleri süreden düşülür", "Süre durur", "Dava açılamaz"],
  a: 0,
  e: "SÜRENİN HESABINDA KURAL OLARAK RESMİ TATİLLER DÜŞÜLMEZ; TATİL GÜNLERİ DE SÜRENİN HESABINA KATILIR. YALNIZ, SÜRENİN SON GÜNÜNÜN RESMİ TATİLE RASTLAMASI durumunda SÜRE, TATİLİ İZLEYEN İLK İŞ GÜNÜNÜN AKŞAMI ÇALIŞMA SAATİ SONUNDA BİTER.",
  t: "Dava Açma Süreleri", d: 3
},
{
  q: "Dava açma süresinin son gününün adli tatile (çalışmaya ara verme zamanına) rastlaması halinde ne olur?",
  o: ["Süre, ara vermenin sona erdiği günü izleyen tarihten itibaren yedi gün uzamış sayılır", "Süre değişmez", "Süre otuz gün uzar", "Dava açılamaz", "Süre on beş gün uzar"],
  a: 0,
  e: "Sürenin son gününün ÇALIŞMAYA ARA VERME ZAMANINA — ADLİ TATİL — (20 TEMMUZ – 31 AĞUSTOS) rastlaması halinde SÜRE, ARA VERMENİN SONA ERDİĞİ GÜNÜ İZLEYEN TARİHTEN İTİBAREN YEDİ GÜN UZAMIŞ SAYILIR.",
  t: "Dava Açma Süreleri", d: 3
}

]);

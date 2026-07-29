/* İdare Hukuku ve İdari Yargılama Hukuku — 1. bölüm
   (idare kavramı, kaynaklar, merkezden/yerinden yönetim, yetki genişliği,
   kamu tüzel kişiliği, hiyerarşi ve idari vesayet) */
KPSS.registerBank('idare', [

/* ---------- İDARE KAVRAMI ---------- */
{
  q: "İdare kavramının 'fonksiyonel (yönetsel işlev)' anlamı nedir?",
  o: ["Toplumun genel ve sürekli ihtiyaçlarının karşılanması amacıyla yürütülen faaliyetleri ifade eder", "Faaliyette bulunan kamu kurum ve kuruluşlarını ifade eder", "Sadece merkezi idareyi ifade eder", "Sadece yerel yönetimleri ifade eder", "Yargı organlarını ifade eder"],
  a: 0,
  e: "İdare kavramı iki anlamda kullanılır. FAALİYET (FONKSİYONEL ANLAMDA İDARE / YÖNETSEL İŞLEV): toplumun GENEL VE SÜREKLİ İHTİYAÇLARININ KARŞILANMASI amacıyla yürütülen faaliyetler. TEŞKİLAT (ORGANİK ANLAMDA İDARE): bu ihtiyaçları karşılamak için faaliyette bulunan KAMU KURUM VE KURULUŞLARI.",
  t: "İdare Kavramı", d: 1
},
{
  q: "Milli güvenliğin sağlanmasından ve TSK'nın yurt savunmasına hazırlanmasından TBMM'ye karşı kim sorumludur?",
  o: ["Cumhurbaşkanı", "Milli Savunma Bakanı", "Genelkurmay Başkanı", "Milli Güvenlik Kurulu", "İçişleri Bakanı"],
  a: 0,
  e: "Milli güvenliğin sağlanmasından ve TÜRK SİLAHLI KUVVETLERİNİN YURT SAVUNMASINA HAZIRLANMASINDAN TBMM'YE KARŞI CUMHURBAŞKANI SORUMLUDUR.",
  t: "İdarenin Görevleri", d: 2
},
{
  q: "İdarenin, faaliyette bulunabilmesi için kurum içi düzenleme ve yazışmalar yapması, personel ve mal temin etmesi hangi görev başlığına girer?",
  o: ["İç düzen (öz yönetim) faaliyeti", "Kamu hizmeti sunmak", "Kolluk faaliyeti", "Planlama faaliyeti", "Özendirme ve destekleme"],
  a: 0,
  e: "İÇ DÜZEN (ÖZ YÖNETİM) FAALİYETİ: idarenin faaliyette bulunabilmesi için KURUM İÇİ DÜZENLEME VE YAZIŞMALAR gerçekleştirmesi (genelge, yönerge gibi), personel ve mal temin etmesi, personelini yetiştirmesi gibi DOĞRUDAN İDARE EDİLENLERE YÖNELİK OLMAYAN faaliyetlerdir.",
  t: "İdarenin Görevleri", d: 3
},
{
  q: "İdarenin görevleri arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Kanun yapmak", "Milli güvenliği korumak", "Kolluk faaliyetlerini yürütmek", "Kamu hizmetlerini sunmak", "Planlama faaliyetlerinde bulunmak"],
  a: 0,
  e: "İdarenin görevleri: MİLLİ GÜVENLİĞİ KORUMAK, KOLLUK FAALİYETLERİNİ YÜRÜTMEK, PLANLAMA FAALİYETLERİNDE BULUNMAK, KAMU HİZMETLERİNİ SUNMAK, ÖZENDİRME VE DESTEKLEMEDE BULUNMAK, İÇ DÜZEN (ÖZ YÖNETİM) FAALİYETİNDE BULUNMAK. Kanun yapmak YASAMA organının görevidir.",
  t: "İdarenin Görevleri", d: 1
},
{
  q: "İdari fonksiyonun özellikleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Süreklidir, kendiliğinden harekete geçer ve bireylerle doğrudan ilişki kurar", "Kesintilidir ve ancak başvuru üzerine harekete geçer", "Bireylerle hiç ilişki kurmaz", "Amacı özel çıkarı gerçekleştirmektir", "Sadece yargı kararıyla harekete geçer"],
  a: 0,
  e: "İDARİ FONKSİYONUN ÖZELLİKLERİ: ÜSTÜN VE AYRICALIKLI YETKİLER (KAMU GÜCÜ) kullanılarak yerine getirilir, İDARİ İŞLEM VEYA EYLEMLERLE yerine getirilir, SÜREKLİDİR, KENDİLİĞİNDEN HAREKETE GEÇER, BİREYLERLE DOĞRUDAN İLİŞKİ KURAR, amacı KAMU YARARINI gerçekleştirmektir, konusu GÜNLÜK TOPLUMSAL İHTİYAÇLARIN KARŞILANMASIDIR.",
  t: "İdari Fonksiyon", d: 2
},

/* ---------- İDARE HUKUKUNUN ÖZELLİKLERİ ---------- */
{
  q: "İdare hukukunun 'tedvin (kodifiye) edilmemiş' olması ne anlama gelir?",
  o: ["İdareyi düzenleyen kurallar tek bir kanunda toplanmamıştır", "İdare hukukunun yazılı kaynağı yoktur", "İdare hukuku sadece içtihatlardan oluşur", "İdare hukuku kuralları Anayasada yer almaz", "İdare hukuku kuralları yayımlanmaz"],
  a: 0,
  e: "İdare hukuku TEDVİN (KODİFİYE) EDİLMEMİŞ bir hukuk dalıdır: İDAREYİ DÜZENLEYEN KURALLAR TEK BİR KANUNDA TOPLANMAMIŞTIR. Medeni Kanun, Türk Ceza Kanunu gibi tek bir 'İdare Kanunu' bulunmamaktadır.",
  t: "İdare Hukukunun Özellikleri", d: 2
},
{
  q: "İdare hukuku hangi yüzyılda ortaya çıkmış genç bir hukuk dalıdır?",
  o: ["19. yüzyıl", "16. yüzyıl", "17. yüzyıl", "18. yüzyıl", "20. yüzyıl"],
  a: 0,
  e: "İdare hukuku GENÇ BİR HUKUK DALIDIR: 19. YÜZYILDA ORTAYA ÇIKMIŞTIR.",
  t: "İdare Hukukunun Özellikleri", d: 2
},
{
  q: "İdare hukukunun 'statü hukuku' olması ne anlama gelir?",
  o: ["Kurallarla önceden belirlenmiş hukuki statüler vardır; ilgili kişinin statünün koşullarını belirleme imkanı yoktur", "Statüler taraflarca serbestçe belirlenir", "Sadece memurlar için statü öngörülmüştür", "Statüler sözleşme ile kurulur", "Statü kavramı idare hukukunda yer almaz"],
  a: 0,
  e: "İdare hukuku STATÜ HUKUKUDUR: kurallarla ÖNCEDEN BELİRLENMİŞ HUKUKİ STATÜLER (hukuki durumlar) vardır — öğrencilik statüsü, memurluk statüsü, vatandaşlık statüsü gibi. İlgili kişinin, ÖZEL HUKUK İLİŞKİSİNDEN FARKLI OLARAK, içine girmek istediği STATÜNÜN KOŞULLARINI BELİRLEME İMKANI YOKTUR.",
  t: "İdare Hukukunun Özellikleri", d: 3
},
{
  q: "'Yetki ve usulde paralellik' ile 'kamu hizmetlerinin değişkenliği' ilkeleri idare hukukunun hangi özelliğine örnektir?",
  o: ["İçtihat hukuku olması", "Kodifiye edilmiş olması", "Statü hukuku olması", "Genç bir hukuk dalı olması", "Sosyal devlet ilkesi"],
  a: 0,
  e: "İdare hukuku İÇTİHAT HUKUKUDUR: idare hukukuna ilişkin pek çok kural — YETKİ VE USULDE PARALELLİK, KAMU HİZMETLERİNİN DEĞİŞKENLİĞİ İLKESİ gibi — MAHKEME İÇTİHATLARINDAN DOĞMUŞTUR.",
  t: "İdare Hukukunun Özellikleri", d: 3
},
{
  q: "İdare hukukunda taraflar arasındaki ilişki bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Taraflar arasında eşitlik yoktur; idare tek yanlı irade açıklamalarıyla özel kişilerin hukuksal durumlarında değişiklik yapabilir", "Taraflar tam eşittir", "Özel kişiler idareye emir verebilir", "İdare ancak sözleşme ile işlem yapabilir", "İdarenin hiçbir ayrıcalığı yoktur"],
  a: 0,
  e: "İdare hukukunda TARAFLAR ARASINDA EŞİTSİZLİK VARDIR: özel hukuk ilişkilerinden farklı olarak idare, kamu yararını gerçekleştirebilmek için TEK YANLI İRADE AÇIKLAMALARINDA bulunarak ÖZEL KİŞİLERİN HUKUKSAL DURUMLARINDA DEĞİŞİKLİK YAPABİLMEKTEDİR.",
  t: "İdare Hukukunun Özellikleri", d: 2
},

/* ---------- KAYNAKLAR ---------- */
{
  q: "İdare hukukunun asli kaynakları arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Doktrin", "Anayasa", "Kanun", "Cumhurbaşkanlığı kararnamesi", "Uluslararası antlaşmalar"],
  a: 0,
  e: "ASLİ KAYNAKLAR: ANAYASA, KANUN, CUMHURBAŞKANLIĞI KARARNAMESİ ve (yürürlükte bulunan) KANUN HÜKMÜNDE KARARNAME, ULUSLARARASI ANTLAŞMALAR, YÖNETMELİK ve (yürürlükte bulunan) TÜZÜK, ADSIZ DÜZENLEYİCİ İŞLEMLER (genelge, yönerge vb.), DANIŞTAY İÇTİHADI BİRLEŞTİRME KARARLARI. TALİ KAYNAKLAR: DOKTRİN, İÇTİHATLAR, İDARİ TEAMÜLLER.",
  t: "Kaynaklar", d: 2
},
{
  q: "İdare hukukunun tali (yardımcı) kaynakları hangileridir?",
  o: ["Doktrin, içtihatlar ve idari teamüller", "Anayasa, kanun ve yönetmelik", "Cumhurbaşkanlığı kararnamesi ve tüzük", "Danıştay içtihadı birleştirme kararları", "Uluslararası antlaşmalar"],
  a: 0,
  e: "TALİ KAYNAKLAR: DOKTRİN, İÇTİHATLAR ve İDARİ TEAMÜLLER. Dikkat: DANIŞTAY İÇTİHADI BİRLEŞTİRME KARARLARI bağlayıcı olduğu için ASLİ KAYNAKLAR arasında sayılır.",
  t: "Kaynaklar", d: 2
},
{
  q: "Anayasanın 'İdare' başlığı ALTINDA düzenlenen ilkeler arasında aşağıdakilerden hangisi vardır?",
  o: ["Yetki genişliği (m. 126) ve idari vesayet (m. 127)", "Hukuk devleti ilkesi (m. 2)", "Sosyal devlet ilkesi (m. 2)", "Dilekçe hakkı (m. 74)", "Kanun önünde eşitlik (m. 10)"],
  a: 0,
  e: "'İDARE' BAŞLIĞI ALTINDA düzenlenen ilkeler: idarenin kanuniliği, merkezden yönetim, yerinden yönetim, idarenin bütünlüğü, kamu tüzel kişiliğinin kanunla veya CBK ile kurulabileceği (m. 123), idarenin YARGISAL DENETİMİ ve MALİ SORUMLULUĞU (m. 125), YETKİ GENİŞLİĞİ (m. 126), İDARİ VESAYET (m. 127), savunma hakkı ve disiplin kararlarının yargı denetimi (m. 129), KANUNSUZ EMİR (m. 137). Hukuk devleti, sosyal devlet, dilekçe hakkı gibi ilkeler 'İdare' başlığı DIŞINDA düzenlenmiştir.",
  t: "Anayasal İlkeler", d: 3
},
{
  q: "Anayasanın 'İdare' başlığı DIŞINDA düzenlenen ilkeler arasında aşağıdakilerden hangisi vardır?",
  o: ["Kamu denetçiliği kurumuna başvuru hakkı (m. 74)", "İdarenin kanuniliği (m. 123)", "Yetki genişliği (m. 126)", "İdari vesayet (m. 127)", "Kanunsuz emir (m. 137)"],
  a: 0,
  e: "'İdare' başlığı DIŞINDA düzenlenen ilkeler: HUKUK DEVLETİ, SOSYAL DEVLET, DEMOKRATİK DEVLET, LAİK DEVLET (m. 2), DEVLETİN BÖLÜNMEZLİĞİ (m. 3), DEVLETİN AMAÇ VE GÖREVLERİ (m. 5), KANUN ÖNÜNDE EŞİTLİK (m. 10), DİLEKÇE HAKKI, BİLGİ EDİNME HAKKI ve KAMU DENETÇİLİĞİ KURUMUNA BAŞVURU HAKKI (m. 74).",
  t: "Anayasal İlkeler", d: 3
},

/* ---------- MERKEZDEN / YERİNDEN YÖNETİM ---------- */
{
  q: "Anayasanın 123. maddesine göre idarenin kuruluş ve görevleri hangi esaslara dayanır?",
  o: ["Merkezden yönetim ve yerinden yönetim esaslarına", "Sadece merkezden yönetim esasına", "Sadece yerinden yönetim esasına", "Yetki genişliği ve vesayet esaslarına", "Hiyerarşi esasına"],
  a: 0,
  e: "AY m. 123: 'İDARENİN KURULUŞ VE GÖREVLERİ, MERKEZDEN YÖNETİM VE YERİNDEN YÖNETİM ESASLARINA DAYANIR.'",
  t: "Merkezden-Yerinden Yönetim", d: 1
},
{
  q: "Merkezden yönetimin özellikleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Bütün gelir ve giderler merkezde toplanmıştır; bütün yetki ve sorumluluk merkeze aittir", "Ayrı tüzel kişilikler vardır", "Ayrı bütçe ve malvarlığı vardır", "Kamu görevlileri vesayet denetimine tabidir", "Kararlar yerel organlarca alınır"],
  a: 0,
  e: "MERKEZDEN YÖNETİMİN ÖZELLİKLERİ: bütün hizmetler BAŞKENT'ten sağlanır, bütün PLAN, PROGRAM VE KARARLAR MERKEZDEN alınır, bütün GELİR VE GİDERLER MERKEZDE TOPLANMIŞTIR, bütün YETKİ VE SORUMLULUK MERKEZE aittir, taşrada HİYERARŞİ bağıyla bağlı bir taşra örgütü kurulmuştur.",
  t: "Merkezden-Yerinden Yönetim", d: 2
},
{
  q: "Merkezden yönetimin yararları arasında aşağıdakilerden hangisi vardır?",
  o: ["Hizmetlerin yeknesak (eşit) biçimde yürütülmesi ve mali denetimin daha kolay olması", "Kırtasiyeciliğin az olması", "Demokratik esaslara uygun olması", "Hizmetlerin gereksinimlere uygun yürütülmesi", "Yöresel gereksinimlerin öne çıkması"],
  a: 0,
  e: "MERKEZDEN YÖNETİMİN YARARLARI: GÜÇLÜ BİR DEVLET YÖNETİMİ sağlar, hizmetler DAHA AZ HARCAMAYLA ve RASYONEL biçimde yürütülür, hizmetler YEKNESAK (EŞİT) biçimde yürütülür, MALİ DENETİM DAHA KOLAYDIR, kamu görevlileri YEREL ETKİLERDEN KURTULUR.",
  t: "Merkezden-Yerinden Yönetim", d: 2
},
{
  q: "Merkezden yönetimin sakıncaları arasında aşağıdakilerden hangisi vardır?",
  o: ["Bürokrasi ve kırtasiyeciliğe yol açması, hizmetlerin gecikmesi ve yöresel gereksinimlerin göz ardı edilmesi", "Ülkenin bütünlüğünün bozulma tehlikesi", "Partizanca uygulamalara yol açması", "Kaynak israfına neden olması", "Mali denetimde güçlük"],
  a: 0,
  e: "MERKEZDEN YÖNETİMİN SAKINCALARI: BÜROKRASİ VE KIRTASİYECİLİĞE yol açar, hizmetler GECİKEREK yürütülür, YÖRESEL GEREKSİNİMLER GÖZ ARDI EDİLİR, DEMOKRATİK İLKELERE UYGUN DEĞİLDİR. Diğer seçenekler YERİNDEN YÖNETİMİN sakıncalarıdır.",
  t: "Merkezden-Yerinden Yönetim", d: 3
},
{
  q: "Yerinden yönetimin (adem-i merkeziyet) sakıncaları arasında aşağıdakilerden hangisi vardır?",
  o: ["Ülkenin bütünlüğünün bozulma tehlikesi, partizanca uygulamalar ve kaynak israfı", "Bürokrasi ve kırtasiyecilik", "Hizmetlerin gecikmesi", "Yöresel gereksinimlerin göz ardı edilmesi", "Kamu görevlilerinin yerel etkilerden kurtulması"],
  a: 0,
  e: "YERİNDEN YÖNETİMİN SAKINCALARI: ÜLKENİN BÜTÜNLÜĞÜNÜN BOZULMA TEHLİKESİ, PARTİZANCA UYGULAMALARA yol açabilmesi, hizmetlerin YEKNESAK BİÇİMDE UYGULANMAMASI, MALİ DENETİMDE GÜÇLÜKLER, KAYNAK İSRAFI. YARARLARI ise: demokratik esaslara uygunluk, kırtasiyecilik ve bürokrasinin az olması, hizmetlerin gereksinimlere uygun yürütülmesi.",
  t: "Merkezden-Yerinden Yönetim", d: 3
},
{
  q: "Yerinden yönetim kaç türlüdür ve hangileridir?",
  o: ["Üç türlü: yer yönünden yerinden yönetim (mahalli idareler), hizmet yönünden yerinden yönetim (kamu kurumları) ve kamu kurumu niteliğindeki meslek kuruluşları", "İki türlü: mahalli idareler ve kamu kurumları", "Dört türlü", "Tek türlü: mahalli idareler", "Beş türlü"],
  a: 0,
  e: "Yerinden yönetim ÜÇ TÜRLÜDÜR: YER YÖNÜNDEN YERİNDEN YÖNETİM (Mahalli idareler - Yerel Yönetimler), HİZMET YÖNÜNDEN YERİNDEN YÖNETİM (Kamu Kurumları) ve KAMU KURUMU NİTELİĞİNDEKİ MESLEK KURULUŞLARI.",
  t: "Merkezden-Yerinden Yönetim", d: 2
},
{
  q: "Yerinden yönetim kuruluşlarının kamu görevlileri bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Merkezi idare hiyerarşisine tabi değildir, merkezi idarenin vesayet denetimine tabidir", "Merkezi idare hiyerarşisine tabidir", "Hiçbir denetime tabi değildir", "Sadece yargı denetimine tabidir", "Cumhurbaşkanının hiyerarşisi altındadır"],
  a: 0,
  e: "Yerinden yönetim kuruluşlarının KAMU GÖREVLİLERİ MERKEZİ İDARE HİYERARŞİSİNE TABİ DEĞİLDİR; MERKEZİ İDARENİN VESAYET DENETİMİNE TABİDİR. Ayrıca devlet tüzel kişiliği dışında AYRI TÜZEL KİŞİLİKLERİ, AYRI BÜTÇE VE MALVARLIĞI vardır.",
  t: "Merkezden-Yerinden Yönetim", d: 2
},

/* ---------- YETKİ GENİŞLİĞİ ---------- */
{
  q: "Yetki genişliği (adem-i temerküz / tevsi-i mezuniyet) ilkesi hangi Anayasa maddesinde düzenlenmiştir?",
  o: ["m. 126", "m. 123", "m. 125", "m. 127", "m. 137"],
  a: 0,
  e: "YETKİ GENİŞLİĞİ ilkesi 1982 Anayasası'nın 126. MADDESİNDE güvence altına alınmıştır. 1924 ve 1961 Anayasalarında da yer verilmiştir.",
  t: "Yetki Genişliği", d: 2
},
{
  q: "Yetki genişliği ilkesi kim tarafından ve hangi kapsamda kullanılır?",
  o: ["Vali tarafından, merkezi idarenin yürütmekle ödevli olduğu bir hizmetin (milli kamu hizmetinin) yürütülmesi için", "Kaymakam tarafından, mahalli idare hizmetleri için", "Belediye başkanı tarafından", "Vali tarafından, mahalli idarelerin görev alanına giren işler için", "Bakan tarafından"],
  a: 0,
  e: "Yetki genişliği VALİ TARAFINDAN kullanılır. Vali bu yetkiyi MERKEZİ İDARENİN YÜRÜTMEKLE ÖDEVLİ OLDUĞU BİR HİZMETİN (MİLLİ BİR KAMU HİZMETİNİN) yürütülmesi için kullanır — MAHALLİ İDARELERİN GÖREV ALANINA GİREN BİR İŞ İÇİN DEĞİL. Yetkiyi merkez adına kullanan vali, MERKEZİ İDARENİN HİYERARŞİSİNE DAHİLDİR.",
  t: "Yetki Genişliği", d: 2
},
{
  q: "Yetki genişliği ilkesi hangi birim için öngörülmüştür?",
  o: ["Sadece il genel idaresinin yönetimi için", "İl ve ilçe genel idaresi için", "Sadece ilçe genel idaresi için", "Tüm mahalli idareler için", "Bölge teşkilatları için"],
  a: 0,
  e: "Yetki genişliği SADECE İL GENEL İDARESİNİN YÖNETİMİ İÇİN ÖNGÖRÜLMÜŞTÜR. İlçe idaresi (kaymakam) için yetki genişliği söz konusu değildir.",
  t: "Yetki Genişliği", d: 2
},
{
  q: "Yetki genişliği ilkesine dayanarak hareket eden valinin bütçesi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Kendisine ait bir bütçesi, gelir ve gider kalemi bulunmaz; giderler merkezi idare bütçesinden karşılanır", "Kendisine ait ayrı bir bütçesi vardır", "İl özel idaresi bütçesinden karşılanır", "Belediye bütçesinden karşılanır", "Elde edilen gelir valilikte kalır"],
  a: 0,
  e: "Yetki genişliğine dayanan valinin KENDİSİNE AİT BİR BÜTÇESİ, GELİR VE GİDER KALEMİ BULUNMAMAKTADIR. Yürütülen hizmetin GİDERLERİ MERKEZİ İDARENİN BÜTÇESİNDEN karşılanır; BİR GELİR ELDE EDİLİRSE YİNE MERKEZİ İDARENİN GELİRLERİ ARASINA KATILIR.",
  t: "Yetki Genişliği", d: 3
},
{
  q: "Yetki genişliğinin hangi konularda söz konusu olacağı nasıl belirlenir?",
  o: ["Kanunla belirtilir", "Cumhurbaşkanlığı kararnamesiyle belirtilir", "Vali tarafından belirlenir", "Yönetmelikle belirtilir", "İl genel meclisi kararıyla belirlenir"],
  a: 0,
  e: "YETKİ GENİŞLİĞİNİN HANGİ KONULARDA SÖZ KONUSU OLACAĞI KANUNLA BELİRTİLİR. Yetki genişliği ANAYASAL BİR İLKEDİR.",
  t: "Yetki Genişliği", d: 2
},

/* ---------- KAMU TÜZEL KİŞİLİĞİ ---------- */
{
  q: "Anayasa m. 123'e göre kamu tüzel kişiliği nasıl kurulur?",
  o: ["Kanunla veya Cumhurbaşkanlığı kararnamesiyle", "Sadece kanunla", "Sadece Cumhurbaşkanlığı kararnamesiyle", "Yönetmelikle", "Bakan onayıyla"],
  a: 0,
  e: "AY m. 123: 'KAMU TÜZEL KİŞİLİĞİ, KANUNLA VEYA CUMHURBAŞKANLIĞI KARARNAMESİYLE KURULUR.' Kanunla kurulanlara örnek: YÖK, RTÜK, Kamu Denetçiliği Kurumu, EPDK, BDDK. CBK ile kurulanlara örnek: CB ofisleri, Türkiye Uzay Ajansı, DSİ, TÜBİTAK.",
  t: "Kamu Tüzel Kişiliği", d: 2
},
{
  q: "Kamu tüzel kişiliği DOĞRUDAN ANAYASA ile tanınan kuruluşlar arasında aşağıdakilerden hangisi vardır?",
  o: ["İl özel idaresi, belediye, köy idaresi, üniversiteler, TRT, AKDTYK ve kamu kurumu niteliğindeki meslek kuruluşları", "RTÜK, SPK ve BDDK", "TÜBİTAK ve DSİ", "Cumhurbaşkanlığı ofisleri", "Kalkınma ajansları"],
  a: 0,
  e: "Kamu tüzel kişiliği DOĞRUDAN ANAYASA ile tanınanlar: 1) İL ÖZEL İDARESİ, 2) BELEDİYE İDARESİ, 3) KÖY İDARESİ, 4) ÜNİVERSİTELER, 5) DEVLETÇE KURULACAK TEK RADYO TELEVİZYON KURUMU (TRT), 6) ATATÜRK KÜLTÜR DİL VE TARİH YÜKSEK KURUMU, 7) KAMU KURUMU NİTELİĞİNDEKİ MESLEK KURULUŞLARI.",
  t: "Kamu Tüzel Kişiliği", d: 3
},
{
  q: "Kamu tüzel kişilerinin hizmet malları bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Devlet malı statüsünde korunur; haczedilemez, satılamaz, üzerinde sınırlı ayni hak tesis edilemez, zamanaşımıyla kazanılamaz", "Serbestçe haczedilebilir", "Zamanaşımıyla kazanılabilir", "Üzerinde her türlü ayni hak kurulabilir", "Özel mal statüsündedir"],
  a: 0,
  e: "Kamu tüzel kişilerinin yürütmekle yükümlü olduğu kamu hizmetlerinde kullandığı mallar HİZMET MALLARI olarak nitelendirilir ve DEVLET MALI STATÜSÜNDE özel düzenlemelerle korunur: HACZEDİLEMEZ, SATILAMAZ, ÜZERİNDE SINIRLI AYNİ HAK TESİS EDİLEMEZ, ZAMANAŞIMI YOLUYLA KAZANILAMAZ.",
  t: "Kamu Tüzel Kişiliği", d: 3
},
{
  q: "Kamu tüzel kişisi olmanın sonuçları arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Mal ve hizmet alımlarında sınırsız sözleşme hürriyetine sahip olmak", "Kamulaştırma yetkisine sahip olmak", "Yönetmelik çıkarabilmek", "Tek yanlı işlem yapma ve re'sen icra kabiliyeti", "İşlemlerinin hukuka uygunluk karinesinden yararlanması"],
  a: 0,
  e: "Kamu tüzel kişileri MAL VE HİZMET ALIMLARINDA/SATIŞLARINDA KANUNLARDA ÖNGÖRÜLEN USULLERE UYMAK ZORUNDADIR — yani SÖZLEŞME HÜRRİYETLERİ BULUNMUYOR. Diğer sonuçlar: hak ve borç ehliyeti, kendi malvarlığı ve bütçesi, KAMULAŞTIRMA YETKİSİ, YÖNETMELİK ÇIKARMA, TEK YANLI İŞLEM VE RE'SEN İCRA, HUKUKA UYGUNLUK KARİNESİ, vergi istisna/muafiyeti, uyuşmazlıkların idari yargıda çözülmesi.",
  t: "Kamu Tüzel Kişiliği", d: 3
},
{
  q: "5018 sayılı Kanun'un (I) sayılı cetvelinde yer alan 'Genel Bütçe Kapsamındaki Kamu İdareleri'nin tüzel kişiliği bakımından durumu nedir?",
  o: ["Kamu tüzel kişilikleri bulunmamaktadır", "Hepsinin kamu tüzel kişiliği vardır", "Sadece bakanlıkların tüzel kişiliği vardır", "Özel hukuk tüzel kişisidirler", "Tüzel kişilikleri Cumhurbaşkanlığı kararnamesiyle verilir"],
  a: 0,
  e: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu'nun (I) SAYILI CETVELİNDEKİ kuruluşlar GENEL BÜTÇE KAPSAMINDAKİ KAMU İDARELERİDİR ve BU KURULUŞLARIN KAMU TÜZEL KİŞİLİĞİ BULUNMAMAKTADIR. Ancak II, III ve IV SAYILI CETVELLERDEKİ kuruluşların KAMU TÜZEL KİŞİLİKLERİ VARDIR.",
  t: "Kamu Tüzel Kişiliği", d: 3
},
{
  q: "5018 sayılı Kanun'un (III) sayılı cetveli hangi kuruluşları kapsar?",
  o: ["Düzenleyici ve denetleyici kurumları", "Genel bütçe kapsamındaki kamu idarelerini", "Özel bütçeli idareleri", "Sosyal güvenlik kurumlarını", "Mahalli idareleri"],
  a: 0,
  e: "(I) SAYILI CETVEL: Genel bütçe kapsamındaki kamu idareleri. (II) SAYILI CETVEL: Özel bütçeli idareler (YÖK, üniversiteler ve özel bütçeli diğer idareler). (III) SAYILI CETVEL: DÜZENLEYİCİ VE DENETLEYİCİ KURUMLAR. (IV) SAYILI CETVEL: SOSYAL GÜVENLİK KURUMLARI (SGK, İŞKUR).",
  t: "Kamu Tüzel Kişiliği", d: 2
},
{
  q: "5018 sayılı Kanun'un (IV) sayılı cetvelinde yer alan sosyal güvenlik kurumları hangileridir?",
  o: ["Sosyal Güvenlik Kurumu ve Türkiye İş Kurumu Genel Müdürlüğü", "Sadece Sosyal Güvenlik Kurumu", "SGK ve Aile ve Sosyal Hizmetler Bakanlığı", "SGK ve Vakıflar Genel Müdürlüğü", "İŞKUR ve Mesleki Yeterlilik Kurumu"],
  a: 0,
  e: "(IV) SAYILI CETVEL — SOSYAL GÜVENLİK KURUMLARI: 1) SOSYAL GÜVENLİK KURUMU (SGK), 2) TÜRKİYE İŞ KURUMU GENEL MÜDÜRLÜĞÜ (İŞKUR).",
  t: "Kamu Tüzel Kişiliği", d: 2
},
{
  q: "Aşağıdaki kuruluşlardan hangisi 5018 sayılı Kanun'un (III) sayılı cetvelinde (düzenleyici ve denetleyici kurumlar) YER ALMAZ?",
  o: ["Türkiye Uzay Ajansı", "Radyo ve Televizyon Üst Kurulu", "Sermaye Piyasası Kurulu", "Kamu İhale Kurumu", "Kişisel Verileri Koruma Kurumu"],
  a: 0,
  e: "(III) SAYILI CETVEL: RTÜK, BTK, SPK, BDDK, EPDK, KİK, REKABET KURUMU, KAMU GÖZETİMİ MUHASEBE VE DENETİM STANDARTLARI KURUMU, KİŞİSEL VERİLERİ KORUMA KURUMU, NÜKLEER DÜZENLEME KURUMU, SİGORTACILIK VE ÖZEL EMEKLİLİK DÜZENLEME VE DENETLEME KURUMU. TÜRKİYE UZAY AJANSI ise (II) sayılı cetvelde ÖZEL BÜTÇELİ İDARELER arasındadır.",
  t: "Kamu Tüzel Kişiliği", d: 3
},
{
  q: "Mahalli idareler, meslek kuruluşları, KİT'ler, vakıf üniversiteleri, TRT ve Cumhurbaşkanlığı ofislerinin 5018 cetvellerinde yer almaması ne anlama gelir?",
  o: ["Cetvellerde yer almasalar da kamu tüzel kişiliğine sahiptirler", "Kamu tüzel kişiliğine sahip değildirler", "Özel hukuk tüzel kişisidirler", "Tüzel kişilikleri askıdadır", "Hiçbir hukuki statüleri yoktur"],
  a: 0,
  e: "YEREL YÖNETİMLER, KAMU KURUMU NİTELİĞİNDEKİ MESLEK KURULUŞLARI (odalar, barolar, borsalar), KİT'LER, VAKIF ÜNİVERSİTELERİ, TRT, CUMHURBAŞKANLIĞI OFİSLERİ gibi birçok kurum 5018 cetvellerinde YER ALMASA DA KAMU TÜZEL KİŞİLİĞİNE SAHİPTİR.",
  t: "Kamu Tüzel Kişiliği", d: 3
},

/* ---------- İDARİ TEŞKİLAT ŞEMASI ---------- */
{
  q: "Merkezi idarenin başkente yardımcı kuruluşları arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["İl özel idaresi", "Danıştay", "Sayıştay", "Milli Güvenlik Kurulu", "Yüksek Askeri Şura"],
  a: 0,
  e: "BAŞKENTE YARDIMCI KURULUŞLAR: DANIŞTAY, SAYIŞTAY, MİLLİ GÜVENLİK KURULU, YÜKSEK ASKERİ ŞURA, EKONOMİK SOSYAL KONSEY. İL ÖZEL İDARESİ ise YER YÖNÜNDEN YERİNDEN YÖNETİM (mahalli idare) kuruluşudur.",
  t: "İdari Teşkilat", d: 2
},
{
  q: "Hizmet yönünden yerinden yönetim kuruluşlarından 'idari kamu kurumları'na örnek olarak aşağıdakilerden hangisi verilebilir?",
  o: ["Orman Genel Müdürlüğü, Karayolları Genel Müdürlüğü, Vakıflar Genel Müdürlüğü, DSİ Genel Müdürlüğü", "TCDD ve MKEK", "SGK ve İŞKUR", "Üniversiteler ve TÜBİTAK", "RTÜK ve SPK"],
  a: 0,
  e: "1. İDARİ KAMU KURUMLARI: OGM (Orman GM), KYGM (Karayolları GM), Vakıflar GM, DSİ GM. 2. İKTİSADİ KAMU KURUMLARI: KİT'ler (TCDD, MKEK). 3. SOSYAL KAMU KURUMLARI: SGK, İŞKUR. 4. BİLİMSEL-KÜLTÜREL KAMU KURUMLARI: Üniversiteler, YÖK, TÜBİTAK, AKDTYK, TRT, Devlet Tiyatroları GM. 5. DÜZENLEYİCİ VE DENETLEYİCİ KURUMLAR. 6. BÖLGESEL KAMU KURUMLARI.",
  t: "İdari Teşkilat", d: 3
},
{
  q: "Bölgesel kamu kurumlarına örnek olarak aşağıdakilerden hangisi verilebilir?",
  o: ["Kalkınma ajansları ve bölge kalkınma idareleri (GAP, DAP, KOP, DOKAP)", "SGK ve İŞKUR", "TCDD ve MKEK", "Üniversiteler ve YÖK", "RTÜK ve BDDK"],
  a: 0,
  e: "BÖLGESEL KAMU KURUMLARI: KALKINMA AJANSLARI ve BÖLGE KALKINMA İDARELERİ — GAP (Güneydoğu Anadolu Projesi), DAP (Doğu Anadolu Projesi), KOP (Konya Ovası Projesi), DOKAP (Doğu Karadeniz Projesi).",
  t: "İdari Teşkilat", d: 3
},
{
  q: "Sosyal kamu kurumlarına örnek olarak aşağıdakilerden hangisi verilebilir?",
  o: ["SGK ve İŞKUR", "TCDD ve MKEK", "Orman Genel Müdürlüğü ve DSİ", "TÜBİTAK ve TRT", "Kalkınma ajansları"],
  a: 0,
  e: "SOSYAL KAMU KURUMLARI: SOSYAL GÜVENLİK KURUMU (SGK) ve TÜRKİYE İŞ KURUMU (İŞKUR). Bunlar 5018 sayılı Kanun'un (IV) sayılı cetvelinde de yer alır.",
  t: "İdari Teşkilat", d: 2
},
{
  q: "Köy idaresinin organları hangileridir?",
  o: ["Köy derneği, ihtiyar heyeti ve muhtar", "Sadece muhtar", "Köy meclisi ve muhtar", "Köy encümeni ve muhtar", "İhtiyar heyeti ve köy encümeni"],
  a: 0,
  e: "KÖY İDARESİNİN ORGANLARI: KÖY DERNEĞİ, İHTİYAR HEYETİ ve MUHTAR. Karşılaştırma: İl özel idaresi organları İL GENEL MECLİSİ, İL ENCÜMENİ, VALİ; belediye organları BELEDİYE MECLİSİ, BELEDİYE ENCÜMENİ, BAŞKAN.",
  t: "İdari Teşkilat", d: 2
},

/* ---------- HİYERARŞİ ---------- */
{
  q: "Anayasa m. 123'e göre idarenin bütünlüğü ilkesi nasıl ifade edilmiştir?",
  o: ["\"İdare, kuruluş ve görevleriyle bir bütündür ve kanunla düzenlenir\"", "\"İdare merkezden yönetim esasına dayanır\"", "\"İdare yargı denetimine tabidir\"", "\"İdarenin kuruluşu Cumhurbaşkanlığı kararnamesiyle düzenlenir\"", "\"İdare kanunlara uygun hareket eder\""],
  a: 0,
  e: "AY m. 123: 'İDARE, KURULUŞ VE GÖREVLERİYLE BİR BÜTÜNDÜR VE KANUNLA DÜZENLENİR.' İdarenin bütünlüğü ilkesi HİYERARŞİ ve İDARİ VESAYET araçlarıyla sağlanır.",
  t: "İdarenin Bütünlüğü", d: 2
},
{
  q: "Hiyerarşi nedir?",
  o: ["Aynı tüzel kişi bünyesindeki üstün astına karşı sahip olduğu yönlendirme ve emir-talimat verme yetkisidir", "İki farklı kamu tüzel kişisi arasındaki denetim ilişkisidir", "Merkezi idarenin mahalli idareler üzerindeki yetkisidir", "Yargı organının idare üzerindeki denetimidir", "Valinin merkez adına karar alma yetkisidir"],
  a: 0,
  e: "HİYERARŞİ, AYNI TÜZEL KİŞİ BÜNYESİNDEKİ ÜSTÜN (hiyerarşi amiri) ASTINA KARŞI SAHİP OLDUĞU YÖNLENDİRME VE EMİR-TALİMAT VERME YETKİSİDİR. Hiyerarşi yalnızca Devlet tüzel kişiliği içinde değil, YERİNDEN YÖNETİM KURULUŞLARINDA DA söz konusudur.",
  t: "Hiyerarşi", d: 2
},
{
  q: "Hiyerarşi yetkisinin kullanılabilmesi için Anayasa veya kanuni bir dayanağın bulunması gerekir mi?",
  o: ["Gerekmez; hiyerarşi doğal ve genel bir yetkidir", "Her halde Anayasal dayanak gerekir", "Her halde kanuni dayanak gerekir", "Cumhurbaşkanlığı kararnamesi gerekir", "Yönetmelik dayanağı gerekir"],
  a: 0,
  e: "Hiyerarşi DOĞAL VE GENEL BİR YETKİDİR: kullanımı için ANAYASA VEYA KANUNİ BİR DAYANAĞININ BULUNMASI GEREKMEZ (astın kişisel statüsünü etkileyen işlemler hariç). İDARİ VESAYET ise İSTİSNAİ (SINIRLI) bir yetkidir; Anayasa ve kanunlarda AÇIKÇA ÖNGÖRÜLEN durumlarda kullanılabilir.",
  t: "Hiyerarşi", d: 2
},
{
  q: "Hiyerarşik amirin astın işlemleri üzerindeki yetkileri bakımından hangi sınır vardır?",
  o: ["Astın yerine geçip ilk elden işlem yapamaz (ikame yasağı)", "Astın işlemlerini değiştiremez", "Astın işlemlerini geri alamaz", "Astın işlemlerini erteleyemez", "Astın işlemlerini onamayamaz"],
  a: 0,
  e: "Hiyerarşik amir astın işlemlerini DEĞİŞTİREBİLİR, DÜZELTEBİLİR, GERİ ALABİLİR (iptal edebilir), KALDIRABİLİR, ONAYABİLİR/ONAMAYABİLİR, UYGULAMASINI ERTELEYEBİLİR, DURDURABİLİR. FAKAT ASTIN YERİNE GEÇİP İLK ELDEN İŞLEM YAPAMAZ — buna İKAME YASAĞI denir.",
  t: "Hiyerarşi", d: 3
},
{
  q: "Hiyerarşik amir astın işlemlerini hangi yönlerden denetleyebilir?",
  o: ["Hem hukukilik (hukuka uygunluk) hem de yerindelik (ihtiyaca ve hizmetin gereklerine uygunluk) yönünden", "Sadece hukukilik yönünden", "Sadece yerindelik yönünden", "Sadece mali yönden", "Hiçbir denetim yapamaz"],
  a: 0,
  e: "HİYERARŞİK AMİR astın işlemlerini HEM HUKUKİLİK (hukuka uygunluk) HEM DE YERİNDELİK (ihtiyaca ve hizmetin gereklerine uygunluk) yönünden denetler. VESAYET MAKAMI ise kural olarak YALNIZCA HUKUKİLİK yönünden denetler.",
  t: "Hiyerarşi", d: 3
},
{
  q: "Anayasa m. 137 'kanunsuz emir' düzenlemesine göre ast, emrin hukuka aykırı olduğunu düşünürse ne yapar?",
  o: ["Bunu üstüne bildirir; üst emrinde yazılı olarak ısrar ederse ast emri yerine getirir ve sorumlu olmaz", "Emri hiçbir şekilde yerine getirmez", "Doğrudan idari yargıya başvurur", "Emri yerine getirir ve her halde sorumlu olur", "Görevinden istifa etmek zorundadır"],
  a: 0,
  e: "AY m. 137 (KANUNSUZ EMİR): Ast, emrin YÖNETMELİK, CUMHURBAŞKANLIĞI KARARNAMESİ, KANUN VEYA ANAYASAYA AYKIRI olduğunu görürse BUNU ÜSTÜNE BİLDİRİR. ÜST EMRİNDE YAZILI OLARAK ISRAR EDERSE AST EMRİ YERİNE GETİRİR ve BU HALDE EMRİ YERİNE GETİREN SORUMLU OLMAZ.",
  t: "Kanunsuz Emir", d: 2
},
{
  q: "Emrin konusu suç teşkil ediyorsa ast ne yapmalıdır?",
  o: ["Emri yerine getiremez; yerine getirirse sorumluluktan kurtulamaz ve amirle birlikte sorumlu olur", "Yazılı ısrar üzerine emri yerine getirir ve sorumlu olmaz", "Emri yerine getirir, sadece amir sorumlu olur", "Emri yerine getirir ve hiç kimse sorumlu olmaz", "Emri savcılığa bildirdikten sonra yerine getirir"],
  a: 0,
  e: "AY m. 137: EMRİN KONUSU SUÇ TEŞKİL EDİYORSA AST EMRİ YERİNE GETİREMEZ; EĞER EMRİ YERİNE GETİRİRSE SORUMLULUKTAN KURTULAMAZ VE AMİRLE BİRLİKTE SORUMLU OLURLAR.",
  t: "Kanunsuz Emir", d: 2
},
{
  q: "Hiyerarşik ast, üstün verdiği emri idari yargıya taşıyabilir mi?",
  o: ["Kural olarak taşıyamaz; ancak üstün işlemi astın hukuki statüsüne ilişkinse dava açma hakkı vardır", "Her zaman taşıyabilir", "Hiçbir durumda taşıyamaz", "Sadece emir yazılıysa taşıyabilir", "Sadece amirin izniyle taşıyabilir"],
  a: 0,
  e: "Hiyerarşik astın kural olarak EMİR VE TALİMATLARA UYMA YÜKÜMLÜLÜĞÜ bulunur; ast üstün verdiği emri KURAL OLARAK İDARİ YARGIYA TAŞIYAMAZ (dava açamaz), yalnızca EMRİN HUKUKA AYKIRILIĞI KONUSUNDA ÜSTÜN DİKKATİNİ ÇEKEBİLİR. ANCAK ÜSTÜN YAPTIĞI İŞLEM ASTIN HUKUKİ STATÜSÜNE İLİŞKİNSE astın DAVA AÇMA HAKKI BULUNMAKTADIR.",
  t: "Hiyerarşi", d: 3
},

/* ---------- İDARİ VESAYET ---------- */
{
  q: "İdari vesayet nedir?",
  o: ["İki farklı kamu tüzel kişisi arasındaki denetim ilişkisini ifade eder", "Aynı tüzel kişi içindeki üst-ast ilişkisidir", "Yargının idare üzerindeki denetimidir", "TBMM'nin idare üzerindeki denetimidir", "Valinin merkez adına karar alma yetkisidir"],
  a: 0,
  e: "İDARİ VESAYET, İKİ FARKLI KAMU TÜZEL KİŞİSİ ARASINDAKİ DENETİM İLİŞKİSİNİ ifade eder. Hiyerarşi ise AYNI TÜZEL KİŞİLİK İÇİNDE söz konusudur.",
  t: "İdari Vesayet", d: 2
},
{
  q: "Anayasa m. 127'ye göre merkezi idare, mahalli idareler üzerinde idari vesayet yetkisini hangi amaçlarla kullanır?",
  o: ["Mahalli hizmetlerin idarenin bütünlüğü ilkesine uygun yürütülmesi, kamu görevlerinde birliğin sağlanması, toplum yararının korunması ve mahalli ihtiyaçların gereği gibi karşılanması amacıyla", "Sadece mali denetim amacıyla", "Sadece siyasi denetim amacıyla", "Sadece disiplin cezası verme amacıyla", "Sadece yerindelik denetimi amacıyla"],
  a: 0,
  e: "AY m. 127: 'Merkezi idare, mahalli idareler üzerinde, MAHALLİ HİZMETLERİN İDARENİN BÜTÜNLÜĞÜ İLKESİNE UYGUN ŞEKİLDE YÜRÜTÜLMESİ, KAMU GÖREVLERİNDE BİRLİĞİN SAĞLANMASI, TOPLUM YARARININ KORUNMASI ve MAHALLİ İHTİYAÇLARIN GEREĞİ GİBİ KARŞILANMASI amacıyla, KANUNDA BELİRTİLEN ESAS VE USULLER DAİRESİNDE idari vesayet yetkisine sahiptir.'",
  t: "İdari Vesayet", d: 3
},
{
  q: "Merkezi idare içerisinde yer alan idari vesayet makamları hangileridir?",
  o: ["Cumhurbaşkanı, bakan, vali ve kaymakam", "Sadece Cumhurbaşkanı", "Sadece bakanlar", "TBMM ve Cumhurbaşkanı", "Danıştay ve Sayıştay"],
  a: 0,
  e: "Merkezi idare içerisinde yer alan İDARİ VESAYET MAKAMLARI: CUMHURBAŞKANI, BAKAN, VALİ ve KAYMAKAM. Bunlar yerel yönetimler üzerinde KANUNLA BELİRTİLEN ESAS VE USULLER çerçevesinde idari vesayet yetkisine sahiptir.",
  t: "İdari Vesayet", d: 2
},
{
  q: "Kanunlarda öngörülen idari vesayet ilişkileri arasında aşağıdakilerden hangisi vardır?",
  o: ["Büyükşehir belediyesi → ilçe belediyesi ve YÖK → üniversiteler", "Vali → kaymakam", "Bakan → bakanlık müsteşarı", "Belediye başkanı → belediye meclisi", "Cumhurbaşkanı → bakan"],
  a: 0,
  e: "KANUNLARDA ÖNGÖRÜLEN İDARİ VESAYET İLİŞKİLERİ: Merkezi İdare → Hizmet yerinden yönetim kuruluşları, Merkezi İdare → Kamu kurumu niteliğindeki meslek kuruluşları, BÜYÜKŞEHİR BELEDİYESİ → İLÇE BELEDİYESİ, YÖK → ÜNİVERSİTELER, Meslek kuruluşu birliği → Yerel meslek kuruluşu. Vali-kaymakam ve bakan-müsteşar ilişkileri HİYERARŞİDİR.",
  t: "İdari Vesayet", d: 3
},
{
  q: "Vesayet makamının denetlediği birimin işlemleri üzerindeki yetkileri arasında aşağıdakilerden hangisi vardır?",
  o: ["Onama/onamama, izin verme, uygulanmasını erteleme, yeniden görüşülmesini isteme ve idari yargıda iptal davası açma", "İşlemi geri alma ve kaldırma", "İşlemi değiştirme", "Emir ve talimat verme", "Astın yerine geçip işlem yapma"],
  a: 0,
  e: "Vesayet makamının işlemler üzerindeki yetkileri: ONAMA/ONAMAMA, İZİN VERME, UYGULANMASINI ERTELEME, YENİDEN GÖRÜŞÜLMESİNİ İSTEME, İDARİ YARGIDA İPTAL DAVASI AÇMA. Vesayet makamı KURAL OLARAK işlemleri GERİ ALAMAZ, KALDIRAMAZ, DEĞİŞTİREMEZ ve EMİR-TALİMAT VEREMEZ.",
  t: "İdari Vesayet", d: 3
},
{
  q: "Vesayet makamının yerinden yönetim kuruluşlarının organları üzerindeki yetkisi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Mahalli idarelerin karar organları ile meslek kuruluşlarının organlarını geçici olarak görevden uzaklaştırma yetkisi vardır", "Organları temelli olarak feshedebilir", "Organ üyelerine disiplin cezası verebilir", "Organların yerine geçip karar alabilir", "Organlar üzerinde hiçbir yetkisi yoktur"],
  a: 0,
  e: "Vesayet makamının organlar üzerindeki yetkisi: MAHALLİ İDARELERİN KARAR ORGANLARI ile KAMU KURUMU NİTELİĞİNDEKİ MESLEK KURULUŞLARININ ORGANLARINI GEÇİCİ OLARAK GÖREVDEN UZAKLAŞTIRMA yetkisi vardır. HİZMET YERİNDEN YÖNETİM KURULUŞLARI görevlileri merkezi idare tarafından ATAMA USULÜYLE belirlendiği için vesayet makamı BU KİŞİLERİ GÖREVDEN ALABİLİR.",
  t: "İdari Vesayet", d: 3
},
{
  q: "Vesayet yetkisinin kullanılması sonucunda dava açma hakkı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Üzerinde vesayet yetkisi kullanılanların, kullanılan yetkiye karşı dava açma hakkı mümkündür", "Dava açma hakkı yoktur", "Sadece Danıştay'a başvurulabilir", "Sadece Cumhurbaşkanına başvurulabilir", "Sadece TBMM'ye başvurulabilir"],
  a: 0,
  e: "Vesayet yetkisinin kullanılması sonucunda, BU YETKİ ÜZERİNDE KULLANILANLARIN KULLANILAN YETKİYE KARŞI DAVA AÇMA HAKKI MÜMKÜNDÜR. Hiyerarşide ise ast kural olarak emri yargıya taşıyamaz.",
  t: "İdari Vesayet", d: 3
},
{
  q: "Yerinden yönetim kuruluşlarının işlemleri üzerindeki vesayet denetimi kural olarak neyle sınırlıdır?",
  o: ["Hukuka uygunluk denetimi ile; ancak Anayasa ve kanunlarda yerindelik denetimine imkan veren istisnalar vardır", "Yerindelik denetimi ile", "Hem hukukilik hem yerindelik denetimi ile sınırsızdır", "Sadece mali denetim ile", "Hiçbir denetim yapılamaz"],
  a: 0,
  e: "Vesayet denetimi yerinden yönetim kuruluşlarının işlemleri üzerinde KURAL OLARAK HUKUKA UYGUNLUK DENETİMİ İLE SINIRLIDIR. ANCAK gerek ANAYASADA gerekse KANUNLARDA YERİNDELİK DENETİMİNE DE İMKAN VEREN İSTİSNALARI BULUNMAKTADIR.",
  t: "İdari Vesayet", d: 3
}

]);

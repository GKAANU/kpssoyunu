/* İdare Hukuku — 10. bölüm (ihale usulleri, ihale süreci ve şikayet yolları,
   memurlar: ilkeler, şartlar, adaylık, yükümlülükler, yasaklar, haklar, izinler) */
KPSS.registerBank('idare', [

/* ---------- İHALE USULLERİ ---------- */
{
  q: "2886 sayılı Devlet İhale Kanunu'nda kural olan ihale usulü hangisidir?",
  o: ["Kapalı teklif usulü", "Açık ihale usulü", "Pazarlık usulü", "Yarışma usulü", "Belli istekliler arasında ihale usulü"],
  a: 0,
  e: "DEVLET İHALE KANUNU'NDA İHALELERDE KURAL KAPALI TEKLİF USULÜNÜN UYGULANMASIDIR; DİĞER USULLER İSTİSNADIR. Bu usulde katılanlar fiyat tekliflerini KÜÇÜK BİR ZARFA koyup, bu zarf ve yeterlik belgelerini DAHA BÜYÜK BİR ZARFA koyarak komisyona teslim eder. Komisyon ÖNCE BÜYÜK ZARFI açıp YETERLİLİK BELGELERİNİ inceler; belgeler uygunsa küçük zarf açılır, uygun değilse TEKLİF ZARFI AÇILMADAN İADE EDİLİR.",
  t: "İhale Usulleri", d: 3
},
{
  q: "4734 sayılı Kamu İhale Kanunu'nda kural olan ihale usulü hangisidir?",
  o: ["Açık ihale usulü", "Kapalı teklif usulü", "Pazarlık usulü", "Belli istekliler arasında ihale usulü", "Doğrudan temin"],
  a: 0,
  e: "KAMU İHALE KANUNU'NDA kanunda belirtilmiş ÖZEL KONULAR DIŞINDA 'AÇIK İHALE USULÜ' UYGULANIR. BÜTÜN İSTEKLİLERİN TEKLİF VEREBİLDİĞİ usuldür ve Devlet İhale Kanunu'ndaki 'KAPALI TEKLİF USULÜ' ile benzerlik gösterir.",
  t: "İhale Usulleri", d: 2
},
{
  q: "Belli istekliler arasında ihale usulü hangi işlerde uygulanır?",
  o: ["Belli ölçeğin üzerindeki yapım işleri ile teknik yönü ağır basan mal ve hizmet alım ihalelerinde; sadece ön yeterlilikten geçmiş ve davet edilen istekliler teklif verebilir", "Küçük ölçekli ihalelerde", "Acil işlerde", "Güzel sanatlara ilişkin işlerde", "Tüm ihalelerde"],
  a: 0,
  e: "BELLİ İSTEKLİLER ARASINDA İHALE USULÜ, BELLİ ÖLÇEĞİN ÜZERİNDEKİ YAPIM İŞLERİ ile TEKNİK YÖNÜ AĞIR BASAN MAL VE HİZMET ALIM İHALELERİNDE uygulanır. İhalede TÜM İSTEKLİLERİN DEĞİL, SADECE ÖN YETERLİLİKTEN GEÇMİŞ VE DAVET EDİLEN İSTEKLİLERİN teklif verebildiği bir usuldür.",
  t: "İhale Usulleri", d: 3
},
{
  q: "Kamu İhale Kanunu'nda pazarlık usulü hangi hallerde öngörülmüştür?",
  o: ["Belli bir miktarın altında kalan küçük ihaleler ile kamu güvenliği ve doğal afetler gibi özel niteliği veya aciliyeti bulunan ihaleler için", "Büyük ölçekli yapım işleri için", "Teknik yönü ağır basan işler için", "Güzel sanatlar için", "Tüm ihaleler için"],
  a: 0,
  e: "PAZARLIK USULÜ ÖZEL BİR İHALE USULÜDÜR: BELLİ BİR MİKTARIN ALTINDA KALAN KÜÇÜK İHALELER için ve ayrıca KAMU GÜVENLİĞİ VE DOĞAL AFETLER gibi ÖZEL NİTELİĞİ VEYA ACİLİYETİ BULUNAN ihaleler için öngörülmüştür. İHALE İLANI YAPILMASI, TEKLİFLERİN YAZILI YAPILMASI hatta bazı durumlarda TEMİNAT ALINMASI BİLE ZORUNLU DEĞİLDİR. DEĞİŞİK YERLERDEN ÜÇ TEKLİF alınarak pazarlık aşamasına geçilir.",
  t: "İhale Usulleri", d: 3
},
{
  q: "İhale usulleri dışında idarenin mal ve hizmet alımı için başvurduğu yöntemler hangileridir?",
  o: ["Doğrudan temin ve tasarım yarışmaları", "Kapalı teklif ve açık teklif", "Pazarlık ve iltizam", "Emanet ve imtiyaz", "Ruhsat ve izin"],
  a: 0,
  e: "TÜM KAMU ALIMLARI İHALE USULLERİNE GÖRE YAPILMAMAKTADIR. İhale usulleri dışında idarenin mal ve hizmet alımı için başvurduğu 'DOĞRUDAN TEMİN' ve 'TASARIM YARIŞMALARI' olmak üzere İKİ ALIM YÖNTEMİ daha bulunmaktadır.",
  t: "İhale Usulleri", d: 2
},
{
  q: "Devlet İhale Kanunu'ndaki açık teklif (açık artırma ve eksiltme) usulü hangi işler için uygulanır?",
  o: ["Tahmin edilen bedeli her yıl Bütçe Kanunu'nda belirtilen miktarı geçmeyen işler için; istekliler komisyon önünde sözlü teklif sunar ve ikinci tekliflerini de verebilirler", "Uçak ve harp gemisi alımlarında", "Acil işlerde", "Güzel sanatlara ilişkin işlerde", "Tüm işlerde"],
  a: 0,
  e: "AÇIK TEKLİF (AÇIK ARTIRMA VE EKSİLTME) USULÜ: TAHMİN EDİLEN BEDELİ HER YIL BÜTÇE KANUNU'NDA BELİRTİLEN MİKTARI GEÇMEYEN İŞLER için uygulanır. İstekliler İHALE KOMİSYONU ÖNÜNDE SÖZLÜ olarak tekliflerini sunar; İKİNCİ TEKLİFLERİNİ DE VEREBİLİRLER. Bu tekliflerden EN YÜKSEK OLANINA ihale verilir.",
  t: "İhale Usulleri", d: 3
},

/* ---------- KAMU İHALE SÜRECİ ---------- */
{
  q: "Kamu İhale Kanunu'na göre teklif sunulurken alınan geçici teminat oranı nedir?",
  o: ["Teklif edilen bedelin %3'ünden az olmamak üzere istekli tarafından verilecek tutarda", "%6", "%10", "%1", "Teminat alınmaz"],
  a: 0,
  e: "TEKLİF SUNULMASI aşamasında TEKLİF EDİLEN BEDELİN %3'ÜNDEN AZ OLMAMAK ÜZERE, İSTEKLİ TARAFINDAN VERİLECEK TUTARDA GEÇİCİ TEMİNAT alınır. Sözleşmeye davette ise İHALE BEDELİ ÜZERİNDEN %6 ORANINDA KESİN TEMİNAT verilir.",
  t: "Kamu İhale Süreci", d: 3
},
{
  q: "İhale komisyonu kararı üzerine idare tüm teklifleri reddedebilir mi?",
  o: ["Reddedebilir; idare verilmiş bütün teklifleri reddederek ihaleyi iptal etmekte serbesttir ve bu nedenle herhangi bir yükümlülük altına girmez", "Reddedemez", "Sadece mahkeme kararıyla reddedebilir", "Reddederse tazminat ödemek zorundadır", "Sadece bir teklifi reddedebilir"],
  a: 0,
  e: "Teklifin değerlendirilmesi aşamasında İHALE KOMİSYONU KARARI ÜZERİNE İDARE, VERİLMİŞ OLAN BÜTÜN TEKLİFLERİ REDDEDEREK İHALEYİ İPTAL ETMEKTE SERBESTTİR. İDARE, BÜTÜN TEKLİFLERİN REDDEDİLMESİ NEDENİYLE HERHANGİ BİR YÜKÜMLÜLÜK ALTINA GİRMEZ.",
  t: "Kamu İhale Süreci", d: 3
},
{
  q: "İhale sonucu isteklilere ne zaman bildirilir ve sözleşme ne zaman imzalanabilir?",
  o: ["İhale kararının ihale yetkilisince onaylandığı günü izleyen en geç üç gün içinde tüm isteklilere bildirilir; ihale sonucunun bildiriminden itibaren on gün geçmedikçe sözleşme imzalanamaz", "Bir hafta içinde bildirilir ve derhal sözleşme imzalanır", "Beş gün içinde bildirilir, 15 gün sonra sözleşme imzalanır", "Bildirim zorunlu değildir", "Otuz gün içinde bildirilir"],
  a: 0,
  e: "İhale sonucu, ihale kararının İHALE YETKİLİSİ TARAFINDAN ONAYLANDIĞI GÜNÜ İZLEYEN EN GEÇ ÜÇ GÜN İÇİNDE, ihale üzerinde bırakılan dahil olmak üzere İHALEYE TEKLİF VEREN BÜTÜN İSTEKLİLERE BİLDİRİLİR. İHALE SONUCUNUN BÜTÜN İSTEKLİLERE BİLDİRİMİNDEN İTİBAREN ON GÜN GEÇMEDİKÇE SÖZLEŞME İMZALANAMAZ.",
  t: "Kamu İhale Süreci", d: 3
},
{
  q: "İhale sonucu Kamu İhale Kurumu'na ne kadar süre içinde bildirilir?",
  o: ["En geç on beş gün içinde; sonuçlar Kurum tarafından Kamu İhale Bülteninde yayımlanır", "Üç gün içinde", "On gün içinde", "Otuz gün içinde", "Bildirim zorunlu değildir"],
  a: 0,
  e: "İHALE SONUCU EN GEÇ ON BEŞ GÜN İÇİNDE KAMU İHALE KURUMU'NA BİLDİRİLİR. SONUÇLAR KURUM TARAFINDAN KAMU İHALE BÜLTENİNDE YAYIMLANIR.",
  t: "Kamu İhale Süreci", d: 3
},
{
  q: "Kamu ihalelerinde şikayet başvurusu ne kadar süre içinde ve kime yapılır?",
  o: ["Pazarlık usulüyle ivedi yapılan ihalelerde beş gün, diğer ihalelerde on gün içinde ve sözleşmenin imzalanmasından önce ihaleyi yapan idareye", "Otuz gün içinde Kamu İhale Kurumuna", "On gün içinde Kamu İhale Kurumuna", "Altmış gün içinde idari yargıya", "Süre yoktur"],
  a: 0,
  e: "ŞİKAYET BAŞVURUSU, ihale sürecindeki işlem ve eylemlerin hukuka aykırılığı iddiasıyla, farkına varıldığı veya varılmış olması gereken tarihi izleyen günden itibaren PAZARLIK USULÜYLE İVEDİ olarak yapılan ihalelerde BEŞ GÜN, DİĞER İHALELERDE ON GÜN İÇİNDE ve SÖZLEŞMENİN İMZALANMASINDAN ÖNCE, İHALEYİ YAPAN İDAREYE yapılır. İdare şikayet üzerine ON GÜN İÇİNDE gerekçeli karar alır.",
  t: "İhale Uyuşmazlıkları", d: 3
},
{
  q: "İtirazen şikayet başvurusu nereye ve ne kadar süre içinde yapılır?",
  o: ["İdarece alınan kararın yazılı bildirimini izleyen on gün içinde Kamu İhale Kurumuna (ihalenin iptali kararına karşı bu süre beş gündür)", "Otuz gün içinde idari yargıya", "Yirmi gün içinde Kamu İhale Kurumuna", "Beş gün içinde idareye", "Doğrudan Danıştay'a"],
  a: 0,
  e: "İDARECE ALINAN KARARIN YAZILI BİLDİRİMİNİ İZLEYEN ON GÜN İÇİNDE KAMU İHALE KURUMUNA İTİRAZEN ŞİKAYET başvurusunda bulunulabilir. (ŞİKAYET ÜZERİNE İDARECE VERİLEN İHALENİN İPTALİ KARARINA KARŞI İTİRAZEN ŞİKAYET SÜRESİ BEŞ GÜNDÜR.) Kurum, itirazen şikayete ilişkin NİHAİ KARARINI YİRMİ GÜN İÇİNDE vermek zorundadır; bu süre pazarlık usulüyle ivedi ihaleler ile ihalenin iptali işlemine karşı şikayetlerde ON İŞ GÜNÜ olarak uygulanır.",
  t: "İhale Uyuşmazlıkları", d: 3
},
{
  q: "Kamu ihalelerinde idari başvuru yolları tüketildikten sonra idari yargıda dava açma süresi ne kadardır?",
  o: ["30 gündür ve ivedi yargılama usulüne tabidir", "60 gündür", "15 gündür", "10 gündür", "90 gündür"],
  a: 0,
  e: "Şikayet ve itirazen şikayet kararının ardından idari yargıda iptal davası açılabilir. DAVA AÇMA SÜRESİ 30 GÜNDÜR (İVEDİ YARGILAMA USULÜNE TABİ). ŞİKAYET VE İTİRAZEN ŞİKAYET ZORUNLU İDARİ BAŞVURU YOLUDUR; İDARİ BAŞVURU YOLLARI TÜKETİLMEDEN İPTAL DAVASI AÇILAMAZ.",
  t: "İhale Uyuşmazlıkları", d: 3
},
{
  q: "Şikayet ve itirazen şikayet yolunun sırasıyla zorunlu olması kuralının tek istisnası nedir?",
  o: ["İhale, idareye herhangi bir şikayet başvurusu yapılmadan doğrudan doğruya ilgili idare tarafından iptal edilmişse, bu iptal kararına karşı itirazen şikayet yoluna başvurulamaz, doğrudan idari yargıya başvurulur", "Pazarlık usulüyle yapılan ihalelerde", "Doğrudan temin hallerinde", "Sözleşme imzalandıktan sonra", "İstisna yoktur"],
  a: 0,
  e: "Şikayet ve itirazen şikayet yolunun sırasıyla zorunlu olması kuralının TEK İSTİSNASI: İHALE, İDAREYE HERHANGİ BİR ŞİKAYET BAŞVURUSU YAPILMADAN DOĞRUDAN DOĞRUYA İLGİLİ İDARE TARAFINDAN İPTAL EDİLMİŞSE, bu iptal kararına karşı İTİRAZEN ŞİKAYET YOLUNA BAŞVURULAMAZ, DOĞRUDAN İDARİ YARGIYA BAŞVURULUR.",
  t: "İhale Uyuşmazlıkları", d: 3
},
{
  q: "Devlet İhale Kanunu kapsamındaki ihalelerde şikayet ve itirazen şikayet başvurusu var mıdır?",
  o: ["Yoktur; Devlet İhale Kanunu'nda şikayet ve itirazen şikayet öngörülmemiştir ve Kamu İhale Kurumu'nun bu ihalelerle ilgili herhangi bir görevi bulunmamaktadır", "Vardır ve süreler aynıdır", "Sadece şikayet vardır", "Sadece itirazen şikayet vardır", "Kamu İhale Kurumu bu ihaleleri de denetler"],
  a: 0,
  e: "DEVLET İHALE KANUNU'NDA ŞİKAYET VE İTİRAZEN ŞİKAYET BAŞVURUSU ÖNGÖRÜLMEMİŞTİR. KAMU İHALE KURUMU'NUN BU İHALELERLE İLGİLİ HERHANGİ BİR GÖREVİ BULUNMAMAKTADIR.",
  t: "İhale Uyuşmazlıkları", d: 3
},

/* ---------- MEMURLAR — İSTİHDAM VE İLKELER ---------- */
{
  q: "657 sayılı DMK'ya göre kamuda kaç tür istihdam türü mevcuttur?",
  o: ["Üç: memurlar, sözleşmeli personel ve işçiler", "Dört tür", "İki tür: memur ve işçi", "Beş tür", "Tek tür: memur"],
  a: 0,
  e: "657 sayılı Devlet Memurları Kanunu'na göre kamuda MEMURLAR, SÖZLEŞMELİ PERSONEL ve İŞÇİLER olmak üzere ÜÇ TÜR İSTİHDAM TÜRÜ mevcuttur. 24/12/2017 tarihli 696 SAYILI KHK ile 'GEÇİCİ PERSONEL (m. 4/c)' KALDIRILMIŞTIR. İŞÇİLER 657'de yer alsa da idarenin işçilerle ilişkilerinde 4857 SAYILI İŞ KANUNU uygulanır.",
  t: "Memurlar", d: 3
},
{
  q: "657 sayılı DMK'nın dayandığı temel ilkeler hangileridir?",
  o: ["Sınıflandırma, kariyer ve liyakat ilkeleri", "Eşitlik, tarafsızlık ve süreklilik", "Sınıflandırma ve eşitlik", "Kariyer ve süreklilik", "Sadece liyakat ilkesi"],
  a: 0,
  e: "DEVLET MEMURLUĞUNA İLİŞKİN İLKELER: A. SINIFLANDIRMA İLKESİ (kamu görevlerini ve memurları görevlerin gerektirdiği niteliklere göre sınıflara ayırmak), B. KARİYER İLKESİ (gerekli nitelikleri taşıyan memurlara sınıfları içinde EN YÜKSEK DERECELERE KADAR İLERLEME olanağı sağlamak), C. LİYAKAT İLKESİ (memurluğa girmede ve yükselmede BİLGİ VE YETENEKLERİN esas alınması).",
  t: "Memurlar", d: 2
},
{
  q: "657 sayılı DMK'da yer alan hizmet sınıfları arasında aşağıdakilerden hangisi vardır?",
  o: ["Mülki İdare Amirliği Hizmetleri Sınıfı, Milli İstihbarat Hizmetleri Sınıfı, Jandarma ve Sahil Güvenlik Hizmetleri Sınıfları", "Ticaret Hizmetleri Sınıfı", "Bankacılık Hizmetleri Sınıfı", "Sanayi Hizmetleri Sınıfı", "Turizm Hizmetleri Sınıfı"],
  a: 0,
  e: "DMK HİZMET SINIFLARI: 1) GENEL İDARE HİZMETLERİ, 2) SAĞLIK HİZMETLERİ VE YARDIMCI SAĞLIK HİZMETLERİ, 3) AVUKATLIK HİZMETLERİ, 4) EMNİYET HİZMETLERİ, 5) MÜLKİ İDARE AMİRLİĞİ HİZMETLERİ, 6) TEKNİK HİZMETLER, 7) EĞİTİM VE ÖĞRETİM HİZMETLERİ, 8) DİN HİZMETLERİ, 9) YARDIMCI HİZMETLER, 10) MİLLİ İSTİHBARAT HİZMETLERİ, 11) JANDARMA HİZMETLERİ, 12) SAHİL GÜVENLİK HİZMETLERİ SINIFI.",
  t: "Memurlar", d: 3
},

/* ---------- MEMUR OLMA ŞARTLARI ---------- */
{
  q: "Devlet memuru olabilmek için yaş şartı nedir?",
  o: ["18 yaşını doldurmuş olmak; ancak bir meslek veya sanat okulunu bitirenler en az 15 yaşını doldurmuş olmak ve kazai rüşt kararı almak şartıyla atanabilirler", "21 yaşını doldurmuş olmak", "18 yaşını doldurmuş olmak; istisna yoktur", "15 yaşını doldurmuş olmak yeterlidir", "Yaş şartı yoktur"],
  a: 0,
  e: "Memur olmak için 18 YAŞINI DOLDURMUŞ OLMAK gerekir. ANCAK BİR MESLEK VEYA SANAT OKULUNU BİTİRENLER EN AZ 15 YAŞINI DOLDURMUŞ OLMAK VE KAZAİ RÜŞT KARARI ALMAK ŞARTIYLA Devlet memurluklarına atanabilirler.",
  t: "Memur Olma Şartları", d: 3
},
{
  q: "Devlet memuru olabilmek için öğrenim şartı nedir?",
  o: ["En az ortaokul mezunu olmak; fakat ortaokul mezunlarından istekli bulunmadığı takdirde ilkokul mezunlarından da olabilir", "En az lise mezunu olmak", "En az ilkokul mezunu olmak yeterlidir", "En az yükseköğretim mezunu olmak", "Öğrenim şartı yoktur"],
  a: 0,
  e: "ÖĞRENİM: EN AZ ORTAOKUL MEZUNU OLMAK. FAKAT ORTAOKUL MEZUNLARINDAN İSTEKLİ BULUNMADIĞI TAKDİRDE İLKOKUL MEZUNLARINDAN DA OLABİLİR.",
  t: "Memur Olma Şartları", d: 2
},
{
  q: "Devlet memurluğuna engel mahkumiyet bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Taksirli suçlar hariç, kasten işlenen bir suçtan dolayı bir yıl veya daha fazla süreyle hapis cezasına mahkum olanlar memur olamaz", "Her türlü mahkumiyet engeldir", "Sadece iki yıldan fazla hapis engeldir", "Taksirli suçlar da engeldir", "Mahkumiyet engel değildir"],
  a: 0,
  e: "ENGEL MAHKUMİYET: TAKSİRLİ SUÇLAR HARİÇ, KASTEN İŞLENEN BİR SUÇTAN DOLAYI BİR YIL VEYA DAHA FAZLA SÜREYLE HAPİS CEZASINA MAHKUM OLANLAR MEMUR OLAMAZ.",
  t: "Memur Olma Şartları", d: 2
},
{
  q: "Af, memurluk yasağını hangi suçlar bakımından kaldırmaz?",
  o: ["Anayasal düzene ve bu düzenin işleyişine karşı suçlar, zimmet, irtikâp, rüşvet, hırsızlık, dolandırıcılık, sahtecilik, güveni kötüye kullanma, hileli iflas, ihaleye fesat karıştırma, edimin ifasına fesat karıştırma, suçtan kaynaklanan malvarlığı değerlerini aklama veya kaçakçılık suçları", "Af tüm yasakları kaldırır", "Sadece kasten öldürme suçu", "Sadece taksirli suçlar", "Af hiçbir yasağı kaldırmaz"],
  a: 0,
  e: "AFTA UĞRAMASI HALİNDE MEMURLUK YASAĞI KALKAR. ANCAK AFTA UĞRAMIŞ OLSA BİLE şu suçlardan hüküm giymiş olanlar devlet memuru OLAMAZ: ANAYASAL DÜZENE VE BU DÜZENİN İŞLEYİŞİNE KARŞI SUÇLAR, ZİMMET, İRTİKÂP, RÜŞVET, HIRSIZLIK, DOLANDIRICILIK, SAHTECİLİK, GÜVENİ KÖTÜYE KULLANMA, HİLELİ İFLAS, İHALEYE FESAT KARIŞTIRMA, EDİMİN İFASINA FESAT KARIŞTIRMA, SUÇTAN KAYNAKLANAN MALVARLIĞI DEĞERLERİNİ AKLAMA veya KAÇAKÇILIK.",
  t: "Memur Olma Şartları", d: 3
},

/* ---------- ADAYLIK ---------- */
{
  q: "Aday memurun adaylık süresi ne kadardır?",
  o: ["Bir yıldan az iki yıldan çok olamaz ve bu süre içinde aday memurun başka kurumlara nakli yapılamaz", "İki yıldan az üç yıldan çok olamaz", "Altı aydır", "Bir yıldır, uzatılamaz", "Süre öngörülmemiştir"],
  a: 0,
  e: "Memurluk sınavını kazananlar ve ilk defa atananlar 'ADAY MEMUR' statüsünde atanırlar. Aday olarak atanmış Devlet memurunun ADAYLIK SÜRESİ BİR YILDAN AZ İKİ YILDAN ÇOK OLAMAZ ve BU SÜRE İÇİNDE ADAY MEMURUN BAŞKA KURUMLARA NAKLİ YAPILAMAZ.",
  t: "Adaylık", d: 2
},
{
  q: "Adaylık süresi içinde ilişiği kesilenler kaç yıl süre ile Devlet memurluğuna alınmazlar?",
  o: ["3 yıl (sağlık nedenleri hariç)", "5 yıl", "1 yıl", "2 yıl", "Süresiz olarak alınmazlar"],
  a: 0,
  e: "ADAYLIK DEVRESİ İÇİNDE VEYA SONUNDA İLİŞİKLERİ KESİLENLER (SAĞLIK NEDENLERİ HARİÇ) 3 YIL SÜRE İLE DEVLET MEMURLUĞUNA ALINMAZLAR.",
  t: "Adaylık", d: 3
},
{
  q: "Adaylık süresi içinde hangi hallerde aday memurun ilişiği kesilir?",
  o: ["Temel ve hazırlayıcı eğitim ile staj devrelerinin her birinde başarısız olanlar, memuriyetle bağdaşmayacak fiillerde bulunanlar, devamsızlığı tespit edilenler ile disiplin cezası (aylıktan kesme veya kademe ilerlemesinin durdurulması) almış olanlar", "Sadece sınavda başarısız olanlar", "Sadece uyarma cezası alanlar", "Sadece devamsızlık yapanlar", "İlişik kesilmez"],
  a: 0,
  e: "Adaylık süresi içinde TEMEL VE HAZIRLAYICI EĞİTİM VE STAJ DEVRELERİNİN HER BİRİNDE BAŞARISIZ OLANLAR, HAL VE HAREKETLERİNDE MEMURİYETLE BAĞDAŞMAYACAK FİİLLERDE BULUNANLAR, GÖREVE DEVAMSIZLIKLARI TESPİT EDİLENLER ile DİSİPLİN CEZASI ALMIŞ OLANLAR (AYLIKTAN KESME VEYA KADEME İLERLEMESİNİN DURDURULMASI cezası) DİSİPLİN AMİRLERİNİN TEKLİFİ VE ATAMAYA YETKİLİ AMİRİN ONAYI ile ilişikleri kesilir.",
  t: "Adaylık", d: 3
},
{
  q: "Adaylık süresini başarıyla dolduranlar nasıl asli memurluğa atanır?",
  o: ["Disiplin amirinin teklifi ve atamaya yetkili amirin onayı ile onay tarihinden geçerli olmak üzere", "Kendiliğinden asli memur olurlar", "Sınavla asli memurluğa geçilir", "Cumhurbaşkanı onayı ile", "Bakan onayı ile"],
  a: 0,
  e: "ADAYLIK SÜRESİNİ BAŞARI İLE DOLDURANLAR DİSİPLİN AMİRİNİN TEKLİFİ VE ATAMAYA YETKİLİ AMİRİN ONAYI İLE ONAY TARİHİNDEN GEÇERLİ OLMAK ÜZERE ASLİ MEMURLUĞA ATANIRLAR.",
  t: "Adaylık", d: 3
},
{
  q: "Atanan memurun işe başlama süresi nedir?",
  o: ["İkamet ettiği yerde göreve atananlar atama emrinin tebliğini izleyen iş günü, başka yerde göreve atananlar ise on beş gün içinde görev yerine hareket ederek yol süresini izleyen iş günü içinde işe başlamak zorundadır", "Herkes on beş gün içinde başlar", "Herkes bir ay içinde başlar", "İkamet ettiği yerde 7 gün, başka yerde 30 gün", "Süre öngörülmemiştir"],
  a: 0,
  e: "İKAMET ETTİĞİ YERDE GÖREVE ATANANLAR, ATAMA EMRİNİN TEBLİĞİNİ İZLEYEN İŞ GÜNÜ; BAŞKA YERDE GÖREVE ATANANLAR İSE ON BEŞ GÜN İÇİNDE GÖREV YERİNE HAREKET EDEREK YOL SÜRESİNİ İZLEYEN İŞ GÜNÜ İÇERİSİNDE İŞE BAŞLAMAK ZORUNDADIR.",
  t: "Adaylık", d: 3
},

/* ---------- İSTİSNAİ MEMURLUK ---------- */
{
  q: "İstisnai memurluk nedir?",
  o: ["Bazı memurluklara DMK'nın atanma, sınavlar, kademe ilerlemesi ve dereceye yükselmesine ilişkin hükümleriyle bağlı olmaksızın atama yapılabilmesidir", "Sözleşmeli personel istihdamıdır", "İşçi statüsüdür", "Geçici personel istihdamıdır", "Aday memurluktur"],
  a: 0,
  e: "Bazı memurluklara DMK'nın ATANMA, SINAVLAR, KADEME İLERLEMESİ VE DERECEYE YÜKSELMESİNE İLİŞKİN HÜKÜMLERİYLE BAĞLI OLMAKSIZIN ATAMA YAPILABİLİR; bu tür memurluklara İSTİSNAİ MEMURLUK denir. İstisnai memurlara DMK'nın ATAMA, SINAVLAR, KADEME İLERLEMESİ VE DERECE YÜKSELMESİ DIŞINDA KALAN TÜM HÜKÜMLERİ UYGULANIR.",
  t: "İstisnai Memurluk", d: 2
},
{
  q: "İstisnai memurluklara örnek olarak aşağıdakilerden hangisi verilebilir?",
  o: ["Bakan yardımcılığı, bakan müşavirleri, valilik, büyükelçilik, MİT memurlukları, Din İşleri Yüksek Kurulu üyelikleri, Özelleştirme İdaresi Başkanı", "Kaymakamlık", "Vali yardımcılığı", "İl müdürlükleri", "Öğretmenlik"],
  a: 0,
  e: "İSTİSNAİ MEMURLUKLARA örnekler: BAKAN YARDIMCILIĞI, BAKAN MÜŞAVİRLERİ, ÖZEL KALEM MÜDÜRLÜKLERİ, SAVUNMA SANAYİİ BAŞKANI-yardımcısı-hukuk müşaviri, VALİLİK, BÜYÜKELÇİLİK-ELÇİLİK-DAİMİ TEMSİLCİLİK, CUMHURBAŞKANLIĞI VE TBMM MEMURLUKLARI, MİT MEMURLUKLARI, MGK GENEL SEKRETERLİĞİ MEMURLUKLARI, DİN İŞLERİ YÜKSEK KURULU ÜYELİKLERİ, ÖZELLEŞTİRME İDARESİ BAŞKANI VE YARDIMCISI. DİKKAT: KAYMAKAMLIK VE VALİ YARDIMCILIĞI MESLEK MEMURLUĞUDUR.",
  t: "İstisnai Memurluk", d: 3
},

/* ---------- MEMURUN YÜKÜMLÜLÜKLERİ ---------- */
{
  q: "Devlet memuru amirinden aldığı emri Anayasaya, kanuna aykırı görürse ne yapar?",
  o: ["Yerine getirmez ve aykırılığı emri verene bildirir; amir emrinde ısrar eder ve yazı ile yenilerse memur emri yapmaya mecburdur, sorumluluk emri verene aittir", "Emri her halde yerine getirir", "Emri hiçbir şekilde yerine getirmez", "Doğrudan yargıya başvurur", "Görevinden istifa eder"],
  a: 0,
  e: "Devlet memuru amirlerinden aldığı emri ANAYASA, KANUN, CBK VE YÖNETMELİK hükümlerine aykırı görürse YERİNE GETİRMEZ ve AYKIRILIĞI O EMRİ VERENE BİLDİRİR. AMİR EMRİNDE ISRAR EDER VE BU EMRİNİ YAZI İLE YENİLERSE, MEMUR BU EMRİ YAPMAYA MECBURDUR. ANCAK EMRİN YERİNE GETİRİLMESİNDEN DOĞACAK SORUMLULUK EMRİ VERENE AİTTİR. KONUSU SUÇ TEŞKİL EDEN EMİR HİÇBİR SURETLE YERİNE GETİRİLMEZ; yerine getiren SORUMLULUKTAN KURTULAMAZ.",
  t: "Memurun Yükümlülükleri", d: 2
},
{
  q: "Mal bildirimi ne zaman yapılır ve ne zaman yenilenir?",
  o: ["Göreve atanmada göreve giriş belgeleriyle birlikte yapılır; sonu 0 ve 5 ile biten yılların en geç şubat ayı sonuna kadar yenilenir, malvarlığında önemli bir artış olduğunda ise 1 ay içinde yenilenir", "Her yıl ocak ayında yenilenir", "Sadece göreve girişte yapılır", "Sonu 0 ve 5 ile biten yıllarda mart ayı sonuna kadar", "İki yılda bir yenilenir"],
  a: 0,
  e: "MAL BİLDİRİMİ GÖREVE ATANMADA, GÖREVE GİRİŞ İÇİN GEREKLİ BELGELERLE BİRLİKTE YAPILIR. SONU 0 VE 5 İLE BİTEN YILLARIN EN GEÇ ŞUBAT AYI SONUNA KADAR BİLDİRİMLER YENİLENİR. MALVARLIĞINDA ÖNEMLİ BİR ARTIŞ OLDUĞUNDA DA BİLDİRİM 1 AY İÇİNDE YENİLENİR. (3628 sayılı Kanun kapsamında memurun KENDİSİNE, EŞİNE VE VELAYETİ ALTINDAKİ ÇOCUKLARINA ait mallar bildirilir.)",
  t: "Memurun Yükümlülükleri", d: 3
},
{
  q: "Memurların resmi belge, araç ve gereçleri iade yükümlülüğü kimlere geçer?",
  o: ["Memurun mirasçılarına da geçer", "Sadece memura aittir", "Kurumun sorumluluğundadır", "Amirine geçer", "Kimseye geçmez"],
  a: 0,
  e: "Devlet memurları görevleri ile ilgili resmi belge, araç ve gereçleri YETKİ VERİLEN MAHALLER DIŞINA ÇIKARAMAZLAR, ÖZEL İŞLERİNDE KULLANAMAZLAR. Kendilerine görevleri icabı teslim edilen belge, araç ve gereçleri GÖREVLERİ SONA ERDİĞİ ZAMAN İADE ETMEK zorundadırlar. BU ZORUNLULUK MEMURUN MİRASÇILARINA DA GEÇER.",
  t: "Memurun Yükümlülükleri", d: 3
},

/* ---------- MEMURUN YASAKLARI ---------- */
{
  q: "Memurların ticari faaliyet yasağı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Anonim ve limited şirkette ortak olabilirler (ancak yönetim ve denetim kurullarında görev alamazlar), komandit şirkette komanditer ortak olabilirler", "Hiçbir şirkete ortak olamazlar", "Anonim şirkette yönetim kuruluna girebilirler", "Kollektif şirkette ortak olabilirler", "Komandit şirkette komandite ortak olabilirler"],
  a: 0,
  e: "Memurlar TTK'ya göre TACİR VEYA ESNAF sayılmalarını gerektirecek faaliyette bulunamaz, ticaret ve sanayi müesseselerinde görev alamaz, TİCARİ MÜMESSİL/TİCARİ VEKİL veya KOLLEKTİF ŞİRKETLERDE ORTAK ya da KOMANDİT ŞİRKETTE KOMANDİTE ORTAK olamazlar. ANONİM VE LİMİTED ŞİRKETTE ORTAK OLABİLİRLER (ancak YÖNETİM VE DENETİM KURULLARINDA GÖREV ALAMAZLAR); KOMANDİT ŞİRKETTE 'KOMANDİTER ORTAK' OLABİLİRLER.",
  t: "Memurun Yasakları", d: 3
},
{
  q: "Memurlar hangi kooperatif ve sandıkların yönetim-denetim kurullarında yer alabilirler?",
  o: ["Üyesi oldukları yapı, kalkınma ve tüketim kooperatifleri ile kanunla veya CB kararnamesiyle kurulmuş yardım sandıklarının yönetim ve denetim kurullarında", "Hiçbir kooperatifte yer alamazlar", "Sadece tüketim kooperatiflerinde", "Tüm kooperatiflerde yer alabilirler", "Sadece yardım sandıklarında"],
  a: 0,
  e: "Memurların ÜYESİ OLDUKLARI 'YAPI, KALKINMA VE TÜKETİM KOOPERATİFLERİ' ile KANUNLA VEYA CB KARARNAMESİ İLE KURULMUŞ 'YARDIM SANDIKLARININ' YÖNETİM VE DENETİM KURULLARINDA YER ALMALARI SERBESTTİR.",
  t: "Memurun Yasakları", d: 3
},
{
  q: "Memurlar adi şirket ortağı olabilir mi?",
  o: ["Olamaz; adi şirketin tüzel kişiliği bulunmadığı için tacir sıfatı ayrı ayrı her bir ortağa ait olur ve memurlar tacir sıfatını kazanacaklarından adi şirket ortaklığında bulunamazlar", "Olabilirler", "Sadece yönetimde yer almazlarsa olabilirler", "Kanunda yasak yoktur, serbesttir", "Sadece izinle olabilirler"],
  a: 0,
  e: "KANUNDA AÇIKÇA BELİRTİLMESE DE MEMURLAR ADİ ŞİRKET ORTAKLIĞI DA YAPAMAZ. ADİ ŞİRKETİN TÜZEL KİŞİLİĞİ BULUNMADIĞI İÇİN TACİR SIFATI ŞİRKETE DEĞİL, AYRI AYRI HER BİR ORTAĞA AİTTİR. Bu nedenle memurlar adi şirket ortağı olduklarında TACİR SIFATINI KAZANACAKLARINDAN adi şirket ortaklığında bulunamazlar.",
  t: "Memurun Yasakları", d: 3
},
{
  q: "Memurun hediye alma yasağının kapsamını belirlemeye kim yetkilidir?",
  o: ["Kamu Görevlileri Etik Kurulu", "İçişleri Bakanlığı", "Cumhurbaşkanlığı", "Sayıştay", "Devlet Denetleme Kurulu"],
  a: 0,
  e: "Memurun doğrudan ya da aracı eliyle HEDİYE İSTEMESİ, KABUL ETMESİ veya iş sahiplerinden BORÇ PARA İSTEMESİ VE ALMASI yasaktır. HEDİYE ALMA YASAĞININ KAPSAMINI BELİRLEMEYE KAMU GÖREVLİLERİ ETİK KURULU YETKİLİDİR. EN AZ GENEL MÜDÜR SEVİYESİNDEKİ üst düzey kamu görevlilerince alınan hediyelerin LİSTESİNİ her takvim yılı sonunda istemeye de KAMU GÖREVLİLERİ ETİK KURULU yetkilidir.",
  t: "Memurun Yasakları", d: 3
},
{
  q: "Memurların basına demeç verme yasağı bakımından bilgi kim tarafından verilebilir?",
  o: ["Ancak bakanın yetkili kılacağı görevli; illerde valiler veya yetkili kılacağı görevli tarafından", "Her memur bilgi verebilir", "Sadece Cumhurbaşkanlığı İletişim Başkanlığı", "Sadece bakan bizzat", "Basın sözcüsü"],
  a: 0,
  e: "Memurlar kamu görevleri hakkında BASINA, HABER AJANSLARINA VEYA RADYO-TELEVİZYON KURUMLARINA BİLGİ VEYA DEMEÇ VEREMEZLER. Bu konuda gerekli bilgi ANCAK BAKANIN YETKİLİ KILACAĞI GÖREVLİ; İLLERDE VALİLER VEYA YETKİLİ KILACAĞI GÖREVLİ tarafından verilebilir.",
  t: "Memurun Yasakları", d: 3
},
{
  q: "Görevinden ayrılan memurun ayrıldığı kuruma karşı görev alma yasağı ne kadar sürelidir?",
  o: ["Ayrılma tarihinden başlayarak üç yıl süre ile, ayrılma tarihinden önceki iki yıl içinde hizmetinde bulunduğu kuruma karşı", "İki yıl", "Bir yıl", "Beş yıl", "Yasak yoktur"],
  a: 0,
  e: "GÖREVİNDEN AYRILAN MEMUR, AYRILDIĞI TARİHTEN ÖNCEKİ İKİ YIL İÇİNDE HİZMETİNDE BULUNDUĞU KURUMA KARŞI, AYRILMA TARİHİNDEN BAŞLAYARAK ÜÇ YIL SÜRE İLE, ayrıldığı kurumdaki görev ve faaliyet alanları ile ilgili konularda DOĞRUDAN VEYA DOLAYLI OLARAK GÖREV VE İŞ ALAMAZ, TAAHHÜDE GİREMEZ, KOMİSYONCULUK VEYA TEMSİLCİLİK YAPAMAZ.",
  t: "Memurun Yasakları", d: 3
},
{
  q: "Memurların toplu eylem yasağı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Kamu hizmetlerini aksatacak şekilde kasıtlı olarak birlikte çekilmeleri, görevlerine gelmemeleri veya hizmetleri yavaşlatmaları yasaktır; ancak müracaat, şikayet ve dava açma hakkının kullanılmasında toplu hareket etmelerinde engel bulunmamaktadır", "Her türlü toplu hareket yasaktır", "Toplu eylem serbesttir", "Sadece grev yasaktır", "Dava açmada toplu hareket yasaktır"],
  a: 0,
  e: "Devlet memurlarının KAMU HİZMETLERİNİ AKSATACAK ŞEKİLDE memurluktan KASITLI OLARAK BİRLİKTE ÇEKİLMELERİ veya GÖREVLERİNE GELMEMELERİ veya Devlet hizmetlerinin YAVAŞLATILMASI VEYA AKSATILMASI sonucunu doğuracak eylem ve hareketlerde bulunmaları YASAKTIR. ANCAK MEMURLARIN MÜRACAAT, ŞİKAYET VE DAVA AÇMA HAKKININ KULLANILMASINDA TOPLU OLARAK HAREKET ETMELERİNDE BİR ENGEL BULUNMAMAKTADIR.",
  t: "Memurun Yasakları", d: 3
},

/* ---------- MEMURUN HAKLARI ---------- */
{
  q: "Memurların sendika ve toplu sözleşme hakkı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["12 Eylül 2010 Anayasa değişikliğiyle memur sendikalarına toplu sözleşme yapma hakkı tanınmıştır; ancak memurların grev hakkı bulunmamaktadır", "Memurların grev hakkı vardır", "Toplu sözleşme hakkı yoktur", "Sendika kurma hakkı yoktur", "Hem grev hem toplu sözleşme hakkı vardır"],
  a: 0,
  e: "Kamu görevlilerinin SENDİKA KURMALARINA kanun ile izin verilebilir. Memur sendikaları ÜYELERİ ADINA YARGI YERLERİNE BAŞVURABİLİR ve idare ile amaçları doğrultusunda TOPLU GÖRÜŞME yapabilir. 12 EYLÜL 2010 TARİHLİ ANAYASA DEĞİŞİKLİĞİYLE MEMUR SENDİKALARINA TOPLU SÖZLEŞME YAPMA HAKKI DA TANINMIŞTIR. ANCAK MEMURLARIN GREV HAKKI BULUNMAMAKTADIR.",
  t: "Memurun Hakları", d: 3
},
{
  q: "Devlet memurlarına aylıkları nasıl ödenir?",
  o: ["Her ayın on beşinde peşin olarak ödenir; aylığa hak kazanabilmek için memurun işe başlamış olması gerekir", "Her ayın sonunda ödenir", "Her ayın birinde peşin ödenir", "İki ayda bir ödenir", "Göreve başlamadan da aylık alınır"],
  a: 0,
  e: "AYLIK HAKKI: aylığa hak kazanabilmek için MEMURUN İŞE BAŞLAMIŞ OLMASI GEREKİR. DEVLET MEMURLARINA AYLIKLARI HER AYIN ON BEŞİNDE PEŞİN OLARAK ÖDENİR.",
  t: "Memurun Hakları", d: 2
},
{
  q: "Memurun kademe ilerlemesi (yatay ilerleme) için hangi koşullar bir arada bulunmalıdır?",
  o: ["Bulunduğu kademede en az bir yıl çalışmış olmak ve bulunduğu derecede ilerleyebileceği bir kademenin bulunması", "En az üç yıl çalışmış olmak", "Üst derecede açık kadro bulunması", "Sınavda başarılı olmak", "Öğrenim şartını taşımak"],
  a: 0,
  e: "YATAY İLERLEME (KADEME İLERLEMESİ), bir devlet memurunun BULUNDUĞU DERECE İÇİNDEKİ KADEMESİNİN İLERLEMESİDİR. Şu İKİ KOŞULUN BİR ARADA bulunması zorunludur: BULUNDUĞU KADEMEDE EN AZ BİR YIL ÇALIŞMIŞ OLMAK ve BULUNDUĞU DERECEDE İLERLEYEBİLECEĞİ BİR KADEMENİN BULUNMASI.",
  t: "Memurun Hakları", d: 3
},
{
  q: "Memurun derece yükselmesi (dikey ilerleme) şartları hangileridir?",
  o: ["Üst derecede açık bir kadronun bulunması, alt derece içinde en az üç yıl ve bu derecenin üçüncü kademesinde bir yıl bulunmuş olmak ve kadronun tahsis edildiği görev için öngörülmüş koşulları taşımak", "Bulunduğu kademede bir yıl çalışmak", "Sadece açık kadro bulunması", "İki yıl çalışmış olmak", "Sınav kazanmak"],
  a: 0,
  e: "DİKEY İLERLEME (DERECE YÜKSELMESİ), memurun bulunduğu sınıf içinde BİR ALT DERECEDEN BİR ÜST DERECEYE geçmesidir. Şartları: ÜST DERECEDE AÇIK BİR KADRONUN BULUNMASI, ALT DERECE İÇİNDE EN AZ ÜÇ YIL VE BU DERECENİN ÜÇÜNCÜ KADEMESİNDE BİR YIL BULUNMUŞ OLMAK, KADRONUN TAHSİS EDİLDİĞİ GÖREV İÇİN (varsa) ÖNGÖRÜLMÜŞ KOŞULLARI TAŞIMAK (örneğin öğrenim koşulu).",
  t: "Memurun Hakları", d: 3
},

/* ---------- İZİNLER ---------- */
{
  q: "Devlet memurlarının yıllık izin süresi nedir?",
  o: ["Hizmeti 1 yıldan on yıla kadar (on yıl dahil) olanlar için 20 gün, hizmeti on yıldan fazla olanlar için 30 gün", "Herkes için 20 gün", "Herkes için 30 gün", "1-5 yıl için 15 gün, sonrası 30 gün", "Hizmet süresine bağlı değildir"],
  a: 0,
  e: "YILLIK İZİN: hizmeti 1 YILDAN ON YILA KADAR (ON YIL DAHİL) olanlar için 20 GÜN; hizmeti ON YILDAN FAZLA olanlar için 30 GÜN. Yıllık izinler amirin uygun bulacağı zamanlarda TOPTAN VEYA KISIM KISIM kullanılabilir; BİRBİRİNİ İZLEYEN İKİ YILIN İZNİ BİR ARADA verilebilir. CARİ YIL İLE BİR ÖNCEKİ YIL HARİÇ, ÖNCEKİ YILLARA AİT KULLANILMAYAN İZİN HAKLARI DÜŞER.",
  t: "Memur İzinleri", d: 2
},
{
  q: "Kendisinin veya çocuğunun evlenmesi ya da eş, çocuk, ana, baba, kardeş ölümü hallerinde verilen mazeret izni kaç gündür?",
  o: ["7 gün", "10 gün", "5 gün", "3 gün", "15 gün"],
  a: 0,
  e: "MAZERET İZNİ: KENDİSİNİN VEYA ÇOCUĞUNUN EVLENMESİ ya da EŞİNİN, ÇOCUĞUNUN, KENDİSİNİN VEYA EŞİNİN ANA, BABA VE KARDEŞİNİN ÖLÜMÜ hâllerinde isteği üzerine 7 GÜN izin verilir.",
  t: "Memur İzinleri", d: 2
},
{
  q: "Kadın memura verilen analık izni ne kadardır?",
  o: ["Doğumdan önce sekiz, doğumdan sonra sekiz hafta olmak üzere toplam 16 hafta", "Toplam 12 hafta", "Toplam 24 hafta", "Doğumdan sonra 16 hafta", "Toplam 18 hafta"],
  a: 0,
  e: "ANALIK İZNİ: kadın memura DOĞUMDAN ÖNCE SEKİZ, DOĞUMDAN SONRA SEKİZ HAFTA olmak üzere TOPLAM 16 HAFTA. ÇOĞUL GEBELİK durumunda doğum öncesi sekiz haftalık süreye İKİ HAFTA EKLENİR. Sağlık durumunun uygun olduğunu tabip raporuyla belgeleyen kadın memur, isteği hâlinde DOĞUMDAN ÖNCEKİ ÜÇ HAFTAYA KADAR çalışabilir; fiilen çalıştığı süreler DOĞUM SONRASI analık izni süresine EKLENİR.",
  t: "Memur İzinleri", d: 3
},
{
  q: "Babalık izni kaç gündür?",
  o: ["10 gün", "7 gün", "5 gün", "3 gün", "15 gün"],
  a: 0,
  e: "BABALIK İZNİ 10 GÜNDÜR. Karşılaştırma için diğer mazeret izinleri: EVLENME VE ÖLÜM hallerinde 7 GÜN, ANALIK İZNİ 16 HAFTA, genel mazeret izni 10 GÜN (zaruret halinde öğretmenler hariç 10 gün daha).",
  t: "Memur İzinleri", d: 2
},
{
  q: "Süt izni süreleri nedir?",
  o: ["Analık izninin bitiminden itibaren ilk altı ayda günde 3 saat, ikinci altı ayda günde 1,5 saat", "İlk altı ayda günde 1,5 saat, ikinci altı ayda günde 3 saat", "Bir yıl boyunca günde 2 saat", "İlk altı ayda günde 2 saat", "Süt izni yoktur"],
  a: 0,
  e: "SÜT İZNİ: ANALIK İZNİ SÜRESİNİN BİTİM TARİHİNDEN İTİBAREN İLK ALTI AYDA GÜNDE 3 SAAT, İKİNCİ ALTI AYDA GÜNDE 1,5 SAAT.",
  t: "Memur İzinleri", d: 2
},
{
  q: "Mazeret sebebiyle verilen 10 günlük izin hangi makamlarca verilir ve ikinci kez verilirse ne olur?",
  o: ["Merkezde atamaya yetkili amir, ilde vali, ilçede kaymakam ve yurtdışında diplomatik misyon şefi tarafından birim amirinin muvafakati ile verilir; öğretmenler hariç aynı usulle on gün daha verilebilir ve bu ikinci izin yıllık izinden düşülür", "Sadece bakan verir ve ikinci izin verilemez", "Doğrudan birim amiri verir", "İkinci izin yıllık izinden düşülmez", "Öğretmenlere de ikinci izin verilir"],
  a: 0,
  e: "Sayılan haller dışında MERKEZDE ATAMAYA YETKİLİ AMİR, İLDE VALİ, İLÇEDE KAYMAKAM VE YURTDIŞINDA DİPLOMATİK MİSYON ŞEFİ tarafından, BİRİM AMİRİNİN MUVAFAKATİ ile bir yıl içinde toptan veya bölümler hâlinde memurlara 10 GÜN mazeret izni verilir. ZARURET HÂLİNDE ÖĞRETMENLER HARİÇ olmak üzere aynı usûlle ON GÜN DAHA verilebilir; bu takdirde İKİNCİ KEZ VERİLEN BU İZİN YILLIK İZİNDEN DÜŞÜLÜR.",
  t: "Memur İzinleri", d: 3
},
{
  q: "Kanser, verem ve akıl hastalığı gibi uzun süreli tedaviye ihtiyaç gösteren hastalıkta hastalık izni ne kadardır?",
  o: ["18 aya kadar (diğer hastalık hallerinde 12 aya kadar)", "12 aya kadar", "24 aya kadar", "6 aya kadar", "36 aya kadar"],
  a: 0,
  e: "HASTALIK İZNİ: KANSER, VEREM VE AKIL HASTALIĞI gibi UZUN SÜRELİ bir tedaviye ihtiyaç gösteren hastalık hâlinde 18 AYA KADAR; DİĞER HASTALIK HÂLLERİNDE 12 AYA KADAR. GÖREVİ SIRASINDA VEYA GÖREVİNDEN DOLAYI kazaya/saldırıya uğrayan veya meslek hastalığına tutulan memur İYİLEŞİNCEYE KADAR İZİNLİ SAYILIR.",
  t: "Memur İzinleri", d: 3
},
{
  q: "Refakat izni ne kadardır ve hangi şartla verilir?",
  o: ["Memurun bakmakla yükümlü olduğu veya refakat etmediğinde hayatı tehlikeye girecek ana, baba, eş, çocuk ve kardeşlerinden birinin ağır kaza/uzun süren hastalığında, sağlık kurulu raporuyla belgelendirilmek şartıyla aylık ve özlük hakları korunarak 3 aya kadar", "6 aya kadar", "18 aya kadar", "1 aya kadar", "12 aya kadar"],
  a: 0,
  e: "REFAKAT İZNİ: MEMURUN BAKMAKLA YÜKÜMLÜ OLDUĞU veya MEMUR REFAKAT ETMEDİĞİ TAKDİRDE HAYATI TEHLİKEYE GİRECEK ANA, BABA, EŞ VE ÇOCUKLARI İLE KARDEŞLERİNDEN BİRİNİN ağır bir kaza geçirmesi veya tedavisi uzun süren bir hastalığı hâllerinde, SAĞLIK KURULU RAPORUYLA BELGELENDİRİLMESİ şartıyla, AYLIK VE ÖZLÜK HAKLARI KORUNARAK 3 AYA KADAR verilir.",
  t: "Memur İzinleri", d: 3
},
{
  q: "Doğum yapan memura ve eşi doğum yapan memura verilen aylıksız izin ne kadardır?",
  o: ["24 aya kadar", "18 aya kadar", "12 aya kadar", "36 aya kadar", "6 aya kadar"],
  a: 0,
  e: "AYLIKSIZ İZİN: DOĞUM YAPAN MEMURA doğum sonrası analık izninin bitiminden; EŞİ DOĞUM YAPAN MEMURA ise doğum tarihinden itibaren istekleri üzerine 24 AYA KADAR aylıksız izin verilir. ÜÇ YAŞINI DOLDURMAMIŞ BİR ÇOCUĞUN EVLAT EDİNİLMESİ halinde de 24 AYA KADAR verilir. REFAKAT İZNİNİN BİTİMİNDEN itibaren sağlık kurulu raporuyla 18 AYA KADAR aylıksız izin verilir.",
  t: "Memur İzinleri", d: 3
},
{
  q: "Beş hizmet yılını tamamlamış memura isteği halinde verilen aylıksız izin ne kadardır?",
  o: ["Memuriyeti boyunca ve en fazla iki defada kullanılmak üzere toplam bir yıla kadar", "Toplam iki yıla kadar", "Her yıl bir aya kadar", "Toplam altı aya kadar", "Verilmez"],
  a: 0,
  e: "Memura, yıllık izinde esas alınan süreler itibarıyla BEŞ HİZMET YILINI TAMAMLAMIŞ olması ve isteği hâlinde, MEMURİYETİ BOYUNCA VE EN FAZLA İKİ DEFADA KULLANILMAK ÜZERE, TOPLAM BİR YILA KADAR AYLIKSIZ İZİN verilebilir. Ancak SIKIYÖNETİM, OHAL veya genel hayata müessir afet ilan edilen bölgelere zorunlu olarak atananlar hakkında bu bölgelerdeki görev süreleri içinde bu hüküm UYGULANMAZ.",
  t: "Memur İzinleri", d: 3
},
{
  q: "Aylıksız izin süresinin bitiminde göreve dönmeyen memur hakkında ne olur?",
  o: ["Aylıksız izin süresinin bitiminde veya mazeret sebebinin kalkmasını izleyen on gün içinde görevine dönmeyenler memuriyetten çekilmiş sayılır", "Disiplin cezası verilir", "Görevden uzaklaştırılır", "Bir ay süre daha verilir", "Hiçbir işlem yapılmaz"],
  a: 0,
  e: "Aylıksız izin süresinin bitiminden önce MAZERETİ GEREKTİREN SEBEBİN ORTADAN KALKMASI hâlinde ON GÜN İÇİNDE GÖREVE DÖNÜLMESİ ZORUNLUDUR. AYLIKSIZ İZİN SÜRESİNİN BİTİMİNDE VEYA MAZERET SEBEBİNİN KALKMASINI İZLEYEN ON GÜN İÇİNDE GÖREVİNE DÖNMEYENLER, MEMURİYETTEN ÇEKİLMİŞ SAYILIR. MUVAZZAF ASKERLİĞE ayrılan memurlar askerlik süresince GÖREV YERİ SAKLI KALARAK aylıksız izinli sayılır.",
  t: "Memur İzinleri", d: 3
},
{
  q: "En az %70 oranında engelli çocuğun hastalanması halinde ana veya babadan sadece biri tarafından kullanılabilecek izin ne kadardır?",
  o: ["Bir yıl içinde toptan veya bölümler halinde 10 güne kadar", "20 güne kadar", "30 güne kadar", "5 güne kadar", "İzin verilmez"],
  a: 0,
  e: "Memurlara; EN AZ YÜZDE 70 ORANINDA ENGELLİ ya da SÜREĞEN HASTALIĞI OLAN ÇOCUĞUNUN (çocuğun evli olması durumunda eşinin de en az %70 engelli olması kaydıyla) HASTALANMASI hâlinde HASTALIK RAPORUNA DAYALI olarak ANA VEYA BABADAN SADECE BİRİ tarafından kullanılması kaydıyla BİR YIL İÇİNDE TOPTAN VEYA BÖLÜMLER HÂLİNDE 10 GÜNE KADAR mazeret izni verilir.",
  t: "Memur İzinleri", d: 3
},

/* ---------- DİSİPLİN REJİMİ ÖZETİ ---------- */
{
  q: "Uyarma ve kınama cezalarını vermeye kim yetkilidir ve itiraz nereye yapılır?",
  o: ["Disiplin amiri yetkilidir; 7 gün içinde disiplin kuruluna itiraz edilir", "Disiplin kurulu yetkilidir; yüksek disiplin kuruluna itiraz edilir", "Yüksek disiplin kurulu yetkilidir", "Atamaya yetkili amir yetkilidir", "İtiraz yolu kapalıdır"],
  a: 0,
  e: "UYARMA ve KINAMA cezalarını DİSİPLİN AMİRİ verir; bu cezalara karşı 7 GÜN İÇİNDE DİSİPLİN KURULUNA İTİRAZ edilir. AYLIKTAN KESME (1/30-1/8) ve KADEME İLERLEMESİNİN DURDURULMASI (1-3 yıl) cezalarında DİSİPLİN KURULU KARARI SONRASI ATAMAYA YETKİLİ AMİR karar verir; 7 GÜN İÇİNDE YÜKSEK DİSİPLİN KURULUNA İTİRAZ edilir. MEMURLUKTAN ÇIKARMA cezasını AMİRLERİN İSTEĞİ ÜZERİNE YÜKSEK DİSİPLİN KURULU verir ve İDARİ BAŞVURU YOLU KAPALIDIR.",
  t: "Disiplin Rejimi", d: 3
},
{
  q: "Disiplin cezalarına karşı yargı yolu bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Tüm disiplin cezalarına karşı yargı yolu açıktır; disiplin kararlarının yargı denetimi dışında bırakılamayacağı kuralı 2010 Anayasa değişikliğiyle getirilmiştir", "Sadece memurluktan çıkarma cezasına karşı yargı yolu açıktır", "Uyarma ve kınamaya karşı yargı yolu kapalıdır", "Yargı yolu 1982 Anayasasından beri açıktır", "Yargı yolu kapalıdır"],
  a: 0,
  e: "TÜM DİSİPLİN CEZALARINA KARŞI YARGI YOLU AÇIKTIR. DİSİPLİN KARARLARININ YARGI DENETİMİ DIŞINDA BIRAKILAMAYACAĞI KURALI 2010 ANAYASA DEĞİŞİKLİĞİDİR.",
  t: "Disiplin Rejimi", d: 3
}

]);

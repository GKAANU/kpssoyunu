/* İdare Hukuku — 13. bölüm (dava açma süresinin başlaması ve durması, iptal
   davasında taraflar ve sonuçlar, tam yargı davası, dilekçe koşulları,
   yürütmenin durdurulması) */
KPSS.registerBank('idare', [
{
  q: "İdareye yapılan başvuruya cevap verilmemesi (zımni ret) hâlinde dava açma süresi nasıl işler?",
  o: ["Otuz günün bitiminden itibaren dava süresi işlemeye başlar", "Başvuru tarihinden itibaren dava süresi işlemeye başlar", "Altmış günün bitiminden itibaren süre işlemeye başlar", "Süre işlemez, dava her zaman açılabilir", "Dört ayın bitiminden itibaren süre işler"],
  a: 0,
  e: "İDARİ MAKAMLARIN SÜKUTU: İlgililer, haklarında idari davaya konu olabilecek bir işlem veya eylemin yapılması için idari makamlara başvurabilirler. OTUZ GÜN İÇİNDE BİR CEVAP VERİLMEZSE İSTEK REDDEDİLMİŞ SAYILIR. İlgililer OTUZ GÜNÜN BİTTİĞİ TARİHTEN İTİBAREN DAVA AÇMA SÜRESİ İÇİNDE, konusuna göre Danıştay'a, idare ve vergi mahkemelerine dava açabilirler.",
  t: "Dava Süresinin Başlaması", d: 2
},
{
  q: "İdare, başvuruya kesin olmayan bir cevap verirse ilgilinin kesin cevabı bekleme süresi en fazla ne kadardır?",
  o: ["Başvuru tarihinden itibaren dört ay", "Başvuru tarihinden itibaren otuz gün", "Başvuru tarihinden itibaren altmış gün", "Başvuru tarihinden itibaren altı ay", "Bekleme süresi sınırsızdır"],
  a: 0,
  e: "İDARİ MAKAMIN KESİN OLMAYAN BİR CEVAP VERMESİ: ilgili bu cevabı, İSTEMİNİN REDDİ SAYARAK DAVA AÇABİLECEĞİ GİBİ, KESİN CEVABI DA BEKLEYEBİLİR. Bu takdirde DAVA AÇMA SÜRESİ İŞLEMEZ. ANCAK BEKLEME SÜRESİ BAŞVURU TARİHİNDEN İTİBAREN DÖRT AYI GEÇEMEZ. Başvurucu 4 ayın sonunda süresi içinde dava açmalıdır.",
  t: "Dava Süresinin Başlaması", d: 3
},
{
  q: "Zımni ret üzerine süresinde dava açılmamış ve sonradan idare açık ret cevabı vermişse ne olur?",
  o: ["Tebliğden itibaren 60 gün içinde dava açabilir", "Tebliğden itibaren 30 gün içinde dava açabilir", "Tebliğden itibaren 15 gün içinde dava açabilir", "Dava açma hakkı tümüyle düşmüş sayılır", "Yalnızca Kamu Denetçiliğine başvurabilir"],
  a: 0,
  e: "Başvurunun ZIMNEN REDDEDİLMESİ durumunda bu işleme karşı DAVA AÇILMAMASI veya SÜRESİNDE DAVA AÇILMADIĞI gerekçesiyle davanın SÜREDEN REDDEDİLMESİ durumunda, idare tarafından OTUZ GÜNLÜK SÜRENİN BİTMESİNİN ARDINDAN AÇIK BİR RET CEVABI VERİLİRSE, İLGİLİLER BU CEVABIN TEBLİĞİNDEN İTİBAREN 60 GÜN İÇİNDE DAVA AÇABİLİR.",
  t: "Dava Süresinin Başlaması", d: 3
},
{
  q: "İYUK m. 11 uyarınca dava açma süresini durduran başvuru kime yapılır?",
  o: ["Üst makama, üst makam yoksa işlemi yapan makama", "Doğrudan işlemi yapan makama, üst makama yapılamaz", "Danıştay Başsavcılığına", "İdari yargı merciine", "Kamu Denetçiliği Kurumuna"],
  a: 0,
  e: "İYUK m. 11: İlgililer tarafından idari dava açılmadan önce, İDARİ İŞLEMİN KALDIRILMASI, GERİ ALINMASI, DEĞİŞTİRİLMESİ VEYA YENİ BİR İŞLEM YAPILMASI ÜST MAKAMDAN, ÜST MAKAM YOKSA İŞLEMİ YAPMIŞ OLAN MAKAMDAN, İDARİ DAVA AÇMA SÜRESİ İÇİNDE istenebilir. BU BAŞVURMA, İŞLEMEYE BAŞLAMIŞ OLAN İDARİ DAVA AÇMA SÜRESİNİ DURDURUR.",
  t: "Dava Süresinin Durması", d: 3
},
{
  q: "Süreyi durduran idari başvuru reddedilirse dava açma süresi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Süre kaldığı yerden işler, geçmiş süre hesaba katılır", "Süre baştan başlar, geçmiş süre silinir", "Yeni bir altmış günlük süre işlemeye başlar", "Süre hiçbir şekilde yeniden işlemez", "Süre yalnızca on beş gün uzar"],
  a: 0,
  e: "Süreyi durduran başvuruda OTUZ GÜN İÇİNDE BİR CEVAP VERİLMEZSE İSTEK REDDEDİLMİŞ SAYILIR. İSTEĞİN REDDEDİLMESİ VEYA REDDEDİLMİŞ SAYILMASI HALİNDE DAVA AÇMA SÜRESİ YENİDEN İŞLEMEYE BAŞLAR VE BAŞVURMA TARİHİNE KADAR GEÇMİŞ SÜRE DE HESABA KATILIR.",
  t: "Dava Süresinin Durması", d: 3
},
{
  q: "Dava açma süresinin durması hangi yargılama usulünde uygulanmaz?",
  o: ["İvedi yargılama ve merkezi sınav usulünde", "Genel yargılama usulünde", "Vergi davalarına ilişkin usulde", "Tam yargı davalarına ilişkin usulde", "Temyiz incelemesi usulünde"],
  a: 0,
  e: "DAVA AÇMA SÜRESİNİN DURMASI, İVEDİ YARGILAMA USULÜ İLE MERKEZİ VE ORTAK SINAVLARA İLİŞKİN YARGILAMA USULÜNE TABİ İŞLERDE UYGULANMAZ.",
  t: "Dava Süresinin Durması", d: 3
},
{
  q: "Aşağıdaki kurumlardan hangisine yapılan başvuru da dava açma süresini durdurur?",
  o: ["Kamu Denetçiliği Kurumu", "Sayıştay Başkanlığı", "Devlet Denetleme Kurulu", "Danıştay Başsavcılığı", "Anayasa Mahkemesi"],
  a: 0,
  e: "KAMU DENETÇİLİĞİ KURUMU'NA, BİLGİ EDİNME DEĞERLENDİRME KURULU'NA, TÜRKİYE İNSAN HAKLARI VE EŞİTLİK KURUMU'NA YAPILAN BAŞVURULAR DA DAVA AÇMA SÜRESİNİ DURDURACAKTIR. UYARI: Dava açma süresinin durabilmesi için BAŞVURUNUN DAVA AÇMA SÜRESİ İÇİNDE YAPILMASI gerekir ve İDARİ BAŞVURU YOLUNUN KAPALI OLMAMASI gerekir.",
  t: "Dava Süresinin Durması", d: 3
},
{
  q: "İptal davası açabilmek için davacıda aranan özel (sübjektif) ehliyet koşulu nedir?",
  o: ["Menfaatinin ihlal edilmiş olması", "Bir hakkının ihlal edilmiş olması", "Zarara uğradığını ispat etmesi", "Vekil ile temsil edilmesi", "İdari başvuru yolunu tüketmiş olması"],
  a: 0,
  e: "İPTAL DAVASINDA DAVACIYA İLİŞKİN ŞARTLAR: ▪ OBJEKTİF DAVA AÇMA YETENEĞİ (GENEL EHLİYET): TARAF EHLİYETİ (medeni hukuktaki HAK EHLİYETİNİN karşılığı) ve DAVA EHLİYETİ (medeni hukuktaki FİİL EHLİYETİNİN karşılığı); fiil ehliyetine sahip olmayanlar KANUNİ TEMSİLCİLERİ aracılığıyla dava açabilir. ▪ SÜBJEKTİF DAVA AÇMA YETENEĞİ (ÖZEL EHLİYET): MENFAATLERİ İHLÂL EDİLENLER iptal davası açabilir.",
  t: "İptal Davasında Taraflar", d: 3
},
{
  q: "İptal davasında hasım (davalı) yanlış gösterilmişse ne olur?",
  o: ["Yargı yeri hasmı kendiliğinden düzeltir", "Dava husumet yönünden reddedilir", "Dilekçe reddedilir ve otuz gün süre verilir", "Dava açılmamış sayılır", "Dosya görevli mahkemeye gönderilir"],
  a: 0,
  e: "İptal davasında DAVALI OLARAK DAİMA İDARE GÖSTERİLİR. Dava konusu işlemi yapmış olan kişiler ya da kamu görevlileri HASIM OLARAK GÖSTERİLEMEZ. HASIM GÖSTERMEDE YAPILACAK YANLIŞLIĞI İDARİ YARGI YERİ KENDİLİĞİNDEN DÜZELTİR; DAVALININ YANLIŞ GÖSTERİLMESİ DAVANIN YA DA DİLEKÇENİN REDDİ SONUCUNU DOĞURMAZ. Mahkeme husumete ilişkin hatayı RE'SEN GİDERMEKLE yükümlüdür.",
  t: "İptal Davasında Taraflar", d: 3
},
{
  q: "İptal davasında davalı olarak idare yerine kamu görevlisinin gösterilmesinin sonucu nedir?",
  o: ["Adli yargı görevli sayılarak dava reddedilir", "Yargı yeri hasmı kendiliğinden düzeltir", "Dilekçe otuz gün süre verilerek reddedilir", "Dava esastan incelenmeye devam edilir", "Dosya Danıştay'a gönderilir"],
  a: 0,
  e: "DAVALI OLARAK İDARE YERİNE, ÖZEL KİŞİNİN (örneğin KAMU GÖREVLİSİNİN) GÖSTERİLMESİ ADLİ YARGININ GÖREVLİ OLDUĞU GEREKÇESİ İLE DAVANIN REDDİ SONUCUNU DOĞURACAKTIR. (Bu, mahkemenin re'sen düzelttiği 'hasım gösterme yanlışlığından' farklıdır.)",
  t: "İptal Davasında Taraflar", d: 3
},
{
  q: "İptal kararının zaman bakımından etkisi nasıldır?",
  o: ["Geçmişe etkilidir, işlem hiç yapılmamış sayılır", "Yalnızca karar tarihinden ileriye etkilidir", "Kararın kesinleşmesinden itibaren etkilidir", "Yalnızca davacı bakımından etkilidir", "Etkisi mahkemenin takdirine bağlıdır"],
  a: 0,
  e: "İPTAL KARARI DAVA KONUSU İŞLEMİ YAPILDIĞI ANDAN İTİBAREN ORTADAN KALDIRIR. Yani İPTAL KARARLARI GEÇMİŞE ETKİLİDİR. İPTAL KARARIYLA BİRLİKTE İŞLEM YAPILMAMIŞ GİBİ, ESKİ DURUM GERİYE GELİR. DÜZENLEYİCİ İŞLEMLER (yönetmelik gibi) iptal edilmişse BUNDAN ÜÇÜNCÜ KİŞİLER DE YARARLANIR — iptal GENELE ETKİLİ sonuç doğurabilir.",
  t: "İptal Davasının Sonuçları", d: 2
},
{
  q: "İptal kararının idarece yerine getirilmesi süresi en çok ne kadardır?",
  o: ["Kararın tebliğinden itibaren otuz gün", "Kararın tebliğinden itibaren on beş gün", "Kararın tebliğinden itibaren altmış gün", "Kararın kesinleşmesinden itibaren doksan gün", "Süre öngörülmemiştir"],
  a: 0,
  e: "İDARE İPTAL KARARLARINI YERİNE GETİRMEK ZORUNDADIR. İptal kararının yerine getirilmesi zaman alacaksa, bu süre HİÇBİR ŞEKİLDE KARARIN İDAREYE TEBLİĞİNDEN BAŞLAYARAK 30 GÜNÜ GEÇEMEZ. Mahkeme kararlarının '30 GÜN' içinde kamu görevlilerince KASTEN YERİNE GETİRİLMEMESİ halinde İLGİLİ, İDARE ALEYHİNE DAVA AÇABİLİR; KARARI YERİNE GETİRMEYEN KAMU GÖREVLİSİ ALEYHİNE TAZMİNAT DAVASI AÇILAMAZ.",
  t: "İptal Davasının Sonuçları", d: 3
},
{
  q: "İptal davasının reddedilmesinin sonucu bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Yürütmenin durdurulması kararı kendiliğinden kalkar", "Yürütmenin durdurulması kararı geçerliliğini korur", "Üçüncü kişiler artık dava açamaz", "İşlem geçmişe etkili olarak kesinleşir", "İdare işlemi geri almak zorunda kalır"],
  a: 0,
  e: "İPTAL DAVASININ REDDEDİLMESİ durumunda: ▪ İŞLEMİN HUKUKSAL DURUMUNDA BİR DEĞİŞİKLİK OLMAZ. ▪ Eğer daha önce işlem hakkında YÜRÜTMENİN DURDURULMASI kararı verilmişse BAŞKA BİR KARARA GEREK KALMAKSIZIN yürütmenin durdurulması kararı KENDİLİĞİNDEN KALKAR. ▪ DAVANIN REDDİ, dava konusu işlemle ilgili olan ÜÇÜNCÜ KİŞİLERİN TEKRAR İPTAL DAVASI AÇMASINI ENGELLEMEZ.",
  t: "İptal Davasının Sonuçları", d: 3
},
{
  q: "Mahkemenin, taraflar ileri sürmese de işlemin hukuka aykırılığı için başka bir sebebe dayanarak karar vermesine ne ad verilir?",
  o: ["Sebep ikamesi", "Usul saptırması", "Yetkide paralellik", "Bekletici mesele", "Re'sen tebligat"],
  a: 0,
  e: "İdari yargıda RE'SEN ARAŞTIRMA İLKESİ geçerlidir; mahkeme TARAFLARIN İDDİA, SAVUNMA VE DELİLLERİ İLE BAĞLI DEĞİLDİR. Yargılama sırasında İDARİ YARGI YERİNİN TARAFLAR İLERİ SÜRMESE DE İNCELEDİĞİ İŞLEMİN HUKUKA AYKIRI SAYILMASI YA DA SAYILMAMASI İÇİN BAŞKA BİR SEBEP GÖRÜRSE, BU SEBEBE DAYANARAK KARAR VEREBİLMESİ durumuna 'SEBEP İKAMESİ' denir. Tespit edilen sebep SAKATLIK yönünde ise İPTAL; HUKUKA UYGUNLUK yönünde ise RET kararı verilir.",
  t: "İptal Davasının Sonuçları", d: 3
},
{
  q: "İdari işlem ve eylemlerden kişisel hakları doğrudan zarar görenlerin, zararın tazmini için açtığı davaya ne ad verilir?",
  o: ["Tam yargı davası", "İptal davası", "Tespit davası", "Men-i müdahale davası", "İtirazen şikayet"],
  a: 0,
  e: "TAM YARGI DAVASI: İDARİ NİTELİKTEKİ İŞLEM VE EYLEMLERDEN KİŞİSEL HAKLARI DOĞRUDAN MUHTEL OLANLAR tarafından açılan ve idarenin, KAMU HUKUKU KURALLARINA GÖRE SORUMLULUĞUNU gündeme getirerek DOĞAN ZARARIN TAZMİNİNE VEYA HAKKIN GERİ VERİLMESİNE MAHKUM EDİLMESİ isteklerini konu edinen davadır.",
  t: "Tam Yargı Davası", d: 2
},
{
  q: "İptal davası ile tam yargı davası arasındaki fark bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["İptalde menfaat, tam yargıda hak ihlali gerekir", "İptalde hak, tam yargıda menfaat ihlali gerekir", "İkisinde de hak ihlali şartı aranır", "İkisinde de karar genele etkili sonuç doğurur", "İkisinin yargılama usulü birbirinden farklıdır"],
  a: 0,
  e: "İPTAL DAVASI: konusunu İDARİ İŞLEMLER oluşturur, amaç işlemin ORTADAN KALDIRILMASIDIR, MENFAAT İHLALİ YETERLİDİR, düzenleyici işlem iptalinde GENELE ETKİLİ sonuç doğar. TAM YARGI DAVASI: konusunu İDARİ İŞLEM, İDARİ EYLEM, İDARİ SÖZLEŞME oluşturabilir, davacı HAKKIN YERİNE GETİRİLMESİNİ ya da ZARARIN GİDERİLMESİNİ talep eder, HAK İHLALİ (hakkın muhtel olması) GEREKİR, dava ÖZNEL NİTELİKTEDİR (sonuç sadece tarafları bağlar). HER İKİ DAVA TÜRÜNDE DE YARGILAMA USULÜ AYNIDIR (İYUK).",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "İdari eylemlerden doğan tam yargı davalarında ön karar prosedürüne ilişkin süreler nedir?",
  o: ["Öğrenmeden itibaren bir yıl, her hâlde beş yıl", "Öğrenmeden itibaren altmış gün, her hâlde bir yıl", "Öğrenmeden itibaren iki yıl, her hâlde on yıl", "Öğrenmeden itibaren altı ay, her hâlde iki yıl", "Yalnızca eylem tarihinden itibaren beş yıl"],
  a: 0,
  e: "ÖN KARAR PROSEDÜRÜ: İDARİ EYLEMLERDEN HAKLARI İHLÂL EDİLMİŞ OLANLARIN, DURUMU ÖĞRENDİKLERİ ANDAN İTİBAREN BİR YIL ve HER DURUMDA EYLEMİN YAPILDIĞI TARİHTEN İTİBAREN BEŞ YIL İÇİNDE İDAREYE BAŞVURARAK, HAKLARININ YERİNE GETİRİLMESİNİ İSTEMELERİ GEREKİR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "İdari eylemde ön karar başvurusunun reddi hâlinde dava açma süresi ne kadardır?",
  o: ["Tebliğ veya 30 günün bitiminden 60 gün", "Tebliğ tarihinden itibaren otuz gün", "Tebliğ tarihinden itibaren on beş gün", "Eylem tarihinden itibaren bir yıl", "Herhangi bir süre öngörülmemiştir"],
  a: 0,
  e: "Ön karar başvurusunun KISMEN YA DA TAMAMEN REDDİ durumunda, bu konudaki İŞLEMİN TEBLİĞİNİ İZLEYEN TARİHTEN İTİBAREN ya da istek hakkında OTUZ GÜN İÇİNDE CEVAP VERİLMEDİĞİ takdirde BU SÜRENİN BİTTİĞİ TARİHTEN İTİBAREN 60 GÜN İÇİNDE DAVA AÇILABİLİR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "Bayındırlık-ulaştırma hizmeti veya idari eylemden doğan tam yargı davasında yetkili mahkeme hangisidir?",
  o: ["Hizmetin görüldüğü yer mahkemesi", "İşlemi yapan idarenin bulunduğu yer", "Davacının ikametgahı mahkemesi", "Her hâlde Ankara idare mahkemesi", "İlk derece mahkemesi olarak Danıştay"],
  a: 0,
  e: "BAYINDIRLIK-ULAŞTIRMA HİZMETİ VEYA İDARİ EYLEMDEN doğan tam yargı davasında yetkili mahkeme HİZMETİN GÖRÜLDÜĞÜ VEYA EYLEMİN YAPILDIĞI YER İDARE MAHKEMESİDİR. NOT: ZARAR, İDAREYE YABANCI ÜÇÜNCÜ KİŞİNİN EYLEMİNDEN kaynaklanıyorsa yetkili mahkeme DAVACININ İKAMETGAHININ BULUNDUĞU YER İDARE MAHKEMESİDİR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "İdari sözleşmeden doğan tam yargı davasında yetkili mahkeme hangisidir?",
  o: ["Sözleşmeyi yapan idarenin bulunduğu yer mahkemesi", "Sözleşmenin ifa edildiği yer mahkemesi", "Davacının ikametgahının bulunduğu yer mahkemesi", "Ankara İdare Mahkemesi", "İlk derece olarak Danıştay"],
  a: 0,
  e: "İDARİ SÖZLEŞMEDEN doğan tam yargı davasında yetkili mahkeme SÖZLEŞMEYİ YAPAN İDARİ KURULUŞUN BULUNDUĞU YER İDARE MAHKEMESİDİR. Sözleşmenin karşı tarafı olan kişi, FESİH KARARI veya sözleşmenin uygulanması amacıyla alınan TEK YANLI KARARLARDAN dolayı zarara uğramışsa tam yargı davası açabilir; DAVA AÇMA SÜRESİ 60 GÜNDÜR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "Bir idari işleme karşı iptal ve tam yargı davası açılması bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Birlikte veya iptalden sonra ayrı ayrı açılabilir", "Yalnızca birlikte açılabilir, ayrılamaz", "Yalnızca ayrı ayrı açılabilir, birleştirilemez", "Önce tam yargı davası açılması zorunludur", "Aynı işleme karşı iki dava açılamaz"],
  a: 0,
  e: "İDARİ İŞLEME KARŞI İPTAL DAVASI VE TAM YARGI DAVASI BİRLİKTE AÇILABİLECEĞİ GİBİ ÖNCE İPTAL DAVASI AÇILIP BU DAVA SONUÇLANDIKTAN SONRA TAM YARGI DAVASI DA AÇILABİLİR. İdari işlemden doğan tam yargı davasında yetkili mahkeme İŞLEMİ YAPAN İDARİ KURULUŞUN BULUNDUĞU YER İDARE MAHKEMESİ, süre İŞLEMİN YAZILI BİLDİRİMİNİ İZLEYEN GÜNDEN İTİBAREN 60 GÜNDÜR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "Tam yargı davasında hükmedilen tazminatın ödenmesi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Davacının bildirdiği banka hesabına idarece yatırılır", "Doğrudan icra takibi yoluyla tahsil edilir", "Mahkeme veznesine depo edilir", "Sayıştay onayından sonra ödenir", "Ödeme için süre sınırı bulunmaz"],
  a: 0,
  e: "Tam yargı davasında davacının talepleri kabul edilip idarenin tazminat ödemesine hükmedilirse, HÜKMEDİLEN TAZMİNAT MİKTARI (vekâlet ücreti ve yargılama giderleri ile) DAVACININ VEYA VEKİLİNİN DAVALI İDAREYE YAZILI ŞEKİLDE BİLDİRECEĞİ BANKA HESAP NUMARASINA İDARE TARAFINDAN YATIRILIR. Hesap numarasının bildirildiği tarihten itibaren DERHAL yatırılması gerekir; süre gerekiyorsa BU SÜRE 30 GÜNDEN FAZLA OLAMAZ. Belirtilen süre içinde ödeme yapılmazsa MAHKEME KARARI GENEL HÜKÜMLER DAİRESİNDE İNFAZ VE İCRA OLUNUR.",
  t: "Tam Yargı Davası", d: 3
},
{
  q: "İdare veya vergi mahkemesi bulunmayan bir yerde dava dilekçesi hangi mercie verilebilir?",
  o: ["Asliye hukuk hâkimliğine", "Sulh ceza hâkimliğine", "Cumhuriyet başsavcılığına", "Valilik hukuk işleri müdürlüğüne", "Bölge idare mahkemesine"],
  a: 0,
  e: "Dava dilekçeleri, savunmalar ve davaya ilişkin her türlü yazı: ▪ DANIŞTAY ya da İLGİLİ İDARE VEYA VERGİ MAHKEMESİ BAŞKANLIKLARINA, ▪ bunlara gönderilmek üzere İDARE VEYA VERGİ MAHKEMESİ BAŞKANLIKLARINA, ▪ idare veya vergi mahkemesi bulunmayan yerlerde (büyükşehir belediyesi sınırları içinde olup olmadığına bakılmaksızın) 'ASLİYE HUKUK' HÂKİMLİKLERİNE, ▪ yurt dışında TÜRK KONSOLOSLUKLARINA verilebilir.",
  t: "Dilekçe Koşulları", d: 3
},
{
  q: "Dava dilekçesindeki eksikliklerin giderilmesi için verilen süre ne kadardır?",
  o: ["Otuz gün", "On beş gün", "Yedi gün", "Altmış gün", "Süre verilmez"],
  a: 0,
  e: "İYUK m. 3'te belirtilen hususlarda EKSİKLİKLER OLMASI halinde DAVA DİLEKÇESİ REDDEDİLİR. EKSİKLİĞİN TAMAMLANMASI İÇİN 30 GÜN SÜRE VERİLİR. EKSİKLİKLER 30 GÜN İÇİNDE GİDERİLMİŞ İSE DAVAYA DEVAM OLUNUR; EKSİKLİKLER GİDERİLMEZSE AÇILAN DAVA REDDEDİLİR.",
  t: "Dilekçe Koşulları", d: 3
},
{
  q: "Aşağıdakilerden hangisi dava dilekçesinde bulunması zorunlu hususlardan biridir?",
  o: ["Dava konusu işlemin yazılı bildirim tarihi", "Dinletilecek tanıkların ad ve adresleri", "Duruşma talebine ilişkin teminat tutarı", "Karşı vekile ödenecek ücretin miktarı", "İşlemi hazırlayan görevlinin sicil numarası"],
  a: 0,
  e: "İYUK m. 3'e göre dilekçelerde: TARAFLARIN VE VARSA VEKİLLERİNİN AD-SOYAD/UNVAN VE ADRESLERİ ile gerçek kişilere ait TC KİMLİK NUMARASI; DAVANIN KONU VE SEBEPLERİ İLE DAYANDIĞI DELİLLER; DAVA KONUSU İDARİ İŞLEMİN YAZILI BİLDİRİM TARİHİ; vergi/tam yargı davalarında UYUŞMAZLIK KONUSU MİKTAR; vergi davalarında verginin NEVİ VE YILI, ihbarnamenin tarih-numarası bulunur. DAVA KONUSU KARARIN VE BELGELERİN ASILLARI VEYA ÖRNEKLERİ dilekçeye eklenir; DİLEKÇELER KARŞI TARAF SAYISINDAN BİR FAZLA olur.",
  t: "Dilekçe Koşulları", d: 3
},
{
  q: "Harç veya posta ücreti hiç ya da eksik ödenerek dava açılmışsa, süresinde tamamlanmadığında ne olur?",
  o: ["Davanın açılmamış sayılmasına karar verilir", "Dava süre aşımından reddedilir", "Dosyanın işlemden kaldırılmasına karar verilir", "Harç mahkemece resen tamamlanır", "Dava esastan incelenir"],
  a: 0,
  e: "Herhangi bir sebeple HARCI VEYA POSTA ÜCRETİ VERİLMEDEN veya EKSİK harç/posta ücreti ile dava açılmışsa, 30 GÜN İÇİNDE harcın ve posta ücretinin verilmesi/tamamlanması ilgiliye TEBLİĞ OLUNUR. Tebligata rağmen gereği yerine getirilmezse BİLDİRİM AYNI ŞEKİLDE BİR DAHA TEKRARLANIR. Harç veya posta ücreti süresi içinde verilmez/tamamlanmazsa DAVANIN AÇILMAMIŞ SAYILMASINA KARAR VERİLİR ve bu karar davacıya tebliğ olunur.",
  t: "Dilekçe Koşulları", d: 3
},
{
  q: "Dava açıldıktan sonra posta ücretinin azalması ve süresinde tamamlanmaması hâlinde verilecek karar nedir?",
  o: ["Dosyanın işlemden kaldırılmasına karar verilir", "Davanın açılmamış sayılmasına karar verilir", "Dava süre aşımından reddedilir", "Dava esastan reddedilir", "Dosya Danıştay'a gönderilir"],
  a: 0,
  e: "Dava açıldıktan sonra POSTA ÜCRETİNDE tebliğ işlemlerinin yapılmasını engelleyecek şekilde AZALMA olması halinde, 30 GÜN İÇİNDE posta ücretinin tamamlanması ilgiliye tebliğ olunur; gereği yerine getirilmezse bildirim BİR DAHA TEKRARLANIR. Posta ücreti süresi içinde tamamlanmazsa DOSYANIN İŞLEMDEN KALDIRILMASINA karar verilir. Bu kararın tebliği tarihinden başlayarak ÜÇ AY İÇİNDE noksanı tamamlanmak suretiyle yeniden işleme konulması istenmezse DAVANIN AÇILMAMIŞ SAYILMASINA karar verilir.",
  t: "Dilekçe Koşulları", d: 3
},
{
  q: "Anayasa m. 125'e göre yürütmenin durdurulması kararı için hangi iki koşul birlikte aranır?",
  o: ["Telafisi güç zarar ve açık hukuka aykırılık", "Telafisi güç zarar ve teminat yatırılması", "Açık hukuka aykırılık ve idarenin kabulü", "Menfaat ihlali ve dava süresine uyulması", "Kamu yararı ve idarenin savunmasının alınması"],
  a: 0,
  e: "AY m. 125: 'İDARİ İŞLEMİN UYGULANMASI HALİNDE TELAFİSİ GÜÇ VEYA İMKANSIZ ZARARLARIN DOĞMASI VE İDARİ İŞLEMİN AÇIKÇA HUKUKA AYKIRI OLMASI ŞARTLARININ BİRLİKTE GERÇEKLEŞMESİ DURUMUNDA GEREKÇE GÖSTERİLEREK YÜRÜTMENİN DURDURULMASINA KARAR VERİLEBİLİR.'",
  t: "Yürütmenin Durdurulması", d: 2
},
{
  q: "Anayasa m. 125'e göre yürütmenin durdurulması kararı verilmesi kanunla hangi hâlde sınırlanabilir?",
  o: ["Olağanüstü hâl, savaş ve milli güvenlik hâllerinde", "Vergi uyuşmazlıklarına ilişkin davalarda", "Tam yargı davası ile birlikte açılan davalarda", "Düzenleyici işlemlere karşı açılan davalarda", "Hiçbir hâlde sınırlanamaz"],
  a: 0,
  e: "AY m. 125'e göre KANUNLA: ▪ OLAĞANÜSTÜ HALLERDE, ▪ SEFERBERLİK VE SAVAŞ HALİNDE, ▪ MİLLİ GÜVENLİK, ▪ KAMU DÜZENİ, ▪ GENEL SAĞLIK NEDENLERİ İLE yürütmenin durdurulması kararı verilmesi SINIRLANABİLİR.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Yürütmenin durdurulması kararının hukuki niteliği bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Ara karardır, ayrıca istinaf veya temyiz edilemez", "Nihai karardır, temyiz yolu açıktır", "Kesin hüküm niteliğindedir", "Kalıcı bir tedbir niteliğindedir", "Mahkemece resen verilmesi zorunludur"],
  a: 0,
  e: "YÜRÜTMENİN DURDURULMASI KARARI: ▪ İSTİSNAİ (AYRIKSI) BİR ÖNLEMDİR — işleme iptal davası açılması işlemin yürütmesini KENDİLİĞİNDEN DURDURMAZ. ▪ GEÇİCİ BİR ÖNLEMDİR — işlemin uygulanmasını belli bir süre ve en geç DAVA SONUNA KADAR erteler. ▪ BİR ARA KARAR NİTELİĞİNDEDİR — iptal davasını sonuçlandırmadığı için AYRICA İSTİNAF YA DA TEMYİZ OLUNAMAZ.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Vergi mahkemesinde vergi uyuşmazlığından doğan dava açılmasının etkisi nedir?",
  o: ["Dava konusu bölümün tahsil işlemlerini durdurur", "Hiçbir işlemi kendiliğinden durdurmaz", "Tüm tahsil işlemlerini bütünüyle durdurur", "Yalnızca vergi cezalarının tahsilini durdurur", "Yalnızca yürütmeyi durdurma kararıyla durur"],
  a: 0,
  e: "Danıştay'da veya idari mahkemelerde dava açılması, dava edilen idari işlemin yürütülmesini DURDURMAZ ve YD kararı verilmesi DAVACI TARAFINDAN İSTENMESİ gerekir. BUNUNLA BİRLİKTE VERGİ MAHKEMELERİNDE, VERGİ UYUŞMAZLIKLARINDAN DOĞAN DAVALARIN AÇILMASI, TARH EDİLEN VERGİ, RESİM VE HARÇLAR İLE BENZERİ MALİ YÜKÜMLERİN VE BUNLARIN ZAM VE CEZALARININ DAVA KONUSU EDİLEN BÖLÜMÜNÜN TAHSİL İŞLEMLERİNİ DURDURUR. TEMYİZ VEYA İSTİNAF yoluna başvurulmuş olması da işlemin yürütülmesini kendiliğinden durdurmaz.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Yürütmenin durdurulması kararında teminat bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["İdareden ve adli yardımdan yararlanandan alınmaz", "Her hâlde ve herkesten teminat alınması zorunludur", "Yalnızca vergi davalarında teminat aranır", "Teminat yerine kefil gösterilmesi zorunludur", "Teminat tutarı dava değerinin yarısıdır"],
  a: 0,
  e: "Yürütmenin durdurulması ANCAK AÇILMIŞ BİR İPTAL DAVASINDA verilebilir; ya DAVA AÇILDIĞINDA DAVA DİLEKÇESİNDE ya da DAVA AÇILDIKTAN SONRA NİHAİ KARAR VERİLİNCEYE KADAR istenebilir. YD kararı BİR TEMİNAT KARŞILIĞI VERİLİR; ancak DURUMA GÖRE GÜVENCE ARANMAYABİLİR. İDAREDEN VE ADLİ YARDIMDAN FAYDALANAN KİMSELERDEN TEMİNAT ALINMAZ.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Yürütmenin durdurulması kararının gerekçesi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Aykırılık ve zarar gerekçede açıkça gösterilir", "Gerekçe gösterilmesi zorunlu değildir", "Yalnızca zararın gösterilmesi yeterlidir", "Gerekçe sonradan karara eklenebilir", "Anayasa Mahkemesine başvuru gerekçe sayılır"],
  a: 0,
  e: "YD kararı GEREKÇELİ OLARAK VERİLİR: İDARİ İŞLEMİN HANGİ GEREKÇELERLE HUKUKA AÇIKÇA AYKIRI OLDUĞU VE İŞLEMİN UYGULANMASI HALİNDE DOĞACAK TELAFİSİ GÜÇ VEYA İMKÂNSIZ ZARARLARIN NELER OLDUĞUNUN KARARDA BELİRTİLMESİ ZORUNLUDUR. SADECE İLGİLİ KANUN HÜKMÜNÜN İPTALİ İSTEMİYLE ANAYASA MAHKEMESİNE BAŞVURULDUĞU GEREKÇESİYLE YD KARARI VERİLEMEZ.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "İdarenin savunması alınmadan yürütmenin durdurulması kararı verilebilmesinin istisnası nedir?",
  o: ["Uygulanmakla etkisi tükenecek işlemler", "Kamu görevlisinin naklen atanması işlemleri", "Vergi tarhına ilişkin işlemler", "Düzenleyici nitelikteki işlemler", "Disiplin cezasına ilişkin işlemler"],
  a: 0,
  e: "İDARENİN SAVUNMASI ALINMADAN VEYA SAVUNMA SÜRESİ GEÇMEDEN YD KARARI VERİLEMEZ. İSTİSNA: UYGULANMAKLA ETKİSİ TÜKENECEK OLAN İDARİ İŞLEMLERİN YÜRÜTÜLMESİ, SAVUNMA ALINDIKTAN SONRA YENİDEN KARAR VERİLMEK ÜZERE, İDARENİN SAVUNMASI ALINMAKSIZIN DA DURDURULABİLİR.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Kamu görevlisinin naklen atanmasına ilişkin işlemler, yürütmenin durdurulması bakımından nasıl değerlendirilir?",
  o: ["Uygulanmakla etkisi tükenen işlem sayılmaz", "Uygulanmakla etkisi tükenen işlem sayılır", "Yürütmesi hiçbir hâlde durdurulamaz", "Savunma alınmadan durdurulabilir", "Yalnızca teminat karşılığı durdurulabilir"],
  a: 0,
  e: "İSTİSNANIN İSTİSNASI: KAMU GÖREVLİLERİ HAKKINDA TESİS EDİLEN ATAMA, NAKLEN ATAMA, GÖREV VE UNVAN DEĞİŞİKLİĞİ, GEÇİCİ VEYA SÜREKLİ GÖREVLENDİRMELERE İLİŞKİN İDARİ İŞLEMLER, UYGULANMAKLA ETKİSİ TÜKENECEK OLAN İDARİ İŞLEMLERDEN SAYILMAZ. Yani bu durumlarda İDARENİN SAVUNMASI ALINMADAN YD VERİLEMEZ.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Yürütmenin durdurulması isteminin reddi kararı için idarenin savunmasının alınması şart mıdır?",
  o: ["Şart değildir, dilekçeden anlaşılırsa reddedilir", "Şarttır, savunma alınmadan reddedilemez", "Yalnızca vergi davalarında şart değildir", "Yalnızca ivedi yargılamada şart değildir", "Ret kararı hiçbir hâlde verilemez"],
  a: 0,
  e: "DAVA DİLEKÇESİ VE EKLERİNDEN YÜRÜTMENİN DURDURULMASI İSTEMİNİN YERİNDE OLMADIĞI ANLAŞILIRSA, DAVALI İDARENİN SAVUNMASI ALINMAKSIZIN İSTEM REDDEDİLEBİLİR. Yani YD KARARI VERMEDEN ÖNCE İDARENİN SAVUNMASINI ALMAK ŞARTTIR FAKAT YD İSTEMİNİN REDDİ KARARI İÇİN İDARENİN SAVUNMASINI ALMIŞ OLMAK ŞART DEĞİLDİR.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "Yürütmenin durdurulması kararı ne kadar sürede yazılıp taraflara tebliğ edilir?",
  o: ["On beş gün içinde", "Yedi gün içinde", "Otuz gün içinde", "Altmış gün içinde", "Süre öngörülmemiştir"],
  a: 0,
  e: "▪ Yürütmenin durdurulması kararı verilen dava dosyaları ÖNCELİKLE İNCELENİR ve karara bağlanır. ▪ YD kararlarının GECİKMEKSİZİN UYGULANABİLMESİNİ sağlamak amacıyla 15 GÜN İÇİNDE YAZILIP İMZALANARAK TARAFLARA TEBLİĞ EDİLİR. ▪ AYNI SEBEPLERE DAYANILARAK İKİNCİ KEZ YÜRÜTMENİN DURDURULMASI İSTEMİNDE BULUNULAMAZ.",
  t: "Yürütmenin Durdurulması", d: 3
},
{
  q: "İdare/vergi mahkemeleri ile tek hakim tarafından verilen yürütmenin durdurulması kararlarına itiraz nereye ve kaç gün içinde yapılır?",
  o: ["BİM'e 7 gün içinde ve bir defaya mahsus", "BİM'e 30 gün içinde ve bir defaya mahsus", "Danıştay'a 7 gün içinde ve bir defaya mahsus", "Danıştay'a 30 gün içinde ve sınırsız olarak", "İtiraz yolu tümüyle kapalı tutulmuştur"],
  a: 0,
  e: "İYUK m. 27/7 ile yürütmenin durdurulmasının KABUL YA DA RET şeklindeki kararlarına karşı BİR DEFAYA MAHSUS İTİRAZ yolu öngörülmüştür. Karar İDARE/VERGİ MAHKEMELERİ İLE TEK HAKİM tarafından verilmişse 7 GÜN İÇİNDE BÖLGE İDARE MAHKEMESİNE itiraz edilir.",
  t: "Yürütmenin Durdurulması", d: 3
},
]);

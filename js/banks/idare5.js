/* İdare Hukuku — 5. bölüm (belediye başkanlığının sona ermesi, büyükşehir
   belediyesi, köy, mahalle, hizmet yönünden yerinden yönetim kurumları) */
KPSS.registerBank('idare', [

/* ---------- BELEDİYE BAŞKANLIĞININ SONA ERMESİ ---------- */
{
  q: "Belediye başkanlığı hangi hallerde kendiliğinden sona erer?",
  o: ["Ölüm ve istifa", "Seçilme yeterliğini kaybetmesi", "Faaliyet raporunun yetersiz bulunması", "20 günden fazla görevi terk etmesi", "Gensoru üzerine güvensizlik kararı çıkması"],
  a: 0,
  e: "Belediye başkanlığı ÖLÜM VE İSTİFA durumlarında KENDİLİĞİNDEN sona erer. Diğer haller (mazeretsiz 20 günden fazla görevi terk, SEÇİLME YETERLİĞİNİ KAYBETME, görevini sürdürmesine engel hastalık/sakatlık, meclisin feshine neden olan eylemlere katılma) İÇİŞLERİ BAKANLIĞININ BAŞVURUSU üzerine; faaliyet raporunun yetersiz bulunması ve gensoru üzerine güvensizlik kararı ise VALİNİN BAŞVURUSU üzerine DANIŞTAY KARARI İLE sonuç doğurur.",
  t: "Belediye Başkanlığının Sona Ermesi", d: 3
},
{
  q: "Belediye başkanının mazeretsiz ve kesintisiz kaç günden fazla görevi terk etmesi başkanlığın sona ermesi sebebidir?",
  o: ["20 günden fazla", "10 günden fazla", "30 günden fazla", "15 günden fazla", "45 günden fazla"],
  a: 0,
  e: "Belediye başkanının MAZERETSİZ VE KESİNTİSİZ OLARAK 20 GÜNDEN FAZLA GÖREVİNİ TERK ETMESİ ve bu durumun MAHALLİN MÜLKİ İDARE AMİRİ tarafından belirlenmesi, İçişleri Bakanlığının başvurusu üzerine DANIŞTAY KARARI ile başkanlığın sona ermesine yol açar.",
  t: "Belediye Başkanlığının Sona Ermesi", d: 3
},
{
  q: "Belediye başkanlığının boşalması durumunda meclis kaç gün içinde toplanır ve ne seçer?",
  o: ["Vali tarafından meclisin 10 gün içinde toplanması sağlanır; boşalma halinde bir başkan, görevden uzaklaştırma/tutuklanma halinde bir başkan vekili seçer", "15 gün içinde toplanır ve sadece başkan vekili seçer", "5 gün içinde toplanır", "30 gün içinde toplanır", "Meclis toplanmaz, vali atama yapar"],
  a: 0,
  e: "VALİ tarafından belediye meclisinin 10 GÜN İÇERİSİNDE TOPLANMASI sağlanır. Meclis: BAŞKANLIĞIN BOŞALMASI veya seçim dönemini AŞACAK biçimde kamu hizmetinden yasaklanma halinde BİR BAŞKAN; başkanın GÖREVDEN UZAKLAŞTIRILMASI, TUTUKLANMASI veya seçim dönemini AŞMAYACAK biçimde yasaklanma halinde BİR BAŞKAN VEKİLİ seçer. Seçim MECLİS ÜYELERİ ARASINDAN VE GİZLİ OYLA yapılır.",
  t: "Belediye Başkanlığının Sona Ermesi", d: 3
},
{
  q: "Belediye başkanı veya başkanvekili seçimi en geç 15 gün içinde tamamlanmazsa ne olur?",
  o: ["Büyükşehir ve il belediyelerinde İçişleri Bakanı, diğer belediyelerde vali tarafından görevlendirme yapılır", "Seçim yeniden yapılır", "Cumhurbaşkanı atama yapar", "Danıştay atama yapar", "Belediye meclisi feshedilir"],
  a: 0,
  e: "Belediye başkanı veya başkanvekili seçimi EN GEÇ 15 GÜN İÇİNDE TAMAMLANMADIĞI TAKDİRDE, seçim yapılıncaya kadar belediye başkanlığına BÜYÜKŞEHİR VE İL BELEDİYELERİNDE İÇİŞLERİ BAKANI, DİĞER BELEDİYELERDE VALİ tarafından GÖREVLENDİRME yapılır. Görevlendirilecek kişinin BELEDİYE BAŞKANI SEÇİLME YETERLİĞİNE SAHİP OLMASI ŞARTTIR.",
  t: "Belediye Başkanlığının Sona Ermesi", d: 3
},
{
  q: "Terör suçları sebebiyle belediye başkanının görevden uzaklaştırılması halinde görevlendirme nasıl yapılır ve meclis nasıl toplanır?",
  o: ["Büyükşehir ve il belediyelerinde İçişleri Bakanı, diğerlerinde vali görevlendirir; bu belediyelerde belediye meclisi başkanın çağrısı olmadıkça toplanamaz", "Meclis kendi başkanını seçer", "Meclis serbestçe toplanabilir", "Cumhurbaşkanı görevlendirme yapar", "Danıştay karar verir"],
  a: 0,
  e: "Belediye başkanı, başkan vekili ya da meclis üyesinin TERÖR VEYA TERÖR ÖRGÜTLERİNE YARDIM VE YATAKLIK suçları sebebiyle görevden uzaklaştırılması, tutuklanması, kamu hizmetinden yasaklanması veya sıfatının sona ermesi hallerinde BÜYÜKŞEHİR VE İL BELEDİYELERİNDE İÇİŞLERİ BAKANI, DİĞERLERİNDE VALİ tarafından görevlendirme yapılır. BU BELEDİYELERDE BELEDİYE MECLİSİ, BAŞKANIN ÇAĞRISI OLMADIKÇA TOPLANAMAZ.",
  t: "Belediye Başkanlığının Sona Ermesi", d: 3
},
{
  q: "Görevleriyle ilgili suç nedeniyle soruşturma açılan belediye organları hakkında görevden uzaklaştırma kararı ne kadar sürede gözden geçirilir?",
  o: ["İki ayda bir", "Bir ayda bir", "Üç ayda bir", "Altı ayda bir", "Gözden geçirilmez"],
  a: 0,
  e: "Görevleriyle ilgili bir suç nedeniyle haklarında soruşturma veya kovuşturma açılan belediye organları veya üyeleri, GEÇİCİ BİR ÖNLEM OLARAK, KESİN HÜKME KADAR, İÇİŞLERİ BAKANI tarafından GÖREVDEN UZAKLAŞTIRILABİLİR. GÖREVDEN UZAKLAŞTIRMA KARARI İKİ AYDA BİR GÖZDEN GEÇİRİLİR.",
  t: "Belediye Başkanlığının Sona Ermesi", d: 3
},

/* ---------- BÜYÜKŞEHİR BELEDİYESİ ---------- */
{
  q: "Büyükşehir belediyesi Anayasada ismen yer alır mı?",
  o: ["Yer almaz; Anayasa m. 127/3'teki \"kanun, büyük yerleşim merkezleri için özel yönetim biçimleri getirebilir\" hükmüne istinaden kurulmuştur", "Anayasada ismen yer alır", "Anayasada kamu tüzel kişisi olarak sayılır", "Cumhurbaşkanlığı kararnamesiyle kurulur", "Anayasada yer alan tek mahalli idare birimidir"],
  a: 0,
  e: "BÜYÜKŞEHİR BELEDİYESİ, ANAYASADA İSMEN YER ALAN BİR MAHALLİ İDARE BİRİMİ DEĞİLDİR. Anayasanın 127/3. maddesindeki 'KANUN, BÜYÜK YERLEŞİM MERKEZLERİ İÇİN ÖZEL YÖNETİM BİÇİMLERİ GETİREBİLİR' hükmüne istinaden kurulmuştur. (Anayasada ismen yer alan mahalli idareler: İL ÖZEL İDARESİ, BELEDİYE, KÖY.)",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Toplam nüfusu kaçtan fazla olan illerin il belediyeleri büyükşehir belediyesine dönüştürülebilir?",
  o: ["750.000'den fazla", "500.000'den fazla", "1.000.000'dan fazla", "250.000'den fazla", "2.000.000'dan fazla"],
  a: 0,
  e: "TOPLAM NÜFUSU 750.000'DEN FAZLA OLAN İLLERİN İL BELEDİYELERİ KANUNLA BÜYÜKŞEHİR BELEDİYESİNE DÖNÜŞTÜRÜLEBİLİR. Türkiye'de TOPLAM 30 BÜYÜKŞEHİR BELEDİYESİ bulunmaktadır.",
  t: "Büyükşehir Belediyesi", d: 2
},
{
  q: "6360 sayılı Kanun ile büyükşehir belediyesi olan yerlerde hangi değişiklikler yapılmıştır?",
  o: ["İl özel idareleri kaldırılmış, büyükşehir belediyesinin sınırları ilin mülki sınırları olarak belirlenmiş, köyler ve belde belediyeleri mahalleye dönüşmüştür", "Sadece il özel idareleri kaldırılmıştır", "Köyler korunmuş, sadece belde belediyeleri kaldırılmıştır", "Büyükşehir sınırları daraltılmıştır", "İlçe belediyeleri kaldırılmıştır"],
  a: 0,
  e: "2012 tarihli 6360 SAYILI KANUN ile büyükşehir belediyesi olan yerlerde: İL ÖZEL İDARELERİ KALDIRILMIŞ, BÜYÜKŞEHİR BELEDİYESİNİN SINIRLARI İLİN MÜLKİ SINIRLARI olarak belirlenmiş, KÖYLER VE BELDE BELEDİYELERİ MAHALLEYE DÖNÜŞMÜŞTÜR.",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehirlerde yerel seçimlerde hangi oylar kullanılır?",
  o: ["Büyükşehir belediye başkanı, ilçe belediye başkanı, ilçe belediye meclisi üyeliği, mahalle muhtarı ve ihtiyar heyeti", "İl genel meclisi üyeliği de dahil hepsi", "Sadece büyükşehir belediye başkanı", "Köy muhtarı ve ihtiyar meclisi de dahil hepsi", "Büyükşehir belediye meclisi üyeliği de dahil hepsi"],
  a: 0,
  e: "BÜYÜKŞEHİRLERDE: BÜYÜKŞEHİR BELEDİYE BAŞKANI, İLÇE BELEDİYE BAŞKANI, İLÇE BELEDİYE MECLİSİ ÜYELİĞİ, MAHALLE MUHTARI VE İHTİYAR HEYETİ için oy kullanılır. Dikkat: büyükşehirlerde İL GENEL MECLİSİ ÜYELİĞİ için oy kullanılmaz (il özel idareleri kaldırıldı) ve BÜYÜKŞEHİR BELEDİYE MECLİSİ ÜYELERİ DOĞRUDAN SEÇİLMEZ.",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehir olmayan illerde köylerde yaşayanlar hangi seçimlerde oy kullanır?",
  o: ["İl genel meclisi üyeliği ile köy muhtarı ve ihtiyar meclisi üyeliği", "Belediye başkanı ve belediye meclisi üyeliği", "Sadece köy muhtarı", "Sadece il genel meclisi üyeliği", "Mahalle muhtarı ve ihtiyar heyeti"],
  a: 0,
  e: "Büyükşehir olmayan illerde KÖYLERDE YAŞAYANLAR: İL GENEL MECLİSİ ÜYELİĞİ ile KÖY MUHTARI VE İHTİYAR MECLİSİ ÜYELİĞİ için oy kullanır. BELEDİYE SINIRLARINDA YAŞAYANLAR ise: il genel meclisi üyeliği, belediye başkanı, belediye meclisi üyeliği, mahalle muhtarı ve ihtiyar heyeti için oy kullanır.",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehir belediye meclisi nasıl oluşur?",
  o: ["Büyükşehir belediye başkanı, ilçe belediye başkanları (doğal üye) ve ilçe belediye meclisi üyelerinin beşte biri", "Doğrudan seçmenler tarafından seçilen üyelerden", "İlçe belediye meclisi üyelerinin tamamından", "Sadece ilçe belediye başkanlarından", "İlçe belediye meclisi üyelerinin üçte birinden"],
  a: 0,
  e: "BÜYÜKŞEHİR BELEDİYE MECLİSİ: BÜYÜKŞEHİR BELEDİYE BAŞKANI (meclisin başkanı), büyükşehir sınırları içindeki İLÇE BELEDİYELERİNİN BAŞKANLARI (meclisin DOĞAL ÜYESİDİR) ve büyükşehir sınırları içindeki İLÇE BELEDİYE MECLİSİ ÜYELERİNİN BEŞTE BİRİ'nden oluşur.",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehir belediye meclisi hangi zamanda toplanır?",
  o: ["Her ayın ikinci haftası, önceden meclis tarafından belirlenen günde", "Her ayın ilk haftası", "İki ayda bir", "Her ayın son haftası", "Yılda dört kez"],
  a: 0,
  e: "BÜYÜKŞEHİR BELEDİYE MECLİSİ, HER AYIN İKİNCİ HAFTASI önceden meclis tarafından belirlenen günde mutat toplantı yerinde toplanır. (Belediye meclisi ve il genel meclisi ise HER AYIN İLK HAFTASI toplanır.) Bütçe görüşmesine rastlayan toplantı süresi EN ÇOK 20, diğer toplantıların süresi EN ÇOK 5 GÜNDÜR.",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehir belediye encümeni kaç üyeden oluşur ve nasıl teşekkül eder?",
  o: ["11 üyeli: başkan, meclisin kendi üyeleri arasından bir yıl için gizli oyla seçeceği beş üye ve başkanın birim amirleri arasından seçeceği beş üye (biri genel sekreter, biri mali hizmetler birim amiri)", "7 üyeli", "5 üyeli", "9 üyeli", "13 üyeli"],
  a: 0,
  e: "BÜYÜKŞEHİR BELEDİYE ENCÜMENİ 11 ÜYELİDİR: BAŞKAN (büyükşehir belediye başkanı), SEÇİLMİŞ ÜYELER — belediye meclisinin kendi üyeleri arasından BİR YIL İÇİN GİZLİ OYLA seçeceği BEŞ ÜYE, ATANMIŞ ÜYELER — biri GENEL SEKRETER, biri MALÎ HİZMETLER BİRİM AMİRİ olmak üzere başkanın her yıl birim amirleri arasından seçeceği BEŞ ÜYE.",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehir belediyesi genel sekreteri nasıl atanır?",
  o: ["Belediye başkanının teklifi ile Çevre, Şehircilik ve İklim Değişikliği bakanı tarafından", "Belediye başkanı tarafından doğrudan", "İçişleri Bakanı tarafından", "Belediye meclisi kararıyla", "Cumhurbaşkanı kararıyla"],
  a: 0,
  e: "Büyükşehir belediyesi GENEL SEKRETERİ, BELEDİYE BAŞKANININ TEKLİFİ İLE ÇEVRE, ŞEHİRCİLİK VE İKLİM DEĞİŞİKLİĞİ BAKANI tarafından atanır. Belediye başkanının katılamadığı encümen toplantılarına GENEL SEKRETER BAŞKANLIK EDER. (İl özel idaresinde genel sekreter ise VALİNİN TEKLİFİ, İÇİŞLERİ BAKANININ ONAYI ile atanır.)",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehir belediye başkan vekili bakımından hangi kısıtlama vardır?",
  o: ["Büyükşehir kapsamındaki ilçe belediye başkanları büyükşehir belediye başkan vekili olamaz", "Sadece ilçe belediye başkanları başkan vekili olabilir", "Genel sekreter başkan vekili olur", "Başkan vekili vali tarafından atanır", "Başkan vekili görevlendirilmez"],
  a: 0,
  e: "Büyükşehir belediye başkanı izin, hastalık veya başka bir sebeple görev başında bulunmadığı hâllerde BELEDİYE MECLİSİ ÜYELERİ ARASINDAN BİRİNİ BAŞKAN VEKİLİ olarak görevlendirir. ANCAK BÜYÜKŞEHİR KAPSAMINDAKİ İLÇE BELEDİYE BAŞKANLARI BÜYÜKŞEHİR BELEDİYE BAŞKAN VEKİLİ OLAMAZ.",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehir belediyelerinde kaç başkan danışmanı görevlendirilebilir?",
  o: ["Nüfusu iki milyonu aşan büyükşehirlerde on, diğerlerinde beşi geçmemek üzere", "Tüm büyükşehirlerde on", "Tüm büyükşehirlerde beş", "Sınırsız", "Nüfusu bir milyonu aşanlarda on"],
  a: 0,
  e: "NÜFUSU İKİ MİLYONU AŞAN BÜYÜKŞEHİR BELEDİYELERİNDE ON, DİĞER BÜYÜKŞEHİR BELEDİYELERİNDE BEŞİ GEÇMEMEK ÜZERE BAŞKAN DANIŞMANI görevlendirilebilir. Danışman olacakların EN AZ DÖRT YILLIK YÜKSEKÖĞRENİM mezunu olması şarttır. Görev süreleri SÖZLEŞME SÜRESİ ile sınırlıdır ancak BELEDİYE BAŞKANININ GÖREV SÜRESİNİ AŞAMAZ.",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehir belediye başkanı meclis kararını hukuka aykırı bulursa kaç gün içinde iade edebilir ve kesinleşen karara karşı kaç gün içinde yargıya başvurabilir?",
  o: ["7 gün içinde iade edebilir; kesinleşen karar aleyhine 60 gün içinde idari yargıya başvurabilir", "5 gün içinde iade eder, 10 gün içinde yargıya başvurur", "7 gün içinde iade eder, 10 gün içinde yargıya başvurur", "5 gün içinde iade eder, 60 gün içinde yargıya başvurur", "İade edemez"],
  a: 0,
  e: "BÜYÜKŞEHİRDE: Başkan, kararı hukuka aykırı bulursa 7 GÜN İÇİNDE yeniden görüşülmesi için iade edebilir; meclisin ısrarı ile kesinleşen kararlar aleyhine 60 GÜN İÇİNDE idarî yargıya başvurabilir. NORMAL BELEDİYEDE ise bu süreler 5 GÜN ve 10 GÜNDÜR — bu ayrıma dikkat!",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehir belediyesi ile ilçe belediyeleri arasındaki görev ve yetki uyuşmazlıkları nasıl çözülür?",
  o: ["Büyükşehir belediye meclisi tarafından idari yoldan çözümlenebilir; meclis toplantıda değilse encümen çözebilir", "Sadece idari yargıda çözülür", "Vali çözer", "İçişleri Bakanlığı çözer", "Danıştay çözer"],
  a: 0,
  e: "Büyükşehir kapsamındaki belediyeler arasında hizmetlerin yerine getirilmesinde UYUM VE KOORDİNASYON BÜYÜKŞEHİR BELEDİYESİ tarafından sağlanır. Hem büyükşehir-ilçe belediyeleri arasındaki hem de İLÇE BELEDİYELERİ ARASINDAKİ görev ve yetki uyuşmazlıkları BÜYÜKŞEHİR BELEDİYE MECLİSİ tarafından İDARİ YOLDAN çözümlenebilir. MECLİS TOPLANTIDA OLMADIĞI ZAMANLARDA ENCÜMEN uyuşmazlıkları çözebilir.",
  t: "Büyükşehir Belediyesi", d: 3
},
{
  q: "Büyükşehir belediyesinin görevleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Nazım imar planını yapmak ve ilçe belediyelerinin uygulama imar planlarını aynen veya değiştirerek onaylamak; birinci sınıf gayrisıhhî müesseseleri ruhsatlandırmak", "Sıhhî işyerlerini ve 2.-3. sınıf gayrisıhhî müesseseleri ruhsatlandırmak", "Katı atıkları toplamak ve aktarma istasyonuna taşımak", "Defin ile ilgili hizmetleri yürütmek (yalnızca)", "Cemevlerinin yapım-bakım-onarımını yapmak (yalnızca)"],
  a: 0,
  e: "BÜYÜKŞEHİRE ait görevler: NAZIM İMAR PLANINI yapmak, ilçelerin UYGULAMA İMAR PLANLARINI onaylamak, BİRİNCİ SINIF GAYRİSIHHÎ MÜESSESELERİ ruhsatlandırmak, ulaşım ana planı ve TOPLU TAŞIMA, ana yollar, katı atık yönetim planı, su ve kanalizasyon, mezarlık alanları, toptancı halleri ve mezbahalar, itfaiye ve acil yardım. İLÇE BELEDİYESİNE ait olanlar: SIHHÎ İŞYERLERİ ile 2. VE 3. SINIF GAYRİSIHHÎ MÜESSESELER, KATI ATIKLARI TOPLAMAK VE AKTARMA İSTASYONUNA TAŞIMAK, DEFİN hizmetleri, otopark-park yapmak, CEMEVLERİ.",
  t: "Büyükşehir Belediyesi", d: 3
},

/* ---------- KÖY ---------- */
{
  q: "Köy Kanunu'na göre nüfusu kaç olan yerlerde köy idaresi kurulabilir?",
  o: ["Nüfusu 150'den fazla 2000'den az olan yerlerde", "Nüfusu 150'den fazla 5000'den az olan yerlerde", "Nüfusu 100'den fazla olan yerlerde", "Nüfusu 500'den fazla olan yerlerde", "Nüfus şartı yoktur"],
  a: 0,
  e: "1924 tarihli 442 sayılı KÖY KANUNU'nun yürürlüğe girmesiyle NÜFUSU 150'DEN FAZLA olan yerleşim birimleri köye dönüşmüştür. NÜFUSU 150'DEN FAZLA 2000'DEN AZ OLAN YERLERDE KÖY İDARESİ KURULABİLİR.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Yeni bir köy nasıl kurulur?",
  o: ["Çevre, Şehircilik ve İklim Değişikliği Bakanlığı ile Sağlık Bakanlığının görüşü alınarak İçişleri Bakanlığı kararı ile", "Cumhurbaşkanı kararı ile", "Kanunla", "Vali kararı ile", "İl genel meclisi kararı ile"],
  a: 0,
  e: "Doğal afet, göç gibi nedenlerle yeni bir köyün kurulması gerekebilir. YENİ KÖY, ÇEVRE, ŞEHİRCİLİK VE İKLİM DEĞİŞİKLİĞİ BAKANLIĞI İLE SAĞLIK BAKANLIĞININ GÖRÜŞÜ ALINARAK İÇİŞLERİ BAKANLIĞI KARARI İLE KURULUR.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Köy adlarının değiştirilmesi, köylerin birleştirilmesi ve ayrılması nasıl gerçekleşir?",
  o: ["İl idare kurulu ve il genel meclisinin görüşü alındıktan sonra İçişleri Bakanlığının kararıyla", "Cumhurbaşkanı onayıyla", "Kanunla", "Vali kararıyla", "Köy derneği kararıyla"],
  a: 0,
  e: "KÖY ADLARININ DEĞİŞTİRİLMESİ, KÖYLERİN BİRLEŞTİRİLMESİ VE AYRILMASI, İL İDARE KURULU VE İL GENEL MECLİSİNİN GÖRÜŞÜ ALINDIKTAN SONRA İÇİŞLERİ BAKANLIĞININ TASVİBİYLE (KARARIYLA) gerçekleşir. Bir köyün BAŞKA BİR İL/İLÇEYE BAĞLANMASI ise CUMHURBAŞKANI ONAYI ile olur.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Nüfusu 150'nin altına düşen köylerin tüzel kişiliğine nasıl son verilir?",
  o: ["İçişleri Bakanlığı kararıyla", "Cumhurbaşkanı kararıyla", "Kanunla", "Vali kararıyla", "Tüzel kişilik kendiliğinden sona erer"],
  a: 0,
  e: "NÜFUSU 150'NİN ALTINA DÜŞEN KÖYLERİN TÜZEL KİŞİLİĞİNE İÇİŞLERİ BAKANLIĞI KARARIYLA SON VERİLİR. (Karşılaştırma: nüfusu 2.000'in altına düşen BELEDİYELER CUMHURBAŞKANI KARARI ile köye dönüştürülür.)",
  t: "Köy İdaresi", d: 3
},
{
  q: "Köy derneğinin görevleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Köy ihtiyar meclisi ile muhtarı seçmek, köyün isteğe bağlı işlerinin zorunlu hale gelmesine karar vermek, köy imamı yoksa imamı seçmek ve ödeneğini belirlemek", "Köy bütçesini kabul etmek", "İmece ve salmaya karar vermek", "Muhtarın harcamalarını denetlemek", "Kamulaştırma yapmak"],
  a: 0,
  e: "KÖY DERNEĞİ, köyde bulunan KADIN ERKEK BÜTÜN SEÇMENLERİN oluşturduğu bir kuruldur. Görevleri: KÖY İHTİYAR MECLİSİ İLE MUHTARI SEÇMEK, KÖYÜN İSTEĞE BAĞLI İŞLERİNİN ZORUNLU HALE GELMESİNE KARAR VERMEK, merkezi idare tarafından atanan KÖY İMAMININ BULUNMAMASI halinde KÖY İMAMINI SEÇMEK VE ÖDENEĞİNİ BELİRLEMEK. Diğer seçenekler İHTİYAR MECLİSİNİN görevleridir.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Köy ihtiyar meclisinin doğal üyeleri kimlerdir?",
  o: ["Köy öğretmeni ve köy imamı", "Köy korucusu ve köy katibi", "Muhtar ve köy öğretmeni", "Köy katibi ve köy imamı", "Doğal üye yoktur"],
  a: 0,
  e: "İHTİYAR MECLİSİ bir kısmı 'SEÇİLENLER' diğeri 'DOĞAL' üye olmak üzere iki tür üyeden oluşur. SEÇİLENLER BEŞ YIL için KÖY DERNEĞİ tarafından seçilir. KÖY ÖĞRETMENİ ve KÖY İMAMI İHTİYAR MECLİSİNİN 'DOĞAL' ÜYELERİDİR. İhtiyar meclisi üye sayısı köyün nüfusuna göre 8 İLA 12 arasında değişir.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Köy muhtarı ve ihtiyar meclisi üyesi seçilebilmek için hangi şartlar aranır?",
  o: ["Milletvekili seçilme sakıncalarını taşımamak, on sekiz yaşını doldurmuş olmak ve en az altı aydır o köyde oturmak; ilkokul mezuniyeti aranmaz, okur-yazar olmak yeterlidir", "İlkokul mezunu olmak zorunludur", "En az bir yıl o köyde oturmak gerekir", "Yirmi beş yaşını doldurmuş olmak gerekir", "Yükseköğretim mezunu olmak gerekir"],
  a: 0,
  e: "Muhtar ve ihtiyar meclisi üyesi seçilebilmek için: 2839 sayılı Milletvekili Seçimi Kanunu m. 11'deki SAKINCALARI TAŞIMAMAK, ON SEKİZ YAŞINI DOLDURMUŞ OLMAK ve EN AZ ALTI AYDIR O KÖYDE OTURMAK şarttır. İLKOKUL MEZUNİYETİ ŞARTI ARANMAZ; OKUR-YAZAR OLMAK YETERLİDİR. Bu seçimlerde SİYASİ PARTİLER ADAY GÖSTEREMEZ.",
  t: "Köy İdaresi", d: 3
},
{
  q: "İhtiyar meclisinin görevleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Köy bütçesini kabul etmek, imece ve salmaya karar vermek, muhtarın harcamalarını denetlemek, köy sınırları içindeki taşınmazları kamulaştırmak", "Muhtarı seçmek", "Köy imamını seçmek", "İsteğe bağlı işlerin zorunlu hale gelmesine karar vermek", "Köy korucusuna emir vermek"],
  a: 0,
  e: "İHTİYAR MECLİSİ: köy işlerini SIRAYA KOYAR; İMECE VE SALMAYA KARAR VERİR; KÖY MUHTARININ HARCAMALARINI DENETLER; KÖY BÜTÇESİNİ KABUL EDER; köylüler arasındaki uyuşmazlıkları UZLAŞTIRMA yolu ile gidermeye çalışır; zorunlu işleri yapmayanlara PARA CEZASI verir; köy sınırları içinde ihtiyaç duyulan TAŞINMAZLARI KAMULAŞTIRIR.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Köy Kanunu m. 41'e göre muhtarın köy faydasına olmayan kararları karşısında kaymakam ne yapabilir?",
  o: ["Kararı bozabilir; fakat onun yerine kendiliğinden karar veremez, karar yine köylü tarafından verilir", "Kararı bozabilir ve yerine karar verebilir", "Hiçbir şey yapamaz", "Muhtarı görevden alır", "İdari yargıya başvurur"],
  a: 0,
  e: "Muhtarın bütün işlemleri KAYMAKAM VEYA VALİNİN VESAYET DENETİMİNE TABİDİR. Köy Kanunu m. 41'e göre MUHTARIN KÖY FAYDASINA OLMAYAN KARARLARINI KAYMAKAM (veya merkez ilçeye bağlı köylerde VALİ) BOZABİLİR. FAKAT ONUN YERİNE KAYMAKAM (veya vali) KENDİLİĞİNDEN KARAR VEREMEZ — KARAR, YİNE KÖYLÜ TARAFINDAN VERİLİR. Bu, vesayet makamının İKAME YASAĞInın tipik örneğidir.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Görevini gereği gibi yapmayan muhtarlar nasıl görevden uzaklaştırılabilir?",
  o: ["Köyün bağlı olduğu il veya ilçe idare kurulu kararı ile; bu karara karşı idare mahkemesinde dava açılabilir", "Kaymakam kararı ile", "İçişleri Bakanı kararı ile", "Köy derneği kararı ile", "Danıştay kararı ile"],
  a: 0,
  e: "Görevini gereği gibi yapmayan muhtarlar, KÖYÜN BAĞLI OLDUĞU İL VEYA İLÇE İDARE KURULU KARARI İLE GÖREVDEN UZAKLAŞTIRILABİLİR/ALINABİLİR. KURULLARIN BU KARARINA KARŞI İDARE MAHKEMESİNDE DAVA AÇILABİLİR.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Köy bütçesi süreci nasıl işler?",
  o: ["Muhtar tarafından hazırlanır, ihtiyar meclisince kabul edilir ve kaymakam veya vali tarafından onaylanır", "İhtiyar meclisi hazırlar, muhtar onaylar", "Köy derneği kabul eder", "Vali hazırlar, muhtar uygular", "Bütçe yapılmaz"],
  a: 0,
  e: "1942 tarihli Köy İdareleri Talimatı'na göre MUHTAR TARAFINDAN HAZIRLANAN KÖY BÜTÇESİ İHTİYAR MECLİSİNCE KABUL EDİLİP KAYMAKAM VEYA VALİ TARAFINDAN ONAYLANIR. Köy idaresinin başlıca gelirleri İMECE VE SALMA olmakla birlikte mallardan elde edilen gelirler, belgelerden alınacak gelirler ve PARA CEZALARI da gelirler arasındadır.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Köy korucuları ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Her köyde en aşağı bir korucu bulunur; nüfusu binden yukarı köylerde her beş yüz kişiye bir korucu daha tutulur; ihtiyar meclisi tarafından tutulur ve kaymakamın buyurultusu ile işe başlar", "Kaymakam tarafından atanır", "Her köyde en az üç korucu bulunur", "Silahsızdırlar", "Vali emrindedir"],
  a: 0,
  e: "KÖY KORUCUSU: köy sınırı içinde herkesin ırzını, canını ve malını korumak için bulundurulur. HER KÖYDE EN AŞAĞI BİR KORUCU bulunur; NÜFUSU BİNDEN YUKARI köylerde HER BEŞ YÜZ KİŞİYE BİR KORUCU DAHA tutulur. Korucular İHTİYAR MECLİSİ TARAFINDAN TUTULUR ve köy muhtarının vereceği haber üzerine KAYMAKAMIN BUYURULTUSU ile işe başlar. KÖY MUHTARININ EMRİ ALTINDADIR ve SİLAHLIDIRLAR.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Güvenlik korucusu (eski adıyla geçici köy korucusu) nasıl görevlendirilir ve sayısı ne kadardır?",
  o: ["Valinin teklifi ve İçişleri Bakanının onayı ile; sayısı 40.000 kişiyi geçemez, Cumhurbaşkanı bu sayıyı yüzde elliye kadar artırabilir", "Kaymakam kararı ile; sayısı sınırsızdır", "Cumhurbaşkanı kararı ile; 20.000 kişiyi geçemez", "İhtiyar meclisi kararı ile", "Muhtar tarafından görevlendirilir"],
  a: 0,
  e: "GÜVENLİK KORUCUSU, Cumhurbaşkanınca tespit edilecek illerde olağanüstü hal sebeplerine ilişkin ciddi belirtiler ortaya çıkması hallerinde VALİNİN TEKLİFİ VE İÇİŞLERİ BAKANININ ONAYI ile görevlendirilir. SAYISI 40.000 KİŞİYİ GEÇEMEZ; CUMHURBAŞKANI bu sayıyı YÜZDE ELLİYE KADAR ARTIRMAYA yetkilidir. Güvenlik korucularından 55 YAŞINI DOLDURANLARIN görevleriyle ilişikleri kesilir.",
  t: "Köy İdaresi", d: 3
},
{
  q: "Gönüllü güvenlik korucusu nasıl belirlenir?",
  o: ["Köy muhtarı ve ihtiyar meclisi mahsul zamanlarında köylünün eli silah tutanlarından lüzumu kadarını ayırıp isimlerini kaymakama götürür; kaymakamın müsaadesi ile görev yaparlar", "Vali tarafından atanır", "İçişleri Bakanının onayı gerekir", "Cumhurbaşkanı kararıyla belirlenir", "İhtiyar meclisi tek başına karar verir"],
  a: 0,
  e: "GÖNÜLLÜ GÜVENLİK KORUCUSU: KÖY MUHTARI VE İHTİYAR MECLİSİ mahsul zamanlarında çapulcular ve eşkıya türemişse yağmadan köy halkını korumak için KÖYLÜNÜN ELİ SİLAH TUTANLARINDAN LÜZUMU KADARINI GÖNÜLLÜ KORUCU AYIRARAK isimlerini bir kağıda yazıp KAYMAKAMA GÖTÜRÜR. KAYMAKAMIN MÜSAADESİ OLURSA bu gönüllü korucular ASIL KORUCULARLA BERABER köyü korurlar.",
  t: "Köy İdaresi", d: 3
},

/* ---------- MAHALLE İDARESİ ---------- */
{
  q: "Mahalle idaresinin tüzel kişiliği var mıdır ve köylerde mahalle bulunur mu?",
  o: ["Mahalle idaresinin tüzel kişiliği yoktur ve köylerde mahalle bulunmaz", "Tüzel kişiliği vardır, köylerde de mahalle bulunur", "Tüzel kişiliği vardır ama köylerde mahalle bulunmaz", "Tüzel kişiliği yoktur ama köylerde mahalle bulunur", "Mahalle bir mahalli idare birimidir"],
  a: 0,
  e: "Belediye Kanunu'na göre MAHALLE, BELEDİYE SINIRLARI İÇİNDE, ihtiyaç ve öncelikleri benzer özellikler gösteren ve sakinleri arasında komşuluk ilişkisi bulunan İDARÎ BİRİMİ ifade eder. KÖYLERDE MAHALLE BULUNMAZ. MAHALLE İDARESİNİN TÜZEL KİŞİLİĞİ YOKTUR.",
  t: "Mahalle İdaresi", d: 2
},
{
  q: "Belediye sınırları içinde mahalle kurulması nasıl olur ve asgari nüfus şartı nedir?",
  o: ["Belediye meclisinin kararı ve kaymakamın görüşü üzerine valinin onayı ile; nüfusu 500'ün altında mahalle kurulamaz", "Sadece belediye meclisi kararıyla; nüfus şartı yoktur", "Vali kararıyla; nüfusu 1000'in altında kurulamaz", "İçişleri Bakanlığı kararıyla", "Cumhurbaşkanı kararıyla; nüfusu 150'nin altında kurulamaz"],
  a: 0,
  e: "Belediye sınırları içinde MAHALLE KURULMASI, KALDIRILMASI, BİRLEŞTİRİLMESİ, adlarıyla sınırlarının tespiti ve değiştirilmesi BELEDİYE MECLİSİNİN KARARI VE KAYMAKAMIN GÖRÜŞÜ ÜZERİNE VALİNİN ONAYI ile olur. ANCAK belediye sınırları içinde NÜFUSU 500'ÜN ALTINDA MAHALLE KURULAMAZ.",
  t: "Mahalle İdaresi", d: 3
},
{
  q: "Mahalle idaresinin organları hangileridir ve kaç üyeden oluşur?",
  o: ["Muhtar ve ihtiyar heyeti (4 asıl, 4 yedek üye); beş yıllık süreyle mahalle halkı tarafından seçilir", "Sadece muhtar", "Muhtar ve mahalle meclisi", "Muhtar ve ihtiyar heyeti (8 asıl üye)", "Mahalle derneği ve muhtar"],
  a: 0,
  e: "MAHALLENİN ORGANLARI MUHTAR VE İHTİYAR HEYETİDİR (4 ASIL; 4 YEDEK ÜYE). Muhtar ve ihtiyar heyeti üyeleri MAHALLE HALKI TARAFINDAN BEŞ YILLIK SÜREYLE SEÇİLİR. Bu seçimlerde SİYASİ PARTİLER ADAY GÖSTEREMEZ.",
  t: "Mahalle İdaresi", d: 3
},
{
  q: "Görevini gereği gibi yapmayan mahalle muhtarı ve ihtiyar heyeti üyelerinin görevine kim son verir?",
  o: ["İl ya da ilçe idare kurullarınca; bu kararlara karşı idare mahkemesinde dava açılabilir", "Belediye meclisi", "Vali doğrudan", "Kaymakam doğrudan", "İçişleri Bakanlığı"],
  a: 0,
  e: "Görevini gereği gibi yapmayan MAHALLE MUHTARI VE İHTİYAR HEYETİ ÜYELERİNİN GÖREVİNE İL YA DA İLÇE İDARE KURULLARINCA SON VERİLİR. KURULLARIN BU KARARLARINA KARŞI İDARE MAHKEMESİNDE DAVA AÇILABİLİR. (Köy muhtarları için de aynı usul geçerlidir.)",
  t: "Mahalle İdaresi", d: 3
},

/* ---------- HİZMET YÖNÜNDEN YERİNDEN YÖNETİM ---------- */
{
  q: "Hizmet yönünden yerinden yönetim kuruluşları nasıl tanımlanır?",
  o: ["Teknik bilgi ve uzmanlık isteyen belli bir hizmetin devlet ve mahalli idare tüzel kişiliği dışında örgütlenmesi ve kamu tüzel kişiliğine kavuşturulması sonucu ortaya çıkan kuruluşlardır", "Belirli bir coğrafi alanda hizmet gören kuruluşlardır", "Merkezi idarenin taşra birimleridir", "Seçimle oluşan karar organlarına sahip kuruluşlardır", "Özel hukuk tüzel kişileridir"],
  a: 0,
  e: "HİZMET YÖNÜNDEN YERİNDEN YÖNETİM KURULUŞLARI, TEKNİK BİLGİ VE UZMANLIK İSTEYEN BELLİ BİR HİZMETİN DEVLET VE MAHALLİ İDARE TÜZEL KİŞİLİĞİ DIŞINDA ÖRGÜTLENMESİ VE KAMU TÜZEL KİŞİLİĞİNE KAVUŞTURULMASI sonucu ortaya çıkan kuruluşlardır.",
  t: "Kamu Kurumları", d: 2
},
{
  q: "Kamu kurumlarının 'mal topluluğu' olarak nitelendirilmesinin sebebi nedir?",
  o: ["Belli bir amacı gerçekleştirmek için tahsis edilmiş malvarlığına tüzel kişilik tanınmış olmasıdır", "Sadece taşınmaz mallardan oluşmalarıdır", "Kişi topluluğu olmamalarıdır", "Malvarlıklarının özel hukuka tabi olmasıdır", "Gelirlerinin kamu geliri sayılmasıdır"],
  a: 0,
  e: "Kamu kurumları, BELLİ BİR AMACI GERÇEKLEŞTİRMEK İÇİN TAHSİS EDİLMİŞ MALVARLIĞINA TÜZEL KİŞİLİK TANINDIĞI İÇİN 'MAL TOPLULUĞU' olarak nitelendirilirler. (Mahalli idareler ise KİŞİ/İNSAN TOPLULUĞU niteliğindedir.)",
  t: "Kamu Kurumları", d: 3
},
{
  q: "Kamu kurumlarının (hizmet yerinden yönetim) özellikleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Yöneticileri merkezi idarenin ataması ile belirlenir; merkezi idarenin idari vesayet denetimine tabidirler; uzmanlık kuruluşudurlar", "Yöneticileri seçimle belirlenir", "Hiçbir denetime tabi değildirler", "Her konuda faaliyette bulunabilirler", "Özel hukuk tüzel kişisidirler"],
  a: 0,
  e: "Kamu kurumlarının özellikleri: KAMU TÜZEL KİŞİSİDİRLER (hak-fiil ehliyeti, ayrı bütçe-malvarlığı-personel, TEK YANLI İŞLEM, HUKUKA UYGUNLUK KARİNESİ, RE'SEN İCRA, YÖNETMELİK ÇIKARMA, malları KAMU MALI); MAL TOPLULUĞUDURLAR; MERKEZİ İDARENİN İDARİ VESAYET DENETİMİNE TABİDİRLER; YÖNETİCİLERİ MERKEZİ İDARENİN ATAMASI İLE BELİRLENİR; KANUN VEYA CBK ile kurulurlar; UZMANLIK KURULUŞUDURLAR — belli bir veya birkaç konuda faaliyette bulunurlar.",
  t: "Kamu Kurumları", d: 3
},
{
  q: "Sosyal kamu kurumları hangi ihtiyaçları karşılamak üzere kurulur ve hangi kuruluşlar bu kategoride sayılır?",
  o: ["İstihdam, sosyal güvenlik, sağlık, emeklilik ve konut ihtiyaçları için kurulur; SGK, İŞKUR ve Toplu Konut İdaresi Başkanlığı bu kategoridedir", "Bilimsel araştırma için kurulur; TÜBİTAK ve TÜBA bu kategoridedir", "Ticari faaliyet için kurulur; TCDD ve MKEK bu kategoridedir", "Klasik kamu hizmetleri için kurulur; Orman GM ve DSİ bu kategoridedir", "Piyasaları düzenlemek için kurulur; RTÜK ve SPK bu kategoridedir"],
  a: 0,
  e: "SOSYAL KAMU KURUMLARI istihdam, sosyal güvenlik, sağlık, emeklilik, konut ihtiyaçlarını karşılamak üzere kurulur; genellikle 'BAŞKANLIK' ya da 'GENEL MÜDÜRLÜK' şeklinde örgütlenir: SOSYAL GÜVENLİK KURUMU, TÜRKİYE İŞ KURUMU GENEL MÜDÜRLÜĞÜ, TOPLU KONUT İDARESİ BAŞKANLIĞI (TOKİ).",
  t: "Kamu Kurumları", d: 2
},
{
  q: "Bilimsel, teknik ve kültürel kamu kurumları diğer kamu kurumlarından hangi yönüyle ayrılır?",
  o: ["İdari, sosyal ve iktisadi kamu kurumlarına göre daha özerk yapıdadırlar", "Tüzel kişilikleri yoktur", "Vesayet denetimine tabi değildirler", "Yöneticileri seçimle gelir", "Bütçeleri yoktur"],
  a: 0,
  e: "BİLİMSEL, TEKNİK VE KÜLTÜREL KAMU KURUMLARI bilimsel araştırma, eğitim, teknik, kültür ve sanat alanında faaliyet gösterirler ve İDARİ, SOSYAL VE İKTİSADİ KAMU KURUMLARINA GÖRE DAHA ÖZERK YAPIDADIRLAR. Örnekler: ÜNİVERSİTELER, TÜBİTAK, TÜRKİYE BİLİMLER AKADEMİSİ (TÜBA), ATATÜRK KÜLTÜR DİL VE TARİH YÜKSEK KURUMU, TRT, DEVLET TİYATROLARI GM, DEVLET OPERA VE BALESİ GM.",
  t: "Kamu Kurumları", d: 3
},
{
  q: "İdari kamu kurumları nasıl ortaya çıkmıştır?",
  o: ["Önceleri Devlet tarafından yürütülen klasik bazı kamu hizmetlerinin daha hızlı ve verimli sunulabilmesi için merkezi idareden ayrı kamu tüzel kişilerine verilmesiyle", "Ticari faaliyette bulunmak amacıyla", "Bilimsel araştırma yapmak amacıyla", "Sosyal güvenlik ihtiyacını karşılamak amacıyla", "Piyasaları düzenlemek amacıyla"],
  a: 0,
  e: "İDARİ KAMU KURUMLARI, ÖNCELERİ DEVLET TARAFINDAN YÜRÜTÜLEN KLASİK BAZI KAMU HİZMETLERİNİN DAHA HIZLI VE VERİMLİ SUNULABİLMESİ İÇİN MERKEZİ İDAREDEN AYRI KAMU TÜZEL KİŞİLERİNE VERİLMESİYLE oluşturulmuştur. Örnekler: VAKIFLAR GENEL MÜDÜRLÜĞÜ, ORMAN GENEL MÜDÜRLÜĞÜ, KARAYOLLARI GENEL MÜDÜRLÜĞÜ, DEVLET SU İŞLERİ GENEL MÜDÜRLÜĞÜ.",
  t: "Kamu Kurumları", d: 2
}

]);

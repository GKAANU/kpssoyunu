/* İdare Hukuku — 7. bölüm (acele kamulaştırma, geçici işgal, devletleştirme,
   istimval, idarenin malları, kolluk, kamu hizmeti ilkeleri ve türleri) */
KPSS.registerBank('idare', [
{
  q: "Acele kamulaştırmaya hangi hâlde başvurulabilir?",
  o: ["Aceleliğine Cumhurbaşkanınca karar alınan hâllerde", "İdarenin ödeneği hazır etmiş olduğu hâllerde", "Belediye encümeninin karar verdiği hâllerde", "Malikin satmaya razı olmadığı her hâlde", "İl idare kurulunun uygun görüşü üzerine"],
  a: 0,
  e: "YURT SAVUNMASI İHTİYACINA VEYA ACELELİĞİNE CUMHURBAŞKANINCA KARAR ALINACAK HALLERDE veya ÖZEL KANUNLARDA ÖNGÖRÜLEN OLAĞANÜSTÜ DURUMLARDA acele kamulaştırma işlemine başvurulabilir.",
  t: "Acele Kamulaştırma", d: 3
},
{
  q: "Acele kamulaştırmada bilirkişilerce değer tespiti ne kadar süre içinde yapılır?",
  o: ["Yedi gün içinde", "On beş gün içinde", "Otuz gün içinde", "Üç gün içinde", "Süre öngörülmemiştir"],
  a: 0,
  e: "Acele kamulaştırmada KIYMET TAKDİRİ DIŞINDAKİ İŞLEMLER SONRADAN TAMAMLANMAK ÜZERE, ilgili idarenin talebi ile YEDİ GÜN İÇİNDE o taşınmazın MAHKEMECE SEÇİLECEK BİLİRKİŞİLERCE DEĞERİNİN TESPİT EDİLMESİYLE, İDARE ADINA TESCİLİ ve belirtilen bankaya kamulaştırma bedelinin yatırılmasıyla gerçekleştirilir.",
  t: "Acele Kamulaştırma", d: 3
},
{
  q: "Acele kamulaştırmada mahkemenin verdiği el koyma kararının sonucu nedir?",
  o: ["Tapuya şerh verilir ve taşınmaz boşaltılır", "Yalnızca bedel bankaya yatırılır, şerh verilmez", "Taşınmaz malikte kalır, boşaltılamaz", "Mülkiyet doğrudan tapuda idareye geçer", "Kamu yararı kararı yeniden alınır"],
  a: 0,
  e: "Mahkemece verilen TAŞINMAZ MALA EL KOYMA KARARI TAPU MÜDÜRLÜĞÜNE BİLDİRİLİR. Taşınmaz malın BAŞKASINA DEVİR, FERAĞ VEYA TEMLİKİNİN YAPILAMAYACAĞI hükmü TAPU KÜTÜĞÜNE ŞERH EDİLİR. EL KOYMA KARARINDAN SONRA TAŞINMAZ MAL BOŞALTILIR.",
  t: "Acele Kamulaştırma", d: 3
},
{
  q: "Bayındırlık hizmeti için taş, kum, kireç çıkarmak amacıyla özel mülkiyetteki araziye geçici el atılmasına ne ad verilir?",
  o: ["Geçici işgal", "İstimval", "Devletleştirme", "Acele kamulaştırma", "Kamulaştırmasız el atma"],
  a: 0,
  e: "GEÇİCİ İŞGAL: bir BAYINDIRLIK HİZMETİNİN görülmesi sırasında gereksinim duyulan TAŞ, KUM, KİREÇ VE BENZERİ İPTİDAİ MADDELERİ çıkarmak/hazırlamak (AHŞAP BU MADDELER ARASINDA YER ALMAZ) ya da bazı eşyaları koyabilmek için özel mülkiyetteki taşınmaza idarece GEÇİCİ OLARAK EL ATILMASIDIR. KONUSU ARSA VE ARAZİLERDİR; KONUT VEYA EKLENTİLER GEÇİCİ İŞGALE KONU OLAMAZ — konu unsurunu BİNASIZ TAŞINMAZLAR oluşturur.",
  t: "Geçici İşgal", d: 3
},
{
  q: "Geçici işgal işlemi hangi organ tarafından tesis edilir?",
  o: ["İl İdare Kurulu", "İl Encümeni", "Belediye Encümeni", "İl Genel Meclisi", "Bakanlar Kurulu"],
  a: 0,
  e: "GEÇİCİ İŞGAL İŞLEMİ İL İDARE KURULU TARAFINDAN TESİS EDİLİR. Geçici işgal işlemine karşı açılacak iptal davalarında, kamulaştırma işlemindeki gibi ÖZEL BİR SÜRE GETİRİLMEMİŞTİR — burada 60 GÜNLÜK GENEL DAVA AÇMA SÜRESİ uygulanır. Ancak malik TAKDİR EDİLEN BEDELİ DÜŞÜK BULUYORSA ADLİ YARGIYA BAŞVURABİLİR.",
  t: "Geçici İşgal", d: 3
},
{
  q: "Geçici işgale konu taşınmaz, işin bitiminde ne olur?",
  o: ["Eski hâline getirilip sahibine iade edilir", "İdare adına tapuda tescil edilir", "Bedeli ödenerek idarede kalır", "Kamulaştırma kapsamına alınır", "Hazineye devredilir"],
  a: 0,
  e: "Geçici işgalde yapılanlar İNŞAAT BİTTİKTEN SONRA TAMAMIYLA KALDIRILIP, İŞGAL EDİLEN ARAZİ ESKİ HALİNDE SAHİBİNE İADE EDİLİR.",
  t: "Geçici İşgal", d: 2
},
{
  q: "Anayasa m. 47'ye göre devletleştirmenin konusu ne olabilir?",
  o: ["Kamu hizmeti niteliği taşıyan özel teşebbüsler", "Özel mülkiyetteki her türlü taşınmaz", "Kamu tüzel kişilerine ait hizmet malları", "Yabancı sermayeli tüm şirketler", "Zarar eden her ticari işletme"],
  a: 0,
  e: "AY m. 47: 'KAMU HİZMETİ NİTELİĞİ TAŞIYAN ÖZEL TEŞEBBÜSLER, KAMU YARARININ ZORUNLU KILDIĞI HALLERDE DEVLETLEŞTİRİLEBİLİR. DEVLETLEŞTİRME GERÇEK KARŞILIĞI ÜZERİNDEN YAPILIR. Gerçek karşılığın hesaplanma tarzı usulleri kanunla düzenlenir.'",
  t: "Devletleştirme", d: 2
},
{
  q: "3082 sayılı Kanun'a göre aşağıdakilerden hangisi devletleştirme şartlarından biridir?",
  o: ["Hizmetin ülke çapında kamu ihtiyacına hitap etmesi", "Teşebbüsün üst üste zarar etmiş olması", "Teşebbüsün yabancı ortak barındırması", "Kamu yararı kararının alınmış olması", "İl idare kurulunun uygun görüş vermesi"],
  a: 0,
  e: "3082 sayılı Kanun'a göre devletleştirme için ŞU ŞARTLARIN BİRLİKTE gerçekleşmesi gerekir: a) Devletleştirilecek özel teşebbüsün yaptığı hizmet veya üretiminin ÜLKE ÇAPINDA KAMU İHTİYACINA HİTAP ETMESİ, b) Bu hizmet veya üretimin KONTROL, REKABET, İKAME VEYA BAŞKA YOLLARDAN SAĞLAMA İMKANININ BULUNMAMASI, c) Hizmet/üretimin YAVAŞLATILMASI VEYA DURDURULMASI halinde KAMUNUN BÜYÜK ZARAR GÖRMESİ.",
  t: "Devletleştirme", d: 3
},
{
  q: "Devletleştirme hangi hukuki işlemle yapılır ve bedeli en çok kaç yılda ödenebilir?",
  o: ["Kanunla yapılır, bedel en çok beş yılda ödenir", "Kanunla yapılır, bedel yalnızca peşin ödenir", "Kararnameyle yapılır, bedel üç yılda ödenir", "Bakan onayıyla yapılır, bedel iki yılda ödenir", "Yönetmelikle yapılır, bedel ödenmez"],
  a: 0,
  e: "DEVLETLEŞTİRME İŞLEMİ KANUNLA GERÇEKLEŞTİRİLİR. Devletleştirme bedeli, NAKDEN VE PEŞİN OLARAK VEYA EN FAZLA BEŞ YIL İÇİNDE EŞİT TAKSİTLERLE ödenmek suretiyle yapılır. Taksitler için DEVLET BORÇLARI İÇİN ÖNGÖRÜLEN EN YÜKSEK FAİZ uygulanır.",
  t: "Devletleştirme", d: 3
},
{
  q: "Olağanüstü durumlarda karşılığı ödenerek taşınır mallara idarece zorla el atılmasına ne ad verilir?",
  o: ["İstimval (rekizisyon)", "Geçici işgal", "Kamulaştırma", "Devletleştirme", "Fiili yol"],
  a: 0,
  e: "İSTİMVAL (REKİZİSYON), OLAĞANÜSTÜ DURUMLARDA, KARŞILIĞI ÖDENMEK SURETİYLE MENKULLERE (TAŞINIR MALLAR) İDARECE ZORLA EL ATILMASIDIR (ayrıca BEDENSEL YÜKÜMLÜLÜKLER ya da ÇALIŞMA şeklinde de istimval söz konusu olabilir). İstimval, taşınır malın SADECE KULLANIM HAKKININ belli bir süre idarede olması hallerini de ifade eder.",
  t: "İstimval", d: 3
},
{
  q: "İstimvale ilişkin uyuşmazlıklar ile istimvalden doğan bedel uyuşmazlıkları hangi yargı kollarında çözülür?",
  o: ["İstimval idari, bedel adli yargıda", "İstimval adli, bedel idari yargıda", "İkisi de idari yargıda", "İkisi de adli yargıda", "İkisi de tahkimde"],
  a: 0,
  e: "İSTİMVALE İLİŞKİN UYUŞMAZLIKLAR İDARİ YARGIDA; İSTİMVALDEN DOĞAN BEDEL UYUŞMAZLIKLARI İSE ADLİ YARGIDA çözümlenir. İstimval yetkisinin kullanılabilmesi için YASAL BİR DAYANAĞA GEREK VARDIR ve OLAĞANÜSTÜ DURUMLARDA başvurulabilir.",
  t: "İstimval", d: 3
},
{
  q: "Bir malın kamu malı sayılabilmesi için birlikte aranan iki koşul aşağıdakilerden hangisidir?",
  o: ["Organik koşul ve maddi (tahsis) koşulu", "Organik koşul ve tapuya tescil koşulu", "Maddi koşul ve vergiden muafiyet koşulu", "Tapuya tescil ve haczedilmezlik koşulu", "Kamu yararı ve ödenek koşulu"],
  a: 0,
  e: "Kamu mallarının belirlenmesinde İKİ KOŞUL BİR ARADA aranır: a) ORGANİK KOŞUL: malın DEVLET YA DA DİĞER KAMU TÜZEL KİŞİLERİNE AİT olması. b) MADDİ KOŞUL: malın KAMUNUN ORTAK KULLANIMINA VE YARARLANMASINA ya da BİR KAMU HİZMETİNE ÖZEL BİR DÜZENLEME İLE TAHSİS EDİLMİŞ olması.",
  t: "İdarenin Malları", d: 3
},
{
  q: "İdarenin özel malını orta malı ya da hizmet malına dönüştürmesi işlemine ne ad verilir?",
  o: ["Tahsis (özgüleme)", "Terkin", "İrtifak tesisi", "Trampa", "İstimval"],
  a: 0,
  e: "TAHSİS (ÖZGÜLEME): İDARENİN ÖZEL MÜLKİYETİNDE BULUNAN BİR MALIN, ORTA MALI YA DA HİZMET MALINA DÖNÜŞTÜRMESİ ya da BİR KAMUSAL MALIN, BULUNDUĞU KATEGORİDEN DİĞER KATEGORİYE GEÇİRİLMESİ İŞLEMİDİR.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Kamu mallarının özelliği bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Zamanaşımıyla kazanılamaz ve haczedilemez", "Zamanaşımıyla kazanılabilir, haczedilemez", "Serbestçe haczedilebilir ve satılabilir", "Üzerinde ipotek ve intifa kurulabilir", "Tapuya tescili zorunludur"],
  a: 0,
  e: "KAMU MALLARININ ÖZELLİKLERİ: kamusal mal statüsü devam ettikçe DEVİR VE FERAĞ EDİLEMEZ, ZAMANAŞIMI YOLUYLA KAZANILAMAZ, VERGİ VE BENZERİ YÜKÜMLÜLÜKLERİN DIŞINDADIR, ÜZERİNDE ÖZEL KİŞİLER LEHİNE SINIRLI AYNİ HAKLAR KURULAMAZ, ÜZERİNDE İPOTEK KURULAMAZ, kural olarak KİRAYA VERİLEMEZ, HACZEDİLEMEZ, KAMULAŞTIRILAMAZ, TAPUYA TESCİL ZORUNLULUĞU YOKTUR.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Kamu mallarının kullanıma açılması bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Kiralanamaz ama tek yanlı izinle kullanılabilir", "Kira sözleşmesiyle serbestçe kiralanabilir", "Hiçbir biçimde kullanıma açılamaz", "Yalnızca ihale ile kiraya verilebilir", "Yalnızca kamulaştırma sonrası kiralanır"],
  a: 0,
  e: "KURAL OLARAK KAMU MALLARI KİRAYA VERİLEMEZ veya kira gibi özel hukuk sözleşmelerine konu olamaz. BUNUNLA BİRLİKTE ŞAHSİ KULLANIM OLANAĞI MÜMKÜNDÜR: İDARE KİRA İLE OLMASA BİLE TEK TARAFLI İZNİ İLE ŞAHSİ KULLANIMA İZİN VEREBİLİR.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Kamu malları tahsis amacına göre kaç kısma ayrılır?",
  o: ["Üç: sahipsiz, orta ve hizmet malları", "İki: orta malları ve hizmet malları", "İki: kamu malları ve özel mallar", "Dört: sahipsiz, orta, hizmet ve özel", "Beş: sahipsiz, orta, hizmet, özel ve ortak"],
  a: 0,
  e: "Kamu malları tahsis amacına göre 'SAHİPSİZ MALLAR', 'ORTA MALLARI' ve 'HİZMET MALLARI' olmak üzere ÜÇ KISMA AYRILIR.",
  t: "İdarenin Malları", d: 2
},
{
  q: "Aşağıdakilerden hangisi sahipsiz mallardan biridir?",
  o: ["Akarsu yatakları ve kıyılar", "Yollar ve meydanlar", "Otlak, mera ve yaylaklar", "Adliye sarayları", "Üniversite binaları"],
  a: 0,
  e: "SAHİPSİZ MALLAR (nihai sahibi DEVLETTİR; kural olarak özel mülkiyete geçirilmeye elverişli olmayan mallardır): TARIMA ELVERİŞLİ OLMAYAN YERLER (kayalar, tepeler, dağlar, çukurlar, AKARSU YATAKLARI, bataklık, buzullarla kaplı alanlar, meşelik, çalılık, fundalık), GENEL SULAR (deniz, göl, akarsu, nehir), KIYILAR, ORMANLAR, DOĞAL SERVET VE KAYNAKLAR, TARİH-KÜLTÜR VE TABİAT VARLIKLARI.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Otlak, mera ve yaylak, kamu malları içinde hangi gruba girer?",
  o: ["Bir kısım halkın yararlandığı orta malları", "Herkesin yararlanmasına özgülenen orta malları", "Hizmet malları", "Sahipsiz mallar", "İdarenin özel malları"],
  a: 0,
  e: "ORTA MALLARI (doğaları gereği, gelenek gereğince ya da tahsis sonucu kamunun kullanımına sunulmuş ve HERKES TARAFINDAN KULLANILAN mallar) İKİ KATEGORİYE ayrılır: 1) HERKESİN YARARLANMASINA ÖZGÜLENEN ORTA MALLARI: YOLLAR, KÖPRÜLER, MEYDANLAR, PAZAR YERLERİ. 2) BİR KISIM HALKIN YARARLANDIĞI ORTA MALLARI: OTLAK, MERA, YAYLAK.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Adliye sarayı, üniversite binası ve hastane hangi kamu malı türüne örnektir?",
  o: ["Hizmet malları", "Orta malları", "Sahipsiz mallar", "İdarenin özel malları", "Tahsis edilmemiş mallar"],
  a: 0,
  e: "HİZMET MALLARI: kamu hizmeti ile yakından ilgili olup KAMU HİZMETİNİN BİR ÖĞESİ OLACAK ŞEKİLDE BİR HİZMETE TAHSİS EDİLEN TAŞINIR VE TAŞINMAZ MALLARDIR. Bu mallar PARSEL DEĞERİYLE DEĞİL, KULLANMA DEĞERLERİYLE idarenin görevlerinin yerine getirilmesinde doğrudan hizmet ederler. Örnekler: ADLİYE SARAYLARI, ÜNİVERSİTE BİNALARI, HASTANELER, DEMİRYOLLARI, CAMİ.",
  t: "İdarenin Malları", d: 3
},
{
  q: "İdarenin özel malları bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Özel hukuka tabidir, uyuşmazlığı adli yargıda görülür", "Kamu hukukuna tabidir, uyuşmazlığı idari yargıdadır", "Zamanaşımıyla kazanılamaz", "Hiçbir biçimde haczedilemez", "Kamu hizmetine tahsis edilmiş mallardır"],
  a: 0,
  e: "İDARENİN ÖZEL MALLARI: özel mülkiyete elverişli olan ve idarece herhangi bir kamu hizmetine TAHSİS EDİLMEMİŞ, mülkiyeti idareye ait mallardır. Özellikleri: KAMU YARARINDAN ÇOK GELİR GETİRME AMACI taşırlar; ÖZEL HUKUKA TABİDİR ve uyuşmazlıklar ADLİ YARGININ görev alanına girer. İdare bu mallar üzerinde MALİKİN BÜTÜN YETKİLERİNE sahiptir; ancak SATIMI VEYA KİRAYA VERİLMESİ KANUNUN ÖNGÖRDÜĞÜ USULLERE göre yapılır.",
  t: "İdarenin Malları", d: 3
},
{
  q: "İdarenin özel mallarının haczi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Devletin özel malı haczedilemez, belediyenin haczedilir", "Devletin özel malı haczedilir, belediyenin haczedilemez", "Tüm özel mallar haczedilebilir", "Hiçbir özel mal haczedilemez", "Haciz için Danıştay izni gerekir"],
  a: 0,
  e: "DEVLET TÜZEL KİŞİSİNE (MERKEZİ İDAREYE) AİT ÖZEL MAL NİTELİĞİNDEKİ MALLAR HACZEDİLEMEZ. ANCAK DEVLET DIŞINDAKİ KAMU TÜZEL KİŞİLERİNİN, ÖRNEĞİN BELEDİYELERİN, ELLERİNDEKİ ÖZEL MALLARIN HACZEDİLEBİLECEĞİ KABUL EDİLMEKTEDİR.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Kamu düzeninin unsurları hangileridir?",
  o: ["Güvenlik, dirlik, genel sağlık ve genel ahlak", "Güvenlik, esenlik, sağlık, ahlak ve ekonomi", "Güvenlik, esenlik ve adaletin sağlanması", "Yalnızca güvenliğin sağlanması", "Güvenlik ve genel sağlığın korunması"],
  a: 0,
  e: "KAMU DÜZENİNİN UNSURLARI: 1) GÜVENLİK (bireylerin can ve mal güvenliği), 2) DİRLİK/ESENLİK (toplumun huzur ve sükununun korunması; gürültü, kirlilik gibi düzensizliklerden korunma), 3) GENEL SAĞLIK (bulaşıcı hastalıklardan korunma), 4) GENEL AHLAK (toplum düzenini tehlikeye sokan ahlaki tutumların önlenmesi).",
  t: "Kolluk", d: 2
},
{
  q: "Bireyin kişisel ahlak anlayışı kamu düzenini hangi hâlde ilgilendirir?",
  o: ["Dışa yansıyıp toplumsal düzeni bozduğunda", "Her hâlde ve doğrudan ilgilendirir", "Yalnızca suç oluşturduğunda", "Hiçbir hâlde ilgilendirmez", "Yalnızca kolluk talep ettiğinde"],
  a: 0,
  e: "BİREYLERİN KİŞİSEL AHLAK ANLAYIŞLARI KAMU DÜZENİNİ İLGİLENDİRMEZ. FAKAT BİREYLERİN AHLAKİ ANLAYIŞLARININ DIŞA YANSIMASI TOPLUMSAL DÜZENİ BOZARSA KAMU DÜZENİ İLE İLGİLİ KABUL EDİLİR VE KOLLUK FAALİYETİNE KONU OLUR.",
  t: "Kolluk", d: 3
},
{
  q: "Adli kolluk ile idari kolluk arasındaki temel fark nedir?",
  o: ["Adli kolluk bastırıcı, idari kolluk önleyicidir", "Adli kolluk önleyici, idari kolluk bastırıcıdır", "İkisi de yalnızca önleyici işlev görür", "İkisi de adli makamlardan emir alır", "İkisi de yalnızca devlet adına yapılır"],
  a: 0,
  e: "ADLİ KOLLUK: KAMU DÜZENİ BOZULDUKTAN SONRA ortaya çıkar, suçun ve suçluların ortaya çıkarılmasına yöneliktir, BASTIRICI FONKSİYONU vardır, ADLİ MAKAMLARDAN EMİR ALIR, uyuşmazlıkları ADLİ YARGIYA tabidir. İDARİ KOLLUK: KAMU DÜZENİ BOZULMADAN ÖNCE faaliyette bulunur, ÖNLEYİCİ FONKSİYONU vardır, İDARİ MAKAMLARDAN EMİR ALIR, uyuşmazlıkları İDARİ YARGIYA tabidir.",
  t: "Kolluk", d: 2
},
{
  q: "İdari kolluk görevlisi görev suçu işlerse soruşturma bakımından hangi kural geçerlidir?",
  o: ["Yetkili amirin izni gerekir (4483 sayılı Kanun)", "Cumhuriyet savcısı doğrudan soruşturma başlatır", "Yalnızca disiplin soruşturması yapılabilir", "Hiçbir soruşturma açılamaz", "Danıştay izni gerekir"],
  a: 0,
  e: "ADLİ KOLLUK görev suçu işlerse CUMHURİYET SAVCISI DOĞRUDAN SORUŞTURMA BAŞLATABİLİR. İDARİ KOLLUK görev suçu işlerse KURAL OLARAK CUMHURİYET SAVCISI DOĞRUDAN SORUŞTURMA BAŞLATAMAZ — YETKİLİ AMİRİN İZNİ GEREKİR (4483 sayılı Kanun).",
  t: "Kolluk", d: 3
},
{
  q: "Adli kolluk nerede bulunur ve kim adına yapılır?",
  o: ["Tam teşekküllü karakollarda bulunur ve Devlet tüzel kişiliği adına yapılır", "Her yerde bulunur ve yerinden yönetim kuruluşları adına yapılır", "Sadece adliyelerde bulunur", "Her yerde bulunur ve devlet adına yapılır", "Belediyeler adına yapılır"],
  a: 0,
  e: "ADLİ KOLLUK TAM TEŞEKKÜLLÜ KARAKOLLARDA BULUNUR ve DEVLET TÜZEL KİŞİLİĞİ ADINA YAPILIR. İDARİ KOLLUK ise HER YERDE BULUNUR ve HEM DEVLET HEM DE YERİNDEN YÖNETİM KURULUŞLARI ADINA YAPILIR.",
  t: "Kolluk", d: 3
},
{
  q: "Milli güvenliğin sağlanması amacıyla yürütülen ve MİT görevlilerince yerine getirilen kolluk türü hangisidir?",
  o: ["Siyasi kolluk", "Adli kolluk", "İdari kolluk", "Hizmet kolluğu", "Mahalli idare kolluğu"],
  a: 0,
  e: "SİYASİ KOLLUK, DEVLETİN MİLLİ GÜVENLİĞİN SAĞLANMASI ADINA GİRİŞTİĞİ FAALİYETLERDİR. Bu faaliyetler, CUMHURBAŞKANLIĞINA BAĞLI MİLLİ İSTİHBARAT TEŞKİLATI'NIN GÖREVLİLERİNCE yerine getirilir.",
  t: "Kolluk", d: 2
},
{
  q: "Genel idari kolluk ile özel idari kolluk arasındaki fark nedir?",
  o: ["Genel kolluk dört unsuru, özel kolluk belirli alanı korur", "Genel kolluk belirli alanı, özel kolluk dört unsuru korur", "Genel kolluk yalnızca güvenliği sağlar", "Özel kolluk yalnızca belediyelerde bulunur", "İkisi arasında bir fark bulunmaz"],
  a: 0,
  e: "GENEL İDARİ KOLLUK: kamu düzeninin DÖRT UNSURUNU DA (güvenlik, dirlik, genel sağlık, genel ahlak) sağlamak için faaliyette bulunan kolluktur. ÖZEL İDARİ KOLLUK: KANUNDA ÖNGÖRÜLEN BELİRLİ BİR ALANDA faaliyet gösteren kolluktur (MAHALLİ İDARE KOLLUĞU ve HİZMET KOLLUĞU olarak ikiye ayrılır).",
  t: "Kolluk", d: 3
},
{
  q: "Genel idari kolluk amirleri ve personeli kimlerdir?",
  o: ["İçişleri Bakanı, vali, kaymakam ve polis", "Cumhurbaşkanı, bakanlar, zabıta ve korucu", "Vali, belediye başkanı ve zabıta amiri", "Muhtar, belediye başkanı ve bekçi", "Yalnızca polis ve jandarma teşkilatı"],
  a: 0,
  e: "GENEL İDARİ KOLLUK AMİRLERİ: İÇİŞLERİ BAKANI, VALİ, KAYMAKAM. PERSONELİ: POLİS, JANDARMA, SAHİL GÜVENLİK, BEKÇİ. MAKAMLARI (kolluk alanında düzenleyici ve/veya bireysel işlem yapanlar): CUMHURBAŞKANI (düzenleyici+bireysel), İÇİŞLERİ BAKANI (düzenleyici+bireysel), VALİ (düzenleyici+bireysel), KAYMAKAM (SADECE BİREYSEL).",
  t: "Kolluk", d: 3
},
{
  q: "Mahalli idare kolluğunun personeli aşağıdakilerden hangisidir?",
  o: ["Zabıta ve korucu", "Polis ve jandarma", "Bekçi ve sahil güvenlik", "MİT görevlileri", "Trafik kolluğu memurları"],
  a: 0,
  e: "MAHALLİ İDARE KOLLUĞU — AMİRLERİ: İL ÖZEL İDARESİNDE VALİ, BELEDİYEDE BAŞKAN, KÖYDE MUHTAR. PERSONELİ: ZABITA ve KORUCU. MAKAMLARI: il özel idaresinde İL GENEL MECLİSİ (düzenleyici+bireysel), İL ENCÜMENİ (düzenleyici+bireysel), VALİ (bireysel); belediyede BELEDİYE MECLİSİ ve ENCÜMENİ (düzenleyici+bireysel), BAŞKAN (bireysel); köyde İHTİYAR HEYETİ (düzenleyici), MUHTAR (bireysel).",
  t: "Kolluk", d: 3
},
{
  q: "Aşağıdakilerden hangisi hizmet kolluğuna örnektir?",
  o: ["Kara yolları trafik kolluğu", "Belediye zabıtası", "Köy korucusu", "Çarşı ve mahalle bekçisi", "Jandarma karakolu"],
  a: 0,
  e: "HİZMET KOLLUĞU: ORMAN, MALİYE, TEKEL, KARA YOLLARI TRAFİK KOLLUĞU, HAVA YOLLARI KOLLUĞU, GÜMRÜK, TARIM, TURİZM, ÇEVRE gibi alanlarda faaliyette bulunan kolluk türüdür. ÖZEL İDARİ KOLLUĞUN bir alt türüdür.",
  t: "Kolluk", d: 3
},
{
  q: "Kişilerin izin veya bildirim şartına bağlı olmaksızın faaliyette bulunabilmesini ifade eden kolluk usulü hangisidir?",
  o: ["Serbestlik usulü", "İzin usulü", "Bildirim usulü", "Yasaklama usulü", "Ruhsat usulü"],
  a: 0,
  e: "SERBESTLİK USULÜ: kişilerin faaliyette bulunurken HERHANGİ BİR İZİN VEYA BİLDİRİM ŞARTINA BAĞLANMAKSIZIN ya da BİR YASAKLAMA İLE KARŞILAŞMAKSIZIN hareket edebilmesidir. Demokratik toplum düzeninde ASIL OLAN SERBESTLİKTİR. Örnek: Türkiye'de KİTAP YAYINI yapmak için izin/bildirim gerekmez; ancak kitapta hakaret/suç varsa sorumluluğu YAZAR VE YAYINCI üstlenir.",
  t: "Kolluk Usulleri", d: 2
},
{
  q: "Kişilerin bazı faaliyetlerinin icra edilmeden önce kolluk tarafından denetlenmesini sağlayan usul hangisidir?",
  o: ["İzin usulü (önleyici sistem)", "Bildirim usulü", "Serbestlik usulü", "Yasaklama usulü", "Emanet usulü"],
  a: 0,
  e: "İZİN USULÜ: kişilerin bazı faaliyetlerinin kolluk tarafından 'FAALİYET İCRA EDİLMEDEN ÖNCE' DENETLENEBİLMESİ VE GEREKTİĞİNDE ENGELLENEBİLMESİ için düzenlenmiş bir usuldür; 'ÖNLEYİCİ SİSTEM' de denir. Kamu düzeni için tehlikeli olabilecek faaliyetler için ÖNCEDEN KOLLUK MAKAMLARINDAN İZİN alınması gerekir.",
  t: "Kolluk Usulleri", d: 2
},
{
  q: "PVSK m. 7/3'e göre umuma açık eğlence yerlerinin ruhsatı, belediye sınırları dışında hangi idare tarafından verilir?",
  o: ["İl özel idareleri", "Valilikler", "Kaymakamlıklar", "İl idare kurulu", "Emniyet müdürlükleri"],
  a: 0,
  e: "PVSK m. 7/3: Umuma açık istirahat ve eğlence yerlerinin ruhsatı BAĞLI OLDUĞU KOLLUK KUVVETİNİN GÖRÜŞÜ ALINDIKTAN SONRA belediye ve mücavir alan sınırları içinde BELEDİYELER; bu alanların dışında İL ÖZEL İDARELERİ tarafından verilir. KOLLUK KUVVETİ GÖRÜŞÜNÜ YEDİ GÜN İÇİNDE VERİR. RUHSAT TALEPLERİ BİR AY İÇİNDE SONUÇLANDIRILIR. İZİN ALINMADAN AÇILAN yerler KAPATILIR.",
  t: "Kolluk Usulleri", d: 3
},
{
  q: "Bildirim usulünde temel amaç nedir?",
  o: ["İdarenin etkinlikten önceden haberdar edilmesi", "Faaliyetin önceden denetlenip engellenmesi", "Faaliyetin tümüyle yasaklanması", "Faaliyete ruhsat verilmesi", "Faaliyetin sonradan cezalandırılması"],
  a: 0,
  e: "BİLDİRİM USULÜNDE AMAÇ, BİREYİN VEYA TOPLULUĞUN FAALİYETLERİNİN ÖNCEDEN DENETLENMESİ VE ENGELLENMESİ DEĞİL, İDARENİN YAPILACAK ETKİNLİKLERDEN ÖNCEDEN HABERDAR EDİLMESİ VE GEREKLİ ÖNLEMLERİ ALMASIDIR. Ancak bildirime tabi bir etkinlik sonradan kamu düzenini bozar hale gelirse KOLLUĞUN MÜDAHALE YETKİSİ HER AN VE HER DURUM İÇİN VARDIR.",
  t: "Kolluk Usulleri", d: 3
},
{
  q: "2911 sayılı Toplantı ve Gösteri Yürüyüşleri Kanunu'na göre toplantı yapılabilmesi için ne kadar önce bildirimde bulunulur?",
  o: ["En az 48 saat önce mülki idare amirliğine", "En az 24 saat önce mülki idare amirliğine", "En az yedi gün önce mülki idare amirliğine", "En az bir hafta önce doğrudan valiliğe", "Herhangi bir bildirimde bulunulması gerekmez"],
  a: 0,
  e: "2911 sayılı Toplantı ve Gösteri Yürüyüşleri Kanunu'nun 10. maddesine göre toplantı yapılabilmesi için EN AZ KIRK SEKİZ SAAT ÖNCE İLGİLİ YERİN MÜLKİ İDARE AMİRLİĞİNE BİLDİRİMDE BULUNULMASI gerekir. Bu BİLDİRİM USULÜNE örnektir.",
  t: "Kolluk Usulleri", d: 3
},
{
  q: "Kamu hizmetlerinin kurulmasında ve kaldırılmasında yetki kimdedir?",
  o: ["Siyasi organlarda (TBMM ve CB)", "İdari makamlarda ve bakanlıklarda", "Yargı organlarında ve Danıştay'da", "Belediye meclislerinde ve encümende", "Kamu kurumlarının yönetim kurullarında"],
  a: 0,
  e: "KAMU HİZMETLERİNİN KURULMASINDA VE KALDIRILMASINDA YETKİ SİYASİ ORGANLARDADIR (TBMM VE CUMHURBAŞKANI).",
  t: "Kamu Hizmeti", d: 2
},
{
  q: "Kamu hizmetinin özel kişilerce yürütülmesi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["İdarenin gözetimi altında özel kişiler yürütebilir", "Yalnızca idare tarafından yürütülebilir", "Yalnızca KİT'ler tarafından yürütülebilir", "Özel kişiler hiçbir hâlde yürütemez", "Yalnızca imtiyaz yoluyla yürütülebilir"],
  a: 0,
  e: "KAMU HİZMETİNİN TEKEL KONUSU OLMASI ŞART DEĞİLDİR. Kamu hizmetlerinin MUTLAKA İDARE TARAFINDAN yapılması GEREKMEZ: DEVLETİN YA DA DİĞER KAMU TÜZEL KİŞİLERİNİN YAKIN GÖZETİM VE DENETİMİ ALTINDA OLMAK ŞARTIYLA ÖZEL KİŞİLER DE KAMU HİZMETİ YAPABİLİR. Ayrıca kamu hizmetlerinin KAMU HUKUKU KURALLARINA GÖRE YÜRÜTÜLMESİ DE ŞART DEĞİLDİR (yap-işlet, yap-işlet-devret gibi).",
  t: "Kamu Hizmeti", d: 2
},
{
  q: "Kamu personeli için konulan grev yasağı, kamu hizmetinin hangi ilkesinin sonucudur?",
  o: ["Süreklilik (devamlılık) ilkesi", "Değişkenlik (uyarlama) ilkesi", "Eşitlik ilkesi", "Bedelsizlik ilkesi", "Düzenlilik ilkesi"],
  a: 0,
  e: "SÜREKLİLİK (KESİNTİSİZLİK) İLKESİ şu kural ve ilkelerin varlık nedenidir: DEVLET MEMURLUĞUNDAN İSTİFA EDEN MEMURUN yerine BİR AY İÇİNDE yeni memur veya vekil gelene kadar BEKLEMESİNİ öngören kural; KAMU PERSONELİ İÇİN GREV YASAĞI; KAMU MALLARININ HACZEDİLMEZLİĞİ ve DEVİR-FERAĞ YASAĞI; imtiyaz sözleşmelerinde geçerli olan İMPREVİZYON (ÖNGÖRÜLMEZLİK) İLKESİ.",
  t: "Kamu Hizmeti İlkeleri", d: 3
},
{
  q: "İmtiyaz sözleşmelerinde idareye tanınan tek yanlı değişiklik yapma yetkisi hangi ilkeye dayanır?",
  o: ["Değişkenlik (uyarlama) ilkesi", "Süreklilik ilkesi", "Eşitlik ilkesi", "Bedelsizlik ilkesi", "Kanunilik ilkesi"],
  a: 0,
  e: "DEĞİŞKENLİK (UYARLAMA) İLKESİ kamu hizmetlerinin DEĞİŞEN İMKAN VE İHTİYAÇLARA UYARLANMASINI ifade eder (e-devlet uygulaması örnektir). Bu ilke şunların varlık nedenidir: İDARENİN TAKDİR YETKİSİ ve KAMU HİZMETİ İMTİYAZ SÖZLEŞMELERİNDE İDAREYE TANINAN TEK YANLI DEĞİŞİKLİK YAPMA YETKİSİ.",
  t: "Kamu Hizmeti İlkeleri", d: 3
},
{
  q: "Yolların çukursuz, otobüslerin düzenli aralıklarla gelmesi, kamu hizmetinin hangi ilkesiyle ilgilidir?",
  o: ["Düzenlilik ilkesi", "Süreklilik ilkesi", "Eşitlik ilkesi", "Değişkenlik ilkesi", "Bedelsizlik ilkesi"],
  a: 0,
  e: "DÜZENLİLİK İLKESİ HİZMETİN İŞLEYİŞİ ile ilgilidir: kamu hizmetleri ÖNCEDEN BELİRLENMİŞ KOŞULLARA UYGUN olarak yürütülmelidir. Örnekler: YOLLARDA ÇUKUR OLMAMASI, belediye otobüslerinin DÜZENLİ ARALIKLARLA gelmesi, SUYUN BASINCININ yeterli olması, ELEKTRİK VOLTAJININ gerekli şekilde verilmesi.",
  t: "Kamu Hizmeti İlkeleri", d: 3
},
{
  q: "Kamu hizmetlerinde eşitlik ilkesi hangi kavramlarla da ifade edilir?",
  o: ["Nesnellik, tarafsızlık ve ayrımcılık yasağı", "Süreklilik, düzenlilik ve kesintisizlik", "Bedelsizlik, meccanilik ve karşılıksızlık", "Değişkenlik, uyarlama ve esneklik", "Kamu yararı ve hizmet gereklilikleri"],
  a: 0,
  e: "EŞİTLİK İLKESİ: idare kamu hizmetini kullanıcılara AYRIM YAPILMAKSIZIN EŞİT BİÇİMDE sunmalıdır. Eşitlik ilkesi 'NESNELLİK', 'TARAFSIZLIK' ya da 'AYRIMCILIK YASAĞI' olarak da ifade edilebilir.",
  t: "Kamu Hizmeti İlkeleri", d: 2
},
{
  q: "Bedelsizlik (meccanilik) ilkesi bakımından öğretideki durum nedir?",
  o: ["Genel ilke sayılıp sayılmayacağı tartışmalıdır", "Tartışmasız biçimde bir genel ilkedir", "Hiçbir yazar tarafından ilke sayılmaz", "Anayasada açıkça düzenlenmiştir", "Yalnızca eğitim hizmetinde geçerlidir"],
  a: 0,
  e: "BEDELSİZLİK (MECCANİLİK) İLKESİ kamu hizmetinden yararlanmanın BİR BEDEL ÖDEME ŞARTINA BAĞLI TUTULMAMASINI ifade eder. Aslında kamu hizmetlerinin hiçbirinin bedelsiz olduğu düşünülmemelidir; zira HER KAMU HİZMETİNİN BİR MALİYETİ vardır ve bireyler VERGİ veya diğer isimlerle bu maliyete katılır. Bu nedenle öğretide MECCANİLİĞİ GENEL İLKELER ARASINDA GÖRENLER OLDUĞU GİBİ GÖRMEYENLER DE BULUNMAKTADIR.",
  t: "Kamu Hizmeti İlkeleri", d: 3
},
{
  q: "Kamu hizmetine egemen olan ilkeler kimleri bağlar?",
  o: ["İdareyi ve hizmeti gören özel kişileri bağlar", "Yalnızca kamu idaresini bağlar", "Yalnızca özel kişileri bağlar", "Yalnızca merkezi idareyi bağlar", "Bağlayıcı değil, temenni niteliğindedir"],
  a: 0,
  e: "Bu ilkeler, KAMU HİZMETİNİ YERİNE GETİREN KAMU İDARESİ İÇİN BAĞLAYICI OLDUĞU GİBİ, BİR KAMU HİZMETİNİ İDARE ADINA YERİNE GETİREN ÖZEL KİŞİLERİ DE BAĞLAR.",
  t: "Kamu Hizmeti İlkeleri", d: 2
},
{
  q: "Yalnızca idare tarafından yürütülen ve özel kişilere kapalı olan kamu hizmetine ne ad verilir?",
  o: ["Tekelli kamu hizmeti", "Tekelsiz kamu hizmeti", "Mahalli kamu hizmeti", "İktisadi kamu hizmeti", "Sosyal kamu hizmeti"],
  a: 0,
  e: "SADECE İDARE TARAFINDAN YÜRÜTÜLEN VE ÖZEL KİŞİLERİN BU ALANLARDA BULUNMASININ YASAKLANDIĞI faaliyetlere 'TEKELLİ KAMU HİZMETİ' denir. Örneğin Türkiye'de SAVUNMA HİZMETİ devletin tekeli altında yürütülürken; EĞİTİM, SAĞLIK gibi hizmetler devletin yanında ÖZEL KİŞİLER tarafından da yürütülebilir.",
  t: "Kamu Hizmeti Türleri", d: 2
},
{
  q: "TCDD'nin yürüttüğü ulaşım hizmeti ile şehir içi toplu ulaşım hizmeti sırasıyla hangi türe girer?",
  o: ["Milli ve mahalli kamu hizmeti", "Mahalli ve milli kamu hizmeti", "İdari ve sosyal kamu hizmeti", "Tekelli ve tekelsiz hizmet", "İktisadi ve idari hizmet"],
  a: 0,
  e: "Bazı hizmetler ÜLKE ÇAPINDA yerine getirilirken (MİLLÎ KAMU HİZMETLERİ), bazıları DAHA KÜÇÜK ALANLARLA SINIRLI olarak yerine getirilir (MAHALLİ KAMU HİZMETLERİ). MİLLÎ kamu hizmetine TCDD'NİN YÜRÜTTÜĞÜ ULAŞIM HİZMETİ; MAHALLİ kamu hizmetine ŞEHİR İÇİ TOPLU ULAŞIM HİZMETİ örnektir.",
  t: "Kamu Hizmeti Türleri", d: 2
},
{
  q: "Adalet ve ulusal savunma hizmetleri hangi kamu hizmeti türüne girer ve kural olarak hangi hukuka tabidir?",
  o: ["İdari kamu hizmeti — kamu hukuku", "İktisadi kamu hizmeti — özel hukuk", "Sosyal kamu hizmeti — karma rejim", "Bilimsel kamu hizmeti — özel hukuk", "Mahalli kamu hizmeti — kamu hukuku"],
  a: 0,
  e: "İDARİ KAMU HİZMETLERİ, devletin geçmişten bugüne yürüttüğü ve konu itibariyle İKTİSADİ, SOSYAL, BİLİMSEL VE KÜLTÜREL OLMAYAN kamu hizmetleridir. KURAL OLARAK KAMU HUKUKU KURALLARINA TABİDİR; ANCAK İSTİSNAİ HALLERDE ÖZEL HUKUK KURALLARI DA UYGULANABİLİR. Örnekler: ADALET, ULUSAL SAVUNMA.",
  t: "Kamu Hizmeti Türleri", d: 3
},
{
  q: "Elektrik, doğal gaz ve şehir içi toplu ulaşım hangi kamu hizmeti türüne girer?",
  o: ["İktisadi kamu hizmeti", "İdari kamu hizmeti", "Sosyal kamu hizmeti", "Bilimsel kamu hizmeti", "Tekelli kamu hizmeti"],
  a: 0,
  e: "İKTİSADİ KAMU HİZMETLERİ (endüstriyel ve ticari kamu hizmetleri de denir): devletin iktisadi, sınai ve ticari alanlarda kamu yararı için etkinlikte bulunmasıyla oluşur; bu alanda ÖZEL SEKTÖR DE FAALİYETİNİ SÜRDÜRÜR. Devlet bu hizmetleri yürütürken KAMU HUKUKU VE ÖZEL HUKUK KURALLARI BİRLİKTE UYGULAMA ALANI BULUR. Örnekler: ELEKTRİK, DOĞAL GAZ, ŞEHİR İÇİ TOPLU ULAŞIM.",
  t: "Kamu Hizmeti Türleri", d: 3
},
{
  q: "Bilimsel, teknik ve kültürel kamu hizmetlerine örnek olarak aşağıdakilerden hangisi verilebilir?",
  o: ["TÜBİTAK ve Devlet Tiyatroları", "Adalet ve savunma hizmetleri", "Elektrik ve doğal gaz hizmetleri", "Sosyal güvenlik hizmetleri", "Şehir içi ulaşım hizmetleri"],
  a: 0,
  e: "BİLİMSEL, TEKNİK VE KÜLTÜREL KAMU HİZMETLERİ, devletin BİLİM, KÜLTÜR VE SANAT alanlarına ilişkin yürüttüğü hizmetlerdir. Bu hizmetler nitelikleri gereği ÖZERK KURULUŞLAR, BAĞIMSIZ PERSONELLER, SERBEST USULLER gibi daha geniş olanaklarla sunulur. Örnekler: TÜBİTAK ve DEVLET TİYATROLARI'nın yürüttüğü kamu hizmeti.",
  t: "Kamu Hizmeti Türleri", d: 2
},
{
  q: "Sosyal kamu hizmetleri esas itibarıyla hangi dönemde ortaya çıkmıştır?",
  o: ["İkinci Dünya Savaşı sonrasında", "Birinci Dünya Savaşı öncesinde", "On dokuzuncu yüzyıl başında", "İki binli yıllarda", "Sanayi Devrimi sırasında"],
  a: 0,
  e: "SOSYAL KAMU HİZMETLERİ esas itibariyle İKİNCİ DÜNYA SAVAŞI SONRASINDA, ÇALIŞMA DÜZENİ, SOSYAL GÜVENLİK VE KİŞİLERİN HAYATLARINA DAİR birtakım hizmetler şeklinde ortaya çıkmıştır; önceden de FAKİRLERE, ASKER AİLELERİNE YARDIM gibi faaliyetlerle karşımıza çıkmıştır.",
  t: "Kamu Hizmeti Türleri", d: 3
},
]);

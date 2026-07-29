/* İdare Hukuku — 7. bölüm (acele kamulaştırma, geçici işgal, devletleştirme,
   istimval, idarenin malları, kolluk, kamu hizmeti ilkeleri ve türleri) */
KPSS.registerBank('idare', [

/* ---------- ACELE KAMULAŞTIRMA ---------- */
{
  q: "Acele kamulaştırmaya hangi hallerde başvurulabilir?",
  o: ["Yurt savunması ihtiyacına veya aceleliğine Cumhurbaşkanınca karar alınacak hallerde veya özel kanunlarda öngörülen olağanüstü durumlarda", "İdarenin talebi yeterlidir", "Her türlü kamu hizmeti için", "Sadece savaş halinde", "Belediye meclisi kararıyla"],
  a: 0,
  e: "YURT SAVUNMASI İHTİYACINA VEYA ACELELİĞİNE CUMHURBAŞKANINCA KARAR ALINACAK HALLERDE veya ÖZEL KANUNLARDA ÖNGÖRÜLEN OLAĞANÜSTÜ DURUMLARDA acele kamulaştırma işlemine başvurulabilir.",
  t: "Acele Kamulaştırma", d: 3
},
{
  q: "Acele kamulaştırmada bilirkişilerce değer tespiti ne kadar süre içinde yapılır?",
  o: ["İlgili idarenin talebi ile yedi gün içinde", "On beş gün içinde", "Otuz gün içinde", "Üç gün içinde", "Süre öngörülmemiştir"],
  a: 0,
  e: "Acele kamulaştırmada KIYMET TAKDİRİ DIŞINDAKİ İŞLEMLER SONRADAN TAMAMLANMAK ÜZERE, ilgili idarenin talebi ile YEDİ GÜN İÇİNDE o taşınmazın MAHKEMECE SEÇİLECEK BİLİRKİŞİLERCE DEĞERİNİN TESPİT EDİLMESİYLE, İDARE ADINA TESCİLİ ve belirtilen bankaya kamulaştırma bedelinin yatırılmasıyla gerçekleştirilir.",
  t: "Acele Kamulaştırma", d: 3
},
{
  q: "Acele kamulaştırmada el koyma kararının sonuçları nelerdir?",
  o: ["Karar tapu müdürlüğüne bildirilir, devir-ferağ-temlik yapılamayacağı tapu kütüğüne şerh edilir ve el koyma kararından sonra taşınmaz boşaltılır", "Sadece tapuya şerh verilir", "Taşınmaz boşaltılamaz", "Karar tapuya bildirilmez", "Mülkiyet malikte kalır"],
  a: 0,
  e: "Mahkemece verilen TAŞINMAZ MALA EL KOYMA KARARI TAPU MÜDÜRLÜĞÜNE BİLDİRİLİR. Taşınmaz malın BAŞKASINA DEVİR, FERAĞ VEYA TEMLİKİNİN YAPILAMAYACAĞI hükmü TAPU KÜTÜĞÜNE ŞERH EDİLİR. EL KOYMA KARARINDAN SONRA TAŞINMAZ MAL BOŞALTILIR.",
  t: "Acele Kamulaştırma", d: 3
},

/* ---------- GEÇİCİ İŞGAL ---------- */
{
  q: "Geçici işgal nedir ve konusu nedir?",
  o: ["Bir bayındırlık hizmeti sırasında gereksinim duyulan taş, kum, kireç gibi iptidai maddeleri çıkarmak/hazırlamak ya da eşya koymak için özel mülkiyetteki taşınmaza geçici el atılmasıdır; konusu binasız taşınmazlardır (arsa ve araziler)", "Konut ve eklentileri de geçici işgale konu olabilir", "Ahşap da iptidai maddeler arasındadır", "Taşınırlara el atılmasıdır", "Kalıcı el atmadır"],
  a: 0,
  e: "GEÇİCİ İŞGAL: bir BAYINDIRLIK HİZMETİNİN görülmesi sırasında gereksinim duyulan TAŞ, KUM, KİREÇ VE BENZERİ İPTİDAİ MADDELERİ çıkarmak/hazırlamak (AHŞAP BU MADDELER ARASINDA YER ALMAZ) ya da bazı eşyaları koyabilmek için özel mülkiyetteki taşınmaza idarece GEÇİCİ OLARAK EL ATILMASIDIR. KONUSU ARSA VE ARAZİLERDİR; KONUT VEYA EKLENTİLER GEÇİCİ İŞGALE KONU OLAMAZ — konu unsurunu BİNASIZ TAŞINMAZLAR oluşturur.",
  t: "Geçici İşgal", d: 3
},
{
  q: "Geçici işgal işlemi hangi organ tarafından tesis edilir ve dava süresi nedir?",
  o: ["İl İdare Kurulu tarafından tesis edilir; iptal davasında özel süre yoktur, 60 günlük genel dava açma süresi uygulanır", "Vali tarafından; 30 günlük süre uygulanır", "İl encümeni tarafından; 60 gün", "Kaymakam tarafından; 30 gün", "İl genel meclisi tarafından; 15 gün"],
  a: 0,
  e: "GEÇİCİ İŞGAL İŞLEMİ İL İDARE KURULU TARAFINDAN TESİS EDİLİR. Geçici işgal işlemine karşı açılacak iptal davalarında, kamulaştırma işlemindeki gibi ÖZEL BİR SÜRE GETİRİLMEMİŞTİR — burada 60 GÜNLÜK GENEL DAVA AÇMA SÜRESİ uygulanır. Ancak malik TAKDİR EDİLEN BEDELİ DÜŞÜK BULUYORSA ADLİ YARGIYA BAŞVURABİLİR.",
  t: "Geçici İşgal", d: 3
},
{
  q: "Geçici işgal sonunda taşınmaz ne olur?",
  o: ["İnşaat bittikten sonra tamamıyla kaldırılıp, işgal edilen arazi eski halinde sahibine iade edilir", "İdare adına tescil edilir", "Kamulaştırılır", "Bedeli ödenerek idarede kalır", "Malik geri isteyemez"],
  a: 0,
  e: "Geçici işgalde yapılanlar İNŞAAT BİTTİKTEN SONRA TAMAMIYLA KALDIRILIP, İŞGAL EDİLEN ARAZİ ESKİ HALİNDE SAHİBİNE İADE EDİLİR.",
  t: "Geçici İşgal", d: 2
},

/* ---------- DEVLETLEŞTİRME ---------- */
{
  q: "Anayasanın 47. maddesine göre devletleştirme hangi hallerde yapılabilir?",
  o: ["Kamu hizmeti niteliği taşıyan özel teşebbüsler, kamu yararının zorunlu kıldığı hallerde devletleştirilebilir ve devletleştirme gerçek karşılığı üzerinden yapılır", "Her türlü özel teşebbüs devletleştirilebilir", "Bedelsiz olarak yapılabilir", "Sadece savaş halinde yapılabilir", "Cumhurbaşkanı kararıyla yapılır"],
  a: 0,
  e: "AY m. 47: 'KAMU HİZMETİ NİTELİĞİ TAŞIYAN ÖZEL TEŞEBBÜSLER, KAMU YARARININ ZORUNLU KILDIĞI HALLERDE DEVLETLEŞTİRİLEBİLİR. DEVLETLEŞTİRME GERÇEK KARŞILIĞI ÜZERİNDEN YAPILIR. Gerçek karşılığın hesaplanma tarzı usulleri kanunla düzenlenir.'",
  t: "Devletleştirme", d: 2
},
{
  q: "3082 sayılı Kanun'a göre devletleştirmenin şartları arasında aşağıdakilerden hangisi vardır?",
  o: ["Hizmet/üretimin ülke çapında kamu ihtiyacına hitap etmesi, bunun kontrol-rekabet-ikame veya başka yollardan sağlanamaması ve yavaşlatılması/durdurulması halinde kamunun büyük zarar görmesi", "Sadece kamu yararının bulunması", "Sadece teşebbüsün zarar etmesi", "Sadece Cumhurbaşkanının uygun görmesi", "Teşebbüsün yabancı sermayeli olması"],
  a: 0,
  e: "3082 sayılı Kanun'a göre devletleştirme için ŞU ŞARTLARIN BİRLİKTE gerçekleşmesi gerekir: a) Devletleştirilecek özel teşebbüsün yaptığı hizmet veya üretiminin ÜLKE ÇAPINDA KAMU İHTİYACINA HİTAP ETMESİ, b) Bu hizmet veya üretimin KONTROL, REKABET, İKAME VEYA BAŞKA YOLLARDAN SAĞLAMA İMKANININ BULUNMAMASI, c) Hizmet/üretimin YAVAŞLATILMASI VEYA DURDURULMASI halinde KAMUNUN BÜYÜK ZARAR GÖRMESİ.",
  t: "Devletleştirme", d: 3
},
{
  q: "Devletleştirme işlemi nasıl gerçekleştirilir ve bedeli nasıl ödenir?",
  o: ["Kanunla gerçekleştirilir; bedel nakden ve peşin olarak veya en fazla beş yıl içinde eşit taksitlerle ödenir ve taksitler için devlet borçları için öngörülen en yüksek faiz uygulanır", "Cumhurbaşkanlığı kararnamesiyle; bedelsiz", "Kanunla; sadece peşin ödenir", "Bakanlar Kurulu kararıyla", "Yönetmelikle"],
  a: 0,
  e: "DEVLETLEŞTİRME İŞLEMİ KANUNLA GERÇEKLEŞTİRİLİR. Devletleştirme bedeli, NAKDEN VE PEŞİN OLARAK VEYA EN FAZLA BEŞ YIL İÇİNDE EŞİT TAKSİTLERLE ödenmek suretiyle yapılır. Taksitler için DEVLET BORÇLARI İÇİN ÖNGÖRÜLEN EN YÜKSEK FAİZ uygulanır.",
  t: "Devletleştirme", d: 3
},

/* ---------- İSTİMVAL ---------- */
{
  q: "İstimval (rekizisyon) nedir?",
  o: ["Olağanüstü durumlarda karşılığı ödenmek suretiyle menkullere (taşınır mallara) idarece zorla el atılmasıdır; bedensel yükümlülük veya çalışma şeklinde de olabilir", "Taşınmazlara el atılmasıdır", "Kamu hizmeti niteliğindeki teşebbüslerin devletleştirilmesidir", "Geçici olarak araziye el atılmasıdır", "Kamulaştırmanın bir türüdür"],
  a: 0,
  e: "İSTİMVAL (REKİZİSYON), OLAĞANÜSTÜ DURUMLARDA, KARŞILIĞI ÖDENMEK SURETİYLE MENKULLERE (TAŞINIR MALLAR) İDARECE ZORLA EL ATILMASIDIR (ayrıca BEDENSEL YÜKÜMLÜLÜKLER ya da ÇALIŞMA şeklinde de istimval söz konusu olabilir). İstimval, taşınır malın SADECE KULLANIM HAKKININ belli bir süre idarede olması hallerini de ifade eder.",
  t: "İstimval", d: 3
},
{
  q: "İstimvale ilişkin uyuşmazlıklar ve bedel uyuşmazlıkları hangi yargı kolunda çözümlenir?",
  o: ["İstimvale ilişkin uyuşmazlıklar idari yargıda; istimvalden doğan bedel uyuşmazlıkları adli yargıda çözümlenir", "Her ikisi de idari yargıda", "Her ikisi de adli yargıda", "İstimval adli, bedel idari yargıda", "Tahkim yoluyla çözümlenir"],
  a: 0,
  e: "İSTİMVALE İLİŞKİN UYUŞMAZLIKLAR İDARİ YARGIDA; İSTİMVALDEN DOĞAN BEDEL UYUŞMAZLIKLARI İSE ADLİ YARGIDA çözümlenir. İstimval yetkisinin kullanılabilmesi için YASAL BİR DAYANAĞA GEREK VARDIR ve OLAĞANÜSTÜ DURUMLARDA başvurulabilir.",
  t: "İstimval", d: 3
},

/* ---------- İDARENİN MALLARI ---------- */
{
  q: "Bir malın kamu malı sayılabilmesi için hangi koşullar bir arada aranır?",
  o: ["Organik koşul (Devlet ya da diğer kamu tüzel kişilerine ait olması) ve maddi koşul (kamunun ortak kullanımına ya da bir kamu hizmetine özel bir düzenleme ile tahsis edilmiş olması)", "Sadece organik koşul", "Sadece maddi koşul", "Tapuya tescil edilmiş olması", "Vergiden muaf olması"],
  a: 0,
  e: "Kamu mallarının belirlenmesinde İKİ KOŞUL BİR ARADA aranır: a) ORGANİK KOŞUL: malın DEVLET YA DA DİĞER KAMU TÜZEL KİŞİLERİNE AİT olması. b) MADDİ KOŞUL: malın KAMUNUN ORTAK KULLANIMINA VE YARARLANMASINA ya da BİR KAMU HİZMETİNE ÖZEL BİR DÜZENLEME İLE TAHSİS EDİLMİŞ olması.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Tahsis (özgüleme) nedir?",
  o: ["İdarenin özel mülkiyetindeki bir malı orta malı ya da hizmet malına dönüştürmesi ya da bir kamusal malın bulunduğu kategoriden diğerine geçirilmesi işlemidir", "Malın satılmasıdır", "Malın kiraya verilmesidir", "Malın kamulaştırılmasıdır", "Malın haczedilmesidir"],
  a: 0,
  e: "TAHSİS (ÖZGÜLEME): İDARENİN ÖZEL MÜLKİYETİNDE BULUNAN BİR MALIN, ORTA MALI YA DA HİZMET MALINA DÖNÜŞTÜRMESİ ya da BİR KAMUSAL MALIN, BULUNDUĞU KATEGORİDEN DİĞER KATEGORİYE GEÇİRİLMESİ İŞLEMİDİR.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Kamu mallarının özellikleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Devir ve ferağ edilemez, zamanaşımıyla kazanılamaz, haczedilemez, kamulaştırılamaz, üzerinde ipotek kurulamaz ve tapuya tescil zorunluluğu yoktur", "Serbestçe satılabilir", "Üzerinde özel kişiler lehine sınırlı ayni hak kurulabilir", "Zamanaşımıyla kazanılabilir", "Vergiye tabidir"],
  a: 0,
  e: "KAMU MALLARININ ÖZELLİKLERİ: kamusal mal statüsü devam ettikçe DEVİR VE FERAĞ EDİLEMEZ, ZAMANAŞIMI YOLUYLA KAZANILAMAZ, VERGİ VE BENZERİ YÜKÜMLÜLÜKLERİN DIŞINDADIR, ÜZERİNDE ÖZEL KİŞİLER LEHİNE SINIRLI AYNİ HAKLAR KURULAMAZ, ÜZERİNDE İPOTEK KURULAMAZ, kural olarak KİRAYA VERİLEMEZ, HACZEDİLEMEZ, KAMULAŞTIRILAMAZ, TAPUYA TESCİL ZORUNLULUĞU YOKTUR.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Kamu malları kiraya verilebilir mi?",
  o: ["Kural olarak kiraya verilemez veya özel hukuk sözleşmelerine konu olamaz; ancak şahsi kullanım olanağı mümkündür, idare tek taraflı izni ile şahsi kullanıma izin verebilir", "Serbestçe kiraya verilebilir", "Hiçbir şekilde kullanıma açılamaz", "Sadece kira sözleşmesi ile kullanıma açılabilir", "Sadece kamulaştırma sonrası kiraya verilebilir"],
  a: 0,
  e: "KURAL OLARAK KAMU MALLARI KİRAYA VERİLEMEZ veya kira gibi özel hukuk sözleşmelerine konu olamaz. BUNUNLA BİRLİKTE ŞAHSİ KULLANIM OLANAĞI MÜMKÜNDÜR: İDARE KİRA İLE OLMASA BİLE TEK TARAFLI İZNİ İLE ŞAHSİ KULLANIMA İZİN VEREBİLİR.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Kamu malları tahsis amacına göre kaç kısma ayrılır?",
  o: ["Üç: sahipsiz mallar, orta malları ve hizmet malları", "İki: orta malları ve hizmet malları", "Dört", "İki: kamu malları ve özel mallar", "Beş"],
  a: 0,
  e: "Kamu malları tahsis amacına göre 'SAHİPSİZ MALLAR', 'ORTA MALLARI' ve 'HİZMET MALLARI' olmak üzere ÜÇ KISMA AYRILIR.",
  t: "İdarenin Malları", d: 2
},
{
  q: "Sahipsiz mallar arasında aşağıdakilerden hangisi vardır?",
  o: ["Tarıma elverişli olmayan yerler (kayalar, dağlar, akarsu yatakları), genel sular, kıyılar, ormanlar, doğal servet ve kaynaklar, tarih-kültür-tabiat varlıkları", "Yollar, köprüler, meydanlar", "Otlak, mera, yaylak", "Adliye sarayları ve hastaneler", "Üniversite binaları"],
  a: 0,
  e: "SAHİPSİZ MALLAR (nihai sahibi DEVLETTİR; kural olarak özel mülkiyete geçirilmeye elverişli olmayan mallardır): TARIMA ELVERİŞLİ OLMAYAN YERLER (kayalar, tepeler, dağlar, çukurlar, AKARSU YATAKLARI, bataklık, buzullarla kaplı alanlar, meşelik, çalılık, fundalık), GENEL SULAR (deniz, göl, akarsu, nehir), KIYILAR, ORMANLAR, DOĞAL SERVET VE KAYNAKLAR, TARİH-KÜLTÜR VE TABİAT VARLIKLARI.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Orta malları kaç kategoriye ayrılır ve örnekleri nelerdir?",
  o: ["İkiye: herkesin yararlanmasına özgülenen orta malları (yollar, köprüler, meydanlar, pazar yerleri) ve bir kısım halkın yararlandığı orta malları (otlak, mera, yaylak)", "Üçe ayrılır", "Ayrılmaz, tek kategoridir", "İkiye: sahipsiz ve tahsisli", "Dörde ayrılır"],
  a: 0,
  e: "ORTA MALLARI (doğaları gereği, gelenek gereğince ya da tahsis sonucu kamunun kullanımına sunulmuş ve HERKES TARAFINDAN KULLANILAN mallar) İKİ KATEGORİYE ayrılır: 1) HERKESİN YARARLANMASINA ÖZGÜLENEN ORTA MALLARI: YOLLAR, KÖPRÜLER, MEYDANLAR, PAZAR YERLERİ. 2) BİR KISIM HALKIN YARARLANDIĞI ORTA MALLARI: OTLAK, MERA, YAYLAK.",
  t: "İdarenin Malları", d: 3
},
{
  q: "Hizmet malları nasıl tanımlanır ve örnekleri nelerdir?",
  o: ["Kamu hizmetinin bir öğesi olacak şekilde bir hizmete tahsis edilen taşınır ve taşınmaz mallardır; adliye sarayları, üniversite binaları, hastaneler, demiryolları, cami", "Herkesin kullandığı yollar ve meydanlardır", "Otlak, mera ve yaylaklardır", "Ormanlar ve kıyılardır", "İdarenin gelir getiren mallarıdır"],
  a: 0,
  e: "HİZMET MALLARI: kamu hizmeti ile yakından ilgili olup KAMU HİZMETİNİN BİR ÖĞESİ OLACAK ŞEKİLDE BİR HİZMETE TAHSİS EDİLEN TAŞINIR VE TAŞINMAZ MALLARDIR. Bu mallar PARSEL DEĞERİYLE DEĞİL, KULLANMA DEĞERLERİYLE idarenin görevlerinin yerine getirilmesinde doğrudan hizmet ederler. Örnekler: ADLİYE SARAYLARI, ÜNİVERSİTE BİNALARI, HASTANELER, DEMİRYOLLARI, CAMİ.",
  t: "İdarenin Malları", d: 3
},
{
  q: "İdarenin özel mallarının ayırt edici özellikleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Kamu yararından çok gelir getirme amacı taşırlar, özel hukuka tabidirler ve uyuşmazlıkları adli yargıda çözülür", "Kamu hukukuna tabidirler", "Uyuşmazlıkları idari yargıda çözülür", "Hiçbir şekilde haczedilemezler", "Zamanaşımıyla kazanılamazlar"],
  a: 0,
  e: "İDARENİN ÖZEL MALLARI: özel mülkiyete elverişli olan ve idarece herhangi bir kamu hizmetine TAHSİS EDİLMEMİŞ, mülkiyeti idareye ait mallardır. Özellikleri: KAMU YARARINDAN ÇOK GELİR GETİRME AMACI taşırlar; ÖZEL HUKUKA TABİDİR ve uyuşmazlıklar ADLİ YARGININ görev alanına girer. İdare bu mallar üzerinde MALİKİN BÜTÜN YETKİLERİNE sahiptir; ancak SATIMI VEYA KİRAYA VERİLMESİ KANUNUN ÖNGÖRDÜĞÜ USULLERE göre yapılır.",
  t: "İdarenin Malları", d: 3
},
{
  q: "İdarenin özel mallarının haczi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Devlet tüzel kişisine (merkezi idareye) ait özel mallar haczedilemez; ancak Devlet dışındaki kamu tüzel kişilerinin (ör. belediyelerin) özel malları haczedilebilir", "Tüm özel mallar haczedilebilir", "Hiçbir özel mal haczedilemez", "Sadece belediyelerin malları haczedilemez", "Haciz için mahkeme kararı gerekmez"],
  a: 0,
  e: "DEVLET TÜZEL KİŞİSİNE (MERKEZİ İDAREYE) AİT ÖZEL MAL NİTELİĞİNDEKİ MALLAR HACZEDİLEMEZ. ANCAK DEVLET DIŞINDAKİ KAMU TÜZEL KİŞİLERİNİN, ÖRNEĞİN BELEDİYELERİN, ELLERİNDEKİ ÖZEL MALLARIN HACZEDİLEBİLECEĞİ KABUL EDİLMEKTEDİR.",
  t: "İdarenin Malları", d: 3
},

/* ---------- KOLLUK ---------- */
{
  q: "Kamu düzeninin unsurları hangileridir?",
  o: ["Güvenlik, dirlik (esenlik), genel sağlık ve genel ahlak", "Güvenlik ve genel sağlık", "Güvenlik, esenlik ve adalet", "Sadece güvenlik", "Güvenlik, sağlık, ahlak ve ekonomi"],
  a: 0,
  e: "KAMU DÜZENİNİN UNSURLARI: 1) GÜVENLİK (bireylerin can ve mal güvenliği), 2) DİRLİK/ESENLİK (toplumun huzur ve sükununun korunması; gürültü, kirlilik gibi düzensizliklerden korunma), 3) GENEL SAĞLIK (bulaşıcı hastalıklardan korunma), 4) GENEL AHLAK (toplum düzenini tehlikeye sokan ahlaki tutumların önlenmesi).",
  t: "Kolluk", d: 2
},
{
  q: "Genel ahlak bakımından bireylerin kişisel ahlak anlayışları kamu düzenini ilgilendirir mi?",
  o: ["İlgilendirmez; fakat bireylerin ahlaki anlayışlarının dışa yansıması toplumsal düzeni bozarsa kamu düzeni ile ilgili kabul edilir ve kolluk faaliyetine konu olur", "Her zaman ilgilendirir", "Hiçbir şekilde ilgilendirmez", "Sadece suç oluşturuyorsa ilgilendirir", "Kolluk hiçbir müdahalede bulunamaz"],
  a: 0,
  e: "BİREYLERİN KİŞİSEL AHLAK ANLAYIŞLARI KAMU DÜZENİNİ İLGİLENDİRMEZ. FAKAT BİREYLERİN AHLAKİ ANLAYIŞLARININ DIŞA YANSIMASI TOPLUMSAL DÜZENİ BOZARSA KAMU DÜZENİ İLE İLGİLİ KABUL EDİLİR VE KOLLUK FAALİYETİNE KONU OLUR.",
  t: "Kolluk", d: 3
},
{
  q: "Adli kolluk ile idari kolluk arasındaki temel fark nedir?",
  o: ["Adli kolluk kamu düzeni bozulduktan sonra ortaya çıkar ve bastırıcı fonksiyonu vardır; idari kolluk kamu düzeni bozulmadan önce faaliyette bulunur ve önleyici fonksiyonu vardır", "İkisi de önleyici fonksiyona sahiptir", "Adli kolluk önleyici, idari kolluk bastırıcıdır", "Aralarında fark yoktur", "İkisi de adli makamlardan emir alır"],
  a: 0,
  e: "ADLİ KOLLUK: KAMU DÜZENİ BOZULDUKTAN SONRA ortaya çıkar, suçun ve suçluların ortaya çıkarılmasına yöneliktir, BASTIRICI FONKSİYONU vardır, ADLİ MAKAMLARDAN EMİR ALIR, uyuşmazlıkları ADLİ YARGIYA tabidir. İDARİ KOLLUK: KAMU DÜZENİ BOZULMADAN ÖNCE faaliyette bulunur, ÖNLEYİCİ FONKSİYONU vardır, İDARİ MAKAMLARDAN EMİR ALIR, uyuşmazlıkları İDARİ YARGIYA tabidir.",
  t: "Kolluk", d: 2
},
{
  q: "Görev suçu işleyen adli ve idari kolluk görevlisi hakkında soruşturma bakımından fark nedir?",
  o: ["Adli kollukta Cumhuriyet savcısı doğrudan soruşturma başlatabilir; idari kollukta kural olarak başlatamaz, 4483 sayılı Kanun uyarınca yetkili amirin izni gerekir", "Her ikisinde de savcı doğrudan soruşturma başlatabilir", "Her ikisinde de izin gerekir", "Adli kollukta izin gerekir, idari kollukta gerekmez", "Hiçbirinde soruşturma açılamaz"],
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
  q: "Siyasi kolluk nedir ve kim tarafından yerine getirilir?",
  o: ["Devletin milli güvenliğin sağlanması adına giriştiği faaliyetlerdir ve Cumhurbaşkanlığına bağlı Milli İstihbarat Teşkilatı görevlilerince yerine getirilir", "Emniyet Genel Müdürlüğü tarafından yerine getirilir", "Jandarma tarafından yerine getirilir", "Siyasi partileri denetleyen kolluktur", "Valiler tarafından yürütülür"],
  a: 0,
  e: "SİYASİ KOLLUK, DEVLETİN MİLLİ GÜVENLİĞİN SAĞLANMASI ADINA GİRİŞTİĞİ FAALİYETLERDİR. Bu faaliyetler, CUMHURBAŞKANLIĞINA BAĞLI MİLLİ İSTİHBARAT TEŞKİLATI'NIN GÖREVLİLERİNCE yerine getirilir.",
  t: "Kolluk", d: 2
},
{
  q: "Genel idari kolluk ile özel idari kolluk arasındaki fark nedir?",
  o: ["Genel idari kolluk kamu düzeninin dört unsurunu da sağlamak için faaliyette bulunur; özel idari kolluk kanunda öngörülen belirli bir alanda faaliyet gösterir", "Genel kolluk belirli alanda, özel kolluk her alanda çalışır", "Aralarında fark yoktur", "Özel idari kolluk sadece belediyelerde bulunur", "Genel idari kolluk sadece güvenliği sağlar"],
  a: 0,
  e: "GENEL İDARİ KOLLUK: kamu düzeninin DÖRT UNSURUNU DA (güvenlik, dirlik, genel sağlık, genel ahlak) sağlamak için faaliyette bulunan kolluktur. ÖZEL İDARİ KOLLUK: KANUNDA ÖNGÖRÜLEN BELİRLİ BİR ALANDA faaliyet gösteren kolluktur (MAHALLİ İDARE KOLLUĞU ve HİZMET KOLLUĞU olarak ikiye ayrılır).",
  t: "Kolluk", d: 3
},
{
  q: "Genel idari kolluk amirleri ve personeli kimlerdir?",
  o: ["Amirleri: İçişleri Bakanı, vali, kaymakam; Personeli: polis, jandarma, sahil güvenlik, bekçi", "Amirleri: Cumhurbaşkanı ve bakanlar; Personeli: zabıta ve korucu", "Amirleri: vali ve belediye başkanı", "Personeli: sadece polis", "Amirleri: muhtar ve belediye başkanı"],
  a: 0,
  e: "GENEL İDARİ KOLLUK AMİRLERİ: İÇİŞLERİ BAKANI, VALİ, KAYMAKAM. PERSONELİ: POLİS, JANDARMA, SAHİL GÜVENLİK, BEKÇİ. MAKAMLARI (kolluk alanında düzenleyici ve/veya bireysel işlem yapanlar): CUMHURBAŞKANI (düzenleyici+bireysel), İÇİŞLERİ BAKANI (düzenleyici+bireysel), VALİ (düzenleyici+bireysel), KAYMAKAM (SADECE BİREYSEL).",
  t: "Kolluk", d: 3
},
{
  q: "Mahalli idare kolluğunun amirleri ve personeli kimlerdir?",
  o: ["Amirleri: il özel idaresinde vali, belediyede başkan, köyde muhtar; Personeli: zabıta ve korucu", "Amirleri: kaymakam ve vali; Personeli: polis", "Amirleri: belediye meclisi; Personeli: zabıta", "Personeli: jandarma ve polis", "Amirleri: İçişleri Bakanı"],
  a: 0,
  e: "MAHALLİ İDARE KOLLUĞU — AMİRLERİ: İL ÖZEL İDARESİNDE VALİ, BELEDİYEDE BAŞKAN, KÖYDE MUHTAR. PERSONELİ: ZABITA ve KORUCU. MAKAMLARI: il özel idaresinde İL GENEL MECLİSİ (düzenleyici+bireysel), İL ENCÜMENİ (düzenleyici+bireysel), VALİ (bireysel); belediyede BELEDİYE MECLİSİ ve ENCÜMENİ (düzenleyici+bireysel), BAŞKAN (bireysel); köyde İHTİYAR HEYETİ (düzenleyici), MUHTAR (bireysel).",
  t: "Kolluk", d: 3
},
{
  q: "Hizmet kolluğuna örnek olarak aşağıdakilerden hangisi verilebilir?",
  o: ["Orman, maliye, tekel, kara yolları trafik kolluğu, hava yolları kolluğu, gümrük, tarım, turizm, çevre kolluğu", "Zabıta ve korucu", "Polis ve jandarma", "Bekçi ve sahil güvenlik", "MİT görevlileri"],
  a: 0,
  e: "HİZMET KOLLUĞU: ORMAN, MALİYE, TEKEL, KARA YOLLARI TRAFİK KOLLUĞU, HAVA YOLLARI KOLLUĞU, GÜMRÜK, TARIM, TURİZM, ÇEVRE gibi alanlarda faaliyette bulunan kolluk türüdür. ÖZEL İDARİ KOLLUĞUN bir alt türüdür.",
  t: "Kolluk", d: 3
},

/* ---------- KOLLUK USULLERİ ---------- */
{
  q: "Serbestlik usulü nedir?",
  o: ["Kişilerin faaliyette bulunurken izin veya bildirim şartına bağlanmaksızın ya da yasaklama ile karşılaşmaksızın hareket edebilmesidir", "Faaliyet öncesi izin alınmasıdır", "Faaliyetten önce idareye haber verilmesidir", "Faaliyetin yasaklanmasıdır", "Kolluğun serbestçe müdahale etmesidir"],
  a: 0,
  e: "SERBESTLİK USULÜ: kişilerin faaliyette bulunurken HERHANGİ BİR İZİN VEYA BİLDİRİM ŞARTINA BAĞLANMAKSIZIN ya da BİR YASAKLAMA İLE KARŞILAŞMAKSIZIN hareket edebilmesidir. Demokratik toplum düzeninde ASIL OLAN SERBESTLİKTİR. Örnek: Türkiye'de KİTAP YAYINI yapmak için izin/bildirim gerekmez; ancak kitapta hakaret/suç varsa sorumluluğu YAZAR VE YAYINCI üstlenir.",
  t: "Kolluk Usulleri", d: 2
},
{
  q: "İzin usulü (önleyici sistem) nedir?",
  o: ["Kişilerin bazı faaliyetlerinin kolluk tarafından faaliyet icra edilmeden önce denetlenebilmesi ve gerektiğinde engellenebilmesi için düzenlenmiş usuldür", "İdarenin faaliyetlerden haberdar edilmesidir", "Faaliyetin yasaklanmasıdır", "Faaliyet sonrası denetimdir", "Serbestlik esasıdır"],
  a: 0,
  e: "İZİN USULÜ: kişilerin bazı faaliyetlerinin kolluk tarafından 'FAALİYET İCRA EDİLMEDEN ÖNCE' DENETLENEBİLMESİ VE GEREKTİĞİNDE ENGELLENEBİLMESİ için düzenlenmiş bir usuldür; 'ÖNLEYİCİ SİSTEM' de denir. Kamu düzeni için tehlikeli olabilecek faaliyetler için ÖNCEDEN KOLLUK MAKAMLARINDAN İZİN alınması gerekir.",
  t: "Kolluk Usulleri", d: 2
},
{
  q: "PVSK m. 7/3'e göre umuma açık istirahat ve eğlence yerlerinin ruhsatı kim tarafından verilir ve süreler nedir?",
  o: ["Kolluk kuvvetinin görüşü alındıktan sonra belediye ve mücavir alan sınırları içinde belediyeler, dışında il özel idareleri verir; kolluk görüşünü 7 gün içinde verir, ruhsat talepleri 1 ay içinde sonuçlandırılır", "Sadece kolluk verir; süre 15 gündür", "Vali verir; süre 30 gündür", "Kaymakam verir; süre 7 gündür", "İl idare kurulu verir"],
  a: 0,
  e: "PVSK m. 7/3: Umuma açık istirahat ve eğlence yerlerinin ruhsatı BAĞLI OLDUĞU KOLLUK KUVVETİNİN GÖRÜŞÜ ALINDIKTAN SONRA belediye ve mücavir alan sınırları içinde BELEDİYELER; bu alanların dışında İL ÖZEL İDARELERİ tarafından verilir. KOLLUK KUVVETİ GÖRÜŞÜNÜ YEDİ GÜN İÇİNDE VERİR. RUHSAT TALEPLERİ BİR AY İÇİNDE SONUÇLANDIRILIR. İZİN ALINMADAN AÇILAN yerler KAPATILIR.",
  t: "Kolluk Usulleri", d: 3
},
{
  q: "Bildirim usulünde amaç nedir?",
  o: ["Bireyin veya topluluğun faaliyetlerinin önceden denetlenmesi ve engellenmesi değil, idarenin yapılacak etkinliklerden önceden haberdar edilmesi ve gerekli önlemleri almasıdır", "Faaliyetin önceden engellenmesidir", "Faaliyetin yasaklanmasıdır", "Faaliyete izin verilmesidir", "Faaliyetin sonradan denetlenmesidir"],
  a: 0,
  e: "BİLDİRİM USULÜNDE AMAÇ, BİREYİN VEYA TOPLULUĞUN FAALİYETLERİNİN ÖNCEDEN DENETLENMESİ VE ENGELLENMESİ DEĞİL, İDARENİN YAPILACAK ETKİNLİKLERDEN ÖNCEDEN HABERDAR EDİLMESİ VE GEREKLİ ÖNLEMLERİ ALMASIDIR. Ancak bildirime tabi bir etkinlik sonradan kamu düzenini bozar hale gelirse KOLLUĞUN MÜDAHALE YETKİSİ HER AN VE HER DURUM İÇİN VARDIR.",
  t: "Kolluk Usulleri", d: 3
},
{
  q: "2911 sayılı Toplantı ve Gösteri Yürüyüşleri Kanunu'na göre toplantı yapılabilmesi için ne kadar önce bildirimde bulunulur?",
  o: ["En az kırk sekiz saat önce ilgili yerin mülki idare amirliğine", "En az yirmi dört saat önce", "En az yedi gün önce", "En az bir hafta önce valiliğe", "Bildirim gerekmez"],
  a: 0,
  e: "2911 sayılı Toplantı ve Gösteri Yürüyüşleri Kanunu'nun 10. maddesine göre toplantı yapılabilmesi için EN AZ KIRK SEKİZ SAAT ÖNCE İLGİLİ YERİN MÜLKİ İDARE AMİRLİĞİNE BİLDİRİMDE BULUNULMASI gerekir. Bu BİLDİRİM USULÜNE örnektir.",
  t: "Kolluk Usulleri", d: 3
},

/* ---------- KAMU HİZMETİ ---------- */
{
  q: "Kamu hizmetlerinin kurulmasında ve kaldırılmasında yetki kimdedir?",
  o: ["Siyasi organlardadır (TBMM ve Cumhurbaşkanı)", "İdari makamlardadır", "Yargı organlarındadır", "Belediye meclislerindedir", "Bakanlıklardadır"],
  a: 0,
  e: "KAMU HİZMETLERİNİN KURULMASINDA VE KALDIRILMASINDA YETKİ SİYASİ ORGANLARDADIR (TBMM VE CUMHURBAŞKANI).",
  t: "Kamu Hizmeti", d: 2
},
{
  q: "Kamu hizmetlerinin mutlaka idare tarafından yürütülmesi gerekir mi?",
  o: ["Gerekmez; devletin ya da diğer kamu tüzel kişilerinin yakın gözetim ve denetimi altında olmak şartıyla özel kişiler de kamu hizmeti yapabilir", "Mutlaka idare tarafından yürütülmelidir", "Sadece KİT'ler yürütebilir", "Özel kişiler hiçbir şekilde yürütemez", "Sadece imtiyaz yoluyla yürütülebilir"],
  a: 0,
  e: "KAMU HİZMETİNİN TEKEL KONUSU OLMASI ŞART DEĞİLDİR. Kamu hizmetlerinin MUTLAKA İDARE TARAFINDAN yapılması GEREKMEZ: DEVLETİN YA DA DİĞER KAMU TÜZEL KİŞİLERİNİN YAKIN GÖZETİM VE DENETİMİ ALTINDA OLMAK ŞARTIYLA ÖZEL KİŞİLER DE KAMU HİZMETİ YAPABİLİR. Ayrıca kamu hizmetlerinin KAMU HUKUKU KURALLARINA GÖRE YÜRÜTÜLMESİ DE ŞART DEĞİLDİR (yap-işlet, yap-işlet-devret gibi).",
  t: "Kamu Hizmeti", d: 2
},
{
  q: "Kamu hizmetlerinde süreklilik (devamlılık) ilkesi hangi kuralların varlık nedenidir?",
  o: ["İstifa eden memurun yerine yeni memur gelene kadar bir ay beklemesi kuralı, kamu personeli için grev yasağı, kamu mallarının haczedilmezliği ve imtiyaz sözleşmelerinde imprevizyon ilkesi", "İdarenin takdir yetkisi ve tek yanlı değişiklik yapma yetkisi", "Eşitlik ve tarafsızlık", "Bedelsizlik ilkesi", "Düzenlilik ilkesi"],
  a: 0,
  e: "SÜREKLİLİK (KESİNTİSİZLİK) İLKESİ şu kural ve ilkelerin varlık nedenidir: DEVLET MEMURLUĞUNDAN İSTİFA EDEN MEMURUN yerine BİR AY İÇİNDE yeni memur veya vekil gelene kadar BEKLEMESİNİ öngören kural; KAMU PERSONELİ İÇİN GREV YASAĞI; KAMU MALLARININ HACZEDİLMEZLİĞİ ve DEVİR-FERAĞ YASAĞI; imtiyaz sözleşmelerinde geçerli olan İMPREVİZYON (ÖNGÖRÜLMEZLİK) İLKESİ.",
  t: "Kamu Hizmeti İlkeleri", d: 3
},
{
  q: "Değişkenlik (uyarlama) ilkesi hangi yetkilerin varlık nedenidir?",
  o: ["İdarenin takdir yetkisi ve kamu hizmeti imtiyaz sözleşmelerinde idareye tanınan tek yanlı değişiklik yapma yetkisi", "Grev yasağı ve haczedilmezlik", "Eşitlik ve tarafsızlık", "Bedelsizlik", "Süreklilik"],
  a: 0,
  e: "DEĞİŞKENLİK (UYARLAMA) İLKESİ kamu hizmetlerinin DEĞİŞEN İMKAN VE İHTİYAÇLARA UYARLANMASINI ifade eder (e-devlet uygulaması örnektir). Bu ilke şunların varlık nedenidir: İDARENİN TAKDİR YETKİSİ ve KAMU HİZMETİ İMTİYAZ SÖZLEŞMELERİNDE İDAREYE TANINAN TEK YANLI DEĞİŞİKLİK YAPMA YETKİSİ.",
  t: "Kamu Hizmeti İlkeleri", d: 3
},
{
  q: "Kamu hizmetlerinde düzenlilik ilkesi neyi ifade eder?",
  o: ["Hizmetin işleyişi ile ilgilidir; kamu hizmetleri önceden belirlenmiş koşullara ve standartlara uygun olarak yürütülmelidir", "Hizmetin kesintisiz sunulmasıdır", "Hizmetin bedelsiz sunulmasıdır", "Hizmetin eşit sunulmasıdır", "Hizmetin değişen ihtiyaçlara uyarlanmasıdır"],
  a: 0,
  e: "DÜZENLİLİK İLKESİ HİZMETİN İŞLEYİŞİ ile ilgilidir: kamu hizmetleri ÖNCEDEN BELİRLENMİŞ KOŞULLARA UYGUN olarak yürütülmelidir. Örnekler: YOLLARDA ÇUKUR OLMAMASI, belediye otobüslerinin DÜZENLİ ARALIKLARLA gelmesi, SUYUN BASINCININ yeterli olması, ELEKTRİK VOLTAJININ gerekli şekilde verilmesi.",
  t: "Kamu Hizmeti İlkeleri", d: 3
},
{
  q: "Kamu hizmetlerinde eşitlik ilkesi hangi kavramlarla da ifade edilir?",
  o: ["Nesnellik, tarafsızlık ya da ayrımcılık yasağı", "Süreklilik ve düzenlilik", "Bedelsizlik ve meccanilik", "Değişkenlik ve uyarlama", "Kamu yararı"],
  a: 0,
  e: "EŞİTLİK İLKESİ: idare kamu hizmetini kullanıcılara AYRIM YAPILMAKSIZIN EŞİT BİÇİMDE sunmalıdır. Eşitlik ilkesi 'NESNELLİK', 'TARAFSIZLIK' ya da 'AYRIMCILIK YASAĞI' olarak da ifade edilebilir.",
  t: "Kamu Hizmeti İlkeleri", d: 2
},
{
  q: "Bedelsizlik (meccanilik) ilkesi bakımından öğretide nasıl bir tartışma vardır?",
  o: ["Her kamu hizmetinin bir maliyeti bulunduğu ve bireylerin vergilerle bu maliyete katıldığı için meccaniliği genel ilkeler arasında görenler olduğu gibi görmeyenler de bulunmaktadır", "Tüm kamu hizmetleri bedelsizdir", "Meccanilik tartışmasız bir genel ilkedir", "Hiçbir yazar meccaniliği ilke saymaz", "Meccanilik Anayasada düzenlenmiştir"],
  a: 0,
  e: "BEDELSİZLİK (MECCANİLİK) İLKESİ kamu hizmetinden yararlanmanın BİR BEDEL ÖDEME ŞARTINA BAĞLI TUTULMAMASINI ifade eder. Aslında kamu hizmetlerinin hiçbirinin bedelsiz olduğu düşünülmemelidir; zira HER KAMU HİZMETİNİN BİR MALİYETİ vardır ve bireyler VERGİ veya diğer isimlerle bu maliyete katılır. Bu nedenle öğretide MECCANİLİĞİ GENEL İLKELER ARASINDA GÖRENLER OLDUĞU GİBİ GÖRMEYENLER DE BULUNMAKTADIR.",
  t: "Kamu Hizmeti İlkeleri", d: 3
},
{
  q: "Kamu hizmetine egemen olan ilkeler kimleri bağlar?",
  o: ["Kamu hizmetini yerine getiren kamu idaresini bağladığı gibi, bir kamu hizmetini idare adına yerine getiren özel kişileri de bağlar", "Sadece kamu idaresini bağlar", "Sadece özel kişileri bağlar", "Hiç kimseyi bağlamaz, temenni niteliğindedir", "Sadece merkezi idareyi bağlar"],
  a: 0,
  e: "Bu ilkeler, KAMU HİZMETİNİ YERİNE GETİREN KAMU İDARESİ İÇİN BAĞLAYICI OLDUĞU GİBİ, BİR KAMU HİZMETİNİ İDARE ADINA YERİNE GETİREN ÖZEL KİŞİLERİ DE BAĞLAR.",
  t: "Kamu Hizmeti İlkeleri", d: 2
},
{
  q: "Tekelli kamu hizmeti nedir?",
  o: ["Sadece idare tarafından yürütülen ve özel kişilerin bu alanlarda bulunmasının yasaklandığı faaliyetlerdir; örneğin savunma hizmeti", "Özel kişilerce de yürütülebilen hizmetlerdir", "Bedelsiz hizmetlerdir", "Mahalli hizmetlerdir", "Sosyal hizmetlerdir"],
  a: 0,
  e: "SADECE İDARE TARAFINDAN YÜRÜTÜLEN VE ÖZEL KİŞİLERİN BU ALANLARDA BULUNMASININ YASAKLANDIĞI faaliyetlere 'TEKELLİ KAMU HİZMETİ' denir. Örneğin Türkiye'de SAVUNMA HİZMETİ devletin tekeli altında yürütülürken; EĞİTİM, SAĞLIK gibi hizmetler devletin yanında ÖZEL KİŞİLER tarafından da yürütülebilir.",
  t: "Kamu Hizmeti Türleri", d: 2
},
{
  q: "Milli ve mahalli kamu hizmetlerine örnek olarak aşağıdakilerden hangisi verilebilir?",
  o: ["Milli: TCDD'nin yürüttüğü ulaşım hizmeti; Mahalli: şehir içi toplu ulaşım hizmeti", "Milli: şehir içi ulaşım; Mahalli: TCDD", "Milli: eğitim; Mahalli: savunma", "İkisi de aynı hizmetlerdir", "Milli: belediye hizmetleri"],
  a: 0,
  e: "Bazı hizmetler ÜLKE ÇAPINDA yerine getirilirken (MİLLÎ KAMU HİZMETLERİ), bazıları DAHA KÜÇÜK ALANLARLA SINIRLI olarak yerine getirilir (MAHALLİ KAMU HİZMETLERİ). MİLLÎ kamu hizmetine TCDD'NİN YÜRÜTTÜĞÜ ULAŞIM HİZMETİ; MAHALLİ kamu hizmetine ŞEHİR İÇİ TOPLU ULAŞIM HİZMETİ örnektir.",
  t: "Kamu Hizmeti Türleri", d: 2
},
{
  q: "İdari kamu hizmetleri nasıl tanımlanır ve hangi hukuka tabidir?",
  o: ["Devletin geçmişten bugüne yürüttüğü, konu itibariyle iktisadi-sosyal-bilimsel-kültürel olmayan hizmetlerdir; kural olarak kamu hukukuna tabidir ancak istisnai hallerde özel hukuk kuralları da uygulanabilir", "Ticari nitelikli hizmetlerdir", "Tamamen özel hukuka tabidir", "Sadece sosyal güvenlik hizmetleridir", "Sadece bilimsel hizmetlerdir"],
  a: 0,
  e: "İDARİ KAMU HİZMETLERİ, devletin geçmişten bugüne yürüttüğü ve konu itibariyle İKTİSADİ, SOSYAL, BİLİMSEL VE KÜLTÜREL OLMAYAN kamu hizmetleridir. KURAL OLARAK KAMU HUKUKU KURALLARINA TABİDİR; ANCAK İSTİSNAİ HALLERDE ÖZEL HUKUK KURALLARI DA UYGULANABİLİR. Örnekler: ADALET, ULUSAL SAVUNMA.",
  t: "Kamu Hizmeti Türleri", d: 3
},
{
  q: "İktisadi kamu hizmetlerinde hangi hukuk kuralları uygulanır ve örnekleri nelerdir?",
  o: ["Kamu hukuku ve özel hukuk kuralları birlikte uygulama alanı bulur; elektrik, doğal gaz, şehir içi toplu ulaşım", "Sadece kamu hukuku; adalet ve savunma", "Sadece özel hukuk; bankacılık", "Sadece idare hukuku", "Ticaret hukuku; TÜBİTAK"],
  a: 0,
  e: "İKTİSADİ KAMU HİZMETLERİ (endüstriyel ve ticari kamu hizmetleri de denir): devletin iktisadi, sınai ve ticari alanlarda kamu yararı için etkinlikte bulunmasıyla oluşur; bu alanda ÖZEL SEKTÖR DE FAALİYETİNİ SÜRDÜRÜR. Devlet bu hizmetleri yürütürken KAMU HUKUKU VE ÖZEL HUKUK KURALLARI BİRLİKTE UYGULAMA ALANI BULUR. Örnekler: ELEKTRİK, DOĞAL GAZ, ŞEHİR İÇİ TOPLU ULAŞIM.",
  t: "Kamu Hizmeti Türleri", d: 3
},
{
  q: "Bilimsel, teknik ve kültürel kamu hizmetlerine örnek olarak aşağıdakilerden hangisi verilebilir?",
  o: ["TÜBİTAK ve Devlet Tiyatroları'nın yürüttüğü kamu hizmeti", "Adalet ve savunma hizmetleri", "Elektrik ve doğal gaz hizmetleri", "Sosyal güvenlik hizmetleri", "Şehir içi ulaşım hizmeti"],
  a: 0,
  e: "BİLİMSEL, TEKNİK VE KÜLTÜREL KAMU HİZMETLERİ, devletin BİLİM, KÜLTÜR VE SANAT alanlarına ilişkin yürüttüğü hizmetlerdir. Bu hizmetler nitelikleri gereği ÖZERK KURULUŞLAR, BAĞIMSIZ PERSONELLER, SERBEST USULLER gibi daha geniş olanaklarla sunulur. Örnekler: TÜBİTAK ve DEVLET TİYATROLARI'nın yürüttüğü kamu hizmeti.",
  t: "Kamu Hizmeti Türleri", d: 2
},
{
  q: "Sosyal kamu hizmetleri esas itibariyle hangi dönemde ortaya çıkmıştır?",
  o: ["Esas itibariyle İkinci Dünya Savaşı sonrasında; çalışma düzeni, sosyal güvenlik ve kişilerin hayatlarına dair hizmetler şeklinde", "Birinci Dünya Savaşı öncesinde", "19. yüzyılda", "2000'li yıllarda", "Sanayi Devrimi ile"],
  a: 0,
  e: "SOSYAL KAMU HİZMETLERİ esas itibariyle İKİNCİ DÜNYA SAVAŞI SONRASINDA, ÇALIŞMA DÜZENİ, SOSYAL GÜVENLİK VE KİŞİLERİN HAYATLARINA DAİR birtakım hizmetler şeklinde ortaya çıkmıştır; önceden de FAKİRLERE, ASKER AİLELERİNE YARDIM gibi faaliyetlerle karşımıza çıkmıştır.",
  t: "Kamu Hizmeti Türleri", d: 3
}

]);

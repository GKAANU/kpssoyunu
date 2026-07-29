/* İdare Hukuku — 4. bölüm (il özel idaresi devamı, belediye idaresi:
   kuruluş, görevler, organlar, denetim, bütçe, kararların kesinleşmesi) */
KPSS.registerBank('idare', [
{
  q: "İl genel meclisi bilgi edinme ve denetim yetkisini hangi yollarla kullanır?",
  o: ["Soru, genel görüşme ve faaliyet raporu", "Meclis araştırması ve soruşturması", "Gensoru ve güvenoyu mekanizması", "Meclis soruşturması ve gensoru", "Yazılı soru ve meclis araştırması"],
  a: 0,
  e: "İl genel meclisi SORU, GENEL GÖRÜŞME ve FAALİYET RAPORUNU DEĞERLENDİRME yollarıyla bilgi edinme ve denetim yetkisini kullanır. Dikkat: GENSORU ve DENETİM KOMİSYONU BELEDİYE MECLİSİNE özgüdür, il genel meclisinde bulunmaz.",
  t: "İl Genel Meclisi", d: 3
},
{
  q: "İl genel meclisinde genel görüşme açılmasını kaç üye isteyebilir?",
  o: ["Üyelerin en az üçte biri", "Üyelerin salt çoğunluğu", "Üyelerin en az dörtte biri", "Tek bir üye", "Üyelerin dörtte üçü"],
  a: 0,
  e: "İL GENEL MECLİSİ ÜYELERİNİN EN AZ ÜÇTE BİRİ, meclis başkanlığına istekte bulunarak il özel idaresinin işleriyle ilgili bir konuda mecliste GENEL GÖRÜŞME AÇILMASINI isteyebilir. Bu istek MECLİS TARAFINDAN KABUL EDİLDİĞİ TAKDİRDE gündeme alınır.",
  t: "İl Genel Meclisi", d: 3
},
{
  q: "Vali faaliyet raporunu ne zaman meclise sunar ve rapor yeterli görülmezse ne olur?",
  o: ["Mart ayında sunar; 3/4 ile yeterli görülmezse Bakanlığa", "Mart ayında sunar; yeterli görülmezse vali düşer", "Ocak ayında sunar; tutanak Danıştay'a gönderilir", "Eylül ayında sunar; yeterli görülmezse vali düşer", "Kasım ayında sunar; tutanak Bakanlığa gönderilir"],
  a: 0,
  e: "Vali, MART AYI TOPLANTISINDA bir önceki yıla ait FAALİYET RAPORUNU meclise sunar. Faaliyet raporundaki açıklamalar MECLİS ÜYE TAM SAYISININ DÖRTTE ÜÇ ÇOĞUNLUĞUYLA YETERLİ GÖRÜLMEZSE, yetersizlik kararıyla görüşmeleri kapsayan tutanak, meclis başkanı tarafından gereği yapılmak üzere İÇİŞLERİ BAKANLIĞINA GÖNDERİLİR.",
  t: "İl Genel Meclisi", d: 3
},
{
  q: "İl genel meclisi çalışamaz hale gelirse görevini kim yürütür?",
  o: ["Encümenin memur üyeleri", "İlin valisi tek başına", "İçişleri Bakanlığı merkez teşkilatı", "İl idare kurulunun üyeleri", "Danıştay'ın görevlendireceği kişi"],
  a: 0,
  e: "İl genel meclisinin DANIŞTAY TARAFINDAN FESHİ veya toplantılarının ERTELENMESİ, yedek üyelerin getirilmesinden sonra da ÜYE TAM SAYISININ YARISINDAN AŞAĞI DÜŞMESİ, GEÇİCİ OLARAK GÖREVDEN UZAKLAŞTIRILMASI, ÜYE TAMSAYISININ YARIDAN FAZLASININ TUTUKLANMASI durumlarında; meclis çalışabilir duruma gelinceye veya yeni seçim yapılıncaya kadar görev ENCÜMENİN MEMUR ÜYELERİ tarafından yürütülür.",
  t: "İl Genel Meclisi", d: 3
},
{
  q: "İl özel idaresinde şartlı ve şartsız bağışları kabul etme yetkisi kimdedir?",
  o: ["Şartlı bağışları il genel meclisi, şartsız bağışları vali kabul eder", "Her ikisini de vali kabul eder", "Her ikisini de il genel meclisi kabul eder", "Her ikisini de il encümeni kabul eder", "Şartsız bağışları il genel meclisi, şartlı bağışları vali kabul eder"],
  a: 0,
  e: "İL GENEL MECLİSİ ŞARTLI BAĞIŞLARI kabul eder; VALİ ise ŞARTSIZ BAĞIŞLARI kabul eder. (Aynı ayrım BELEDİYEDE de geçerlidir: belediye meclisi şartlı, başkan şartsız bağışları kabul eder.)",
  t: "İl Özel İdaresi", d: 3
},
{
  q: "İl özel idaresinde taşınmaz malların kiralanması bakımından yetki nasıl paylaşılmıştır?",
  o: ["3 yıldan fazlasına meclis, 3 yıla kadarına encümen", "5 yıldan fazlasına meclis, 5 yıla kadarına encümen", "Her türlü kiralamaya il encümeni karar verir", "Her türlü kiralamaya ilin valisi karar verir", "Kiralama yetkisi yalnızca il genel meclisine aittir"],
  a: 0,
  e: "İL GENEL MECLİSİ taşınmaz malın 3 YILDAN FAZLA KİRALANMASINA ve SÜRESİ 25 YILI GEÇMEMEK ÜZERE üzerinde SINIRLI AYNİ HAK tesis etmeye karar verir. İL ENCÜMENİ ise SÜRESİ 3 YILI GEÇMEMEK ÜZERE kiralanmasına karar verir.",
  t: "İl Özel İdaresi", d: 3
},
{
  q: "İl encümeni vergi, resim ve harçlar dışında kalan ihtilafların sulhen halline hangi miktara kadar karar verebilir?",
  o: ["Beş bin Türk Lirasına kadar", "On bin Türk Lirasına kadar", "Elli bin Türk Lirasına kadar", "Yüz bin Türk Lirasına kadar", "Miktar sınırı bulunmamaktadır"],
  a: 0,
  e: "İL ENCÜMENİ, VERGİ, RESİM VE HARÇLAR DIŞINDA KALAN ve miktarı BEŞ BİN TÜRK LİRASINA KADAR OLAN İHTİLAFLARIN SULHEN HALLİNE karar verir. Miktarı 5 BİN TL'DEN FAZLA olan uyuşmazlıkları sulh ile tasfiyeye, kabul ve feragate ise MECLİS karar verir.",
  t: "İl Encümeni", d: 3
},
{
  q: "Bütçede aktarma yapma yetkisi il özel idaresinde nasıl paylaşılmıştır?",
  o: ["Birinci düzeyde meclis, ikinci düzeyde encümen", "Birinci düzeyde encümen, ikinci düzeyde meclis", "Bütün aktarmaları il genel meclisi yapar", "Bütün aktarmaları il encümeni yapar", "Bütçede hiçbir aktarma yapılamaz"],
  a: 0,
  e: "İL GENEL MECLİSİ: bütçede KURUMSAL KODLAMA YAPILAN BİRİMLER ile FONKSİYONEL SINIFLANDIRMANIN BİRİNCİ DÜZEYLERİ arasında aktarma yapar. İL ENCÜMENİ: bütçede FONKSİYONEL SINIFLANDIRMANIN İKİNCİ DÜZEYLERİ arasında aktarma yapar.",
  t: "İl Özel İdaresi", d: 3
},
{
  q: "İl özel idaresinde 'öngörülmeyen giderler ödeneğinin harcama yerlerini belirlemek' hangi organın görevidir?",
  o: ["İl encümeni", "İl genel meclisi", "Vali", "Genel sekreter", "İçişleri Bakanlığı"],
  a: 0,
  e: "ÖNGÖRÜLMEYEN GİDERLER ÖDENEĞİNİN HARCAMA YERLERİNİ BELİRLEMEK İL ENCÜMENİNİN görevidir. Encümen ayrıca KANUNLARDA ÖNGÖRÜLEN CEZALARI VERİR, YILLIK ÇALIŞMA PROGRAMINA ALINAN İŞLERLE İLGİLİ KAMULAŞTIRMA KARARLARINI ALIR ve UYGULAR, BELEDİYE SINIRLARI DIŞINDAKİ UMUMA AÇIK YERLERİN AÇILIŞ-KAPANIŞ SAATLERİNİ BELİRLER.",
  t: "İl Encümeni", d: 3
},
{
  q: "İl genel meclisi kararları kaç gün içinde valiye gönderilir ve vali hukuka aykırı bulursa ne yapar?",
  o: ["5 gün içinde gönderilir; vali 7 gün içinde iade eder", "7 gün içinde gönderilir; vali 5 gün içinde iade eder", "10 gün içinde gönderilir; vali 7 gün içinde iade eder", "Karar valiye gönderilmeksizin doğrudan yürürlüğe girer", "Vali kararı doğrudan iptal etme yetkisine sahiptir"],
  a: 0,
  e: "İl genel meclisinde ALINAN KARAR 5 GÜN İÇİNDE VALİYE GÖNDERİLİR. VALİ, KARARI HUKUKA AYKIRI BULURSA 7 GÜN İÇİNDE YENİDEN GÖRÜŞÜLMESİ İÇİN İADE EDEBİLİR. VALİYE GÖNDERİLMEYEN KARAR YÜRÜRLÜĞE GİRMEZ — alınan karar ONAY İÇİN DEĞİL, YÜRÜRLÜĞE GİRMESİ İÇİN gönderilir.",
  t: "İl Genel Meclisi", d: 3
},
{
  q: "Kesinleşen il genel meclisi karar özetleri ne kadar süre içinde halka duyurulur?",
  o: ["Toplantıyı izleyen en geç 7 gün içinde", "15 gün içinde", "30 gün içinde", "3 gün içinde", "Duyurulması zorunlu değildir"],
  a: 0,
  e: "Yeniden görüşülmesi istenilmeyen kararlar KESİNLEŞİR. KESİNLEŞEN KARAR ÖZETLERİ TOPLANTIYI İZLEYEN EN GEÇ 7 GÜN İÇİNDE çeşitli yollarla HALKA DUYURULUR.",
  t: "İl Genel Meclisi", d: 3
},
{
  q: "İl özel idaresi bütçesi süreç olarak nasıl işler?",
  o: ["Vali hazırlar, encümen görüş bildirir, meclis kabul eder", "İl genel meclisi hazırlar, vali onaylar", "İl encümeni hazırlar, vali kabul eder", "Vali hazırlar ve doğrudan uygulamaya koyar", "İçişleri Bakanlığı hazırlar, meclis kabul eder"],
  a: 0,
  e: "İl özel idaresi bütçesi: HAZIRLAMA — VALİ tarafından hazırlanır, EYLÜL AYI BAŞINDA sunulur. GÖRÜŞ BİLDİRME — İL ENCÜMENİ inceleyip görüş bildirir, KASIM AYININ BİRİNCİ GÜNÜNDEN ÖNCE sunar. KABUL ETME — İL GENEL MECLİSİ AYNEN VEYA DEĞİŞTİREREK KABUL EDER. Bütçe MALİ YIL VE İZLEYEN İKİ YIL içindeki gelir ve gider tahminlerini gösterir.",
  t: "İl Özel İdaresi Bütçesi", d: 3
},
{
  q: "İl özel idaresi hizmetlerinin ciddi biçimde aksatıldığı nasıl belirlenir?",
  o: ["Bakanlık talebiyle sulh hukuk hâkimi tarafından", "Bakanlık talebiyle idare mahkemesi tarafından", "İçişleri Bakanlığı tarafından doğrudan", "İlin valisi tarafından doğrudan", "Danıştay tarafından karara bağlanarak"],
  a: 0,
  e: "İl özel idaresi hizmetlerinin CİDDÎ BİR BİÇİMDE AKSATILDIĞININ ve bu durumun halkın sağlık, huzur ve esenliğini HAYATÎ DERECEDE OLUMSUZ ETKİLEDİĞİNİN, İLGİLİ BAKANLIĞIN TALEBİ ÜZERİNE YETKİLİ SULH HUKUK HÂKİMİ TARAFINDAN BELİRLENMESİ gerekir. (Aynı usul BELEDİYE denetimi için de geçerlidir.)",
  t: "İl Özel İdaresinin Denetimi", d: 3
},
{
  q: "İl özel idaresi hizmetlerindeki aksama giderilemezse İçişleri Bakanlığı ne yapar?",
  o: ["Hizmetin yerine getirilmesini validen ister", "Hizmeti bizzat kendisi yürütmeye başlar", "İl özel idaresini kapatma kararı alır", "Konuyu doğrudan Danıştay'a intikal ettirir", "Herhangi bir işlem yapma yetkisi bulunmaz"],
  a: 0,
  e: "İçişleri Bakanlığı ÖNCE hizmetlerdeki aksamanın giderilmesini, hizmetin özelliğine göre MAKUL BİR SÜRE VEREREK il özel idaresinden ister. SONRA aksama giderilemezse HİZMETİN YERİNE GETİRİLMESİNİ O İLİN VALİSİNDEN İSTER. Vali aksaklığı ÖNCELİKLE İL ÖZEL İDARESİNİN araç, gereç, personel ve kaynaklarıyla giderir; MÜMKÜN OLMAZSA DİĞER KAMU KURUM VE KURULUŞLARININ İMKÂNLARINI da kullanabilir.",
  t: "İl Özel İdaresinin Denetimi", d: 3
},
{
  q: "Belediye kurulması bakımından il ve ilçe merkezlerinde nüfus şartı aranır mı?",
  o: ["Aranmaz; il ve ilçe merkezlerinde belediye kurulması zorunludur", "5.000 nüfus şartı aranır", "2.000 nüfus şartı aranır", "50.000 nüfus şartı aranır", "İl merkezleri için aranır, ilçe merkezleri için aranmaz"],
  a: 0,
  e: "İL VE İLÇE MERKEZLERİNDE BELEDİYE KURULMASI ZORUNLUDUR. Dolayısıyla İL BELEDİYELERİ VE İLÇE BELEDİYELERİ İÇİN HERHANGİ BİR NÜFUS ŞARTI ARANMAZ. BELDE BELEDİYESİ kurulması için ise 5.000 nüfus şartı vardır.",
  t: "Belediye Kuruluşu", d: 2
},
{
  q: "Nüfusu 5.000 olan bir köyde belde belediyesi kurulması sürecinde halkoylaması hangi hallerde yapılır?",
  o: ["İhtiyar meclisi kararı, seçmen başvurusu veya vali kararı", "Yalnızca köy ihtiyar meclisinin kararı üzerine", "Yalnızca ilin valisinin talebi üzerine", "Yalnızca İçişleri Bakanlığının kararı üzerine", "Hiçbir hâlde halkoylaması yapılmaz"],
  a: 0,
  e: "Halkoylaması: a) KÖY İHTİYAR MECLİSİNİN KARARI veya b) SEÇMENLERİNİN EN AZ YARISINDAN BİR FAZLASININ MAHALLİN EN BÜYÜK MÜLKÎ İDARE AMİRİNE YAZILI BAŞVURUSU ya da c) VALİNİN KENDİLİĞİNDEN BUNA GEREK GÖRMESİ durumunda, valinin bildirimi üzerine MAHALLÎ SEÇİM KURULLARI 15 GÜN İÇİNDE seçmenlerin oylarını alır ve sonucu bir tutanakla valiliğe bildirir.",
  t: "Belediye Kuruluşu", d: 3
},
{
  q: "Belde belediyesi kurulması sürecinde işlem dosyası hangi bakanlığa gönderilir?",
  o: ["Çevre ve Şehircilik Bakanlığına", "İçişleri Bakanlığına", "Hazine ve Maliye Bakanlığına", "Adalet Bakanlığına", "Cumhurbaşkanlığına"],
  a: 0,
  e: "Halkoylamasından sonra İŞLEM DOSYASI VALİNİN GÖRÜŞÜYLE BİRLİKTE ÇEVRE VE ŞEHİRCİLİK BAKANLIĞINA GÖNDERİLİR. Ardından CUMHURBAŞKANI KARARI ile o yerde belediye kurulur (bu son aşamaya ilişkin hüküm 07.12.2023 tarihli AYM kararı ile iptal edilmiştir).",
  t: "Belediye Kuruluşu", d: 3
},
{
  q: "Hangi yerlerde belediye kurulamaz?",
  o: ["Su havzaları, sit alanları ve 5.000 metre yakınlıkta", "Yalnızca sit ve koruma alanlarında", "Nüfusu 10.000'in altındaki yerleşim yerlerinde", "Orman köyü niteliğindeki yerleşim yerlerinde", "Büyükşehir belediyesi sınırları içinde"],
  a: 0,
  e: "İÇME VE KULLANMA SUYU HAVZALARI ile SİT VE DİĞER KORUMA ALANLARINDA ve MESKÛN SAHASI KURULU BİR BELEDİYENİN SINIRLARINA 5.000 METREDEN DAHA YAKIN olan yerleşim yerlerinde BELEDİYE KURULAMAZ.",
  t: "Belediye Kuruluşu", d: 3
},
{
  q: "Bir beldenin adı nasıl değiştirilir?",
  o: ["Meclisin 3/4 kararı, vali görüşü ve Bakanlık onayı", "Meclisin salt çoğunluk kararı ve vali onayı", "Yalnızca belediye meclisinin kararıyla", "Cumhurbaşkanının alacağı kararla", "TBMM'nin çıkaracağı bir kanunla"],
  a: 0,
  e: "Bir beldenin adı, BELEDİYE MECLİSİ ÜYE TAM SAYISININ EN AZ DÖRTTE ÜÇ ÇOĞUNLUĞUNUN KARARI ve VALİNİN GÖRÜŞÜ üzerine İÇİŞLERİ BAKANLIĞININ ONAYI ile değiştirilir. Bu karar RESMÎ GAZETEDE YAYIMLANIR. BELDENİN ADININ DEĞİŞMESİ İLE BELEDİYENİN ADI DA DEĞİŞMİŞ SAYILIR.",
  t: "Belediye Kuruluşu", d: 3
},
{
  q: "Nüfusu kaçın altına düşen belediyeler köye dönüştürülür?",
  o: ["2.000'in altına düşenler CB kararıyla", "5.000'in altına düşenler CB kararıyla", "2.000'in altına düşenler vali kararıyla", "10.000'in altına düşenler CB kararıyla", "Nüfus düşse de köye dönüştürülemez"],
  a: 0,
  e: "NÜFUSU 2.000'İN ALTINA DÜŞEN BELEDİYELER, CUMHURBAŞKANI KARARI İLE KÖYE DÖNÜŞTÜRÜLÜR.",
  t: "Belediye Kuruluşu", d: 3
},
{
  q: "Belediyenin zorunlu görevleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Su ve kanalizasyon ile itfaiye hizmetleri", "Devlete ait okul binalarının inşaatı", "Her türlü sağlık tesisini açıp işletmek", "Gıda bankacılığı faaliyeti yürütmek", "Amatör spor kulüplerine yardım yapmak"],
  a: 0,
  e: "BELEDİYENİN ZORUNLU GÖREVLERİ: imar, su ve kanalizasyon, ulaşım gibi KENTSEL ALTYAPI; COĞRAFÎ VE KENT BİLGİ SİSTEMLERİ; çevre ve çevre sağlığı, temizlik ve katı atık; ZABITA, İTFAİYE, ACİL YARDIM, KURTARMA VE AMBULANS; şehir içi trafik; DEFİN VE MEZARLIKLAR; ağaçlandırma, park ve yeşil alanlar; konut, kültür-sanat, turizm, gençlik ve spor; sosyal hizmet ve yardım, nikâh, meslek ve beceri kazandırma; ekonomi ve ticaretin geliştirilmesi. Diğer seçenekler İSTEĞE BAĞLI görevlerdir.",
  t: "Belediyenin Görevleri", d: 3
},
{
  q: "Hangi belediyeler kadınlar ve çocuklar için konukevi açmak zorundadır?",
  o: ["Büyükşehirler ve nüfusu 100.000 üzeri", "Nüfusu 50.000 üzerindeki belediyeler", "Nüfusu 10.000 üzerindeki belediyeler", "Yalnızca büyükşehir belediyeleri", "Bütün belediyeler bu yükümlülük altındadır"],
  a: 0,
  e: "BÜYÜKŞEHİR BELEDİYELERİ İLE NÜFUSU 100.000'İN ÜZERİNDEKİ BELEDİYELER, KADINLAR VE ÇOCUKLAR İÇİN KONUKEVLERİ AÇMAK ZORUNDADIR. DİĞER BELEDİYELER de mali durumları ve hizmet önceliklerini değerlendirerek konukevleri AÇABİLİRLER.",
  t: "Belediyenin Görevleri", d: 3
},
{
  q: "Belediye meclisi üye sayısı nasıl belirlenir ve meclise kim başkanlık eder?",
  o: ["9 ila 55 arasında; başkanlığı belediye başkanı yapar", "9 ila 45 arasında; meclis kendi başkanını seçer", "Sabit 31 üyedir; meclis kendi başkanını seçer", "Nüfustan bağımsızdır; başkanı vali atar", "15 ila 55 arasında; encümen başkanlık eder"],
  a: 0,
  e: "BELEDİYE MECLİSİ ÜYE SAYISI, BELDE NÜFUSUNUN BÜYÜKLÜĞÜNE GÖRE 9 İLA 55 ARASINDA DEĞİŞMEKTEDİR. MECLİSE BELEDİYE BAŞKANI BAŞKANLIK EDER. (İl genel meclisinde ise başkan MECLİSİN KENDİ ÜYELERİ ARASINDAN SEÇİLİR.)",
  t: "Belediye Meclisi", d: 3
},
{
  q: "Belediye meclisi gündemi kim tarafından belirlenir?",
  o: ["Belediye başkanı; üç gün önceden bildirilir", "Meclis başkan vekili; üç gün önceden bildirilir", "Belediye encümeni; bir hafta önceden bildirilir", "İlin valisi; üç gün önceden bildirilir", "Meclis üyelerinin oyu; toplantıda belirlenir"],
  a: 0,
  e: "MECLİS GÜNDEMİ BELEDİYE BAŞKANI TARAFINDAN BELİRLENEREK EN AZ ÜÇ GÜN ÖNCEDEN ÜYELERE BİLDİRİLİR ve çeşitli yöntemlerle HALKA DUYURULUR. HER AYIN İLK TOPLANTISINDA belediye başkanı ve meclis üyeleri konuların gündeme alınmasını önerebilir; öneri KATILANLARIN SALT ÇOĞUNLUĞUYLA kabul edilirse gündeme alınır.",
  t: "Belediye Meclisi", d: 3
},
{
  q: "Belediye meclisinin toplantı ve karar yeter sayısı nedir?",
  o: ["Üye tam sayısının salt çoğunluğuyla toplanır", "Üye tam sayısının üçte ikisiyle toplanır", "Üye tam sayısının üçte biriyle toplanır", "Karar yeter sayısı üye tam sayısının yarısıdır", "Bütün kararlar oybirliğiyle alınmaktadır"],
  a: 0,
  e: "Belediye meclisi ÜYE TAM SAYISININ SALT ÇOĞUNLUĞUYLA TOPLANIR ve KATILANLARIN SALT ÇOĞUNLUĞUYLA KARAR VERİR. ANCAK KARAR YETER SAYISI, ÜYE TAM SAYISININ DÖRTTE BİRİNDEN AZ OLAMAZ. (İl genel meclisi ile aynı esas.)",
  t: "Belediye Meclisi", d: 2
},
{
  q: "Belediye meclisi hangi hallerde ve hangi merci tarafından feshedilir?",
  o: ["İçişleri Bakanlığının bildirimi üzerine Danıştay kararıyla", "İçişleri Bakanının doğrudan alacağı kararla", "Cumhurbaşkanının alacağı kararla", "İlin valisinin alacağı kararla", "Sayıştay'ın alacağı kararla"],
  a: 0,
  e: "Belediye meclisi, kendisine KANUNLA VERİLEN GÖREVLERİ SÜRESİ İÇİNDE YAPMAYI İHMAL EDER VE BU DURUM BELEDİYEYE AİT İŞLERİ AKSATIRSA VEYA KANUNLA VERİLEN GÖREVLERİYLE İLGİSİ OLMAYAN SİYASÎ KONULARDA KARAR ALIRSA, İÇİŞLERİ BAKANLIĞININ BİLDİRİMİ ÜZERİNE DANIŞTAY KARARIYLA FESHEDİLİR. (İl genel meclisi ile aynı usul.)",
  t: "Belediye Meclisi", d: 3
},
{
  q: "Belediye meclisinin bilgi edinme ve denetim yolları arasında il genel meclisinde bulunmayan hangi yollar vardır?",
  o: ["Gensoru ve denetim komisyonu", "Soru ve genel görüşme", "Faaliyet raporunu değerlendirme", "Meclis araştırması", "Yazılı soru"],
  a: 0,
  e: "Belediye meclisinin denetim yolları: SORU, GENEL GÖRÜŞME, FAALİYET RAPORUNU DEĞERLENDİRME, GENSORU ve DENETİM KOMİSYONU. GENSORU ve DENETİM KOMİSYONU İL GENEL MECLİSİNDE BULUNMAZ — bunlar belediye meclisine özgüdür.",
  t: "Belediye Meclisi", d: 3
},
{
  q: "Belediye başkanı hakkında gensoru önergesi nasıl verilir ve nasıl sonuçlanır?",
  o: ["Üye tam sayısının 1/3'ü imzasıyla; 3/4 güvensizlik oyu", "Salt çoğunluk imzasıyla; salt çoğunluk güvensizlik oyu", "Üye tam sayısının yarısı imzasıyla; derhal görüşülür", "Üye tam sayısının 1/3'ü imzasıyla; salt çoğunlukla düşer", "Gensoru sonucunda başkan doğrudan görevden düşer"],
  a: 0,
  e: "GENSORU: Meclis ÜYE TAM SAYISININ EN AZ ÜÇTE BİRİ oranındaki üyenin imzasıyla verilebilir. MECLİS ÜYE TAM SAYISININ SALT ÇOĞUNLUĞUNUN OYU İLE GÜNDEME ALINIR ve ÜÇ TAM GÜN GEÇMEDİKÇE GÖRÜŞÜLEMEZ. Görüşme sonrası MECLİS ÜYE TAMSAYISININ DÖRTTE ÜÇ ÇOĞUNLUĞUYLA GÜVENSİZLİK OYU verilirse tutanak MECLİS BAŞKAN VEKİLİ tarafından MÜLKÎ İDARE AMİRİNE gönderilir; VALİ dosyayı gerekçeli görüşüyle DANIŞTAY'A gönderir. GÜVENSİZLİK KARARI DANIŞTAYCA UYGUN GÖRÜLÜRSE BELEDİYE BAŞKANI BAŞKANLIKTAN DÜŞER.",
  t: "Belediye Meclisi", d: 3
},
{
  q: "Belediye başkanının faaliyet raporu yeterli görülmezse süreç nasıl işler?",
  o: ["3/4 ile yeterli görülmezse Danıştay karar verir", "Salt çoğunlukla yeterli görülmezse başkan düşer", "3/4 ile yeterli görülmezse başkan doğrudan düşer", "Tutanak Bakanlığa gider ve başkan doğrudan düşer", "Herhangi bir hukuki sonuç doğurmamaktadır"],
  a: 0,
  e: "Belediye başkanınca meclise sunulan bir önceki yıla ait faaliyet raporundaki açıklamalar MECLİS ÜYE TAM SAYISININ DÖRTTE ÜÇ ÇOĞUNLUĞUYLA YETERLİ GÖRÜLMEZSE, tutanak MECLİS BAŞKAN VEKİLİ tarafından MAHALLİN MÜLKÎ İDARE AMİRİNE gönderilir. VALİ dosyayı GEREKÇELİ GÖRÜŞÜYLE DANIŞTAY'A gönderir. YETERSİZLİK KARARI DANIŞTAYCA UYGUN GÖRÜLDÜĞÜ TAKDİRDE BELEDİYE BAŞKANI BAŞKANLIKTAN DÜŞER. (İl özel idaresinde ise tutanak sadece İÇİŞLERİ BAKANLIĞINA gönderilir.)",
  t: "Belediye Meclisi", d: 3
},
{
  q: "Denetim komisyonu hangi belediyelerde ve kaç üyeden kurulur?",
  o: ["İl ve ilçe belediyeleri ile nüfusu 10.000 üzeri; 3-5 üye", "Bütün belediyelerde; her hâlde beş üyeden", "Yalnızca büyükşehir belediyelerinde; yedi üyeden", "Nüfusu 50.000 üzerindeki belediyelerde; 3-5 üye", "Her mart ayı toplantısında; yedi üyeden"],
  a: 0,
  e: "DENETİM KOMİSYONU: İL VE İLÇE BELEDİYELERİ İLE NÜFUSU 10.000'İN ÜZERİNDEKİ BELEDİYELERDE, belediye meclisi HER OCAK AYI TOPLANTISINDA bir önceki yıl gelir ve giderleri ile hesap kayıt ve işlemlerinin denetimi için KENDİ ÜYELERİ ARASINDAN GİZLİ OYLA ve ÜYE SAYISI ÜÇTEN AZ BEŞTEN ÇOK OLMAMAK ÜZERE bir denetim komisyonu oluşturur.",
  t: "Belediye Meclisi", d: 3
},
{
  q: "İl belediyelerinde ve nüfusu 100.000'in üzerindeki belediyelerde belediye encümeni kaç kişiden oluşur?",
  o: ["Yedi kişiden", "Beş kişiden", "Dokuz kişiden", "Üç kişiden", "On bir kişiden"],
  a: 0,
  e: "İL BELEDİYELERİNDE VE NÜFUSU 100.000'İN ÜZERİNDEKİ BELEDİYELERDE encümen YEDİ KİŞİDEN oluşur: BELEDİYE BAŞKANI (başkan), belediye meclisinin her yıl kendi üyeleri arasından BİR YIL İÇİN GİZLİ OYLA SEÇECEĞİ ÜÇ ÜYE, MALÎ HİZMETLER BİRİM AMİRİ ve belediye başkanının birim amirleri arasından bir yıl için seçeceği İKİ ÜYE.",
  t: "Belediye Encümeni", d: 3
},
{
  q: "Diğer belediyelerde (il belediyesi ve nüfusu 100.000 üzeri dışında) belediye encümeni kaç kişiden oluşur?",
  o: ["Beş kişiden", "Yedi kişiden", "Dokuz kişiden", "Üç kişiden", "Dört kişiden"],
  a: 0,
  e: "DİĞER BELEDİYELERDE encümen BEŞ KİŞİDEN oluşur: BELEDİYE BAŞKANI, belediye meclisinin seçeceği İKİ ÜYE, MALÎ HİZMETLER BİRİM AMİRİ ve belediye başkanının birim amirleri arasından bir yıl için seçeceği BİR ÜYE.",
  t: "Belediye Encümeni", d: 3
},
{
  q: "Belediye başkanının katılamadığı encümen toplantılarına kim başkanlık eder?",
  o: ["Başkanın görevlendireceği başkan yardımcısı", "Mali hizmetler biriminin amiri", "Meclis başkan vekili", "En kıdemli encümen üyesi", "İlin valisi veya vekili"],
  a: 0,
  e: "Belediye başkanının KATILAMADIĞI TOPLANTILARDA, BELEDİYE BAŞKANININ GÖREVLENDİRECEĞİ BAŞKAN YARDIMCISI VEYA ENCÜMEN ÜYESİ encümene başkanlık eder. (İl encümeninde ise valinin katılamadığı toplantıya GENEL SEKRETER başkanlık eder.)",
  t: "Belediye Encümeni", d: 3
},
{
  q: "Belediye encümeninin görevleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Kanunda öngörülen cezaları ve ruhsatları vermek", "Belediyenin borçlanmasına karar vermek", "İmar planlarını inceleyip onaylamak", "Belediye yönetmeliklerini kabul etmek", "Fahri hemşehrilik payesi ve beratı vermek"],
  a: 0,
  e: "BELEDİYE ENCÜMENİNİN görevleri: stratejik plan, çalışma programı, bütçe ve kesin hesabı inceleyip meclise GÖRÜŞ BİLDİRMEK; vergi-resim-harçlar dışında dava konusu olan uyuşmazlıkların anlaşma ile tasfiyesine karar vermek; KAMULAŞTIRMA KARARLARINI ALMAK VE UYGULAMAK; öngörülmeyen giderler ödeneğinin harcama yerlerini belirlemek; fonksiyonel sınıflandırmanın İKİNCİ DÜZEYLERİ arasında aktarma yapmak; KANUNLARDA ÖNGÖRÜLEN CEZALARI VE RUHSATLARI VERMEK; UMUMA AÇIK YERLERİN AÇILIŞ-KAPANIŞ SAATLERİNİ BELİRLEMEK; süresi 3 yılı geçmemek üzere kiralamaya karar vermek.",
  t: "Belediye Encümeni", d: 3
},
{
  q: "Belediye başkanı görevinin devamı süresince hangi kısıtlamalara tabidir?",
  o: ["Siyasi parti organlarında görev alamaz", "Hiçbir kısıtlamaya tabi tutulmamaktadır", "Yalnızca siyasi partiye üye olamaz", "Hiçbir ticari faaliyette bulunamaz", "Yalnızca amatör spor kulübünde görev alamaz"],
  a: 0,
  e: "Belediye başkanı, görevinin devamı süresince SİYASÎ PARTİLERİN YÖNETİM VE DENETİM ORGANLARINDA GÖREV ALAMAZ; PROFESYONEL SPOR KULÜPLERİNİN BAŞKANLIĞINI YAPAMAZ VE YÖNETİMİNDE BULUNAMAZ.",
  t: "Belediye Başkanı", d: 3
},
{
  q: "Belediye başkanı görev başında bulunmadığı hâllerde kendisine kim vekâlet eder?",
  o: ["Meclis üyeleri arasından seçilen başkan vekili", "Belediye başkan yardımcılarından biri", "Mali hizmetler biriminin amiri", "En kıdemli encümen üyesi", "Valinin görevlendireceği bir kişi"],
  a: 0,
  e: "Belediye başkanı İZİN, HASTALIK VEYA BAŞKA BİR SEBEPLE görev başında bulunmadığı hâllerde, bu süre içinde kendisine vekâlet etmek üzere BELEDİYE MECLİSİ ÜYELERİ ARASINDAN BİRİNİ BAŞKAN VEKİLİ olarak görevlendirir. BAŞKAN VEKİLİ, BAŞKANIN YETKİLERİNE SAHİPTİR.",
  t: "Belediye Başkanı", d: 3
},
{
  q: "Belediye meclisi taşınmaz mallar üzerinde kaç yılı geçmemek üzere sınırlı ayni hak tesis edebilir?",
  o: ["30 yıl", "25 yıl", "10 yıl", "49 yıl", "Süre sınırı yoktur"],
  a: 0,
  e: "BELEDİYE MECLİSİ taşınmaz mal alımına, satımına, takasına, tahsisine karar verir; 3 YILDAN FAZLA KİRALANMASINA ve 30 YILI GEÇMEMEK ÜZERE bunlar üzerinde SINIRLI AYNİ HAK TESİS ETMEYE karar verir. Dikkat: İL GENEL MECLİSİNDE bu süre 25 YILDIR.",
  t: "Belediye Meclisi", d: 3
},
{
  q: "Belediye meclisinin görevleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Fahri hemşehrilik payesi ve beratı vermek", "Kanunda öngörülen ruhsatları vermek", "Umuma açık yerlerin saatlerini belirlemek", "Öngörülmeyen giderler ödeneğini kullanmak", "Belediye personelini atamak ve görevden almak"],
  a: 0,
  e: "BELEDİYE MECLİSİNİN görevleri arasında: stratejik plan ve programları kabul etmek, BÜTÇE VE KESİN HESABI KABUL ETMEK, İMAR PLANLARINI ONAYLAMAK, BORÇLANMAYA KARAR VERMEK, ŞARTLI BAĞIŞLARI KABUL ETMEK, imtiyaz/yap-işlet-devret/özelleştirme kararı vermek, MECLİS BAŞKANLIK DİVANINI VE ENCÜMEN ÜYELERİNİ SEÇMEK, YÖNETMELİKLERİ KABUL ETMEK, MEYDAN-CADDE-SOKAK-PARK ADI VERMEK, FAHRİ HEMŞEHRİLİK PAYESİ VERMEK, BAŞKAN İLE ENCÜMEN ARASINDAKİ ANLAŞMAZLIKLARI KARARA BAĞLAMAK yer alır.",
  t: "Belediye Meclisi", d: 3
},
{
  q: "Belediye başkanının görevleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Belediye personelini atamak", "Şartlı bağışları kabul etmek", "Belediye yönetmeliklerini kabul etmek", "Belediyenin borçlanmasına karar vermek", "Nazım imar planlarını onaylamak"],
  a: 0,
  e: "BELEDİYE BAŞKANININ görevleri: teşkilatı SEVK VE İDARE ETMEK, BÜTÇEYİ HAZIRLAMAK VE UYGULAMAK, belediyeyi TEMSİL ETMEK, MECLİSE VE ENCÜMENE BAŞKANLIK ETMEK, gelir ve alacakları TAKİP VE TAHSİL ETMEK, malları İDARE ETMEK, meclis ve encümen KARARLARINI UYGULAMAK, BELEDİYE PERSONELİNİ ATAMAK, bağlı kuruluşları DENETLEMEK, ŞARTSIZ BAĞIŞLARI KABUL ETMEK, yoksul ve muhtaçlar için ayrılan ödeneği kullanmak, TEMSİL VE AĞIRLAMA GİDERLERİ İÇİN AYRILAN ÖDENEĞİ KULLANMAK.",
  t: "Belediye Başkanı", d: 3
},
{
  q: "Belediye başkanı meclis kararını hukuka aykırı bulursa ne yapabilir ve meclis ısrar ederse süreç nasıl işler?",
  o: ["5 gün içinde iade eder; ısrar hâlinde yargıya gider", "7 gün içinde iade eder; ısrar hâlinde karar iptal olur", "Kararı doğrudan iptal etme yetkisine sahiptir", "Kararı iade etme yetkisi bulunmamaktadır", "Kararı İçişleri Bakanlığına göndermekle yetinir"],
  a: 0,
  e: "BAŞKAN, kararı hukuka aykırı bulursa 5 GÜN İÇİNDE YENİDEN GÖRÜŞÜLMESİ İÇİN İADE EDEBİLİR. MECLİS, ÜYE TAMSAYISININ SALT ÇOĞUNLUĞUNUN OYU İLE KARARINDA ISRAR EDEBİLİR — bu durumda karar KESİNLEŞİR. BELEDİYE BAŞKANI, MECLİSİN ISRARI İLE KESİNLEŞEN KARARLAR ALEYHİNE 10 GÜN İÇİNDE İDARÎ YARGIYA BAŞVURABİLİR.",
  t: "Belediye Meclisi", d: 3
},
{
  q: "Kesinleşen belediye meclisi kararları ne kadar süre içinde ve kime gönderilir?",
  o: ["7 gün içinde mülki idare amirine", "15 gün içinde İçişleri Bakanlığına", "5 gün içinde ilin valisine", "30 gün içinde Danıştay Başkanlığına", "Herhangi bir yere gönderilmesi gerekmez"],
  a: 0,
  e: "Kararlar KESİNLEŞTİĞİ TARİHTEN İTİBAREN EN GEÇ 7 GÜN İÇİNDE MAHALLİN EN BÜYÜK MÜLKÎ İDARE AMİRİNE GÖNDERİLİR. MÜLKÎ İDARE AMİRİNE GÖNDERİLMEYEN KARARLAR YÜRÜRLÜĞE GİRMEZ. Kesinleşen meclis kararlarının özetleri de 7 GÜN İÇİNDE uygun araçlarla HALKA DUYURULUR.",
  t: "Belediye Meclisi", d: 3
},
{
  q: "Belediye hizmetlerindeki aksama giderilemezse ortaya çıkan maliyet nasıl karşılanır?",
  o: ["Vali İller Bankasına bildirir; vergi payından kesilir", "Doğrudan belediye bütçesinden ödenmektedir", "İçişleri Bakanlığı bütçesinden ödenmektedir", "Hazine ve Maliye Bakanlığı karşılamaktadır", "Doğan maliyet hiçbir şekilde karşılanmaz"],
  a: 0,
  e: "Aksama giderilemezse vali hizmeti yerine getirir; ORTAYA ÇIKACAK MALİYET VALİ TARAFINDAN İLLER BANKASINA BİLDİRİLİR ve İLLER BANKASINCA O BELEDİYENİN MÜTEAKİP AY GENEL BÜTÇE VERGİ GELİRLERİ TAHSİLÂTI TOPLAMI ÜZERİNDEN BELEDİYEYE AYRILAN PAYDAN VALİLİK EMRİNE GÖNDERİLİR.",
  t: "Belediyenin Denetimi", d: 3
},
{
  q: "Belediye hizmetlerinin aksatılması terör veya şiddet olaylarıyla mücadeleyi olumsuz etkiliyorsa valilik ne yapar?",
  o: ["YİKOB, il özel idaresi veya kamu kurumları eliyle yapar", "İlgili belediyeyi kapatma kararı alır", "Yalnızca İçişleri Bakanlığına bildirim yapar", "Belediye meclisinin feshini talep eder", "Herhangi bir işlem yapma yetkisi bulunmaz"],
  a: 0,
  e: "Belediye veya bağlı idarelerde hizmetlerin aksatılmasının TERÖR VEYA ŞİDDET OLAYLARIYLA MÜCADELEYİ OLUMSUZ ETKİLEDİĞİNİN VALİLİK TARAFINDAN BELİRLENMESİ halinde, valilik söz konusu hizmeti YATIRIM İZLEME VE KOORDİNASYON BAŞKANLIĞI, İL ÖZEL İDARESİ VEYA KAMU KURUM VE KURULUŞLARI ARACILIĞIYLA YAPAR VEYA YAPTIRIR. Harcamalar HAZİNE VE MALİYE BAKANLIĞI veya İLLER BANKASI A.Ş.'ce ilgili idare payından kesilir.",
  t: "Belediyenin Denetimi", d: 3
},
{
  q: "Terör ve şiddet olaylarına destek amacıyla kullanılan belediye taşınırlarına kim el koyar?",
  o: ["Mahallin en büyük mülki idare amiri", "Görevli Cumhuriyet savcısı", "Belediye başkanının kendisi", "İl emniyet müdürünün kendisi", "İçişleri Bakanlığı merkez teşkilatı"],
  a: 0,
  e: "Belediye ve bağlı idare imkânlarının terör veya şiddet olaylarına destek sağlamak amacıyla kullanıldığının valilik tarafından belirlenmesi durumunda, kullanılan TAŞINIRLARA MAHALLİN EN BÜYÜK MÜLKİ İDARE AMİRİ TARAFINDAN EL KONULUR. Sorumluluğu tespit edilen personelin vali/kaymakam tarafından görevden uzaklaştırılması halinde GÖREVE İADE İŞLEMİ ANCAK UZAKLAŞTIRMA İŞLEMİNİ YAPAN MAKAM TARAFINDAN YAPILIR.",
  t: "Belediyenin Denetimi", d: 3
},
{
  q: "Belediye bütçesi süreci nasıl işler?",
  o: ["Başkan hazırlar, encümen görüş bildirir, meclis kabul eder", "Belediye meclisi hazırlar, başkan onaylar", "Belediye encümeni hazırlar, meclis kabul eder", "Başkan hazırlar ve doğrudan uygulamaya koyar", "İlin valisi hazırlar, meclis kabul eder"],
  a: 0,
  e: "Belediye bütçesi: HAZIRLAMA — BAŞKAN tarafından hazırlanır, EYLÜL AYININ BİRİNCİ GÜNÜNDEN ÖNCE sunulur. GÖRÜŞ BİLDİRME — BELEDİYE ENCÜMENİ inceleyip görüş bildirir, KASIM AYININ BİRİNCİ GÜNÜNDEN ÖNCE sunar. KABUL ETME — BELEDİYE MECLİSİ AYNEN VEYA DEĞİŞTİREREK KABUL EDER.",
  t: "Belediye Bütçesi", d: 3
},
]);

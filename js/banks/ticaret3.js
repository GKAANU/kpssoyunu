/* Ticaret Hukuku — 3. bölüm (şirketler hukuku: adi şirket, ticaret şirketleri,
   kollektif, komandit, anonim, limited) */
KPSS.registerBank('ticaret', [

/* ---------- ADİ ŞİRKET ---------- */
{
  q: "BK md. 620'ye göre adi ortaklık sözleşmesi nedir?",
  o: ["İki ya da daha fazla kişinin emeklerini ve mallarını ortak bir amaca erişmek üzere birleştirmeyi üstlendikleri sözleşme", "Ticari işletme işletmek için kurulan tüzel kişilik", "Sermaye paylarının toplamından oluşan şirket", "Ticaret siciline tescil ile kurulan şirket", "Sadece tacirler arasında yapılan sözleşme"],
  a: 0,
  e: "BK md. 620'ye göre ADİ ORTAKLIK SÖZLEŞMESİ, İKİ YA DA DAHA FAZLA KİŞİNİN EMEKLERİNİ VE MALLARINI ORTAK BİR AMACA ERİŞMEK ÜZERE BİRLEŞTİRMEYİ ÜSTLENDİKLERİ sözleşmedir. Adi şirket BK'nın 620-645. maddelerinde düzenlenmiştir.",
  t: "Adi Şirket", d: 2
},
{
  q: "Adi şirket sözleşmesi hangi durumlarda resmi şekle tabidir?",
  o: ["Bir taşınmaz mal, marka ya da motorlu taşıt aracının sermaye olarak konulması durumunda", "Her durumda resmi şekle tabidir", "Hiçbir durumda resmi şekle tabi değildir", "Sadece para sermaye konulduğunda", "Sadece tacirler arasında yapıldığında"],
  a: 0,
  e: "Adi şirketin kuruluşu KURAL OLARAK HİÇBİR ŞEKLE BAĞLI DEĞİLDİR. Ancak bir TAŞINMAZ MALIN veya bir MARKANIN ya da MOTORLU TAŞIT ARACININ adi şirkete sermaye olarak konulması durumunda sözleşme RESMİ ŞEKLE TABİDİR.",
  t: "Adi Şirket", d: 3
},
{
  q: "Adi şirketin tüzel kişiliği olmamasının sonuçları nedir?",
  o: ["Hak ve borç edinemez, malvarlığı edinemez, davacı veya davalı olma sıfatı (husumet ehliyeti) yoktur", "Sadece dava ehliyeti yoktur", "Sadece malvarlığı edinemez", "Tüm hak ve borçları edinebilir", "Sadece tacirler için tüzel kişiliği vardır"],
  a: 0,
  e: "ADİ ŞİRKETİN TÜZEL KİŞİLİĞİ YOKTUR; bu nedenle şirket HAK VE BORÇLAR EDİNEMEZ, MALVARLIĞI EDİNEMEZ, borç yüklenmez; hukuki işlem ve eylem yeteneği ile usul hukukuna ilişkin DAVACI VEYA DAVALI OLABİLME SIFATI (HUSUMET EHLİYETİ) YOKTUR.",
  t: "Adi Şirket", d: 2
},
{
  q: "Adi şirket ticari işletme işletmek amacıyla kurulmuşsa iflas bakımından durum nedir?",
  o: ["Adi şirketin değil ortakların iflası istenebilir; çünkü tacir sıfatı ortaklara aittir", "Adi şirketin iflası istenebilir", "Hem şirketin hem ortakların iflası istenebilir", "Hiç kimsenin iflası istenemez", "Sadece yönetici ortağın iflası istenebilir"],
  a: 0,
  e: "Adi şirket ticari işletme işletmek amacıyla kurulmuşsa HER BİR ORTAK TACİR SIFATINI KAZANIR ve işletme ORTAKLAR ADINA tescil edilir. ADİ ŞİRKETİN DEĞİL, ORTAKLARIN İFLASI İSTENEBİLİR; çünkü tacir sıfatı adi şirkete değil ORTAKLARA aittir.",
  t: "Adi Şirket", d: 3
},
{
  q: "Adi şirkette sözleşmede aksi kararlaştırılmamışsa kâr ve zarara katılım nasıl olur?",
  o: ["Katılım payının değeri ve niteliği ne olursa olsun her ortak eşit olarak katılır", "Sermaye payı oranında katılır", "Sadece emek koyanlar zarara katılmaz", "Yönetici ortak daha fazla katılır", "Zarara hiç katılınmaz"],
  a: 0,
  e: "Sözleşmede aksi kararlaştırılmamışsa, KATILIM PAYININ DEĞERİ VE NİTELİĞİ NE OLURSA OLSUN HER ORTAK KÂRA VE ZARARA EŞİT OLARAK KATILIR. Sözleşmede sadece kâr dağıtımı oranı belirtilmişse ZARARA DA AYNI ORANDA katılınır (ve tersi).",
  t: "Adi Şirket", d: 3
},
{
  q: "Adi şirkette hangi ortaklar sözleşme ile zarardan muaf tutulabilir?",
  o: ["Sermaye olarak emeğini koymuş olan ortaklar; ancak bu muafiyet 3. kişilere karşı müteselsil sorumluluğu ortadan kaldırmaz", "Hiçbir ortak muaf tutulamaz", "Tüm ortaklar muaf tutulabilir", "Sadece yönetici ortaklar", "Sadece tüzel kişi ortaklar"],
  a: 0,
  e: "Adi şirkette tüm ortaklar kâra ve zarara katılırlar; kârın sadece belli ortaklara dağıtılacağı ya da yalnızca belli ortakların zarara katlanacağına ilişkin kararlar GEÇERSİZDİR. Ancak SERMAYE OLARAK EMEĞİNİ KOYMUŞ ortaklar sözleşme ile ZARARDAN MUAF tutulabilir. Bu muafiyet ÜÇÜNCÜ KİŞİLERE KARŞI MÜTESELSİL SORUMLULUĞU ORTADAN KALDIRMAZ.",
  t: "Adi Şirket", d: 3
},
{
  q: "Adi şirkette olağanüstü işlerin yapılmasına ilişkin kararlar nasıl alınır?",
  o: ["Mutlaka oybirliği ile", "Çoğunlukla", "Yönetici ortağın kararıyla", "Sermaye çoğunluğu ile", "Mahkeme kararıyla"],
  a: 0,
  e: "Adi şirkette OLAĞANÜSTÜ İŞLERİN yapılmasına ilişkin kararların MUTLAKA OYBİRLİĞİ İLE alınması gerekir. Örneğin: ticari temsilci atamak, şirketin konusuna girmiyorsa taşınmaz alım-satımı, bağışlama, kambiyo taahhüdü, sulh ve tahkim, yeni ortak almak, bir ortağı çıkarmak.",
  t: "Adi Şirket", d: 2
},
{
  q: "Adi şirkette ortakların denetleme (inceleme) hakkı ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Yönetim yetkisi olmasa bile her ortağın bu hakkı vardır ve kötüye kullanılmadığı sürece kısıtlanamaz", "Sadece yönetici ortakların bu hakkı vardır", "Sözleşme ile tamamen kaldırılabilir", "Sadece sermaye çoğunluğuna sahip ortağın hakkıdır", "Mahkeme izni gerekir"],
  a: 0,
  e: "Adi şirkette YÖNETİM YETKİSİ OLMASA BİLE her ortağın şirketin işleyişi hakkında BİLGİ ALMA, DEFTER VE KAYITLARINI İNCELEME, örnek alma ve mali durum özeti çıkarma hakkı vardır. Bu denetleme hakkı KÖTÜYE KULLANILMADIĞI SÜRECE KISITLANAMAZ.",
  t: "Adi Şirket", d: 2
},
{
  q: "Adi şirkette bir ortak diğer ortakların rızasını almadan payını üçüncü kişiye devrederse ne olur?",
  o: ["Üçüncü kişi ortak sıfatını kazanamaz; devir işlemi sadece devreden ortak ile devralan arasında hüküm ifade eder", "Üçüncü kişi ortak olur", "Devir kesin olarak geçersizdir", "Şirket kendiliğinden sona erer", "Diğer ortaklar şirketten çıkarılır"],
  a: 0,
  e: "Şirkete yeni bir ortak alınması BÜTÜN ORTAKLARIN RIZASINA bağlıdır. Ortaklardan biri rıza almadan payını üçüncü kişiye devrederse ÜÇÜNCÜ KİŞİ ORTAK SIFATINI KAZANAMAZ; devir işlemi PAYI DEVREDEN ORTAK İLE DEVRALAN ÜÇÜNCÜ KİŞİ ARASINDA hüküm ifade eder.",
  t: "Adi Şirket", d: 3
},

/* ---------- TİCARET ŞİRKETLERİ GENEL ---------- */
{
  q: "TTK md. 124'e göre ticaret şirketleri hangileridir ve nasıl sınıflandırılır?",
  o: ["Kollektif, komandit, anonim, limited ve kooperatif; kollektif ve komandit şahıs, anonim-limited-sermayesi paylara bölünmüş komandit sermaye şirketidir", "Sadece anonim ve limited şirketler", "Adi, kollektif, komandit, anonim ve limited", "Sadece sermaye şirketleri", "Kollektif, anonim ve limited"],
  a: 0,
  e: "TTK md. 124'e göre ticaret şirketleri KOLLEKTİF, KOMANDİT, ANONİM, LİMİTED ve KOOPERATİF şirketlerden ibarettir. KOLLEKTİF ile KOMANDİT şirket ŞAHIS; ANONİM, LİMİTED ve SERMAYESİ PAYLARA BÖLÜNMÜŞ KOMANDİT şirket SERMAYE ŞİRKETİ sayılır.",
  t: "Ticaret Şirketleri", d: 2
},
{
  q: "Ticaret şirketleri tüzel kişiliği ne zaman kazanır ve şirket malvarlığının sahibi kimdir?",
  o: ["Ticaret siciline tescil ile tüzel kişilik kazanır; malvarlığının sahibi ortaklar değil bizzat şirket tüzel kişiliğidir", "Sözleşmenin imzalanmasıyla; malvarlığı ortaklara aittir", "Noter onayı ile; malvarlığı ortaklara aittir", "Tescil ile; malvarlığı ortaklara aittir", "Faaliyete başlamayla; malvarlığı şirkete aittir"],
  a: 0,
  e: "Ticaret şirketleri TİCARET SİCİLİNE TESCİL İLE TÜZEL KİŞİLİK kazanırlar. Şirket malvarlığının sahibi ORTAKLAR DEĞİL, BİZZAT ŞİRKET TÜZEL KİŞİLİĞİDİR. Bunun sonucu olarak AKTİF VE PASİF DAVA EHLİYETİNE sahip olan da şirkettir.",
  t: "Ticaret Şirketleri", d: 2
},
{
  q: "Şahıs şirketleri hangi durumda sermaye şirketleriyle birleşebilir?",
  o: ["Devrolunan şirket olmaları şartıyla", "Devralan şirket olmaları şartıyla", "Her durumda birleşebilirler", "Hiçbir durumda birleşemezler", "Sadece kooperatiflerle birleşebilirler"],
  a: 0,
  e: "ŞAHIS ŞİRKETLERİ: (a) şahıs şirketleriyle, (b) DEVROLUNAN ŞİRKET OLMALARI ŞARTIYLA sermaye şirketleriyle, (c) DEVROLUNAN ŞİRKET OLMALARI ŞARTIYLA kooperatiflerle birleşebilirler. SERMAYE ŞİRKETLERİ ise kollektif ve komandit şirketlerle ancak DEVRALAN ŞİRKET OLMALARI ŞARTIYLA birleşebilir.",
  t: "Ticaret Şirketleri", d: 3
},
{
  q: "Birleşme ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Devralan şirket devrolunanın malvarlığını bir bütün halinde devralır; devrolunan şirket tasfiyesiz sona erer ve sicilden silinir", "Devrolunan şirket tasfiye edilerek sona erer", "Malvarlığı tek tek devredilir", "Devrolunan şirket devam eder", "Birleşme tescil olmadan geçerlidir"],
  a: 0,
  e: "TTK md. 136'ya göre birleşmeyle devralan şirket devrolunan şirketin malvarlığını BİR BÜTÜN HALİNDE devralır. Birleşmeyle devrolunan şirket SONA ERER ve TİCARET SİCİLİNDEN SİLİNİR. Birleşen ya da devrolunan şirketler TASFİYESİZ SONA ERERLER; malvarlıkları KÜLLİ HALEFİYET kuralları gereği geçer.",
  t: "Ticaret Şirketleri", d: 3
},
{
  q: "Birleşmeye katılan şirketlerin alacaklıları hangi süre içinde istemde bulunursa devralan şirket alacaklarını teminat altına alır?",
  o: ["Birleşmenin hukuken geçerlilik kazanmasından itibaren 3 ay içinde", "1 ay içinde", "6 ay içinde", "1 yıl içinde", "3 yıl içinde"],
  a: 0,
  e: "Birleşmeye katılan şirketlerin alacaklıları BİRLEŞMENİN HUKUKEN GEÇERLİLİK KAZANMASINDAN İTİBAREN 3 AY içinde istemde bulunurlarsa, devralan şirket bunların alacaklarını TEMİNAT ALTINA ALIR.",
  t: "Ticaret Şirketleri", d: 3
},
{
  q: "Devrolunan şirketin borçlarından doğan, ortakların kişisel sorumluluğuna ilişkin istemler ne zaman zamanaşımına uğrar?",
  o: ["Birleşme kararının ilanı tarihinden itibaren 3 yıl geçince", "2 yıl geçince", "5 yıl geçince", "1 yıl geçince", "10 yıl geçince"],
  a: 0,
  e: "Devrolunan şirketin borçlarından doğan, ortakların kişisel sorumluluğuna ilişkin istemler BİRLEŞME KARARININ İLANI TARİHİNDEN İTİBAREN 3 YIL geçince zamanaşımına uğrar. (Tür değiştirmede de aynı şekilde tür değiştirme kararının ilanından itibaren 3 yıldır.)",
  t: "Ticaret Şirketleri", d: 3
},
{
  q: "TTK md. 185'e göre bir kollektif şirket hangi durumda komandit şirkete dönüşür?",
  o: ["Şirkete bir komanditerin girmesi ya da bir ortağın komanditer olması halinde", "Tüm ortakların komandite olması halinde", "Bir ortağın ayrılması halinde", "Tüzel kişi ortak girmesi halinde", "Sermaye artırımı halinde"],
  a: 0,
  e: "TTK md. 185'e göre bir KOLLEKTİF şirket; şirkete bir KOMANDİTERİN GİRMESİ ya da bir ortağın KOMANDİTER OLMASI halinde KOMANDİT şirkete dönüşür. Bir KOMANDİT şirket ise; TÜM KOMANDİTERLERİN ŞİRKETTEN ÇIKMASI ya da TÜM KOMANDİTERLERİN KOMANDİTE OLMASI halinde KOLLEKTİF şirkete dönüşür.",
  t: "Ticaret Şirketleri", d: 3
},
{
  q: "Tür değiştirmenin hukuki sonucu nedir?",
  o: ["Yeni türe dönüştürülen şirket eskisinin devamıdır", "Yeni bir tüzel kişilik doğar", "Eski şirket tasfiye edilir", "Ortaklar sorumluluktan kurtulur", "Borçlar sona erer"],
  a: 0,
  e: "Tür değiştirmede YENİ TÜRE DÖNÜŞTÜRÜLEN ŞİRKET ESKİSİNİN DEVAMIDIR. Tür değiştiren şirketin, tür değişikliği kararının ilanından ÖNCE DOĞMUŞ borçlarından dolayı ORTAKLARI TÜR DEĞİŞTİRMEDEN SONRA DA SORUMLU KALMAYA DEVAM EDERLER.",
  t: "Ticaret Şirketleri", d: 2
},
{
  q: "Bölünme bakımından hangi şirketler bölünebilir?",
  o: ["Sermaye şirketleri ve kooperatifler, sermaye şirketlerine ve kooperatiflere bölünebilir", "Tüm ticaret şirketleri bölünebilir", "Sadece anonim şirketler bölünebilir", "Şahıs şirketleri de bölünebilir", "Sadece kooperatifler bölünebilir"],
  a: 0,
  e: "SERMAYE ŞİRKETLERİ VE KOOPERATİFLER, SERMAYE ŞİRKETLERİNE VE KOOPERATİFLERE bölünebilirler. Bölünme sözleşmesinin ve bölünme planının YAZILI şekilde yapılması ve GENEL KURUL tarafından onaylanması şarttır; bölünme TİCARET SİCİLİNE TESCİLLE geçerlilik kazanır.",
  t: "Ticaret Şirketleri", d: 3
},

/* ---------- KOLLEKTİF ŞİRKET ---------- */
{
  q: "TTK md. 211'e göre kollektif şirketin özellikleri arasında aşağıdakilerden hangisi vardır?",
  o: ["En az iki gerçek kişi tarafından kurulur; tüzel kişiler ortak olamaz", "Tüzel kişiler de ortak olabilir", "Bir kişi tarafından kurulabilir", "Ortakların sorumluluğu sermaye ile sınırlıdır", "Tüzel kişiliği yoktur"],
  a: 0,
  e: "Kollektif şirket EN AZ İKİ GERÇEK KİŞİ tarafından kurulur; TÜZEL KİŞİLER ŞİRKETE ORTAK OLAMAZLAR. Şirket borçlarından ortaklar İKİNCİ DERECEDEN, TÜM MALVARLIKLARI İLE SINIRSIZ VE MÜTESELSİL sorumludur. Şirket TİCARET SİCİLİNE TESCİL İLE TÜZEL KİŞİLİK kazanır.",
  t: "Kollektif Şirket", d: 2
},
{
  q: "Kollektif şirket sözleşmesi hangi şekle tabidir?",
  o: ["Yazılı şekle tabidir; ayrıca imzaların noterce onaylanması veya sözleşmenin ticaret sicili müdürü yahut yardımcısı huzurunda imzalanması şarttır", "Sadece yazılı olması yeterlidir", "Resmi şekilde yapılmalıdır", "Sözlü de yapılabilir", "Sadece noter huzurunda yapılır"],
  a: 0,
  e: "Kollektif şirket sözleşmesi YAZILI şekle tabidir; ayrıca sözleşmedeki İMZALARIN NOTERCE ONAYLANMASI veya şirket sözleşmesinin TİCARET SİCİLİ MÜDÜRÜ YAHUT YARDIMCISI HUZURUNDA İMZALANMASI şarttır.",
  t: "Kollektif Şirket", d: 2
},
{
  q: "Sözleşmesi kanuni şekilde yapılmamış veya zorunlu kayıtlardan biri eksik olan bir kollektif şirket hangi hükümlere tabidir?",
  o: ["Borçlar Kanunu'nun adi şirket hükümlerine", "Anonim şirket hükümlerine", "Yok hükmündedir", "Komandit şirket hükümlerine", "Yine kollektif şirket hükümlerine"],
  a: 0,
  e: "Sözleşmesi kanuni şekilde yapılmamış veya sözleşmeye konması zorunlu olan kayıtlardan biri veya bazıları eksik yahut geçersiz olan bir kollektif şirket, BORÇLAR KANUNU'NUN ADİ ŞİRKET HÜKÜMLERİNE TABİDİR.",
  t: "Kollektif Şirket", d: 3
},
{
  q: "Kollektif şirkette tescil istemi hangi süre içinde yapılmalıdır?",
  o: ["Şirket sözleşmesinin noterlikçe onay tarihinden itibaren 15 gün içinde", "30 gün içinde", "1 ay içinde", "7 gün içinde", "3 ay içinde"],
  a: 0,
  e: "Kollektif şirketi kuranlar, şirket sözleşmesinin noterlikçe onaylı bir suretini ONAY TARİHİNDEN İTİBAREN 15 GÜN içinde şirket merkezinin bulunduğu yerdeki ticaret siciline vererek tescilini istemek zorundadır.",
  t: "Kollektif Şirket", d: 2
},
{
  q: "Kollektif şirkette olağanüstü ve temel işlemler için hangi yetersayı gerekir?",
  o: ["Bütün ortakların oybirliği", "Ortakların çoğunluğu", "Yönetici ortağın kararı", "Sermaye çoğunluğu", "Mahkeme kararı"],
  a: 0,
  e: "Kollektif şirkette OLAĞANÜSTÜ VE TEMEL İŞLEMLERİN yapılabilmesi için BÜTÜN ORTAKLARIN OYBİRLİĞİ ŞARTTIR. Örnek: bağışta bulunmak, kefil olmak, ticari mümessil tayin etmek, konusuna girmiyorsa taşınmaz satmak/almak, şube açmak, başka işletmeyi devralmak, tasfiye/konkordato kararı, yeni ortak almak, amaç-tür-unvan değiştirmek.",
  t: "Kollektif Şirket", d: 2
},
{
  q: "Kollektif şirkette itiraz hakkı ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Yönetim hakkı olmayan ortağın itiraz hakkı yoktur; itiraz hakkı için aynı konuda yönetim hakkına sahip en az iki ortağın varlığı gerekir", "Her ortağın itiraz hakkı vardır", "Sadece sermaye çoğunluğuna sahip ortak itiraz edebilir", "İtiraz hakkı olağanüstü işlemlerde de kullanılır", "İtiraz hakkı yalnızca mahkemede kullanılır"],
  a: 0,
  e: "YÖNETİM HAKKI OLMAYAN BİR ORTAĞIN İTİRAZ HAKKI DA YOKTUR. İtiraz hakkından söz edebilmek için AYNI KONUDA YÖNETİM HAKKINA SAHİP EN AZ İKİ ORTAĞIN VARLIĞI gerekir. OLAĞANÜSTÜ İŞLEMLERDE itiraz hakkından BAHSEDİLEMEZ (oybirliği şart olduğu için). Ancak yönetim hakkı bir ortağa verilmişse ve hileye dayalı işlem yapıyorsa her ortak MAHKEMEYE itiraz edebilir.",
  t: "Kollektif Şirket", d: 3
},
{
  q: "Kollektif şirkette denetim hakkının kapsamı sözleşme ile nasıl düzenlenebilir?",
  o: ["Daha da genişletilebilir ancak daraltılamaz; ortağın bu haktan vazgeçmesi veya yoksun bırakılması mümkün değildir", "Hem genişletilebilir hem daraltılabilir", "Tamamen kaldırılabilir", "Sadece daraltılabilir", "Sözleşme ile düzenlenemez"],
  a: 0,
  e: "Kollektif şirkette YÖNETİM HAKKINA SAHİP OLSUN OLMASIN HER ORTAK denetleme hakkına sahiptir. Denetim hakkının içeriği sözleşme ile DAHA DA GENİŞLETİLEBİLİR, ANCAK DARALTILAMAZ. Ortağın denetleme hakkından VAZGEÇEBİLMESİ ya da bu hakkından YOKSUN BIRAKILABİLMESİ MÜMKÜN DEĞİLDİR.",
  t: "Kollektif Şirket", d: 3
},
{
  q: "Kollektif şirkette rekabet yasağının kapsamı ve yer bakımından sınırı nedir?",
  o: ["Kapsamına şirketin fiilen yaptığı ticari işler türünden işler girer; yer bakımından sınırı şirketin iş ve çıkar çevresidir", "Kapsamı sözleşmedeki işletme konusudur; sınır ülke sınırlarıdır", "Kapsamı tüm ticari işlerdir; sınır yoktur", "Kapsamı sadece aynı ildeki işlerdir", "Rekabet yasağı yoktur"],
  a: 0,
  e: "Rekabet yasağının kapsamına 'ŞİRKETİN YAPTIĞI TİCARİ İŞLER TÜRÜNDEN İŞLER' girer. Sınırın belirlenmesinde sözleşmedeki 'işletme konusu' DEĞİL, ŞİRKETİN FİİLEN YAPTIĞI TİCARİ İŞLER önem arz eder. YER BAKIMINDAN SINIRI ise ŞİRKETİN İŞ VE ÇIKAR ÇEVRESİDİR.",
  t: "Kollektif Şirket", d: 3
},
{
  q: "Kollektif şirkette rekabet yasağına aykırı hareket eden ortağa karşı şirketin hakları arasında aşağıdakilerden hangisi vardır?",
  o: ["Tazminat talebinden vazgeçip ortağın kendi adına yaptığı işleri şirket adına ve hesabına yapılmış sayabilir", "Sadece tazminat talep edebilir", "Sadece ortağı şirketten çıkarabilir", "Hiçbir hakkı yoktur", "Sadece şirketin feshini isteyebilir"],
  a: 0,
  e: "Şirket: tazminat talep edebilir; TAZMİNAT TALEBİNDEN VAZGEÇİP ORTAĞIN KENDİ ADINA YAPTIĞI VEYA HESABINA YAPTIRDIĞI İŞLERİ ŞİRKET ADINA VE HESABINA YAPILMIŞ SAYABİLİR; iş 3. kişi hesabına yapılmışsa elde edilen çıkarların devrini isteyebilir; ortağı ŞİRKETTEN ÇIKARABİLİR. Ayrıca HER BİR ORTAK ŞİRKETİN FESHİNİ talep edebilir.",
  t: "Kollektif Şirket", d: 3
},
{
  q: "Kollektif şirketin kurulması için asgari sermaye miktarı öngörülmüş müdür?",
  o: ["Öngörülmemiştir; ortaklar istedikleri miktarda ve türde sermaye koyabilirler", "50.000 TL asgari sermaye gerekir", "250.000 TL asgari sermaye gerekir", "10.000 TL asgari sermaye gerekir", "Sermaye konulması zorunlu değildir"],
  a: 0,
  e: "TTK, KOLLEKTİF ŞİRKETİN KURULMASI İÇİN ASGARİ BİR SERMAYE MİKTARI ÖNGÖRMEMİŞTİR. Ortaklar şirkete İSTEDİKLERİ MİKTARDA VE TÜRDE sermaye koyabilirler. Ortak sermaye borcunda temerrüde düşerse GECİKME FAİZİ ile zararı ödemek zorundadır; İHTAR ÇEKME ZORUNLULUĞU BULUNMAMAKTADIR.",
  t: "Kollektif Şirket", d: 3
},
{
  q: "Kollektif şirket temsilcilerinin temsil yetkisi nasıl sınırlandırılabilir?",
  o: ["İçerik bakımından sınırlama yapılamaz; ancak tescil ve ilan edilmek koşuluyla birlikte imza (birlikte temsil) yetkisi getirilerek sınırlandırılabilir", "İçerik bakımından serbestçe sınırlandırılabilir", "Hiçbir şekilde sınırlandırılamaz", "Sadece mahkeme kararıyla sınırlandırılabilir", "Sadece süre ile sınırlandırılabilir"],
  a: 0,
  e: "Temsilcilerin işletme konusuna giren iş ve işlemlerdeki temsil yetkilerinde İÇERİK BAKIMINDAN HERHANGİ BİR SINIRLAMA YAPILAMAZ; bu sınırlamalar tescil ve ilan edilemez, yanlışlıkla edilse bile iyiniyetli 3. kişilere karşı ileri sürülemez. Ancak TESCİL VE İLAN EDİLMEK KOŞULUYLA BİRLİKTE TEMSİL yetkisi getirilerek sınırlandırılabilir.",
  t: "Kollektif Şirket", d: 3
},
{
  q: "Kollektif şirket ortaklarının şirket borçlarından sorumluluğu hangi iki durumda doğar?",
  o: ["Şirkete karşı yapılan icra takibinin semeresiz kalması ve şirketin herhangi bir nedenle sona ermesi", "Şirketin kurulması ve tescil edilmesi", "Sadece şirketin iflası", "Sadece icra takibinin başlaması", "Her zaman doğar"],
  a: 0,
  e: "Ortaklar kollektif şirketin borçlarından İKİNCİ DERECEDEN, TÜM MALVARLIĞI İLE (sınırsız) ve MÜTESELSİLEN sorumludur; alacaklılar ortaklara DOĞRUDAN GİDEMEZLER. Sorumluluk iki durumda doğar: (1) ŞİRKETE KARŞI YAPILAN İCRA TAKİBİNİN SEMERESİZ KALMASI, (2) ŞİRKETİN HERHANGİ BİR NEDENLE SONA ERMESİ.",
  t: "Kollektif Şirket", d: 3
},
{
  q: "Kollektif şirket sözleşmesinde ölüme ilişkin özel hüküm YOKSA bir ortağın ölümü halinde ne olur?",
  o: ["Şirketin devamı için ortakların oybirliği ile karar vermeleri şarttır; bir ortak bile istemezse şirket sona erer", "Şirket kendiliğinden mirasçılarla devam eder", "Şirket çoğunluk kararıyla devam eder", "Şirket kendiliğinden sona erer", "Mirasçılar zorunlu olarak ortak olur"],
  a: 0,
  e: "Sözleşmede özel hüküm yoksa şirketin devamı için ORTAKLARIN OYBİRLİĞİ İLE karar vermeleri ŞARTTIR. ORTAKLARDAN BİRİSİ DAHİ ŞİRKETİN DEVAMINI İSTEMEZSE ŞİRKET SONA ERER. Devama karar verildikten sonra mirasçıların girebilmesi için TALEPTE BULUNMALARI ve SAĞ KALAN ORTAKLARIN TAMAMININ ONAYLAMASI gerekir.",
  t: "Kollektif Şirket", d: 3
},
{
  q: "Kollektif şirket sözleşmesinde ölüme ilişkin özel hüküm VARSA mirasçılar seçim haklarını hangi süre içinde kullanmak zorundadır?",
  o: ["Ölüm tarihinden itibaren 3 ay içinde; bu süre içinde kanunen komanditer ortak sayılırlar ve beyanda bulunmazlarsa kollektif şirketi kabul etmiş sayılırlar", "1 ay içinde; beyanda bulunmazlarsa şirketten çıkmış sayılırlar", "3 ay içinde; beyanda bulunmazlarsa komanditer kalırlar", "6 ay içinde", "Süre sınırı yoktur"],
  a: 0,
  e: "Mirasçılar seçim haklarını ÖLÜM TARİHİNDEN İTİBAREN 3 AY içinde kullanmak zorundadırlar. Bu süre içinde KANUNEN KOMANDİTER ORTAK SAYILIRLAR. 3 aylık süre içinde bir beyanda bulunmazlarsa KOLLEKTİF ŞİRKETİ KABUL ETMİŞ SAYILIRLAR.",
  t: "Kollektif Şirket", d: 3
},
{
  q: "Kollektif şirkette payını devreden (ayrılan) ortağın şirket borçlarından sorumluluğu ne zaman zamanaşımına uğrar?",
  o: ["Ayrılmanın TTSG'de yayımlanmasından itibaren 3 yıl geçince", "Devir tarihinden itibaren 2 yıl geçince", "5 yıl geçince", "1 yıl geçince", "Zamanaşımına uğramaz"],
  a: 0,
  e: "Ortak payını DİĞER ORTAKLARIN TÜMÜNÜN ONAYI ile devredebilir. Devralan ortak şirketin O ANA KADARKİ BORÇLARINDAN sorumludur. Devreden (ayrılan) ortağın sorumluluğu, AYRILMANIN TTSG'DE YAYIMLANMASINDAN İTİBAREN 3 YIL geçince zamanaşımına uğrar.",
  t: "Kollektif Şirket", d: 3
},

/* ---------- KOMANDİT ŞİRKET ---------- */
{
  q: "Adi komandit şirkette komandite ve komanditer ortaklar bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Komandite ortaklar ancak gerçek kişi olabilir; komanditer ortaklar hem gerçek hem tüzel kişi olabilir", "İkisi de sadece gerçek kişi olabilir", "İkisi de tüzel kişi olabilir", "Komandite tüzel kişi, komanditer gerçek kişi olabilir", "Sadece komanditer ortaklar tüzel kişi olamaz"],
  a: 0,
  e: "KOMANDİTE ORTAK şirket borçlarından tüm malvarlığı ile ve müteselsilen sorumludur ve ANCAK GERÇEK KİŞİ olabilir. KOMANDİTER ORTAĞIN sorumluluğu şirkete koymayı taahhüt ettiği SERMAYE MİKTARI İLE SINIRLIDIR ve HEM GERÇEK HEM TÜZEL KİŞİ olabilir.",
  t: "Komandit Şirket", d: 2
},
{
  q: "Komanditer ortaklar sermaye olarak neyi koyamazlar?",
  o: ["Kişisel emek ve ticari itibarlarını", "Parayı", "Taşınmazları", "Kıymetli evrakı", "Alacaklarını"],
  a: 0,
  e: "KOMANDİTER ORTAKLAR KİŞİSEL EMEK VE TİCARİ İTİBARLARINI SERMAYE OLARAK KOYAMAZLAR.",
  t: "Komandit Şirket", d: 3
},
{
  q: "Komandit şirkette tescil yükümlülüğü yerine getirilmeksizin şirket adına işlere başlanmışsa ne olur?",
  o: ["Bütün ortaklar giriştikleri işlerden dolayı üçüncü kişilere karşı müteselsilen sorumlu olur", "Sadece komandite ortaklar sorumlu olur", "Sadece komanditer ortaklar sorumlu olur", "Hiç kimse sorumlu olmaz", "Sadece şirket sorumlu olur"],
  a: 0,
  e: "Tescil yükümlülüğü yerine getirilmeksizin şirket adına işlere başlanmışsa, BÜTÜN ORTAKLAR giriştikleri işlerden dolayı ÜÇÜNCÜ KİŞİLERE KARŞI MÜTESELSİLEN SORUMLUDUR.",
  t: "Komandit Şirket", d: 3
},
{
  q: "Komandit şirkette yönetim ve itiraz hakkı kime aittir?",
  o: ["Komandite ortağa; komanditer ortağın yönetim ve itiraz hakkı yoktur", "Komanditer ortağa", "Her iki tür ortağa eşit olarak", "Sadece sermaye çoğunluğuna sahip ortağa", "Genel kurula"],
  a: 0,
  e: "Komandit şirkette YÖNETİM HAKKI KOMANDİTE ORTAĞA aittir; komandite ortakların yönetim hakkı konusunda KOLLEKTİF ŞİRKETE ilişkin hükümler uygulanır. KOMANDİTER ORTAĞIN YÖNETİM VE İTİRAZ HAKKI YOKTUR. İtiraz hakkı yönetim hakkının ayrılmaz parçası olduğu için yönetim hakkına sahip komandite ortaklara aittir.",
  t: "Komandit Şirket", d: 2
},

/* ---------- ANONİM ŞİRKET ---------- */
{
  q: "TTK md. 329'a göre anonim şirket nedir ve asgari esas sermayesi ne kadardır?",
  o: ["Sermayesi belirli ve paylara bölünmüş, borçlarından dolayı yalnız malvarlığıyla sorumlu şirket; esas sermaye en az 250.000 TL (kayıtlı sermaye sistemini benimsemiş halka açık olmayanlarda 500.000 TL)", "Sermayesi belirli şirket; en az 50.000 TL", "Ortakları sınırsız sorumlu şirket; en az 250.000 TL", "Sermayesi paylara bölünmüş şirket; en az 100.000 TL", "Ortakları sınırlı sorumlu şirket; en az 500.000 TL"],
  a: 0,
  e: "TTK md. 329'a göre ANONİM ŞİRKET, sermayesi belirli ve paylara bölünmüş olan, borçlarından dolayı YALNIZ MALVARLIĞIYLA sorumlu bulunan şirkettir. Esas sermayesi en az 250.000 TL, KAYITLI SERMAYE SİSTEMİNİ BENİMSEMİŞ HALKA AÇIK OLMAYAN AŞ'lerde 500.000 TL'den az olamaz.",
  t: "Anonim Şirket", d: 2
},
{
  q: "Anonim şirkete sermaye olarak konulamayacak değerler hangileridir?",
  o: ["Hizmet edimleri, kişisel emek, ticari itibar ve vadesi gelmemiş alacaklar", "Taşınmazlar", "Fikri mülkiyet hakları", "Kıymetli evrak", "Ticari işletmeler"],
  a: 0,
  e: "Anonim şirkete HİZMET EDİMLERİ, KİŞİSEL EMEK, TİCARİ İTİBAR ve VADESİ GELMEMİŞ ALACAKLAR sermaye olarak KONULAMAZ. (Limited şirkette de aynı kural geçerlidir.)",
  t: "Anonim Şirket", d: 2
},
{
  q: "Anonim şirket kaç kişi ile kurulabilir ve payın itibari değeri en az ne kadardır?",
  o: ["Bir veya daha fazla pay sahibi kurucu ile; payın itibari değeri en az 1 kuruş", "En az beş kurucu ile; payın itibari değeri en az 1 TL", "En az iki kurucu ile; payın itibari değeri en az 25 TL", "Bir kurucu ile; payın itibari değeri en az 1 TL", "En az üç kurucu ile; payın itibari değeri en az 1 kuruş"],
  a: 0,
  e: "TTK md. 338'e göre, özel kanunlarda aksine hüküm bulunmadığı takdirde anonim şirket BİR VEYA DAHA FAZLA PAY SAHİBİ KURUCU tarafından kurulabilir. PAYIN İTİBARİ DEĞERİ EN AZ 1 KURUŞTUR ve ancak birer kuruş ve katları olarak yükseltilebilir.",
  t: "Anonim Şirket", d: 2
},
{
  q: "Kurucuların, yönetim kurulu üyelerinin ve denetçilerin kuruluştan doğan sorumlulukları ne kadar süre sulh ve ibra yoluyla kaldırılamaz?",
  o: ["Şirketin tescili tarihinden itibaren 4 yıl", "2 yıl", "3 yıl", "5 yıl", "10 yıl"],
  a: 0,
  e: "Kurucuların, yönetim kurulu üyelerinin, denetçilerin, şirketin kuruluşundan ve sermaye artırımından doğan sorumlulukları, ŞİRKETİN TESCİLİ TARİHİNDEN İTİBAREN 4 YIL GEÇMEDİKÇE SULH VE İBRA YOLUYLA KALDIRILAMAZ.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette ayni sermayeye kim tarafından değer biçilir?",
  o: ["Şirket merkezinin bulunacağı yerdeki asliye ticaret mahkemesince atanan bilirkişilerce", "Kurucular tarafından", "Genel kurul tarafından", "Ticaret sicili müdürlüğü tarafından", "Yeminli mali müşavir tarafından"],
  a: 0,
  e: "Anonim şirkette paydaşlar paranın dışında, üzerlerinde sınırlı ayni hak, haciz ve tedbir bulunmayan, nakden değerlendirilebilen ve devrolunabilen tüm malvarlığı unsurlarını AYNİ SERMAYE olarak koyabilirler. Konulan ayni sermayeye ŞİRKET MERKEZİNİN BULUNACAĞI YERDEKİ ASLİYE TİCARET MAHKEMESİNCE ATANAN BİLİRKİŞİLERCE değer biçilir.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette nakit olarak taahhüt edilen payların ödenmesi nasıl olur?",
  o: ["İtibari değerlerinin en az %25'i tescilden önce, gerisi şirketin tescilini izleyen 24 ay içinde ödenir", "Tamamı tescilden önce ödenir", "%50'si tescilden önce, gerisi 12 ay içinde", "%25'i tescilden önce, gerisi 12 ay içinde", "Tamamı tescilden sonra 24 ay içinde"],
  a: 0,
  e: "Nakit olarak taahhüt edilen payların itibari değerlerinin EN AZ %25'İ TESCİLDEN ÖNCE, gerisinin de ŞİRKETİN TESCİLİNİ İZLEYEN 24 AY içinde ödenmesi zorunludur.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirket esas sözleşmesi hangi süre içinde tescil ve ilan olunur?",
  o: ["Bakanlık izniyle kurulacaklarda izin alınmasını, diğerlerinde şirketin kuruluşunu izleyen 30 gün içinde", "15 gün içinde", "1 hafta içinde", "3 ay içinde", "60 gün içinde"],
  a: 0,
  e: "Şirket esas sözleşmesinin tamamı, Bakanlığın izniyle kurulacak AŞ'lerde İZİN ALINMASINI, diğer şirketlerde ŞİRKETİN KURULUŞUNU İZLEYEN 30 GÜN içinde şirket merkezinin bulunduğu yer ticaret siciline tescil ve TTSG'de ilan olunur. Şirket TESCİL İLE TÜZEL KİŞİLİK kazanır.",
  t: "Anonim Şirket", d: 2
},
{
  q: "Anonim şirkette olağan genel kurul toplantısı hangi süre içinde yapılmak zorundadır?",
  o: ["Her faaliyet dönemi sonundan itibaren 3 ay içinde ve yılda en az 1 defa", "Her yıl 6 ay içinde", "Yılda en az 2 defa", "Her faaliyet dönemi sonundan itibaren 1 ay içinde", "Süre sınırı yoktur"],
  a: 0,
  e: "OLAĞAN GENEL KURUL toplantısının her faaliyet dönemi sonundan itibaren 3 AY içinde ve YILDA EN AZ 1 DEFA yapılması zorunludur. OLAĞANÜSTÜ toplantılar herhangi bir süreye bağlı olmaksızın gerektiğinde yapılır.",
  t: "Anonim Şirket", d: 2
},
{
  q: "Anonim şirkette azlık (azınlık) genel kurulu toplantıya çağırmayı hangi oranla ve nasıl isteyebilir?",
  o: ["Sermayenin en az 1/10'unu oluşturan pay sahipleri, yönetim kurulundan noter aracılığıyla", "Sermayenin 1/4'ünü oluşturan pay sahipleri, doğrudan", "Sermayenin 1/20'sini oluşturan pay sahipleri, mahkeme izniyle", "Sermayenin 1/10'unu oluşturan pay sahipleri, mahkeme kararıyla", "Tek bir pay sahibi doğrudan"],
  a: 0,
  e: "AZLIK (AZINLIK): SERMAYENİN EN AZ 1/10'UNU oluşturan pay sahipleri, yönetim kurulundan genel kurulu toplantıya çağırmasını NOTER ARACILIĞIYLA isteyebilirler. Ayrıca yönetim kurulunun devamlı toplanamaması halinde MAHKEMENİN İZNİYLE TEK BİR PAY SAHİBİ de çağırabilir.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette genel kurul toplantıya çağrı en az kaç gün önce yapılmalıdır?",
  o: ["İlan ve toplantı günleri hariç olmak üzere toplantı tarihinden en az 2 hafta önce", "1 hafta önce", "15 gün önce (ilan ve toplantı günleri dahil)", "1 ay önce", "3 gün önce"],
  a: 0,
  e: "Genel kurul toplantıya, esas sözleşmede gösterilen şekilde, ŞİRKETİN İNTERNET SİTESİNDE ve TTSG'de yayımlanan ilanla çağrılır. Bu çağrının, İLAN VE TOPLANTI GÜNLERİ HARİÇ olmak üzere, toplantı tarihinden EN AZ 2 HAFTA ÖNCE yapılması gerekir.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette olağan genel kurul toplantı nisabı nedir?",
  o: ["Sermayenin en az 1/4'ünü karşılayan payların sahiplerinin varlığıyla toplanır; ikinci toplantıda nisap aranmaz", "Sermayenin 1/2'si; ikinci toplantıda 1/3", "Sermayenin 1/3'ü; ikinci toplantıda nisap aranmaz", "Sermayenin tamamı", "Nisap aranmaz"],
  a: 0,
  e: "Genel kurul, aksine daha ağır nisap öngörülmemişse SERMAYENİN EN AZ 1/4'ÜNÜ karşılayan payların sahiplerinin veya temsilcilerinin varlığıyla toplanır. İlk toplantıda bu nisaba ulaşılamazsa İKİNCİ TOPLANTIDA NİSAP ARANMAZ. Kararlar toplantıda hazır bulunan oyların ÇOĞUNLUĞU ile alınır.",
  t: "Anonim Şirket", d: 2
},
{
  q: "Anonim şirkette esas sözleşmeyi değiştiren kararlar için toplantı nisabı nedir?",
  o: ["Sermayenin en az 1/2'sinin temsil edildiği genel kurul; ikinci toplantıda en az 1/3", "Sermayenin 1/4'ü; ikinci toplantıda nisap aranmaz", "Sermayenin %75'i", "Sermayenin tamamı", "Sermayenin 1/3'ü; ikinci toplantıda 1/4"],
  a: 0,
  e: "Kanunda veya esas sözleşmede aksine hüküm yoksa ESAS SÖZLEŞMEYİ DEĞİŞTİREN kararlar, şirket sermayesinin EN AZ 1/2'SİNİN temsil edildiği genel kurulda, toplantıda mevcut oyların çoğunluğu ile alınır. İlk toplantıda nisap elde edilemezse EN GEÇ 1 AY içinde ikinci toplantı yapılabilir; ikinci toplantı nisabı sermayenin EN AZ 1/3'ÜDÜR.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Hangi kararlar sermayenin tümünü oluşturan payların sahiplerinin oybirliği ile alınır?",
  o: ["Bilanço zararlarının kapatılması için yükümlülük koyan kararlar ile şirket merkezinin yurt dışına taşınmasına ilişkin sözleşme değişikliği kararları", "Esas sözleşme değişikliği kararları", "İşletme konusunun değiştirilmesi", "İmtiyazlı pay oluşturulması", "Şirketin feshi"],
  a: 0,
  e: "BİLANÇO ZARARLARININ KAPATILMASI İÇİN YÜKÜMLÜLÜK VE İKİNCİL YÜKÜMLÜLÜK KOYAN kararlar ile ŞİRKETİN MERKEZİNİN YURT DIŞINA TAŞINMASINA ilişkin sözleşme değişikliği kararları, SERMAYENİN TÜMÜNÜ oluşturan payların sahiplerinin OYBİRLİĞİ ile alınır. İzleyen toplantılarda da aynı nisap aranır.",
  t: "Anonim Şirket", d: 3
},
{
  q: "İşletme konusunun tamamen değiştirilmesi, imtiyazlı pay oluşturulması ve nama yazılı payların devrinin sınırlandırılması kararları hangi nisapla alınır?",
  o: ["Sermayenin en az %75'ini oluşturan payların sahiplerinin olumlu oylarıyla", "Sermayenin 1/2'si ile", "Sermayenin 1/3'ü ile", "Oybirliği ile", "Sermayenin 1/4'ü ile"],
  a: 0,
  e: "ŞİRKETİN İŞLETME KONUSUNUN TAMAMEN DEĞİŞTİRİLMESİ, İMTİYAZLI PAY OLUŞTURULMASI ve NAMA YAZILI PAYLARIN DEVRİNİN SINIRLANDIRILMASINA ilişkin sözleşme değişikliği kararları SERMAYENİN EN AZ %75'İNİ oluşturan payların sahiplerinin OLUMLU OYLARIYLA alınır. İzleyen toplantılarda da aynı nisap aranır.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Pay sahiplerinin genel kurul kararının iptali davası açabilmesi için hangi koşullar gerekir?",
  o: ["Toplantıda hazır bulunup olumsuz oy vermeleri ve muhalefetlerini tutanağa geçirtmeleri", "Sadece pay sahibi olmaları", "Sermayenin 1/10'una sahip olmaları", "Toplantıya katılmamaları", "Yönetim kurulu üyesi olmaları"],
  a: 0,
  e: "PAY SAHİPLERİNİN iptal davası açabilmeleri için TOPLANTIDA HAZIR BULUNUP OLUMSUZ OY VERMELERİ ve MUHALEFETLERİNİ TUTANAĞA GEÇİRTMELERİ gerekir. İptal davası ayrıca yönetim kurulu, kişisel sorumluluğu doğacaksa yönetim kurulu üyeleri ve SPK'ya tabi HAAŞ'lerde SPK tarafından da açılabilir.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Genel kurul kararının iptali davası hangi süre içinde ve nerede açılır?",
  o: ["Kararın alındığı tarihten itibaren 3 ay içinde şirket merkezinin bulunduğu yer asliye ticaret mahkemesinde", "1 ay içinde asliye hukuk mahkemesinde", "6 ay içinde asliye ticaret mahkemesinde", "1 yıl içinde asliye ticaret mahkemesinde", "3 ay içinde icra mahkemesinde"],
  a: 0,
  e: "İptal davası, KARARIN ALINDIĞI TARİHTEN İTİBAREN 3 AY içinde ŞİRKET MERKEZİNİN BULUNDUĞU YER ASLİYE TİCARET MAHKEMESİNDE açılmalıdır. İptal davası ANONİM ŞİRKET TÜZEL KİŞİLİĞİNE KARŞI açılır.",
  t: "Anonim Şirket", d: 2
},
{
  q: "TTK md. 359'a göre anonim şirket yönetim kurulu kaç kişiden oluşabilir ve üyeler en çok kaç yıl için seçilir?",
  o: ["1 kişiden oluşabilir; üyeler en çok 3 yıl için seçilir", "En az 3 kişiden oluşur; üyeler en çok 3 yıl için seçilir", "En az 5 kişiden oluşur; üyeler en çok 5 yıl için seçilir", "1 kişiden oluşabilir; üyeler en çok 1 yıl için seçilir", "En az 2 kişiden oluşur; üyeler süresiz seçilir"],
  a: 0,
  e: "TTK md. 359'a göre anonim şirket yönetim kurulu 1 KİŞİDEN OLUŞABİLİR; bu sayı esas sözleşmeyle çoğaltılabilir. Üyeler EN ÇOK 3 YIL için seçilebilirler ve esas sözleşmede aksine hüküm yoksa TEKRAR SEÇİLEBİLİRLER.",
  t: "Anonim Şirket", d: 2
},
{
  q: "Anonim şirket yönetim kurulu üyeliğinde aranan nitelikler bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Pay sahibi olma zorunluluğu yoktur; tüzel kişiler de üye seçilebilir; üyelerin tam ehliyetli olması şarttır", "Pay sahibi olmak zorunludur", "Sadece gerçek kişiler üye olabilir", "Ayırt etme gücü yeterlidir", "Sadece tacirler üye olabilir"],
  a: 0,
  e: "Yönetim kurulu üyeliğine seçilebilmek için PAY SAHİBİ OLMA ZORUNLULUĞU YOKTUR. Gerçek kişilerin yanında TÜZEL KİŞİLER DE yönetim kurulu üyesi seçilebilir. Yönetim kurulu üyelerinin ve tüzel kişi adına tescil edilen gerçek kişinin TAM EHLİYETLİ OLMASI ŞARTTIR.",
  t: "Anonim Şirket", d: 2
},
{
  q: "TTK md. 370'e göre anonim şirkette temsil yetkisi nasıl kullanılır?",
  o: ["Esas sözleşmede aksi öngörülmemiş veya yönetim kurulu tek kişiden oluşmuyorsa temsil yetkisi çift imza ile kullanılmak üzere yönetim kuruluna aittir", "Her üye tek başına temsil eder", "Sadece genel kurul temsil eder", "Sadece müdürler temsil eder", "Temsil yetkisi devredilemez"],
  a: 0,
  e: "TTK md. 370'e göre esas sözleşmede aksi öngörülmemiş veya yönetim kurulu tek kişiden oluşmuyorsa, TEMSİL YETKİSİ ÇİFT İMZA İLE kullanılmak üzere YÖNETİM KURULUNA aittir. Temsile yetkili olanların 3. kişilerle İŞLETME KONUSU DIŞINDA yaptığı işlemler DE ŞİRKETİ BAĞLAR.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette yönetim kurulu üyesinin şirketle işlem yapma yasağına aykırılığın yaptırımı nedir?",
  o: ["Şirket yapılan işlemin batıl olduğunu ileri sürebilir", "İşlem geçerlidir ancak tazminat ödenir", "Üye görevden alınır", "İşlem kendiliğinden geçersizdir", "Hiçbir yaptırım yoktur"],
  a: 0,
  e: "Yönetim kurulu üyesi, GENEL KURULDAN İZİN ALMADAN şirketle kendisi veya başkası adına herhangi bir işlem yapamaz; aksi halde ŞİRKET YAPILAN İŞLEMİN BATIL OLDUĞUNU İLERİ SÜREBİLİR.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette şirkete borçlanma yasağı kimleri kapsar?",
  o: ["Pay sahibi olmayan yönetim kurulu üyeleri ile bunların pay sahibi olmayan alt-üst soyundan biri, eşi veya 3. dereceye kadar kan ve kayın hısımları", "Tüm yönetim kurulu üyeleri", "Sadece pay sahibi yönetim kurulu üyeleri", "Tüm pay sahipleri", "Sadece denetçiler"],
  a: 0,
  e: "PAY SAHİBİ OLMAYAN yönetim kurulu üyeleri ile yönetim kurulu üyelerinin PAY SAHİBİ OLMAYAN ALT VE ÜST SOYUNDAN BİRİ ya da EŞİ yahut 3. DERECEYE KADAR (3. derece dahil) KAN VE KAYIN HISIMLARINDAN BİRİ şirkete NAKİT BORÇLANAMAZLAR. Bu kişiler için şirket kefalet, garanti ve teminat veremez.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette yönetim kurulu toplantı ve karar nisabı nedir?",
  o: ["Üye tam sayısının çoğunluğu ile toplanır, kararlarını toplantıda hazır bulunan üyelerin çoğunluğu ile alır", "Üye tam sayısının 2/3'ü ile toplanır", "Oybirliği gerekir", "Üye tam sayısının 1/4'ü ile toplanır", "Nisap aranmaz"],
  a: 0,
  e: "Esas sözleşmede aksine ağırlaştırıcı hüküm yoksa yönetim kurulu ÜYE TAM SAYISININ ÇOĞUNLUĞU ile toplanır ve kararlarını TOPLANTIDA HAZIR BULUNAN ÜYELERİN ÇOĞUNLUĞU ile alır. Yönetim kurulu üyeleri BİRBİRLERİNİ TEMSİLEN OY VEREMEZ ve toplantılara VEKİL ARACILIĞIYLA KATILAMAZLAR.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette bir paya en çok kaç oy hakkı tanınabilir ve hangi kararlarda oyda imtiyaz kullanılamaz?",
  o: ["En çok 15 oy; esas sözleşme değişikliği, ibra ve sorumluluk davası açılması kararlarında oyda imtiyaz kullanılamaz", "En çok 10 oy; tüm kararlarda kullanılabilir", "En çok 15 oy; tüm kararlarda kullanılabilir", "En çok 5 oy; sadece fesih kararında kullanılamaz", "Sınır yoktur"],
  a: 0,
  e: "Anonim şirkette bir paya EN ÇOK 15 OY HAKKI tanınabilir. ESAS SÖZLEŞME DEĞİŞİKLİĞİ, İBRA ve SORUMLULUK DAVASI AÇILMASI kararlarında OYDA İMTİYAZ KULLANILAMAZ.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette itibari değerinden yüksek bedelle çıkarılan paylara ne ad verilir?",
  o: ["Agiolu pay", "İmtiyazlı pay", "Katılma intifa senedi", "Nama yazılı pay", "Bedelsiz pay"],
  a: 0,
  e: "Anonim şirkette İTİBARİ DEĞERİNDEN AŞAĞI bedelle pay ÇIKARILAMAZ. Payların itibari değerinden YÜKSEK bir bedelle çıkarılabilmeleri için esas sözleşmede hüküm veya genel kurul kararı bulunmalıdır; bu tip paylara AGİOLU PAY adı verilir.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirketin sahiplerine ortaklık hakkı vermeyen ancak kâr payı, tasfiye payı ve rüçhan hakkı sağlayan senedi hangisidir?",
  o: ["Katılma intifa senedi", "İmtiyazlı pay senedi", "Nama yazılı pay senedi", "Tahvil", "Agiolu pay"],
  a: 0,
  e: "Anonim şirket, sahiplerine ORTAKLIK HAKKI VERMEYEN, ancak KÂR PAYI, TASFİYE PAYI ve YENİ PAYLARI EDİNMEDE RÜÇHAN HAKKI sağlayan, nakit karşılığı satılmak üzere KATILMA İNTİFA SENEDİ çıkarabilir.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette kâr dağıtımı konusunda karar ve teklif yetkileri kime aittir?",
  o: ["Karar yetkisi genel kurulda, kâr dağıtım teklifinde bulunma yetkisi yönetim kurulundadır", "İkisi de genel kuruldadır", "İkisi de yönetim kurulundadır", "Karar yönetim kurulunda, teklif genel kuruldadır", "Denetçide"],
  a: 0,
  e: "Kârın dağıtılıp dağıtılmayacağı ve miktarı konusunda KARAR YETKİSİ GENEL KURULDADIR. Ancak KÂR DAĞITIM TEKLİFİNDE BULUNMA YETKİSİ YÖNETİM KURULUNDADIR. Esas sözleşmede aksi yoksa kâr payı, pay sahibinin şirkete yaptığı ödemelerle ORANTILI olarak hesaplanır.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette azlık hakları arasında aşağıdakilerden hangisi vardır?",
  o: ["Bilanço görüşmelerini erteletme ve özel denetçi atanmasını sağlama", "Yönetim kurulu üyesi atama", "Esas sözleşmeyi tek başına değiştirme", "Şirketi temsil etme", "Kâr dağıtımına karar verme"],
  a: 0,
  e: "AZLIK HAKLARI: genel kurulu toplantıya davet ve gündeme madde ekletme, ÖZEL DENETÇİ ATANMASINI SAĞLAMA, BİLANÇO GÖRÜŞMELERİNİ ERTELETME, denetçinin görevden alınması ve yeni denetçi atanması, nama yazılı hisse senedi basılmasını isteme, haklı sebeplerle şirketin feshini isteme, kurucuların ibrasına engel olma.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette genel kurulun şirketin feshine karar verebilmesi için hangi oy gerekir?",
  o: ["Sermayenin en az %75'ini oluşturan payların sahiplerinin olumlu oyu", "Sermayenin 1/2'sinin olumlu oyu", "Oybirliği", "Sermayenin 1/3'ünün olumlu oyu", "Toplantıda hazır bulunan oyların çoğunluğu"],
  a: 0,
  e: "Genel kurulun şirketin feshine karar verebilmesi için SERMAYENİN EN AZ %75'İNİ oluşturan payların sahiplerinin veya temsilcilerinin OLUMLU OYU gerekir.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirket, son yıllık bilançoya göre sermaye ile kanuni yedek akçeler toplamının ne kadarının zarar sebebiyle karşılıksız kalması halinde sona erer?",
  o: ["2/3'ünün (ve genel kurulun gerekli kararı almaması halinde)", "1/2'sinin", "1/3'ünün", "Tamamının", "1/4'ünün"],
  a: 0,
  e: "Son yıllık bilançoya göre SERMAYE İLE KANUNİ YEDEK AKÇELER TOPLAMININ 2/3'ÜNÜN zarar sebebiyle karşılıksız kalmasına rağmen genel kurulun, GERİYE KALAN SERMAYE İLE YETİNMEYE veya EKSİLEN SERMAYENİN TAMAMLANMASINA yönelik bir karar almamış olması bir sona erme sebebidir.",
  t: "Anonim Şirket", d: 3
},
{
  q: "Anonim şirkette denetçi kim tarafından seçilir?",
  o: ["Şirket genel kurulunca; topluluk denetçisi ana şirketin genel kurulunca", "Yönetim kurulunca", "Ticaret Bakanlığınca", "Mahkemece", "Kamu Gözetimi Kurumunca"],
  a: 0,
  e: "DENETÇİ, ŞİRKET GENEL KURULUNCA; TOPLULUK DENETÇİSİ, ANA ŞİRKETİN GENEL KURULUNCA seçilir. Denetçi sözleşmeyi feshettiğini ihbar ederse YÖNETİM KURULU HEMEN geçici bir denetçi seçmek ve genel kurulun onayına sunmak zorundadır. Denetime tabi olduğu halde denetlettirilmemiş finansal tablolar DÜZENLENMEMİŞ HÜKMÜNDEDİR.",
  t: "Anonim Şirket", d: 3
},

/* ---------- LİMİTED ŞİRKET ---------- */
{
  q: "Limited şirkette ortak sayısı ve asgari esas sermaye ne kadardır?",
  o: ["Ortak sayısı 50'yi aşamaz; esas sermaye en az 50.000 TL", "Ortak sayısı 20'yi aşamaz; esas sermaye en az 25.000 TL", "Ortak sayısı sınırsızdır; esas sermaye en az 50.000 TL", "Ortak sayısı 50'yi aşamaz; esas sermaye en az 250.000 TL", "Ortak sayısı 100'ü aşamaz; esas sermaye en az 10.000 TL"],
  a: 0,
  e: "Limited şirket bir veya daha çok gerçek veya tüzel kişi tarafından kurulabilir. ORTAKLARIN SAYISI 50'Yİ AŞAMAZ. Esas sermayesi EN AZ 50.000 TL'dir; bu tutar Cumhurbaşkanlığı kararı ile ON KATINA kadar artırılabilir.",
  t: "Limited Şirket", d: 2
},
{
  q: "Limited şirkette esas sermaye paylarının itibari değeri en az ne kadar olabilir?",
  o: ["En az 25 TL; değerlerin 25 TL veya katları olması şarttır (şirketin durumunun iyileştirilmesi amacıyla altına inilebilir)", "En az 1 kuruş", "En az 1 TL", "En az 100 TL", "Sınır yoktur"],
  a: 0,
  e: "Esas sermaye paylarının itibari değerleri EN AZ 25 TL olarak belirlenebilir. ŞİRKETİN DURUMUNUN İYİLEŞTİRİLMESİ amacıyla bu değerin altına inilebilir. Esas sermaye paylarının itibari değerleri FARKLI olabilir; ancak değerlerin 25 TL VEYA BUNUN KATLARI olması şarttır.",
  t: "Limited Şirket", d: 3
},
{
  q: "Limited şirkette ortakların sorumluluğu nasıldır?",
  o: ["Şirket borçlarından sorumlu değildir; sorumlulukları taahhüt ettikleri esas sermaye paylarını ödemek ve ek ödeme-yan edim yükümlerini yerine getirmek bakımından şirkete karşıdır", "Şirket borçlarından sınırsız sorumludur", "Şirket borçlarından müteselsilen sorumludur", "İkinci dereceden sorumludur", "Sadece kamu borçlarından sorumludur"],
  a: 0,
  e: "Limited şirkette ORTAKLAR ŞİRKET BORÇLARINDAN SORUMLU DEĞİLDİR. Sorumlulukları, TAAHHÜT ETTİKLERİ ESAS SERMAYE PAYLARINI ÖDEMEK ve şirket sözleşmesinde öngörülen EK ÖDEME VE YAN EDİM YÜKÜMLÜLÜKLERİNİ yerine getirmek bakımından ŞİRKETE KARŞIDIR.",
  t: "Limited Şirket", d: 2
},
{
  q: "Limited şirket sözleşmesi hangi şekle tabidir?",
  o: ["Yazılı şekilde yapılması ve kurucular tarafından ticaret sicili müdürlüğünde yetkilendirilmiş personelin huzurunda imzalanması şarttır", "Noter onayı şarttır", "Sadece yazılı olması yeterlidir", "Resmi şekilde yapılır", "Sözlü de olabilir"],
  a: 0,
  e: "Limited şirket esas sözleşmesinin YAZILI şekilde yapılması ve kurucular tarafından TİCARET SİCİLİ MÜDÜRLÜĞÜNDE YETKİLENDİRİLMİŞ PERSONELİN HUZURUNDA İMZALANMASI ŞARTTIR. Sözleşme, imzalandığı tarihi izleyen 30 GÜN içinde tescil ve ilan olunur.",
  t: "Limited Şirket", d: 3
},
{
  q: "Limited şirkette olağan genel kurul toplantısı ve çağrı süresi nasıldır?",
  o: ["Her yıl hesap döneminin sona ermesinden itibaren 3 ay içinde yapılır; toplantı gününden en az 15 gün önce çağrılır", "6 ay içinde yapılır; 2 hafta önce çağrılır", "3 ay içinde yapılır; 2 hafta önce çağrılır", "1 ay içinde yapılır; 15 gün önce çağrılır", "Süre sınırı yoktur"],
  a: 0,
  e: "Limited şirkette genel kurul MÜDÜRLER tarafından toplantıya çağrılır. OLAĞAN genel kurul toplantısının her yıl HESAP DÖNEMİNİN SONA ERMESİNDEN İTİBAREN 3 AY içinde yapılması zorunludur. Genel kurulun TOPLANTI GÜNÜNDEN EN AZ 15 GÜN ÖNCE toplantıya çağrılması zorunludur.",
  t: "Limited Şirket", d: 3
},
{
  q: "Limited şirkette olağan karar yetersayısı nedir?",
  o: ["Kanun veya sözleşmede aksi öngörülmedikçe, seçim kararları dahil tüm kararlar toplantıda temsil edilen oyların salt çoğunluğu ile alınır", "Oybirliği gerekir", "Temsil edilen oyların 2/3'ü gerekir", "Sermayenin tamamının çoğunluğu gerekir", "Sermayenin 1/4'ü gerekir"],
  a: 0,
  e: "Kanun veya şirket sözleşmesinde aksi öngörülmediği takdirde, SEÇİM KARARLARI DAHİL tüm genel kurul kararları, TOPLANTIDA TEMSİL EDİLEN OYLARIN SALT ÇOĞUNLUĞU ile alınır.",
  t: "Limited Şirket", d: 2
},
{
  q: "Limited şirkette ağırlaştırılmış yetersayı gerektiren kararlar hangi nisapla alınır?",
  o: ["Temsil edilen oyların en az 2/3'ünün ve oy hakkı bulunan esas sermayenin tamamının salt çoğunluğunun bir arada bulunması halinde", "Sadece temsil edilen oyların 2/3'ü ile", "Oybirliği ile", "Sermayenin %75'i ile", "Salt çoğunlukla"],
  a: 0,
  e: "Ağırlaştırılmış yetersayı gerektiren kararlar (işletme konusunun değiştirilmesi, oyda imtiyazlı pay öngörülmesi, pay devrinin sınırlandırılması, sermaye artırımı, rüçhan hakkının sınırlandırılması, merkezin değiştirilmesi, rekabet yasağına onay, ortağın çıkarılması, şirketin feshi) TEMSİL EDİLEN OYLARIN EN AZ 2/3'ÜNÜN ve OY HAKKI BULUNAN ESAS SERMAYENİN TAMAMININ SALT ÇOĞUNLUĞUNUN bir arada bulunması halinde alınabilir.",
  t: "Limited Şirket", d: 3
},
{
  q: "Limited şirket sözleşmesi, aksi öngörülmediği takdirde hangi oranla değiştirilebilir?",
  o: ["Esas sermayenin 2/3'ünü temsil eden ortakların kararıyla", "Esas sermayenin 1/2'sini temsil eden ortakların kararıyla", "Oybirliğiyle", "Esas sermayenin %75'ini temsil eden ortakların kararıyla", "Salt çoğunlukla"],
  a: 0,
  e: "Limited şirket sözleşmesi, AKSİ ÖNGÖRÜLMEDİĞİ TAKDİRDE ESAS SERMAYENİN 2/3'ÜNÜ TEMSİL EDEN ORTAKLARIN KARARIYLA değiştirilebilir.",
  t: "Limited Şirket", d: 3
},
{
  q: "Limited şirkette müdürlerin atanması bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Bir müdür atanacaksa onun, birden fazla müdür atanacaksa en az birisinin şirket ortakları arasından seçilmesi gerekir; tüzel kişiler de müdür olabilir", "Tüm müdürler ortak olmalıdır", "Müdürler ortak olamaz", "Sadece gerçek kişiler müdür olabilir", "Müdür atanması zorunlu değildir"],
  a: 0,
  e: "Şirket sözleşmesi ile yönetim ve temsil, müdür sıfatını taşıyan bir veya birden fazla ORTAĞA, TÜM ORTAKLARA ya da ÜÇÜNCÜ KİŞİLERE verilebilir. Şirkete BİR MÜDÜR atanacaksa ONUN, BİRDEN FAZLA müdür atanacaksa EN AZ BİRİSİNİN ŞİRKET ORTAKLARI ARASINDAN seçilmesi gerekir. TÜZEL KİŞİLER DE müdür olarak atanabilir.",
  t: "Limited Şirket", d: 3
},
{
  q: "Limited şirkette ticari temsilci ve ticari vekiller nasıl atanır?",
  o: ["Sözleşmede aksi öngörülmemişse ancak genel kurul kararı ile atanabilir; kural olarak müdürler atayamaz", "Müdürler serbestçe atayabilir", "Sadece mahkeme kararıyla atanır", "Ortakların oybirliğiyle atanır", "Atanamazlar"],
  a: 0,
  e: "Limited şirkette, sözleşmede aksi öngörülmemişse TİCARİ TEMSİLCİLER VE TİCARİ VEKİLLER ANCAK GENEL KURUL KARARI İLE atanabilirler ve yetkileri genel kurul tarafından sınırlandırılabilir. Dolayısıyla KURAL OLARAK MÜDÜRLER TİCARİ MÜMESSİL VE TİCARİ VEKİL ATAYAMAZLAR. Ancak müdürler veya çoğunluğu bu kişileri HER ZAMAN GÖREVDEN UZAKLAŞTIRABİLİR.",
  t: "Limited Şirket", d: 3
},
{
  q: "Limited şirkette müdürlerin görevden alınması ve yetkilerinin sınırlandırılması nasıl olur?",
  o: ["Genel kurul görevden alabilir ve yetkileri sınırlayabilir; ayrıca her ortak haklı sebeplerin varlığında mahkemeden kaldırılmasını/sınırlandırılmasını isteyebilir", "Sadece genel kurul yapabilir", "Sadece mahkeme yapabilir", "Müdürler kendileri karar verir", "Görevden alınamazlar"],
  a: 0,
  e: "GENEL KURUL, müdürü veya müdürleri GÖREVDEN ALABİLİR, yönetim hakkını ve temsil yetkisini SINIRLAYABİLİR. Diğer yandan HER ORTAK DA, HAKLI SEBEPLERİN VARLIĞI HALİNDE, yöneticilerin yönetim hakkının ve temsil yetkilerinin KALDIRILMASINI VEYA SINIRLANDIRILMASINI MAHKEMEDEN İSTEYEBİLİR.",
  t: "Limited Şirket", d: 3
},
{
  q: "Limited şirkette yönetim ve temsil ile yetkilendirilen kişinin görevini yerine getirirken işlediği haksız fiilden kim sorumludur?",
  o: ["Şirket", "Sadece o kişi", "Ortaklar müteselsilen", "Genel kurul", "Hiç kimse"],
  a: 0,
  e: "Şirketin YÖNETİMİ VE TEMSİLİ İLE YETKİLENDİRİLEN KİŞİNİN, şirkete ilişkin görevlerini yerine getirmesi sırasında işlediği HAKSIZ FİİLDEN ŞİRKET SORUMLUDUR.",
  t: "Limited Şirket", d: 3
},
{
  q: "Limited şirkette denetim hangi hükümlere tabidir?",
  o: ["Anonim şirketin denetçiye, işlem denetçilerine, denetime ve özel denetime ilişkin hükümleri limited şirkete de uygulanır", "Denetim yapılmaz", "Sadece ortaklar denetler", "Sadece müdürler denetler", "Ticaret Bakanlığı denetler"],
  a: 0,
  e: "Anonim şirketin DENETÇİYE ve İŞLEM DENETÇİLERİYLE DENETİME ve ÖZEL DENETİME ilişkin hükümleri LİMİTED ŞİRKETE DE UYGULANIR. Ayrıca AŞ genel kurul kararlarının iptaline ilişkin hükümler de kıyasen limited şirketlere uygulanır.",
  t: "Limited Şirket", d: 2
}

]);

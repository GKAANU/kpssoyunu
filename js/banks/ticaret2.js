/* Ticaret Hukuku — 2. bölüm (acente detay, komisyoncu, simsar, ticaret sicili,
   ticaret unvanı, işletme adı, haksız rekabet, ticari defterler) */
KPSS.registerBank('ticaret', [
{
  q: "Aksi yazılı olarak kararlaştırılmadıkça acente, aynı yer veya bölge içinde birbirleriyle rekabette bulunan kaç ticari işletme hesabına acentelik yapabilir?",
  o: ["Yalnızca bir işletme hesabına", "İkiden fazla olmamak üzere", "Farklı sektörlerde sınırsız sayıda", "Müvekkilin izniyle sınırsız sayıda", "Sınırlama olmaksızın dilediği kadar"],
  a: 0,
  e: "AKSİ YAZILI OLARAK KARARLAŞTIRILMADIKÇA acente, AYNI YER VEYA BÖLGE İÇİNDE BİRBİRLERİYLE REKABETTE BULUNAN birden fazla ticari işletme hesabına acentelik yapamaz.",
  t: "Acente", d: 2
},
{
  q: "Acente kurulan işlem yerine getirildiği anda ve ölçüde ücrete hak kazanır. Bu ücret, doğumu tarihinden itibaren en geç hangi süre içinde ödenir?",
  o: ["3 ay", "1 ay", "6 ay", "1 yıl", "Süre öngörülmemiştir"],
  a: 0,
  e: "Acente, KURULAN İŞLEM YERİNE GETİRİLDİĞİ ANDA VE ÖLÇÜDE ücrete hak kazanır. Ücretin, DOĞUMU TARİHİNDEN İTİBAREN EN GEÇ 3 AY içinde ve her halde SÖZLEŞMENİN SONA ERDİĞİ TARİHTE ödenmesi gerekir.",
  t: "Acente", d: 3
},
{
  q: "Acentenin tekel hakkı ile pazarlamacının tekel hakkı arasındaki benzerlik nedir?",
  o: ["Müvekkil aynı bölgede ikinci acente atayamaz", "Müvekkil hiçbir biçimde başka acente atayamaz", "Tekel hakkı ancak yazılı sözleşmeyle doğar", "Müvekkil dilediği kadar acente atayabilir", "Acentenin böyle bir hakkı bulunmaz"],
  a: 0,
  e: "AKSİ YAZILI OLARAK KARARLAŞTIRILMIŞ OLMADIKÇA müvekkil, AYNI ZAMANDA VE AYNI YER VEYA BÖLGE İÇİNDE AYNI TİCARET DALI İÇİN BİRDEN FAZLA ACENTE ATAYAMAZ.",
  t: "Acente", d: 2
},
{
  q: "Acenteye müvekkili adına sözleşme yapma yetkisi nasıl verilir?",
  o: ["Özel ve yazılı olarak; belge tescil ve ilan edilir", "Sözlü olarak verilmesi yeterlidir", "Acentelik sözleşmesiyle kendiliğinden doğar", "Yalnızca tescil edilmekle doğar", "Yalnızca mahkeme kararıyla verilebilir"],
  a: 0,
  e: "Acenteye müvekkili adına SÖZLEŞME YAPMA yetkisi verilmek isteniyorsa bu yetkinin ÖZEL OLARAK VE YAZILI ŞEKİLDE verilmesi gerekir. Yetki belgesinin ACENTE TARAFINDAN TESCİL VE İLAN ettirilmesi de gerekir. Sınırlamaların iyiniyetli 3. kişilere karşı ileri sürülebilmesi için tescil ve ilan edilmiş olmaları gerekir.",
  t: "Acente", d: 3
},
{
  q: "Acente yetkisi olmaksızın veya sınırlarını aşarak müvekkili adına sözleşme yaparsa ne olur?",
  o: ["Müvekkil icazet vermezse acente kendisi sorumlu olur", "Sözleşme kendiliğinden geçersiz sayılır", "Müvekkil her hâlde sözleşmeden sorumlu olur", "Sözleşme yok hükmünde kabul edilir", "Yalnızca mahkeme kararıyla geçerli hale gelir"],
  a: 0,
  e: "Acente yetkisi olmaksızın veya yetkisinin sınırlarını aşarak müvekkili adına sözleşme yaparsa müvekkil, sözleşmenin yapıldığını haber alır almaz sözleşmeye İCAZET VEREBİLİR. Müvekkil icazet vermediği takdirde ACENTE YAPMIŞ OLDUĞU SÖZLEŞMEDEN KENDİSİ SORUMLU OLUR.",
  t: "Acente", d: 3
},
{
  q: "Belirsiz süreli acentelik sözleşmesi hangi süreyle ihbar edilerek sona erdirilebilir?",
  o: ["3 ay öncesinden ihbarla", "1 ay öncesinden ihbarla", "6 ay öncesinden ihbarla", "1 yıl öncesinden ihbarla", "İhbar süresi öngörülmemiştir"],
  a: 0,
  e: "BELİRSİZ SÜRELİ acentelik sözleşmesini taraflardan her biri 3 AY ÖNCESİNDEN İHBAR ETMEK SURETİYLE sona erdirebilir. Belirli süreli sözleşme ise sürenin dolmasıyla kendiliğinden son bulur.",
  t: "Acente", d: 2
},
{
  q: "Acentenin denkleştirme istemi, son 5 yıllık yıllık komisyon ortalamasını aşamaz. İstemin ileri sürülme süresi ve istemden önceden vazgeçme bakımından durum nedir?",
  o: ["1 yıl içinde ileri sürülür; önceden vazgeçilemez", "2 yıl içinde ileri sürülür; önceden vazgeçilemez", "1 yıl içinde ileri sürülür; önceden vazgeçilebilir", "Süreye bağlı değildir; önceden vazgeçilebilir", "Süreye bağlı değildir; önceden vazgeçilemez"],
  a: 0,
  e: "DENKLEŞTİRME İSTEMİ: müvekkil acentenin bulduğu yeni müşteriler sayesinde sözleşme sona erdikten sonra da önemli menfaatler elde ediyorsa acente uygun tazminat isteyebilir. Tazminat, acentenin SON 5 YILLIK faaliyeti sonucu aldığı yıllık komisyon ortalamasını AŞAMAZ. Denkleştirme isteminden ÖNCEDEN VAZGEÇİLEMEZ ve sözleşmenin sona ermesinden itibaren 1 YIL içinde ileri sürülmelidir.",
  t: "Acente", d: 3
},
{
  q: "Acente ile yapılan rekabet yasağı anlaşması en çok ne kadar süre için yapılabilir?",
  o: ["İlişkinin bitiminden itibaren 2 yıl", "İlişkinin bitiminden itibaren 1 yıl", "İlişkinin bitiminden itibaren 5 yıl", "İlişkinin bitiminden itibaren 6 ay", "Süre bakımından bir sınır yoktur"],
  a: 0,
  e: "TTK md. 123'e göre rekabet yasağı anlaşması YAZILI şekilde yapılmalı ve müvekkil tarafından imzalanmış bir belge acenteye verilmelidir. Anlaşma EN ÇOK İLİŞKİNİN BİTİMİNDEN İTİBAREN 2 YILLIK süre için yapılabilir ve yalnızca acenteye bırakılan bölge/müşteri çevresi ve aracılık ettiği konulara ilişkin olabilir. Müvekkilin acenteye UYGUN TAZMİNAT ÖDEMESİ ŞARTTIR.",
  t: "Acente", d: 3
},
{
  q: "Acentelik sözleşmesinden doğan tüm talep hakları hangi zamanaşımı süresine tabidir?",
  o: ["5 yıl", "2 yıl", "1 yıl", "10 yıl", "3 yıl"],
  a: 0,
  e: "Acentelik sözleşmesinden doğan tüm talep hakları 5 YILLIK zamanaşımı süresine tabidir. (Komisyon ve simsarlık sözleşmesinden doğan talepler de 5 yılda zamanaşımına uğrar.)",
  t: "Acente", d: 2
},
{
  q: "Alım-satım komisyoncusu kimin adına ve kimin hesabına hukuki işlem yapar?",
  o: ["Kendi adına, müvekkilin hesabına", "Müvekkilin adına, kendi hesabına", "Kendi adına, kendi hesabına", "Müvekkilin adına, müvekkilin hesabına", "Üçüncü kişi adına, kendi hesabına"],
  a: 0,
  e: "Alım-satım komisyoncusu, komisyon sözleşmesi gereğince ücret karşılığında KENDİ ADINA MÜVEKKİLİN (vekalet verenin) HESABINA kıymetli evrak ve taşınırların alımı veya satımını üstlenen kişidir. Yaptığı işlemden doğan HAK VE BORÇLAR KENDİSİNE AİTTİR.",
  t: "Komisyoncu", d: 2
},
{
  q: "Alım-satım komisyonculuğunun konusu nedir?",
  o: ["Kıymetli evrak ve taşınır eşya alımı-satımı", "Her türlü mal ve hizmetin alımı-satımı", "Yalnızca taşınmaz malların alımı-satımı", "Yalnızca kıymetli evrakın alımı-satımı", "Her türlü hakkın devri ve temliki"],
  a: 0,
  e: "Alım-satım komisyonculuğunun konusu KIYMETLİ EVRAK VE TAŞINIR EŞYA ALIM-SATIMIDIR. Komisyoncu ile vekalet veren arasındaki ilişki kural olarak SÜREKLİ DEĞİLDİR ve komisyonculuğun MESLEK ŞEKLİNDE yapılması ŞART DEĞİLDİR.",
  t: "Komisyoncu", d: 3
},
{
  q: "Satım komisyoncusu ve alım komisyoncusu bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Satım izinsiz veresiye satamaz, alım teslimden önce ödeyemez", "Satım izinsiz veresiye satabilir, alım teslimden önce ödeyebilir", "Her ikisi de talimata bağlı olmaksızın serbestçe hareket eder", "Her ikisi de işlem öncesinde mahkeme izni almak zorundadır", "Satım izinsiz veresiye satabilir, alım teslimden önce ödeyemez"],
  a: 0,
  e: "SATIM KOMİSYONCUSU müvekkilinden izin almadıkça VERESİYE MAL SATAMAZ; ALIM KOMİSYONCUSU da MAL KENDİSİNE TESLİM OLUNMADIKÇA ÖDEME YAPAMAZ. Ayrıca komisyoncu malı belirlenenden daha düşük bedelle satmamak zorundadır; aksi halde aradaki farkı gidermekle yükümlü olur.",
  t: "Komisyoncu", d: 3
},
{
  q: "Komisyoncu ne zaman ücrete hak kazanır?",
  o: ["İşlem üçüncü kişi tarafından ifa edildiğinde", "Sözleşme kurulduğu anda", "Aracılık faaliyetine başladığında", "Müvekkilin talimatını aldığında", "Her hâlde takvim ayı sonunda"],
  a: 0,
  e: "Komisyoncu, İŞLEMİN TAMAMLANMASINDAN SONRA ücrete hak kazanır; yani ücret talep edebilmesi için SÖZLEŞMENİN ÜÇÜNCÜ KİŞİ TARAFINDAN İFA EDİLMİŞ olması gerekir. Komisyoncu kural olarak sözleşmenin 3. kişi tarafından yerine getirilmemesinden SORUMLU DEĞİLDİR.",
  t: "Komisyoncu", d: 3
},
{
  q: "Komisyoncunun 'bizzat taraf olma' hakkı hangi mallar bakımından söz konusudur?",
  o: ["Borsa kaydı veya piyasa fiyatı bulunanlar", "Her türlü taşınır ve taşınmaz mal", "Yalnızca taşınmaz nitelikli mallar", "Yalnızca müvekkilin yazılı izin verdiği mallar", "Hiçbir mal bakımından mümkün değildir"],
  a: 0,
  e: "Komisyoncu, BORSADA KAYITLI VEYA PİYASA FİYATI BULUNAN kambiyo senedi ve diğer kıymetli evrak ile ticari malları, vekalet veren tarafından AKSİNE TALİMAT VERİLMİŞ OLMADIKÇA BİZZAT SATABİLİR VEYA SATIN ALABİLİR.",
  t: "Komisyoncu", d: 3
},
{
  q: "Simsarlık sözleşmesi hangi şekle tabidir?",
  o: ["Kural olarak şekilsiz; taşınmazda yazılı olması şart", "Her hâlde yazılı olarak yapılması şart", "Her hâlde resmi şekilde yapılması şart", "Her hâlde noter onayı alınması şart", "Her hâlde ticaret siciline tescil edilmesi şart"],
  a: 0,
  e: "Simsarlık sözleşmesi HERHANGİ BİR ŞEKLE TABİ DEĞİLDİR. Ancak TAŞINMAZ SİMSARLIĞINA ilişkin sözleşmelerin YAZILI olarak yapılması ZORUNLUDUR. Simsarlık sözleşmelerine kural olarak VEKALETE ilişkin hükümler uygulanır.",
  t: "Simsar", d: 2
},
{
  q: "Simsarlık sözleşmesi simsara temsil yetkisi verir mi?",
  o: ["Vermez; özel yetki olmadıkça sözleşme yapamaz", "Verir; simsar tam yetkili sayılır", "Yalnızca sözleşme yapma yetkisi verir", "Yalnızca bedeli tahsil etme yetkisi verir", "Tescil edildiği takdirde yetki verir"],
  a: 0,
  e: "SİMSARLIK SÖZLEŞMESİ SİMSARA TEMSİL YETKİSİ VERMEZ. Yani simsar, ÖZEL YETKİ VERİLMEDİKÇE kendisini görevlendiren taraf adına SÖZLEŞME YAPAMAZ, BEDELİ TAHSİL EDEMEZ, satım konusu malları TESLİM ALAMAZ.",
  t: "Simsar", d: 3
},
{
  q: "Simsar ücret talep edebilmek için hangi koşulun gerçekleşmesi şarttır?",
  o: ["Sözleşmenin geçerli biçimde kurulmuş olması", "Aracılık faaliyetine başlamış olması", "Müvekkile bir müşteri bulmuş olması", "Görüşmeleri fiilen başlatmış olması", "Sözleşmenin tamamen ifa edilmiş olması"],
  a: 0,
  e: "Simsarın ücret talep edebilmesi için, yürütülen aracılık faaliyeti sonucunda SÖZLEŞMENİN GEÇERLİ BİR ŞEKİLDE KURULMUŞ OLMASI ŞARTTIR. Simsarlık sözleşmesinden doğan alacaklar 5 YILDA zamanaşımına uğrar.",
  t: "Simsar", d: 2
},
{
  q: "Simsar yaptığı masrafların ödenmesini isteyebilir mi?",
  o: ["Kural olarak isteyemez; aksi kararlaştırılabilir", "Kural olarak isteyebilir; aksi kararlaştırılamaz", "Hiçbir hâlde isteyemez; aksi kararlaştırılamaz", "Yalnızca mahkeme kararıyla isteyebilir", "Yalnızca taşınmaz simsarlığında isteyebilir"],
  a: 0,
  e: "Simsar, yapmış olduğu masrafların ödenmesini KURAL OLARAK İSTEYEMEZ; aracılık faaliyetinin gerektirdiği masraflar SİMSARLIK ÜCRETİ İLE KARŞILANIR. Ancak sözleşmeye masrafların ayrıca ödeneceğine ilişkin hüküm konulabilir. Simsar TARAFSIZ DAVRANMAZ veya dürüstlük kurallarına aykırı olarak DİĞER TARAFTAN ÜCRET SÖZÜ ALIRSA ücret ve masraf talep hakkını KAYBEDER.",
  t: "Simsar", d: 3
},
{
  q: "Ticaret sicili hangi kuruluş bünyesinde tutulur ve kim tarafından yönetilir?",
  o: ["Ticaret odaları bünyesinde; sicil müdürü tarafından", "Ticaret Bakanlığı bünyesinde; müsteşar tarafından", "Asliye ticaret mahkemesi bünyesinde; hâkim tarafından", "Noterlikler bünyesinde; noter tarafından", "Valilikler bünyesinde; vali tarafından"],
  a: 0,
  e: "TTK md. 24'e göre ticaret sicili, Bakanlığın GÖZETİM VE DENETİMİNDE TİCARET VE SANAYİ ODALARI veya TİCARET ODALARI bünyesinde kurulacak TİCARET SİCİLİ MÜDÜRLÜKLERİ tarafından tutulur ve TİCARET SİCİLİ MÜDÜRÜ tarafından yönetilir. Müdür, ODA MECLİSİ tarafından Bakanlığın uygun görüşü alınarak atanır.",
  t: "Ticaret Sicili", d: 2
},
{
  q: "Ticaret sicilinin tutulmasından doğan zararlardan kim sorumludur?",
  o: ["Devlet ve ilgili oda müteselsilen sorumludur", "Sadece ilgili oda sorumludur", "Sadece Devlet sorumludur", "Sadece sicil müdürü sorumludur", "Hiç kimse sorumlu değildir"],
  a: 0,
  e: "Ticaret sicilinin tutulmasından doğan BÜTÜN ZARARLARDAN DEVLET VE İLGİLİ ODA MÜTESELSİLEN SORUMLUDUR. Ticaret sicili müdürü ve personeli, görevleriyle ilgili suçlardan dolayı KAMU GÖREVLİSİ olarak cezalandırılır.",
  t: "Ticaret Sicili", d: 2
},
{
  q: "TTK md. 35'e göre ticaret sicilinin aleniyeti ne anlama gelir?",
  o: ["Herkes içeriği inceleyip onaylı suretini alabilir", "Yalnızca tacir sıfatını taşıyanlar inceleyebilir", "Yalnızca hukuki menfaati olan ilgililer inceleyebilir", "Yalnızca mahkeme kararıyla incelenebilir", "Sicil kayıtları tümüyle gizli niteliktedir"],
  a: 0,
  e: "TTK md. 35'e göre TİCARET SİCİLİ ALENİDİR (açıktır); HERKES ticaret sicilinin içeriğini ve dairede saklanan BÜTÜN SENET VE VESİKALARI İNCELEYEBİLİR, bunların ONAYLI SURETLERİNİ ALABİLİR.",
  t: "Ticaret Sicili", d: 2
},
{
  q: "TTK md. 30'a göre tescili isteme süresi, kural olarak ve sicil müdürlüğünün yetki çevresi dışında oturanlar için sırasıyla nedir?",
  o: ["15 gün – 1 ay", "1 ay – 3 ay", "7 gün – 15 gün", "15 gün – 15 gün", "30 gün – 2 ay"],
  a: 0,
  e: "TTK md. 30'a göre tescili isteme süresi KURAL OLARAK 15 GÜNDÜR. Ancak SİCİL MÜDÜRLÜĞÜNÜN YETKİ ÇEVRESİ DIŞINDA OTURANLAR için bu süre 1 AYDIR.",
  t: "Ticaret Sicili", d: 2
},
{
  q: "Sicil müdürünün tescil istemini reddetmesi halinde ilgililer hangi süre içinde ve nereye itiraz edebilir?",
  o: ["8 gün içinde ticari davalara bakan asliye mahkemesine", "15 gün içinde icra mahkemesine başvurarak", "8 gün içinde doğrudan Ticaret Bakanlığına", "1 ay içinde asliye hukuk mahkemesine", "7 gün içinde ilgili oda meclisine"],
  a: 0,
  e: "Sicil memuru tescil istemini reddederse ilgililer, kararın kendilerine TEBLİĞİNDEN İTİBAREN 8 GÜN içinde sicilin bulunduğu yerde TİCARİ DAVALARA BAKMAKLA GÖREVLİ ASLİYE MAHKEMESİ nezdinde itiraz edebilirler.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Geçici tescilde ilgililer, mahkemeye başvurduklarını veya anlaştıklarını hangi süre içinde ispat etmezlerse tescil resen silinir?",
  o: ["3 ay", "1 ay", "6 ay", "1 yıl", "Silinmez; geçici tescil süresizdir"],
  a: 0,
  e: "Çözümü mahkeme kararına bağlı veya sicil müdürünün kesin tescilinde duraksadığı hususlar ilgililerin istemi üzerine GEÇİCİ olarak tescil olunur. Ancak ilgililer 3 AY içinde mahkemeye başvurduklarını veya aralarında anlaştıklarını ispat etmezlerse GEÇİCİ TESCİL RESEN SİLİNİR.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Ticaret sicili ilanı nerede yapılır?",
  o: ["Türkiye Ticaret Sicili Gazetesi ile", "Resmi Gazete ile yapılan yayım yoluyla", "Yerel gazetelerde verilen ilanla", "İlgili ticaret odasının ilan panosunda", "Ticaret Bakanlığının internet sitesinde"],
  a: 0,
  e: "İLAN, bütün Türkiye'ye etken olmak üzere ANKARA'DA YAYIMLANAN TÜRKİYE TİCARET SİCİLİ GAZETESİ ile yapılır.",
  t: "Ticaret Sicili", d: 2
},
{
  q: "Ticaret siciline tescil kural olarak hangi etkiye sahiptir?",
  o: ["Bildirici (açıklayıcı) etkiye", "Kurucu etkiye", "Hem bildirici hem kurucu etkiye", "Hiçbir etkiye", "Sadece ispat etkisine"],
  a: 0,
  e: "Ticaret siciline tescil KURAL OLARAK BİLDİRİCİ (AÇIKLAYICI) ETKİYE sahiptir. Örneğin tacir sıfatı ticari işletmenin belli bir kişi adına işletilmesiyle kazanılır; tescil bunun bir sonucudur. TİCARET SİCİLİNDE KAYITLI BULUNMAMAK, KİŞİNİN TACİR OLMADIĞINI GÖSTERMEZ.",
  t: "Ticaret Sicili", d: 2
},
{
  q: "Aşağıdakilerden hangisinde tescil KURUCU etkiye sahiptir?",
  o: ["Ticaret şirketlerinin tüzel kişilik kazanması", "Ticari defterlerin usulünce tutulması", "Ticaret unvanının korunmaya başlaması", "Tacir sıfatının kazanılmış olması", "Şubenin merkeze bağlanmış olması"],
  a: 0,
  e: "KURUCU etkiye sahip haller: TİCARET ŞİRKETLERİNİN TÜZEL KİŞİLİK KAZANMASI, AŞ'lerde sözleşme değişikliğine ilişkin genel kurul kararları, AŞ'lerde kuruluştan sonra devralma sözleşmeleri ve TİCARİ İŞLEMLERDE TAŞINIR REHNİNİN kurulması.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Ticaret sicili kayıtları üçüncü kişiler hakkında hangi andan itibaren hüküm ifade eder?",
  o: ["İlanı izleyen iş gününden itibaren", "Tescil tarihinden itibaren", "İlanın yapıldığı günden itibaren", "İlanı izleyen yedinci günden itibaren", "Fiilen öğrenildiği tarihten itibaren"],
  a: 0,
  e: "Ticaret sicili kayıtları, nerede bulunursa bulunsunlar üçüncü kişiler hakkında kural olarak, tescilin TİCARET SİCİLİ GAZETESİ İLE İLAN EDİLDİĞİ GÜNÜ TAKİP EDEN İŞ GÜNÜNDEN İTİBAREN hüküm ifade eder.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Tescilin olumlu ve olumsuz etkisi ne anlama gelir?",
  o: ["Tescil varsa bildikleri, yoksa bilmedikleri farzedilir", "Tescil varsa da yoksa da bildikleri farzedilir", "Tescil varsa da yoksa da bilmedikleri farzedilir", "Tescil varsa bilmedikleri, yoksa bildikleri farzedilir", "İki etki arasında herhangi bir fark bulunmaz"],
  a: 0,
  e: "OLUMLU ETKİ: bir husus tescil ve ilan olunmuşsa 3. kişilerin BİLDİKLERİ FARZEDİLİR; bilmediklerine dair iddiaları dinlenmez. OLUMSUZ ETKİ: tescili zorunlu bir husus tescil edilmemiş veya ilan olunmamışsa 3. kişilerin BİLMEDİKLERİ FARZEDİLİR.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Tescil kaydı ile ilan edilen durum arasında aykırılık bulunması halinde ne olur?",
  o: ["Gerçeği bilmedikçe ilana güven korunur", "Her hâlde tescil edilen durum esas alınır", "Her hâlde ilan edilen durum esas alınır", "İşlem baştan itibaren geçersiz sayılır", "Durumu her olayda mahkeme takdir eder"],
  a: 0,
  e: "GÖRÜNÜŞE GÜVEN ilkesi: Tescil kaydı ile ilan edilen durum arasında aykırılık bulunması halinde, TESCİL EDİLMİŞ OLAN GERÇEK DURUMU BİLDİKLERİ İSPAT EDİLMEDİĞİ SÜRECE, üçüncü kişilerin İLAN EDİLEN DURUMA GÜVENLERİ KORUNUR.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Gerçek kişi tacirlerde ticaret unvanının çekirdek kısmı neden oluşur?",
  o: ["Kişinin ad ve soyadından", "Seçilen fantezi bir isimden", "İşletmenin konusundan", "Şirket türünü gösteren ibareden", "Ticaret siciline verilen numaradan"],
  a: 0,
  e: "Gerçek kişi tacirlerde ticaret unvanının ÇEKİRDEK kısmı KİŞİNİN AD VE SOYADINDAN oluşur. Ad ve soyadın KISALTILMADAN yazılması gerekir; unvan 'O. Şener' şeklinde yazılamaz.",
  t: "Ticaret Unvanı", d: 2
},
{
  q: "Kollektif şirketlerde ticaret unvanının çekirdek kısmı neden oluşur?",
  o: ["Bir ortağın ad-soyadı ve şirket türü ibaresinden", "İşletme konusu ve şirket türü ibaresinden", "Yalnızca şirket türünü gösteren ibareden", "Bütün ortakların ad ve soyadlarından", "Seçilen fantezi bir isim ve tür ibaresinden"],
  a: 0,
  e: "Kollektif şirketlerde çekirdek, ORTAKLARDAN BİRİNİN AD VE SOYADIYLA ŞİRKETİ VE TÜRÜNÜ GÖSTEREN İBAREDEN oluşur. Ortak sayısı ikiden fazlaysa 'Oğuz Şener ve Ortakları Kollektif Şirketi' şeklinde unvan da alınabilir.",
  t: "Ticaret Unvanı", d: 2
},
{
  q: "Komandit şirketlerin ticaret unvanında komanditer ortağın adı yer alırsa ne olur?",
  o: ["Komandite ortak gibi sorumlu olur", "Şirketten çıkarılmış sayılır", "Unvan kendiliğinden geçersiz olur", "Sorumluluğu sermayesiyle sınırlı kalır", "Şirket kendiliğinden sona erer"],
  a: 0,
  e: "Komandit şirketlerin ticaret unvanlarında KOMANDİTER ORTAKLARIN ad ve soyadlarının bulunması YASAKTIR. Komanditer ortağın ismi ticaret unvanına konulursa BU ORTAK ÜÇÜNCÜ KİŞİLERE KARŞI KOMANDİTE ORTAK GİBİ SORUMLU OLUR.",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "Limited, anonim ve kooperatif şirketlerde ticaret unvanının çekirdek kısmı neden oluşur?",
  o: ["İşletme konusu ve şirket türü ibaresinden", "Bir ortağın ad ve soyadından", "Bütün ortakların ad ve soyadlarından", "Seçilen fantezi bir isimden", "Sicil numarası ve tür ibaresinden"],
  a: 0,
  e: "Limited, anonim ve kooperatif şirketlerin ticaret unvanının çekirdeği İŞLETME KONUSU İLE ŞİRKETİN TÜRÜNÜ GÖSTEREN KELİMELERDEN oluşur (örn. 'Gıda-Ticaret Limited Şirketi'). Buna karşılık 'Oğuz Şener Anonim Şirketi' TTK'ya uygun bir unvan DEĞİLDİR.",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "Anonim şirket unvanında şirket türünü gösteren ibare hangi durumda kısaltılarak yazılabilir?",
  o: ["Unvanda gerçek kişi ad veya soyadı yer almadığında", "Unvanda gerçek kişi ad veya soyadı yer aldığında", "Yalnızca kooperatif şirketlerde kısaltılabilir", "Yalnızca halka açık şirketlerde kısaltılabilir", "Hiçbir durumda kısaltılarak yazılamaz"],
  a: 0,
  e: "Şirket türünü gösteren ibare, unvanda BİR GERÇEK KİŞİNİN AD VEYA SOYADI EK OLARAK YER ALMADIĞI TAKDİRDE kısaltılarak yazılabilir ('Gıda-Ticaret A.Ş.'). Buna karşılık 'İbrahim Akdoğan Gıda-Ticaret Anonim Şirketi' unvanı 'A.Ş.' olarak KISALTILAMAZ.",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "'Türk', 'Türkiye', 'Milli' ve 'Cumhuriyet' kelimeleri ticaret unvanına nasıl ek olarak konulabilir?",
  o: ["Cumhurbaşkanlığı kararı ile", "Ticaret Bakanlığı izni ile", "Serbestçe", "Mahkeme kararı ile", "Oda meclisi kararı ile"],
  a: 0,
  e: "'TÜRK', 'TÜRKİYE', 'MİLLİ' ve 'CUMHURİYET' kelimeleri unvana CUMHURBAŞKANLIĞI KARARI İLE ek olarak konulabilir. Ayrıca KOOPERATİFLERİN ticaret unvanlarında KAMU KURUM VE KURULUŞLARININ ADLARINA YER VERİLEMEZ.",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "Ticaret unvanında ek kullanılması hangi halde ZORUNLUDUR?",
  o: ["Daha önce tescilli unvandan ayırt etmek için", "Bütün hâllerde ek kullanılması zorunludur", "Yalnızca anonim şirketler bakımından", "Yalnızca gerçek kişi tacirler bakımından", "Ek kullanmak hiçbir hâlde zorunlu değildir"],
  a: 0,
  e: "Ek kullanmanın zorunlu olduğu haller: (1) unvanın DAHA ÖNCE TESCİL EDİLMİŞ BİR UNVANDAN AYIRT EDİLEBİLMESİ için, (2) her ŞUBE kendi merkezinin unvanını şube olduğunu belirterek kullanmak zorundadır, (3) TASFİYE haline giren şirketlerin unvanına 'TASFİYE HALİNDE' ibaresi eklenir.",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "Ticaret unvanı işletmeden ayrı olarak devredilebilir mi?",
  o: ["Devredilemez; işletmenin devri unvanı da kapsar", "Devredilebilir; ayrıca bir şart aranmaz", "Yalnızca ayrı bir tescille devredilebilir", "Yalnızca mahkeme kararıyla devredilebilir", "Yalnızca tacirler arasında devredilebilir"],
  a: 0,
  e: "TİCARET UNVANI TİCARİ İŞLETMEDEN AYRI OLARAK DEVREDİLEMEZ. Bir işletmenin devri, AKSİ AÇIKÇA KABUL EDİLMİŞ OLMADIKÇA unvanın da devri sonucunu doğurur ve devralan unvanı aynen kullanma hakkına sahiptir. (İşletme adı ise işletmeden AYRI OLARAK TEK BAŞINA DEVREDİLEBİLİR.)",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "Tescil ve ilan edilmiş ticaret unvanını kullanma hakkının kapsamı nedir?",
  o: ["Ülke sınırları içinde tekel hakkı sağlar", "Yalnızca il sınırları içinde koruma sağlar", "Yalnızca sicil dairesi çevresinde koruma sağlar", "Yalnızca tüzel kişi tacirlere tekel sağlar", "Herhangi bir tekel hakkı sağlamaz"],
  a: 0,
  e: "Usulen tescil ve ilan edilmiş ticaret unvanını kullanma hakkı SADECE SAHİBİNE AİTTİR. Hem gerçek hem tüzel kişi tacirler tescil ve ilan ettirdikleri ticaret unvanlarını ÜLKE SINIRLARI İÇİNDE TEKEL ŞEKLİNDE kullanma hakkına sahiptirler.",
  t: "Ticaret Unvanı", d: 2
},
{
  q: "Tescil edilmemiş ticaret unvanları nasıl korunur?",
  o: ["Haksız rekabet hükümlerine göre", "TTK md. 52'ye göre özel olarak", "Hiçbir korumadan yararlanmaz", "Marka hükümlerine göre", "Yalnızca ceza hükümlerine göre"],
  a: 0,
  e: "TESCİL OLUNMUŞ ticaret unvanları TTK md. 52'ye göre ÖZEL OLARAK korunur. TESCİL EDİLMEMİŞ ticaret unvanları ise HAKSIZ REKABET HÜKÜMLERİNE (TTK md. 54 vd.) göre korunabilir.",
  t: "Ticaret Unvanı", d: 2
},
{
  q: "Kollektif şirkette adı ticaret unvanında yer alan ortak ayrılırsa unvan ne olur?",
  o: ["Ayrılanın yazılı izniyle aynen devam edebilir", "Herhangi bir izin gerekmeksizin aynen devam eder", "Kendiliğinden değişerek yeniden tescil edilir", "Şirketin tasfiyesi sonucunu doğurur", "Sicilden tümüyle silinmesi gerekir"],
  a: 0,
  e: "Kollektif, komandit şirketler ile donatma iştirakinde adı ticaret unvanında yer alan ortak/donatan ayrılırsa, ticaret unvanı AYRILAN KİŞİNİN YAZILI İZİNLERİ İLE aynen devam edebilir. İzin vermezse unvanda GEREKLİ DEĞİŞİKLİK YAPILARAK durum tescil ve ilan olunur.",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "TTK md. 53'e göre işletme adının işlevi nedir?",
  o: ["İşletmeyi tanıtıp benzerlerinden ayırt etmek", "İşletmenin sahibi olan taciri göstermek", "Şirketin hukuki türünü göstermek", "Şirketin ortaklarını üçüncü kişilere göstermek", "İşletmenin sermaye miktarını göstermek"],
  a: 0,
  e: "TTK md. 53'e göre İŞLETME ADI, işletme sahibi ile ilgili olmaksızın DOĞRUDAN İŞLETMEYİ TANITMAK ve BENZERİ İŞLETMELERDEN AYIRT ETMEK için kullanılır (Turkuaz Otel, Çınar Sineması gibi). TİCARET UNVANI ise TACİRİ gösterir.",
  t: "İşletme Adı", d: 2
},
{
  q: "İşletme adı ile ticaret unvanı arasındaki farklar bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Unvanı yalnızca tacir kullanır; işletme adı zorunlu değildir", "Her ikisini de yalnızca tacir sıfatındaki kişiler kullanabilir", "Her ikisinin de kullanılması tacirler için zorunludur", "Her ikisinin de kullanılması tümüyle isteğe bağlıdır", "İşletme adını yalnızca tacirler, unvanı esnaf da kullanır"],
  a: 0,
  e: "TİCARET UNVANINI SADECE TACİRLER kullanabilir; İŞLETME ADINI ESNAF DA KULLANABİLİR. Tacirin ticaret unvanı kullanması ZORUNLU iken, işletme adı kullanmak ZORUNDA DEĞİLDİR. Ancak işletme adı kullanıyorsa bunu TESCİL ETTİRMEKLE YÜKÜMLÜDÜR.",
  t: "İşletme Adı", d: 2
},
{
  q: "TTK md. 54'e göre haksız rekabete ilişkin hükümlerin amacı nedir?",
  o: ["Dürüst ve bozulmamış rekabetin sağlanması", "Piyasada tekel oluşumunun engellenmesi", "Tüketici fiyatlarının düşürülmesi", "Tacirlerin kârlarının korunması", "Devletin vergi gelirinin artırılması"],
  a: 0,
  e: "TTK md. 54'e göre haksız rekabete ilişkin TTK hükümlerinin amacı, BÜTÜN KATILANLARIN MENFAATİNE, DÜRÜST VE BOZULMAMIŞ REKABETİN SAĞLANMASIDIR.",
  t: "Haksız Rekabet", d: 2
},
{
  q: "Haksız rekabetten söz edilebilmesi için fail ile mağdur arasında rekabet ilişkisi ve failin kusuru gerekir mi?",
  o: ["İkisi de gerekmez; kusur dava türünü belirler", "İkisi de mutlaka gerekir; aksi hâlde dava açılamaz", "Yalnızca rekabet ilişkisi gerekir, kusur gerekmez", "Yalnızca kusur gerekir, rekabet ilişkisi gerekmez", "Kusur her hâlde gerekir, rekabet ilişkisi gerekmez"],
  a: 0,
  e: "Haksız rekabetten söz edilebilmesi için fail ile mağdur arasında REKABET İLİŞKİSİNİN BULUNMASINA GEREK YOKTUR. Ayrıca KUSURA DA GEREK YOKTUR; failin kusurlu davranıp davranmadığı sadece HANGİ TÜR DAVALARIN AÇILABİLECEĞİNİN belirlenmesi yönünden önem arz eder.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Haksız rekabet nedeniyle, failin kusuru şartı olmaksızın açılabilecek davalar hangileridir?",
  o: ["Tespit, men ve durumun kaldırılması davaları", "Maddi ve manevi tazminat davaları", "Yalnızca maddi tazminat davası", "Yalnızca manevi tazminat davası", "Kusur olmadan hiçbir dava açılamaz"],
  a: 0,
  e: "Haksız rekabet dolayısıyla TESPİT, MEN ve HUKUKA AYKIRI DURUMUN ORTADAN KALDIRILMASI davalarının açılabilmesi için FAİLİN KUSURLU OLMASI ŞART DEĞİLDİR. Buna karşılık MADDİ TAZMİNAT davası açılması FAİLİN KUSURUNUN BULUNMASI koşuluna bağlıdır.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Haksız rekabette meslekî ve ekonomik birlikler ile tüketici kuruluşları hangi davaları açabilir?",
  o: ["Tespit, men ve durumun kaldırılması davalarını", "Tazminat dahil bütün davaları açabilirler", "Yalnızca maddi tazminat davasını açabilirler", "Yalnızca tespit davasını açabilirler", "Hiçbir dava açma yetkileri bulunmaz"],
  a: 0,
  e: "Ticaret ve sanayi odaları, esnaf odaları, borsalar, meslekî ve ekonomik birlikler ile tüketici kuruluşları TESPİT, MEN ve HAKSIZ REKABETİN SONUCU OLAN MADDİ DURUMUN ORTADAN KALDIRILMASI davalarını açabilirler; ancak HAKSIZ REKABET NEDENİYLE TAZMİNAT DAVASI AÇAMAZLAR. Tazminat talep hakkı ZARAR GÖREN KİŞİYE VE MÜŞTERİLERE tanınmıştır.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Haksız rekabet yüzünden ekonomik çıkarları zarar gören müşteriler neyi isteyemez?",
  o: ["Araçların ve malların imhasını", "Tespit davası açmayı", "Men davası açmayı", "Maddi tazminat istemeyi", "Manevi tazminat istemeyi"],
  a: 0,
  e: "Haksız rekabet yüzünden ekonomik çıkarları zarar gören veya böyle bir tehlikeyle karşılaşabilecek MÜŞTERİLER de TTK 56/I'deki davaları açabilirler; ANCAK ARAÇLARIN VE MALLARIN İMHASINI İSTEYEMEZLER.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Haksız rekabette davalı taraf kimler olabilir?",
  o: ["Fail, istihdam eden ve basın-yayın kuruluşları", "Yalnızca haksız rekabeti yapan fail", "Yalnızca faili istihdam eden kişi", "Yalnızca basın ve yayın kuruluşları", "Yalnızca tacir sıfatını taşıyan kişiler"],
  a: 0,
  e: "Haksız rekabette DAVALI TARAF: HAKSIZ REKABETİ YAPAN KİŞİ (FAİL), İSTİHDAM EDEN (adam çalıştıran) ve BASIN, YAYIN, İLETİŞİM VE BİLİŞİM KURULUŞLARI olabilir.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Haksız rekabet davalarında zamanaşımı süreleri nedir?",
  o: ["Öğrenmeden 1 yıl, her hâlde doğumdan 3 yıl", "Öğrenmeden 1 yıl, her hâlde doğumdan 10 yıl", "Öğrenmeden 2 yıl, her hâlde doğumdan 5 yıl", "Öğrenmeden 6 ay, her hâlde doğumdan 3 yıl", "Öğrenme aranmaz; her hâlde 5 yıldır"],
  a: 0,
  e: "Haksız rekabet davalarının, davaya hakkı olan tarafın bu hakkının doğumunu ÖĞRENDİĞİ GÜNDEN İTİBAREN 1 YIL ve her halde bunların DOĞUMUNDAN İTİBAREN 3 YIL içinde açılması gerekir. MEN DAVALARINDA ZAMANAŞIMI SÜRESİ SÖZ KONUSU DEĞİLDİR. Haksız rekabet fiili daha uzun ceza zamanaşımına tabi bir suç oluşturuyorsa ceza zamanaşımı hukuk davaları için de geçerlidir.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Haksız rekabet suçlarının cezası ve takibi nasıldır?",
  o: ["İki yıla kadar hapis veya adli para cezası; şikayete bağlı", "Yalnızca adli para cezası; resen takip edilir", "Beş yıla kadar hapis cezası; resen takip edilir", "İki yıla kadar hapis cezası; resen takip edilir", "Yalnızca hapis cezası; şikayete bağlı olarak takip"],
  a: 0,
  e: "TTK md. 62'de gösterilen fiiller dolayısıyla suçu işleyenler İKİ YILA KADAR HAPİS VEYA ADLİ PARA CEZASIYLA cezalandırılırlar. HAKSIZ REKABET SUÇLARI TAKİBİ ŞİKAYETE BAĞLI SUÇLARDANDIR. Şikayet hakkı, HUKUK DAVASI AÇMA HAKKINA SAHİP olanlara aittir.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Men ve hukuka aykırı durumun ortadan kaldırılması davalarında verilen hüküm, fail dışında kimler hakkında da icra olunur?",
  o: ["Malları failden ticari amaçla elde etmiş kişiler", "Yalnızca faili istihdam eden kişi hakkında", "Yalnızca basın ve yayın kuruluşları hakkında", "Yalnızca tacir sıfatı taşıyan kişiler hakkında", "Fail dışında hiç kimse hakkında icra olunmaz"],
  a: 0,
  e: "Men ve hukuka aykırı durumun ortadan kaldırılması davaları sonucunda fail aleyhine verilen hüküm, HAKSIZ REKABETE KONU OLUŞTURAN MALLARI DOĞRUDAN VEYA DOLAYLI BİR ŞEKİLDE FAİLDEN TİCARİ AMAÇLA ELDE ETMİŞ KİŞİLER HAKKINDA DA İCRA OLUNUR.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "TTK'da ismen sayılmış, tutulması zorunlu ticari defterler arasında aşağıdakilerden hangisi YOKTUR?",
  o: ["Kasa defteri", "Yevmiye defteri", "Defteri kebir", "Envanter defteri", "Pay defteri"],
  a: 0,
  e: "TTK'da ismen sayılmış zorunlu ticari defterler: YEVMİYE DEFTERİ (günlük defter), DEFTERİ KEBİR (büyük defter), ENVANTER DEFTERİ, PAY DEFTERİ, YÖNETİM KURULU KARAR DEFTERİ ve GENEL KURUL TOPLANTI VE MÜZAKERE DEFTERİDİR.",
  t: "Ticari Defterler", d: 2
},
{
  q: "Ticari defter ve belgelerin saklama süresi nedir?",
  o: ["10 yıl", "5 yıl", "15 yıl", "20 yıl", "3 yıl"],
  a: 0,
  e: "Defter ve belgelerin SAKLAMA SÜRESİ 10 YILDIR. Bu süre, son kaydın yapıldığı, envanterin çıkarıldığı, finansal tabloların hazırlandığı veya belgelerin oluştuğu TAKVİM YILININ BİTİŞİYLE başlar.",
  t: "Ticari Defterler", d: 2
},
{
  q: "Defter ve belgeler afet veya hırsızlık sebebiyle ziyaa uğrarsa tacir, ziyaı öğrendiği tarihten itibaren hangi süre içinde ve nereden belge isteyebilir?",
  o: ["30 gün içinde işletmenin bulunduğu yer mahkemesinden", "15 gün içinde asliye ticaret mahkemesinden", "30 gün içinde ticaret sicili müdürlüğünden", "1 yıl içinde işletmenin bulunduğu yer mahkemesinden", "Böyle bir belge isteme imkânı bulunmaz"],
  a: 0,
  e: "Defterler yangın, su baskını, yer sarsıntısı gibi bir AFET veya HIRSIZLIK sebebiyle ve kanuni saklama süresi içinde ziyaa uğrarsa tacir, ZİYAI ÖĞRENDİĞİ TARİHTEN İTİBAREN 30 GÜN içinde ticari işletmesinin bulunduğu yer YETKİLİ MAHKEMESİNDEN kendisine bir belge verilmesini isteyebilir. BU DAVA HASIMSIZ AÇILIR.",
  t: "Ticari Defterler", d: 3
},
{
  q: "Mirasın resmi tasfiyesi halinde veya tüzel kişi sona ermişse defter ve kağıtlar ne kadar süreyle ve kim tarafından saklanır?",
  o: ["10 yıl süreyle sulh mahkemesi tarafından", "10 yıl süreyle asliye ticaret mahkemesi tarafından", "5 yıl süreyle noter tarafından", "10 yıl süreyle ticaret sicili müdürlüğü tarafından", "Saklanması gerekmez"],
  a: 0,
  e: "Mirasın resmi tasfiyesi halinde veya tüzel kişi sona ermişse defter ve kağıtlar 10 YIL SÜREYLE SULH MAHKEMESİ tarafından saklanır. Gerçek kişi tacirin ölümü halinde MİRASÇILARI, ticareti terk etmesi halinde KENDİSİ saklamakla yükümlüdür.",
  t: "Ticari Defterler", d: 3
},
{
  q: "Mahkeme hangi uyuşmazlıklarda ticari defterlerin teslimine ve bütün içeriklerinin incelenmesine karar verebilir?",
  o: ["Miras, mal ortaklığı ve şirket tasfiyesi uyuşmazlıklarında", "Yalnızca iflas ve konkordatoya ilişkin işlerde", "Yalnızca haksız rekabetten doğan davalarda", "Yalnızca vergiden doğan uyuşmazlıklarda", "Bütün ticari nitelikli uyuşmazlıklarda"],
  a: 0,
  e: "Malvarlığı hukukuna ilişkin olan, özellikle de MİRASA, MAL ORTAKLIĞINA ve ŞİRKET TASFİYESİNE ilişkin uyuşmazlıklarda mahkeme, ticari defterlerin TESLİMİNE ve BÜTÜN İÇERİKLERİNİN İNCELENMESİNE karar verebilir.",
  t: "Ticari Defterler", d: 3
},
{
  q: "Ticari defterlerin sahibi ALEYHİNE kanıt olması bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Kanuna uygunsa lehe-aleyhe birlikte, değilse yalnızca aleyhe", "Her hâlde yalnızca aleyhe olan kayıtlar dikkate alınır", "Her hâlde lehe ve aleyhe kayıtlar birlikte dikkate alınır", "Kanuna uygunsa yalnızca lehe, değilse yalnızca aleyhe", "Ticari defterler hiçbir hâlde kanıt oluşturmaz"],
  a: 0,
  e: "Defterler KANUNA UYGUN tutulmuşsa LEHE VE ALEYHE kayıtlar BİRLİKTE dikkate alınır. Defterler KANUNA UYGUN TUTULMAMIŞSA lehe kayıtlar dikkate ALINMAZ, SADECE ALEYHE KAYITLAR dikkate alınır.",
  t: "Ticari Defterler", d: 3
},
{
  q: "Ticari defterlerin sahibi LEHİNE kanıt olabilmesi için aranan koşullar arasında aşağıdakilerden hangisi vardır?",
  o: ["Her iki tarafın da defter tutma yükümüne tabi olması", "Sadece defter sahibinin tacir olması", "Sadece defterlerin kanuna uygun tutulması", "Karşı tarafın itiraz etmemesi", "Mahkemenin resen karar vermesi"],
  a: 0,
  e: "Defterlerin sahibi LEHİNE kanıt olabilmesi için: (1) HER İKİ TARAFIN DA DEFTER TUTMA YÜKÜMÜNE TABİ OLMASI, (2) uyuşmazlığın her iki tarafın da deftere geçirmesi gereken bir ticari işten kaynaklanması, (3) defterlerin kanuna uygun tutulmuş olması, (4) defter kayıtlarının birbirini doğrulaması, (5) karşı tarafın iddiayı çürütememesi gerekir. Defterlerin ALEYHE kanıt olması için karşı tarafın tacir olmasına GEREK YOKTUR.",
  t: "Ticari Defterler", d: 3
},
{
  q: "Tacir defter tutma işini bir başkasına bırakırsa sorumluluğu ne olur?",
  o: ["Kayıtlar kendisinin sayılır; kusuru yükleyemez", "Defteri fiilen tutan kişiye geçer, tacir kurtulur", "Tacir ile defteri tutan kişi arasında paylaşılır", "Tacir yalnızca kasıt hâlinde sorumlu olur", "Tacirin hiçbir sorumluluğu kalmaz"],
  a: 0,
  e: "Tacirin defterlerini BİZZAT TUTMASINA GEREK YOKTUR. Ancak defter tutma işini bir başkasına bırakmış bile olsa BU KİŞİNİN DEFTERE GEÇİRDİĞİ KAYITLAR TACİRİN KENDİSİ TARAFINDAN TUTULMUŞ SAYILIR. TACİR, KUSURU DEFTER TUTAN MEMURUNA YÜKLEYEREK SORUMLULUKTAN KURTULAMAZ.",
  t: "Ticari Defterler", d: 3
},
{
  q: "Ticari defterleri tutma yükümlülüğü ne zaman başlar ve ne zaman sona erer?",
  o: ["Tacir sıfatının kazanılmasıyla başlar, kaybıyla sona erer", "Ticaret siciline tescil ile başlar, terkinle sona erer", "İlk kâr elde edildiğinde başlar, zararla sona erer", "Vergi kaydı açıldığında başlar, kapandığında sona erer", "Ticaret odasına kayıtla başlar, kaydın silinmesiyle biter"],
  a: 0,
  e: "Ticari defterleri tutma yükümlülüğü TACİR SIFATININ KAZANILMASIYLA BAŞLAR ve BU SIFATIN KAYBI İLE SONA ERER. İşletmesini ticaret siciline tescil ettirmekle yükümlü olan işletme sahipleri için bu yükümlülük, TESCİL ETTİRME YÜKÜMLÜLÜĞÜNÜN DOĞDUĞU ANDAN İTİBAREN geçerlidir.",
  t: "Ticari Defterler", d: 3
},
{
  q: "Bir ticari işletmenin adi şirket aracılığıyla işletilmesi halinde defter tutma yükümlülüğü nasıldır?",
  o: ["Her ortağın ayrı ayrı defter tutması gerekir", "Adi şirket adına tek bir defter tutulur", "Yalnızca yönetici ortak defter tutar", "Tescil edilmişse tek defter yeterlidir", "Defter tutma yükümlülüğü hiç doğmaz"],
  a: 0,
  e: "Bir ticari işletmenin ADİ ŞİRKET aracılığıyla işletilmesi halinde ortaklar TACİR niteliğine sahip olduklarından, HER BİR ADİ ŞİRKET ORTAĞININ AYRI AYRI DEFTER TUTMASI gerekir. Tacirin birden fazla işletmesi varsa HER BİR İŞLETME İÇİN AYRI defter tutulur.",
  t: "Ticari Defterler", d: 3
},
]);

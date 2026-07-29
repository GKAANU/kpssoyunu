/* Ticaret Hukuku — 2. bölüm (acente detay, komisyoncu, simsar, ticaret sicili,
   ticaret unvanı, işletme adı, haksız rekabet, ticari defterler) */
KPSS.registerBank('ticaret', [

/* ---------- ACENTE (devam) ---------- */
{
  q: "Acentenin rekabet yapmama yükümlülüğü nedir?",
  o: ["Aksi yazılı olarak kararlaştırılmadıkça, aynı yer veya bölge içinde birbirleriyle rekabette bulunan birden fazla ticari işletme hesabına acentelik yapamaz", "Hiçbir şekilde birden fazla işletmeye acentelik yapamaz", "Serbestçe birden fazla işletmeye acentelik yapabilir", "Sadece farklı sektörlerde acentelik yapamaz", "Böyle bir yükümlülüğü yoktur"],
  a: 0,
  e: "AKSİ YAZILI OLARAK KARARLAŞTIRILMADIKÇA acente, AYNI YER VEYA BÖLGE İÇİNDE BİRBİRLERİYLE REKABETTE BULUNAN birden fazla ticari işletme hesabına acentelik yapamaz.",
  t: "Acente", d: 2
},
{
  q: "Acente ne zaman ücrete hak kazanır ve ücret hangi süre içinde ödenir?",
  o: ["Kurulan işlem yerine getirildiği anda ve ölçüde; doğumu tarihinden itibaren en geç 3 ay içinde ve her halde sözleşmenin sona erdiği tarihte", "Sözleşme kurulduğu anda; 1 ay içinde", "İşlem yerine getirildiğinde; 6 ay içinde", "Sözleşme imzalandığında; derhal", "Her ay düzenli olarak"],
  a: 0,
  e: "Acente, KURULAN İŞLEM YERİNE GETİRİLDİĞİ ANDA VE ÖLÇÜDE ücrete hak kazanır. Ücretin, DOĞUMU TARİHİNDEN İTİBAREN EN GEÇ 3 AY içinde ve her halde SÖZLEŞMENİN SONA ERDİĞİ TARİHTE ödenmesi gerekir.",
  t: "Acente", d: 3
},
{
  q: "Acentenin tekel hakkı ile pazarlamacının tekel hakkı arasındaki benzerlik nedir?",
  o: ["Aksi yazılı olarak kararlaştırılmadıkça müvekkil aynı zamanda ve aynı yer veya bölge içinde aynı ticaret dalı için birden fazla acente atayamaz", "Müvekkil hiçbir şekilde başka acente atayamaz", "Acentenin tekel hakkı yoktur", "Tekel hakkı sadece yazılı sözleşme ile doğar", "Müvekkil serbestçe birden fazla acente atayabilir"],
  a: 0,
  e: "AKSİ YAZILI OLARAK KARARLAŞTIRILMIŞ OLMADIKÇA müvekkil, AYNI ZAMANDA VE AYNI YER VEYA BÖLGE İÇİNDE AYNI TİCARET DALI İÇİN BİRDEN FAZLA ACENTE ATAYAMAZ.",
  t: "Acente", d: 2
},
{
  q: "Acenteye müvekkili adına sözleşme yapma yetkisi nasıl verilir?",
  o: ["Özel olarak ve yazılı şekilde verilmesi ve yetki belgesinin acente tarafından tescil ve ilan ettirilmesi gerekir", "Sözlü olarak verilebilir", "Acentelik sözleşmesiyle kendiliğinden doğar", "Sadece tescil ile doğar", "Mahkeme kararı gerekir"],
  a: 0,
  e: "Acenteye müvekkili adına SÖZLEŞME YAPMA yetkisi verilmek isteniyorsa bu yetkinin ÖZEL OLARAK VE YAZILI ŞEKİLDE verilmesi gerekir. Yetki belgesinin ACENTE TARAFINDAN TESCİL VE İLAN ettirilmesi de gerekir. Sınırlamaların iyiniyetli 3. kişilere karşı ileri sürülebilmesi için tescil ve ilan edilmiş olmaları gerekir.",
  t: "Acente", d: 3
},
{
  q: "Acente yetkisi olmaksızın veya sınırlarını aşarak müvekkili adına sözleşme yaparsa ne olur?",
  o: ["Müvekkil sözleşmeye icazet verebilir; icazet vermezse acente yaptığı sözleşmeden kendisi sorumlu olur", "Sözleşme kendiliğinden geçersizdir", "Müvekkil her halde sorumlu olur", "Sözleşme yok hükmündedir", "Sadece mahkeme kararıyla geçerli olur"],
  a: 0,
  e: "Acente yetkisi olmaksızın veya yetkisinin sınırlarını aşarak müvekkili adına sözleşme yaparsa müvekkil, sözleşmenin yapıldığını haber alır almaz sözleşmeye İCAZET VEREBİLİR. Müvekkil icazet vermediği takdirde ACENTE YAPMIŞ OLDUĞU SÖZLEŞMEDEN KENDİSİ SORUMLU OLUR.",
  t: "Acente", d: 3
},
{
  q: "Belirsiz süreli acentelik sözleşmesi hangi süreyle ihbar edilerek sona erdirilebilir?",
  o: ["3 ay öncesinden ihbar etmek suretiyle", "1 ay öncesinden", "2 ay öncesinden", "6 ay öncesinden", "İhbar süresi yoktur"],
  a: 0,
  e: "BELİRSİZ SÜRELİ acentelik sözleşmesini taraflardan her biri 3 AY ÖNCESİNDEN İHBAR ETMEK SURETİYLE sona erdirebilir. Belirli süreli sözleşme ise sürenin dolmasıyla kendiliğinden son bulur.",
  t: "Acente", d: 2
},
{
  q: "Acentenin denkleştirme istemi ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Tazminat, acentenin son 5 yıllık faaliyeti sonucu aldığı yıllık komisyon ortalamasını aşamaz; istemden önceden vazgeçilemez ve 1 yıl içinde ileri sürülmelidir", "Tazminat son 3 yıllık ortalamayı aşamaz ve 2 yıl içinde ileri sürülür", "Denkleştirme isteminden önceden vazgeçilebilir", "Süre sınırı yoktur", "Tazminat sınırsızdır"],
  a: 0,
  e: "DENKLEŞTİRME İSTEMİ: müvekkil acentenin bulduğu yeni müşteriler sayesinde sözleşme sona erdikten sonra da önemli menfaatler elde ediyorsa acente uygun tazminat isteyebilir. Tazminat, acentenin SON 5 YILLIK faaliyeti sonucu aldığı yıllık komisyon ortalamasını AŞAMAZ. Denkleştirme isteminden ÖNCEDEN VAZGEÇİLEMEZ ve sözleşmenin sona ermesinden itibaren 1 YIL içinde ileri sürülmelidir.",
  t: "Acente", d: 3
},
{
  q: "Acente ile yapılan rekabet yasağı anlaşması en çok ne kadar süre için yapılabilir?",
  o: ["İlişkinin bitiminden itibaren 2 yıl", "1 yıl", "3 yıl", "5 yıl", "Süresiz"],
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

/* ---------- KOMİSYONCU ---------- */
{
  q: "Alım-satım komisyoncusu kimin adına ve kimin hesabına hukuki işlem yapar?",
  o: ["Kendi adına, müvekkilin (vekalet verenin) hesabına", "Müvekkilin adına ve hesabına", "Kendi adına ve kendi hesabına", "Müvekkilin adına, kendi hesabına", "Üçüncü kişinin adına"],
  a: 0,
  e: "Alım-satım komisyoncusu, komisyon sözleşmesi gereğince ücret karşılığında KENDİ ADINA MÜVEKKİLİN (vekalet verenin) HESABINA kıymetli evrak ve taşınırların alımı veya satımını üstlenen kişidir. Yaptığı işlemden doğan HAK VE BORÇLAR KENDİSİNE AİTTİR.",
  t: "Komisyoncu", d: 2
},
{
  q: "Alım-satım komisyonculuğunun konusu nedir?",
  o: ["Kıymetli evrak ve taşınır eşya alım-satımı", "Taşınmaz alım-satımı", "Her türlü mal ve hizmet", "Sadece kıymetli evrak", "Sadece taşınmazlar"],
  a: 0,
  e: "Alım-satım komisyonculuğunun konusu KIYMETLİ EVRAK VE TAŞINIR EŞYA ALIM-SATIMIDIR. Komisyoncu ile vekalet veren arasındaki ilişki kural olarak SÜREKLİ DEĞİLDİR ve komisyonculuğun MESLEK ŞEKLİNDE yapılması ŞART DEĞİLDİR.",
  t: "Komisyoncu", d: 3
},
{
  q: "Satım komisyoncusu ve alım komisyoncusu ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Satım komisyoncusu izin almadıkça veresiye mal satamaz; alım komisyoncusu mal kendisine teslim olunmadıkça ödeme yapamaz", "İkisi de serbestçe hareket eder", "Satım komisyoncusu veresiye satabilir", "Alım komisyoncusu peşin ödeme yapabilir", "İkisi de mahkeme izni almalıdır"],
  a: 0,
  e: "SATIM KOMİSYONCUSU müvekkilinden izin almadıkça VERESİYE MAL SATAMAZ; ALIM KOMİSYONCUSU da MAL KENDİSİNE TESLİM OLUNMADIKÇA ÖDEME YAPAMAZ. Ayrıca komisyoncu malı belirlenenden daha düşük bedelle satmamak zorundadır; aksi halde aradaki farkı gidermekle yükümlü olur.",
  t: "Komisyoncu", d: 3
},
{
  q: "Komisyoncu ne zaman ücrete hak kazanır?",
  o: ["İşlemin tamamlanmasından sonra; yani sözleşmenin üçüncü kişi tarafından ifa edilmiş olması gerekir", "Sözleşmenin kurulmasıyla", "Aracılık faaliyetine başlamasıyla", "Müvekkilin talimatını almasıyla", "Her halde ay sonunda"],
  a: 0,
  e: "Komisyoncu, İŞLEMİN TAMAMLANMASINDAN SONRA ücrete hak kazanır; yani ücret talep edebilmesi için SÖZLEŞMENİN ÜÇÜNCÜ KİŞİ TARAFINDAN İFA EDİLMİŞ olması gerekir. Komisyoncu kural olarak sözleşmenin 3. kişi tarafından yerine getirilmemesinden SORUMLU DEĞİLDİR.",
  t: "Komisyoncu", d: 3
},
{
  q: "Komisyoncunun 'bizzat taraf olma' hakkı hangi durumda söz konusudur?",
  o: ["Borsada kayıtlı veya piyasa fiyatı bulunan kambiyo senedi, kıymetli evrak ve ticari malları, aksine talimat yoksa bizzat satabilir veya satın alabilir", "Her türlü malı bizzat alıp satabilir", "Hiçbir şekilde bizzat taraf olamaz", "Sadece taşınmazlarda bizzat taraf olabilir", "Sadece müvekkilin yazılı izniyle"],
  a: 0,
  e: "Komisyoncu, BORSADA KAYITLI VEYA PİYASA FİYATI BULUNAN kambiyo senedi ve diğer kıymetli evrak ile ticari malları, vekalet veren tarafından AKSİNE TALİMAT VERİLMİŞ OLMADIKÇA BİZZAT SATABİLİR VEYA SATIN ALABİLİR.",
  t: "Komisyoncu", d: 3
},

/* ---------- SİMSAR ---------- */
{
  q: "Simsarlık sözleşmesi hangi şekle tabidir?",
  o: ["Kural olarak şekle tabi değildir; ancak taşınmaz simsarlığına ilişkin sözleşmelerin yazılı olması zorunludur", "Her halde yazılı olmalıdır", "Resmi şekilde yapılmalıdır", "Noter onayı gerekir", "Tescil edilmelidir"],
  a: 0,
  e: "Simsarlık sözleşmesi HERHANGİ BİR ŞEKLE TABİ DEĞİLDİR. Ancak TAŞINMAZ SİMSARLIĞINA ilişkin sözleşmelerin YAZILI olarak yapılması ZORUNLUDUR. Simsarlık sözleşmelerine kural olarak VEKALETE ilişkin hükümler uygulanır.",
  t: "Simsar", d: 2
},
{
  q: "Simsarlık sözleşmesi simsara temsil yetkisi verir mi?",
  o: ["Vermez; özel yetki verilmedikçe simsar sözleşme yapamaz, bedeli tahsil edemez, malları teslim alamaz", "Verir; simsar tam yetkilidir", "Sadece sözleşme yapma yetkisi verir", "Sadece tahsilat yetkisi verir", "Tescil edilirse verir"],
  a: 0,
  e: "SİMSARLIK SÖZLEŞMESİ SİMSARA TEMSİL YETKİSİ VERMEZ. Yani simsar, ÖZEL YETKİ VERİLMEDİKÇE kendisini görevlendiren taraf adına SÖZLEŞME YAPAMAZ, BEDELİ TAHSİL EDEMEZ, satım konusu malları TESLİM ALAMAZ.",
  t: "Simsar", d: 3
},
{
  q: "Simsar ücret talep etmek için hangi koşulun gerçekleşmesi şarttır?",
  o: ["Yürütülen aracılık faaliyeti sonucunda sözleşmenin geçerli bir şekilde kurulmuş olması", "Aracılık faaliyetine başlaması", "Müşteri bulması", "Görüşmeleri başlatması", "Sözleşmenin ifa edilmesi"],
  a: 0,
  e: "Simsarın ücret talep edebilmesi için, yürütülen aracılık faaliyeti sonucunda SÖZLEŞMENİN GEÇERLİ BİR ŞEKİLDE KURULMUŞ OLMASI ŞARTTIR. Simsarlık sözleşmesinden doğan alacaklar 5 YILDA zamanaşımına uğrar.",
  t: "Simsar", d: 2
},
{
  q: "Simsar masraflarının ödenmesini isteyebilir mi?",
  o: ["Kural olarak isteyemez; masraflar simsarlık ücreti ile karşılanır ancak sözleşmeye aksi yönde hüküm konulabilir", "Her zaman isteyebilir", "Hiçbir şekilde isteyemez", "Sadece mahkeme kararıyla isteyebilir", "Sadece taşınmaz simsarlığında isteyebilir"],
  a: 0,
  e: "Simsar, yapmış olduğu masrafların ödenmesini KURAL OLARAK İSTEYEMEZ; aracılık faaliyetinin gerektirdiği masraflar SİMSARLIK ÜCRETİ İLE KARŞILANIR. Ancak sözleşmeye masrafların ayrıca ödeneceğine ilişkin hüküm konulabilir. Simsar TARAFSIZ DAVRANMAZ veya dürüstlük kurallarına aykırı olarak DİĞER TARAFTAN ÜCRET SÖZÜ ALIRSA ücret ve masraf talep hakkını KAYBEDER.",
  t: "Simsar", d: 3
},

/* ---------- TİCARET SİCİLİ ---------- */
{
  q: "Ticaret sicili kim tarafından tutulur ve kim tarafından yönetilir?",
  o: ["Ticaret ve sanayi odaları veya ticaret odaları bünyesindeki ticaret sicili müdürlükleri tarafından tutulur; ticaret sicili müdürü tarafından yönetilir", "Doğrudan Ticaret Bakanlığı tarafından tutulur", "Asliye ticaret mahkemesi tarafından tutulur", "Noterler tarafından tutulur", "Valilikler tarafından tutulur"],
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
  o: ["Herkes sicilin içeriğini ve dairede saklanan bütün senet ve vesikaları inceleyebilir, onaylı suretlerini alabilir", "Sadece tacirler inceleyebilir", "Sadece ilgililer inceleyebilir", "Sadece mahkeme kararıyla incelenebilir", "Sicil gizlidir"],
  a: 0,
  e: "TTK md. 35'e göre TİCARET SİCİLİ ALENİDİR (açıktır); HERKES ticaret sicilinin içeriğini ve dairede saklanan BÜTÜN SENET VE VESİKALARI İNCELEYEBİLİR, bunların ONAYLI SURETLERİNİ ALABİLİR.",
  t: "Ticaret Sicili", d: 2
},
{
  q: "TTK md. 30'a göre tescili isteme süresi nedir?",
  o: ["Kural olarak 15 gün; sicil müdürlüğünün yetki çevresi dışında oturanlar için 1 ay", "Her halde 15 gün", "Kural olarak 1 ay, yetki çevresi dışında 3 ay", "Kural olarak 8 gün", "Kural olarak 30 gün"],
  a: 0,
  e: "TTK md. 30'a göre tescili isteme süresi KURAL OLARAK 15 GÜNDÜR. Ancak SİCİL MÜDÜRLÜĞÜNÜN YETKİ ÇEVRESİ DIŞINDA OTURANLAR için bu süre 1 AYDIR.",
  t: "Ticaret Sicili", d: 2
},
{
  q: "Sicil memurunun tescil istemini reddetmesi halinde ilgililer nereye ve hangi süre içinde itiraz edebilir?",
  o: ["Kararın tebliğinden itibaren 8 gün içinde, sicilin bulunduğu yerde ticari davalara bakmakla görevli asliye mahkemesine", "15 gün içinde icra mahkemesine", "8 gün içinde Ticaret Bakanlığına", "1 ay içinde asliye hukuk mahkemesine", "7 gün içinde oda meclisine"],
  a: 0,
  e: "Sicil memuru tescil istemini reddederse ilgililer, kararın kendilerine TEBLİĞİNDEN İTİBAREN 8 GÜN içinde sicilin bulunduğu yerde TİCARİ DAVALARA BAKMAKLA GÖREVLİ ASLİYE MAHKEMESİ nezdinde itiraz edebilirler.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Geçici tescil ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["İlgililer 3 ay içinde mahkemeye başvurduklarını veya anlaştıklarını ispat etmezlerse geçici tescil resen silinir", "Geçici tescil süresizdir", "İlgililer 1 ay içinde başvurmalıdır", "Geçici tescil yapılamaz", "Geçici tescil sadece mahkeme kararıyla yapılır"],
  a: 0,
  e: "Çözümü mahkeme kararına bağlı veya sicil müdürünün kesin tescilinde duraksadığı hususlar ilgililerin istemi üzerine GEÇİCİ olarak tescil olunur. Ancak ilgililer 3 AY içinde mahkemeye başvurduklarını veya aralarında anlaştıklarını ispat etmezlerse GEÇİCİ TESCİL RESEN SİLİNİR.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Ticaret sicili ilanı nerede yapılır?",
  o: ["Bütün Türkiye'ye etken olmak üzere Ankara'da yayımlanan Türkiye Ticaret Sicili Gazetesi ile", "Resmi Gazete ile", "Yerel gazetelerde", "Ticaret odası panosunda", "Ticaret Bakanlığı web sitesinde"],
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
  o: ["Ticaret şirketlerinin tüzel kişilik kazanabilmesi", "Tacir sıfatının kazanılması", "Ticaret unvanının seçilmesi", "İşletme adının kullanılması", "Ticari defterlerin tutulması"],
  a: 0,
  e: "KURUCU etkiye sahip haller: TİCARET ŞİRKETLERİNİN TÜZEL KİŞİLİK KAZANMASI, AŞ'lerde sözleşme değişikliğine ilişkin genel kurul kararları, AŞ'lerde kuruluştan sonra devralma sözleşmeleri ve TİCARİ İŞLEMLERDE TAŞINIR REHNİNİN kurulması.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Ticaret sicili kayıtları üçüncü kişiler hakkında ne zaman hüküm ifade eder?",
  o: ["Kural olarak tescilin Ticaret Sicili Gazetesi ile ilan edildiği günü takip eden iş gününden itibaren", "Tescil tarihinden itibaren", "İlan tarihinden itibaren", "İlanı takip eden 7. günden itibaren", "Öğrenildiği tarihten itibaren"],
  a: 0,
  e: "Ticaret sicili kayıtları, nerede bulunursa bulunsunlar üçüncü kişiler hakkında kural olarak, tescilin TİCARET SİCİLİ GAZETESİ İLE İLAN EDİLDİĞİ GÜNÜ TAKİP EDEN İŞ GÜNÜNDEN İTİBAREN hüküm ifade eder.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Tescilin olumlu ve olumsuz etkisi ne anlama gelir?",
  o: ["Tescil ve ilan olunmuşsa 3. kişilerin bildikleri farzedilir (olumlu); tescil edilmemiş veya ilan olunmamışsa bilmedikleri farzedilir (olumsuz)", "İkisinde de 3. kişilerin bildiği farzedilir", "İkisinde de bilmedikleri farzedilir", "Olumlu etkide bilmedikleri farzedilir", "Etkileri arasında fark yoktur"],
  a: 0,
  e: "OLUMLU ETKİ: bir husus tescil ve ilan olunmuşsa 3. kişilerin BİLDİKLERİ FARZEDİLİR; bilmediklerine dair iddiaları dinlenmez. OLUMSUZ ETKİ: tescili zorunlu bir husus tescil edilmemiş veya ilan olunmamışsa 3. kişilerin BİLMEDİKLERİ FARZEDİLİR.",
  t: "Ticaret Sicili", d: 3
},
{
  q: "Tescil kaydı ile ilan edilen durum arasında aykırılık bulunması halinde ne olur?",
  o: ["Tescil edilmiş gerçek durumu bildikleri ispat edilmediği sürece üçüncü kişilerin ilan edilen duruma güvenleri korunur", "Her halde tescil edilen durum esas alınır", "Her halde ilan edilen durum esas alınır", "İşlem geçersiz olur", "Mahkeme karar verir"],
  a: 0,
  e: "GÖRÜNÜŞE GÜVEN ilkesi: Tescil kaydı ile ilan edilen durum arasında aykırılık bulunması halinde, TESCİL EDİLMİŞ OLAN GERÇEK DURUMU BİLDİKLERİ İSPAT EDİLMEDİĞİ SÜRECE, üçüncü kişilerin İLAN EDİLEN DURUMA GÜVENLERİ KORUNUR.",
  t: "Ticaret Sicili", d: 3
},

/* ---------- TİCARET UNVANI ---------- */
{
  q: "Gerçek kişi tacirlerde ticaret unvanının çekirdek kısmı neden oluşur?",
  o: ["Kişinin ad ve soyadından; kısaltılmadan yazılması gerekir", "İşletme konusundan", "Sadece soyadından", "İşletme adından", "Fantezi bir isimden"],
  a: 0,
  e: "Gerçek kişi tacirlerde ticaret unvanının ÇEKİRDEK kısmı KİŞİNİN AD VE SOYADINDAN oluşur. Ad ve soyadın KISALTILMADAN yazılması gerekir; unvan 'O. Şener' şeklinde yazılamaz.",
  t: "Ticaret Unvanı", d: 2
},
{
  q: "Kollektif şirketlerde ticaret unvanının çekirdek kısmı neden oluşur?",
  o: ["Ortaklardan birinin ad ve soyadıyla şirketi ve türünü gösteren ibareden", "Tüm ortakların ad ve soyadından", "İşletme konusu ve şirket türünden", "Sadece şirket türünden", "Fantezi bir isimden"],
  a: 0,
  e: "Kollektif şirketlerde çekirdek, ORTAKLARDAN BİRİNİN AD VE SOYADIYLA ŞİRKETİ VE TÜRÜNÜ GÖSTEREN İBAREDEN oluşur. Ortak sayısı ikiden fazlaysa 'Oğuz Şener ve Ortakları Kollektif Şirketi' şeklinde unvan da alınabilir.",
  t: "Ticaret Unvanı", d: 2
},
{
  q: "Komandit şirketlerin ticaret unvanında komanditer ortağın adı yer alırsa ne olur?",
  o: ["Bu ortak üçüncü kişilere karşı komandite ortak gibi sorumlu olur", "Unvan geçersiz olur", "Hiçbir sonuç doğmaz", "Ortak şirketten çıkarılır", "Unvan resen silinir"],
  a: 0,
  e: "Komandit şirketlerin ticaret unvanlarında KOMANDİTER ORTAKLARIN ad ve soyadlarının bulunması YASAKTIR. Komanditer ortağın ismi ticaret unvanına konulursa BU ORTAK ÜÇÜNCÜ KİŞİLERE KARŞI KOMANDİTE ORTAK GİBİ SORUMLU OLUR.",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "Limited, anonim ve kooperatif şirketlerde ticaret unvanının çekirdek kısmı neden oluşur?",
  o: ["İşletme konusu ile şirketin türünü gösteren kelimelerden", "Ortaklardan birinin ad ve soyadından", "Sadece şirket türünden", "Kurucunun ad ve soyadından", "Fantezi bir isimden"],
  a: 0,
  e: "Limited, anonim ve kooperatif şirketlerin ticaret unvanının çekirdeği İŞLETME KONUSU İLE ŞİRKETİN TÜRÜNÜ GÖSTEREN KELİMELERDEN oluşur (örn. 'Gıda-Ticaret Limited Şirketi'). Buna karşılık 'Oğuz Şener Anonim Şirketi' TTK'ya uygun bir unvan DEĞİLDİR.",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "Anonim şirket unvanında şirket türünü gösteren ibare hangi durumda kısaltılarak yazılabilir?",
  o: ["Unvanda bir gerçek kişinin ad veya soyadı ek olarak yer almadığı takdirde", "Her durumda kısaltılabilir", "Hiçbir durumda kısaltılamaz", "Sadece tescil sonrası kısaltılabilir", "Sadece kooperatiflerde kısaltılabilir"],
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
  q: "Aşağıdaki hallerden hangisinde ticaret unvanında ek kullanılması ZORUNLUDUR?",
  o: ["Unvanın Türkiye'nin herhangi bir sicil dairesinde daha önce tescil edilmiş bir unvandan ayırt edilmesini sağlamak için", "Her durumda ek zorunludur", "Sadece anonim şirketlerde", "Sadece gerçek kişi tacirlerde", "Ek kullanmak hiçbir zaman zorunlu değildir"],
  a: 0,
  e: "Ek kullanmanın zorunlu olduğu haller: (1) unvanın DAHA ÖNCE TESCİL EDİLMİŞ BİR UNVANDAN AYIRT EDİLEBİLMESİ için, (2) her ŞUBE kendi merkezinin unvanını şube olduğunu belirterek kullanmak zorundadır, (3) TASFİYE haline giren şirketlerin unvanına 'TASFİYE HALİNDE' ibaresi eklenir.",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "Ticaret unvanı işletmeden ayrı olarak devredilebilir mi?",
  o: ["Devredilemez; bir işletmenin devri, aksi açıkça kabul edilmedikçe unvanın da devri sonucunu doğurur", "Devredilebilir", "Sadece tescil ile devredilebilir", "Sadece mahkeme kararıyla devredilebilir", "Sadece tacirler arasında devredilebilir"],
  a: 0,
  e: "TİCARET UNVANI TİCARİ İŞLETMEDEN AYRI OLARAK DEVREDİLEMEZ. Bir işletmenin devri, AKSİ AÇIKÇA KABUL EDİLMİŞ OLMADIKÇA unvanın da devri sonucunu doğurur ve devralan unvanı aynen kullanma hakkına sahiptir. (İşletme adı ise işletmeden AYRI OLARAK TEK BAŞINA DEVREDİLEBİLİR.)",
  t: "Ticaret Unvanı", d: 3
},
{
  q: "Tescil ve ilan edilmiş ticaret unvanını kullanma hakkının kapsamı nedir?",
  o: ["Hem gerçek hem tüzel kişi tacirler tescil ve ilan ettirdikleri unvanlarını ülke sınırları içinde tekel şeklinde kullanma hakkına sahiptir", "Sadece il sınırları içinde korunur", "Sadece tüzel kişiler için tekel hakkı vardır", "Tekel hakkı yoktur", "Sadece sicil dairesi çevresinde korunur"],
  a: 0,
  e: "Usulen tescil ve ilan edilmiş ticaret unvanını kullanma hakkı SADECE SAHİBİNE AİTTİR. Hem gerçek hem tüzel kişi tacirler tescil ve ilan ettirdikleri ticaret unvanlarını ÜLKE SINIRLARI İÇİNDE TEKEL ŞEKLİNDE kullanma hakkına sahiptirler.",
  t: "Ticaret Unvanı", d: 2
},
{
  q: "Tescil edilmemiş ticaret unvanları nasıl korunur?",
  o: ["Haksız rekabet hükümlerine göre (TTK md. 54 vd.)", "TTK md. 52'ye göre özel olarak", "Korunmaz", "Marka hükümlerine göre", "Sadece ceza hükümlerine göre"],
  a: 0,
  e: "TESCİL OLUNMUŞ ticaret unvanları TTK md. 52'ye göre ÖZEL OLARAK korunur. TESCİL EDİLMEMİŞ ticaret unvanları ise HAKSIZ REKABET HÜKÜMLERİNE (TTK md. 54 vd.) göre korunabilir.",
  t: "Ticaret Unvanı", d: 2
},
{
  q: "Kollektif şirkette adı ticaret unvanında yer alan ortak ayrılırsa unvan ne olur?",
  o: ["Ayrılan kişinin yazılı izni ile aynen devam edebilir; izin vermezse unvanda gerekli değişiklik yapılarak tescil ve ilan olunur", "Unvan kendiliğinden değişir", "Unvan aynen devam eder, izin gerekmez", "Şirket tasfiye edilir", "Unvan silinir"],
  a: 0,
  e: "Kollektif, komandit şirketler ile donatma iştirakinde adı ticaret unvanında yer alan ortak/donatan ayrılırsa, ticaret unvanı AYRILAN KİŞİNİN YAZILI İZİNLERİ İLE aynen devam edebilir. İzin vermezse unvanda GEREKLİ DEĞİŞİKLİK YAPILARAK durum tescil ve ilan olunur.",
  t: "Ticaret Unvanı", d: 3
},

/* ---------- İŞLETME ADI ---------- */
{
  q: "TTK md. 53'e göre işletme adının işlevi nedir?",
  o: ["İşletme sahibi ile ilgili olmaksızın doğrudan işletmeyi tanıtmak ve benzeri işletmelerden ayırt etmek", "Taciri göstermek", "Şirketin türünü göstermek", "Ortakları göstermek", "İşletmenin sermayesini göstermek"],
  a: 0,
  e: "TTK md. 53'e göre İŞLETME ADI, işletme sahibi ile ilgili olmaksızın DOĞRUDAN İŞLETMEYİ TANITMAK ve BENZERİ İŞLETMELERDEN AYIRT ETMEK için kullanılır (Turkuaz Otel, Çınar Sineması gibi). TİCARET UNVANI ise TACİRİ gösterir.",
  t: "İşletme Adı", d: 2
},
{
  q: "İşletme adı ile ticaret unvanı arasındaki farklar bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Ticaret unvanını sadece tacirler kullanabilir, işletme adını esnaf da kullanabilir; tacirin unvan kullanması zorunlu iken işletme adı kullanması zorunlu değildir", "İkisini de sadece tacirler kullanabilir", "İkisinin kullanılması da zorunludur", "İkisinin kullanılması da isteğe bağlıdır", "İşletme adını sadece tacirler kullanabilir"],
  a: 0,
  e: "TİCARET UNVANINI SADECE TACİRLER kullanabilir; İŞLETME ADINI ESNAF DA KULLANABİLİR. Tacirin ticaret unvanı kullanması ZORUNLU iken, işletme adı kullanmak ZORUNDA DEĞİLDİR. Ancak işletme adı kullanıyorsa bunu TESCİL ETTİRMEKLE YÜKÜMLÜDÜR.",
  t: "İşletme Adı", d: 2
},

/* ---------- HAKSIZ REKABET ---------- */
{
  q: "TTK md. 54'e göre haksız rekabete ilişkin hükümlerin amacı nedir?",
  o: ["Bütün katılanların menfaatine, dürüst ve bozulmamış rekabetin sağlanması", "Sadece tacirlerin korunması", "Sadece tüketicilerin korunması", "Piyasada tekel oluşumunun engellenmesi", "Fiyatların denetlenmesi"],
  a: 0,
  e: "TTK md. 54'e göre haksız rekabete ilişkin TTK hükümlerinin amacı, BÜTÜN KATILANLARIN MENFAATİNE, DÜRÜST VE BOZULMAMIŞ REKABETİN SAĞLANMASIDIR.",
  t: "Haksız Rekabet", d: 2
},
{
  q: "Haksız rekabetten söz edilebilmesi için fail ile mağdur arasında rekabet ilişkisi ve kusur gerekir mi?",
  o: ["İkisi de gerekmez; kusur sadece hangi tür davaların açılabileceğinin belirlenmesinde önem taşır", "İkisi de gerekir", "Sadece rekabet ilişkisi gerekir", "Sadece kusur gerekir", "Kusur her halde gerekir"],
  a: 0,
  e: "Haksız rekabetten söz edilebilmesi için fail ile mağdur arasında REKABET İLİŞKİSİNİN BULUNMASINA GEREK YOKTUR. Ayrıca KUSURA DA GEREK YOKTUR; failin kusurlu davranıp davranmadığı sadece HANGİ TÜR DAVALARIN AÇILABİLECEĞİNİN belirlenmesi yönünden önem arz eder.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Haksız rekabet nedeniyle açılabilecek davalar arasında hangileri için failin kusurlu olması ŞART DEĞİLDİR?",
  o: ["Tespit, men ve hukuka aykırı durumun ortadan kaldırılması davaları", "Maddi tazminat davası", "Manevi tazminat davası", "Tüm davalar için kusur şarttır", "Sadece tespit davası"],
  a: 0,
  e: "Haksız rekabet dolayısıyla TESPİT, MEN ve HUKUKA AYKIRI DURUMUN ORTADAN KALDIRILMASI davalarının açılabilmesi için FAİLİN KUSURLU OLMASI ŞART DEĞİLDİR. Buna karşılık MADDİ TAZMİNAT davası açılması FAİLİN KUSURUNUN BULUNMASI koşuluna bağlıdır.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Haksız rekabette meslekî ve ekonomik birlikler ile tüketici kuruluşları hangi davaları açabilir?",
  o: ["Tespit, men ve maddi durumun ortadan kaldırılması davalarını; tazminat davası açamazlar", "Tüm davaları açabilirler", "Sadece tazminat davası açabilirler", "Hiçbir dava açamazlar", "Sadece tespit davası açabilirler"],
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
  o: ["Haksız rekabeti yapan kişi (fail), istihdam eden (adam çalıştıran) ve basın-yayın-iletişim-bilişim kuruluşları", "Sadece fail", "Sadece istihdam eden", "Sadece basın kuruluşları", "Sadece tacirler"],
  a: 0,
  e: "Haksız rekabette DAVALI TARAF: HAKSIZ REKABETİ YAPAN KİŞİ (FAİL), İSTİHDAM EDEN (adam çalıştıran) ve BASIN, YAYIN, İLETİŞİM VE BİLİŞİM KURULUŞLARI olabilir.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Haksız rekabet davalarında zamanaşımı süreleri nedir?",
  o: ["Hakkın doğumunun öğrenildiği günden itibaren 1 yıl ve her halde doğumundan itibaren 3 yıl; men davalarında zamanaşımı söz konusu değildir", "1 yıl ve her halde 10 yıl", "2 yıl ve her halde 5 yıl", "6 ay ve her halde 3 yıl", "Her halde 5 yıl"],
  a: 0,
  e: "Haksız rekabet davalarının, davaya hakkı olan tarafın bu hakkının doğumunu ÖĞRENDİĞİ GÜNDEN İTİBAREN 1 YIL ve her halde bunların DOĞUMUNDAN İTİBAREN 3 YIL içinde açılması gerekir. MEN DAVALARINDA ZAMANAŞIMI SÜRESİ SÖZ KONUSU DEĞİLDİR. Haksız rekabet fiili daha uzun ceza zamanaşımına tabi bir suç oluşturuyorsa ceza zamanaşımı hukuk davaları için de geçerlidir.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Haksız rekabet suçlarının cezası ve takibi nasıldır?",
  o: ["İki yıla kadar hapis veya adli para cezası; takibi şikayete bağlıdır", "Beş yıla kadar hapis; resen takip edilir", "Sadece adli para cezası; resen takip edilir", "İki yıla kadar hapis; resen takip edilir", "Ceza öngörülmemiştir"],
  a: 0,
  e: "TTK md. 62'de gösterilen fiiller dolayısıyla suçu işleyenler İKİ YILA KADAR HAPİS VEYA ADLİ PARA CEZASIYLA cezalandırılırlar. HAKSIZ REKABET SUÇLARI TAKİBİ ŞİKAYETE BAĞLI SUÇLARDANDIR. Şikayet hakkı, HUKUK DAVASI AÇMA HAKKINA SAHİP olanlara aittir.",
  t: "Haksız Rekabet", d: 3
},
{
  q: "Men ve hukuka aykırı durumun ortadan kaldırılması davaları sonucunda verilen hüküm kimler hakkında icra olunur?",
  o: ["Fail dışında, haksız rekabete konu malları doğrudan veya dolaylı olarak failden ticari amaçla elde etmiş kişiler hakkında da", "Sadece fail hakkında", "Sadece istihdam eden hakkında", "Sadece basın kuruluşları hakkında", "Sadece tacirler hakkında"],
  a: 0,
  e: "Men ve hukuka aykırı durumun ortadan kaldırılması davaları sonucunda fail aleyhine verilen hüküm, HAKSIZ REKABETE KONU OLUŞTURAN MALLARI DOĞRUDAN VEYA DOLAYLI BİR ŞEKİLDE FAİLDEN TİCARİ AMAÇLA ELDE ETMİŞ KİŞİLER HAKKINDA DA İCRA OLUNUR.",
  t: "Haksız Rekabet", d: 3
},

/* ---------- TİCARİ DEFTERLER ---------- */
{
  q: "TTK'da ismen sayılmış, tutulması zorunlu ticari defterler hangileridir?",
  o: ["Yevmiye defteri, defteri kebir, envanter defteri, pay defteri, yönetim kurulu karar defteri ve genel kurul toplantı ve müzakere defteri", "Sadece yevmiye defteri ve defteri kebir", "Kasa defteri, envanter defteri ve pay defteri", "Sadece envanter ve pay defteri", "İşletme defteri ve kasa defteri"],
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
  q: "Defter ve belgeler afet veya hırsızlık sebebiyle ziyaa uğrarsa tacir ne yapabilir?",
  o: ["Ziyaı öğrendiği tarihten itibaren 30 gün içinde ticari işletmesinin bulunduğu yer yetkili mahkemesinden belge verilmesini isteyebilir; bu dava hasımsız açılır", "15 gün içinde asliye ticaret mahkemesine başvurur", "30 gün içinde ticaret siciline bildirir", "Hiçbir şey yapamaz", "1 yıl içinde dava açar"],
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
  o: ["Mirasa, mal ortaklığına ve şirket tasfiyesine ilişkin uyuşmazlıklarda", "Tüm ticari uyuşmazlıklarda", "Sadece iflas davalarında", "Sadece haksız rekabet davalarında", "Hiçbir uyuşmazlıkta"],
  a: 0,
  e: "Malvarlığı hukukuna ilişkin olan, özellikle de MİRASA, MAL ORTAKLIĞINA ve ŞİRKET TASFİYESİNE ilişkin uyuşmazlıklarda mahkeme, ticari defterlerin TESLİMİNE ve BÜTÜN İÇERİKLERİNİN İNCELENMESİNE karar verebilir.",
  t: "Ticari Defterler", d: 3
},
{
  q: "Ticari defterlerin sahibi ALEYHİNE kanıt olması bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Defterler kanuna uygun tutulmuşsa lehe ve aleyhe kayıtlar birlikte dikkate alınır; uygun tutulmamışsa sadece aleyhe kayıtlar dikkate alınır", "Her halde sadece aleyhe kayıtlar dikkate alınır", "Her halde lehe ve aleyhe kayıtlar birlikte dikkate alınır", "Defterler kanıt oluşturmaz", "Sadece lehe kayıtlar dikkate alınır"],
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
  o: ["O kişinin deftere geçirdiği kayıtlar tacirin kendisi tarafından tutulmuş sayılır; tacir kusuru memuruna yükleyerek sorumluluktan kurtulamaz", "Tacir sorumluluktan kurtulur", "Sorumluluk sadece defter tutan kişiye ait olur", "Sorumluluk paylaşılır", "Tacir sadece kasıt halinde sorumlu olur"],
  a: 0,
  e: "Tacirin defterlerini BİZZAT TUTMASINA GEREK YOKTUR. Ancak defter tutma işini bir başkasına bırakmış bile olsa BU KİŞİNİN DEFTERE GEÇİRDİĞİ KAYITLAR TACİRİN KENDİSİ TARAFINDAN TUTULMUŞ SAYILIR. TACİR, KUSURU DEFTER TUTAN MEMURUNA YÜKLEYEREK SORUMLULUKTAN KURTULAMAZ.",
  t: "Ticari Defterler", d: 3
},
{
  q: "Ticari defterleri tutma yükümlülüğü ne zaman başlar?",
  o: ["Tacir sıfatının kazanılmasıyla başlar ve bu sıfatın kaybı ile sona erer; tescille yükümlü işletme sahipleri için tescil yükümlülüğünün doğduğu andan itibaren geçerlidir", "Sadece tescil ile başlar", "İlk kâr elde edildiğinde başlar", "Vergi kaydı açıldığında başlar", "Ticaret odasına kayıtla başlar"],
  a: 0,
  e: "Ticari defterleri tutma yükümlülüğü TACİR SIFATININ KAZANILMASIYLA BAŞLAR ve BU SIFATIN KAYBI İLE SONA ERER. İşletmesini ticaret siciline tescil ettirmekle yükümlü olan işletme sahipleri için bu yükümlülük, TESCİL ETTİRME YÜKÜMLÜLÜĞÜNÜN DOĞDUĞU ANDAN İTİBAREN geçerlidir.",
  t: "Ticari Defterler", d: 3
},
{
  q: "Bir ticari işletmenin adi şirket aracılığıyla işletilmesi halinde defter tutma yükümlülüğü nasıldır?",
  o: ["Ortaklar tacir niteliğine sahip olduklarından her bir adi şirket ortağının ayrı ayrı defter tutması gerekir", "Adi şirket adına tek defter tutulur", "Defter tutma yükümlülüğü yoktur", "Sadece yönetici ortak defter tutar", "Sadece tescil edilirse defter tutulur"],
  a: 0,
  e: "Bir ticari işletmenin ADİ ŞİRKET aracılığıyla işletilmesi halinde ortaklar TACİR niteliğine sahip olduklarından, HER BİR ADİ ŞİRKET ORTAĞININ AYRI AYRI DEFTER TUTMASI gerekir. Tacirin birden fazla işletmesi varsa HER BİR İŞLETME İÇİN AYRI defter tutulur.",
  t: "Ticari Defterler", d: 3
}

]);

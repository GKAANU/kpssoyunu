/* Borçlar Hukuku — 2. bölüm (korkutma, gabin, şekil, genel işlem koşulları,
   hükümsüzlük, temsil) */
KPSS.registerBank('borclar', [

/* ---------- KORKUTMA ---------- */
{
  q: "Korkutmanın şartları arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Korkutulanın maddi zarara uğramış olması", "Korkutmanın kişiye veya yakınlarına yapılmış olması", "Ağır ve derhal gerçekleşecek bir tehlike olması", "Sözleşmenin korku altında yapılmış olması", "Korkutmanın hukuka aykırı olması"],
  a: 0,
  e: "KORKUTMANIN ŞARTLARI: korkutma eylemi, korkutmanın KİŞİYE VEYA YAKINLARINA yapılmış olması, AĞIR VE DERHAL GERÇEKLEŞECEK bir tehlike olması, sözleşmenin KORKU ALTINDA yapılmış olması ve korkutmanın HUKUKA AYKIRI olması. Zararın doğması şart değildir.",
  t: "Korkutma", d: 2
},
{
  q: "Üçüncü kişinin korkutması halinde sözleşmenin iptali mümkün müdür?",
  o: ["Mümkündür; karşı tarafın bunu bilip bilmemesi önemsizdir", "Mümkün değildir", "Sadece karşı taraf biliyorsa mümkündür", "Sadece yazılı sözleşmelerde mümkündür", "Sadece mahkeme kararıyla mümkündür"],
  a: 0,
  e: "Korkutma sonucu sözleşme iptali ÜÇÜNCÜ KİŞİ KORKUTMALARINDA DA GEÇERLİDİR. KARŞI TARAFIN BUNU BİLİP BİLMEMESİ ÖNEMSİZDİR. (Aldatmada ise 3. kişi aldatmışsa karşı tarafın bilmesi veya bilmesi gerekmesi aranır.)",
  t: "Korkutma", d: 3
},
{
  q: "Korkutan bir üçüncü kişi olup diğer taraf korkutmayı bilmiyorsa veya bilecek durumda değilse korkutulanın durumu nedir?",
  o: ["Sözleşmeyle bağlı kalmak istemiyorsa, hakkaniyet gerektiriyorsa diğer tarafa tazminat ödemekle yükümlüdür", "Hiçbir yükümlülüğü yoktur", "Sözleşmeyle bağlı kalmak zorundadır", "Sadece üçüncü kişiye tazminat öder", "İptal hakkı yoktur"],
  a: 0,
  e: "Korkutan bir ÜÇÜNCÜ KİŞİ olup diğer taraf korkutmayı BİLMİYORSA veya BİLECEK DURUMDA DEĞİLSE, sözleşmeyle bağlı kalmak istemeyen korkutulan, HAKKANİYET GEREKTİRİYORSA DİĞER TARAFA TAZMİNAT ÖDEMEKLE YÜKÜMLÜDÜR.",
  t: "Korkutma", d: 3
},
{
  q: "Korkutulan sözleşmeyi iptal ettiyse ve etmediyse hangi zararları talep edebilir?",
  o: ["İptal etmişse menfi zararlarını; sözleşmeyi onamış ya da süresinde iptali kaçırmışsa müspet zararının tazminini talep edebilir", "Her halde sadece menfi zarar", "Her halde sadece müspet zarar", "Hiçbir zarar talep edemez", "Sadece manevi tazminat isteyebilir"],
  a: 0,
  e: "Korkutulan sözleşmeyi İPTAL ETMİŞ olsa dahi uğradığı MENFİ ZARARLARIN karşılanmasını talep edebilir. Sözleşmenin ONANMASI halinde ya da SÜRESİNDE İPTALİ KAÇIRMASI halinde ise korkutulanın MÜSPET ZARARIN tazminini talep hakkı söz konusudur. Üçüncü kişinin korkutmasında tazminat bu kişiden HAKSIZ FİİL hükümlerince istenebilir.",
  t: "Korkutma", d: 3
},
{
  q: "Korkutmada iptal süresi nedir?",
  o: ["Korkunun ortadan kalkmasından başlayarak 1 yıl", "Sözleşmenin kurulmasından başlayarak 1 yıl", "Korkutmayı öğrenmeden başlayarak 1 yıl", "2 yıl", "5 yıl"],
  a: 0,
  e: "Korkutmada iptal süresi KORKUNUN ORTADAN KALKMASINDAN BAŞLAYARAK 1 YILDIR. (Yanılmada yanılmayı öğrenmekten, aldatmada aldatmayı öğrenmekten itibaren 1 yıldır.)",
  t: "Korkutma", d: 2
},

/* ---------- İRADE BOZUKLUĞUNUN SONUÇLARI ---------- */
{
  q: "Sözleşme iptal hakkının hukuki niteliği nedir?",
  o: ["Yenilik doğuran haklar kategorisine girer ve şekil şartına bağlı tutulmadan kullanılabilir", "Alacak hakkıdır", "Ayni haktır", "Def'i hakkıdır", "Şekle bağlı bir haktır"],
  a: 0,
  e: "SÖZLEŞME İPTAL HAKKI YENİLİK DOĞURAN NİTELİKTE HAKLAR kategorisine girmektedir ve ŞEKİL ŞARTINA BAĞLI TUTULMADAN iptal edilebilir. Sözleşme 1 YIL içerisinde iptal edilebilir; bu süre HAK DÜŞÜRÜCÜDÜR.",
  t: "İrade Bozukluğu Sonuçları", d: 2
},
{
  q: "İrade sakatlığı hallerini hakim re'sen dikkate alabilir mi?",
  o: ["Hayır; ancak taraflarca ileri sürülür. Hakim sadece hak düşürücü süre olan 1 yılı re'sen dikkate alabilir", "Evet, tümünü re'sen dikkate alır", "Hayır, süreyi de dikkate alamaz", "Sadece korkutmayı re'sen dikkate alır", "Sadece yazılı sözleşmelerde dikkate alır"],
  a: 0,
  e: "Bir sözleşmedeki İRADE SAKATLIĞI HALLERİ ANCAK TARAFLARCA İLERİ SÜRÜLÜR; HAKİM RE'SEN DİKKATE ALAMAZ. Hakim ancak HAK DÜŞÜRÜCÜ SÜRE OLAN 1 YILI RE'SEN DİKKATE ALABİLİR.",
  t: "İrade Bozukluğu Sonuçları", d: 3
},
{
  q: "İrade sakatlığı altındaki kişi sözleşmeyi nasıl geçerli hale getirebilir?",
  o: ["Sözleşmeye icazet vererek; ayrıca 1 yıllık sürenin sona ermesi üzerine de sözleşme geçerli hale gelir", "Sadece yazılı onayla", "Sadece mahkeme kararıyla", "Hiçbir şekilde geçerli hale gelmez", "Sadece karşı tarafın onayıyla"],
  a: 0,
  e: "İrade sakatlığı altındaki kişi SÖZLEŞMEYE İCAZET VEREREK onu GEÇERLİ HALE GETİREBİLİR. Ayrıca 1 YILLIK SÜRENİN SONA ERMESİ üzerine de sözleşme geçerli hale gelir. YANILMA HARİÇ DAİMİ DEFİ HAKLARI SAKLIDIR.",
  t: "İrade Bozukluğu Sonuçları", d: 3
},
{
  q: "İptal halinde önceden ifa edilenler hangi hükümlere göre iade edilir?",
  o: ["Sebepsiz zenginleşme hükümlerine göre", "Haksız fiil hükümlerine göre", "Vekalet hükümlerine göre", "İstihkak hükümlerine göre", "İade edilmez"],
  a: 0,
  e: "İptal, EDİM YÜKÜMLÜLÜĞÜNÜ SONA ERDİREN etkidedir. ÖNCEDEN İFA EDİLENLER SEBEPSİZ ZENGİNLEŞME ile iade edilir.",
  t: "İrade Bozukluğu Sonuçları", d: 2
},

/* ---------- AŞIRI YARARLANMA (GABİN) ---------- */
{
  q: "Aşırı yararlanma (gabin) nedir ve hangi sözleşmelerde mümkündür?",
  o: ["Edimler arası aşırı orantısızlıktır ve ancak tam iki tarafa borç yükleyen sözleşmelerde mümkündür", "İrade ile beyan uyumsuzluğudur ve tüm sözleşmelerde mümkündür", "Tek tarafa borç yükleyen sözleşmelerde mümkündür", "Sadece ticari sözleşmelerde mümkündür", "Sadece taşınmaz satımında mümkündür"],
  a: 0,
  e: "AŞIRI YARARLANMA (GABİN), EDİMLER ARASI AŞIRI ORANTISIZLIK olarak tanımlanabilir. Açık bir orantısızlık aranan ilk şarttır ve bu da ANCAK TAM İKİ TARAFA BORÇ YÜKLEYEN SÖZLEŞMELERDE MÜMKÜNDÜR.",
  t: "Aşırı Yararlanma", d: 2
},
{
  q: "Aşırı yararlanmanın ikinci şartı nedir?",
  o: ["Orantısızlığın taraflardan birinin zor durumda olmasından, düşüncesizliğinden ya da deneyimsizliğinden kaynaklanması (faydalanma amacı)", "Sözleşmenin yazılı olması", "Zararın büyük olması", "Karşı tarafın tacir olması", "Sözleşmenin resmi şekilde yapılması"],
  a: 0,
  e: "Aşırı yararlanmanın ikinci şartı, bu orantısızlığın taraflardan birinin ZOR BİR DURUM İÇİNDE OLMASINDAN, DÜŞÜNCESİZLİĞİ ya da DENEYİMSİZLİĞİNDEN kaynaklanması gerekliliğidir; yani FAYDALANMA AMACI aranır.",
  t: "Aşırı Yararlanma", d: 2
},
{
  q: "Aşırı yararlanmada zarar görenin hakları nelerdir?",
  o: ["Sözleşmeyi iptal hakkına sahiptir, menfi zarar talebinde bulunabilir veya sözleşmeye bağlı kalarak orantısızlığın giderilmesini isteyebilir", "Sadece iptal edebilir", "Sadece tazminat isteyebilir", "Hiçbir hakkı yoktur", "Sadece orantısızlığın giderilmesini isteyebilir"],
  a: 0,
  e: "Aşırı yararlanmada zarar gören SÖZLEŞMEYİ İPTAL HAKKINA sahiptir; MENFİ ZARAR TALEBİ mümkündür. Ayrıca SÖZLEŞMEYE BAĞLI KALARAK ORANTISIZLIĞIN GİDERİLMESİNİ İSTEMEK de mümkündür. İptal öncesi ve sonrası ifa yönünden irade sakatlığı ile aynı sonuçlar geçerlidir.",
  t: "Aşırı Yararlanma", d: 3
},
{
  q: "Aşırı yararlanma kaynaklı iptal süreleri nedir?",
  o: ["Düşüncesizlik/deneyimsizlikte bunları öğrenmeden, zor durumda kalmada zor durumun ortadan kalkmasından başlayarak 1 yıl; her halde sözleşmenin kurulmasından başlayarak 5 yıl", "Her halde 1 yıl", "Her halde 5 yıl", "Her halde 2 yıl", "Süre yoktur"],
  a: 0,
  e: "Aşırı yararlanmada iptal süresi: DÜŞÜNCESİZLİĞİNDEN VEYA DENEYİMSİZLİĞİNDEN kaynaklı hallerde BUNLARI ÖĞRENMEDEN başlayarak; ZOR DURUMDA KALDIĞI hallerde ise ZOR DURUMUN ORTADAN KALKMASINDAN başlayarak 1 SENE, HER HALDE SÖZLEŞMENİN KURULMASINDAN başlayarak 5 YIL içindedir.",
  t: "Aşırı Yararlanma", d: 3
},

/* ---------- ŞEKİL ---------- */
{
  q: "Sözleşmelerde şekil konusundaki temel kural nedir?",
  o: ["Kanunda aksine hüküm bulunmadığı sürece sözleşme herhangi bir geçerlilik şekline tabi değildir (şekil serbestisi)", "Tüm sözleşmeler yazılı olmalıdır", "Tüm sözleşmeler resmi şekilde yapılmalıdır", "Şekil her halde geçerlilik şartıdır", "Sözlü sözleşme geçersizdir"],
  a: 0,
  e: "TEMEL KURAL, sözleşmenin şeklinin KANUNDA AKSİNE BİR HÜKÜM BULUNMADIĞI SÜRECE HERHANGİ BİR GEÇERLİLİK ŞEKLİNE TABİ OLMADIĞIDIR. Bu da ŞEKİL SERBESTİSİ anlamına gelir.",
  t: "Şekil", d: 2
},
{
  q: "Kanunun öngördüğü geçerlilik şekline uyulmamasının yaptırımı nedir?",
  o: ["Sözleşme kesin hükümsüzdür ve hakim re'sen nazara alır", "Sözleşme iptal edilebilir", "Sözleşme askıda hükümsüzdür", "Sözleşme geçerlidir ancak ispat edilemez", "Sadece taraflar ileri sürebilir"],
  a: 0,
  e: "KANUN, BİR SÖZLEŞMENİN NASIL YAPILACAĞINI EMRETMİŞSE BU BİR GEÇERLİLİK ŞARTIDIR ve buna UYULMAMASI halinde sözleşme KESİN HÜKÜMSÜZDÜR. HAKİM RE'SEN NAZARA ALIR. Kanunun öngördüğü şekil sözleşmenin geçerliliğine etki etmiyorsa buna İSPAT ŞEKLİ denir.",
  t: "Şekil", d: 2
},
{
  q: "Sözleşmenin şekle uyulmadan yapıldığını bilmeyen tarafın hakkı nedir?",
  o: ["Sebepsiz zenginleşme hükümlerine göre verdiklerini geri isteyebilir; bilip de ifa edenler isteyemez (bağışlama hükmü ile muamele görür)", "Hiçbir hakkı yoktur", "Her halde geri isteyebilir", "Sadece tazminat isteyebilir", "Sözleşmeye devam etmek zorundadır"],
  a: 0,
  e: "Sözleşmenin şekle uyulmadan yapıldığını BİLMEYEN taraf SEBEPSİZ ZENGİNLEŞME hükümlerine göre verdiklerini GERİ İSTEYEBİLİR. BİLİP DE İFA EDENLER verdiklerini İSTEYEMEZLER; bu artık BAĞIŞLAMA HÜKMÜ ile muamele görür.",
  t: "Şekil", d: 3
},
{
  q: "Şekle aykırı sözleşmelerin şekle uygun yapılmış gibi bağlayıcı kabul edildiği haller arasında aşağıdakilerden hangisi vardır?",
  o: ["Taraflar kendi rızaları ile sözleşmenin asli edimlerini ifa etmişlerse", "Sözleşme yazılı hale getirilirse", "Tescil edilirse", "Noter onayı alınırsa", "Hiçbir halde bağlayıcı olmaz"],
  a: 0,
  e: "Şekle aykırı sözleşmeler şu hallerde ŞEKLE UYGUN YAPILMIŞ GİBİ BAĞLAYICI kabul edilirler: TARAFLAR KENDİ RIZALARI İLE SÖZLEŞMENİN ASLİ EDİMLERİNİ İFA ETMİŞLERSE, butlanı ileri süren sakatlığa KENDİ HİLESİYLE SEBEP OLMUŞSA ve sakatlığı ileri sürmesi HAKKIN KÖTÜYE KULLANIMI sonucunu doğuracaksa.",
  t: "Şekil", d: 3
},
{
  q: "Kanunun öngördüğü geçerlilik şekilleri hangileridir?",
  o: ["Sözlü, yazılı, resmi, ilana dayalı ve tescile dayalı şekil", "Sadece yazılı ve resmi şekil", "Sadece resmi şekil", "Yazılı ve tescile dayalı şekil", "Sadece sözlü ve yazılı şekil"],
  a: 0,
  e: "Kanunun öngördüğü geçerlilik koşulları: SÖZLÜ ŞEKİL, YAZILI ŞEKİL, RESMİ ŞEKİL, İLANA DAYALI ve TESCİLE DAYALI şekil.",
  t: "Şekil", d: 2
},
{
  q: "Sözlü şekil şartı hangi alanlarda görülür ve örnekleri nelerdir?",
  o: ["Genelde aile ve miras hukuku ilişkilerinde; evlendirme memuru önünde 'evet' denmesi, zaruri haller altında sözlü vasiyet", "Ticaret hukukunda; bono düzenlenmesi", "Eşya hukukunda; zilyetliğin devri", "Borçlar hukukunda; satım sözleşmesi", "İcra hukukunda; mal beyanı"],
  a: 0,
  e: "SÖZLÜ ŞEKİL ŞARTI genelde AİLE, MİRAS HUKUKU ilişkilerinde görülmektedir. Örnek: EVLENDİRME MEMURU ÖNÜNDE 'EVET' DENMESİ ve ZARURİ HALLER ALTINDA YAPILAN SÖZLÜ VASİYETLER.",
  t: "Şekil", d: 3
},
{
  q: "Yazılı şekil şartının unsurları nedir?",
  o: ["El yazısı veya daktilo ile herhangi bir dilde yazılmış bir metin ve metinden sonra gelen, borç altına girenlerce atılması gereken bir imza", "Sadece metin", "Sadece imza", "Metin, imza ve noter onayı", "Metin, imza ve tanık beyanı"],
  a: 0,
  e: "YAZILI ŞEKİL ŞARTININ UNSURLARI: (1) EL YAZISI, DAKTİLO ile herhangi bir dilde yazılmış bir METİN, (2) METİNDEN SONRA GELEN, BORÇ ALTINA GİREN VEYA GİRENLERCE ATILMASI GEREKEN BİR İMZA.",
  t: "Şekil", d: 2
},
{
  q: "Aşağıdakilerden hangisi yazılı şekil yerine geçer?",
  o: ["İmzalı mektup, asılları borç altına girenlerce imzalanmış telgraf, teyit edilmiş faks ve güvenli elektronik imza ile gönderilip saklanabilen metinler", "Sadece imzalı mektup", "Sözlü beyanın kaydı", "Tanık beyanı", "Hiçbiri yazılı şekil yerine geçmez"],
  a: 0,
  e: "İMZALI BİR MEKTUP, asılları borç altına girenlerce imzalanmış TELGRAF, TEYİT EDİLMİŞ olmaları kaydıyla FAKS veya buna benzer iletişim araçları ya da GÜVENLİ ELEKTRONİK İMZA ile gönderilip saklanabilen metinler de YAZILI ŞEKİL YERİNE GEÇER.",
  t: "Şekil", d: 3
},
{
  q: "İmzanın el yazısı dışında bir araçla atılması hangi durumlarda yeterli sayılır?",
  o: ["Örf ve adetçe kabul edilen durumlarda ve özellikle çok sayıda çıkarılan kıymetli evrakın imzalanmasında", "Her durumda yeterlidir", "Hiçbir durumda yeterli değildir", "Sadece ticari işlerde yeterlidir", "Sadece noter onayıyla yeterlidir"],
  a: 0,
  e: "İmzanın borç altına girenin EL YAZISIYLA atılması zorunludur; GÜVENLİ ELEKTRONİK İMZA da el yazısıyla atılmış imzanın bütün hukuki sonuçlarını doğurur. İmzanın el yazısı dışında bir araçla atılması ancak ÖRF VE ADETÇE KABUL EDİLEN DURUMLARDA ve özellikle ÇOK SAYIDA ÇIKARILAN KIYMETLİ EVRAKIN İMZALANMASINDA yeterli sayılır.",
  t: "Şekil", d: 3
},
{
  q: "İmza atamayanlar imza yerine ne kullanabilir?",
  o: ["Usulüne göre onaylanmış olması koşuluyla parmak izi, el ile yapılmış bir işaret ya da mühür", "Sadece parmak izi", "Sadece mühür", "Tanık beyanı", "Hiçbir şey kullanamazlar"],
  a: 0,
  e: "İMZA ATAMAYANLAR, imza yerine USULÜNE GÖRE ONAYLANMIŞ OLMASI KOŞULUYLA PARMAK İZİ, EL İLE YAPILMIŞ BİR İŞARET ya da MÜHÜR kullanabilirler.",
  t: "Şekil", d: 3
},
{
  q: "Resmi şekil şartına bağlı sözleşmeler arasında aşağıdakilerden hangisi vardır?",
  o: ["Miras sözleşmeleri, mal rejimi sözleşmeleri, resmi vasiyetname, taşınmaz satış vaadi, ölünceye kadar bakma", "Kira sözleşmesi", "Vekalet sözleşmesi", "Hizmet sözleşmesi", "Eser sözleşmesi"],
  a: 0,
  e: "RESMİ ŞEKİL örnekleri: MİRAS SÖZLEŞMELERİ, MAL REJİMİ SÖZLEŞMELERİ, RESMİ VASİYETNAME, (taşınmaz) SATIŞ SÖZLEŞMESİ, ÖLÜNCEYE KADAR BAKMA, TAŞINMAZ SATIŞ VAADİ, ÖNALIM-ALIM-GERİ ALIM sözleşmeleri. NOTERLER en yaygın yetkili makamdırlar.",
  t: "Şekil", d: 2
},
{
  q: "Resmi şekil şartına bağlı bir sözleşmede sonradan yapılacak değişiklikler hangi şekle tabidir?",
  o: ["Resmi şekilde yapılması gerekir; ancak sözleşme metniyle çelişmeyen ve esaslı unsurlarda değişiklik yapmayan tamamlayıcı ek anlaşmalar şekle bağlı değildir", "Her değişiklik şekle bağlı değildir", "Sadece yazılı olması yeterlidir", "Her halde resmi şekilde yapılır", "Sözlü de yapılabilir"],
  a: 0,
  e: "Bir sözleşme resmi şekil şartına bağlı ise SONRADAN YAPILACAK DEĞİŞİKLİKLERİN DE RESMİ ŞEKİLDE yapılması gerekir. Ancak sözleşme METNİYLE ÇELİŞMEYEN veya sözleşmede yer alan ESASLI UNSURLARDA DEĞİŞİKLİK YAPMAYAN TAMAMLAYICI EK ANLAŞMALAR ŞEKLE BAĞLI DEĞİLDİR.",
  t: "Şekil", d: 3
},
{
  q: "Kanunda şekle bağlanmamış bir sözleşmenin taraflarca belirli bir şekilde yapılması kararlaştırılmışsa ne olur?",
  o: ["Belirlenen şekilde yapılmayan sözleşme tarafları bağlamaz", "Sözleşme yine de bağlayıcıdır", "Sözleşme kesin hükümsüzdür", "Sözleşme iptal edilebilir", "Hakim re'sen dikkate alır"],
  a: 0,
  e: "Kanunda şekle bağlanmamış bir sözleşmenin TARAFLARCA BELİRLİ BİR ŞEKİLDE YAPILMASI KARARLAŞTIRILMIŞSA, BELİRLENEN ŞEKİLDE YAPILMAYAN SÖZLEŞME TARAFLARI BAĞLAMAZ.",
  t: "Şekil", d: 3
},
{
  q: "İspat şekli ile kanuni geçerlilik şekli arasındaki temel fark nedir?",
  o: ["İspat şekli usul hukukunun meselesidir ve anlaşma ile geçersiz kılınabilir; kanuni geçerlilik şekli borçlar hukukunun meselesidir ve farklı kararlaştırılamaz", "İkisi de anlaşmayla değiştirilebilir", "İkisi de değiştirilemez", "İspat şekli değiştirilemez, geçerlilik şekli değiştirilebilir", "İkisi arasında fark yoktur"],
  a: 0,
  e: "GEÇERLİLİK ŞEKLİ BORÇLAR HUKUKUNUN, İSPAT ŞEKLİ USUL HUKUKUNUN meselesidir. İSPAT ŞEKLİ ANLAŞMA İLE GEÇERSİZ KILINABİLİR (EVET). KANUNİ GEÇERLİLİK ŞEKLİ FARKLI KARARLAŞTIRILABİLİR Mİ? HAYIR.",
  t: "Şekil", d: 3
},

/* ---------- GENEL İŞLEM KOŞULLARI ---------- */
{
  q: "Genel işlem koşulu (GİK) nedir?",
  o: ["Düzenleyenin ileride çok sayıda benzer sözleşmede kullanmak amacıyla önceden, tek başına hazırlayarak karşı tarafa sunduğu sözleşme hükümleridir", "Tarafların karşılıklı müzakere ile belirlediği hükümlerdir", "Kanunun emredici hükümleridir", "Örf ve adet kurallarıdır", "Mahkemenin belirlediği hükümlerdir"],
  a: 0,
  e: "GENEL İŞLEM KOŞULLARI, DÜZENLEYENİN İLERİDE ÇOK SAYIDA BENZER SÖZLEŞMEDE KULLANMAK AMACIYLA ÖNCEDEN, TEK BAŞINA HAZIRLAYARAK KARŞI TARAFA SUNDUĞU sözleşme hükümleridir. Örnek: bankaların kredi kullandırma sözleşmeleri.",
  t: "Genel İşlem Koşulları", d: 2
},
{
  q: "Aynı amaçla düzenlenen sözleşmelerin metinlerinin özdeş olmaması GİK sayılmasını engeller mi?",
  o: ["Engellemez", "Engeller", "Sadece ticari sözleşmelerde engeller", "Sadece tüketici sözleşmelerinde engeller", "Mahkeme takdir eder"],
  a: 0,
  e: "Aynı amaçla düzenlenen sözleşmelerin metinlerinin ÖZDEŞ OLMAMASI, bu sözleşmelerin içerdiği hükümlerin GENEL İŞLEM KOŞULU SAYILMASINI ENGELLEMEZ.",
  t: "Genel İşlem Koşulları", d: 3
},
{
  q: "Koşulların her birinin tartışılarak kabul edildiğine ilişkin kayıtlar onları genel işlem koşulu olmaktan çıkarır mı?",
  o: ["Tek başına çıkarmaz", "Çıkarır", "Sadece yazılıysa çıkarır", "Sadece imzalıysa çıkarır", "Noter onayı varsa çıkarır"],
  a: 0,
  e: "Genel işlem koşulları içeren sözleşmeye veya ayrı bir sözleşmeye konulan bu koşulların HER BİRİNİN TARTIŞILARAK KABUL EDİLDİĞİNE İLİŞKİN KAYITLAR, TEK BAŞINA, ONLARI GENEL İŞLEM KOŞULU OLMAKTAN ÇIKARMAZ.",
  t: "Genel İşlem Koşulları", d: 3
},
{
  q: "Genel işlem koşullarıyla ilgili hükümler kamu hizmeti yürüten kişi ve kuruluşların sözleşmelerine uygulanır mı?",
  o: ["Uygulanır; niteliklerine bakılmaksızın uygulanır", "Uygulanmaz", "Sadece özel hukuk sözleşmelerinde uygulanır", "Sadece izin verilen faaliyetlerde uygulanmaz", "Mahkeme takdir eder"],
  a: 0,
  e: "Genel işlem koşullarıyla ilgili hükümler, sundukları hizmetleri KANUN VEYA YETKİLİ MAKAMLAR TARAFINDAN VERİLEN İZİNLE yürütmekte olan kişi ve kuruluşların hazırladıkları sözleşmelere de, NİTELİKLERİNE BAKILMAKSIZIN UYGULANIR.",
  t: "Genel İşlem Koşulları", d: 3
},
{
  q: "Bir sözleşme hükmünün GİK sayılabilmesi için gereken unsurlar hangileridir?",
  o: ["Önceden ve tek yanlı hazırlanmış olma, ileride çok sayıda benzer sözleşmede kullanılmak üzere hazırlanma, karşı tarafa sunulma, genel nitelik taşıma ve soyutluk", "Sadece yazılı olması", "Sadece tek yanlı hazırlanması", "Sadece karşı tarafa sunulması", "Noter onayı taşıması"],
  a: 0,
  e: "Bir sözleşme hükmünün GİK sayılabilmesi için: ÖNCEDEN VE TEK YANLI HAZIRLANMIŞ OLMALI, İLERİDE ÇOK SAYIDA BENZER SÖZLEŞMEDE KULLANILMAK ÜZERE hazırlanmış olmalı, KARŞI TARAFA SUNULMUŞ olmalı (bir nevi dayatma) ve GENEL NİTELİK TAŞIMA VE SOYUTLUK unsurları bulunmalıdır.",
  t: "Genel İşlem Koşulları", d: 3
},
{
  q: "Genel işlem koşulları hangi durumlarda yazılmamış sayılır?",
  o: ["Düzenleyen karşı tarafı açıkça bilgilendirmemişse, karşı taraf bunları kabul etmemişse veya bilgi verilse dahi koşul sözleşme içeriğine yabancıysa", "Sadece yazılı olmadığında", "Sadece karşı taraf itiraz ettiğinde", "Sadece mahkeme kararıyla", "Hiçbir durumda yazılmamış sayılmaz"],
  a: 0,
  e: "Genel işlem koşulları şu hallerde YAZILMAMIŞ SAYILIR: DÜZENLEYENİN diğer tarafı GİK hakkında AÇIK BİLGİLENDİRMEMİŞ olması, KARŞI TARAFIN BUNLARI KABUL ETMEMİŞ olması, BİLGİ VERİLMİŞ OLSA DAHİ KOŞULUN SÖZLEŞME İÇERİĞİNE (niteliğine ve işin özelliğine) YABANCI olması.",
  t: "Genel İşlem Koşulları", d: 3
},
{
  q: "Yazılmamış sayılmanın sözleşmeye etkisi nedir?",
  o: ["Sözleşmenin diğer hükümleri geçerliliğini korur; düzenleyen bu koşullar olmasaydı sözleşmeyi yapmayacağını ileri süremez", "Sözleşmenin tamamı geçersiz olur", "Sözleşme iptal edilebilir hale gelir", "Düzenleyen sözleşmeden dönebilir", "Sözleşme askıda hükümsüz olur"],
  a: 0,
  e: "Sözleşmenin yazılmamış sayılan genel işlem koşulları DIŞINDAKİ HÜKÜMLERİ GEÇERLİLİĞİNİ KORUR. Bu durumda DÜZENLEYEN, yazılmamış sayılan koşullar olmasaydı diğer hükümlerle SÖZLEŞMEYİ YAPMAYACAK OLDUĞUNU İLERİ SÜREMEZ.",
  t: "Genel İşlem Koşulları", d: 3
},
{
  q: "Genel işlem koşullarında yer alan bir hüküm açık ve anlaşılır değilse veya birden çok anlama geliyorsa nasıl yorumlanır?",
  o: ["Düzenleyenin aleyhine ve karşı tarafın lehine", "Düzenleyenin lehine", "Her iki taraf için eşit olarak", "Hükümsüz sayılır", "Mahkemenin takdirine göre"],
  a: 0,
  e: "Genel işlem koşullarında yer alan bir hüküm AÇIK VE ANLAŞILIR DEĞİLSE veya BİRDEN ÇOK ANLAMA GELİYORSA, DÜZENLEYENİN ALEYHİNE VE KARŞI TARAFIN LEHİNE YORUMLANIR.",
  t: "Genel İşlem Koşulları", d: 2
},
{
  q: "Düzenleyene tek yanlı olarak karşı taraf aleyhine sözleşme hükmünü değiştirme yetkisi veren kayıtların durumu nedir?",
  o: ["Yazılmamış sayılır", "Geçerlidir", "İptal edilebilir", "Kesin hükümsüzdür", "Karşı tarafın onayıyla geçerli olur"],
  a: 0,
  e: "DEĞİŞTİRME YASAĞI: Genel işlem koşullarının bulunduğu bir sözleşmede veya ayrı bir sözleşmede yer alan ve DÜZENLEYENE TEK YANLI OLARAK KARŞI TARAF ALEYHİNE sözleşmenin bir hükmünü DEĞİŞTİRME ya da YENİ DÜZENLEME GETİRME yetkisi veren kayıtlar YAZILMAMIŞ SAYILIR.",
  t: "Genel İşlem Koşulları", d: 3
},

/* ---------- HÜKÜMSÜZLÜK ---------- */
{
  q: "Yokluk (bir hukuki işlemin yok sayılması) nedir ve sonuçları nelerdir?",
  o: ["Kurucu unsurların olmamasıdır; herkes tarafından ileri sürülebilir, herhangi bir şekilde geçerli hale gelemez ve dava açılmasına gerek olmaksızın hakim re'sen nazara alır", "Emredici hükümlere aykırılıktır", "İptal edilebilirliktir", "Askıda hükümsüzlüktür", "Kısmi hükümsüzlüktür"],
  a: 0,
  e: "YOKLUK, KURUCU UNSURLARIN OLMAMASIDIR (örneğin satım sözleşmesinde tarafların satıma konu şey üzerinde anlaşamamış olmaları). HERKES tarafından ileri sürülebilir, HERHANGİ BİR ŞEKİLDE GEÇERLİ HALE GELEMEZ ve DAVA AÇILMASINA GEREK YOKTUR; HAKİM RE'SEN NAZARA ALIR.",
  t: "Hükümsüzlük", d: 3
},
{
  q: "Kesin hükümsüzlüğün özellikleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Geçersizlik hukuki menfaati bulunan herkes tarafından ileri sürülebilir, işlem baştan itibaren kendiliğinden geçersizdir ve tarafların ifası işlemi geçerli hale getirmez", "Sadece taraflar ileri sürebilir", "İşlem sonradan geçersiz hale gelir", "Tarafların ifası işlemi geçerli kılar", "Hakim re'sen dikkate alamaz"],
  a: 0,
  e: "KESİN HÜKÜMSÜZLÜKTE geçersizlik HUKUKİ MENFAATİ BULUNAN HERKES tarafından ileri sürülebilir; işlem BAŞTAN İTİBAREN KENDİLİĞİNDEN GEÇERSİZDİR; TARAFLARIN EDİMLERİ İFASI İŞLEMİ GEÇERLİ HALE GETİRMEZ ve HAKİM RE'SEN DİKKATE ALMALIDIR.",
  t: "Hükümsüzlük", d: 2
},
{
  q: "Aşağıdakilerden hangisi kesin hükümsüzlük hallerinden biri DEĞİLDİR?",
  o: ["Aşırı yararlanma (gabin)", "İşlemi yapanın ehliyetsiz olması", "Kanuni geçerlilik şartına uyulmaması", "Muvazaa", "Konunun en baştan objektif olarak imkansız olması"],
  a: 0,
  e: "KESİN HÜKÜMSÜZLÜK HALLERİ: işlemi yapanın EHLİYETSİZ olması, KANUNİ GEÇERLİLİK ŞARTINA UYULMAMASI, MUVAZAA, AHLAKA-KAMU DÜZENİNE-KİŞİLİK HAKLARINA AYKIRILIK ve konunun EN BAŞTAN OBJEKTİF OLARAK İMKANSIZ olması. AŞIRI YARARLANMA ise İPTAL EDİLEBİLİRLİK halidir.",
  t: "Hükümsüzlük", d: 3
},
{
  q: "Kesin hükümsüzlük hallerinde borçlar ifa edilmişse ne olur?",
  o: ["Sebepsiz zenginleşme veya istihkak üzerinden iade hükümleri uygulanır; kusurlu taraf kusursuz tarafın güvenden kaynaklı zararlarını öder ve tahvil mümkün olabilir", "Hiçbir iade yapılmaz", "Sadece haksız fiil hükümleri uygulanır", "İfa işlemi geçerli kılar", "Tahvil mümkün değildir"],
  a: 0,
  e: "Kesin hükümsüzlük hallerinde borçlar ifa edilmişse SEBEPSİZ ZENGİNLEŞME VEYA İSTİHKAK üzerinden iade hükümlerinin uygulanması gerekir. KUSURLU TARAFIN kusursuz tarafın bu sözleşmeye GÜVENDEN KAYNAKLI ZARARLARINI ÖDEMESİ gerekir. TAHVİLİ MÜMKÜN OLABİLİR.",
  t: "Hükümsüzlük", d: 3
},
{
  q: "Noksanlık (askıda hükümsüzlük) nedir?",
  o: ["Kurucu unsurları yerinde olan bir hukuki işlemin hüküm ifade etmesi birkaç unsurun tamamlanmasına bağlı ise söz konusu olur", "Kurucu unsurların hiç olmamasıdır", "Hükümlerin bir kısmının hükümsüz olmasıdır", "İrade sakatlığı halidir", "Emredici hükümlere aykırılıktır"],
  a: 0,
  e: "NOKSANLIK: KURUCU UNSURLARI YERİNDE OLAN bir hukuki işlemin HÜKÜM İFADE ETMESİ BİRKAÇ UNSURUN TAMAMLANMASINA BAĞLI ise söz konusu olur (ASKIDA HÜKÜMSÜZ).",
  t: "Hükümsüzlük", d: 3
},
{
  q: "Kısmi hükümsüzlük nedir ve hangi durumda kesin hükümsüzlüğe dönüşür?",
  o: ["Hükümlerden bir kısmının hükümsüz olup geri kalanların hükümsüz olmamasıdır; bu hükümler olmadan sözleşme yapılmayacak idiyse kesin hükümsüzlük oluşur", "Tüm sözleşmenin hükümsüz olmasıdır", "Hiçbir zaman kesin hükümsüzlüğe dönüşmez", "Sadece taraflar isterse kesin hükümsüz olur", "Hakimin takdirine bağlıdır"],
  a: 0,
  e: "KISMİ HÜKÜMSÜZ: hükümlerden BİR KISMININ HÜKÜMSÜZ olup geri kalanların hükümsüz olmaması ve bu hükümsüz hükümlerin sözleşmenin TÜMÜNÜN YÜRÜRLÜĞÜNÜ ETKİLEMEMESİDİR. AKSİ HALDE BUNLAR OLMADAN SÖZLEŞME YAPILMAYACAK İDİYSE KESİN HÜKÜMSÜZLÜK OLUŞUR.",
  t: "Hükümsüzlük", d: 3
},

/* ---------- TEMSİL ---------- */
{
  q: "Aşağıdaki hukuki ilişkilerden hangisi temsilci ile yürütülmeye uygun DEĞİLDİR?",
  o: ["Evlenme, evlat edinme, ölüme bağlı tasarruf ve haksız fiiller", "Satım sözleşmesi", "Kira sözleşmesi", "Vekalet sözleşmesi", "Bankacılık işlemleri"],
  a: 0,
  e: "Her hukuki ilişki temsilciyle yürütülmeye uygun olmayabilir: EVLENME, EVLAT EDİNME, ÖLÜME BAĞLI TASARRUF ve HAKSIZ FİİLLER temsilci ile yürütülemez.",
  t: "Temsil", d: 2
},
{
  q: "Kanuni temsil ile iradi temsil arasındaki fark nedir?",
  o: ["Kanuni temsil kanunun verdiği yetkiye dayanır (velayet, vasi, kayyım); iradi temsil temsil olunanın tek taraflı irade beyanı üzerine doğar", "İkisi de kanuna dayanır", "İkisi de irade beyanına dayanır", "Kanuni temsil sözleşmeye dayanır", "İradi temsil mahkeme kararına dayanır"],
  a: 0,
  e: "KANUNİ TEMSİL: kişinin KANUNUN VERDİĞİ YETKİYE dayanarak başkasını temsil etmesidir (VELAYET, VASİ, KAYYIM). İRADİ TEMSİL: TEMSİL OLUNAN tarafından TEK TARAFLI İRADE BEYANI üzerine bir kişinin işlemler için yetkilendirilmesidir.",
  t: "Temsil", d: 2
},
{
  q: "Doğrudan temsil nedir ve temsilcinin durumu nasıldır?",
  o: ["Bir kişinin temsil olunanın adına ve hesabına işlem yapabilmesidir; temsilci hak iktisap etmez, borçlardan sorumlu tutulmaz", "Temsilcinin kendi adına ve hesabına işlem yapmasıdır", "Temsilci hak iktisap eder ve borçlardan sorumludur", "Temsilci kendi adına, temsil olunan hesabına işlem yapar", "Temsilci sadece bildirim yapar"],
  a: 0,
  e: "DOĞRUDAN TEMSİL, bir kişinin temsil olunanın ADINA VE HESABINA işlem yapabilmesidir. TEMSİLCİ HAK İKTİSAP ETMEZ, BORÇLARDAN SORUMLU TUTULMAZ.",
  t: "Temsil", d: 2
},
{
  q: "Dolaylı temsil nedir ve ilk işlemde kim borç altına girer?",
  o: ["Temsilci işlemi kendi adına fakat temsil olunan hesabına yapar; ilk işlemde borç altına giren temsilcidir", "Temsilci temsil olunan adına ve hesabına yapar; borç altına giren temsil olunandır", "Temsilci kendi adına ve hesabına yapar", "Borç altına giren üçüncü kişidir", "Hiç kimse borç altına girmez"],
  a: 0,
  e: "DOLAYLI TEMSİLDE temsilci işlemi KENDİ ADINA fakat TEMSİL OLUNAN HESABINA yapmaktadır ve bu işlemi temsilcisi olduğu kişi adına yaptığını BİLDİRMEMEKTEDİR. İLK İŞLEMDE BORÇ ALTINA GİREN TEMSİLCİDİR; hak ve borçlar ALACAĞIN DEVRİ VE BORCUN ÜSTLENİLMESİ hükümleri çerçevesinde temsil olunana devredilir.",
  t: "Temsil", d: 3
},
{
  q: "BK md. 40'a göre temsilci hukuki işlemi yaparken bu sıfatını bildirmezse ne olur?",
  o: ["Hukuki işlemin sonuçları kendisine ait olur; ancak karşı taraf temsil ilişkisini durumdan çıkarıyor/çıkarması gerekiyor ya da işlemi kiminle yapması farksızsa sonuçlar doğrudan temsil olunana ait olur", "Her halde sonuçlar temsil olunana ait olur", "Her halde sonuçlar temsilciye ait olur", "İşlem geçersiz olur", "İşlem askıda hükümsüz olur"],
  a: 0,
  e: "BK md. 40: Temsilci, hukuki işlemi yaparken BU SIFATINI BİLDİRMEZSE hukuki işlemin sonuçları KENDİSİNE AİT OLUR. Ancak KARŞI TARAF bir temsil ilişkisinin varlığını DURUMDAN ÇIKARIYOR VEYA ÇIKARMASI GEREKİYOR ya da hukuki işlemi TEMSİLCİ VEYA TEMSİL OLUNANDAN BİRİ İLE YAPMASI FARKSIZ ise sonuçlar DOĞRUDAN DOĞRUYA TEMSİL OLUNANA ait olur.",
  t: "Temsil", d: 3
},
{
  q: "Doğrudan temsilde temsilcinin ehliyeti bakımından ne aranır?",
  o: ["Fiil ehliyetinin tüm şartları gerekmez; tek başına ayırt etme gücünün varlığı yeterlidir", "Tam fiil ehliyeti gerekir", "Sadece ergin olması gerekir", "Kısıtlı olmaması yeterlidir", "Hiçbir ehliyet aranmaz"],
  a: 0,
  e: "Doğrudan temsile göre temsilci 3. kişiye karşı bir borç altına girmeyeceğinden FİİL EHLİYETİNİN TÜM ŞARTLARI GEREKMEZ. TEK BAŞINA AYIRT ETME GÜCÜNÜN VARLIĞI YETERLİDİR.",
  t: "Temsil", d: 3
},
{
  q: "Doğrudan temsilde temsilcinin iradesi sakatlanırsa temsil olunan ne yapabilir?",
  o: ["Sözleşmeyi iptal hakkı bulunmaktadır", "Hiçbir şey yapamaz", "Sadece tazminat isteyebilir", "Temsilciye rücu eder", "Sözleşme kendiliğinden geçersiz olur"],
  a: 0,
  e: "Doğrudan temsilde temsilcinin iradesinin sakatlanması durumunda TEMSİL OLUNANIN SÖZLEŞMEYİ İPTAL HAKKI BULUNMAKTADIR.",
  t: "Temsil", d: 3
},
{
  q: "İyiniyetin kazandırıcı etkisinde doğrudan temsil ilişkisinde kimin iyiniyetli olması gerekir?",
  o: ["Temsilcinin iyiniyetli olması gerekir; ancak temsil olunan engel koşulu biliyorsa temsilci bilmese de hak kazanımı olmaz", "Sadece temsil olunanın iyiniyetli olması gerekir", "İkisinin de iyiniyeti aranmaz", "Sadece üçüncü kişinin iyiniyeti aranır", "Hiç kimsenin iyiniyeti aranmaz"],
  a: 0,
  e: "TEMSİLCİNİN İYİNİYETLİ OLMASI GEREKİR. Ancak TEMSİL OLUNAN hak kazanımına ENGEL KOŞULU BİLİYOR olup temsilci bu durumu bilmiyorsa YİNE DE HAK KAZANIMI SÖZ KONUSU OLMAYACAKTIR.",
  t: "Temsil", d: 3
},
{
  q: "Temsil yetkisi veren için ehliyet şartı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Hak ehliyetinin varlığı şarttır; kanuni temsilde temsil olunanın hukuki işlem ehliyeti aranmaz, iradi temsilde yetki veren için hukuki işlem ehliyeti aranır", "Her halde tam fiil ehliyeti gerekir", "Hiçbir ehliyet gerekmez", "Kanuni temsilde hukuki işlem ehliyeti aranır", "İradi temsilde hiçbir ehliyet aranmaz"],
  a: 0,
  e: "HAK EHLİYETİNİN VARLIĞI ŞARTTIR. KANUNİ TEMSİLDE temsil olunanın HUKUKİ İŞLEM EHLİYETİ ARANMAZ (kanuni temsilciliğin temel meselesi de budur). İRADİ TEMSİLDE ise YETKİ VEREN İÇİN HUKUKİ İŞLEM EHLİYETİ ŞARTI ARANIR.",
  t: "Temsil", d: 3
},
{
  q: "Temsil yetkisinin şekli bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Karşı tarafa ulaşması gereken bir beyanla yaratılır; bir geçerlilik şekli yoktur ve yetki belgesi olmazsa olmaz şart değildir", "Yazılı olmak zorundadır", "Noter onayı gerekir", "Yetki belgesi zorunludur", "Tescil gerekir"],
  a: 0,
  e: "TEMSİL YETKİSİ KARŞI TARAFA ULAŞMASI GEREKEN BİR BEYANLA YARATILIR. Bu da BİR GEÇERLİLİK ŞEKLİNİN OLMADIĞI anlamına gelir. YETKİ BELGESİ OLMAZSA OLMAZ ŞART DEĞİLDİR; tapuda aranıyor olması her hukuki işlem için verilmesini gerektirmez.",
  t: "Temsil", d: 3
},
{
  q: "Temsil ilişkisinin kurulması için temsilcinin kabul beyanı gerekli midir?",
  o: ["Gerekli değildir; temsil ilişkisi tek taraflı beyan ile yaratılır. Vekalette ise vekilin kabulü esastır", "Gereklidir", "Sadece yazılı kabul gereklidir", "Sadece iradi temsilde gereklidir", "Sadece kanuni temsilde gereklidir"],
  a: 0,
  e: "TEMSİL İLİŞKİSİ TEK TARAFLI BEYAN İLE YARATILIR. Bu sebeple KABUL, RET gibi şeyler bu ilişkiyi temsilci iradesi ile KURMAZ YA DA ORTADAN KALDIRMAZ. Genelde bu durum VEKALET ile karıştırılır; VEKALETTE VEKİLİN BU İLİŞKİYİ KABULÜ ESASTIR.",
  t: "Temsil", d: 3
},
{
  q: "TBK 41'e göre temsil yetkisinin içeriği ve derecesi nasıl belirlenir?",
  o: ["Kamu hukukundan doğmuşsa yasal hükümlere, hukuksal bir işlemden doğmuşsa o işleme göre; üçüncü kişilere bildirilmişse bu bildirime göre belirlenir", "Her halde kanuna göre belirlenir", "Her halde sözleşmeye göre belirlenir", "Hakimin takdirine göre belirlenir", "Temsilcinin beyanına göre belirlenir"],
  a: 0,
  e: "TBK 41: Başkası adına ve hesabına temsil KAMU HUKUKUNDAN doğmuşsa temsil yetkisinin içeriği ve derecesi BU KONUDAKİ YASAL HÜKÜMLERE; temsil HUKUKSAL BİR İŞLEMDEN doğmuşsa O HUKUKSAL İŞLEME göre belirlenir. TEMSİL YETKİSİ ÜÇÜNCÜ KİŞİLERE BİLDİRİLMİŞSE içeriği ve derecesi BU BİLDİRİME göre belirlenir.",
  t: "Temsil", d: 3
},
{
  q: "Kişi temsil yetkisini üçüncü kişilere bildirmiş ancak yetki kapsamını daralttığını sonradan bildirmemişse ne olur?",
  o: ["İlk bildirimdeki beyan esas olur; daraltıcı yeni düzenlemeler bildirilmemesinden ötürü üçüncü kişileri etkilemez", "Daraltma her halde geçerli olur", "Temsil yetkisi tamamen sona erer", "Üçüncü kişiler daraltmayı bilmek zorundadır", "İşlem geçersiz olur"],
  a: 0,
  e: "Kişi verdiği temsil yetkisini ve kapsamını üçüncü kişilere bildirmiş ancak YETKİ KAPSAMINI DARALTTIĞINI SONRADAN BİLDİRMEMİŞ ise İLK BİLDİRİMDEKİ BEYAN ESAS OLUR ve bu DARALTICI YENİ DÜZENLEMELER BİLDİRİLMEMESİNDEN ÖTÜRÜ ÜÇÜNCÜ KİŞİLERİ ETKİLEMEZ.",
  t: "Temsil", d: 3
},
{
  q: "Temsil yetkisinin sınırlandırılma türleri hangileridir?",
  o: ["Süre, kişi ve konu yönünden sınırlandırma", "Sadece süre yönünden", "Sadece konu yönünden", "Sadece kişi yönünden", "Sınırlandırılamaz"],
  a: 0,
  e: "Temsil yetkisi SÜRE YÖNÜNDEN (A, B'yi 1 yıl boyunca X Bankası ile işlem yapması için yetkilendirmesi), KİŞİ YÖNÜNDEN (sadece X bankası ile çalışması) ve KONU YÖNÜNDEN (sadece satış akdi yapması) sınırlandırılabilir.",
  t: "Temsil", d: 3
}

]);

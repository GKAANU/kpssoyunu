/* Borçlar Hukuku — 2. bölüm (korkutma, gabin, şekil, genel işlem koşulları,
   hükümsüzlük, temsil) */
KPSS.registerBank('borclar', [
{
  q: "Korkutmanın şartları arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Korkutulanın maddi zarara uğramış olması", "Korkutmanın kişiye veya yakınlarına yapılmış olması", "Ağır ve derhal gerçekleşecek bir tehlike olması", "Sözleşmenin korku altında yapılmış olması", "Korkutmanın hukuka aykırı olması"],
  a: 0,
  e: "KORKUTMANIN ŞARTLARI: korkutma eylemi, korkutmanın KİŞİYE VEYA YAKINLARINA yapılmış olması, AĞIR VE DERHAL GERÇEKLEŞECEK bir tehlike olması, sözleşmenin KORKU ALTINDA yapılmış olması ve korkutmanın HUKUKA AYKIRI olması. Zararın doğması şart değildir.",
  t: "Korkutma", d: 2
},
{
  q: "Üçüncü kişinin korkutması halinde sözleşmenin iptali mümkün müdür?",
  o: ["Mümkündür; karşı tarafın bilmesi gerekmez", "Mümkündür; ancak karşı tarafın bilmesi gerekir", "Mümkündür; ancak korkutanın kusuru aranır", "Mümkün değildir; yalnızca tazminat istenir", "Mümkün değildir; sözleşme geçerli kalır"],
  a: 0,
  e: "Korkutma sonucu sözleşme iptali ÜÇÜNCÜ KİŞİ KORKUTMALARINDA DA GEÇERLİDİR. KARŞI TARAFIN BUNU BİLİP BİLMEMESİ ÖNEMSİZDİR. (Aldatmada ise 3. kişi aldatmışsa karşı tarafın bilmesi veya bilmesi gerekmesi aranır.)",
  t: "Korkutma", d: 3
},
{
  q: "Korkutan bir üçüncü kişi olup diğer taraf korkutmayı bilmiyorsa veya bilecek durumda değilse korkutulanın durumu nedir?",
  o: ["Bağlı kalmak istemiyorsa hakkaniyet gereği tazminat öder", "Sözleşmeyle her hâlde bağlı kalmak zorundadır", "Herhangi bir yükümlülük altına girmez", "Yalnızca korkutan üçüncü kişiye tazminat öder", "İptal hakkını hiçbir hâlde kullanamaz"],
  a: 0,
  e: "Korkutan bir ÜÇÜNCÜ KİŞİ olup diğer taraf korkutmayı BİLMİYORSA veya BİLECEK DURUMDA DEĞİLSE, sözleşmeyle bağlı kalmak istemeyen korkutulan, HAKKANİYET GEREKTİRİYORSA DİĞER TARAFA TAZMİNAT ÖDEMEKLE YÜKÜMLÜDÜR.",
  t: "Korkutma", d: 3
},
{
  q: "Korkutulan sözleşmeyi iptal ettiyse ve etmediyse hangi zararları talep edebilir?",
  o: ["İptal etmişse menfi, onamışsa müspet zararını", "Her hâlde yalnızca menfi zararını", "Her hâlde yalnızca müspet zararını", "Yalnızca manevi tazminat isteyebilir", "Hiçbir zarar kalemini talep edemez"],
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
{
  q: "Sözleşme iptal hakkının hukuki niteliği nedir?",
  o: ["Yenilik doğuran hak; şekle bağlı değildir", "Alacak hakkı; yazılı şekle bağlıdır", "Ayni hak; tescile bağlıdır", "Def'i hakkı; şekle bağlı değildir", "Yenilik doğuran hak; resmi şekle bağlıdır"],
  a: 0,
  e: "SÖZLEŞME İPTAL HAKKI YENİLİK DOĞURAN NİTELİKTE HAKLAR kategorisine girmektedir ve ŞEKİL ŞARTINA BAĞLI TUTULMADAN iptal edilebilir. Sözleşme 1 YIL içerisinde iptal edilebilir; bu süre HAK DÜŞÜRÜCÜDÜR.",
  t: "İrade Bozukluğu Sonuçları", d: 2
},
{
  q: "İrade sakatlığı hallerini hakim re'sen dikkate alabilir mi?",
  o: ["Hayır; yalnızca 1 yıllık süreyi re'sen dikkate alır", "Evet; irade sakatlığı hâllerinin tümünü dikkate alır", "Hayır; hak düşürücü süreyi de dikkate alamaz", "Evet; yalnızca korkutmayı re'sen dikkate alır", "Evet; yalnızca yazılı sözleşmelerde dikkate alır"],
  a: 0,
  e: "Bir sözleşmedeki İRADE SAKATLIĞI HALLERİ ANCAK TARAFLARCA İLERİ SÜRÜLÜR; HAKİM RE'SEN DİKKATE ALAMAZ. Hakim ancak HAK DÜŞÜRÜCÜ SÜRE OLAN 1 YILI RE'SEN DİKKATE ALABİLİR.",
  t: "İrade Bozukluğu Sonuçları", d: 3
},
{
  q: "İrade sakatlığı altındaki kişi sözleşmeyi nasıl geçerli hale getirebilir?",
  o: ["İcazet vererek; 1 yılın geçmesiyle de geçerli olur", "Yalnızca yazılı bir onay beyanı vermek suretiyle", "Yalnızca mahkemeden karar almak suretiyle", "Yalnızca karşı tarafın onayını almak suretiyle", "Hiçbir biçimde geçerli hale getirilemez"],
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
{
  q: "Aşırı yararlanma (gabin) nedir ve hangi sözleşmelerde mümkündür?",
  o: ["Edimler arası aşırı orantısızlık; tam iki tarafa borç yükleyende", "İrade ile beyan arasındaki uyumsuzluk; bütün sözleşmelerde", "Edimler arası aşırı orantısızlık; bütün sözleşmelerde", "İrade sakatlığı hâli; tek tarafa borç yükleyen sözleşmelerde", "Şekle aykırılık hâli; yalnızca resmi şekle bağlı olanlarda"],
  a: 0,
  e: "AŞIRI YARARLANMA (GABİN), EDİMLER ARASI AŞIRI ORANTISIZLIK olarak tanımlanabilir. Açık bir orantısızlık aranan ilk şarttır ve bu da ANCAK TAM İKİ TARAFA BORÇ YÜKLEYEN SÖZLEŞMELERDE MÜMKÜNDÜR.",
  t: "Aşırı Yararlanma", d: 2
},
{
  q: "Aşırı yararlanmanın ikinci şartı nedir?",
  o: ["Orantısızlığın zor durum veya deneyimsizlikten doğması", "Sözleşmenin yazılı olarak yapılmış olması", "Doğan zararın büyük miktarda olması", "Karşı tarafın tacir sıfatını taşıması", "Sözleşmenin resmi şekilde yapılması"],
  a: 0,
  e: "Aşırı yararlanmanın ikinci şartı, bu orantısızlığın taraflardan birinin ZOR BİR DURUM İÇİNDE OLMASINDAN, DÜŞÜNCESİZLİĞİ ya da DENEYİMSİZLİĞİNDEN kaynaklanması gerekliliğidir; yani FAYDALANMA AMACI aranır.",
  t: "Aşırı Yararlanma", d: 2
},
{
  q: "Aşırı yararlanmada zarar görenin hakları nelerdir?",
  o: ["İptal, menfi zarar veya orantısızlığın giderilmesi", "Yalnızca sözleşmeyi iptal etme hakkı", "Yalnızca tazminat isteme hakkı", "Yalnızca orantısızlığın giderilmesini isteme", "Herhangi bir hakkı bulunmamaktadır"],
  a: 0,
  e: "Aşırı yararlanmada zarar gören SÖZLEŞMEYİ İPTAL HAKKINA sahiptir; MENFİ ZARAR TALEBİ mümkündür. Ayrıca SÖZLEŞMEYE BAĞLI KALARAK ORANTISIZLIĞIN GİDERİLMESİNİ İSTEMEK de mümkündür. İptal öncesi ve sonrası ifa yönünden irade sakatlığı ile aynı sonuçlar geçerlidir.",
  t: "Aşırı Yararlanma", d: 3
},
{
  q: "Aşırı yararlanma kaynaklı iptal; öğrenme veya zor durumun kalkmasından itibaren ve her hâlde sözleşmenin kurulmasından itibaren hangi sürelere tabidir?",
  o: ["1 yıl – 5 yıl", "1 yıl – 10 yıl", "2 yıl – 5 yıl", "1 yıl – 1 yıl", "Süreye bağlı değildir"],
  a: 0,
  e: "Aşırı yararlanmada iptal süresi: DÜŞÜNCESİZLİĞİNDEN VEYA DENEYİMSİZLİĞİNDEN kaynaklı hallerde BUNLARI ÖĞRENMEDEN başlayarak; ZOR DURUMDA KALDIĞI hallerde ise ZOR DURUMUN ORTADAN KALKMASINDAN başlayarak 1 SENE, HER HALDE SÖZLEŞMENİN KURULMASINDAN başlayarak 5 YIL içindedir.",
  t: "Aşırı Yararlanma", d: 3
},
{
  q: "Sözleşmelerde şekil konusundaki temel kural nedir?",
  o: ["Kanunda aksi yoksa şekil serbestisi geçerlidir", "Bütün sözleşmelerin yazılı olması gerekir", "Bütün sözleşmelerin resmi şekilde yapılması gerekir", "Şekil her hâlde bir geçerlilik şartıdır", "Sözlü sözleşmeler her hâlde geçersizdir"],
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
  o: ["Sebepsiz zenginleşmeye göre verdiğini geri isteyebilir", "Her hâlde verdiklerini geri isteyebilir", "Yalnızca tazminat talebinde bulunabilir", "Sözleşmeye devam etmek zorunda kalır", "Herhangi bir hakkı bulunmamaktadır"],
  a: 0,
  e: "Sözleşmenin şekle uyulmadan yapıldığını BİLMEYEN taraf SEBEPSİZ ZENGİNLEŞME hükümlerine göre verdiklerini GERİ İSTEYEBİLİR. BİLİP DE İFA EDENLER verdiklerini İSTEYEMEZLER; bu artık BAĞIŞLAMA HÜKMÜ ile muamele görür.",
  t: "Şekil", d: 3
},
{
  q: "Şekle aykırı sözleşmelerin şekle uygun yapılmış gibi bağlayıcı kabul edildiği haller arasında aşağıdakilerden hangisi vardır?",
  o: ["Tarafların asli edimleri rızayla ifa etmiş olması", "Sözleşmenin sonradan yazılı hâle getirilmesi", "Tarafların şekle aykırılığı bilmemiş olması", "Sözleşmenin ticaret siciline tescil edilmesi", "Hâkimin sözleşmeyi geçerli sayan kararı"],
  a: 0,
  e: "Şekle aykırı sözleşmeler şu hallerde ŞEKLE UYGUN YAPILMIŞ GİBİ BAĞLAYICI kabul edilirler: TARAFLAR KENDİ RIZALARI İLE SÖZLEŞMENİN ASLİ EDİMLERİNİ İFA ETMİŞLERSE, butlanı ileri süren sakatlığa KENDİ HİLESİYLE SEBEP OLMUŞSA ve sakatlığı ileri sürmesi HAKKIN KÖTÜYE KULLANIMI sonucunu doğuracaksa.",
  t: "Şekil", d: 3
},
{
  q: "Kanunun öngördüğü geçerlilik şekilleri hangileridir?",
  o: ["Sözlü, yazılı, resmi, ilana ve tescile dayalı şekil", "Yalnızca yazılı ve tescile dayalı şekil", "Yalnızca yazılı ve resmi şekil", "Yalnızca resmi ve tescile dayalı şekil", "Yalnızca sözlü ve yazılı şekil"],
  a: 0,
  e: "Kanunun öngördüğü geçerlilik koşulları: SÖZLÜ ŞEKİL, YAZILI ŞEKİL, RESMİ ŞEKİL, İLANA DAYALI ve TESCİLE DAYALI şekil.",
  t: "Şekil", d: 2
},
{
  q: "Sözlü şekil şartı hangi alanlarda görülür ve örnekleri nelerdir?",
  o: ["Aile ve miras hukukunda; sözlü vasiyet", "Ticaret hukukunda; bono düzenlenmesi", "Eşya hukukunda; zilyetliğin devri", "Borçlar hukukunda; satım sözleşmesi", "İcra hukukunda; mal beyanında bulunma"],
  a: 0,
  e: "SÖZLÜ ŞEKİL ŞARTI genelde AİLE, MİRAS HUKUKU ilişkilerinde görülmektedir. Örnek: EVLENDİRME MEMURU ÖNÜNDE 'EVET' DENMESİ ve ZARURİ HALLER ALTINDA YAPILAN SÖZLÜ VASİYETLER.",
  t: "Şekil", d: 3
},
{
  q: "Yazılı şekil şartının unsurları nedir?",
  o: ["Herhangi bir dilde yazılmış metin ve altındaki imza", "Yalnızca borç altına girenin attığı imza", "Yalnızca elle yazılmış bir metnin varlığı", "Metin, imza ve ayrıca noter onayı", "Metin, imza ve iki tanığın beyanı"],
  a: 0,
  e: "YAZILI ŞEKİL ŞARTININ UNSURLARI: (1) EL YAZISI, DAKTİLO ile herhangi bir dilde yazılmış bir METİN, (2) METİNDEN SONRA GELEN, BORÇ ALTINA GİREN VEYA GİRENLERCE ATILMASI GEREKEN BİR İMZA.",
  t: "Şekil", d: 2
},
{
  q: "Aşağıdakilerden hangisi yazılı şekil yerine geçer?",
  o: ["İmzalı mektup, teyitli faks ve güvenli e-imza", "Yalnızca imzalı olarak gönderilen mektup", "Sözlü beyanın ses kaydına alınması", "İki tanığın imzalı beyan tutanağı", "Hiçbiri yazılı şekil yerine geçmez"],
  a: 0,
  e: "İMZALI BİR MEKTUP, asılları borç altına girenlerce imzalanmış TELGRAF, TEYİT EDİLMİŞ olmaları kaydıyla FAKS veya buna benzer iletişim araçları ya da GÜVENLİ ELEKTRONİK İMZA ile gönderilip saklanabilen metinler de YAZILI ŞEKİL YERİNE GEÇER.",
  t: "Şekil", d: 3
},
{
  q: "İmzanın el yazısı dışında bir araçla atılması hangi durumlarda yeterli sayılır?",
  o: ["Örf ve adetçe kabul edilen durumlarda", "Ayrıca hiçbir koşul aranmadan her durumda", "Yalnızca ticari işler bakımından", "Yalnızca noter onayı bulunduğunda", "Hiçbir durumda yeterli sayılmaz"],
  a: 0,
  e: "İmzanın borç altına girenin EL YAZISIYLA atılması zorunludur; GÜVENLİ ELEKTRONİK İMZA da el yazısıyla atılmış imzanın bütün hukuki sonuçlarını doğurur. İmzanın el yazısı dışında bir araçla atılması ancak ÖRF VE ADETÇE KABUL EDİLEN DURUMLARDA ve özellikle ÇOK SAYIDA ÇIKARILAN KIYMETLİ EVRAKIN İMZALANMASINDA yeterli sayılır.",
  t: "Şekil", d: 3
},
{
  q: "İmza atamayanlar imza yerine ne kullanabilir?",
  o: ["Onaylanmış parmak izi, işaret veya mühür", "Yalnızca usulünce onaylanmış parmak izi", "Yalnızca usulünce onaylanmış bir mühür", "İki tanığın huzurunda sözlü beyan", "İmza yerine hiçbir şey kullanamazlar"],
  a: 0,
  e: "İMZA ATAMAYANLAR, imza yerine USULÜNE GÖRE ONAYLANMIŞ OLMASI KOŞULUYLA PARMAK İZİ, EL İLE YAPILMIŞ BİR İŞARET ya da MÜHÜR kullanabilirler.",
  t: "Şekil", d: 3
},
{
  q: "Resmi şekil şartına bağlı sözleşmeler arasında aşağıdakilerden hangisi vardır?",
  o: ["Taşınmaz satış vaadi sözleşmesi", "Konut kira sözleşmesi", "Genel vekâlet sözleşmesi", "Belirsiz süreli hizmet sözleşmesi", "Götürü bedelli eser sözleşmesi"],
  a: 0,
  e: "RESMİ ŞEKİL örnekleri: MİRAS SÖZLEŞMELERİ, MAL REJİMİ SÖZLEŞMELERİ, RESMİ VASİYETNAME, (taşınmaz) SATIŞ SÖZLEŞMESİ, ÖLÜNCEYE KADAR BAKMA, TAŞINMAZ SATIŞ VAADİ, ÖNALIM-ALIM-GERİ ALIM sözleşmeleri. NOTERLER en yaygın yetkili makamdırlar.",
  t: "Şekil", d: 2
},
{
  q: "Resmi şekil şartına bağlı bir sözleşmede sonradan yapılacak değişiklikler hangi şekle tabidir?",
  o: ["Resmi şekil; tamamlayıcı ek anlaşmalar şekle bağlı değil", "Resmi şekil; hiçbir istisna bulunmamaktadır", "Adi yazılı şekil her hâlde yeterli olur", "Sözlü olarak da geçerli biçimde yapılabilir", "Hiçbir değişiklik şekle bağlı değildir"],
  a: 0,
  e: "Bir sözleşme resmi şekil şartına bağlı ise SONRADAN YAPILACAK DEĞİŞİKLİKLERİN DE RESMİ ŞEKİLDE yapılması gerekir. Ancak sözleşme METNİYLE ÇELİŞMEYEN veya sözleşmede yer alan ESASLI UNSURLARDA DEĞİŞİKLİK YAPMAYAN TAMAMLAYICI EK ANLAŞMALAR ŞEKLE BAĞLI DEĞİLDİR.",
  t: "Şekil", d: 3
},
{
  q: "Kanunda şekle bağlanmamış bir sözleşmenin taraflarca belirli bir şekilde yapılması kararlaştırılmışsa ne olur?",
  o: ["Belirlenen şekle uyulmazsa tarafları bağlamaz", "Belirlenen şekle uyulmasa da sözleşme bağlayıcıdır", "Sözleşme kesin olarak hükümsüz sayılır", "Sözleşme askıda hükümsüz duruma gelir", "Böyle bir şekil kararlaştırılması mümkün değildir"],
  a: 0,
  e: "Kanunda şekle bağlanmamış bir sözleşmenin TARAFLARCA BELİRLİ BİR ŞEKİLDE YAPILMASI KARARLAŞTIRILMIŞSA, BELİRLENEN ŞEKİLDE YAPILMAYAN SÖZLEŞME TARAFLARI BAĞLAMAZ.",
  t: "Şekil", d: 3
},
{
  q: "İspat şekli ile kanuni geçerlilik şekli arasındaki temel fark nedir?",
  o: ["İspat şekli anlaşmayla geçersiz kılınabilir", "Geçerlilik şekli anlaşmayla değiştirilebilir", "Her ikisi de anlaşmayla değiştirilebilir", "Her ikisi de anlaşmayla değiştirilemez", "İkisi arasında hukuken bir fark yoktur"],
  a: 0,
  e: "GEÇERLİLİK ŞEKLİ BORÇLAR HUKUKUNUN, İSPAT ŞEKLİ USUL HUKUKUNUN meselesidir. İSPAT ŞEKLİ ANLAŞMA İLE GEÇERSİZ KILINABİLİR (EVET). KANUNİ GEÇERLİLİK ŞEKLİ FARKLI KARARLAŞTIRILABİLİR Mİ? HAYIR.",
  t: "Şekil", d: 3
},
{
  q: "Genel işlem koşulu (GİK) nedir?",
  o: ["Önceden tek yanlı hazırlanıp karşı tarafa sunulan hükümler", "Tarafların karşılıklı müzakereyle belirlediği hükümler", "Kanunun emredici nitelikteki hükümleri", "Ticari örf ve adetten kaynaklanan kurallar", "Mahkemenin sözleşmeye eklediği hükümler"],
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
  o: ["Önceden ve tek yanlı hazırlanma ile genel nitelik", "Yalnızca yazılı olarak hazırlanmış olması", "Yalnızca tek yanlı hazırlanmış olması", "Yalnızca karşı tarafa sunulmuş olması", "Ayrıca noter onayı taşımış olması"],
  a: 0,
  e: "Bir sözleşme hükmünün GİK sayılabilmesi için: ÖNCEDEN VE TEK YANLI HAZIRLANMIŞ OLMALI, İLERİDE ÇOK SAYIDA BENZER SÖZLEŞMEDE KULLANILMAK ÜZERE hazırlanmış olmalı, KARŞI TARAFA SUNULMUŞ olmalı (bir nevi dayatma) ve GENEL NİTELİK TAŞIMA VE SOYUTLUK unsurları bulunmalıdır.",
  t: "Genel İşlem Koşulları", d: 3
},
{
  q: "Genel işlem koşulları hangi durumlarda yazılmamış sayılır?",
  o: ["Bilgilendirme yapılmamışsa veya sözleşmeye yabancıysa", "Yalnızca yazılı olarak düzenlenmemişse", "Yalnızca karşı taraf itiraz etmişse", "Yalnızca mahkeme kararı verilmişse", "Hiçbir durumda yazılmamış sayılmaz"],
  a: 0,
  e: "Genel işlem koşulları şu hallerde YAZILMAMIŞ SAYILIR: DÜZENLEYENİN diğer tarafı GİK hakkında AÇIK BİLGİLENDİRMEMİŞ olması, KARŞI TARAFIN BUNLARI KABUL ETMEMİŞ olması, BİLGİ VERİLMİŞ OLSA DAHİ KOŞULUN SÖZLEŞME İÇERİĞİNE (niteliğine ve işin özelliğine) YABANCI olması.",
  t: "Genel İşlem Koşulları", d: 3
},
{
  q: "Yazılmamış sayılmanın sözleşmeye etkisi nedir?",
  o: ["Diğer hükümler geçerli kalır; düzenleyen itiraz edemez", "Sözleşmenin tamamı kesin olarak geçersiz olur", "Sözleşme iptal edilebilir hâle gelir", "Düzenleyen sözleşmeden dönme hakkı kazanır", "Sözleşme askıda hükümsüz duruma gelir"],
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
{
  q: "Yokluk (bir hukuki işlemin yok sayılması) nedir ve sonuçları nelerdir?",
  o: ["Kurucu unsurların hiç bulunmaması hâlidir", "Emredici hükümlere aykırılık hâlidir", "İptal edilebilirlik (iptal hakkı) hâlidir", "Askıda hükümsüzlük (noksanlık) hâlidir", "Kısmi hükümsüzlük hâlidir"],
  a: 0,
  e: "YOKLUK, KURUCU UNSURLARIN OLMAMASIDIR (örneğin satım sözleşmesinde tarafların satıma konu şey üzerinde anlaşamamış olmaları). HERKES tarafından ileri sürülebilir, HERHANGİ BİR ŞEKİLDE GEÇERLİ HALE GELEMEZ ve DAVA AÇILMASINA GEREK YOKTUR; HAKİM RE'SEN NAZARA ALIR.",
  t: "Hükümsüzlük", d: 3
},
{
  q: "Kesin hükümsüzlüğün özellikleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Hukuki menfaati olan herkes ileri sürebilir", "Yalnızca sözleşmenin tarafları ileri sürebilir", "İşlem ancak sonradan geçersiz hâle gelir", "Tarafların ifası işlemi geçerli kılar", "Hâkim re'sen dikkate alma yetkisine sahip değildir"],
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
  o: ["Sebepsiz zenginleşme veya istihkakla iade yapılır", "Yalnızca haksız fiil hükümleri uygulanır", "İfa edilmiş olması işlemi geçerli kılar", "Hiçbir iade veya tazminat yükümü doğmaz", "Tahvil (çevirme) hiçbir hâlde mümkün olmaz"],
  a: 0,
  e: "Kesin hükümsüzlük hallerinde borçlar ifa edilmişse SEBEPSİZ ZENGİNLEŞME VEYA İSTİHKAK üzerinden iade hükümlerinin uygulanması gerekir. KUSURLU TARAFIN kusursuz tarafın bu sözleşmeye GÜVENDEN KAYNAKLI ZARARLARINI ÖDEMESİ gerekir. TAHVİLİ MÜMKÜN OLABİLİR.",
  t: "Hükümsüzlük", d: 3
},
{
  q: "Noksanlık (askıda hükümsüzlük) nedir?",
  o: ["Hükmün bir unsurun tamamlanmasına bağlı olması", "Kurucu unsurların hiç bulunmaması hâli", "Hükümlerin bir kısmının hükümsüz olması", "Bir irade sakatlığı hâlinin bulunması", "Emredici hükümlere aykırılık hâli"],
  a: 0,
  e: "NOKSANLIK: KURUCU UNSURLARI YERİNDE OLAN bir hukuki işlemin HÜKÜM İFADE ETMESİ BİRKAÇ UNSURUN TAMAMLANMASINA BAĞLI ise söz konusu olur (ASKIDA HÜKÜMSÜZ).",
  t: "Hükümsüzlük", d: 3
},
{
  q: "Kısmi hükümsüzlük nedir ve hangi durumda kesin hükümsüzlüğe dönüşür?",
  o: ["Bir kısmı hükümsüz; bunlar olmadan yapılmayacaksa kesin", "Sözleşmenin tamamının hükümsüz olmasıdır", "Hiçbir hâlde kesin hükümsüzlüğe dönüşmez", "Yalnızca taraflar isterse kesin hükümsüz olur", "Yalnızca hâkimin takdirine bağlı olarak oluşur"],
  a: 0,
  e: "KISMİ HÜKÜMSÜZ: hükümlerden BİR KISMININ HÜKÜMSÜZ olup geri kalanların hükümsüz olmaması ve bu hükümsüz hükümlerin sözleşmenin TÜMÜNÜN YÜRÜRLÜĞÜNÜ ETKİLEMEMESİDİR. AKSİ HALDE BUNLAR OLMADAN SÖZLEŞME YAPILMAYACAK İDİYSE KESİN HÜKÜMSÜZLÜK OLUŞUR.",
  t: "Hükümsüzlük", d: 3
},
{
  q: "Aşağıdaki hukuki ilişkilerden hangisi temsilci ile yürütülmeye uygun DEĞİLDİR?",
  o: ["Evlenme ve evlat edinme", "Satım sözleşmesi", "Kira sözleşmesi", "Vekâlet sözleşmesi", "Bankacılık işlemleri"],
  a: 0,
  e: "Her hukuki ilişki temsilciyle yürütülmeye uygun olmayabilir: EVLENME, EVLAT EDİNME, ÖLÜME BAĞLI TASARRUF ve HAKSIZ FİİLLER temsilci ile yürütülemez.",
  t: "Temsil", d: 2
},
{
  q: "Kanuni temsil ile iradi temsil arasındaki fark nedir?",
  o: ["Kanuni temsil kanuna, iradi temsil irade beyanına dayanır", "Kanuni temsil sözleşmeye, iradi temsil kanuna dayanır", "Her ikisi de doğrudan kanun hükmüne dayanır", "Her ikisi de tek taraflı irade beyanına dayanır", "İradi temsil mahkeme kararına dayanmaktadır"],
  a: 0,
  e: "KANUNİ TEMSİL: kişinin KANUNUN VERDİĞİ YETKİYE dayanarak başkasını temsil etmesidir (VELAYET, VASİ, KAYYIM). İRADİ TEMSİL: TEMSİL OLUNAN tarafından TEK TARAFLI İRADE BEYANI üzerine bir kişinin işlemler için yetkilendirilmesidir.",
  t: "Temsil", d: 2
},
{
  q: "Doğrudan temsil nedir ve temsilcinin durumu nasıldır?",
  o: ["Temsil olunan adına ve hesabına işlem yapılması", "Temsilcinin kendi adına ve hesabına işlem yapması", "Temsilcinin kendi adına, temsil olunan hesabına işlemi", "Temsilcinin hak kazanıp borçlardan sorumlu olması", "Temsilcinin yalnızca bildirim yapmakla yetinmesi"],
  a: 0,
  e: "DOĞRUDAN TEMSİL, bir kişinin temsil olunanın ADINA VE HESABINA işlem yapabilmesidir. TEMSİLCİ HAK İKTİSAP ETMEZ, BORÇLARDAN SORUMLU TUTULMAZ.",
  t: "Temsil", d: 2
},
{
  q: "Dolaylı temsil nedir ve ilk işlemde kim borç altına girer?",
  o: ["Kendi adına, temsil olunan hesabına; borçlu temsilcidir", "Temsil olunan adına ve hesabına; borçlu temsil olunandır", "Kendi adına ve kendi hesabına; borçlu temsilcidir", "Temsil olunan adına, kendi hesabına; borçlu temsilcidir", "Kendi adına, temsil olunan hesabına; borçlu temsil olunandır"],
  a: 0,
  e: "DOLAYLI TEMSİLDE temsilci işlemi KENDİ ADINA fakat TEMSİL OLUNAN HESABINA yapmaktadır ve bu işlemi temsilcisi olduğu kişi adına yaptığını BİLDİRMEMEKTEDİR. İLK İŞLEMDE BORÇ ALTINA GİREN TEMSİLCİDİR; hak ve borçlar ALACAĞIN DEVRİ VE BORCUN ÜSTLENİLMESİ hükümleri çerçevesinde temsil olunana devredilir.",
  t: "Temsil", d: 3
},
{
  q: "BK md. 40'a göre temsilci hukuki işlemi yaparken bu sıfatını bildirmezse ne olur?",
  o: ["Sonuçlar kendisine ait olur; istisnaları vardır", "Sonuçlar her hâlde temsil olunana ait olur", "Sonuçlar her hâlde temsilciye ait olur", "Yapılan işlem kesin olarak geçersiz olur", "Yapılan işlem askıda hükümsüz duruma gelir"],
  a: 0,
  e: "BK md. 40: Temsilci, hukuki işlemi yaparken BU SIFATINI BİLDİRMEZSE hukuki işlemin sonuçları KENDİSİNE AİT OLUR. Ancak KARŞI TARAF bir temsil ilişkisinin varlığını DURUMDAN ÇIKARIYOR VEYA ÇIKARMASI GEREKİYOR ya da hukuki işlemi TEMSİLCİ VEYA TEMSİL OLUNANDAN BİRİ İLE YAPMASI FARKSIZ ise sonuçlar DOĞRUDAN DOĞRUYA TEMSİL OLUNANA ait olur.",
  t: "Temsil", d: 3
},
{
  q: "Doğrudan temsilde temsilcinin ehliyeti bakımından ne aranır?",
  o: ["Ayırt etme gücünün bulunması yeterlidir", "Tam fiil ehliyetinin bulunması gerekir", "Yalnızca ergin olmuş olması gerekir", "Kısıtlanmamış olması tek başına yeterlidir", "Herhangi bir ehliyet koşulu aranmaz"],
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
  o: ["Temsilcinin; temsil olunan biliyorsa kazanım olmaz", "Yalnızca temsil olunanın iyiniyetli olması gerekir", "Yalnızca üçüncü kişinin iyiniyeti aranmaktadır", "Her ikisinin de iyiniyeti aranmamaktadır", "Hiç kimsenin iyiniyeti aranmamaktadır"],
  a: 0,
  e: "TEMSİLCİNİN İYİNİYETLİ OLMASI GEREKİR. Ancak TEMSİL OLUNAN hak kazanımına ENGEL KOŞULU BİLİYOR olup temsilci bu durumu bilmiyorsa YİNE DE HAK KAZANIMI SÖZ KONUSU OLMAYACAKTIR.",
  t: "Temsil", d: 3
},
{
  q: "Temsil yetkisi veren için ehliyet şartı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Kanuni temsilde işlem ehliyeti aranmaz, iradide aranır", "Kanuni temsilde işlem ehliyeti aranır, iradide aranmaz", "Her hâlde tam fiil ehliyetinin bulunması gerekir", "Her iki temsil türünde de hiçbir ehliyet aranmaz", "İradi temsilde yalnızca hak ehliyeti yeterlidir"],
  a: 0,
  e: "HAK EHLİYETİNİN VARLIĞI ŞARTTIR. KANUNİ TEMSİLDE temsil olunanın HUKUKİ İŞLEM EHLİYETİ ARANMAZ (kanuni temsilciliğin temel meselesi de budur). İRADİ TEMSİLDE ise YETKİ VEREN İÇİN HUKUKİ İŞLEM EHLİYETİ ŞARTI ARANIR.",
  t: "Temsil", d: 3
},
{
  q: "Temsil yetkisinin şekli bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Karşı tarafa ulaşan beyanla; geçerlilik şekli yoktur", "Her hâlde yazılı olarak yapılması zorunludur", "Noter onayından geçmesi zorunludur", "Yetki belgesi düzenlenmesi olmazsa olmaz şarttır", "Ticaret siciline tescil edilmesi zorunludur"],
  a: 0,
  e: "TEMSİL YETKİSİ KARŞI TARAFA ULAŞMASI GEREKEN BİR BEYANLA YARATILIR. Bu da BİR GEÇERLİLİK ŞEKLİNİN OLMADIĞI anlamına gelir. YETKİ BELGESİ OLMAZSA OLMAZ ŞART DEĞİLDİR; tapuda aranıyor olması her hukuki işlem için verilmesini gerektirmez.",
  t: "Temsil", d: 3
},
{
  q: "Temsil ilişkisinin kurulması için temsilcinin kabul beyanı gerekli midir?",
  o: ["Gerekli değildir; tek taraflı beyanla kurulur", "Gereklidir; kabul beyanı olmadan kurulmaz", "Gereklidir; yalnızca yazılı kabul geçerlidir", "Yalnızca iradi temsilde kabul gereklidir", "Yalnızca kanuni temsilde kabul gereklidir"],
  a: 0,
  e: "TEMSİL İLİŞKİSİ TEK TARAFLI BEYAN İLE YARATILIR. Bu sebeple KABUL, RET gibi şeyler bu ilişkiyi temsilci iradesi ile KURMAZ YA DA ORTADAN KALDIRMAZ. Genelde bu durum VEKALET ile karıştırılır; VEKALETTE VEKİLİN BU İLİŞKİYİ KABULÜ ESASTIR.",
  t: "Temsil", d: 3
},
{
  q: "TBK 41'e göre temsil yetkisinin içeriği ve derecesi nasıl belirlenir?",
  o: ["Kaynağına göre; bildirilmişse bildirime göre", "Her hâlde doğrudan kanun hükümlerine göre", "Her hâlde taraflar arasındaki sözleşmeye göre", "Her hâlde hâkimin takdir yetkisine göre", "Her hâlde temsilcinin kendi beyanına göre"],
  a: 0,
  e: "TBK 41: Başkası adına ve hesabına temsil KAMU HUKUKUNDAN doğmuşsa temsil yetkisinin içeriği ve derecesi BU KONUDAKİ YASAL HÜKÜMLERE; temsil HUKUKSAL BİR İŞLEMDEN doğmuşsa O HUKUKSAL İŞLEME göre belirlenir. TEMSİL YETKİSİ ÜÇÜNCÜ KİŞİLERE BİLDİRİLMİŞSE içeriği ve derecesi BU BİLDİRİME göre belirlenir.",
  t: "Temsil", d: 3
},
{
  q: "Kişi temsil yetkisini üçüncü kişilere bildirmiş ancak yetki kapsamını daralttığını sonradan bildirmemişse ne olur?",
  o: ["İlk bildirim esastır; daraltma etkili olmaz", "Yapılan daraltma her hâlde geçerli olur", "Temsil yetkisi tümüyle sona ermiş sayılır", "Üçüncü kişiler daraltmayı bilmek zorundadır", "Yapılan işlem kesin olarak geçersiz olur"],
  a: 0,
  e: "Kişi verdiği temsil yetkisini ve kapsamını üçüncü kişilere bildirmiş ancak YETKİ KAPSAMINI DARALTTIĞINI SONRADAN BİLDİRMEMİŞ ise İLK BİLDİRİMDEKİ BEYAN ESAS OLUR ve bu DARALTICI YENİ DÜZENLEMELER BİLDİRİLMEMESİNDEN ÖTÜRÜ ÜÇÜNCÜ KİŞİLERİ ETKİLEMEZ.",
  t: "Temsil", d: 3
},
{
  q: "Temsil yetkisinin sınırlandırılma türleri hangileridir?",
  o: ["Süre, kişi ve konu yönünden sınırlandırma", "Yalnızca süre yönünden sınırlandırma", "Yalnızca konu yönünden sınırlandırma", "Yalnızca kişi ve süre yönünden sınırlandırma", "Sınırlandırma hiçbir yönden mümkün değildir"],
  a: 0,
  e: "Temsil yetkisi SÜRE YÖNÜNDEN (A, B'yi 1 yıl boyunca X Bankası ile işlem yapması için yetkilendirmesi), KİŞİ YÖNÜNDEN (sadece X bankası ile çalışması) ve KONU YÖNÜNDEN (sadece satış akdi yapması) sınırlandırılabilir.",
  t: "Temsil", d: 3
},
]);

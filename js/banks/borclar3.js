/* Borçlar Hukuku — 3. bölüm (temsil yetkisinin sona ermesi, yetkisiz temsil,
   haksız fiil, kusursuz sorumluluk) */
KPSS.registerBank('borclar', [

/* ---------- ÖZEL YETKİ GEREKTİREN İŞLEMLER ---------- */
{
  q: "Genel yetki verilmiş olsa dahi ayrıca özel yetki gerektiren işlemler arasında aşağıdakilerden hangisi vardır?",
  o: ["Dava açma, sulh olma, hakeme başvurma, iflas-konkordato talebi, kambiyo taahhüdü, bağışlama, kefil olmak, taşınmazı devretmek veya sınırlamak", "Olağan alım-satım işlemleri", "Kira sözleşmesi yapmak", "Muhasebe kayıtlarını tutmak", "Hiçbir işlem özel yetki gerektirmez"],
  a: 0,
  e: "Genel yetki verilmesine rağmen ÖZEL YETKİ gerektiren işlemler: DAVA AÇMA, SULH OLMA, HAKEME BAŞVURMA, İFLAS-İFLAS ERTELEME VE KONKORDATO TALEP ETME, KAMBİYO TAAHHÜDÜNDE BULUNMAK, BAĞIŞLAMA YAPMAK, KEFİL OLMAK, TAŞINMAZI DEVRETMEK VEYA SINIRLAMAK.",
  t: "Temsil Yetkisi", d: 2
},
{
  q: "Temsil yetkisinin yer ve miktar yönünden sınırlandırılmasına örnek nedir?",
  o: ["Yer: X Bankasının Kadıköy şubesi ile çalışma yetkisi; Miktar: X bankasından 500.000 TL'ye kadar kredi kullanma yetkisi", "Yer: sadece satış akdi yapma; Miktar: 1 yıl süreyle", "Yer: 1 yıl süreyle; Miktar: sadece X bankası", "İkisi de kişi yönünden sınırlamadır", "Yer ve miktar yönünden sınırlama mümkün değildir"],
  a: 0,
  e: "YER YÖNÜNDEN sınırlandırma: A, B'yi X Bankasının KADIKÖY ŞUBESİ ile çalışması hususunda yetkilendirmesi. MİKTAR YÖNÜNDEN sınırlandırma: A, B'yi X bankasından 500.000 TL'YE KADAR kredi kullanması hususunda yetkilendirmesi.",
  t: "Temsil Yetkisi", d: 3
},

/* ---------- TEMSİL YETKİSİNİN SONA ERMESİ ---------- */
{
  q: "TBK 42/I'e göre azil (temsil yetkisinin geri alınması) ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Temsil olunan yetkiyi her zaman sınırlayabilir veya geri alabilir; azil şekle bağlı değildir, bozucu yenilik doğurur ve sebebe bağlı olması gerekmez", "Azil için haklı sebep gerekir", "Azil yazılı olmak zorundadır", "Azil ancak mahkeme kararıyla mümkündür", "Azil kurucu yenilik doğurur"],
  a: 0,
  e: "TBK 42/I: Temsil olunan, hukuki bir işlemden doğan temsil yetkisini HER ZAMAN SINIRLAYABİLİR VEYA GERİ ALABİLİR. AZİL YA DA SINIRLANDIRMA ŞEKLE BAĞLI DEĞİLDİR, BOZUCU YENİLİK DOĞURUR. AZLİN SEBEBE BAĞLI OLMASI DA GEREKMEZ. Aynı zamanda 3. kişilere de aynı yolla bildirilmelidir.",
  t: "Temsilin Sona Ermesi", d: 2
},
{
  q: "Temsil olunan verdiği yetkiyi üçüncü kişilere bildirmiş ancak geri aldığını bildirmemişse ne olur?",
  o: ["Yetkinin geri alındığını iyiniyetli üçüncü kişilere karşı ileri süremez", "Geri alma her halde geçerli olur", "Üçüncü kişiler geri almayı bilmek zorundadır", "Temsil ilişkisi kendiliğinden devam eder", "Yapılan işlemler geçersiz olur"],
  a: 0,
  e: "Temsil olunan verdiği yetkiyi üçüncü kişilere AÇIKÇA VEYA DOLAYLI BİÇİMDE BİLDİRMİŞSE, bu yetkiyi TAMAMEN VEYA KISMEN GERİ ALDIĞINI ONLARA BİLDİRMEDİĞİ TAKDİRDE, yetkinin geri alındığını İYİNİYETLİ ÜÇÜNCÜ KİŞİLERE KARŞI İLERİ SÜREMEZ.",
  t: "Temsilin Sona Ermesi", d: 3
},
{
  q: "Temsil olunan azil hakkından önceden feragat edebilir mi?",
  o: ["Edemez; kanun feragati yasaklamıştır", "Edebilir", "Sadece yazılı feragat geçerlidir", "Sadece noter huzurunda edebilir", "Sadece belirli süreli yetkilerde edebilir"],
  a: 0,
  e: "'TEMSİL OLUNAN, BU HAKKINDAN ÖNCEDEN FERAGAT EDEMEZ' şeklindeki kanunun ilgili maddesi FERAGATİ YASAKLAMIŞTIR. Yani temsilci azil yetkisini kullanmayacağını iletmiş olsa bile sonradan azil yetkisini kullanabilir ve bu azil GEÇERLİDİR.",
  t: "Temsilin Sona Ermesi", d: 3
},
{
  q: "Temsilcinin istifası bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Her zaman istifa edebilir; ancak istifanın temsil olunanı zarara sokmaması gerekir, aksi halde bundan sorumludur", "Hiçbir zaman istifa edemez", "Sadece haklı sebeple istifa edebilir", "İstifadan hiçbir şekilde sorumlu olmaz", "Sadece yazılı istifa geçerlidir"],
  a: 0,
  e: "Temsilci HER ZAMAN İSTİFA EDEBİLİR. Ancak bu istifanın TEMSİL OLUNANI ZARARA SOKMAMASI gerekir; AKSİ HALDE BUNDAN SORUMLUDUR. Örnek: sözleşmenin imza edilmesi esnasında bir bildirimle görevinden istifa etmek temsil olunanı doğrudan zarara sokar.",
  t: "Temsilin Sona Ermesi", d: 3
},
{
  q: "TBK 43'e göre hukuki işlemden doğan temsil yetkisi hangi durumlarda sona erer?",
  o: ["Aksi kararlaştırılmadıkça veya işin özelliğinden anlaşılmadıkça temsil olunanın veya temsilcinin ölümü, gaipliğine karar verilmesi, fiil ehliyetini kaybetmesi veya iflas etmesi durumlarında", "Sadece temsilcinin ölümüyle", "Sadece temsil olunanın ölümüyle", "Sadece azil ile", "Hiçbir durumda kendiliğinden sona ermez"],
  a: 0,
  e: "TBK 43: Hukuki işlemden doğan temsil yetkisi, AKSİ TARAFLARCA KARARLAŞTIRILMADIKÇA veya İŞİN ÖZELLİĞİNDEN ANLAŞILMADIKÇA, TEMSİL OLUNANIN VEYA TEMSİLCİNİN ÖLÜMÜ, GAİPLİĞİNE KARAR VERİLMESİ, FİİL EHLİYETİNİ KAYBETMESİ veya İFLAS ETMESİ durumlarında sona erer. Bu hüküm TÜZEL KİŞİLİĞİN SONA ERMESİ durumunda da uygulanır.",
  t: "Temsilin Sona Ermesi", d: 3
},
{
  q: "Temsil yetkisi sona erdiğinde yetki belgesi bakımından temsilcinin yükümlülüğü nedir?",
  o: ["Belgeyi temsil olunana geri vermek veya hakimin belirleyeceği yere bırakmakla yükümlüdür", "Belgeyi imha etmekle yükümlüdür", "Hiçbir yükümlülüğü yoktur", "Belgeyi noterde saklamakla yükümlüdür", "Belgeyi üçüncü kişilere bildirmekle yükümlüdür"],
  a: 0,
  e: "Temsilciye yetki belgesi verilmişse, yetkinin sona ermesi durumunda temsilci bu belgeyi TEMSİL OLUNANA GERİ VERMEKLE veya HAKİMİN BELİRLEYECEĞİ YERE BIRAKMAKLA yükümlüdür. Temsil olunan veya halefleri bunun için gerekeni yapmazlarsa İYİNİYETLİ ÜÇÜNCÜ KİŞİLERİN ZARARINI GİDERMEKLE yükümlüdürler.",
  t: "Temsilin Sona Ermesi", d: 3
},
{
  q: "Temsilci yetkisinin sona erdiğini bilmediği sürece yaptığı işlemlerin durumu nedir?",
  o: ["Temsil olunan veya halefleri bu işlemlerin sonuçlarıyla bağlıdır; ancak üçüncü kişiler yetkinin sona erdiğini biliyorlarsa bu kural uygulanmaz", "İşlemler geçersizdir", "Temsil olunan hiçbir şekilde bağlı olmaz", "İşlemler askıda hükümsüzdür", "Üçüncü kişilerin bilmesi önemli değildir"],
  a: 0,
  e: "Temsilci, yetkisinin SONA ERMİŞ OLDUĞUNU BİLMEDİĞİ SÜRECE, temsil olunan veya halefleri temsilcinin yapmış olduğu hukuki işlemlerin SONUÇLARIYLA BAĞLIDIRLAR. Bu kural, ÜÇÜNCÜ KİŞİLERİN YETKİNİN SONA ERMİŞ OLDUĞUNU BİLDİKLERİ durumlarda UYGULANMAZ. Geri alma beyanı temsilciye ulaştığı anda yetki sona erer.",
  t: "Temsilin Sona Ermesi", d: 3
},

/* ---------- YETKİSİZ TEMSİL ---------- */
{
  q: "Yetkisiz temsil hangi halleri kapsar?",
  o: ["Hiç yetkisi olmaması, yetkisinde sınırı aşması ya da yetkisi bittiği halde devam etmesi", "Sadece hiç yetkisi olmaması", "Sadece yetki sınırının aşılması", "Sadece yetkinin sona ermesi", "Sadece kanuni temsilde söz konusu olur"],
  a: 0,
  e: "YETKİSİZ TEMSİL, temsil yetkisinin MEVCUT OLMAMASI veya mevcut olmasına rağmen YETKİ SINIRININ AŞILMASI halidir: ya HİÇ YETKİSİ YOK, ya YETKİSİNDE SINIRI AŞMIŞTIR, ya da YETKİSİ BİTMİŞ FAKAT KİŞİ DEVAM ETMEKTEDİR.",
  t: "Yetkisiz Temsil", d: 2
},
{
  q: "BK md. 46'ya göre yetkisiz temsilcinin yaptığı işlem ne zaman temsil olunanı bağlar?",
  o: ["Ancak onadığı takdirde; diğer taraf temsil olunandan uygun bir süre içinde onayıp onamayacağını bildirmesini isteyebilir ve onanmazsa bağlı olmaktan kurtulur", "Her halde bağlar", "Hiçbir şekilde bağlamaz", "Sadece üçüncü kişi iyiniyetliyse bağlar", "Mahkeme kararıyla bağlar"],
  a: 0,
  e: "BK md. 46: Bir kimse yetkisi olmadığı halde temsilci olarak bir hukuki işlem yaparsa, bu işlem ANCAK ONADIĞI TAKDİRDE temsil olunanı bağlar. Diğer taraf, temsil olunandan UYGUN BİR SÜRE içinde işlemi ONAYIP ONAMAYACAĞINI BİLDİRMESİNİ isteyebilir; bu süre içinde onanmazsa DİĞER TARAF BU İŞLEMLE BAĞLI OLMAKTAN KURTULUR.",
  t: "Yetkisiz Temsil", d: 2
},
{
  q: "Yetkisiz temsilcinin işlemleri icazet (onama) ile hangi andan itibaren geçerli hale gelir?",
  o: ["En baştan (geçmişe etkili olarak)", "İcazet anından itibaren", "İşlemin yapıldığı andan bir yıl sonra", "Hiçbir zaman geçerli hale gelmez", "Tescil anından itibaren"],
  a: 0,
  e: "Yetkisiz temsilci işlemleri, İCAZET İLE EN BAŞTAN GEÇERLİ HALE GELİR. 3. kişi icazet için bir süre (iddet süresi) atayabilir. Temsil olunan icazet vermediyse taraflar SEBEPSİZ ZENGİNLEŞME veya İSTİHKAK hükümlerine göre verdiklerini talep edebilirler.",
  t: "Yetkisiz Temsil", d: 3
},
{
  q: "BK md. 47'ye göre temsil olunan işlemi onamazsa yetkisiz temsilcinin sorumluluğu nedir?",
  o: ["İşlemin geçersizliğinden doğan zararın giderilmesi ondan istenebilir; ancak karşı tarafın yetkisizliği bildiğini veya bilmesi gerektiğini ispat ederse zararın giderilmesi istenemez", "Her halde sorumludur", "Hiçbir sorumluluğu yoktur", "Sadece kasıtlı davranmışsa sorumludur", "Sadece temsil olunana karşı sorumludur"],
  a: 0,
  e: "BK md. 47: Temsil olunanın açık veya örtülü olarak işlemi ONAMAMASI halinde, işlemin geçersiz olmasından doğan ZARARIN GİDERİLMESİ YETKİSİZ TEMSİLCİDEN İSTENEBİLİR. Ancak yetkisiz temsilci, işlemin yapıldığı sırada KARŞI TARAFIN KENDİSİNİN YETKİSİZ OLDUĞUNU BİLDİĞİNİ VEYA BİLMESİ GEREKTİĞİNİ İSPAT EDERSE, kendisinden zararın giderilmesi istenemez. HAKKANİYET gerektiriyorsa KUSURLU yetkisiz temsilciden DİĞER ZARARLARIN giderilmesi de istenebilir.",
  t: "Yetkisiz Temsil", d: 3
},

/* ---------- HAKSIZ FİİL ---------- */
{
  q: "Haksız fiil ile borca aykırılık arasındaki temel fark nedir?",
  o: ["Borca aykırılık önceden kurulmuş hukuki ilişkiye uyulmamasıdır; haksız fiil aralarında borç ilişkisi bulunmayan kişiler arası zarar bağlantısıdır", "İkisi de önceden kurulmuş ilişkiye dayanır", "İkisi de borç ilişkisi olmayan kişiler arasındadır", "Haksız fiil sözleşmeye dayanır", "Aralarında fark yoktur"],
  a: 0,
  e: "BORCA AYKIRILIK, önceden taraflar arasında KURULMUŞ OLAN HUKUKİ İLİŞKİYE UYULMAMASIDIR; önceden belirlenen edim yüküne uygun olmayan, onu ihlal eden davranışlardır. HAKSIZ FİİL ise ARALARINDA BİR BORÇ İLİŞKİSİ BULUNMAYAN KİŞİLER ARASI ZARAR BAĞLANTISIDIR.",
  t: "Haksız Fiil", d: 2
},
{
  q: "Fiilin hukuka aykırılığını ortadan kaldıran durumlar arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Failin ekonomik zorluk içinde olması", "Kanunun yetkisini kullanma", "Zarar görenin rızası", "Haklı savunma (meşru müdafaa)", "Zorunluluk hali"],
  a: 0,
  e: "Fiilin hukuka aykırılığını ortadan kaldıran durumlar: KANUNUN YETKİSİNİ KULLANMA, ZARAR GÖRENİN RIZASI, ÖZEL BİR HAKKIN KULLANIMI, KUVVET KULLANMA, HAKLI SAVUNMA (MEŞRU MÜDAFAA) ve ZORUNLULUK HALİ.",
  t: "Haksız Fiil", d: 2
},
{
  q: "Kuvvet kullanma hangi koşullarda hukuka aykırılığı ortadan kaldırır?",
  o: ["Devletin müdahalesinin gecikecek olması ve bu sebeple telafisi olmayan bir hak yoksunluğu oluşacak olması hallerinde, orantılı bir fiil ile", "Her durumda kaldırır", "Sadece devlet görevlileri için geçerlidir", "Sadece malvarlığı zararlarında geçerlidir", "Hiçbir koşulda kaldırmaz"],
  a: 0,
  e: "KUVVET KULLANMA: Devletin hakkın korunması için gerçekleştireceği müdahalenin GECİKECEK OLMASI ve bu sebeple BİR DAHA TELAFİSİ OLMAYAN BİR HAK YOKSUNLUĞU OLUŞACAK OLMASI hallerinde kişiler kendi haklarını ORANTILI BİR FİİL ile korumak hakkına sahiptirler.",
  t: "Haksız Fiil", d: 3
},
{
  q: "Haklı savunma (meşru müdafaa) için hangi koşullar aranır?",
  o: ["Ölçülü bir fiil ile o an bertaraf edilmesi, saldırıyı durdurmanın esas olması ve saldırının halihazırda var olması ya da kesinkes başlamak üzere olması", "Saldırının geçmiş olması yeterlidir", "Ölçülü olması gerekmez", "Sadece malvarlığına yönelik saldırılarda geçerlidir", "Devletin izni gerekir"],
  a: 0,
  e: "HAKLI SAVUNMA: herhangi bir hakka yönelmiş bir TECAVÜZÜN/SALDIRININ varlığı halinde ÖLÇÜLÜ BİR FİİL ile O AN BERTARAF EDİLMESİ hakkıdır. SALDIRIYI DURDURMAK ESASTIR ve saldırı HALİHAZIRDA VAR OLMALI yahut KESİNKES BAŞLAMAK ÜZERE OLMALIDIR.",
  t: "Haksız Fiil", d: 3
},
{
  q: "Zorunluluk hali nedir?",
  o: ["Kişinin kendisinin ya da bir başkasının şahsına veya malvarlığına yönelik açık bir tehlikeden kurtulmak için üçüncü kişilerin malına zarar vermesidir", "Saldırıyı bertaraf etmektir", "Kanuni yetkiyi kullanmaktır", "Zarar görenin rızasıdır", "Özel bir hakkın kullanımıdır"],
  a: 0,
  e: "ZORUNLULUK HALİ, kişinin kendisinin yahut bir başkasının ŞAHSINA ya da MALVARLIĞINA yönelik bir AÇIK TEHLİKENİN varlığı halinde bu tehlikelerden kurtulmak ya da bunu bertaraf etmek maksadıyla ÜÇÜNCÜ KİŞİLERİN MALINA ZARAR VERMELERİ halidir.",
  t: "Haksız Fiil", d: 3
},
{
  q: "Doğrudan zarar ile dolaylı zarar arasındaki fark nedir?",
  o: ["Doğrudan zarar haksız fiilin doğrudan sebebiyet verdiği zarardır; dolaylı zarar doğrudan zarara bağlı olarak eklenen bir sebeple uğranılan zarardır", "Doğrudan zarar sadece maddi, dolaylı zarar sadece manevidir", "İkisi arasında fark yoktur", "Dolaylı zarar tazmin edilmez", "Doğrudan zarar sadece malvarlığına yöneliktir"],
  a: 0,
  e: "DOĞRUDAN ZARAR, haksız fiilin DOĞRUDAN DOĞRUYA SEBEBİYET VERDİĞİ zararlardır (aracı yakılan kişinin aracın gördüğü tüm zararı). DOLAYLI ZARAR, doğrudan zarara BAĞLI OLARAK EKLENEN BİR SEBEPLE uğranılan zarardır (aracı ticari araçsa mal taşıyamama sonucu uğranılan zararlar).",
  t: "Zarar", d: 3
},
{
  q: "Yansıma zarar nedir?",
  o: ["Bir haksız fiile maruz kalan kimseden başka bir kişinin bu fiil sebebiyle uğradığı zarardır", "Haksız fiilin doğrudan verdiği zarardır", "Gelecekte oluşacak zarardır", "Manevi zarardır", "Malvarlığına yönelik zarardır"],
  a: 0,
  e: "YANSIMA ZARAR, BİR HAKSIZ FİİLE MARUZ KALAN KİMSEDEN BAŞKA BİR KİŞİNİN bu fiil sebebiyle uğradığı zarardır. Örnek: bir kişi öldürüldüğünde eşi ve çocuklarının onun desteğinden yoksun kalması.",
  t: "Zarar", d: 3
},
{
  q: "Mevcut zarar ile muhtemel zarar arasındaki fark nedir?",
  o: ["Mevcut zarar haksız fiilin gerçekleşmesiyle ortaya çıkmış tüm zararlardır; muhtemel zarar hemen ortaya çıkmayan, kapsamı gelecekte belirli olacak zarardır", "Muhtemel zarar hiç tazmin edilmez", "İkisi arasında fark yoktur", "Mevcut zarar sadece manevidir", "Muhtemel zarar sadece maddi zararı kapsar"],
  a: 0,
  e: "MEVCUT ZARAR, haksız fiilin gerçekleşmesi ile ORTAYA ÇIKMIŞ OLAN TÜM ZARARLARDIR. MUHTEMEL ZARAR, haksız fiil sonucunda HEMEN ORTAYA ÇIKMAYAN, KAPSAMI HENÜZ BELİRLİ OLMAMAKLA BİRLİKTE GELECEKTE BELİRLİ OLACAK olan zarardır.",
  t: "Zarar", d: 3
},
{
  q: "BK md. 50'ye göre ispat yükü kime aittir ve zarar miktarı tam ispat edilemezse ne olur?",
  o: ["Zarar gören zararını ve zarar verenin kusurunu ispat yükü altındadır; miktar tam ispat edilemezse hakim olayların olağan akışını ve alınan önlemleri göz önünde tutarak hakkaniyete uygun belirler", "İspat yükü zarar verendedir", "Miktar ispat edilemezse dava reddedilir", "Hakim hiçbir takdir yetkisine sahip değildir", "İspat yükü mahkemededir"],
  a: 0,
  e: "BK md. 50: ZARAR GÖREN, ZARARINI VE ZARAR VERENİN KUSURUNU İSPAT YÜKÜ ALTINDADIR. Uğranılan zararın miktarı TAM OLARAK İSPAT EDİLEMİYORSA hakim, OLAYLARIN OLAĞAN AKIŞINI ve ZARAR GÖRENİN ALDIĞI ÖNLEMLERİ göz önünde tutarak zararın miktarını HAKKANİYETE UYGUN olarak belirler.",
  t: "Zarar", d: 2
},
{
  q: "Kusur kaç şekilde karşımıza çıkar ve bu ayrımın etkisi nedir?",
  o: ["Kast ve ihmal olarak; bu ayrım tazminat miktarına etki eder", "Sadece kast olarak; sorumluluğu ortadan kaldırır", "Ağır ve hafif olarak; sorumluluğu ortadan kaldırır", "Kast ve ihmal olarak; sorumluluğu ortadan kaldırır", "Kusur tek bir şekilde ortaya çıkar"],
  a: 0,
  e: "KUSUR iki şekilde karşımıza çıkar: KAST (bilerek ve isteyerek zarara sebebiyet verme) ve İHMAL (sonucu istememekle birlikte alınması gereken tedbirlerin alınmaması). BU AYRIM TAZMİNAT MİKTARINA ETKİ EDEN bir husustur; kastın veya ihmalin hafif ve ağır oluşu SADECE TAZMİNATA ETKİ EDER.",
  t: "Kusur", d: 2
},
{
  q: "Tam ehliyetsizlerin haksız fiil sorumluluğu bakımından durumu nedir?",
  o: ["Ayırt etme gücüne sahip olmadıklarından haksız fiil sorumluluğu altında değildirler; ancak hakim onları hakkaniyet sorumluluğu kapsamında tazminle yükleyebilir", "Her halde sorumludurlar", "Hiçbir şekilde tazminle yüklenemezler", "Sadece kanuni temsilcileri sorumludur", "Sadece kasıtlı fiillerinden sorumludurlar"],
  a: 0,
  e: "Medeni Kanuna göre TAM EHLİYETSİZLER ayırt etme gücüne sahip olmadıklarından fiil ehliyetine bağlı olarak bir HAKSIZ FİİL SORUMLULUĞU ALTINDA DEĞİLDİRLER. Ancak hakim bu kişileri HAKKANİYET SORUMLULUĞU kapsamında zarardan kaynaklı TAZMİN İLE YÜKLEYEBİLİR.",
  t: "Kusur", d: 3
},
{
  q: "İlliyet (nedensellik) bağı nedir ve hangi hallerde kesilir?",
  o: ["Zarar neticesi ile hukuka aykırı fiil arasındaki makul bağlantıdır; mücbir nedenler, zarar görenin ağır kusuru ve üçüncü şahsın ağır kusuru ile kesilir", "Sadece mücbir nedenle kesilir", "Hiçbir şekilde kesilmez", "Sadece zarar görenin kusuruyla kesilir", "Failin kusursuzluğuyla kesilir"],
  a: 0,
  e: "İLLİYET (NEDENSELLİK), meydana gelen ZARAR NETİCESİ ile zarara sebep olan HUKUKA AYKIRI FİİL arasındaki MAKUL BAĞLANTIDIR ('-den dolayı' şeklinde ifade edilebilir). İlliyet bağı MÜCBİR NEDENLER, ZARAR GÖRENİN AĞIR KUSURU ve ÜÇÜNCÜ ŞAHSIN AĞIR KUSURU ile KESİLİR.",
  t: "İlliyet", d: 2
},
{
  q: "Ortak illiyet nedir ve sorumluluk nasıldır?",
  o: ["Tek kişinin hareketiyle meydana gelmesi mümkün olmayan bir sonucun birden fazla kişinin hareketiyle birlikte oluşmasıdır; ortaklar zararın tamamından müteselsilen sorumludur", "Her fiilin tek başına sonucu doğurmaya yetmesidir", "Failin belirlenememesidir", "Sorumluluk paylaştırılır", "Hiç kimse sorumlu olmaz"],
  a: 0,
  e: "ORTAK İLLİYET, TEK BİR KİŞİNİN HAREKETİ İLE MEYDANA GELMESİ MÜMKÜN OLMAYAN bir sonucun BİRDEN FAZLA KİŞİNİN HAREKETİYLE BİRLİKTE OLUŞMASIDIR (örn. içi külçe altın dolu kasanın dört kişiyle kaldırılıp çalınması). ORTAKLAR ZARARIN TAMAMINDAN MÜTESELSİLEN SORUMLUDUR.",
  t: "İlliyet", d: 3
},
{
  q: "Yarışan illiyet nedir?",
  o: ["Zarara sebep olan fiillerden aslında biri de aynı sonucu ortaya çıkarmaya yetiyorsa söz konusu olur; her hareket tek başına netice üzerinde illidir", "Tek kişinin hareketiyle sonucun oluşmamasıdır", "Failin belirlenememesidir", "İlliyet bağının kesilmesidir", "Sorumluluğun paylaştırılmasıdır"],
  a: 0,
  e: "YARIŞAN İLLİYET: bir zarar sonucunun ortaya çıkmasına sebep olan fiillerden ASLINDA BİRİ DE AYNI SONUCU ORTAYA ÇIKARMAYA YETİYOR ise söz konusudur. Örnek: karşılıklı iki fabrikanın dereye döktükleri zehirli atık suların canlılığı yok etmesi. HER HAREKET TEK BAŞINA NETİCE ÜZERİNDE İLLİDİR.",
  t: "İlliyet", d: 3
},
{
  q: "Seçimlik illiyet nedir?",
  o: ["Meydana gelen zararın olağan şüphelisi birden fazla ise ve hangisinin sebep olduğu belirlenemiyorsa söz konusu olur", "Her fiilin tek başına sonucu doğurmasıdır", "Birden fazla kişinin birlikte hareket etmesidir", "İlliyet bağının kesilmesidir", "Zarar görenin kusurlu olmasıdır"],
  a: 0,
  e: "SEÇİMLİK İLLİYET: meydana gelen zararın OLAĞAN ŞÜPHELİSİ BİRDEN FAZLA ise ve HANGİSİNİN BU ZARARA SEBEP OLDUĞU BELİRLENEMEYECEK durumda ise söz konusudur. Örnek: ortak olarak bir hedefe ateş edenlerden sadece birinin kurşununun denk gelmesi ancak hangisinden çıktığının tespit edilememesi. Bazı durumlarda sorumluluk var kabul edilirken bazılarında oluşmaz.",
  t: "İlliyet", d: 3
},

/* ---------- KUSURSUZ SORUMLULUK ---------- */
{
  q: "Kusursuz sorumluluk hangi unsurları içerir ve kaç temel esas üzerine kuruludur?",
  o: ["Kusur unsuru hariç her türlü haksız fiil unsurunu içerir; hakkaniyet, özen (bakım-gözetim) ve tehlike sorumluluğu olmak üzere 3 temel esas", "Kusur unsurunu da içerir; 2 temel esas", "Sadece zarar unsurunu içerir; 3 temel esas", "Hiçbir haksız fiil unsurunu içermez", "Sadece tehlike sorumluluğunu kapsar"],
  a: 0,
  e: "KUSURSUZ SORUMLULUK, kusur sorumluluğunda yer alan KUSUR UNSURU HARİÇ her türlü haksız fiil unsurunu içeren bir sorumluluk türüdür. 3 temel esas üzerinden kabul görmüştür: HAKKANİYET SORUMLULUĞU, ÖZEN (BAKIM GÖZETİM) YÜKÜMLÜLÜĞÜNÜN GETİRDİĞİ SORUMLULUK ve TEHLİKE SORUMLULUĞU.",
  t: "Kusursuz Sorumluluk", d: 2
},
{
  q: "TBK 66/I'e göre adam çalıştıranın sorumluluğu nedir?",
  o: ["Çalışanın, kendisine verilen işin yapılması sırasında başkalarına verdiği zararı gidermekle yükümlüdür", "Sadece kendi kusurlu davranışlarından sorumludur", "Çalışanın tüm fiillerinden sorumludur", "Hiçbir sorumluluğu yoktur", "Sadece sözleşmeli çalışanların fiillerinden sorumludur"],
  a: 0,
  e: "TBK 66/I: ADAM ÇALIŞTIRAN, ÇALIŞANIN, KENDİSİNE VERİLEN İŞİN YAPILMASI SIRASINDA BAŞKALARINA VERDİĞİ ZARARI GİDERMEKLE YÜKÜMLÜDÜR.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 2
},
{
  q: "Adam çalıştıran hangi durumda sorumluluktan kurtulur (kurtuluş kanıtı)?",
  o: ["Çalışanını seçerken, talimat verirken, gözetim ve denetimde bulunurken zararın doğmasını engellemek için gerekli özeni gösterdiğini ispat ederse", "Hiçbir durumda kurtulamaz", "Sadece çalışanın kusursuz olduğunu ispat ederse", "Sadece zararın az olduğunu ispat ederse", "Sadece sigortası varsa"],
  a: 0,
  e: "Adam çalıştıran, ÇALIŞANINI SEÇERKEN, İŞİYLE İLGİLİ TALİMAT VERİRKEN, GÖZETİM VE DENETİMDE BULUNURKEN, zararın doğmasını engellemek için GEREKLİ ÖZENİ GÖSTERDİĞİNİ İSPAT EDERSE SORUMLU OLMAZ. Buna KURTULUŞ KANITI adı verilir.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 2
},
{
  q: "Adam çalıştıranın sorumluluğu için çalışan-çalıştıran ilişkisi bakımından ne aranır?",
  o: ["Sözleşmeye dayalı çalışma şartı yoktur; tesisatçı ve çırağı olur ancak avukat ve müvekkil olmaz; adam çalıştıran gerçek veya tüzel kişi olabilir", "Mutlaka yazılı iş sözleşmesi gerekir", "Sadece tüzel kişiler adam çalıştıran olabilir", "Avukat-müvekkil ilişkisi de kapsam içindedir", "Sadece sigortalı çalışanlar kapsamdadır"],
  a: 0,
  e: "Adam çalıştıran ile zarara sebep olan kişi arasında ÇALIŞAN-ÇALIŞTIRAN İLİŞKİSİ olmak zorundadır. SÖZLEŞMEYE DAYALI ÇALIŞMA ŞARTI YOKTUR. TESİSATÇI VE ÇIRAĞI OLUR ANCAK AVUKAT VE MÜVEKKİL OLMAZ. Adam çalıştıran GERÇEK VEYA TÜZEL KİŞİ de olabilir.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 3
},
{
  q: "Adam çalıştıranın sorumluluğunun şartları arasında aşağıdakilerden hangisi vardır?",
  o: ["Zararın hizmet esnasında ve hizmetle alakalı gelişmiş olması, çalıştırılanın haksız fiilinden doğması ve üçüncü kişiye verilmiş olması", "Zararın her zaman ve her yerde doğması yeterlidir", "Çalışanın kusurlu olmaması gerekir", "Zararın çalıştırana verilmiş olması gerekir", "Sözleşme ilişkisi içinde olması gerekir"],
  a: 0,
  e: "Adam çalıştıranın sorumluluğunun şartları: çalışan-çalıştıran ilişkisi, ZARARIN HİZMET ESNASINDA VE HİZMETLE ALAKALI gelişmiş olması (işi icra edenin bir hasmına zarar vermesi 66 kapsamında değildir), zararın ÇALIŞTIRILANIN HAKSIZ FİİLİNDEN doğması ve SIKI İLLİYET bulunması, zararın BİR 3. KİŞİYE verilmiş olması ve SÖZLEŞME İLİŞKİSİ DIŞINDA olması.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 3
},
{
  q: "Adam çalıştıran, ödediği tazminat için zarar veren çalışana hangi ölçüde rücu edebilir?",
  o: ["Ancak onun bizzat sorumlu olduğu ölçüde", "Ödediği tazminatın tamamı için", "Hiçbir şekilde rücu edemez", "Tazminatın yarısı için", "Mahkemenin belirleyeceği ölçüde"],
  a: 0,
  e: "Adam çalıştıran, ödediği tazminat için zarar veren çalışana ANCAK ONUN BİZZAT SORUMLU OLDUĞU ÖLÇÜDE RÜCU HAKKINA SAHİPTİR.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 2
},
{
  q: "İşletmede adam çalıştıranın sorumluluktan kurtulması için ne ispat etmesi gerekir?",
  o: ["İşletme ile ilgili bütün dikkat ve özeni gösterdiğini ispat etmesi gerekir", "Sadece çalışanı seçerken özen gösterdiğini", "Sadece talimat verdiğini", "Hiçbir şey ispat etmesi gerekmez", "Sadece illiyetin kesildiğini"],
  a: 0,
  e: "Çalıştıran, işi buyururken her türlü özen ve dikkati yerine getirdiğini ispat ederek ya da İLLİYETİN KESİLDİĞİNİ ispat ederek sorumluluktan kurtulabilir. İŞLETMEDE ADAM ÇALIŞTIRAN ise İŞLETME İLE İLGİLİ BÜTÜN DİKKAT VE ÖZENİ İSPAT ETMESİ gerekmektedir.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 3
},
{
  q: "TBK 66 (adam çalıştıran) ile TBK 116 (yardımcı kişi fiilleri) arasındaki farklar bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["66'da sözleşme ilişkisi aranmaz ve kurtuluş kanıtı mümkündür; 116'da sözleşme ilişkisi kurulu olmalıdır ve kurtuluş kanıtı getirilemez", "İkisinde de sözleşme ilişkisi aranır", "İkisinde de kurtuluş kanıtı mümkündür", "66'da sözleşme ilişkisi aranır, 116'da aranmaz", "İkisinde de kurtuluş kanıtı getirilemez"],
  a: 0,
  e: "TBK 66'DA istihdam eden ile zarar gören arasında SÖZLEŞME İLİŞKİSİ ARANMAZ (yoldan geçen biri bile zarar görmüş olabilir), çalışan-çalıştıran arasında EMİR TALİMAT ZİNCİRİ olmalıdır ve KURTULUŞ KANITI GETİRMEK MÜMKÜNDÜR. TBK 116'DA ise sorumlu borçlu ile zarar gören arasında BİR SÖZLEŞME İLİŞKİSİ KURULU OLMALIDIR, EMİR TALİMAT ARANMAZ ve KURTULUŞ KANITI GETİRİLEMEZ.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 3
}

]);

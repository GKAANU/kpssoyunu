/* Borçlar Hukuku — 3. bölüm (temsil yetkisinin sona ermesi, yetkisiz temsil,
   haksız fiil, kusursuz sorumluluk) */
KPSS.registerBank('borclar', [
{
  q: "Genel yetki verilmiş olsa dahi ayrıca özel yetki gerektiren işlemler arasında aşağıdakilerden hangisi vardır?",
  o: ["Taşınmazı devretmek veya sınırlamak", "Olağan alım-satım işlemi yapmak", "Kira sözleşmesi imzalamak", "Muhasebe kayıtlarını tutmak", "Ticari defterleri saklamak"],
  a: 0,
  e: "Genel yetki verilmesine rağmen ÖZEL YETKİ gerektiren işlemler: DAVA AÇMA, SULH OLMA, HAKEME BAŞVURMA, İFLAS-İFLAS ERTELEME VE KONKORDATO TALEP ETME, KAMBİYO TAAHHÜDÜNDE BULUNMAK, BAĞIŞLAMA YAPMAK, KEFİL OLMAK, TAŞINMAZI DEVRETMEK VEYA SINIRLAMAK.",
  t: "Temsil Yetkisi", d: 2
},
{
  q: "Temsil yetkisinin MİKTAR yönünden sınırlandırılmasına örnek aşağıdakilerden hangisidir?",
  o: ["500.000 TL'ye kadar kredi kullanma yetkisi", "Kadıköy şubesiyle çalışma yetkisi", "Bir yıl süreyle işlem yapma yetkisi", "Yalnızca satış akdi yapma yetkisi", "Yalnızca X kişiyle sözleşme yetkisi"],
  a: 0,
  e: "YER YÖNÜNDEN sınırlandırma: A, B'yi X Bankasının KADIKÖY ŞUBESİ ile çalışması hususunda yetkilendirmesi. MİKTAR YÖNÜNDEN sınırlandırma: A, B'yi X bankasından 500.000 TL'YE KADAR kredi kullanması hususunda yetkilendirmesi.",
  t: "Temsil Yetkisi", d: 3
},
{
  q: "TBK 42/I'e göre azil (temsil yetkisinin geri alınması) bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Her zaman mümkündür; şekle ve sebebe bağlı değildir", "Her zaman mümkündür; ancak yazılı yapılması şarttır", "Ancak haklı bir sebebin varlığı hâlinde mümkündür", "Ancak mahkeme kararıyla gerçekleştirilebilir", "Mümkündür; kurucu yenilik doğuran haktır"],
  a: 0,
  e: "TBK 42/I: Temsil olunan, hukuki bir işlemden doğan temsil yetkisini HER ZAMAN SINIRLAYABİLİR VEYA GERİ ALABİLİR. AZİL YA DA SINIRLANDIRMA ŞEKLE BAĞLI DEĞİLDİR, BOZUCU YENİLİK DOĞURUR. AZLİN SEBEBE BAĞLI OLMASI DA GEREKMEZ. Aynı zamanda 3. kişilere de aynı yolla bildirilmelidir.",
  t: "Temsilin Sona Ermesi", d: 2
},
{
  q: "Temsil olunan verdiği yetkiyi üçüncü kişilere bildirmiş ancak geri aldığını bildirmemişse ne olur?",
  o: ["İyiniyetli üçüncü kişilere karşı ileri süremez", "İyiniyetli üçüncü kişilere karşı da ileri sürebilir", "Yalnızca yazılı bildirim yapılmışsa ileri süremez", "Yalnızca ticaret siciline tescille ileri sürebilir", "Üçüncü kişilerin geri almayı bilmesi zorunludur"],
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
  o: ["Her zaman edebilir; zarara sokarsa sorumlu olur", "Her zaman edebilir; hiçbir hâlde sorumlu olmaz", "Ancak haklı bir sebebin varlığında edebilir", "Hiçbir hâlde istifa etme imkânı bulunmaz", "Yalnızca yazılı olarak yapılırsa geçerlidir"],
  a: 0,
  e: "Temsilci HER ZAMAN İSTİFA EDEBİLİR. Ancak bu istifanın TEMSİL OLUNANI ZARARA SOKMAMASI gerekir; AKSİ HALDE BUNDAN SORUMLUDUR. Örnek: sözleşmenin imza edilmesi esnasında bir bildirimle görevinden istifa etmek temsil olunanı doğrudan zarara sokar.",
  t: "Temsilin Sona Ermesi", d: 3
},
{
  q: "TBK 43'e göre hukuki işlemden doğan temsil yetkisi, aksi kararlaştırılmadıkça hangi durumlarda sona erer?",
  o: ["Tarafların ölümü, gaipliği, ehliyet kaybı veya iflası", "Yalnızca temsilcinin ölmüş olması hâlinde", "Yalnızca temsil olunanın ölmüş olması hâlinde", "Yalnızca temsil olunanın azil beyanıyla", "Hiçbir hâlde kendiliğinden sona ermez"],
  a: 0,
  e: "TBK 43: Hukuki işlemden doğan temsil yetkisi, AKSİ TARAFLARCA KARARLAŞTIRILMADIKÇA veya İŞİN ÖZELLİĞİNDEN ANLAŞILMADIKÇA, TEMSİL OLUNANIN VEYA TEMSİLCİNİN ÖLÜMÜ, GAİPLİĞİNE KARAR VERİLMESİ, FİİL EHLİYETİNİ KAYBETMESİ veya İFLAS ETMESİ durumlarında sona erer. Bu hüküm TÜZEL KİŞİLİĞİN SONA ERMESİ durumunda da uygulanır.",
  t: "Temsilin Sona Ermesi", d: 3
},
{
  q: "Temsil yetkisi sona erdiğinde temsilcinin yetki belgesi bakımından yükümlülüğü nedir?",
  o: ["Geri vermek veya hâkimin belirleyeceği yere bırakmak", "Belgeyi derhal imha ederek tutanak tutmak", "Belgeyi bir noter nezdinde saklamaya devam etmek", "Belgeyi üçüncü kişilere bildirmek ve ilan etmek", "Herhangi bir yükümlülüğü bulunmamaktadır"],
  a: 0,
  e: "Temsilciye yetki belgesi verilmişse, yetkinin sona ermesi durumunda temsilci bu belgeyi TEMSİL OLUNANA GERİ VERMEKLE veya HAKİMİN BELİRLEYECEĞİ YERE BIRAKMAKLA yükümlüdür. Temsil olunan veya halefleri bunun için gerekeni yapmazlarsa İYİNİYETLİ ÜÇÜNCÜ KİŞİLERİN ZARARINI GİDERMEKLE yükümlüdürler.",
  t: "Temsilin Sona Ermesi", d: 3
},
{
  q: "Temsilci yetkisinin sona erdiğini bilmediği sürece yaptığı işlemlerin durumu nedir?",
  o: ["Temsil olunan bağlıdır; 3. kişi biliyorsa bağlı olmaz", "Temsil olunan her hâlde bu işlemlerle bağlı olur", "İşlemler baştan itibaren kesin olarak geçersizdir", "İşlemler askıda hükümsüzdür; onay gerektirir", "Temsil olunan hiçbir hâlde bağlı olmaz"],
  a: 0,
  e: "Temsilci, yetkisinin SONA ERMİŞ OLDUĞUNU BİLMEDİĞİ SÜRECE, temsil olunan veya halefleri temsilcinin yapmış olduğu hukuki işlemlerin SONUÇLARIYLA BAĞLIDIRLAR. Bu kural, ÜÇÜNCÜ KİŞİLERİN YETKİNİN SONA ERMİŞ OLDUĞUNU BİLDİKLERİ durumlarda UYGULANMAZ. Geri alma beyanı temsilciye ulaştığı anda yetki sona erer.",
  t: "Temsilin Sona Ermesi", d: 3
},
{
  q: "Yetkisiz temsil hangi halleri kapsar?",
  o: ["Yetkinin hiç olmaması, aşılması veya sona ermesi", "Yalnızca hiç yetkisinin bulunmaması hâlini", "Yalnızca yetki sınırının aşılması hâlini", "Yalnızca yetkinin sona ermiş olması hâlini", "Yalnızca kanuni temsil hâllerini kapsar"],
  a: 0,
  e: "YETKİSİZ TEMSİL, temsil yetkisinin MEVCUT OLMAMASI veya mevcut olmasına rağmen YETKİ SINIRININ AŞILMASI halidir: ya HİÇ YETKİSİ YOK, ya YETKİSİNDE SINIRI AŞMIŞTIR, ya da YETKİSİ BİTMİŞ FAKAT KİŞİ DEVAM ETMEKTEDİR.",
  t: "Yetkisiz Temsil", d: 2
},
{
  q: "BK md. 46'ya göre yetkisiz temsilcinin yaptığı işlem ne zaman temsil olunanı bağlar?",
  o: ["Yalnızca temsil olunan işlemi onadığı takdirde", "Her hâlde ve onaya gerek olmaksızın bağlar", "Yalnızca üçüncü kişi iyiniyetli olduğu takdirde", "Yalnızca mahkeme kararı verildiği takdirde", "Hiçbir hâlde temsil olunanı bağlamaz"],
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
  o: ["Zararı giderir; karşı taraf biliyorsa istenemez", "Her hâlde zararı gidermekle yükümlü olur", "Yalnızca kasten davranmışsa sorumlu olur", "Yalnızca temsil olunana karşı sorumlu olur", "Hiçbir hâlde sorumlu tutulamaz"],
  a: 0,
  e: "BK md. 47: Temsil olunanın açık veya örtülü olarak işlemi ONAMAMASI halinde, işlemin geçersiz olmasından doğan ZARARIN GİDERİLMESİ YETKİSİZ TEMSİLCİDEN İSTENEBİLİR. Ancak yetkisiz temsilci, işlemin yapıldığı sırada KARŞI TARAFIN KENDİSİNİN YETKİSİZ OLDUĞUNU BİLDİĞİNİ VEYA BİLMESİ GEREKTİĞİNİ İSPAT EDERSE, kendisinden zararın giderilmesi istenemez. HAKKANİYET gerektiriyorsa KUSURLU yetkisiz temsilciden DİĞER ZARARLARIN giderilmesi de istenebilir.",
  t: "Yetkisiz Temsil", d: 3
},
{
  q: "Haksız fiil ile borca aykırılık arasındaki temel fark nedir?",
  o: ["Borca aykırılıkta önceden kurulmuş ilişki vardır", "Haksız fiilde önceden kurulmuş ilişki vardır", "Her ikisinde de önceden kurulmuş ilişki vardır", "Her ikisinde de önceden kurulmuş ilişki yoktur", "Haksız fiil her hâlde sözleşmeye dayanır"],
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
  o: ["Devlet müdahalesi gecikecekse ve fiil orantılıysa", "Kişinin kendi hakkını koruduğu her durumda", "Yalnızca devlet görevlileri bakımından", "Yalnızca malvarlığına yönelik zararlarda", "Hiçbir koşulda hukuka aykırılığı kaldırmaz"],
  a: 0,
  e: "KUVVET KULLANMA: Devletin hakkın korunması için gerçekleştireceği müdahalenin GECİKECEK OLMASI ve bu sebeple BİR DAHA TELAFİSİ OLMAYAN BİR HAK YOKSUNLUĞU OLUŞACAK OLMASI hallerinde kişiler kendi haklarını ORANTILI BİR FİİL ile korumak hakkına sahiptirler.",
  t: "Haksız Fiil", d: 3
},
{
  q: "Haklı savunma (meşru müdafaa) için aranan koşullar arasında aşağıdakilerden hangisi vardır?",
  o: ["Saldırının hâlihazırda var veya başlamak üzere olması", "Saldırının geçmişte gerçekleşmiş olması yeterlidir", "Karşı fiilin ölçülü olması gerekmemesi", "Yalnızca malvarlığına yönelik saldırıda olması", "Devletin önceden izninin alınmış olması"],
  a: 0,
  e: "HAKLI SAVUNMA: herhangi bir hakka yönelmiş bir TECAVÜZÜN/SALDIRININ varlığı halinde ÖLÇÜLÜ BİR FİİL ile O AN BERTARAF EDİLMESİ hakkıdır. SALDIRIYI DURDURMAK ESASTIR ve saldırı HALİHAZIRDA VAR OLMALI yahut KESİNKES BAŞLAMAK ÜZERE OLMALIDIR.",
  t: "Haksız Fiil", d: 3
},
{
  q: "Kişinin kendisinin veya başkasının şahsına ya da malvarlığına yönelik açık bir tehlikeden kurtulmak için üçüncü kişilerin malına zarar vermesine ne ad verilir?",
  o: ["Zorunluluk hâli", "Haklı savunma", "Kuvvet kullanma", "Kanuni yetkinin kullanılması", "Zarar görenin rızası"],
  a: 0,
  e: "ZORUNLULUK HALİ, kişinin kendisinin yahut bir başkasının ŞAHSINA ya da MALVARLIĞINA yönelik bir AÇIK TEHLİKENİN varlığı halinde bu tehlikelerden kurtulmak ya da bunu bertaraf etmek maksadıyla ÜÇÜNCÜ KİŞİLERİN MALINA ZARAR VERMELERİ halidir.",
  t: "Haksız Fiil", d: 3
},
{
  q: "Doğrudan zarar ile dolaylı zarar arasındaki fark nedir?",
  o: ["Dolaylı zarar, doğrudan zarara eklenen sebeple doğar", "Doğrudan zarar maddi, dolaylı zarar manevidir", "Doğrudan zarar yalnızca malvarlığına yöneliktir", "Dolaylı zarar hiçbir hâlde tazmin edilmez", "İkisi arasında hukuken bir fark bulunmaz"],
  a: 0,
  e: "DOĞRUDAN ZARAR, haksız fiilin DOĞRUDAN DOĞRUYA SEBEBİYET VERDİĞİ zararlardır (aracı yakılan kişinin aracın gördüğü tüm zararı). DOLAYLI ZARAR, doğrudan zarara BAĞLI OLARAK EKLENEN BİR SEBEPLE uğranılan zarardır (aracı ticari araçsa mal taşıyamama sonucu uğranılan zararlar).",
  t: "Zarar", d: 3
},
{
  q: "Bir haksız fiile maruz kalan kimseden başka bir kişinin bu fiil sebebiyle uğradığı zarara ne ad verilir?",
  o: ["Yansıma zarar", "Doğrudan zarar", "Muhtemel zarar", "Manevi zarar", "Ortak zarar"],
  a: 0,
  e: "YANSIMA ZARAR, BİR HAKSIZ FİİLE MARUZ KALAN KİMSEDEN BAŞKA BİR KİŞİNİN bu fiil sebebiyle uğradığı zarardır. Örnek: bir kişi öldürüldüğünde eşi ve çocuklarının onun desteğinden yoksun kalması.",
  t: "Zarar", d: 3
},
{
  q: "Mevcut zarar ile muhtemel zarar arasındaki fark nedir?",
  o: ["Muhtemel zararın kapsamı gelecekte belirlenir", "Muhtemel zarar hiçbir hâlde tazmin edilmez", "Mevcut zarar yalnızca manevi zararı kapsar", "Muhtemel zarar yalnızca maddi zararı kapsar", "İkisi arasında hukuken bir fark bulunmaz"],
  a: 0,
  e: "MEVCUT ZARAR, haksız fiilin gerçekleşmesi ile ORTAYA ÇIKMIŞ OLAN TÜM ZARARLARDIR. MUHTEMEL ZARAR, haksız fiil sonucunda HEMEN ORTAYA ÇIKMAYAN, KAPSAMI HENÜZ BELİRLİ OLMAMAKLA BİRLİKTE GELECEKTE BELİRLİ OLACAK olan zarardır.",
  t: "Zarar", d: 3
},
{
  q: "BK md. 50'ye göre zarar miktarı tam olarak ispat edilemezse hâkim ne yapar?",
  o: ["Olayların olağan akışına göre hakkaniyetle belirler", "Davayı ispatsızlık nedeniyle tümüyle reddeder", "İspat yükünü zarar verene yükleyerek karar verir", "Bilirkişi raporuyla bağlı kalarak karar verir", "Hiçbir takdir yetkisi kullanmadan reddeder"],
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
  o: ["Sorumlu değildirler; hakkaniyetle yükletilebilir", "Her hâlde haksız fiilden sorumlu tutulurlar", "Hiçbir hâlde tazminatla yükletilemezler", "Yalnızca kanuni temsilcileri sorumlu olur", "Yalnızca kasten işlenen fiillerden sorumludurlar"],
  a: 0,
  e: "Medeni Kanuna göre TAM EHLİYETSİZLER ayırt etme gücüne sahip olmadıklarından fiil ehliyetine bağlı olarak bir HAKSIZ FİİL SORUMLULUĞU ALTINDA DEĞİLDİRLER. Ancak hakim bu kişileri HAKKANİYET SORUMLULUĞU kapsamında zarardan kaynaklı TAZMİN İLE YÜKLEYEBİLİR.",
  t: "Kusur", d: 3
},
{
  q: "İlliyet (nedensellik) bağı hangi hallerde kesilir?",
  o: ["Mücbir neden, zarar görenin veya 3. kişinin ağır kusuru", "Yalnızca mücbir nedenin varlığı hâlinde", "Yalnızca zarar görenin ağır kusuru hâlinde", "Yalnızca failin kusursuz olduğu hâllerde", "Hiçbir hâlde illiyet bağı kesilmez"],
  a: 0,
  e: "İLLİYET (NEDENSELLİK), meydana gelen ZARAR NETİCESİ ile zarara sebep olan HUKUKA AYKIRI FİİL arasındaki MAKUL BAĞLANTIDIR ('-den dolayı' şeklinde ifade edilebilir). İlliyet bağı MÜCBİR NEDENLER, ZARAR GÖRENİN AĞIR KUSURU ve ÜÇÜNCÜ ŞAHSIN AĞIR KUSURU ile KESİLİR.",
  t: "İlliyet", d: 2
},
{
  q: "Tek kişinin hareketiyle meydana gelmesi mümkün olmayan bir sonucun birden fazla kişinin hareketiyle birlikte oluşmasına ne ad verilir; sorumluluk nasıldır?",
  o: ["Ortak illiyet; müteselsil sorumluluk", "Yarışan illiyet; müteselsil sorumluluk", "Seçimlik illiyet; paylı sorumluluk", "Ortak illiyet; paylı sorumluluk", "Kesilen illiyet; sorumluluk doğmaz"],
  a: 0,
  e: "ORTAK İLLİYET, TEK BİR KİŞİNİN HAREKETİ İLE MEYDANA GELMESİ MÜMKÜN OLMAYAN bir sonucun BİRDEN FAZLA KİŞİNİN HAREKETİYLE BİRLİKTE OLUŞMASIDIR (örn. içi külçe altın dolu kasanın dört kişiyle kaldırılıp çalınması). ORTAKLAR ZARARIN TAMAMINDAN MÜTESELSİLEN SORUMLUDUR.",
  t: "İlliyet", d: 3
},
{
  q: "Zarara sebep olan fiillerden her birinin tek başına da aynı sonucu doğurmaya yetmesi haline ne ad verilir?",
  o: ["Yarışan illiyet", "Ortak illiyet", "Seçimlik illiyet", "Kesilen illiyet", "Farazi illiyet"],
  a: 0,
  e: "YARIŞAN İLLİYET: bir zarar sonucunun ortaya çıkmasına sebep olan fiillerden ASLINDA BİRİ DE AYNI SONUCU ORTAYA ÇIKARMAYA YETİYOR ise söz konusudur. Örnek: karşılıklı iki fabrikanın dereye döktükleri zehirli atık suların canlılığı yok etmesi. HER HAREKET TEK BAŞINA NETİCE ÜZERİNDE İLLİDİR.",
  t: "İlliyet", d: 3
},
{
  q: "Meydana gelen zararın olağan şüphelisi birden fazla ise ve hangisinin sebep olduğu belirlenemiyorsa hangi illiyet türü söz konusudur?",
  o: ["Seçimlik illiyet", "Ortak illiyet", "Yarışan illiyet", "Kesilen illiyet", "Farazi illiyet"],
  a: 0,
  e: "SEÇİMLİK İLLİYET: meydana gelen zararın OLAĞAN ŞÜPHELİSİ BİRDEN FAZLA ise ve HANGİSİNİN BU ZARARA SEBEP OLDUĞU BELİRLENEMEYECEK durumda ise söz konusudur. Örnek: ortak olarak bir hedefe ateş edenlerden sadece birinin kurşununun denk gelmesi ancak hangisinden çıktığının tespit edilememesi. Bazı durumlarda sorumluluk var kabul edilirken bazılarında oluşmaz.",
  t: "İlliyet", d: 3
},
{
  q: "Kusursuz sorumluluk hangi unsurları içerir ve kaç temel esas üzerine kuruludur?",
  o: ["Kusur hariç tüm unsurlar; hakkaniyet, özen, tehlike", "Kusur dahil tüm unsurlar; hakkaniyet ve tehlike", "Yalnızca zarar unsuru; hakkaniyet, özen, tehlike", "Hiçbir haksız fiil unsuru; tek esas tehlikedir", "Kusur hariç tüm unsurlar; tek esas tehlikedir"],
  a: 0,
  e: "KUSURSUZ SORUMLULUK, kusur sorumluluğunda yer alan KUSUR UNSURU HARİÇ her türlü haksız fiil unsurunu içeren bir sorumluluk türüdür. 3 temel esas üzerinden kabul görmüştür: HAKKANİYET SORUMLULUĞU, ÖZEN (BAKIM GÖZETİM) YÜKÜMLÜLÜĞÜNÜN GETİRDİĞİ SORUMLULUK ve TEHLİKE SORUMLULUĞU.",
  t: "Kusursuz Sorumluluk", d: 2
},
{
  q: "TBK 66/I'e göre adam çalıştıran hangi zararı gidermekle yükümlüdür?",
  o: ["Çalışanın işin yapılması sırasında verdiği zararı", "Çalışanın her zaman ve her yerde verdiği zararı", "Yalnızca kendi kusurlu davranışının verdiği zararı", "Yalnızca sözleşmeli çalışanların verdiği zararı", "Hiçbir zararı gidermekle yükümlü değildir"],
  a: 0,
  e: "TBK 66/I: ADAM ÇALIŞTIRAN, ÇALIŞANIN, KENDİSİNE VERİLEN İŞİN YAPILMASI SIRASINDA BAŞKALARINA VERDİĞİ ZARARI GİDERMEKLE YÜKÜMLÜDÜR.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 2
},
{
  q: "Adam çalıştıran hangi durumda sorumluluktan kurtulur (kurtuluş kanıtı)?",
  o: ["Seçim, talimat ve gözetimde özen gösterdiğini ispatla", "Çalışanının kusursuz olduğunu ispat etmekle", "Doğan zararın az miktarda olduğunu ispatla", "Çalışanı için sigorta yaptırmış olmakla", "Hiçbir durumda sorumluluktan kurtulamaz"],
  a: 0,
  e: "Adam çalıştıran, ÇALIŞANINI SEÇERKEN, İŞİYLE İLGİLİ TALİMAT VERİRKEN, GÖZETİM VE DENETİMDE BULUNURKEN, zararın doğmasını engellemek için GEREKLİ ÖZENİ GÖSTERDİĞİNİ İSPAT EDERSE SORUMLU OLMAZ. Buna KURTULUŞ KANITI adı verilir.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 2
},
{
  q: "Adam çalıştıranın sorumluluğunda çalışan-çalıştıran ilişkisi bakımından ne aranır?",
  o: ["Sözleşme şartı yoktur; bağımlılık ilişkisi yeterlidir", "Mutlaka yazılı bir iş sözleşmesi bulunmalıdır", "Çalıştıranın yalnızca tüzel kişi olması gerekir", "Avukat-müvekkil ilişkisi de kapsam içindedir", "Yalnızca sigortalı çalışanlar kapsam içindedir"],
  a: 0,
  e: "Adam çalıştıran ile zarara sebep olan kişi arasında ÇALIŞAN-ÇALIŞTIRAN İLİŞKİSİ olmak zorundadır. SÖZLEŞMEYE DAYALI ÇALIŞMA ŞARTI YOKTUR. TESİSATÇI VE ÇIRAĞI OLUR ANCAK AVUKAT VE MÜVEKKİL OLMAZ. Adam çalıştıran GERÇEK VEYA TÜZEL KİŞİ de olabilir.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 3
},
{
  q: "Adam çalıştıranın sorumluluğunun şartları arasında aşağıdakilerden hangisi vardır?",
  o: ["Zararın hizmet esnasında ve hizmetle ilgili doğması", "Zararın her zaman ve her yerde doğmuş olması", "Çalıştırılanın kusursuz bulunduğunun ispatı", "Zararın çalıştıranın kendisine verilmiş olması", "Taraflar arasında sözleşme ilişkisi bulunması"],
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
  o: ["İşletmeyle ilgili bütün dikkat ve özeni göstermesi", "Yalnızca çalışanı seçerken özen göstermesi", "Yalnızca çalışana talimat verirken özen göstermesi", "Yalnızca çalışanı denetlerken özen göstermesi", "Yalnızca sigorta yaptırmış olması yeterlidir"],
  a: 0,
  e: "Çalıştıran, işi buyururken her türlü özen ve dikkati yerine getirdiğini ispat ederek ya da İLLİYETİN KESİLDİĞİNİ ispat ederek sorumluluktan kurtulabilir. İŞLETMEDE ADAM ÇALIŞTIRAN ise İŞLETME İLE İLGİLİ BÜTÜN DİKKAT VE ÖZENİ İSPAT ETMESİ gerekmektedir.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 3
},
{
  q: "TBK 66 (adam çalıştıran) ile TBK 116 (yardımcı kişi fiilleri) arasındaki fark nedir?",
  o: ["66'da sözleşme aranmaz ve kurtuluş kanıtı mümkündür", "66'da sözleşme aranır ve kurtuluş kanıtı mümkün değil", "Her ikisinde de sözleşme ilişkisi aranmaktadır", "Her ikisinde de kurtuluş kanıtı getirilebilmektedir", "Her ikisinde de kurtuluş kanıtı getirilemez"],
  a: 0,
  e: "TBK 66'DA istihdam eden ile zarar gören arasında SÖZLEŞME İLİŞKİSİ ARANMAZ (yoldan geçen biri bile zarar görmüş olabilir), çalışan-çalıştıran arasında EMİR TALİMAT ZİNCİRİ olmalıdır ve KURTULUŞ KANITI GETİRMEK MÜMKÜNDÜR. TBK 116'DA ise sorumlu borçlu ile zarar gören arasında BİR SÖZLEŞME İLİŞKİSİ KURULU OLMALIDIR, EMİR TALİMAT ARANMAZ ve KURTULUŞ KANITI GETİRİLEMEZ.",
  t: "Adam Çalıştıranın Sorumluluğu", d: 3
},
]);

/* İcra ve İflas Hukuku — kaynak: "19faa5cd6fc61283cee1.pdf" */
KPSS.registerBank('icra', [

/* ---------- TEMEL İLKELER ---------- */
{
  q: "Alacaklıların alacaklarını bizzat almalarının yasak olmasını ifade eden ilke hangisidir?",
  o: ["İhkak-ı hak yasağı", "Denge unsuru", "Malvarlığı ile sorumluluk", "Taraf takip işlemi ilkesi", "Garame ilkesi"],
  a: 0,
  e: "İHKAK-I HAK YASAĞI, alacaklıların alacaklarını bizzat almalarının yasak olmasıdır. İcra ve iflas hukukumuz ihkak-ı hak yasağının bir sonucu olarak karşımıza çıkar.",
  t: "Temel İlkeler", d: 2
},
{
  q: "İcra ve iflas hukukunun temel ilkeleri arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Borçlunun şahsı ve kişilik haklarına yönelik cebri icra uygulanabilir", "İhkak-ı hak yasağı", "Denge unsuru", "Malvarlığı ile sorumluluk", "Cebri icra prosedürü kendiliğinden başlamaz"],
  a: 0,
  e: "MALVARLIĞI İLE SORUMLULUK ilkesi gereği bir borçlu sırf borcunu ödeyemiyor diye ŞAHSINA VEYA KİŞİLİK HAKLARINA yönelik cebri icra gücü UYGULANMAZ.",
  t: "Temel İlkeler", d: 2
},
{
  q: "Cebri icra prosedürü nasıl başlar ve nasıl sona erer?",
  o: ["Alacaklının takip talebi ile başlar; paranın ödenmesi veya paraların paylaştırılması ile sona erer", "İcra dairesinin kararı ile başlar; haciz ile sona erer", "Kendiliğinden başlar; satış ile sona erer", "Mahkeme kararı ile başlar; ödeme emri ile sona erer", "Borçlunun talebi ile başlar; mal beyanı ile sona erer"],
  a: 0,
  e: "Cebri icra prosedürü kendiliğinden başlayan bir prosedür DEĞİLDİR; ancak ALACAKLININ TAKİP TALEBİ ile başlar. PARANIN ÖDENMESİ veya PARALARIN PAYLAŞTIRILMASI ile sona erer.",
  t: "Temel İlkeler", d: 2
},

/* ---------- CEBRİ İCRA TÜRLERİ ---------- */
{
  q: "İcra ve İflas Kanunu hangi tarihli ve kaç sayılı kanundur?",
  o: ["1932 tarihli 2004 sayılı", "1930 tarihli 1715 sayılı", "1932 tarihli 1086 sayılı", "1929 tarihli 2004 sayılı", "1926 tarihli 2004 sayılı"],
  a: 0,
  e: "İcra ve İflas Kanunu 1932 TARİHLİ ve 2004 SAYILI kanundur. Bu kanun sistemi içinde iki tür cebri icra takibi düzenlenmiştir: cüz'i icra (icra takibi) ve külli icra (iflas takibi).",
  t: "Cebri İcra Türleri", d: 2
},
{
  q: "Külli icra (iflas takibi) ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Sadece tacirlere ve tacir gibi sorumlu kişilere karşı başlatılabilir ve takipten borçlunun tüm alacaklıları faydalanır", "Her borçluya karşı başlatılabilir", "Sadece takibi başlatan alacaklılar faydalanır", "Takibin konusu çocuk teslimi de olabilir", "Borçlu sadece borca yetecek malvarlığı ile sorumludur"],
  a: 0,
  e: "KÜLLİ İCRA'da borçlunun karşısında TÜM alacaklıları bulunur ve borçlu TÜM MALVARLIĞI ile sorumludur. Sadece TACİRLERE ve tacir gibi sorumlu kişilere karşı başlatılabilir; takipten borçlunun TÜM alacaklıları faydalanır ve konusu YALNIZCA para veya teminat alacaklarıdır.",
  t: "Cebri İcra Türleri", d: 2
},
{
  q: "Cüz'i icra (icra takibi) ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Takipten borçlunun tüm alacaklıları faydalanır", "Takibi her alacaklı, her borçluya karşı başlatabilir", "Borçlu malvarlığından borca yetecek miktar ile sorumludur", "Takibin konusu taşınır, taşınmaz veya çocuk teslimi de olabilir", "Bireysel bir takiptir"],
  a: 0,
  e: "CÜZ'İ İCRA takibinden YALNIZCA takip talebinde bulunan alacaklılar faydalanır (bireysel takip). Tüm alacaklıların faydalandığı takip KÜLLİ İCRA'dır.",
  t: "Cebri İcra Türleri", d: 2
},

/* ---------- İCRA ORGANLARI ---------- */
{
  q: "Aşağıdakilerden hangisi ASIL icra organları arasında YER ALMAZ?",
  o: ["Cumhuriyet savcıları ve adalet müfettişleri", "İcra dairesi (müdürü)", "İcra mahkemesi", "Bölge adliye mahkemesi", "Yargıtay'ın icra işleri ile ilgili hukuk dairesi"],
  a: 0,
  e: "ASIL icra organları: icra dairesi, icra mahkemesi, bölge adliye mahkemesi ve Yargıtay'ın ilgili hukuk dairesi. YARDIMCI icra organları: genel mahkemeler, Cumhuriyet savcıları ve adalet müfettişleri, kolluk kuvvetleri.",
  t: "İcra Organları", d: 2
},
{
  q: "İcra dairesinde müdür, müdür yardımcıları ve icra katiplerinin yokluğu durumunda görev ve yetkiler kim tarafından yerine getirilir?",
  o: ["Adli Yargı İlk Derece Mahkemesi Adalet Komisyonu tarafından atanacak yazı işleri müdürü veya zabıt katipleri", "İcra mahkemesi hakimi", "Cumhuriyet savcısı", "Adalet Bakanlığı müfettişi", "Köy muhtarı"],
  a: 0,
  e: "Bu durumda icra dairesinin görev ve yetkileri, ADLİ YARGI İLK DERECE MAHKEMESİ ADALET KOMİSYONU tarafından atanacak YAZI İŞLERİ MÜDÜRÜ veya ZABIT KATİPLERİ tarafından yerine getirilir.",
  t: "İcra Organları", d: 3
},
{
  q: "İcra dairesi cebri icra gücünü nasıl kullanır?",
  o: ["Kolluk kuvvetlerine ve köyde haciz yapılması durumunda köy muhtarlarına emir ve talimat vermek suretiyle", "Doğrudan kendi personeli ile", "İcra mahkemesinin izniyle", "Cumhuriyet savcısı aracılığıyla", "Adalet Bakanlığı onayıyla"],
  a: 0,
  e: "Kanun koyucu devletin cebri icra gücünü kullanma yetkisini İCRA DAİRESİNE vermiştir. İcra dairesi bu gücü KOLLUK KUVVETLERİNE ve köyde haciz yapılması durumunda KÖY MUHTARLARINA emir ve talimat vermek suretiyle kullanır.",
  t: "İcra Organları", d: 2
},
{
  q: "2021 tarihli 7343 sayılı Kanun değişikliğine göre iş yoğunluğu fazla olan icra dairelerinde kim görevlendirilebilir?",
  o: ["Adalet Bakanlığı tarafından icra müdür ve müdür yardımcıları arasından bir icra başmüdürü", "Cumhuriyet savcısı", "Bir icra mahkemesi hakimi", "Adalet müfettişi", "Yazı işleri müdürü"],
  a: 0,
  e: "7343 sayılı Kanun değişikliğine göre iş yoğunluğunun veya personel sayısının fazla olduğu icra dairelerinde ADALET BAKANLIĞI tarafından icra müdür ve müdür yardımcıları arasından, icra müdürünün yetkilerini haiz bir İCRA BAŞMÜDÜRÜ görevlendirilebilir.",
  t: "İcra Organları", d: 3
},
{
  q: "İcra Daireleri Başkanlığı'nda başkan ve başkan yardımcısı hangi niteliklere sahip kişiler arasından atanır?",
  o: ["Başkan birinci sınıf olmuş, başkan yardımcısı birinci sınıfa ayrılmış adli yargı hakim ve Cumhuriyet savcıları arasından", "İcra müdürleri arasından", "Adalet müfettişleri arasından", "Avukatlar arasından", "Noterler arasından"],
  a: 0,
  e: "BAŞKAN birinci sınıf olmuş, BAŞKAN YARDIMCISI ise birinci sınıfa ayrılmış adli yargı hakim ve Cumhuriyet savcıları arasından muvafakatleri alınarak Bakanlıkça atanır.",
  t: "İcra Organları", d: 3
},
{
  q: "İcra memurlarının kusurlu olarak üçüncü kişilere zarar vermesi halinde tazminat davası kime karşı ve nerede açılır?",
  o: ["Adalet Bakanlığı'na karşı, genel mahkemelerde", "Doğrudan icra memuruna karşı, icra mahkemesinde", "İcra dairesine karşı, icra mahkemesinde", "Adalet Bakanlığı'na karşı, idari yargıda", "Doğrudan icra memuruna karşı, genel mahkemelerde"],
  a: 0,
  e: "Üçüncü kişiler tazminat davasını DOĞRUDAN İCRA MEMURLARINA KARŞI AÇAMAZ. Dava ADALET BAKANLIĞI'NA karşı açılır ve GENEL MAHKEMELERDE görülür. Bakanlık ödeme yaparsa memuruna rücu edebilir.",
  t: "İcra Organları", d: 2
},
{
  q: "İcra memurunun kusurundan doğan tazminat davasının zamanaşımı süreleri nedir?",
  o: ["Zararın öğrenildiği tarihten itibaren 1 yıl, her halde işlemin yapıldığı tarihten itibaren 10 yıl", "Zararın öğrenildiği tarihten itibaren 2 yıl, her halde 10 yıl", "Zararın öğrenildiği tarihten itibaren 1 yıl, her halde 5 yıl", "Zararın öğrenildiği tarihten itibaren 6 ay, her halde 10 yıl", "Zararın öğrenildiği tarihten itibaren 2 yıl, her halde 20 yıl"],
  a: 0,
  e: "Tazminat davası, zarar gören kişinin zararı ÖĞRENDİĞİ TARİHTEN İTİBAREN 1 YIL, her halde işlemin yapıldığı tarihten itibaren 10 YILLIK zamanaşımı süresinde açılmalıdır.",
  t: "İcra Organları", d: 3
},
{
  q: "İcra müdürünün iş görme yasağına ve sözleşme (akit) yapma yasağına aykırı işlemlerinin yaptırımı nedir?",
  o: ["İş görme yasağına aykırı işlemler iptal edilebilir (7 gün şikayet); akit yapma yasağına aykırı işlemler butlandır (süresiz şikayet)", "Her ikisi de butlandır ve süresiz şikayete tabidir", "Her ikisi de iptal edilebilir ve 7 gün şikayete tabidir", "İş görme yasağına aykırılık butlan, akit yasağına aykırılık iptal edilebilirliktir", "Her ikisi de geçerlidir, sadece disiplin cezası verilir"],
  a: 0,
  e: "İŞ GÖRME YASAĞINA aykırı işlemler İPTAL EDİLEBİLİR ve 7 GÜN içinde şikayete tabidir. SÖZLEŞME (AKİT) YAPMA YASAĞINA aykırı işlemler ise BUTLANDIR ve SÜRESİZ ŞİKAYETE tabidir.",
  t: "İcra Organları", d: 3
},
{
  q: "İcra müdürünün haczettiği para ve değerli eşyaları tevdi etme yükümlülüğünün süresi nedir?",
  o: ["Haczi yaptığı günün ertesi günü mesai saati sonuna kadar", "Haczi yaptığı gün mesai saati sonuna kadar", "Haczin yapılmasından itibaren 3 gün içinde", "Haczin yapılmasından itibaren 7 gün içinde", "Haczin yapılmasından itibaren 1 hafta içinde"],
  a: 0,
  e: "İcra müdürü para ve değerli eşyaları HACZİ YAPTIĞI GÜNÜN ERTESİ GÜNÜ MESAİ SAATİ SONUNA KADAR tevdi etmek zorundadır.",
  t: "İcra Organları", d: 3
},

/* ---------- İCRA MAHKEMESİ ---------- */
{
  q: "İcra mahkemesi ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["İcra mahkemeleri için adli tatil hükümleri uygulanır", "Özel nitelikli mahkemelerden olup tek hakimle çalışır", "Her asliye mahkemesinin yargı çevresinde bir tane icra mahkemesi bulunur", "İcra mahkemesinin işleri ivedi (acele) işlerden sayılır", "Basit yargılama usulünü uygular"],
  a: 0,
  e: "İcra mahkemeleri için ADLİ TATİL HÜKÜMLERİ UYGULANMAZ; bu mahkemeler adli tatil dönemlerinde de çalışmaya devam ederler. İşleri ivedi (acele) işlerden sayılır.",
  t: "İcra Mahkemesi", d: 2
},
{
  q: "İcra mahkemesi bulunmayan yerlerde icra mahkemesinin görevlerini hangi mahkeme yapar?",
  o: ["Asliye hukuk mahkemesi", "Sulh hukuk mahkemesi", "Asliye ticaret mahkemesi", "Ağır ceza mahkemesi", "Bölge adliye mahkemesi"],
  a: 0,
  e: "İcra mahkemesi bulunmayan yerlerde o yerdeki ASLİYE HUKUK MAHKEMESİ, icra mahkemesinin görevlerini yapar.",
  t: "İcra Mahkemesi", d: 2
},
{
  q: "İcra mahkemesinin hangi iki kararı maddi anlamda kesin hüküm teşkil eder?",
  o: ["İstihkak davası ve ihalenin feshi talebinde verilen kararlar", "Şikayet ve itirazın kaldırılması kararları", "Gecikmiş itiraz ve icranın geri bırakılması kararları", "İtirazın iptali ve borçtan kurtulma kararları", "Sıra cetveline şikayet ve kıymet takdiri kararları"],
  a: 0,
  e: "İcra mahkemeleri İSTİHKAK DAVASINDA ve İHALENİN FESHİ TALEBİNDE her türlü delili serbestçe inceleyebildiği için bu iki karar MADDİ ANLAMDA KESİN HÜKÜM teşkil eder. Bu kararlar genel mahkemelerde tekrar dava konusu yapılamaz ve bunlarda yargılanmanın yenilenmesi talep edilebilir.",
  t: "İcra Mahkemesi", d: 3
},
{
  q: "Aşağıdakilerden hangisi GENEL MAHKEMELERİN görevine giren işlerden biri DEĞİLDİR?",
  o: ["İhalenin feshini şikayet yolu ile incelemek", "İtirazın iptali davası", "Menfi tespit davası", "Tasarrufun iptali davası", "İhtiyati haciz kararı vermek"],
  a: 0,
  e: "İHALENİN FESHİ şikayet yolu ile İCRA MAHKEMESİNDEN talep edilir. Genel mahkemelerin görevine giren işler: itirazın iptali, borçtan kurtulma, menfi tespit, istirdat, tasarrufun iptali davaları, ihtiyati haciz kararı, sıra cetveline itiraz davası, iflas davası ve depo kararı.",
  t: "İcra Mahkemesi", d: 2
},
{
  q: "İcra mahkemesinin kararlarına karşı istinaf başvuru süresi ve Bölge Adliye Mahkemesinin karar süresi nedir?",
  o: ["Tebliğden itibaren 2 hafta içinde istinaf; BAM işin gelmesinden itibaren 15 gün içinde karar", "Tebliğden itibaren 7 gün içinde istinaf; BAM 30 gün içinde karar", "Tebliğden itibaren 1 hafta içinde istinaf; BAM 15 gün içinde karar", "Tebliğden itibaren 2 hafta içinde istinaf; BAM 30 gün içinde karar", "Tebliğden itibaren 1 ay içinde istinaf; BAM 15 gün içinde karar"],
  a: 0,
  e: "Bedel şartının varlığı halinde kararın tebliğinden itibaren 2 HAFTA içinde istinaf yoluna başvurulur. BAM işin kendisine gelmesinden itibaren 15 GÜN içinde kararını açıklar.",
  t: "İcra Mahkemesi", d: 2
},
{
  q: "İstinaf veya temyiz yoluna başvurulmasının cebri icra prosedürüne etkisi nedir?",
  o: ["Satıştan başka icra takip işlemlerini durdurmaz", "Tüm icra takip işlemlerini durdurur", "Hiçbir işlemi durdurmaz", "Sadece haciz işlemlerini durdurur", "Paraların paylaştırılmasını durdurur"],
  a: 0,
  e: "İstinaf ve temyiz yoluna başvurulması, cebri icra prosedüründe SATIŞTAN BAŞKA icra takip işlemlerini DURDURMAZ.",
  t: "İcra Mahkemesi", d: 2
},
{
  q: "İcra mahkemesinin istisnai olarak istinaf yoluna götürülemeyecek kararları arasında aşağıdakilerden hangisi vardır?",
  o: ["Kıymet takdirine ilişkin şikayet kararı", "İtirazın kesin kaldırılması kararı", "İstihkak davası kararı", "İhalenin feshi kararı", "Gecikmiş itiraz kararı"],
  a: 0,
  e: "İstinaf yoluna götürülemeyecek kararlar arasında KIYMET TAKDİRİNE İLİŞKİN ŞİKAYET, yediemin ücreti ve değiştirilmesi, vekalet ücreti, hacizli taşınırların muhafaza şekli, satışın düşürülmesi, satış ilanının iptali, satışın durdurulması, teminat yatırılması, İCRANIN GERİ BIRAKILMASI kararı ve iflas idaresine ilişkin kararlar yer alır.",
  t: "İcra Mahkemesi", d: 3
},
{
  q: "İcra mahkemesinin cezaya ilişkin ara kararlarına karşı hangi yola başvurulur?",
  o: ["Kararın tefhim veya tebliğinden itibaren 7 gün içinde kararı veren icra mahkemesine itiraz", "İstinaf yoluna başvurulur", "Temyiz yoluna başvurulur", "2 hafta içinde BAM'a itiraz", "Hiçbir yola başvurulamaz"],
  a: 0,
  e: "İcra mahkemesinin cezaya ilişkin ara kararlarında istinaf ve temyiz yoluna BAŞVURULAMAZ. Kararın tefhim veya tebliğinden itibaren 7 GÜN içinde kararı veren icra mahkemesine İTİRAZ edilebilir; mahkeme dosyayı numara itibariyle kendisinden sonra gelen icra mahkemesine gönderir. İtiraz incelemesi üzerine verilen karar KESİNDİR.",
  t: "İcra Mahkemesi", d: 3
},

/* ---------- ŞİKAYET ---------- */
{
  q: "Şikayet ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Şikayet bir dava değildir; icra ve iflas organlarının hukuka aykırı işlemlerinin iptalini veya düzeltilmesini sağlayan hukuki çaredir", "Şikayet bir eda davasıdır", "Şikayet sadece borçlu tarafından yapılabilir", "Şikayet icra takip işlemlerini kendiliğinden durdurur", "Şikayet süresi her halde süresizdir"],
  a: 0,
  e: "ŞİKAYET BİR DAVA DEĞİLDİR. İcra ve iflas organlarının, icra ve iflas hukukuna aykırı olarak yaptıkları işlemlerin iptalini ya da düzeltilmesini sağlayan hukuki çaredir.",
  t: "Şikayet", d: 2
},
{
  q: "Şikayet sebepleri arasında aşağıdakilerden hangisi SÜRESİZ şikayete tabidir?",
  o: ["Kamu düzenine aykırılık", "Yapılan işlemin kanuna aykırı olması", "Yapılan işlemin hadiseye uygun olmaması", "Bir hakkın yerine getirilmemesi", "Bir hakkın sebepsiz sürüncemede bırakılması"],
  a: 0,
  e: "İlk dört şikayet sebebi İİK'da düzenlenmiştir ve kural olarak 7 gündür. KAMU DÜZENİNE AYKIRILIK ise İİK'da düzenlenmemiş olup Yargıtay'ın teamülü kararına göre bu durumlarda şikayet SÜRESİZ olarak yapılabilir.",
  t: "Şikayet", d: 2
},
{
  q: "İcra memurunun takdir yetkisini hakkaniyetsiz kullanması hangi şikayet sebebini oluşturur?",
  o: ["Hadiseye uygun olmama", "Kanuna aykırılık", "Hakkın yerine getirilmemesi", "Hakkın sebepsiz sürüncemede bırakılması", "Kamu düzenine aykırılık"],
  a: 0,
  e: "İcra memurunun takdir yetkisini hakkaniyetsiz kullanması HADİSEYE UYGUN OLMAMA şikayet sebebidir (7 gün). Kanun hükmünün hiç ya da gereği gibi uygulanmaması KANUNA AYKIRILIK; görevine giren işi açıkça reddetmesi HAKKIN YERİNE GETİRİLMEMESİ; sürelerin geçmesine rağmen işlemin yapılmaması HAKKIN SEBEPSİZ SÜRÜNCEMEDE BIRAKILMASIDIR.",
  t: "Şikayet", d: 3
},
{
  q: "Yargıtay'ın teamülü kararlarına göre kamu düzenine aykırılık teşkil eden işlemler arasında aşağıdakilerden hangisi vardır?",
  o: ["Devlet mallarının haczedilmesi", "Alacaklının talebine uygun takip işlemi başlatılması", "Borçluya ödeme emri tebliğ edildikten sonra haciz yapılması", "Kesinleşmiş bir ilamın icra edilmesi", "Birinci haciz ihbarnamesine itiraz edilmemesi üzerine ikinci ihbarname gönderilmesi"],
  a: 0,
  e: "Kamu düzenine aykırılık teşkil eden işlemler: DEVLET MALLARININ HACZEDİLMESİ, istihkak davasına icra müdürünün bakması, ödeme emri tebliğ edilmeden haciz yapılması, alacaklının talebinden FARKLI takip işlemi başlatılması, taraf/takip ehliyeti olmayanlara takip başlatılması, birinci haciz ihbarnamesine İTİRAZ EDİLMESİNE RAĞMEN ikinci ihbarname gönderilmesi ve kesinleşmeden icra edilemeyecek ilamın kesinleşmesi beklenmeden icra edilmesi.",
  t: "Şikayet", d: 3
},
{
  q: "Şikayet başvurusu kimler tarafından yapılabilir ve süresi nedir?",
  o: ["Alacaklı, borçlu ve menfaati zedelenen 3. kişilerce; sebebin öğrenilmesinden itibaren 7 gün", "Sadece alacaklı tarafından; 10 gün", "Sadece borçlu tarafından; 7 gün", "Alacaklı ve borçlu tarafından; 5 gün", "Sadece 3. kişilerce; 7 gün"],
  a: 0,
  e: "Şikayet başvurusu ALACAKLI ve BORÇLU tarafından yapılabileceği gibi MENFAATİ ZEDELENEN 3. KİŞİLERCE de yapılabilir. Yazılı veya sözlü olabilir; süresi sebebin öğrenilmesinden itibaren 7 GÜNDÜR ve bu süre HAK DÜŞÜRÜCÜDÜR.",
  t: "Şikayet", d: 2
},
{
  q: "Şikayette yetkili mercii ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["İcra dairesine yapılan şikayet başvuruları da geçerlidir", "Şikayet, işlemi yapan icra dairesinin tabi olduğu icra mahkemesine yapılır", "İcra mahkemesinin şikayete ilişkin yetkisi kesindir", "Bu yetki kamu düzenine ilişkin sayılır", "İcra mahkemesi yetkili olup olmadığını re'sen araştırır"],
  a: 0,
  e: "İcra mahkemesinin şikayete ilişkin yetkisi KESİN olduğu için icra mahkemesi yerine İCRA DAİRESİNE yapılan şikayet başvuruları GEÇERSİZ sayılır.",
  t: "Şikayet", d: 2
},
{
  q: "Kambiyo senetlerine mahsus İFLAS yolunda şikayet başvuruları nereye yapılır ve kim inceler?",
  o: ["İcra dairesine yapılır; Asliye Ticaret Mahkemesi inceleyerek karara bağlar", "İcra mahkemesine yapılır; icra mahkemesi karara bağlar", "Asliye ticaret mahkemesine yapılır; asliye ticaret mahkemesi karara bağlar", "İcra dairesine yapılır; icra mahkemesi karara bağlar", "Genel mahkemeye yapılır; genel mahkeme karara bağlar"],
  a: 0,
  e: "İSTİSNA: Kambiyo Senetlerine Mahsus İFLAS Yolunda şikayet başvuruları icra mahkemesine değil İCRA DAİRESİNE yapılır. Bu takipte şikayet başvurularını ASLİYE TİCARET MAHKEMESİ inceleyerek karara bağlar.",
  t: "Şikayet", d: 3
},
{
  q: "İcra mahkemesi şikayet incelemesinde duruşma yapmamışsa kararını ne kadar sürede açıklar?",
  o: ["İşin kendisine gelmesinden itibaren 10 gün içinde", "İşin kendisine gelmesinden itibaren 7 gün içinde", "İşin kendisine gelmesinden itibaren 15 gün içinde", "İşin kendisine gelmesinden itibaren 30 gün içinde", "Süre öngörülmemiştir"],
  a: 0,
  e: "İcra mahkemesi duruşma yapmamışsa şikayete ilişkin kararını işin kendisine gelmesinden itibaren 10 GÜN içinde açıklar. Duruşmalar ancak zorunluluk halinde ve 30 GÜNÜ geçmemek üzere ertelenebilir.",
  t: "Şikayet", d: 3
},
{
  q: "Malvarlığının terki suretiyle konkordatoda atanan konkordato tasfiye memurlarının işlemlerine karşı hangi yola başvurulur?",
  o: ["Şikayet yoluna başvurulamaz; itiraz yolu ile Konkordato Alacaklılar Kuruluna başvurulur", "İcra mahkemesine şikayet", "Asliye ticaret mahkemesine şikayet", "Genel mahkemede dava", "Doğrudan istinaf"],
  a: 0,
  e: "Malvarlığının terki suretiyle konkordatoda atanan KONKORDATO TASFİYE MEMURLARININ işlemlerine karşı ŞİKAYET YOLUNA BAŞVURULAMAZ. Tasfiye memurlarının işlemlerine karşı İTİRAZ yolu ile KONKORDATO ALACAKLILAR KURULUNA başvurulur.",
  t: "Şikayet", d: 3
},
{
  q: "Konkordato komiserini kim atar ve komiserin işlemlerine karşı şikayetler nereye yapılır?",
  o: ["Asliye ticaret mahkemesi atar; şikayetler asliye ticaret mahkemesine yapılır", "İcra mahkemesi atar; şikayetler icra mahkemesine yapılır", "Asliye ticaret mahkemesi atar; şikayetler icra mahkemesine yapılır", "İcra dairesi atar; şikayetler icra mahkemesine yapılır", "Alacaklılar kurulu atar; şikayetler asliye ticaret mahkemesine yapılır"],
  a: 0,
  e: "Konkordato komiserini ASLİYE TİCARET MAHKEMESİ atar. Komiserin işlemlerine karşı şikayetler icra mahkemesine değil ASLİYE TİCARET MAHKEMESİNE yapılır.",
  t: "Şikayet", d: 3
},

/* ---------- TEBLİGAT ---------- */
{
  q: "Basın ilan kurumu aracılığıyla ilanen yapılan tebligatlarda tebliğ ne zaman yapılmış sayılır?",
  o: ["Son ilan tarihinden itibaren 7 gün sonra", "İlk ilan tarihinden itibaren 7 gün sonra", "Son ilan tarihinde", "Son ilan tarihinden itibaren 5 gün sonra", "Son ilan tarihinden itibaren 15 gün sonra"],
  a: 0,
  e: "Basın ilan kurumu aracılığıyla ilanen yapılan tebligatlarda SON İLAN TARİHİNDEN İTİBAREN 7 GÜN SONRA tebliğ yapılmış sayılır.",
  t: "Tebligat", d: 2
},
{
  q: "Elektronik yolla yapılan tebligat ne zaman yapılmış sayılır?",
  o: ["Muhatabın elektronik adresine ulaştığı tarihi izleyen 5. günün sonunda", "Muhatabın elektronik adresine ulaştığı anda", "Muhatabın elektronik adresine ulaştığı tarihi izleyen 7. günün sonunda", "Muhatabın elektronik adresine ulaştığı tarihi izleyen 3. günün sonunda", "Muhatap okuduğunu bildirdiğinde"],
  a: 0,
  e: "Elektronik yolla yapılan tebligat, muhatabın elektronik adresine ULAŞTIĞI TARİHİ İZLEYEN 5. GÜNÜN SONUNDA yapılmış sayılır.",
  t: "Tebligat", d: 2
},
{
  q: "Usulsüz tebligat ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Komşuya, kapıcıya veya apartman yöneticisine yapılan tebligat usulüne uygundur", "Usulsüz tebligat kural olarak geçersizdir", "Muhatap usulsüz tebligatın içeriğini öğrendiğini bildirmişse geçerli hale gelir", "Muhatabın öğrendiğini beyan ettiği tarih tebliğ tarihi sayılır", "Vekil aracılığıyla takip edilen işlerde tebligat vekile yapılır"],
  a: 0,
  e: "KOMŞUYA, KAPICIYA veya APARTMAN YÖNETİCİSİNE yapılan tebligat USULSÜZDÜR ve süreler işlemeye başlamaz.",
  t: "Tebligat", d: 2
},
{
  q: "Vekil aracılığıyla takip edilen işlerde tebligat kime ve hangi zamanda yapılır?",
  o: ["Vekile yapılır ve mesai gün ve saatlerinde yapılması zorunludur", "Asıla yapılır ve tatil günlerinde de yapılabilir", "Vekile yapılır ve tatil günlerinde de yapılabilir", "Hem asıla hem vekile yapılır", "Asıla yapılır ve sadece mesai saatlerinde yapılır"],
  a: 0,
  e: "Vekil aracılığıyla takip edilen işlerde tebligat ASILA DEĞİL VEKİLE yapılır. Vekile yapılacak tebligatın MESAİ GÜN VE SAATLERİNDE yapılması ZORUNLUDUR.",
  t: "Tebligat", d: 3
},

/* ---------- SÜRELER VE TAKİP İŞLEMLERİ ---------- */
{
  q: "İcra hukukunda taraflar için öngörülen süreler ile icra organları için öngörülen süreler arasındaki fark nedir?",
  o: ["Taraflar için süreler hak düşürücü ve kesindir; icra organları için süreler düzenleyicidir ve kesin değildir", "İkisi de hak düşürücüdür", "İkisi de düzenleyicidir", "Taraflar için süreler düzenleyici, icra organları için hak düşürücüdür", "Taraflar sözleşme ile her iki süreyi de değiştirebilir"],
  a: 0,
  e: "TARAFLAR için öngörülen süreler HAK DÜŞÜRÜCÜ niteliktedir (re'sen gözetilir), KESİNDİR ve sözleşme ile değiştirilemez; süre içinde yapılmayan işlem geçersizdir. İCRA ORGANLARI için süreler DÜZENLEYİCİDİR, kesin değildir ve süre sonrasında yapılan işlem bile geçerlidir.",
  t: "Süreler", d: 2
},
{
  q: "Bir işlemin icra takip işlemi sayılabilmesi için gereken şartlar arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["İşlem alacaklının lehine ve borçlunun rızası ile yapılmalıdır", "İşlem icra organlarınca yapılmalıdır", "İşlem borçluya karşı (aleyhine) yapılmalıdır", "İşlem cebri icra prosedürünü alacaklı lehine ilerletmelidir", "İşlem borçlunun hukuki durumuna zarar verici veya tehlikeye düşürücü olmalıdır"],
  a: 0,
  e: "İcra takip işlemi şartları: icra organlarınca yapılmalı, BORÇLUYA KARŞI (aleyhine) yapılmalı, prosedürü alacaklı lehine İLERLETMELİ ve borçlunun hukuki durumuna zarar verici/tehlikeye düşürücü olmalıdır. Borçlunun rızası aranmaz.",
  t: "Takip İşlemleri", d: 2
},
{
  q: "Aşağıdakilerden hangisi icra dairesi tarafından yapılmasına rağmen icra takip işlemi SAYILMAZ?",
  o: ["Paraların paylaştırılması", "Ödeme emrinin tebliği", "Haciz işlemleri", "Satış işlemleri", "İtirazın kaldırılması kararı"],
  a: 0,
  e: "PARALARIN PAYLAŞTIRILMASI icra dairesince yapılsa da icra takip işlemi DEĞİLDİR; çünkü cebri icrayı alacaklı lehine ilerletmez, SONLANDIRIR. Ayrıca hacizli taşınırların muhafaza altına alınması, sıra cetvelinin hazırlanması ve aciz belgesi hazırlanması da icra takip işlemi sayılmaz.",
  t: "Takip İşlemleri", d: 3
},
{
  q: "Ödeme emrine itiraz ve haciz talebi hangi tür işlemlerdir?",
  o: ["İkisi de taraf takip işlemidir", "İkisi de icra takip işlemidir", "Ödeme emrine itiraz icra takip işlemi, haciz talebi taraf takip işlemidir", "Ödeme emrine itiraz taraf takip işlemi, haciz talebi icra takip işlemidir", "İkisi de kendine özgü işlemdir"],
  a: 0,
  e: "TARAF TAKİP İŞLEMLERİ: takip talebi, ödeme emrine itiraz, haciz talebi, satış talebi. İCRA TAKİP İŞLEMLERİ: ödeme emri tebliği (ilk icra takip işlemi), itirazın kaldırılması/iptali kararı, haciz işlemleri, satış işlemleri.",
  t: "Takip İşlemleri", d: 3
},

/* ---------- TALİK HALLERİ ---------- */
{
  q: "Borçlunun ölmesi durumunda mirasçılar mirası açıkça kabul etmişlerse icra takibi ne kadar ertelenir?",
  o: ["Ölüm günü de dahil olmak üzere 3 gün", "Ölüm günü de dahil olmak üzere 7 gün", "3 ay", "3 gün + 3 ay", "1 yıl"],
  a: 0,
  e: "Mirasçılar mirası açıkça KABUL ETMİŞLERSE icra takibi ölüm günü de dahil olmak üzere 3 GÜN ertelenir. Açıkça kabul veya ret etmemişlerse önce 3 günlük süre, sonrasında 3 AYLIK mirası ret süresinin dolması beklenir.",
  t: "Talik Halleri", d: 2
},
{
  q: "Aşağıdakilerden hangisi genel talik (erteleme) hali DEĞİLDİR?",
  o: ["Borçlunun kardeşinin ölümü", "Borçlunun ölümü", "Borçlunun eşinin ölümü", "Borçlunun ağır hasta olması", "Borçlunun askerde olması"],
  a: 0,
  e: "Borçlunun YANSOYUNUN ölümü talik halleri arasında SAYILMAMIŞTIR; borçlunun KARDEŞİNİN ölümü talik hali DEĞİLDİR. Amca, hala, dayı, teyze ve kuzenlerin ölümü de talik hali değildir. Talik hali sadece eş ile kan/kayın hısımlığı itibariyle ALTSOY veya ÜSTSOY ölümüdür.",
  t: "Talik Halleri", d: 3
},
{
  q: "Aşağıdakilerden hangisi talik hali OLARAK KABUL EDİLİR?",
  o: ["Borçlunun kendisinin ağır hasta olması", "Borçlunun nişanlısının ölümü", "Borçlunun annesinin ağır hasta olması", "Borçlunun eşinin ağır hasta olması", "Borçlunun kuzeninin ölümü"],
  a: 0,
  e: "BORÇLUNUN KENDİSİNİN ağır hasta olması talik halidir (resmi rapor gerekir). Borçlunun NİŞANLISININ ölümü, ANNESİNİN-BABASININ ya da EŞİNİN AĞIR HASTA olması talik halleri arasında SAYILMAMIŞTIR.",
  t: "Talik Halleri", d: 3
},
{
  q: "Borçlunun 1 yıl ve daha fazla süreli hürriyeti bağlayıcı cezaya mahkum olup hapsedilmesi durumunda ne olur?",
  o: ["Kısıtlanma sebebi sayılır; icra memuru sulh hukuk mahkemesine vasi tayini için başvurur ve vasi tayin edilinceye kadar talik hali kabul edilir", "Takip hiç etkilenmez", "Takip 3 gün ertelenir", "Takip 3 ay ertelenir", "Takip tamamen düşer"],
  a: 0,
  e: "Borçlu 1 YIL ve daha fazla süreli hürriyeti bağlayıcı cezaya mahkum olup hapsedilmişse bu KISITLANMA SEBEBİ sayılır. İcra memuru borçluya vasi tayini için SULH HUKUK MAHKEMESİNE başvurur; vasi tayin edilinceye kadar talik hali kabul edilir.",
  t: "Talik Halleri", d: 3
},
{
  q: "Özel talik halleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Borçluya konkordato mühletinin verilmesi", "Borçlunun ölümü", "Borçlunun ağır hasta olması", "Borçlunun askerde olması", "Borçlunun eşinin ölümü"],
  a: 0,
  e: "ÖZEL TALİK HALLERİ: borçluya KONKORDATO MÜHLETİNİN verilmesi (asliye ticaret mahkemesi), olağanüstü durumlarda mühlet ve tatil verilmesi, sermaye şirketlerinin uzlaşma yolu ile yapılandırılması. Diğerleri genel talik halleridir.",
  t: "Talik Halleri", d: 2
},

/* ---------- HARÇLAR ---------- */
{
  q: "Sadece ilamsız icra takibi başlatan alacaklılardan, takip konusu alacağın binde 5'i oranında alınan harç hangisidir?",
  o: ["Peşin harç", "Başvurma harcı", "Tahsil harcı", "Cezaevleri harcı", "Yenileme harcı"],
  a: 0,
  e: "PEŞİN HARÇ sadece İLAMSIZ icra takibi başlatan alacaklılardan, takip konusu alacağın ‰5'i oranında alınır ve takibin başarıyla sonuçlanması durumunda borçluya yükletilir.",
  t: "Harçlar", d: 2
},
{
  q: "Cezaevleri harcı ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Takip konusu alacağın %2'si oranındadır ve her halde alacaklı tarafından ödenir, borçluya yükletilmez", "Takip konusu alacağın %5'i oranındadır ve borçluya yükletilir", "Takip konusu alacağın binde 5'i oranındadır", "Maktu bir harçtır ve borçluya yükletilir", "Sadece ilamlı takiplerde alınır"],
  a: 0,
  e: "CEZAEVLERİ HARCI takibin başarıyla sonuçlanmasının ardından alacaklıdan takip konusu alacağın %2'si oranında alınır. Diğer harçlardan farklı olarak HER HALDE ALACAKLI tarafından ödenir ve BORÇLUYA YÜKLETİLMEZ.",
  t: "Harçlar", d: 3
},
{
  q: "Konusu para ile ölçülemeyen icra takibinin (çocuk teslimi gibi) başarıyla sonuçlandırılması durumunda alınan maktu harç hangisidir?",
  o: ["İcranın yerine getirilmesi harcı", "Tahsil harcı", "Peşin harç", "Başvurma harcı", "Feragat harcı"],
  a: 0,
  e: "İCRANIN YERİNE GETİRİLMESİ HARCI, konusu para ile ölçülemeyen icra takibinin başarıyla sonuçlandırılması durumunda alacaklıdan alınan MAKTU harçtır ve sonradan borçluya yüklenir.",
  t: "Harçlar", d: 3
},
{
  q: "Feragat harcı ne oranda ödenir?",
  o: ["Takibe devam edilseydi alınacak olan tahsil harcının yarısı nispetinde", "Takip konusu alacağın %2'si", "Takip konusu alacağın binde 5'i", "Tahsil harcının tamamı", "Maktu olarak"],
  a: 0,
  e: "FERAGAT HARCI, alacaklının takipten vazgeçmesi durumunda ödenir ve takibe devam edilseydi alınacak olan TAHSİL HARCININ YARISI nispetinde ödenir. Borçluya yükletilemez.",
  t: "Harçlar", d: 3
},

/* ---------- İLAMSIZ İCRA / GENEL HACİZ YOLU ---------- */
{
  q: "İlamsız icra takibi ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Yabancı devlet aleyhine ilamsız icra takibi başlatılabilir", "Yalnızca para ve teminat alacakları için başvurulabilir", "Alacağın mahkeme hükmüne bağlı olması gerekmez", "Genel yetkili icra dairesi borçlunun yerleşim yerindeki icra dairesidir", "İcra dairesinin yetkisi kesin değildir"],
  a: 0,
  e: "YABANCI DEVLET ALEYHİNE İLAMSIZ İCRA TAKİBİ BAŞLATILAMAZ.",
  t: "İlamsız İcra", d: 2
},
{
  q: "Alacak hakkı ADİ SENEDE bağlanmışsa alacaklı hangi takip yolunu izleyebilir?",
  o: ["Yalnızca genel haciz yolu ile takip başlatabilir", "Yalnızca kambiyo senetlerine mahsus haciz yolu", "Seçimlik hakkı vardır", "Yalnızca ilamlı icra takibi", "Yalnızca rehnin paraya çevrilmesi yolu"],
  a: 0,
  e: "Alacak ADİ SENEDE bağlanmışsa veya SENETSİZ ise alacaklı YALNIZCA GENEL HACİZ YOLU ile takip başlatabilir. Alacak KAMBİYO SENEDİNE bağlanmışsa alacaklının SEÇİMLİK HAKKI vardır.",
  t: "Genel Haciz Yolu", d: 2
},
{
  q: "Genel haciz yolu ile takipte yetki sözleşmesi kimler arasında yapılabilir?",
  o: ["Sadece tacirler ve kamu tüzel kişileri (her iki tarafın da tacir ya da kamu tüzel kişisi olması zorunludur)", "Herkes arasında yapılabilir", "Sadece gerçek kişiler arasında", "Sadece bir tarafın tacir olması yeterlidir", "Yetki sözleşmesi yapılamaz"],
  a: 0,
  e: "Yetki sözleşmesi SADECE TACİRLER VE KAMU TÜZEL KİŞİLERİ aralarında başlaması muhtemel takipler için yapabilirler; HER İKİ TARAFIN da tacir ya da kamu tüzel kişisi olması ZORUNLUDUR. Yazılı yapılır ve yetkili icra daireleri belirli olmalıdır.",
  t: "Genel Haciz Yolu", d: 3
},
{
  q: "Yetki itirazı ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Ödeme emrinin tebliğinden itibaren 7 gün içinde icra dairesine, ayrıca ve açıkça yapılmalıdır; yetkili icra dairesi açıkça gösterilmelidir", "10 gün içinde icra mahkemesine yapılır", "7 gün içinde icra mahkemesine yapılır ve açıkça yapılması gerekmez", "5 gün içinde icra dairesine yapılır", "Süresiz olarak yapılabilir"],
  a: 0,
  e: "Yetki itirazı ödeme emrinin tebliğinden itibaren 7 GÜN içinde İCRA DAİRESİNE yapılır. AYRICA VE AÇIKÇA yapılmak zorundadır; borçlu YETKİLİ OLAN İCRA DAİRESİNİ AÇIKÇA GÖSTERMELİDİR. Aksi takdirde hiç itiraz etmemiş sayılır.",
  t: "Genel Haciz Yolu", d: 3
},
{
  q: "Genel haciz yolunda takip aşamalarının doğru sıralaması hangisidir?",
  o: ["Takip talebi → Ödeme emri → Takibin kesinleşmesi → Haciz → Satış → Paraların ödenmesi/paylaştırılması", "Ödeme emri → Takip talebi → Haciz → Satış → Takibin kesinleşmesi", "Takip talebi → Haciz → Ödeme emri → Satış → Paraların paylaştırılması", "Takip talebi → İcra emri → Haciz → Satış → Paraların paylaştırılması", "Takip talebi → Ödeme emri → Haciz → Takibin kesinleşmesi → Satış"],
  a: 0,
  e: "Genel haciz yolunda aşamalar: 1) TAKİP TALEBİ, 2) ÖDEME EMRİNİN DÜZENLENİP GÖNDERİLMESİ, 3) TAKİBİN KESİNLEŞMESİ, 4) HACİZ, 5) SATIŞ, 6) PARALARIN ÖDENMESİ-PAYLAŞTIRILMASI.",
  t: "Genel Haciz Yolu", d: 1
},
{
  q: "Takip talebinde bulunması gereken kayıtlar arasında aşağıdakilerden hangisi vardır ancak ödeme emrinde YER ALMAZ?",
  o: ["Alacaklının veya varsa vekilinin banka hesap numarası", "Alacağın miktarı", "Seçilen takibin türü", "Borçlunun adı ve soyadı", "Faiz oranı"],
  a: 0,
  e: "Takip talebinde yazan tüm hususlar (ALACAKLININ VEYA VARSA VEKİLİNİN BANKA HESAP NUMARASI HARİÇ olmak üzere) ödeme emrinde borçluya tebliğ edilir.",
  t: "Genel Haciz Yolu", d: 3
},
{
  q: "Takip talebinde bulunmanın maddi hukuk bakımından sonuçları nedir?",
  o: ["Zamanaşımı süreleri kesilir ve borçlu daha önce temerrüde düşürülmemişse takip talebi ile temerrüde düşer", "Sadece zamanaşımı süresi durur", "Borçlu iflas etmiş sayılır", "Alacak muaccel hale gelir", "Borç ikrar edilmiş sayılır"],
  a: 0,
  e: "MADDİ HUKUK bakımından: takip konusu alacak hakkında işleyen ZAMANAŞIMI SÜRELERİ KESİLİR ve borçlu daha önce temerrüde düşürülmemişse takip talebi ile birlikte TEMERRÜDE DÜŞER.",
  t: "Genel Haciz Yolu", d: 2
},
{
  q: "Genel haciz yolunda takip talebini alan icra dairesi aşağıdakilerden hangisini re'sen İNCELEYEBİLİR?",
  o: ["Hiçbirini re'sen inceleyemez; bunlar birer itiraz sebebidir", "Yetkili olup olmadığını", "Alacağın mevcut olup olmadığını", "Alacağın vadesinin gelip gelmediğini", "Alacağın zamanaşımına uğrayıp uğramadığını"],
  a: 0,
  e: "Genel haciz yolunda icra dairesi yetkisini, alacağın mevcudiyetini, vadesini, zamanaşımını ve derdestliği RE'SEN İNCELEYEMEZ. Bu hususlar birer İTİRAZ SEBEBİDİR; borçlu bunları ödeme emrine itirazında ileri sürer.",
  t: "Genel Haciz Yolu", d: 2
},
{
  q: "Genel haciz yolunda ödeme emri hangi süre içinde düzenlenip tebliğ edilir ve ödeme süresi kaç gündür?",
  o: ["3 gün içinde düzenlenir; ödeme süresi 7 gündür", "7 gün içinde düzenlenir; ödeme süresi 10 gündür", "Derhal düzenlenir; ödeme süresi 10 gündür", "3 gün içinde düzenlenir; ödeme süresi 10 gündür", "5 gün içinde düzenlenir; ödeme süresi 7 gündür"],
  a: 0,
  e: "İcra dairesi takip talebini aldıktan 3 GÜN içinde ödeme emri düzenleyip borçluya tebliğ eder. Genel haciz yolunda BORCUN ÖDEME SÜRESİ 7 GÜN, İTİRAZ SÜRESİ 7 GÜN ve MAL BEYANI SÜRESİ 7 GÜNDÜR.",
  t: "Genel Haciz Yolu", d: 2
},
{
  q: "Genel haciz yolunda ödeme emrine itiraz nereye yapılır ve etkisi nedir?",
  o: ["İcra dairesine yapılır ve icra takibini kendiliğinden durdurur", "İcra mahkemesine yapılır ve takibi durdurmaz", "İcra mahkemesine yapılır ve takibi durdurur", "İcra dairesine yapılır ve takibi durdurmaz", "Genel mahkemeye yapılır ve takibi durdurur"],
  a: 0,
  e: "Genel haciz yolunda ödeme emrine itiraz İCRA DAİRESİNE yapılır (yetkili merci icra dairesidir) ve itiraz icra takibini KENDİLİĞİNDEN DURDURUR.",
  t: "Genel Haciz Yolu", d: 2
},

/* ---------- İTİRAZ TÜRLERİ ---------- */
{
  q: "İmzaya itiraz ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Borçlu resmi senet ya da noter senedi altındaki imzaya da itiraz edebilir", "Adi senede dayanılarak başlatılan takiplerde söz konusu olur", "Ayrıca ve açıkça yapılmak zorundadır", "İcra takibini kendiliğinden durdurur", "İtiraz eden borçlu mal beyanında bulunmak zorunda değildir"],
  a: 0,
  e: "Borçlu RESMİ SENET YA DA NOTER SENEDİ altındaki imzaya İTİRAZ EDEMEZ. İmzaya itiraz sadece ADİ SENEDE dayanan takiplerde söz konusu olur ve AYRICA VE AÇIKÇA yapılmalıdır; aksi halde borçlu imzayı kabul etmiş sayılır.",
  t: "İtiraz", d: 2
},
{
  q: "Borca itiraz ile kısmi itiraz arasındaki temel fark nedir?",
  o: ["Borca itiraz ayrıca ve açıkça yapılmak zorunda değildir; kısmi itiraz ayrıca ve açıkça yapılmalıdır", "Borca itiraz açıkça yapılmalı, kısmi itiraz açıkça yapılmak zorunda değildir", "İkisi de ayrıca ve açıkça yapılmalıdır", "İkisi de açıkça yapılmak zorunda değildir", "Borca itiraz takibi durdurmaz, kısmi itiraz durdurur"],
  a: 0,
  e: "BORCA İTİRAZ ayrıca ve açıkça yapılmak ZORUNDA DEĞİLDİR ('Borcum yoktur', 'İtiraz ediyorum' geçerlidir). KISMİ İTİRAZ ise AYRICA VE AÇIKÇA yapılmalıdır; aksi halde BORÇLU HİÇ İTİRAZ ETMEMİŞ SAYILIR ('Borcum bu kadar değildir' geçersizdir).",
  t: "İtiraz", d: 3
},
{
  q: "Alacaklı, borçlunun İMZAYA itirazını hükümden düşürmek için hangi yollara başvurabilir?",
  o: ["Genel mahkemelerde itirazın iptali davası veya icra mahkemesinden itirazın GEÇİCİ kaldırılması", "Genel mahkemelerde itirazın iptali davası veya icra mahkemesinden itirazın KESİN kaldırılması", "Sadece itirazın iptali davası", "Sadece itirazın kesin kaldırılması", "Sadece borçtan kurtulma davası"],
  a: 0,
  e: "İMZAYA İTİRAZ halinde alacaklı genel mahkemelerde İTİRAZIN İPTALİ DAVASI açabileceği gibi icra mahkemelerinden İTİRAZIN GEÇİCİ KALDIRILMASINI da talep edebilir. BORCA İTİRAZ halinde ise itirazın KESİN kaldırılması talep edilir.",
  t: "İtiraz", d: 2
},
{
  q: "Gecikmiş itiraz ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Engelin ortadan kalkmasından itibaren 3 gün içinde icra mahkemesine yapılır ve icra takibini kendiliğinden durdurmaz", "7 gün içinde icra dairesine yapılır ve takibi durdurur", "3 gün içinde icra dairesine yapılır ve takibi durdurur", "5 gün içinde icra mahkemesine yapılır ve takibi durdurur", "Süresiz olarak yapılabilir"],
  a: 0,
  e: "GECİKMİŞ İTİRAZ eski hale getirmenin özel bir uygulamasıdır. Engelin ortadan kalkmasından itibaren 3 GÜN içinde İCRA MAHKEMESİNE yapılır (en geç hacizli mallar paraya çevrilinceye kadar) ve icra takibini KENDİLİĞİNDEN DURDURMAZ.",
  t: "İtiraz", d: 2
},
{
  q: "Borçlu hacizden sonra gecikmiş itiraz yapmış ve icra mahkemesi mazereti kabul etmişse, alacaklı haczin kalkmaması için ne yapmalıdır?",
  o: ["Mazeretin kabulü kararının tefhim veya tebliğinden itibaren 7 gün içinde itirazın kaldırılmasını talep etmeli ya da itirazın iptali davası açmalıdır", "Hiçbir şey yapmasına gerek yoktur", "3 gün içinde satış talep etmelidir", "1 yıl içinde itirazın iptali davası açmalıdır", "6 ay içinde itirazın kaldırılmasını talep etmelidir"],
  a: 0,
  e: "Alacaklı HACZİN KALKMAMASI İÇİN, mazeretin kabulü kararının tefhim veya tebliğinden itibaren 7 GÜN içinde itirazın kaldırılmasını talep etmeli ya da itirazın iptali davası açmalıdır.",
  t: "İtiraz", d: 3
},

/* ---------- İTİRAZIN İPTALİ / KALDIRILMASI ---------- */
{
  q: "İtirazın iptali davası ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Alacaklı tarafından borçluya karşı, itirazın tebliğinden itibaren 1 yıl içinde genel mahkemelerde açılır ve bir eda davasıdır", "Borçlu tarafından, 6 ay içinde icra mahkemesinde açılır", "Alacaklı tarafından, 6 ay içinde icra mahkemesinde açılır", "Alacaklı tarafından, 1 yıl içinde icra mahkemesinde açılır", "Borçlu tarafından, 1 yıl içinde genel mahkemelerde açılır"],
  a: 0,
  e: "İTİRAZIN İPTALİ DAVASI alacaklı tarafından borçluya karşı açılır, bir EDA (alacak) DAVASIDIR, itirazın alacaklıya tebliğinden itibaren 1 YIL içinde ve GENEL MAHKEMELERDE açılır. Verilen karar MADDİ ANLAMDA KESİN HÜKÜM teşkil eder.",
  t: "İtirazın İptali", d: 2
},
{
  q: "Borçlu tek başına usule ilişkin bir itiraz (yetki veya derdestlik itirazı) yapmışsa alacaklı ne yapabilir?",
  o: ["İtirazın iptali davası açamaz", "İtirazın iptali davası açabilir", "Borçtan kurtulma davası açabilir", "İstirdat davası açabilir", "Menfi tespit davası açabilir"],
  a: 0,
  e: "Borçlu TEK BAŞINA USULE İLİŞKİN bir itiraz yapmışsa (yetki veya derdestlik itirazı gibi), İTİRAZIN İPTALİ DAVASI AÇILAMAZ.",
  t: "İtirazın İptali", d: 3
},
{
  q: "İcra inkar tazminatı ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Borç konusunun %20'sinden az olmamak üzere hükmedilir ve borçlunun kötü niyetli olması koşulu aranmaz", "Borcun %10'undan az olmamak üzere hükmedilir ve kötü niyet koşulu aranır", "Borcun %20'sinden az olmamak üzere hükmedilir ve kötü niyet koşulu aranır", "Borcun %15'inden az olmamak üzere hükmedilir", "Mahkeme re'sen hükmeder, talep gerekmez"],
  a: 0,
  e: "İtirazın iptali davasında haksız çıkan borçluya, ALACAKLININ DA TALEBİ ÜZERİNE dava konusu borcun %20'SİNDEN AZ OLMAMAK ÜZERE icra inkar tazminatı hükmedilir. BORÇLUNUN KÖTÜ NİYETLİ OLMASI KOŞULU ARANMAZ.",
  t: "İtirazın İptali", d: 2
},
{
  q: "İtirazın kesin kaldırılması ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Borca itiraz halinde, itirazın tebliğinden itibaren 6 ay içinde icra mahkemesinden talep edilir ve alacaklının elinde İİK 68/68-a belgesi olması zorunludur", "İmzaya itiraz halinde, 1 yıl içinde genel mahkemede talep edilir", "Borca itiraz halinde, 1 yıl içinde icra mahkemesinden talep edilir", "Borca itiraz halinde, 6 ay içinde genel mahkemeden talep edilir", "Alacaklının elinde belge olması gerekmez"],
  a: 0,
  e: "İTİRAZIN KESİN KALDIRILMASI BORCA İTİRAZ halinde başvurulur, itirazın alacaklıya tebliğinden itibaren 6 AY içinde İCRA MAHKEMESİNDEN talep edilir ve alacaklının elinde İİK 68/68-a md. anlamında BELGE OLMASI ZORUNLUDUR.",
  t: "İtirazın Kaldırılması", d: 2
},
{
  q: "İtirazın kesin kaldırılması talebi için gerekli belgeler arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Yalnızca alacaklının imzasını taşıyan adi senet", "İmzası borçlu tarafından ikrar edilmiş adi senet", "Düzenleme veya onaylama biçimindeki noter senetleri", "Borç ödemeden aciz belgesi", "Kredi kurumlarınca düzenlenen belgeler"],
  a: 0,
  e: "YALNIZCA ALACAKLININ İMZASINI TAŞIYAN bir adi senet, ticari defterler, sadece banka/posta makbuzu, fotokopi, fax, e-mail çıktısı gibi İMZA UNSURU ZEDELENMİŞ belgelerle itirazın kesin kaldırılması TALEP EDİLEMEZ.",
  t: "İtirazın Kaldırılması", d: 3
},
{
  q: "Ödeme emrine itirazında sebep bildirmemiş olan borçlu icra mahkemesinde neleri ileri sürebilir?",
  o: ["Ancak senet metninden anlaşılan def'ileri (vadenin gelmediği, zamanaşımı, senedin tahrif edildiği gibi)", "Her türlü itiraz sebebini", "Hata, hile veya ikrah iddialarını", "Fiil ehliyetinin bulunmadığını", "Malın ayıplı olduğunu"],
  a: 0,
  e: "İtirazında sebep bildirmemiş borçlu, senedin HATA, HİLE veya İKRAH sonucu düzenlendiğini, imza anında FİİL EHLİYETİNİN bulunmadığını veya malın AYIPLI olduğunu icra mahkemesinde İLERİ SÜREMEZ. Ancak SENET METNİNDEN ANLAŞILAN DEF'İLERİ (vade, zamanaşımı, tahrif) ileri sürebilir.",
  t: "İtirazın Kaldırılması", d: 3
},
{
  q: "İtirazın geçici kaldırılması ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["İtirazın geçici kaldırılması kararı ile ödeme emri kesinleşir", "İmzaya itiraz halinde başvurulan yoldur", "Talep mutlaka duruşmalı olarak incelenir", "Borçlunun duruşmaya katılması zorunludur", "Duruşmada tanık ve yemin dinlenmez"],
  a: 0,
  e: "İtirazın geçici kaldırılması kararı ile ödeme emri KESİNLEŞMEZ. Bu kararla alacaklı sadece GEÇİCİ HACİZ talep edebilir; geçici haciz kesin hacze dönüşmedikçe satış talep edilemez.",
  t: "İtirazın Kaldırılması", d: 3
},
{
  q: "İmzaya itirazında haksız çıkan borçluya mahkeme re'sen hangi cezayı verir?",
  o: ["Takip konusu borcun %10'u oranında para cezası", "Takip konusu borcun %20'si oranında para cezası", "Takip konusu borcun %15'i oranında para cezası", "3 aya kadar hapisle tazyik", "Hiçbir ceza verilmez"],
  a: 0,
  e: "İmzaya itirazında haksız çıkan borçluya mahkeme RE'SEN takip konusu borcun %10'U oranında PARA CEZASI verir. Ayrıca alacaklının talebi üzerine borcun %20'sinden az olmamak üzere tazminata da hükmedilir.",
  t: "İtirazın Kaldırılması", d: 3
},

/* ---------- BORÇTAN KURTULMA DAVASI ---------- */
{
  q: "Borçtan kurtulma davası hangi durumda ve hangi süre içinde açılır?",
  o: ["Sadece genel haciz yolunda, imzaya itirazın geçici kaldırılması kararının tefhim veya tebliğinden itibaren 7 gün içinde", "Borca itirazın kesin kaldırılmasından sonra 7 gün içinde", "Kambiyo senetlerine mahsus haciz yolunda 5 gün içinde", "İtirazın iptali kararından sonra 1 yıl içinde", "Herhangi bir takipte süresiz olarak"],
  a: 0,
  e: "BORÇTAN KURTULMA DAVASI SADECE GENEL HACİZ YOLUNDA ve İMZAYA İTİRAZIN GEÇİCİ KALDIRILMASI kararından sonra söz konusu olur. Geçici kaldırma kararının tefhim veya tebliğinden itibaren 7 GÜNLÜK hak düşürücü süre içinde GENEL MAHKEMELERDE açılır.",
  t: "Borçtan Kurtulma", d: 2
},
{
  q: "Borçtan kurtulma davasının özel dava şartı nedir?",
  o: ["Borçlunun borcun %15'i oranında teminatı ilk duruşma gününe kadar depo etmesi", "Borçlunun borcun %20'si oranında teminat yatırması", "Borçlunun borcun %10'u oranında teminat yatırması", "Borçlunun aciz belgesi ibraz etmesi", "Özel dava şartı aranmaz"],
  a: 0,
  e: "Borçtan kurtulma davasının özel dava şartı, borçlunun söz konusu borcun %15'İ oranında bir teminatı İLK DURUŞMA GÜNÜNE KADAR depo etmesidir. Şart yerine getirilmezse mahkeme davaya bakmaz; geçici kaldırma kesin kaldırmaya, geçici haciz kesin hacze dönüşür.",
  t: "Borçtan Kurtulma", d: 3
},
{
  q: "İtirazı geçici kaldırılan borçlu 7 gün içinde borçtan kurtulma davası açmazsa ne olur?",
  o: ["8. gün menfi tespit davası açabilir ancak takip durmaz; geçici kaldırma kesin kaldırmaya, geçici haciz kesin hacze dönüşür", "Bir daha hiçbir dava açamaz", "Süresiz olarak borçtan kurtulma davası açabilir", "Takip kendiliğinden iptal edilir", "İstirdat davası açmak zorundadır"],
  a: 0,
  e: "İtirazı geçici kaldırılan borçlu 7 gün içinde borçtan kurtulma davasını hiç açmazsa 8. GÜN MENFİ TESPİT DAVASI açabilir. Ancak menfi tespit davası takibi durdurmayacağı için 8. gün geçici kaldırma KESİN KALDIRMAYA, geçici haciz KESİN HACZE dönüşür.",
  t: "Borçtan Kurtulma", d: 3
},

/* ---------- İCRA TAKİBİNİN İPTALİ / TALİKİ ---------- */
{
  q: "İtfa sebebiyle icra takibinin iptali için aşağıdakilerden hangisi gereklidir?",
  o: ["Borcun ödendiğinin icra mahkemesi huzurunda alacaklının imzasını taşıyan bir belge ya da noter senedi ile ispat edilmesi", "Borcun ödendiğinin tanıkla ispat edilmesi", "Herhangi bir ispat gerekmez", "Sadece borçlunun beyanı yeterlidir", "Genel mahkemede dava açılması"],
  a: 0,
  e: "İTFA sebebiyle takibin iptalinde borçlunun borcu ödediğini icra mahkemesi huzurunda ALACAKLININ İMZASINI TAŞIYAN BİR BELGE YA DA NOTER SENEDİ ile ispat etmesi gerekir. Ödeme icra dairesi aracılığı olmadan HARİCEN ve takibin KESİNLEŞMESİNDEN SONRA yapılmış olmalıdır.",
  t: "Takibin İptali", d: 3
},
{
  q: "Zamanaşımı sebebiyle icra takibinin iptali ile itfa sebebiyle iptal arasındaki fark nedir?",
  o: ["Zamanaşımında borçlunun belge ile ispat etmesine gerek yoktur; mahkeme icra dosyasındaki son işlem tarihinden tespit eder", "Zamanaşımında noter senedi zorunludur", "İtfada belge gerekmez, zamanaşımında gerekir", "İkisinde de belge zorunludur", "İkisinde de belge gerekmez"],
  a: 0,
  e: "ZAMANAŞIMI sebebiyle iptalde borçlunun HERHANGİ BİR BELGE İLE İSPAT ETMESİNE GEREK YOKTUR. İcra mahkemesi İCRA DOSYASINDAKİ SON İŞLEM TARİHİNDEN borcun zamanaşımına uğrayıp uğramadığını tespit edebilir.",
  t: "Takibin İptali", d: 3
},
{
  q: "İcra takibinin iptali veya taliki en geç hangi aşamaya kadar talep edilebilir?",
  o: ["Paraların paylaştırılması aşamasına kadar", "Haciz aşamasına kadar", "Satış aşamasına kadar", "Ödeme emrinin kesinleşmesine kadar", "Süre sınırı yoktur"],
  a: 0,
  e: "İcra takibinin iptali veya taliki (ertelenmesi), EN GEÇ PARALARIN PAYLAŞTIRILMASI AŞAMASINA KADAR takibin başlatıldığı icra dairesinin tabi olduğu icra mahkemesinden talep edilir.",
  t: "Takibin İptali", d: 2
},

/* ---------- MAL BEYANI ---------- */
{
  q: "Mal beyanı ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  o: ["Haciz işlemlerine başlanabilmesi için borçlunun mal beyanında bulunması zorunludur", "Genel haciz yolunda mal beyanı süresi 7 gündür", "Ödeme emrine itiraz eden borçlu mal beyanında bulunmak zorunda değildir", "İtirazı hükümden düşürülen borçlu 3 gün içinde mal beyanında bulunmak zorundadır", "Mal beyanı takibin başlatıldığı icra dairesinde yapılır"],
  a: 0,
  e: "HACİZ İŞLEMLERİNE BAŞLANABİLMESİ İÇİN BORÇLUNUN MAL BEYANINDA BULUNMASI ZORUNLU DEĞİLDİR.",
  t: "Mal Beyanı", d: 2
},
{
  q: "Süresi içinde mal beyanında bulunmayan ve yanlış beyanda bulunan borçluya verilecek cezalar sırasıyla nedir?",
  o: ["3 ayı geçmeyecek şekilde hapisle tazyik; 3 aydan 1 yıla kadar hapis cezası", "3 aydan 1 yıla kadar hapis; 3 ayı geçmeyecek hapisle tazyik", "1 yıla kadar hapis; 2 yıla kadar hapis", "Para cezası; 3 aya kadar hapis", "Hiçbir ceza verilmez"],
  a: 0,
  e: "Süresi içinde MAL BEYANINDA BULUNMAYAN borçluya alacaklının talebiyle 3 AYI GEÇMEYECEK şekilde HAPİSLE TAZYİK cezası verilir. YANLIŞ BEYANDA bulunan borçlulara ise 3 AYDAN 1 YILA KADAR HAPİS cezası verilir.",
  t: "Mal Beyanı", d: 2
},

/* ---------- HACİZ ---------- */
{
  q: "Alacaklının haciz talep etme süresi nedir ve süresinde talep edilmezse ne olur?",
  o: ["Ödeme emrinin tebliğinden itibaren 1 yıl; icra takibi düşmez ancak dosya işlemden kaldırılır", "Ödeme emrinin kesinleşmesinden itibaren 1 yıl; icra takibi düşer", "Ödeme emrinin tebliğinden itibaren 6 ay; icra takibi düşer", "Ödeme emrinin tebliğinden itibaren 2 yıl; dosya işlemden kaldırılır", "Ödeme emrinin tebliğinden itibaren 1 yıl; icra takibi düşer"],
  a: 0,
  e: "Alacaklının haciz talep etme süresi ÖDEME EMRİNİN TEBLİĞİNDEN İTİBAREN 1 YILDIR. Süresinde talep edilmezse icra takibi DÜŞMEZ, ancak DOSYA İŞLEMDEN KALDIRILIR. Alacaklı YENİLEME TALEBİNDE bulunabilir ve YENİLEME HARCI öder.",
  t: "Haciz", d: 2
},
{
  q: "Haciz türleri ve özellikleri eşleştirmesinde hangisi YANLIŞTIR?",
  o: ["Geçici haciz alacaklısına satış talep etme yetkisi verir", "Kesin haciz ödeme emri kesinleştikten sonra söz konusu olur", "Geçici haciz imzaya itirazın geçici kaldırılması kararından sonra söz konusu olur", "İhtiyati haciz alacaklısına satış talep etme yetkisi vermez", "Tamamlama haczini icra dairesi re'sen yapar"],
  a: 0,
  e: "GEÇİCİ HACİZ alacaklısına SATIŞ TALEP ETME YETKİSİ VERMEZ. Satış talep etme yetkisi veren hacizler: KESİN HACİZ ve İLAVE (EK) HACİZ. TAMAMLAMA HACZİNİ ise icra dairesi RE'SEN yapar ve RE'SEN satar.",
  t: "Haciz", d: 3
},
{
  q: "İcra dairesi alacaklının haciz talebinden sonra ne kadar süre içinde haciz işlemlerine başlamalıdır?",
  o: ["3 gün içinde", "7 gün içinde", "Derhal", "1 hafta içinde", "10 gün içinde"],
  a: 0,
  e: "İcra dairesi alacaklının haciz talebinden sonra 3 GÜN içinde haciz işlemlerine başlamalıdır.",
  t: "Haciz", d: 2
},
{
  q: "Haciz işlemleri ile ilgili istisnai durumlar arasında aşağıdakilerden hangisi vardır?",
  o: ["Gece vakti çalıştırılan yerlerde sadece gelir (hasılat) haczi yapılabilir", "Gece vakti her türlü haciz yapılabilir", "Tatil ve talik hallerinde haciz yapılabilir", "Gündüz başlanan haciz gece devam edemez", "Mal kaçırma ihtimalinde haciz yapılamaz"],
  a: 0,
  e: "İstisnalar: GÜNDÜZ BAŞLANILAN haciz işlemlerine gece vakti DEVAM EDİLİR; GECE VAKTİ ÇALIŞTIRILAN YERLERDE sadece GELİR (HASILAT) HACZİ yapılabilir; borçlunun MAL KAÇIRMA İHTİMALİ varsa her zaman haciz yapılabilir.",
  t: "Haciz", d: 3
},
{
  q: "Borçlunun haczedilecek hiçbir malının bulunmadığını gösteren haciz tutanağı hangi belge hükmündedir?",
  o: ["Kesin borç ödemeden aciz belgesi", "Geçici borç ödemeden aciz belgesi", "Kesin rehin açığı belgesi", "Geçici rehin açığı belgesi", "Sıra cetveli"],
  a: 0,
  e: "Borçlunun HAÇZEDİLECEK HİÇBİR MALININ bulunmadığını gösteren haciz tutanağı KESİN BORÇ ÖDEMEDEN ACİZ BELGESİ hükmündedir. BORCA YETECEK MİKTARDA malının bulunmadığını gösteren tutanak ise GEÇİCİ borç ödemeden aciz belgesi hükmündedir.",
  t: "Haciz", d: 3
},
{
  q: "Haczedilen taşınır ve taşınmaz mallar üzerinde 3. kişilerin sonraki kazanımları nasıl korunur?",
  o: ["Taşınırlarda iyi niyetli olma koşuluyla korunur; taşınmazlarda (tapuya haciz şerhi konulduğu için) asla korunmaz", "İkisinde de korunur", "İkisinde de korunmaz", "Taşınırlarda korunmaz, taşınmazlarda korunur", "Sadece kötü niyetli kazanımlar korunur"],
  a: 0,
  e: "TAŞINIR mallar haczedildikten sonra 3. kişilerin kazanımları İYİ NİYETLİ olmaları koşuluyla KORUNUR. TAŞINMAZ mallar tapu siciline HACİZ ŞERHİ konularak haczedildiği için, sonraki kazanımlar ASLA KORUNMAZ.",
  t: "Haciz", d: 3
},
{
  q: "Borçlunun yokluğunda haciz yapılmışsa hangi belge ile icra dairesine davet edilir ve itiraz süresi nedir?",
  o: ["103 davetiyesi ile davet edilir; haciz tutanağının içeriğine 3 gün içinde itiraz edebilir", "99 davetiyesi ile davet edilir; 7 gün içinde itiraz edebilir", "103 davetiyesi ile davet edilir; 7 gün içinde itiraz edebilir", "58 davetiyesi ile davet edilir; 3 gün içinde itiraz edebilir", "Davet edilmez, itiraz hakkı yoktur"],
  a: 0,
  e: "Borçlunun yokluğunda haciz yapılması mümkündür. Sonradan borçlu 103 DAVETİYESİ ile icra dairesine davet edilir ve haciz tutanağının içeriğine bir itirazı varsa bunu 3 GÜN içinde yapabilir.",
  t: "Haciz", d: 3
},
{
  q: "Hacizde tertip (sıra) ilkesine göre doğru sıralama hangisidir?",
  o: ["Çekişmesiz taşınırlar → Çekişmesiz taşınmazlar → Çekişmeli taşınırlar → Çekişmeli taşınmazlar", "Çekişmeli taşınırlar → Çekişmesiz taşınırlar → Çekişmeli taşınmazlar → Çekişmesiz taşınmazlar", "Taşınmazlar → Taşınırlar → Alacak hakları", "Çekişmesiz taşınmazlar → Çekişmesiz taşınırlar → Çekişmeli taşınmazlar → Çekişmeli taşınırlar", "Sıra ilkesi yoktur, icra memuru serbesttir"],
  a: 0,
  e: "Hacizde tertip: 1) ÇEKİŞMESİZ TAŞINIRLAR, 2) ÇEKİŞMESİZ TAŞINMAZLAR, 3) ÇEKİŞMELİ TAŞINIRLAR, 4) ÇEKİŞMELİ TAŞINMAZLAR. Her kategoride muhafazası ve satılması kolay, yokluğu borçluya en az yük teşkil eden mallar önce haczedilir.",
  t: "Haciz", d: 3
},
{
  q: "Aşağıdakilerden hangisi TAMAMI haczedilemeyecek mal ve alacak haklarından biri DEĞİLDİR?",
  o: ["Maaşlar, ücretler ve ödenekler", "İlama bağlı nafakalar", "Manevi tazminat talepleri", "Emekli maaşları", "Borçlunun haline münasip evi"],
  a: 0,
  e: "MAAŞLAR, ÜCRETLER VE ÖDENEKLER KISMEN haczedilemeyecek mal ve alacak haklarındandır. İlama bağlı nafakalar, haksız fiil tazminatları, manevi tazminat, emekli maaşları, öğrenci bursları ve borçlunun haline münasip evi TAMAMEN haczedilemez.",
  t: "Haczedilemeyen Mallar", d: 2
},
{
  q: "Memur maaşı ve işçi ücretinin haczedilebilir kısmı ile ilgili aşağıdakilerden hangisi doğrudur?",
  o: ["Memur maaşının en az 1/4'ü haczedilebilir (üst sınırı icra memuru takdir eder); işçi ücretinin en fazla 1/4'ü haczedilebilir (alt sınırı icra memuru takdir eder)", "İkisinde de en fazla 1/4 haczedilebilir", "İkisinde de en az 1/4 haczedilebilir", "Memur maaşının en fazla 1/4'ü, işçi ücretinin en az 1/4'ü haczedilebilir", "İkisi de tamamen haczedilebilir"],
  a: 0,
  e: "MEMUR maaşının EN AZ 1/4'İ haczedilebilir (üst sınırı icra memuru takdir eder). İŞÇİ ücretlerinin EN FAZLA 1/4'İ haczedilebilir (alt sınırı icra memuru takdir eder).",
  t: "Haczedilemeyen Mallar", d: 3
},
{
  q: "Borçlu çiftçi ise haczedilemeyecek hayvanlar hangileridir?",
  o: ["1 inek ve 3 tane küçükbaş hayvanı ile bunların 3 aylık yem ve yataklıkları", "2 inek ve 5 küçükbaş hayvan", "1 inek ve 1 küçükbaş hayvan", "3 inek ve 3 küçükbaş hayvan", "Hiçbir hayvanı haczedilemez"],
  a: 0,
  e: "Borçlu çiftçi ise 1 İNEK ve 3 TANE KÜÇÜKBAŞ hayvanı ve bunların 3 AYLIK YEM VE YATAKLIKLARI haczedilemez. Ayrıca çift hayvanı, nakil vasıtası olarak kullandığı hayvanlar, tarım alet ve edevatları, RÖMORK ve SABAN da haczedilemez.",
  t: "Haczedilemeyen Mallar", d: 3
},
{
  q: "Yetişmemiş ağaç ve toprak mahsulleri hangi durumda haczedilemez?",
  o: ["Yetişmelerine 2 aydan daha fazla bir süre varsa", "Yetişmelerine 1 aydan daha fazla süre varsa", "Yetişmelerine 3 aydan daha fazla süre varsa", "Her durumda haczedilemez", "Her durumda haczedilebilir"],
  a: 0,
  e: "Yetişmemiş ağaç ve toprak mahsullerinin YETİŞMELERİNE 2 AYDAN DAHA FAZLA bir süre varsa haczedilemezler. Ayrıca borçlunun 1 YILLIK TOHUMU da haczedilemez.",
  t: "Haczedilemeyen Mallar", d: 3
},
{
  q: "Hayvan hacizlerinde anaları tarafından beslenmeye muhtaç yavrular hakkında kural nedir?",
  o: ["Yavrular analarından ayrı haczedilemeyeceği gibi analar da yavrularından ayrı haczedilemez", "Sadece yavrular haczedilemez", "Sadece analar haczedilemez", "İkisi de serbestçe haczedilebilir", "Sadece 3 aylıktan küçük yavrular haczedilemez"],
  a: 0,
  e: "Hayvan hacizlerinde, anaları tarafından beslenme ve bakılmaya muhtaç olan hayvan YAVRULARI ANALARINDAN AYRI haczedilemeyeceği gibi bunların ANALARI DA YAVRULARINDAN AYRI HACZEDİLEMEZ.",
  t: "Haczedilemeyen Mallar", d: 3
},

/* ---------- HACZE İŞTİRAK ---------- */
{
  q: "Hacze adi (takipli) iştirak şartları arasında aşağıdakilerden hangisi vardır?",
  o: ["İştirak etmek isteyen alacaklının alacağı, ilk haciz sahibinin takip talep tarihinden veya davanın açıldığı tarihten daha önce doğmalıdır", "İştirak etmek isteyen alacaklının takip başlatması gerekmez", "Alacağın daha sonra doğması yeterlidir", "Adi senetle iştirak edilebilir", "İştirak talebi satıştan önce yapılmalıdır"],
  a: 0,
  e: "Adi iştirak şartları: iştirak eden de takip başlatmalı ve takip KESİNLEŞMELİ; alacağı ilk haciz sahibinin TAKİP TALEP TARİHİNDEN veya DAVANIN AÇILDIĞI TARİHTEN DAHA ÖNCE DOĞMALI; bunu kanunda sayılan belgelerle ispat etmeli; talep en son satılan malların bedeli icra dairesinin banka hesabına girinceye kadar yapılmalıdır.",
  t: "Hacze İştirak", d: 3
},
{
  q: "Hacze adi iştirak için gerekli belgeler arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["İmzası borçlu tarafından ikrar edilmiş adi senet", "İlam", "Düzenleme veya onaylama biçimindeki noter senedi", "Borç ödemeden kesin aciz belgesi", "Kesin rehin açığı belgesi"],
  a: 0,
  e: "YALNIZCA İMZASI BORÇLU TARAFINDAN İKRAR EDİLMİŞ ADİ SENETLE HACZE İŞTİRAK TALEP EDİLEMEZ. Gerekli belgeler: ilam, düzenleme/onaylama biçiminde noter senedi, resmi dairelerce düzenlenen belge ve makbuzlar, borç ödemeden kesin aciz belgesi, kesin rehin açığı belgesi.",
  t: "Hacze İştirak", d: 3
},
{
  q: "Aşağıdakilerden hangisi imtiyazlı (takipsiz) iştirakçiler arasında YER ALMAZ?",
  o: ["Borçlunun kardeşi", "Borçlunun eşi", "Borçlunun reşit çocukları", "Borçlunun vasisi veya kayyımı olduğu kişiler", "İlama bağlı nafaka alacaklısı"],
  a: 0,
  e: "BORÇLUNUN KARDEŞİ ve İLAMA BAĞLI OLMAYAN nafaka alacaklıları imtiyazlı iştirak talebinde BULUNAMAZLAR. İmtiyazlı iştirakçiler: borçlunun eşi, çocukları, vasisi/kayyımı olduğu kişiler, ölünceye kadar bakma alacaklısı ve ilama bağlı nafaka alacaklısı.",
  t: "Hacze İştirak", d: 2
},
{
  q: "Maaş ve ücret hacizlerinde hacze iştirak talep edilebilir mi?",
  o: ["Edilemez; çünkü maaş ve ücretlerin ancak bir kısmı haczedilebilir", "Edilebilir; sadece adi iştirak mümkündür", "Edilebilir; sadece imtiyazlı iştirak mümkündür", "Edilebilir; her iki tür iştirak mümkündür", "Sadece nafaka alacaklıları iştirak edebilir"],
  a: 0,
  e: "MAAŞ VE ÜCRETLERİN ANCAK BİR KISMI haczedilebildikleri için bu hacizlerde HACZE İŞTİRAK TALEP EDİLEMEZ.",
  t: "Hacze İştirak", d: 3
},

/* ---------- TAKSİTLE ÖDEME ---------- */
{
  q: "Hacizden ÖNCE borcun taksitle ödenmesi için aranan tek şart nedir?",
  o: ["Alacaklının rızası", "İcra dairesinin onayı", "İcra mahkemesinin kararı", "İlk taksitin peşin ödenmesi", "Borca yetecek malın haczedilmiş olması"],
  a: 0,
  e: "Hacizden ÖNCEKİ dönemde borcun taksitle ödenebilmesi için TEK ŞART ALACAKLININ RIZASIDIR. Taraflar diledikleri taksit sayısında sözleşme yapabilirler. Hacizden SONRA ise alacaklının rızası ARANMAZ.",
  t: "Taksitle Ödeme", d: 2
},
{
  q: "Hacizden sonra borcun taksitle ödenmesinin şartları arasında aşağıdakilerden hangisi vardır?",
  o: ["Her taksit miktarı toplam borcun 1/4'ünden az olmamalı ve kalan taksitler aydan aya en fazla 3 ay içinde bitirilmeli", "Her taksit toplam borcun 1/10'undan az olmamalı", "Taksitler 1 yıl içinde bitirilmeli", "Alacaklının rızası şarttır", "Alacaklı satış talebinde bulunmuş olmalı"],
  a: 0,
  e: "Hacizden sonra taksitle ödeme şartları: borca yetecek mal HACZEDİLMİŞ olmalı, alacaklı HENÜZ SATIŞ TALEBİNDE BULUNMAMIŞ olmalı, her taksit toplam borcun 1/4'ÜNDEN AZ OLMAMALI, İLK TAKSİT PEŞİN ödenmeli ve kalan taksitler aydan aya EN FAZLA 3 AY içinde bitirilmeli.",
  t: "Taksitle Ödeme", d: 3
},
{
  q: "Satış talep etme sürelerinin işlemeyeceği haller arasında aşağıdakilerden hangisi YER ALMAZ?",
  o: ["Kesin haciz boyunca", "10 yılı aşmayan borcun taksitle ödenmesi sözleşmeleri boyunca", "Geçici haciz boyunca", "İhtiyati haciz boyunca", "İstihkak davası boyunca"],
  a: 0,
  e: "Satış talep etme sürelerinin işlemeyeceği haller: 10 YILI AŞMAYAN borcun taksitle ödenmesi sözleşmeleri, GEÇİCİ HACİZ, İHTİYATİ HACİZ ve İSTİHKAK DAVASI boyunca. KESİN HACİZDE süre işler.",
  t: "Taksitle Ödeme", d: 3
},
{
  q: "Borçlu icra dairesi huzurunda taksitle ödeme taahhüdüne uymazsa hangi suçu işlemiş sayılır ve cezası nedir?",
  o: ["Taahhüdü ihlal suçu; 3 ayı geçmemek üzere hapisle tazyik", "Mal beyanında bulunmama suçu; 1 yıla kadar hapis", "Taahhüdü ihlal suçu; 3 aydan 1 yıla kadar hapis", "Dolandırıcılık suçu; 2 yıla kadar hapis", "Hiçbir suç oluşmaz"],
  a: 0,
  e: "Borçlu taksitle ödeme taahhüdüne uymaz ve taksitlerini zamanında ödemezse TAAHHÜDÜ İHLAL SUÇU işlemiş sayılır. Bundan dolayı borçluya 3 AYI GEÇMEMEK ÜZERE HAPİSLE TAZYİK cezası verilebilir.",
  t: "Taksitle Ödeme", d: 3
}

]);

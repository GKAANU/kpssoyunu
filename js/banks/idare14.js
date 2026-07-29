/* İdare Hukuku — 14. bölüm (YD itiraz mercileri, duruşma, ilk inceleme,
   kanun yolları: istinaf, temyiz, kanun yararına temyiz, yargılamanın
   yenilenmesi, karşılaştırmalı yargılama usulleri) */
KPSS.registerBank('idare', [
{
  q: "Danıştay idari dava dairesince verilen yürütmenin durdurulması kararına itiraz nereye yapılır?",
  o: ["Danıştay İdari Dava Daireleri Kuruluna 7 gün içinde", "Danıştay Genel Kuruluna 30 gün içinde", "Bölge idare mahkemesine 7 gün içinde", "Vergi Dava Daireleri Kuruluna", "İtiraz edilemez"],
  a: 0,
  e: "YD kararına itiraz mercileri (hepsinde süre 7 GÜNDÜR): İDARE/VERGİ MAHKEMELERİ ile TEK HAKİM kararlarına karşı → BİM; BİM tarafından verilmişse → EN YAKIN BİM; DANIŞTAY İDARİ DAVA DAİRESİNCE verilmişse → DANIŞTAY İDARİ DAVA DAİRELERİ KURULUNA; DANIŞTAY VERGİ DAVA DAİRESİNCE verilmişse → DANIŞTAY VERGİ DAVA DAİRELERİ KURULUNA.",
  t: "YD İtiraz", d: 3
},
{
  q: "Yürütmenin durdurulması itirazı üzerine merci kaç gün içinde karar verir ve bu karar nasıldır?",
  o: ["Yedi gün içinde karar verir, karar kesindir", "Otuz gün içinde karar verir, karar temyiz edilir", "On beş gün içinde karar verir, karar kesin değildir", "Altmış gün içinde karar verir, itiraz edilebilir", "Süre yoktur, karar kesin değildir"],
  a: 0,
  e: "İTİRAZ EDİLEN MERCİLER, DOSYANIN KENDİSİNE GELİŞİNDEN İTİBAREN 7 GÜN İÇİNDE KARAR VERMEK ZORUNDADIR. İTİRAZ ÜZERİNE VERİLEN KARARLAR KESİNDİR. Ayrıca İSTİNAF VE TEMYİZ İNCELEMESİ sırasında YD istemleri hakkında verilen kararlar KESİNDİR, İTİRAZ EDİLEMEZ.",
  t: "YD İtiraz", d: 3
},
{
  q: "Yürütmenin durdurulması kararına itiraz hangi yargılama usulünde mümkün değildir?",
  o: ["İvedi yargılama ve merkezi sınav usulünde", "Genel yargılama usulünde", "Vergi davalarına ilişkin usulde", "Tam yargı davalarına ilişkin usulde", "Tüm usullerde itiraz mümkündür"],
  a: 0,
  e: "İVEDİ YARGILAMA USULÜNÜN UYGULANDIĞI İŞLER İLE MERKEZÎ VE ORTAK SINAVLARA İLİŞKİN YARGILAMA USULÜNÜN UYGULANDIĞI DURUMLARDA YÜRÜTMENİN DURDURULMASI TALEBİNE İLİŞKİN OLARAK VERİLECEK KARARLARA İTİRAZ EDİLEMEZ.",
  t: "YD İtiraz", d: 3
},
{
  q: "BİM'in istinaf makamı sıfatıyla verdiği yürütmenin durdurulması kararına karşı ne yapılabilir?",
  o: ["İtiraz edilemez, karar kesindir", "En yakın BİM'e itiraz edilebilir", "Danıştay'a itiraz edilebilir", "Yedi gün içinde temyiz edilebilir", "Dava daireleri kuruluna gidilebilir"],
  a: 0,
  e: "BİM'İN İSTİNAF MAKAMI SIFATIYLA VERDİĞİ YD VEYA YD İSTEMİNİN REDDİ KARARLARINA KARŞI İTİRAZ EDİLEMEZ. İtiraz edilebilen, BİM'İN İLK DERECE MAHKEMESİNİN YERİNE GEÇEREK baktığı davada verdiği YD kararlarıdır: idare/vergi mahkemelerindeki üç kişilik kurulun İKİ VEYA ÜÇ ÜYESİ hakkında HAKİMİN REDDİ istemi veya ÇEKİNME istemi olursa bu talep BİM tarafından karara bağlanır; BİM talepleri kabul ederse BU KURULUN YERİNE GEÇEREK davayı görür. Bu davada verdiği YD kararlarına EN YAKIN BİM'e itiraz edilebilir.",
  t: "YD İtiraz", d: 3
},
{
  q: "İdare ve vergi mahkemelerinde tam yargı davasında duruşma, taraf isteği üzerine hangi parasal sınırın üzerinde zorunludur?",
  o: ["270 bin Türk lirası", "31 bin Türk lirası", "920 bin Türk lirası", "275 bin Türk lirası", "Parasal sınır aranmaz"],
  a: 0,
  e: "İlk derece mahkemesi olarak Danıştay ile idare ve vergi mahkemelerinde açılan İPTAL DAVALARI ve 270 BİN TÜRK LİRASINI (2024 yılı için) AŞAN TAM YARGI DAVALARI ile tarh edilen vergi, resim, harçlar ve zam-cezaları TOPLAMI 270 BİN TL'Yİ AŞAN VERGİ DAVALARINDA, TARAFLARDAN BİRİNİN İSTEĞİ ÜZERİNE DURUŞMA YAPILIR. MAHKEME VE HAKİM DE KENDİLİĞİNDEN duruşma yapılmasına karar verebilir; RE'SEN duruşmaya karar verilen durumlarda PARASAL SINIRLAR UYGULANMAZ.",
  t: "Duruşma", d: 3
},
{
  q: "Temyiz ve istinafta duruşma yapılması neye bağlıdır?",
  o: ["Taraf istemi ve mahkemenin uygun görmesine", "Yalnızca tarafların istemine", "Yalnızca mahkemenin kararına", "Savcının talebine", "Duruşma hiç yapılamaz"],
  a: 0,
  e: "TEMYİZ VE İSTİNAFLARDA DURUŞMA YAPILMASI TARAFLARIN İSTEMİNE VE DANIŞTAY VEYA İLGİLİ BÖLGE İDARE MAHKEMESİ KARARINA BAĞLIDIR (TARAFLARIN TALEBİ YETERLİ DEĞİL, MAHKEMENİN DE UYGUN GÖRMESİ GEREKİR). MAHKEME DE KENDİLİĞİNDEN duruşma yapılmasına karar verebilir.",
  t: "Duruşma", d: 3
},
{
  q: "İdari yargıda duruşma davetiyeleri duruşma gününden en az ne kadar önce gönderilir?",
  o: ["Otuz gün önce", "On beş gün önce", "Yedi gün önce", "Altmış gün önce", "Süre öngörülmemiştir"],
  a: 0,
  e: "DURUŞMA TALEBİ, DAVA DİLEKÇESİ İLE CEVAP VE SAVUNMALARDA YAPILABİLİR. BUNUN DIŞINDA DURUŞMA TALEBİNDE BULUNULABİLMESİ MÜMKÜN DEĞİLDİR. DURUŞMA DAVETİYELERİ DURUŞMA GÜNÜNDEN EN AZ OTUZ GÜN ÖNCE TARAFLARA GÖNDERİLİR.",
  t: "Duruşma", d: 3
},
{
  q: "İdari yargıda duruşmanın yürütülmesi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Taraflara ikişer defa söz verilir", "Taraflara birer defa söz verilir", "Duruşma her hâlde gizli yapılır", "Taraflar gelmezse dava reddedilir", "Duruşmayı savcı yönetir"],
  a: 0,
  e: "DURUŞMA AÇIK OLARAK YAPILIR; GENEL AHLAKIN VEYA KAMU GÜVENLİĞİNİN gerekli kıldığı hallerde görevli daire/mahkeme kararı ile duruşmanın bir kısmı veya tamamı GİZLİ yapılır. DURUŞMAYI BAŞKAN YÖNETİR. Duruşmada TARAFLARA İKİŞER DEFA SÖZ VERİLİR. TARAFLARDAN YALNIZ BİRİ GELİRSE ONUN AÇIKLAMALARI DİNLENİR; HİÇ BİRİ GELMEZSE DURUŞMA AÇILMAZ, İNCELEME EVRAK ÜZERİNDE YAPILIR.",
  t: "Duruşma", d: 3
},
{
  q: "Danıştay'da görülen davaların duruşmalarında savcı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Bulunması şarttır, taraflardan sonra düşüncesini açıklar", "Bulunması şart değildir, isterse katılır", "İlk sözü savcı alır, sonra taraflar dinlenir", "Yalnızca vergi davalarında bulunur", "Savcı kararı bizzat verir"],
  a: 0,
  e: "DANIŞTAY'DA GÖRÜLEN DAVALARIN DURUŞMALARINDA SAVCININ BULUNMASI ŞARTTIR. TARAFLAR DİNLENDİKTEN SONRA SAVCI YAZILI DÜŞÜNCESİNİ AÇIKLAR. Bundan sonra TARAFLARA SON OLARAK NE DİYECEKLERİ SORULUR ve duruşmaya son verilir. DURUŞMA YAPILDIKTAN SONRA EN GEÇ 15 GÜN İÇİNDE KARAR VERİLİR.",
  t: "Duruşma", d: 3
},
{
  q: "Dava dilekçeleri üzerinde ilk inceleme ne kadar sürede sonuçlandırılır?",
  o: ["On beş gün içinde", "Otuz gün içinde", "Yedi gün içinde", "Altmış gün içinde", "Süre öngörülmemiştir"],
  a: 0,
  e: "Dava dilekçeleri, DANIŞTAY'DA DAİRE BAŞKANININ GÖREVLENDİRECEĞİ BİR TETKİK HAKİMİ, İDARE VE VERGİ MAHKEMELERİNDE İSE MAHKEME BAŞKANI VEYA GÖREVLENDİRECEĞİ BİR ÜYE tarafından ilk incelemeye tabi tutulur. Kanun, İLK İNCELEME İŞLEMLERİNİN ON BEŞ GÜN İÇİNDE SONUÇLANDIRILMASINI hükme bağlamıştır.",
  t: "İlk İnceleme", d: 3
},
{
  q: "İdari yargıda ilk inceleme sırasında ilk olarak hangi konu incelenir?",
  o: ["Görev ve yetki", "Süre aşımı", "Ehliyet", "Husumet", "İdari merci tecavüzü"],
  a: 0,
  e: "İLK İNCELEME SIRASI: a) GÖREV VE YETKİ, b) İDARİ MERCİ TECAVÜZÜ, c) EHLİYET, d) İDARİ DAVAYA KONU OLACAK KESİN VE YÜRÜTÜLMESİ GEREKEN BİR İŞLEM OLUP OLMADIĞI, e) SÜRE AŞIMI, f) HUSUMET, g) 3. VE 5. MADDELERE UYGUN OLUP OLMADIKLARI.",
  t: "İlk İnceleme", d: 3
},
{
  q: "Kanunla zorunlu kılınan idari başvuru yapılmadan dava açılmışsa hangi karar verilir?",
  o: ["Dilekçenin görevli idari mercie gönderilmesi", "Davanın süre aşımından reddi", "Dilekçenin otuz gün süre verilerek reddi", "Davanın esastan reddi", "Dosyanın işlemden kaldırılması"],
  a: 0,
  e: "İDARİ MERCİ TECAVÜZÜ: KANUNLA ZORUNLU KILINAN BİR İDARİ BAŞVURU YAPILMADAN DAVA AÇILMASI halinde DİLEKÇENİN GÖREVLİ İDARİ MERCİE GÖNDERİLMESİNE karar verilir. Bu karara karşı İSTİNAF/TEMYİZ YOLU AÇIKTIR.",
  t: "İlk İnceleme", d: 3
},
{
  q: "Dava ehliyeti olan kişinin avukat olmayan vekili tarafından dava açılması hâlinde hangi karar verilir?",
  o: ["Otuz gün süre verilerek dilekçenin reddi", "Davanın ehliyet yönünden reddi", "Davanın gerçek hasma tebliği", "Davanın esastan incelenmesi", "Dosyanın işlemden kaldırılması"],
  a: 0,
  e: "DAVA AÇMA EHLİYETİ OLAN ŞAHSIN AVUKAT OLMAYAN VEKİLİ TARAFINDAN DAVA AÇILMASI halinde 30 GÜN İÇİNDE BİZZAT VEYA BİR AVUKAT VASITASIYLA DAVA AÇILMAK ÜZERE DİLEKÇENİN REDDİNE karar verilir; bu karara karşı İSTİNAF/TEMYİZ YOLU KAPALIDIR. (DAVA AÇMA EHLİYETİ BULUNMAYAN kişinin dava açması halinde ise DAVANIN REDDİNE karar verilir ve istinaf/temyiz yolu AÇIKTIR.)",
  t: "İlk İnceleme", d: 3
},
{
  q: "İlk incelemede hasmın yanlış gösterildiği anlaşılırsa hangi karar verilir?",
  o: ["Davanın gerçek hasma tebliği", "Davanın husumetten reddi", "Dilekçenin reddi", "Davanın açılmamış sayılması", "Dosyanın Danıştay'a gönderilmesi"],
  a: 0,
  e: "HUSUMET — HASMIN (DAVALININ) YANLIŞ GÖSTERİLMESİ halinde DAVANIN GERÇEK HASMA TEBLİĞİNE karar verilir; bu karara karşı İSTİNAF/TEMYİZ YOLU KAPALIDIR. Aynı şekilde İYUK 3. VE 5. MADDELERE AYKIRILIK halinde 30 GÜN İÇİNDE YENİDEN DÜZENLENMEK ÜZERE DİLEKÇENİN REDDİ kararına karşı da istinaf/temyiz yolu KAPALIDIR.",
  t: "İlk İnceleme", d: 3
},
{
  q: "İdare ve vergi mahkemesi kararlarına karşı istinaf yoluna kaç gün içinde başvurulur?",
  o: ["Kararın tebliğinden itibaren otuz gün", "Kararın tebliğinden itibaren on beş gün", "Kararın tebliğinden itibaren altmış gün", "Kararın verilmesinden itibaren yedi gün", "Süre öngörülmemiştir"],
  a: 0,
  e: "İdare ve vergi mahkemelerinin kararlarına karşı, BAŞKA KANUNLARDA FARKLI BİR KANUN YOLU ÖNGÖRÜLMÜŞ OLSA DAHİ, MAHKEMENİN BULUNDUĞU YARGI ÇEVRESİNDEKİ BÖLGE İDARE MAHKEMESİNE, KARARIN TEBLİĞİNDEN İTİBAREN 30 GÜN İÇİNDE istinaf yoluna başvurulabilir.",
  t: "İstinaf", d: 2
},
{
  q: "Konusu kaç TL'yi geçmeyen davalarda idare ve vergi mahkemesi kararları kesin olup istinaf yoluna başvurulamaz?",
  o: ["31 bin Türk lirası", "270 bin Türk lirası", "920 bin Türk lirası", "275 bin Türk lirası", "10 bin Türk lirası"],
  a: 0,
  e: "KONUSU 31 BİN TÜRK LİRASINI GEÇMEYEN; VERGİ DAVALARI, TAM YARGI DAVALARI VE İDARİ İŞLEMLERE KARŞI AÇILAN İPTAL DAVALARI hakkında idare ve vergi mahkemelerince verilen kararlar KESİN OLUP, BUNLARA KARŞI İSTİNAF YOLUNA BAŞVURULAMAZ.",
  t: "İstinaf", d: 3
},
{
  q: "BİM, ilk derece mahkemesi kararını hukuka uygun bulmazsa ne yapar?",
  o: ["Kararı kaldırıp esas hakkında yeniden karar verir", "Kararı bozup Danıştay'a gönderir", "Dosyayı her hâlde ilk derece mahkemesine gönderir", "İstinaf başvurusunu reddeder", "Davanın düşmesine karar verir"],
  a: 0,
  e: "BİM, ilk derece mahkemesi kararını HUKUKA UYGUN BULURSA İSTİNAF BAŞVURUSUNUN REDDİNE karar verir (maddi yanlışlıkların düzeltilmesi mümkünse gerekli düzeltmeyi yaparak AYNI KARARI verir). HUKUKA UYGUN BULMADIĞI TAKDİRDE İSTİNAF BAŞVURUSUNUN KABULÜ İLE İLK DERECE MAHKEMESİ KARARININ KALDIRILMASINA karar verir; bu hâlde BİM İŞİN ESASI HAKKINDA YENİDEN BİR KARAR VERİR.",
  t: "İstinaf", d: 3
},
{
  q: "BİM hangi hâlde işin esasına girmeden dosyayı ilk derece mahkemesine gönderir?",
  o: ["Görevsiz mahkemece davaya bakıldığı anlaşılırsa", "Kararın gerekçesi eksik bulunursa", "Tazminat miktarı hatalı hesaplanmışsa", "Duruşma talebi reddedilmişse", "Her hâlde esasa kendisi girer"],
  a: 0,
  e: "BİM şu hallerde İŞİN ESASINA KENDİSİ GİRMEDEN DOSYAYI İLK DERECE MAHKEMESİNE GÖNDERİR: ▪ İLK İNCELEME KONULARINDA VERDİĞİ KARARIN HATALI OLDUĞU anlaşılmışsa, ▪ GÖREVSİZ VEYA YETKİSİZ MAHKEMECE DAVAYA BAKILDIĞI anlaşılmışsa, ▪ REDDEDİLMİŞ YA DA YASAKLANMIŞ HAKİM TARAFINDAN DAVAYA BAKILDIĞI anlaşılmışsa.",
  t: "İstinaf", d: 3
},
{
  q: "İstinafa konu kararı veren hâkimin aynı davanın istinaf incelemesindeki durumu nedir?",
  o: ["İncelemede bulunamaz", "İncelemede bulunabilir", "Yalnızca başkan olarak bulunabilir", "Tarafların onayıyla bulunabilir", "Yalnızca oy kullanmadan katılır"],
  a: 0,
  e: "İSTİNAF BAŞVURUSUNA KONU EDİLEN KARARI VEREN YA DA KARARA KATILAN HÂKİM, AYNI DAVANIN İSTİNAF YOLUYLA BÖLGE İDARE MAHKEMESİNCE İNCELENMESİNDE BULUNAMAZ. BÖLGE İDARE MAHKEMELERİNİN TEMYİZE AÇIK OLMAYAN KARARLARI KESİNDİR.",
  t: "İstinaf", d: 3
},
{
  q: "Aşağıdaki davalardan hangisinde istinaf yoluna başvurulamaz?",
  o: ["İvedi yargılama usulüne tabi davalarda", "Konusu bir milyon lirayı aşan vergi davalarında", "Düzenleyici işlemlere karşı açılan davalarda", "Memur disiplin cezasına karşı davalarda", "Tam yargı davalarında"],
  a: 0,
  e: "İSTİNAF YOLUNA BAŞVURULAMAYAN HALLER: ▪ İVEDİ YARGILAMA USULÜ ile MERKEZİ VE ORTAK SINAVLARA İLİŞKİN yargılama usulüne tabi olan davalarda, ▪ DANIŞTAY KANUNU'NUN 24. MADDESİ gereği İLK DERECE MAHKEMESİ OLARAK GÖREV YAPAN DANIŞTAY DAİRELERİNİN kararlarına karşı.",
  t: "İstinaf", d: 3
},
{
  q: "Danıştay'da temyiz yoluna kaç gün içinde başvurulur?",
  o: ["Kararın tebliğinden itibaren otuz gün", "Kararın tebliğinden itibaren on beş gün", "Kararın tebliğinden itibaren altmış gün", "Kararın verilmesinden itibaren yedi gün", "Süre öngörülmemiştir"],
  a: 0,
  e: "DANIŞTAY DAVA DAİRELERİNİN İLK DERECE MAHKEMESİ SIFATIYLA VERDİĞİ NİHAİ KARARLARI ile BÖLGE İDARE MAHKEMELERİNİN İSTİNAF İNCELEMESİ SONUCUNDA VERDİĞİ KANUNDA SINIRLI ŞEKİLDE SAYILI BAZI KARARLARI (İYUK m. 46) başka kanunlarda aksine hüküm bulunsa dahi DANIŞTAY'DA, KARARIN TEBLİĞİNDEN İTİBAREN 30 GÜN İÇİNDE TEMYİZ EDİLEBİLİR. İVEDİ YARGILAMA USULÜ ile görülen davalarda verilen kararlara karşı da — istinaf yoluna değil — TEMYİZ yoluna gidilir.",
  t: "Temyiz", d: 3
},
{
  q: "Temyiz süresini geçiren tarafın, karşı tarafın temyizine cevap verirken temyiz isteminde bulunmasına ne ad verilir?",
  o: ["Katılma yoluyla temyiz", "Kanun yararına temyiz", "Karşı temyiz yasağı", "Islah yoluyla temyiz", "Doğrudan temyiz"],
  a: 0,
  e: "İYUK m. 48/3: taraflardan biri kararı temyiz etmişse KARŞI TARAF TEBLİĞ TARİHİNİ İZLEYEN OTUZ GÜN İÇİNDE CEVAP VEREBİLİR. CEVAP VEREN, KARARI SÜRESİNDE TEMYİZ ETMEMİŞ OLSA BİLE DÜZENLEYECEĞİ DİLEKÇESİNDE TEMYİZ İSTEMİNDE BULUNABİLİR; bu takdirde bu dilekçeler TEMYİZ DİLEKÇESİ YERİNE GEÇER. Buna 'KATILMA YOLUYLA TEMYİZ' adı verilir.",
  t: "Temyiz", d: 3
},
{
  q: "Temyiz dilekçesindeki eksiklikler kaç gün içinde tamamlanmazsa temyiz isteminde bulunulmamış sayılır?",
  o: ["On beş gün", "Otuz gün", "Yedi gün", "Altmış gün", "Süre verilmez"],
  a: 0,
  e: "Temyiz dilekçelerinin İYUK m. 3'teki esaslara göre düzenlenmesi gereklidir. NOKSANLIK VARSA, EKSİKLİKLERİN ONBEŞ GÜN İÇİNDE TAMAMLATILMASI hususu kararı veren Danıştay veya BİM'ce ilgiliye tebliğ olunur. BU SÜREDE EKSİKLİKLER TAMAMLANMAZSA TEMYİZ İSTEMİNDE BULUNULMAMIŞ SAYILMASINA karar verilir.",
  t: "Temyiz", d: 3
},
{
  q: "Temyiz dilekçesinde harç ve giderler ödenmemişse tamamlanması için kaç gün süre verilir?",
  o: ["Yedi gün", "On beş gün", "Otuz gün", "Altmış gün", "Süre verilmez"],
  a: 0,
  e: "Temyiz dilekçesi verilirken GEREKLİ HARÇ VE GİDERLERİN TAMAMININ ÖDENMEMİŞ OLMASI halinde kararı veren merci tarafından verilecek YEDİ GÜNLÜK SÜRE içerisinde tamamlanması, AKSİ HALDE TEMYİZDEN VAZGEÇİLMİŞ SAYILACAĞI hususu temyiz edene yazılı bildirilir. Verilen süre içinde tamamlanmazsa ilgili merci KARARIN TEMYİZ EDİLMEMİŞ SAYILMASINA karar verir.",
  t: "Temyiz", d: 3
},
{
  q: "Temyiz isteminin reddi kararına karşı kaç gün içinde temyiz yoluna başvurulabilir?",
  o: ["Yedi gün içinde", "Otuz gün içinde", "On beş gün içinde", "Altmış gün içinde", "Başvurulamaz, karar kesindir"],
  a: 0,
  e: "TEMYİZ İSTEMİNDE BULUNULMAMIŞ SAYILMASI, KARARIN TEMYİZ EDİLMEMİŞ SAYILMASI VE TEMYİZ İSTEMİNİN REDDİ KARARLARINA KARŞI TEBLİĞ TARİHİNİ İZLEYEN GÜNDEN İTİBAREN 7 GÜN İÇİNDE TEMYİZ YOLUNA BAŞVURULABİLİR. Temyizin KANUNİ SÜRE GEÇTİKTEN SONRA yapılması veya KESİN BİR KARAR hakkında olması halinde de kararı veren merci TEMYİZ İSTEMİNİN REDDİNE karar verir.",
  t: "Temyiz", d: 3
},
{
  q: "Aşağıdakilerden hangisi BİM'in temyizi mümkün kararlarından biridir?",
  o: ["Düzenleyici işleme karşı açılan iptal davası kararı", "Konusu otuz bin lirayı geçmeyen vergi davası kararı", "Yürütmenin durdurulması istemine ilişkin karar", "İlk inceleme üzerine verilen dilekçe reddi kararı", "Duruşma talebinin reddine ilişkin karar"],
  a: 0,
  e: "BİM'İN TEMYİZİ MÜMKÜN BAZI KARARLARI: ▪ DÜZENLEYİCİ İŞLEMLERE karşı açılan iptal davaları, ▪ Konusu 920 BİN TL'Yİ AŞAN vergi davaları, tam yargı davaları ve idari işlemler hakkında açılan davalar, ▪ Konusu 275 BİN TL'Yİ AŞIP 920 BİN TL'Yİ AŞMAYAN ve istinafta KALDIRMA KARARI ÜZERİNE YENİDEN KARAR VERİLEN davalar, ▪ BELLİ BİR MESLEKTEN, KAMU GÖREVİNDEN VEYA ÖĞRENCİLİK STATÜSÜNDEN ÇIKARMA sonucunu doğuran işlemlere karşı iptal davaları, ▪ BELLİ BİR TİCARİ FAALİYETİN İCRASINI süresiz veya OTUZ GÜN YAHUT DAHA UZUN süreyle engelleyen işlemlere karşı iptal davaları.",
  t: "Temyiz", d: 3
},
{
  q: "Temyizde karar hukuka uygun bulunmakla birlikte gerekçesi eksik bulunursa ne yapılır?",
  o: ["Gerekçesi değiştirilerek onanır", "Bozulup mercie geri gönderilir", "Düzeltilerek kesinleştirilir", "Yeniden yargılama yapılır", "Dosya Genel Kurula gönderilir"],
  a: 0,
  e: "Temyiz incelemesinde KARAR HUKUKA UYGUN BULUNURSA: ▪ KARAR ONANIR. ▪ Kararın SONUCU HUKUKA UYGUN OLMAKLA BİRLİKTE GÖSTERİLEN GEREKÇEYİ DOĞRU BULMAZ VEYA EKSİK BULURSA, kararı GEREKÇESİNİ DEĞİŞTİREREK ONAR. ▪ Kararda YENİDEN YARGILAMA YAPILMASINA İHTİYAÇ DUYULMAYAN MADDİ HATALAR ile düzeltilmesi mümkün eksiklik veya yanlışlıklar varsa KARARI DÜZELTEREK ONAR.",
  t: "Temyiz", d: 3
},
{
  q: "BİM Danıştay'ın bozma kararına uymayıp ısrar ederse ısrar kararının temyizi nerede incelenir?",
  o: ["İdari veya Vergi Dava Daireleri Kurulunda", "Kararı bozan aynı Danıştay dairesinde", "Danıştay Başkanlar Kurulunda", "Danıştay Genel Kurulunda", "Uyuşmazlık Mahkemesinde"],
  a: 0,
  e: "BÖLGE İDARE MAHKEMESİ, Danıştayca verilen BOZMA KARARINA UYABİLECEĞİ GİBİ KARARINDA ISRAR DA EDEBİLİR. Bölge idare mahkemesi bozmaya uymayarak ısrar ederse, ISRAR KARARININ TEMYİZİ hâlinde talep, konusuna göre DANIŞTAY İDARİ VEYA VERGİ DAVA DAİRELERİ KURULUNCA incelenir ve karara bağlanır. DANIŞTAY İDARİ VE VERGİ DAVA DAİRELERİ KURULLARI KARARLARINA UYULMASI ZORUNLUDUR.",
  t: "Temyiz", d: 3
},
{
  q: "Danıştay dairelerinin ilk derece olarak baktığı davalarda bozma kararına karşı ısrar yetkisi var mıdır?",
  o: ["Yoktur, inceleme doğrudan kurullarca yapılır", "Vardır, daire kararında ısrar edebilir", "Yalnızca vergi dairelerinde vardır", "Başkanlar Kurulu kararıyla mümkündür", "Genel Kurul kararıyla mümkündür"],
  a: 0,
  e: "DANIŞTAY DAİRELERİNİN İLK DERECE MAHKEMESİ OLARAK BAKTIĞI DAVALARIN TEMYİZ İNCELEMESİ DOĞRUDAN İDARİ VEYA VERGİ DAVA DAİRELERİ KURULLARINCA YAPILDIĞINDAN, DANIŞTAY DAİRELERİNİN TEMYİZ İNCELEMESİ SONUCUNDA VERİLEN BOZMA KARARI KARŞISINDA ISRAR ETME YETKİSİ BULUNMAMAKTADIR. Temyiz sonucu verilen karar dosyayla birlikte kararı veren mercie gönderilir ve dosyanın geldiği tarihten itibaren YEDİ GÜN içinde taraflara tebliğe çıkarılır.",
  t: "Temyiz", d: 3
},
{
  q: "Kanun yararına temyiz yoluna kim başvurabilir ve süresi ne kadardır?",
  o: ["Danıştay Başsavcısı; süre öngörülmemiştir", "Taraflar; otuz gün içinde", "Danıştay Başkanı; altmış gün içinde", "Adalet Bakanı; bir yıl içinde", "İlgili bakanlık; on beş gün içinde"],
  a: 0,
  e: "İdare ve vergi mahkemeleri ile BİM'lerin KESİN OLARAK VERDİĞİ KARARLAR ile İSTİNAF VEYA TEMYİZ İNCELEMESİNDEN GEÇMEDEN KESİNLEŞMİŞ bulunan kararlardan, NİTELİĞİ BAKIMINDAN YÜRÜRLÜKTEKİ HUKUKA AYKIRI BİR SONUCU İFADE EDENLER, İLGİLİ BAKANLIKLARIN GÖSTERECEĞİ LÜZUM ÜZERİNE VEYA KENDİLİĞİNDEN DANIŞTAY BAŞSAVCISI TARAFINDAN KANUN YARARINA TEMYİZ OLUNABİLİR. KANUN YARARINA TEMYİZ BAŞVURUSU İÇİN HERHANGİ BİR SÜRE ÖNGÖRÜLMEMİŞTİR.",
  t: "Kanun Yararına Temyiz", d: 3
},
{
  q: "Kanun yararına bozma kararının kesinleşmiş karara etkisi nedir?",
  o: ["Hukuki sonuçlarını kaldırmaz, Resmi Gazete'de yayımlanır", "Kesinleşmiş kararı bütünüyle ortadan kaldırır", "Yalnızca taraflar arasında sonuç doğurur", "Yeniden yargılama yapılmasını zorunlu kılar", "Dosyanın işlemden kaldırılmasını gerektirir"],
  a: 0,
  e: "Kanun yararına temyiz isteği yerinde görüldüğü takdirde KARAR, KANUN YARARINA BOZULUR. BU BOZMA KARARI, DAHA ÖNCE KESİNLEŞMİŞ OLAN MERCİİ KARARININ HUKUKİ SONUÇLARINI KALDIRMAZ. BOZMA KARARININ BİR ÖRNEĞİ İLGİLİ BAKANLIĞA GÖNDERİLİR VE RESMİ GAZETE'DE YAYIMLANIR.",
  t: "Kanun Yararına Temyiz", d: 3
},
{
  q: "Yargılamanın yenilenmesi talebi hangi mahkemece karara bağlanır ve genel süre nedir?",
  o: ["Esas kararı veren mahkemece; altmış gün", "Danıştay tarafından; otuz gün", "Bölge idare mahkemesince; altmış gün", "Danıştay tarafından; bir yıl", "Uyuşmazlık Mahkemesince; altmış gün"],
  a: 0,
  e: "Kanunda sınırlı olarak sayılmış nedenlere dayalı olarak KESİNLEŞMİŞ HÜKMÜN KALDIRILMASINI ve davanın 'YENİDEN TETKİKİNİ' sağlayan olağanüstü yasa yoluna 'YARGILAMANIN İADESİ' ya da 'YARGILAMANIN YENİLENMESİ' denir. YARGILAMANIN YENİLENMESİ TALEPLERİ ESAS KARARI VERMİŞ OLAN MAHKEMECE KARARA BAĞLANIR. SÜRE KURAL OLARAK 60 GÜNDÜR.",
  t: "Yargılamanın Yenilenmesi", d: 3
},
{
  q: "Aşağıdakilerden hangisi yargılamanın yenilenmesi sebeplerinden biridir?",
  o: ["Bilirkişinin kasten gerçeğe aykırı beyanda bulunması", "Kararın gerekçesinin yetersiz bulunması", "Tazminat miktarının hatalı hesaplanması", "Duruşma talebinin reddedilmiş olması", "Yeni bir kanunun yürürlüğe girmesi"],
  a: 0,
  e: "YARGILAMANIN YENİLENMESİ SEBEPLERİ: 1) ZORLAYICI SEBEPLER veya lehine karar verilen tarafın eyleminden doğan sebeple ELDE EDİLEMEYEN BİR BELGENİN SONRADAN ELE GEÇİRİLMESİ, 2) Karara esas alınan belgenin SAHTELİĞİNE HÜKMEDİLMESİ, 3) Karara esas alınan İLAM HÜKMÜNÜN BOZULARAK ORTADAN KALKMASI, 4) BİLİRKİŞİNİN KASITLA GERÇEĞE AYKIRI BEYANDA BULUNMASI, 5) Lehine karar verilenin HİLE KULLANMASI, 6) VEKİL VEYA KANUNİ TEMSİLCİ OLMAYAN kimselerle davanın görülmesi, 7) ÇEKİNMEYE MECBUR başkan/üye/hakimin KATILMASIYLA karar verilmesi, 8) AYNI DAVA HAKKINDA AYKIRI KARAR verilmesi, 9) AİHM kararıyla SÖZLEŞME İHLALİNİN tespiti.",
  t: "Yargılamanın Yenilenmesi", d: 3
},
{
  q: "AİHM'in ihlal kararına dayanan yargılamanın yenilenmesi talebi hangi süre içinde yapılır?",
  o: ["Kararın kesinleştiği tarihten itibaren bir yıl", "Kararın kesinleştiği tarihten itibaren on yıl", "Kararın tebliğinden itibaren altmış gün", "Kararın tebliğinden itibaren beş yıl", "Süre öngörülmemiştir"],
  a: 0,
  e: "Yargılamanın yenilenmesi süresi kural olarak 60 GÜNDÜR. FAKAT: ▪ TARAFLARI, KONUSU VE SEBEBİ AYNI OLAN bir dava hakkında verilen karara AYKIRI YENİ BİR KARAR verilmiş bulunması durumunda 10 YIL; ▪ Hükmün İNSAN HAKLARINI VE ANA HÜRRİYETLERİ KORUMAYA DAİR SÖZLEŞMENİN veya eki protokollerin İHLÂLİ suretiyle verildiğinin AİHM'İN KESİNLEŞMİŞ KARARIYLA tespit edilmiş olması durumunda KARARIN KESİNLEŞTİĞİ TARİHTEN İTİBAREN 1 YILDIR.",
  t: "Yargılamanın Yenilenmesi", d: 3
},
{
  q: "İvedi yargılama usulünde dava açma süresi ve ilk inceleme süresi ne kadardır?",
  o: ["30 gün ve 7 gün", "60 gün ve 15 gün", "30 gün ve 15 gün", "15 gün ve 7 gün", "10 gün ve 7 gün"],
  a: 0,
  e: "İVEDİ YARGILAMA USULÜ: DAVA AÇMA SÜRESİ 30 GÜN, İLK İNCELEME SÜRESİ 7 GÜN, SAVUNMA SÜRESİ 15 GÜN (bir defaya mahsus 15 gün uzatılabilir), 2. DİLEKÇE/SAVUNMA YOK, YD KARARLARINA İTİRAZ YOK, dava dosyanın tekemmülünden itibaren 1 AY içinde karara bağlanır, İSTİNAF YOK, TEMYİZE BAŞVURU 15 GÜN, temyizin karara bağlanması 2 AY.",
  t: "Yargılama Usulleri", d: 3
},
{
  q: "Merkezi ve ortak sınavlara ilişkin yargılama usulünde dava açma süresi ne kadardır?",
  o: ["On gün", "Otuz gün", "On beş gün", "Altmış gün", "Beş gün"],
  a: 0,
  e: "MERKEZİ VE ORTAK SINAVLARA İLİŞKİN YARGILAMA USULÜ (MEB ile ÖSYM tarafından yapılan merkezî ve ortak sınavlar, bunlara ilişkin iş-işlemler ve sınav sonuçları hakkında açılan davalar): DAVA AÇMA SÜRESİ 10 GÜN, İLK İNCELEME 7 GÜN, SAVUNMA SÜRESİ 3 GÜN (bir defaya mahsus 3 gün uzatılabilir), 2. DİLEKÇE YOK, YD İTİRAZI YOK, dava tekemmülden itibaren 15 GÜN içinde karara bağlanır, İSTİNAF YOK, TEMYİZ 5 GÜN, temyizin karara bağlanması 15 GÜN.",
  t: "Yargılama Usulleri", d: 3
},
{
  q: "Genel yargılama usulünde dava, dosyanın tekemmülünden itibaren ne kadar sürede karara bağlanır?",
  o: ["Altı ay içinde", "Bir ay içinde", "On beş gün içinde", "Bir yıl içinde", "Üç ay içinde"],
  a: 0,
  e: "GENEL YARGILAMA USULÜ: DAVA AÇMA SÜRESİ 60 GÜN (vergide 30), İLK İNCELEME 15 GÜN, SAVUNMA SÜRESİ 30 GÜN (bir defaya mahsus 30 gün uzatılabilir), 2. DİLEKÇE/SAVUNMA VAR, YD KARARLARINA İTİRAZ VAR (7 gün), dava dosyanın TEKEMMÜLÜNDEN İTİBAREN 6 AY içinde karara bağlanır, İSTİNAF VAR (30 gün), TEMYİZE BAŞVURU 30 GÜN.",
  t: "Yargılama Usulleri", d: 3
},
{
  q: "Aşağıdakilerden hangisi ivedi yargılama usulüne tabi işlerden biridir?",
  o: ["Acele kamulaştırma işlemleri", "Memur disiplin cezaları", "Belediye meclisi kararları", "Vergi tarh işlemleri", "Kamu görevlisi atama işlemleri"],
  a: 0,
  e: "İVEDİ YARGILAMA USULÜ (İYUK 20/A) şu işlemlerden doğan uyuşmazlıklarda uygulanır: a) İHALEDEN YASAKLAMA KARARLARI HARİÇ İHALE İŞLEMLERİ, b) ACELE KAMULAŞTIRMA İŞLEMLERİ, c) ÖZELLEŞTİRME YÜKSEK KURULU kararları, d) 2634 sayılı TURİZMİ TEŞVİK KANUNU uyarınca yapılan SATIŞ, TAHSİS VE KİRALAMA işlemleri, e) 2872 sayılı ÇEVRE KANUNU uyarınca (idari yaptırım kararları hariç) ÇEVRESEL ETKİ DEĞERLENDİRMESİ sonucu alınan kararlar, f) 6306 sayılı AFET RİSKİ ALTINDAKİ ALANLARIN DÖNÜŞTÜRÜLMESİ Hakkında Kanun uyarınca alınan CUMHURBAŞKANI KARARLARI.",
  t: "Yargılama Usulleri", d: 3
},
{
  q: "Danıştay, bölge idare, idare ve vergi mahkemelerinde dosyalar ne kadar sürede sonuçlandırılır?",
  o: ["Tekemmülden itibaren en geç 6 ay", "Tekemmülden itibaren en geç 3 ay", "Tekemmülden itibaren en geç 1 yıl", "Tekemmülden itibaren en geç 30 gün", "Herhangi bir süre öngörülmemiştir"],
  a: 0,
  e: "DANIŞTAY, BÖLGE İDARE, İDARE VE VERGİ MAHKEMELERİNDE DOSYALAR, TEKEMMÜL TARİHİNDEN İTİBAREN EN GEÇ 6 AY İÇİNDE SONUÇLANDIRILIR.",
  t: "Mahkeme Kararları", d: 2
},
{
  q: "Aşağıdakilerden hangisi mahkeme kararlarında bulunması zorunlu hususlardan biridir?",
  o: ["Kararın oybirliği mi oyçokluğu mu olduğu", "Dinlenen tanıkların ad ve adresleri", "Duruşmada alınan teminatın tutarı", "Bilirkişiye ödenen ücretin dökümü", "Dosyanın arşiv referans numarası"],
  a: 0,
  e: "Mahkeme kararlarında: a) TARAFLARIN ve varsa vekillerinin AD-SOYAD/UNVAN VE ADRESLERİ, b) davacının ileri sürdüğü OLAYLARIN VE HUKUKİ SEBEPLERİN ÖZETİ ile davalının SAVUNMASININ ÖZETİ, c) Danıştay'da TETKİK HAKİMİ VE SAVCININ ad-soyadları ile DÜŞÜNCELERİ, d) DURUŞMA yapılıp yapılmadığı, e) KARARIN DAYANDIĞI HUKUKİ SEBEPLER İLE GEREKÇESİ VE HÜKÜM (tazminat davalarında HÜKMEDİLEN TAZMİNAT MİKTARI), f) YARGILAMA GİDERLERİ VE HANGİ TARAFA YÜKLETİLDİĞİ, g) kararın tarihi ve OYBİRLİĞİ Mİ OYÇOKLUĞU İLE Mİ verildiği, h) BAŞKAN VE ÜYELERİN ad-soyad-imzaları ve varsa KARŞI OYLARI, i) dairenin/mahkemenin adı ve ESAS-KARAR NUMARASI belirtilir.",
  t: "Mahkeme Kararları", d: 3
},
]);

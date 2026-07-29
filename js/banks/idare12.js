/* İdare Hukuku — 12. bölüm (idari yargılama usulünün genel özellikleri,
   idari yargı teşkilatı, Danıştay'ın ilk derece görevleri, iptal davası,
   görev ve yetki kuralları, Uyuşmazlık Mahkemesi, dava açma süreleri) */
KPSS.registerBank('idare', [
{
  q: "İdari yargıda uygulanan yargılama usulünün özelliği nedir?",
  o: ["Yazılıdır; duruşma yapılsa bile tanık dinlenmez", "Sözlüdür; her davada duruşma yapılır", "Yazılıdır; duruşmada tanık dinlenebilir", "Sözlüdür; tanık dinlenmesi zorunludur", "Basit yargılama usulü uygulanır"],
  a: 0,
  e: "İdari yargıda YAZILI YARGILAMA USULÜ uygulanır. İDARİ DAVALAR DURUŞMASIZ OLUR. DURUŞMA, TALEP ÜZERİNE YAPILSA BİLE, duruşmada ancak DOSYADA BULUNAN İDDİA, KANIT VE BELGELERİN AÇIKLANMASI için yapılır. DURUŞMA YAPILSA BİLE TANIK DİNLENMEZ.",
  t: "İdari Yargılama Usulü", d: 2
},
{
  q: "İdari yargıda re'sen inceleme yöntemi ne anlama gelir?",
  o: ["Talep olmasa da delil ve keşif isteyebilmesi", "Dava açılmadan önce inceleme yapabilmesi", "Tarafların hiç delil sunamaması", "Yerindelik denetimi de yapabilmesi", "Kendiliğinden dava açabilmesi"],
  a: 0,
  e: "İdari yargıda RE'SEN İNCELEME YÖNTEMİ uygulanır: MAHKEME, TARAFLARIN TALEBİ OLMASA DA BİLGİ, BELGE, BİLİRKİŞİ VE KEŞİF İSTEYEBİLİR.",
  t: "İdari Yargılama Usulü", d: 2
},
{
  q: "İdari yargı denetiminin sınırı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Hukuka uygunlukla sınırlıdır, yerindelik denetlenemez", "Hem hukukilik hem yerindelik denetlenir", "Yalnızca yerindelik denetimi yapılır", "Mahkeme idare yerine işlem yapabilir", "Takdir yetkisi mahkemece kaldırılabilir"],
  a: 0,
  e: "İdari yargı denetimi HUKUKA UYGUNLUK DENETİMİ İLE SINIRLIDIR. YARGI YETKİSİ, HİÇBİR SURETLE YERİNDELİK DENETİMİ ŞEKLİNDE KULLANILAMAZ. Yürütme görevinin kanunlarda gösterilen şekil ve esaslara uygun yerine getirilmesini KISITLAYACAK, İDARİ EYLEM VE İŞLEM NİTELİĞİNDE VEYA TAKDİR YETKİSİNİ KALDIRACAK BİÇİMDE YARGI KARARI VERİLEMEZ.",
  t: "İdari Yargılama Usulü", d: 2
},
{
  q: "Danıştay daireleri kaç üyeyle toplanır ve daireler arası işbölümünü kim belirler?",
  o: ["Başkan ve dört üyeyle; Başkanlık Kurulu belirler", "Başkan ve iki üyeyle; Başkanlar Kurulu belirler", "Başkan ve altı üyeyle; Genel Kurul belirler", "Başkan ve dört üyeyle; Genel Kurul belirler", "Başkan ve iki üyeyle; Başkanlık Kurulu belirler"],
  a: 0,
  e: "Danıştay 10 DAİREDEN oluşur (1. DAİRE İDARİ DAİRE; VERGİ DAVA DAİRELERİ 3, 7, 9; İDARİ DAVA DAİRELERİ 2, 4, 5, 6, 8, 10). Her dairede bir başkan ve yeteri kadar üye bulunur; DAİRELER BAŞKAN VE DÖRT ÜYE İLE TOPLANIR (1+4). İŞBÖLÜMÜ 'BAŞKANLIK KURULU' tarafından belirlenir; daireler arasındaki GÖREV UYUŞMAZLIKLARI 'BAŞKANLAR KURULU' tarafından çözülür.",
  t: "İdari Yargı Teşkilatı", d: 3
},
{
  q: "Bölge idare mahkemelerinin kaldırılmasına ve yargı çevrelerinin değiştirilmesine kim karar verir?",
  o: ["Adalet Bakanlığının teklifi üzerine HSK", "Doğrudan Adalet Bakanlığı", "Kanunla TBMM", "Cumhurbaşkanlığı kararnamesiyle", "Danıştay Başkanlar Kurulu"],
  a: 0,
  e: "BİM'ler İÇİŞLERİ, HAZİNE VE MALİYE BAKANLIĞI İLE TİCARET BAKANLIKLARININ GÖRÜŞLERİ ALINARAK ADALET BAKANLIĞINCA KURULUR ve yargı çevreleri tespit olunur. KALDIRILMASINA VE YARGI ÇEVRELERİNİN DEĞİŞTİRİLMESİNE ise aynı bakanlıkların görüşü alındıktan sonra ADALET BAKANLIĞININ TEKLİFİ ÜZERİNE HSK TARAFINDAN KARAR VERİLİR. (Aynı usul İDARE VE VERGİ MAHKEMELERİ için de geçerlidir.)",
  t: "İdari Yargı Teşkilatı", d: 3
},
{
  q: "Bölge idare mahkemelerinde kaç daire bulunur ve başkan ile üyeleri kim atar?",
  o: ["En az iki daire; atamayı HSK yapar", "Tek daire; atamayı Adalet Bakanı yapar", "En az üç daire; atamayı Danıştay yapar", "En az iki daire; atamayı Cumhurbaşkanı yapar", "Tek daire; atamayı HSK yapar"],
  a: 0,
  e: "BÖLGE İDARE MAHKEMELERİNDE BİRİ İDARE DİĞERİ VERGİ olmak üzere EN AZ İKİ DAİRE bulunur. Gerekli hâllerde dairelerin sayısı, ADALET BAKANLIĞININ TEKLİFİ ÜZERİNE HSK'CA artırılıp azaltılabilir. Dairelerde bir başkan ile yeteri kadar üye bulunur; BAŞKAN VE ÜYELİKLERİNE HSK TARAFINDAN ATAMA YAPILIR.",
  t: "İdari Yargı Teşkilatı", d: 3
},
{
  q: "Bölge idare mahkemesinin görevi bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["İlk derece mahkemesi değildir, istinaf incelemesi yapar", "İlk derece mahkemesidir, dava doğrudan açılır", "Temyiz mercii olarak görev yapar", "Yalnızca vergi davalarına bakar", "Bünyesinde savcı bulunur"],
  a: 0,
  e: "BİM İLK DERECE MAHKEMESİ DEĞİLDİR; HİÇBİR DAVA DOĞRUDAN BİM'DE AÇILMAZ. TEMEL GÖREVİ İSTİNAF BAŞVURULARINI İNCELEYİP KARARA BAĞLAMAKTIR. Ayrıca kendine bağlı idare ve vergi mahkemeleri arasında oluşacak GÖREV/YETKİ UYUŞMAZLIKLARINI da çözer. BİM'DE SAVCI BULUNMAMAKTADIR.",
  t: "İdari Yargı Teşkilatı", d: 2
},
{
  q: "İdare ve vergi mahkemelerinde hangi parasal sınırın altındaki davalar tek hâkimle karara bağlanır?",
  o: ["270 bin Türk lirası", "31 bin Türk lirası", "920 bin Türk lirası", "275 bin Türk lirası", "Tüm davalar kurul hâlinde görülür"],
  a: 0,
  e: "İdare ve vergi mahkemeleri KURAL OLARAK KURUL HALİNDE (BİR BAŞKAN VE İKİ ÜYE) toplanır ve OY ÇOKLUĞUYLA karar alır. ANCAK PARASAL MİKTARI 270 BİN TÜRK LİRASINI (2024 yılı için) AŞMAYAN DAVALAR TEK HAKİMLE karara bağlanır. İDARE VE VERGİ MAHKEMELERİNDE SAVCI BULUNMAZ.",
  t: "İdari Yargı Teşkilatı", d: 3
},
{
  q: "İdare mahkemesi ile vergi mahkemesi arasındaki temel fark nedir?",
  o: ["İdare genel görevli (60 gün), vergi özel görevli (30 gün)", "İdare özel görevli (30 gün), vergi genel görevli (60 gün)", "İkisi de genel görevlidir ve süre 60 gündür", "İkisi de özel görevlidir ve süre 30 gündür", "İkisinde de dava açma süresi 90 gündür"],
  a: 0,
  e: "İDARE MAHKEMESİ: GENEL GÖREVLİ İLK DERECE MAHKEMESİDİR; GENEL DAVA AÇMA SÜRESİ 60 GÜNDÜR. VERGİ MAHKEMESİ: ÖZEL GÖREVLİ ilk derece mahkemesidir — genel bütçeye, il özel idareleri, belediye ve köylere ait VERGİ, RESİM VE HARÇLAR ile benzeri MALİ YÜKÜMLER ve bunların ZAM VE CEZALARI ile TARİFELERE ilişkin davalara bakar; DAVA AÇMA SÜRESİ 30 GÜNDÜR.",
  t: "İdari Yargı Teşkilatı", d: 2
},
{
  q: "Aşağıdakilerden hangisi Danıştay'ın ilk derece mahkemesi olarak baktığı işlerden biridir?",
  o: ["Cumhurbaşkanı kararları", "Memur disiplin cezaları", "Belediye meclisi kararları", "Vergi tarh işlemleri", "İl encümeni kararları"],
  a: 0,
  e: "DANIŞTAY KANUNU m. 24'e göre Danıştay ilk derece olarak: 1) CUMHURBAŞKANI KARARLARI, 2) CBK DIŞINDAKİ DÜZENLEYİCİ İŞLEMLER, 3) BAKANLIKLAR ile kamu kuruluşları veya meslek kuruluşlarınca çıkarılan ve ÜLKE ÇAPINDA UYGULANACAK düzenleyici işlemler, 4) Danıştay İdari Dairesi/İdari İşler Kurulu kararları üzerine uygulanan işlemler, 5) DANIŞTAY YÜKSEK DİSİPLİN KURULU kararları, 6) BİRDEN ÇOK İDARE VEYA VERGİ MAHKEMESİNİN YETKİ ALANINA GİREN İŞLER, 7) TAHKİM ÖNGÖRÜLMEYEN İMTİYAZ sözleşmelerinden doğan davalar, 8) belediye ve il özel idarelerinin seçimle gelen ORGANLARININ ORGANLIK SIFATLARINI KAYBETMELERİ.",
  t: "Danıştay İlk Derece", d: 3
},
{
  q: "Aşağıdakilerden hangisi özel kanun gereği ilk derece olarak Danıştay'da görülür?",
  o: ["HSK'nın meslekten çıkarma kararına karşı dava", "HSK'nın tüm kararlarına karşı davalar", "Memurların naklen atanmasına karşı davalar", "Belediye encümeni kararlarına karşı davalar", "Trafik para cezalarına karşı davalar"],
  a: 0,
  e: "ÖZEL YASALARDAKİ DÜZENLEMELER: 6087 sayılı HSK Kanunu m. 33/5 — HSK'nın hâkim ve savcılarla ilgili 'MESLEKTEN ÇIKARMA KARARLARINA KARŞI açılan iptal davaları' ilk derece olarak Danıştay'da görülür. 4046 sayılı ÖZELLEŞTİRME KANUNU m. 27(a) — ÖZELLEŞTİRME UYGULAMALARINA ilişkin idari davalar. 6112 sayılı Kanun — OLAĞANÜSTÜ DÖNEMLERDE getirilen YAYIN YASAKLARI. 6491 sayılı TÜRK PETROL KANUNU'na göre bazı davalar.",
  t: "Danıştay İlk Derece", d: 3
},
{
  q: "Danıştay ilk derece mahkemesi olarak baktığı işlerde dava açma süresi ne kadardır?",
  o: ["60 gün", "30 gün", "90 gün", "15 gün", "45 gün"],
  a: 0,
  e: "DANIŞTAY İDARİ YARGIDA TEMYİZ MERCİİDİR; bazı davalara da İLK DERECE MAHKEMESİ olarak bakar. İLK DERECE MAHKEMESİ OLARAK BAKTIĞI İŞLERDE DAVA AÇMA SÜRESİ 60 GÜNDÜR.",
  t: "Danıştay İlk Derece", d: 2
},
{
  q: "İdari işlemin beş unsurundan biri sakat olduğu için menfaati ihlal edilenlerce açılan davaya ne ad verilir?",
  o: ["İptal davası", "Tam yargı davası", "Tespit davası", "Men-i müdahale davası", "Kanun yararına temyiz"],
  a: 0,
  e: "İPTAL DAVASI: İDARİ İŞLEMİN YETKİ, ŞEKİL, SEBEP, KONU VE MAKSAT YÖNLERİNDEN BİRİ VEYA BİRKAÇI NEDENİYLE MENFAATİ İHLAL EDİLENLER TARAFINDAN İŞLEMİN ORTADAN KALDIRILMASI İÇİN AÇILAN DAVADIR.",
  t: "İptal Davası", d: 1
},
{
  q: "İptal davasının objektif niteliğinin sonucu bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Menfaat ihlali yeterlidir, hak ihlali gerekmez", "Hak ihlali şarttır, menfaat yeterli değildir", "Davalının doğru gösterilmesi zorunludur", "İptal kararı yalnızca davacıyı etkiler", "Karar yalnızca geleceğe etkilidir"],
  a: 0,
  e: "İptal davaları OBJEKTİF (NESNEL) NİTELİĞİ AĞIR BASAN davalardır. Sonuçları: ▪ İPTAL DAVASINDA DAVALININ HİÇ GÖSTERİLMEMİŞ OLMASI VEYA YANLIŞ GÖSTERİLMİŞ OLMASI DAVANIN REDDİ SEBEBİ OLARAK GÖRÜLMEZ. ▪ İptal davasının açılabilmesi için MENFAAT İHLALİ YETERLİDİR (HAK İHLALİ ŞART DEĞİL). ▪ İPTAL EDİLEN İŞLEM DÜZENLEYİCİ İŞLEM İSE, İPTAL KARARININ SONUCU GENEL ETKİLİDİR.",
  t: "İptal Davası", d: 3
},
{
  q: "İptal davası açma hakkı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Önceden vazgeçilemez ve kanunla kapatılamaz", "Önceden vazgeçilebilir ve kanunla kapatılabilir", "Önceden vazgeçilemez ama kanunla kapatılabilir", "Önceden vazgeçilebilir ama kanunla kapatılamaz", "Yalnızca yazılı feragatle sona erer"],
  a: 0,
  e: "İPTAL DAVASI AÇMA HAKKI KAMU DÜZENİ İLE İLGİLİDİR. Bu sebeple BU HAKTAN ÖNCEDEN (HAK DOĞMADAN) VAZGEÇMEK MÜMKÜN DEĞİLDİR. Ayrıca İPTAL DAVASI AÇMA HAKKI KANUN İLE KAPATILAMAZ; ANAYASAL BİR HAKTIR.",
  t: "İptal Davası", d: 3
},
{
  q: "İptal davası hangi tür işlemlere karşı açılabilir?",
  o: ["İcrai ve kesin nitelikteki idari işlemlere", "İdarenin her türlü faaliyetine karşı", "İdarenin hazırlık işlemlerine karşı", "İdarenin bilgilendirici işlemlerine karşı", "İdarenin iç yazışmalarına karşı"],
  a: 0,
  e: "İptal davasının konusunu İDARİ İŞLEMLER teşkil eder ve iptal davaları İCRAİ (HUKUKSAL SONUÇ DOĞURAN) VE KESİN İDARİ İŞLEMLER HAKKINDA AÇILIR. İptal davasının amacı İDARİ İŞLEMİN HUKUKA UYGUNLUĞU KARİNESİNİ ÇÜRÜTMEKTİR. Öngörülmüşse ZORUNLU İDARİ BAŞVURU YOLLARININ TÜKETİLMİŞ OLMASI gerekir.",
  t: "İptal Davası", d: 2
},
{
  q: "Görev kurallarının kamu düzenine ilişkin olmasının sonucu nedir?",
  o: ["Mahkeme her aşamada görevini resen araştırır", "Görev yalnızca davalının itirazıyla incelenir", "Taraflar görevli mahkemeyi belirleyebilir", "Görev kuralları kazanılmış hak doğurur", "Görevsizlik bozma sebebi sayılmaz"],
  a: 0,
  e: "GÖREV KAMU DÜZENİNE İLİŞKİNDİR. Sonuçları: ▪ TARAFLAR ANLAŞARAK GÖREVLİ MAHKEMEYİ DEĞİŞTİREMEZLER. ▪ Görevsizlik itirazı yapılsın veya yapılmasın MAHKEME DAVANIN HER AŞAMASINDA RE'SEN görevli olup olmadığını araştırır. ▪ Davanın GÖREVSİZ MAHKEMECE GÖRÜLMESİ kanun yolları bakımından BOZMA SEBEBİDİR. ▪ GÖREV KURALLARI TARAFLAR İÇİN KAZANILMIŞ HAK DOĞURMAZ.",
  t: "Görev Kuralları", d: 3
},
{
  q: "Dava tamamen idari yargının görev alanı dışındaysa hangi karar verilir?",
  o: ["Görevsizlikten reddedilir, dosya gönderilmez", "Görevsizlikten reddedilir, dosya adli yargıya gönderilir", "Dava esastan incelenir", "Dosya Uyuşmazlık Mahkemesine gönderilir", "Dosya Danıştay'a gönderilir"],
  a: 0,
  e: "Açılmış olan dava TAMAMEN İDARİ YARGI KOLUNUN GÖREV ALANI DIŞINDA ise GÖREVSİZLİK KARARI VERİLEREK DAVANIN REDDİNE KARAR VERİLİR. (DOSYA RE'SEN GÖREVLİ ADLİ YARGI YERİNE GÖNDERİLEMEZ.) Buna karşılık dava İDARİ YARGININ GÖREV ALANINA GİRMEKLE BİRLİKTE YANLIŞ İDARİ YARGI YERİNDE açılmışsa, görevsizlik kararı verilir ancak MAHKEME DOSYAYI GÖREVLİ İDARİ YARGI YERİNE GÖNDERİR.",
  t: "Görev Kuralları", d: 3
},
{
  q: "Adli yargıda açılıp görevden reddedilen dava için idari yargıda dava açma süresi ne kadardır?",
  o: ["Görevsizliğin kesinleşmesinden otuz gün", "Görevsizliğin kesinleşmesinden altmış gün", "Görevsizliğin kesinleşmesinden on beş gün", "Süre yoktur, her zaman açılabilir", "Görevsizlikten sonra dava açılamaz"],
  a: 0,
  e: "Danıştay'ın, idare ve vergi mahkemelerinin görevine girdiği halde ADLİ YARGI YERLERİNE açılmış davaların GÖREV NOKTASINDAN REDDİ halinde, GÖREVSİZLİK KARARININ KESİNLEŞMESİNİ İZLEYEN GÜNDEN İTİBAREN 30 GÜN İÇİNDE görevli idari yargı yerinde dava açılabilir. Bu süre içinde açılan dava, 'GÖREVSİZ YARGI YERİNDE DAVANIN AÇILDIĞI TARİHTE' AÇILMIŞ SAYILIR. 30 GÜNLÜK SÜRE GEÇMİŞ OLSA DAHİ İDARİ DAVA AÇMA SÜRESİ HENÜZ DOLMAMIŞSA bu süre içinde dava açılabilir.",
  t: "Görev Kuralları", d: 3
},
{
  q: "Görevsizlik kararı veren mahkemeler aynı BİM'in yargı çevresindeyse uyuşmazlığı kim çözer?",
  o: ["Bölge idare mahkemesi", "Danıştay", "Uyuşmazlık Mahkemesi", "Hâkimler ve Savcılar Kurulu", "Adalet Bakanlığı"],
  a: 0,
  e: "Görevsizlik kararları veren mahkemeler AYNI BÖLGE İDARE MAHKEMESİNİN YARGI ÇEVRESİ İÇİNDE ise görev uyuşmazlığı BÖLGE İDARE MAHKEMESİNCE KESİN OLARAK GİDERİLİR. FARKLI BİM'lerin yargı çevresinde iseler görev uyuşmazlığı DANIŞTAY (BAŞKANLAR KURULU) tarafından kesin olarak giderilir. DANIŞTAY'IN İKİ DAİRESİ ARASINDAKİ görev uyuşmazlıklarını DANIŞTAY BAŞKANLAR KURULU karara bağlar.",
  t: "Görev Uyuşmazlıkları", d: 3
},
{
  q: "İdare mahkemesi, davanın Danıştay'ın görevinde olduğu kanısıyla görevsizlik kararı verirse ne olur?",
  o: ["Dosya Danıştay'a gider; Danıştay'ın kararı kesindir", "Dosya BİM'e gider; BİM'in kararı kesindir", "Dava reddedilir, dosya gönderilmez", "Uyuşmazlık Mahkemesi karar verir", "Danıştay'ın kararına itiraz edilebilir"],
  a: 0,
  e: "İdare ve vergi mahkemeleri davanın Danıştay'ın görevi içinde olduğu kanısı ile görevsizlik kararı verdiklerinde DOSYA DANIŞTAY'A GÖNDERİLİR. DANIŞTAY, KENDİNİ GÖREVLİ GÖRÜRSE DAVAYI SONUÇLANDIRIR; EĞER İDARE VEYA VERGİ MAHKEMESİNİ GÖREVLİ SAYARSA DOSYAYI BU MAHKEMELERE GÖNDERİR. DANIŞTAY'IN GÖREV KONUSUNDA VERDİĞİ KARAR KESİNDİR; idare ve vergi mahkemeleri bu karara UYMAK ZORUNDADIRLAR.",
  t: "Görev Uyuşmazlıkları", d: 3
},
{
  q: "Adli ve idari yargı mercileri arasındaki görev ve hüküm uyuşmazlıklarını kesin olarak çözen merci hangisidir?",
  o: ["Uyuşmazlık Mahkemesi", "Anayasa Mahkemesi", "Danıştay Başkanlar Kurulu", "Yargıtay Hukuk Genel Kurulu", "Hâkimler ve Savcılar Kurulu"],
  a: 0,
  e: "UYUŞMAZLIK MAHKEMESİ, ADLÎ VE İDARÎ YARGI MERCİLERİ ARASINDAKİ GÖREV VE HÜKÜM UYUŞMAZLIKLARINI KESİN OLARAK ÇÖZÜMLEMEYE YETKİLİDİR. ANAYASA MAHKEMESİ İLE DİĞER MAHKEMELER ARASINDAKİ görev uyuşmazlıklarında ANAYASA MAHKEMESİ'NİN KARARI ESAS ALINIR.",
  t: "Uyuşmazlık Mahkemesi", d: 2
},
{
  q: "Uyuşmazlık Mahkemesinin yapısı ve başkanı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Bir başkan, altı asıl üye; başkanı AYM üyesidir", "Bir başkan, on asıl üye; başkanı Yargıtay üyesidir", "Bir başkan, altı asıl üye; başkanı Danıştay üyesidir", "Bir başkan, dört asıl üye; başkanı HSK seçer", "Bir başkan, altı asıl üye; başkanı Cumhurbaşkanı atar"],
  a: 0,
  e: "Uyuşmazlık Mahkemesi BİR BAŞKAN VE ALTI ASIL, ALTI YEDEK ÜYEDEN oluşur. Anayasa bu mahkemenin BAŞKANLIĞINI ANAYASA MAHKEMESİNİN KENDİ ÜYELERİ ARASINDAN GÖREVLENDİRECEĞİ BİR ÜYENİN YAPACAĞINI belirtmiştir. ANAYASA MAHKEMESİ'NİN UYUŞMAZLIK MAHKEMESİ'NE BAŞKAN SEÇECEĞİ ÜYENİN ANAYASA MAHKEMESİ ÜYELİĞİ SONA ERMEZ.",
  t: "Uyuşmazlık Mahkemesi", d: 3
},
{
  q: "Uyuşmazlık Mahkemesi üyeleri kim tarafından seçilir ve görev süresi ne kadardır?",
  o: ["Yargıtay ve Danıştay genel kurullarınca; dört yıl", "Hâkimler ve Savcılar Kurulunca; beş yıl", "Cumhurbaşkanı tarafından; dört yıl", "TBMM tarafından; altı yıl", "Anayasa Mahkemesince; dört yıl"],
  a: 0,
  e: "'YARGITAY HUKUK GENEL KURULU' ile 'DANIŞTAY GENEL KURULU' tarafından KENDİ DAİRE BAŞKANI VE ÜYELERİ ARASINDAN ÜÇER ASIL VE ÜÇER YEDEK ÜYE seçilir. Uyuşmazlık Mahkemesinin BAŞKANI, BAŞKANVEKİLİ VE ÜYELERİ DÖRT YIL İÇİN SEÇİLİR. GÖREV SÜRESİ BİTENLER YENİDEN SEÇİLEBİLİR.",
  t: "Uyuşmazlık Mahkemesi", d: 3
},
{
  q: "Kanunda yetkili yargı yeri gösterilmemişse idari yargıda yetkili mahkeme hangisidir?",
  o: ["İşlemi yapan idarenin bulunduğu yer mahkemesi", "Davacının ikametgahının bulunduğu yer mahkemesi", "Her hâlde Ankara İdare Mahkemesi", "İlk derece olarak Danıştay", "Taşınmazın bulunduğu yer mahkemesi"],
  a: 0,
  e: "GENEL YETKİ KURALI: YASALARDA YETKİLİ İDARİ YARGI YERİNİN BELİRTİLMEMESİ HALİNDE, YETKİLİ İDARİ YARGI YERİ, DAVA KONUSU OLAN İDARİ İŞLEMİ YAPAN İDARİ KURULUŞUN BULUNDUĞU YERDEKİ İDARE MAHKEMESİDİR. ÖZEL YETKİ KURALLARININ BULUNDUĞU DURUMLARDA GENEL YETKİ KURALI UYGULANMAZ.",
  t: "Yetki Kuralları", d: 2
},
{
  q: "Kamu görevlilerinin atanması ve nakilleri ile ilgili davalarda yetkili mahkeme hangisidir?",
  o: ["Yeni veya eski görev yeri mahkemesi", "Yalnızca yeni görev yeri mahkemesi", "Yalnızca eski görev yeri mahkemesi", "Her hâlde Ankara idare mahkemesi", "Görevlinin ikametgahı mahkemesi"],
  a: 0,
  e: "KAMU GÖREVLİLERİNİN ATANMASI VE NAKİLLERİ ile ilgili davalarda yetkili mahkeme, KAMU GÖREVLİLERİNİN YENİ VEYA ESKİ GÖREV YERİ İDARE MAHKEMESİDİR.",
  t: "Yetki Kuralları", d: 3
},
{
  q: "Kamu görevlilerinin görevlerine son verilmesi, emekli edilmeleri ya da görevden uzaklaştırılmaları durumunda yetkili mahkeme hangisidir?",
  o: ["Son görev yaptığı yer mahkemesi", "Yeni görev yeri idare mahkemesi", "Her hâlde Ankara idare mahkemesi", "İkametgahının bulunduğu yer mahkemesi", "İlk derece olarak Danıştay"],
  a: 0,
  e: "KAMU GÖREVLİLERİNİN GÖREVLERİNE SON VERİLMESİ, EMEKLİ EDİLMELERİ YA DA GÖREVDEN UZAKLAŞTIRILMALARI durumunda yetkili mahkeme, KAMU GÖREVLİSİNİN SON GÖREV YAPTIĞI YER İDARE MAHKEMESİDİR.",
  t: "Yetki Kuralları", d: 3
},
{
  q: "Kamu görevlilerinin görevle ilişiğinin kesilmesi sonucunu doğurmayan disiplin cezaları ile yükselme, sicil, intibak ve parasal hakları ile ilgili davalarda yetkili mahkeme hangisidir?",
  o: ["Kamu görevlisinin görevli bulunduğu yer idare mahkemesi", "Son görev yaptığı yer idare mahkemesi", "Yeni veya eski görev yeri idare mahkemesi", "Ankara idare mahkemesi", "Danıştay"],
  a: 0,
  e: "KAMU GÖREVLİLERİNİN GÖREVLE İLİŞİĞİNİN KESİLMESİ SONUCUNU DOĞURMAYAN DİSİPLİN CEZALARI ile YÜKSELME, SİCİL, İNTİBAK VE DİĞER ÖZLÜK VE PARASAL HAKLARI ile ilgili davalarda yetkili mahkeme, KAMU GÖREVLİSİNİN GÖREVLİ BULUNDUĞU YER İDARE MAHKEMESİDİR.",
  t: "Yetki Kuralları", d: 3
},
{
  q: "Hâkim ve savcıların mali-sosyal haklarına ilişkin davalarda yetkili mahkeme hangisidir?",
  o: ["Görev yerine en yakın BİM'in yeri", "Görev yaptığı yerin idare mahkemesi", "Her hâlde Ankara İdare Mahkemesi", "İlk derece mahkemesi olarak Danıştay", "Hâkimler ve Savcılar Kurulu"],
  a: 0,
  e: "HÂKİM VE SAVCILARIN MALİ VE SOSYAL HAKLARINA VE SİCİLLERİNE ilişkin konularla, MÜFETTİŞ HAL KÂĞITLARINA karşı açacakları ve idare mahkemelerinin görevine giren davalarda yetkili mahkeme, HÂKİM VEYA SAVCININ GÖREV YAPTIĞI YERİN İDARİ YARGI YETKİSİ YÖNÜNDEN BAĞLI OLDUĞU BÖLGE İDARE MAHKEMESİNE EN YAKIN BÖLGE İDARE MAHKEMESİNİN BULUNDUĞU YER İDARE MAHKEMESİDİR.",
  t: "Yetki Kuralları", d: 3
},
{
  q: "Taşınır ve taşınmaz mallarla ilgili davalarda yetkili mahkeme hangisidir?",
  o: ["Taşınır/taşınmaz malın bulunduğu yerdeki idare mahkemesi", "İşlemi yapan idarenin bulunduğu yer mahkemesi", "Davacının ikametgahı mahkemesi", "Ankara idare mahkemesi", "Danıştay"],
  a: 0,
  e: "TAŞINIR/TAŞINMAZ MALLARLA İLGİLİ DAVALARDA YETKİLİ MAHKEME, TAŞINIR/TAŞINMAZ MALIN BULUNDUĞU YERDEKİ İDARE MAHKEMESİDİR.",
  t: "Yetki Kuralları", d: 2
},
{
  q: "Askerî hizmete ilişkin işlemlerden doğan uyuşmazlıklarda yetkili mahkeme hangisidir?",
  o: ["Görev yerinin bağlı olduğu BİM'in yeri", "En yakın BİM'in bulunduğu yer mahkemesi", "Her hâlde Ankara İdare Mahkemesi", "Askerî Yüksek İdare Mahkemesi", "İlk derece mahkemesi olarak Danıştay"],
  a: 0,
  e: "MİLLİ SAVUNMA BAKANLIĞI'NDA ÇALIŞAN KAMU PERSONELİ ile askerlik hizmetini yerine getiren YEDEK SUBAY VE YEDEK ASTSUBAYLAR ile ERBAŞ VE ERLERİ ilgilendiren ve ASKERÎ HİZMETE İLİŞKİN idari işlem ve eylemlerden doğan uyuşmazlıklarda İLGİLİNİN GÖREV YAPTIĞI YERİN İDARİ YARGI YETKİSİ YÖNÜNDEN BAĞLI OLDUĞU BÖLGE İDARE MAHKEMESİNİN BULUNDUĞU YERDEKİ İDARE MAHKEMESİ YETKİLİDİR.",
  t: "Yetki Kuralları", d: 3
},
{
  q: "Yetkisizlik kararı veren mahkemeler farklı bölge idare mahkemelerinin yargı çevresinde ise yetki uyuşmazlığı nasıl çözülür?",
  o: ["Danıştayca giderilir", "Bölge idare mahkemesince giderilir", "Uyuşmazlık Mahkemesi çözer", "HSK çözer", "Taraflar anlaşarak belirler"],
  a: 0,
  e: "YETKİSİZLİK KARARI VEREN idare veya vergi mahkemeleri AYNI BÖLGE İDARE MAHKEMESİNİN yargı çevresi içinde iseler yetki uyuşmazlığı BÖLGE İDARE MAHKEMESİNCE karara bağlanır. AYNI BİM'İN YARGI ÇEVRESİ İÇİNDE DEĞİLLERSE YETKİ UYUŞMAZLIĞI DANIŞTAYCA GİDERİLİR. Yetkiye ilişkin itirazlar YARGILAMANIN HER AŞAMASINDA yapılabilir ve mahkeme yetki sorununu KENDİLİĞİNDEN inceler.",
  t: "Yetki Uyuşmazlıkları", d: 3
},
{
  q: "Özel kanunlarında ayrı süre gösterilmeyen hallerde dava açma süresi ne kadardır?",
  o: ["Danıştay ve idarede 60, vergide 30 gün", "Danıştay ve idarede 30, vergide 60 gün", "Her yerde ve her hâlde altmış gün", "Her yerde ve her hâlde otuz gün", "Danıştay'da doksan, diğerlerinde altmış gün"],
  a: 0,
  e: "DAVA AÇMA SÜRESİ, ÖZEL KANUNLARINDA AYRI SÜRE GÖSTERİLMEYEN HALLERDE DANIŞTAYDA VE İDARE MAHKEMELERİNDE ALTMIŞ, VERGİ MAHKEMELERİNDE OTUZ GÜNDÜR.",
  t: "Dava Açma Süreleri", d: 1
},
{
  q: "Bireysel işlemlerde dava açma süresi ne zaman işlemeye başlar?",
  o: ["Yazılı bildirimi izleyen günden itibaren", "İşlemin yapıldığı günden itibaren", "Resmi Gazetede yayımı gününden itibaren", "Her hâlde öğrenme tarihinden itibaren", "Tebliğ tarihinin kendisinden itibaren"],
  a: 0,
  e: "BİREYSEL İŞLEMLERDE, İDARİ UYUŞMAZLIKLARDA dava açma süresi YAZILI BİLDİRİMİ İZLEYEN GÜNDEN İTİBAREN işlemeye başlar.",
  t: "Dava Açma Süreleri", d: 2
},
{
  q: "Adresleri belli olmayanlara yapılan ilanda dava açma süresi ne zaman işlemeye başlar?",
  o: ["Son ilan tarihinden on beş gün sonra", "Son ilan tarihini izleyen günden itibaren", "İlk ilan tarihinden itibaren", "İlandan otuz gün sonra", "Öğrenme tarihinden itibaren"],
  a: 0,
  e: "ADRESLERİ BELLİ OLMAYANLARA yapılan ilanlarda ÖZEL KANUNUNDA AKSİNE BİR HÜKÜM BULUNMADIKÇA SÜRE, SON İLAN TARİHİNİ İZLEYEN GÜNDEN İTİBAREN ON BEŞ GÜN SONRA İŞLEMEYE BAŞLAR.",
  t: "Dava Açma Süreleri", d: 3
},
{
  q: "İlanı gereken düzenleyici işlemlerde dava süresi ne zaman başlar?",
  o: ["İlan ya da yayım tarihini izleyen günden itibaren", "İlan tarihinden on beş gün sonra", "Öğrenme tarihinden itibaren", "İşlemin yapıldığı tarihten itibaren", "Uygulama işlemi yapıldığında"],
  a: 0,
  e: "İLANI GEREKEN DÜZENLEYİCİ İŞLEMLERDE DAVA SÜRESİ, İLAN YA DA YAYIM TARİHİNİ İZLEYEN GÜNDEN İTİBAREN BAŞLAR.",
  t: "Dava Açma Süreleri", d: 2
},
{
  q: "Düzenleyici işleme süresinde dava açılmamışsa, ona dayanan birel işlem yapıldığında ilgili ne yapabilir?",
  o: ["Her ikisine ya da birine karşı dava açabilir", "Yalnızca uygulama işlemine dava açabilir", "Yalnızca düzenleyici işleme dava açabilir", "Hiçbirine dava açamaz", "Yalnızca Kamu Denetçiliğine başvurabilir"],
  a: 0,
  e: "İLAN TARİHİNİ İZLEYEN GÜNDEN İTİBAREN SÜRESİ İÇİNDE DÜZENLEYİCİ İŞLEMİN İPTALİ İÇİN DAVA AÇILMAMIŞ OLSA DA bu düzenleyici işleme dayanılarak BİREL İŞLEM TESİS EDİLMESİ durumunda ilgililer SADECE DÜZENLEYİCİ İŞLEM VEYA SADECE UYGULANAN İŞLEM VEYA HER İKİSİNE BİRDEN iptali için dava açabilir. DÜZENLEYİCİ İŞLEMİN İPTAL EDİLMEMİŞ OLMASI, BU DÜZENLEMEYE DAYALI İŞLEMİN İPTALİNE ENGEL OLMAZ.",
  t: "Dava Açma Süreleri", d: 3
},
{
  q: "Usulüne uygun tebliğ veya ilan edilmemiş işlemlerde dava süresi ne zaman başlar?",
  o: ["Öğrenme tarihinden; aksini idare kanıtlar", "İşlemin yapıldığı tarihten itibaren", "İlan tarihinden itibaren", "Süre hiçbir zaman işlemez", "İdarenin bildirdiği tarihten itibaren"],
  a: 0,
  e: "İLGİLİSİNE TEBLİĞ EDİLEMEYEN BİREYSEL İŞLEMLER veya USULÜNE UYGUN BİÇİMDE İLAN EDİLMEYEN DÜZENLEYİCİ İŞLEMLER için dava süresi 'ÖĞRENME' TARİHİNDEN İTİBAREN BAŞLAR. İlgili ne zaman haberdar olduğunu beyan ederse kural olarak dava süresi bu öğrenme tarihinden başlar. BUNUN AKSİNİ, yani ilgilinin işlemden DAHA ÖNCESİNDEN HABERDAR OLDUĞUNU SOMUT VERİLERLE İDARENİN KANITLAMASI GEREKİR.",
  t: "Dava Açma Süreleri", d: 3
},
{
  q: "Vergi uyuşmazlıklarında tahakkuku tahsile bağlı olan vergilerde dava süresi ne zaman başlar?",
  o: ["Tahsilatı izleyen günden itibaren", "Tebliğ tarihini izleyen günden itibaren", "Tescil tarihini izleyen günden itibaren", "Ödeme tarihini izleyen günden itibaren", "Beyan tarihini izleyen günden itibaren"],
  a: 0,
  e: "Vergi, resim ve harçlar ile benzeri mali yükümler ve bunların zam ve cezalarından doğan uyuşmazlıklarda süre şu tarihleri izleyen günden başlar: ▪ TAHAKKUKU TAHSİLE BAĞLI OLAN vergilerde TAHSİLATIN; ▪ TEBLİĞ YAPILAN hallerde veya tebliğ yerine geçen işlemlerde TEBLİĞİN; ▪ TEVKİF YOLUYLA alınan vergilerde İSTİHKAK SAHİPLERİNE ÖDEMENİN; ▪ TESCİLE BAĞLI vergilerde TESCİLİN yapıldığı; ▪ İDARENİN DAVA AÇMASI GEREKEN konularda İLGİLİ MERCİ VEYA KOMİSYON KARARININ İDAREYE GELDİĞİ tarih.",
  t: "Dava Açma Süreleri", d: 3
},
{
  q: "Dava açma süresinin son günü resmi tatile rastlarsa ne olur?",
  o: ["Tatili izleyen ilk iş günü akşamı biter", "Tatil günü sayısı kadar uzar", "Süre yedi gün uzar", "Tatil günleri baştan hesaba katılmaz", "Süre bir ay uzar"],
  a: 0,
  e: "SÜRENİN HESABINDA KURAL OLARAK RESMİ TATİLLER DÜŞÜLMEZ; TATİL GÜNLERİ DE SÜRENİN HESABINA KATILIR. YALNIZ, SÜRENİN SON GÜNÜNÜN RESMİ TATİLE RASTLAMASI durumunda SÜRE, TATİLİ İZLEYEN İLK İŞ GÜNÜNÜN AKŞAMI ÇALIŞMA SAATİ SONUNDA BİTER.",
  t: "Dava Açma Süreleri", d: 3
},
{
  q: "Dava açma süresinin son günü adli tatile rastlarsa süre ne kadar uzar?",
  o: ["Ara vermenin bitiminden itibaren yedi gün", "Ara vermenin bitiminden itibaren otuz gün", "Ara vermenin bitiminden itibaren on beş gün", "Süre uzamaz", "Süre bir ay uzar"],
  a: 0,
  e: "Sürenin son gününün ÇALIŞMAYA ARA VERME ZAMANINA — ADLİ TATİL — (20 TEMMUZ – 31 AĞUSTOS) rastlaması halinde SÜRE, ARA VERMENİN SONA ERDİĞİ GÜNÜ İZLEYEN TARİHTEN İTİBAREN YEDİ GÜN UZAMIŞ SAYILIR.",
  t: "Dava Açma Süreleri", d: 3
},
]);

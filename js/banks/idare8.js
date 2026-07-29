/* İdare Hukuku — 8. bölüm (kamu hizmetinin görülme usulleri, imtiyaz sözleşmesi,
   idarenin mali sorumluluğu, idari işlemler ve türleri, CBK, yönetmelik) */
KPSS.registerBank('idare', [

/* ---------- GÖRÜLME USULLERİ ---------- */
{
  q: "Emanet usulü nedir?",
  o: ["Bir kamu hizmetinin bu hizmetten sorumlu olan kamu idaresi tarafından kendi personeli ve kendi ekipmanı vasıtasıyla görülmesidir", "Hizmetin özel kişiye gördürülmesidir", "Hizmetin sözleşmeyle devredilmesidir", "Hizmetin ruhsatla özel kişiye bırakılmasıdır", "Hizmetin kâr ve zararının özel kişiye ait olmasıdır"],
  a: 0,
  e: "EMANET USULÜ: bir kamu hizmetinin BU HİZMETTEN SORUMLU OLAN KAMU İDARESİ TARAFINDAN KENDİ PERSONELİ VE KENDİ EKİPMANI VASITASIYLA GÖRÜLMESİDİR. Kamu hizmetinin İDARE TARAFINDAN SUNULMASI yollarından biridir.",
  t: "Kamu Hizmetinin Görülme Usulleri", d: 2
},
{
  q: "Müşterek emanet usulünde sermaye, kâr ve zarar kime aittir?",
  o: ["Sermaye, kâr ve zarar idareye; personel özel kişiye aittir", "Hepsi özel kişiye aittir", "Sermaye özel kişiye, kâr idareye aittir", "Kâr ve zarar özel kişiye, sermaye idareye aittir", "Hepsi idareye aittir"],
  a: 0,
  e: "MÜŞTEREK EMANET USULÜNDE kamu hizmeti FİİLEN ÖZEL KİŞİYE GÖRDÜRÜLMEKTE ancak hizmetin EKONOMİK TÜM YÜK VE NETİCELERİ İDARE TARAFINDAN YÜKLENİLMEKTEDİR: SERMAYE İDARE, KÂR İDARE, ZARAR İDARE, PERSONEL ÖZEL KİŞİ. Özel kişiye gördüğü hizmet karşılığında BİR ÜCRET (ve kâr düzeyine göre EK ÜCRET) ödenir; özel kişi hizmete EMEĞİ VE UZMANLIĞI ile katılır.",
  t: "Kamu Hizmetinin Görülme Usulleri", d: 3
},
{
  q: "İltizam usulünde sermaye, kâr, zarar ve personel kime aittir?",
  o: ["Sermaye idareye; kâr, zarar ve personel özel kişiye aittir; özel kişi idareye götürü bedel öder", "Hepsi idareye aittir", "Hepsi özel kişiye aittir", "Sermaye özel kişiye, kâr idareye aittir", "Kâr idareye, zarar özel kişiye aittir"],
  a: 0,
  e: "İLTİZAM USULÜ: idarece kurulmuş bir hizmetin KÂR VE ZARARI ÖZEL KİŞİYE AİT OLACAK ŞEKİLDE işletilmesi için sözleşme yapılır. Özel kişi bu hizmetin işletilmesi karşılığında iltizam veren idareye BELLİ BİR (GÖTÜRÜ) BEDEL ÖDER. SERMAYE: İDARE; KÂR: ÖZEL KİŞİ; ZARAR: ÖZEL KİŞİ; PERSONEL: ÖZEL KİŞİ.",
  t: "Kamu Hizmetinin Görülme Usulleri", d: 3
},
{
  q: "İmtiyaz usulünde sermaye, kâr, zarar ve personel kime aittir?",
  o: ["Hepsi özel kişiye aittir", "Sermaye idareye, diğerleri özel kişiye aittir", "Hepsi idareye aittir", "Kâr idareye, zarar özel kişiye aittir", "Sermaye özel kişiye, kâr idareye aittir"],
  a: 0,
  e: "İMTİYAZ USULÜNDE idare bir sözleşme çerçevesinde bir kamu hizmetinin işletilmesini ANONİM ŞİRKET OLAN ÖZEL KİŞİYE, GİDER-KÂR VE ZARARI ÖZEL KİŞİDE OLACAK ŞEKİLDE bırakır; ancak özel kişiyi bazı YETKİ VE AYRICALIKLARLA donatır. SERMAYE, KÂR, ZARAR VE PERSONEL: ÖZEL KİŞİ. İmtiyaz, hizmetin KURULMASI VE İŞLETİLMESİNİ içerebileceği gibi YALNIZCA KURULMUŞ BİR HİZMETİN İŞLETİLMESİNİ de içerebilir.",
  t: "Kamu Hizmetinin Görülme Usulleri", d: 3
},
{
  q: "Ruhsat usulü nedir?",
  o: ["Tekel niteliğinde olmayan kamu hizmetlerinin idarenin vereceği tek yanlı izinle özel hukuk kişileri tarafından görülmesidir; özel öğretim, hastaneler, televizyon yayıncılığı gibi", "Sözleşmeyle hizmetin devredilmesidir", "Hizmetin idarece görülmesidir", "Hizmetin kâr ve zararının özel kişiye bırakılmasıdır", "Tekelli hizmetlerin devridir"],
  a: 0,
  e: "RUHSAT USULÜ: TEKEL NİTELİĞİNDE OLMAYAN KAMU HİZMETLERİNİN İDARENİN VERECEĞİ TEK YANLI İZİNLE ÖZEL HUKUK KİŞİLERİ TARAFINDAN GÖRÜLMESİDİR. Uygulamada ÖZEL ÖĞRETİM, HASTANELER, TELEVİZYON YAYINCILIĞI gibi alanlarda kullanılır. Kamu hizmetinin özel hukuk kişisi eliyle 'İZİNLE' sunulmasıdır (sözleşmeyle değil).",
  t: "Kamu Hizmetinin Görülme Usulleri", d: 2
},
{
  q: "Yap-İşlet-Devret sözleşmesi en fazla kaç yıl için yapılır ve konu sınırlaması var mıdır?",
  o: ["En fazla 49 yıl için yapılır ve konu sınırlaması bulunmamakta, her konuda yapılabilir", "En fazla 20 yıl; sadece enerji konusunda", "En fazla 30 yıl; konu sınırlaması var", "Süre sınırı yoktur", "En fazla 10 yıl"],
  a: 0,
  e: "YAP-İŞLET-DEVRET: KONU SINIRLAMASI BULUNMAMAKTA, HER KONUDA YAPILABİLİR ve EN FAZLA 49 YIL İÇİN YAPILIR. Yapılan yatırım ve hizmetler, sözleşmenin sona ermesi ile BORÇ VE TAAHHÜTLERİNDEN ARINDIRILMIŞ, BAKIMLI, ÇALIŞIR VE KULLANILABİLİR DURUMDA BEDELSİZ OLARAK KENDİLİĞİNDEN İDAREYE GEÇER.",
  t: "Yap-İşlet-Devret", d: 3
},
{
  q: "Yap-İşlet-Devret ile kamu hizmeti yaptırmak isteyen idare hangi usulü izler?",
  o: ["Öncelikle Cumhurbaşkanına başvurur ve ancak bu izinden sonra sermaye şirketi veya yabancı şirket ile sözleşme imzalayabilir", "Doğrudan sözleşme imzalar", "İçişleri Bakanlığı iznine tabidir", "Danıştay görüşü alması gerekir", "TBMM onayı gerekir"],
  a: 0,
  e: "İdareler Yap-İşlet-Devret ile kamu hizmetini yaptırmak isterse ÖNCELİKLE CUMHURBAŞKANINA BAŞVURMAKTA ve ANCAK BU İZİNDEN SONRA SERMAYE ŞİRKETİ VEYA YABANCI ŞİRKET İLE SÖZLEŞME İMZALAYABİLİR. SÖZLEŞMECİ YERLİ ŞİRKETSE SERMAYE ŞİRKETİ (AŞ) OLMALI, YABANCI ŞİRKETTE BU ZORUNLULUK YOKTUR.",
  t: "Yap-İşlet-Devret", d: 3
},
{
  q: "Yap-İşlet-Devret modelinde kamulaştırma yükümlülüğü ve mülkiyeti kime aittir?",
  o: ["Kamulaştırma yapma idarenin yükümlülüğündedir ve kamulaştırılan taşınmazın mülkiyeti de idareye aittir", "Kamulaştırmayı özel şirket yapar ve mülkiyet şirkete geçer", "Kamulaştırma yapılamaz", "Mülkiyet özel şirkete geçer", "Kamulaştırma bedelini şirket öder, mülkiyet şirkete geçer"],
  a: 0,
  e: "Yap-İşlet-Devret modelinde YATIRIM VE HİZMETLER İÇİN KAMULAŞTIRMA YAPILMASI GEREKİYORSA BUNU YAPMA İDARENİN YÜKÜMLÜLÜĞÜNDEDİR. KAMULAŞTIRILAN TAŞINMAZIN MÜLKİYETİ DE İDAREYE AİTTİR.",
  t: "Yap-İşlet-Devret", d: 3
},
{
  q: "Yap-İşlet-Devret ve Yap-İşlet sözleşmelerinden doğan uyuşmazlıklar nerede çözülür?",
  o: ["Özel hukuk sözleşmesi olduğundan tahkim kaydı yoksa adli yargıda çözülür", "İdari yargıda çözülür", "Danıştay'da ilk derece olarak çözülür", "Sadece tahkimde çözülür", "Anayasa Mahkemesinde çözülür"],
  a: 0,
  e: "YAP-İŞLET-DEVRET ve YAP-İŞLET sözleşmeleri ÖZEL HUKUK SÖZLEŞMESİ olduğundan sözleşmenin uygulanmasından doğacak UYUŞMAZLIKLAR TAHKİM KAYDI YOKSA ADLİ YARGIDA ÇÖZÜLÜR.",
  t: "Yap-İşlet-Devret", d: 3
},
{
  q: "Yap-İşlet usulü hangi konuyla sınırlıdır ve süresi ne kadardır?",
  o: ["Sadece termik elektrik santrali kurulması ve işletilmesine ilişkindir; en fazla 20 yıl için enerji satışını düzenleyen sözleşme yapılır", "Her konuda uygulanabilir; 49 yıl", "Hidroelektrik ve nükleer santrallerde de uygulanır", "Sadece su hizmetlerinde; 30 yıl", "Ulaşım hizmetlerinde; 20 yıl"],
  a: 0,
  e: "YAP-İŞLET USULÜ SADECE TERMİK ELEKTRİK SANTRALİ KURULMASI VE İŞLETİLMESİNE İLİŞKİNDİR. HİDROELEKTRİK, JEOTERMAL, NÜKLEER SANTRAL gibi elektrik üretimi ve satışı konusunda YAP-İŞLET USULÜ UYGULANMAZ. EN FAZLA 20 YIL için enerji satışını düzenleyen bir sözleşme yapılır. Tesisin kurulması için ENERJİ VE TABİİ KAYNAKLAR BAKANLIĞI'NIN İZNİ aranır.",
  t: "Yap-İşlet", d: 3
},
{
  q: "Yap-İşlet usulünde tesisin mülkiyeti kime aittir?",
  o: ["Kuran ve işleten kişiye aittir; sözleşme sonunda tesis bedelsiz bir şekilde idareye geçmez", "İdareye aittir", "Sözleşme sonunda bedelsiz idareye geçer", "Ortak mülkiyettir", "Bedeli ödenerek idareye geçer"],
  a: 0,
  e: "YAP-İŞLET usulünde TESİSİN MÜLKİYETİ KURAN VE İŞLETEN KİŞİYE AİTTİR. SÖZLEŞME SONUNDA TESİS BEDELSİZ BİR ŞEKİLDE İDAREYE GEÇMEZ. Bu, YAP-İŞLET-DEVRET'ten en önemli farkıdır (YİD'de tesis sözleşme sonunda BEDELSİZ olarak idareye geçer).",
  t: "Yap-İşlet", d: 3
},

/* ---------- İMTİYAZ SÖZLEŞMESİ ---------- */
{
  q: "İmtiyaz sözleşmesinin niteliği bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Karma niteliklidir; \"anlaşma\" ve \"şartname\" olmak üzere iki kısımdan oluşur ve iltihaki (katılmalı) sözleşmelerdendir", "Tamamen özel hukuk sözleşmesidir", "Tek yanlı idari işlemdir", "Sadece düzenleyici hükümler içerir", "Tarafların iradesiyle her hükmü müzakere edilebilir"],
  a: 0,
  e: "İmtiyaz sözleşmesi hem idarenin TEK TARAFLI belirlediği DÜZENLEYİCİ NİTELİKTE hükümler hem de karşı tarafın iradesine bağlı AKDİ HÜKÜMLER içerir; bu nedenle KARMA NİTELİKLİ olduğu kabul edilir. Sözleşme 'ANLAŞMA' ve 'ŞARTNAME' olmak üzere iki kısımdan oluşur. ŞARTNAME, hizmetin işletiliş şartlarını düzenleyen ve İDARE TARAFINDAN TESPİT EDİLEN kısımdır; imtiyazcı bu şartları TAMAMEN KABUL veya TAMAMEN REDDEDECEKTİR — bu nedenle İLTİHAKİ (KATILMALI) SÖZLEŞMELERDENDİR.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyaz alacak kişi hangi hukuki formda olmalıdır?",
  o: ["Türk anonim şirketi olmalıdır", "Limited şirket olabilir", "Gerçek kişi olabilir", "Kollektif şirket olabilir", "Herhangi bir şirket türü olabilir"],
  a: 0,
  e: "İMTİYAZ ALACAK KİŞİ 'TÜRK ANONİM ŞİRKETİ' OLMALIDIR.",
  t: "İmtiyaz Sözleşmesi", d: 2
},
{
  q: "Devlet, il özel idaresi ve belediye adına imtiyaz verme yetkisi kimlere aittir?",
  o: ["Devlet adına Cumhurbaşkanı, il özel idaresi adına il genel meclisi, belediye adına belediye meclisi", "Hepsinde Cumhurbaşkanı", "Devlet adına bakan, diğerlerinde vali", "Hepsinde ilgili bakanlık", "Devlet adına TBMM"],
  a: 0,
  e: "DEVLET ADINA İMTİYAZ VERME YETKİSİ CUMHURBAŞKANINA aittir. İL ÖZEL İDARESİ adına İL GENEL MECLİSİNE aittir. BELEDİYE İDARELERİ adına BELEDİYE MECLİSİNE aittir; belediye meclisinin verdiği imtiyazlarda ÇEVRE, ŞEHİRCİLİK VE İKLİM DEĞİŞİKLİĞİ BAKANLIĞI'NIN ONAYI GEREKİR.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Belediyeler en fazla kaç yıl için imtiyaz verebilir ve hangi konularda?",
  o: ["En fazla 49 yıl; su (sağlama, uzaklaştırma, tesis kurma, işleme), katı atık (toplama, ayrıştırma, geri kazanım) ve toplu taşıma hizmetleriyle sınırlı", "En fazla 30 yıl; her konuda", "Süre sınırı yok; her konuda", "En fazla 20 yıl; sadece su", "En fazla 49 yıl; konu sınırlaması yok"],
  a: 0,
  e: "BELEDİYELER EN FAZLA 49 YIL İÇİN İMTİYAZ VEREBİLİR. Belediye yasası, belediyelerin imtiyaz verebileceği konuları SU (SAĞLAMA, UZAKLAŞTIRMA, TESİS KURMA, İŞLEME), KATI ATIK (TOPLAMA, AYRIŞTIRMA, GERİ KAZANIM) ve TOPLU TAŞIMA HİZMETLERİYLE SINIRLANDIRMIŞTIR.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyaz sözleşmesi imzalanmadan önce Danıştay'ın görüşü bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Danıştay'ın görüşü alınmak zorundadır, Danıştay 2 ay içinde düşüncesini bildirir ancak bu görüş bağlayıcı değildir", "Danıştay'ın görüşü bağlayıcıdır", "Danıştay görüşü alınması zorunlu değildir", "Danıştay inceleme yetkisine sahiptir", "1 ay içinde görüş bildirir ve bağlayıcıdır"],
  a: 0,
  e: "İmtiyaz sözleşmesi imzalanmadan önce DANIŞTAY'IN GÖRÜŞÜ ALINMAK ZORUNDADIR. DANIŞTAY 2 AY İÇİNDE DÜŞÜNCESİNİ BİLDİRİR. (1999 Anayasa değişikliği öncesi Danıştay'ın İNCELEME YETKİSİ bulunmaktaydı.) DANIŞTAY'IN BU GÖRÜŞÜ BAĞLAYICI DEĞİLDİR.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyaz veren idarenin yetkileri arasında aşağıdakilerden hangisi vardır?",
  o: ["Hizmetten alınacak ücreti belirlemek, denetim ve yaptırım uygulamak, sözleşmede tek yanlı değişiklik yapmak (mali koşullar hariç) ve tek yanlı fesih", "Ücreti imtiyazcı belirler", "İdarenin tek yanlı değişiklik yetkisi yoktur", "Mali koşullarda da tek yanlı değişiklik yapabilir", "Fesih yetkisi yoktur"],
  a: 0,
  e: "İMTİYAZ VEREN İDARENİN YETKİLERİ: 1) HİZMETTEN ALINACAK ÜCRETİ BELİRLER. 2) DENETİM VE YAPTIRIM UYGULAMA yetkisine sahiptir. 3) DEĞİŞKENLİK İLKESİNİN gereği olarak SÖZLEŞMEDE TEK YANLI DEĞİŞİKLİK YAPMA yetkisine sahiptir (SÖZLEŞMENİN MALİ KOŞULLARI HARİÇ); bu yetkinin kullanımı YENİ DURUM VE ŞARTLARIN ORTAYA ÇIKMASI halinde söz konusu olur. 4) TEK YANLI FESİH yetkisine sahiptir.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyaz sözleşmesinde ıskat ve rachat arasındaki fark nedir?",
  o: ["Iskat imtiyaz sahibinin ağır kusuru nedeniyle fesihtir; rachat imtiyaz sahibinin hiçbir kusuru olmasa bile hizmet ve kamu yararının gerektirdiği hallerde fesihtir ve zararların karşılanması gerekir", "İkisi de kusura dayanır", "Rachat kusura dayanır, ıskat dayanmaz", "İkisinde de tazminat ödenmez", "İkisi de imtiyazcının talebiyle olur"],
  a: 0,
  e: "IŞKAT: fesih İMTİYAZ SAHİBİNİN AĞIR KUSURU nedeniyle gerçekleşir. RACHAT: İMTİYAZ SAHİBİNİN HİÇBİR KUSURU BULUNMASA BİLE, HİZMET VE KAMU YARARININ GEREKTİRDİĞİ hallerde de feshedilebilir. RACHAT USULÜYLE HİZMETİ SATIN ALMASI durumunda İMTİYAZCININ ZARARLARININ KARŞILANMASI GEREKİR.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyazcının hakları arasında aşağıdakilerden hangisi vardır?",
  o: ["Kullanıcılardan ücret alma hakkı; fakat bu ücreti serbestçe belirleyemez, şartnamede öngörülen tarifeye uymak zorundadır", "Ücreti serbestçe belirleme hakkı", "Hizmeti başkasına devretme hakkı", "İdarenin tek yanlı değişikliklerini reddetme hakkı", "İdarenin denetiminden muaf olma hakkı"],
  a: 0,
  e: "İMTİYAZCININ HAKLARI: 1) SÜBVANSİYON, KREDİ, LEHİNE KAMULAŞTIRMA gibi avantajları talep etme hakkı. 2) VERDİĞİ HİZMET KARŞILIĞINDA KULLANICILARDAN ÜCRET ALMA HAKKI — FAKAT BU ÜCRETİ SERBESTÇE BELİRLEYEMEZ, ŞARTNAMEDE ÖNGÖRÜLEN TARİFEYE UYMAK ZORUNDADIR. 3) SÖZLEŞMENİN MALİ DENGESİNİN KORUNMASINI İSTEME hakkı.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Öngörülmezlik (imprevizyon) ilkesi nedir?",
  o: ["İdare ile imtiyaz sahibine atfedilemeyecek ve sözleşme yapıldığı sırada öngörülmesi mümkün olmayan haller (savaş, doğal afet, salgın, ekonomik kriz) dolayısıyla sözleşmenin mali dengesinin tamamen altüst olması durumunda imtiyaz sahibinin idareden tazminat talep edebilmesidir", "İdarenin işlemleri nedeniyle koşulların bozulmasıdır", "İdarenin tek yanlı fesih yetkisidir", "İmtiyazcının sözleşmeyi feshetme hakkıdır", "Ücretin serbestçe belirlenmesidir"],
  a: 0,
  e: "ÖNGÖRÜLMEZLİK (İMPREVİZYON) İLKESİ: İMTİYAZI VEREN İDARE İLE İMTİYAZ SAHİBİNE ATFEDİLEMEYECEK OLAN ve SÖZLEŞME AKDEDİLDİĞİ SIRADA ÖNGÖRÜLMESİ MÜMKÜN OLMAYAN HALLER (SAVAŞ, DOĞAL AFET, SALGIN HASTALIK, EKONOMİK KRİZ gibi) dolayısıyla SÖZLEŞMENİN MALİ DENGESİNİN TAMAMEN ALTÜST OLMASI durumunda imtiyaz sahibi İDAREDEN TAZMİNAT TALEP EDEBİLİR. Bu ilke kamu hizmetlerinde SÜREKLİLİK İLKESİNİN bir yansımasıdır.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Öngörülmezlik ilkesinin uygulanabilmesi için hangi koşullar birlikte gerçekleşmelidir?",
  o: ["Olayların sözleşme yapıldığı esnada bilinmeyen ve öngörülemeyecek nitelikte olması, tarafların iradeleri dışında gerçekleşmiş olması ve kârdaki azalmanın kamu hizmetinin yerine getirilmesini büyük ölçüde engelleyecek boyutlara ulaşması", "Sadece kârda azalma olması yeterlidir", "Sadece idarenin kusurlu olması gerekir", "İmtiyazcının kusurlu olması gerekir", "Sözleşmenin feshedilmiş olması gerekir"],
  a: 0,
  e: "ÖNGÖRÜLMEZLİK İLKESİNİN uygulanabilmesi için ÜÇ KOŞULUN BİRLİKTE gerçekleşmesi gerekir: ▪ Sözleşmenin ifasını önemli derecede güçleştiren olayların SÖZLEŞME YAPILDIĞI ESNADA BİLİNMEYEN VE ÖNGÖRÜLEMEYECEK NİTELİKTE olması. ▪ Bu olayların TARAFLARIN İRADELERİNİN DIŞINDA gerçekleşmiş olması. ▪ İMTİYAZ ALANIN KÂRINDA ÖNEMSİZ BİR AZALMA YETERLİ OLMAYIP, bunun KAMU HİZMETİNİN YERİNE GETİRİLMESİNİ BÜYÜK ÖLÇÜDE ENGELLEYECEK BOYUTLARA ULAŞMASI gerekir.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Öngörülmez olaylar süreklilik arz ederse (mücbir sebep) ne olur?",
  o: ["Taraflar yeni bir sözleşme yapabileceği gibi mahkemeye başvurarak sözleşmenin feshini de talep edebilirler", "Sözleşme kendiliğinden sona erer", "İdare tek yanlı fesheder", "Tazminat ödenmeye devam edilir", "Hiçbir şey yapılamaz"],
  a: 0,
  e: "Öngörülmezlik şartları gerçekleştiğinde imtiyazcı ZARARININ PAYLAŞILMASINI (TAZMİNAT) veya KOLAYLIKLAR SAĞLANMASINI talep edebilir. Bu yardımlar GEÇİCİ NİTELİKTEDİR; öngörülemez olayın etkisi ortadan kalkınca sona erer. EĞER ÖNGÖRÜLEMEZ OLAYLAR SÜREKLİLİK ARZ EDERSE (MÜCBİR SEBEP) TARAFLAR YENİ BİR SÖZLEŞME YAPABİLECEĞİ GİBİ MAHKEMEYE BAŞVURARAK SÖZLEŞMENİN FESHİNİ DE TALEP EDEBİLİRLER.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Fait du prince (egemen olgusu) ilkesi nedir ve hangi halde uygulanmaz?",
  o: ["Sözleşmenin tarafı olan idarenin işlem/eylemleri nedeniyle koşulların imtiyazcı aleyhine bozulmasıdır; sözleşmeyi yapan idare dışında başka bir idari makamın işlemleri nedeniyle bozulma halinde uygulanmaz", "Doğal afetler nedeniyle bozulmadır", "Her idari makamın işlemi için uygulanır", "İmtiyazcının kusuru halinde uygulanır", "Üçüncü kişilerin fiilleri için uygulanır"],
  a: 0,
  e: "FAIT DU PRINCE (EGEMEN OLGUSU) İLKESİ: SÖZLEŞMENİN TARAFI OLAN İDARENİN İŞLEM YA DA EYLEMLERİ nedeniyle sözleşme koşullarının İMTİYAZCI ALEYHİNE BOZULMASI durumunda imtiyazcı, sözleşmeci idareden ZARARLARININ TAMAMININ GİDERİLMESİNİ talep edebilir. SÖZLEŞMEYİ YAPAN İDARE DIŞINDA BAŞKA BİR İDARİ MAKAMIN eylem ve işlemleri nedeniyle bozulma halinde BU İLKE UYGULANMAZ — bu durumda diğer şartlar da varsa ÖNGÖRÜLMEZLİK İLKESİ uygulanabilir.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyazcının yükümlülükleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Sözleşmeyi bizzat ifa etmelidir; idarenin izni olmadan hizmetin ifasını başkasına devredemez", "Hizmeti serbestçe devredebilir", "İdarenin denetimine katlanmak zorunda değildir", "Tek yanlı değişiklikleri reddedebilir", "Kamu hizmeti ilkelerine bağlı değildir"],
  a: 0,
  e: "İMTİYAZCININ YÜKÜMLÜLÜKLERİ: 1) KAMU HİZMETİNE EGEMEN OLAN İLKELERE VE SÖZLEŞME ŞARTLARINA UYGUN biçimde sözleşmeyi ifa etmek. 2) SÖZLEŞMEYİ BİZZAT İFA ETMEK — İDARENİN İZNİ OLMADAN HİZMETİN İFASINI BAŞKASINA DEVREDEMEZ. 3) İDARENİN GÖZETİM VE DENETİMİNE KATLANMAK. 4) İDARENİN YAPACAĞI TEK YANLI DEĞİŞİKLİKLERİ KABUL ETMEK.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Anayasa m. 125'te 1999 yılında yapılan değişiklikle imtiyaz uyuşmazlıkları bakımından ne getirilmiştir?",
  o: ["Uyuşmazlıkların milli veya milletlerarası tahkim yoluyla çözülmesi öngörülebilir; milletlerarası tahkime ancak yabancılık unsuru taşıyan uyuşmazlıklar için gidilebilir", "Tüm uyuşmazlıklar tahkime gider", "Tahkim yasaklanmıştır", "Sadece milli tahkim mümkündür", "Uyuşmazlıklar adli yargıda çözülür"],
  a: 0,
  e: "AY m. 125'te 1999 yılında yapılan değişiklikle: 'KAMU HİZMETLERİ İLE İLGİLİ İMTİYAZ ŞARTLAŞMA VE SÖZLEŞMELERİNDE BUNLARDAN DOĞAN UYUŞMAZLIKLARIN MİLLİ VEYA MİLLETLERARASI TAHKİM YOLUYLA ÇÖZÜLMESİ ÖNGÖRÜLEBİLİR. MİLLETLERARASI TAHKİME ANCAK YABANCILIK UNSURU TAŞIYAN UYUŞMAZLIKLAR İÇİN GİDİLEBİLİR.'",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyaz sözleşmesinde tahkim yolu öngörülmemişse uyuşmazlık nerede çözülür?",
  o: ["İlk derece mahkemesi olarak Danıştay tarafından çözülür (Danıştay Kanunu m. 24)", "İdare mahkemesinde", "Asliye hukuk mahkemesinde", "Bölge adliye mahkemesinde", "Anayasa Mahkemesinde"],
  a: 0,
  e: "İmtiyaz sözleşmesinde TAHKİM YOLU ÖNGÖRÜLMEMİŞSE uyuşmazlık İLK DERECE MAHKEMESİ OLARAK DANIŞTAYCA ÇÖZÜLÜR (Danıştay Kanunu m. 24). TAHKİM ÖNGÖRÜLMÜŞSE uyuşmazlık tahkim tarafından çözülür; tahkim kararlarına karşı BÖLGE ADLİYE MAHKEMESİNDE İPTAL DAVASI açılabilir ve iptal davası üzerine verilen kararlara karşı YARGITAY'DA TEMYİZ yoluna başvurulabilir.",
  t: "İmtiyaz Sözleşmesi", d: 3
},

/* ---------- İDARENİN MALİ SORUMLULUĞU ---------- */
{
  q: "Anayasanın 125. maddesine göre idarenin mali sorumluluğu nasıl düzenlenmiştir?",
  o: ["\"İdare, kendi eylem ve işlemlerinden doğan zararı ödemekle yükümlüdür.\"", "\"İdare sadece kusurlu eylemlerinden sorumludur.\"", "\"İdarenin sorumluluğu kanunla belirlenir.\"", "\"İdare hiçbir zarardan sorumlu değildir.\"", "\"İdare sadece işlemlerinden sorumludur.\""],
  a: 0,
  e: "AY m. 125: 'İDARE, KENDİ EYLEM VE İŞLEMLERİNDEN DOĞAN ZARARI ÖDEMEKLE YÜKÜMLÜDÜR.'",
  t: "İdarenin Mali Sorumluluğu", d: 2
},
{
  q: "Hizmet kusuru hangi halleri kapsar?",
  o: ["Hizmetin kötü işlemesi, geç işlemesi ve hiç işlememesi", "Sadece hizmetin hiç işlememesi", "Hizmetin kötü ve geç işlemesi", "Tehlike ve risk halleri", "Sosyal risk halleri"],
  a: 0,
  e: "HİZMET KUSURU, hizmetin KURULMASINDA VE İŞLEYİŞİNDE meydana gelen aksaklıklardır: 1) HİZMETİN KÖTÜ İŞLEMESİ, 2) HİZMETİN GEÇ İŞLEMESİ, 3) HİZMETİN HİÇ İŞLEMEMESİ.",
  t: "İdarenin Mali Sorumluluğu", d: 2
},
{
  q: "Kamu görevlisinin hizmet içi kişisel kusuru sayılan ve idarenin rücu hakkı doğuran haller arasında aşağıdakilerden hangisi vardır?",
  o: ["Suç niteliğindeki davranışları, yargı kararlarına uymaması, kötü niyetli davranışları ve ağır kusuru", "Sadece suç niteliğindeki davranışları", "Sadece hafif ihmali", "Hizmet dışındaki davranışları", "Görevini yerine getirmemesi"],
  a: 0,
  e: "Kamu görevlisinin HİZMET İÇİ KİŞİSEL KUSURU sayılan ve idarenin RÜCU HAKKI doğuran haller: ▪ KAMU GÖREVLİSİNİN SUÇ NİTELİĞİNDEKİ DAVRANIŞLARI, ▪ YARGI KARARLARINA UYMAMASI, ▪ KÖTÜ NİYETLİ DAVRANIŞLARI, ▪ AĞIR KUSURU. Kamu görevlilerinin kişisel kusurları bulunsa bile zarar gören tazminatı YİNE İDAREDEN istemek zorundadır (AY m. 129/5, m. 40/3).",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Kamu görevlisinin hizmet dışı kişisel kusuru halinde zarar gören kime, nerede dava açar?",
  o: ["Doğrudan ilgili memura adli yargıda tazminat davası açabilir", "İdareye idari yargıda dava açar", "İdareye adli yargıda dava açar", "Memura idari yargıda dava açar", "Dava açamaz"],
  a: 0,
  e: "Kamu görevlilerinin TAMAMEN HİZMET DIŞINDAKİ kusurlu tutum ve davranışları onların SALT KİŞİSEL KUSURLU DAVRANIŞLARI sayılır ve HAKSIZ FİİL esaslarına göre ŞAHSEN SORUMLU olmalarına yol açar (HİZMET DIŞI KİŞİSEL KUSUR). Bu durumda zarar gören kişi DOĞRUDAN İLGİLİ MEMURA ADLİ YARGIDA TAZMİNAT DAVASI AÇABİLİR.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "İdarenin kusursuz sorumluluğu kaç temel ilke altında toplanır?",
  o: ["İki: tehlike (risk) ilkesi ve kamu külfetleri karşısında eşitlik (fedakarlığın denkleştirilmesi) ilkesi", "Üç: tehlike, hakkaniyet ve özen", "Bir: sadece tehlike ilkesi", "Dört", "Beş"],
  a: 0,
  e: "İdarenin KUSURSUZ SORUMLULUK halleri İKİ BAŞLIK altında toplanır: 1) TEHLİKE (RİSK) İLKESİ — idarenin tehlikeli faaliyetleri/araç-gereçleri, MESLEKİ RİSK, SOSYAL RİSK. 2) KAMU KÜLFETLERİ KARŞISINDA EŞİTLİK (FEDAKARLIĞIN DENKLEŞTİRİLMESİ) İLKESİ. Kusursuz sorumluluğun ilke ve esasları YARGI İÇTİHATLARIYLA belirlenmiştir.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Mesleki risk nedir?",
  o: ["Kamu hizmetinde çalışan kişinin görevi nedeniyle zarara uğraması halinde ortaya çıkan zararın, idarenin kusuru olmasa bile idarece tazmin edilmesidir", "Terör faaliyetleri nedeniyle bireylerin zarar görmesidir", "İdarenin tehlikeli araç-gereçleri nedeniyle zarardır", "Kamu külfetleri karşısında eşitliktir", "Hizmet kusurudur"],
  a: 0,
  e: "MESLEKİ RİSK: KAMU HİZMETİNDE ÇALIŞAN KİŞİNİN GÖREVİ NEDENİYLE ZARARA UĞRAMASI halinde ortaya çıkan zarar, İDARENİN KUSURU OLMASA BİLE İDARECE TAZMİN OLUNUR. Tehlike (risk) ilkesinin bir alt başlığıdır.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Sosyal risk ilkesinin en belirgin özelliği nedir?",
  o: ["Terör faaliyetleri nedeniyle oluşan zararda kişilerin gördüğü zararla idarenin eylemi arasında nedensellik bağı bulunmamasına rağmen idarenin sorumlu tutulmasıdır", "İdarenin kusurlu olması gerekir", "Nedensellik bağı zorunludur", "Sadece kamu görevlilerinin zararını kapsar", "İdarenin tehlikeli faaliyetlerine ilişkindir"],
  a: 0,
  e: "SOSYAL RİSK: TERÖR FAALİYETLERİ nedeniyle bireyler zarar görürlerse bu zararın İDARE TARAFINDAN KARŞILANMASINI ifade eder. Burada aslında zarar İDARENİN BİR EYLEMİNDEN KAYNAKLANMAMAKTADIR. KİŞİLERİN GÖRDÜĞÜ ZARARLA İDARENİN EYLEMİ ARASINDA HERHANGİ BİR NEDENSELLİK BAĞININ BULUNMAMASINA RAĞMEN İDARENİN OLUŞAN ZARARDAN SORUMLULUĞU SÖZ KONUSUDUR.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Kamu külfetleri karşısında eşitlik (fedakarlığın denkleştirilmesi) ilkesi nedir?",
  o: ["İdarenin kamuya yararlı bir faaliyeti esnasında, kusuru olmasa bile faaliyetin doğası gereği bazı kişilerin zarar görmesi durumunda bu zararın idarece tazmin edilmesidir", "Terör zararlarının karşılanmasıdır", "Kamu görevlilerinin zararının karşılanmasıdır", "Hizmet kusurundan doğan sorumluluktur", "İdarenin tehlikeli araçlarından doğan sorumluluktur"],
  a: 0,
  e: "KAMU KÜLFETLERİ KARŞISINDA EŞİTLİK (FEDAKARLIĞIN DENKLEŞTİRİLMESİ) İLKESİ: idarenin KAMUYA YARARLI BİR FAALİYETİ esnasında, İDARENİN KUSURU OLMASA BİLE, bu faaliyetin DOĞASI GEREĞİ BAZI KİŞİLERİN ZARAR GÖRMESİ durumunda oluşan zararın idarece tazmin edilmesidir. Tüm toplumun göreceği bir yarar nedeniyle bazı kişilerin gördüğü istisnai zarara SADECE ZARAR GÖRENLERİN DEĞİL, TÜM TOPLUMUN KATLANMASININ hakkaniyete uygun olacağı düşüncesi üstün gelir.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "İdarenin mali sorumluluğunun şartları hangileridir?",
  o: ["İdari davranış, zarar ve nedensellik (illiyet) bağı", "Sadece zarar", "İdari davranış ve kusur", "Kusur, zarar ve illiyet bağı", "Sadece idari işlem"],
  a: 0,
  e: "İdarenin kusurlu ya da kusursuz sorumluluğundan bahsedebilmek için MUTLAKA ŞU ÜÇ ŞARTIN VARLIĞI aranır: 1) İDARİ DAVRANIŞ (idari işlem veya idari eylem; İCRAİ olabileceği gibi İHMALİ de olabilir), 2) ZARAR (MADDİ veya MANEVİ; henüz doğmamakla birlikte İLERİDE DOĞACAĞI KESİN olan zararların da tazmini istenebilir), 3) NEDENSELLİK (İLLİYET) BAĞI.",
  t: "İdarenin Mali Sorumluluğu", d: 2
},
{
  q: "Mücbir sebep (zorlayıcı nedenler) idarenin sorumluluğunu nasıl etkiler?",
  o: ["İdarenin hem kusurlu hem kusursuz sorumluluğunu kaldırır", "Sadece kusurlu sorumluluğu kaldırır", "Sadece kusursuz sorumluluğu kaldırır", "Sorumluluğu azaltır ama kaldırmaz", "Sorumluluğu etkilemez"],
  a: 0,
  e: "ZORLAYICI NEDENLER (MÜCBİR SEBEP): idarenin iradesi DIŞINDA oluşan, öngörülebilmesi ve kaçınılması mümkün olmayan ve kamu hizmetinin yürütülmesini İMKANSIZLAŞTIRAN olaylardır. MÜCBİR NEDENLER, İDARENİN KUSURLU VE KUSURSUZ SORUMLULUĞUNU KALDIRIR.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Beklenmeyen durumlar (kaza) idarenin sorumluluğunu nasıl etkiler?",
  o: ["İdarenin kusurlu sorumluluğunu kaldırır fakat kusursuz sorumluluğu devam eder", "Hem kusurlu hem kusursuz sorumluluğu kaldırır", "Sadece kusursuz sorumluluğu kaldırır", "Sorumluluğu etkilemez", "Sorumluluğu ikiye katlar"],
  a: 0,
  e: "BEKLENMEYEN DURUMLAR (KAZA): İDARENİN DAVRANIŞI İÇİNDE gerçekleşen, öngörülebilmesi ve kaçınılması mümkün olmayan olaylardır. BEKLENMEYEN DURUMLAR, İDARENİN KUSURLU SORUMLULUĞUNU KALDIRIR FAKAT İDARENİN KUSURSUZ SORUMLULUĞU DEVAM EDER. (Mücbir sebepten farkı budur — mücbir sebep her ikisini de kaldırır.)",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Zarar görenin kusuru ve üçüncü kişinin kusuru idarenin sorumluluğunu nasıl etkiler?",
  o: ["Her ikisi de idarenin hem kusurlu hem kusursuz sorumluluğunu ortadan kaldırır", "Sadece kusurlu sorumluluğu kaldırır", "Sadece kusursuz sorumluluğu kaldırır", "Sorumluluğu etkilemez", "Sorumluluğu yarıya indirir"],
  a: 0,
  e: "ZARAR GÖRENİN KUSURU: zararın bizzat zarar görenin kusuru nedeniyle oluşması durumunda İDARENİN HEM KUSURLU HEM DE KUSURSUZ SORUMLULUĞU ORTADAN KALKAR. ÜÇÜNCÜ KİŞİNİN KUSURU: zararı doğuran davranış üçüncü kişinin davranışı ise İDARENİN KUSURLU VE KUSURSUZ SORUMLULUĞU ORTADAN KALKAR.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},

/* ---------- İDARİ İŞLEMLER ---------- */
{
  q: "İdari işlem nasıl tanımlanır?",
  o: ["İdarenin kamu gücü ayrıcalıklarını kullanarak yaptığı ve hukuk düzeninde değişiklik meydana getiren irade açıklamalarıdır", "İdarenin tüm faaliyetleridir", "İdarenin özel hukuk sözleşmeleridir", "İdarenin maddi eylemleridir", "İdarenin iç yazışmalarıdır"],
  a: 0,
  e: "İDARİ İŞLEM: İDARENİN KAMU GÜCÜ AYRICALIKLARINI KULLANARAK YAPTIĞI VE HUKUK DÜZENİNDE DEĞİŞİKLİK MEYDANA GETİREN İRADE AÇIKLAMALARIDIR.",
  t: "İdari İşlemler", d: 2
},
{
  q: "Tek taraflı idari işlemler kaça ayrılır?",
  o: ["Üçe: düzenleyici işlemler, bireysel (birel) işlemler ve genel kararlar (ara işlemler)", "İkiye: düzenleyici ve bireysel", "Dörde", "Beşe", "Ayrılmaz"],
  a: 0,
  e: "TEK TARAFLI İDARİ İŞLEMLER ÜÇE ayrılır: 1) DÜZENLEYİCİ İŞLEMLER (genel, soyut ve sürekli kurallar koyan; CBK, YÖNETMELİK, ADSIZ DÜZENLEYİCİ İŞLEMLER — genelge, yönerge, talimatname), 2) BİREYSEL (BİREL) İŞLEMLER / İDARİ KARARLAR (belli bir kişi/duruma yönelik), 3) GENEL KARARLAR (ARA İŞLEMLER) — GENELE YÖNELİK OLMAKLA BİRLİKTE GEÇİCİ NİTELİKTEKİ, SOMUT BİR DURUMA İLİŞKİN kural koyan işlemler.",
  t: "İdari İşlemler", d: 3
},
{
  q: "İki taraflı idari işlemler (idari sözleşmeler) nasıl tanımlanır?",
  o: ["İdare ile ilgilisinin karşılıklı olarak açıkladıkları iradelerinin oluşumu sonucu yapılan işlemlerdir", "İdarenin tek yanlı iradesiyle yapılan işlemlerdir", "Sadece özel hukuk sözleşmeleridir", "Düzenleyici işlemlerdir", "Genel kararlardır"],
  a: 0,
  e: "İKİ TARAFLI İDARİ İŞLEMLER (İDARİ SÖZLEŞMELER): İDARE İLE İLGİLİSİNİN KARŞILIKLI OLARAK AÇIKLADIKLARI İRADELERİNİN OLUŞUMU SONUCU YAPILAN İŞLEMLERDİR. TEK TARAFLI işlemler ise İLGİSİNİN RIZA VE MUVAFAKATİNE BAĞLI OLMADAN idarenin tek taraflı iradesiyle yapılan işlemlerdir.",
  t: "İdari İşlemler", d: 2
},

/* ---------- CUMHURBAŞKANLIĞI KARARNAMESİ ---------- */
{
  q: "Olağan dönem Cumhurbaşkanlığı kararnamesi hangi konularda çıkarılabilir?",
  o: ["Yürütme yetkisine ilişkin bütün konularda", "Sadece Cumhurbaşkanlığı teşkilatına ilişkin konularda", "Her konuda", "Sadece bakanlıkların kuruluşuna ilişkin", "Temel haklar dahil her konuda"],
  a: 0,
  e: "2017 Anayasa değişikliği öncesinde CBK'nın kapsamı Cumhurbaşkanlığı Genel Sekreterliği ile sınırlıydı; YENİ SİSTEMDE Cumhurbaşkanlığı kararnamesi 'YÜRÜTME YETKİSİNE İLİŞKİN BÜTÜN KONULARDA' ÇIKARILABİLİR. (Cumhurbaşkanlığı Genel Sekreterliği 2017 değişikliğiyle KALDIRILMIŞTIR.) CBK ASLİ BİR YETKİ kullanımıdır.",
  t: "Cumhurbaşkanlığı Kararnamesi", d: 2
},
{
  q: "Cumhurbaşkanlığı kararnamesi ile temel haklar bakımından hangi sınır vardır?",
  o: ["Anayasanın ikinci kısmının birinci ve ikinci bölümlerindeki temel haklar (m. 13-16), kişi hakları ve ödevleri (m. 17-40) ile dördüncü bölümdeki siyasi haklar (m. 66-74) düzenlenemez; yalnızca üçüncü bölümdeki sosyal haklarda düzenleme yapılabilir", "Hiçbir temel hak düzenlenemez", "Tüm temel haklar düzenlenebilir", "Sadece siyasi haklar düzenlenebilir", "Sadece kişi hakları düzenlenebilir"],
  a: 0,
  e: "CBK ile Anayasanın İKİNCİ KISMININ BİRİNCİ VE İKİNCİ BÖLÜMLERİNDE yer alan temel haklar (m. 13-16), KİŞİ HAKLARI VE ÖDEVLERİ (m. 17-40) ve DÖRDÜNCÜ BÖLÜMDE yer alan SİYASİ HAKLAR VE ÖDEVLER (m. 66-74) DÜZENLENEMEZ. YALNIZCA ÜÇÜNCÜ BÖLÜMDE YER ALAN 'SOSYAL HAKLAR'DA DÜZENLEME YAPILABİLİR.",
  t: "Cumhurbaşkanlığı Kararnamesi", d: 3
},
{
  q: "Cumhurbaşkanlığı kararnamesi ile kanun arasında çelişki olursa ne olur?",
  o: ["Kanun hükümleri uygulanır; TBMM aynı konuda kanun çıkarırsa CBK hükümsüz hale gelir", "CBK hükümleri uygulanır", "Anayasa Mahkemesi karar verir", "Her ikisi de uygulanır", "CBK kanun hükmündedir"],
  a: 0,
  e: "CUMHURBAŞKANLIĞI KARARNAMESİ İLE KANUNLARDA FARKLI HÜKÜMLER BULUNMASI HALİNDE KANUN HÜKÜMLERİ UYGULANIR. TBMM'NİN AYNI KONUDA KANUN ÇIKARMASI DURUMUNDA CUMHURBAŞKANLIĞI KARARNAMESİ HÜKÜMSÜZ HALE GELİR. Ayrıca ANAYASADA MÜNHASIRAN KANUNLA düzenlenmesi öngörülen konularda ve KANUNDA AÇIKÇA DÜZENLENEN konularda CBK çıkarılamaz.",
  t: "Cumhurbaşkanlığı Kararnamesi", d: 3
},
{
  q: "Olağan dönem CBK'ları şekil ve esas bakımından hangi merci tarafından denetlenir?",
  o: ["Anayasa Mahkemesi", "Danıştay", "İdare mahkemeleri", "TBMM", "Denetlenemez"],
  a: 0,
  e: "OLAĞAN DÖNEM CUMHURBAŞKANLIĞI KARARNAMELERİNİN ŞEKİL VE ESAS BAKIMINDAN DENETİMİ ANAYASA MAHKEMESİ TARAFINDAN YAPILIR. Yayımından sonraki bir tarih belirlenmemişse RESMİ GAZETEDE YAYIMLANDIKLARI GÜN YÜRÜRLÜĞE GİRER.",
  t: "Cumhurbaşkanlığı Kararnamesi", d: 2
},
{
  q: "OHAL Cumhurbaşkanlığı kararnamelerinin denetimi ve statüsü bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Anayasa Mahkemesi'nin denetimine tabi değildir ve bu dönemde çıkarılan kararnameler kanun hükmündedir", "Anayasa Mahkemesi denetler ve kanun hükmünde değildir", "Danıştay denetler", "İdari yargı denetler", "Denetim yolu yoktur ve kanun hükmünde değildir"],
  a: 0,
  e: "OHAL CBK'LARI ANAYASA MAHKEMESİ'NİN DENETİMİNE TABİ DEĞİLDİR ve BU DÖNEMDE ÇIKARILAN KARARNAMELER KANUN HÜKMÜNDEDİR. Ayrıca AY m. 104/17'deki sınırlamalara TABİ DEĞİLDİR: SERT ÇEKİRDEK HAKLAR DIŞINDA TÜM HAKLARDA, MÜNHASIRAN KANUNLA düzenlenmesi öngörülen konularda ve KANUNDA AÇIKÇA DÜZENLENEN konularda düzenleme yapabilir.",
  t: "Cumhurbaşkanlığı Kararnamesi", d: 3
},
{
  q: "OHAL Cumhurbaşkanlığı kararnameleri TBMM'de ne kadar sürede görüşülür?",
  o: ["Resmi Gazetede yayımlanır, aynı gün Meclis onayına sunulur ve 3 ay içerisinde TBMM'de görüşülüp karara bağlanır; aksi halde kendiliğinden yürürlükten kalkar", "6 ay içinde görüşülür", "1 ay içinde görüşülür", "Görüşülmesi zorunlu değildir", "1 yıl içinde görüşülür"],
  a: 0,
  e: "OHAL CBK'ları RESMİ GAZETEDE YAYIMLANIR, AYNI GÜN MECLİS ONAYINA SUNULUR. SAVAŞ VE MÜCBİR SEBEPLERLE TBMM'NİN TOPLANAMAMASI HARİÇ olmak üzere; olağanüstü hal sırasında çıkarılan CBK'lar 3 AY İÇERİSİNDE TBMM'DE GÖRÜŞÜLÜR VE KARARA BAĞLANIR. AKSİ HALDE KENDİLİĞİNDEN YÜRÜRLÜKTEN KALKAR.",
  t: "Cumhurbaşkanlığı Kararnamesi", d: 3
},

/* ---------- YÖNETMELİK ---------- */
{
  q: "Yönetmelik çıkarma yetkisi kimlere aittir?",
  o: ["Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri", "Sadece Cumhurbaşkanı", "Sadece bakanlıklar", "TBMM ve Cumhurbaşkanı", "Sadece kamu tüzel kişileri"],
  a: 0,
  e: "YÖNETMELİK, CUMHURBAŞKANI, BAKANLIKLAR ve KAMU TÜZEL KİŞİLERİ tarafından çıkarılabilir. SEBEBİ: KANUNLARIN VE CUMHURBAŞKANLIĞI KARARNAMELERİNİN UYGULANMASINI SAĞLAMAK. STATÜSÜ: KANUNLARA VE CBK'LARA AYKIRI OLAMAZ.",
  t: "Yönetmelik", d: 2
},
{
  q: "Yönetmeliklerin Resmi Gazetede yayımlanması bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Tüm yönetmelikler Resmi Gazetede yayımlanmaz; hangi yönetmeliklerin yayımlanacağı kanunda belirtilir", "Tüm yönetmelikler Resmi Gazetede yayımlanır", "Hiçbir yönetmelik yayımlanmaz", "Sadece Cumhurbaşkanlığı yönetmelikleri yayımlanır", "Yayım zorunluluğu Anayasada düzenlenmiştir"],
  a: 0,
  e: "TÜM YÖNETMELİKLER RESMİ GAZETEDE YAYIMLANMAZ. HANGİ YÖNETMELİKLERİN RESMİ GAZETEDE YAYIMLANACAĞI KANUNDA BELİRTİLİR.",
  t: "Yönetmelik", d: 2
},
{
  q: "Yönetmeliklerin yargısal denetimi hangi mahkemeler tarafından yapılır?",
  o: ["Cumhurbaşkanlığı yönetmelikleri ve ülke çapında uygulanacak yönetmelikler Danıştay; ülke çapında uygulanmayacak yönetmelikler idare mahkemeleri tarafından", "Hepsi Danıştay tarafından", "Hepsi idare mahkemeleri tarafından", "Anayasa Mahkemesi tarafından", "Hepsi bölge idare mahkemeleri tarafından"],
  a: 0,
  e: "Yönetmeliklerin YARGISAL DENETİMİ İDARİ YARGI tarafından yapılır: ▪ CUMHURBAŞKANLIĞI YÖNETMELİKLERİNİN yargısal denetimi DANIŞTAY. ▪ BAKANLIKLARIN, kamu kuruluşları ve meslek kuruluşlarınca çıkarılan ve ÜLKE ÇAPINDA UYGULANACAK yönetmeliklerin denetimi DANIŞTAY; ÜLKE ÇAPINDA UYGULANMAYACAK yönetmeliklerin denetimi ise İDARE MAHKEMELERİ tarafından yapılır.",
  t: "Yönetmelik", d: 3
}

]);

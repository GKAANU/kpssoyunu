/* İdare Hukuku — 8. bölüm (kamu hizmetinin görülme usulleri, imtiyaz sözleşmesi,
   idarenin mali sorumluluğu, idari işlemler ve türleri, CBK, yönetmelik) */
KPSS.registerBank('idare', [
{
  q: "Bir kamu hizmetinin, o hizmetten sorumlu kamu idaresi tarafından kendi personeli ve kendi ekipmanıyla görülmesine ne ad verilir?",
  o: ["Emanet usulü", "İltizam usulü", "Ruhsat usulü", "İmtiyaz usulü", "Yap-İşlet-Devret"],
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
  o: ["Sermaye idareye; kâr, zarar ve personel özel kişiye", "Sermaye, kâr, zarar ve personel tümüyle idareye", "Sermaye, kâr, zarar ve personel tümüyle özel kişiye", "Sermaye özel kişiye; kâr, zarar ve personel idareye", "Sermaye ve kâr idareye; zarar ve personel özel kişiye"],
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
  q: "Tekel niteliğinde olmayan kamu hizmetlerinin, idarenin tek yanlı izniyle özel hukuk kişileri tarafından görülmesine ne ad verilir?",
  o: ["Ruhsat usulü", "İltizam usulü", "Emanet usulü", "İmtiyaz usulü", "Yap-İşlet usulü"],
  a: 0,
  e: "RUHSAT USULÜ: TEKEL NİTELİĞİNDE OLMAYAN KAMU HİZMETLERİNİN İDARENİN VERECEĞİ TEK YANLI İZİNLE ÖZEL HUKUK KİŞİLERİ TARAFINDAN GÖRÜLMESİDİR. Uygulamada ÖZEL ÖĞRETİM, HASTANELER, TELEVİZYON YAYINCILIĞI gibi alanlarda kullanılır. Kamu hizmetinin özel hukuk kişisi eliyle 'İZİNLE' sunulmasıdır (sözleşmeyle değil).",
  t: "Kamu Hizmetinin Görülme Usulleri", d: 2
},
{
  q: "Yap-İşlet-Devret sözleşmesi en fazla kaç yıl için yapılır ve konu sınırlaması var mıdır?",
  o: ["49 yıl; konu sınırlaması yoktur", "30 yıl; konu sınırlaması vardır", "20 yıl; yalnızca enerji konusunda", "10 yıl; konu sınırlaması yoktur", "Süre sınırı yoktur; her konuda"],
  a: 0,
  e: "YAP-İŞLET-DEVRET: KONU SINIRLAMASI BULUNMAMAKTA, HER KONUDA YAPILABİLİR ve EN FAZLA 49 YIL İÇİN YAPILIR. Yapılan yatırım ve hizmetler, sözleşmenin sona ermesi ile BORÇ VE TAAHHÜTLERİNDEN ARINDIRILMIŞ, BAKIMLI, ÇALIŞIR VE KULLANILABİLİR DURUMDA BEDELSİZ OLARAK KENDİLİĞİNDEN İDAREYE GEÇER.",
  t: "Yap-İşlet-Devret", d: 3
},
{
  q: "Yap-İşlet-Devret ile kamu hizmeti yaptırmak isteyen idare, sözleşme imzalayabilmek için öncelikle kimin iznini almak zorundadır?",
  o: ["Cumhurbaşkanının", "İçişleri Bakanlığının", "Danıştayın", "TBMM'nin", "Hazine ve Maliye Bakanlığının"],
  a: 0,
  e: "İdareler Yap-İşlet-Devret ile kamu hizmetini yaptırmak isterse ÖNCELİKLE CUMHURBAŞKANINA BAŞVURMAKTA ve ANCAK BU İZİNDEN SONRA SERMAYE ŞİRKETİ VEYA YABANCI ŞİRKET İLE SÖZLEŞME İMZALAYABİLİR. SÖZLEŞMECİ YERLİ ŞİRKETSE SERMAYE ŞİRKETİ (AŞ) OLMALI, YABANCI ŞİRKETTE BU ZORUNLULUK YOKTUR.",
  t: "Yap-İşlet-Devret", d: 3
},
{
  q: "Yap-İşlet-Devret modelinde kamulaştırma yükümlülüğü ve kamulaştırılan taşınmazın mülkiyeti kime aittir?",
  o: ["Yükümlülük ve mülkiyet idareye aittir", "Yükümlülük ve mülkiyet özel şirkete aittir", "Yükümlülük idareye, mülkiyet şirkete aittir", "Yükümlülük şirkete, mülkiyet idareye aittir", "Bu modelde kamulaştırma yapılamaz"],
  a: 0,
  e: "Yap-İşlet-Devret modelinde YATIRIM VE HİZMETLER İÇİN KAMULAŞTIRMA YAPILMASI GEREKİYORSA BUNU YAPMA İDARENİN YÜKÜMLÜLÜĞÜNDEDİR. KAMULAŞTIRILAN TAŞINMAZIN MÜLKİYETİ DE İDAREYE AİTTİR.",
  t: "Yap-İşlet-Devret", d: 3
},
{
  q: "Yap-İşlet-Devret ve Yap-İşlet sözleşmelerinden doğan uyuşmazlıklar nerede çözülür?",
  o: ["Tahkim kaydı yoksa adli yargıda çözülür", "Her hâlde Danıştay'da ilk derece olarak çözülür", "Her hâlde idare mahkemesinde çözülür", "Her hâlde milletlerarası tahkimde çözülür", "Bölge idare mahkemesinde ilk derece olarak çözülür"],
  a: 0,
  e: "YAP-İŞLET-DEVRET ve YAP-İŞLET sözleşmeleri ÖZEL HUKUK SÖZLEŞMESİ olduğundan sözleşmenin uygulanmasından doğacak UYUŞMAZLIKLAR TAHKİM KAYDI YOKSA ADLİ YARGIDA ÇÖZÜLÜR.",
  t: "Yap-İşlet-Devret", d: 3
},
{
  q: "Yap-İşlet usulü hangi konuyla sınırlıdır ve sözleşme en fazla kaç yıl içindir?",
  o: ["Termik elektrik santrali; en fazla 20 yıl", "Termik elektrik santrali; en fazla 49 yıl", "Bütün enerji santralleri; en fazla 20 yıl", "Su ve kanalizasyon hizmetleri; en fazla 30 yıl", "Her konuda uygulanabilir; en fazla 49 yıl"],
  a: 0,
  e: "YAP-İŞLET USULÜ SADECE TERMİK ELEKTRİK SANTRALİ KURULMASI VE İŞLETİLMESİNE İLİŞKİNDİR. HİDROELEKTRİK, JEOTERMAL, NÜKLEER SANTRAL gibi elektrik üretimi ve satışı konusunda YAP-İŞLET USULÜ UYGULANMAZ. EN FAZLA 20 YIL için enerji satışını düzenleyen bir sözleşme yapılır. Tesisin kurulması için ENERJİ VE TABİİ KAYNAKLAR BAKANLIĞI'NIN İZNİ aranır.",
  t: "Yap-İşlet", d: 3
},
{
  q: "Yap-İşlet usulünde tesisin mülkiyeti kime aittir ve sözleşme sonunda ne olur?",
  o: ["Kuran ve işletene aittir; bedelsiz devredilmez", "Kuran ve işletene aittir; bedelsiz idareye geçer", "Baştan itibaren idareye aittir; devir gerekmez", "Ortak mülkiyettir; sonunda paylaştırılır", "Şirkete aittir; bedeli ödenerek idareye geçer"],
  a: 0,
  e: "YAP-İŞLET usulünde TESİSİN MÜLKİYETİ KURAN VE İŞLETEN KİŞİYE AİTTİR. SÖZLEŞME SONUNDA TESİS BEDELSİZ BİR ŞEKİLDE İDAREYE GEÇMEZ. Bu, YAP-İŞLET-DEVRET'ten en önemli farkıdır (YİD'de tesis sözleşme sonunda BEDELSİZ olarak idareye geçer).",
  t: "Yap-İşlet", d: 3
},
{
  q: "İmtiyaz sözleşmesinin niteliği bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Karma nitelikli ve iltihaki (katılmalı) bir sözleşmedir", "Tamamen özel hukuk sözleşmesi niteliğindedir", "Sözleşme değil tek yanlı bir idari işlemdir", "Yalnızca düzenleyici hükümlerden oluşur", "Her hükmü taraflarca serbestçe müzakere edilir"],
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
  q: "Devlet, il özel idaresi ve belediye adına imtiyaz verme yetkisi sırasıyla kimlere aittir?",
  o: ["Cumhurbaşkanı – il genel meclisi – belediye meclisi", "Cumhurbaşkanı – vali – belediye başkanı", "İlgili bakan – vali – belediye başkanı", "TBMM – il genel meclisi – belediye meclisi", "Hepsinde yetki Cumhurbaşkanına aittir"],
  a: 0,
  e: "DEVLET ADINA İMTİYAZ VERME YETKİSİ CUMHURBAŞKANINA aittir. İL ÖZEL İDARESİ adına İL GENEL MECLİSİNE aittir. BELEDİYE İDARELERİ adına BELEDİYE MECLİSİNE aittir; belediye meclisinin verdiği imtiyazlarda ÇEVRE, ŞEHİRCİLİK VE İKLİM DEĞİŞİKLİĞİ BAKANLIĞI'NIN ONAYI GEREKİR.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Belediyeler en fazla kaç yıl için imtiyaz verebilir ve hangi konularla sınırlıdır?",
  o: ["49 yıl; su, katı atık ve toplu taşıma", "49 yıl; herhangi bir konu sınırlaması yoktur", "30 yıl; her konuda imtiyaz verebilir", "20 yıl; yalnızca su hizmetleriyle sınırlı", "Süre sınırı yoktur; her konuda verebilir"],
  a: 0,
  e: "BELEDİYELER EN FAZLA 49 YIL İÇİN İMTİYAZ VEREBİLİR. Belediye yasası, belediyelerin imtiyaz verebileceği konuları SU (SAĞLAMA, UZAKLAŞTIRMA, TESİS KURMA, İŞLEME), KATI ATIK (TOPLAMA, AYRIŞTIRMA, GERİ KAZANIM) ve TOPLU TAŞIMA HİZMETLERİYLE SINIRLANDIRMIŞTIR.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyaz sözleşmesi imzalanmadan önce Danıştay'ın görüşü bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Zorunludur; 2 ayda bildirir ama bağlayıcı değildir", "Zorunludur; 2 ayda bildirir ve bağlayıcıdır", "Zorunludur; 1 ayda bildirir ve bağlayıcıdır", "Zorunlu değildir; istenirse görüş alınabilir", "Danıştay görüş değil, karar verme yetkisine sahiptir"],
  a: 0,
  e: "İmtiyaz sözleşmesi imzalanmadan önce DANIŞTAY'IN GÖRÜŞÜ ALINMAK ZORUNDADIR. DANIŞTAY 2 AY İÇİNDE DÜŞÜNCESİNİ BİLDİRİR. (1999 Anayasa değişikliği öncesi Danıştay'ın İNCELEME YETKİSİ bulunmaktaydı.) DANIŞTAY'IN BU GÖRÜŞÜ BAĞLAYICI DEĞİLDİR.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyaz veren idarenin yetkileri arasında aşağıdakilerden hangisi vardır?",
  o: ["Mali koşullar hariç tek yanlı değişiklik yapmak", "Mali koşullar dahil tek yanlı değişiklik yapmak", "Sözleşmeyi hiçbir hâlde feshedememek", "Hizmet ücretini belirleme yetkisini imtiyazcıya bırakmak", "İmtiyazcıyı denetim ve yaptırımdan muaf tutmak"],
  a: 0,
  e: "İMTİYAZ VEREN İDARENİN YETKİLERİ: 1) HİZMETTEN ALINACAK ÜCRETİ BELİRLER. 2) DENETİM VE YAPTIRIM UYGULAMA yetkisine sahiptir. 3) DEĞİŞKENLİK İLKESİNİN gereği olarak SÖZLEŞMEDE TEK YANLI DEĞİŞİKLİK YAPMA yetkisine sahiptir (SÖZLEŞMENİN MALİ KOŞULLARI HARİÇ); bu yetkinin kullanımı YENİ DURUM VE ŞARTLARIN ORTAYA ÇIKMASI halinde söz konusu olur. 4) TEK YANLI FESİH yetkisine sahiptir.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyaz sözleşmesinde ıskat ve rachat arasındaki fark nedir?",
  o: ["Iskat ağır kusura, rachat kamu yararına dayanır", "Rachat ağır kusura, ıskat kamu yararına dayanır", "Her ikisi de imtiyazcının kusuruna dayanır", "Her ikisinde de imtiyazcıya tazminat ödenmez", "Her ikisi de imtiyazcının talebiyle gerçekleşir"],
  a: 0,
  e: "IŞKAT: fesih İMTİYAZ SAHİBİNİN AĞIR KUSURU nedeniyle gerçekleşir. RACHAT: İMTİYAZ SAHİBİNİN HİÇBİR KUSURU BULUNMASA BİLE, HİZMET VE KAMU YARARININ GEREKTİRDİĞİ hallerde de feshedilebilir. RACHAT USULÜYLE HİZMETİ SATIN ALMASI durumunda İMTİYAZCININ ZARARLARININ KARŞILANMASI GEREKİR.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyazcının kullanıcılardan ücret alma hakkı bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Ücreti şartnamedeki tarifeye uyarak alır", "Ücreti tümüyle serbestçe belirleyebilir", "Ücreti idarenin onayıyla her yıl artırabilir", "Hizmetten hiçbir biçimde ücret alamaz", "Ücreti yalnızca mahkeme belirleyebilir"],
  a: 0,
  e: "İMTİYAZCININ HAKLARI: 1) SÜBVANSİYON, KREDİ, LEHİNE KAMULAŞTIRMA gibi avantajları talep etme hakkı. 2) VERDİĞİ HİZMET KARŞILIĞINDA KULLANICILARDAN ÜCRET ALMA HAKKI — FAKAT BU ÜCRETİ SERBESTÇE BELİRLEYEMEZ, ŞARTNAMEDE ÖNGÖRÜLEN TARİFEYE UYMAK ZORUNDADIR. 3) SÖZLEŞMENİN MALİ DENGESİNİN KORUNMASINI İSTEME hakkı.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Savaş, doğal afet, salgın veya ekonomik kriz gibi öngörülemeyen haller sözleşmenin mali dengesini altüst ederse imtiyaz sahibinin idareden tazminat talep edebilmesine ne ad verilir?",
  o: ["Öngörülmezlik (imprevizyon)", "Fait du prince (egemen olgusu)", "Rachat (kamu yararına fesih)", "Iskat (kusura dayalı fesih)", "Fedakârlığın denkleştirilmesi"],
  a: 0,
  e: "ÖNGÖRÜLMEZLİK (İMPREVİZYON) İLKESİ: İMTİYAZI VEREN İDARE İLE İMTİYAZ SAHİBİNE ATFEDİLEMEYECEK OLAN ve SÖZLEŞME AKDEDİLDİĞİ SIRADA ÖNGÖRÜLMESİ MÜMKÜN OLMAYAN HALLER (SAVAŞ, DOĞAL AFET, SALGIN HASTALIK, EKONOMİK KRİZ gibi) dolayısıyla SÖZLEŞMENİN MALİ DENGESİNİN TAMAMEN ALTÜST OLMASI durumunda imtiyaz sahibi İDAREDEN TAZMİNAT TALEP EDEBİLİR. Bu ilke kamu hizmetlerinde SÜREKLİLİK İLKESİNİN bir yansımasıdır.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Öngörülmezlik ilkesinin uygulanabilmesi için gereken koşullar arasında aşağıdakilerden hangisi vardır?",
  o: ["Kârdaki azalmanın hizmeti engelleyecek boyuta ulaşması", "Kârda herhangi bir miktarda azalma olması", "İdarenin kusurlu bulunduğunun kanıtlanması", "İmtiyazcının kusurlu bulunduğunun kanıtlanması", "Sözleşmenin önceden feshedilmiş olması"],
  a: 0,
  e: "ÖNGÖRÜLMEZLİK İLKESİNİN uygulanabilmesi için ÜÇ KOŞULUN BİRLİKTE gerçekleşmesi gerekir: ▪ Sözleşmenin ifasını önemli derecede güçleştiren olayların SÖZLEŞME YAPILDIĞI ESNADA BİLİNMEYEN VE ÖNGÖRÜLEMEYECEK NİTELİKTE olması. ▪ Bu olayların TARAFLARIN İRADELERİNİN DIŞINDA gerçekleşmiş olması. ▪ İMTİYAZ ALANIN KÂRINDA ÖNEMSİZ BİR AZALMA YETERLİ OLMAYIP, bunun KAMU HİZMETİNİN YERİNE GETİRİLMESİNİ BÜYÜK ÖLÇÜDE ENGELLEYECEK BOYUTLARA ULAŞMASI gerekir.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Öngörülmez olaylar süreklilik arz ederse (mücbir sebep) taraflar ne yapabilir?",
  o: ["Yeni sözleşme yapabilir veya fesih talep edebilir", "Sözleşme kendiliğinden sona ermiş sayılır", "Yalnızca idare tek yanlı fesih yapabilir", "Tazminat ödenerek sözleşme aynen sürdürülür", "Herhangi bir hukuki imkân bulunmaz"],
  a: 0,
  e: "Öngörülmezlik şartları gerçekleştiğinde imtiyazcı ZARARININ PAYLAŞILMASINI (TAZMİNAT) veya KOLAYLIKLAR SAĞLANMASINI talep edebilir. Bu yardımlar GEÇİCİ NİTELİKTEDİR; öngörülemez olayın etkisi ortadan kalkınca sona erer. EĞER ÖNGÖRÜLEMEZ OLAYLAR SÜREKLİLİK ARZ EDERSE (MÜCBİR SEBEP) TARAFLAR YENİ BİR SÖZLEŞME YAPABİLECEĞİ GİBİ MAHKEMEYE BAŞVURARAK SÖZLEŞMENİN FESHİNİ DE TALEP EDEBİLİRLER.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Fait du prince (egemen olgusu) ilkesi hangi halde uygulanmaz?",
  o: ["Sözleşmeyi yapan idare dışındaki makamın işlemlerinde", "Sözleşmeyi yapan idarenin kendi işlemlerinde", "Doğal afet ve salgın gibi olaylarda", "İmtiyazcının kusurunun bulunduğu hâllerde", "Üçüncü kişilerin fiillerinin bulunduğu hâllerde"],
  a: 0,
  e: "FAIT DU PRINCE (EGEMEN OLGUSU) İLKESİ: SÖZLEŞMENİN TARAFI OLAN İDARENİN İŞLEM YA DA EYLEMLERİ nedeniyle sözleşme koşullarının İMTİYAZCI ALEYHİNE BOZULMASI durumunda imtiyazcı, sözleşmeci idareden ZARARLARININ TAMAMININ GİDERİLMESİNİ talep edebilir. SÖZLEŞMEYİ YAPAN İDARE DIŞINDA BAŞKA BİR İDARİ MAKAMIN eylem ve işlemleri nedeniyle bozulma halinde BU İLKE UYGULANMAZ — bu durumda diğer şartlar da varsa ÖNGÖRÜLMEZLİK İLKESİ uygulanabilir.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyazcının yükümlülükleri arasında aşağıdakilerden hangisi vardır?",
  o: ["Sözleşmeyi bizzat ifa etmek; izinsiz devretmemek", "Hizmeti dilediği kişiye serbestçe devretmek", "İdarenin denetimine katlanmaktan muaf olmak", "İdarenin tek yanlı değişikliklerini reddetmek", "Kamu hizmeti ilkelerine bağlı olmamak"],
  a: 0,
  e: "İMTİYAZCININ YÜKÜMLÜLÜKLERİ: 1) KAMU HİZMETİNE EGEMEN OLAN İLKELERE VE SÖZLEŞME ŞARTLARINA UYGUN biçimde sözleşmeyi ifa etmek. 2) SÖZLEŞMEYİ BİZZAT İFA ETMEK — İDARENİN İZNİ OLMADAN HİZMETİN İFASINI BAŞKASINA DEVREDEMEZ. 3) İDARENİN GÖZETİM VE DENETİMİNE KATLANMAK. 4) İDARENİN YAPACAĞI TEK YANLI DEĞİŞİKLİKLERİ KABUL ETMEK.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Anayasa m. 125'te 1999 yılında yapılan değişiklikle imtiyaz uyuşmazlıkları bakımından ne getirilmiştir?",
  o: ["Tahkim; milletlerarası tahkim için yabancılık unsuru şart", "Tahkim; her uyuşmazlık için milletlerarası tahkim mümkün", "Tahkim yolu tümüyle yasaklanmıştır", "Yalnızca milli tahkim öngörülebilir", "Uyuşmazlıklar adli yargıda çözülür"],
  a: 0,
  e: "AY m. 125'te 1999 yılında yapılan değişiklikle: 'KAMU HİZMETLERİ İLE İLGİLİ İMTİYAZ ŞARTLAŞMA VE SÖZLEŞMELERİNDE BUNLARDAN DOĞAN UYUŞMAZLIKLARIN MİLLİ VEYA MİLLETLERARASI TAHKİM YOLUYLA ÇÖZÜLMESİ ÖNGÖRÜLEBİLİR. MİLLETLERARASI TAHKİME ANCAK YABANCILIK UNSURU TAŞIYAN UYUŞMAZLIKLAR İÇİN GİDİLEBİLİR.'",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "İmtiyaz sözleşmesinde tahkim yolu öngörülmemişse uyuşmazlık hangi mercide çözülür?",
  o: ["İlk derece mahkemesi olarak Danıştay'da", "İlk derece mahkemesi olarak idare mahkemesinde", "Asliye hukuk mahkemesinde", "Bölge idare mahkemesinde", "Anayasa Mahkemesinde"],
  a: 0,
  e: "İmtiyaz sözleşmesinde TAHKİM YOLU ÖNGÖRÜLMEMİŞSE uyuşmazlık İLK DERECE MAHKEMESİ OLARAK DANIŞTAYCA ÇÖZÜLÜR (Danıştay Kanunu m. 24). TAHKİM ÖNGÖRÜLMÜŞSE uyuşmazlık tahkim tarafından çözülür; tahkim kararlarına karşı BÖLGE ADLİYE MAHKEMESİNDE İPTAL DAVASI açılabilir ve iptal davası üzerine verilen kararlara karşı YARGITAY'DA TEMYİZ yoluna başvurulabilir.",
  t: "İmtiyaz Sözleşmesi", d: 3
},
{
  q: "Anayasanın 125. maddesine göre idarenin mali sorumluluğu nasıl düzenlenmiştir?",
  o: ["Kendi eylem ve işlemlerinden doğan zararı öder", "Yalnızca kusurlu eylemlerinden doğan zararı öder", "Yalnızca kusursuz eylemlerinden doğan zararı öder", "Yalnızca kanunda sayılan hâllerde zararı öder", "Hiçbir hâlde zararı ödemekle yükümlü değildir"],
  a: 0,
  e: "AY m. 125: 'İDARE, KENDİ EYLEM VE İŞLEMLERİNDEN DOĞAN ZARARI ÖDEMEKLE YÜKÜMLÜDÜR.'",
  t: "İdarenin Mali Sorumluluğu", d: 2
},
{
  q: "Hizmet kusuru hangi halleri kapsar?",
  o: ["Kötü işleme, geç işleme ve hiç işlememe", "Yalnızca hizmetin hiç işlememesi hâli", "Yalnızca hizmetin geç işlemesi hâli", "Yalnızca hizmetin kötü işlemesi hâli", "Yalnızca memurun kişisel kusuru hâli"],
  a: 0,
  e: "HİZMET KUSURU, hizmetin KURULMASINDA VE İŞLEYİŞİNDE meydana gelen aksaklıklardır: 1) HİZMETİN KÖTÜ İŞLEMESİ, 2) HİZMETİN GEÇ İŞLEMESİ, 3) HİZMETİN HİÇ İŞLEMEMESİ.",
  t: "İdarenin Mali Sorumluluğu", d: 2
},
{
  q: "Kamu görevlisinin hizmet içi kişisel kusuru sayılıp idarenin rücu hakkını doğuran haller arasında aşağıdakilerden hangisi vardır?",
  o: ["Yargı kararlarına uymaması ve ağır kusuru", "Görevi sırasındaki hafif ihmalleri", "Hizmet dışındaki özel davranışları", "Görevini kanuna uygun yerine getirmesi", "Amirinin yazılı emrini uygulaması"],
  a: 0,
  e: "Kamu görevlisinin HİZMET İÇİ KİŞİSEL KUSURU sayılan ve idarenin RÜCU HAKKI doğuran haller: ▪ KAMU GÖREVLİSİNİN SUÇ NİTELİĞİNDEKİ DAVRANIŞLARI, ▪ YARGI KARARLARINA UYMAMASI, ▪ KÖTÜ NİYETLİ DAVRANIŞLARI, ▪ AĞIR KUSURU. Kamu görevlilerinin kişisel kusurları bulunsa bile zarar gören tazminatı YİNE İDAREDEN istemek zorundadır (AY m. 129/5, m. 40/3).",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Kamu görevlisinin hizmet dışı kişisel kusuru halinde zarar gören kime, nerede dava açar?",
  o: ["İlgili memura adli yargıda dava açabilir", "İlgili idareye idari yargıda dava açabilir", "İlgili memura idari yargıda dava açabilir", "İlgili idareye adli yargıda dava açabilir", "Hiçbir merciye dava açma imkânı bulunmaz"],
  a: 0,
  e: "Kamu görevlilerinin TAMAMEN HİZMET DIŞINDAKİ kusurlu tutum ve davranışları onların SALT KİŞİSEL KUSURLU DAVRANIŞLARI sayılır ve HAKSIZ FİİL esaslarına göre ŞAHSEN SORUMLU olmalarına yol açar (HİZMET DIŞI KİŞİSEL KUSUR). Bu durumda zarar gören kişi DOĞRUDAN İLGİLİ MEMURA ADLİ YARGIDA TAZMİNAT DAVASI AÇABİLİR.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "İdarenin kusursuz sorumluluğu kaç temel ilke altında toplanır ve bunlar nelerdir?",
  o: ["İki: tehlike ve kamu külfetleri karşısında eşitlik", "Üç: tehlike, hakkaniyet ve özen yükümlülüğü", "Bir: yalnızca tehlike (risk) ilkesi", "Dört: tehlike, eşitlik, hakkaniyet ve özen", "Beş: tehlike, eşitlik, hakkaniyet, özen ve kusur"],
  a: 0,
  e: "İdarenin KUSURSUZ SORUMLULUK halleri İKİ BAŞLIK altında toplanır: 1) TEHLİKE (RİSK) İLKESİ — idarenin tehlikeli faaliyetleri/araç-gereçleri, MESLEKİ RİSK, SOSYAL RİSK. 2) KAMU KÜLFETLERİ KARŞISINDA EŞİTLİK (FEDAKARLIĞIN DENKLEŞTİRİLMESİ) İLKESİ. Kusursuz sorumluluğun ilke ve esasları YARGI İÇTİHATLARIYLA belirlenmiştir.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Kamu hizmetinde çalışan kişinin görevi nedeniyle uğradığı zararın, idarenin kusuru olmasa bile tazmin edilmesine ne ad verilir?",
  o: ["Mesleki risk", "Sosyal risk", "Hizmet kusuru", "Fedakârlığın denkleştirilmesi", "Öngörülmezlik"],
  a: 0,
  e: "MESLEKİ RİSK: KAMU HİZMETİNDE ÇALIŞAN KİŞİNİN GÖREVİ NEDENİYLE ZARARA UĞRAMASI halinde ortaya çıkan zarar, İDARENİN KUSURU OLMASA BİLE İDARECE TAZMİN OLUNUR. Tehlike (risk) ilkesinin bir alt başlığıdır.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Sosyal risk ilkesinin en belirgin özelliği nedir?",
  o: ["Nedensellik bağı olmadan sorumluluk doğması", "Nedensellik bağının mutlaka aranması", "İdarenin kusurunun mutlaka aranması", "Yalnızca kamu görevlilerinin zararını kapsaması", "Yalnızca tehlikeli faaliyetlere ilişkin olması"],
  a: 0,
  e: "SOSYAL RİSK: TERÖR FAALİYETLERİ nedeniyle bireyler zarar görürlerse bu zararın İDARE TARAFINDAN KARŞILANMASINI ifade eder. Burada aslında zarar İDARENİN BİR EYLEMİNDEN KAYNAKLANMAMAKTADIR. KİŞİLERİN GÖRDÜĞÜ ZARARLA İDARENİN EYLEMİ ARASINDA HERHANGİ BİR NEDENSELLİK BAĞININ BULUNMAMASINA RAĞMEN İDARENİN OLUŞAN ZARARDAN SORUMLULUĞU SÖZ KONUSUDUR.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "İdarenin kamuya yararlı bir faaliyeti sırasında, kusuru olmasa bile faaliyetin doğası gereği bazı kişilerin gördüğü zararın tazmin edilmesine ne ad verilir?",
  o: ["Kamu külfetleri karşısında eşitlik", "Sosyal risk ilkesi", "Mesleki risk ilkesi", "Hizmet kusuru sorumluluğu", "Tehlikeli faaliyet sorumluluğu"],
  a: 0,
  e: "KAMU KÜLFETLERİ KARŞISINDA EŞİTLİK (FEDAKARLIĞIN DENKLEŞTİRİLMESİ) İLKESİ: idarenin KAMUYA YARARLI BİR FAALİYETİ esnasında, İDARENİN KUSURU OLMASA BİLE, bu faaliyetin DOĞASI GEREĞİ BAZI KİŞİLERİN ZARAR GÖRMESİ durumunda oluşan zararın idarece tazmin edilmesidir. Tüm toplumun göreceği bir yarar nedeniyle bazı kişilerin gördüğü istisnai zarara SADECE ZARAR GÖRENLERİN DEĞİL, TÜM TOPLUMUN KATLANMASININ hakkaniyete uygun olacağı düşüncesi üstün gelir.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "İdarenin mali sorumluluğunun şartları hangileridir?",
  o: ["İdari davranış, zarar ve illiyet bağı", "İdarenin kusuru, zarar ve illiyet bağı", "İdari davranış, kusur ve zararın varlığı", "Yalnızca zararın varlığı ve ispatı", "Kusur, kast ve zararın birlikte varlığı"],
  a: 0,
  e: "İdarenin kusurlu ya da kusursuz sorumluluğundan bahsedebilmek için MUTLAKA ŞU ÜÇ ŞARTIN VARLIĞI aranır: 1) İDARİ DAVRANIŞ (idari işlem veya idari eylem; İCRAİ olabileceği gibi İHMALİ de olabilir), 2) ZARAR (MADDİ veya MANEVİ; henüz doğmamakla birlikte İLERİDE DOĞACAĞI KESİN olan zararların da tazmini istenebilir), 3) NEDENSELLİK (İLLİYET) BAĞI.",
  t: "İdarenin Mali Sorumluluğu", d: 2
},
{
  q: "Mücbir sebep (zorlayıcı nedenler) idarenin sorumluluğunu nasıl etkiler?",
  o: ["Kusurlu ve kusursuz sorumluluğun ikisini de kaldırır", "Yalnızca kusursuz sorumluluğu ortadan kaldırır", "Yalnızca kusurlu sorumluluğu ortadan kaldırır", "Sorumluluğu hiçbir biçimde etkilemez", "Sorumluluğu yalnızca yarı orana indirir"],
  a: 0,
  e: "ZORLAYICI NEDENLER (MÜCBİR SEBEP): idarenin iradesi DIŞINDA oluşan, öngörülebilmesi ve kaçınılması mümkün olmayan ve kamu hizmetinin yürütülmesini İMKANSIZLAŞTIRAN olaylardır. MÜCBİR NEDENLER, İDARENİN KUSURLU VE KUSURSUZ SORUMLULUĞUNU KALDIRIR.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Beklenmeyen durumlar (kaza) idarenin sorumluluğunu nasıl etkiler?",
  o: ["Kusurlu sorumluluğu kaldırır, kusursuzu kaldırmaz", "Kusursuz sorumluluğu kaldırır, kusurluyu kaldırmaz", "Kusurlu ve kusursuz sorumluluğun ikisini de kaldırır", "Sorumluluğu hiçbir biçimde etkilemez", "Sorumluluğu yalnızca yarı orana indirir"],
  a: 0,
  e: "BEKLENMEYEN DURUMLAR (KAZA): İDARENİN DAVRANIŞI İÇİNDE gerçekleşen, öngörülebilmesi ve kaçınılması mümkün olmayan olaylardır. BEKLENMEYEN DURUMLAR, İDARENİN KUSURLU SORUMLULUĞUNU KALDIRIR FAKAT İDARENİN KUSURSUZ SORUMLULUĞU DEVAM EDER. (Mücbir sebepten farkı budur — mücbir sebep her ikisini de kaldırır.)",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "Zarar görenin kusuru ve üçüncü kişinin kusuru idarenin sorumluluğunu nasıl etkiler?",
  o: ["Kusurlu ve kusursuz sorumluluğun ikisini de kaldırır", "Yalnızca kusurlu sorumluluğu ortadan kaldırır", "Yalnızca kusursuz sorumluluğu ortadan kaldırır", "Sorumluluğu hiçbir biçimde etkilemez", "Sorumluluğu yalnızca yarı orana indirir"],
  a: 0,
  e: "ZARAR GÖRENİN KUSURU: zararın bizzat zarar görenin kusuru nedeniyle oluşması durumunda İDARENİN HEM KUSURLU HEM DE KUSURSUZ SORUMLULUĞU ORTADAN KALKAR. ÜÇÜNCÜ KİŞİNİN KUSURU: zararı doğuran davranış üçüncü kişinin davranışı ise İDARENİN KUSURLU VE KUSURSUZ SORUMLULUĞU ORTADAN KALKAR.",
  t: "İdarenin Mali Sorumluluğu", d: 3
},
{
  q: "İdari işlem nasıl tanımlanır?",
  o: ["Kamu gücüyle hukuk düzeninde değişiklik yaratan irade", "İdarenin bütün faaliyet ve davranışları", "İdarenin yaptığı özel hukuk sözleşmeleri", "İdarenin hukuki sonuç doğurmayan maddi eylemleri", "İdarenin birimleri arasındaki iç yazışmaları"],
  a: 0,
  e: "İDARİ İŞLEM: İDARENİN KAMU GÜCÜ AYRICALIKLARINI KULLANARAK YAPTIĞI VE HUKUK DÜZENİNDE DEĞİŞİKLİK MEYDANA GETİREN İRADE AÇIKLAMALARIDIR.",
  t: "İdari İşlemler", d: 2
},
{
  q: "Tek taraflı idari işlemler kaça ayrılır ve bunlar nelerdir?",
  o: ["Üçe: düzenleyici, bireysel ve genel kararlar", "İkiye: düzenleyici ve bireysel işlemler", "Dörde: düzenleyici, bireysel, genel ve karma", "Beşe: düzenleyici, bireysel, genel, ara ve karma", "Ayrılmaz; tek bir tür olarak kabul edilir"],
  a: 0,
  e: "TEK TARAFLI İDARİ İŞLEMLER ÜÇE ayrılır: 1) DÜZENLEYİCİ İŞLEMLER (genel, soyut ve sürekli kurallar koyan; CBK, YÖNETMELİK, ADSIZ DÜZENLEYİCİ İŞLEMLER — genelge, yönerge, talimatname), 2) BİREYSEL (BİREL) İŞLEMLER / İDARİ KARARLAR (belli bir kişi/duruma yönelik), 3) GENEL KARARLAR (ARA İŞLEMLER) — GENELE YÖNELİK OLMAKLA BİRLİKTE GEÇİCİ NİTELİKTEKİ, SOMUT BİR DURUMA İLİŞKİN kural koyan işlemler.",
  t: "İdari İşlemler", d: 3
},
{
  q: "İki taraflı idari işlemler (idari sözleşmeler) nasıl tanımlanır?",
  o: ["Karşılıklı irade açıklamalarıyla oluşan işlemler", "İdarenin tek yanlı iradesiyle yapılan işlemler", "İdarenin yalnızca özel hukuk sözleşmeleri", "Genel ve soyut kural koyan düzenleyici işlemler", "İdarenin aldığı genel kararlar (ara işlemler)"],
  a: 0,
  e: "İKİ TARAFLI İDARİ İŞLEMLER (İDARİ SÖZLEŞMELER): İDARE İLE İLGİLİSİNİN KARŞILIKLI OLARAK AÇIKLADIKLARI İRADELERİNİN OLUŞUMU SONUCU YAPILAN İŞLEMLERDİR. TEK TARAFLI işlemler ise İLGİSİNİN RIZA VE MUVAFAKATİNE BAĞLI OLMADAN idarenin tek taraflı iradesiyle yapılan işlemlerdir.",
  t: "İdari İşlemler", d: 2
},
{
  q: "Olağan dönem Cumhurbaşkanlığı kararnamesi hangi konularda çıkarılabilir?",
  o: ["Yürütme yetkisine ilişkin bütün konularda", "Sadece Cumhurbaşkanlığı teşkilatına ilişkin konularda", "Her konuda", "Sadece bakanlıkların kuruluşuna ilişkin", "Temel haklar dahil her konuda"],
  a: 0,
  e: "2017 Anayasa değişikliği öncesinde CBK'nın kapsamı Cumhurbaşkanlığı Genel Sekreterliği ile sınırlıydı; YENİ SİSTEMDE Cumhurbaşkanlığı kararnamesi 'YÜRÜTME YETKİSİNE İLİŞKİN BÜTÜN KONULARDA' ÇIKARILABİLİR. (Cumhurbaşkanlığı Genel Sekreterliği 2017 değişikliğiyle KALDIRILMIŞTIR.) CBK ASLİ BİR YETKİ kullanımıdır.",
  t: "Cumhurbaşkanlığı Kararnamesi", d: 2
},
{
  q: "Cumhurbaşkanlığı kararnamesi ile Anayasanın ikinci kısmındaki haklardan hangi bölüm düzenlenebilir?",
  o: ["Yalnızca üçüncü bölümdeki sosyal haklar", "Yalnızca ikinci bölümdeki kişi hakları", "Yalnızca dördüncü bölümdeki siyasi haklar", "Bütün bölümlerdeki temel haklar", "Hiçbir bölümdeki haklar düzenlenemez"],
  a: 0,
  e: "CBK ile Anayasanın İKİNCİ KISMININ BİRİNCİ VE İKİNCİ BÖLÜMLERİNDE yer alan temel haklar (m. 13-16), KİŞİ HAKLARI VE ÖDEVLERİ (m. 17-40) ve DÖRDÜNCÜ BÖLÜMDE yer alan SİYASİ HAKLAR VE ÖDEVLER (m. 66-74) DÜZENLENEMEZ. YALNIZCA ÜÇÜNCÜ BÖLÜMDE YER ALAN 'SOSYAL HAKLAR'DA DÜZENLEME YAPILABİLİR.",
  t: "Cumhurbaşkanlığı Kararnamesi", d: 3
},
{
  q: "Cumhurbaşkanlığı kararnamesi ile kanun arasında çelişki olursa ne olur?",
  o: ["Kanun uygulanır; sonra çıkan kanun CBK'yı hükümsüz kılar", "Cumhurbaşkanlığı kararnamesi hükümleri uygulanır", "Çelişkiyi Anayasa Mahkemesi karara bağlar", "Her ikisi de birlikte uygulanmaya devam eder", "CBK kanun hükmünde olduğu için önce gelir"],
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
  o: ["AYM denetimine tabi değildir; kanun hükmündedir", "AYM denetimine tabidir; kanun hükmünde değildir", "Danıştay denetimine tabidir; kanun hükmündedir", "İdari yargı denetimine tabidir; kanun hükmündedir", "Denetim yolu yoktur; kanun hükmünde de değildir"],
  a: 0,
  e: "OHAL CBK'LARI ANAYASA MAHKEMESİ'NİN DENETİMİNE TABİ DEĞİLDİR ve BU DÖNEMDE ÇIKARILAN KARARNAMELER KANUN HÜKMÜNDEDİR. Ayrıca AY m. 104/17'deki sınırlamalara TABİ DEĞİLDİR: SERT ÇEKİRDEK HAKLAR DIŞINDA TÜM HAKLARDA, MÜNHASIRAN KANUNLA düzenlenmesi öngörülen konularda ve KANUNDA AÇIKÇA DÜZENLENEN konularda düzenleme yapabilir.",
  t: "Cumhurbaşkanlığı Kararnamesi", d: 3
},
{
  q: "OHAL Cumhurbaşkanlığı kararnameleri Meclis onayına sunulduktan sonra hangi süre içinde görüşülüp karara bağlanmalıdır?",
  o: ["3 ay", "1 ay", "6 ay", "1 yıl", "Görüşülmesi zorunlu değildir"],
  a: 0,
  e: "OHAL CBK'ları RESMİ GAZETEDE YAYIMLANIR, AYNI GÜN MECLİS ONAYINA SUNULUR. SAVAŞ VE MÜCBİR SEBEPLERLE TBMM'NİN TOPLANAMAMASI HARİÇ olmak üzere; olağanüstü hal sırasında çıkarılan CBK'lar 3 AY İÇERİSİNDE TBMM'DE GÖRÜŞÜLÜR VE KARARA BAĞLANIR. AKSİ HALDE KENDİLİĞİNDEN YÜRÜRLÜKTEN KALKAR.",
  t: "Cumhurbaşkanlığı Kararnamesi", d: 3
},
{
  q: "Yönetmelik çıkarma yetkisi kimlere aittir?",
  o: ["Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri", "Yalnızca kamu tüzel kişileri ve valilikler", "Yalnızca Cumhurbaşkanı ve bakanlıklar", "Yalnızca TBMM ve Cumhurbaşkanı", "Yalnızca bakanlıklar ve bağlı kuruluşları"],
  a: 0,
  e: "YÖNETMELİK, CUMHURBAŞKANI, BAKANLIKLAR ve KAMU TÜZEL KİŞİLERİ tarafından çıkarılabilir. SEBEBİ: KANUNLARIN VE CUMHURBAŞKANLIĞI KARARNAMELERİNİN UYGULANMASINI SAĞLAMAK. STATÜSÜ: KANUNLARA VE CBK'LARA AYKIRI OLAMAZ.",
  t: "Yönetmelik", d: 2
},
{
  q: "Yönetmeliklerin Resmi Gazetede yayımlanması bakımından aşağıdakilerden hangisi doğrudur?",
  o: ["Tümü yayımlanmaz; hangileri yayımlanacağı kanunda belirtilir", "Bütün yönetmelikler Resmi Gazetede yayımlanır", "Hiçbir yönetmelik Resmi Gazetede yayımlanmaz", "Yalnızca Cumhurbaşkanlığı yönetmelikleri yayımlanır", "Yayım zorunluluğu doğrudan Anayasada düzenlenmiştir"],
  a: 0,
  e: "TÜM YÖNETMELİKLER RESMİ GAZETEDE YAYIMLANMAZ. HANGİ YÖNETMELİKLERİN RESMİ GAZETEDE YAYIMLANACAĞI KANUNDA BELİRTİLİR.",
  t: "Yönetmelik", d: 2
},
{
  q: "Ülke çapında uygulanmayacak bir yönetmeliğin yargısal denetimi hangi mahkemece yapılır?",
  o: ["İdare mahkemesi", "Danıştay", "Bölge idare mahkemesi", "Anayasa Mahkemesi", "Sayıştay"],
  a: 0,
  e: "Yönetmeliklerin YARGISAL DENETİMİ İDARİ YARGI tarafından yapılır: ▪ CUMHURBAŞKANLIĞI YÖNETMELİKLERİNİN yargısal denetimi DANIŞTAY. ▪ BAKANLIKLARIN, kamu kuruluşları ve meslek kuruluşlarınca çıkarılan ve ÜLKE ÇAPINDA UYGULANACAK yönetmeliklerin denetimi DANIŞTAY; ÜLKE ÇAPINDA UYGULANMAYACAK yönetmeliklerin denetimi ise İDARE MAHKEMELERİ tarafından yapılır.",
  t: "Yönetmelik", d: 3
},
]);

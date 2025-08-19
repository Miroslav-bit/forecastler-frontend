// lang-privacy.js (robustan za privacy.html; radi i ako kasnije dodaš -en sufikse)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  // EN: koristimo i za “povratak” na engleski
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },

    meta: {
      title: "Privacy Policy",
      effective: "Effective Date: 17 June 2025",
      updated:  "Last Updated: 15 August 2025",
      intro: "This Policy explains how Forecastler (the “Platform”, “we”, “us”, “our”) collects, uses, shares, and protects your data when you use our services. By using the Platform, you confirm that you have read and understood this Policy together with our Terms of Use and Disclaimer. If you do not agree, please do not use the Platform."
    },

    s1: {
      title: "1) Who we are (data controller)",
      p1: "<strong>Controller:</strong> Forecastler Team",
      p2: "<strong>Privacy contact:</strong> forecastlerteam@gmail.com",
      p3: "If we appoint a Data Protection Officer (DPO), we will publish their details here."
    },

    s2: {
      title: "2) Definitions",
      p1: "• <strong>Platform/Service:</strong> the Forecastler website, applications, APIs, and related systems.",
      p2: "• <strong>User:</strong> a person using the Service (registered or unregistered).",
      p3: "• <strong>Personal data:</strong> information relating to an identified or identifiable natural person.",
      p4: "• <strong>Processing:</strong> any operation performed on personal data (e.g., collection, storage, use, disclosure).",
      foot: "This Policy aligns with general data-protection principles under applicable laws (including the GDPR and the Serbian Personal Data Protection Act)."
    },

    s3: {
      title: "3) What data we collect",
      d31: "<strong>3.1 Data you provide</strong>",
      d31_1: "• Text inputs (questions, context descriptions, etc.) — used solely to generate AI answers.",
      d31_2: "• Communications with us (e.g., support requests, complaints).",
      d31_note: "<em>Note on accounts.</em> Registration is not currently enabled. We do not collect account data (name, username, password). If we introduce accounts, we will update this Policy before such processing begins.",

      d32: "<strong>3.2 Data collected automatically</strong>",
      d32_1: "• <strong>Technical and log data:</strong> IP address, access date/time, URL requests, device/browser identifiers, OS version, language settings, errors, diagnostics.",
      d32_2: "• <strong>Usage data:</strong> e.g., number of queries, clicks, page views, session duration.",

      d33: "<strong>3.3 Cookies and similar technologies (Google Analytics 4 in cookieless mode)</strong>",
      d33_1: "We do not set cookies for analytics. We use Google Analytics 4 (GA4) in a cookieless configuration, so traffic measurement relies on aggregated, non-identifying signals and does not use local device identifiers stored on your device.",
      d33_2: "Standard server logs do not contain the content of your inputs and are used solely for security and diagnostics. localStorage/sessionStorage are used only for interface functionality (see the Cookies Policy) and are not connected to GA4.",
      d33_eu_1: "<strong>GA4 privacy (EU mode):</strong>",
      d33_eu_2: "– In the EU, GA4 does not log or store IP addresses; IP is discarded before logging.",
      d33_eu_3: "– We do not enable Google Signals or advertising features; we do not personalize and do not connect GA4 to external advertising products.",
      d33_eu_4: "– We do not send GA4 any personal data (PII) such as names, email addresses, or account identifiers.",
      d33_note: "<em>Note:</em> If we later introduce cookies (e.g., for more detailed analytics or advertising), we will update this Policy and, where required, obtain your consent before setting any non-essential cookies.",

      d34: "<strong>3.4 Sensitive data</strong>",
      d34_1: "We do not seek sensitive data (e.g., health, political/religious beliefs, sexual orientation, biometrics). Please do not submit such data.",
      d34_2: "If you choose to submit them, you provide explicit consent for processing within this Policy’s scope; you may withdraw consent (see Your rights).",

      d35: "<strong>3.5 Input privacy and visibility</strong>",
      d35_1: "• Your text inputs are used solely to generate AI answers and are not publicly visible to other users.",
      d35_2: "• We do not share your inputs with other users unless you publish them via a feature you intentionally activate.",
      d35_3: "• We may use anonymized/aggregated data for statistics and service improvement, without enabling identification of you."
    },

    s4: {
      title: "4) Purposes and legal bases",
      intro: "We process data only where a legal basis exists (GDPR Art. 6 or equivalent national law):",
      p1: "• Service delivery (contract/pre-contractual steps).",
      p2: "• Security and abuse prevention (our legitimate interests).",
      p3: "• Communications (contract/legitimate interests).",
      p4: "• Marketing (only with your consent; you can withdraw at any time).",
      p5: "• Legal obligations (e.g., responding to lawful requests).",
      p6: "• Model improvement/AI evaluation (legitimate interests or consent; see §7).",
      p7: "• Usage analytics (GA4, cookieless): processing under legitimate interests (Art. 6(1)(f) GDPR) for basic traffic, performance, and stability measurement without cookies and without personalization. We conducted a balancing test and apply minimization measures (no IP logging in GA4, no PII, no advertising features). If we later introduce cookies or ad features, the legal basis for those purposes will be your consent (Art. 6(1)(a))."
    },

    s5: {
      title: "5) How we use personal data",
      p1: "• To provide core functionality (processing inputs, generating answers).",
      p2: "• To personalize the experience (e.g., interface language).",
      p3: "• To measure performance and troubleshoot technical issues.",
      p4: "• To prevent abuse (spam, malicious activity).",
      p5: "• To communicate with you (support, service notices, optional newsletters).",
      p6: "• To analyze aggregated trends and improve model/service quality.",
      p7: "• “No-storage” mode: when enabled, text inputs are retained only as technically necessary to generate the answer, then deleted or anonymized."
    },

    s6: {
      title: "6) Sharing of data",
      intro: "We do not sell personal data. We may share data:",
      p1: "• With processors (hosting, security, technical support) acting on our instructions under a data-processing agreement (without any right to publish your inputs).",
      p2: "• With third parties at your request/consent (e.g., integrations).",
      p3: "• For legal compliance (in response to lawful requests by authorities).",
      p4: "• In corporate changes (merger/acquisition/reorganization), with appropriate safeguards and notice.",
      p5: "• <strong>Processor – analytics:</strong> we use Google Ireland Limited (Google Analytics 4) as our processor for cookieless traffic measurement. In limited cases, data may be transferred to related entities of Google LLC (USA) with appropriate safeguards (e.g., Standard Contractual Clauses and/or other valid transfer mechanisms). GA4 is configured with no IP logging, no Google Signals, and no PII.",
      foot: "If we use third-party analytics/advertising services in the future, you will be informed in the Cookies Policy and/or a preferences center."
    },

    s7: {
      title: "7) AI processing, profiling, and automated decision-making",
      lead: "The Platform generates YES/NO answers and probability percentages using AI models for informational purposes and does not produce legal or similarly significant effects about you without human involvement.",
      p1: "• Your information may be used for evaluations and model improvement based on legitimate interests or your consent, with available opt-out mechanisms.",
      p2: "• We will apply pseudonymization/anonymization where reasonably possible and lawful."
    },

    s8: {
      title: "8) International transfers",
      p1: "Data may be processed outside your jurisdiction. We apply appropriate safeguards (e.g., Standard Contractual Clauses, adequacy decisions, technical/organizational measures) to ensure a protection level consistent with applicable law.",
      p2: "Where necessary for GA4, we rely on valid transfer mechanisms and apply minimization (no cookies, no IP, no PII)."
    },

    s9: { title: "9) Data security", p1: "We implement technical and organizational measures (access control, in-transit encryption, segmentation, access logging, regular security reviews). No system is 100% secure; you are responsible for keeping any access credentials confidential." },

    s10: {
      title: "10) Data retention",
      intro: "We keep data only as long as necessary for the purposes in this Policy, unless a longer period is required or permitted by law. As a guideline:",
      p1: "• <strong>Log/technical records:</strong> typically 12–24 months.",
      p2: "• <strong>localStorage/sessionStorage:</strong> on your device until you delete it or the app resets local data.",
      p3: "• <strong>Analytics (GA4, cookieless):</strong> retained according to GA4’s event-data settings — up to 2 months (default) or up to 14 months if we expressly extend it; then deleted or anonymized. Aggregated reports (without user identification) may be kept longer for historical metrics.",
      nostore: "<strong>“No-storage” mode:</strong> inputs are not retained after processing completes (except short technical logs without the input text itself)."
    },

    s11: {
      title: "11) Your rights",
      p1: "Subject to law, you have the right to be informed and to access your data; to rectify inaccuracies; to erase data (“right to be forgotten”); to restrict processing; to data portability; to object (to processing based on legitimate interests or to direct marketing); and to withdraw consent (without affecting prior lawful processing).",
      p2: "You may request deletion of your text inputs and related personal data. After verifying your identity, we will delete/anonymize them within a reasonable time, unless retention is legally required.",
      p3: "You also have the right to object to analytics processing based on legitimate interests; in such case we will stop processing your data for that purpose unless we demonstrate compelling legitimate grounds.",
      p4: "Send requests to forecastlerteam@gmail.com. We will respond within 30 days or the statutory period. You also have the right to lodge a complaint with the Serbian Data Protection Authority or the authority in your country of residence."
    },

    s12: { title: "12) Children and minors", p1: "The Platform is not intended for persons under 13. Individuals 13–18 may use the Platform with parental/guardian consent and supervision. If you believe we process a child’s data without a valid basis, please contact us." },

    s13: { title: "13) Third-party links", p1: "External sites have their own policies; we are not responsible for their content or practices. We recommend reviewing their policies before use." },

    s14: { title: "14) Marketing communications", p1: "We send marketing messages only with your consent. You can unsubscribe at any time (via the email link or by contacting us per §1). Service notices may be exempt from opt-out." },

    s15: { title: "15) Changes to this Policy", p1: "We may update this Policy from time to time. New versions will be posted with an updated date; your continued use of the Platform signifies acceptance of the changes." },

    s16: { title: "16) Language versions", p1: "The Platform may be available in multiple languages. In case of any inconsistency between translations, the English version prevails unless mandatory rules of your residence require otherwise." },

    s17: { title: "17) Contact", p1: "Forecastler Team", p2: "Email: forecastlerteam@gmail.com" }
  },

  // SR prevod
  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },

    meta: {
      title: "Politika privatnosti",
      effective: "Datum stupanja na snagu: 17. jun 2025.",
      updated:  "Poslednje ažuriranje: 15. avgust 2025.",
      intro: "Ova Politika objašnjava kako Forecastler („Platforma“, „mi“, „nas“, „naše“) prikuplja, koristi, deli i štiti vaše podatke kada koristite naše usluge. Korišćenjem Platforme potvrđujete da ste pročitali i razumeli ovu Politiku zajedno sa Uslovima korišćenja i Odricanjem od odgovornosti. Ako se ne slažete, molimo vas da ne koristite Platformu."
    },

    s1: {
      title: "1) Ko smo mi (rukovalac podacima)",
      p1: "<strong>Rukovalac:</strong> Forecastler tim",
      p2: "<strong>Kontakt za privatnost:</strong> forecastlerteam@gmail.com",
      p3: "Ako imenujemo lice za zaštitu podataka (DPO), objavićemo njegove podatke ovde."
    },

    s2: {
      title: "2) Definicije",
      p1: "• <strong>Platforma/Usluga:</strong> veb-sajt Forecastler, aplikacije, API-ji i povezani sistemi.",
      p2: "• <strong>Korisnik:</strong> lice koje koristi Uslugu (registrovano ili neregistrovano).",
      p3: "• <strong>Lični podaci:</strong> informacije koje se odnose na identifikovano ili identifikabilno fizičko lice.",
      p4: "• <strong>Obrada:</strong> svaka radnja nad ličnim podacima (npr. prikupljanje, čuvanje, upotreba, otkrivanje).",
      foot: "Ova Politika je usklađena sa opštim principima zaštite podataka prema važećim propisima (uključujući GDPR i Zakon o zaštiti podataka o ličnosti Republike Srbije)."
    },

    s3: {
      title: "3) Koje podatke prikupljamo",
      d31: "<strong>3.1 Podaci koje vi dostavljate</strong>",
      d31_1: "• Tekstualni unosi (pitanja, opisi konteksta itd.) — koriste se isključivo za generisanje AI odgovora.",
      d31_2: "• Komunikacija sa nama (npr. zahtevi podršci, pritužbe).",
      d31_note: "<em>Napomena o nalozima.</em> Registracija trenutno nije omogućena. Ne prikupljamo podatke o nalozima (ime, korisničko ime, lozinka). Ako uvedemo naloge, ažuriraćemo ovu Politiku pre početka takve obrade.",

      d32: "<strong>3.2 Podaci koji se automatski prikupljaju</strong>",
      d32_1: "• <strong>Tehnički i log podaci:</strong> IP adresa, datum/vreme pristupa, URL zahtevi, identifikatori uređaja/pregledača, verzija OS, jezička podešavanja, greške, dijagnostika.",
      d32_2: "• <strong>Podaci o korišćenju:</strong> npr. broj upita, klikovi, pregledane stranice, trajanje sesije.",

      d33: "<strong>3.3 Kolačići i slične tehnologije (Google Analytics 4 bez kolačića)</strong>",
      d33_1: "Ne postavljamo kolačiće za analitiku. Koristimo Google Analytics 4 (GA4) u režimu bez kolačića, pa se merenje zasniva na agregiranim, ne-identifikujućim signalima i ne koristi lokalne identifikatore sa vašeg uređaja.",
      d33_2: "Standardni serverski logovi ne sadrže sadržaj vaših unosa i koriste se isključivo za bezbednost i dijagnostiku. localStorage/sessionStorage koristimo samo za funkcije interfejsa (videti Politiku kolačića) i nisu povezani sa GA4.",
      d33_eu_1: "<strong>GA4 privatnost (EU režim):</strong>",
      d33_eu_2: "– U EU, GA4 ne beleži niti čuva IP adrese; IP se odbacuje pre logovanja.",
      d33_eu_3: "– Ne uključujemo Google Signals ni reklamne funkcije; ne vršimo personalizaciju i ne povezujemo GA4 sa spoljnim oglasnim proizvodima.",
      d33_eu_4: "– Ne šaljemo GA4 nikakve lične podatke (PII) poput imena, adresa e-pošte ili identifikatora naloga.",
      d33_note: "<em>Napomena:</em> Ako kasnije uvedemo kolačiće (npr. za detaljniju analitiku ili oglase), ažuriraćemo ovu Politiku i, gde je potrebno, tražiti vaš pristanak pre postavljanja ne-neophodnih kolačića.",

      d34: "<strong>3.4 Osetljivi podaci</strong>",
      d34_1: "Ne tražimo osetljive podatke (npr. zdravlje, politička/verska uverenja, seksualna orijentacija, biometrija). Molimo ne šaljite takve podatke.",
      d34_2: "Ako ih ipak pošaljete, time dajete izričit pristanak za obradu u okviru ove Politike; pristanak možete povući (videti Vaša prava).",

      d35: "<strong>3.5 Privatnost i vidljivost unosa</strong>",
      d35_1: "• Vaši tekstualni unosi koriste se isključivo za generisanje AI odgovora i nisu javno vidljivi drugim korisnicima.",
      d35_2: "• Ne delimo vaše unose sa drugim korisnicima osim ako ih sami objavite putem funkcije koju namerno aktivirate.",
      d35_3: "• Možemo koristiti anonimizirane/agregirane podatke za statistiku i unapređenje usluge, bez mogućnosti vaše identifikacije."
    },

    s4: {
      title: "4) Svrhe i pravni osnovi obrade",
      intro: "Podatke obrađujemo samo ako postoji pravni osnov (čl. 6 GDPR ili odgovarajući nacionalni propisi):",
      p1: "• Pružanje usluge (ugovor/pretugovorne radnje).",
      p2: "• Bezbednost i sprečavanje zloupotreba (naši legitimni interesi).",
      p3: "• Komunikacija (ugovor/legitimni interesi).",
      p4: "• Marketing (samo uz vaš pristanak; možete ga povući u svakom trenutku).",
      p5: "• Zakonske obaveze (npr. postupanje po zakonitim zahtevima organa).",
      p6: "• Unapređenje modela/evaluacija AI (legitimni interes ili pristanak; videti §7).",
      p7: "• Analitika korišćenja (GA4 bez kolačića): obrada po osnovu legitimnog interesa (čl. 6(1)(f) GDPR) radi osnovnog merenja saobraćaja, performansi i stabilnosti bez kolačića i bez personalizacije. Sproveli smo test ravnoteže i primenjujemo mere minimizacije (bez IP logovanja u GA4, bez PII, bez oglasnih funkcija). Ako kasnije uvedemo kolačiće ili oglasne funkcije, pravni osnov biće vaš pristanak (čl. 6(1)(a))."
    },

    s5: {
      title: "5) Kako koristimo lične podatke",
      p1: "• Za pružanje osnovne funkcionalnosti (obrada unosa, generisanje odgovora).",
      p2: "• Za personalizaciju iskustva (npr. jezik interfejsa).",
      p3: "• Za merenje performansi i otklanjanje tehničkih problema.",
      p4: "• Za sprečavanje zloupotreba (spam, maliciozne aktivnosti).",
      p5: "• Za komunikaciju sa vama (podrška, obaveštenja o servisu, opciono bilteni).",
      p6: "• Za analizu agregiranih trendova i unapređenje kvaliteta modela/usluge.",
      p7: "• Režim „bez čuvanja“: kada je uključen, tekstualni unosi čuvaju se samo koliko je tehnički potrebno da se generiše odgovor, potom se brišu ili anonimizuju."
    },

    s6: {
      title: "6) Deljenje podataka",
      intro: "Ne prodajemo lične podatke. Podatke možemo deliti:",
      p1: "• Sa obrađivačima (hosting, bezbednost, tehnička podrška) koji postupaju po našim uputstvima na osnovu ugovora o obradi (bez prava objave vaših unosa).",
      p2: "• Sa trećim stranama na vaš zahtev/pristanak (npr. integracije).",
      p3: "• Radi ispunjenja zakonskih obaveza (odgovor na zakonite zahteve organa).",
      p4: "• U poslovnim promenama (spajanje/akvizicija/reorganizacija), uz odgovarajuće mere zaštite i obaveštenje.",
      p5: "• <strong>Obrađivač – analitika:</strong> koristimo Google Ireland Limited (Google Analytics 4) kao obrađivača za merenje saobraćaja bez kolačića. U ograničenim slučajevima podaci se mogu preneti povezanim subjektima Google LLC (SAD) uz odgovarajuće mere (npr. Standardne ugovorne klauzule i/ili druge važeće mehanizme prenosa). GA4 je podešen bez IP logovanja, bez Google Signals i bez PII.",
      foot: "Ako u budućnosti budemo koristili analitičke/oglasne servise trećih strana, o tome ćete biti obavešteni u Politici kolačića i/ili centru za podešavanja."
    },

    s7: {
      title: "7) AI obrada, profilisanje i automatizovano odlučivanje",
      lead: "Platforma generiše odgovore DA/NE i procente verovatnoće korišćenjem AI modela u informativne svrhe i ne proizvodi pravne ili slične značajne efekte o vama bez učešća čoveka.",
      p1: "• Vaše informacije mogu se koristiti za evaluacije i unapređenja modela na osnovu legitimnog interesa ili vašeg pristanka, uz dostupne mehanizme odjave (opt-out).",
      p2: "• Primenićemo pseudonimizaciju/anonimizaciju kada je razumno moguće i zakonito."
    },

    s8: {
      title: "8) Međunarodni prenosi",
      p1: "Podaci se mogu obrađivati van vaše jurisdikcije. Primenujemo odgovarajuće mere (npr. Standardne ugovorne klauzule, odluke o primerenosti, tehničke/organizacione mere) kako bismo obezbedili nivo zaštite u skladu sa pravom.",
      p2: "Gde je potrebno za GA4, oslanjamo se na važeće mehanizme prenosa i primenjujemo minimizaciju (bez kolačića, bez IP, bez PII)."
    },

    s9: { title: "9) Bezbednost podataka", p1: "Sprovodimo tehničke i organizacione mere (kontrola pristupa, enkripcija u prenosu, segmentacija, logovanje pristupa, redovni bezbednosni pregledi). Nijedan sistem nije 100% bezbedan; odgovorni ste za čuvanje eventualnih pristupnih podataka." },

    s10: {
      title: "10) Rokovi čuvanja podataka",
      intro: "Podatke čuvamo samo koliko je potrebno za svrhe iz ove Politike, osim ako je duži rok zahtevan ili dozvoljen zakonom. Okvirno:",
      p1: "• <strong>Log/tehnički zapisi:</strong> tipično 12–24 meseca.",
      p2: "• <strong>localStorage/sessionStorage:</strong> na vašem uređaju dok ih ne obrišete ili dok aplikacija ne resetuje lokalne podatke.",
      p3: "• <strong>Analitika (GA4 bez kolačića):</strong> čuva se prema GA4 podešavanjima za podatke o događajima — do 2 meseca (podrazumevano) ili do 14 meseci ako to izričito produžimo; zatim se briše ili anonimizuje. Agregirani izveštaji (bez identifikacije korisnika) mogu se čuvati duže radi istorijskih metrika.",
      nostore: "<strong>Režim „bez čuvanja“:</strong> unosi se ne čuvaju nakon završetka obrade (izuzev kratkih tehničkih logova bez samog teksta unosa)."
    },

    s11: {
      title: "11) Vaša prava",
      p1: "U skladu sa zakonom, imate pravo da budete obavešteni i da pristupite svojim podacima; da ispravite netačnosti; da zahtevate brisanje („pravo na zaborav“); da ograničite obradu; na prenosivost; da uložite prigovor (na obradu na osnovu legitimnog interesa ili na direktni marketing); kao i da povučete pristanak (bez uticaja na prethodnu zakonitu obradu).",
      p2: "Možete zatražiti brisanje svojih tekstualnih unosa i povezanih ličnih podataka. Nakon verifikacije identiteta, obrišaćemo/anonimizovati ih u razumnom roku, osim ako je zadržavanje zakonska obaveza.",
      p3: "Takođe imate pravo da uložite prigovor na analitiku zasnovanu na legitimnom interesu; u tom slučaju ćemo obustaviti obradu za tu svrhu osim ako dokažemo pretežan legitimni osnov.",
      p4: "Zahteve šaljite na forecastlerteam@gmail.com. Odgovorićemo u roku od 30 dana ili u zakonskom roku. Takođe imate pravo da podnesete pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti, ili nadležnom organu u vašoj zemlji."
    },

    s12: { title: "12) Deca i maloletnici", p1: "Platforma nije namenjena licima mlađim od 13 godina. Lica uzrasta 13–18 godina mogu koristiti Platformu uz saglasnost i nadzor roditelja/staratelja. Ako smatrate da obrađujemo podatke deteta bez valjanog osnova, kontaktirajte nas." },

    s13: { title: "13) Linkovi trećih strana", p1: "Spoljni sajtovi imaju sopstvene politike; ne odgovaramo za njihov sadržaj i prakse. Preporučujemo da njihove politike proučite pre korišćenja." },

    s14: { title: "14) Marketinške poruke", p1: "Marketinške poruke šaljemo samo uz vaš pristanak. Odjavu možete izvršiti u svakom trenutku (preko linka u mejlu ili kontaktom iz §1). Obaveštenja o servisu mogu biti izuzeta od odjave." },

    s15: { title: "15) Izmene ove Politike", p1: "Povremeno možemo ažurirati ovu Politiku. Nove verzije biće objavljene sa ažuriranim datumom; nastavak korišćenja Platforme znači da prihvatate izmene." },

    s16: { title: "16) Jezičke verzije", p1: "Platforma može biti dostupna na više jezika. U slučaju neslaganja između prevoda, prednost ima engleska verzija, osim ako vaši lokalni propisi ne zahtevaju drugačije." },

    s17: { title: "17) Kontakt", p1: "Forecastler tim", p2: "Imejl: forecastlerteam@gmail.com" }
  }
};

// Helperi: pokušaj bez sufiksa, pa sa "-en"
function byId(id){ return document.getElementById(id) || document.getElementById(id + "-en"); }
function setTxtAny(id, txt){ const el = byId(id); if (el && typeof txt === "string") el.textContent = txt; }
function setHTMLAny(id, html){ const el = byId(id); if (el && typeof html === "string") el.innerHTML = html; }

function setLanguage(lang) {
  const t = translations[lang] || translations.en;
  localStorage.setItem('forecastlerLang', lang);
  trenutniJezik = lang;

  // Header (desktop + mobile)
  if (t.headerLinks){
    setTxtAny("nav-home", t.headerLinks.home);
    setTxtAny("nav-about", t.headerLinks.about);
    setTxtAny("nav-contact", t.headerLinks.contact);
    setTxtAny("nav-blog", t.headerLinks.blog);

    setTxtAny("mnav-home", t.headerLinks.home);
    setTxtAny("mnav-about", t.headerLinks.about);
    setTxtAny("mnav-contact", t.headerLinks.contact);
    setTxtAny("mnav-blog", t.headerLinks.blog);
  }

  // META
  setTxtAny ("pp-title",   t.meta.title);
  setTxtAny ("pp-meta-1",  t.meta.effective);
  setTxtAny ("pp-meta-2",  t.meta.updated);
  setTxtAny ("pp-intro",   t.meta.intro);

  // 1
  setTxtAny  ("pp-s1-title", t.s1.title);
  setHTMLAny ("pp-s1-1",     t.s1.p1);
  setHTMLAny ("pp-s1-2",     t.s1.p2);
  setTxtAny  ("pp-s1-3",     t.s1.p3);

  // 2 (ima <strong> i foot)
  setTxtAny  ("pp-s2-title", t.s2.title);
  setHTMLAny ("pp-s2-1",     t.s2.p1);
  setHTMLAny ("pp-s2-2",     t.s2.p2);
  setHTMLAny ("pp-s2-3",     t.s2.p3);
  setHTMLAny ("pp-s2-4",     t.s2.p4);
  setTxtAny  ("pp-s2-foot",  t.s2.foot);

  // 3 (pododeljci)
  setTxtAny  ("pp-s3-title",    t.s3.title);

  setHTMLAny ("pp-s3-1-title",  t.s3.d31);
  setTxtAny  ("pp-s3-1-1",      t.s3.d31_1);
  setTxtAny  ("pp-s3-1-2",      t.s3.d31_2);
  setHTMLAny ("pp-s3-1-note",   t.s3.d31_note);

  setHTMLAny ("pp-s3-2-title",  t.s3.d32);
  setHTMLAny ("pp-s3-2-1",      t.s3.d32_1);
  setHTMLAny ("pp-s3-2-2",      t.s3.d32_2);

  setHTMLAny ("pp-s3-3-title",  t.s3.d33);
  setTxtAny  ("pp-s3-3-1",      t.s3.d33_1);
  setTxtAny  ("pp-s3-3-2",      t.s3.d33_2);
  setHTMLAny ("pp-s3-3-eu-1",   t.s3.d33_eu_1);
  setTxtAny  ("pp-s3-3-eu-2",   t.s3.d33_eu_2);
  setTxtAny  ("pp-s3-3-eu-3",   t.s3.d33_eu_3);
  setTxtAny  ("pp-s3-3-eu-4",   t.s3.d33_eu_4);
  setHTMLAny ("pp-s3-3-note",   t.s3.d33_note);

  setHTMLAny ("pp-s3-4-title",  t.s3.d34);
  setTxtAny  ("pp-s3-4-1",      t.s3.d34_1);
  setTxtAny  ("pp-s3-4-2",      t.s3.d34_2);

  setHTMLAny ("pp-s3-5-title",  t.s3.d35);
  setTxtAny  ("pp-s3-5-1",      t.s3.d35_1);
  setTxtAny  ("pp-s3-5-2",      t.s3.d35_2);
  setTxtAny  ("pp-s3-5-3",      t.s3.d35_3);

  // 4
  setTxtAny ("pp-s4-title", t.s4.title);
  setTxtAny ("pp-s4-intro", t.s4.intro);
  setTxtAny ("pp-s4-1",     t.s4.p1);
  setTxtAny ("pp-s4-2",     t.s4.p2);
  setTxtAny ("pp-s4-3",     t.s4.p3);
  setTxtAny ("pp-s4-4",     t.s4.p4);
  setTxtAny ("pp-s4-5",     t.s4.p5);
  setTxtAny ("pp-s4-6",     t.s4.p6);
  setTxtAny ("pp-s4-7",     t.s4.p7);

  // 5
  setTxtAny ("pp-s5-title", t.s5.title);
  setTxtAny ("pp-s5-1",     t.s5.p1);
  setTxtAny ("pp-s5-2",     t.s5.p2);
  setTxtAny ("pp-s5-3",     t.s5.p3);
  setTxtAny ("pp-s5-4",     t.s5.p4);
  setTxtAny ("pp-s5-5",     t.s5.p5);
  setTxtAny ("pp-s5-6",     t.s5.p6);
  setTxtAny ("pp-s5-7",     t.s5.p7);

  // 6
  setTxtAny  ("pp-s6-title", t.s6.title);
  setTxtAny  ("pp-s6-intro", t.s6.intro);
  setTxtAny  ("pp-s6-1",     t.s6.p1);
  setTxtAny  ("pp-s6-2",     t.s6.p2);
  setTxtAny  ("pp-s6-3",     t.s6.p3);
  setTxtAny  ("pp-s6-4",     t.s6.p4);
  setHTMLAny ("pp-s6-5",     t.s6.p5);
  setTxtAny  ("pp-s6-foot",  t.s6.foot);

  // 7
  setTxtAny ("pp-s7-title", t.s7.title);
  setTxtAny ("pp-s7-lead",  t.s7.lead);
  setTxtAny ("pp-s7-1",     t.s7.p1);
  setTxtAny ("pp-s7-2",     t.s7.p2);

  // 8
  setTxtAny ("pp-s8-title", t.s8.title);
  setTxtAny ("pp-s8-1",     t.s8.p1);
  setTxtAny ("pp-s8-2",     t.s8.p2);

  // 9
  setTxtAny ("pp-s9-title", t.s9.title);
  setTxtAny ("pp-s9-1",     t.s9.p1);

  // 10
  setTxtAny  ("pp-s10-title",   t.s10.title);
  setTxtAny  ("pp-s10-intro",   t.s10.intro);
  setHTMLAny ("pp-s10-1",       t.s10.p1);
  setHTMLAny ("pp-s10-2",       t.s10.p2);
  setHTMLAny ("pp-s10-3",       t.s10.p3);
  setHTMLAny ("pp-s10-no-storage", t.s10.nostore);

  // 11
  setTxtAny ("pp-s11-title", t.s11.title);
  setTxtAny ("pp-s11-1",     t.s11.p1);
  setTxtAny ("pp-s11-2",     t.s11.p2);
  setTxtAny ("pp-s11-3",     t.s11.p3);
  setTxtAny ("pp-s11-4",     t.s11.p4);

  // 12..17
  setTxtAny ("pp-s12-title", t.s12.title);
  setTxtAny ("pp-s12-1",     t.s12.p1);

  setTxtAny ("pp-s13-title", t.s13.title);
  setTxtAny ("pp-s13-1",     t.s13.p1);

  setTxtAny ("pp-s14-title", t.s14.title);
  setTxtAny ("pp-s14-1",     t.s14.p1);

  setTxtAny ("pp-s15-title", t.s15.title);
  setTxtAny ("pp-s15-1",     t.s15.p1);

  setTxtAny ("pp-s16-title", t.s16.title);
  setTxtAny ("pp-s16-1",     t.s16.p1);

  setTxtAny ("pp-s17-title", t.s17.title);
  setTxtAny ("pp-s17-1",     t.s17.p1);
  setTxtAny ("pp-s17-2",     t.s17.p2);

  // Footer
  if (t.footerLinks){
    setTxtAny("link-disclaimer", t.footerLinks.disclaimer);
    setTxtAny("link-terms",      t.footerLinks.terms);
    setTxtAny("link-privacy",    t.footerLinks.privacy);
    setTxtAny("link-cookies",    t.footerLinks.cookies);
    setTxtAny("link-sitemap",    t.footerLinks.sitemap);
    setTxtAny("link-faq",        t.footerLinks.faq);
  }

  // RTL samo za arapski
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

// Inicijalizacija
document.addEventListener("DOMContentLoaded", () => {
  const saved  = localStorage.getItem('forecastlerLang');
  const browser = (navigator.language || 'en').slice(0,2);
  const initial = saved || (browser === 'sr' ? 'sr' : 'en');
  setLanguage(initial);
});

// Izloži funkcije i T() helper (koristi ga dodatni skript u privacy.html)
window.setLanguage = setLanguage;
window.T = function(){ return translations[trenutniJezik] || translations.en; };

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
      updated:  "Last Updated: 24 August 2025",
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

    s17: { title: "17) Contact", p1: "Forecastler Team" }
  },

  // SR prevod
  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },

    meta: {
      title: "Politika privatnosti",
      effective: "Datum stupanja na snagu: 17. jun 2025.",
      updated:  "Poslednje ažuriranje: 24. avgust 2025.",
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

    s17: { title: "17) Kontakt", p1: "Forecastler tim" }
    },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  meta: {
    title: "Política de privacidad",
    effective: "Fecha de entrada en vigor: 17 de junio de 2025",
    updated:  "Última actualización: 24 de agosto de 2025",
    intro: "Esta Política explica cómo Forecastler (la «Plataforma», «nosotros», «nos», «nuestro») recopila, utiliza, comparte y protege tus datos cuando usas nuestros servicios. Al utilizar la Plataforma, confirmas que has leído y comprendido esta Política junto con nuestros Términos de uso y Aviso legal. Si no estás de acuerdo, por favor no uses la Plataforma."
  },
  s1: {
    title: "1) Quiénes somos (responsable del tratamiento)",
    p1: "<strong>Responsable:</strong> Equipo Forecastler",
    p2: "<strong>Contacto de privacidad:</strong> forecastlerteam@gmail.com",
    p3: "Si designamos a un Delegado de Protección de Datos (DPO), publicaremos aquí sus datos."
  },
  s2: {
    title: "2) Definiciones",
    p1: "• <strong>Plataforma/Servicio:</strong> el sitio web de Forecastler, las aplicaciones, las API y los sistemas relacionados.",
    p2: "• <strong>Usuario:</strong> persona que utiliza el Servicio (registrada o no registrada).",
    p3: "• <strong>Datos personales:</strong> información relativa a una persona física identificada o identificable.",
    p4: "• <strong>Tratamiento:</strong> cualquier operación realizada sobre datos personales (p. ej., recopilación, almacenamiento, uso, divulgación).",
    foot: "Esta Política se alinea con los principios generales de protección de datos conforme a las leyes aplicables (incluido el RGPD y la Ley serbia de Protección de Datos Personales)."
  },
  s3: {
    title: "3) Qué datos recopilamos",
    d31: "<strong>3.1 Datos que usted proporciona</strong>",
    d31_1: "• Entradas de texto (preguntas, descripciones de contexto, etc.) — se utilizan exclusivamente para generar respuestas de IA.",
    d31_2: "• Comunicación con nosotros (p. ej., solicitudes al soporte, quejas).",
    d31_note: "<em>Nota sobre cuentas.</em> El registro no está disponible actualmente. No recopilamos datos de cuentas (nombre, nombre de usuario, contraseña). Si introducimos cuentas, actualizaremos esta Política antes de iniciar dicho tratamiento.",

    d32: "<strong>3.2 Datos que se recopilan automáticamente</strong>",
    d32_1: "• <strong>Datos técnicos y de registro:</strong> dirección IP, fecha/hora de acceso, solicitudes de URL, identificadores de dispositivo/navegador, versión del SO, configuración de idioma, errores, diagnósticos.",
    d32_2: "• <strong>Datos de uso:</strong> p. ej., número de consultas, clics, páginas vistas, duración de la sesión.",

    d33: "<strong>3.3 Cookies y tecnologías similares (Google Analytics 4 sin cookies)</strong>",
    d33_1: "No establecemos cookies de analítica. Usamos Google Analytics 4 (GA4) en modo sin cookies; la medición se basa en señales agregadas y no identificables y no usa identificadores locales de su dispositivo.",
    d33_2: "Los registros estándar del servidor no contienen el contenido de sus entradas y se utilizan exclusivamente para seguridad y diagnóstico. Empleamos localStorage/sessionStorage solo para funciones de interfaz (véase la Política de cookies) y no están vinculados a GA4.",
    d33_eu_1: "<strong>Privacidad en GA4 (modo UE):</strong>",
    d33_eu_2: "– En la UE, GA4 no registra ni almacena direcciones IP; la IP se descarta antes del registro.",
    d33_eu_3: "– No activamos Google Signals ni funciones publicitarias; no realizamos personalización ni conectamos GA4 con productos publicitarios externos.",
    d33_eu_4: "– No enviamos a GA4 ningún dato personal (PII) como nombres, direcciones de correo electrónico o identificadores de cuenta.",
    d33_note: "<em>Nota:</em> Si más adelante introducimos cookies (p. ej., para analítica más detallada o anuncios), actualizaremos esta Política y, cuando sea necesario, solicitaremos su consentimiento antes de establecer cookies no esenciales.",

    d34: "<strong>3.4 Datos sensibles</strong>",
    d34_1: "No solicitamos datos sensibles (p. ej., salud, creencias políticas/religiosas, orientación sexual, biometría). Por favor, no envíe dichos datos.",
    d34_2: "Si aun así los envía, nos otorga su consentimiento expreso para su tratamiento conforme a esta Política; puede retirarlo (véase Sus derechos).",

    d35: "<strong>3.5 Privacidad y visibilidad de las entradas</strong>",
    d35_1: "• Sus entradas de texto se utilizan exclusivamente para generar respuestas de IA y no son visibles públicamente para otros usuarios.",
    d35_2: "• No compartimos sus entradas con otros usuarios a menos que usted mismo las publique mediante una función que active de forma intencional.",
    d35_3: "• Podemos utilizar datos anonimizados/agregados para estadísticas y mejora del servicio, sin posibilidad de identificarle."
  },
  s4: {
    title: "4) Finalidades y bases jurídicas",
    intro: "Tratamos datos únicamente cuando existe una base jurídica (art. 6 del RGPD o ley nacional equivalente):",
    p1: "• Prestación del servicio (contrato/pasos precontractuales).",
    p2: "• Seguridad y prevención de abusos (nuestros intereses legítimos).",
    p3: "• Comunicaciones (contrato/intereses legítimos).",
    p4: "• Marketing (solo con tu consentimiento; puedes retirarlo en cualquier momento).",
    p5: "• Obligaciones legales (p. ej., responder a solicitudes lícitas).",
    p6: "• Mejora del modelo/evaluación de IA (intereses legítimos o consentimiento; véase §7).",
    p7: "• Analítica de uso (GA4, sin cookies): tratamiento con base en intereses legítimos (art. 6(1)(f) RGPD) para la medición básica de tráfico, rendimiento y estabilidad sin cookies y sin personalización. Realizamos un test de ponderación y aplicamos medidas de minimización (sin registro de IP en GA4, sin PII, sin funciones publicitarias). Si más adelante introducimos cookies o funciones publicitarias, la base jurídica para esos fines será tu consentimiento (art. 6(1)(a))."
  },
  s5: {
    title: "5) Cómo usamos los datos personales",
    p1: "• Para ofrecer la funcionalidad principal (procesar entradas, generar respuestas).",
    p2: "• Para personalizar la experiencia (p. ej., idioma de la interfaz).",
    p3: "• Para medir el rendimiento y resolver problemas técnicos.",
    p4: "• Para prevenir abusos (spam, actividad maliciosa).",
    p5: "• Para comunicarnos contigo (soporte, avisos del servicio, boletines opcionales).",
    p6: "• Para analizar tendencias agregadas y mejorar la calidad del modelo/servicio.",
    p7: "• Modo “sin almacenamiento”: cuando está habilitado, las entradas de texto se conservan solo el tiempo técnicamente necesario para generar la respuesta y luego se eliminan o anonimizan."
  },
  s6: {
    title: "6) Compartición de datos",
    intro: "No vendemos datos personales. Podemos compartir datos:",
    p1: "• Con encargados del tratamiento (hosting, seguridad, soporte técnico) que actúan siguiendo nuestras instrucciones en virtud de un acuerdo de tratamiento de datos (sin derecho a publicar tus entradas).",
    p2: "• Con terceros a tu solicitud/consentimiento (p. ej., integraciones).",
    p3: "• Para el cumplimiento legal (en respuesta a solicitudes lícitas de autoridades).",
    p4: "• En cambios corporativos (fusión/adquisición/reorganización), con las salvaguardas y el aviso adecuados.",
    p5: "• <strong>Encargado – analítica:</strong> usamos Google Ireland Limited (Google Analytics 4) como nuestro encargado para la medición de tráfico sin cookies. En casos limitados, los datos pueden transferirse a entidades relacionadas de Google LLC (EE. UU.) con las salvaguardas adecuadas (p. ej., Cláusulas Contractuales Tipo y/o otros mecanismos de transferencia válidos). GA4 está configurado sin registro de IP, sin Google Signals y sin PII.",
    foot: "Si en el futuro utilizamos servicios de analítica/publicidad de terceros, se te informará en la Política de Cookies y/o en un centro de preferencias."
  },
  s7: {
    title: "7) Procesamiento de IA, elaboración de perfiles y toma de decisiones automatizada",
    lead: "La Plataforma genera respuestas SÍ/NO y porcentajes de probabilidad mediante modelos de IA con fines informativos y no produce efectos jurídicos ni de similar significación sobre ti sin intervención humana.",
    p1: "• Tu información puede utilizarse para evaluaciones y mejora del modelo sobre la base de intereses legítimos o tu consentimiento, con mecanismos de exclusión disponibles.",
    p2: "• Aplicaremos seudonimización/anonimización cuando sea razonablemente posible y legal."
  },
  s8: {
    title: "8) Transferencias internacionales",
    p1: "Los datos pueden tratarse fuera de su jurisdicción. Aplicamos salvaguardias adecuadas (p. ej., Cláusulas Contractuales Tipo, decisiones de adecuación, medidas técnicas/organizativas) para garantizar un nivel de protección conforme a la legislación aplicable.",
    p2: "Cuando sea necesario para GA4, confiamos en mecanismos de transferencia válidos y aplicamos la minimización (sin cookies, sin IP, sin PII)."
  },
  s9: {
    title: "9) Seguridad de los datos",
    p1: "Implementamos medidas técnicas y organizativas (control de acceso, cifrado en tránsito, segmentación, registros de acceso, revisiones periódicas de seguridad). Ningún sistema es 100 % seguro; usted es responsable de mantener confidenciales las credenciales de acceso."
  },
  s10: {
    title: "10) Conservación de los datos",
    intro: "Conservamos los datos solo durante el tiempo necesario para los fines de esta Política, salvo que la ley exija o permita un período más largo. Como referencia:",
    p1: "• <strong>Registros/logs técnicos:</strong> normalmente 12–24 meses.",
    p2: "• <strong>localStorage/sessionStorage:</strong> en su dispositivo hasta que lo elimine o la app restablezca los datos locales.",
    p3: "• <strong>Analítica (GA4, sin cookies):</strong> según la configuración de datos de eventos de GA4 — hasta 2 meses (predeterminado) o hasta 14 meses si lo ampliamos expresamente; después se elimina o anonimiza. Los informes agregados (sin identificación del usuario) pueden conservarse más tiempo para métricas históricas.",
    nostore: "<strong>Modo “sin almacenamiento”:</strong> las entradas no se conservan tras finalizar el procesamiento (salvo breves logs técnicos sin el texto de la entrada)."
  },
  s11: {
    title: "11) Sus derechos",
    p1: "Conforme a la ley, usted tiene derecho a ser informado y a acceder a sus datos; a rectificar inexactitudes; a suprimir datos («derecho al olvido»); a restringir el tratamiento; a la portabilidad de los datos; a oponerse (al tratamiento basado en intereses legítimos o al marketing directo); y a retirar el consentimiento (sin afectar el tratamiento lícito previo).",
    p2: "Puede solicitar la eliminación de sus entradas de texto y los datos personales relacionados. Tras verificar su identidad, los eliminaremos/anonimizaremos en un plazo razonable, salvo que la conservación sea exigida por ley.",
    p3: "También tiene derecho a oponerse al tratamiento analítico basado en intereses legítimos; en tal caso, dejaremos de tratar sus datos con ese fin salvo que demostremos motivos legítimos imperiosos.",
    p4: "Envíe solicitudes a forecastlerteam@gmail.com. Responderemos en 30 días o dentro del plazo legal. También tiene derecho a presentar una reclamación ante la Autoridad de Protección de Datos de Serbia o la autoridad de su país de residencia."
  },
  s12: {
    title: "12) Menores de edad",
    p1: "La Plataforma no está destinada a menores de 13 años. Las personas de 13–18 pueden usarla con el consentimiento y la supervisión de padres/tutores. Si cree que tratamos datos de un menor sin base válida, póngase en contacto con nosotros."
  },
  s13: {
    title: "13) Enlaces de terceros",
    p1: "Los sitios externos tienen sus propias políticas; no somos responsables de su contenido ni de sus prácticas. Recomendamos revisar sus políticas antes de usarlos."
  },
  s14: {
    title: "14) Comunicaciones de marketing",
    p1: "Enviamos mensajes de marketing solo con tu consentimiento. Puedes darte de baja en cualquier momento (mediante el enlace del correo electrónico o contactándonos según §1). Los avisos de servicio pueden estar exentos de la opción de cancelación."
  },
  s15: {
    title: "15) Cambios a esta Política",
    p1: "Podemos actualizar esta Política periódicamente. Las nuevas versiones se publicarán con una fecha actualizada; el uso continuado de la Plataforma implica la aceptación de los cambios."
  },
  s16: {
    title: "16) Versiones lingüísticas",
    p1: "La Plataforma puede estar disponible en varios idiomas. En caso de discrepancia entre traducciones, prevalece la versión en inglés salvo que las normas obligatorias de tu residencia dispongan lo contrario."
  },
  s17: { title: "17) Contacto", p1: "Equipo Forecastler" }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  meta: {
    title: "Politique de confidentialité",
    effective: "Date d’entrée en vigueur : 17 juin 2025",
    updated:  "Dernière mise à jour : 24 août 2025",
    intro: "La présente Politique explique comment Forecastler (« la Plateforme », « nous », « notre ») collecte, utilise, partage et protège vos données lorsque vous utilisez nos services. En utilisant la Plateforme, vous confirmez avoir lu et compris la présente Politique ainsi que nos Conditions d’utilisation et l’Avertissement légal. Si vous n’êtes pas d’accord, veuillez ne pas utiliser la Plateforme."
  },
  s1: {
    title: "1) Qui nous sommes (responsable du traitement)",
    p1: "<strong>Responsable du traitement :</strong> Équipe Forecastler",
    p2: "<strong>Contact confidentialité :</strong> forecastlerteam@gmail.com",
    p3: "Si nous nommons un Délégué à la protection des données (DPO), nous publierons ici ses coordonnées."
  },
  s2: {
    title: "2) Définitions",
    p1: "• <strong>Plateforme/Service :</strong> le site web Forecastler, les applications, les API et les systèmes associés.",
    p2: "• <strong>Utilisateur :</strong> personne utilisant le Service (inscrite ou non inscrite).",
    p3: "• <strong>Données personnelles :</strong> information relative à une personne physique identifiée ou identifiable.",
    p4: "• <strong>Traitement :</strong> toute opération effectuée sur des données personnelles (p. ex. collecte, stockage, utilisation, divulgation).",
    foot: "La présente Politique s’aligne sur les principes généraux de protection des données prévus par le droit applicable (notamment le RGPD et la loi serbe sur la protection des données à caractère personnel)."
  },
  s3: {
    title: "3) Données que nous collectons",
    d31: "<strong>3.1 Données que vous fournissez</strong>",
    d31_1: "• Saisies textuelles (questions, descriptions de contexte, etc.) — utilisées exclusivement pour générer des réponses d’IA.",
    d31_2: "• Communication avec nous (p. ex. demandes au support, réclamations).",
    d31_note: "<em>Remarque sur les comptes.</em> L’inscription n’est pas disponible pour le moment. Nous ne collectons pas de données de compte (nom, identifiant, mot de passe). Si nous introduisons des comptes, nous mettrons à jour la présente Politique avant de commencer ce traitement.",

    d32: "<strong>3.2 Données collectées automatiquement</strong>",
    d32_1: "• <strong>Données techniques et journaux :</strong> adresse IP, date/heure d’accès, requêtes URL, identifiants d’appareil/navigateur, version de l’OS, paramètres de langue, erreurs, diagnostics.",
    d32_2: "• <strong>Données d’utilisation :</strong> p. ex. nombre de requêtes, clics, pages consultées, durée de session.",

    d33: "<strong>3.3 Cookies et technologies similaires (Google Analytics 4 sans cookies)</strong>",
    d33_1: "Nous ne plaçons pas de cookies d’analytique. Nous utilisons Google Analytics 4 (GA4) en mode sans cookies ; la mesure repose sur des signaux agrégés et non identifiants et n’utilise pas d’identifiants locaux de votre appareil.",
    d33_2: "Les journaux serveur standard ne contiennent pas le contenu de vos saisies et sont utilisés exclusivement pour la sécurité et le diagnostic. Nous n’utilisons localStorage/sessionStorage que pour des fonctions d’interface (voir la Politique relative aux cookies) et ils ne sont pas liés à GA4.",
    d33_eu_1: "<strong>Confidentialité GA4 (mode UE) :</strong>",
    d33_eu_2: "– Dans l’UE, GA4 n’enregistre ni ne stocke les adresses IP ; l’IP est supprimée avant la journalisation.",
    d33_eu_3: "– Nous n’activons pas Google Signals ni les fonctionnalités publicitaires ; aucune personnalisation et aucune connexion de GA4 à des produits publicitaires externes.",
    d33_eu_4: "– Nous n’envoyons à GA4 aucune donnée personnelle (PII) telle que noms, adresses e-mail ou identifiants de compte.",
    d33_note: "<em>Remarque :</em> Si nous introduisons ultérieurement des cookies (p. ex. pour une analytique plus détaillée ou la publicité), nous mettrons à jour cette Politique et, le cas échéant, demanderons votre consentement avant de déposer des cookies non essentiels.",

    d34: "<strong>3.4 Données sensibles</strong>",
    d34_1: "Nous ne sollicitons pas de données sensibles (p. ex. santé, convictions politiques/religieuses, orientation sexuelle, biométrie). Veuillez ne pas nous envoyer de telles données.",
    d34_2: "Si vous les envoyez malgré tout, vous donnez votre consentement explicite au traitement conformément à la présente Politique ; vous pouvez le retirer (voir Vos droits).",

    d35: "<strong>3.5 Confidentialité et visibilité des saisies</strong>",
    d35_1: "• Vos saisies textuelles sont utilisées exclusivement pour générer des réponses d’IA et ne sont pas visibles publiquement par d’autres utilisateurs.",
    d35_2: "• Nous ne partageons pas vos saisies avec d’autres utilisateurs, sauf si vous les publiez vous-même via une fonctionnalité que vous activez volontairement.",
    d35_3: "• Nous pouvons utiliser des données anonymisées/agrégées à des fins de statistiques et d’amélioration du service, sans possibilité de vous identifier."
  },
  s4: {
    title: "4) Finalités et bases juridiques",
    intro: "Nous traitons les données uniquement lorsqu’une base juridique existe (art. 6 du RGPD ou droit national équivalent) :",
    p1: "• Fourniture du service (contrat/étapes précontractuelles).",
    p2: "• Sécurité et prévention des abus (nos intérêts légitimes).",
    p3: "• Communications (contrat/intérêts légitimes).",
    p4: "• Marketing (uniquement avec votre consentement ; vous pouvez le retirer à tout moment).",
    p5: "• Obligations légales (p. ex. répondre à des demandes licites).",
    p6: "• Amélioration du modèle/évaluation de l’IA (intérêts légitimes ou consentement ; voir §7).",
    p7: "• Analyse d’usage (GA4, sans cookies) : traitement fondé sur l’intérêt légitime (art. 6(1)(f) RGPD) pour une mesure de base du trafic, des performances et de la stabilité, sans cookies et sans personnalisation. Nous avons réalisé un test de mise en balance et appliquons des mesures de minimisation (pas de journalisation d’IP dans GA4, pas de PII, aucune fonctionnalité publicitaire). Si nous introduisons ultérieurement des cookies ou des fonctions publicitaires, la base légale sera votre consentement (art. 6(1)(a))."
  },
  s5: {
    title: "5) Comment nous utilisons les données personnelles",
    p1: "• Fournir les fonctionnalités essentielles (traiter les entrées, générer des réponses).",
    p2: "• Personnaliser l’expérience (p. ex. langue de l’interface).",
    p3: "• Mesurer les performances et résoudre les problèmes techniques.",
    p4: "• Prévenir les abus (spam, activités malveillantes).",
    p5: "• Communiquer avec vous (support, avis de service, newsletters facultatives).",
    p6: "• Analyser des tendances agrégées et améliorer la qualité du modèle/service.",
    p7: "• Mode « sans stockage » : lorsqu’il est activé, les entrées textuelles sont conservées uniquement le temps techniquement nécessaire pour générer la réponse, puis supprimées ou anonymisées."
  },
  s6: {
    title: "6) Partage des données",
    intro: "Nous ne vendons pas de données personnelles. Nous pouvons partager des données :",
    p1: "• Avec des sous-traitants (hébergement, sécurité, support technique) agissant selon nos instructions dans le cadre d’un accord de sous-traitance (sans aucun droit de publier vos saisies).",
    p2: "• Avec des tiers à votre demande/avec votre consentement (p. ex. intégrations).",
    p3: "• Pour le respect des obligations légales (en réponse à des demandes licites des autorités).",
    p4: "• Lors de changements d’entreprise (fusion/acquisition/réorganisation), avec des garanties et un avis appropriés.",
    p5: "• <strong>Sous-traitant – analytique :</strong> nous utilisons Google Ireland Limited (Google Analytics 4) comme sous-traitant pour la mesure de trafic sans cookies. Dans des cas limités, des données peuvent être transférées à des entités liées de Google LLC (États-Unis) avec des garanties appropriées (p. ex., Clauses contractuelles types et/ou autres mécanismes de transfert valides). GA4 est configuré sans journalisation des IP, sans Google Signals et sans PII.",
    foot: "Si nous utilisons à l’avenir des services tiers d’analytique/publicité, vous en serez informé dans la Politique relative aux cookies et/ou un centre de préférences."
  },
  s7: {
    title: "7) Traitement par IA, profilage et décisions automatisées",
    lead: "La Plateforme génère des réponses OUI/NON et des pourcentages de probabilité à l’aide de modèles d’IA à des fins informatives et ne produit pas d’effets juridiques ou similaires vous concernant sans intervention humaine.",
    p1: "• Vos informations peuvent être utilisées à des fins d’évaluations et d’amélioration du modèle sur la base d’intérêts légitimes ou de votre consentement, avec des mécanismes d’opposition disponibles.",
    p2: "• Nous appliquerons la pseudonymisation/l’anonymisation lorsque cela est raisonnablement possible et licite."
  },
  s8: {
    title: "8) Transferts internationaux",
    p1: "Les données peuvent être traitées en dehors de votre juridiction. Nous appliquons des garanties appropriées (p. ex. clauses contractuelles types, décisions d’adéquation, mesures techniques/organisationnelles) afin d’assurer un niveau de protection conforme au droit applicable.",
    p2: "Lorsque nécessaire pour GA4, nous nous appuyons sur des mécanismes de transfert valides et appliquons la minimisation (pas de cookies, pas d’IP, pas de PII)."
  },
  s9: {
    title: "9) Sécurité des données",
    p1: "Nous mettons en œuvre des mesures techniques et organisationnelles (contrôle d’accès, chiffrement en transit, segmentation, journalisation des accès, examens réguliers de sécurité). Aucun système n’est sécurisé à 100 % ; il vous appartient de garder confidentiels vos identifiants d’accès."
  },
  s10: {
    title: "10) Conservation des données",
    intro: "Nous conservons les données uniquement pendant la durée nécessaire aux finalités de la présente Politique, sauf si la loi exige ou autorise une période plus longue. À titre indicatif :",
    p1: "• <strong>Journaux/archives techniques :</strong> généralement 12–24 mois.",
    p2: "• <strong>localStorage/sessionStorage :</strong> sur votre appareil jusqu’à suppression par vous ou réinitialisation locale de l’application.",
    p3: "• <strong>Analytique (GA4, sans cookies) :</strong> conservation selon les paramètres de données d’événements de GA4 — jusqu’à 2 mois (par défaut) ou jusqu’à 14 mois si nous l’étendons expressément ; puis suppression ou anonymisation. Des rapports agrégés (sans identification utilisateur) peuvent être conservés plus longtemps à des fins historiques.",
    nostore: "<strong>Mode « sans stockage » :</strong> les saisies ne sont pas conservées après la fin du traitement (sauf courts journaux techniques sans le texte saisi)."
  },
  s11: {
    title: "11) Vos droits",
    p1: "Sous réserve de la loi, vous disposez du droit d’être informé et d’accéder à vos données ; de rectifier les inexactitudes ; d’effacer des données (« droit à l’oubli ») ; de limiter le traitement ; à la portabilité ; de vous opposer (au traitement fondé sur l’intérêt légitime ou au marketing direct) ; et de retirer votre consentement (sans affecter la licéité du traitement antérieur).",
    p2: "Vous pouvez demander la suppression de vos saisies textuelles et des données personnelles associées. Après vérification de votre identité, nous les supprimerons/anononymiserons dans un délai raisonnable, sauf conservation requise par la loi.",
    p3: "Vous avez également le droit de vous opposer au traitement analytique fondé sur l’intérêt légitime ; dans ce cas, nous cesserons ce traitement sauf motifs légitimes impérieux.",
    p4: "Envoyez vos demandes à forecastlerteam@gmail.com. Nous répondrons sous 30 jours ou dans le délai légal. Vous avez aussi le droit d’introduire une réclamation auprès de l’Autorité serbe de protection des données ou de l’autorité de votre pays de résidence."
  },
  s12: {
    title: "12) Enfants et mineurs",
    p1: "La Plateforme n’est pas destinée aux moins de 13 ans. Les personnes de 13 à 18 ans peuvent l’utiliser avec le consentement et la supervision des parents/tuteurs. Si vous estimez que nous traitons les données d’un enfant sans base valable, veuillez nous contacter."
  },
  s13: {
    title: "13) Liens de tiers",
    p1: "Les sites externes ont leurs propres politiques ; nous ne sommes pas responsables de leur contenu ni de leurs pratiques. Nous recommandons de consulter leurs politiques avant utilisation."
  },
  s14: {
    title: "14) Communications marketing",
    p1: "Nous envoyons des messages marketing uniquement avec votre consentement. Vous pouvez vous désabonner à tout moment (via le lien dans l’e-mail ou en nous contactant conformément au §1). Certaines notifications de service peuvent ne pas être soumises au désabonnement."
  },
  s15: {
    title: "15) Modifications de la présente Politique",
    p1: "Nous pouvons mettre à jour cette Politique périodiquement. Les nouvelles versions seront publiées avec une date mise à jour ; la poursuite de l’utilisation de la Plateforme vaut acceptation des modifications."
  },
  s16: {
    title: "16) Versions linguistiques",
    p1: "La Plateforme peut être disponible en plusieurs langues. En cas d’incohérence entre traductions, la version anglaise prévaut, sauf disposition impérative contraire de votre pays de résidence."
  },
  s17: { title: "17) Contact", p1: "Équipe Forecastler" }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  meta: {
    title: "Datenschutzerklärung",
    effective: "Geltungsdatum: 17. Juni 2025",
    updated:  "Zuletzt aktualisiert: 24. August 2025",
    intro: "Diese Richtlinie erläutert, wie Forecastler (die „Plattform“, „wir“, „uns“, „unser“) Ihre Daten erhebt, nutzt, teilt und schützt, wenn Sie unsere Dienste nutzen. Durch die Nutzung der Plattform bestätigen Sie, dass Sie diese Richtlinie zusammen mit unseren Nutzungsbedingungen und dem Haftungsausschluss gelesen und verstanden haben. Wenn Sie nicht einverstanden sind, nutzen Sie die Plattform bitte nicht."
  },
  s1: {
    title: "1) Wer wir sind (Verantwortlicher)",
    p1: "<strong>Verantwortlicher:</strong> Forecastler-Team",
    p2: "<strong>Kontakt Datenschutz:</strong> forecastlerteam@gmail.com",
    p3: "Falls wir einen Datenschutzbeauftragten (DPO) benennen, veröffentlichen wir dessen Angaben hier."
  },
  s2: {
    title: "2) Definitionen",
    p1: "• <strong>Plattform/Dienst:</strong> die Forecastler-Website, Anwendungen, APIs und zugehörige Systeme.",
    p2: "• <strong>Nutzer:</strong> eine Person, die den Dienst nutzt (registriert oder nicht registriert).",
    p3: "• <strong>Personenbezogene Daten:</strong> Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",
    p4: "• <strong>Verarbeitung:</strong> jeder Vorgang im Zusammenhang mit personenbezogenen Daten (z. B. Erhebung, Speicherung, Nutzung, Offenlegung).",
    foot: "Diese Richtlinie entspricht den allgemeinen Grundsätzen des Datenschutzes nach geltendem Recht (einschließlich der DSGVO und des serbischen Gesetzes zum Schutz personenbezogener Daten)."
  },
  s3: {
    title: "3) Welche Daten wir erheben",
    d31: "<strong>3.1 Daten, die Sie bereitstellen</strong>",
    d31_1: "• Texteingaben (Fragen, Kontextbeschreibungen usw.) — werden ausschließlich zur Generierung von KI-Antworten verwendet.",
    d31_2: "• Kommunikation mit uns (z. B. Supportanfragen, Beschwerden).",
    d31_note: "<em>Hinweis zu Konten.</em> Eine Registrierung ist derzeit nicht möglich. Wir erheben keine Kontodaten (Name, Benutzername, Passwort). Wenn wir Konten einführen, aktualisieren wir diese Richtlinie vor Beginn einer solchen Verarbeitung.",

    d32: "<strong>3.2 Automatisch erfasste Daten</strong>",
    d32_1: "• <strong>Technische Daten und Logdaten:</strong> IP-Adresse, Datum/Uhrzeit des Zugriffs, URL-Anfragen, Geräte-/Browser-Kennungen, OS-Version, Spracheinstellungen, Fehler, Diagnosen.",
    d32_2: "• <strong>Nutzungsdaten:</strong> z. B. Anzahl der Anfragen, Klicks, aufgerufene Seiten, Sitzungsdauer.",

    d33: "<strong>3.3 Cookies und ähnliche Technologien (Google Analytics 4 ohne Cookies)</strong>",
    d33_1: "Wir setzen keine Analyse-Cookies. Wir verwenden Google Analytics 4 (GA4) im Cookie-losen Modus; die Messung basiert auf aggregierten, nicht identifizierenden Signalen und nutzt keine lokalen Kennungen Ihres Geräts.",
    d33_2: "Standardmäßige Server-Logs enthalten nicht den Inhalt Ihrer Eingaben und werden ausschließlich für Sicherheit und Diagnose genutzt. localStorage/sessionStorage verwenden wir nur für UI-Funktionen (siehe Cookie-Richtlinie) und sie sind nicht mit GA4 verbunden.",
    d33_eu_1: "<strong>GA4-Datenschutz (EU-Modus):</strong>",
    d33_eu_2: "– In der EU zeichnet GA4 IP-Adressen nicht auf und speichert sie nicht; die IP wird vor der Protokollierung verworfen.",
    d33_eu_3: "– Wir aktivieren weder Google Signals noch Werbefunktionen; keine Personalisierung und keine Verknüpfung von GA4 mit externen Werbeprodukten.",
    d33_eu_4: "– Wir senden keine personenbezogenen Daten (PII) an GA4, wie Namen, E-Mail-Adressen oder Konto-Kennungen.",
    d33_note: "<em>Hinweis:</em> Sollten wir später Cookies einführen (z. B. für detailliertere Analysen oder Werbung), aktualisieren wir diese Richtlinie und holen — wo erforderlich — Ihre Einwilligung ein, bevor nicht notwendige Cookies gesetzt werden.",

    d34: "<strong>3.4 Sensible Daten</strong>",
    d34_1: "Wir erfragen keine sensiblen Daten (z. B. Gesundheit, politische/religiöse Überzeugungen, sexuelle Orientierung, Biometrie). Bitte senden Sie uns solche Daten nicht.",
    d34_2: "Sollten Sie sie dennoch übermitteln, erteilen Sie damit Ihre ausdrückliche Einwilligung zur Verarbeitung im Rahmen dieser Richtlinie; Sie können sie widerrufen (siehe Ihre Rechte).",

    d35: "<strong>3.5 Vertraulichkeit und Sichtbarkeit von Eingaben</strong>",
    d35_1: "• Ihre Texteingaben werden ausschließlich zur Generierung von KI-Antworten verwendet und sind für andere Nutzer nicht öffentlich sichtbar.",
    d35_2: "• Wir teilen Ihre Eingaben nicht mit anderen Nutzern, es sei denn, Sie veröffentlichen sie selbst über eine von Ihnen bewusst aktivierte Funktion.",
    d35_3: "• Wir können anonymisierte/aggregierte Daten für Statistik und Serviceverbesserung nutzen, ohne Möglichkeit, Sie zu identifizieren."
  },
  s4: {
    title: "4) Zwecke und Rechtsgrundlagen",
    intro: "Wir verarbeiten Daten nur, wenn eine Rechtsgrundlage besteht (Art. 6 DSGVO oder gleichwertiges nationales Recht):",
    p1: "• Servicebereitstellung (Vertrag/vorvertragliche Maßnahmen).",
    p2: "• Sicherheit und Missbrauchsprävention (unsere berechtigten Interessen).",
    p3: "• Kommunikation (Vertrag/berechtigte Interessen).",
    p4: "• Marketing (nur mit Ihrer Einwilligung; Widerruf jederzeit möglich).",
    p5: "• Gesetzliche Verpflichtungen (z. B. Beantwortung rechtmäßiger Anfragen).",
    p6: "• Modellverbesserung/AI-Evaluierung (berechtigte Interessen oder Einwilligung; siehe §7).",
    p7: "• Nutzungsanalyse (GA4, cookielos): Verarbeitung auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) zur grundlegenden Messung von Traffic, Performance und Stabilität ohne Cookies und ohne Personalisierung. Wir haben eine Interessenabwägung durchgeführt und Maßnahmen zur Datenminimierung umgesetzt (kein IP-Logging in GA4, keine PII, keine Werbefunktionen). Wenn wir später Cookies oder Werbefunktionen einführen, ist die Rechtsgrundlage hierfür Ihre Einwilligung (Art. 6 Abs. 1 lit. a)."
  },
  s5: {
    title: "5) Wie wir personenbezogene Daten nutzen",
    p1: "• Bereitstellung der Kernfunktionalität (Verarbeitung von Eingaben, Generierung von Antworten).",
    p2: "• Personalisierung der Nutzung (z. B. Sprache der Oberfläche).",
    p3: "• Leistungs­messung und Behebung technischer Probleme.",
    p4: "• Missbrauchsverhinderung (Spam, bösartige Aktivitäten).",
    p5: "• Kommunikation mit Ihnen (Support, Service-Mitteilungen, optionale Newsletter).",
    p6: "• Analyse aggregierter Trends und Verbesserung der Qualität von Modell/Service.",
    p7: "• „Kein-Speicher“-Modus: Ist er aktiviert, werden Texteingaben nur so lange gespeichert, wie es technisch zur Antwortgenerierung nötig ist, und anschließend gelöscht oder anonymisiert."
  },
  s6: {
    title: "6) Weitergabe von Daten",
    intro: "Wir verkaufen keine personenbezogenen Daten. Wir können Daten weitergeben:",
    p1: "• An Auftragsverarbeiter (Hosting, Sicherheit, technischer Support), die auf Grundlage eines Auftragsverarbeitungsvertrags nach unseren Weisungen handeln (ohne irgendein Recht, Ihre Eingaben zu veröffentlichen).",
    p2: "• An Dritte auf Ihre Anfrage/Ihr Einverständnis hin (z. B. Integrationen).",
    p3: "• Zur Einhaltung gesetzlicher Pflichten (als Reaktion auf rechtmäßige behördliche Anfragen).",
    p4: "• Bei Unternehmensänderungen (Fusion/Übernahme/Umstrukturierung) mit geeigneten Schutzmaßnahmen und Hinweis.",
    p5: "• <strong>Auftragsverarbeiter – Analytik:</strong> Wir verwenden Google Ireland Limited (Google Analytics 4) als unseren Auftragsverarbeiter für cookielose Verkehrsmessung. In begrenzten Fällen können Daten an verbundene Unternehmen der Google LLC (USA) übertragen werden – mit geeigneten Schutzmaßnahmen (z. B. Standardvertragsklauseln und/oder andere gültige Übermittlungsmechanismen). GA4 ist ohne IP-Protokollierung, ohne Google Signals und ohne PII konfiguriert.",
    foot: "Sollten wir künftig Analyse-/Werbedienste Dritter nutzen, informieren wir in der Cookie-Richtlinie und/oder einem Präferenzzentrum."
  },
  s7: {
    title: "7) KI-Verarbeitung, Profiling und automatisierte Entscheidungsfindung",
    lead: "Die Plattform erzeugt mithilfe von KI-Modellen JA/NEIN-Antworten und Wahrscheinlichkeitswerte zu Informationszwecken und bewirkt ohne menschliche Mitwirkung keine rechtlichen oder ähnlich erheblichen Auswirkungen für Sie.",
    p1: "• Ihre Informationen können für Bewertungen und Modellverbesserungen auf Grundlage berechtigter Interessen oder Ihrer Einwilligung verwendet werden; Opt-out-Möglichkeiten stehen zur Verfügung.",
    p2: "• Wo zumutbar und rechtlich zulässig, wenden wir Pseudonymisierung/Anonymisierung an."
  },
  s8: {
    title: "8) Internationale Datenübermittlungen",
    p1: "Daten können außerhalb Ihrer Zuständigkeit verarbeitet werden. Wir wenden geeignete Garantien an (z. B. Standardvertragsklauseln, Angemessenheitsbeschlüsse, technische/organisatorische Maßnahmen), um ein Schutzniveau gemäß geltendem Recht sicherzustellen.",
    p2: "Soweit für GA4 erforderlich, stützen wir uns auf gültige Übermittlungsmechanismen und wenden Datenminimierung an (keine Cookies, keine IP, keine PII)."
  },
  s9: {
    title: "9) Datensicherheit",
    p1: "Wir setzen technische und organisatorische Maßnahmen um (Zugriffskontrolle, Verschlüsselung während der Übertragung, Segmentierung, Zugriffsprotokollierung, regelmäßige Sicherheitsüberprüfungen). Kein System ist 100 % sicher; Sie sind dafür verantwortlich, Zugangsdaten vertraulich zu behandeln."
  },
  s10: {
    title: "10) Datenaufbewahrung",
    intro: "Wir bewahren Daten nur so lange auf, wie es für die Zwecke dieser Richtlinie erforderlich ist, sofern nicht gesetzlich ein längerer Zeitraum vorgeschrieben oder erlaubt ist. Richtwerte:",
    p1: "• <strong>Logs/technische Aufzeichnungen:</strong> typischerweise 12–24 Monate.",
    p2: "• <strong>localStorage/sessionStorage:</strong> auf Ihrem Gerät, bis Sie es löschen oder die App lokale Daten zurücksetzt.",
    p3: "• <strong>Analyse (GA4, cookielos):</strong> gemäß den Ereignisdaten-Einstellungen von GA4 — bis zu 2 Monate (Standard) oder bis zu 14 Monate bei ausdrücklicher Verlängerung; anschließend Löschung oder Anonymisierung. Aggregierte Berichte (ohne Nutzeridentifikation) können für historische Kennzahlen länger aufbewahrt werden.",
    nostore: "<strong>„Kein-Speicher“-Modus:</strong> Eingaben werden nach Abschluss der Verarbeitung nicht aufbewahrt (außer kurzen technischen Logs ohne den Texteingang)."
  },
  s11: {
    title: "11) Ihre Rechte",
    p1: "Vorbehaltlich des Gesetzes haben Sie das Recht auf Information und Auskunft; auf Berichtigung unrichtiger Daten; auf Löschung („Recht auf Vergessenwerden“); auf Einschränkung der Verarbeitung; auf Datenübertragbarkeit; auf Widerspruch (gegen auf berechtigte Interessen gestützte Verarbeitung oder Direktmarketing); sowie auf Widerruf einer Einwilligung (ohne Einfluss auf die Rechtmäßigkeit der bisherigen Verarbeitung).",
    p2: "Sie können die Löschung Ihrer Texteingaben und der damit verbundenen personenbezogenen Daten verlangen. Nach Identitätsprüfung löschen/anononymisieren wir sie innerhalb einer angemessenen Frist, sofern keine gesetzliche Aufbewahrungspflicht besteht.",
    p3: "Sie haben außerdem das Recht, der auf berechtigten Interessen beruhenden Analyse zu widersprechen; in diesem Fall stellen wir die Verarbeitung zu diesem Zweck ein, es sei denn, wir weisen zwingende berechtigte Gründe nach.",
    p4: "Senden Sie Anfragen an forecastlerteam@gmail.com. Wir antworten innerhalb von 30 Tagen oder der gesetzlichen Frist. Zudem haben Sie das Recht, Beschwerde bei der serbischen Datenschutzbehörde oder der zuständigen Behörde Ihres Wohnsitzlandes einzulegen."
  },
  s12: {
    title: "12) Kinder und Minderjährige",
    p1: "Die Plattform ist nicht für Personen unter 13 Jahren bestimmt. Personen von 13–18 dürfen sie mit Zustimmung und Aufsicht der Eltern/Erziehungsberechtigten nutzen. Wenn Sie glauben, dass wir Daten eines Kindes ohne gültige Grundlage verarbeiten, kontaktieren Sie uns bitte."
  },
  s13: {
    title: "13) Links Dritter",
    p1: "Externe Websites haben eigene Richtlinien; wir sind nicht für deren Inhalte oder Praktiken verantwortlich. Wir empfehlen, deren Richtlinien vor der Nutzung zu prüfen."
  },
  s14: {
    title: "14) Marketingkommunikation",
    p1: "Marketingnachrichten versenden wir nur mit Ihrer Einwilligung. Sie können sich jederzeit abmelden (über den Link in der E-Mail oder durch Kontaktaufnahme gemäß §1). Servicehinweise können vom Opt-out ausgenommen sein."
  },
  s15: {
    title: "15) Änderungen dieser Richtlinie",
    p1: "Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Neue Versionen werden mit aktualisiertem Datum veröffentlicht; die weitere Nutzung der Plattform gilt als Zustimmung zu den Änderungen."
  },
  s16: {
    title: "16) Sprachversionen",
    p1: "Die Plattform kann in mehreren Sprachen verfügbar sein. Bei Abweichungen zwischen Übersetzungen ist die englische Fassung maßgeblich, sofern zwingende Vorschriften Ihres Wohnsitzes nichts anderes verlangen."
  },
  s17: { title: "17) Kontakt", p1: "Forecastler Team" }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  meta: {
    title: "Política de Privacidade",
    effective: "Data de vigência: 17 de junho de 2025",
    updated:  "Última atualização: 24 de agosto de 2025",
    intro: "Esta Política explica como a Forecastler (“Plataforma”, “nós”, “nos”, “nosso”) coleta, usa, compartilha e protege seus dados quando você utiliza nossos serviços. Ao usar a Plataforma, você confirma que leu e entendeu esta Política juntamente com os Termos de Uso e o Aviso legal. Se não concordar, não utilize a Plataforma."
  },
  s1: {
    title: "1) Quem somos (controlador dos dados)",
    p1: "<strong>Controlador:</strong> Equipe Forecastler",
    p2: "<strong>Contato de privacidade:</strong> forecastlerteam@gmail.com",
    p3: "Se nomearmos um Encarregado de Proteção de Dados (DPO), publicaremos aqui os seus dados."
  },
  s2: {
    title: "2) Definições",
    p1: "• <strong>Plataforma/Serviço:</strong> o site da Forecastler, aplicativos, APIs e sistemas relacionados.",
    p2: "• <strong>Usuário:</strong> pessoa que utiliza o Serviço (registrada ou não).",
    p3: "• <strong>Dados pessoais:</strong> informações relativas a uma pessoa natural identificada ou identificável.",
    p4: "• <strong>Tratamento:</strong> qualquer operação realizada sobre dados pessoais (ex.: coleta, armazenamento, uso, divulgação).",
    foot: "Esta Política está alinhada aos princípios gerais de proteção de dados previstos nas leis aplicáveis (incluindo o RGPD e a Lei sérvia de Proteção de Dados Pessoais)."
  },
  s3: {
    title: "3) Quais dados coletamos",
    d31: "<strong>3.1 Dados que você fornece</strong>",
    d31_1: "• Entradas de texto (perguntas, descrições de contexto etc.) — usadas exclusivamente para gerar respostas de IA.",
    d31_2: "• Comunicação conosco (ex.: solicitações ao suporte, reclamações).",
    d31_note: "<em>Observação sobre contas.</em> O registro não está disponível no momento. Não coletamos dados de conta (nome, nome de usuário, senha). Se introduzirmos contas, atualizaremos esta Política antes de iniciar tal processamento.",

    d32: "<strong>3.2 Dados coletados automaticamente</strong>",
    d32_1: "• <strong>Dados técnicos e de logs:</strong> endereço IP, data/hora de acesso, solicitações de URL, identificadores de dispositivo/navegador, versão do SO, configurações de idioma, erros, diagnósticos.",
    d32_2: "• <strong>Dados de uso:</strong> ex.: número de consultas, cliques, páginas visualizadas, duração da sessão.",

    d33: "<strong>3.3 Cookies e tecnologias semelhantes (Google Analytics 4 sem cookies)</strong>",
    d33_1: "Não definimos cookies de análise. Utilizamos o Google Analytics 4 (GA4) no modo sem cookies; a medição baseia-se em sinais agregados e não identificáveis e não usa identificadores locais do seu dispositivo.",
    d33_2: "Logs padrão de servidor não contêm o conteúdo de suas entradas e são usados exclusivamente para segurança e diagnóstico. Usamos localStorage/sessionStorage apenas para funções de interface (veja a Política de Cookies) e eles não são vinculados ao GA4.",
    d33_eu_1: "<strong>Privacidade no GA4 (modo UE):</strong>",
    d33_eu_2: "– Na UE, o GA4 não registra nem armazena endereços IP; o IP é descartado antes do registro.",
    d33_eu_3: "– Não ativamos Google Signals nem recursos de publicidade; não fazemos personalização nem conectamos o GA4 a produtos publicitários externos.",
    d33_eu_4: "– Não enviamos ao GA4 quaisquer dados pessoais (PII), como nomes, endereços de e-mail ou identificadores de conta.",
    d33_note: "<em>Observação:</em> Se mais tarde introduzirmos cookies (ex.: para análises mais detalhadas ou anúncios), atualizaremos esta Política e, quando necessário, solicitaremos seu consentimento antes de definir cookies não essenciais.",

    d34: "<strong>3.4 Dados sensíveis</strong>",
    d34_1: "Não solicitamos dados sensíveis (ex.: saúde, crenças políticas/religiosas, orientação sexual, biometria). Não envie tais dados.",
    d34_2: "Se ainda assim enviá-los, você fornece consentimento expresso para o tratamento nos termos desta Política; é possível revogá-lo (veja Seus direitos).",

    d35: "<strong>3.5 Privacidade e visibilidade das entradas</strong>",
    d35_1: "• Suas entradas de texto são usadas exclusivamente para gerar respostas de IA e não ficam publicamente visíveis a outros usuários.",
    d35_2: "• Não compartilhamos suas entradas com outros usuários a menos que você mesmo as publique por meio de um recurso que ative intencionalmente.",
    d35_3: "• Podemos usar dados anonimizados/agrupados para estatísticas e melhoria do serviço, sem possibilidade de identificá-lo."
  },
  s4: {
    title: "4) Finalidades e bases jurídicas",
    intro: "Processamos dados apenas quando existe uma base jurídica (art. 6 do RGPD ou lei nacional equivalente):",
    p1: "• Prestação do serviço (contrato/etapas pré-contratuais).",
    p2: "• Segurança e prevenção de abuso (nossos interesses legítimos).",
    p3: "• Comunicações (contrato/interesses legítimos).",
    p4: "• Marketing (somente com o seu consentimento; você pode revogá-lo a qualquer momento).",
    p5: "• Obrigações legais (ex.: responder a solicitações legais).",
    p6: "• Melhoria do modelo/avaliação de IA (interesses legítimos ou consentimento; ver §7).",
    p7: "• Análise de uso (GA4, sem cookies): processamento com base em interesses legítimos (art. 6(1)(f) RGPD) para medição básica de tráfego, desempenho e estabilidade sem cookies e sem personalização. Realizamos um teste de ponderação e aplicamos medidas de minimização (sem registro de IP no GA4, sem PII, sem recursos de publicidade). Se posteriormente introduzirmos cookies ou recursos de anúncios, a base jurídica para esses fins será o seu consentimento (art. 6(1)(a))."
  },
  s5: {
    title: "5) Como usamos os dados pessoais",
    p1: "• Fornecer a funcionalidade central (processar entradas, gerar respostas).",
    p2: "• Personalizar a experiência (ex.: idioma da interface).",
    p3: "• Medir desempenho e solucionar problemas técnicos.",
    p4: "• Prevenir abusos (spam, atividade maliciosa).",
    p5: "• Comunicar com você (suporte, avisos de serviço, newsletters opcionais).",
    p6: "• Analisar tendências agregadas e melhorar a qualidade do modelo/serviço.",
    p7: "• Modo “sem armazenamento”: quando ativado, as entradas de texto são mantidas apenas pelo tempo tecnicamente necessário para gerar a resposta e depois são excluídas ou anonimizadas."
  },
  s6: {
    title: "6) Compartilhamento de dados",
    intro: "Não vendemos dados pessoais. Podemos compartilhar dados:",
    p1: "• Com subcontratantes (processadores) — hospedagem, segurança, suporte técnico — que atuam segundo nossas instruções sob um acordo de tratamento de dados (sem qualquer direito de publicar seus envios).",
    p2: "• Com terceiros a seu pedido/consentimento (ex.: integrações).",
    p3: "• Para conformidade legal (em resposta a solicitações legítimas de autoridades).",
    p4: "• Em mudanças societárias (fusão/aquisição/reorganização), com salvaguardas e aviso adequados.",
    p5: "• <strong>Processador – analítica:</strong> usamos a Google Ireland Limited (Google Analytics 4) como nosso processador para medição de tráfego sem cookies. Em casos limitados, dados podem ser transferidos para entidades relacionadas da Google LLC (EUA) com salvaguardas adequadas (ex.: Cláusulas Contratuais-Tipo e/ou outros mecanismos válidos de transferência). O GA4 é configurado sem registro de IP, sem Google Signals e sem PII.",
    foot: "Se no futuro utilizarmos serviços de analítica/publicidade de terceiros, isso será informado na Política de Cookies e/ou em um centro de preferências."
  },
  s7: {
    title: "7) Processamento por IA, criação de perfis e decisões automatizadas",
    lead: "A Plataforma gera respostas SIM/NÃO e percentuais de probabilidade usando modelos de IA para fins informativos e não produz efeitos jurídicos ou de similar relevância sobre você sem envolvimento humano.",
    p1: "• Suas informações podem ser usadas para avaliações e melhoria do modelo com base em interesses legítimos ou no seu consentimento, com mecanismos de opt-out disponíveis.",
    p2: "• Aplicaremos pseudonimização/anonimização quando for razoavelmente possível e lícito."
  },
  s8: {
    title: "8) Transferências internacionais",
    p1: "Os dados podem ser processados fora da sua jurisdição. Aplicamos salvaguardas adequadas (p. ex., Cláusulas Contratuais-Padrão, decisões de adequação, medidas técnicas/organizacionais) para garantir um nível de proteção consistente com a lei aplicável.",
    p2: "Quando necessário para o GA4, usamos mecanismos de transferência válidos e aplicamos minimização (sem cookies, sem IP, sem PII)."
  },
  s9: {
    title: "9) Segurança dos dados",
    p1: "Implementamos medidas técnicas e organizacionais (controle de acesso, criptografia em trânsito, segmentação, registros de acesso, revisões regulares de segurança). Nenhum sistema é 100% seguro; você é responsável por manter confidenciais as credenciais de acesso."
  },
  s10: {
    title: "10) Retenção de dados",
    intro: "Mantemos os dados apenas pelo tempo necessário para as finalidades desta Política, salvo quando a lei exigir ou permitir período maior. Como referência:",
    p1: "• <strong>Registros/logs técnicos:</strong> normalmente 12–24 meses.",
    p2: "• <strong>localStorage/sessionStorage:</strong> no seu dispositivo até você excluir ou o app redefinir os dados locais.",
    p3: "• <strong>Análises (GA4, sem cookies):</strong> conforme as configurações de dados de eventos do GA4 — até 2 meses (padrão) ou até 14 meses se expressamente estendido; depois, exclusão ou anonimização. Relatórios agregados (sem identificação do usuário) podem ser mantidos por mais tempo para métricas históricas.",
    nostore: "<strong>Modo “sem armazenamento”:</strong> as entradas não são mantidas após a conclusão do processamento (exceto logs técnicos curtos sem o texto da entrada)."
  },
  s11: {
    title: "11) Seus direitos",
    p1: "Sujeito à lei, você tem direito a ser informado e a acessar seus dados; retificar inexatidões; apagar dados («direito ao esquecimento»); restringir o tratamento; portabilidade; se opor (ao tratamento baseado em interesses legítimos ou ao marketing direto); e retirar o consentimento (sem afetar o tratamento lícito anterior).",
    p2: "Você pode solicitar a exclusão de suas entradas de texto e dos dados pessoais relacionados. Após verificarmos sua identidade, vamos excluir/anonimizar em prazo razoável, salvo quando a retenção for exigida por lei.",
    p3: "Você também tem o direito de se opor ao tratamento analítico baseado em interesses legítimos; nesse caso, deixaremos de tratar seus dados para esse fim, a menos que demonstremos motivos legítimos imperiosos.",
    p4: "Envie solicitações para forecastlerteam@gmail.com. Responderemos em até 30 dias ou no prazo legal. Você também tem o direito de apresentar reclamação à Autoridade Sérvia de Proteção de Dados ou à autoridade do seu país de residência."
  },
  s12: {
    title: "12) Crianças e menores",
    p1: "A Plataforma não se destina a menores de 13 anos. Pessoas de 13–18 podem utilizá-la com consentimento e supervisão dos pais/responsáveis. Se acreditar que tratamos dados de uma criança sem base válida, entre em contato."
  },
  s13: {
    title: "13) Links de terceiros",
    p1: "Os sites externos têm suas próprias políticas; não nos responsabilizamos por seu conteúdo ou práticas. Recomendamos revisar suas políticas antes do uso."
  },
  s14: {
    title: "14) Comunicações de marketing",
    p1: "Enviamos mensagens de marketing somente com o seu consentimento. Você pode cancelar a inscrição a qualquer momento (pelo link do e-mail ou contatando-nos conforme §1). Avisos de serviço podem estar isentos de opt-out."
  },
  s15: {
    title: "15) Alterações a esta Política",
    p1: "Podemos atualizar esta Política periodicamente. As novas versões serão publicadas com data atualizada; o uso contínuo da Plataforma implica a aceitação das alterações."
  },
  s16: {
    title: "16) Versões linguísticas",
    p1: "A Plataforma pode estar disponível em vários idiomas. Em caso de divergência entre traduções, prevalece a versão em inglês, salvo regras obrigatórias do seu país em contrário."
  },
  s17: { title: "17) Contacto", p1: "Equipe Forecastler" }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  meta: {
    title: "Informativa sulla privacy",
    effective: "Data di entrata in vigore: 17 giugno 2025",
    updated:  "Ultimo aggiornamento: 24 agosto 2025",
    intro: "La presente Informativa spiega come Forecastler («la Piattaforma», «noi», «ci», «nostro») raccoglie, utilizza, condivide e protegge i tuoi dati quando utilizzi i nostri servizi. Utilizzando la Piattaforma, confermi di aver letto e compreso la presente Informativa insieme ai nostri Termini di utilizzo e al Disclaimer. Se non sei d’accordo, ti preghiamo di non utilizzare la Piattaforma."
  },
  s1: {
    title: "1) Chi siamo (titolare del trattamento)",
    p1: "<strong>Titolare:</strong> Team Forecastler",
    p2: "<strong>Contatto privacy:</strong> forecastlerteam@gmail.com",
    p3: "Se nomineremo un Responsabile della Protezione dei Dati (DPO), ne pubblicheremo qui i dettagli."
  },
  s2: {
    title: "2) Definizioni",
    p1: "• <strong>Piattaforma/Servizio:</strong> il sito web Forecastler, le applicazioni, le API e i sistemi correlati.",
    p2: "• <strong>Utente:</strong> persona che utilizza il Servizio (registrata o non registrata).",
    p3: "• <strong>Dati personali:</strong> informazioni relative a una persona fisica identificata o identificabile.",
    p4: "• <strong>Trattamento:</strong> qualsiasi operazione sui dati personali (es. raccolta, conservazione, utilizzo, divulgazione).",
    foot: "La presente Informativa è in linea con i principi generali di protezione dei dati previsti dalle leggi applicabili (incluso il GDPR e la Legge serba sulla protezione dei dati personali)."
  },
  s3: {
    title: "3) Quali dati raccogliamo",
    d31: "<strong>3.1 Dati che fornisci tu</strong>",
    d31_1: "• Inserimenti testuali (domande, descrizioni di contesto, ecc.) — utilizzati esclusivamente per generare risposte di IA.",
    d31_2: "• Comunicazioni con noi (es. richieste all’assistenza, reclami).",
    d31_note: "<em>Nota sugli account.</em> La registrazione non è attualmente disponibile. Non raccogliamo dati di account (nome, nome utente, password). Se introdurremo gli account, aggiorneremo la presente Informativa prima di avviare tale trattamento.",

    d32: "<strong>3.2 Dati raccolti automaticamente</strong>",
    d32_1: "• <strong>Dati tecnici e di log:</strong> indirizzo IP, data/ora di accesso, richieste URL, identificatori di dispositivo/browser, versione del SO, impostazioni della lingua, errori, diagnostica.",
    d32_2: "• <strong>Dati di utilizzo:</strong> ad es. numero di query, clic, pagine visualizzate, durata della sessione.",

    d33: "<strong>3.3 Cookie e tecnologie simili (Google Analytics 4 senza cookie)</strong>",
    d33_1: "Non impostiamo cookie di analisi. Usiamo Google Analytics 4 (GA4) in modalità senza cookie; la misurazione si basa su segnali aggregati e non identificanti e non utilizza identificatori locali del tuo dispositivo.",
    d33_2: "I log standard del server non contengono il contenuto dei tuoi inserimenti e sono usati esclusivamente per sicurezza e diagnostica. Usiamo localStorage/sessionStorage solo per funzioni di interfaccia (vedi la Cookie Policy) e non sono collegati a GA4.",
    d33_eu_1: "<strong>Privacy GA4 (modalità UE):</strong>",
    d33_eu_2: "– Nell’UE, GA4 non registra né conserva gli indirizzi IP; l’IP viene scartato prima del logging.",
    d33_eu_3: "– Non attiviamo Google Signals né funzioni pubblicitarie; non effettuiamo personalizzazioni né colleghiamo GA4 a prodotti pubblicitari esterni.",
    d33_eu_4: "– Non inviamo a GA4 dati personali (PII) come nomi, indirizzi e-mail o identificatori di account.",
    d33_note: "<em>Nota:</em> Se in futuro introducessimo cookie (es. per analisi più dettagliate o pubblicità), aggiorneremo la presente Informativa e, ove necessario, chiederemo il tuo consenso prima di impostare cookie non essenziali.",

    d34: "<strong>3.4 Dati sensibili</strong>",
    d34_1: "Non richiediamo dati sensibili (es. salute, convinzioni politiche/religiose, orientamento sessuale, biometria). Non inviare tali dati.",
    d34_2: "Se tuttavia li invii, fornisci il consenso esplicito al trattamento secondo questa Informativa; puoi revocarlo (vedi I tuoi diritti).",

    d35: "<strong>3.5 Privacy e visibilità degli inserimenti</strong>",
    d35_1: "• I tuoi inserimenti testuali sono usati esclusivamente per generare risposte di IA e non sono visibili pubblicamente ad altri utenti.",
    d35_2: "• Non condividiamo i tuoi inserimenti con altri utenti a meno che tu non li pubblichi tramite una funzione che attivi intenzionalmente.",
    d35_3: "• Possiamo utilizzare dati anonimizzati/aggregati per statistiche e miglioramento del servizio, senza possibilità di identificarti."
  },
  s4: {
    title: "4) Finalità e basi giuridiche",
    intro: "Trattiamo i dati solo quando esiste una base giuridica (art. 6 GDPR o legge nazionale equivalente):",
    p1: "• Erogazione del servizio (contratto/fasi precontrattuali).",
    p2: "• Sicurezza e prevenzione degli abusi (nostri interessi legittimi).",
    p3: "• Comunicazioni (contratto/interessi legittimi).",
    p4: "• Marketing (solo con il tuo consenso; puoi revocarlo in qualsiasi momento).",
    p5: "• Obblighi legali (es. rispondere a richieste legittime).",
    p6: "• Miglioramento del modello/valutazione dell’IA (interessi legittimi o consenso; vedi §7).",
    p7: "• Analitiche d’uso (GA4, senza cookie): trattamento basato sul legittimo interesse (art. 6(1)(f) GDPR) per misurazioni di base di traffico, prestazioni e stabilità, senza cookie e senza personalizzazione. Abbiamo effettuato un test di bilanciamento e applichiamo misure di minimizzazione (nessun logging IP in GA4, nessun PII, nessuna funzionalità pubblicitaria). Se in seguito introducessimo cookie o funzionalità pubblicitarie, la base giuridica per tali finalità sarà il tuo consenso (art. 6(1)(a))."
  },
  s5: {
    title: "5) Come utilizziamo i dati personali",
    p1: "• Fornire le funzionalità principali (elaborare gli input, generare risposte).",
    p2: "• Personalizzare l’esperienza (es. lingua dell’interfaccia).",
    p3: "• Misurare le prestazioni e risolvere problemi tecnici.",
    p4: "• Prevenire abusi (spam, attività dannose).",
    p5: "• Comunicare con te (supporto, avvisi di servizio, newsletter facoltative).",
    p6: "• Analizzare tendenze aggregate e migliorare la qualità del modello/servizio.",
    p7: "• Modalità “senza archiviazione”: quando è attiva, gli input testuali sono conservati solo per il tempo tecnicamente necessario a generare la risposta, quindi eliminati o anonimizzati."
  },
  s6: {
    title: "6) Condivisione dei dati",
    intro: "Non vendiamo dati personali. Possiamo condividere dati:",
    p1: "• Con responsabili del trattamento (hosting, sicurezza, supporto tecnico) che agiscono secondo le nostre istruzioni in base a un accordo di nomina (senza alcun diritto di pubblicare i tuoi input).",
    p2: "• Con terze parti su tua richiesta/consenso (es. integrazioni).",
    p3: "• Per conformità legale (in risposta a richieste legittime delle autorità).",
    p4: "• In caso di operazioni societarie (fusione/acquisizione/riorganizzazione), con adeguate garanzie e informativa.",
    p5: "• <strong>Responsabile – analitiche:</strong> utilizziamo Google Ireland Limited (Google Analytics 4) come nostro responsabile per la misurazione del traffico senza cookie. In casi limitati, i dati possono essere trasferiti a entità collegate di Google LLC (USA) con garanzie appropriate (es. Clausole contrattuali standard e/o altri meccanismi di trasferimento validi). GA4 è configurato senza registrazione degli IP, senza Google Signals e senza PII.",
    foot: "Se in futuro useremo servizi di analitica/pubblicità di terzi, verrai informato nella Cookie Policy e/o in un centro preferenze."
  },
  s7: {
    title: "7) Trattamento IA, profilazione e decisioni automatizzate",
    lead: "La Piattaforma genera risposte SÌ/NO e percentuali di probabilità tramite modelli di IA a fini informativi e non produce effetti giuridici o similmente significativi su di te senza intervento umano.",
    p1: "• Le tue informazioni possono essere usate per valutazioni e miglioramento del modello sulla base di interessi legittimi o del tuo consenso, con meccanismi di opt-out disponibili.",
    p2: "• Applicheremo pseudonimizzazione/anonimizzazione ove ragionevolmente possibile e lecito."
  },
  s8: {
    title: "8) Trasferimenti internazionali",
    p1: "I dati possono essere trattati al di fuori della tua giurisdizione. Applichiamo garanzie adeguate (ad es. Clausole Contrattuali Standard, decisioni di adeguatezza, misure tecniche/organizzative) per assicurare un livello di protezione conforme alla normativa applicabile.",
    p2: "Se necessario per GA4, ci basiamo su meccanismi di trasferimento validi e applichiamo la minimizzazione (niente cookie, niente IP, niente PII)."
  },
  s9: {
    title: "9) Sicurezza dei dati",
    p1: "Implementiamo misure tecniche e organizzative (controllo degli accessi, cifratura in transito, segmentazione, registri di accesso, revisioni periodiche della sicurezza). Nessun sistema è sicuro al 100%; sei responsabile di mantenere riservate le credenziali di accesso."
  },
  s10: {
    title: "10) Conservazione dei dati",
    intro: "Conserviamo i dati solo per il tempo necessario alle finalità della presente Informativa, salvo periodi più lunghi richiesti o consentiti dalla legge. Indicazioni:",
    p1: "• <strong>Log/registri tecnici:</strong> in genere 12–24 mesi.",
    p2: "• <strong>localStorage/sessionStorage:</strong> sul tuo dispositivo finché non li elimini o l’app non azzera i dati locali.",
    p3: "• <strong>Analytics (GA4, senza cookie):</strong> secondo le impostazioni dei dati degli eventi di GA4 — fino a 2 mesi (predefinito) o fino a 14 mesi se espressamente esteso; quindi eliminati o anonimizzati. Report aggregati (senza identificazione dell’utente) possono essere conservati più a lungo per metriche storiche.",
    nostore: "<strong>Modalità “senza archiviazione”:</strong> gli input non vengono conservati dopo il completamento dell’elaborazione (salvo brevi log tecnici senza il testo dell’input)."
  },
  s11: {
    title: "11) I tuoi diritti",
    p1: "Nei limiti di legge, hai il diritto di essere informato e di accedere ai tuoi dati; di rettificare inesattezze; di cancellare i dati («diritto all’oblio»); di limitare il trattamento; alla portabilità; di opporti (al trattamento basato su interessi legittimi o al marketing diretto); e di revocare il consenso (senza pregiudicare la liceità del trattamento precedente).",
    p2: "Puoi richiedere la cancellazione dei tuoi input testuali e dei dati personali correlati. Dopo aver verificato la tua identità, li cancelleremo/anonimizeremo entro un termine ragionevole, salvo obblighi legali di conservazione.",
    p3: "Hai inoltre il diritto di opporti all’analitica basata su interessi legittimi; in tal caso interromperemo tale trattamento, salvo dimostrazione di motivi legittimi cogenti.",
    p4: "Invia le richieste a forecastlerteam@gmail.com. Risponderemo entro 30 giorni o entro i termini di legge. Hai anche il diritto di proporre reclamo all’Autorità serba per la protezione dei dati o all’autorità del tuo Paese di residenza."
  },
  s12: {
    title: "12) Bambini e minori",
    p1: "La Piattaforma non è destinata a minori di 13 anni. Le persone tra 13 e 18 anni possono utilizzarla con il consenso e la supervisione dei genitori/tutori. Se ritieni che trattiamo dati di un minore senza una valida base, contattaci."
  },
  s13: {
    title: "13) Collegamenti di terze parti",
    p1: "I siti esterni hanno politiche proprie; non siamo responsabili dei loro contenuti o pratiche. Consigliamo di consultare le loro politiche prima dell’uso."
  },
  s14: {
    title: "14) Comunicazioni di marketing",
    p1: "Inviamo messaggi di marketing solo con il tuo consenso. Puoi annullare l’iscrizione in qualsiasi momento (tramite il link nell’e-mail o contattandoci ai sensi del §1). Le notifiche di servizio possono essere escluse dall’opt-out."
  },
  s15: {
    title: "15) Modifiche alla presente Informativa",
    p1: "Possiamo aggiornare periodicamente la presente Informativa. Le nuove versioni saranno pubblicate con data aggiornata; l’uso continuato della Piattaforma implica l’accettazione delle modifiche."
  },
  s16: {
    title: "16) Versioni linguistiche",
    p1: "La Piattaforma può essere disponibile in più lingue. In caso di incongruenze tra traduzioni, prevale la versione inglese salvo diversa previsione obbligatoria del paese di residenza."
  },
  s17: { title: "17) Contatti", p1: "Team Forecastler" }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  meta: {
    title: "Polityka prywatności",
    effective: "Data wejścia w życie: 17 czerwca 2025 r.",
    updated:  "Ostatnia aktualizacja: 24 sierpnia 2025 r.",
    intro: "Niniejsza Polityka wyjaśnia, w jaki sposób Forecastler („Platforma”, „my”, „nas”, „nasze”) zbiera, wykorzystuje, udostępnia i chroni Twoje dane podczas korzystania z naszych usług. Korzystając z Platformy, potwierdzasz, że zapoznałeś(-aś) się z niniejszą Polityką wraz z Regulaminem i Zastrzeżeniami. Jeśli się nie zgadzasz, nie korzystaj z Platformy."
  },
  s1: {
    title: "1) Kim jesteśmy (administrator danych)",
    p1: "<strong>Administrator:</strong> Zespół Forecastler",
    p2: "<strong>Kontakt ds. prywatności:</strong> forecastlerteam@gmail.com",
    p3: "Jeśli wyznaczymy Inspektora Ochrony Danych (IOD/DPO), opublikujemy tutaj jego dane."
  },
  s2: {
    title: "2) Definicje",
    p1: "• <strong>Platforma/Usługa:</strong> strona Forecastler, aplikacje, interfejsy API i powiązane systemy.",
    p2: "• <strong>Użytkownik:</strong> osoba korzystająca z Usługi (zarejestrowana lub niezarejestrowana).",
    p3: "• <strong>Dane osobowe:</strong> informacje dotyczące zidentyfikowanej lub możliwej do zidentyfikowania osoby fizycznej.",
    p4: "• <strong>Przetwarzanie:</strong> każda operacja wykonywana na danych osobowych (np. zbieranie, przechowywanie, wykorzystanie, ujawnianie).",
    foot: "Niniejsza Polityka jest zgodna z ogólnymi zasadami ochrony danych wynikającymi z obowiązującego prawa (w tym RODO oraz serbską Ustawą o ochronie danych osobowych)."
  },
  s3: {
    title: "3) Jakie dane zbieramy",
    d31: "<strong>3.1 Dane, które przekazujesz</strong>",
    d31_1: "• Wpisy tekstowe (pytania, opisy kontekstu itp.) — wykorzystywane wyłącznie do generowania odpowiedzi SI.",
    d31_2: "• Komunikacja z nami (np. zgłoszenia do wsparcia, skargi).",
    d31_note: "<em>Uwaga dotycząca kont.</em> Rejestracja nie jest obecnie dostępna. Nie zbieramy danych kont (imię, nazwa użytkownika, hasło). Jeśli wprowadzimy konta, zaktualizujemy tę Politykę przed rozpoczęciem takiego przetwarzania.",

    d32: "<strong>3.2 Dane zbierane automatycznie</strong>",
    d32_1: "• <strong>Dane techniczne i logi:</strong> adres IP, data/godzina dostępu, żądania URL, identyfikatory urządzenia/przeglądarki, wersja systemu, ustawienia języka, błędy, diagnostyka.",
    d32_2: "• <strong>Dane o korzystaniu:</strong> np. liczba zapytań, kliknięcia, odwiedzone strony, czas trwania sesji.",

    d33: "<strong>3.3 Pliki cookie i podobne technologie (Google Analytics 4 bez plików cookie)</strong>",
    d33_1: "Nie ustawiamy cookies analitycznych. Używamy Google Analytics 4 (GA4) w trybie bez plików cookie; pomiar opiera się na zagregowanych, nieidentyfikujących sygnałach i nie korzysta z lokalnych identyfikatorów Twojego urządzenia.",
    d33_2: "Standardowe logi serwerowe nie zawierają treści Twoich wpisów i są używane wyłącznie do celów bezpieczeństwa i diagnostyki. localStorage/sessionStorage wykorzystujemy tylko do funkcji interfejsu (zob. Polityka plików cookie) i nie są one powiązane z GA4.",
    d33_eu_1: "<strong>Prywatność GA4 (tryb UE):</strong>",
    d33_eu_2: "– W UE GA4 nie rejestruje ani nie przechowuje adresów IP; IP jest odrzucany przed zapisaniem do logów.",
    d33_eu_3: "– Nie włączamy Google Signals ani funkcji reklamowych; nie prowadzimy personalizacji ani nie łączymy GA4 z zewnętrznymi produktami reklamowymi.",
    d33_eu_4: "– Nie przesyłamy do GA4 żadnych danych osobowych (PII), takich jak imiona i nazwiska, adresy e-mail czy identyfikatory kont.",
    d33_note: "<em>Uwaga:</em> Jeśli w przyszłości wprowadzimy pliki cookie (np. dla dokładniejszej analityki lub reklam), zaktualizujemy tę Politykę i — gdzie to wymagane — poprosimy o Twoją zgodę przed ustawieniem niekoniecznych cookies.",

    d34: "<strong>3.4 Dane wrażliwe</strong>",
    d34_1: "Nie prosimy o dane wrażliwe (np. zdrowie, przekonania polityczne/religijne, orientacja seksualna, biometria). Prosimy nie wysyłać takich danych.",
    d34_2: "Jeśli mimo to je prześlesz, udzielasz wyraźnej zgody na przetwarzanie zgodnie z niniejszą Polityką; możesz ją wycofać (zob. Twoje prawa).",

    d35: "<strong>3.5 Prywatność i widoczność wpisów</strong>",
    d35_1: "• Twoje wpisy tekstowe są wykorzystywane wyłącznie do generowania odpowiedzi SI i nie są publicznie widoczne dla innych użytkowników.",
    d35_2: "• Nie udostępniamy Twoich wpisów innym użytkownikom, chyba że sam(a) je upublicznisz za pomocą celowo aktywowanej funkcji.",
    d35_3: "• Możemy wykorzystywać dane zanonimizowane/zagregowane do statystyk i ulepszania usługi, bez możliwości identyfikacji Ciebie."
  },
  s4: {
    title: "4) Cele i podstawy prawne",
    intro: "Przetwarzamy dane wyłącznie, gdy istnieje podstawa prawna (art. 6 RODO lub równoważne prawo krajowe):",
    p1: "• Świadczenie usługi (umowa/czynności przedumowne).",
    p2: "• Bezpieczeństwo i zapobieganie nadużyciom (nasz prawnie uzasadniony interes).",
    p3: "• Komunikacja (umowa/prawnie uzasadniony interes).",
    p4: "• Marketing (wyłącznie za Twoją zgodą; możesz ją w każdej chwili wycofać).",
    p5: "• Obowiązki prawne (np. odpowiedzi na zgodne z prawem żądania).",
    p6: "• Ulepszanie modelu/ocena SI (prawnie uzasadniony interes lub zgoda; zob. §7).",
    p7: "• Analityka użycia (GA4, bez ciasteczek): przetwarzanie na podstawie prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO) dla podstawowego pomiaru ruchu, wydajności i stabilności, bez ciasteczek i bez personalizacji. Przeprowadziliśmy test równowagi interesów i stosujemy środki minimalizacji (brak logowania IP w GA4, brak PII, brak funkcji reklamowych). Jeśli później wprowadzimy ciasteczka lub funkcje reklamowe, podstawą prawną dla tych celów będzie Twoja zgoda (art. 6 ust. 1 lit. a)."
  },
  s5: {
    title: "5) Jak wykorzystujemy dane osobowe",
    p1: "• Zapewnienie kluczowych funkcji (przetwarzanie wpisów, generowanie odpowiedzi).",
    p2: "• Personalizacja doświadczenia (np. język interfejsu).",
    p3: "• Pomiar wydajności i rozwiązywanie problemów technicznych.",
    p4: "• Zapobieganie nadużyciom (spam, złośliwa aktywność).",
    p5: "• Komunikacja z Tobą (wsparcie, powiadomienia serwisowe, opcjonalne newslettery).",
    p6: "• Analiza trendów zagregowanych i poprawa jakości modelu/usługi.",
    p7: "• Tryb „bez przechowywania”: po włączeniu wpisy tekstowe są przechowywane wyłącznie tak długo, jak jest to technicznie konieczne do wygenerowania odpowiedzi, a następnie usuwane lub anonimizowane."
  },
  s6: {
    title: "6) Udostępnianie danych",
    intro: "Nie sprzedajemy danych osobowych. Możemy udostępniać dane:",
    p1: "• Podmiotom przetwarzającym (hosting, bezpieczeństwo, wsparcie techniczne) działającym zgodnie z naszymi instrukcjami na podstawie umowy powierzenia przetwarzania danych (bez prawa do publikowania Twoich wpisów).",
    p2: "• Stronom trzecim na Twoją prośbę/za Twoją zgodą (np. integracje).",
    p3: "• W celu wypełnienia obowiązków prawnych (w odpowiedzi na zgodne z prawem żądania władz).",
    p4: "• W przypadku zmian korporacyjnych (fuzja/przejęcie/reorganizacja) z odpowiednimi zabezpieczeniami i powiadomieniem.",
    p5: "• <strong>Podmiot przetwarzający – analityka:</strong> używamy Google Ireland Limited (Google Analytics 4) jako podmiotu przetwarzającego do pomiaru ruchu bez ciasteczek. W ograniczonych przypadkach dane mogą być przekazywane podmiotom powiązanym Google LLC (USA) przy zastosowaniu odpowiednich zabezpieczeń (np. Standardowe klauzule umowne i/lub inne ważne mechanizmy transferu). GA4 jest skonfigurowany bez logowania IP, bez Google Signals i bez PII.",
    foot: "Jeśli w przyszłości skorzystamy z usług analitycznych/reklamowych stron trzecich, poinformujemy o tym w Polityce plików cookie i/lub w centrum preferencji."
  },
  s7: {
    title: "7) Przetwarzanie SI, profilowanie i zautomatyzowane podejmowanie decyzji",
    lead: "Platforma generuje odpowiedzi TAK/NIE oraz procentowe prawdopodobieństwa przy użyciu modeli SI w celach informacyjnych i nie wywołuje skutków prawnych ani podobnie istotnych wobec Ciebie bez udziału człowieka.",
    p1: "• Twoje informacje mogą być wykorzystywane do ewaluacji i ulepszania modelu na podstawie prawnie uzasadnionego interesu lub Twojej zgody, z dostępnymi mechanizmami rezygnacji (opt-out).",
    p2: "• Zastosujemy pseudonimizację/anonimizację, gdy będzie to rozsądnie możliwe i zgodne z prawem."
  },
  s8: {
    title: "8) Transfery międzynarodowe",
    p1: "Dane mogą być przetwarzane poza Twoją jurysdykcją. Stosujemy odpowiednie zabezpieczenia (np. Standardowe Klauzule Umowne, decyzje stwierdzające odpowiedni poziom ochrony, środki techniczne/organizacyjne), aby zapewnić poziom ochrony zgodny z obowiązującym prawem.",
    p2: "Gdy jest to konieczne dla GA4, opieramy się na ważnych mechanizmach transferu i stosujemy minimalizację (bez plików cookie, bez IP, bez PII)."
  },
  s9: {
    title: "9) Bezpieczeństwo danych",
    p1: "Wdrażamy środki techniczne i organizacyjne (kontrola dostępu, szyfrowanie w tranzycie, segmentacja, rejestrowanie dostępu, regularne przeglądy bezpieczeństwa). Żaden system nie jest w 100% bezpieczny; odpowiadasz za poufność danych dostępowych."
  },
  s10: {
    title: "10) Przechowywanie danych",
    intro: "Przechowujemy dane tylko tak długo, jak jest to konieczne dla celów wskazanych w niniejszej Polityce, chyba że dłuższy okres wynika z przepisów. Wskazówki:",
    p1: "• <strong>Logi/zapis techniczny:</strong> zwykle 12–24 miesiące.",
    p2: "• <strong>localStorage/sessionStorage:</strong> na Twoim urządzeniu do czasu usunięcia przez Ciebie lub resetu danych lokalnych przez aplikację.",
    p3: "• <strong>Analityka (GA4, bez cookies):</strong> zgodnie z ustawieniami danych zdarzeń GA4 — do 2 miesięcy (domyślnie) lub do 14 miesięcy, jeśli wyraźnie wydłużymy; następnie usuwane lub anonimizowane. Zbiorcze raporty (bez identyfikacji użytkownika) mogą być przechowywane dłużej dla statystyk historycznych.",
    nostore: "<strong>Tryb „bez przechowywania”:</strong> wpisy nie są przechowywane po zakończeniu przetwarzania (z wyjątkiem krótkich logów technicznych bez samego tekstu)."
  },
  s11: {
    title: "11) Twoje prawa",
    p1: "Z zastrzeżeniem przepisów masz prawo do informacji i dostępu do danych; do sprostowania nieścisłości; do usunięcia danych („prawo do bycia zapomnianym”); do ograniczenia przetwarzania; do przenoszenia danych; do sprzeciwu (wobec przetwarzania na podstawie prawnie uzasadnionego interesu lub wobec marketingu bezpośredniego); oraz do wycofania zgody (bez wpływu na zgodność z prawem wcześniejszego przetwarzania).",
    p2: "Możesz zażądać usunięcia swoich wpisów tekstowych oraz powiązanych danych osobowych. Po weryfikacji tożsamości usuniemy/zanonimizujemy je w rozsądnym terminie, chyba że przepisy wymagają dłuższego przechowywania.",
    p3: "Masz także prawo wnieść sprzeciw wobec przetwarzania analitycznego opartego na uzasadnionym interesie; w takim przypadku zaprzestaniemy przetwarzania w tym celu, chyba że wykażemy nadrzędne prawnie uzasadnione podstawy.",
    p4: "Wyślij wnioski na adres forecastlerteam@gmail.com. Odpowiemy w ciągu 30 dni lub w terminie ustawowym. Przysługuje Ci również prawo wniesienia skargi do serbskiego organu ochrony danych lub organu w kraju zamieszkania."
  },
  s12: {
    title: "12) Dzieci i niepełnoletni",
    p1: "Platforma nie jest przeznaczona dla osób poniżej 13 lat. Osoby w wieku 13–18 lat mogą z niej korzystać za zgodą i pod nadzorem rodziców/opiekunów. Jeśli uważasz, że przetwarzamy dane dziecka bez ważnej podstawy, skontaktuj się z nami."
  },
  s13: {
    title: "13) Linki stron trzecich",
    p1: "Zewnętrzne serwisy mają własne polityki; nie odpowiadamy za ich treści ani praktyki. Zalecamy zapoznanie się z ich politykami przed użyciem."
  },
  s14: {
    title: "14) Komunikacja marketingowa",
    p1: "Wysyłamy wiadomości marketingowe wyłącznie za Twoją zgodą. Możesz zrezygnować w dowolnym momencie (link w e-mailu lub kontakt zgodnie z §1). Powiadomienia serwisowe mogą być wyłączone z opcji rezygnacji."
  },
  s15: {
    title: "15) Zmiany niniejszej Polityki",
    p1: "Możemy co pewien czas aktualizować niniejszą Politykę. Nowe wersje będą publikowane z uaktualnioną datą; dalsze korzystanie z Platformy oznacza akceptację zmian."
  },
  s16: {
    title: "16) Wersje językowe",
    p1: "Platforma może być dostępna w wielu językach. W przypadku rozbieżności między tłumaczeniami pierwszeństwo ma wersja angielska, chyba że obowiązkowe przepisy miejsca zamieszkania stanowią inaczej."
  },
  s17: { title: "17) Kontakt", p1: "Zespół Forecastler" }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  meta: {
    title: "Політика конфіденційності",
    effective: "Дата набрання чинності: 17 червня 2025 року",
    updated:  "Останнє оновлення: 24 серпня 2025 року",
    intro: "Ця Політика пояснює, як Forecastler («Платформа», «ми», «нас», «наші») збирає, використовує, передає та захищає ваші дані під час користування нашими послугами. Користуючись Платформою, ви підтверджуєте, що прочитали й зрозуміли цю Політику разом з Умовами використання та Застереженням. Якщо ви не згодні, не використовуйте Платформу."
  },
  s1: {
    title: "1) Хто ми (контролер даних)",
    p1: "<strong>Контролер:</strong> Команда Forecastler",
    p2: "<strong>Контакт з питань приватності:</strong> forecastlerteam@gmail.com",
    p3: "Якщо ми призначимо Уповноваженого із захисту даних (DPO), ми оприлюднимо його дані тут."
  },
  s2: {
    title: "2) Визначення",
    p1: "• <strong>Платформа/Сервіс:</strong> вебсайт Forecastler, застосунки, API та пов’язані системи.",
    p2: "• <strong>Користувач:</strong> особа, що користується Сервісом (зареєстрована або незареєстрована).",
    p3: "• <strong>Персональні дані:</strong> інформація, що стосується ідентифікованої або такої, що може бути ідентифікована, фізичної особи.",
    p4: "• <strong>Обробка:</strong> будь-яка операція з персональними даними (напр., збирання, зберігання, використання, розкриття).",
    foot: "Ця Політика узгоджується із загальними принципами захисту даних відповідно до чинного законодавства (включно з GDPR та Законом Сербії про захист персональних даних)."
  },
  s3: {
    title: "3) Які дані ми збираємо",
    d31: "<strong>3.1 Дані, які надаєте ви</strong>",
    d31_1: "• Текстові введення (запитання, описи контексту тощо) — використовуються виключно для генерування відповідей ШІ.",
    d31_2: "• Спілкування з нами (напр., звернення до підтримки, скарги).",
    d31_note: "<em>Примітка щодо облікових записів.</em> Реєстрація наразі недоступна. Ми не збираємо дані облікових записів (ім’я, ім’я користувача, пароль). Якщо ми запровадимо облікові записи, оновимо цю Політику до початку такої обробки.",

    d32: "<strong>3.2 Дані, що збираються автоматично</strong>",
    d32_1: "• <strong>Технічні дані та журнали:</strong> IP-адреса, дата/час доступу, запити URL, ідентифікатори пристрою/браузера, версія ОС, мовні налаштування, помилки, діагностика.",
    d32_2: "• <strong>Дані використання:</strong> напр., кількість запитів, кліки, переглянуті сторінки, тривалість сесії.",

    d33: "<strong>3.3 Файли cookie та подібні технології (Google Analytics 4 без файлів cookie)</strong>",
    d33_1: "Ми не встановлюємо аналітичні cookie. Ми використовуємо Google Analytics 4 (GA4) у режимі без cookie; вимірювання базується на агрегованих, неідентифікуючих сигналах і не використовує локальні ідентифікатори вашого пристрою.",
    d33_2: "Стандартні серверні журнали не містять змісту ваших введень і використовуються виключно для безпеки та діагностики. localStorage/sessionStorage застосовуємо лише для функцій інтерфейсу (див. Політика щодо файлів cookie) і вони не пов’язані з GA4.",
    d33_eu_1: "<strong>Конфіденційність GA4 (режим ЄС):</strong>",
    d33_eu_2: "– В ЄС GA4 не фіксує та не зберігає IP-адреси; IP відкидається до журналювання.",
    d33_eu_3: "– Ми не вмикаємо Google Signals і рекламні функції; не здійснюємо персоналізації й не поєднуємо GA4 із зовнішніми рекламними продуктами.",
    d33_eu_4: "– Ми не надсилаємо до GA4 жодних персональних даних (PII), як-от імена, адреси електронної пошти чи ідентифікатори облікових записів.",
    d33_note: "<em>Примітка:</em> Якщо згодом ми запровадимо cookie (напр., для детальнішої аналітики або реклами), ми оновимо цю Політику та, за потреби, запитаємо вашу згоду перед встановленням не обов’язкових cookie.",

    d34: "<strong>3.4 Чутливі дані</strong>",
    d34_1: "Ми не запитуємо чутливі дані (напр., про здоров’я, політичні/релігійні переконання, сексуальну орієнтацію, біометрію). Будь ласка, не надсилайте такі дані.",
    d34_2: "Якщо ж ви їх надішлете, ви надаєте явну згоду на обробку відповідно до цієї Політики; можете її відкликати (див. Ваші права).",

    d35: "<strong>3.5 Конфіденційність і видимість введень</strong>",
    d35_1: "• Ваші текстові введення використовуються виключно для генерування відповідей ШІ і не є публічно видимими для інших користувачів.",
    d35_2: "• Ми не ділимося вашими введеннями з іншими користувачами, якщо тільки ви самі їх не оприлюдните через навмисно активовану функцію.",
    d35_3: "• Ми можемо використовувати анонімізовані/агреговані дані для статистики та поліпшення сервісу без можливості вас ідентифікувати."
  },
  s4: {
    title: "4) Цілі та правові підстави",
    intro: "Ми обробляємо дані лише за наявності правової підстави (ст. 6 GDPR або еквівалентне національне право):",
    p1: "• Надання сервісу (договір/переддоговірні дії).",
    p2: "• Безпека та запобігання зловживанням (наші законні інтереси).",
    p3: "• Комунікації (договір/законні інтереси).",
    p4: "• Маркетинг (лише за вашою згодою; ви можете відкликати її будь-коли).",
    p5: "• Юридичні зобов’язання (наприклад, відповідь на законні запити).",
    p6: "• Поліпшення моделі/оцінка ШІ (законні інтереси або згода; див. §7).",
    p7: "• Аналітика використання (GA4, без файлів cookie): обробка на підставі законного інтересу (ст. 6(1)(f) GDPR) для базового вимірювання трафіку, продуктивності та стабільності без cookie та без персоналізації. Ми провели оцінку балансування інтересів і застосовуємо заходи мінімізації (відсутність журналювання IP у GA4, жодних PII, жодних рекламних функцій). Якщо згодом ми впровадимо cookie чи рекламні функції, правовою підставою для цих цілей буде ваша згода (ст. 6(1)(a))."
  },
  s5: {
    title: "5) Як ми використовуємо персональні дані",
    p1: "• Для надання основної функціональності (обробка введень, генерування відповідей).",
    p2: "• Для персоналізації досвіду (наприклад, мова інтерфейсу).",
    p3: "• Для вимірювання продуктивності та усунення технічних проблем.",
    p4: "• Для запобігання зловживанням (спам, шкідлива активність).",
    p5: "• Для комунікації з вами (підтримка, службові повідомлення, необов’язкові розсилки).",
    p6: "• Для аналізу агрегованих трендів і поліпшення якості моделі/сервісу.",
    p7: "• Режим «без зберігання»: коли увімкнено, текстові введення зберігаються лише настільки, наскільки це технічно необхідно для формування відповіді, після чого видаляються або анонімізуються."
  },
  s6: {
    title: "6) Обмін даними",
    intro: "Ми не продаємо персональні дані. Ми можемо ділитися даними:",
    p1: "• З обробниками (хостинг, безпека, технічна підтримка), які діють за нашими інструкціями на підставі договору з обробки даних (без права публікувати ваші введення).",
    p2: "• Із третіми сторонами на ваш запит/за вашої згоди (напр., інтеграції).",
    p3: "• Для дотримання закону (у відповідь на законні запити органів влади).",
    p4: "• У разі корпоративних змін (злиття/поглинання/реорганізація) із належними запобіжниками та повідомленням.",
    p5: "• <strong>Обробник – аналітика:</strong> ми використовуємо Google Ireland Limited (Google Analytics 4) як нашого обробника для вимірювання трафіку без cookies. У обмежених випадках дані можуть передаватися пов’язаним структурам Google LLC (США) із застосуванням належних гарантій (напр., Типові договірні положення та/або інші чинні механізми передачі). GA4 налаштовано без журналювання IP, без Google Signals і без PII.",
    foot: "Якщо в майбутньому ми використовуватимемо сторонні служби аналітики/реклами, про це буде повідомлено в Політиці щодо файлів cookie та/або у центрі налаштувань."
  },
  s7: {
    title: "7) Обробка ШІ, профілювання та автоматизоване ухвалення рішень",
    lead: "Платформа генерує відповіді ТАК/НІ та відсоткові ймовірності за допомогою моделей ШІ з інформаційною метою й не створює юридичних або подібно значущих наслідків для вас без участі людини.",
    p1: "• Вашу інформацію можуть використовувати для оцінок та поліпшення моделі на підставі законних інтересів або вашої згоди; доступні механізми відмови (opt-out).",
    p2: "• Ми застосовуватимемо псевдонімізацію/анонімізацію там, де це розумно можливо та законно."
  },
  s8: {
    title: "8) Міжнародні передачі",
    p1: "Дані можуть оброблятися за межами вашої юрисдикції. Ми застосовуємо належні гарантії (напр., стандартні договірні положення, рішення про належний рівень захисту, технічні/організаційні заходи), щоб забезпечити рівень захисту відповідно до чинного законодавства.",
    p2: "За потреби для GA4 ми використовуємо дійсні механізми передання та застосовуємо мінімізацію (без cookies, без IP, без PII)."
  },
  s9: {
    title: "9) Безпека даних",
    p1: "Ми впроваджуємо технічні та організаційні заходи (контроль доступу, шифрування під час передавання, сегментація, журналювання доступу, регулярні перевірки безпеки). Жодна система не є на 100% безпечною; ви відповідаєте за конфіденційність своїх облікових даних доступу."
  },
  s10: {
    title: "10) Зберігання даних",
    intro: "Ми зберігаємо дані лише стільки, скільки потрібно для цілей цієї Політики, якщо інший строк не вимагається або не дозволяється законом. Орієнтири:",
    p1: "• <strong>Журнали/технічні записи:</strong> зазвичай 12–24 місяці.",
    p2: "• <strong>localStorage/sessionStorage:</strong> на вашому пристрої, доки ви не видалите або доки застосунок не скине локальні дані.",
    p3: "• <strong>Аналітика (GA4, без cookie):</strong> зберігається згідно з налаштуваннями даних подій GA4 — до 2 місяців (типово) або до 14 місяців, якщо ми це прямо подовжимо; після чого видаляється або анонімізується. Агреговані звіти (без ідентифікації користувача) можуть зберігатися довше для історичної звітності.",
    nostore: "<strong>Режим «без зберігання»:</strong> введення не зберігаються після завершення обробки (окрім коротких технічних логів без тексту введення)."
  },
  s11: {
    title: "11) Ваші права",
    p1: "Згідно із законом, ви маєте право бути поінформованими та отримати доступ до своїх даних; виправити неточності; видалити дані («право бути забутим»); обмежити обробку; на переносимість даних; заперечити (проти обробки на підставі законних інтересів або проти прямого маркетингу); а також відкликати згоду (без впливу на правомірність попередньої обробки).",
    p2: "Ви можете вимагати видалення своїх текстових введень і пов’язаних персональних даних. Після перевірки вашої особи ми видалимо/анонімізуємо їх у розумний строк, якщо інше не вимагається законом.",
    p3: "Ви також маєте право заперечити проти аналітичної обробки на підставі законного інтересу; у такому разі ми припинимо цю обробку, якщо не доведемо наявність переконливих законних підстав.",
    p4: "Надсилайте запити на адресу forecastlerteam@gmail.com. Ми відповімо протягом 30 днів або у встановлений законом строк. Також ви маєте право подати скаргу до органу із захисту даних Сербії або до органу у вашій країні проживання."
  },
  s12: {
    title: "12) Діти та неповнолітні",
    p1: "Платформа не призначена для осіб молодше 13 років. Особи 13–18 років можуть користуватися Платформою за згодою та під наглядом батьків/опікунів. Якщо ви вважаєте, що ми обробляємо дані дитини без належної підстави, зв’яжіться з нами."
  },
  s13: {
    title: "13) Посилання на сторонні ресурси",
    p1: "Зовнішні сайти мають власні політики; ми не відповідаємо за їхній контент чи практики. Рекомендуємо ознайомитись із їхніми політиками перед використанням."
  },
  s14: {
    title: "14) Маркетингові повідомлення",
    p1: "Надсилаємо маркетингові повідомлення лише за вашою згодою. Ви можете відмовитися будь-коли (через посилання в електронному листі або зв’язавшись із нами відповідно до §1). Службові сповіщення можуть не підлягати відмові."
  },
  s15: {
    title: "15) Зміни до цієї Політики",
    p1: "Ми можемо періодично оновлювати цю Політику. Нові версії публікуватимуться з оновленою датою; подальше користування Платформою означає прийняття змін."
  },
  s16: {
    title: "16) Мовні версії",
    p1: "Платформа може бути доступна кількома мовами. У разі невідповідностей між перекладами, пріоритет має англійська версія, якщо інше не вимагають імперативні норми вашої юрисдикції."
  },
  s17: { title: "17) Контакт", p1: "Команда Forecastler" }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  meta: {
    title: "Политика конфиденциальности",
    effective: "Дата вступления в силу: 17 июня 2025 г.",
    updated:  "Последнее обновление: 24 августа 2025 г.",
    intro: "Настоящая Политика объясняет, как Forecastler («Платформа», «мы», «нас», «наш/наши») собирает, использует, передаёт и защищает ваши данные при использовании наших сервисов. Пользуясь Платформой, вы подтверждаете, что прочитали и поняли настоящую Политику вместе с Условиями использования и Отказом от ответственности. Если вы не согласны, пожалуйста, не используйте Платформу."
  },
  s1: {
    title: "1) Кто мы (контролёр данных)",
    p1: "<strong>Контролёр:</strong> Команда Forecastler",
    p2: "<strong>Контакт по вопросам конфиденциальности:</strong> forecastlerteam@gmail.com",
    p3: "Если мы назначим уполномоченного по защите данных (DPO), мы опубликуем его данные здесь."
  },
  s2: {
    title: "2) Определения",
    p1: "• <strong>Платформа/Сервис:</strong> веб-сайт Forecastler, приложения, API и связанные системы.",
    p2: "• <strong>Пользователь:</strong> лицо, использующее Сервис (зарегистрированное или незарегистрированное).",
    p3: "• <strong>Персональные данные:</strong> информация, относящаяся к идентифицированному или идентифицируемому физическому лицу.",
    p4: "• <strong>Обработка:</strong> любая операция с персональными данными (например, сбор, хранение, использование, раскрытие).",
    foot: "Настоящая Политика соответствует общим принципам защиты данных в соответствии с применимым законодательством (включая GDPR и Закон Сербии о защите персональных данных)."
  },
  s3: {
    title: "3) Какие данные мы собираем",
    d31: "<strong>3.1 Данные, которые вы предоставляете</strong>",
    d31_1: "• Текстовые вводы (вопросы, описания контекста и т. п.) — используются исключительно для генерации ответов ИИ.",
    d31_2: "• Общение с нами (например, обращения в поддержку, жалобы).",
    d31_note: "<em>Примечание об учетных записях.</em> Регистрация в настоящее время недоступна. Мы не собираем данные учетных записей (имя, логин, пароль). Если мы введем учетные записи, обновим эту Политику до начала такой обработки.",

    d32: "<strong>3.2 Данные, собираемые автоматически</strong>",
    d32_1: "• <strong>Технические и журнальные данные:</strong> IP-адрес, дата/время доступа, запросы URL, идентификаторы устройства/браузера, версия ОС, языковые настройки, ошибки, диагностика.",
    d32_2: "• <strong>Данные об использовании:</strong> например, число запросов, клики, просмотренные страницы, длительность сессии.",

    d33: "<strong>3.3 Файлы cookie и аналогичные технологии (Google Analytics 4 без файлов cookie)</strong>",
    d33_1: "Мы не устанавливаем аналитические cookie. Мы используем Google Analytics 4 (GA4) в режиме без cookie; измерения основаны на агрегированных, неидентифицирующих сигналах и не используют локальные идентификаторы вашего устройства.",
    d33_2: "Стандартные серверные журналы не содержат содержимого ваших вводов и используются исключительно для безопасности и диагностики. localStorage/sessionStorage применяем только для функций интерфейса (см. Политику в отношении файлов cookie) и они не связаны с GA4.",
    d33_eu_1: "<strong>Конфиденциальность GA4 (режим ЕС):</strong>",
    d33_eu_2: "– В ЕС GA4 не записывает и не хранит IP-адреса; IP отбрасывается до журналирования.",
    d33_eu_3: "– Мы не включаем Google Signals и рекламные функции; не выполняем персонализацию и не связываем GA4 с внешними рекламными продуктами.",
    d33_eu_4: "– Мы не отправляем в GA4 персональные данные (PII), такие как имена, адреса электронной почты или идентификаторы аккаунтов.",
    d33_note: "<em>Примечание:</em> Если в дальнейшем мы введем cookie (например, для более детальной аналитики или рекламы), мы обновим настоящую Политику и, при необходимости, запросим ваше согласие до установки необязательных cookie.",

    d34: "<strong>3.4 Чувствительные данные</strong>",
    d34_1: "Мы не запрашиваем чувствительные данные (например, сведения о здоровье, политические/религиозные убеждения, сексуальная ориентация, биометрия). Пожалуйста, не отправляйте такие данные.",
    d34_2: "Если вы всё же их отправите, вы даете явное согласие на обработку в рамках этой Политики; согласие можно отозвать (см. Ваши права).",

    d35: "<strong>3.5 Конфиденциальность и видимость вводимых данных</strong>",
    d35_1: "• Ваши текстовые вводы используются исключительно для генерации ответов ИИ и не видны другим пользователям публично.",
    d35_2: "• Мы не делимся вашими вводами с другими пользователями, если только вы сами не опубликуете их через преднамеренно активированную функцию.",
    d35_3: "• Мы можем использовать анонимизированные/агрегированные данные для статистики и улучшения сервиса, без возможности вашей идентификации."
  },
  s4: {
    title: "4) Цели и правовые основания",
    intro: "Мы обрабатываем данные только при наличии правового основания (ст. 6 GDPR или эквивалентное национальное законодательство):",
    p1: "• Предоставление сервиса (договор/преддоговорные шаги).",
    p2: "• Безопасность и предотвращение злоупотреблений (наши законные интересы).",
    p3: "• Коммуникации (договор/законные интересы).",
    p4: "• Маркетинг (только с вашим согласием; вы можете отозвать его в любое время).",
    p5: "• Юридические обязанности (например, ответы на законные запросы).",
    p6: "• Улучшение модели/оценка ИИ (законные интересы или согласие; см. §7).",
    p7: "• Аналитика использования (GA4, без файлов cookie): обработка на основании законного интереса (ст. 6(1)(f) GDPR) для базового измерения трафика, производительности и стабильности без cookies и без персонализации. Мы провели оценку баланса интересов и применяем меры минимизации (нет логирования IP в GA4, нет PII, нет рекламных функций). Если позже мы введём cookies или рекламные функции, правовым основанием будет ваше согласие (ст. 6(1)(a))."
  },
  s5: {
    title: "5) Как мы используем персональные данные",
    p1: "• Для предоставления основной функциональности (обработка вводов, генерация ответов).",
    p2: "• Для персонализации опыта (например, язык интерфейса).",
    p3: "• Для измерения производительности и устранения технических проблем.",
    p4: "• Для предотвращения злоупотреблений (спам, злонамеренная активность).",
    p5: "• Для связи с вами (поддержка, служебные уведомления, необязательные рассылки).",
    p6: "• Для анализа агрегированных трендов и улучшения качества модели/сервиса.",
    p7: "• Режим «без хранения»: при включении текстовые вводы сохраняются только на время, технически необходимое для формирования ответа, затем удаляются или анонимизируются."
  },
  s6: {
    title: "6) Передача данных",
    intro: "Мы не продаём персональные данные. Мы можем делиться данными:",
    p1: "• С обработчиками (хостинг, безопасность, техническая поддержка), действующими по нашим инструкциям на основании договора об обработке данных (без права публиковать ваши вводимые данные).",
    p2: "• С третьими лицами по вашему запросу/с вашего согласия (например, интеграции).",
    p3: "• Для соблюдения законодательства (в ответ на законные запросы государственных органов).",
    p4: "• При корпоративных изменениях (слияние/поглощение/реорганизация) при наличии соответствующих гарантий и уведомления.",
    p5: "• <strong>Обработчик – аналитика:</strong> мы используем Google Ireland Limited (Google Analytics 4) как нашего обработчика для измерения трафика без cookie. В ограниченных случаях данные могут передаваться аффилированным лицам Google LLC (США) при наличии надлежащих гарантий (например, Стандартные договорные положения и/или иные действительные механизмы передачи). GA4 настроен без логирования IP, без Google Signals и без PII.",
    foot: "Если в будущем мы будем использовать сторонние сервисы аналитики/рекламы, вы будете проинформированы в Политике использования файлов cookie и/или в центре предпочтений."
  },
  s7: {
    title: "7) Обработка ИИ, профилирование и автоматизированное принятие решений",
    lead: "Платформа с информационной целью генерирует ответы ДА/НЕТ и значения вероятности с помощью моделей ИИ и не порождает юридических или аналогично значимых последствий для вас без участия человека.",
    p1: "• Ваша информация может использоваться для оценок и улучшения модели на основании законных интересов либо вашего согласия; доступны механизмы отказа (opt-out).",
    p2: "• Мы будем применять псевдонимизацию/анонимизацию, где это разумно возможно и законно."
  },
  s8: {
    title: "8) Международные передачи данных",
    p1: "Данные могут обрабатываться за пределами вашей юрисдикции. Мы применяем надлежащие гарантии (например, стандартные договорные положения, решения об адекватности, технические/организационные меры), чтобы обеспечить уровень защиты в соответствии с применимым законодательством.",
    p2: "Когда это необходимо для GA4, мы используем действительные механизмы передачи и применяем минимизацию (без файлов cookie, без IP, без PII)."
  },
  s9: {
    title: "9) Безопасность данных",
    p1: "Мы внедряем технические и организационные меры (контроль доступа, шифрование при передаче, сегментация, журналирование доступа, регулярные проверки безопасности). Ни одна система не является на 100% безопасной; вы несёте ответственность за конфиденциальность своих данных доступа."
  },
  s10: {
    title: "10) Хранение данных",
    intro: "Мы храним данные только столько, сколько необходимо для целей, указанных в настоящей Политике, если более длительный срок не требуется или не допускается законом. Ориентиры:",
    p1: "• <strong>Журналы/технические записи:</strong> обычно 12–24 месяца.",
    p2: "• <strong>localStorage/sessionStorage:</strong> на вашем устройстве до удаления вами или сброса локальных данных приложением.",
    p3: "• <strong>Аналитика (GA4, без cookies):</strong> хранение согласно настройкам данных событий GA4 — до 2 месяцев (по умолчанию) или до 14 месяцев при явном продлении; затем удаление или анонимизация. Агрегированные отчёты (без идентификации пользователя) могут храниться дольше для исторических метрик.",
    nostore: "<strong>Режим «без хранения»:</strong> вводы не сохраняются после завершения обработки (кроме кратких технических логов без текста ввода)."
  },
  s11: {
    title: "11) Ваши права",
    p1: "В соответствии с законом у вас есть право на информирование и доступ к вашим данным; на исправление неточностей; на удаление данных («право быть забытым»); на ограничение обработки; на переносимость данных; на возражение (против обработки на основании законных интересов или против прямого маркетинга); и на отзыв согласия (без влияния на законность ранее проведенной обработки).",
    p2: "Вы можете запросить удаление ваших текстовых вводов и связанных персональных данных. После подтверждения личности мы удалим/анонимизируем их в разумный срок, если иное не требуется законом.",
    p3: "У вас также есть право возразить против аналитической обработки на основании законных интересов; в таком случае мы прекратим обработку для этой цели, если не докажем наличие непреодолимых законных оснований.",
    p4: "Направляйте запросы на forecastlerteam@gmail.com. Мы ответим в течение 30 дней или в установленный законом срок. Также вы вправе подать жалобу в сербский орган по защите данных или в компетентный орган вашей страны проживания."
  },
  s12: {
    title: "12) Дети и несовершеннолетние",
    p1: "Платформа не предназначена для лиц младше 13 лет. Лица 13–18 лет могут использовать Платформу с согласия и под надзором родителей/опекунов. Если вы считаете, что мы обрабатываем данные ребёнка без надлежащего основания, свяжитесь с нами."
  },
  s13: {
    title: "13) Ссылки третьих лиц",
    p1: "Внешние сайты имеют собственные политики; мы не несем ответственности за их содержание или практики. Рекомендуем ознакомиться с их политиками перед использованием."
  },
  s14: {
    title: "14) Маркетинговые сообщения",
    p1: "Мы отправляем маркетинговые сообщения только с вашего согласия. Вы можете отписаться в любое время (по ссылке в письме или связавшись с нами согласно §1). Сервисные уведомления могут не подпадать под отказ от рассылки."
  },
  s15: {
    title: "15) Изменения настоящей Политики",
    p1: "Мы можем периодически обновлять настоящую Политику. Новые версии публикуются с обновленной датой; дальнейшее использование Платформы означает принятие изменений."
  },
  s16: {
    title: "16) Языковые версии",
    p1: "Платформа может быть доступна на нескольких языках. В случае расхождений между переводами приоритет имеет английская версия, если иное не требуется императивными нормами вашей юрисдикции."
  },
  s17: { title: "17) Контакты", p1: "Команда Forecastler" }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  meta: {
    title: "Gizlilik Politikası",
    effective: "Yürürlük Tarihi: 17 Haziran 2025",
    updated:  "Son Güncelleme: 24 Ağustos 2025",
    intro: "Bu Politika, Forecastler’in (“Platform”, “biz”, “bize”, “bizim”) hizmetlerimizi kullandığınızda verilerinizi nasıl topladığını, kullandığını, paylaştığını ve koruduğunu açıklar. Platformu kullanarak, bu Politikayı Kullanım Şartlarımız ve Feragatname ile birlikte okuduğunuzu ve anladığınızı teyit edersiniz. Kabul etmiyorsanız lütfen Platformu kullanmayın."
  },
  s1: {
    title: "1) Biz kimiz (veri sorumlusu)",
    p1: "<strong>Veri Sorumlusu:</strong> Forecastler Ekibi",
    p2: "<strong>Gizlilik iletişimi:</strong> forecastlerteam@gmail.com",
    p3: "Bir Veri Koruma Görevlisi (DPO) atarsak, bilgilerini burada yayımlayacağız."
  },
  s2: {
    title: "2) Tanımlar",
    p1: "• <strong>Platform/Hizmet:</strong> Forecastler web sitesi, uygulamalar, API’ler ve ilgili sistemler.",
    p2: "• <strong>Kullanıcı:</strong> Hizmeti kullanan kişi (kayıtlı veya kayıtsız).",
    p3: "• <strong>Kişisel veri:</strong> kimliği belirli veya belirlenebilir gerçek kişiye ilişkin bilgiler.",
    p4: "• <strong>İşleme:</strong> kişisel veriler üzerinde gerçekleştirilen herhangi bir işlem (ör. toplama, saklama, kullanma, ifşa).",
    foot: "Bu Politika, yürürlükteki yasalar kapsamındaki genel veri koruma ilkeleriyle uyumludur (GDPR ve Sırbistan Kişisel Verilerin Korunması Kanunu dâhil)."
  },
  s3: {
    title: "3) Hangi verileri topluyoruz",
    d31: "<strong>3.1 Sizin sağladığınız veriler</strong>",
    d31_1: "• Metin girişleri (sorular, bağlam açıklamaları vb.) — yalnızca YZ yanıtları üretmek için kullanılır.",
    d31_2: "• Bizimle iletişim (örn. destek talepleri, şikayetler).",
    d31_note: "<em>Hesaplara ilişkin not.</em> Kayıt şu anda etkin değildir. Hesap verilerini (ad, kullanıcı adı, parola) toplamıyoruz. Hesapları devreye alırsak, bu tür bir işlemeye başlamadan önce bu Politikayı güncelleyeceğiz.",

    d32: "<strong>3.2 Otomatik olarak toplanan veriler</strong>",
    d32_1: "• <strong>Teknik ve günlük (log) verileri:</strong> IP adresi, erişim tarihi/saati, URL istekleri, cihaz/tarayıcı tanımlayıcıları, OS sürümü, dil ayarları, hatalar, tanılama bilgileri.",
    d32_2: "• <strong>Kullanım verileri:</strong> örn. sorgu sayısı, tıklamalar, görüntülenen sayfalar, oturum süresi.",

    d33: "<strong>3.3 Çerezler ve benzer teknolojiler (çerezsiz Google Analytics 4)</strong>",
    d33_1: "Analitik çerezleri ayarlamıyoruz. Google Analytics 4’ü (GA4) çerezsiz modda kullanıyoruz; ölçüm, birleştirilmiş ve kimliği belirlenemeyen sinyallere dayanır ve cihazınızın yerel tanımlayıcılarını kullanmaz.",
    d33_2: "Standart sunucu günlükleri, girişlerinizin içeriğini içermez ve yalnızca güvenlik ve tanılama amaçlarıyla kullanılır. localStorage/sessionStorage’ı yalnızca arayüz işlevleri için kullanırız (bkz. Çerez Politikası) ve GA4 ile bağlantılı değildir.",
    d33_eu_1: "<strong>GA4 gizliliği (AB modu):</strong>",
    d33_eu_2: "– AB’de GA4 IP adreslerini kaydetmez veya saklamaz; IP günlüklere yazılmadan önce atılır.",
    d33_eu_3: "– Google Signals veya reklam işlevlerini etkinleştirmiyoruz; kişiselleştirme yapmıyoruz ve GA4’ü haricî reklam ürünlerine bağlamıyoruz.",
    d33_eu_4: "– GA4’e adlar, e-posta adresleri veya hesap tanımlayıcıları gibi hiçbir kişisel veri (PII) göndermiyoruz.",
    d33_note: "<em>Not:</em> İleride çerezleri devreye alırsak (örn. daha ayrıntılı analitik veya reklam için), bu Politikayı güncelleyecek ve gerekli olduğunda, zorunlu olmayan çerezleri yerleştirmeden önce rızanızı isteyeceğiz.",

    d34: "<strong>3.4 Hassas veriler</strong>",
    d34_1: "Hassas veri talep etmiyoruz (örn. sağlık, siyasî/dinî inançlar, cinsel yönelim, biyometri). Lütfen bu tür verileri göndermeyin.",
    d34_2: "Yine de gönderirseniz, bu Politika kapsamında işlenmesine açık rıza vermiş olursunuz; rızayı geri çekebilirsiniz (bkz. Haklarınız).",

    d35: "<strong>3.5 Girişlerin gizliliği ve görünürlüğü</strong>",
    d35_1: "• Metin girişleriniz yalnızca YZ yanıtları üretmek için kullanılır ve diğer kullanıcılara açıkça görünmez.",
    d35_2: "• Siz bilerek etkinleştirdiğiniz bir özellikle yayımlamadıkça, girişlerinizi diğer kullanıcılarla paylaşmayız.",
    d35_3: "• İstatistik ve hizmetin iyileştirilmesi amacıyla anonimleştirilmiş/toplulaştırılmış verileri kimliğinizi belirlemeden kullanabiliriz."
  },
  s4: {
    title: "4) Amaçlar ve hukuki dayanaklar",
    intro: "Verileri yalnızca bir hukuki dayanak bulunduğunda işleriz (GDPR md. 6 veya eşdeğer ulusal hukuk):",
    p1: "• Hizmet sunumu (sözleşme/ön sözleşme adımları).",
    p2: "• Güvenlik ve kötüye kullanımı önleme (meşru menfaatlerimiz).",
    p3: "• İletişim (sözleşme/meşru menfaatler).",
    p4: "• Pazarlama (yalnızca rızanızla; dilediğiniz an geri çekebilirsiniz).",
    p5: "• Hukuki yükümlülükler (örn. hukuka uygun taleplere yanıt verme).",
    p6: "• Model iyileştirme/YZ değerlendirmesi (meşru menfaatler veya rıza; bkz. §7).",
    p7: "• Kullanım analitiği (GA4, çerezsiz): çerezler ve kişiselleştirme olmaksızın temel trafik, performans ve stabilite ölçümü için meşru menfaat (GDPR md. 6(1)(f)) kapsamında işleme. Bir denge testi yaptık ve veri minimizasyonu önlemleri uyguluyoruz (GA4’te IP günlüğü yok, PII yok, reklam özellikleri yok). Daha sonra çerezler veya reklam özellikleri devreye alınırsa, bu amaçlar için hukuki dayanak rızanız olacaktır (md. 6(1)(a))."
  },
  s5: {
    title: "5) Kişisel verileri nasıl kullanıyoruz",
    p1: "• Temel işlevleri sağlamak için (girdileri işlemek, yanıtlar üretmek).",
    p2: "• Deneyimi kişiselleştirmek için (örn. arayüz dili).",
    p3: "• Performansı ölçmek ve teknik sorunları gidermek için.",
    p4: "• Kötüye kullanımı önlemek için (spam, kötü amaçlı etkinlik).",
    p5: "• Sizinle iletişim kurmak için (destek, hizmet bildirimleri, isteğe bağlı bültenler).",
    p6: "• Toplulaştırılmış eğilimleri analiz etmek ve model/hizmet kalitesini iyileştirmek için.",
    p7: "• “Depolamasız” mod: etkinleştirildiğinde, metin girdileri yanıtı üretmek için teknik olarak gerekli olduğu kadar tutulur ve ardından silinir veya anonimleştirilir."
  },
  s6: {
    title: "6) Verilerin paylaşılması",
    intro: "Kişisel verileri satmıyoruz. Verileri şu durumlarda paylaşabiliriz:",
    p1: "• Bir veri işleme sözleşmesi kapsamında talimatlarımızla hareket eden veri işleyenlerle (barındırma, güvenlik, teknik destek) — girdilerinizi yayımlama hakkı olmaksızın.",
    p2: "• Sizin talebiniz/rızanız üzerine üçüncü taraflarla (ör. entegrasyonlar).",
    p3: "• Yasal uyum için (yetkili mercilerin hukuka uygun taleplerine yanıt olarak).",
    p4: "• Kurumsal değişikliklerde (birleşme/devralma/yapılanma), uygun güvenceler ve bilgilendirme ile.",
    p5: "• <strong>Veri işleyen – analitik:</strong> çerezsiz trafik ölçümü için Google Ireland Limited’i (Google Analytics 4) veri işleyenimiz olarak kullanıyoruz. Sınırlı durumlarda, veriler uygun güvencelerle (örn. Standart Sözleşme Maddeleri ve/veya diğer geçerli aktarım mekanizmaları) Google LLC’nin (ABD) ilişkili kuruluşlarına aktarılabilir. GA4; IP günlüğü, Google Signals ve PII olmadan yapılandırılmıştır.",
    foot: "Gelecekte üçüncü taraf analitik/reklam hizmetleri kullanırsak, Çerez Politikası ve/veya tercih merkezi üzerinden bilgilendirileceksiniz."
  },
  s7: {
    title: "7) YZ işleme, profilleme ve otomatik karar verme",
    lead: "Platform, bilgilendirme amacıyla YZ modelleri kullanarak EVET/HAYIR yanıtları ve olasılık yüzdeleri üretir ve insan müdahalesi olmaksızın sizinle ilgili hukuki veya benzer derecede önemli sonuçlar doğurmaz.",
    p1: "• Bilgileriniz, meşru menfaatlere dayanarak veya rızanıza göre değerlendirmeler ve model iyileştirmesi için kullanılabilir; devre dışı bırakma (opt-out) mekanizmaları mevcuttur.",
    p2: "• Makul ölçüde mümkün ve hukuka uygun olduğunda takma adlandırma/anonimleştirme uygularız."
  },
  s8: {
    title: "8) Uluslararası aktarımlar",
    p1: "Veriler, yetki alanınızın dışında işlenebilir. Uygulanabilir hukukla uyumlu bir koruma düzeyi sağlamak için uygun güvenceler uygularız (örn. Standart Sözleşme Maddeleri, yeterlilik kararları, teknik/organizasyonel tedbirler).",
    p2: "GA4 için gerektiğinde geçerli aktarım mekanizmalarına dayanır ve minimizasyon uygularız (çerez yok, IP yok, PII yok)."
  },
  s9: {
    title: "9) Veri güvenliği",
    p1: "Teknik ve organizasyonel önlemler uygularız (erişim kontrolü, aktarım sırasında şifreleme, segmentasyon, erişim kayıtları, düzenli güvenlik incelemeleri). Hiçbir sistem %100 güvenli değildir; erişim kimlik bilgilerinizi gizli tutmaktan siz sorumlusunuz."
  },
  s10: {
    title: "10) Veri saklama",
    intro: "Verileri, bu Politikadaki amaçlar için gerekli olduğu sürece saklarız; aksi hâlde kanunun öngördüğü veya izin verdiği daha uzun süreler geçerlidir. Referans olarak:",
    p1: "• <strong>Log/teknik kayıtlar:</strong> genellikle 12–24 ay.",
    p2: "• <strong>localStorage/sessionStorage:</strong> cihazınızda, siz silene ya da uygulama yerel verileri sıfırlayana kadar.",
    p3: "• <strong>Analitik (GA4, çerezsiz):</strong> GA4’ün olay verisi ayarlarına göre — varsayılan olarak 2 aya kadar veya açıkça uzatmamız hâlinde 14 aya kadar; ardından silinir veya anonimleştirilir. Kullanıcıyı tanımlamayan birleştirilmiş raporlar, tarihsel metrikler için daha uzun süre tutulabilir.",
    nostore: "<strong>“Depolamasız” mod:</strong> işleme tamamlandıktan sonra girdiler tutulmaz (girdi metni olmadan kısa teknik loglar hariç)."
  },
  s11: {
    title: "11) Haklarınız",
    p1: "Kanuna tabi olarak; bilgilendirilme ve verilere erişim hakkınız; hataların düzeltilmesi; verilerin silinmesi (“unutulma hakkı”); işlemenin kısıtlanması; veri taşınabilirliği; itiraz (meşru menfaatlere dayalı işleme veya doğrudan pazarlama); ve rızayı geri çekme hakkınız vardır (önceki işlemenin hukuka uygunluğunu etkilemeden).",
    p2: "Metin girdilerinizin ve ilgili kişisel verilerin silinmesini talep edebilirsiniz. Kimliğinizi doğruladıktan sonra, yasal saklama gerekmiyorsa makul süre içinde siler/anonimleştiririz.",
    p3: "Meşru menfaatlere dayalı analitik işlemeye itiraz etme hakkınız da vardır; bu durumda, üstün meşru gerekçeler ortaya koymadıkça bu amaçla işlemeyi durduracağız.",
    p4: "Taleplerinizi forecastlerteam@gmail.com adresine gönderin. 30 gün içinde veya yasal süre içinde yanıt veririz. Ayrıca Sırbistan Veri Koruma Otoritesi’ne veya ikamet ülkenizdeki yetkili makama şikâyette bulunma hakkınız vardır."
  },
  s12: {
    title: "12) Çocuklar ve küçükler",
    p1: "Platform 13 yaş altı kişiler için değildir. 13–18 yaşındakiler, ebeveyn/vasi onayı ve gözetimiyle Platformu kullanabilir. Bir çocuğun verilerini geçerli bir dayanak olmaksızın işlediğimizi düşünüyorsanız lütfen bizimle iletişime geçin."
  },
  s13: {
    title: "13) Üçüncü taraf bağlantıları",
    p1: "Harici sitelerin kendi politikaları vardır; içeriklerinden veya uygulamalarından sorumlu değiliz. Kullanmadan önce politikalarını incelemenizi öneririz."
  },
  s14: {
    title: "14) Pazarlama iletişimleri",
    p1: "Pazarlama mesajlarını yalnızca rızanızla göndeririz. Dilediğiniz zaman abonelikten çıkabilirsiniz (e-postadaki bağlantı üzerinden veya §1 uyarınca bizimle iletişime geçerek). Hizmet duyuruları opt-out kapsamı dışında olabilir."
  },
  s15: {
    title: "15) Bu Politika’daki değişiklikler",
    p1: "Bu Politikayı zaman zaman güncelleyebiliriz. Yeni sürümler güncellenmiş bir tarihle yayımlanır; Platformu kullanmaya devam etmeniz değişiklikleri kabul ettiğiniz anlamına gelir."
  },
  s16: {
    title: "16) Dil sürümleri",
    p1: "Platform birden fazla dilde sunulabilir. Çeviriler arasında tutarsızlık olması hâlinde, ikamet ettiğiniz yerdeki zorunlu kurallar aksi yönde olmadıkça İngilizce sürüm geçerlidir."
  },
  s17: { title: "17) İletişim", p1: "Forecastler Ekibi" }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  meta: {
    title: "سياسة الخصوصية",
    effective: "تاريخ السريان: 17 يونيو 2025",
    updated:  "آخر تحديث: 24 أغسطس 2025",
    intro: "توضح هذه السياسة كيف تقوم Forecastler («المنصّة»، «نحن»، «لنا»، «خاصتنا») بجمع بياناتك واستخدامها ومشاركتها وحمايتها عند استخدامك خدماتنا. باستخدامك المنصّة، تؤكّد أنّك قرأت هذه السياسة وفهمتها مع شروط الاستخدام وإخلاء المسؤولية. إذا لم توافق، فيُرجى عدم استخدام المنصّة."
  },
  s1: {
    title: "1) من نحن (المتحكّم بالبيانات)",
    p1: "<strong>المتحكّم:</strong> فريق Forecastler",
    p2: "<strong>جهة اتصال الخصوصية:</strong> forecastlerteam@gmail.com",
    p3: "إذا عيّنّا مسؤول حماية بيانات (DPO)، فسننشر تفاصيله هنا."
  },
  s2: {
    title: "2) التعريفات",
    p1: "• <strong>المنصّة/الخدمة:</strong> موقع Forecastler الإلكتروني والتطبيقات وواجهات البرمجة (APIs) والأنظمة ذات الصلة.",
    p2: "• <strong>المستخدم:</strong> شخص يستخدم الخدمة (مسجّل أو غير مسجّل).",
    p3: "• <strong>البيانات الشخصية:</strong> معلومات تتعلق بشخص طبيعي مُعرَّف أو قابل للتعريف.",
    p4: "• <strong>المعالجة:</strong> أي عملية تُجرى على البيانات الشخصية (مثل الجمع والتخزين والاستخدام والإفصاح).",
    foot: "تتوافق هذه السياسة مع مبادئ حماية البيانات العامة بموجب القوانين المعمول بها (بما في ذلك اللائحة العامة لحماية البيانات GDPR وقانون حماية البيانات الشخصية الصربي)."
  },
  s3: {
    title: "3) ما البيانات التي نجمعها",
    d31: "<strong>3.1 البيانات التي تقدّمها أنت</strong>",
    d31_1: "• إدخالات نصية (أسئلة، أوصاف للسياق، إلخ) — تُستخدم حصريًا لتوليد ردود الذكاء الاصطناعي.",
    d31_2: "• التواصل معنا (مثل طلبات الدعم، الشكاوى).",
    d31_note: "<em>ملاحظة بشأن الحسابات.</em> التسجيل غير مفعّل حاليًا. لا نجمع بيانات الحساب (الاسم، اسم المستخدم، كلمة المرور). إذا قمنا بتفعيل الحسابات لاحقًا، فسنحدّث هذه السياسة قبل بدء هذه المعالجة.",

    d32: "<strong>3.2 البيانات التي تُجمع تلقائيًا</strong>",
    d32_1: "• <strong>البيانات التقنية وبيانات السجلات:</strong> عنوان IP، تاريخ/وقت الوصول، طلبات URL، معرّفات الجهاز/المتصفح، إصدار نظام التشغيل، إعدادات اللغة، الأخطاء، معلومات التشخيص.",
    d32_2: "• <strong>بيانات الاستخدام:</strong> مثل عدد الاستفسارات، النقرات، الصفحات التي تم عرضها، مدة الجلسة.",

    d33: "<strong>3.3 ملفات تعريف الارتباط والتقنيات المماثلة (Google Analytics 4 بدون ملفات تعريف ارتباط)</strong>",
    d33_1: "لا نضع ملفات تعريف ارتباط لأغراض التحليلات. نستخدم Google Analytics 4 (GA4) في وضعٍ بدون ملفات تعريف ارتباط؛ إذ يستند القياس إلى إشارات مجمّعة غير مُعرِّفة للهوية ولا يستخدم معرّفات محلية من جهازك.",
    d33_2: "سجلات الخادم القياسية لا تتضمن محتوى إدخالاتك وتُستخدم حصريًا للأمان والتشخيص. نستخدم localStorage/sessionStorage لوظائف الواجهة فقط (انظر سياسة ملفات تعريف الارتباط) ولا يتم ربطها بـ GA4.",
    d33_eu_1: "<strong>خصوصية GA4 (وضع الاتحاد الأوروبي):</strong>",
    d33_eu_2: "– في الاتحاد الأوروبي، لا يسجّل GA4 عناوين IP ولا يخزّنها؛ تُستبعد الـ IP قبل التسجيل.",
    d33_eu_3: "– لا نفعّل Google Signals أو ميزات الإعلانات؛ لا نقوم بإضفاء الطابع الشخصي ولا نربط GA4 بمنتجات إعلانية خارجية.",
    d33_eu_4: "– لا نرسل إلى GA4 أية بيانات شخصية (PII) مثل الأسماء أو عناوين البريد الإلكتروني أو معرّفات الحساب.",
    d33_note: "<em>ملاحظة:</em> إذا أدخلنا ملفات تعريف ارتباط لاحقًا (مثلًا لتحليلات أكثر تفصيلاً أو للإعلانات)، فسنحدّث هذه السياسة، وحيثما يلزم، سنطلب موافقتك قبل وضع ملفات تعريف ارتباط غير الضرورية.",

    d34: "<strong>3.4 البيانات الحسّاسة</strong>",
    d34_1: "لا نطلب بيانات حسّاسة (مثل الصحة، المعتقدات السياسية/الدينية، التوجّه الجنسي، البيانات البيومترية). يُرجى عدم إرسال مثل هذه البيانات.",
    d34_2: "إذا أرسلتها مع ذلك، فأنت تمنح موافقة صريحة على معالجتها بموجب هذه السياسة؛ يمكنك سحب الموافقة (انظر حقوقك).",

    d35: "<strong>3.5 خصوصية الإدخالات وقابليتها للظهور</strong>",
    d35_1: "• تُستخدم إدخالاتك النصية حصريًا لتوليد ردود الذكاء الاصطناعي ولا تكون مرئية علنًا للمستخدمين الآخرين.",
    d35_2: "• لا نشارك إدخالاتك مع مستخدمين آخرين إلا إذا قمت بنشرها بنفسك عبر ميزة تقوم بتنشيطها عمدًا.",
    d35_3: "• يجوز لنا استخدام بيانات مجهولة/مجمّعة للإحصاءات وتحسين الخدمة دون إمكانية تحديد هويتك."
  },
  s4: {
    title: "4) الأغراض والأسس القانونية",
    intro: "نعالج البيانات فقط عند وجود أساس قانوني (المادة 6 من اللائحة العامة لحماية البيانات GDPR أو قانون وطني مكافئ):",
    p1: "• تقديم الخدمة (العقد/الخطوات ما قبل التعاقد).",
    p2: "• الأمان ومنع إساءة الاستخدام (مصالحنا المشروعة).",
    p3: "• الاتصالات (العقد/المصالح المشروعة).",
    p4: "• التسويق (فقط بموافقتك؛ ويمكنك سحبها في أي وقت).",
    p5: "• الالتزامات القانونية (مثلاً الاستجابة للطلبات المشروعة).",
    p6: "• تحسين النموذج/تقييم الذكاء الاصطناعي (مصالح مشروعة أو موافقة؛ انظر §7).",
    p7: "• تحليلات الاستخدام (GA4 دون ملفات تعريف الارتباط): معالجة استنادًا إلى المصالح المشروعة (المادة 6(1)(f) من GDPR) لقياس أساسي لحركة المرور والأداء والاستقرار دون ملفات تعريف الارتباط ودون تخصيص. أجرينا اختبار موازنة وطبقنا تدابير تقليل البيانات (لا تسجيل لعناوين IP في GA4، ولا PII، ولا ميزات إعلانية). إذا أدخلنا لاحقًا ملفات تعريف الارتباط أو ميزات إعلانية، فسيكون الأساس القانوني لتلك الأغراض هو موافقتك (المادة 6(1)(a))."
  },
  s5: {
    title: "5) كيف نستخدم البيانات الشخصية",
    p1: "• لتوفير الوظائف الأساسية (معالجة الإدخالات وتوليد الإجابات).",
    p2: "• لتخصيص التجربة (مثل لغة الواجهة).",
    p3: "• لقياس الأداء واستكشاف المشكلات التقنية وإصلاحها.",
    p4: "• لمنع الإساءة (الرسائل المزعجة والنشاط الخبيث).",
    p5: "• للتواصل معك (الدعم، إشعارات الخدمة، النشرات الاختيارية).",
    p6: "• لتحليل الاتجاهات المُجمّعة وتحسين جودة النموذج/الخدمة.",
    p7: "• وضع «بلا تخزين»: عند تفعيله، تُحتفظ الإدخالات النصية فقط للمدة اللازمة تقنيًا لتوليد الإجابة ثم تُحذف أو تُ匿名."
  },
  s6: {
    title: "6) مشاركة البيانات",
    intro: "لا نبيع البيانات الشخصية. قد نشارك البيانات في الحالات التالية:",
    p1: "• مع مُعالِجين (استضافة، أمن، دعم تقني) يعملون وفق تعليماتنا بموجب اتفاقية معالجة بيانات (دون أي حق في نشر مدخلاتك).",
    p2: "• مع أطراف ثالثة بناءً على طلبك/موافقتك (مثل عمليات التكامل).",
    p3: "• للامتثال للقانون (استجابة لطلبات مشروعة من الجهات المختصة).",
    p4: "• عند التغييرات المؤسسية (اندماج/استحواذ/إعادة تنظيم) مع توفير الضمانات المناسبة والإشعار.",
    p5: "• <strong>المعالج – التحليلات:</strong> نستخدم Google Ireland Limited (Google Analytics 4) بوصفه مُعالِجنا لقياس الزيارات دون ملفات تعريف الارتباط. في حالات محدودة قد تُنقل البيانات إلى كيانات مرتبطة بـ Google LLC (الولايات المتحدة) مع ضمانات مناسبة (مثل البنود التعاقدية القياسية و/أو آليات نقل صالحة أخرى). تم ضبط GA4 بدون تسجيل لعناوين IP، وبدون Google Signals، وبدون PII.",
    foot: "إذا استخدمنا مستقبلًا خدمات طرف ثالث للتحليلات/الإعلانات، فسيتم إعلامك في سياسة ملفات تعريف الارتباط و/أو ضمن مركز تفضيلات."
  },
  s7: {
    title: "7) معالجة الذكاء الاصطناعي، إنشاء الملفات التعريفية، واتخاذ القرار الآلي",
    lead: "تولّد المنصّة إجابات نعم/لا ونِسَب احتمالية باستخدام نماذج ذكاء اصطناعي لأغراض معلوماتية، ولا تنتج آثارًا قانونية أو مشابهة الأهمية عليك دون تدخل بشري.",
    p1: "• قد تُستخدم معلوماتك لأغراض التقييمات وتحسين النموذج استنادًا إلى المصالح المشروعة أو موافقتك، مع إتاحة آليات إلغاء الاشتراك.",
    p2: "• سنطبّق التمويه بالأسماء/إخفاء الهوية حيثما كان ذلك ممكنًا ومعقولًا ومشروعًا."
  },
  s8: {
    title: "8) النقل الدولي",
    p1: "قد تتم معالجة البيانات خارج نطاق ولايتك القضائية. نطبّق ضمانات مناسبة (مثل البنود التعاقدية القياسية، قرارات الملاءمة، التدابير التقنية/التنظيمية) لضمان مستوى حماية متوافق مع القانون المعمول به.",
    p2: "عند الحاجة لـ GA4، نعتمد على آليات نقل صالحة ونطبق مبدأ التقليل (لا توجد ملفات تعريف ارتباط، لا عناوين IP، لا بيانات تعريف شخصية PII)."
  },
  s9: {
    title: "9) أمن البيانات",
    p1: "ننفّذ تدابير تقنية وتنظيمية (التحكم في الوصول، التشفير أثناء النقل، التجزئة، تسجيل الوصولات، مراجعات أمنية منتظمة). لا يوجد نظام آمن بنسبة 100%؛ تقع على عاتقك مسؤولية الحفاظ على سرية بيانات الاعتماد."
  },
  s10: {
    title: "10) الاحتفاظ بالبيانات",
    intro: "نحتفظ بالبيانات فقط للمدة اللازمة للأغراض الواردة في هذه السياسة، ما لم يتطلب القانون أو يسمح بفترة أطول. كإرشادات:",
    p1: "• <strong>سجلات/سجلات تقنية:</strong> عادةً 12–24 شهرًا.",
    p2: "• <strong>localStorage/sessionStorage:</strong> على جهازك حتى تقوم بحذفها أو تقوم التطبيق بإعادة تعيين البيانات المحلية.",
    p3: "• <strong>التحليلات (GA4 دون ملفات تعريف الارتباط):</strong> وفق إعدادات بيانات الأحداث في GA4 — حتى شهرين (افتراضيًا) أو حتى 14 شهرًا إذا قمنا بتمديدها صراحة؛ ثم تُحذف أو تُ匿名. قد تُحفظ التقارير المُجمّعة (من دون تعريف المستخدم) لفترة أطول لأغراض تاريخية.",
    nostore: "<strong>وضع «عدم التخزين»:</strong> لا تُحتفظ المدخلات بعد اكتمال المعالجة (باستثناء سجلات تقنية قصيرة من دون نص الإدخال نفسه)."
  },
  s11: {
    title: "11) حقوقك",
    p1: "وفقًا للقانون، لك الحق في الإبلاغ والوصول إلى بياناتك؛ وتصحيح أي أخطاء؛ وحذف البيانات («الحق في النسيان»)؛ وتقييد المعالجة؛ وقابلية نقل البيانات؛ والاعتراض (على المعالجة بناءً على المصالح المشروعة أو على التسويق المباشر)؛ وسحب الموافقة (من دون المساس بمشروعية المعالجة السابقة).",
    p2: "يمكنك طلب حذف مدخلاتك النصية والبيانات الشخصية ذات الصلة. بعد التحقق من هويتك سنحذفها/نقوم بإخفاء هويتها خلال فترة معقولة ما لم يكن الاحتفاظ مطلوبًا قانونًا.",
    p3: "لك أيضًا الحق في الاعتراض على المعالجة التحليلية القائمة على المصالح المشروعة؛ وفي هذه الحالة سنوقف المعالجة لهذا الغرض ما لم نُثبت وجود أسباب مشروعة قاهرة.",
    p4: "أرسل الطلبات إلى forecastlerteam@gmail.com. سنرد خلال 30 يومًا أو ضمن المدة النظامية. كما يحق لك تقديم شكوى إلى هيئة حماية البيانات في صربيا أو الجهة المختصة في بلد إقامتك."
  },
  s12: {
    title: "12) الأطفال والقُصَّر",
    p1: "المنصّة غير مخصّصة لمن هم دون 13 عامًا. يمكن لمن تتراوح أعمارهم بين 13 و18 عامًا استخدامها بموافقة وإشراف الوالدين/الأوصياء. إذا كنت تعتقد أننا نعالج بيانات طفل من دون أساس قانوني صالح، يُرجى الاتصال بنا."
  },
  s13: {
    title: "13) روابط جهات خارجية",
    p1: "للمواقع الخارجية سياساتها الخاصة؛ لسنا مسؤولين عن محتواها أو ممارساتها. نوصي بمراجعة سياساتها قبل الاستخدام."
  },
  s14: {
    title: "14) اتصالات تسويقية",
    p1: "نرسل رسائل تسويقية فقط بموافقتك. يمكنك إلغاء الاشتراك في أي وقت (عبر رابط البريد الإلكتروني أو بالتواصل معنا وفق §1). قد لا تخضع إشعارات الخدمة لخيار إلغاء الاشتراك."
  },
  s15: {
    title: "15) تغييرات على هذه السياسة",
    p1: "قد نقوم بتحديث هذه السياسة من حين لآخر. سيتم نشر الإصدارات الجديدة مع تاريخ مُحدَّث؛ ويعني استمرارك في استخدام المنصّة قبولك بالتغييرات."
  },
  s16: {
    title: "16) النسخ اللغوية",
    p1: "قد تتوفر المنصّة بعدة لغات. في حال وجود أي تعارض بين الترجمات، تسود النسخة الإنجليزية ما لم تفرض قواعد إلزامية في بلد إقامتك خلاف ذلك."
  },
  s17: { title: "17) جهة الاتصال", p1: "فريق Forecastler" }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  meta: {
    title: "गोपनीयता नीति",
    effective: "प्रभावी तिथि: 17 जून 2025",
    updated:  "अंतिम अद्यतन: 24 अगस्त 2025",
    intro: "यह नीति बताती है कि Forecastler (‘प्लेटफ़ॉर्म’, ‘हम’, ‘हमें’, ‘हमारा’) आपकी डेटा को हमारी सेवाओं के उपयोग के दौरान कैसे एकत्र, उपयोग, साझा और सुरक्षित करता है। प्लेटफ़ॉर्म का उपयोग करके, आप पुष्टि करते हैं कि आपने इस नीति को हमारे उपयोग की शर्तों और अस्वीकरण के साथ पढ़ व समझ लिया है। यदि आप सहमत नहीं हैं, तो कृपया प्लेटफ़ॉर्म का उपयोग न करें."
  },
  s1: {
    title: "1) हम कौन हैं (डेटा नियंत्रक)",
    p1: "<strong>नियंत्रक:</strong> Forecastler टीम",
    p2: "<strong>गोपनीयता संपर्क:</strong> forecastlerteam@gmail.com",
    p3: "यदि हम डेटा संरक्षण अधिकारी (DPO) नियुक्त करते हैं, तो हम उनके विवरण यहाँ प्रकाशित करेंगे."
  },
  s2: {
    title: "2) परिभाषाएँ",
    p1: "• <strong>प्लेटफ़ॉर्म/सेवा:</strong> Forecastler वेबसाइट, एप्लिकेशन, API और संबंधित सिस्टम।",
    p2: "• <strong>उपयोगकर्ता:</strong> सेवा का उपयोग करने वाला व्यक्ति (पंजीकृत या अपंजीकृत)।",
    p3: "• <strong>व्यक्तिगत डेटा:</strong> ऐसी जानकारी जो किसी पहचाने गए या पहचाने जा सकने वाले प्राकृतिक व्यक्ति से संबंधित हो।",
    p4: "• <strong>प्रसंस्करण:</strong> व्यक्तिगत डेटा पर किया गया कोई भी कार्य (जैसे संग्रह, भंडारण, उपयोग, प्रकटीकरण)।",
    foot: "यह नीति लागू कानूनों के अंतर्गत सामान्य डेटा-सुरक्षा सिद्धांतों के अनुरूप है (जिसमें GDPR और सर्बिया का व्यक्तिगत डेटा संरक्षण अधिनियम शामिल है)।"
  },
  s3: {
    title: "3) हम कौन-कौन सा डेटा एकत्र करते हैं",
    d31: "<strong>3.1 वह डेटा जो आप देते हैं</strong>",
    d31_1: "• टेक्स्ट इनपुट (प्रश्न, संदर्भ-विवरण आदि) — केवल AI उत्तर जनरेट करने के लिए उपयोग किए जाते हैं.",
    d31_2: "• हमारे साथ संचार (जैसे सपोर्ट अनुरोध, शिकायतें).",
    d31_note: "<em>खातों पर नोट.</em> फिलहाल रजिस्ट्रेशन उपलब्ध नहीं है। हम खाते से जुड़ा डेटा (नाम, यूज़रनेम, पासवर्ड) एकत्र नहीं करते। यदि आगे चलकर खाते शुरू किए गए, तो ऐसी प्रोसेसिंग शुरू करने से पहले इस नीति को अपडेट किया जाएगा.",

    d32: "<strong>3.2 स्वतः एकत्रित डेटा</strong>",
    d32_1: "• <strong>तकनीकी और लॉग डेटा:</strong> IP पता, पहुँच की तिथि/समय, URL अनुरोध, डिवाइस/ब्राउज़र पहचानकर्ता, OS संस्करण, भाषा सेटिंग्स, त्रुटियाँ, डायग्नोस्टिक्स.",
    d32_2: "• <strong>उपयोग डेटा:</strong> जैसे क्वेरी की संख्या, क्लिक, देखे गए पेज, सत्र अवधि.",

    d33: "<strong>3.3 कुकीज़ और समान तकनीकें (कुकी-रहित Google Analytics 4)</strong>",
    d33_1: "हम विश्लेषण हेतु कुकीज़ सेट नहीं करते। हम Google Analytics 4 (GA4) को कुकी-रहित मोड में उपयोग करते हैं; मापन एकत्रित, गैर-पहचान योग्य संकेतों पर आधारित होता है और आपके डिवाइस के स्थानीय पहचानकर्ताओं का उपयोग नहीं करता.",
    d33_2: "मानक सर्वर लॉग में आपके इनपुट का कंटेंट शामिल नहीं होता और इन्हें केवल सुरक्षा व निदान हेतु इस्तेमाल किया जाता है। localStorage/sessionStorage का उपयोग हम केवल इंटरफ़ेस फ़ंक्शनों के लिए करते हैं (कुकी पॉलिसी देखें) और इनका GA4 से कोई संबंध नहीं है.",
    d33_eu_1: "<strong>GA4 गोपनीयता (EU मोड):</strong>",
    d33_eu_2: "– EU में GA4 IP पते रिकॉर्ड/संग्रहित नहीं करता; लॉगिंग से पहले IP हटा दी जाती है.",
    d33_eu_3: "– हम Google Signals या विज्ञापन फ़ीचर सक्षम नहीं करते; न ही वैयक्तिकरण करते हैं और न GA4 को बाहरी विज्ञापन उत्पादों से जोड़ते हैं.",
    d33_eu_4: "– हम GA4 को कोई व्यक्तिगत डेटा (PII) नहीं भेजते, जैसे नाम, ईमेल पते या खाते के पहचानकर्ता.",
    d33_note: "<em>नोट:</em> यदि बाद में हम कुकीज़ लागू करते हैं (जैसे अधिक विस्तृत विश्लेषण या विज्ञापनों के लिए), तो हम इस नीति को अपडेट करेंगे और जहाँ आवश्यक होगा, गैर-आवश्यक कुकीज़ सेट करने से पहले आपकी सहमति लेंगे.",

    d34: "<strong>3.4 संवेदनशील डेटा</strong>",
    d34_1: "हम संवेदनशील डेटा नहीं मांगते (जैसे स्वास्थ्य, राजनीतिक/धार्मिक मान्यताएँ, लैंगिक अभिविन्यास, बायोमेट्रिक्स)। कृपया ऐसे डेटा न भेजें.",
    d34_2: "यदि आप फिर भी भेजते हैं, तो आप इस नीति के अंतर्गत प्रोसेसिंग के लिए स्पष्ट सहमति देते हैं; आप सहमति वापस ले सकते हैं (अपने अधिकार देखें).",

    d35: "<strong>3.5 इनपुट की गोपनीयता और दृश्यता</strong>",
    d35_1: "• आपके टेक्स्ट इनपुट केवल AI उत्तर बनाने के लिए उपयोग होते हैं और अन्य उपयोगकर्ताओं को सार्वजनिक रूप से दिखाई नहीं देते.",
    d35_2: "• जब तक आप स्वयं जानबूझकर सक्रिय की गई किसी सुविधा से उन्हें प्रकाशित न करें, हम आपके इनपुट अन्य उपयोगकर्ताओं के साथ साझा नहीं करते.",
    d35_3: "• हम सांख्यिकी और सेवा सुधार हेतु अनामीकृत/समूहित डेटा का उपयोग कर सकते हैं, आपकी पहचान संभव किए बिना."
  },
  s4: {
    title: "4) उद्देश्य और विधिक आधार",
    intro: "हम डेटा का प्रसंस्करण केवल तब करते हैं जब कोई विधिक आधार मौजूद हो (GDPR की धारा 6 या समकक्ष राष्ट्रीय क़ानून):",
    p1: "• सेवा प्रदान करना (अनुबंध/पूर्व-अनुबंधीय चरण).",
    p2: "• सुरक्षा और दुरुपयोग रोकथाम (हमारे वैध हित).",
    p3: "• संचार (अनुबंध/वैध हित).",
    p4: "• विपणन (केवल आपकी सहमति से; आप कभी भी वापस ले सकते हैं).",
    p5: "• कानूनी दायित्व (जैसे वैध अनुरोधों का उत्तर देना).",
    p6: "• मॉडल सुधार/AI मूल्यांकन (वैध हित या सहमति; §7 देखें).",
    p7: "• उपयोग विश्लेषण (GA4, कुकी-रहित): कुकी और निजीकरण के बिना ट्रैफ़िक, प्रदर्शन और स्थिरता के बुनियादी मापन हेतु वैध हित (GDPR अनु. 6(1)(f)) के आधार पर प्रसंस्करण। हमने हित-संतुलन परीक्षण किया है और न्यूनतमकरण उपाय लागू किए हैं (GA4 में IP लॉगिंग नहीं, PII नहीं, विज्ञापन सुविधाएँ नहीं)। यदि आगे चलकर हम कुकीज़ या विज्ञापन सुविधाएँ शुरू करते हैं, तो उन उद्देश्यों के लिए विधिक आधार आपकी सहमति होगी (अनु. 6(1)(a))."
  },
  s5: {
    title: "5) हम व्यक्तिगत डेटा का उपयोग कैसे करते हैं",
    p1: "• मूल कार्यक्षमता प्रदान करने के लिए (इनपुट प्रोसेस करना, उत्तर जनरेट करना).",
    p2: "• अनुभव को वैयक्तिकृत करने के लिए (जैसे इंटरफ़ेस भाषा).",
    p3: "• प्रदर्शन मापने और तकनीकी समस्याएँ दूर करने के लिए.",
    p4: "• दुरुपयोग रोकने के लिए (स्पैम, दुर्भावनापूर्ण गतिविधि).",
    p5: "• आपसे संवाद करने के लिए (सपोर्ट, सेवा सूचनाएँ, वैकल्पिक न्यूज़लेटर).",
    p6: "• समेकित रुझानों का विश्लेषण करने और मॉडल/सेवा की गुणवत्ता सुधारने के लिए.",
    p7: "• “नो-स्टोरेज” मोड: सक्षम होने पर, टेक्स्ट इनपुट केवल उतनी देर तक रखे जाते हैं जितनी तकनीकी रूप से उत्तर बनाने के लिए आवश्यक है; उसके बाद उन्हें हटा दिया जाता है या अनाम किया जाता है."
  },
  s6: {
    title: "6) डेटा का साझाकरण",
    intro: "हम व्यक्तिगत डेटा नहीं बेचते। हम डेटा साझा कर सकते हैं:",
    p1: "• प्रोसेसरों के साथ (होस्टिंग, सुरक्षा, तकनीकी सहायता) जो डेटा-प्रोसेसिंग अनुबंध के तहत हमारे निर्देशों पर कार्य करते हैं (आपके इनपुट को प्रकाशित करने का कोई अधिकार नहीं)।",
    p2: "• तृतीय पक्षों के साथ आपकी माँग/सहमति पर (जैसे इंटीग्रेशन)।",
    p3: "• कानूनी अनुपालन हेतु (प्राधिकरणों के वैध अनुरोधों के जवाब में)।",
    p4: "• कॉरपोरेट परिवर्तनों में (विलय/अधिग्रहण/पुनर्गठन) — उपयुक्त सुरक्षा उपायों और सूचना के साथ।",
    p5: "• <strong>प्रोसेसर – एनालिटिक्स:</strong> हम कुकी-रहित ट्रैफ़िक मापन के लिए Google Ireland Limited (Google Analytics 4) को अपना प्रोसेसर उपयोग करते हैं। सीमित मामलों में, डेटा को उपयुक्त सुरक्षा उपायों के साथ Google LLC (USA) की संबद्ध संस्थाओं को हस्तांतरित किया जा सकता है (जैसे मानक संविदात्मक उपबंध और/या अन्य वैध हस्तांतरण तंत्र)। GA4 को बिना IP लॉगिंग, बिना Google Signals और बिना PII के कॉन्फ़िगर किया गया है.",
    foot: "यदि भविष्य में हम तृतीय-पक्ष एनालिटिक्स/विज्ञापन सेवाएँ उपयोग करते हैं, तो इसकी सूचना कुकी नीति और/या प्रेफरेंस सेंटर में दी जाएगी."
  },
  s7: {
    title: "7) AI प्रसंस्करण, प्रोफाइलिंग और स्वचालित निर्णय-निर्माण",
    lead: "प्लेटफ़ॉर्म सूचना-उद्देश्यों के लिए AI मॉडलों से YES/NO उत्तर और प्रायिकता प्रतिशत बनाता है और मानव हस्तक्षेप के बिना आपके बारे में कोई कानूनी या समान रूप से महत्वपूर्ण प्रभाव उत्पन्न नहीं करता।",
    p1: "• आपकी जानकारी को वैध हितों या आपकी सहमति के आधार पर मूल्यांकन और मॉडल सुधार हेतु उपयोग किया जा सकता है; ऑप्ट-आउट तंत्र उपलब्ध हैं।",
    p2: "• जहाँ उचित रूप से संभव और वैध होगा, हम छद्मनामिकरण/गुमनामिकरण लागू करेंगे।"
  },
  s8: {
    title: "8) अंतरराष्ट्रीय स्थानांतरण",
    p1: "डेटा का प्रसंस्करण आपकी अधिकार-क्षेत्र के बाहर हो सकता है। लागू क़ानून के अनुरूप सुरक्षा स्तर सुनिश्चित करने के लिए हम उपयुक्त सुरक्षा उपाय लागू करते हैं (जैसे मानक संविदात्मक उपबंध, उपयुक्तता निर्णय, तकनीकी/संगठनीय उपाय)।",
    p2: "GA4 के लिए आवश्यक होने पर हम वैध ट्रांसफर तंत्रों पर निर्भर करते हैं और न्यूनतमकरण लागू करते हैं (कोई कुकी नहीं, IP नहीं, PII नहीं)।"
  },
  s9: {
    title: "9) डेटा सुरक्षा",
    p1: "हम तकनीकी और संगठनात्मक उपाय लागू करते हैं (एक्सेस नियंत्रण, ट्रांज़िट में एन्क्रिप्शन, सेगमेंटेशन, एक्सेस लॉगिंग, नियमित सुरक्षा समीक्षाएँ)। कोई भी सिस्टम 100% सुरक्षित नहीं है; किसी भी एक्सेस क्रेडेंशियल को गोपनीय रखना आपकी ज़िम्मेदारी है।"
  },
  s10: {
    title: "10) डेटा प्रतिधारण",
    intro: "हम डेटा को केवल उतनी अवधि तक रखते हैं जितनी इस नीति के उद्देश्यों के लिए आवश्यक है, जब तक कि क़ानून अधिक अवधि की माँग/अनुमति न दे। संदर्भ के लिए:",
    p1: "• <strong>लॉग/तकनीकी रिकॉर्ड:</strong> सामान्यतः 12–24 महीने।",
    p2: "• <strong>localStorage/sessionStorage:</strong> आपके डिवाइस पर तब तक जब तक आप हटाएँ या ऐप स्थानीय डेटा रीसेट करे।",
    p3: "• <strong>एनालिटिक्स (GA4, कुकी-रहित):</strong> GA4 की इवेंट-डेटा सेटिंग्स के अनुसार — डिफ़ॉल्ट रूप से 2 महीने तक या हमारी स्पष्ट वृद्धि पर 14 महीने तक; उसके बाद हटाया या अनामीकृत। समेकित रिपोर्टें (उपयोगकर्ता की पहचान के बिना) ऐतिहासिक मीट्रिक्स हेतु अधिक समय तक रखी जा सकती हैं।",
    nostore: "<strong>“नो-स्टोरेज” मोड:</strong> प्रोसेसिंग पूर्ण होने के बाद इनपुट्स सुरक्षित नहीं रखे जाते (इनपुट टेक्स्ट के बिना छोटे तकनीकी लॉग को छोड़कर)।"
  },
  s11: {
    title: "11) आपके अधिकार",
    p1: "क़ानून के अधीन, आपको सूचित किए जाने और अपने डेटा तक पहुँच का अधिकार है; अशुद्धियों को ठीक कराने का; डेटा मिटाने का («भूल जाने का अधिकार»); प्रोसेसिंग को सीमित करने का; डेटा पोर्टेबिलिटी का; आपत्ति करने का (वैध हितों के आधार पर प्रोसेसिंग या डायरेक्ट मार्केटिंग के लिए); और सहमति वापस लेने का (बिना पूर्व में हुई वैध प्रोसेसिंग को प्रभावित किए).",
    p2: "आप अपने टेक्स्ट इनपुट और संबंधित व्यक्तिगत डेटा के हटाने का अनुरोध कर सकते हैं। आपकी पहचान सत्यापित होने के बाद, हम उन्हें यथोचित समय में हटा/अनाम कर देंगे, जब तक कि क़ानूनन रखरखाव आवश्यक न हो।",
    p3: "आपको वैध हितों के आधार पर होने वाली एनालिटिक्स प्रोसेसिंग पर आपत्ति करने का अधिकार भी है; ऐसे मामले में, जब तक हम बलवती वैध आधार न दिखाएँ, हम उस उद्देश्य के लिए आपकी डेटा प्रोसेसिंग रोक देंगे।",
    p4: "अनुरोध forecastlerteam@gmail.com पर भेजें। हम 30 दिनों के भीतर या वैधानिक अवधि में उत्तर देंगे। आपको सर्बिया डेटा प्रोटेक्शन प्राधिकरण या अपने निवास देश की प्राधिकरण के पास शिकायत दर्ज करने का अधिकार भी है।"
  },
  s12: {
    title: "12) बच्चे और नाबालिग",
    p1: "यह प्लेटफ़ॉर्म 13 वर्ष से कम आयु के व्यक्तियों के लिए नहीं है। 13–18 वर्ष के व्यक्ति अभिभावक/संरक्षक की सहमति और निगरानी में प्लेटफ़ॉर्म का उपयोग कर सकते हैं। यदि आपको लगता है कि हम किसी बच्चे का डेटा बिना वैध आधार के प्रोसेस कर रहे हैं, तो कृपया हमसे संपर्क करें."
  },
  s13: {
    title: "13) तृतीय-पक्ष लिंक",
    p1: "बाहरी साइटों की अपनी नीतियाँ होती हैं; उनके कंटेंट या प्रथाओं के लिए हम ज़िम्मेदार नहीं हैं। उपयोग से पहले उनकी नीतियाँ देखने की सलाह देते हैं।"
  },
  s14: {
    title: "14) मार्केटिंग संचार",
    p1: "हम मार्केटिंग संदेश केवल आपकी सहमति से भेजते हैं। आप कभी भी सदस्यता समाप्त कर सकते हैं (ई-मेल लिंक के माध्यम से या §1 के अनुसार हमसे संपर्क करके)। सेवा सूचनाएँ opt-out से मुक्त हो सकती हैं।"
  },
  s15: {
    title: "15) इस नीति में बदलाव",
    p1: "हम समय-समय पर इस नीति को अपडेट कर सकते हैं। नई संस्करण अद्यतन तिथि के साथ प्रकाशित किए जाएँगे; प्लेटफ़ॉर्म का निरंतर उपयोग बदलावों की स्वीकृति माना जाएगा।"
  },
  s16: {
    title: "16) भाषा संस्करण",
    p1: "प्लेटफ़ॉर्म कई भाषाओं में उपलब्ध हो सकता है। अनुवादों के बीच किसी भी असंगति की स्थिति में, जब तक आपके निवास की अनिवार्य नियम अन्यथा न कहें, अंग्रेज़ी संस्करण मान्य होगा।"
  },
  s17: { title: "17) संपर्क", p1: "Forecastler टीम" }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  meta: {
    title: "隐私政策",
    effective: "生效日期：2025年6月17日",
    updated:  "最后更新：2025年8月24日",
    intro: "本政策说明当您使用我们的服务时，Forecastler（“平台”、“我们”、“我方”、“我们的”）如何收集、使用、共享并保护您的数据。使用本平台即表示您已阅读并理解本政策以及《使用条款》和《免责声明》。如您不同意，请勿使用本平台。"
  },
  s1: {
    title: "1）我们是谁（数据控制者）",
    p1: "<strong>控制者：</strong> Forecastler 团队",
    p2: "<strong>隐私联系：</strong> forecastlerteam@gmail.com",
    p3: "若我们任命数据保护官（DPO），我们将在此公布其信息。"
  },
  s2: {
    title: "2）定义",
    p1: "• <strong>平台/服务：</strong> Forecastler 网站、应用、API 及相关系统。",
    p2: "• <strong>用户：</strong> 使用本服务的个人（注册或未注册）。",
    p3: "• <strong>个人数据：</strong> 与已识别或可识别的自然人有关的信息。",
    p4: "• <strong>处理：</strong> 对个人数据执行的任何操作（如收集、存储、使用、披露）。",
    foot: "本政策遵循适用法律下的一般数据保护原则（包括《通用数据保护条例（GDPR）》和《塞尔维亚个人数据保护法》）。"
  },
  s3: {
    title: "3）我们收集哪些数据",
    d31: "<strong>3.1 您提供的数据</strong>",
    d31_1: "• 文本输入（问题、背景描述等）— 仅用于生成 AI 回复。",
    d31_2: "• 与我们的通信（如支持请求、投诉）。",
    d31_note: "<em>关于账户的说明。</em> 目前不提供注册。我们不收集账户数据（姓名、用户名、密码）。如果未来引入账户，我们会在开始此类处理之前更新本政策。",

    d32: "<strong>3.2 自动收集的数据</strong>",
    d32_1: "• <strong>技术与日志数据：</strong> IP 地址、访问日期/时间、URL 请求、设备/浏览器标识符、操作系统版本、语言设置、错误、诊断信息。",
    d32_2: "• <strong>使用数据：</strong> 如查询次数、点击、浏览页面、会话时长。",

    d33: "<strong>3.3 Cookie 及类似技术（无 Cookie 的 Google Analytics 4）</strong>",
    d33_1: "我们不设置用于分析的 Cookie。我们以无 Cookie 模式使用 Google Analytics 4（GA4）；度量基于汇总的、不可识别的信号，不使用您设备上的本地标识符。",
    d33_2: "标准服务器日志不包含您输入的内容，仅用于安全和诊断。我们仅将 localStorage/sessionStorage 用于界面功能（参见《Cookie 政策》），且不与 GA4 关联。",
    d33_eu_1: "<strong>GA4 隐私（欧盟模式）：</strong>",
    d33_eu_2: "– 在欧盟，GA4 不记录或存储 IP 地址；IP 在写入日志前即被丢弃。",
    d33_eu_3: "– 我们不启用 Google Signals 或广告功能；不进行个性化，也不将 GA4 连接到外部广告产品。",
    d33_eu_4: "– 我们不会向 GA4 发送任何个人数据（PII），如姓名、电子邮箱地址或账户标识符。",
    d33_note: "<em>说明：</em> 如日后引入 Cookie（例如用于更详细的分析或广告），我们将更新本政策，并在必要时在设置非必要 Cookie 之前征求您的同意。",

    d34: "<strong>3.4 敏感数据</strong>",
    d34_1: "我们不索取敏感数据（如健康、政治/宗教信仰、性取向、生物特征）。请勿向我们发送此类数据。",
    d34_2: "若您仍然提交，即表示您明确同意按本政策处理；您可撤回该同意（见“您的权利”）。",

    d35: "<strong>3.5 输入内容的隐私与可见性</strong>",
    d35_1: "• 您的文本输入仅用于生成 AI 回复，其他用户无法公开看到。",
    d35_2: "• 除非您通过主动启用的功能自行发布，我们不会与其他用户分享您的输入。",
    d35_3: "• 我们可将匿名化/汇总的数据用于统计与改进服务，且无法识别到您本人。"
  },
  s4: {
    title: "4）处理目的与法律依据",
    intro: "我们仅在存在法律依据时处理数据（GDPR 第6条或等同的国家法律）：",
    p1: "• 提供服务（合同/缔约前步骤）。",
    p2: "• 安全与防滥用（我们的合法利益）。",
    p3: "• 通信交流（合同/合法利益）。",
    p4: "• 营销（仅在您同意下；可随时撤回）。",
    p5: "• 法定义务（例如回应合法请求）。",
    p6: "• 模型改进/AI 评估（合法利益或同意；见 §7）。",
    p7: "• 使用分析（GA4，无 Cookie）：基于合法利益（GDPR 第6条第1款(f)项）进行的无 Cookie、无个性化的基础流量、性能与稳定性测量。我们已进行利益衡量并采取最小化措施（GA4 不记录 IP、不发送 PII、不启用广告功能）。若日后引入 Cookie 或广告功能，其法律依据将是您的同意（第6条第1款(a)项）。"
  },
  s5: {
    title: "5）我们如何使用个人数据",
    p1: "• 提供核心功能（处理输入、生成答案）。",
    p2: "• 个性化体验（例如界面语言）。",
    p3: "• 衡量性能并排查技术问题。",
    p4: "• 防止滥用（垃圾信息、恶意活动）。",
    p5: "• 与您沟通（支持、服务通知、可选通讯）。",
    p6: "• 分析汇总趋势并改进模型/服务质量。",
    p7: "• “无存储”模式：启用时，文本输入仅在生成答案所需的技术时长内保留，随后删除或匿名化。"
  },
  s6: {
    title: "6）数据共享",
    intro: "我们不出售个人数据。我们可能在以下情况下共享数据：",
    p1: "• 与受托处理方（处理者）共享（托管、 安全、 技术支持），其依据数据处理协议并按我们的指令行事（无权发布您的输入）。",
    p2: "• 经您要求/同意与第三方共享（如集成）。",
    p3: "• 出于合规需要（回应主管机关的合法请求）。",
    p4: "• 在公司变更时（并购/收购/重组），并提供适当的保障与通知。",
    p5: "• <strong>处理者 – 分析：</strong>我们使用 Google Ireland Limited（Google Analytics 4）作为无 Cookie 流量测量的受托处理方。在有限情况下，数据可能在采取适当保障措施后（如标准合同条款和/或其他有效跨境机制）转移至 Google LLC（美国）的关联实体。GA4 配置为不记录 IP、不启用 Google Signals，且不包含 PII。",
    foot: "若未来我们使用第三方分析/广告服务，将在《Cookie 政策》及/或偏好中心告知您。"
  },
  s7: {
    title: "7）AI 处理、画像与自动化决策",
    lead: "平台使用 AI 模型出于信息目的生成“是/否”答案及概率百分比，未经人工参与，不会对您产生法律或同等重大影响。",
    p1: "• 您的信息可基于合法利益或您的同意用于评估与模型改进，并提供可用的退出机制。",
    p2: "• 在合理可行且合法的情况下，我们将采用假名化/匿名化处理。"
  },
  s8: {
    title: "8）国际传输",
    p1: "数据可能在您所属法域之外处理。我们采取适当的保障措施（如标准合同条款、充分性决定、技术/组织措施），以确保与适用法律一致的保护水平。",
    p2: "在 GA4 需要的情况下，我们依赖有效的跨境传输机制并实行最小化（无 Cookie、无 IP、无 PII）。"
  },
  s9: {
    title: "9）数据安全",
    p1: "我们实施技术和组织措施（访问控制、传输中加密、分段、访问日志、定期安全审查）。任何系统都不可能 100% 安全；您有责任对任何访问凭证保密。"
  },
  s10: {
    title: "10）数据保留",
    intro: "我们仅在实现本政策所述目的所必需的期间内保留数据，除非法律要求或允许更长时间。参考：",
    p1: "• <strong>日志/技术记录：</strong> 通常为 12–24 个月。",
    p2: "• <strong>localStorage/sessionStorage：</strong> 存于您的设备，直到您删除或应用重置本地数据。",
    p3: "• <strong>分析（GA4，无 Cookie）：</strong> 按 GA4 事件数据设置保留 — 默认最长 2 个月，或在我们明确延长时最长 14 个月；之后删除或匿名化。汇总报告（不含用户标识）可为历史统计而长期保留。",
    nostore: "<strong>“无存储”模式：</strong> 处理完成后不保留输入（不含输入文本的简短技术日志除外）。"
  },
  s11: {
    title: "11）您的权利",
    p1: "在法律允许的范围内，您有权获知并访问您的数据；更正不准确之处；删除数据（“被遗忘权”）；限制处理；数据可携带权；反对（基于合法利益的处理或直接营销）；以及撤回同意（不影响先前合法处理）。",
    p2: "您可以请求删除您的文本输入及相关个人数据。验证身份后，我们将在合理期限内删除/匿名化，除非法律要求保留。",
    p3: "您还有权反对基于合法利益的分析处理；在此情况下，除非我们能够证明具有压倒性的合法理由，否则将停止为该目的处理您的数据。",
    p4: "请将请求发送至 forecastlerteam@gmail.com。我们将在30天内或法定期限内答复。您也有权向塞尔维亚数据保护主管机关或您居住国的主管机关提出投诉。"
  },
  s12: {
    title: "12）儿童与未成年人",
    p1: "本平台不面向13岁以下人士。13–18岁个人可在父母/监护人同意并监督下使用。如您认为我们在无有效依据的情况下处理了儿童的数据，请与我们联系。"
  },
  s13: {
    title: "13）第三方链接",
    p1: "外部网站有其各自的政策；我们不对其内容或做法负责。建议在使用前查阅其政策。"
  },
  s14: {
    title: "14）营销通信",
    p1: "我们仅在您同意的情况下发送营销信息。您可随时退订（通过邮件中的链接或按照§1与我们联系）。服务性通知可能不适用退订。"
  },
  s15: {
    title: "15）本政策的变更",
    p1: "我们可能不时更新本政策。新版将附带更新日期发布；您继续使用本平台即表示接受这些变更。"
  },
  s16: {
    title: "16）语言版本",
    p1: "平台可能提供多种语言版本。若各译文存在不一致，以英文版本为准，除非您居住地的强制性规则另有要求。"
  },
  s17: { title: "17）联系", p1: "Forecastler 团队" }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  meta: {
    title: "プライバシーポリシー",
    effective: "施行日：2025年6月17日",
    updated:  "最終更新日：2025年8月24日",
    intro: "本ポリシーは、Forecastler（「プラットフォーム」「当社」「当方」「当社の」）が当社サービスの利用時にお客様のデータをどのように収集・利用・共有・保護するかを説明します。プラットフォームを利用することで、本ポリシーおよび利用規約・免責事項を読了し理解したことを確認したものとします。ご同意いただけない場合は、プラットフォームをご利用にならないでください。"
  },
  s1: {
    title: "1）当社について（データ管理者）",
    p1: "<strong>管理者：</strong> Forecastler チーム",
    p2: "<strong>プライバシー連絡先：</strong> forecastlerteam@gmail.com",
    p3: "データ保護責任者（DPO）を任命した場合は、その詳細をここに掲載します。"
  },
  s2: {
    title: "2）定義",
    p1: "• <strong>プラットフォーム／サービス：</strong> Forecastler のウェブサイト、アプリケーション、API、および関連システム。",
    p2: "• <strong>ユーザー：</strong> サービスを利用する者（登録の有無を問わない）。",
    p3: "• <strong>個人データ：</strong> 識別された、または識別可能な自然人に関する情報。",
    p4: "• <strong>処理：</strong> 個人データに対して行われるあらゆる操作（例：収集、保存、利用、開示）。",
    foot: "本ポリシーは、適用法の下での一般的なデータ保護原則（GDPR およびセルビアの個人データ保護法を含む）に整合します。"
  },
  s3: {
    title: "3）収集するデータ",
    d31: "<strong>3.1 お客様が提供するデータ</strong>",
    d31_1: "• テキスト入力（質問、文脈の説明など）— AI の回答生成のみに使用します。",
    d31_2: "• 当社への連絡内容（例：サポート依頼、苦情）。",
    d31_note: "<em>アカウントに関する注記。</em> 現在、登録機能は提供していません。アカウントデータ（氏名、ユーザー名、パスワード）は収集していません。将来アカウントを導入する場合は、その処理を開始する前に本ポリシーを更新します。",

    d32: "<strong>3.2 自動的に収集されるデータ</strong>",
    d32_1: "• <strong>技術・ログデータ：</strong> IP アドレス、アクセス日時、URL リクエスト、デバイス/ブラウザ識別子、OS バージョン、言語設定、エラー、診断情報。",
    d32_2: "• <strong>利用データ：</strong> 例：クエリ数、クリック、閲覧ページ、セッション継続時間。",

    d33: "<strong>3.3 Cookie と類似技術（Cookie を使用しない Google Analytics 4）</strong>",
    d33_1: "分析用の Cookie は設定しません。Google Analytics 4（GA4）は Cookie なしモードで利用します。計測は集計された非識別シグナルに基づき、デバイスのローカル識別子は使用しません。",
    d33_2: "標準的なサーバーログにはお客様の入力内容は含まれず、セキュリティと診断の目的にのみ使用します。localStorage/sessionStorage は UI 機能のためだけに使用します（Cookie ポリシー参照）。GA4 とは連携しません。",
    d33_eu_1: "<strong>GA4 のプライバシー（EU モード）：</strong>",
    d33_eu_2: "– EU では GA4 は IP アドレスを記録・保存しません。ログ記録前に IP は破棄されます。",
    d33_eu_3: "– Google Signals や広告機能は有効化しません。パーソナライズは行わず、GA4 を外部の広告プロダクトに接続しません。",
    d33_eu_4: "– 氏名、メールアドレス、アカウント識別子等の個人情報（PII）は GA4 に送信しません。",
    d33_note: "<em>注：</em> 将来 Cookie を導入する場合（より詳細な分析や広告のためなど）は本ポリシーを更新し、必要に応じて不要不急の Cookie を設定する前に同意を取得します。",

    d34: "<strong>3.4 センシティブデータ</strong>",
    d34_1: "健康、政治/宗教的信条、性的指向、生体情報などのセンシティブデータは求めません。送信しないでください。",
    d34_2: "それでも送信された場合、本ポリシーに基づく処理への明示的同意を与えたものとみなされます。同意は撤回できます（お客様の権利を参照）。",

    d35: "<strong>3.5 入力内容のプライバシーと可視性</strong>",
    d35_1: "• テキスト入力は AI の回答生成のみに使用され、他のユーザーから公に閲覧されることはありません。",
    d35_2: "• お客様が意図的に有効化した機能を通じて自ら公開しない限り、入力内容を他ユーザーと共有しません。",
    d35_3: "• 統計やサービス改善のために匿名化/集計データを利用する場合がありますが、個人を特定することはありません。"
  },
  s4: {
    title: "4）利用目的と法的根拠",
    intro: "当社は、法的根拠がある場合にのみデータを処理します（GDPR 第6条または同等の国内法）：",
    p1: "• サービス提供（契約/契約前手続）。",
    p2: "• セキュリティと不正防止（当社の正当な利益）。",
    p3: "• コミュニケーション（契約/正当な利益）。",
    p4: "• マーケティング（お客様の同意がある場合のみ。いつでも撤回可）。",
    p5: "• 法的義務（例：適法な要請への対応）。",
    p6: "• モデル改善/AI 評価（正当な利益または同意；§7 参照）。",
    p7: "• 利用状況の分析（GA4、Cookie 不使用）：Cookie とパーソナライズなしでトラフィック・パフォーマンス・安定性を基本測定するため、正当な利益（GDPR 第6条1項(f)）に基づく処理。バランシングテストを実施し、最小化措置を適用しています（GA4 で IP を記録しない、PII なし、広告機能なし）。将来的に Cookie や広告機能を導入する場合、その目的の法的根拠はお客様の同意（第6条1項(a)）となります。"
  },
  s5: {
    title: "5）個人データの利用方法",
    p1: "• コア機能の提供（入力の処理、回答の生成）。",
    p2: "• 体験のパーソナライズ（例：インターフェース言語）。",
    p3: "• パフォーマンス測定と技術的なトラブルシューティング。",
    p4: "• 不正防止（スパム、悪意のある活動）。",
    p5: "• お客様との連絡（サポート、サービス通知、任意のニュースレター）。",
    p6: "• 集計された傾向の分析およびモデル/サービス品質の向上。",
    p7: "• 「保存しない」モード：有効化時は、テキスト入力を回答生成に技術的に必要な期間のみ保持し、その後削除または匿名化します。"
  },
  s6: {
    title: "6）データの共有",
    intro: "当社は個人データを販売しません。以下の場合にデータを共有することがあります。",
    p1: "• 処理者（ホスティング、セキュリティ、テクニカルサポート）— データ処理契約に基づき当社の指示に従って行動し、あなたの入力内容を公開する権利はありません。",
    p2: "• あなたの要請/同意に基づく第三者（例：各種連携）との共有。",
    p3: "• 法令遵守のため（当局からの適法な要請への対応）。",
    p4: "• 企業再編（合併/買収/再編）の際、適切な保護措置と通知のもとで。",
    p5: "• <strong>処理者 – アナリティクス：</strong> 当社は Cookie を使用しないトラフィック測定のため、Google Ireland Limited（Google Analytics 4）を処理者として利用しています。限定的な場合に、適切な保護措置（例：標準契約条項やその他有効な移転メカニズム）を講じたうえで、Google LLC（米国）の関連事業体へデータが移転されることがあります。GA4 は IP を記録せず、Google Signals を有効化せず、PII を含まない設定です。",
    foot: "将来的に第三者の分析/広告サービスを利用する場合は、クッキーポリシーおよび/またはプリファレンスセンターでお知らせします。"
  },
  s7: {
    title: "7）AI 処理・プロファイリング・自動化意思決定",
    lead: "本プラットフォームは情報提供を目的として AI モデルにより YES/NO の回答と確率（％）を生成し、人の関与なしにあなたに法的または同等に重大な効果を生じさせることはありません。",
    p1: "• あなたの情報は、正当な利益または同意に基づき、評価やモデル改善のために利用される場合があります。オプトアウトの仕組みを提供します。",
    p2: "• 合理的に可能で適法な範囲で、仮名化/匿名化を適用します。"
  },
  s8: {
    title: "8）国際移転",
    p1: "データはお客様の法域外で処理される場合があります。適用法に一致する保護水準を確保するため、適切な保護措置（標準契約条項、十分性認定、技術的/組織的対策など）を適用します。",
    p2: "GA4 が必要とする場合は、有効な移転メカニズムに依拠し、最小化を適用します（Cookie なし、IP なし、PII なし）。"
  },
  s9: {
    title: "9）データのセキュリティ",
    p1: "当社は技術的および組織的対策（アクセス制御、通信経路の暗号化、セグメンテーション、アクセスログの記録、定期的なセキュリティレビュー）を実施します。いかなるシステムも 100% 安全ではありません。アクセス認証情報の秘匿はお客様の責任です。"
  },
  s10: {
    title: "10）データの保存期間",
    intro: "法令によりより長い期間が求められる/許容される場合を除き、本ポリシーの目的に必要な期間のみデータを保持します。目安：",
    p1: "• <strong>ログ/技術記録：</strong> 通常 12〜24 か月。",
    p2: "• <strong>localStorage/sessionStorage：</strong> お客様の端末上に、削除するかアプリがローカルデータをリセットするまで保持。",
    p3: "• <strong>分析（GA4、Cookie 不使用）：</strong> GA4 のイベントデータ設定に従って保持 — 既定では最長 2 か月、明示的に延長した場合は最長 14 か月；その後は削除または匿名化。ユーザー識別なしの集計レポートは、履歴指標のためにより長く保持する場合があります。",
    nostore: "<strong>「保存しない」モード：</strong> 処理完了後、入力は保持しません（入力テキストを含まない短い技術ログを除く）。"
  },
  s11: {
    title: "11）お客様の権利",
    p1: "法令に基づき、説明を受ける権利およびデータへのアクセス権、誤りの訂正、データの消去（「忘れられる権利」）、処理の制限、データポータビリティ、異議申立て（正当な利益に基づく処理やダイレクトマーケティングに対して）、ならびに同意の撤回（それ以前の適法な処理には影響しない）を有します。",
    p2: "テキスト入力および関連する個人データの削除を請求できます。本人確認後、法的な保存義務がない限り、合理的な期間内に削除/匿名化します。",
    p3: "正当な利益に基づく分析処理に異議を唱える権利もあります。その場合、当社がやむを得ない正当な理由を示さない限り、その目的での処理を停止します。",
    p4: "請求は forecastlerteam@gmail.com までお送りください。30日以内または法定期間内に回答します。セルビアのデータ保護当局、または居住国の監督当局に苦情を申し立てる権利もあります。"
  },
  s12: {
    title: "12）子どもと未成年",
    p1: "本プラットフォームは13歳未満を対象としていません。13〜18歳の方は、保護者の同意と監督の下で利用できます。未成年のデータを有効な根拠なく処理していると思われる場合はご連絡ください。"
  },
  s13: {
    title: "13）第三者リンク",
    p1: "外部サイトにはそれぞれのポリシーがあります。当社はその内容や運用について責任を負いません。利用前に各ポリシーをご確認ください。"
  },
  s14: {
    title: "14）マーケティングメッセージ",
    p1: "マーケティングメッセージはお客様の同意がある場合にのみ送信します。いつでも配信停止できます（メール内のリンク、または§1に従って当社へご連絡）。サービスに関する通知は配信停止の対象外となる場合があります."
  },
  s15: {
    title: "15）本ポリシーの変更",
    p1: "当社は本ポリシーを随時更新することがあります。新しい版は更新日とともに掲載されます。引き続きプラットフォームを利用することで、変更に同意したものとみなされます。"
  },
  s16: {
    title: "16）言語版",
    p1: "本プラットフォームは複数言語で提供される場合があります。翻訳間に不一致がある場合、居住国の強行規定で別段の定めがない限り、英語版が優先します。"
  },
  s17: { title: "17）連絡先", p1: "Forecastler チーム" }
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

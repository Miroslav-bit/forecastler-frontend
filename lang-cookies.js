// lang-cookies.js (robustan za cookies.html; radi i ako kasnije dodaš -en sufikse)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },

    meta: {
      title: "Cookies Policy",
      effective: "Effective Date: 17 June 2025",
      updated:  "Last Updated: 24 August 2025",
      intro: "This Policy explains how Forecastler uses cookies and similar technologies."
    },

    s1: {
      title: "1) Do we use cookies?",
      p1: "Currently — no. We do not set cookies, and therefore no cookie banner is shown. We do not use cookies for analytics, advertising, measurement, personalization, or authentication (registration/login is not enabled).",
      p2: "<strong>Analytics without cookies (GA4).</strong> We use Google Analytics 4 in a cookieless configuration solely for basic traffic and performance measurement. Measurement relies on aggregated, non-identifying signals without using local device identifiers and without personalization. We do not enable Google Signals or advertising features; GA4 is configured so that, in the EU, IP addresses are not logged or stored. We do not send GA4 any personal data (PII)."
    },

    s2: {
      title: "2) What do we use instead?",
      p1: "We use localStorage and, occasionally, sessionStorage — storage in your browser that helps the Platform work more smoothly (e.g., interface language, practical preferences, optionally last-entered values).",
      p2: "• Data in localStorage remain on your device, are not sent to our servers, and are not available to other users.",
      p3: "• You can delete them at any time in your browser settings (“Clear site data”, clear cache and local data).",
      p4: "• We do not use localStorage for analytics.",
      note: "<em>Compliance note.</em> Some laws treat localStorage as a “similar technology” to cookies. If we later store non-essential data (e.g., remembering last inputs for convenience), we will provide a clear opt-in control (“Remember my inputs”) and, where required, request your consent before activation."
    },

    s3: {
      title: "3) Third-party content and services",
      p1: "We do not currently load embedded third-party content that sets cookies. Our pages may contain external links (e.g., Facebook, Instagram, YouTube, TikTok). When you click and leave our site, the cookie policies of those third parties apply."
    },

    s4: {
      title: "4) Future changes (analytics with cookies, ads, embeds)",
      p1: "If we introduce technologies that use cookies (e.g., analytics with cookies, ad networks/AdSense, embedded players), we will update this Policy and, where required, seek your consent via a visible banner/preferences center before setting any non-essential cookies."
    },

    s5: {
      title: "5) How to manage data in your browser",
      p1: "Open your browser’s privacy settings and clear Site Data for the Forecastler domain, including localStorage and cache. If needed, use Private/Incognito mode so data persist only for the session."
    },

    s6: {
      title: "6) Changes to this Policy",
      p1: "We may update this Policy from time to time. Changes take effect upon publication here with an updated date."
    },

    s7: {
      title: "7) Contact",
      p1: "Forecastler Team"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },

    meta: {
      title: "Politika kolačića",
      effective: "Datum stupanja na snagu: 17. jun 2025.",
      updated:  "Poslednje ažuriranje: 24. avgust 2025.",
      intro: "Ova Politika objašnjava kako Forecastler koristi kolačiće i slične tehnologije."
    },

    s1: {
      title: "1) Da li koristimo kolačiće?",
      p1: "Trenutno — ne. Ne postavljamo kolačiće, pa se zato ne prikazuje baner za kolačiće. Ne koristimo kolačiće za analitiku, oglašavanje, merenje, personalizaciju ili autentifikaciju (registracija/prijava nije omogućena).",
      p2: "<strong>Analitika bez kolačića (GA4).</strong> Koristimo Google Analytics 4 u režimu bez kolačića isključivo za osnovno merenje saobraćaja i performansi. Merenje se zasniva na agregiranim, neidentifikujućim signalima, bez korišćenja lokalnih identifikatora uređaja i bez personalizacije. Ne uključujemo Google Signals ni oglasne funkcije; u EU, GA4 je podešen tako da IP adrese nisu logovane niti čuvane. GA4-u ne šaljemo lične podatke (PII)."
    },

    s2: {
      title: "2) Šta koristimo umesto toga?",
      p1: "Koristimo localStorage i, povremeno, sessionStorage — skladište u vašem pregledaču koje pomaže da Platforma radi glađe (npr. jezik interfejsa, praktična podešavanja, opciono poslednje unete vrednosti).",
      p2: "• Podaci u localStorage ostaju na vašem uređaju, ne šalju se našim serverima i nisu dostupni drugim korisnicima.",
      p3: "• Možete ih obrisati u bilo kom trenutku u podešavanjima pregledača („Clear site data“, brisanje keša i lokalnih podataka).",
      p4: "• Ne koristimo localStorage za analitiku.",
      note: "<em>Napomena o usklađenosti.</em> Neki propisi tretiraju localStorage kao „sličnu tehnologiju“ kolačićima. Ako kasnije budemo čuvali nenepo­trebne podatke (npr. pamćenje poslednjih unosa radi komfora), obezbedićemo jasno opt-in dugme („Zapamti moje unose“) i, gde je potrebno, zatražiti vaš pristanak pre aktivacije."
    },

    s3: {
      title: "3) Sadržaj i usluge trećih strana",
      p1: "Trenutno ne učitavamo ugnježđeni sadržaj trećih strana koji postavlja kolačiće. Naše stranice mogu sadržati spoljne linkove (npr. Facebook, Instagram, YouTube, TikTok). Kada kliknete i napustite naš sajt, primenjuju se politike kolačića tih trećih strana."
    },

    s4: {
      title: "4) Buduće izmene (analitika sa kolačićima, oglasi, embedovi)",
      p1: "Ako uvedemo tehnologije koje koriste kolačiće (npr. analitika sa kolačićima, oglasne mreže/AdSense, ugradni plejeri), ažuriraćemo ovu Politiku i, kada je potrebno, tražiti vaš pristanak preko vidljivog banera/centra za podešavanja pre postavljanja bilo kakvih neneophodnih kolačića."
    },

    s5: {
      title: "5) Kako da upravljate podacima u pregledaču",
      p1: "Otvorite podešavanja privatnosti svog pregledača i obrišite podatke sajta za domen Forecastler, uključujući localStorage i keš. Po potrebi koristite Privatni/Inkognito režim kako bi podaci važili samo za trajanje sesije."
    },

    s6: {
      title: "6) Izmene ove Politike",
      p1: "Ovu Politiku povremeno možemo ažurirati. Izmene važe od objave ovde uz ažurirani datum."
    },

    s7: {
      title: "7) Kontakt",
      p1: "Forecastler tim"
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  meta: {
    title: "Política de cookies",
    effective: "Fecha de entrada en vigor: 17 de junio de 2025",
    updated: "Última actualización: 24 de agosto de 2025",
    intro: "Esta Política explica cómo Forecastler utiliza cookies y tecnologías similares."
  },
  s1: {
    title: "1) ¿Usamos cookies?",
    p1: "Actualmente — no. No establecemos cookies y, por tanto, no se muestra ningún banner de cookies. No utilizamos cookies para analítica, publicidad, medición, personalización ni autenticación (el registro/inicio de sesión no está habilitado).",
    p2: "<strong>Analítica sin cookies (GA4).</strong> Usamos Google Analytics 4 en una configuración sin cookies exclusivamente para la medición básica de tráfico y rendimiento. La medición se basa en señales agregadas y no identificativas, sin usar identificadores locales del dispositivo y sin personalización. No activamos Google Signals ni funciones publicitarias; GA4 está configurado para que, en la UE, las direcciones IP no se registren ni almacenen. No enviamos a GA4 datos personales (PII)."
  },
  s2: {
    title: "2) ¿Qué usamos en su lugar?",
    p1: "Usamos localStorage y, ocasionalmente, sessionStorage — almacenamiento en su navegador que ayuda a que la Plataforma funcione con mayor fluidez (p. ej., idioma de la interfaz, preferencias prácticas, opcionalmente los últimos valores introducidos).",
    p2: "• Los datos en localStorage permanecen en su dispositivo, no se envían a nuestros servidores y no están disponibles para otros usuarios.",
    p3: "• Puede eliminarlos en cualquier momento en la configuración de su navegador (“Clear site data”, borrar caché y datos locales).",
    p4: "• No utilizamos localStorage para analítica.",
    note: "<em>Nota de cumplimiento.</em> Algunas leyes consideran localStorage como una “tecnología similar” a las cookies. Si más adelante almacenamos datos no esenciales (p. ej., recordar los últimos datos introducidos para su comodidad), ofreceremos un control de aceptación claro (“Remember my inputs”) y, cuando se requiera, solicitaremos su consentimiento antes de activarlo."
  },
  s3: {
    title: "3) Contenido y servicios de terceros",
    p1: "Actualmente no cargamos contenido incrustado de terceros que establezca cookies. Nuestras páginas pueden contener enlaces externos (p. ej., Facebook, Instagram, YouTube, TikTok). Al hacer clic y salir de nuestro sitio, se aplican las políticas de cookies de esos terceros."
  },
  s4: {
    title: "4) Cambios futuros (analítica con cookies, anuncios, incrustaciones)",
    p1: "Si introducimos tecnologías que usen cookies (p. ej., analítica con cookies, redes publicitarias/AdSense, reproductores incrustados), actualizaremos esta Política y, cuando sea necesario, solicitaremos su consentimiento mediante un banner visible/centro de preferencias antes de establecer cualquier cookie no esencial."
  },
  s5: {
    title: "5) Cómo gestionar los datos en su navegador",
    p1: "Abra la configuración de privacidad de su navegador y borre los Datos del sitio del dominio de Forecastler, incluido localStorage y la caché. Si lo necesita, use el modo Privado/Incógnito para que los datos solo persistan durante la sesión."
  },
  s6: {
    title: "6) Cambios en esta Política",
    p1: "Podemos actualizar esta Política periódicamente. Los cambios surten efecto al publicarse aquí con una fecha actualizada."
  },
  s7: {
    title: "7) Contacto",
    p1: "Forecastler Team"
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  meta: {
    title: "Politique relative aux cookies",
    effective: "Date d’effet : 17 juin 2025",
    updated: "Dernière mise à jour : 24 août 2025",
    intro: "La présente Politique explique comment Forecastler utilise les cookies et technologies similaires."
  },
  s1: {
    title: "1) Utilisons-nous des cookies ?",
    p1: "À l’heure actuelle — non. Nous ne déposons pas de cookies ; aucun bandeau cookies n’est donc affiché. Nous n’utilisons pas de cookies pour l’analytique, la publicité, la mesure, la personnalisation ou l’authentification (l’inscription/la connexion n’est pas activée).",
    p2: "<strong>Analytique sans cookies (GA4).</strong> Nous utilisons Google Analytics 4 dans une configuration sans cookie uniquement pour des mesures basiques de trafic et de performance. La mesure repose sur des signaux agrégés et non identifiants, sans utiliser d’identifiants locaux d’appareil et sans personnalisation. Nous n’activons pas Google Signals ni les fonctionnalités publicitaires ; GA4 est configuré pour que, dans l’UE, les adresses IP ne soient ni journalisées ni stockées. Nous n’envoyons aucune donnée à caractère personnel (PII) à GA4."
  },
  s2: {
    title: "2) Que utilisons-nous à la place ?",
    p1: "Nous utilisons localStorage et, occasionnellement, sessionStorage — un stockage dans votre navigateur qui aide la Plateforme à fonctionner plus aisément (p. ex., langue de l’interface, préférences pratiques, éventuellement dernières valeurs saisies).",
    p2: "• Les données dans localStorage restent sur votre appareil, ne sont pas envoyées à nos serveurs et ne sont pas accessibles aux autres utilisateurs.",
    p3: "• Vous pouvez les supprimer à tout moment dans les réglages de votre navigateur (« Clear site data », effacer le cache et les données locales).",
    p4: "• Nous n’utilisons pas localStorage à des fins d’analytique.",
    note: "<em>Note de conformité.</em> Certaines lois assimilent localStorage à une « technologie similaire » aux cookies. Si nous stockons ultérieurement des données non essentielles (p. ex., mémorisation des dernières saisies par commodité), nous proposerons un mécanisme d’opt-in clair (« Remember my inputs ») et, lorsque requis, recueillerons votre consentement avant l’activation."
  },
  s3: {
    title: "3) Contenus et services tiers",
    p1: "Nous ne chargeons actuellement aucun contenu tiers intégré qui dépose des cookies. Nos pages peuvent contenir des liens externes (p. ex., Facebook, Instagram, YouTube, TikTok). Lorsque vous cliquez et quittez notre site, les politiques de cookies de ces tiers s’appliquent."
  },
  s4: {
    title: "4) Évolutions futures (analytique avec cookies, publicités, contenus intégrés)",
    p1: "Si nous introduisons des technologies utilisant des cookies (p. ex., analytique avec cookies, régies publicitaires/AdSense, lecteurs intégrés), nous mettrons à jour la présente Politique et, lorsque requis, demanderons votre consentement via une bannière visible/un centre de préférences avant tout dépôt de cookies non essentiels."
  },
  s5: {
    title: "5) Comment gérer les données dans votre navigateur",
    p1: "Ouvrez les paramètres de confidentialité de votre navigateur et effacez les données du site pour le domaine Forecastler, y compris le localStorage et le cache. Au besoin, utilisez le mode Navigation privée/Incognito afin que les données ne persistent que pour la session."
  },
  s6: {
    title: "6) Modifications de cette Politique",
    p1: "Nous pouvons mettre à jour cette Politique de temps à autre. Les modifications prennent effet dès leur publication ici avec une date mise à jour."
  },
  s7: {
    title: "7) Contact",
    p1: "Forecastler Team"
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  meta: {
    title: "Cookie-Richtlinie",
    effective: "Gültig ab: 17. Juni 2025",
    updated: "Zuletzt aktualisiert: 24. August 2025",
    intro: "Diese Richtlinie erläutert, wie Forecastler Cookies und ähnliche Technologien verwendet."
  },
  s1: {
    title: "1) Verwenden wir Cookies?",
    p1: "Derzeit – nein. Wir setzen keine Cookies; daher wird kein Cookie-Banner angezeigt. Wir verwenden keine Cookies für Analysen, Werbung, Messung, Personalisierung oder Authentifizierung (Registrierung/Anmeldung ist nicht aktiviert).",
    p2: "<strong>Analyse ohne Cookies (GA4).</strong> Wir nutzen Google Analytics 4 in einer cookie-losen Konfiguration ausschließlich zur grundlegenden Verkehrs- und Leistungs­messung. Die Messung basiert auf aggregierten, nicht identifizierenden Signalen – ohne lokale Gerätekennungen und ohne Personalisierung. Wir aktivieren weder Google Signals noch Werbefunktionen; GA4 ist so konfiguriert, dass in der EU IP-Adressen weder protokolliert noch gespeichert werden. Wir übermitteln GA4 keine personenbezogenen Daten (PII)."
  },
  s2: {
    title: "2) Was verwenden wir stattdessen?",
    p1: "Wir verwenden localStorage und gelegentlich sessionStorage — Speicher in Ihrem Browser, der die Plattform reibungsloser funktionieren lässt (z. B. Sprache der Oberfläche, praktische Präferenzen, optional zuletzt eingegebene Werte).",
    p2: "• Daten in localStorage verbleiben auf Ihrem Gerät, werden nicht an unsere Server gesendet und sind für andere Nutzer nicht verfügbar.",
    p3: "• Sie können diese jederzeit in den Browser-Einstellungen löschen („Clear site data“, Cache und lokale Daten löschen).",
    p4: "• Wir nutzen localStorage nicht für Analysen.",
    note: "<em>Hinweis zur Compliance.</em> Manche Gesetze behandeln localStorage als eine „ähnliche Technologie“ zu Cookies. Wenn wir später nicht essenzielle Daten speichern (z. B. zum Komfort die letzten Eingaben merken), stellen wir eine klare Opt-in-Steuerung („Remember my inputs“) bereit und holen — wo erforderlich — vor der Aktivierung Ihre Einwilligung ein."
  },
  s3: {
    title: "3) Inhalte und Dienste Dritter",
    p1: "Derzeit laden wir keine eingebetteten Drittinhalte, die Cookies setzen. Unsere Seiten können externe Links enthalten (z. B. Facebook, Instagram, YouTube, TikTok). Sobald Sie klicken und unsere Seite verlassen, gelten die Cookie-Richtlinien der jeweiligen Drittanbieter."
  },
  s4: {
    title: "4) Zukünftige Änderungen (Analysen mit Cookies, Werbung, Einbettungen)",
    p1: "Wenn wir Technologien einführen, die Cookies verwenden (z. B. Analysen mit Cookies, Werbenetzwerke/AdSense, eingebettete Player), aktualisieren wir diese Richtlinie und holen — wo erforderlich — vor dem Setzen nicht wesentlicher Cookies Ihre Einwilligung über ein sichtbares Banner/Präferenzzentrum ein."
  },
  s5: {
    title: "5) So verwalten Sie Daten in Ihrem Browser",
    p1: "Öffnen Sie die Datenschutzeinstellungen Ihres Browsers und löschen Sie die Websitedaten für die Forecastler-Domain, einschließlich localStorage und Cache. Verwenden Sie bei Bedarf den Privaten/Inkognito-Modus, damit Daten nur für die Sitzung bestehen bleiben."
  },
  s6: {
    title: "6) Änderungen an dieser Richtlinie",
    p1: "Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Änderungen gelten ab der Veröffentlichung hier mit aktualisiertem Datum."
  },
  s7: {
    title: "7) Kontakt",
    p1: "Forecastler Team"
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  meta: {
    title: "Política de Cookies",
    effective: "Data de vigência: 17 de junho de 2025",
    updated: "Última atualização: 24 de agosto de 2025",
    intro: "Esta Política explica como a Forecastler usa cookies e tecnologias semelhantes."
  },
  s1: {
    title: "1) Usamos cookies?",
    p1: "No momento — não. Não definimos cookies e, portanto, nenhum banner de cookies é exibido. Não usamos cookies para análise, publicidade, mensuração, personalização ou autenticação (cadastro/login não está habilitado).",
    p2: "<strong>Análise sem cookies (GA4).</strong> Utilizamos o Google Analytics 4 em configuração sem cookies somente para medição básica de tráfego e desempenho. A medição se baseia em sinais agregados e não identificáveis, sem usar identificadores locais do dispositivo e sem personalização. Não ativamos o Google Signals nem recursos de publicidade; o GA4 é configurado para que, na UE, os endereços IP não sejam registrados nem armazenados. Não enviamos ao GA4 quaisquer dados pessoais (PII)."
  },
  s2: {
    title: "2) O que usamos em vez disso?",
    p1: "Usamos localStorage e, ocasionalmente, sessionStorage — armazenamento no seu navegador que ajuda a Plataforma a funcionar com mais fluidez (por ex., idioma da interface, preferências práticas, opcionalmente os últimos valores inseridos).",
    p2: "• Os dados no localStorage permanecem no seu dispositivo, não são enviados aos nossos servidores e não ficam disponíveis para outros usuários.",
    p3: "• Você pode excluí-los a qualquer momento nas configurações do navegador (“Clear site data”, limpar cache e dados locais).",
    p4: "• Não usamos localStorage para analítica.",
    note: "<em>Nota de conformidade.</em> Algumas leis tratam o localStorage como uma “tecnologia semelhante” aos cookies. Se futuramente armazenarmos dados não essenciais (p. ex., lembrar as últimas entradas por conveniência), forneceremos um controle de opt-in claro (“Remember my inputs”) e, quando exigido, solicitaremos seu consentimento antes da ativação."
  },
  s3: {
    title: "3) Conteúdo e serviços de terceiros",
    p1: "Atualmente não carregamos conteúdo incorporado de terceiros que defina cookies. Nossas páginas podem conter links externos (p. ex., Facebook, Instagram, YouTube, TikTok). Ao clicar e sair do nosso site, aplicam-se as políticas de cookies desses terceiros."
  },
  s4: {
    title: "4) Alterações futuras (análise com cookies, anúncios, conteúdos incorporados)",
    p1: "Se passarmos a usar tecnologias que utilizam cookies (ex.: analítica com cookies, redes de anúncios/AdSense, players incorporados), atualizaremos esta Política e, quando exigido, solicitaremos seu consentimento por meio de um banner visível/central de preferências antes de definir quaisquer cookies não essenciais."
  },
  s5: {
    title: "5) Como gerenciar os dados no seu navegador",
    p1: "Abra as configurações de privacidade do navegador e limpe os Dados do site para o domínio da Forecastler, incluindo localStorage e cache. Se necessário, use o modo Privado/Anônimo para que os dados persistam apenas na sessão."
  },
  s6: {
    title: "6) Alterações nesta Política",
    p1: "Podemos atualizar esta Política periodicamente. As alterações entram em vigor quando publicadas aqui com a data atualizada."
  },
  s7: {
    title: "7) Contato",
    p1: "Forecastler Team"
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  meta: {
    title: "Informativa sui cookie",
    effective: "Data di efficacia: 17 giugno 2025",
    updated: "Ultimo aggiornamento: 24 agosto 2025",
    intro: "La presente Informativa spiega come Forecastler utilizza i cookie e tecnologie simili."
  },
  s1: {
    title: "1) Usiamo i cookie?",
    p1: "Al momento — no. Non impostiamo cookie e pertanto non viene mostrato alcun banner sui cookie. Non usiamo cookie per analisi, pubblicità, misurazione, personalizzazione o autenticazione (registrazione/accesso non abilitati).",
    p2: "<strong>Analisi senza cookie (GA4).</strong> Utilizziamo Google Analytics 4 in una configurazione senza cookie esclusivamente per la misurazione di base del traffico e delle prestazioni. La misurazione si basa su segnali aggregati e non identificativi, senza utilizzare identificatori locali del dispositivo e senza personalizzazione. Non abilitiamo Google Signals né le funzionalità pubblicitarie; GA4 è configurato affinché, nell’UE, gli indirizzi IP non vengano registrati né conservati. Non inviamo a GA4 dati personali (PII)."
  },
  s2: {
    title: "2) Cosa usiamo al posto dei cookie?",
    p1: "Usiamo localStorage e, occasionalmente, sessionStorage — archiviazione nel tuo browser che aiuta la Piattaforma a funzionare in modo più fluido (ad es., lingua dell’interfaccia, preferenze pratiche, opzionalmente ultimi valori inseriti).",
    p2: "• I dati nel localStorage restano sul tuo dispositivo, non vengono inviati ai nostri server e non sono disponibili ad altri utenti.",
    p3: "• Puoi eliminarli in qualsiasi momento nelle impostazioni del browser (“Clear site data”, cancella cache e dati locali).",
    p4: "• Non utilizziamo localStorage per analitiche.",
    note: "<em>Nota di conformità.</em> Alcune leggi trattano il localStorage come una “tecnologia simile” ai cookie. Se in futuro memorizzeremo dati non essenziali (es. ricordare gli ultimi input per comodità), forniremo un chiaro controllo di opt-in (“Remember my inputs”) e, ove richiesto, chiederemo il tuo consenso prima dell’attivazione."
  },
  s3: {
    title: "3) Contenuti e servizi di terze parti",
    p1: "Attualmente non carichiamo contenuti incorporati di terzi che impostano cookie. Le nostre pagine possono contenere link esterni (es. Facebook, Instagram, YouTube, TikTok). Quando fai clic e lasci il nostro sito, si applicano le politiche sui cookie di tali terze parti."
  },
  s4: {
    title: "4) Modifiche future (analisi con cookie, annunci, contenuti incorporati)",
    p1: "Se introdurremo tecnologie che utilizzano cookie (es. analisi con cookie, reti pubblicitarie/AdSense, player incorporati), aggiorneremo la presente Informativa e, ove richiesto, chiederemo il tuo consenso tramite un banner visibile/centro preferenze prima di impostare cookie non essenziali."
  },
  s5: {
    title: "5) Come gestire i dati nel tuo browser",
    p1: "Apri le impostazioni sulla privacy del browser e cancella i Dati del sito per il dominio Forecastler, incluso localStorage e cache. Se necessario, usa la modalità Navigazione privata/Incognito affinché i dati persistano solo per la sessione."
  },
  s6: {
    title: "6) Modifiche alla presente Informativa",
    p1: "Potremmo aggiornare periodicamente questa Informativa. Le modifiche hanno effetto alla pubblicazione qui con una data aggiornata."
  },
  s7: {
    title: "7) Contatti",
    p1: "Forecastler Team"
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  meta: {
    title: "Polityka plików cookie",
    effective: "Data wejścia w życie: 17 czerwca 2025",
    updated: "Ostatnia aktualizacja: 24 sierpnia 2025",
    intro: "Niniejsza Polityka wyjaśnia, w jaki sposób Forecastler używa plików cookie i podobnych technologii."
  },
  s1: {
    title: "1) Czy używamy plików cookie?",
    p1: "Obecnie — nie. Nie ustawiamy plików cookie, dlatego nie wyświetla się baner cookies. Nie używamy plików cookie do analityki, reklam, pomiaru, personalizacji ani uwierzytelniania (rejestracja/logowanie nie jest włączone).",
    p2: "<strong>Analityka bez plików cookie (GA4).</strong> Używamy Google Analytics 4 w konfiguracji bez plików cookie wyłącznie do podstawowego pomiaru ruchu i wydajności. Pomiar opiera się na zagregowanych, nieidentyfikujących sygnałach, bez użycia lokalnych identyfikatorów urządzeń i bez personalizacji. Nie włączamy Google Signals ani funkcji reklamowych; GA4 skonfigurowano tak, aby w UE adresy IP nie były rejestrowane ani przechowywane. Nie przekazujemy do GA4 żadnych danych osobowych (PII)."
  },
  s2: {
    title: "2) Czego używamy zamiast tego?",
    p1: "Używamy localStorage oraz sporadycznie sessionStorage — pamięci w Twojej przeglądarce, która pomaga Platformie działać płynniej (np. język interfejsu, praktyczne preferencje, opcjonalnie ostatnio wprowadzane wartości).",
    p2: "• Dane w localStorage pozostają na Twoim urządzeniu, nie są wysyłane na nasze serwery i nie są dostępne dla innych użytkowników.",
    p3: "• Możesz je usunąć w każdej chwili w ustawieniach przeglądarki („Clear site data”, wyczyść pamięć podręczną i dane lokalne).",
    p4: "• Nie używamy localStorage do analityki.",
    note: "<em>Uwaga zgodności.</em> Niektóre przepisy traktują localStorage jako „podobną technologię” do plików cookie. Jeżeli w przyszłości będziemy przechowywać dane nieistotne (np. dla wygody zapamiętywać ostatnie wpisy), udostępnimy wyraźny mechanizm zgody („Remember my inputs”) i — gdzie wymagane — uzyskamy Twoją zgodę przed aktywacją."
  },
  s3: {
    title: "3) Treści i usługi stron trzecich",
    p1: "Obecnie nie ładujemy osadzonych treści stron trzecich, które ustawiają pliki cookie. Nasze strony mogą zawierać linki zewnętrzne (np. Facebook, Instagram, YouTube, TikTok). Po kliknięciu i opuszczeniu naszej witryny zastosowanie mają polityki cookies tych podmiotów."
  },
  s4: {
    title: "4) Przyszłe zmiany (analityka z cookies, reklamy, osadzenia)",
    p1: "Jeśli wdrożymy technologie korzystające z cookies (np. analitykę z cookies, sieci reklamowe/AdSense, osadzone odtwarzacze), zaktualizujemy niniejszą Politykę i — gdzie to wymagane — przed ustawieniem jakichkolwiek nieistotnych cookies poprosimy o zgodę za pomocą widocznego banera/centrum preferencji."
  },
  s5: {
    title: "5) Jak zarządzać danymi w przeglądarce",
    p1: "Otwórz ustawienia prywatności przeglądarki i wyczyść Dane witryny dla domeny Forecastler, w tym localStorage i pamięć podręczną. W razie potrzeby użyj trybu Prywatnego/Incognito, aby dane utrzymywały się tylko w trakcie sesji."
  },
  s6: {
    title: "6) Zmiany niniejszej Polityki",
    p1: "Możemy okresowo aktualizować niniejszą Politykę. Zmiany obowiązują z chwilą opublikowania tutaj z uaktualnioną datą."
  },
  s7: {
    title: "7) Kontakt",
    p1: "Forecastler Team"
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  meta: {
    title: "Політика файлів cookie",
    effective: "Дата набрання чинності: 17 червня 2025",
    updated: "Останнє оновлення: 24 серпня 2025",
    intro: "Ця Політика пояснює, як Forecastler використовує файли cookie та подібні технології."
  },
  s1: {
    title: "1) Чи використовуємо ми файли cookie?",
    p1: "Наразі — ні. Ми не встановлюємо файли cookie, тому банер cookie не відображається. Ми не використовуємо cookie для аналітики, реклами, вимірювання, персоналізації чи автентифікації (реєстрація/вхід не увімкнені).",
    p2: "<strong>Аналітика без cookie (GA4).</strong> Ми використовуємо Google Analytics 4 у конфігурації без cookie виключно для базового вимірювання трафіку та продуктивності. Вимірювання ґрунтується на агрегованих, неідентифікуючих сигналах, без використання локальних ідентифікаторів пристроїв і без персоналізації. Ми не вмикаємо Google Signals або рекламні функції; GA4 налаштовано так, що в ЄС IP-адреси не журналюються та не зберігаються. Ми не надсилаємо в GA4 жодних персональних даних (PII)."
  },
  s2: {
    title: "2) Що ми використовуємо натомість?",
    p1: "Ми використовуємо localStorage і час від часу sessionStorage — сховище у вашому браузері, що допомагає Платформі працювати плавніше (напр., мова інтерфейсу, практичні налаштування, за потреби останні введені значення).",
    p2: "• Дані в localStorage залишаються на вашому пристрої, не надсилаються на наші сервери і недоступні іншим користувачам.",
    p3: "• Ви можете видалити їх будь-коли в налаштуваннях браузера (“Clear site data”, очищення кешу та локальних даних).",
    p4: "• Ми не використовуємо localStorage для аналітики.",
    note: "<em>Примітка щодо відповідності.</em> Деякі закони розглядають localStorage як «подібну технологію» до cookie. Якщо згодом ми зберігатимемо не суттєві дані (напр., запам’ятовування останніх введень для зручності), ми надамо чіткий механізм opt-in (“Remember my inputs”) і, де потрібно, попросимо вашу згоду перед увімкненням."
  },
  s3: {
    title: "3) Сторонній контент і сервіси",
    p1: "Наразі ми не завантажуємо вбудований сторонній контент, який встановлює cookie. Наші сторінки можуть містити зовнішні посилання (напр., Facebook, Instagram, YouTube, TikTok). Коли ви клацаєте й залишаєте наш сайт, діють політики cookie цих третіх сторін."
  },
  s4: {
    title: "4) Майбутні зміни (аналітика з cookie, реклама, вбудовані елементи)",
    p1: "Якщо ми впровадимо технології, що використовують cookie (напр., аналітика з cookie, рекламні мережі/AdSense, вбудовані плеєри), ми оновимо цю Політику і, де це потрібно, запитаємо вашу згоду через помітний банер/центр налаштувань до встановлення будь-яких не суттєвих cookie."
  },
  s5: {
    title: "5) Як керувати даними у вашому браузері",
    p1: "Відкрийте налаштування конфіденційності браузера та очистьте Дані сайту для домену Forecastler, включно з localStorage і кешем. За потреби використовуйте режим Приватний/Інкогніто, щоб дані зберігалися лише на час сесії."
  },
  s6: {
    title: "6) Зміни до цієї Політики",
    p1: "Ми можемо час від часу оновлювати цю Політику. Зміни набирають чинності з моменту публікації тут з оновленою датою."
  },
  s7: {
    title: "7) Контакти",
    p1: "Forecastler Team"
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  meta: {
    title: "Политика файлов cookie",
    effective: "Дата вступления в силу: 17 июня 2025 г.",
    updated: "Последнее обновление: 24 августа 2025 г.",
    intro: "Настоящая Политика объясняет, как Forecastler использует файлы cookie и аналогичные технологии."
  },
  s1: {
    title: "1) Используем ли мы файлы cookie?",
    p1: "В настоящее время — нет. Мы не устанавливаем файлы cookie, поэтому баннер о cookie не отображается. Мы не используем cookie для аналитики, рекламы, измерения, персонализации или аутентификации (регистрация/вход не включены).",
    p2: "<strong>Аналитика без cookie (GA4).</strong> Мы используем Google Analytics 4 в конфигурации без cookie исключительно для базового измерения трафика и производительности. Измерение основано на агрегированных, неидентифицирующих сигналах, без использования локальных идентификаторов устройств и без персонализации. Мы не включаем Google Signals или рекламные функции; GA4 настроен так, что в ЕС IP-адреса не регистрируются и не сохраняются. Мы не отправляем в GA4 персональные данные (PII)."
  },
  s2: {
    title: "2) Что мы используем вместо этого?",
    p1: "Мы используем localStorage и изредка sessionStorage — хранилище в вашем браузере, которое помогает Платформе работать более плавно (напр., язык интерфейса, практические предпочтения, при необходимости последние введённые значения).",
    p2: "• Данные в localStorage остаются на вашем устройстве, не отправляются на наши серверы и недоступны другим пользователям.",
    p3: "• Вы можете удалить их в любое время в настройках браузера (« Clear site data », очистка кэша и локальных данных).",
    p4: "• Мы не используем localStorage для аналитики.",
    note: "<em>Примечание о соответствии.</em> В некоторых юрисдикциях localStorage рассматривается как «схожая технология» с файлами cookie. Если позже мы будем хранить несущественные данные (напр., ради удобства запоминать последние вводы), мы предоставим понятный механизм явного согласия (« Remember my inputs ») и, где требуется, запросим ваше согласие до активации."
  },
  s3: {
    title: "3) Сторонний контент и сервисы",
    p1: "В настоящее время мы не загружаем встроенный контент третьих лиц, который устанавливает файлы cookie. Наши страницы могут содержать внешние ссылки (например, Facebook, Instagram, YouTube, TikTok). Когда вы переходите по ссылке и покидаете наш сайт, применяются политики cookie соответствующих третьих лиц."
  },
  s4: {
    title: "4) Будущие изменения (аналитика с cookie, реклама, встраиваемые элементы)",
    p1: "Если мы внедрим технологии, использующие cookie (например, аналитику с cookie, рекламные сети/AdSense, встроенные плееры), мы обновим настоящую Политику и, где это требуется, запросим ваше согласие через видимый баннер/центр предпочтений до установки любых несущественных cookie."
  },
  s5: {
    title: "5) Как управлять данными в вашем браузере",
    p1: "Откройте настройки конфиденциальности браузера и очистите данные сайта для домена Forecastler, включая localStorage и кэш. При необходимости используйте режим Частный/Инкогнито, чтобы данные сохранялись только на время сессии."
  },
  s6: {
    title: "6) Изменения настоящей Политики",
    p1: "Мы можем периодически обновлять эту Политику. Изменения вступают в силу с момента публикации здесь с обновленной датой."
  },
  s7: {
    title: "7) Контакты",
    p1: "Forecastler Team"
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  meta: {
    title: "Çerez Politikası",
    effective: "Yürürlük Tarihi: 17 Haziran 2025",
    updated: "Son Güncelleme: 24 Ağustos 2025",
    intro: "Bu Politika, Forecastler’ın çerezleri ve benzer teknolojileri nasıl kullandığını açıklar."
  },
  s1: {
    title: "1) Çerez kullanıyor muyuz?",
    p1: "Şu anda — hayır. Çerez ayarlamıyoruz; bu nedenle herhangi bir çerez bildirimi/bandı gösterilmez. Analitik, reklam, ölçüm, kişiselleştirme veya kimlik doğrulama için çerez kullanmıyoruz (kayıt/giriş etkin değildir).",
    p2: "<strong>Çerezsiz analiz (GA4).</strong> Google Analytics 4’ü yalnızca temel trafik ve performans ölçümü için çerezsiz bir yapılandırmada kullanıyoruz. Ölçüm, yerel cihaz tanımlayıcıları kullanılmadan ve kişiselleştirme olmadan, kimliği belirlemeyen toplulaştırılmış sinyallere dayanır. Google Signals veya reklam özelliklerini etkinleştirmiyoruz; GA4, AB’de IP adreslerinin kaydedilmemesi veya saklanmaması için yapılandırılmıştır. GA4’e herhangi bir kişisel veri (PII) göndermiyoruz."
  },
  s2: {
    title: "2) Bunun yerine ne kullanıyoruz?",
    p1: "localStorage ve zaman zaman sessionStorage kullanıyoruz — tarayıcınızdaki bu depolama, Platformun daha akıcı çalışmasına yardımcı olur (ör. arayüz dili, pratik tercihleri, isteğe bağlı olarak son girilen değerler).",
    p2: "• localStorage’daki veriler cihazınızda kalır, sunucularımıza gönderilmez ve diğer kullanıcılar tarafından görülemez.",
    p3: "• Bunları dilediğiniz zaman tarayıcı ayarlarından silebilirsiniz (“Clear site data”, önbellek ve yerel verileri temizle).",
    p4: "• localStorage’ı analiz amaçlı kullanmıyoruz.",
    note: "<em>Uyumluluk notu.</em> Bazı yasalar localStorage’ı çerezlere “benzer teknoloji” olarak değerlendirir. İleride zorunlu olmayan verileri saklarsak (örn. kolaylık için son girdileri hatırlama), açık bir katılım denetimi (“Remember my inputs”) sunacağız ve gerekli yerlerde etkinleştirmeden önce onayınızı isteyeceğiz."
  },
  s3: {
    title: "3) Üçüncü taraf içerikleri ve hizmetleri",
    p1: "Şu anda çerez ayarlayan gömülü üçüncü taraf içerikleri yüklemiyoruz. Sayfalarımız harici bağlantılar içerebilir (örn. Facebook, Instagram, YouTube, TikTok). Tıklayıp sitemizden ayrıldığınızda ilgili üçüncü tarafların çerez politikaları geçerli olur."
  },
  s4: {
    title: "4) Gelecekteki değişiklikler (çerezli analiz, reklamlar, yerleştirmeler)",
    p1: "Çerez kullanan teknolojiler (ör. çerezli analiz, reklam ağları/AdSense, yerleştirilmiş oynatıcılar) kullanmaya başlarsak, bu Politikayı güncelleyeceğiz ve gerekli olan durumlarda, gerekli olmayan çerezleri ayarlamadan önce görünür bir banner/tercih merkezi üzerinden onayınızı isteyeceğiz."
  },
  s5: {
    title: "5) Tarayıcınızdaki verileri nasıl yönetirsiniz",
    p1: "Tarayıcınızın gizlilik ayarlarını açın ve Forecastler alan adı için Site Verilerini — localStorage ve önbellek dâhil — temizleyin. Gerekirse Verimli/İnternet Gizli (Özel/Incognito) modu kullanarak verilerin yalnızca oturum süresince kalmasını sağlayın."
  },
  s6: {
    title: "6) Bu Politikadaki değişiklikler",
    p1: "Bu Politikayı zaman zaman güncelleyebiliriz. Değişiklikler, güncellenmiş tarih ile burada yayımlandığında yürürlüğe girer."
  },
  s7: {
    title: "7) İletişim",
    p1: "Forecastler Team"
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  meta: {
    title: "سياسة ملفات تعريف الارتباط",
    effective: "تاريخ النفاذ: 17 يونيو 2025",
    updated: "آخر تحديث: 24 أغسطس 2025",
    intro: "تشرح هذه السياسة كيفية استخدام Forecastler لملفات تعريف الارتباط والتقنيات المماثلة."
  },
  s1: {
    title: "1) هل نستخدم ملفات تعريف الارتباط؟",
    p1: "حاليًا — لا. لا نضع ملفات تعريف الارتباط، ولذلك لا يظهر شريط موافقة على الملفات. لا نستخدم ملفات تعريف الارتباط لأغراض التحليلات أو الإعلانات أو القياس أو التخصيص أو المصادقة (التسجيل/تسجيل الدخول غير مفعّل).",
    p2: "<strong>تحليلات بدون ملفات تعريف الارتباط (GA4).</strong> نستخدم Google Analytics 4 بتكوينٍ خالٍ من ملفات الارتباط لقياسٍ أساسي فقط لحركة الزيارات والأداء. يعتمد القياس على إشارات مجمّعة وغير معرِّفة للهوية، دون استخدام معرّفات محلية للجهاز ودون تخصيص. لا نفعّل Google Signals أو ميزات الإعلانات؛ وتم تهيئة GA4 بحيث لا تُسجَّل أو تُخزَّن عناوين IP داخل الاتحاد الأوروبي. لا نرسل إلى GA4 أي بيانات شخصية (PII)."
  },
  s2: {
    title: "2) ماذا نستخدم بدلًا من ذلك؟",
    p1: "نستخدم localStorage وأحيانًا sessionStorage — وهي مساحة تخزين في متصفحك تساعد المنصّة على العمل بسلاسة أكبر (مثل لغة الواجهة، التفضيلات العملية، والقيم المُدخلة أخيرًا بشكل اختياري).",
    p2: "• تبقى البيانات في localStorage على جهازك، ولا تُرسَل إلى خوادمنا، وليست متاحة لمستخدمين آخرين.",
    p3: "• يمكنك حذفها في أي وقت من إعدادات المتصفح (“Clear site data” ومسح ذاكرة التخزين المؤقت والبيانات المحلية).",
    p4: "• لا نستخدم localStorage لأغراض التحليلات.",
    note: "<em>ملاحظة امتثال.</em> تعتبر بعض القوانين localStorage «تقنية مشابهة» لملفات تعريف الارتباط. إذا قمنا لاحقًا بتخزين بيانات غير أساسية (مثل تذكّر آخر المدخلات لسهولة الاستخدام)، فسنوفّر خيار موافقة صريحًا (“Remember my inputs”) وسنطلب موافقتك قبل التفعيل حيثما يُطلب ذلك."
  },
  s3: {
    title: "3) محتوى وخدمات جهات خارجية",
    p1: "لا نقوم حاليًا بتحميل محتوى مضمّنًا من جهات خارجية يضع ملفات تعريف الارتباط. قد تتضمّن صفحاتنا روابط خارجية (مثل Facebook وInstagram وYouTube وTikTok). عند النقر والخروج من موقعنا، تُطبَّق سياسات ملفات تعريف الارتباط الخاصة بتلك الجهات."
  },
  s4: {
    title: "4) التغييرات المستقبلية (تحليلات باستخدام الكوكيز، الإعلانات، المحتوى المُضمَّن)",
    p1: "إذا قمنا لاحقًا باعتماد تقنيات تستخدم الكوكيز (مثل التحليلات المعتمدة على الكوكيز، شبكات الإعلانات/AdSense، المشغّلات المُضمّنة)، فسنحدّث هذه السياسة، وحيثما يُطلب ذلك سنلتمس موافقتك عبر لافتة مرئية/مركز تفضيلات قبل وضع أي كوكيز غير أساسية."
  },
  s5: {
    title: "5) كيفية إدارة البيانات في متصفحك",
    p1: "افتح إعدادات الخصوصية في المتصفح وامسح «بيانات الموقع» لنطاق Forecastler، بما في ذلك localStorage والذاكرة المؤقتة. عند الحاجة، استخدم وضع التصفّح الخاص/المخفي بحيث تبقى البيانات للجلسة فقط."
  },
  s6: {
    title: "6) التعديلات على هذه السياسة",
    p1: "يجوز لنا تحديث هذه السياسة من حين لآخر. تسري التغييرات عند نشرها هنا مع تاريخ محدث."
  },
  s7: {
    title: "7) جهة الاتصال",
    p1: "Forecastler Team"
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  meta: {
    title: "कुकीज़ नीति",
    effective: "प्रभावी तिथि: 17 जून 2025",
    updated: "अंतिम अपडेट: 24 अगस्त 2025",
    intro: "यह नीति बताती है कि Forecastler कुकीज़ और समान तकनीकों का कैसे उपयोग करता है."
  },
  s1: {
    title: "1) क्या हम कुकीज़ का उपयोग करते हैं?",
    p1: "वर्तमान में — नहीं। हम कुकीज़ सेट नहीं करते, इसलिए कोई कुकी बैनर नहीं दिखता। हम विश्लेषण, विज्ञापन, मापन, वैयक्तिकरण या प्रमाणीकरण के लिए कुकीज़ का उपयोग नहीं करते (पंजीकरण/लॉगिन सक्षम नहीं है).",
    p2: "<strong>कुकी-रहित विश्लेषण (GA4).</strong> हम Google Analytics 4 को केवल बुनियादी ट्रैफ़िक और प्रदर्शन मापन के लिए कुकी-रहित कॉन्फ़िगरेशन में उपयोग करते हैं। मापन समष्टि, गैर-पहचानने योग्य संकेतों पर आधारित है—स्थानीय डिवाइस पहचानकर्ताओं का उपयोग किए बिना और वैयक्तिकरण के बिना। हम Google Signals या विज्ञापन सुविधाएँ सक्षम नहीं करते; GA4 को इस प्रकार कॉन्फ़िगर किया गया है कि EU में IP पते लॉग या संग्रहित न हों। हम GA4 को कोई व्यक्तिगत डेटा (PII) नहीं भेजते."
  },
  s2: {
    title: "2) इसके बजाय हम क्या उपयोग करते हैं?",
    p1: "हम localStorage और कभी-कभी sessionStorage का उपयोग करते हैं — यह आपके ब्राउज़र में संग्रह है जो प्लेटफ़ॉर्म को अधिक सहज चलने में मदद करता है (जैसे, इंटरफ़ेस की भाषा, व्यावहारिक प्राथमिकताएँ, वैकल्पिक रूप से अंतिम दर्ज किए गए मान).",
    p2: "• localStorage में डेटा आपके डिवाइस पर रहता है, हमारे सर्वरों पर नहीं भेजा जाता और अन्य उपयोगकर्ताओं के लिए उपलब्ध नहीं होता.",
    p3: "• आप इन्हें कभी भी अपने ब्राउज़र की सेटिंग्स में हटाकर मिटा सकते हैं (“Clear site data”, कैश और स्थानीय डेटा साफ़ करें).",
    p4: "• हम विश्लेषण के लिए localStorage का उपयोग नहीं करते.",
    note: "<em>अनुपालन नोट.</em> कुछ क़ानून localStorage को कुकीज़ की “समान तकनीक” मानते हैं। यदि बाद में हम गैर-आवश्यक डेटा संग्रहीत करते हैं (जैसे सुविधा के लिए अंतिम इनपुट याद रखना), तो हम स्पष्ट opt-in नियंत्रण (“Remember my inputs”) देंगे और जहाँ आवश्यक होगा, सक्रिय करने से पहले आपकी सहमति लेंगे."
  },
  s3: {
    title: "3) तृतीय-पक्ष सामग्री और सेवाएँ",
    p1: "हम वर्तमान में ऐसा एम्बेडेड तृतीय-पक्ष कंटेंट लोड नहीं करते जो कुकी सेट करता हो। हमारे पृष्ठों में बाहरी लिंक हो सकते हैं (जैसे Facebook, Instagram, YouTube, TikTok)। जब आप क्लिक करके हमारी साइट छोड़ते हैं, तो उन तृतीय-पक्षों की कुकी नीतियाँ लागू होती हैं."
  },
  s4: {
    title: "4) भविष्य के परिवर्तन (कुकीज़ के साथ एनालिटिक्स, विज्ञापन, एम्बेड्स)",
    p1: "यदि हम ऐसी तकनीकों को अपनाते हैं जो कुकीज़ का उपयोग करती हैं (जैसे, कुकीज़ वाले एनालिटिक्स, विज्ञापन नेटवर्क/AdSense, एम्बेडेड प्लेयर), तो हम इस नीति को अपडेट करेंगे और जहाँ आवश्यक हो, किसी भी गैर-आवश्यक कुकी को सेट करने से पहले दृश्य बैनर/पसंद केंद्र के माध्यम से आपकी सहमति लेंगे."
  },
  s5: {
    title: "5) अपने ब्राउज़र में डेटा कैसे प्रबंधित करें",
    p1: "अपने ब्राउज़र की गोपनीयता सेटिंग्स खोलें और Forecastler डोमेन के लिए साइट डेटा साफ़ करें — localStorage और कैश सहित। आवश्यकता पड़ने पर प्राइवेट/इन्कॉग्निटो मोड का उपयोग करें ताकि डेटा केवल सत्र तक सीमित रहे."
  },
  s6: {
    title: "6) इस नीति में परिवर्तन",
    p1: "हम समय-समय पर इस नीति को अपडेट कर सकते हैं। परिवर्तन यहाँ अद्यतन तिथि के साथ प्रकाशित होते ही प्रभावी होंगे."
  },
  s7: {
    title: "7) संपर्क",
    p1: "Forecastler Team"
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  meta: {
    title: "Cookie 政策",
    effective: "生效日期：2025 年 6 月 17 日",
    updated: "最近更新：2025 年 8 月 24 日",
    intro: "本政策说明 Forecastler 如何使用 Cookie 及类似技术。"
  },
  s1: {
    title: "1) 我们是否使用 Cookie？",
    p1: "目前——不使用。我们不设置 Cookie，因此不会显示 Cookie 横幅。我们不将 Cookie 用于分析、广告、测量、个性化或身份验证（未启用注册/登录）。",
    p2: "<strong>无 Cookie 的分析（GA4）。</strong> 我们以无 Cookie 配置使用 Google Analytics 4，仅用于基础的流量与性能衡量。衡量基于聚合、不可识别的信号，不使用本地设备标识，也不进行个性化。我们不启用 Google Signals 或广告功能；GA4 配置为在欧盟不记录或存储 IP 地址。我们不会向 GA4 发送任何个人数据（PII）。"
  },
  s2: {
    title: "2) 我们改用什么？",
    p1: "我们使用 localStorage，偶尔使用 sessionStorage —— 这是浏览器中的存储，有助于平台更顺畅地运行（例如界面语言、实用偏好，或可选的上一次输入的值）。",
    p2: "• localStorage 中的数据保留在您的设备上，不会发送至我们的服务器，也不会向其他用户开放。",
    p3: "• 您可随时在浏览器设置中删除它们（“Clear site data”，清除缓存和本地数据）。",
    p4: "• 我们不会将 localStorage 用于分析目的。",
    note: "<em>合规说明。</em> 某些法律将 localStorage 视为与 Cookie “类似的技术”。若我们今后存储非必要数据（例如为方便而记住上次输入），我们将提供清晰的同意开关（“Remember my inputs”），并在需要时于启用前征得您的同意。"
  },
  s3: {
    title: "3) 第三方内容与服务",
    p1: "我们目前不加载会设置 Cookie 的第三方嵌入内容。我们的页面可能包含外部链接（如 Facebook、Instagram、YouTube、TikTok）。当您点击并离开本站时，将适用相应第三方的 Cookie 政策。"
  },
  s4: {
    title: "4) 未来变更（基于 Cookie 的分析、广告、嵌入内容）",
    p1: "如我们引入使用 Cookie 的技术（例如基于 Cookie 的分析、广告网络/AdSense、嵌入式播放器），我们将更新本政策，并在需要时，通过可见横幅/偏好中心在设置任何非必要 Cookie 之前征得您的同意。"
  },
  s5: {
    title: "5) 如何在浏览器中管理数据",
    p1: "打开浏览器的隐私设置，清除 Forecastler 域名的站点数据，包括 localStorage 与缓存。必要时使用无痕/隐私模式，使数据仅在会话期内保留。"
  },
  s6: {
    title: "6) 本政策的变更",
    p1: "我们可能不时更新本政策。变更在此处发布并更新日期后即生效。"
  },
  s7: {
    title: "7) 联系方式",
    p1: "Forecastler Team"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  meta: {
    title: "クッキーポリシー",
    effective: "発効日：2025年6月17日",
    updated: "最終更新日：2025年8月24日",
    intro: "本ポリシーは、Forecastler がクッキーおよび類似技術をどのように使用するかを説明します。"
  },
  s1: {
    title: "1) クッキーを使用していますか？",
    p1: "現時点では—いいえ。クッキーは設定しておらず、そのためクッキーバナーも表示されません。分析・広告・測定・パーソナライズ・認証の目的でクッキーは使用していません（登録/ログインは有効化されていません）。",
    p2: "<strong>クッキーなしの分析（GA4）。</strong> Google Analytics 4 を、基本的なトラフィックおよびパフォーマンス計測のみに用いるクッキーなし（cookieless）構成で使用しています。計測は、ローカルなデバイス識別子を用いず、パーソナライズもしない、集約された非識別のシグナルに基づきます。Google Signals や広告機能は有効化していません。EU 域内では IP アドレスが記録・保存されないよう GA4 を構成しています。GA4 に個人データ（PII）を送信していません。"
  },
  s2: {
    title: "2) 代わりに何を使っていますか？",
    p1: "私たちは localStorage と、場合によっては sessionStorage を使用しています。いずれもブラウザー内のストレージで、プラットフォームをよりスムーズに動作させます（例：インターフェースの言語、実用的な設定、任意で直近の入力値）。",
    p2: "• localStorage のデータはお使いの端末に留まり、当社サーバーへ送信されず、他のユーザーからも利用できません。",
    p3: "• これらはブラウザー設定からいつでも削除できます（“Clear site data”、キャッシュとローカルデータの削除）。",
    p4: "• 分析目的で localStorage は使用していません。",
    note: "<em>コンプライアンス注記。</em> 一部の法令では、localStorage をクッキーと「類似の技術」とみなします。将来、必須ではないデータ（利便性のための直近入力の記憶など）を保存する場合は、明確なオプトイン制御（“Remember my inputs”）を提供し、必要に応じて有効化前に同意を取得します。"
  },
  s3: {
    title: "3) サードパーティのコンテンツとサービス",
    p1: "現在、クッキーを設定する埋め込み型のサードパーティコンテンツは読み込みません。ページには外部リンク（Facebook、Instagram、YouTube、TikTok など）が含まれる場合があります。リンクをクリックして当サイトを離れた時点で、各第三者のクッキーポリシーが適用されます。"
  },
  s4: {
    title: "4) 将来の変更（Cookie を用いた分析・広告・埋め込み）",
    p1: "将来、Cookie を使用する技術（例：Cookie を伴う分析、広告ネットワーク/AdSense、埋め込みプレーヤー）を導入する場合は、本ポリシーを更新し、必要に応じて、非必須 Cookie を設定する前に、見やすいバナー／プリファレンスセンターを通じて同意を取得します。"
  },
  s5: {
    title: "5) ブラウザーでのデータ管理方法",
    p1: "ブラウザーのプライバシー設定を開き、Forecastler ドメインのサイトデータ（localStorage とキャッシュを含む）を削除してください。必要に応じて、プライベート／シークレット（Incognito）モードを使用し、データをセッション期間のみに限定できます。"
  },
  s6: {
    title: "6) 本ポリシーの変更",
    p1: "当社は本ポリシーを随時更新する場合があります。変更は、本ページで更新日とともに掲載された時点で効力を生じます。"
  },
  s7: {
    title: "7) 連絡先",
    p1: "Forecastler Team"
    }
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
  setTxtAny ("cp-title",  t.meta.title);
  setTxtAny ("cp-meta-1", t.meta.effective);
  setTxtAny ("cp-meta-2", t.meta.updated);
  setTxtAny ("cp-intro",  t.meta.intro);

  // 1)
  setTxtAny  ("cp-s1-title", t.s1.title);
  setTxtAny  ("cp-s1-1",     t.s1.p1);
  setHTMLAny ("cp-s1-2",     t.s1.p2);

  // 2)
  setTxtAny  ("cp-s2-title", t.s2.title);
  setTxtAny  ("cp-s2-1",     t.s2.p1);
  setTxtAny  ("cp-s2-2",     t.s2.p2);
  setTxtAny  ("cp-s2-3",     t.s2.p3);
  setTxtAny  ("cp-s2-4",     t.s2.p4);
  setHTMLAny ("cp-s2-note",  t.s2.note);

  // 3)
  setTxtAny ("cp-s3-title", t.s3.title);
  setTxtAny ("cp-s3-1",     t.s3.p1);

  // 4)
  setTxtAny ("cp-s4-title", t.s4.title);
  setTxtAny ("cp-s4-1",     t.s4.p1);

  // 5)
  setTxtAny ("cp-s5-title", t.s5.title);
  setTxtAny ("cp-s5-1",     t.s5.p1);

  // 6)
  setTxtAny ("cp-s6-title", t.s6.title);
  setTxtAny ("cp-s6-1",     t.s6.p1);

  // 7)
  setTxtAny ("cp-s7-title", t.s7.title);
  setTxtAny ("cp-s7-1",     t.s7.p1);
  setTxtAny ("cp-s7-2",     t.s7.p2);

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

// Izloži funkcije + T() helper (koriste ih drugi skriptovi na strani)
window.setLanguage = setLanguage;
window.T = function(){ return translations[trenutniJezik] || translations.en; };

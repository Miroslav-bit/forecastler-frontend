// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Sports Events and Results" },
    cta: {	
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The 2026 FIFA World Cup will be held in the United States, Canada, and Mexico. The United States last reached the quarterfinals in 2002; Mexico (as host) in 1986; Canada has never reached the quarterfinals.",
      qLabel: "Question for AI:",
      qText: "At the 2026 World Cup, will one of the host nations reach the quarterfinals?",
      aLabel: "AI answer:",
      aText: "YES. Probability 70%"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Jannik Sinner won Wimbledon 2024, the 2025 US Open, and the 2025 Australian Open. Carlos Alcaraz won Roland-Garros 2025.",
      qLabel: "Question for AI:",
      qText: "Will Jannik Sinner and Carlos Alcaraz play the 2025 Wimbledon final against each other?",
      aLabel: "AI answer:",
      aText: "YES. Probability 90%",
      valid: "Forecast came true",
      source: "Confirmation source"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The United States has won the most medals at the Summer Olympics (over 3,000). At the previous Olympics, the U.S. also topped the medal table with 126 medals, including 40 golds. China likewise claimed 40 gold medals at the previous Games.",
      qLabel: "Question for AI:",
      qText: "At the 2028 Olympics, will China win more than 40 gold medals?",
      aLabel: "AI answer:",
      aText: "YES. Probability 55%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za sportske događaje i rezultate" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Svetsko prvenstvo u fudbalu 2026. održaće se u Sjedinjenim Američkim Državama, Kanadi i Meksiku. SAD su poslednji put bile u četvrtfinalu 2002, Meksiko — kao domaćin — 1986, a Kanada nikada nije stigla do četvrtfinala.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će jedna od zemalja domaćina na Svetskom prvenstvu u fudbalu 2026. ući u četvrtfinale?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 70%"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Jannik Siner osvojio je Vimbldon 2024, US Open 2025. i Australian Open 2025. Carlos Alcaraz osvojio je Rolan Garos 2025.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će Jannik Siner i Carlos Alcaraz igrati u finalu Vimbldona 2025. godine?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 90%",
      valid: "Prognoza se obistinila",
      source: "Izvor potvrde"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Najviše osvojenih medalja na letnjim olimpijskim igrama imaju Sjedinjene Američke Države (preko 3.000 medalja). Na prethodnim olimpijskim igrama takođe su osvojile najviše medalja (126), od čega 40 zlatnih. Kina je na prethodnim igrama takođe osvojila 40 zlatnih medalja.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će na Olimpijskim igrama 2028. godine Kina osvojiti više od 40 zlatnih medalja?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 55%"
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  page: { title: "Pronósticos de Inteligencia Artificial para Eventos y Resultados Deportivos" },
  cta: {
    p1: "También puedes preguntar a la IA sobre tu futuro o el de otras personas, objetos, lugares y eventos",
    here: "AQUÍ"
  },
  s1: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "La Copa Mundial de la FIFA 2026 se celebrará en Estados Unidos, Canadá y México. Estados Unidos alcanzó por última vez los cuartos de final en 2002; México (como anfitrión) en 1986; Canadá nunca ha llegado a cuartos de final.",
    qLabel: "Pregunta para la IA:",
    qText: "En el Mundial 2026, ¿alguno de los países anfitriones llegará a cuartos de final?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 70%"
  },
  s2: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Jannik Sinner ganó Wimbledon 2024, el US Open 2025 y el Abierto de Australia 2025. Carlos Alcaraz ganó Roland Garros 2025.",
    qLabel: "Pregunta para la IA:",
    qText: "¿Jugarán Jannik Sinner y Carlos Alcaraz la final de Wimbledon 2025 entre sí?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 90%",
    valid: "El pronóstico se cumplió",
    source: "Fuente de confirmación"
  },
  s3: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Estados Unidos es el país con más medallas en los Juegos Olímpicos de Verano (más de 3.000). En los anteriores Juegos, EE. UU. también encabezó el medallero con 126 medallas, incluidas 40 de oro. China asimismo logró 40 oros en los anteriores Juegos.",
    qLabel: "Pregunta para la IA:",
    qText: "En los Juegos Olímpicos de 2028, ¿China ganará más de 40 medallas de oro?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 55%"
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  page: { title: "Prévisions d’intelligence artificielle pour les événements et résultats sportifs" },
  cta: {
    p1: "Vous pouvez aussi interroger l’IA sur votre avenir ou celui d’autres personnes, objets, lieux et événements",
    here: "ICI"
  },
  s1: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "La Coupe du monde de la FIFA 2026 se tiendra aux États-Unis, au Canada et au Mexique. Les États-Unis ont atteint les quarts de finale pour la dernière fois en 2002 ; le Mexique (en tant qu’hôte) en 1986 ; le Canada n’a jamais atteint les quarts.",
    qLabel: "Question pour l’IA :",
    qText: "À la Coupe du monde 2026, l’un des pays hôtes atteindra-t-il les quarts de finale ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 70 %"
  },
  s2: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Jannik Sinner a remporté Wimbledon 2024, l’US Open 2025 et l’Open d’Australie 2025. Carlos Alcaraz a remporté Roland-Garros 2025.",
    qLabel: "Question pour l’IA :",
    qText: "Jannik Sinner et Carlos Alcaraz joueront-ils la finale de Wimbledon 2025 l’un contre l’autre ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 90 %",
    valid: "La prévision s’est réalisée",
    source: "Source de confirmation"
  },
  s3: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Les États-Unis ont remporté le plus de médailles aux Jeux olympiques d’été (plus de 3 000). Aux derniers Jeux, les États-Unis ont également dominé le tableau avec 126 médailles, dont 40 d’or. La Chine a également obtenu 40 médailles d’or aux précédents Jeux.",
    qLabel: "Question pour l’IA :",
    qText: "Aux JO 2028, la Chine gagnera-t-elle plus de 40 médailles d’or ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 55 %"
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  page: { title: "KI-Prognosen zu Sportereignissen und Ergebnissen" },
  cta: {
    p1: "Sie können die KI auch zu Ihrer Zukunft oder zur Zukunft anderer Menschen, Objekte, Orte und Ereignisse befragen",
    here: "HIER"
  },
  s1: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Die FIFA-Weltmeisterschaft 2026 findet in den USA, Kanada und Mexiko statt. Die USA erreichten zuletzt 2002 das Viertelfinale; Mexiko (als Gastgeber) 1986; Kanada erreichte noch nie das Viertelfinale.",
    qLabel: "Frage an die KI:",
    qText: "Wird bei der WM 2026 eines der Gastgeberländer das Viertelfinale erreichen?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 70 %"
  },
  s2: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Jannik Sinner gewann Wimbledon 2024, die US Open 2025 und die Australian Open 2025. Carlos Alcaraz gewann Roland-Garros 2025.",
    qLabel: "Frage an die KI:",
    qText: "Werden Jannik Sinner und Carlos Alcaraz im Wimbledon-Finale 2025 gegeneinander spielen?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 90 %",
    valid: "Die Prognose traf ein",
    source: "Bestätigungsquelle"
  },
  s3: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Die USA haben bei den Olympischen Sommerspielen die meisten Medaillen gewonnen (über 3.000). Bei den letzten Spielen führten die USA ebenfalls den Medaillenspiegel mit 126 Medaillen an, darunter 40 Gold. China holte bei den letzten Spielen ebenfalls 40 Goldmedaillen.",
    qLabel: "Frage an die KI:",
    qText: "Wird China bei den Olympischen Spielen 2028 mehr als 40 Goldmedaillen gewinnen?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 55 %"
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  page: { title: "Previsões de IA para Eventos e Resultados Esportivos" },
  cta: {
    p1: "Você também pode perguntar à IA sobre o seu futuro ou o futuro de outras pessoas, objetos, lugares e eventos",
    here: "AQUI"
  },
  s1: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "A Copa do Mundo FIFA de 2026 será sediada nos Estados Unidos, Canadá e México. Os Estados Unidos chegaram às quartas de final pela última vez em 2002; o México (como anfitrião) em 1986; o Canadá nunca chegou às quartas.",
    qLabel: "Pergunta para a IA:",
    qText: "Na Copa de 2026, um dos países anfitriões chegará às quartas de final?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 70%"
  },
  s2: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Jannik Sinner venceu Wimbledon 2024, o US Open 2025 e o Australian Open 2025. Carlos Alcaraz venceu Roland-Garros 2025.",
    qLabel: "Pergunta para a IA:",
    qText: "Jannik Sinner e Carlos Alcaraz farão a final de Wimbledon 2025 um contra o outro?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 90%",
    valid: "A previsão se confirmou",
    source: "Fonte de confirmação"
  },
  s3: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Os Estados Unidos são o país com mais medalhas nos Jogos Olímpicos de Verão (mais de 3.000). Na edição anterior, os EUA também lideraram o quadro com 126 medalhas, incluindo 40 de ouro. A China também conquistou 40 ouros nos Jogos anteriores.", 
    qLabel: "Pergunta para a IA:",
    qText: "Nos Jogos de 2028, a China ganhará mais de 40 medalhas de ouro?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 55%"
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  page: { title: "Previsioni di IA per eventi e risultati sportivi" },
  cta: {
    p1: "Puoi anche chiedere all’IA del tuo futuro o del futuro di altre persone, oggetti, luoghi ed eventi",
    here: "QUI"
  },
  s1: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "La Coppa del Mondo FIFA 2026 si terrà negli Stati Uniti, in Canada e in Messico. Gli Stati Uniti hanno raggiunto i quarti di finale l’ultima volta nel 2002; il Messico (da paese ospitante) nel 1986; il Canada non ha mai raggiunto i quarti.",
    qLabel: "Domanda per l’IA:",
    qText: "Ai Mondiali 2026, una delle nazioni ospitanti raggiungerà i quarti di finale?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 70%"
  },
  s2: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Jannik Sinner ha vinto Wimbledon 2024, gli US Open 2025 e l’Australian Open 2025. Carlos Alcaraz ha vinto il Roland-Garros 2025.",
    qLabel: "Domanda per l’IA:",
    qText: "Jannik Sinner e Carlos Alcaraz giocheranno la finale di Wimbledon 2025 l’uno contro l’altro?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 90%",
    valid: "La previsione si è avverata",
    source: "Fonte di conferma"
  },
  s3: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Gli Stati Uniti hanno vinto il maggior numero di medaglie alle Olimpiadi estive (oltre 3.000). Alle precedenti Olimpiadi, gli USA hanno guidato il medagliere con 126 medaglie, tra cui 40 ori. Anche la Cina ha ottenuto 40 ori ai precedenti Giochi.",
    qLabel: "Domanda per l’IA:",
    qText: "Alle Olimpiadi del 2028, la Cina vincerà più di 40 medaglie d’oro?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 55%"
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  page: { title: "Prognozy SI dla wydarzeń i wyników sportowych" },
  cta: {
    p1: "Możesz też zapytać SI o swoją przyszłość lub o przyszłość innych osób, obiektów, miejsc i wydarzeń",
    here: "TUTAJ"
  },
  s1: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Mistrzostwa Świata FIFA 2026 odbędą się w Stanach Zjednoczonych, Kanadzie i Meksyku. USA ostatni raz dotarły do ćwierćfinału w 2002 r.; Meksyk (jako gospodarz) w 1986 r.; Kanada nigdy nie dotarła do ćwierćfinału.",
    qLabel: "Pytanie do SI:",
    qText: "Czy na MŚ 2026 któreś z państw-gospodarzy awansuje do ćwierćfinału?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 70%"
  },
  s2: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Jannik Sinner wygrał Wimbledon 2024, US Open 2025 oraz Australian Open 2025. Carlos Alcaraz wygrał Roland Garros 2025.",
    qLabel: "Pytanie do SI:",
    qText: "Czy Jannik Sinner i Carlos Alcaraz zagrają przeciwko sobie w finale Wimbledonu 2025?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 90%",
    valid: "Prognoza się sprawdziła",
    source: "Źródło potwierdzenia"
  },
  s3: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Stany Zjednoczone mają najwięcej medali na Letnich Igrzyskach Olimpijskich (ponad 3000). Na poprzednich igrzyskach USA również były pierwsze w klasyfikacji z 126 medalami, w tym 40 złotymi. Chiny również zdobyły 40 złotych medali na poprzednich igrzyskach.",
    qLabel: "Pytanie do SI:",
    qText: "Czy na igrzyskach w 2028 r. Chiny zdobędą ponad 40 złotych medali?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 55%"
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  page: { title: "Прогнози ШІ щодо спортивних подій і результатів" },
  cta: {
    p1: "Ви також можете запитати ШІ про своє майбутнє або про майбутнє інших людей, об’єктів, місць та подій",
    here: "ТУТ"
  },
  s1: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Чемпіонат світу з футболу 2026 року відбудеться у США, Канаді та Мексиці. США востаннє виходили до чвертьфіналу у 2002 році; Мексика (як господар) — у 1986-му; Канада ніколи не виходила до чвертьфіналу.",
    qLabel: "Питання до ШІ:",
    qText: "На ЧС-2026 чи дійде одна з країн-господарів до чвертьфіналу?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Ймовірність 70%"
  },
  s2: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Яннік Сіннер виграв Вімблдон 2024, US Open 2025 та Australian Open 2025. Карлос Алькарас виграв Ролан Гаррос 2025.",
    qLabel: "Питання до ШІ:",
    qText: "Чи зіграють Яннік Сіннер і Карлос Алькарас між собою у фіналі Вімблдону 2025?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Ймовірність 90%",
    valid: "Прогноз справдився",
    source: "Джерело підтвердження"
  },
  s3: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "США мають найбільше медалей на літніх Олімпійських іграх (понад 3 000). На попередніх Іграх США також очолили медальний залік зі 126 медалями, з яких 40 — золоті. Китай також здобув 40 золотих на попередніх Іграх.",
    qLabel: "Питання до ШІ:",
    qText: "На Олімпіаді 2028 року чи здобуде Китай понад 40 золотих медалей?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Ймовірність 55%"
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  page: { title: "Прогнозы ИИ для спортивных событий и результатов" },
  cta: {
    p1: "Вы также можете спросить ИИ о своём будущем или о будущем других людей, объектов, мест и событий",
    here: "ЗДЕСЬ"
  },
  s1: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Чемпионат мира по футболу 2026 года пройдёт в США, Канаде и Мексике. США в последний раз выходили в четвертьфинал в 2002 году; Мексика (как хозяйка) — в 1986-м; Канада никогда не выходила в четвертьфинал.",
    qLabel: "Вопрос к ИИ:",
    qText: "На ЧМ-2026 одна из стран-организаторов выйдет в четвертьфинал?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 70 %"
  },
  s2: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Янник Синнер выиграл Уимблдон 2024, US Open 2025 и Australian Open 2025. Карлос Алькарас выиграл Ролан Гаррос 2025.",
    qLabel: "Вопрос к ИИ:",
    qText: "Сыграют ли Янник Синнер и Карлос Алькарас друг против друга в финале Уимблдона 2025?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 90 %",
    valid: "Прогноз сбылся",
    source: "Источник подтверждения"
  },
  s3: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "США выиграли больше всего медалей на Летних Олимпийских играх (более 3000). На прошлых Играх США также возглавили медальный зачёт со 126 медалями, включая 40 золотых. Китай также завоевал 40 золотых на прошлых Играх.",
    qLabel: "Вопрос к ИИ:",
    qText: "На Олимпиаде 2028 года Китай выиграет более 40 золотых медалей?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 55 %"
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  page: { title: "Spor Etkinlikleri ve Sonuçları için Yapay Zekâ Tahminleri" },
  cta: {
    p1: "YZ’ye kendi geleceğinizin veya diğer kişiler, nesneler, yerler ve olayların geleceğinin ne olacağını da sorabilirsiniz",
    here: "BURADA"
  },
  s1: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "2026 FIFA Dünya Kupası ABD, Kanada ve Meksika’da düzenlenecek. ABD en son 2002’de çeyrek finale çıktı; Meksika (ev sahibi olarak) 1986’da; Kanada hiç çeyrek finale kalmadı.",
    qLabel: "YZ’ye soru:",
    qText: "2026 Dünya Kupası’nda ev sahibi ülkelerden biri çeyrek finale ulaşacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %70"
  },
  s2: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Jannik Sinner 2024 Wimbledon’ı, 2025 ABD Açık’ı ve 2025 Avustralya Açık’ı kazandı. Carlos Alcaraz 2025 Roland-Garros’u kazandı.",
    qLabel: "YZ’ye soru:",
    qText: "Jannik Sinner ile Carlos Alcaraz 2025 Wimbledon finalinde birbirine karşı oynayacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %90",
    valid: "Tahmin gerçekleşti",
    source: "Doğrulama kaynağı"
  },
  s3: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "ABD, Yaz Olimpiyatları’nda en çok madalya kazanan ülkedir (3.000’in üzerinde). Önceki Olimpiyatlarda da ABD, 40’ı altın olmak üzere 126 madalya ile zirvedeydi. Çin de önceki Oyunlarda 40 altın madalya elde etti.",
    qLabel: "YZ’ye soru:",
    qText: "2028 Olimpiyatları’nda Çin 40’tan fazla altın madalya kazanacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %55"
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  page: { title: "تنبؤات الذكاء الاصطناعي للأحداث والنتائج الرياضية" },
  cta: {
    p1: "يمكنك أيضًا سؤال الذكاء الاصطناعي عن مستقبلك أو مستقبل أشخاص وأشياء وأماكن وأحداث أخرى",
    here: "هنا"
  },
  s1: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "ستُقام كأس العالم FIFA 2026 في الولايات المتحدة وكندا والمكسيك. بلغَت الولايات المتحدة ربع النهائي آخر مرة عام 2002؛ والمكسيك (بوصفها المضيفة) عام 1986؛ ولم تبلغ كندا ربع النهائي قط.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "في مونديال 2026، هل ستصل إحدى الدول المضيفة إلى ربع النهائي؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 70%"
  },
  s2: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "فاز يانيك سينر بويمبلدون 2024 وببطولة أمريكا المفتوحة 2025 وببطولة أستراليا المفتوحة 2025. وفاز كارلوس ألكاراث برولان غاروس 2025.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "هل سيلتقي يانيك سينر وكارلوس ألكاراث في نهائي ويمبلدون 2025؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 90%",
    valid: "تحقّق التنبؤ",
    source: "مصدر التأكيد"
  },
  s3: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "تتصدر الولايات المتحدة عدد الميداليات في الدورات الأولمبية الصيفية (أكثر من 3000). وفي الدورة السابقة تصدرت أيضًا جدول الميداليات بـ 126 ميدالية، بينها 40 ذهبية. كما حصدت الصين 40 ذهبية في الدورة السابقة.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "في أولمبياد 2028، هل ستحصد الصين أكثر من 40 ميدالية ذهبية؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 55%"
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  page: { title: "खेल आयोजनों और परिणामों के लिए कृत्रिम बुद्धिमत्ता पूर्वानुमान" },
  cta: {
    p1: "आप AI से अपने भविष्य या अन्य लोगों, वस्तुओं, स्थानों और घटनाओं के भविष्य के बारे में भी पूछ सकते हैं",
    here: "यहाँ"
  },
  s1: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "फीफा विश्व कप 2026 संयुक्त राज्य अमेरिका, कनाडा और मेक्सिको में आयोजित होगा। संयुक्त राज्य अमेरिका आख़िरी बार 2002 में क्वार्टर फ़ाइनल में पहुँचा; मेक्सिको (मेज़बान के रूप में) 1986 में; कनाडा कभी क्वार्टरफ़ाइनल में नहीं पहुँचा।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2026 विश्व कप में मेज़बान देशों में से कोई क्वार्टर फ़ाइनल तक पहुँचेगा?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 70%"
  },
  s2: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "जानिक सिनर ने 2024 विंबलडन, 2025 यूएस ओपन और 2025 ऑस्ट्रेलियन ओपन जीते। कार्लोस अल्काराज़ ने 2025 रोलां-गैरोस जीता।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या जानिक सिनर और कार्लोस अल्काराज़ 2025 विंबलडन फ़ाइनल में एक-दूसरे के खिलाफ खेलेंगे?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 90%",
    valid: "पूर्वानुमान सही साबित हुआ",
    source: "पुष्टिकरण स्रोत"
  },
  s3: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "ग्रीष्मकालीन ओलिंपिक में सबसे अधिक पदक संयुक्त राज्य अमेरिका ने जीते हैं (3,000 से अधिक)। पिछली ओलिंपिक में भी अमेरिका 126 पदकों—जिनमें 40 स्वर्ण शामिल थे—के साथ शीर्ष पर रहा। चीन ने भी पिछली खेलों में 40 स्वर्ण जीते।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2028 ओलिंपिक में चीन 40 से अधिक स्वर्ण पदक जीतेगा?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 55%"
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  page: { title: "关于体育赛事与结果的人工智能预测" },
  cta: {
    p1: "你还可以让 AI 预测你的未来，或他人、物体、地点与事件的未来",
    here: "这里"
  },
  s1: {
    forecast: "预测日期：17.06.2025.",
    lead: "2026 年国际足联世界杯将在美国、加拿大和墨西哥举行。美国上一次打进四分之一决赛是 2002 年；墨西哥（作为东道主）是 1986 年；加拿大从未打进四分之一决赛。",
    qLabel: "向 AI 提问：",
    qText: "在 2026 年世界杯上，东道主国家中是否会有球队闯入四分之一决赛？",
    aLabel: "AI 的回答：",
    aText: "是。概率 70%"
  },
  s2: {
    forecast: "预测日期：17.06.2025.",
    lead: "扬尼克•辛纳赢得了 2024 年温网、2025 年美网和 2025 年澳网。卡洛斯•阿尔卡拉斯赢得了 2025 年法网（罗兰加洛斯）。",
    qLabel: "向 AI 提问：",
    qText: "扬尼克•辛纳与卡洛斯•阿尔卡拉斯会在 2025 年温网决赛中相遇吗？",
    aLabel: "AI 的回答：",
    aText: "是。概率 90%",
    valid: "预测成真",
    source: "确认来源"
  },
  s3: {
    forecast: "预测日期：17.06.2025.",
    lead: "夏季奥运会上获奖牌最多的国家是美国（超过 3000 枚）。在上一届奥运会上，美国同样以 126 枚奖牌（其中 40 枚金牌）位居奖牌榜首。中国在上一届也收获了 40 枚金牌。",
    qLabel: "向 AI 提问：",
    qText: "在 2028 年奥运会上，中国是否会获得超过 40 枚金牌？",
    aLabel: "AI 的回答：",
    aText: "是。概率 55%"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  page: { title: "スポーツイベントと結果に関するAI予測" },
  cta: {
    p1: "AI に、あなた自身の将来や他者・物体・場所・出来事の将来についても質問できます",
    here: "こちら"
  },
  s1: {
    forecast: "予測日：17.06.2025.",
    lead: "2026 年 FIFA ワールドカップは米国・カナダ・メキシコで開催される。米国が準々決勝に進出したのは 2002 年が最後。メキシコ（開催国として）は 1986 年。カナダは準々決勝進出の経験がない。",
    qLabel: "AI への質問：",
    qText: "2026 年ワールドカップで、開催国のいずれかは準々決勝に進出しますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 70%"
  },
  s2: {
    forecast: "予測日：17.06.2025.",
    lead: "ヤニック・シナーは 2024 年ウィンブルドン、2025 年全米オープン、2025 年全豪オープンを制した。カルロス・アルカラスは 2025 年ローラン・ギャロス（全仏）を制覇。",
    qLabel: "AI への質問：",
    qText: "ヤニック・シナーとカルロス・アルカラスは 2025 年ウィンブルドン決勝で対戦しますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 90%",
    valid: "予測は的中しました",
    source: "確認ソース"
  },
  s3: {
    forecast: "予測日：17.06.2025.",
    lead: "夏季五輪で最も多くのメダルを獲得している国は米国（3,000 超）。前回大会でも米国は金 40 を含む 126 個でメダル最多だった。中国も前回大会で金 40 を獲得した。",
    qLabel: "AI への質問：",
    qText: "2028 年の五輪で、中国は金メダルを 40 個超獲得しますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 55%"
    }
  }
};

// Helperi: pokušaj bez sufiksa, pa sa "-en"
function byId(id){
  return document.getElementById(id) || document.getElementById(id + "-en");
}
function setTxtAny(id, txt){
  const el = byId(id);
  if (el && typeof txt === "string") el.textContent = txt;
}
// Ako postoji par -en/-sr, sakrij/prikaži zavisno od jezika
function togglePair(baseId, lang){
  const en = document.getElementById(baseId + "-en");
  const sr = document.getElementById(baseId + "-sr");
  if (!en || !sr) return; // nema para — ništa
  if (lang === "sr"){ sr.style.display = ""; en.style.display = "none"; }
  else { en.style.display = ""; sr.style.display = "none"; }
}

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

  // Naslov stranice
  setTxtAny("blog-planet-title", t.page.title);

  // Sekcija 1
  setTxtAny("planet-1-forecast-date", t.s1.forecast);
  setTxtAny("planet-1-lead",          t.s1.lead);
  setTxtAny("planet-1-q-label",       t.s1.qLabel);
  setTxtAny("planet-1-q-text",        t.s1.qText);
  setTxtAny("planet-1-a-label",       t.s1.aLabel);
  setTxtAny("planet-1-a-text",        t.s1.aText);
  // Ako postoje -en/-sr parovi, prebaci vidljivost
  togglePair("planet-1-forecast-date", lang);

  // Sekcija 2
  setTxtAny("planet-2-forecast-date", t.s2.forecast);
  setTxtAny("planet-2-lead",          t.s2.lead);
  setTxtAny("planet-2-q-label",       t.s2.qLabel);
  setTxtAny("planet-2-q-text",        t.s2.qText);
  setTxtAny("planet-2-a-label",       t.s2.aLabel);
  setTxtAny("planet-2-a-text",        t.s2.aText);
  setTxtAny("planet-2-valid",         t.s2.valid);
  setTxtAny("planet-2-source",        t.s2.source);
  togglePair("planet-2-forecast-date", lang);
  togglePair("planet-2-source",        lang);


  // Sekcija 3
  setTxtAny("planet-3-forecast-date", t.s3.forecast);
  setTxtAny("planet-3-lead",          t.s3.lead);
  setTxtAny("planet-3-q-label",       t.s3.qLabel);
  setTxtAny("planet-3-q-text",        t.s3.qText);
  setTxtAny("planet-3-a-label",       t.s3.aLabel);
  setTxtAny("planet-3-a-text",        t.s3.aText);
  togglePair("planet-3-forecast-date", lang);

  // CTA
  setTxtAny("blog-cta-1", t.cta.p1);
  setTxtAny("blog-cta-2", t.cta.here);

  // Footer
  if (t.footerLinks){
    setTxtAny("link-disclaimer", t.footerLinks.disclaimer);
    setTxtAny("link-terms",      t.footerLinks.terms);
    setTxtAny("link-privacy",    t.footerLinks.privacy);
    setTxtAny("link-cookies",    t.footerLinks.cookies);
    setTxtAny("link-sitemap",    t.footerLinks.sitemap);
    setTxtAny("link-faq",        t.footerLinks.faq);
  }

  // RTL
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

// Inicijalizacija
document.addEventListener("DOMContentLoaded", () => {
  const saved  = localStorage.getItem('forecastlerLang');
  const browser = (navigator.language || 'en').slice(0,2);
  const initial = saved || (browser === 'sr' ? 'sr' : 'en');
  setLanguage(initial);
});

// izloži funkciju za klik na zastavice
window.setLanguage = setLanguage;

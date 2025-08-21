// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Planet Earth" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "By June 2025, five earthquakes of magnitude above 7 on the Richter scale had been recorded worldwide, the strongest of which struck Myanmar on March 28. The last earthquake exceeding magnitude 8 on the Richter scale occurred on August 12, 2021, in the South Sandwich Islands.",
      qLabel: "Question for AI:",
      qText: "Will planet Earth be hit by an earthquake exceeding magnitude 8 on the Richter scale during 2025?",
      aLabel: "AI answer:",
      aText: "YES. Probability 65%",
      valid: "Forecast came true",
      source: "Confirmation source"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Asteroids pose a potential threat to planet Earth. The last significant impact event occurred on February 15, 2013, when, after entering Earth’s atmosphere, a celestial body exploded over the Russian city of Chelyabinsk, damaging about 7,000 buildings and injuring roughly 1,500 people.",
      qLabel: "Question for AI:",
      qText: "By 2030, will an asteroid strike Earth, causing casualties and material damage?",
      aLabel: "AI answer:",
      aText: "NO. Probability 5%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Human influence has contributed to the warming of the atmosphere, oceans, and land, with consequences that include increasingly frequent extreme heat. The year 2024 was recorded as the warmest on record, about 1.55 degrees Celsius above the pre-industrial average.",
      qLabel: "Question for AI:",
      qText: "Will 2025 be the warmest year on record?",
      aLabel: "AI answer:",
      aText: "NO. Probability 25%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za planetu Zemlju" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Do juna 2025. godine zabeleženo je pet zemljotresa magnitude iznad 7 po Rihteru širom sveta, od kojih je najjači pogodio Mjanmar 28. marta. Poslednji zemljotres jači od magnitude 8 dogodio se 12. avgusta 2021. na Južnosandvičkim ostrvima.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će planetu Zemlju tokom 2025. godine pogoditi zemljotres jači od 8 po Rihteru?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 65%",
      valid: "Prognoza se obistinila",
      source: "Izvor potvrde"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Asteroidi predstavljaju potencijalnu pretnju planeti Zemlji. Poslednji značajan događaj zabeležen je 15. februara 2013, kada je nebesko telo eksplodiralo iznad ruskog grada Čeljabinska oštetivši oko 7.000 objekata i povredivši približno 1.500 ljudi.",
      qLabel: "Pitanje za AI:",
      qText: "Hoće li do 2030. godine asteroid pogoditi Zemlju i prouzrokovati žrtve i materijalnu štetu?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 5%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Ljudski uticaj doprineo je zagrevanju atmosfere, okeana i kopna, sa posledicama koje uključuju sve češće ekstremne vrućine. Godina 2024. zabeležena je kao najtoplija do sada, za oko 1,55 °C iznad predindustrijskog proseka.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će 2025. godina biti najtoplija godina do sada?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 25%"
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  page: { title: "Pronósticos de Inteligencia Artificial para el Planeta Tierra" },
  cta: {
    p1: "También puedes preguntar a la IA sobre tu futuro o el de otras personas, objetos, lugares y eventos",
    here: "AQUÍ"
  },
  s1: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Para junio de 2025 se habían registrado en todo el mundo cinco terremotos de magnitud superior a 7 en la escala de Richter, el más fuerte de los cuales golpeó Myanmar el 28 de marzo. El último terremoto que superó la magnitud 8 en la escala de Richter ocurrió el 12 de agosto de 2021 en las Islas Sandwich del Sur.",
    qLabel: "Pregunta para la IA:",
    qText: "¿Será golpeado el planeta Tierra por un terremoto de magnitud superior a 8 en la escala de Richter durante 2025?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 65%",
    valid: "El pronóstico se cumplió",
    source: "Fuente de confirmación"
  },
  s2: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Los asteroides suponen una amenaza potencial para el planeta Tierra. El último evento de impacto significativo ocurrió el 15 de febrero de 2013, cuando, tras entrar en la atmósfera terrestre, un cuerpo celeste explotó sobre la ciudad rusa de Cheliábinsk, dañando unas 7.000 edificaciones y hiriendo a unas 1.500 personas.",
    qLabel: "Pregunta para la IA:",
    qText: "Para 2030, ¿impactará un asteroide en la Tierra causando víctimas y daños materiales?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 5%"
  },
  s3: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "La influencia humana ha contribuido al calentamiento de la atmósfera, los océanos y la tierra, con consecuencias que incluyen olas de calor cada vez más frecuentes. El año 2024 fue el más cálido registrado, alrededor de 1,55 °C por encima del promedio preindustrial.",
    qLabel: "Pregunta para la IA:",
    qText: "¿Será 2025 el año más cálido de la historia?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 25%"
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  page: { title: "Prévisions d’intelligence artificielle pour la planète Terre" },
  cta: {
    p1: "Vous pouvez aussi interroger l’IA sur votre avenir ou celui d’autres personnes, objets, lieux et événements",
    here: "ICI"
  },
  s1: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "À juin 2025, cinq séismes d’une magnitude supérieure à 7 sur l’échelle de Richter avaient été enregistrés dans le monde, dont le plus fort a frappé le Myanmar le 28 mars. Le dernier séisme dépassant la magnitude 8 sur l’échelle de Richter a eu lieu le 12 août 2021 aux îles Sandwich du Sud.",
    qLabel: "Question pour l’IA :",
    qText: "La planète Terre sera-t-elle frappée par un séisme dépassant la magnitude 8 sur l’échelle de Richter pendant l’année 2025 ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 65 %",
    valid: "La prévision s’est réalisée",
    source: "Source de confirmation"
  },
  s2: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Les astéroïdes représentent une menace potentielle pour la planète Terre. Le dernier impact significatif s’est produit le 15 février 2013 lorsqu’un corps céleste a explosé au-dessus de la ville russe de Tcheliabinsk après être entré dans l’atmosphère terrestre, endommageant environ 7 000 bâtiments et blessant quelque 1 500 personnes.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici 2030, un astéroïde heurtera-t-il la Terre en causant des victimes et des dommages matériels ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 5 %"
  },
  s3: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "L’influence humaine a contribué au réchauffement de l’atmosphère, des océans et des terres, avec pour conséquence des vagues de chaleur de plus en plus fréquentes. L’année 2024 a été la plus chaude jamais enregistrée, d’environ 1,55 °C au-dessus de la moyenne préindustrielle.",
    qLabel: "Question pour l’IA :",
    qText: "2025 sera-t-elle l’année la plus chaude jamais enregistrée ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 25 %"
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  page: { title: "KI-Prognosen für den Planeten Erde" },
  cta: {
    p1: "Sie können die KI auch zu Ihrer Zukunft oder zur Zukunft anderer Menschen, Objekte, Orte und Ereignisse befragen",
    here: "HIER"
  },
  s1: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Bis Juni 2025 wurden weltweit fünf Erdbeben mit einer Magnitude über 7 auf der Richter-Skala registriert; das stärkste traf Myanmar am 28. März. Das letzte Erdbeben mit einer Magnitude über 8 auf der Richter-Skala ereignete sich am 12. August 2021 auf den Südlichen Sandwichinseln.",
    qLabel: "Frage an die KI:",
    qText: "Wird der Planet Erde im Jahr 2025 von einem Erdbeben mit einer Magnitude über 8 auf der Richter-Skala getroffen?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 65 %",
    valid: "Die Prognose traf ein",
    source: "Bestätigungsquelle"
  },
  s2: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Asteroiden stellen eine potenzielle Bedrohung für den Planeten Erde dar. Das letzte bedeutende Einschlagsereignis ereignete sich am 15. Februar 2013, als nach dem Eintritt in die Erdatmosphäre ein Himmelskörper über der russischen Stadt Tscheljabinsk explodierte, rund 7.000 Gebäude beschädigte und etwa 1.500 Menschen verletzte.",
    qLabel: "Frage an die KI:",
    qText: "Wird bis 2030 ein Asteroid auf die Erde einschlagen und dabei Opfer und Sachschäden verursachen?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 5 %"
  },
  s3: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Der menschliche Einfluss hat zur Erwärmung der Atmosphäre, der Ozeane und der Landflächen beigetragen, was u. a. zu immer häufigeren Hitzewellen führt. Das Jahr 2024 war das wärmste seit Beginn der Aufzeichnungen, etwa 1,55 °C über dem vorindustriellen Durchschnitt.",
    qLabel: "Frage an die KI:",
    qText: "Wird 2025 das wärmste Jahr seit Beginn der Aufzeichnungen sein?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 25 %"
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  page: { title: "Previsões de Inteligência Artificial para o Planeta Terra" },
  cta: {
    p1: "Você também pode perguntar à IA sobre o seu futuro ou o futuro de outras pessoas, objetos, lugares e eventos",
    here: "AQUI"
  },
  s1: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Até junho de 2025, cinco terremotos com magnitude acima de 7 na escala de Richter haviam sido registrados no mundo, sendo o mais forte em Mianmar, em 28 de março. O último terremoto que excedeu magnitude 8 na escala de Richter ocorreu em 12 de agosto de 2021, nas Ilhas Sandwich do Sul.",
    qLabel: "Pergunta para a IA:",
    qText: "Durante 2025, a Terra será atingida por um terremoto com magnitude superior a 8 na escala de Richter?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 65%",
    valid: "A previsão se confirmou",
    source: "Fonte de confirmação"
  },
  s2: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Asteroides representam uma ameaça potencial para a Terra. O último impacto significativo ocorreu em 15 de fevereiro de 2013, quando, após entrar na atmosfera, um corpo celeste explodiu sobre a cidade russa de Cheliabinsk, danificando cerca de 7.000 prédios e ferindo aproximadamente 1.500 pessoas.",
    qLabel: "Pergunta para a IA:",
    qText: "Até 2030, um asteroide atingirá a Terra causando vítimas e danos materiais?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 5%"
  },
  s3: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "A influência humana contribuiu para o aquecimento da atmosfera, dos oceanos e das terras, com consequências como ondas de calor cada vez mais frequentes. O ano de 2024 foi o mais quente já registrado, cerca de 1,55 °C acima da média pré-industrial.",
    qLabel: "Pergunta para a IA:",
    qText: "2025 será o ano mais quente já registrado?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 25%"
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  page: { title: "Previsioni di intelligenza artificiale per il pianeta Terra" },
  cta: {
    p1: "Puoi anche chiedere all’IA del tuo futuro o del futuro di altre persone, oggetti, luoghi ed eventi",
    here: "QUI"
  },
  s1: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Entro giugno 2025 erano stati registrati in tutto il mondo cinque terremoti di magnitudo superiore a 7 sulla scala Richter; il più forte ha colpito il Myanmar il 28 marzo. L’ultimo terremoto superiore a magnitudo 8 sulla scala Richter si è verificato il 12 agosto 2021 nelle Isole Sandwich Meridionali.",
    qLabel: "Domanda per l’IA:",
    qText: "Nel corso del 2025, il pianeta Terra sarà colpito da un terremoto di magnitudo superiore a 8 sulla scala Richter?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 65%",
    valid: "La previsione si è avverata",
    source: "Fonte di conferma"
  },
  s2: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Gli asteroidi rappresentano una potenziale minaccia per la Terra. L’ultimo evento d’impatto significativo è avvenuto il 15 febbraio 2013, quando un corpo celeste, entrato nell’atmosfera terrestre, è esploso sopra la città russa di Čeljabinsk, danneggiando circa 7.000 edifici e ferendo circa 1.500 persone.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro il 2030, un asteroide colpirà la Terra causando vittime e danni materiali?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 5%"
  },
  s3: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "L’influenza umana ha contribuito al riscaldamento di atmosfera, oceani e terre emerse, con conseguenze tra cui ondate di calore sempre più frequenti. Il 2024 è stato l’anno più caldo mai registrato, circa 1,55 °C sopra la media preindustriale.",
    qLabel: "Domanda per l’IA:",
    qText: "Il 2025 sarà l’anno più caldo mai registrato?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 25%"
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  page: { title: "Prognozy sztucznej inteligencji dla planety Ziemia" },
  cta: {
    p1: "Możesz też zapytać SI o swoją przyszłość lub o przyszłość innych osób, obiektów, miejsc i wydarzeń",
    here: "TUTAJ"
  },
  s1: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Do czerwca 2025 r. na świecie odnotowano pięć trzęsień ziemi o magnitudzie powyżej 7 w skali Richtera; najsilniejsze uderzyło w Mjanmę 28 marca. Ostatnie trzęsienie ziemi przekraczające magnitudę 8 w skali Richtera miało miejsce 12 sierpnia 2021 r. na Południowych Wyspach Sandwich.",
    qLabel: "Pytanie do SI:",
    qText: "Czy w 2025 r. planeta Ziemia zostanie dotknięta trzęsieniem ziemi o magnitudzie powyżej 8 w skali Richtera?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 65%",
    valid: "Prognoza się sprawdziła",
    source: "Źródło potwierdzenia"
  },
  s2: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Asteroidy stanowią potencjalne zagrożenie dla Ziemi. Ostatnie istotne zdarzenie uderzeniowe miało miejsce 15 lutego 2013 r., gdy po wejściu w atmosferę Ziemi ciało niebieskie eksplodowało nad rosyjskim Czelabińskiem, uszkadzając ok. 7000 budynków i raniąc ok. 1500 osób.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do 2030 r. asteroid uderzy w Ziemię, powodując ofiary i szkody materialne?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 5%"
  },
  s3: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Wpływ człowieka przyczynił się do ocieplenia atmosfery, oceanów i lądów, co skutkuje m.in. coraz częstszymi falami upałów. Rok 2024 był najcieplejszym w historii pomiarów — ok. 1,55 °C powyżej średniej przedindustrialnej.",
    qLabel: "Pytanie do SI:",
    qText: "Czy rok 2025 będzie najcieplejszym w historii?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 25%"
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  page: { title: "Прогнози штучного інтелекту для планети Земля" },
  cta: {
    p1: "Ви також можете запитати ШІ про своє майбутнє або про майбутнє інших людей, об’єктів, місць та подій",
    here: "ТУТ"
  },
  s1: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Станом на червень 2025 року у світі було зафіксовано п’ять землетрусів магнітудою понад 7 за шкалою Ріхтера; найсильніший стався у М’янмі 28 березня. Останній землетрус із магнітудою понад 8 за шкалою Ріхтера відбувся 12 серпня 2021 року на Південних Сандвічевих островах.",
    qLabel: "Питання до ШІ:",
    qText: "Чи зазнає планета Земля у 2025 році землетрусу з магнітудою понад 8 за шкалою Ріхтера?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Імовірність 65%",
    valid: "Прогноз справдився",
    source: "Джерело підтвердження"
  },
  s2: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Астероїди становлять потенційну загрозу для Землі. Остання значуща подія удару сталася 15 лютого 2013 року, коли після входження в атмосферу небесне тіло вибухнуло над російським містом Челябінськ, пошкодивши близько 7 000 будівель і травмувавши приблизно 1 500 людей.",
    qLabel: "Питання до ШІ:",
    qText: "До 2030 року чи вдарить по Землі астероїд, спричинивши жертви та матеріальні збитки?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Імовірність 5%"
  },
  s3: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Вплив людини сприяв потеплінню атмосфери, океанів і суходолу, що, зокрема, веде до все частіших екстремальних спеки. 2024 рік став найтеплішим в історії спостережень — приблизно на 1,55 °C вище доіндустріального середнього.",
    qLabel: "Питання до ШІ:",
    qText: "Чи буде 2025 рік найтеплішим за весь час спостережень?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Імовірність 25%"
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  page: { title: "Прогнозы искусственного интеллекта для планеты Земля" },
  cta: {
    p1: "Вы также можете спросить ИИ о своём будущем или о будущем других людей, объектов, мест и событий",
    here: "ЗДЕСЬ"
  },
  s1: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "К июню 2025 года в мире было зарегистрировано пять землетрясений магнитудой свыше 7 по шкале Рихтера; самое мощное произошло в Мьянме 28 марта. Последнее землетрясение магнитудой свыше 8 по шкале Рихтера случилось 12 августа 2021 года на Южных Сандвичевых островах.",
    qLabel: "Вопрос к ИИ:",
    qText: "В 2025 году планета Земля испытает землетрясение магнитудой свыше 8 по шкале Рихтера?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 65%",
    valid: "Прогноз сбылся",
    source: "Источник подтверждения"
  },
  s2: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Астероиды представляют потенциальную угрозу Земле. Последнее значимое событие произошло 15 февраля 2013 года, когда после входа в атмосферу небесное тело взорвалось над российским городом Челябинском, повредив около 7 000 зданий и ранив примерно 1 500 человек.",
    qLabel: "Вопрос к ИИ:",
    qText: "До 2030 года астероид столкнётся с Землёй, вызвав жертвы и материальный ущерб?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 5%"
  },
  s3: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Влияние человека способствовало потеплению атмосферы, океанов и суши, что приводит, в частности, к всё более частым экстремальным жарам. 2024 год стал самым тёплым за всю историю наблюдений — примерно на 1,55 °C выше доиндустриального среднего.",
    qLabel: "Вопрос к ИИ:",
    qText: "Станет ли 2025 год самым тёплым за всю историю наблюдений?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 25%"
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  page: { title: "Dünya Gezegeni için Yapay Zekâ Tahminleri" },
  cta: {
    p1: "YZ’ye kendi geleceğinizin veya diğer kişiler, nesneler, yerler ve olayların geleceğinin ne olacağını da sorabilirsiniz",
    here: "BURADA"
  },
  s1: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Haziran 2025’e kadar dünya genelinde Richter ölçeğinde 7’nin üzerindeki büyüklükte beş deprem kaydedildi; bunların en şiddetlisi 28 Mart’ta Myanmar’ı vurdu. Richter ölçeğinde 8’i aşan son deprem 12 Ağustos 2021’de Güney Sandwich Adaları’nda meydana geldi.",
    qLabel: "YZ’ye soru:",
    qText: "2025 yılı içinde Dünya gezegeni Richter ölçeğinde 8’i aşan bir depremle sarsılacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %65",
    valid: "Tahmin gerçekleşti",
    source: "Doğrulama kaynağı"
  },
  s2: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Asteroitler Dünya için potansiyel bir tehdit oluşturur. Son önemli çarpma olayı 15 Şubat 2013’te yaşandı; bir gök cismi Dünya atmosferine girdikten sonra Rusya’nın Çelyabinsk kenti üzerinde patladı, yaklaşık 7.000 binaya zarar verdi ve yaklaşık 1.500 kişiyi yaraladı.",
    qLabel: "YZ’ye soru:",
    qText: "2030’a kadar bir asteroit Dünya’ya çarparak can kaybına ve maddi hasara yol açacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %5"
  },
  s3: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "İnsan etkisi; atmosferin, okyanusların ve karaların ısınmasına katkıda bulunmuş; bunun sonuçları arasında giderek daha sık yaşanan aşırı sıcaklar yer alır. 2024 yılı, sanayi öncesi ortalamanın yaklaşık 1,55 °C üzerinde, kayıtların en sıcak yılı olarak kayda geçti.",
    qLabel: "YZ’ye soru:",
    qText: "2025, şimdiye kadarki en sıcak yıl olacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %25"
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  page: { title: "تنبؤات الذكاء الاصطناعي لكوكب الأرض" },
  cta: {
    p1: "يمكنك أيضًا سؤال الذكاء الاصطناعي عن مستقبلك أو مستقبل أشخاص وأشياء وأماكن وأحداث أخرى",
    here: "هنا"
  },
  s1: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "حتى يونيو 2025، سُجِّلت خمسة زلازل عالميًا بقوة تفوق 7 على مقياس ريختر، وكان أقواها ضرب ميانمار في 28 مارس. أما آخر زلزال تجاوز قوته 8 على مقياس ريختر فوقع في 12 أغسطس 2021 في جزر ساندويتش الجنوبية.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "هل ستتعرّض كوكب الأرض في عام 2025 لزلزال تتجاوز قوته 8 على مقياس ريختر؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 65%",
    valid: "تحقّق التنبؤ",
    source: "مصدر التأكيد"
  },
  s2: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "تشكل الكويكبات تهديدًا محتملاً لكوكب الأرض. وقع آخر حدث اصطدام كبير في 15 فبراير 2013 حين انفجر جرم سماوي فوق مدينة تشيليابنسك الروسية بعد دخوله الغلاف الجوي للأرض، ما ألحق أضرارًا بنحو 7000 مبنى وأصاب قرابة 1500 شخص.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول عام 2030، هل سيصطدم كويكب بالأرض مُسببًا خسائر بشرية ومادية؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 5%"
  },
  s3: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "أسهم التأثير البشري في احترار الغلاف الجوي والمحيطات واليابسة، ومن نتائجه تزايد موجات الحر الشديدة. سُجِّل عام 2024 كأدفأ عام على الإطلاق، بزيادة تقارب 1.55 درجة مئوية فوق المتوسط ما قبل الصناعي.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "هل سيكون عام 2025 الأدفأ على الإطلاق؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 25%"
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  page: { title: "पृथ्वी ग्रह के लिए कृत्रिम बुद्धिमत्ता पूर्वानुमान" },
  cta: {
    p1: "आप AI से अपने भविष्य या अन्य लोगों, वस्तुओं, स्थानों और घटनाओं के भविष्य के बारे में भी पूछ सकते हैं",
    here: "यहाँ"
  },
  s1: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "जून 2025 तक विश्वभर में रिक्टर पैमाने पर 7 से अधिक की तीव्रता वाले पाँच भूकंप दर्ज किए गए, जिनमें सबसे शक्तिशाली 28 मार्च को म्यांमार में आया। रिक्टर पैमाने पर 8 से अधिक का अंतिम भूकंप 12 अगस्त 2021 को दक्षिणी सैंडविच द्वीपसमूह में आया था।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 के दौरान पृथ्वी पर रिक्टर पैमाने पर 8 से अधिक तीव्रता वाला भूकंप आएगा?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 65%",
    valid: "पूर्वानुमान सही साबित हुआ",
    source: "पुष्टिकरण स्रोत"
  },
  s2: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "क्षुद्रग्रह पृथ्वी ग्रह के लिए संभावित खतरा पैदा करते हैं। अंतिम महत्वपूर्ण प्रभाव-घटना 15 फरवरी 2013 को हुई—जब एक खगोलीय पिंड पृथ्वी के वायुमंडल में प्रवेश करने के बाद रूस के चेल्याबिंस्क शहर के ऊपर फट गया, लगभग 7,000 इमारतों को नुकसान पहुँचा और लगभग 1,500 लोग घायल हुए।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2030 तक कोई क्षुद्रग्रह पृथ्वी से टकराकर जनहानि और भौतिक क्षति करेगा?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 5%"
  },
  s3: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "मानव प्रभाव ने वायुमंडल, महासागरों और स्थलभाग के ऊष्मीकरण में योगदान दिया है, जिसके परिणामस्वरूप चरम गर्मी की घटनाएँ अधिक बार हो रही हैं। वर्ष 2024 रिकॉर्ड पर सबसे गर्म रहा—पूर्व-औद्योगिक औसत से लगभग 1.55°C अधिक।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 अब तक का सबसे गर्म वर्ष होगा?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 25%"
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  page: { title: "地球的人工智能预测" },
  cta: {
    p1: "你还可以让 AI 预测你的未来，或他人、物体、地点与事件的未来",
    here: "这里"
  },
  s1: {
    forecast: "预测日期：17.06.2025.",
    lead: "截至 2025 年 6 月，全球已记录到 5 次里氏震级 7 级以上地震，其中最强的一次于 3 月 28 日袭击缅甸。上一次超过 8 级的地震发生在 2021 年 8 月 12 日，地点为南桑威奇群岛。",
    qLabel: "向 AI 提问：",
    qText: "在 2025 年期间，地球是否会遭遇一次里氏震级超过 8 级的地震？",
    aLabel: "AI 的回答：",
    aText: "是。概率 65%",
    valid: "预测成真",
    source: "确认来源"
  },
  s2: {
    forecast: "预测日期：17.06.2025.",
    lead: "小行星对地球构成潜在威胁。最近一次重大撞击事件发生在 2013 年 2 月 15 日，当时一颗天体进入地球大气层后在俄罗斯车里雅宾斯克上空爆炸，约 7,000 座建筑受损，约 1,500 人受伤。",
    qLabel: "向 AI 提问：",
    qText: "到 2030 年前，是否会有小行星撞击地球并造成伤亡与财产损失？",
    aLabel: "AI 的回答：",
    aText: "否。概率 5%"
  },
  s3: {
    forecast: "预测日期：17.06.2025.",
    lead: "人类活动导致大气、海洋与陆地变暖，其中包括日益频繁的极端高温。2024 年被记录为有记录以来最热的一年，较前工业化时期平均水平高约 1.55℃。",
    qLabel: "向 AI 提问：",
    qText: "2025 年会成为有记录以来最热的一年吗？",
    aLabel: "AI 的回答：",
    aText: "否。概率 25%"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  page: { title: "惑星・地球に関するAI予測" },
  cta: {
    p1: "AI に、あなた自身の将来や他者・物体・場所・出来事の将来についても質問できます",
    here: "こちら"
  },
  s1: {
    forecast: "予測日：17.06.2025.",
    lead: "2025年6月までに、世界ではリヒター規模7を超える地震が5件記録され、そのうち最も強かったものは3月28日にミャンマーを襲いました。リヒター規模8を超える最後の地震は2021年8月12日、サウスサンドウィッチ諸島で発生しました。",
    qLabel: "AI への質問：",
    qText: "2025年中に、地球はリヒター規模8を超える地震に見舞われますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 65%",
    valid: "予測は的中しました",
    source: "確認ソース"
  },
  s2: {
    forecast: "予測日：17.06.2025.",
    lead: "小惑星は地球に潜在的な脅威となり得ます。直近の大きな衝突事象は2013年2月15日、天体が地球大気に突入後、ロシアのチェリャビンスク上空で爆発し、約7,000棟の建物が損壊、約1,500人が負傷しました。",
    qLabel: "AI への質問：",
    qText: "2030年までに、死傷者や物的被害を伴う小惑星の地球衝突は起きますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 5%"
  },
  s3: {
    forecast: "予測日：17.06.2025.",
    lead: "人間の影響により大気・海洋・陸域の温暖化が進み、極端な高温の頻度が増すなどの影響が生じています。2024年は記録上最も暑い年となり、産業革命前の平均より約1.55℃高温でした。",
    qLabel: "AI への質問：",
    qText: "2025年は観測史上最も暑い年になりますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 25%"
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
  setTxtAny("planet-1-valid",         t.s1.valid);
  setTxtAny("planet-1-source",        t.s1.source);
  // Ako postoje -en/-sr parovi, prebaci vidljivost
  togglePair("planet-1-forecast-date", lang);
  togglePair("planet-1-source",        lang);

  // Sekcija 2
  setTxtAny("planet-2-forecast-date", t.s2.forecast);
  setTxtAny("planet-2-lead",          t.s2.lead);
  setTxtAny("planet-2-q-label",       t.s2.qLabel);
  setTxtAny("planet-2-q-text",        t.s2.qText);
  setTxtAny("planet-2-a-label",       t.s2.aLabel);
  setTxtAny("planet-2-a-text",        t.s2.aText);
  togglePair("planet-2-forecast-date", lang);

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

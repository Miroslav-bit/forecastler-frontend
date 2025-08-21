// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for the Economy and Industry" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Bitcoin first exceeded 100,000 U.S. dollars in December 2024. On June 15, 2025, its price stood at 105,595 dollars.",
      qLabel: "Question for AI:",
      qText: "Will Bitcoin surpass 120,000 dollars by the end of the year?",
      aLabel: "AI answer:",
      aText: "YES. Probability 95%",
      valid: "Forecast came true",
      source: "Confirmation source"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The poorest countries are largely in Sub-Saharan Africa. In 2021, 2.4 million children died from the consequences of malnutrition. In 2023, 281 million people faced hunger, and in 2024 a record 295 million.",
      qLabel: "Question for AI:",
      qText: "During 2025, will the number of people facing hunger worldwide exceed 300 million?",
      aLabel: "AI answer:",
      aText: "YES. Probability 65%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "In recent years, individual wealth creation has been driven mainly by financial investments and IT technologies. The number of U.S.-dollar billionaires totaled 2,640 in 2023 and 2,781 in 2024.",
      qLabel: "Question for AI:",
      qText: "In 2025, will there be more than 3,000 billionaires worldwide?",
      aLabel: "AI answer:",
      aText: "YES. Probability 99%",
      valid: "Forecast came true",
      source: "Confirmation source"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za ekonomiju i privredu" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Vrednost bitkoina prvi put je prešla 100.000 američkih dolara u decembru 2024. Dana 15.06.2025. vrednost bitkoina iznosila je 105.595 dolara.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do kraja godine vrednost bitkoina premašiti 120.000 dolara?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 95%",
      valid: "Prognoza se obistinila",
      source: "Izvor potvrde"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Najsiromašnije zemlje sveta uglavnom se nalaze u podsaharskoj Africi. Tokom 2021. godine od posledica neuhranjenosti umrlo je 2,4 miliona dece. Tokom 2023. godine 281 milion ljudi suočio se sa glađu, a 2024. godine rekordnih 295 miliona.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će tokom 2025. godine broj ljudi suočenih sa glađu u svetu premašiti 300 miliona?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 65%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Poslednjih godina pojedinci se najviše bogate kroz finansijska ulaganja i IT tehnologije. Broj milijardera (u američkim dolarima) iznosio je 2.640 u 2023, odnosno 2.781 u 2024. godini.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će 2025. godine u svetu biti više od 3.000 milijardera?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 99%",
      valid: "Prognoza se obistinila",
      source: "Izvor potvrde"
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  page: { title: "Pronósticos de Inteligencia Artificial para la Economía y la Industria" },
  cta: {
    p1: "También puedes preguntar a la IA sobre tu futuro o el de otras personas, objetos, lugares y eventos",
    here: "AQUÍ"
  },
  s1: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Bitcoin superó por primera vez los 100.000 dólares estadounidenses en diciembre de 2024. El 15 de junio de 2025, su precio era de 105.595 dólares.",
    qLabel: "Pregunta para la IA:",
    qText: "¿Superará Bitcoin los 120.000 dólares antes de que termine el año?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 95%",
    valid: "El pronóstico se cumplió",
    source: "Fuente de confirmación"
  },
  s2: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Los países más pobres se encuentran en gran medida en África subsahariana. En 2021, 2,4 millones de niños murieron por las consecuencias de la desnutrición. En 2023, 281 millones de personas enfrentaron hambre y en 2024 un récord de 295 millones.",
    qLabel: "Pregunta para la IA:",
    qText: "Durante 2025, ¿superará el número de personas que enfrentan hambre en el mundo los 300 millones?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 65%"
  },
  s3: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "En los últimos años, la creación de riqueza individual ha estado impulsada principalmente por inversiones financieras y tecnologías informáticas. El número de multimillonarios en dólares estadounidenses fue de 2.640 en 2023 y 2.781 en 2024.",
    qLabel: "Pregunta para la IA:",
    qText: "En 2025, ¿habrá más de 3.000 multimillonarios en el mundo?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 99%",
    valid: "El pronóstico se cumplió",
    source: "Fuente de confirmación"
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  page: { title: "Prévisions d’intelligence artificielle pour l’économie et l’industrie" },
  cta: {
    p1: "Vous pouvez aussi interroger l’IA sur votre avenir ou celui d’autres personnes, objets, lieux et événements",
    here: "ICI"
  },
  s1: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Le Bitcoin a dépassé pour la première fois 100 000 dollars américains en décembre 2024. Au 15 juin 2025, son prix s’élevait à 105 595 dollars.",
    qLabel: "Question pour l’IA :",
    qText: "Le Bitcoin dépassera-t-il 120 000 dollars d’ici la fin de l’année ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 95 %",
    valid: "La prévision s’est réalisée",
    source: "Source de confirmation"
  },
  s2: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Les pays les plus pauvres se situent en grande partie en Afrique subsaharienne. En 2021, 2,4 millions d’enfants sont morts des suites de la malnutrition. En 2023, 281 millions de personnes ont été confrontées à la faim et, en 2024, un record de 295 millions.",
    qLabel: "Question pour l’IA :",
    qText: "Au cours de 2025, le nombre de personnes confrontées à la faim dans le monde dépassera-t-il 300 millions ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 65 %"
  },
  s3: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Ces dernières années, la création de richesse individuelle a été principalement portée par les investissements financiers et les technologies informatiques. Le nombre de milliardaires en dollars américains était de 2 640 en 2023 et de 2 781 en 2024.",
    qLabel: "Question pour l’IA :",
    qText: "En 2025, y aura-t-il plus de 3 000 milliardaires dans le monde ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 99 %",
    valid: "La prévision s’est réalisée",
    source: "Source de confirmation"
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  page: { title: "KI-Prognosen zur Wirtschaft und Industrie" },
  cta: {
    p1: "Sie können die KI auch zu Ihrer Zukunft oder zur Zukunft anderer Menschen, Objekte, Orte und Ereignisse befragen",
    here: "HIER"
  },
  s1: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Bitcoin überschritt erstmals 100.000 US-Dollar im Dezember 2024. Am 15. Juni 2025 lag der Preis bei 105.595 US-Dollar.",
    qLabel: "Frage an die KI:",
    qText: "Wird Bitcoin bis Jahresende 120.000 US-Dollar überschreiten?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 95 %",
    valid: "Die Prognose traf ein",
    source: "Bestätigungsquelle"
  },
  s2: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Die ärmsten Länder liegen größtenteils in Subsahara-Afrika. 2021 starben 2,4 Millionen Kinder an den Folgen von Mangelernährung. 2023 waren 281 Millionen Menschen von Hunger betroffen, 2024 ein Rekordwert von 295 Millionen.",
    qLabel: "Frage an die KI:",
    qText: "Wird 2025 die Zahl der weltweit von Hunger betroffenen Menschen 300 Millionen überschreiten?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 65 %"
  },
  s3: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "In den letzten Jahren wurde die individuelle Vermögensbildung vor allem durch Finanzanlagen und IT-Technologien vorangetrieben. Die Zahl der US-Dollar-Milliardäre betrug 2.640 im Jahr 2023 und 2.781 im Jahr 2024.",
    qLabel: "Frage an die KI:",
    qText: "Wird es 2025 weltweit mehr als 3.000 Milliardäre geben?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 99 %",
    valid: "Die Prognose traf ein",
    source: "Bestätigungsquelle"
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  page: { title: "Previsões de IA para a Economia e a Indústria" },
  cta: {
    p1: "Você também pode perguntar à IA sobre o seu futuro ou o futuro de outras pessoas, objetos, lugares e eventos",
    here: "AQUI"
  },
  s1: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "O Bitcoin superou 100.000 dólares americanos pela primeira vez em dezembro de 2024. Em 15 de junho de 2025, seu preço estava em 105.595 dólares.",
    qLabel: "Pergunta para a IA:",
    qText: "O Bitcoin ultrapassará 120.000 dólares até o fim do ano?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 95%",
    valid: "A previsão se confirmou",
    source: "Fonte de confirmação"
  },
  s2: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Os países mais pobres estão em grande parte na África Subsaariana. Em 2021, 2,4 milhões de crianças morreram por consequências da desnutrição. Em 2023, 281 milhões de pessoas enfrentaram a fome e, em 2024, um recorde de 295 milhões.",
    qLabel: "Pergunta para a IA:",
    qText: "Durante 2025, o número de pessoas enfrentando a fome no mundo ultrapassará 300 milhões?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 65%"
  },
  s3: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Nos últimos anos, a criação de riqueza individual tem sido impulsionada principalmente por investimentos financeiros e tecnologias de TI. O número de bilionários em dólares totalizou 2.640 em 2023 e 2.781 em 2024.",
    qLabel: "Pergunta para a IA:",
    qText: "Em 2025, haverá mais de 3.000 bilionários no mundo?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 99%",
    valid: "A previsão se confirmou",
    source: "Fonte de confirmação"
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  page: { title: "Previsioni di IA per l’economia e l’industria" },
  cta: {
    p1: "Puoi anche chiedere all’IA del tuo futuro o del futuro di altre persone, oggetti, luoghi ed eventi",
    here: "QUI"
  },
  s1: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Bitcoin ha superato per la prima volta i 100.000 dollari statunitensi nel dicembre 2024. Il 15 giugno 2025 il suo prezzo era di 105.595 dollari.",
    qLabel: "Domanda per l’IA:",
    qText: "Supererà Bitcoin i 120.000 dollari entro la fine dell’anno?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 95%",
    valid: "La previsione si è avverata",
    source: "Fonte di conferma"
  },
  s2: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "I paesi più poveri si trovano in gran parte nell’Africa subsahariana. Nel 2021, 2,4 milioni di bambini sono morti per le conseguenze della malnutrizione. Nel 2023, 281 milioni di persone hanno affrontato la fame e nel 2024 un record di 295 milioni.",
    qLabel: "Domanda per l’IA:",
    qText: "Nel corso del 2025, il numero di persone che affrontano la fame nel mondo supererà i 300 milioni?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 65%"
  },
  s3: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Negli ultimi anni la creazione di ricchezza individuale è stata trainata soprattutto dagli investimenti finanziari e dalle tecnologie IT. Il numero di miliardari in dollari USA è stato di 2.640 nel 2023 e 2.781 nel 2024.",
    qLabel: "Domanda per l’IA:",
    qText: "Nel 2025 ci saranno più di 3.000 miliardari nel mondo?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 99%",
    valid: "La previsione si è avverata",
    source: "Fonte di conferma"
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  page: { title: "Prognozy SI dla gospodarki i przemysłu" },
  cta: {
    p1: "Możesz też zapytać SI o swoją przyszłość lub o przyszłość innych osób, obiektów, miejsc i wydarzeń",
    here: "TUTAJ"
  },
  s1: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Bitcoin po raz pierwszy przekroczył 100 000 dolarów amerykańskich w grudniu 2024 r. 15 czerwca 2025 r. jego cena wynosiła 105 595 dolarów.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do końca roku Bitcoin przekroczy 120 000 dolarów?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 95%",
    valid: "Prognoza się sprawdziła",
    source: "Źródło potwierdzenia"
  },
  s2: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Najbiedniejsze państwa leżą w dużej mierze w Afryce Subsaharyjskiej. W 2021 r. z powodu niedożywienia zmarło 2,4 mln dzieci. W 2023 r. 281 mln osób mierzyło się z głodem, a w 2024 r. rekordowe 295 mln.",
    qLabel: "Pytanie do SI:",
    qText: "Czy w 2025 r. liczba ludzi doświadczających głodu na świecie przekroczy 300 mln?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 65%"
  },
  s3: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "W ostatnich latach tworzenie majątku indywidualnego napędzały głównie inwestycje finansowe i technologie IT. Liczba miliarderów w dolarach amerykańskich wyniosła 2 640 w 2023 r. i 2 781 w 2024 r.",
    qLabel: "Pytanie do SI:",
    qText: "Czy w 2025 r. będzie na świecie ponad 3 000 miliarderów?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 99%",
    valid: "Prognoza się sprawdziła",
    source: "Źródło potwierdzenia"
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  page: { title: "Прогнози ШІ щодо економіки та промисловості" },
  cta: {
    p1: "Ви також можете запитати ШІ про своє майбутнє або про майбутнє інших людей, об’єктів, місць та подій",
    here: "ТУТ"
  },
  s1: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Bitcoin уперше перевищив 100 000 доларів США у грудні 2024 року. 15 червня 2025 року його ціна становила 105 595 доларів.",
    qLabel: "Питання до ШІ:",
    qText: "Чи перевищить Bitcoin 120 000 доларів до кінця року?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Ймовірність 95%",
    valid: "Прогноз справдився",
    source: "Джерело підтвердження"
  },
  s2: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Найбідніші країни здебільшого розташовані в регіоні на південь від Сахари. У 2021 році від наслідків недоїдання померло 2,4 млн дітей. У 2023 році 281 млн людей стикалися з голодом, а у 2024 році — рекордні 295 млн.",
    qLabel: "Питання до ШІ:",
    qText: "Протягом 2025 року чи перевищить кількість людей, що стикаються з голодом у світі, 300 млн?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Ймовірність 65%"
  },
  s3: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Останніми роками зростання індивідуальних статків головно забезпечували фінансові інвестиції та ІТ-технології. Кількість мільярдерів у доларах США становила 2 640 у 2023 році та 2 781 у 2024 році.",
    qLabel: "Питання до ШІ:",
    qText: "У 2025 році чи буде у світі понад 3 000 мільярдерів?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Ймовірність 99%",
    valid: "Прогноз справдився",
    source: "Джерело підтвердження"
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  page: { title: "Прогнозы ИИ по экономике и промышленности" },
  cta: {
    p1: "Вы также можете спросить ИИ о своём будущем или о будущем других людей, объектов, мест и событий",
    here: "ЗДЕСЬ"
  },
  s1: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Биткоин впервые превысил 100 000 долларов США в декабре 2024 года. 15 июня 2025 года его цена составляла 105 595 долларов.",
    qLabel: "Вопрос к ИИ:",
    qText: "Превысит ли биткоин 120 000 долларов к концу года?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 95 %",
    valid: "Прогноз сбылся",
    source: "Источник подтверждения"
  },
  s2: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Самые бедные страны в основном расположены в регионе к югу от Сахары. В 2021 году от последствий недоедания умерло 2,4 млн детей. В 2023 году 281 млн человек сталкивались с голодом, а в 2024 году — рекордные 295 млн.",
    qLabel: "Вопрос к ИИ:",
    qText: "В течение 2025 года число людей, сталкивающихся с голодом в мире, превысит 300 млн?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 65 %"
  },
  s3: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "В последние годы рост индивидуального состояния в основном обеспечивался финансовыми инвестициями и ИТ-технологиями. Число долларовых миллиардеров составило 2 640 в 2023 году и 2 781 в 2024 году.",
    qLabel: "Вопрос к ИИ:",
    qText: "В 2025 году будет ли в мире более 3 000 миллиардеров?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 99 %",
    valid: "Прогноз сбылся",
    source: "Источник подтверждения"
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  page: { title: "Ekonomi ve Sanayi için Yapay Zekâ Tahminleri" },
  cta: {
    p1: "YZ’ye kendi geleceğinizin veya diğer kişiler, nesneler, yerler ve olayların geleceğinin ne olacağını da sorabilirsiniz",
    here: "BURADA"
  },
  s1: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Bitcoin Aralık 2024’te ilk kez 100.000 ABD dolarını aştı. 15 Haziran 2025’te fiyatı 105.595 dolardı.",
    qLabel: "YZ’ye soru:",
    qText: "Yıl sonuna kadar Bitcoin 120.000 doları aşacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %95",
    valid: "Tahmin gerçekleşti",
    source: "Doğrulama kaynağı"
  },
  s2: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "En yoksul ülkeler büyük ölçüde Sahra Altı Afrika’dadır. 2021’de 2,4 milyon çocuk yetersiz beslenme nedeniyle hayatını kaybetti. 2023’te 281 milyon kişi açlıkla karşı karşıyaydı; 2024’te rekor 295 milyon.",
    qLabel: "YZ’ye soru:",
    qText: "2025 boyunca dünya genelinde açlıkla karşı karşıya kalanların sayısı 300 milyonu aşacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %65"
  },
  s3: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Son yıllarda bireysel servet artışı ağırlıkla finansal yatırımlar ve BT teknolojileri tarafından yönlendirildi. ABD doları milyarderlerinin sayısı 2023’te 2.640, 2024’te 2.781 oldu.",
    qLabel: "YZ’ye soru:",
    qText: "2025’te dünya çapında 3.000’den fazla milyarder olacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %99",
    valid: "Tahmin gerçekleşti",
    source: "Doğrulama kaynağı"
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  page: { title: "تنبؤات الذكاء الاصطناعي للاقتصاد والصناعة" },
  cta: {
    p1: "يمكنك أيضًا سؤال الذكاء الاصطناعي عن مستقبلك أو مستقبل أشخاص وأشياء وأماكن وأحداث أخرى",
    here: "هنا"
  },
  s1: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "تجاوزت عملة البيتكوين 100,000 دولار أمريكي لأول مرة في ديسمبر 2024. وفي 15 يونيو 2025 بلغ سعرها 105,595 دولارًا.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "هل ستتجاوز البيتكوين 120,000 دولارًا بحلول نهاية العام؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 95%",
    valid: "تحقّق التنبؤ",
    source: "مصدر التأكيد"
  },
  s2: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "تقع الدول الأشد فقرًا إلى حدٍ كبير في إفريقيا جنوب الصحراء. في عام 2021 تُوفي 2.4 مليون طفل بسبب آثار سوء التغذية. في عام 2023 واجه 281 مليون شخص الجوع، وفي 2024 سُجِّل رقم قياسي بلغ 295 مليونًا.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "خلال عام 2025، هل سيتجاوز عدد من يواجهون الجوع عالميًا 300 مليون؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 65%"
  },
  s3: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "في السنوات الأخيرة، كان تكوين الثروة الفردية مدفوعًا أساسًا بالاستثمارات المالية وتقنيات تكنولوجيا المعلومات. بلغ عدد أصحاب المليارات بالدولار الأمريكي 2,640 في عام 2023 و2,781 في عام 2024.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "في عام 2025، هل سيكون هناك أكثر من 3,000 ملياردير على مستوى العالم؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 99%",
    valid: "تحقّق التنبؤ",
    source: "مصدر التأكيد"
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  page: { title: "अर्थव्यवस्था और उद्योग के लिए कृत्रिम बुद्धिमत्ता पूर्वानुमान" },
  cta: {
    p1: "आप AI से अपने भविष्य या अन्य लोगों, वस्तुओं, स्थानों और घटनाओं के भविष्य के बारे में भी पूछ सकते हैं",
    here: "यहाँ"
  },
  s1: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "बिटकॉइन ने दिसंबर 2024 में पहली बार 100,000 अमेरिकी डॉलर का आँकड़ा पार किया। 15 जून 2025 को इसकी कीमत 105,595 डॉलर थी।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या वर्ष के अंत तक बिटकॉइन 120,000 डॉलर से ऊपर जाएगा?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 95%",
    valid: "पूर्वानुमान सही साबित हुआ",
    source: "पुष्टिकरण स्रोत"
  },
  s2: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "सबसे गरीब देश बड़े पैमाने पर उप-सहारा अफ्रीका में हैं। 2021 में कुपोषण के कारण 24 लाख बच्चों की मृत्यु हुई। 2023 में 281 मिलियन लोग भूख का सामना कर रहे थे, और 2024 में यह संख्या रिकॉर्ड 295 मिलियन रही।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 के दौरान वैश्विक स्तर पर भूख का सामना करने वाले लोगों की संख्या 300 मिलियन से अधिक हो जाएगी?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 65%"
  },
  s3: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "हाल के वर्षों में व्यक्तिगत संपत्ति-निर्माण मुख्यतः वित्तीय निवेश और आईटी तकनीकों से प्रेरित रहा है। यूएस-डॉलर अरबपतियों की संख्या 2023 में 2,640 और 2024 में 2,781 थी।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 में विश्वभर में 3,000 से अधिक अरबपति होंगे?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 99%",
    valid: "पूर्वानुमान सही साबित हुआ",
    source: "पुष्टिकरण स्रोत"
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  page: { title: "关于经济与产业的人工智能预测" },
  cta: {
    p1: "你还可以让 AI 预测你的未来，或他人、物体、地点与事件的未来",
    here: "这里"
  },
  s1: {
    forecast: "预测日期：17.06.2025.",
    lead: "比特币于 2024 年 12 月首次突破 100,000 美元。到 2025 年 6 月 15 日，其价格为 105,595 美元。",
    qLabel: "向 AI 提问：",
    qText: "到今年年底，比特币会突破 120,000 美元吗？",
    aLabel: "AI 的回答：",
    aText: "是。概率 95%",
    valid: "预测成真",
    source: "确认来源"
  },
  s2: {
    forecast: "预测日期：17.06.2025.",
    lead: "最贫困的国家主要位于撒哈拉以南非洲。2021 年有 240 万名儿童死于营养不良后果。2023 年有 2.81 亿人面临饥饿，2024 年创纪录地达到 2.95 亿。",
    qLabel: "向 AI 提问：",
    qText: "在 2025 年期间，全球面临饥饿的人数会超过 3 亿吗？",
    aLabel: "AI 的回答：",
    aText: "是。概率 65%"
  },
  s3: {
    forecast: "预测日期：17.06.2025.",
    lead: "近年来，个人财富的增长主要由金融投资和 IT 技术驱动。以美元计的亿万富豪人数在 2023 年为 2,640 人，在 2024 年为 2,781 人。",
    qLabel: "向 AI 提问：",
    qText: "2025 年全球亿万富豪是否会超过 3,000 人？",
    aLabel: "AI 的回答：",
    aText: "是。概率 99%",
    valid: "预测成真",
    source: "确认来源"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  page: { title: "経済・産業に関するAI予測" },
  cta: {
    p1: "AI に、あなた自身の将来や他者・物体・場所・出来事の将来についても質問できます",
    here: "こちら"
  },
  s1: {
    forecast: "予測日：17.06.2025.",
    lead: "ビットコインは 2024 年 12 月に初めて 10 万米ドルを超えた。2025 年 6 月 15 日時点の価格は 105,595 米ドルだった。",
    qLabel: "AI への質問：",
    qText: "年末までにビットコインは 120,000 米ドルを上回りますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 95%",
    valid: "予測は的中しました",
    source: "確認ソース"
  },
  s2: {
    forecast: "予測日：17.06.2025.",
    lead: "最も貧しい国々は主にサハラ以南のアフリカに集中している。2021 年には栄養不良の結果、240 万人の子どもが死亡した。2023 年には 2.81 億人、2024 年には過去最多の 2.95 億人が飢餓に直面した。",
    qLabel: "AI への質問：",
    qText: "2025 年の間に、飢餓に直面する人は世界で 3 億人を超えますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 65%"
  },
  s3: {
    forecast: "予測日：17.06.2025.",
    lead: "近年、個人の富の形成は主に金融投資と IT 技術によって牽引されている。米ドル建てのビリオネアは 2023 年に 2,640 人、2024 年に 2,781 人だった。",
    qLabel: "AI への質問：",
    qText: "2025 年には世界で 3,000 人を超えるビリオネアがいますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 99%",
    valid: "予測は的中しました",
    source: "確認ソース"
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
  setTxtAny("planet-3-valid",         t.s3.valid);
  setTxtAny("planet-3-source",        t.s3.source);
  togglePair("planet-3-forecast-date", lang);
  togglePair("planet-3-source",        lang);


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

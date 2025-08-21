// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Human Life and Health" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "COVID-19 emerged in late 2019 in Wuhan, China; the causative agent is the SARS-CoV-2 coronavirus. The pandemic lasted from January 30, 2020, to May 5, 2023. By 2025, more than 7 million confirmed deaths had been recorded. The virus continues to circulate with occasional waves and new variants and subvariants.",
      qLabel: "Question for AI:",
      qText: "Will a new COVID-19 pandemic be declared by the end of 2025?",
      aLabel: "AI answer:",
      aText: "NO. Probability 5%"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "One quarter of the world’s population lacks safely managed access to drinking water. Climate change and the melting of glaciers (“water towers”) could threaten the drinking-water supply for about 2 billion people. In addition, pollution and other human activities contribute to shrinking supplies of potable water.",
      qLabel: "Question for AI:",
      qText: "By 2050, will half of the world’s population be left without access to drinking water?",
      aLabel: "AI answer:",
      aText: "NO. Probability 10%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Air pollution is one of the greatest health risks to humanity, responsible for around 9 million deaths globally each year. The most polluted regions include Sub-Saharan Africa and South and Southeast Asia. Industrial impacts and deforestation contribute to a reduction of oxygen in the atmosphere.",
      qLabel: "Question for AI:",
      qText: "By 2050, will there be an oxygen shortage in Earth’s atmosphere?",
      aLabel: "AI answer:",
      aText: "NO. Probability 1%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za život i zdravlje čovečanstva" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "COVID-19 pojavio se krajem 2019. godine u Vuhanu (Kina), a uzročnik je koronavirus SARS-CoV-2. Pandemija je trajala od 30.01.2020. do 05.05.2023. Do 2025. godine zabeleženo je više od 7 miliona potvrđenih smrtnih slučajeva. Virus i dalje cirkuliše uz povremene talase i nove varijante i podvarijante.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do kraja 2025. godine biti proglašena nova pandemija COVID-19?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 5%"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Četvrtina svetske populacije nema bezbedno obezbeđen pristup pijaćoj vodi. Klimatske promene i topljenje glečera („vodnih tornjeva“) mogu ugroziti snabdevanje pitkom vodom za oko 2 milijarde ljudi. Pored toga, zagađenje i druge ljudske aktivnosti doprinose smanjenju raspoložive pijaće vode.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do 2050. godine polovina svetskog stanovništva ostati bez pristupa pijaćoj vodi?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 10%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Zagađenje vazduha jedan je od najvećih zdravstvenih rizika za čovečanstvo i dovodi do oko 9 miliona smrtnih slučajeva godišnje u svetu. Najzagađenija područja nalaze se u podsaharskoj Africi te južnoj i jugoistočnoj Aziji. Industrijski uticaji i seča šuma doprinose smanjenju kiseonika u atmosferi.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do 2050. godine doći do nestašice kiseonika u Zemljinoj atmosferi?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 1%"
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  page: { title: "Pronósticos de Inteligencia Artificial para la Vida y la Salud Humanas" },
  cta: {
    p1: "También puedes preguntar a la IA sobre tu futuro o el de otras personas, objetos, lugares y eventos",
    here: "AQUÍ"
  },
  s1: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "La COVID-19 surgió a finales de 2019 en Wuhan (China); el agente causante es el coronavirus SARS-CoV-2. La pandemia duró del 30 de enero de 2020 al 5 de mayo de 2023. Para 2025 se habían registrado más de 7 millones de muertes confirmadas. El virus sigue circulando con oleadas ocasionales y con nuevas variantes y subvariantes.",
    qLabel: "Pregunta para la IA:",
    qText: "¿Se declarará una nueva pandemia de COVID-19 antes de finales de 2025?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 5%"
  },
  s2: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Una cuarta parte de la población mundial carece de acceso gestionado de forma segura al agua potable. El cambio climático y el derretimiento de los glaciares (“torres de agua”) podrían amenazar el suministro de agua potable de unas 2.000 millones de personas. Además, la contaminación y otras actividades humanas contribuyen a la reducción de las reservas de agua apta para consumo.",
    qLabel: "Pregunta para la IA:",
    qText: "¿Para 2050, la mitad de la población mundial se quedará sin acceso a agua potable?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 10%"
  },
  s3: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "La contaminación del aire es uno de los mayores riesgos para la salud de la humanidad y causa alrededor de 9 millones de muertes anuales en todo el mundo. Entre las regiones más contaminadas están el África subsahariana y el sur y sudeste de Asia. Los impactos industriales y la deforestación contribuyen a la reducción del oxígeno en la atmósfera.",
    qLabel: "Pregunta para la IA:",
    qText: "¿Para 2050 habrá escasez de oxígeno en la atmósfera terrestre?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 1%"
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  page: { title: "Prévisions d’intelligence artificielle pour la vie et la santé humaines" },
  cta: {
    p1: "Vous pouvez aussi interroger l’IA sur votre avenir ou celui d’autres personnes, objets, lieux et événements",
    here: "ICI"
  },
  s1: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "La COVID-19 est apparue fin 2019 à Wuhan (Chine) ; l’agent causal est le coronavirus SARS-CoV-2. La pandémie a duré du 30 janvier 2020 au 5 mai 2023. D’ici 2025, plus de 7 millions de décès confirmés avaient été enregistrés. Le virus continue de circuler avec des vagues occasionnelles et de nouveaux variants et sous-variants.",
    qLabel: "Question pour l’IA :",
    qText: "Une nouvelle pandémie de COVID-19 sera-t-elle déclarée d’ici fin 2025 ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 5 %"
  },
  s2: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Un quart de la population mondiale n’a pas d’accès géré en toute sécurité à l’eau potable. Le changement climatique et la fonte des glaciers (« tours d’eau ») pourraient menacer l’approvisionnement en eau potable d’environ 2 milliards de personnes. De plus, la pollution et d’autres activités humaines réduisent les réserves d’eau potable.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici 2050, la moitié de la population mondiale sera-t-elle privée d’accès à l’eau potable ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 10 %"
  },
  s3: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "La pollution de l’air est l’un des plus grands risques sanitaires pour l’humanité, responsable d’environ 9 millions de décès par an dans le monde. Les régions les plus polluées comprennent l’Afrique subsaharienne ainsi que l’Asie du Sud et du Sud-Est. Les impacts industriels et la déforestation contribuent à une diminution de l’oxygène dans l’atmosphère.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici 2050, y aura-t-il une pénurie d’oxygène dans l’atmosphère terrestre ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 1 %"
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  page: { title: "KI-Prognosen zu menschlichem Leben und Gesundheit" },
  cta: {
    p1: "Sie können die KI auch zu Ihrer Zukunft oder zur Zukunft anderer Menschen, Objekte, Orte und Ereignisse befragen",
    here: "HIER"
  },
  s1: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "COVID-19 trat Ende 2019 in Wuhan (China) auf; der Erreger ist das Coronavirus SARS-CoV-2. Die Pandemie dauerte vom 30. Januar 2020 bis zum 5. Mai 2023. Bis 2025 wurden mehr als 7 Millionen bestätigte Todesfälle verzeichnet. Das Virus zirkuliert weiterhin mit gelegentlichen Wellen sowie neuen Varianten und Subvarianten.",
    qLabel: "Frage an die KI:",
    qText: "Wird bis Ende 2025 eine neue COVID-19-Pandemie ausgerufen?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 5 %"
  },
  s2: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Ein Viertel der Weltbevölkerung hat keinen sicher verwalteten Zugang zu Trinkwasser. Klimawandel und das Schmelzen von Gletschern („Wassertürme“) könnten die Trinkwasserversorgung von rund 2 Milliarden Menschen gefährden. Zudem tragen Verschmutzung und andere menschliche Aktivitäten zu schrumpfenden Trinkwasservorräten bei.",
    qLabel: "Frage an die KI:",
    qText: "Wird bis 2050 die Hälfte der Weltbevölkerung keinen Zugang zu Trinkwasser haben?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 10 %"
  },
  s3: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Luftverschmutzung gehört zu den größten Gesundheitsrisiken der Menschheit und ist weltweit für rund 9 Millionen Todesfälle pro Jahr verantwortlich. Zu den am stärksten belasteten Regionen zählen Subsahara-Afrika sowie Süd- und Südostasien. Industrielle Einflüsse und Entwaldung tragen zu einer Verringerung des Sauerstoffs in der Atmosphäre bei.",
    qLabel: "Frage an die KI:",
    qText: "Wird es bis 2050 einen Sauerstoffmangel in der Erdatmosphäre geben?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 1 %"
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  page: { title: "Previsões de IA para a Vida e a Saúde Humanas" },
  cta: {
    p1: "Você também pode perguntar à IA sobre o seu futuro ou o futuro de outras pessoas, objetos, lugares e eventos",
    here: "AQUI"
  },
  s1: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "A COVID-19 surgiu no fim de 2019 em Wuhan, China; o agente causador é o coronavírus SARS-CoV-2. A pandemia durou de 30 de janeiro de 2020 a 5 de maio de 2023. Até 2025, mais de 7 milhões de mortes confirmadas haviam sido registradas. O vírus continua circulando com ondas ocasionais e novas variantes e subvariantes.",
    qLabel: "Pergunta para a IA:",
    qText: "Até o fim de 2025 será declarada uma nova pandemia de COVID-19?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 5%"
  },
  s2: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Um quarto da população mundial não possui acesso gerido com segurança à água potável. As mudanças climáticas e o derretimento de geleiras (“torres de água”) podem ameaçar o abastecimento para cerca de 2 bilhões de pessoas. Além disso, a poluição e outras atividades humanas contribuem para a redução das reservas de água potável.",
    qLabel: "Pergunta para a IA:",
    qText: "Até 2050, metade da população mundial ficará sem acesso à água potável?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 10%"
  },
  s3: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "A poluição do ar é um dos maiores riscos à saúde da humanidade, responsável por cerca de 9 milhões de mortes anuais no mundo. As regiões mais poluídas incluem a África Subsaariana e o Sul e Sudeste Asiático. Impactos industriais e o desmatamento contribuem para a redução do oxigênio na atmosfera.",
    qLabel: "Pergunta para a IA:",
    qText: "Até 2050, haverá escassez de oxigênio na atmosfera terrestre?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 1%"
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  page: { title: "Previsioni di IA per la vita e la salute umane" },
  cta: {
    p1: "Puoi anche chiedere all’IA del tuo futuro o del futuro di altre persone, oggetti, luoghi ed eventi",
    here: "QUI"
  },
  s1: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "La COVID-19 è emersa alla fine del 2019 a Wuhan, in Cina; l’agente causale è il coronavirus SARS-CoV-2. La pandemia è durata dal 30 gennaio 2020 al 5 maggio 2023. Entro il 2025 si erano registrati oltre 7 milioni di decessi confermati. Il virus continua a circolare con ondate occasionali e nuove varianti e sottovarianti.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro la fine del 2025 sarà dichiarata una nuova pandemia di COVID-19?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 5%"
  },
  s2: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Un quarto della popolazione mondiale non ha un accesso gestito in modo sicuro all’acqua potabile. Il cambiamento climatico e lo scioglimento dei ghiacciai (“torri d’acqua”) potrebbero minacciare l’approvvigionamento per circa 2 miliardi di persone. Inoltre, l’inquinamento e altre attività umane contribuiscono alla riduzione delle riserve di acqua potabile.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro il 2050, metà della popolazione mondiale resterà senza accesso all’acqua potabile?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 10%"
  },
  s3: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "L’inquinamento atmosferico è uno dei maggiori rischi per la salute dell’umanità ed è responsabile di circa 9 milioni di decessi globali ogni anno. Le regioni più inquinate comprendono l’Africa subsahariana e l’Asia meridionale e sud-orientale. Impatti industriali e deforestazione contribuiscono a una riduzione dell’ossigeno in atmosfera.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro il 2050 ci sarà una carenza di ossigeno nell’atmosfera terrestre?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 1%"
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  page: { title: "Prognozy SI dotyczące życia i zdrowia człowieka" },
  cta: {
    p1: "Możesz też zapytać SI o swoją przyszłość lub o przyszłość innych osób, obiektów, miejsc i wydarzeń",
    here: "TUTAJ"
  },
  s1: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "COVID-19 pojawił się pod koniec 2019 r. w Wuhan w Chinach; czynnikiem sprawczym jest koronawirus SARS-CoV-2. Pandemia trwała od 30 stycznia 2020 r. do 5 maja 2023 r. Do 2025 r. odnotowano ponad 7 milionów potwierdzonych zgonów. Wirus nadal krąży, powodując sporadyczne fale i pojawianie się nowych wariantów i subwariantów.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do końca 2025 r. zostanie ogłoszona nowa pandemia COVID-19?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 5%"
  },
  s2: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Jedna czwarta światowej populacji nie ma bezpiecznie zarządzanego dostępu do wody pitnej. Zmiany klimatu i topnienie lodowców („wieże wodne”) mogą zagrozić dostawom wody pitnej dla ok. 2 miliardów ludzi. Ponadto zanieczyszczenie i inne działania człowieka przyczyniają się do kurczenia zasobów wody zdatnej do picia.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do 2050 r. połowa ludności świata pozostanie bez dostępu do wody pitnej?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 10%"
  },
  s3: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Zanieczyszczenie powietrza jest jednym z największych zagrożeń dla zdrowia ludzi, odpowiadając co roku za około 9 milionów zgonów na świecie. Do najbardziej zanieczyszczonych regionów należą Afryka Subsaharyjska oraz Azja Południowa i Południowo-Wschodnia. Oddziaływanie przemysłu i wylesianie przyczyniają się do zmniejszania ilości tlenu w atmosferze.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do 2050 r. w atmosferze Ziemi zabraknie tlenu?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 1%"
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  page: { title: "Прогнози ШІ щодо життя та здоров’я людини" },
  cta: {
    p1: "Ви також можете запитати ШІ про своє майбутнє або про майбутнє інших людей, об’єктів, місць та подій",
    here: "ТУТ"
  },
  s1: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "COVID-19 з’явився наприкінці 2019 року в Ухані, Китай; збудник — коронавірус SARS-CoV-2. Пандемія тривала з 30 січня 2020 року до 5 травня 2023 року. Станом на 2025 рік було зафіксовано понад 7 мільйонів підтверджених смертей. Вірус і далі циркулює з поодинокими хвилями та появою нових варіантів і субваріантів.",
    qLabel: "Питання до ШІ:",
    qText: "Чи буде до кінця 2025 року оголошено нову пандемію COVID-19?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Ймовірність 5%"
  },
  s2: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Чверть населення світу не має безпечно керованого доступу до питної води. Зміна клімату та танення льодовиків («водяні вежі») можуть загрожувати водопостачанню приблизно 2 мільярдів людей. Крім того, забруднення та інша діяльність людини сприяють скороченню запасів придатної для пиття води.",
    qLabel: "Питання до ШІ:",
    qText: "Чи залишиться до 2050 року половина населення світу без доступу до питної води?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Ймовірність 10%"
  },
  s3: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Забруднення повітря є одним із найбільших ризиків для здоров’я людства, щорічно спричиняючи близько 9 мільйонів смертей у світі. До найзабрудненіших регіонів належать країни на південь від Сахари та Південна і Південно-Східна Азія. Промислові впливи та вирубка лісів сприяють зменшенню вмісту кисню в атмосфері.",
    qLabel: "Питання до ШІ:",
    qText: "Чи буде до 2050 року дефіцит кисню в атмосфері Землі?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Ймовірність 1%"
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  page: { title: "Прогнозы ИИ для жизни и здоровья человека" },
  cta: {
    p1: "Вы также можете спросить ИИ о своём будущем или о будущем других людей, объектов, мест и событий",
    here: "ЗДЕСЬ"
  },
  s1: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "COVID-19 возник в конце 2019 года в Ухане (Китай); возбудитель — коронавирус SARS-CoV-2. Пандемия продолжалась с 30 января 2020 года по 5 мая 2023 года. К 2025 году было зарегистрировано более 7 миллионов подтверждённых смертей. Вирус продолжает циркулировать с периодическими волнами, а также появляются новые варианты и субварианты.",
    qLabel: "Вопрос к ИИ:",
    qText: "Будет ли до конца 2025 года объявлена новая пандемия COVID-19?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 5%"
  },
  s2: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Четверть населения мира не имеет безопасно управляемого доступа к питьевой воде. Изменение климата и таяние ледников («водные башни») могут угрожать водоснабжению примерно 2 миллиардов человек. Кроме того, загрязнение и другая деятельность человека способствуют сокращению запасов питьевой воды.",
    qLabel: "Вопрос к ИИ:",
    qText: "К 2050 году половина населения мира останется без доступа к питьевой воде?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 10%"
  },
  s3: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Загрязнение воздуха — один из величайших рисков для здоровья человечества; ежегодно оно приводит примерно к 9 миллионам смертей во всём мире. К наиболее загрязнённым регионам относятся страны к югу от Сахары, а также Южная и Юго-Восточная Азия. Промышленное воздействие и вырубка лесов способствуют снижению содержания кислорода в атмосфере.",
    qLabel: "Вопрос к ИИ:",
    qText: "К 2050 году возникнет ли дефицит кислорода в атмосфере Земли?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 1%"
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  page: { title: "İnsan Yaşamı ve Sağlığı için Yapay Zekâ Tahminleri" },
  cta: {
    p1: "YZ’ye kendi geleceğinizin veya diğer kişiler, nesneler, yerler ve olayların geleceğinin ne olacağını da sorabilirsiniz",
    here: "BURADA"
  },
  s1: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "COVID-19, 2019’un sonlarında Çin’in Wuhan kentinde ortaya çıktı; etken SARS-CoV-2 koronavirüsüdür. Pandemi 30 Ocak 2020’den 5 Mayıs 2023’e kadar sürdü. 2025’e gelindiğinde 7 milyondan fazla doğrulanmış ölüm kaydedilmişti. Virüs, ara sıra dalgalar ve yeni varyantlar/alt varyantlarla dolaşımını sürdürüyor.",
    qLabel: "YZ’ye soru:",
    qText: "2025’in sonuna kadar yeni bir COVID-19 pandemisi ilan edilecek mi?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %5"
  },
  s2: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Dünya nüfusunun dörtte birinin güvenli şekilde yönetilen içme suyuna erişimi yoktur. İklim değişikliği ve buzulların erimesi (“su kuleleri”) yaklaşık 2 milyar kişinin içme suyu tedarikini tehdit edebilir. Ayrıca kirlilik ve diğer insan faaliyetleri, içilebilir su kaynaklarının azalmasına katkıda bulunur.",
    qLabel: "YZ’ye soru:",
    qText: "2050’ye kadar dünya nüfusunun yarısı içme suyuna erişemeyecek mi?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %10"
  },
  s3: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Hava kirliliği, insanlık için en büyük sağlık risklerinden biridir ve dünya çapında her yıl yaklaşık 9 milyon ölüme yol açar. En kirli bölgeler arasında Sahra Altı Afrika ile Güney ve Güneydoğu Asya bulunur. Endüstriyel etkiler ve ormansızlaşma, atmosferdeki oksijenin azalmasına katkıda bulunur.",
    qLabel: "YZ’ye soru:",
    qText: "2050’ye kadar Dünya atmosferinde oksijen kıtlığı olacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %1"
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  page: { title: "تنبؤات الذكاء الاصطناعي لحياة الإنسان وصحته" },
  cta: {
    p1: "يمكنك أيضًا سؤال الذكاء الاصطناعي عن مستقبلك أو مستقبل أشخاص وأشياء وأماكن وأحداث أخرى",
    here: "هنا"
  },
  s1: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "ظهر مرض كوفيد-19 في أواخر عام 2019 في ووهان بالصين؛ والعامل المسبّب هو فيروس كورونا SARS-CoV-2. استمرت الجائحة من 30 يناير 2020 حتى 5 مايو 2023. وبحلول 2025 سُجّل أكثر من 7 ملايين حالة وفاة مؤكدة. يواصل الفيروس الانتشار مع موجات متقطعة وظهور متحوّرات وسلالات فرعية جديدة.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "هل سيُعلَن عن جائحة كوفيد-19 جديدة قبل نهاية 2025؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 5%"
  },
  s2: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "ربع سكان العالم يفتقرون إلى وصول مُدار بأمان إلى مياه الشرب. تغيّر المناخ وذوبان الأنهار الجليدية («أبراج الماء») قد يهددان إمدادات مياه الشرب لنحو ملياري إنسان. إضافةً إلى ذلك، تسهم الملوّثات وأنشطة بشرية أخرى في تقلّص موارد المياه الصالحة للشرب.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول 2050، هل ستحرم نصفُ سكان العالم من الوصول إلى مياه الشرب؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 10%"
  },
  s3: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "تُعدّ تلوّثات الهواء من أكبر مخاطر الصحة على البشرية، إذ تتسبب بنحو 9 ملايين وفاة سنويًا حول العالم. تشمل المناطق الأكثر تلوّثًا إفريقيا جنوب الصحراء وجنوب آسيا وجنوب شرقها. وتُسهم التأثيرات الصناعية وإزالة الغابات في تقليل الأكسجين في الغلاف الجوي.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول 2050، هل سيكون هناك نقص في الأكسجين في غلاف الأرض الجوي؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 1%"
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  page: { title: "मानव जीवन और स्वास्थ्य के लिए कृत्रिम बुद्धिमत्ता पूर्वानुमान" },
  cta: {
    p1: "आप AI से अपने भविष्य या अन्य लोगों, वस्तुओं, स्थानों और घटनाओं के भविष्य के बारे में भी पूछ सकते हैं",
    here: "यहाँ"
  },
  s1: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "COVID-19 का उभरना 2019 के अंत में चीन के वुहान में हुआ; इसका कारण SARS-CoV-2 कोरोनावायरस है। महामारी 30 जनवरी 2020 से 5 मई 2023 तक चली। 2025 तक 70 लाख से अधिक पुष्ट मौतें दर्ज की जा चुकी थीं। वायरस अब भी समय-समय पर लहरों और नई वैरिएंट/उप-वेरिएंट के साथ प्रसारित होता रहता है।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 के अंत तक नई COVID-19 महामारी घोषित की जाएगी?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 5%"
  },
  s2: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "दुनिया की लगभग एक-चौथाई आबादी के पास सुरक्षित रूप से प्रबंधित पीने के पानी की पहुँच नहीं है। जलवायु परिवर्तन और हिमनदों का पिघलना (“वाटर टावर्स”) लगभग 2 अरब लोगों की पेयजल आपूर्ति को खतरे में डाल सकता है। साथ ही, प्रदूषण और अन्य मानवीय गतिविधियाँ पेयजल संसाधनों में कमी का कारण बनती हैं।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2050 तक दुनिया की आधी आबादी पीने के पानी की पहुँच से वंचित रह जाएगी?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 10%"
  },
  s3: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "वायु प्रदूषण मानवता के लिए सबसे बड़े स्वास्थ्य जोखिमों में से एक है और हर साल विश्व स्तर पर लगभग 90 लाख मौतों के लिए ज़िम्मेदार है। सबसे प्रदूषित क्षेत्रों में उप-सहारा अफ्रीका और दक्षिण व दक्षिण-पूर्व एशिया शामिल हैं। औद्योगिक प्रभाव और वनों की कटाई वातावरण में ऑक्सीजन की कमी में योगदान देते हैं।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2050 तक पृथ्वी के वायुमंडल में ऑक्सीजन की कमी हो जाएगी?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 1%"
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  page: { title: "人类生命与健康的人工智能预测" },
  cta: {
    p1: "你还可以让 AI 预测你的未来，或他人、物体、地点与事件的未来",
    here: "这里"
  },
  s1: {
    forecast: "预测日期：17.06.2025.",
    lead: "2019 年底，新冠（COVID-19）在中国武汉出现；致病因子为 SARS-CoV-2 冠状病毒。疫情从 2020 年 1 月 30 日持续到 2023 年 5 月 5 日。到 2025 年，已记录超过 700 万例确认死亡。病毒仍在流行，偶有新一轮传播，并出现新的变异株与亚变体。",
    qLabel: "向 AI 提问：",
    qText: "到 2025 年底，会宣布一场新的 COVID-19 大流行吗？",
    aLabel: "AI 的回答：",
    aText: "否。概率 5%"
  },
  s2: {
    forecast: "预测日期：17.06.2025.",
    lead: "全球约四分之一人口缺乏安全管理的饮用水可及性。气候变化与冰川融化（“水塔”）可能威胁约 20 亿人的饮用水供应。此外，污染和其他人类活动也在减少可饮用水资源。",
    qLabel: "向 AI 提问：",
    qText: "到 2050 年，全球是否会有一半人口无法获得饮用水？",
    aLabel: "AI 的回答：",
    aText: "否。概率 10%"
  },
  s3: {
    forecast: "预测日期：17.06.2025.",
    lead: "空气污染是人类面临的最严重健康风险之一，每年在全球造成约 900 万人死亡。污染最严重的地区包括撒哈拉以南非洲，以及南亚和东南亚。工业影响与森林砍伐会导致大气中氧气含量的降低。",
    qLabel: "向 AI 提问：",
    qText: "到 2050 年，地球大气中会出现氧气短缺吗？",
    aLabel: "AI 的回答：",
    aText: "否。概率 1%"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  page: { title: "人類の生命と健康に関するAI予測" },
  cta: {
    p1: "AI に、あなた自身の将来や他者・物体・場所・出来事の将来についても質問できます",
    here: "こちら"
  },
  s1: {
    forecast: "予測日：17.06.2025.",
    lead: "COVID-19 は 2019 年末に中国・武漢で出現し、原因は SARS-CoV-2 コロナウイルスです。パンデミックは 2020 年 1 月 30 日から 2023 年 5 月 5 日まで続きました。2025 年までに 700 万件超の確認死亡が記録されています。ウイルスは現在も散発的な流行を繰り返し、新たな変異株やサブバリアントが現れています。",
    qLabel: "AI への質問：",
    qText: "2025 年末までに、新たな COVID-19 パンデミックが宣言されますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 5%"
  },
  s2: {
    forecast: "予測日：17.06.2025.",
    lead: "世界人口の 4 分の 1 は、安全に管理された飲料水へのアクセスを欠いています。気候変動と氷河の融解（「水のタワー」）は、約 20 億人の飲料水供給を脅かす可能性があります。さらに、汚染やその他の人間活動により、飲用可能な水資源は縮小しています。",
    qLabel: "AI への質問：",
    qText: "2050 年までに、世界人口の半数が飲料水にアクセスできなくなりますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 10%"
  },
  s3: {
    forecast: "予測日：17.06.2025.",
    lead: "大気汚染は人類にとって最大級の健康リスクの一つで、世界全体で毎年約 900 万人の死亡に関与しています。最も汚染の深刻な地域には、サハラ以南のアフリカや南アジア・東南アジアが含まれます。産業の影響や森林伐採は、大気中の酸素低下に寄与します。",
    qLabel: "AI への質問：",
    qText: "2050 年までに地球大気で酸素不足が起こりますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 1%"
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

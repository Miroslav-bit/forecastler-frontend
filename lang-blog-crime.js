// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Crime, Tragic Events, and Crime Reports" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "In the first half of 2025, terrorist attacks were recorded in several European cities, with around ten fatalities in total. Following Israel’s strikes on Iranian nuclear sites and U.S. support for those actions, the risk has increased of new attacks by lone actors and of pro-Iranian cyber activities in the near term.",
      qLabel: "Question for AI:",
      qText: "In July 2025, will terrorist attacks in European and U.S. cities result in more than 10 casualties?",
      aLabel: "AI answer:",
      aText: "NO. Probability 40%",
      valid: "Forecast came true",
      source: "Confirmation source"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "In 2025, drug trafficking intensified, especially cocaine smuggling from the Andes toward Northern Europe. In the first half of 2025, more than 16 tons of cocaine were seized in Europe.",
      qLabel: "Question for AI:",
      qText: "By the end of 2025, will at least one cocaine shipment weighing more than one metric ton be seized?",
      aLabel: "AI answer:",
      aText: "YES. Probability 75%",
      valid: "Forecast came true",
      source: "Confirmation source"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The most recent fatal attack on a senior political official occurred in Colombia on June 7, 2025. Last year, attempted assassinations of Donald Trump and Slovak Prime Minister Robert Fico were recorded.",
      qLabel: "Question for AI:",
      qText: "By the end of 2025, will an assassination with a fatal outcome target a president or prime minister of any country?",
      aLabel: "AI answer:",
      aText: "NO. Probability 5%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za kriminalitet, tragične događaje i crnu hroniku" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Tokom prve polovine 2025. godine zabeleženi su teroristički napadi u više evropskih gradova, sa ukupno oko deset žrtava. Nakon izraelskih napada na iranske nuklearne lokacije i američke podrške tim akcijama, povećala se pretnja od novih napada usamljenih napadača i proiranskih sajber-aktivnosti u skorijem periodu.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će tokom jula 2025. godine u evropskim i američkim gradovima biti izvedeni teroristički napadi čiji će broj žrtava premašiti 10?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 40%",
      valid: "Prognoza se obistinila",
      source: "Izvor potvrde"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Tokom 2025. godine intenzivirala se trgovina opojnim sredstvima, naročito kokainom, švercom iz područja Anda ka severnoj Evropi. Tokom prve polovine 2025. u Evropi je zaplenjeno preko 16 tona kokaina.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do kraja 2025. godine uslediti zaplena makar jednog tovara kokaina teškog preko jedne tone?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 75%",
      valid: "Prognoza se obistinila",
      source: "Izvor potvrde"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Poslednji napad na visokog političkog zvaničnika sa smrtnim ishodom dogodio se u Kolumbiji 7. juna 2025. Prošle godine zabeleženi su pokušaji ubistva Donalda Trampa i slovačkog premijera Roberta Fica.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će se do kraja 2025. godine dogoditi atentat sa smrtnim ishodom na predsednika ili premijera bilo koje države?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 5%"
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  page: { title: "Pronósticos de Inteligencia Artificial sobre Crimen, Eventos Trágicos e Informes de Delincuencia" },
  cta: {
    p1: "También puedes preguntar a la IA sobre tu futuro o el de otras personas, objetos, lugares y eventos",
    here: "AQUÍ"
  },
  s1: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "En la primera mitad de 2025 se registraron atentados terroristas en varias ciudades europeas, con alrededor de diez fallecidos en total. Tras los ataques de Israel contra sitios nucleares iraníes y el apoyo de EE. UU. a esas acciones, aumentó el riesgo de nuevos atentados de actores solitarios y de actividades cibernéticas proiraníes a corto plazo.",
    qLabel: "Pregunta para la IA:",
    qText: "En julio de 2025, ¿provocarán los atentados terroristas en ciudades europeas y estadounidenses más de 10 víctimas?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 40%",
    valid: "El pronóstico se cumplió",
    source: "Fuente de confirmación"
  },
  s2: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "En 2025 se intensificó el narcotráfico, especialmente el contrabando de cocaína desde los Andes hacia el norte de Europa. En la primera mitad de 2025 se incautaron en Europa más de 16 toneladas de cocaína.",
    qLabel: "Pregunta para la IA:",
    qText: "Para finales de 2025, ¿se decomisará al menos un envío de cocaína de más de una tonelada métrica?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 75%",
    valid: "El pronóstico se cumplió",
    source: "Fuente de confirmación"
  },
  s3: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "El ataque mortal más reciente contra un alto cargo político ocurrió en Colombia el 7 de junio de 2025. El año pasado se registraron intentos de asesinato de Donald Trump y del primer ministro eslovaco Robert Fico.",
    qLabel: "Pregunta para la IA:",
    qText: "¿Para finales de 2025, un asesinato con resultado mortal tendrá como objetivo a un presidente o primer ministro de algún país?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 5%"
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  page: { title: "Prévisions d’intelligence artificielle sur la criminalité, les événements tragiques et les rapports de criminalité" },
  cta: {
    p1: "Vous pouvez aussi interroger l’IA sur votre avenir ou celui d’autres personnes, objets, lieux et événements",
    here: "ICI"
  },
  s1: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Au premier semestre 2025, des attentats terroristes ont été enregistrés dans plusieurs villes européennes, faisant au total une dizaine de morts. À la suite des frappes israéliennes contre des sites nucléaires iraniens et du soutien américain à ces actions, le risque de nouvelles attaques menées par des acteurs isolés et d’activités cyber pro-iraniennes a augmenté à court terme.",
    qLabel: "Question pour l’IA :",
    qText: "En juillet 2025, les attentats terroristes dans des villes européennes et américaines feront-ils plus de 10 victimes ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 40 %",
    valid: "La prévision s’est réalisée",
    source: "Source de confirmation"
  },
  s2: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "En 2025, le trafic de drogue s’est intensifié, en particulier la contrebande de cocaïne depuis les Andes vers l’Europe du Nord. Plus de 16 tonnes de cocaïne ont été saisies en Europe au premier semestre 2025.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici fin 2025, au moins une cargaison de cocaïne de plus d’une tonne sera-t-elle saisie ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 75 %",
    valid: "La prévision s’est réalisée",
    source: "Source de confirmation"
  },
  s3: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "La plus récente attaque mortelle contre un haut responsable politique a eu lieu en Colombie le 7 juin 2025. L’an dernier, des tentatives d’assassinat visant Donald Trump et le Premier ministre slovaque Robert Fico ont été enregistrées.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici fin 2025, un assassinat à issue mortelle visera-t-il un président ou un premier ministre d’un pays ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 5 %"
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  page: { title: "KI-Prognosen zu Kriminalität, tragischen Ereignissen und Kriminalitätsberichten" },
  cta: {
    p1: "Sie können die KI auch zu Ihrer Zukunft oder zur Zukunft anderer Menschen, Objekte, Orte und Ereignisse befragen",
    here: "HIER"
  },
  s1: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Im ersten Halbjahr 2025 kam es in mehreren europäischen Städten zu Terroranschlägen mit insgesamt rund zehn Todesopfern. Nach israelischen Angriffen auf iranische Nuklearanlagen und der Unterstützung dieser Aktionen durch die USA stieg kurzfristig das Risiko neuer Anschläge durch Einzeltäter sowie pro-iranischer Cyberaktivitäten.",
    qLabel: "Frage an die KI:",
    qText: "Werden Terroranschläge in europäischen und US-Städten im Juli 2025 mehr als 10 Opfer fordern?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 40 %",
    valid: "Die Prognose traf ein",
    source: "Bestätigungsquelle"
  },
  s2: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "2025 hat der Drogenhandel an Intensität gewonnen, insbesondere der Kokainschmuggel aus den Anden nach Nordeuropa. Im ersten Halbjahr 2025 wurden in Europa über 16 Tonnen Kokain sichergestellt.",
    qLabel: "Frage an die KI:",
    qText: "Wird bis Ende 2025 mindestens eine Kokainlieferung von mehr als einer Tonne beschlagnahmt?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 75 %",
    valid: "Die Prognose traf ein",
    source: "Bestätigungsquelle"
  },
  s3: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Der jüngste tödliche Angriff auf einen hochrangigen Politiker ereignete sich am 7. Juni 2025 in Kolumbien. Im vergangenen Jahr wurden Attentatsversuche auf Donald Trump und den slowakischen Premierminister Robert Fico verzeichnet.",
    qLabel: "Frage an die KI:",
    qText: "Wird bis Ende 2025 ein tödliches Attentat einen Präsidenten oder Premierminister eines Landes treffen?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 5 %"
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  page: { title: "Previsões de IA para Crime, Eventos Trágicos e Relatórios de Criminalidade" },
  cta: {
    p1: "Você também pode perguntar à IA sobre o seu futuro ou o futuro de outras pessoas, objetos, lugares e eventos",
    here: "AQUI"
  },
  s1: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "No primeiro semestre de 2025, ocorreram atentados terroristas em várias cidades europeias, com cerca de dez mortes no total. Após os ataques de Israel a instalações nucleares iranianas e o apoio dos EUA a essas ações, aumentou, no curto prazo, o risco de novos ataques por autores solitários e de atividades cibernéticas pró-Irã.",
    qLabel: "Pergunta para a IA:",
    qText: "Em julho de 2025, atentados terroristas em cidades europeias e dos EUA resultarão em mais de 10 vítimas?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 40%",
    valid: "A previsão se confirmou",
    source: "Fonte de confirmação"
  },
  s2: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Em 2025, o tráfico de drogas se intensificou, especialmente o contrabando de cocaína dos Andes para o Norte da Europa. No primeiro semestre de 2025, mais de 16 toneladas de cocaína foram apreendidas na Europa.",
    qLabel: "Pergunta para a IA:",
    qText: "Até o final de 2025, será apreendido ao menos um carregamento de cocaína com mais de uma tonelada métrica?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 75%",
    valid: "A previsão se confirmou",
    source: "Fonte de confirmação"
  },
  s3: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "O ataque fatal mais recente contra um alto dirigente político ocorreu na Colômbia em 7 de junho de 2025. No ano passado, foram registradas tentativas de assassinato de Donald Trump e do primeiro-ministro eslovaco Robert Fico.",
    qLabel: "Pergunta para a IA:",
    qText: "Até o final de 2025, um assassinato com desfecho fatal terá como alvo um presidente ou primeiro-ministro de algum país?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 5%"
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  page: { title: "Previsioni di IA su crimine, eventi tragici e rapporti sulla criminalità" },
  cta: {
    p1: "Puoi anche chiedere all’IA del tuo futuro o del futuro di altre persone, oggetti, luoghi ed eventi",
    here: "QUI"
  },
  s1: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Nella prima metà del 2025 sono stati registrati attentati terroristici in diverse città europee, con circa dieci vittime mortali in totale. In seguito agli attacchi israeliani a siti nucleari iraniani e al sostegno degli Stati Uniti a tali azioni, è aumentato nel breve termine il rischio di nuovi attacchi da parte di autori solitari e di attività informatiche filo-iraniane.",
    qLabel: "Domanda per l’IA:",
    qText: "Nel luglio 2025, gli attentati terroristici nelle città europee e statunitensi provocheranno più di 10 vittime?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 40%"
  ,
    valid: "La previsione si è avverata",
    source: "Fonte di conferma"
  },
  s2: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Nel 2025 il traffico di droga si è intensificato, in particolare il contrabbando di cocaina dalle Ande verso l’Europa settentrionale. Nella prima metà del 2025 in Europa sono state sequestrate oltre 16 tonnellate di cocaina.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro la fine del 2025 verrà sequestrata almeno una spedizione di cocaina superiore a una tonnellata metrica?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 75%",
    valid: "La previsione si è avverata",
    source: "Fonte di conferma"
  },
  s3: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "L’attacco mortale più recente contro un alto esponente politico è avvenuto in Colombia il 7 giugno 2025. Lo scorso anno sono stati registrati tentativi di assassinio di Donald Trump e del primo ministro slovacco Robert Fico.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro la fine del 2025 si verificherà un assassinio con esito mortale ai danni di un presidente o di un primo ministro di un qualsiasi paese?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 5%"
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  page: { title: "Prognozy SI dotyczące przestępczości, zdarzeń tragicznych i raportów kryminalnych" },
  cta: {
    p1: "Możesz też zapytać SI o swoją przyszłość lub o przyszłość innych osób, obiektów, miejsc i wydarzeń",
    here: "TUTAJ"
  },
  s1: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "W pierwszej połowie 2025 r. odnotowano ataki terrorystyczne w kilku miastach Europy, łącznie z około dziesięcioma ofiarami śmiertelnymi. Po uderzeniach Izraela w irańskie obiekty nuklearne i wsparciu USA dla tych działań wzrosło krótkoterminowe ryzyko nowych ataków ze strony samotnych sprawców oraz proirańskich działań cybernetycznych.",
    qLabel: "Pytanie do SI:",
    qText: "Czy w lipcu 2025 r. ataki terrorystyczne w miastach Europy i USA spowodują ponad 10 ofiar?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 40%",
    valid: "Prognoza się sprawdziła",
    source: "Źródło potwierdzenia"
  },
  s2: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "W 2025 r. nasilił się handel narkotykami, zwłaszcza przemyt kokainy z Andów do Europy Północnej. W pierwszej połowie 2025 r. w Europie przejęto ponad 16 ton kokainy.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do końca 2025 r. zostanie przechwycony co najmniej jeden ładunek kokainy o masie przekraczającej jedną tonę?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 75%",
    valid: "Prognoza się sprawdziła",
    source: "Źródło potwierdzenia"
  },
  s3: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Najnowszy śmiertelny atak na wysokiego urzędnika politycznego miał miejsce w Kolumbii 7 czerwca 2025 r. W ubiegłym roku odnotowano próby zamachu na Donalda Trumpa oraz słowackiego premiera Roberta Fica.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do końca 2025 r. dojdzie do zamachu z ofiarą śmiertelną na prezydenta lub premiera któregoś z państw?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 5%"
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  page: { title: "Прогнози ШІ щодо злочинності, трагічних подій і звітів про злочини" },
  cta: {
    p1: "Ви також можете запитати ШІ про своє майбутнє або про майбутнє інших людей, об’єктів, місць та подій",
    here: "ТУТ"
  },
  s1: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "У першій половині 2025 року в кількох європейських містах сталися теракти, загалом із близько десятьма загиблими. Після ударів Ізраїлю по іранських ядерних об’єктах і підтримки США цих дій зріс короткостроковий ризик нових атак самотніх виконавців та проіранської кіберактивності.",
    qLabel: "Питання до ШІ:",
    qText: "Чи призведуть у липні 2025 року теракти в містах Європи та США до понад 10 жертв?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Ймовірність 40%",
    valid: "Прогноз справдився",
    source: "Джерело підтвердження"
  },
  s2: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "У 2025 році посилилася торгівля наркотиками, зокрема контрабанда кокаїну з Анд до Північної Європи. У першій половині 2025 року в Європі вилучили понад 16 тонн кокаїну.",
    qLabel: "Питання до ШІ:",
    qText: "До кінця 2025 року чи буде затримано принаймні один вантаж кокаїну масою понад одну тонну?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Ймовірність 75%",
    valid: "Прогноз справдився",
    source: "Джерело підтвердження"
  },
  s3: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Найсвіжіший смертельний напад на високопосадовця стався в Колумбії 7 червня 2025 року. Торік зафіксовано замахи на Дональда Трампа та прем’єр-міністра Словаччини Роберта Фіца.",
    qLabel: "Питання до ШІ:",
    qText: "До кінця 2025 року чи стане президент або прем’єр-міністр будь-якої країни ціллю замаху зі смертельним наслідком?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Ймовірність 5%"
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  page: { title: "Прогнозы ИИ по преступности, трагическим событиям и сводкам о преступлениях" },
  cta: {
    p1: "Вы также можете спросить ИИ о своём будущем или о будущем других людей, объектов, мест и событий",
    here: "ЗДЕСЬ"
  },
  s1: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "В первой половине 2025 года в ряде европейских городов произошли теракты, всего — около десяти погибших. После ударов Израиля по иранским ядерным объектам и поддержки США этих действий возрос краткосрочный риск новых атак одиночных исполнителей и проиранской киберактивности.",
    qLabel: "Вопрос к ИИ:",
    qText: "Приведут ли в июле 2025 года теракты в городах Европы и США к более чем 10 пострадавшим?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 40 %",
    valid: "Прогноз сбылся",
    source: "Источник подтверждения"
  },
  s2: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "В 2025 году усилилась торговля наркотиками, особенно контрабанда кокаина из Анд в Северную Европу. В первой половине 2025 года в Европе изъято свыше 16 тонн кокаина.",
    qLabel: "Вопрос к ИИ:",
    qText: "До конца 2025 года будет ли перехвачена хотя бы одна партия кокаина массой более одной тонны?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 75 %",
    valid: "Прогноз сбылся",
    source: "Источник подтверждения"
  },
  s3: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Последнее смертельное нападение на высокопоставленного политика произошло в Колумбии 7 июня 2025 года. В прошлом году зафиксированы покушения на Дональда Трампа и премьер-министра Словакии Роберта Фицо.",
    qLabel: "Вопрос к ИИ:",
    qText: "До конца 2025 года произойдёт ли покушение с летальным исходом на президента или премьер-министра какой-либо страны?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 5 %"
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  page: { title: "Suç, Trajik Olaylar ve Suç Raporları için Yapay Zekâ Tahminleri" },
  cta: {
    p1: "YZ’ye kendi geleceğinizin veya diğer kişiler, nesneler, yerler ve olayların geleceğinin ne olacağını da sorabilirsiniz",
    here: "BURADA"
  },
  s1: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "2025’in ilk yarısında Avrupa’nın çeşitli şehirlerinde terör saldırıları kaydedildi; toplamda yaklaşık on can kaybı oldu. İsrail’in İran nükleer tesislerine yönelik saldırıları ve bu eylemlere ABD desteğinin ardından, yakın vadede yalnız failler tarafından gerçekleştirilecek yeni saldırıların ve İran yanlısı siber faaliyetlerin riski artmıştır.",
    qLabel: "YZ’ye soru:",
    qText: "Temmuz 2025’te Avrupa ve ABD şehirlerindeki terör saldırıları 10’dan fazla can kaybına yol açacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %40",
    valid: "Tahmin gerçekleşti",
    source: "Doğrulama kaynağı"
  },
  s2: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "2025’te uyuşturucu kaçakçılığı, özellikle Andlar’dan Kuzey Avrupa’ya kokain sevkiyatı, yoğunlaştı. 2025’in ilk yarısında Avrupa’da 16 tondan fazla kokain ele geçirildi.",
    qLabel: "YZ’ye soru:",
    qText: "2025 sonuna kadar ağırlığı bir metrik tonu aşan en az bir kokain sevkiyatı yakalanacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %75",
    valid: "Tahmin gerçekleşti",
    source: "Doğrulama kaynağı"
  },
  s3: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Üst düzey bir siyasi yetkiliye yönelik son ölümcül saldırı 7 Haziran 2025’te Kolombiya’da meydana geldi. Geçen yıl, Donald Trump ve Slovakya Başbakanı Robert Fico’ya yönelik suikast girişimleri kayda geçti.",
    qLabel: "YZ’ye soru:",
    qText: "2025 sonuna kadar herhangi bir ülkenin cumhurbaşkanı veya başbakanını hedef alan, ölümle sonuçlanan bir suikast gerçekleşecek mi?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %5"
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  page: { title: "تنبؤات الذكاء الاصطناعي بشأن الجريمة والأحداث المأساوية وتقارير الجريمة" },
  cta: {
    p1: "يمكنك أيضًا سؤال الذكاء الاصطناعي عن مستقبلك أو مستقبل أشخاص وأشياء وأماكن وأحداث أخرى",
    here: "هنا"
  },
  s1: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "خلال النصف الأول من عام 2025 سُجِّلت هجمات إرهابية في عدة مدن أوروبية، أسفرت في المجموع عن نحو عشرة قتلى. عقب ضربات إسرائيل لمواقع نووية في إيران ودعم الولايات المتحدة لتلك العمليات، ازداد على المدى القريب خطرُ هجمات جديدة ينفذها منفردون وكذلك أنشطة سيبرانية موالية لإيران.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "في يوليو/تموز 2025، هل ستسفر الهجمات الإرهابية في مدن أوروبية وأمريكية عن أكثر من 10 ضحايا؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 40%",
    valid: "تحقّق التنبؤ",
    source: "مصدر التأكيد"
  },
  s2: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "في عام 2025 اشتدّ تهريب المخدرات، ولا سيما تهريب الكوكايين من جبال الأنديز نحو شمال أوروبا. وخلال النصف الأول من 2025 صودِر في أوروبا أكثر من 16 طنًا من الكوكايين.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول نهاية 2025، هل ستُضبَط شحنة كوكايين واحدة على الأقل يزيد وزنها على طنٍّ متري؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 75%",
    valid: "تحقّق التنبؤ",
    source: "مصدر التأكيد"
  },
  s3: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "وقع أحدث هجوم مميت على مسؤول سياسي رفيع في كولومبيا بتاريخ 7 يونيو/حزيران 2025. وفي العام الماضي سُجِّلت محاولتا اغتيال استهدفتا دونالد ترامب ورئيس وزراء سلوفاكيا روبرت فيكو.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول نهاية 2025، هل سيستهدف اغتيال ذو نتيجة قاتلة رئيسًا أو رئيس وزراء لأي دولة؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 5%"
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  page: { title: "अपराध, दुखद घटनाएँ और अपराध रिपोर्टों के लिए कृत्रिम बुद्धिमत्ता पूर्वानुमान" },
  cta: {
    p1: "आप AI से अपने भविष्य या अन्य लोगों, वस्तुओं, स्थानों और घटनाओं के भविष्य के बारे में भी पूछ सकते हैं",
    here: "यहाँ"
  },
  s1: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "2025 की पहली छमाही में कई यूरोपीय शहरों में आतंकी हमले दर्ज हुए, जिनमें कुल मिलाकर लगभग दस मौतें हुईं। ईरानी परमाणु स्थलों पर इज़राइल के प्रहार और अमेरिका के समर्थन के बाद, निकट अवधि में अकेले हमलावरों द्वारा नए हमलों और pro-ईरान साइबर गतिविधियों का जोखिम बढ़ा है।",
    qLabel: "AI से प्रश्न:",
    qText: "जुलाई 2025 में, क्या यूरोप और अमेरिका के शहरों में आतंकी हमलों से 10 से अधिक हताहत होंगे?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 40%",
    valid: "पूर्वानुमान सही साबित हुआ",
    source: "पुष्टिकरण स्रोत"
  },
  s2: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "2025 में मादक-पदार्थ तस्करी तेज़ हुई, विशेषकर एंडीज़ से उत्तरी यूरोप की ओर कोकीन की तस्करी। 2025 की पहली छमाही में यूरोप में 16 टन से अधिक कोकीन जब्त की गई।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 के अंत तक एक मीट्रिक टन से अधिक वज़न वाली कम से कम एक कोकीन खेप ज़ब्त की जाएगी?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 75%",
    valid: "पूर्वानुमान सही साबित हुआ",
    source: "पुष्टिकरण स्रोत"
  },
  s3: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "किसी वरिष्ठ राजनीतिक अधिकारी पर हालिया घातक हमला 7 जून 2025 को कोलंबिया में हुआ। पिछले वर्ष डोनाल्ड ट्रम्प और स्लोवाक प्रधानमंत्री रॉबर्ट फ़ित्सो पर हत्या के प्रयास दर्ज हुए थे।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 के अंत तक किसी भी देश के राष्ट्रपति या प्रधानमंत्री को लक्ष्य बनाकर घातक परिणाम वाली हत्या/असैसिनेशन होगी?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 5%"
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  page: { title: "关于犯罪、悲剧事件与犯罪报告的人工智能预测" },
  cta: {
    p1: "你还可以让 AI 预测你的未来，或他人、物体、地点与事件的未来",
    here: "这里"
  },
  s1: {
    forecast: "预测日期：17.06.2025.",
    lead: "2025 年上半年，欧洲多座城市发生恐怖袭击，累计造成约 10 人死亡。以色列打击伊朗核设施并获美国支持后，短期内由“独行袭击者”发动的新袭击以及亲伊朗的网络行动风险上升。",
    qLabel: "向 AI 提问：",
    qText: "在 2025 年 7 月，欧洲和美国城市的恐怖袭击是否会造成超过 10 名伤亡？",
    aLabel: "AI 的回答：",
    aText: "否。概率 40%",
    valid: "预测成真",
    source: "确认来源"
  },
  s2: {
    forecast: "预测日期：17.06.2025.",
    lead: "2025 年毒品贩运加剧，尤以从安第斯山脉向北欧走私可卡因为甚。2025 年上半年，欧洲查获可卡因逾 16 吨。",
    qLabel: "向 AI 提问：",
    qText: "到 2025 年底，是否会查获至少一批重量超过 1 公吨的可卡因？",
    aLabel: "AI 的回答：",
    aText: "是。概率 75%",
    valid: "预测成真",
    source: "确认来源"
  },
  s3: {
    forecast: "预测日期：17.06.2025.",
    lead: "最近一次对高级政治官员造成死亡的袭击发生在 2025 年 6 月 7 日的哥伦比亚。去年，曾记录到针对唐纳德•特朗普和斯洛伐克总理罗伯特•菲佐的刺杀未遂事件。",
    qLabel: "向 AI 提问：",
    qText: "到 2025 年底，是否会发生以任何国家的总统或总理为目标并导致死亡的刺杀？",
    aLabel: "AI 的回答：",
    aText: "否。概率 5%"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  page: { title: "犯罪・悲劇的事件・犯罪報告に関するAI予測" },
  cta: {
    p1: "AI に、あなた自身の将来や他者・物体・場所・出来事の将来についても質問できます",
    here: "こちら"
  },
  s1: {
    forecast: "予測日：17.06.2025.",
    lead: "2025年上半期、欧州の複数都市でテロが発生し、合計で約10人の死者が出た。イスラエルによるイラン核施設への攻撃とそれに対する米国の支援を受け、短期的には単独犯による新たな攻撃や親イラン系のサイバー活動のリスクが高まっている。",
    qLabel: "AI への質問：",
    qText: "2025年7月に、欧州および米国の都市でのテロにより死傷者が10人を超えますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 40%",
    valid: "予測は的中しました",
    source: "確認ソース"
  },
  s2: {
    forecast: "予測日：17.06.2025.",
    lead: "2025年、麻薬密輸は活発化し、とくにアンデスから北欧へのコカイン密輸が顕著となった。2025年上半期だけで欧州では16トン超のコカインが押収された。",
    qLabel: "AI への質問：",
    qText: "2025年末までに、1トンを超えるコカインの積荷が少なくとも1件押収されますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 75%",
    valid: "予測は的中しました",
    source: "確認ソース"
  },
  s3: {
    forecast: "予測日：17.06.2025.",
    lead: "直近の高位政治要人に対する致死的な攻撃は、2025年6月7日にコロンビアで発生した。昨年は、ドナルド・トランプ氏とスロバキアのロベルト・フィツォ首相に対する暗殺未遂が記録された。",
    qLabel: "AI への質問：",
    qText: "2025年末までに、いずれかの国の大統領または首相を標的とした致命的な暗殺が発生しますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 5%"
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

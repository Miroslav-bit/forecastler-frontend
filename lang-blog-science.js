// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Humanity’s Scientific Development" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Despite many attempts, there is still no proof of extraterrestrial life, nor confirmed evidence of alien entities or craft, regardless of numerous personal accounts. Research and space missions continue in the search for new discoveries.",
      qLabel: "Question for AI:",
      qText: "By 2030, will scientists find indisputable evidence of extraterrestrial life?",
      aLabel: "AI answer:",
      aText: "NO. Probability 15%"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The first mammal was cloned in 1997, and the first pets in 2001. Today, animal cloning is used in agriculture, for preserving endangered species, and for commercial services upon clients’ request. Numerous ethical and legal norms oppose cloning and prevent the use of such techniques in human reproduction.",
      qLabel: "Question for AI:",
      qText: "By 2030, will the first human be cloned?",
      aLabel: "AI answer:",
      aText: "NO. Probability 5%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The last crewed Moon landing was in 1972. No human crew has yet reached other planets. The first spacecraft visited Mars in 1974 (Mariner 4), and projects are currently under development (e.g., SpaceX) aiming for the first crewed missions to the Moon and Mars, followed by potential colonization and permanent settlement.",
      qLabel: "Question for AI:",
      qText: "By 2050, will humans settle on Mars?",
      aLabel: "AI answer:",
      aText: "NO. Probability 10%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za naučni razvoj čovečanstva" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Uprkos brojnim pokušajima, do sada nema dokaza o postojanju vanzemaljskog života, niti potvrde prisustva vanzemaljskih entiteta i njihovih letelica, bez obzira na brojna svedočenja. I dalje traju istraživanja i svemirske misije u potrazi za novim saznanjima.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će naučnici do 2030. godine pronaći neoborive dokaze o postojanju vanzemaljskog života?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 15%"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Prvi sisar kloniran je 1997. godine, a prvi kućni ljubimci 2001. Danas se kloniranje životinja koristi u poljoprivredi, za očuvanje ugroženih vrsta i za komercijalnu upotrebu na zahtev klijenata. Postoje brojne etičke i pravne norme koje se suprotstavljaju kloniranju i onemogućavaju primenu takvih tehnika u reprodukciji ljudi.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do 2030. godine biti klonirano prvo ljudsko biće?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 5%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Poslednje sletanje na Mesec s ljudskom posadom bilo je 1972. godine. Nijedna ljudska posada do sada nije pristupila drugim planetama. Prva letelica je posetila Mars 1974. godine (Mariner 4), a trenutno su u razvoju projekti (npr. SpaceX) čiji je cilj prva misija s ljudskom posadom na Mesec i Mars, a zatim i potencijalna kolonizacija i trajno naseljavanje.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će se do 2050. godine ljudi naseliti na Marsu?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 10%"
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  page: { title: "Pronósticos de Inteligencia Artificial para el Desarrollo Científico de la Humanidad" },
  cta: {
    p1: "También puedes preguntar a la IA sobre tu futuro o el de otras personas, objetos, lugares y eventos",
    here: "AQUÍ"
  },
  s1: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "A pesar de muchos intentos, todavía no hay prueba de vida extraterrestre ni evidencia confirmada de entidades o naves alienígenas, pese a numerosos testimonios personales. La investigación y las misiones espaciales continúan en busca de nuevos descubrimientos.",
    qLabel: "Pregunta para la IA:",
    qText: "Para 2030, ¿encontrarán los científicos pruebas indiscutibles de vida extraterrestre?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 15%"
  },
  s2: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "El primer mamífero fue clonado en 1997 y las primeras mascotas en 2001. Hoy, la clonación animal se usa en la agricultura, para preservar especies en peligro y como servicios comerciales a solicitud de clientes. Numerosas normas éticas y legales se oponen a la clonación y evitan el uso de tales técnicas en la reproducción humana.",
    qLabel: "Pregunta para la IA:",
    qText: "Para 2030, ¿será clonado el primer ser humano?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 5%"
  },
  s3: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "El último alunizaje tripulado fue en 1972. Ninguna tripulación humana ha llegado aún a otros planetas. La primera nave espacial visitó Marte en 1974 (Mariner 4) y actualmente se desarrollan proyectos (p. ej., SpaceX) con miras a las primeras misiones tripuladas a la Luna y a Marte, seguidas de una posible colonización y asentamiento permanente.",
    qLabel: "Pregunta para la IA:",
    qText: "Para 2050, ¿se establecerán humanos en Marte?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 10%"
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  page: { title: "Prévisions d’intelligence artificielle pour le développement scientifique de l’humanité" },
  cta: {
    p1: "Vous pouvez aussi interroger l’IA sur votre avenir ou celui d’autres personnes, objets, lieux et événements",
    here: "ICI"
  },
  s1: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Malgré de nombreuses tentatives, il n’existe toujours aucune preuve de vie extraterrestre ni d’éléments confirmés concernant des entités ou engins extraterrestres, en dépit de nombreux récits personnels. La recherche et les missions spatiales se poursuivent à la quête de nouvelles découvertes.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici 2030, les scientifiques trouveront-ils des preuves incontestables de vie extraterrestre ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 15 %"
  },
  s2: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Le premier mammifère a été cloné en 1997 et les premiers animaux de compagnie en 2001. Aujourd’hui, le clonage animal est utilisé en agriculture, pour la préservation d’espèces menacées et dans des services commerciaux à la demande des clients. De nombreuses normes éthiques et juridiques s’y opposent et empêchent l’usage de telles techniques en reproduction humaine.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici 2030, le premier être humain sera-t-il cloné ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 5 %"
  },
  s3: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Le dernier alunissage habité date de 1972. Aucun équipage humain n’a encore atteint d’autres planètes. Le premier engin spatial a visité Mars en 1974 (Mariner 4) et des projets (p. ex. SpaceX) sont en cours pour les premières missions habitées vers la Lune et Mars, suivies d’une possible colonisation et installation permanente.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici 2050, les humains s’installeront-ils sur Mars ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 10 %"
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  page: { title: "KI-Prognosen zur wissenschaftlichen Entwicklung der Menschheit" },
  cta: {
    p1: "Sie können die KI auch zu Ihrer Zukunft oder zur Zukunft anderer Menschen, Objekte, Orte und Ereignisse befragen",
    here: "HIER"
  },
  s1: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Trotz vieler Versuche gibt es weiterhin keinen Beweis für außerirdisches Leben und keine bestätigten Hinweise auf außerirdische Wesen oder Fluggeräte – ungeachtet zahlreicher persönlicher Berichte. Forschung und Raumfahrtmissionen laufen weiter auf der Suche nach neuen Entdeckungen.",
    qLabel: "Frage an die KI:",
    qText: "Werden Wissenschaftler bis 2030 unbestreitbare Beweise für außerirdisches Leben finden?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 15 %"
  },
  s2: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Das erste Säugetier wurde 1997 geklont, die ersten Haustiere 2001. Heute wird Tierklonen in der Landwirtschaft, zur Erhaltung bedrohter Arten und als kommerzieller Dienst auf Kundenwunsch eingesetzt. Zahlreiche ethische und rechtliche Normen sprechen gegen das Klonen und verhindern den Einsatz solcher Techniken in der menschlichen Fortpflanzung.",
    qLabel: "Frage an die KI:",
    qText: "Wird bis 2030 der erste Mensch geklont?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 5 %"
  },
  s3: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Die letzte bemannte Mondlandung war 1972. Kein menschliches Team hat bislang andere Planeten erreicht. Die erste Raumsonde besuchte 1974 den Mars (Mariner 4), und derzeit werden Projekte (z. B. SpaceX) für erste bemannte Missionen zum Mond und zum Mars entwickelt, gefolgt von möglicher Kolonisierung und dauerhafter Besiedlung.",
    qLabel: "Frage an die KI:",
    qText: "Werden Menschen bis 2050 den Mars besiedeln?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 10 %"
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  page: { title: "Previsões de IA para o desenvolvimento científico da humanidade" },
  cta: {
    p1: "Você também pode perguntar à IA sobre o seu futuro ou o futuro de outras pessoas, objetos, lugares e eventos",
    here: "AQUI"
  },
  s1: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Apesar de muitas tentativas, ainda não há prova de vida extraterrestre nem evidência confirmada de entidades ou aeronaves alienígenas, apesar de numerosos relatos pessoais. A pesquisa e as missões espaciais continuam em busca de novas descobertas.",
    qLabel: "Pergunta para a IA:",
    qText: "Até 2030, os cientistas encontrarão provas incontestáveis de vida extraterrestre?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 15%"
  },
  s2: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "O primeiro mamífero foi clonado em 1997 e os primeiros animais de estimação em 2001. Hoje, a clonagem animal é usada na agricultura, para preservar espécies ameaçadas e em serviços comerciais sob demanda. Numerosas normas éticas e legais se opõem à clonagem e impedem o uso dessas técnicas na reprodução humana.",
    qLabel: "Pergunta para a IA:",
    qText: "Até 2030, o primeiro ser humano será clonado?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 5%"
  },
  s3: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "O último pouso tripulado na Lua foi em 1972. Nenhuma tripulação humana alcançou outros planetas. A primeira espaçonave visitou Marte em 1974 (Mariner 4), e projetos (por exemplo, SpaceX) estão em desenvolvimento visando as primeiras missões tripuladas à Lua e a Marte, seguidas de possível colonização e assentamento permanente.",
    qLabel: "Pergunta para a IA:",
    qText: "Até 2050, os humanos se estabelecerão em Marte?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 10%"
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  page: { title: "Previsioni di IA per lo sviluppo scientifico dell’umanità" },
  cta: {
    p1: "Puoi anche chiedere all’IA del tuo futuro o del futuro di altre persone, oggetti, luoghi ed eventi",
    here: "QUI"
  },
  s1: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Nonostante i molti tentativi, non esistono ancora prove di vita extraterrestre né evidenze confermate di entità o velivoli alieni, malgrado numerosi resoconti personali. La ricerca e le missioni spaziali proseguono alla ricerca di nuove scoperte.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro il 2030, gli scienziati troveranno prove inconfutabili di vita extraterrestre?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 15%"
  },
  s2: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Il primo mammifero è stato clonato nel 1997 e i primi animali da compagnia nel 2001. Oggi la clonazione animale è usata in agricoltura, per preservare specie a rischio e come servizio commerciale su richiesta. Numerose norme etiche e legali si oppongono alla clonazione e impediscono l’uso di tali tecniche nella riproduzione umana.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro il 2030 verrà clonato il primo essere umano?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 5%"
  },
  s3: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "L’ultimo allunaggio con equipaggio risale al 1972. Nessun equipaggio umano ha ancora raggiunto altri pianeti. La prima sonda visitò Marte nel 1974 (Mariner 4) e sono in sviluppo progetti (ad es. SpaceX) per le prime missioni con equipaggio verso la Luna e Marte, seguite da potenziale colonizzazione e insediamento permanente.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro il 2050 gli esseri umani si insedieranno su Marte?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 10%"
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  page: { title: "Prognozy SI dotyczące rozwoju naukowego ludzkości" },
  cta: {
    p1: "Możesz też zapytać SI o swoją przyszłość lub o przyszłość innych osób, obiektów, miejsc i wydarzeń",
    here: "TUTAJ"
  },
  s1: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Pomimo wielu prób wciąż brak dowodu na istnienie życia pozaziemskiego ani potwierdzonych świadectw dotyczących obcych istot czy statków – mimo licznych relacji osobistych. Badania i misje kosmiczne trwają w poszukiwaniu nowych odkryć.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do 2030 r. naukowcy znajdą niepodważalne dowody życia pozaziemskiego?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 15%"
  },
  s2: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Pierwszego ssaka sklonowano w 1997 r., a pierwsze zwierzęta domowe w 2001 r. Obecnie klonowanie zwierząt stosuje się w rolnictwie, do ochrony gatunków zagrożonych oraz w usługach komercyjnych na życzenie klientów. Liczne normy etyczne i prawne sprzeciwiają się klonowaniu i uniemożliwiają stosowanie takich technik w rozrodzie człowieka.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do 2030 r. zostanie sklonowany pierwszy człowiek?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 5%"
  },
  s3: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Ostatnie załogowe lądowanie na Księżycu miało miejsce w 1972 r. Żadna ludzka załoga nie dotarła jeszcze na inne planety. Pierwszy statek kosmiczny odwiedził Marsa w 1974 r. (Mariner 4). Trwają projekty (np. SpaceX) mające na celu pierwsze misje załogowe na Księżyc i Marsa, a następnie ewentualną kolonizację i stałe osadnictwo.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do 2050 r. ludzie osiedlą się na Marsie?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 10%"
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  page: { title: "Прогнози ШІ щодо наукового розвитку людства" },
  cta: {
    p1: "Ви також можете запитати ШІ про своє майбутнє або про майбутнє інших людей, об’єктів, місць та подій",
    here: "ТУТ"
  },
  s1: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Попри численні спроби, досі немає доказів існування позаземного життя та підтверджених свідчень щодо інопланетних істот чи апаратів, незважаючи на багато особистих розповідей. Дослідження та космічні місії тривають у пошуках нових відкриттів.", 
    qLabel: "Питання до ШІ:",
    qText: "До 2030 року чи знайдуть вчені беззаперечні докази позаземного життя?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Імовірність 15%"
  },
  s2: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Першого ссавця клонували у 1997 році, а перших домашніх тварин — у 2001-му. Нині клонування тварин застосовують у сільському господарстві, для збереження видів, що зникають, і як комерційні послуги на запит клієнтів. Численні етичні та правові норми виступають проти клонування і забороняють використання таких методів у відтворенні людини.",
    qLabel: "Питання до ШІ:",
    qText: "До 2030 року чи буде клоновано першу людину?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Імовірність 5%"
  },
  s3: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Остання пілотована висадка на Місяць відбулася у 1972 році. Жоден екіпаж ще не досяг інших планет. Перший космічний апарат відвідав Марс у 1974 році (Mariner 4). Наразі розробляються проєкти (наприклад, SpaceX) для перших пілотованих місій на Місяць і Марс, а надалі — можливої колонізації та постійного поселення.",
    qLabel: "Питання до ШІ:",
    qText: "До 2050 року чи оселяться люди на Марсі?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Імовірність 10%"
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  page: { title: "Прогнозы ИИ по научному развитию человечества" },
  cta: {
    p1: "Вы также можете спросить ИИ о своём будущем или о будущем других людей, объектов, мест и событий",
    here: "ЗДЕСЬ"
  },
  s1: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Несмотря на многочисленные попытки, доказательств существования внеземной жизни до сих пор нет, как и подтверждённых сведений об инопланетных существах или аппаратах, несмотря на множество личных свидетельств. Исследования и космические миссии продолжаются в поисках новых открытий.",
    qLabel: "Вопрос к ИИ:",
    qText: "К 2030 году найдут ли учёные неопровержимые доказательства внеземной жизни?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 15 %"
  },
  s2: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Первое млекопитающее было клонировано в 1997 году, а первые домашние животные — в 2001-м. Сегодня клонирование животных используется в сельском хозяйстве, для сохранения исчезающих видов и как коммерческая услуга по запросу клиентов. Многочисленные этические и правовые нормы выступают против клонирования и препятствуют применению таких методов в человеческом воспроизводстве.",
    qLabel: "Вопрос к ИИ:",
    qText: "К 2030 году будет ли клонирован первый человек?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 5 %"
  },
  s3: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Последняя пилотируемая высадка на Луну состоялась в 1972 году. Ни один экипаж ещё не достиг других планет. Первый космический аппарат посетил Марс в 1974 году (Mariner 4). Ведётся разработка проектов (например, SpaceX) первых пилотируемых миссий к Луне и Марсу, за которыми может последовать колонизация и постоянное поселение.",
    qLabel: "Вопрос к ИИ:",
    qText: "К 2050 году поселятся ли люди на Марсе?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 10 %"
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  page: { title: "İnsanlığın Bilimsel Gelişimi için Yapay Zekâ Tahminleri" },
  cta: {
    p1: "YZ’ye kendi geleceğinizin veya diğer kişiler, nesneler, yerler ve olayların geleceğinin ne olacağını da sorabilirsiniz",
    here: "BURADA"
  },
  s1: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Birçok girişime rağmen, dünya dışı yaşama dair kanıt hâlâ yok; sayısız kişisel anlatıya rağmen uzaylı varlıkları veya araçlarına ilişkin doğrulanmış delil bulunmamaktadır. Yeni keşifler için araştırmalar ve uzay misyonları sürmektedir.",
    qLabel: "YZ’ye soru:",
    qText: "2030’a kadar bilim insanları dünya dışı yaşama dair tartışmasız kanıt bulacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %15"
  },
  s2: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "İlk memeli 1997’de, ilk evcil hayvanlar 2001’de klonlandı. Günümüzde hayvan klonlama; tarımda, nesli tehlikedeki türleri korumada ve müşterilerin talebine yönelik ticari hizmetlerde kullanılmaktadır. Çok sayıda etik ve hukuki norm, klonlamaya karşıdır ve bu tekniklerin insan üremesinde kullanılmasını engeller.",
    qLabel: "YZ’ye soru:",
    qText: "2030’a kadar ilk insan klonlanacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %5"
  },
  s3: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Son insanlı Ay inişi 1972’deydi. Henüz hiçbir insanlı ekip başka gezegenlere ulaşmadı. Mars’a giden ilk uzay aracı 1974’te (Mariner 4) ziyaret gerçekleştirdi; Ay ve Mars’a ilk insanlı görevleri ve ardından olası kolonizasyon ile kalıcı yerleşimi hedefleyen projeler (ör. SpaceX) geliştirilmektedir.",
    qLabel: "YZ’ye soru:",
    qText: "2050’ye kadar insanlar Mars’ta yerleşecek mi?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %10"
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  page: { title: "تنبؤات الذكاء الاصطناعي بشأن التطور العلمي للبشرية" },
  cta: {
    p1: "يمكنك أيضًا سؤال الذكاء الاصطناعي عن مستقبلك أو مستقبل أشخاص وأشياء وأماكن وأحداث أخرى",
    here: "هنا"
  },
  s1: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "على الرغم من المحاولات العديدة، لا يوجد حتى الآن دليل على وجود حياة خارج الأرض، ولا أدلة مؤكدة على كيانات أو مركبات فضائية، رغم كثرة الشهادات الشخصية. وتستمر الأبحاث والبعثات الفضائية بحثًا عن اكتشافات جديدة.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول عام 2030، هل سيجد العلماء دليلًا قاطعًا على وجود حياة خارج الأرض؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 15%"
  },
  s2: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "تم استنساخ أول ثديي عام 1997 وأول الحيوانات الأليفة عام 2001. واليوم يُستخدم استنساخ الحيوانات في الزراعة، وفي حفظ الأنواع المهددة، وكخدمات تجارية بطلب العملاء. تعارض العديد من المعايير الأخلاقية والقانونية الاستنساخ وتمنع استخدام هذه التقنيات في التكاثر البشري.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول 2030، هل سيُستنسخ أول إنسان؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 5%"
  },
  s3: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "كان آخر هبوط مأهول على القمر عام 1972. ولم تصل أي طواقم بشرية بعدُ إلى كواكب أخرى. زارت أول مركبةٍ المريخَ عام 1974 (Mariner 4)، وتُطوَّر حاليًا مشاريع (مثل SpaceX) تستهدف أولى الرحلات المأهولة إلى القمر والمريخ، يتبعها احتمالُ الاستعمار والاستيطان الدائم.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول عام 2050، هل سيستوطن البشر كوكب المريخ؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 10%"
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  page: { title: "मानवता के वैज्ञानिक विकास के लिए कृत्रिम बुद्धिमत्ता पूर्वानुमान" },
  cta: {
    p1: "आप AI से अपने भविष्य या अन्य लोगों, वस्तुओं, स्थानों और घटनाओं के भविष्य के बारे में भी पूछ सकते हैं",
    here: "यहाँ"
  },
  s1: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "कई प्रयासों के बावजूद, अब तक बाह्य-स्थलीय जीवन का कोई प्रमाण नहीं है, न ही एलियन अस्तित्व या अंतरिक्ष-यान के पुष्ट साक्ष्य—अनेक व्यक्तिगत बयानों के बावजूद। नए खोजों की तलाश में अनुसंधान और अंतरिक्ष मिशन जारी हैं。",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2030 तक वैज्ञानिक बाह्य-स्थलीय जीवन के निर्विवाद सबूत ढूंढ लेंगे?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 15%"
  },
  s2: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "पहला स्तनपायी 1997 में और पहली पालतू पशु-प्रजातियाँ 2001 में क्लोन की गईं। आज, पशु क्लोनिंग का उपयोग कृषि, लुप्तप्राय प्रजातियों के संरक्षण और ग्राहकों के अनुरोध पर वाणिज्यिक सेवाओं में होता है। अनेक नैतिक और कानूनी मानक क्लोनिंग का विरोध करते हैं और मानव प्रजनन में ऐसी तकनीकों के उपयोग को रोकते हैं।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2030 तक पहला मानव क्लोन किया जाएगा?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 5%"
  },
  s3: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "आख़िरी मानवयुक्त चंद्रमा-अवतरण 1972 में हुआ। अभी तक कोई मानव दल अन्य ग्रहों तक नहीं पहुँचा है। 1974 में पहला यान (Mariner 4) मंगल पर पहुँचा; वर्तमान में (जैसे SpaceX) ऐसे प्रोजेक्ट विकसित हो रहे हैं जिनका लक्ष्य चंद्रमा और मंगल पर मानव मिशन हैं, जिनके बाद संभावित उपनिवेशीकरण और स्थायी बसावट हो सकती है।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2050 तक मनुष्य मंगल ग्रह पर बसावट करेंगे?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 10%"
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  page: { title: "关于人类科学发展的人工智能预测" },
  cta: {
    p1: "你还可以让 AI 预测你的未来，或他人、物体、地点与事件的未来",
    here: "这里"
  },
  s1: {
    forecast: "预测日期：17.06.2025.",
    lead: "尽管多次尝试，仍然没有外星生命的证据，也没有关于外星生物或飞行器的确凿证据，尽管存在大量个人叙述。科研与太空任务仍在继续，寻找新的发现。",
    qLabel: "向 AI 提问：",
    qText: "到 2030 年，科学家会找到无可争辩的外星生命证据吗？",
    aLabel: "AI 的回答：",
    aText: "否。概率 15%"
  },
  s2: {
    forecast: "预测日期：17.06.2025.",
    lead: "第一只哺乳动物于 1997 年被克隆，第一批宠物于 2001 年被克隆。如今，动物克隆用于农业、濒危物种保护，以及按客户需求提供的商业服务。诸多伦理与法律规范反对克隆，并阻止在人类生殖中使用此类技术。",
    qLabel: "向 AI 提问：",
    qText: "到 2030 年，会诞生第一位被克隆的人类吗？",
    aLabel: "AI 的回答：",
    aText: "否。概率 5%"
  },
  s3: {
    forecast: "预测日期：17.06.2025.",
    lead: "上一次载人登月是在 1972 年。尚无人类乘组抵达其他行星。第一艘航天器于 1974 年（Mariner 4）到访火星，目前正在推进相关项目（如 SpaceX），旨在实现首批载人登月与火星任务，并可能随后进行殖民与永久定居。",
    qLabel: "向 AI 提问：",
    qText: "到 2050 年，人类会在火星上定居吗？",
    aLabel: "AI 的回答：",
    aText: "否。概率 10%"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  page: { title: "人類の科学的発展に関するAI予測" },
  cta: {
    p1: "AI に、あなた自身の将来や他者・物体・場所・出来事の将来についても質問できます",
    here: "こちら"
  },
  s1: {
    forecast: "予測日：17.06.2025.",
    lead: "多くの試みがなされてきたものの、地球外生命の証拠や、異星人や宇宙船に関する確証は今なお存在しない。新たな発見を求めて、研究と宇宙ミッションは継続している。",
    qLabel: "AI への質問：",
    qText: "2030 年までに、地球外生命の疑う余地のない証拠は見つかりますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 15%"
  },
  s2: {
    forecast: "予測日：17.06.2025.",
    lead: "最初の哺乳類は 1997 年に、最初のペットは 2001 年にクローン化された。現在、動物クローンは農業や絶滅危惧種の保全、依頼に応じた商用サービスに用いられている。多くの倫理・法的規範がクローンに反対しており、人の生殖への適用を禁じている。",
    qLabel: "AI への質問：",
    qText: "2030 年までに、最初の人間がクローン化されますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 5%"
  },
  s3: {
    forecast: "予測日：17.06.2025.",
    lead: "最後の有人月面着陸は 1972 年。人類の乗組員はまだ他の惑星に到達していない。1974 年に最初の宇宙機（Mariner 4）が火星を訪れ、現在は月および火星への有人ミッション（例：SpaceX）を目指す計画が進行中で、その後の植民や恒久的定住の可能性も検討されている。",
    qLabel: "AI への質問：",
    qText: "2050 年までに、人類は火星に定住しますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 10%"
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

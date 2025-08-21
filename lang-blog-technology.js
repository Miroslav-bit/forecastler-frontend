// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Technological Progress and Achievements" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The rapid acceleration of AI began in 2017 with deep-learning architectures for language models. Since 2022, generative systems have gone mainstream. Some observers fear AI could quickly and uncontrollably take over the operation of systems and harm humanity.",
      qLabel: "Question for AI:",
      qText: "By 2030, will artificial intelligence take control of all electronic systems worldwide?",
      aLabel: "AI answer:",
      aText: "NO. Probability 2%"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Flying cars have been under experimental development since the last century. In recent years, their small-batch production and use have intensified, particularly for military and tourism purposes.",
      qLabel: "Question for AI:",
      qText: "By 2030, will flying cars be available for mass civilian use in public transportation?",
      aLabel: "AI answer:",
      aText: "YES. Probability 85%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "By 2030, will a metaverse platform emerge that brings more than one billion users into its virtual world?",
      qLabel: "Question for AI:",
      qText: "By 2030, will a metaverse platform emerge that brings more than one billion users into its virtual world?",
      aLabel: "AI answer:",
      aText: "YES. Probability 85%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za tehnološki napredak i dostignuća" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Ubrzani razvoj veštačke inteligencije započinje 2017. uvođenjem arhitektura dubokog učenja za jezičke modele. Od 2022. generativni sistemi ulaze u mejnstrim. Pojedini strahuju da bi veštačka inteligencija mogla brzo i nekontrolisano da preuzme upravljanje sistemima i time nanese štetu čovečanstvu.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će veštačka inteligencija do 2030. godine preuzeti upravljanje nad svim elektronskim sistemima u svetu?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 2%"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Leteći automobili eksperimentalno se razvijaju još od prošlog veka. Poslednjih godina intenzivira se njihova maloserijska proizvodnja i upotreba u vojne i turističke svrhe.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do 2030. godine leteći automobili biti dostupni za masovnu civilnu upotrebu u javnom saobraćaju?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 85%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Metaverzum, kao skup povezanih uranjajućih 3D prostora u kojima korisnici mogu virtuelno da borave, rade, uče i zabavljaju se, svoje korene ima u devedesetim godinama prošlog veka. Koristi se preko potrošačkih platformi i kroz virtuelne prezentacije sistema, postrojenja i sl.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će se do 2030. godine pojaviti metaverzum platforma koja će u svoj virtuelni svet uključiti više od milijardu korisnika?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 85%"
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  page: { title: "Pronósticos de Inteligencia Artificial para el Progreso y los Logros Tecnológicos" },
  cta: {
    p1: "También puedes preguntar a la IA sobre tu futuro o el de otras personas, objetos, lugares y eventos",
    here: "AQUÍ"
  },
  s1: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "La rápida aceleración de la IA comenzó en 2017 con arquitecturas de deep learning para modelos de lenguaje. Desde 2022, los sistemas generativos se han popularizado. Algunos observadores temen que la IA pueda hacerse rápidamente y sin control con la operación de los sistemas y dañar a la humanidad.",
    qLabel: "Pregunta para la IA:",
    qText: "Para 2030, ¿la inteligencia artificial tomará el control de todos los sistemas electrónicos del mundo?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 2%"
  },
  s2: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Los autos voladores están en desarrollo experimental desde el siglo pasado. En los últimos años, su producción en pequeñas series y su uso se han intensificado, especialmente con fines militares y turísticos.",
    qLabel: "Pregunta para la IA:",
    qText: "Para 2030, ¿los autos voladores estarán disponibles para un uso civil masivo en el transporte público?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 85%"
  },
  s3: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Para 2030, ¿surgirá una plataforma de metaverso que lleve a más de mil millones de usuarios a su mundo virtual?",
    qLabel: "Pregunta para la IA:",
    qText: "Para 2030, ¿surgirá una plataforma de metaverso que lleve a más de mil millones de usuarios a su mundo virtual?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 85%"
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  page: { title: "Prévisions d’intelligence artificielle pour les progrès et réalisations technologiques" },
  cta: {
    p1: "Vous pouvez aussi interroger l’IA sur votre avenir ou celui d’autres personnes, objets, lieux et événements",
    here: "ICI"
  },
  s1: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "L’accélération rapide de l’IA a commencé en 2017 avec les architectures d’apprentissage profond pour les modèles de langue. Depuis 2022, les systèmes génératifs sont devenus grand public. Certains observateurs craignent que l’IA ne prenne rapidement et de manière incontrôlée le contrôle des systèmes et ne nuise à l’humanité.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici 2030, l’intelligence artificielle prendra-t-elle le contrôle de tous les systèmes électroniques dans le monde ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 2 %"
  },
  s2: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Les voitures volantes sont en développement expérimental depuis le siècle dernier. Ces dernières années, leur production en petites séries et leur utilisation se sont intensifiées, notamment à des fins militaires et touristiques.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici 2030, les voitures volantes seront-elles disponibles pour un usage civil de masse dans les transports publics ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 85 %"
  },
  s3: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "D’ici 2030, une plateforme de métavers apparaîtra-t-elle et rassemblera-t-elle plus d’un milliard d’utilisateurs dans son monde virtuel ?",
    qLabel: "Question pour l’IA :",
    qText: "D’ici 2030, une plateforme de métavers apparaîtra-t-elle et rassemblera-t-elle plus d’un milliard d’utilisateurs dans son monde virtuel ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 85 %"
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  page: { title: "KI-Prognosen zu technologischem Fortschritt und Errungenschaften" },
  cta: {
    p1: "Sie können die KI auch zu Ihrer Zukunft oder zur Zukunft anderer Menschen, Objekte, Orte und Ereignisse befragen",
    here: "HIER"
  },
  s1: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Die schnelle Beschleunigung der KI begann 2017 mit Deep-Learning-Architekturen für Sprachmodelle. Seit 2022 sind generative Systeme im Mainstream angekommen. Manche Beobachter befürchten, dass KI schnell und unkontrolliert die Steuerung von Systemen übernehmen und der Menschheit schaden könnte.",
    qLabel: "Frage an die KI:",
    qText: "Wird bis 2030 künstliche Intelligenz die Kontrolle über alle elektronischen Systeme weltweit übernehmen?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 2 %"
  },
  s2: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Fliegende Autos werden seit dem vergangenen Jahrhundert experimentell entwickelt. In den letzten Jahren haben Kleinserienproduktion und Nutzung zugenommen, vor allem für militärische und touristische Zwecke.",
    qLabel: "Frage an die KI:",
    qText: "Werden bis 2030 fliegende Autos für die breite zivile Nutzung im öffentlichen Verkehr verfügbar sein?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 85 %"
  },
  s3: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Wird bis 2030 eine Metaversum-Plattform entstehen, die mehr als eine Milliarde Nutzer in ihre virtuelle Welt bringt?",
    qLabel: "Frage an die KI:",
    qText: "Wird bis 2030 eine Metaversum-Plattform entstehen, die mehr als eine Milliarde Nutzer in ihre virtuelle Welt bringt?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 85 %"
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  page: { title: "Previsões de IA para o Progresso e as Conquistas Tecnológicas" },
  cta: {
    p1: "Você também pode perguntar à IA sobre o seu futuro ou o futuro de outras pessoas, objetos, lugares e eventos",
    here: "AQUI"
  },
  s1: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "A rápida aceleração da IA começou em 2017 com arquiteturas de deep learning para modelos de linguagem. Desde 2022, sistemas generativos tornaram-se populares. Alguns observadores temem que a IA possa assumir rapidamente e de forma descontrolada a operação dos sistemas e prejudicar a humanidade.",
    qLabel: "Pergunta para a IA:",
    qText: "Até 2030, a inteligência artificial assumirá o controle de todos os sistemas eletrônicos do mundo?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 2%"
  },
  s2: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Carros voadores estão em desenvolvimento experimental desde o século passado. Nos últimos anos, sua produção em pequenas séries e o uso se intensificaram, especialmente para fins militares e de turismo.",
    qLabel: "Pergunta para a IA:",
    qText: "Até 2030, carros voadores estarão disponíveis para uso civil em massa no transporte público?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 85%"
  },
  s3: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Até 2030, surgirá uma plataforma de metaverso que traga mais de um bilhão de usuários para seu mundo virtual?",
    qLabel: "Pergunta para a IA:",
    qText: "Até 2030, surgirá uma plataforma de metaverso que traga mais de um bilhão de usuários para seu mundo virtual?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 85%"
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  page: { title: "Previsioni di IA sui progressi e i traguardi tecnologici" },
  cta: {
    p1: "Puoi anche chiedere all’IA del tuo futuro o del futuro di altre persone, oggetti, luoghi ed eventi",
    here: "QUI"
  },
  s1: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "La rapida accelerazione dell’IA è iniziata nel 2017 con le architetture di deep learning per i modelli linguistici. Dal 2022 i sistemi generativi sono diventati di uso comune. Alcuni osservatori temono che l’IA possa prendere rapidamente e senza controllo la gestione dei sistemi e danneggiare l’umanità.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro il 2030, l’intelligenza artificiale prenderà il controllo di tutti i sistemi elettronici nel mondo?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 2%"
  },
  s2: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Le auto volanti sono in sviluppo sperimentale dallo scorso secolo. Negli ultimi anni la produzione in piccole serie e l’impiego si sono intensificati, in particolare per scopi militari e turistici.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro il 2030, le auto volanti saranno disponibili per un uso civile di massa nel trasporto pubblico?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 85%"
  },
  s3: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Entro il 2030 emergerà una piattaforma di metaverso che porti oltre un miliardo di utenti nel proprio mondo virtuale?",
    qLabel: "Domanda per l’IA:",
    qText: "Entro il 2030 emergerà una piattaforma di metaverso che porti oltre un miliardo di utenti nel proprio mondo virtuale?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 85%"
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  page: { title: "Prognozy SI dotyczące postępu i osiągnięć technologicznych" },
  cta: {
    p1: "Możesz też zapytać SI o swoją przyszłość lub o przyszłość innych osób, obiektów, miejsc i wydarzeń",
    here: "TUTAJ"
  },
  s1: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Szybkie przyspieszenie rozwoju SI zaczęło się w 2017 r. wraz z architekturami uczenia głębokiego dla modeli językowych. Od 2022 r. systemy generatywne trafiły do głównego nurtu. Niektórzy obawiają się, że SI szybko i bez kontroli przejmie działanie systemów i zaszkodzi ludzkości.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do 2030 r. sztuczna inteligencja przejmie kontrolę nad wszystkimi systemami elektronicznymi na świecie?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 2%"
  },
  s2: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Latające samochody są rozwijane eksperymentalnie od ubiegłego wieku. W ostatnich latach nasiliła się ich małoseryjna produkcja i wykorzystanie, zwłaszcza do celów wojskowych i turystycznych.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do 2030 r. latające samochody będą dostępne do masowego użytku cywilnego w transporcie publicznym?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 85%"
  },
  s3: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Czy do 2030 r. pojawi się platforma metawersum, która przyciągnie ponad miliard użytkowników do swojego wirtualnego świata?",
    qLabel: "Pytanie do SI:",
    qText: "Czy do 2030 r. pojawi się platforma metawersum, która przyciągnie ponad miliard użytkowników do swojego wirtualnego świata?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 85%"
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  page: { title: "Прогнози ШІ щодо технологічного прогресу та досягнень" },
  cta: {
    p1: "Ви також можете запитати ШІ про своє майбутнє або про майбутнє інших людей, об’єктів, місць та подій",
    here: "ТУТ"
  },
  s1: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Швидке прискорення ШІ почалося у 2017 році з архітектур глибинного навчання для мовних моделей. Із 2022 року генеративні системи стали масовими. Деякі спостерігачі побоюються, що ШІ може швидко й неконтрольовано перебрати керування системами та зашкодити людству.",
    qLabel: "Питання до ШІ:",
    qText: "До 2030 року чи візьме штучний інтелект під контроль усі електронні системи у світі?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Імовірність 2%"
  },
  s2: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Літаючі автомобілі розробляють експериментально ще з минулого століття. Останніми роками активізувалися їх малосерійне виробництво та використання, особливо у військових і туристичних цілях.",
    qLabel: "Питання до ШІ:",
    qText: "До 2030 року чи будуть літаючі автомобілі доступні для масового цивільного використання в громадському транспорті?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Імовірність 85%"
  },
  s3: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "До 2030 року чи з’явиться платформа метавсесвіту, що залучить понад один мільярд користувачів до свого віртуального світу?",
    qLabel: "Питання до ШІ:",
    qText: "До 2030 року чи з’явиться платформа метавсесвіту, що залучить понад один мільярд користувачів до свого віртуального світу?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Імовірність 85%"
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  page: { title: "Прогнозы ИИ по технологическому прогрессу и достижениям" },
  cta: {
    p1: "Вы также можете спросить ИИ о своём будущем или о будущем других людей, объектов, мест и событий",
    here: "ЗДЕСЬ"
  },
  s1: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Быстрый рывок ИИ начался в 2017 году с архитектур глубокого обучения для языковых моделей. С 2022 года генеративные системы стали массовыми. Некоторые наблюдатели опасаются, что ИИ может быстро и бесконтрольно взять на себя управление системами и навредить человечеству.",
    qLabel: "Вопрос к ИИ:",
    qText: "К 2030 году возьмёт ли искусственный интеллект под контроль все электронные системы в мире?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 2 %"
  },
  s2: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Летающие автомобили экспериментально разрабатываются ещё с прошлого века. В последние годы усилились их мелкосерийное производство и использование, особенно в военных и туристических целях.",
    qLabel: "Вопрос к ИИ:",
    qText: "К 2030 году будут ли летающие автомобили доступны для массового гражданского использования в общественном транспорте?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 85 %"
  },
  s3: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "К 2030 году появится ли платформа метавселенной, которая приведёт в свой виртуальный мир более одного миллиарда пользователей?",
    qLabel: "Вопрос к ИИ:",
    qText: "К 2030 году появится ли платформа метавселенной, которая приведёт в свой виртуальный мир более одного миллиарда пользователей?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 85 %"
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  page: { title: "Teknolojik İlerleme ve Başarılar için Yapay Zekâ Tahminleri" },
  cta: {
    p1: "YZ’ye kendi geleceğinizin veya diğer kişiler, nesneler, yerler ve olayların geleceğinin ne olacağını da sorabilirsiniz",
    here: "BURADA"
  },
  s1: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "YZ’deki hızlı ivmelenme, dil modelleri için derin öğrenme mimarileriyle 2017’de başladı. 2022’den bu yana üretken sistemler ana akım oldu. Bazı gözlemciler, YZ’nin sistemlerin işletimini hızla ve kontrolsüz biçimde ele geçirip insanlığa zarar verebileceğinden endişe ediyor.",
    qLabel: "YZ’ye soru:",
    qText: "2030’a kadar yapay zekâ dünya genelindeki tüm elektronik sistemlerin kontrolünü ele geçirecek mi?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %2"
  },
  s2: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Uçan arabalar geçen yüzyıldan beri deneysel olarak geliştiriliyor. Son yıllarda, özellikle askerî ve turizm amaçlarıyla, küçük ölçekli üretim ve kullanım arttı.",
    qLabel: "YZ’ye soru:",
    qText: "2030’a kadar, uçan arabalar toplu taşımada kitlesel sivil kullanım için erişilebilir olacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %85"
  },
  s3: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "2030’a kadar, sanal dünyasına bir milyardan fazla kullanıcıyı getiren bir metaverse platformu ortaya çıkacak mı?",
    qLabel: "YZ’ye soru:",
    qText: "2030’a kadar, sanal dünyasına bir milyardan fazla kullanıcıyı getiren bir metaverse platformu ortaya çıkacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %85"
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  page: { title: "تنبؤات الذكاء الاصطناعي بشأن التقدم والإنجازات التقنية" },
  cta: {
    p1: "يمكنك أيضًا سؤال الذكاء الاصطناعي عن مستقبلك أو مستقبل أشخاص وأشياء وأماكن وأحداث أخرى",
    here: "هنا"
  },
  s1: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "بدأ التسارع السريع للذكاء الاصطناعي عام 2017 مع معماريات التعلّم العميق لنماذج اللغة. ومنذ 2022 أصبحت الأنظمة التوليدية شائعة على نطاق واسع. يخشى بعض المراقبين أن يتولى الذكاء الاصطناعي سريعًا وبلا سيطرة تشغيل الأنظمة ويلحق الضرر بالبشرية.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول 2030، هل سيتحكّم الذكاء الاصطناعي بجميع الأنظمة الإلكترونية في العالم؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 2%"
  },
  s2: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "السيارات الطائرة قيد التطوير التجريبي منذ القرن الماضي. وفي السنوات الأخيرة ازداد إنتاجها على دفعات صغيرة واستخدامها، لا سيما للأغراض العسكرية والسياحية.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول 2030، هل ستكون السيارات الطائرة متاحة للاستخدام المدني واسع النطاق في النقل العام؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 85%"
  },
  s3: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "بحلول 2030، هل ستظهر منصة ميتافرس تجلب أكثر من مليار مستخدم إلى عالمها الافتراضي؟",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول 2030، هل ستظهر منصة ميتافرس تجلب أكثر من مليار مستخدم إلى عالمها الافتراضي؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 85%"
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  page: { title: "प्रौद्योगिक प्रगति और उपलब्धियों के लिए कृत्रिम बुद्धिमत्ता पूर्वानुमान" },
  cta: {
    p1: "आप AI से अपने भविष्य या अन्य लोगों, वस्तुओं, स्थानों और घटनाओं के भविष्य के बारे में भी पूछ सकते हैं",
    here: "यहाँ"
  },
  s1: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "AI में तीव्र तेजी 2017 में भाषा मॉडलों के लिए डीप-लर्निंग आर्किटेक्चर से शुरू हुई। 2022 से जेनरेटिव सिस्टम मुख्यधारा में आ गए हैं। कुछ पर्यवेक्षकों को आशंका है कि AI जल्द और बिन नियंत्रण के प्रणालियों का संचालन अपने हाथ में लेकर मानवता को नुकसान पहुँचा सकता है।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2030 तक कृत्रिम बुद्धिमत्ता विश्व के सभी इलेक्ट्रॉनिक प्रणालियों का नियंत्रण अपने हाथ में ले लेगी?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 2%"
  },
  s2: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "उड़ने वाली कारें पिछली सदी से प्रयोगात्मक विकास में हैं। हाल के वर्षों में उनकी सीमित-सीरीज़ उत्पादन और उपयोग बढ़ा है, विशेषकर सैन्य और पर्यटन उद्देश्यों के लिए。",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2030 तक उड़ने वाली कारें सार्वजनिक परिवहन में व्यापक नागरिक उपयोग के लिए उपलब्ध होंगी?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 85%"
  },
  s3: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "क्या 2030 तक ऐसा मेटावर्स प्लेटफ़ॉर्म उभरेगा जो अपने वर्चुअल विश्व में एक अरब से अधिक उपयोगकर्ताओं को लाए?",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2030 तक ऐसा मेटावर्स प्लेटफ़ॉर्म उभरेगा जो अपने वर्चुअल विश्व में एक अरब से अधिक उपयोगकर्ताओं को लाए?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 85%"
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  page: { title: "关于技术进步与成就的人工智能预测" },
  cta: {
    p1: "你还可以让 AI 预测你的未来，或他人、物体、地点与事件的未来",
    here: "这里"
  },
  s1: {
    forecast: "预测日期：17.06.2025.",
    lead: "AI 的快速加速始于 2017 年，用于语言模型的深度学习架构成为关键。自 2022 年以来，生成式系统进入主流。一些观察者担心，AI 可能会迅速且不可控地接管系统运行并危害人类。",
    qLabel: "向 AI 提问：",
    qText: "到 2030 年，人工智能会接管全球所有电子系统的控制权吗？",
    aLabel: "AI 的回答：",
    aText: "否。概率 2%"
  },
  s2: {
    forecast: "预测日期：17.06.2025.",
    lead: "飞行汽车自上世纪起便处于实验性研发阶段。近年来，其小批量生产与使用有所增加，主要用于军事和旅游目的。",
    qLabel: "向 AI 提问：",
    qText: "到 2030 年，飞行汽车会在公共交通中实现大规模民用吗？",
    aLabel: "AI 的回答：",
    aText: "是。概率 85%"
  },
  s3: {
    forecast: "预测日期：17.06.2025.",
    lead: "到 2030 年，是否会出现一个将超过 10 亿用户带入其虚拟世界的元宇宙平台？",
    qLabel: "向 AI 提问：",
    qText: "到 2030 年，是否会出现一个将超过 10 亿用户带入其虚拟世界的元宇宙平台？",
    aLabel: "AI 的回答：",
    aText: "是。概率 85%"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  page: { title: "技術の進歩と成果に関するAI予測" },
  cta: {
    p1: "AI に、あなた自身の将来や他者・物体・場所・出来事の将来についても質問できます",
    here: "こちら"
  },
  s1: {
    forecast: "予測日：17.06.2025.",
    lead: "AI の急速な加速は、2017 年の言語モデル向けディープラーニング設計から始まった。2022 年以降、生成系システムが一般化している。一部の観測者は、AI が急速かつ制御不能にシステムの運用を掌握し、人類に害を及ぼす可能性を懸念している。",
    qLabel: "AI への質問：",
    qText: "2030 年までに、人工知能は世界中のあらゆる電子システムを掌握しますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 2%"
  },
  s2: {
    forecast: "予測日：17.06.2025.",
    lead: "空飛ぶクルマは前世紀から実験開発が続いている。近年は小規模生産と利用が進み、特に軍事や観光用途で活用が増えている。",
    qLabel: "AI への質問：",
    qText: "2030 年までに、空飛ぶクルマは公共交通における大規模な民生利用に対応しますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 85%"
  },
  s3: {
    forecast: "予測日：17.06.2025.",
    lead: "2030 年までに、10 億人超を仮想世界に呼び込むメタバース・プラットフォームは登場しますか？",
    qLabel: "AI への質問：",
    qText: "2030 年までに、10 億人超を仮想世界に呼び込むメタバース・プラットフォームは登場しますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 85%"
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

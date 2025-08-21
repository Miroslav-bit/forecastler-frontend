// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Geopolitics and International Relations" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "U.S.–Russia relations have been marked by crisis in recent years, especially after the Russia–Ukraine conflict; after February 2023, political contacts between Russia and the United States were reduced to a minimum. Following the election of Donald Trump as U.S. president, attempts were renewed to deepen political ties with Russia in order to address the Ukraine crisis.",
      qLabel: "Question for AI:",
      qText: "In 2025, will the presidents of the United States and Russia hold a meeting?",
      aLabel: "AI answer:",
      aText: "YES. Probability 85%",
      valid: "Forecast came true",
      source: "Confirmation source"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "After Hamas’s attack on Israel on October 7, 2023, Israel launched an offensive in Gaza that has so far claimed more than 60,000 lives. The conflict has heightened tensions across the region and led to clashes between Israel and Hezbollah, the Houthis, and Iran, with Israel conducting military operations in Lebanon, Syria, Iraq, Iran, and Yemen.",
      qLabel: "Question for AI:",
      qText: "In the second half of 2025, will Israel carry out another attack on a foreign country?",
      aLabel: "AI answer:",
      aText: "YES. Probability 80%",
      valid: "Forecast came true",
      source: "Confirmation source"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The last confirmed explosive nuclear test was conducted in September 2017 in North Korea. Some states have carried out tests without a chain reaction. North Korea has repeatedly signaled readiness for a seventh nuclear test.",
      qLabel: "Question for AI:",
      qText: "By the end of 2025, will any country conduct an explosive test of a nuclear bomb?",
      aLabel: "AI answer:",
      aText: "NO. Probability 25%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: " Prognoze veštačke inteligencije za geopolitiku i međunarodne odnose" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Rusko-američke odnose poslednjih godina obeležila je kriza, naročito posle rusko-ukrajinskog sukoba, a nakon februara 2023. politički kontakti Rusije i Sjedinjenih Američkih Država svedeni su na minimum. Nakon izbora Donalda Trampa za predsednika SAD, obnovljeni su pokušaji produbljivanja političkih odnosa sa Rusijom radi rešavanja ukrajinske krize.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će tokom 2025. godine doći do susreta predsednika SAD i Rusije?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 85%",
      valid: "Prognoza se obistinila",
      source: "Izvor potvrde"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Nakon napada Hamasa na Izrael 7. oktobra 2023, usledila je izraelska ofanziva u Gazi koja je do sada odnela preko 60.000 života. Taj sukob izazvao je tenzije u čitavom regionu i sukobe Izraela sa Hezbolahom, Hutima i Iranom, usled čega je Izrael sprovodio vojne akcije na području Libana, Sirije, Iraka, Irana i Jemena.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će u drugoj polovini 2025. godine Izrael sprovesti novi napad na neku drugu zemlju?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 80%",
      valid: "Prognoza se obistinila",
      source: "Izvor potvrde"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Poslednji potvrđeni eksplozivni nuklearni test izveden je u septembru 2017. u Severnoj Koreji. Pojedine države izvodile su testove bez lančane reakcije. Severna Koreja više puta signalizira spremnost za sedmi nuklearni test.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do kraja 2025. godine u bilo kojoj državi biti obavljeno eksplozivno testiranje nuklearne bombe?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 25%"
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  page: { title: "Pronósticos de Inteligencia Artificial sobre Geopolítica y Relaciones Internacionales" },
  cta: {
    p1: "También puedes preguntar a la IA sobre tu futuro o el de otras personas, objetos, lugares y eventos",
    here: "AQUÍ"
  },
  s1: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Las relaciones EE. UU.–Rusia han estado marcadas por la crisis en los últimos años, especialmente tras el conflicto Rusia–Ucrania; después de febrero de 2023, los contactos políticos entre Rusia y Estados Unidos se redujeron al mínimo. Tras la elección de Donald Trump como presidente de EE. UU., se renovaron los intentos de profundizar los lazos políticos con Rusia para abordar la crisis de Ucrania.",
    qLabel: "Pregunta para la IA:",
    qText: "En 2025, ¿los presidentes de Estados Unidos y Rusia celebrarán una reunión?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 85%",
    valid: "El pronóstico se cumplió",
    source: "Fuente de confirmación"
  },
  s2: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Tras el ataque de Hamás contra Israel el 7 de octubre de 2023, Israel lanzó una ofensiva en Gaza que hasta ahora ha cobrado más de 60,000 vidas. El conflicto ha aumentado las tensiones en toda la región y ha provocado choques entre Israel y Hezbolá, los hutíes e Irán, con operaciones militares israelíes en Líbano, Siria, Irak, Irán y Yemen.",
    qLabel: "Pregunta para la IA:",
    qText: "En la segunda mitad de 2025, ¿Israel llevará a cabo otro ataque en un país extranjero?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 80%",
    valid: "El pronóstico se cumplió",
    source: "Fuente de confirmación"
  },
  s3: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "La última prueba nuclear explosiva confirmada se realizó en septiembre de 2017 en Corea del Norte. Algunos Estados han llevado a cabo pruebas sin reacción en cadena. Corea del Norte ha señalado repetidamente su disposición a una séptima prueba nuclear.",
    qLabel: "Pregunta para la IA:",
    qText: "¿Antes de que termine 2025 algún país realizará una prueba explosiva de una bomba nuclear?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 25%"
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  page: { title: "Prévisions d’intelligence artificielle sur la géopolitique et les relations internationales" },
  cta: {
    p1: "Vous pouvez aussi interroger l’IA sur votre avenir ou celui d’autres personnes, objets, lieux et événements",
    here: "ICI"
  },
  s1: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Les relations États-Unis–Russie ont été marquées par la crise ces dernières années, surtout après le conflit Russie–Ukraine ; après février 2023, les contacts politiques entre la Russie et les États-Unis ont été réduits au minimum. Après l’élection de Donald Trump comme président des États-Unis, des tentatives ont été relancées pour approfondir les liens politiques avec la Russie afin de traiter la crise ukrainienne.",
    qLabel: "Question pour l’IA :",
    qText: "En 2025, les présidents des États-Unis et de la Russie tiendront-ils une rencontre ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 85 %",
    valid: "La prévision s’est réalisée",
    source: "Source de confirmation"
  },
  s2: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Après l’attaque du Hamas contre Israël le 7 octobre 2023, Israël a lancé une offensive à Gaza qui a jusqu’à présent fait plus de 60 000 morts. Le conflit a accru les tensions dans toute la région et conduit à des affrontements entre Israël et le Hezbollah, les Houthis et l’Iran, Israël menant des opérations militaires au Liban, en Syrie, en Irak, en Iran et au Yémen.",
    qLabel: "Question pour l’IA :",
    qText: "Au second semestre 2025, Israël mènera-t-il une nouvelle attaque contre un pays étranger ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 80 %",
    valid: "La prévision s’est réalisée",
    source: "Source de confirmation"
  },
  s3: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Le dernier essai nucléaire explosif confirmé a été réalisé en septembre 2017 en Corée du Nord. Certains États ont effectué des essais sans réaction en chaîne. La Corée du Nord a à plusieurs reprises signalé sa disponibilité pour un septième essai nucléaire.",
    qLabel: "Question pour l’IA :",
    qText: "D’ici fin 2025, un pays effectuera-t-il un essai explosif de bombe nucléaire ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 25 %"
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  page: { title: "KI-Prognosen zu Geopolitik und internationalen Beziehungen" },
  cta: {
    p1: "Sie können die KI auch zu Ihrer Zukunft oder zur Zukunft anderer Menschen, Objekte, Orte und Ereignisse befragen",
    here: "HIER"
  },
  s1: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Die Beziehungen USA–Russland waren in den letzten Jahren von Krisen geprägt, insbesondere nach dem Russland–Ukraine-Konflikt; nach Februar 2023 wurden die politischen Kontakte zwischen Russland und den USA auf ein Minimum reduziert. Nach der Wahl Donald Trumps zum US-Präsidenten wurden Versuche erneuert, die politischen Beziehungen zu Russland zu vertiefen, um die Ukraine-Krise anzugehen.",
    qLabel: "Frage an die KI:",
    qText: "Werden sich 2025 die Präsidenten der Vereinigten Staaten und Russlands zu einem Treffen zusammenfinden?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 85 %",
    valid: "Die Prognose traf ein",
    source: "Bestätigungsquelle"
  },
  s2: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Nach dem Angriff der Hamas auf Israel am 7. Oktober 2023 startete Israel eine Offensive im Gazastreifen, die bislang über 60.000 Menschenleben forderte. Der Konflikt hat die Spannungen in der Region erhöht und zu Zusammenstößen zwischen Israel und der Hisbollah, den Huthi sowie dem Iran geführt; Israel führte Militäroperationen im Libanon, in Syrien, im Irak, im Iran und im Jemen durch.",
    qLabel: "Frage an die KI:",
    qText: "Wird Israel in der zweiten Jahreshälfte 2025 einen weiteren Angriff auf ein ausländisches Land durchführen?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 80 %",
    valid: "Die Prognose traf ein",
    source: "Bestätigungsquelle"
  },
  s3: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Der letzte bestätigte explosive Kernwaffentest fand im September 2017 in Nordkorea statt. Einige Staaten führten Tests ohne Kettenreaktion durch. Nordkorea hat wiederholt seine Bereitschaft zu einem siebten Nukleartest signalisiert.",
    qLabel: "Frage an die KI:",
    qText: "Wird bis Ende 2025 irgendein Land einen explosiven Test einer Atombombe durchführen?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 25 %"
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  page: { title: "Previsões de IA para Geopolítica e Relações Internacionais" },
  cta: {
    p1: "Você também pode perguntar à IA sobre o seu futuro ou o futuro de outras pessoas, objetos, lugares e eventos",
    here: "AQUI"
  },
  s1: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "As relações EUA–Rússia têm sido marcadas por crise nos últimos anos, especialmente após o conflito Rússia–Ucrânia; depois de fevereiro de 2023, os contatos políticos entre a Rússia e os Estados Unidos foram reduzidos ao mínimo. Após a eleição de Donald Trump como presidente dos EUA, foram retomadas tentativas de aprofundar os laços políticos com a Rússia para lidar com a crise na Ucrânia.",
    qLabel: "Pergunta para a IA:",
    qText: "Em 2025, os presidentes dos Estados Unidos e da Rússia realizarão uma reunião?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 85%",
    valid: "A previsão se confirmou",
    source: "Fonte de confirmação"
  },
  s2: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Após o ataque do Hamas a Israel em 7 de outubro de 2023, Israel lançou uma ofensiva em Gaza que, até agora, tirou mais de 60.000 vidas. O conflito elevou as tensões em toda a região e levou a confrontos entre Israel e o Hezbollah, os houthis e o Irã, com operações militares israelenses no Líbano, Síria, Iraque, Irã e Iêmen.",
    qLabel: "Pergunta para a IA:",
    qText: "Na segunda metade de 2025, Israel realizará outro ataque a um país estrangeiro?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 80%",
    valid: "A previsão se confirmou",
    source: "Fonte de confirmação"
  },
  s3: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "O último teste nuclear explosivo confirmado foi realizado em setembro de 2017 na Coreia do Norte. Alguns Estados realizaram testes sem reação em cadeia. A Coreia do Norte sinalizou repetidamente estar pronta para um sétimo teste nuclear.",
    qLabel: "Pergunta para a IA:",
    qText: "Até o final de 2025, algum país realizará um teste explosivo de bomba nuclear?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 25%"
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  page: { title: "Previsioni di IA per geopolitica e relazioni internazionali" },
  cta: {
    p1: "Puoi anche chiedere all’IA del tuo futuro o del futuro di altre persone, oggetti, luoghi ed eventi",
    here: "QUI"
  },
  s1: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "I rapporti USA–Russia sono stati segnati dalla crisi negli ultimi anni, soprattutto dopo il conflitto Russia–Ucraina; dopo febbraio 2023 i contatti politici tra Russia e Stati Uniti sono stati ridotti al minimo. Dopo l’elezione di Donald Trump a presidente degli Stati Uniti, sono stati rinnovati i tentativi di approfondire i legami politici con la Russia per affrontare la crisi ucraina.",
    qLabel: "Domanda per l’IA:",
    qText: "Nel 2025 i presidenti degli Stati Uniti e della Russia terranno un incontro?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 85%",
    valid: "La previsione si è avverata",
    source: "Fonte di conferma"
  },
  s2: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Dopo l’attacco di Hamas contro Israele del 7 ottobre 2023, Israele ha lanciato un’offensiva a Gaza che finora ha causato oltre 60.000 morti. Il conflitto ha acuito le tensioni nella regione e portato a scontri tra Israele e Hezbollah, gli Houthi e l’Iran, con operazioni militari israeliane in Libano, Siria, Iraq, Iran e Yemen.",
    qLabel: "Domanda per l’IA:",
    qText: "Nella seconda metà del 2025, Israele effettuerà un altro attacco contro un paese straniero?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 80%",
    valid: "La previsione si è avverata",
    source: "Fonte di conferma"
  },
  s3: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "L’ultimo test nucleare esplosivo confermato è stato condotto nel settembre 2017 in Corea del Nord. Alcuni Stati hanno effettuato test senza reazione a catena. La Corea del Nord ha più volte segnalato la disponibilità a un settimo test nucleare.",
    qLabel: "Domanda per l’IA:",
    qText: "Entro la fine del 2025, qualche paese condurrà un test esplosivo di una bomba nucleare?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 25%"
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  page: { title: "Prognozy SI dotyczące geopolityki i stosunków międzynarodowych" },
  cta: {
    p1: "Możesz też zapytać SI o swoją przyszłość lub o przyszłość innych osób, obiektów, miejsc i wydarzeń",
    here: "TUTAJ"
  },
  s1: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Relacje USA–Rosja w ostatnich latach naznaczone były kryzysem, zwłaszcza po konflikcie rosyjsko-ukraińskim; po lutym 2023 r. kontakty polityczne między Rosją a Stanami Zjednoczonymi zostały ograniczone do minimum. Po wyborze Donalda Trumpa na prezydenta USA odnowiono próby pogłębienia więzi politycznych z Rosją w celu rozwiązania kryzysu na Ukrainie.",
    qLabel: "Pytanie do SI:",
    qText: "Czy w 2025 r. dojdzie do spotkania prezydentów USA i Rosji?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 85%",
    valid: "Prognoza się sprawdziła",
    source: "Źródło potwierdzenia"
  },
  s2: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Po ataku Hamasu na Izrael 7 października 2023 r. Izrael rozpoczął ofensywę w Strefie Gazy, która dotąd pochłonęła ponad 60 000 istnień. Konflikt spotęgował napięcia w całym regionie i doprowadził do starć Izraela z Hezbollahem, Huti oraz Iranem, przy operacjach wojskowych Izraela w Libanie, Syrii, Iraku, Iranie i Jemenie.",
    qLabel: "Pytanie do SI:",
    qText: "Czy w drugiej połowie 2025 r. Izrael przeprowadzi kolejny atak na obce państwo?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 80%",
    valid: "Prognoza się sprawdziła",
    source: "Źródło potwierdzenia"
  },
  s3: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Ostatni potwierdzony wybuchowy test jądrowy przeprowadzono we wrześniu 2017 r. w Korei Północnej. Niektóre państwa przeprowadzały testy bez reakcji łańcuchowej. Korea Północna wielokrotnie sygnalizowała gotowość do siódmej próby jądrowej.",
    qLabel: "Pytanie do SI:",
    qText: "Czy do końca 2025 r. jakiekolwiek państwo przeprowadzi wybuchową próbę bomby jądrowej?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 25%"
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  page: { title: "Прогнози ШІ щодо геополітики та міжнародних відносин" },
  cta: {
    p1: "Ви також можете запитати ШІ про своє майбутнє або про майбутнє інших людей, об’єктів, місць та подій",
    here: "ТУТ"
  },
  s1: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Відносини США–Росія останніми роками позначені кризою, особливо після російсько-українського конфлікту; після лютого 2023 року політичні контакти між Росією та США були зведені до мінімуму. Після обрання Дональда Трампа президентом США були відновлені спроби поглибити політичні зв’язки з Росією для врегулювання кризи в Україні.",
    qLabel: "Питання до ШІ:",
    qText: "У 2025 році чи відбудеться зустріч президентів США та Росії?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Імовірність 85%",
    valid: "Прогноз справдився",
    source: "Джерело підтвердження"
  },
  s2: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Після нападу ХАМАС на Ізраїль 7 жовтня 2023 року Ізраїль розпочав наступ у Газі, що донині забрав понад 60 000 життів. Конфлікт підвищив напруженість у всьому регіоні та призвів до зіткнень між Ізраїлем і «Хезболлою», хуситами та Іраном; Ізраїль проводив військові операції в Лівані, Сирії, Іраку, Ірані та Ємені.",
    qLabel: "Питання до ШІ:",
    qText: "У другій половині 2025 року чи здійснить Ізраїль ще один напад на іншу державу?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Імовірність 80%",
    valid: "Прогноз справдився",
    source: "Джерело підтвердження"
  },
  s3: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Останнє підтверджене вибухове ядерне випробування було проведено у вересні 2017 року в Північній Кореї. Деякі держави здійснювали випробування без ланцюгової реакції. Північна Корея неодноразово заявляла про готовність до сьомого ядерного випробування.",
    qLabel: "Питання до ШІ:",
    qText: "До кінця 2025 року чи проведе якась країна вибухове випробування ядерної бомби?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Імовірність 25%"
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  page: { title: "Прогнозы ИИ по геополитике и международным отношениям" },
  cta: {
    p1: "Вы также можете спросить ИИ о своём будущем или о будущем других людей, объектов, мест и событий",
    here: "ЗДЕСЬ"
  },
  s1: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Отношения США–Россия в последние годы отмечены кризисом, особенно после конфликта Россия–Украина; после февраля 2023 года политические контакты между Россией и США были сведены к минимуму. После избрания Дональда Трампа президентом США были возобновлены попытки углубить политические связи с Россией для урегулирования кризиса на Украине.",
    qLabel: "Вопрос к ИИ:",
    qText: "В 2025 году состоится ли встреча президентов США и России?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 85 %",
    valid: "Прогноз сбылся",
    source: "Источник подтверждения"
  },
  s2: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "После нападения ХАМАС на Израиль 7 октября 2023 года Израиль начал наступление в секторе Газа, которое к настоящему времени унесло более 60 000 жизней. Конфликт обострил напряжённость во всём регионе и привёл к столкновениям Израиля с «Хезболлой», хуситами и Ираном; Израиль проводил военные операции в Ливане, Сирии, Ираке, Иране и Йемене.",
    qLabel: "Вопрос к ИИ:",
    qText: "Во второй половине 2025 года совершит ли Израиль ещё одну атаку на иностранное государство?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 80 %",
    valid: "Прогноз сбылся",
    source: "Источник подтверждения"
  },
  s3: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Последнее подтверждённое взрывное ядерное испытание было проведено в сентябре 2017 года в Северной Корее. Некоторые государства проводили испытания без цепной реакции. Северная Корея неоднократно заявляла о готовности к седьмому ядерному испытанию.",
    qLabel: "Вопрос к ИИ:",
    qText: "До конца 2025 года проведёт ли какая-либо страна взрывное испытание ядерной бомбы?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 25 %"
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  page: { title: "Jeopolitik ve Uluslararası İlişkiler için Yapay Zekâ Tahminleri" },
  cta: {
    p1: "YZ’ye kendi geleceğinizin veya diğer kişiler, nesneler, yerler ve olayların geleceğinin ne olacağını da sorabilirsiniz",
    here: "BURADA"
  },
  s1: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "ABD–Rusya ilişkileri son yıllarda, özellikle Rusya–Ukrayna çatışmasının ardından, krizle şekillendi; Şubat 2023’ten sonra Rusya ile ABD arasındaki siyasi temaslar en aza indirildi. Donald Trump’ın ABD başkanı seçilmesinin ardından, Ukrayna krizini ele almak amacıyla Rusya ile siyasi bağları derinleştirme yönündeki girişimler yeniden canlandırıldı.",
    qLabel: "YZ’ye soru:",
    qText: "2025’te Amerika Birleşik Devletleri ve Rusya başkanları bir görüşme yapacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %85",
    valid: "Tahmin gerçekleşti",
    source: "Doğrulama kaynağı"
  },
  s2: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Hamas’ın 7 Ekim 2023’te İsrail’e saldırısının ardından İsrail, Gazze’de şu ana kadar 60.000’den fazla can kaybına yol açan bir harekât başlattı. Çatışma, bölgede gerilimi artırdı ve İsrail ile Hizbullah, Husiler ve İran arasında çatışmalara yol açtı; İsrail, Lübnan, Suriye, Irak, İran ve Yemen’de askerî operasyonlar yürüttü.",
    qLabel: "YZ’ye soru:",
    qText: "2025’in ikinci yarısında İsrail başka bir yabancı ülkeye saldırı gerçekleştirecek mi?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %80",
    valid: "Tahmin gerçekleşti",
    source: "Doğrulama kaynağı"
  },
  s3: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "Son doğrulanmış patlayıcı nükleer deneme Eylül 2017’de Kuzey Kore’de yapıldı. Bazı devletler zincirleme tepkime olmadan testler gerçekleştirdi. Kuzey Kore, yedinci nükleer denemeye hazır olduğunu defalarca bildirdi.",
    qLabel: "YZ’ye soru:",
    qText: "2025’in sonuna kadar herhangi bir ülke patlayıcı bir atom bombası denemesi yapacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %25"
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  page: { title: "تنبؤات الذكاء الاصطناعي حول الجيوسياسة والعلاقات الدولية" },
  cta: {
    p1: "يمكنك أيضًا سؤال الذكاء الاصطناعي عن مستقبلك أو مستقبل أشخاص وأشياء وأماكن وأحداث أخرى",
    here: "هنا"
  },
  s1: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "علاقات الولايات المتحدة–روسيا اتسمت بالأزمة في السنوات الأخيرة، خاصة بعد الصراع بين روسيا وأوكرانيا؛ وبعد فبراير 2023 خُفِّضت الاتصالات السياسية بين روسيا والولايات المتحدة إلى الحد الأدنى. عقب انتخاب دونالد ترامب رئيسًا للولايات المتحدة، تجددت محاولات تعميق الروابط السياسية مع روسيا لمعالجة أزمة أوكرانيا.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "في عام 2025، هل سيعقد رئيسا الولايات المتحدة وروسيا لقاءً؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 85%",
    valid: "تحقّق التنبؤ",
    source: "مصدر التأكيد"
  },
  s2: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "بعد هجوم حماس على إسرائيل في 7 أكتوبر 2023، شنّت إسرائيل عملية في غزة أودت حتى الآن بحياة أكثر من 60,000 شخص. وقد زاد الصراعُ التوترَ في المنطقة وأدّى إلى مواجهات بين إسرائيل وحزب الله والحوثيين وإيران، مع تنفيذ إسرائيل عمليات عسكرية في لبنان وسوريا والعراق وإيران واليمن.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "في النصف الثاني من 2025، هل ستنفّذ إسرائيل هجومًا آخر على دولة أجنبية؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 80%",
    valid: "تحقّق التنبؤ",
    source: "مصدر التأكيد"
  },
  s3: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "آخر اختبار نووي تفجيري مؤكَّد كان في سبتمبر 2017 في كوريا الشمالية. نفذت بعض الدول اختبارات دون حدوث تفاعلٍ متسلسل. وأشارت كوريا الشمالية مرارًا إلى استعدادها لإجراء اختبار نووي سابع.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول نهاية 2025، هل ستجري أي دولة اختبارًا تفجيريًا لقنبلة نووية؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 25%"
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  page: { title: "भूराजनीति और अंतरराष्ट्रीय संबंधों के लिए कृत्रिम बुद्धिमत्ता पूर्वानुमान" },
  cta: {
    p1: "आप AI से अपने भविष्य या अन्य लोगों, वस्तुओं, स्थानों और घटनाओं के भविष्य के बारे में भी पूछ सकते हैं",
    here: "यहाँ"
  },
  s1: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "अमेरिका–रूस संबंध हाल के वर्षों में संकट से चिह्नित रहे हैं, विशेषकर रूस–यूक्रेन संघर्ष के बाद; फरवरी 2023 के बाद रूस और संयुक्त राज्य के बीच राजनीतिक संपर्क न्यूनतम हो गए। डोनाल्ड ट्रम्प के अमेरिका के राष्ट्रपति चुने जाने के बाद, यूक्रेन संकट से निपटने के लिए रूस के साथ राजनीतिक संबंध गहरे करने के प्रयास फिर से शुरू हुए।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 में संयुक्त राज्य और रूस के राष्ट्रपति बैठक करेंगे?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 85%",
    valid: "पूर्वानुमान सही साबित हुआ",
    source: "पुष्टिकरण स्रोत"
  },
  s2: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "7 अक्टूबर 2023 को हमास के हमले के बाद, इज़राइल ने ग़ाज़ा में एक अभियान शुरू किया जिसने अब तक 60,000 से अधिक लोगों की जान ली है। इस संघर्ष ने पूरे क्षेत्र में तनाव बढ़ा दिया और इज़राइल तथा हिज़्बुल्लाह, हूती और ईरान के बीच झड़पें हुईं; इज़राइल ने लेबनान, सीरिया, इराक, ईरान और यमन में सैन्य अभियान चलाए।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 की दूसरी छमाही में इज़राइल किसी विदेशी देश पर फिर से हमला करेगा?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 80%",
    valid: "पूर्वानुमान सही साबित हुआ",
    source: "पुष्टिकरण स्रोत"
  },
  s3: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "आख़िरी पुष्टि किया गया विस्फोटक परमाणु परीक्षण सितंबर 2017 में उत्तर कोरिया में हुआ था। कुछ देशों ने श्रृंखलात्मक अभिक्रिया के बिना परीक्षण किए हैं। उत्तर कोरिया ने सातवें परमाणु परीक्षण के लिए तत्परता के संकेत बार-बार दिए हैं।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 के अंत तक कोई देश परमाणु बम का विस्फोटक परीक्षण करेगा?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 25%"
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  page: { title: "关于地缘政治与国际关系的人工智能预测" },
  cta: {
    p1: "你还可以让 AI 预测你的未来，或他人、物体、地点与事件的未来",
    here: "这里"
  },
  s1: {
    forecast: "预测日期：17.06.2025.",
    lead: "近年来，美俄关系持续陷入危机，尤其是在俄乌冲突之后；2023 年 2 月之后，俄罗斯与美国之间的政治接触被降至最低。唐纳德•特朗普当选美国总统后，为解决乌克兰危机而加深与俄罗斯政治关系的努力被重新启动。",
    qLabel: "向 AI 提问：",
    qText: "2025 年，美国和俄罗斯总统是否会举行会晤？",
    aLabel: "AI 的回答：",
    aText: "是。概率 85%",
    valid: "预测成真",
    source: "确认来源"
  },
  s2: {
    forecast: "预测日期：17.06.2025.",
    lead: "在 2023 年 10 月 7 日哈马斯对以色列发动袭击后，以色列对加沙发起攻势，迄今已造成超过 60,000 人死亡。该冲突使整个地区紧张局势加剧，并引发以色列与真主党、胡塞武装以及伊朗之间的冲突；以色列还在黎巴嫩、叙利亚、伊拉克、伊朗和也门开展军事行动。",
    qLabel: "向 AI 提问：",
    qText: "2025 年下半年，以色列是否会再次对某个外国实施攻击？",
    aLabel: "AI 的回答：",
    aText: "是。概率 80%",
    valid: "预测成真",
    source: "确认来源"
  },
  s3: {
    forecast: "预测日期：17.06.2025.",
    lead: "最近一次确认的核爆试验于 2017 年 9 月在朝鲜进行。一些国家开展了无链式反应的试验。朝鲜多次表示准备进行第七次核试验。",
    qLabel: "向 AI 提问：",
    qText: "到 2025 年底，是否会有国家进行核弹爆炸试验？",
    aLabel: "AI 的回答：",
    aText: "否。概率 25%"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  page: { title: "地政学と国際関係に関するAI予測" },
  cta: {
    p1: "AI に、あなた自身の将来や他者・物体・場所・出来事の将来についても質問できます",
    here: "こちら"
  },
  s1: {
    forecast: "予測日：17.06.2025.",
    lead: "米国–ロシア関係は近年、特にロシア–ウクライナ紛争以降、危機的状況にある。2023年2月以降、ロシアと米国の政治的接触は最小限に抑えられてきた。ドナルド・トランプが米大統領に選出されたのち、ウクライナ危機に対処するためロシアとの政治的関係を深める試みが再開された。",
    qLabel: "AI への質問：",
    qText: "2025年、米国とロシアの大統領は会談を行いますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 85%",
    valid: "予測は的中しました",
    source: "確認ソース"
  },
  s2: {
    forecast: "予測日：17.06.2025.",
    lead: "2023年10月7日のハマスによるイスラエル攻撃後、イスラエルはガザで攻勢を開始し、これまでに6万人超の死者が出ている。紛争は地域全体の緊張を高め、イスラエルとヒズボラ、フーシ、イランとの衝突に発展し、イスラエルはレバノン、シリア、イラク、イラン、イエメンで軍事作戦を実施した。",
    qLabel: "AI への質問：",
    qText: "2025年後半に、イスラエルは外国に対して再び攻撃を行いますか？",
    aLabel: "AI の回答：",
    aText: "はい。確率 80%",
    valid: "予測は的中しました",
    source: "確認ソース"
  },
  s3: {
    forecast: "予測日：17.06.2025.",
    lead: "直近で確認された爆発的な核実験は2017年9月、北朝鮮で行われた。いくつかの国は連鎖反応を伴わない試験を実施している。北朝鮮は7回目の核実験に向けた用意があると繰り返し示している。",
    qLabel: "AI への質問：",
    qText: "2025年末までに、いずれかの国が核爆弾の爆発実験を実施しますか？",
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

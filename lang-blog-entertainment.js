// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Entertainment, Media, and Show Business" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The films with the most Academy Awards—11 Oscars—are Ben-Hur (1958), Titanic (1997), and The Lord of the Rings: The Return of the King (2003).",
      qLabel: "Question for AI:",
      qText: "By 2030, will there be a film that wins more than 11 Oscars?",
      aLabel: "AI answer:",
      aText: "NO. Probability 10%"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Since 1956, Sweden and Ireland have the most Eurovision Song Contest victories, with seven each, followed by France, the United Kingdom, the Netherlands, and Luxembourg with five each. This year’s winner is Austria; accordingly, the next Eurovision will be hosted in Austria.",
      qLabel: "Question for AI:",
      qText: "At Eurovision 2026, will Austria— as host—win again?",
      aLabel: "AI answer:",
      aText: "NO. Probability 20%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The country with the most Nobel laureates is the United States, followed by the United Kingdom, France, and Germany. Last year’s laureates came from the United States, the United Kingdom, Canada, South Korea, and Japan.",
      qLabel: "Question for AI:",
      qText: "At the 2025 Nobel Prize awards, will there be at least one laureate from the United States?",
      aLabel: "AI answer:",
      aText: "YES. Probability 85%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za dešavanja u svetu zabave, medija i šou-biznisa" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Filmovi sa najviše osvojenih — 11 Oskara — su Ben-Hur (1958), Titanik (1997) i Gospodar prstenova: Povratak kralja (2003).",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do 2030. godine biti snimljen film koji će osvojiti više od 11 Oskara?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 10%"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Od 1956. najviše pobeda na Pesmi Evrovizije imaju Švedska i Irska sa po 7, a slede Francuska, Ujedinjeno Kraljevstvo, Holandija i Luksemburg sa po 5. Ovogodišnji pobednik je predstavnik Austrije. Tim povodom, sledeći Eurosong održava se u Austriji.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će na Pesmi Evrovizije 2026. godine Austrija, kao domaćin, ponovo ostvariti pobedu?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 20%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Država s najviše dobitnika Nobelove nagrade su Sjedinjene Američke Države, zatim slede Ujedinjeno Kraljevstvo, Francuska i Nemačka. Prošlogodišnji laureati dolaze iz SAD, Ujedinjenog Kraljevstva, Kanade, Južne Koreje i Japana.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će na dodeli Nobelove nagrade 2025. godine biti makar jedan laureat iz Sjedinjenih Američkih Država?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 85%"
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  page: { title: "Pronósticos de Inteligencia Artificial para el Entretenimiento, los Medios y el Espectáculo" },
  cta: {
    p1: "También puedes preguntar a la IA sobre tu futuro o el de otras personas, objetos, lugares y eventos",
    here: "AQUÍ"
  },
  s1: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Las películas con más Premios Óscar —11— son Ben-Hur (1958), Titanic (1997) y El Señor de los Anillos: El retorno del Rey (2003).",
    qLabel: "Pregunta para la IA:",
    qText: "Para 2030, ¿habrá una película que gane más de 11 Óscar?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 10%"
  },
  s2: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "Desde 1956, Suecia e Irlanda son los países con más victorias en Eurovisión, con siete cada uno, seguidos de Francia, Reino Unido, Países Bajos y Luxemburgo con cinco. La ganadora de este año es Austria; en consecuencia, el próximo Eurovisión se celebrará en Austria.",
    qLabel: "Pregunta para la IA:",
    qText: "En Eurovisión 2026, ¿ganará nuevamente Austria como país anfitrión?",
    aLabel: "Respuesta de la IA:",
    aText: "NO. Probabilidad 20%"
  },
  s3: {
    forecast: "Fecha del pronóstico: 17.06.2025.",
    lead: "El país con más laureados con el Nobel son los Estados Unidos, seguido por el Reino Unido, Francia y Alemania. Los laureados del año pasado procedían de Estados Unidos, Reino Unido, Canadá, Corea del Sur y Japón.",
    qLabel: "Pregunta para la IA:",
    qText: "En los Premios Nobel de 2025, ¿habrá al menos un laureado de Estados Unidos?",
    aLabel: "Respuesta de la IA:",
    aText: "SÍ. Probabilidad 85%"
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  page: { title: "Prévisions d’intelligence artificielle pour le divertissement, les médias et le show-business" },
  cta: {
    p1: "Vous pouvez aussi interroger l’IA sur votre avenir ou celui d’autres personnes, objets, lieux et événements",
    here: "ICI"
  },
  s1: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Les films ayant remporté le plus d’Oscars — 11 — sont Ben-Hur (1958), Titanic (1997) et Le Seigneur des anneaux : Le Retour du roi (2003).",
    qLabel: "Question pour l’IA :",
    qText: "D’ici 2030, existera-t-il un film qui remportera plus de 11 Oscars ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 10 %"
  },
  s2: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Depuis 1956, la Suède et l’Irlande détiennent le record de victoires à l’Eurovision, avec sept chacune, suivies de la France, du Royaume-Uni, des Pays-Bas et du Luxembourg avec cinq. Le vainqueur cette année est l’Autriche ; en conséquence, le prochain concours se tiendra en Autriche.",
    qLabel: "Question pour l’IA :",
    qText: "À l’Eurovision 2026, l’Autriche — en tant que pays hôte — gagnera-t-elle de nouveau ?",
    aLabel: "Réponse de l’IA :",
    aText: "NON. Probabilité 20 %"
  },
  s3: {
    forecast: "Date du pronostic : 17.06.2025.",
    lead: "Le pays comptant le plus de lauréats Nobel est les États-Unis, suivis du Royaume-Uni, de la France et de l’Allemagne. Les lauréats de l’an dernier venaient des États-Unis, du Royaume-Uni, du Canada, de la Corée du Sud et du Japon.",
    qLabel: "Question pour l’IA :",
    qText: "Aux Nobel 2025, y aura-t-il au moins un lauréat originaire des États-Unis ?",
    aLabel: "Réponse de l’IA :",
    aText: "OUI. Probabilité 85 %"
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  page: { title: "KI-Prognosen für Unterhaltung, Medien und Showbusiness" },
  cta: {
    p1: "Sie können die KI auch zu Ihrer Zukunft oder zur Zukunft anderer Menschen, Objekte, Orte und Ereignisse befragen",
    here: "HIER"
  },
  s1: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Die Filme mit den meisten Academy Awards — 11 Oscars — sind Ben-Hur (1958), Titanic (1997) und Der Herr der Ringe: Die Rückkehr des Königs (2003).",
    qLabel: "Frage an die KI:",
    qText: "Wird es bis 2030 einen Film geben, der mehr als 11 Oscars gewinnt?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 10 %"
  },
  s2: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Seit 1956 haben Schweden und Irland die meisten Siege beim Eurovision Song Contest mit jeweils sieben, gefolgt von Frankreich, dem Vereinigten Königreich, den Niederlanden und Luxemburg mit jeweils fünf. Der Sieger in diesem Jahr ist Österreich; folglich findet der nächste Eurovision in Österreich statt.",
    qLabel: "Frage an die KI:",
    qText: "Wird Österreich als Gastgeber beim Eurovision 2026 erneut gewinnen?",
    aLabel: "KI-Antwort:",
    aText: "NEIN. Wahrscheinlichkeit 20 %"
  },
  s3: {
    forecast: "Prognosedatum: 17.06.2025.",
    lead: "Das Land mit den meisten Nobelpreisträgern sind die USA, gefolgt vom Vereinigten Königreich, Frankreich und Deutschland. Die Preisträger des letzten Jahres kamen aus den USA, dem Vereinigten Königreich, Kanada, Südkorea und Japan.",
    qLabel: "Frage an die KI:",
    qText: "Wird es bei den Nobelpreisen 2025 mindestens einen Preisträger aus den USA geben?",
    aLabel: "KI-Antwort:",
    aText: "JA. Wahrscheinlichkeit 85 %"
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  page: { title: "Previsões de IA para Entretenimento, Mídia e Show Business" },
  cta: {
    p1: "Você também pode perguntar à IA sobre o seu futuro ou o futuro de outras pessoas, objetos, lugares e eventos",
    here: "AQUI"
  },
  s1: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Os filmes com mais Oscars — 11 — são Ben-Hur (1958), Titanic (1997) e O Senhor dos Anéis: O Retorno do Rei (2003).",
    qLabel: "Pergunta para a IA:",
    qText: "Até 2030, haverá um filme que ganhe mais de 11 Oscars?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 10%"
  },
  s2: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "Desde 1956, Suécia e Irlanda têm o maior número de vitórias no Eurovision, com sete cada. Em seguida vêm França, Reino Unido, Países Baixos e Luxemburgo com cinco. A vencedora deste ano é a Áustria; portanto, o próximo Eurovision será hospedado na Áustria.",
    qLabel: "Pergunta para a IA:",
    qText: "No Eurovision 2026, a Áustria — como anfitriã — vencerá novamente?",
    aLabel: "Resposta da IA:",
    aText: "NÃO. Probabilidade 20%"
  },
  s3: {
    forecast: "Data da previsão: 17.06.2025.",
    lead: "O país com mais laureados do Nobel são os Estados Unidos, seguido pelo Reino Unido, França e Alemanha. Os laureados do ano passado vieram dos Estados Unidos, Reino Unido, Canadá, Coreia do Sul e Japão.",
    qLabel: "Pergunta para a IA:",
    qText: "Nos Prêmios Nobel de 2025, haverá pelo menos um laureado dos Estados Unidos?",
    aLabel: "Resposta da IA:",
    aText: "SIM. Probabilidade 85%"
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  page: { title: "Previsioni di IA per intrattenimento, media e show business" },
  cta: {
    p1: "Puoi anche chiedere all’IA del tuo futuro o del futuro di altre persone, oggetti, luoghi ed eventi",
    here: "QUI"
  },
  s1: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "I film con il maggior numero di Academy Awards — 11 Oscar — sono Ben-Hur (1958), Titanic (1997) e Il Signore degli Anelli - Il ritorno del re (2003).",
    qLabel: "Domanda per l’IA:",
    qText: "Entro il 2030, ci sarà un film che vincerà più di 11 Oscar?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 10%"
  },
  s2: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Dal 1956, Svezia e Irlanda detengono il record di vittorie all’Eurovision, con sette ciascuna, seguite da Francia, Regno Unito, Paesi Bassi e Lussemburgo con cinque. La vincitrice di quest’anno è l’Austria; di conseguenza, il prossimo Eurovision si terrà in Austria.",
    qLabel: "Domanda per l’IA:",
    qText: "All’Eurovision 2026, l’Austria — in quanto paese ospitante — vincerà di nuovo?",
    aLabel: "Risposta dell’IA:",
    aText: "NO. Probabilità 20%"
  },
  s3: {
    forecast: "Data della previsione: 17.06.2025.",
    lead: "Il paese con il maggior numero di premi Nobel sono gli Stati Uniti, seguiti da Regno Unito, Francia e Germania. I vincitori dell’anno scorso provenivano da Stati Uniti, Regno Unito, Canada, Corea del Sud e Giappone.",
    qLabel: "Domanda per l’IA:",
    qText: "Ai Premi Nobel 2025, ci sarà almeno un premiato degli Stati Uniti?",
    aLabel: "Risposta dell’IA:",
    aText: "SÌ. Probabilità 85%"
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  page: { title: "Prognozy SI dla rozrywki, mediów i show-biznesu" },
  cta: {
    p1: "Możesz też zapytać SI o swoją przyszłość lub o przyszłość innych osób, obiektów, miejsc i wydarzeń",
    here: "TUTAJ"
  },
  s1: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Filmami z największą liczbą nagród Akademii — 11 Oscarów — są Ben-Hur (1958), Titanic (1997) oraz Władca Pierścieni: Powrót króla (2003).",
    qLabel: "Pytanie do SI:",
    qText: "Czy do 2030 r. pojawi się film, który zdobędzie więcej niż 11 Oscarów?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 10%"
  },
  s2: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Od 1956 r. najwięcej zwycięstw w Konkursie Piosenki Eurowizji mają Szwecja i Irlandia — po siedem. Następne są: Francja, Zjednoczone Królestwo, Niderlandy i Luksemburg — po pięć. Zwycięzcą w tym roku jest Austria; w związku z tym następna Eurowizja odbędzie się w Austrii.",
    qLabel: "Pytanie do SI:",
    qText: "Czy na Eurowizji 2026 Austria — jako gospodarz — wygra ponownie?",
    aLabel: "Odpowiedź SI:",
    aText: "NIE. Prawdopodobieństwo 20%"
  },
  s3: {
    forecast: "Data prognozy: 17.06.2025.",
    lead: "Krajem z największą liczbą noblistów są Stany Zjednoczone, następnie Zjednoczone Królestwo, Francja i Niemcy. Laureaci z ubiegłego roku pochodzili z USA, Zjednoczonego Królestwa, Kanady, Korei Południowej i Japonii.",
    qLabel: "Pytanie do SI:",
    qText: "Czy podczas Nagród Nobla 2025 będzie przynajmniej jeden laureat ze Stanów Zjednoczonych?",
    aLabel: "Odpowiedź SI:",
    aText: "TAK. Prawdopodobieństwo 85%"
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  page: { title: "Прогнози ШІ для індустрії розваг, медіа та шоу-бізнесу" },
  cta: {
    p1: "Ви також можете запитати ШІ про своє майбутнє або про майбутнє інших людей, об’єктів, місць та подій",
    here: "ТУТ"
  },
  s1: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Фільми з найбільшою кількістю «Оскарів» — 11 — це «Бен-Гур» (1958), «Титанік» (1997) та «Володар перснів: Повернення короля» (2003).",
    qLabel: "Питання до ШІ:",
    qText: "До 2030 року чи з’явиться фільм, що здобуде понад 11 «Оскарів»?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Ймовірність 10%"
  },
  s2: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "З 1956 року найбільше перемог на Євробаченні мають Швеція та Ірландія — по сім. Далі йдуть Франція, Велика Британія, Нідерланди та Люксембург — по п’ять. Переможцем цього року стала Австрія; відповідно, наступне Євробачення прийматиме Австрія.",
    qLabel: "Питання до ШІ:",
    qText: "На Євробаченні-2026 чи переможе Австрія знову як країна-господар?",
    aLabel: "Відповідь ШІ:",
    aText: "НІ. Ймовірність 20%"
  },
  s3: {
    forecast: "Дата прогнозу: 17.06.2025.",
    lead: "Країна з найбільшою кількістю лауреатів Нобелівської премії — Сполучені Штати, далі Велика Британія, Франція та Німеччина. Торішні лауреати були зі США, Великої Британії, Канади, Південної Кореї та Японії.",
    qLabel: "Питання до ШІ:",
    qText: "На Нобелівських преміях 2025 року чи буде принаймні один лауреат зі США?",
    aLabel: "Відповідь ШІ:",
    aText: "ТАК. Ймовірність 85%"
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  page: { title: "Прогнозы ИИ для индустрии развлечений, СМИ и шоу-бизнеса" },
  cta: {
    p1: "Вы также можете спросить ИИ о своём будущем или о будущем других людей, объектов, мест и событий",
    here: "ЗДЕСЬ"
  },
  s1: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Фильмы с наибольшим числом наград Академии — 11 премий «Оскар» — это «Бен-Гур» (1958), «Титаник» (1997) и «Властелин колец: Возвращение короля» (2003).",
    qLabel: "Вопрос к ИИ:",
    qText: "К 2030 году появится ли фильм, получивший более 11 «Оскаров»?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 10 %"
  },
  s2: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "С 1956 года больше всего побед на «Евровидении» у Швеции и Ирландии — по семь. Далее следуют Франция, Великобритания, Нидерланды и Люксембург — по пять. В этом году победила Австрия; соответственно, следующий конкурс пройдёт в Австрии.",
    qLabel: "Вопрос к ИИ:",
    qText: "Победит ли Австрия — как принимающая страна — на «Евровидении-2026» снова?",
    aLabel: "Ответ ИИ:",
    aText: "НЕТ. Вероятность 20 %"
  },
  s3: {
    forecast: "Дата прогноза: 17.06.2025.",
    lead: "Страна с наибольшим количеством нобелевских лауреатов — США, далее идут Великобритания, Франция и Германия. Лауреаты прошлого года были из США, Великобритании, Канады, Южной Кореи и Японии.",
    qLabel: "Вопрос к ИИ:",
    qText: "На Нобелевских премиях 2025 года будет ли хотя бы один лауреат из США?",
    aLabel: "Ответ ИИ:",
    aText: "ДА. Вероятность 85 %"
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  page: { title: "Eğlence, Medya ve Şov Dünyası için Yapay Zekâ Tahminleri" },
  cta: {
    p1: "YZ’ye kendi geleceğinizin veya diğer kişiler, nesneler, yerler ve olayların geleceğinin ne olacağını da sorabilirsiniz",
    here: "BURADA"
  },
  s1: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "En çok Akademi Ödülü (11 Oscar) kazanan filmler: Ben-Hur (1958), Titanic (1997) ve Yüzüklerin Efendisi: Kralın Dönüşü (2003).",
    qLabel: "YZ’ye soru:",
    qText: "2030’a kadar 11’den fazla Oscar kazanan bir film olacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %10"
  },
  s2: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "1956’dan bu yana Eurovision’u en çok kazanan ülkeler yedişer zaferle İsveç ve İrlanda’dır; onları beşer zaferle Fransa, Birleşik Krallık, Hollanda ve Lüksemburg izler. Bu yılın kazananı Avusturya’dır; buna göre bir sonraki Eurovision Avusturya’da yapılacaktır.",
    qLabel: "YZ’ye soru:",
    qText: "Ev sahibi olarak Avusturya, Eurovision 2026’yı yeniden kazanacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "HAYIR. Olasılık %20"
  },
  s3: {
    forecast: "Tahmin tarihi: 17.06.2025.",
    lead: "En çok Nobel ödüllüsüne sahip ülke Amerika Birleşik Devletleri’dir; ardından Birleşik Krallık, Fransa ve Almanya gelir. Geçen yılın ödül sahipleri ABD, Birleşik Krallık, Kanada, Güney Kore ve Japonya’dan geldi.",
    qLabel: "YZ’ye soru:",
    qText: "2025 Nobel Ödülleri’nde Amerika Birleşik Devletleri’nden en az bir ödül sahibi olacak mı?",
    aLabel: "YZ yanıtı:",
    aText: "EVET. Olasılık %85"
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  page: { title: "تنبؤات الذكاء الاصطناعي للترفيه ووسائل الإعلام وعالم الاستعراض" },
  cta: {
    p1: "يمكنك أيضًا سؤال الذكاء الاصطناعي عن مستقبلك أو مستقبل أشخاص وأشياء وأماكن وأحداث أخرى",
    here: "هنا"
  },
  s1: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "أكثر الأفلام فوزًا بجوائز الأوسكار — 11 جائزة — هي: «بن هور» (1958) و«تيتانيك» (1997) و«سيد الخواتم: عودة الملك» (2003).",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "بحلول 2030، هل سيكون هناك فيلم يفوز بأكثر من 11 أوسكارًا؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 10%"
  },
  s2: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "منذ 1956 تتصدر السويد وإيرلندا مسابقات يوروفيجن بسبعة انتصارات لكلٍ منهما، تليهما فرنسا والمملكة المتحدة وهولندا ولوكسمبورغ بخمسة لكلٍ منها. الفائز هذا العام هو النمسا؛ وبناءً عليه سيُقام اليوروفيجن القادم في النمسا.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "في يوروفيجن 2026، هل ستفوز النمسا مجددًا بصفتها الدولة المضيفة؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "لا. الاحتمال 20%"
  },
  s3: {
    forecast: "تاريخ التنبؤ: 17.06.2025.",
    lead: "الدولة الأكثر حصدًا لجوائز نوبل هي الولايات المتحدة، تليها المملكة المتحدة وفرنسا وألمانيا. وجاء فائزوا العام الماضي من الولايات المتحدة والمملكة المتحدة وكندا وكوريا الجنوبية واليابان.",
    qLabel: "سؤال للذكاء الاصطناعي:",
    qText: "في جوائز نوبل لعام 2025، هل سيكون هناك على الأقل فائز واحد من الولايات المتحدة؟",
    aLabel: "إجابة الذكاء الاصطناعي:",
    aText: "نعم. الاحتمال 85%"
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  page: { title: "मनोरंजन, मीडिया और शो बिज़नेस के लिए कृत्रिम बुद्धिमत्ता पूर्वानुमान" },
  cta: {
    p1: "आप AI से अपने भविष्य या अन्य लोगों, वस्तुओं, स्थानों और घटनाओं के भविष्य के बारे में भी पूछ सकते हैं",
    here: "यहाँ"
  },
  s1: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "सबसे अधिक एकेडमी अवॉर्ड (11 ऑस्कर) पाने वाली फ़िल्में हैं: बेन-हूर (1958), टाइटैनिक (1997) और द लॉर्ड ऑफ द रिंग्स: द रिटर्न ऑफ द किंग (2003)।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2030 तक कोई फ़िल्म 11 से अधिक ऑस्कर जीतेगी?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 10%"
  },
  s2: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "1956 से, यूरोविज़न में सबसे अधिक जीत स्वीडन और आयरलैंड (7-7) की हैं; इसके बाद फ्रांस, यूनाइटेड किंगडम, नीदरलैंड्स और लक्समबर्ग (5-5) आते हैं। इस वर्ष की विजेता ऑस्ट्रिया है; इसलिए अगला यूरोविज़न ऑस्ट्रिया में आयोजित होगा।",
    qLabel: "AI से प्रश्न:",
    qText: "यूरोविज़न 2026 में, क्या मेज़बान के रूप में ऑस्ट्रिया फिर से जीतेगा?",
    aLabel: "AI का उत्तर:",
    aText: "नहीं। प्रायिकता 20%"
  },
  s3: {
    forecast: "पूर्वानुमान तिथि: 17.06.2025.",
    lead: "सबसे अधिक नोबेल पुरस्कार विजेताओं वाला देश संयुक्त राज्य अमेरिका है, इसके बाद यूनाइटेड किंगडम, फ्रांस और जर्मनी आते हैं। पिछले वर्ष के विजेता अमेरिका, ब्रिटेन, कनाडा, दक्षिण कोरिया और जापान से थे।",
    qLabel: "AI से प्रश्न:",
    qText: "क्या 2025 के नोबेल पुरस्कारों में कम से कम एक विजेता संयुक्त राज्य अमेरिका से होगा?",
    aLabel: "AI का उत्तर:",
    aText: "हाँ। प्रायिकता 85%"
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  page: { title: "关于娱乐、媒体与演艺界的人工智能预测" },
  cta: {
    p1: "你还可以让 AI 预测你的未来，或他人、物体、地点与事件的未来",
    here: "这里"
  },
  s1: {
    forecast: "预测日期：17.06.2025.",
    lead: "获奥斯卡奖最多的影片——各 11 项——是《宾虚》（1958）、《泰坦尼克号》（1997）和《指环王：王者归来》（2003）。",
    qLabel: "向 AI 提问：",
    qText: "到 2030 年，会不会出现一部获得超过 11 项奥斯卡的电影？",
    aLabel: "AI 的回答：",
    aText: "否。概率 10%"
  },
  s2: {
    forecast: "预测日期：17.06.2025.",
    lead: "自 1956 年以来，瑞典与爱尔兰并列为 Eurovision（欧洲歌唱大赛）夺冠次数最多的国家，各 7 次，其后是法国、英国、荷兰和卢森堡，各 5 次。今年冠军为奥地利；因此下一届将由奥地利承办。",
    qLabel: "向 AI 提问：",
    qText: "在 2026 年的欧洲歌唱大赛上，作为东道主的奥地利会再次夺冠吗？",
    aLabel: "AI 的回答：",
    aText: "否。概率 20%"
  },
  s3: {
    forecast: "预测日期：17.06.2025.",
    lead: "诺贝尔获奖者最多的国家是美国，其次是英国、法国和德国。去年的获奖者来自美国、英国、加拿大、韩国和日本。",
    qLabel: "向 AI 提问：",
    qText: "在 2025 年诺贝尔奖上，是否会有至少一位来自美国的获奖者？",
    aLabel: "AI 的回答：",
    aText: "是。概率 85%"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  page: { title: "エンタメ・メディア・ショービジネスに関するAI予測" },
  cta: {
    p1: "AI に、あなた自身の将来や他者・物体・場所・出来事の将来についても質問できます",
    here: "こちら"
  },
  s1: {
    forecast: "予測日：17.06.2025.",
    lead: "最多受賞（11部門）を達成した作品は『ベン・ハー』（1958）、『タイタニック』（1997）、『ロード・オブ・ザ・リング／王の帰還』（2003）。",
    qLabel: "AI への質問：",
    qText: "2030年までに、オスカーを11部門超で受賞する作品は現れますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 10%"
  },
  s2: {
    forecast: "予測日：17.06.2025.",
    lead: "1956年以降、ユーロビジョン・ソング・コンテストの最多優勝はスウェーデンとアイルランド（各7回）。続いてフランス、イギリス、オランダ、ルクセンブルク（各5回）。今年の優勝はオーストリアで、次回大会はオーストリア開催となる。",
    qLabel: "AI への質問：",
    qText: "ユーロビジョン2026で、開催国のオーストリアは再び優勝しますか？",
    aLabel: "AI の回答：",
    aText: "いいえ。確率 20%"
  },
  s3: {
    forecast: "予測日：17.06.2025.",
    lead: "ノーベル受賞者が最も多い国はアメリカ合衆国で、次いで英国、フランス、ドイツが続く。昨年の受賞者は米国、英国、カナダ、韓国、日本から出た。",
    qLabel: "AI への質問：",
    qText: "2025年のノーベル賞で、米国から少なくとも1名の受賞者は出ますか？",
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

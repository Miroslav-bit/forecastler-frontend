// lang-about.js (čista verzija samo za about.html)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    how: {
      title: "Predicting the Future",
      p1: "People have always wanted to peek into their own future—to reduce uncertainty, make better decisions, and protect what matters to them. Throughout history there have been many attempts to predict outcomes: from palm reading and casting lots or bones, to seers and prophets, and to the astrological systems of the modern era.",
      p2: "Although culturally and symbolically significant, these methods were limited in accuracy and verifiability. The scientific approach starts with cause and effect: if all relevant parameters are known and governed by stable laws, an outcome can be estimated—and sometimes calculated—with high precision.",
      p3: "Weather forecasting is a classic example: with sound measurements, models, and mathematics, good data yields useful predictions. In the real world, however, we rarely have complete data; systems are complex and sensitive to initial conditions, so it is more practical to speak in terms of probability rather than certainty.",
      p4: "In the philosophy of science, there is the metaphor of Laplace’s demon—an ideal intellect that, if it knew the position and velocity of every particle in the universe, could compute both the past and the future. In practice, such complete knowledge does not exist.",
      p5: "Even so, the idea highlights a key point: the more complete and higher-quality our data, the more reliable the forecasts. This is where modern artificial intelligence is useful—as a tool that rapidly integrates large volumes of information and provides probability estimates of future outcomes."
    },
    work: {
      title: "How Forecastler Works",
      p1: "<strong>Forecastler</strong> uses artificial intelligence as a contemporary approach to prediction, making it one of the pioneering attempts to produce individual forecasts in a transparent, understandable, and statistically grounded way.",
      p2: "<strong>1) User input:</strong> You enter information about the subject whose future interests you (a person, object, location, event, etc.) and ask a question that permits a binary answer (YES/NO).",
      p3: "<strong>2) Data processing:</strong> The AI treats your information as variables in a model, links them to its knowledge base and relevant statistics, and applies rules of reasoning and mathematical methods.",
      p4: "<strong>3) Probability estimate:</strong> Based on the processed data, the system returns a YES/NO answer together with a probability (in percent). Wherever possible, it relies on statistical reasoning and scientifically grounded patterns.",
      p5: "<strong>4) Input quality = output quality:</strong> If the input contains little or unclear information, the AI relies more on general averages and broad patterns. The more detail you provide, the narrower the range of possible outcomes and the more precise the forecast becomes.",
      p6: "<strong>5) Limitations:</strong> The AI can be wrong—especially when inputs are sparse or contradictory, or when events depend on many unpredictable factors. Forecastler does not claim to know the future; it estimates probabilities based on the data available.",
      p7: "<strong>Note:</strong> Forecastler does not provide medical, financial, or legal advice. Treat the results as decision support, not as guaranteed outcomes."
    },
    dev: {
      title: "The Development of Forecastler",
      p1: "Forecastler, as a platform and interface for AI-assisted prediction, has been under development since <strong>December 2024</strong> in <strong>Subotica, Republic of Serbia</strong>. The project was officially launched on <strong>June 17, 2025</strong>, and continues to evolve through iterative development.",
      p2: "Behind Forecastler stands the <strong>Forecastler team</strong> from Subotica—a blend of engineering, analytical, and design experience with a shared mission: to make forecasts clear, useful, and fair for users.",
      p3: "<strong>Planned improvements:</strong> Feature expansions (more question types, additional output indicators, more flexible response formats).",
      p4: "Algorithmic enhancements (better fusion of contextual information and statistics; more robust estimates with less input data).",
      p5: "Interface optimization (quicker input, clearer guidance for high-quality inputs, improved accessibility).",
      p6: "Greater transparency (clearer explanations of why an estimate is what it is, where the model’s limits are, and how to improve your input).",
      p7: "We believe the future should not be an enigma but an informed set of probabilities anyone can understand. If you share that vision, you’re welcome to ask, test, and suggest—because Forecastler grows alongside its community of users."
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    how: {
      title: "Predviđanje budućnosti",
      p1: "Ljudi oduvek žele da zavire u sopstvenu budućnost — da smanje neizvesnost, donose bolje odluke i zaštite ono što im je važno. Kroz istoriju su postojali mnogi pokušaji da se predvide ishodi: od gledanja u dlan i bacanja kockica ili kostiju, preko vračeva i proroka, do astroloških sistema modernog doba.",
      p2: "Iako kulturno i simbolički značajne, te metode imaju ograničenu tačnost i proverljivost. Naučni pristup polazi od uzroka i posledice: ako su svi relevantni parametri poznati i potčinjeni stabilnim zakonima, ishod se može proceniti — ponekad i izračunati — sa visokom preciznošću.",
      p3: "Vremenska prognoza je klasičan primer: uz kvalitetna merenja, modele i matematiku, dobri podaci daju korisna predviđanja. Međutim, u stvarnosti retko imamo potpune podatke; sistemi su složeni i osetljivi na početne uslove, pa je praktičnije govoriti o verovatnoći nego o sigurnosti.",
      p4: "U filozofiji nauke postoji metafora Laplasovog demona — idealan intelekt koji bi, kad bi znao položaj i brzinu svake čestice u univerzumu, mogao da izračuna i prošlost i budućnost. U praksi, takvo potpuno znanje ne postoji.",
      p5: "Ipak, ideja ističe ključnu poentu: što su podaci potpuniji i kvalitetniji, to su prognoze pouzdanije. Tu je moderna veštačka inteligencija korisna — kao alat koji brzo integriše velike količine informacija i daje procene verovatnoće budućih ishoda."
    },
    work: {
      title: "Kako funkcioniše Forecastler",
      p1: "<strong>Forecastler</strong> koristi veštačku inteligenciju kao savremeni pristup predviđanju i predstavlja jedan od pionirskih pokušaja da se pojedinačne prognoze daju na transparentan, razumljiv i statistički utemeljen način.",
      p2: "<strong>1) Unos korisnika:</strong> Unosiš informacije o subjektu čija te budućnost zanima (osoba, predmet, lokacija, događaj itd.) i postavljaš pitanje koje dozvoljava binaran odgovor (DA/NE).",
      p3: "<strong>2) Obrada podataka:</strong> AI tretira tvoje informacije kao promenljive u modelu, povezuje ih sa sopstvenom bazom znanja i relevantnom statistikom i primenjuje pravila zaključivanja i matematičke metode.",
      p4: "<strong>3) Procena verovatnoće:</strong> Na osnovu obrađenih podataka, sistem vraća odgovor DA/NE zajedno sa verovatnoćom (u procentima). Gde god je moguće, oslanja se na statističko rezonovanje i naučno utemeljene obrasce.",
      p5: "<strong>4) Kvalitet ulaza = kvalitet izlaza:</strong> Ako je ulaz siromašan ili nejasan, AI se više oslanja na opšte proseke i široke obrasce. Što daš više detalja, to je raspon mogućih ishoda uži i prognoza preciznija.",
      p6: "<strong>5) Ograničenja:</strong> AI može pogrešiti — naročito kad su ulazi oskudni ili kontradiktorni, ili kad ishod zavisi od nepredvidivih faktora. Forecastler ne tvrdi da zna budućnost; procenjuje verovatnoće na osnovu dostupnih podataka.",
      p7: "<strong>Napomena:</strong> Forecastler ne pruža medicinski, finansijski ili pravni savet. Rezultate koristi kao podršku odlučivanju, ne kao garantovane ishode."
    },
    dev: {
      title: "Razvoj platforme Forecastler",
      p1: "Forecastler, kao platforma i interfejs za predviđanja uz pomoć veštačke inteligencije, razvija se od <strong>decembra 2024.</strong> u <strong>Subotici, Republika Srbija</strong>. Projekat je zvanično pokrenut <strong>17. juna 2025.</strong> i nastavlja da se razvija iterativno.",
      p2: "Iza Forecastlera stoji <strong>Forecastler tim</strong> iz Subotice — spoj inženjerskog, analitičkog i dizajn iskustva sa zajedničkom misijom da prognoze budu jasne, korisne i fer za korisnike.",
      p3: "<strong>Planirana unapređenja:</strong> širenje funkcija (više tipova pitanja, dodatni indikatori, fleksibilniji formati odgovora).",
      p4: "Poboljšanja algoritama (bolje spajanje konteksta i statistike; robusnije procene uz manje ulaznih podataka).",
      p5: "Optimizacija interfejsa (brži unos, jasnije smernice za kvalitetan unos, bolja pristupačnost).",
      p6: "Veća transparentnost (jasnije objašnjenje zašto je procena takva, gde su granice modela i kako da poboljšaš unos).",
      p7: "Verujemo da budućnost ne treba da bude enigma, već skup informisanih verovatnoća. Ako deliš tu viziju, pitaj, testiraj i predlaži — jer Forecastler raste zajedno sa svojom zajednicom."
    }
  }

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
},
  how: {
    title: "Predecir el futuro",
    p1: "Las personas siempre han querido asomarse a su propio futuro — para reducir la incertidumbre, tomar mejores decisiones y proteger lo que les importa. A lo largo de la historia ha habido numerosos intentos de predecir resultados: desde la lectura de la palma y el echar suertes o lanzar huesos, pasando por videntes y profetas, hasta los sistemas astrológicos de la era moderna.",
    p2: "Aunque cultural y simbólicamente significativos, estos métodos eran limitados en precisión y verificabilidad. El enfoque científico empieza con la causa y el efecto: si se conocen todos los parámetros pertinentes y están regidos por leyes estables, el resultado puede estimarse —y a veces calcularse— con gran precisión.",
    p3: "La predicción meteorológica es un ejemplo clásico: con mediciones fiables, modelos y matemáticas, los buenos datos producen pronósticos útiles. Sin embargo, en el mundo real rara vez contamos con datos completos; los sistemas son complejos y sensibles a las condiciones iniciales, por lo que es más práctico hablar en términos de probabilidad que de certeza.",
    p4: "En la filosofía de la ciencia existe la metáfora del demonio de Laplace — un intelecto ideal que, si conociera la posición y la velocidad de cada partícula del universo, podría calcular tanto el pasado como el futuro. En la práctica, tal conocimiento completo no existe.",
    p5: "Aun así, la idea subraya un punto clave: cuanto más completos y de mayor calidad sean nuestros datos, más fiables serán los pronósticos. Aquí es donde la inteligencia artificial moderna resulta útil: como herramienta que integra rápidamente grandes volúmenes de información y ofrece estimaciones de probabilidad de resultados futuros."
  },
  work: {
    title: "Cómo funciona Forecastler",
    p1: "<strong>Forecastler</strong> utiliza la inteligencia artificial como un enfoque contemporáneo de la predicción, lo que lo convierte en uno de los intentos pioneros de producir pronósticos individuales de forma transparente, comprensible y con fundamento estadístico.",
    p2: "<strong>1) Entrada del usuario:</strong> Introduces información sobre el sujeto cuyo futuro te interesa (una persona, objeto, ubicación, evento, etc.) y formulas una pregunta que permita una respuesta binaria (SÍ/NO).",
    p3: "<strong>2) Procesamiento de datos:</strong> La IA trata tu información como variables en un modelo, la vincula con su base de conocimientos y estadísticas relevantes, y aplica reglas de razonamiento y métodos matemáticos.",
    p4: "<strong>3) Estimación de probabilidad:</strong> Basándose en los datos procesados, el sistema devuelve una respuesta SÍ/NO junto con una probabilidad (en porcentaje). Siempre que es posible, se apoya en el razonamiento estadístico y en patrones con base científica.",
    p5: "<strong>4) Calidad de la entrada = calidad de la salida:</strong> Si la entrada contiene poca información o es confusa, la IA se apoya más en promedios generales y patrones amplios. Cuantos más detalles proporciones, más estrecho será el rango de resultados posibles y más precisa será la predicción.",
    p6: "<strong>5) Limitaciones:</strong> La IA puede equivocarse — especialmente cuando las entradas son escasas o contradictorias, o cuando los eventos dependen de muchos factores impredecibles. Forecastler no afirma conocer el futuro; estima probabilidades con base en los datos disponibles.",
    p7: "<strong>Nota:</strong> Forecastler no ofrece asesoramiento médico, financiero ni jurídico. Considera los resultados como apoyo a la toma de decisiones, no como resultados garantizados."
  },
  dev: {
    title: "El desarrollo de Forecastler",
    p1: "Forecastler, como plataforma e interfaz para la predicción asistida por IA, está en desarrollo desde <strong>diciembre de 2024</strong> en <strong>Subotica, República de Serbia</strong>. El proyecto se lanzó oficialmente el <strong>17 de junio de 2025</strong> y continúa evolucionando mediante desarrollo iterativo.",
    p2: "Detrás de Forecastler está el <strong>equipo de Forecastler</strong> de Subotica — una combinación de experiencia en ingeniería, análisis y diseño con una misión compartida: que las previsiones sean claras, útiles y justas para los usuarios.",
    p3: "<strong>Mejoras previstas:</strong> Ampliaciones de funciones (más tipos de preguntas, indicadores de salida adicionales, formatos de respuesta más flexibles).",
    p4: "Mejoras algorítmicas (mejor fusión de información contextual y estadísticas; estimaciones más sólidas con menos datos de entrada).",
    p5: "Optimización de la interfaz (entrada más rápida, pautas más claras para entradas de alta calidad, accesibilidad mejorada).",
    p6: "Mayor transparencia (explicaciones más claras de por qué la estimación es la que es, dónde están los límites del modelo y cómo mejorar tu entrada).",
    p7: "Creemos que el futuro no debe ser un enigma, sino un conjunto informado de probabilidades que cualquiera pueda entender. Si compartes esa visión, eres bienvenido a preguntar, probar y sugerir — porque Forecastler crece junto con su comunidad de usuarios."
  }
},


fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
},
  how: {
    title: "Prédire l’avenir",
    p1: "Les gens ont toujours voulu jeter un coup d’œil sur leur propre avenir — pour réduire l’incertitude, prendre de meilleures décisions et protéger ce qui compte pour eux. Au cours de l’histoire, de nombreuses tentatives ont été faites pour prédire les issues : de la lecture de la paume et du tirage au sort ou du jet d’ossements, aux voyants et prophètes, jusqu’aux systèmes astrologiques de l’époque moderne.",
    p2: "Bien que culturellement et symboliquement significatives, ces méthodes étaient limitées en précision et en vérifiabilité. L’approche scientifique part de la cause et de l’effet : si tous les paramètres pertinents sont connus et régis par des lois stables, on peut estimer — et parfois calculer — un résultat avec une grande précision.",
    p3: "La prévision météorologique est un exemple classique : avec des mesures fiables, des modèles et des mathématiques, de bonnes données produisent des prévisions utiles. Dans le monde réel, toutefois, nous disposons rarement de données complètes ; les systèmes sont complexes et sensibles aux conditions initiales, il est donc plus pratique de parler en termes de probabilité plutôt que de certitude.",
    p4: "En philosophie des sciences, on parle du « démon de Laplace » — un intellect idéal qui, s’il connaissait la position et la vitesse de chaque particule de l’univers, pourrait calculer le passé comme l’avenir. En pratique, un tel savoir total n’existe pas.",
    p5: "Cela dit, l’idée met en évidence un point clé : plus nos données sont complètes et de qualité, plus les prévisions sont fiables. C’est là que l’intelligence artificielle moderne est utile — en tant qu’outil intégrant rapidement de grands volumes d’informations et fournissant des estimations probabilistes des résultats futurs."
  },
  work: {
    title: "Comment fonctionne Forecastler",
    p1: "<strong>Forecastler</strong> utilise l'intelligence artificielle comme approche contemporaine de la prévision, ce qui en fait l'une des premières tentatives visant à produire des prévisions individuelles de manière transparente, compréhensible et statistiquement fondée.",
    p2: "<strong>1) Saisie utilisateur :</strong> Vous saisissez des informations sur le sujet dont l'avenir vous intéresse (personne, objet, lieu, événement, etc.) et posez une question qui admet une réponse binaire (OUI/NON).",
    p3: "<strong>2) Traitement des données :</strong> L'IA traite vos informations comme des variables d'un modèle, les relie à sa base de connaissances et aux statistiques pertinentes, et applique des règles de raisonnement et des méthodes mathématiques.",
    p4: "<strong>3) Estimation de probabilité :</strong> Sur la base des données traitées, le système renvoie une réponse OUI/NON accompagnée d'une probabilité (en pourcentage). Chaque fois que possible, il s'appuie sur un raisonnement statistique et des schémas scientifiquement étayés.",
    p5: "<strong>4) Qualité des données en entrée = qualité des résultats :</strong> Si l'entrée contient peu d'informations ou est floue, l'IA s'appuie davantage sur des moyennes générales et des tendances larges. Plus vous fournissez de détails, plus l'éventail des issues possibles se resserre et plus la prévision devient précise.",
    p6: "<strong>5) Limites :</strong> L'IA peut se tromper — en particulier lorsque les entrées sont rares ou contradictoires, ou lorsque les événements dépendent de nombreux facteurs imprévisibles. Forecastler ne prétend pas connaître l'avenir ; il estime des probabilités à partir des données disponibles.",
    p7: "<strong>Remarque :</strong> Forecastler ne fournit pas de conseils médicaux, financiers ou juridiques. Considérez les résultats comme une aide à la décision, et non comme des résultats garantis."
  },
fr: {
  dev: {
    title: "Le développement de Forecastler",
    p1: "Forecastler, en tant que plateforme et interface de prédiction assistée par IA, est en développement depuis <strong>décembre 2024</strong> à <strong>Subotica, République de Serbie</strong>. Le projet a été officiellement lancé le <strong>17 juin 2025</strong> et continue d’évoluer de manière itérative.",
    p2: "Derrière Forecastler se tient l’<strong>équipe Forecastler</strong> de Subotica — un mélange d’expertise en ingénierie, analyse et design avec une mission commune : rendre les prévisions claires, utiles et équitables pour les utilisateurs.",
    p3: "<strong>Améliorations prévues :</strong> Extensions de fonctionnalités (plus de types de questions, indicateurs de sortie supplémentaires, formats de réponse plus flexibles).",
    p4: "Améliorations algorithmiques (meilleure fusion des informations contextuelles et des statistiques ; estimations plus robustes avec moins de données en entrée).",
    p5: "Optimisation de l’interface (saisie plus rapide, consignes plus claires pour des entrées de haute qualité, accessibilité améliorée).",
    p6: "Transparence accrue (explications plus claires sur les raisons d’une estimation, les limites du modèle et la façon d’améliorer vos entrées).",
    p7: "Nous pensons que l’avenir ne devrait pas être une énigme, mais un ensemble éclairé de probabilités compréhensibles par tous. Si vous partagez cette vision, posez des questions, testez et suggérez — car Forecastler grandit avec sa communauté d’utilisateurs."
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
},
  how: {
    title: "Die Zukunft vorhersagen",
    p1: "Menschen wollten schon immer einen Blick in ihre eigene Zukunft werfen — um Unsicherheit zu verringern, bessere Entscheidungen zu treffen und das zu schützen, was ihnen wichtig ist. Im Lauf der Geschichte gab es viele Versuche, Ergebnisse vorherzusagen: von Handlinienlesen und Loswerfen oder Knochenorakel über Seher und Propheten bis hin zu den astrologischen Systemen der Moderne.",
    p2: "So bedeutsam diese Methoden kulturell und symbolisch sind, waren sie in Genauigkeit und Überprüfbarkeit begrenzt. Der wissenschaftliche Ansatz beginnt mit Ursache und Wirkung: Sind alle relevanten Parameter bekannt und durch stabile Gesetze bestimmt, lässt sich ein Ergebnis abschätzen — und bisweilen mit hoher Präzision berechnen.",
    p3: "Die Wettervorhersage ist ein klassisches Beispiel: Mit verlässlichen Messungen, Modellen und Mathematik liefern gute Daten nützliche Prognosen. In der realen Welt jedoch verfügen wir selten über vollständige Daten; Systeme sind komplex und empfindlich gegenüber Anfangsbedingungen, daher ist es praktischer, in Wahrscheinlichkeiten statt in Gewissheiten zu sprechen.",
    p4: "In der Wissenschaftsphilosophie gibt es die Metapher des laplaceschen Dämons — ein ideales Intellekt, das, wüsste es Position und Geschwindigkeit jeder Teilchen im Universum, sowohl Vergangenheit als auch Zukunft berechnen könnte. In der Praxis existiert solches vollständiges Wissen nicht.",
    p5: "Dennoch verdeutlicht die Idee einen Kernpunkt: Je vollständiger und hochwertiger unsere Daten sind, desto verlässlicher sind die Prognosen. Hier ist moderne KI hilfreich — als Werkzeug, das große Informationsmengen schnell integriert und Wahrscheinlichkeitsabschätzungen zukünftiger Ergebnisse liefert."
  },
  work: {
    title: "So funktioniert Forecastler",
    p1: "<strong>Forecastler</strong> nutzt Künstliche Intelligenz als zeitgemäßen Ansatz zur Vorhersage und zählt damit zu den pionierhaften Versuchen, individuelle Prognosen transparent, verständlich und statistisch fundiert zu erstellen.",
    p2: "<strong>1) Nutzereingabe:</strong> Sie geben Informationen zu dem Subjekt ein, dessen Zukunft Sie interessiert (eine Person, ein Objekt, ein Ort, ein Ereignis usw.), und stellen eine Frage, die eine binäre Antwort zulässt (JA/NEIN).",
    p3: "<strong>2) Datenverarbeitung:</strong> Die KI behandelt Ihre Angaben als Variablen in einem Modell, verknüpft sie mit ihrer Wissensbasis und relevanten Statistiken und wendet Regeln des Schlussfolgens sowie mathematische Methoden an.",
    p4: "<strong>3) Wahrscheinlichkeitsabschätzung:</strong> Auf Grundlage der verarbeiteten Daten gibt das System eine JA/NEIN-Antwort zusammen mit einer Wahrscheinlichkeit (in Prozent) zurück. Wo immer möglich stützt es sich auf statistisches Denken und wissenschaftlich fundierte Muster.",
    p5: "<strong>4) Qualität der Eingaben = Qualität der Ausgaben:</strong> Enthalten die Eingaben wenige oder unklare Informationen, stützt sich die KI stärker auf allgemeine Durchschnitte und grobe Muster. Je mehr Details Sie liefern, desto enger wird die Spanne möglicher Ergebnisse und desto präziser die Prognose.",
    p6: "<strong>5) Einschränkungen:</strong> Die KI kann sich irren — besonders wenn Eingaben spärlich oder widersprüchlich sind oder wenn Ereignisse von vielen unvorhersehbaren Faktoren abhängen. Forecastler beansprucht nicht, die Zukunft zu kennen; es schätzt Wahrscheinlichkeiten auf Basis der verfügbaren Daten.",
    p7: "<strong>Hinweis:</strong> Forecastler erteilt keine medizinischen, finanziellen oder rechtlichen Ratschläge. Betrachten Sie die Ergebnisse als Entscheidungshilfe, nicht als garantierte Resultate."
  },
  dev: {
    title: "Die Entwicklung von Forecastler",
    p1: "Forecastler, als Plattform und Oberfläche für KI-gestützte Vorhersagen, wird seit <strong>Dezember 2024</strong> in <strong>Subotica, Republik Serbien</strong> entwickelt. Das Projekt wurde am <strong>17. Juni 2025</strong> offiziell gestartet und entwickelt sich iterativ weiter.",
    p2: "Hinter Forecastler steht das <strong>Forecastler-Team</strong> aus Subotica — eine Kombination aus Engineering-, Analyse- und Design-Erfahrung mit der gemeinsamen Mission, Vorhersagen für Nutzer klar, nützlich und fair zu machen.",
    p3: "<strong>Geplante Verbesserungen:</strong> Funktionsausbau (mehr Fragetypen, zusätzliche Ausgabeindikatoren, flexiblere Antwortformate).",
    p4: "Algorithmische Verbesserungen (bessere Verknüpfung von Kontextinformationen und Statistiken; robustere Schätzungen mit weniger Eingabedaten).",
    p5: "Interface-Optimierung (schnellere Eingabe, klarere Hinweise für hochwertige Eingaben, verbesserte Barrierefreiheit).",
    p6: "Mehr Transparenz (klarere Erklärungen, warum eine Schätzung so ausfällt, wo die Modellgrenzen liegen und wie Eingaben verbessert werden können).",
    p7: "Wir glauben, die Zukunft sollte kein Rätsel sein, sondern ein fundiertes Set von Wahrscheinlichkeiten, das jeder verstehen kann. Wenn Sie diese Vision teilen, fragen, testen und schlagen Sie vor — denn Forecastler wächst mit seiner Nutzer-Community."
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
},
  how: {
    title: "Prevendo o futuro",
    p1: "As pessoas sempre quiseram espiar o próprio futuro — para reduzir a incerteza, tomar melhores decisões e proteger o que lhes é importante. Ao longo da história, houve muitas tentativas de prever resultados: da leitura das mãos e do tirar sortes ou lançar ossos, a videntes e profetas, até os sistemas astrológicos da era moderna.",
    p2: "Embora cultural e simbolicamente significativos, esses métodos eram limitados em precisão e verificabilidade. A abordagem científica começa pela causa e efeito: se todos os parâmetros relevantes são conhecidos e regidos por leis estáveis, um desfecho pode ser estimado — e às vezes calculado — com alta precisão.",
    p3: "A previsão do tempo é um exemplo clássico: com medições confiáveis, modelos e matemática, bons dados geram previsões úteis. No mundo real, porém, raramente temos dados completos; os sistemas são complexos e sensíveis às condições iniciais, por isso é mais prático falar em probabilidade do que em certeza.",
    p4: "Na filosofia da ciência existe a metáfora do demônio de Laplace — um intelecto ideal que, se conhecesse a posição e a velocidade de cada partícula do universo, poderia calcular tanto o passado quanto o futuro. Na prática, tal conhecimento completo não existe.",
    p5: "Ainda assim, a ideia destaca um ponto central: quanto mais completos e de melhor qualidade forem os dados, mais confiáveis serão as previsões. É aí que a inteligência artificial moderna é útil — como uma ferramenta que integra rapidamente grandes volumes de informação e fornece estimativas de probabilidade para resultados futuros."
  },
  work: {
    title: "Como o Forecastler funciona",
    p1: "<strong>Forecastler</strong> usa inteligência artificial como abordagem contemporânea de previsão, tornando-o uma das tentativas pioneiras de produzir previsões individuais de forma transparente, compreensível e com base estatística.",
    p2: "<strong>1) Entrada do usuário:</strong> Você informa dados sobre o sujeito cujo futuro lhe interessa (uma pessoa, objeto, local, evento etc.) e faz uma pergunta que permita uma resposta binária (SIM/NÃO).",
    p3: "<strong>2) Processamento de dados:</strong> A IA trata suas informações como variáveis em um modelo, as vincula à sua base de conhecimento e a estatísticas relevantes e aplica regras de raciocínio e métodos matemáticos.",
    p4: "<strong>3) Estimativa de probabilidade:</strong> Com base nos dados processados, o sistema retorna uma resposta SIM/NÃO acompanhada de uma probabilidade (em porcentagem). Sempre que possível, apoia-se em raciocínio estatístico e padrões cientificamente fundamentados.",
    p5: "<strong>4) Qualidade da entrada = qualidade da saída:</strong> Se a entrada tiver pouca informação ou for pouco clara, a IA recorre mais a médias gerais e padrões amplos. Quanto mais detalhes você fornecer, mais estreita será a faixa de resultados possíveis e mais precisa será a previsão.",
    p6: "<strong>5) Limitações:</strong> A IA pode errar — especialmente quando as entradas são escassas ou contraditórias, ou quando os eventos dependem de muitos fatores imprevisíveis. O Forecastler não afirma conhecer o futuro; ele estima probabilidades com base nos dados disponíveis.",
    p7: "<strong>Nota:</strong> O Forecastler não fornece aconselhamento médico, financeiro ou jurídico. Trate os resultados como apoio à decisão, não como garantias de resultado."
  },
  dev: {
    title: "O desenvolvimento do Forecastler",
    p1: "O Forecastler, como plataforma e interface para previsão assistida por IA, vem sendo desenvolvido desde <strong>dezembro de 2024</strong> em <strong>Subotica, República da Sérvia</strong>. O projeto foi lançado oficialmente em <strong>17 de junho de 2025</strong> e continua evoluindo por meio de desenvolvimento iterativo.",
    p2: "Por trás do Forecastler está a <strong>equipe Forecastler</strong> de Subotica — uma combinação de experiência em engenharia, análise e design com a missão comum de tornar as previsões claras, úteis e justas para os usuários.",
    p3: "<strong>Melhorias planejadas:</strong> Expansões de recursos (mais tipos de perguntas, indicadores adicionais de saída, formatos de resposta mais flexíveis).",
    p4: "Aprimoramentos algorítmicos (melhor fusão de informação contextual e estatísticas; estimativas mais robustas com menos dados de entrada).",
    p5: "Otimização da interface (entrada mais rápida, orientações mais claras para entradas de alta qualidade, acessibilidade aprimorada).",
    p6: "Maior transparência (explicações mais claras sobre por que a estimativa é o que é, onde estão os limites do modelo e como melhorar sua entrada).",
    p7: "Acreditamos que o futuro não deve ser um enigma, mas um conjunto informado de probabilidades que qualquer pessoa possa compreender. Se você compartilha essa visão, sinta-se à vontade para perguntar, testar e sugerir — o Forecastler cresce junto com sua comunidade de usuários."
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
},
  how: {
    title: "Prevedere il futuro",
    p1: "Le persone hanno sempre desiderato dare uno sguardo al proprio futuro — per ridurre l’incertezza, prendere decisioni migliori e proteggere ciò che per loro conta. Nel corso della storia ci sono stati molti tentativi di prevedere gli esiti: dalla lettura della mano e dal sorteggio o lancio di ossa, ai veggenti e ai profeti, fino ai sistemi astrologici dell’era moderna.",
    p2: "Sebbene culturalmente e simbolicamente significativi, questi metodi erano limitati in accuratezza e verificabilità. L’approccio scientifico parte dal rapporto causa-effetto: se tutti i parametri rilevanti sono noti e regolati da leggi stabili, un esito può essere stimato — e talvolta calcolato — con elevata precisione.",
    p3: "Le previsioni meteorologiche sono un esempio classico: con misurazioni affidabili, modelli e matematica, buoni dati producono previsioni utili. Nella realtà, però, raramente disponiamo di dati completi; i sistemi sono complessi e sensibili alle condizioni iniziali, quindi è più pratico parlare in termini di probabilità piuttosto che di certezza.",
    p4: "Nella filosofia della scienza esiste la metafora del demone di Laplace — un intelletto ideale che, se conoscesse la posizione e la velocità di ogni particella dell’universo, potrebbe calcolare sia il passato sia il futuro. In pratica, una conoscenza così completa non esiste.",
    p5: "Ciononostante, l’idea evidenzia un punto chiave: quanto più completi e di qualità sono i dati, tanto più affidabili sono le previsioni. Qui l’intelligenza artificiale moderna è utile — come strumento che integra rapidamente grandi volumi di informazioni e fornisce stime di probabilità sugli esiti futuri."
  },
  work: {
    title: "Come funziona Forecastler",
    p1: "<strong>Forecastler</strong> utilizza l'intelligenza artificiale come approccio contemporaneo alla previsione, configurandosi come uno dei tentativi pionieristici di produrre previsioni individuali in modo trasparente, comprensibile e con basi statistiche.",
    p2: "<strong>1) Input dell'utente:</strong> Inserisci informazioni sul soggetto di cui ti interessa il futuro (persona, oggetto, luogo, evento, ecc.) e formuli una domanda che ammetta una risposta binaria (SÌ/NO).",
    p3: "<strong>2) Elaborazione dei dati:</strong> L'IA tratta le tue informazioni come variabili in un modello, le collega alla propria base di conoscenza e alle statistiche pertinenti, applicando regole di ragionamento e metodi matematici.",
    p4: "<strong>3) Stima di probabilità:</strong> Sulla base dei dati elaborati, il sistema restituisce una risposta SÌ/NO insieme a una probabilità (in percentuale). Quando possibile, si fonda sul ragionamento statistico e su schemi convalidati scientificamente.",
    p5: "<strong>4) Qualità dell'input = qualità dell'output:</strong> Se l'input contiene poche informazioni o poco chiare, l'IA si affida di più a medie generali e schemi ampi. Più dettagli fornisci, più si restringe l'intervallo degli esiti possibili e più la previsione diventa precisa.",
    p6: "<strong>5) Limitazioni:</strong> L'IA può sbagliare — soprattutto quando gli input sono scarsi o contraddittori, o quando gli eventi dipendono da molti fattori imprevedibili. Forecastler non pretende di conoscere il futuro; stima probabilità in base ai dati disponibili.",
    p7: "<strong>Nota:</strong> Forecastler non fornisce consulenza medica, finanziaria o legale. Considera i risultati un supporto decisionale, non esiti garantiti."
  },
  dev: {
    title: "Lo sviluppo di Forecastler",
    p1: "Forecastler, come piattaforma e interfaccia per la previsione assistita dall’IA, è in sviluppo dal <strong>dicembre 2024</strong> a <strong>Subotica, Repubblica di Serbia</strong>. Il progetto è stato lanciato ufficialmente il <strong>17 giugno 2025</strong> e continua a evolvere tramite sviluppo iterativo.",
    p2: "Dietro Forecastler c’è il <strong>team di Forecastler</strong> di Subotica — un mix di esperienza ingegneristica, analitica e di design con una missione comune: rendere le previsioni chiare, utili ed eque per gli utenti.",
    p3: "<strong>Miglioramenti pianificati:</strong> Espansioni delle funzionalità (più tipi di domande, indicatori di output aggiuntivi, formati di risposta più flessibili).",
    p4: "Miglioramenti algoritmici (migliore fusione tra informazioni contestuali e statistiche; stime più robuste con meno dati in ingresso).",
    p5: "Ottimizzazione dell’interfaccia (inserimento più rapido, indicazioni più chiare per input di alta qualità, accessibilità migliorata).",
    p6: "Maggiore trasparenza (spiegazioni più chiare del perché di una stima, dove sono i limiti del modello e come migliorare il tuo input).",
    p7: "Crediamo che il futuro non debba essere un enigma, ma un insieme informato di probabilità comprensibile a chiunque. Se condividi questa visione, chiedi, testa e suggerisci — Forecastler cresce insieme alla sua comunità di utenti."
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
},
  how: {
    title: "Przewidywanie przyszłości",
    p1: "Ludzie od zawsze chcieli zajrzeć we własną przyszłość — by zmniejszyć niepewność, podejmować lepsze decyzje i chronić to, co ważne. W historii podejmowano wiele prób przewidywania wyników: od czytania z dłoni i losowania lub wróżenia z kości, przez jasnowidzów i proroków, po współczesne systemy astrologiczne.",
    p2: "Choć metody te mają znaczenie kulturowe i symboliczne, były ograniczone pod względem dokładności i weryfikowalności. Podejście naukowe zaczyna się od przyczyn i skutków: jeśli wszystkie istotne parametry są znane i podlegają stabilnym prawom, wynik można oszacować — a czasem obliczyć — z dużą precyzją.",
    p3: "Prognozowanie pogody to klasyczny przykład: przy wiarygodnych pomiarach, modelach i matematyce dobre dane dają użyteczne prognozy. W rzeczywistości jednak rzadko dysponujemy kompletnymi danymi; systemy są złożone i wrażliwe na warunki początkowe, dlatego praktyczniej jest mówić o prawdopodobieństwie, a nie o pewności.",
    p4: "W filozofii nauki istnieje metafora „demona Laplace’a” — idealnego intelektu, który, znając położenie i prędkość każdej cząstki we wszechświecie, mógłby obliczyć zarówno przeszłość, jak i przyszłość. W praktyce taka pełna wiedza nie istnieje.",
    p5: "Mimo to idea podkreśla kluczową kwestię: im pełniejsze i lepszej jakości mamy dane, tym bardziej wiarygodne są prognozy. Tu przydaje się nowoczesna sztuczna inteligencja — jako narzędzie szybko integrujące ogromne zbiory informacji i dostarczające oszacowań prawdopodobieństwa przyszłych zdarzeń."
  },
  work: {
    title: "Jak działa Forecastler",
    p1: "<strong>Forecastler</strong> wykorzystuje sztuczną inteligencję jako współczesne podejście do przewidywania, co czyni go jednym z pionierskich podejść do tworzenia indywidualnych prognoz w sposób przejrzysty, zrozumiały i statystycznie ugruntowany.",
    p2: "<strong>1) Dane od użytkownika:</strong> Wprowadzasz informacje o podmiocie, którego przyszłość Cię interesuje (osoba, obiekt, lokalizacja, wydarzenie itp.) i zadajesz pytanie dopuszczające odpowiedź binarną (TAK/NIE).",
    p3: "<strong>2) Przetwarzanie danych:</strong> SI traktuje Twoje informacje jako zmienne w modelu, łączy je ze swoją bazą wiedzy i odpowiednimi statystykami oraz stosuje reguły wnioskowania i metody matematyczne.",
    p4: "<strong>3) Oszacowanie prawdopodobieństwa:</strong> Na podstawie przetworzonych danych system zwraca odpowiedź TAK/NIE wraz z prawdopodobieństwem (w procentach). Gdzie to możliwe, opiera się na rozumowaniu statystycznym i naukowo ugruntowanych wzorcach.",
    p5: "<strong>4) Jakość danych wejściowych = jakość wyników:</strong> Jeśli dane wejściowe są skąpe lub niejasne, SI opiera się bardziej na uśrednieniach i ogólnych wzorcach. Im więcej szczegółów podasz, tym węższy będzie zakres możliwych wyników i tym dokładniejsza będzie prognoza.",
    p6: "<strong>5) Ograniczenia:</strong> SI może się mylić — zwłaszcza gdy dane są skąpe lub sprzeczne albo gdy zdarzenia zależą od wielu nieprzewidywalnych czynników. Forecastler nie twierdzi, że zna przyszłość; szacuje prawdopodobieństwa na podstawie dostępnych danych.",
    p7: "<strong>Uwaga:</strong> Forecastler nie udziela porad medycznych, finansowych ani prawnych. Traktuj wyniki jako wsparcie decyzyjne, a nie gwarantowane rozstrzygnięcia."
  },
  dev: {
    title: "Rozwój Forecastlera",
    p1: "Forecastler, jako platforma i interfejs do prognozowania wspieranego przez SI, jest rozwijany od <strong>grudnia 2024 r.</strong> w <strong>Suboticy, Republice Serbii</strong>. Projekt oficjalnie wystartował <strong>17 czerwca 2025 r.</strong> i nadal ewoluuje w trybie iteracyjnym.",
    p2: "Za Forecastlerem stoi <strong>zespół Forecastlera</strong> z Suboticy — połączenie doświadczenia inżynierskiego, analitycznego i projektowego ze wspólną misją: uczynić prognozy jasnymi, użytecznymi i sprawiedliwymi dla użytkowników.",
    p3: "<strong>Planowane usprawnienia:</strong> Rozbudowa funkcji (więcej typów pytań, dodatkowe wskaźniki wyników, bardziej elastyczne formaty odpowiedzi).",
    p4: "Ulepszenia algorytmiczne (lepsze łączenie informacji kontekstowych i statystyk; bardziej odporne oszacowania przy mniejszej liczbie danych wejściowych).",
    p5: "Optymalizacja interfejsu (szybsze wprowadzanie, jaśniejsze wskazówki dla wysokiej jakości danych wejściowych, poprawiona dostępność).",
    p6: "Większa przejrzystość (jaśniejsze wyjaśnienia, dlaczego oszacowanie jest takie, jakie jest, gdzie są granice modelu i jak poprawić dane wejściowe).",
    p7: "Wierzymy, że przyszłość nie powinna być zagadką, lecz przemyślanym zbiorem prawdopodobieństw zrozumiałym dla każdego. Jeśli podzielasz tę wizję, pytaj, testuj i sugeruj — Forecastler rośnie wraz ze swoją społecznością użytkowników."
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
},
  how: {
    title: "Прогнозування майбутнього",
    p1: "Люди завжди прагнули зазирнути у власне майбутнє — щоб зменшити невизначеність, ухвалювати кращі рішення та захищати те, що для них важливо. Впродовж історії було багато спроб передбачати результати: від читання по долоні та кидання жеребу чи кісток, до провидців і пророків, а також астрологічних систем новітньої доби.",
    p2: "Попри культурну й символічну значущість, ці методи були обмежені за точністю та перевірюваністю. Науковий підхід починається з причини й наслідку: якщо всі релевантні параметри відомі та підпорядковуються сталим законам, результат можна оцінити — а інколи й обчислити — з високою точністю.",
    p3: "Прогноз погоди — класичний приклад: за наявності надійних вимірювань, моделей і математики якісні дані дають корисні прогнози. У реальному світі ми рідко маємо повні дані; системи складні та чутливі до початкових умов, тож практичніше говорити мовою ймовірності, а не визначеності.",
    p4: "У філософії науки є метафора «демона Лапласа» — ідеального інтелекту, який, знаючи положення та швидкість кожної частинки у Всесвіті, міг би обчислити і минуле, і майбутнє. На практиці такого повного знання не існує.",
    p5: "Попри це, ідея підкреслює важливу думку: що повніші та якісніші наші дані, то надійніші прогнози. Саме тут корисний сучасний штучний інтелект — як інструмент, що швидко інтегрує великі обсяги інформації та надає ймовірнісні оцінки майбутніх результатів."
  },
  work: {
    title: "Як працює Forecastler",
    p1: "<strong>Forecastler</strong> використовує штучний інтелект як сучасний підхід до прогнозування, що робить його одним із піонерських намагань створювати індивідуальні прогнози прозоро, зрозуміло та зі статистичним підґрунтям.",
    p2: "<strong>1) Введення користувача:</strong> Ви вводите інформацію про суб'єкт, майбутнє якого вас цікавить (особа, об'єкт, локація, подія тощо), і ставите запитання, що допускає бінарну відповідь (ТАК/НІ).",
    p3: "<strong>2) Обробка даних:</strong> ШІ розглядає вашу інформацію як змінні в моделі, пов'язує їх зі своєю базою знань і релевантною статистикою та застосовує правила міркування і математичні методи.",
    p4: "<strong>3) Оцінка ймовірності:</strong> На основі опрацьованих даних система повертає відповідь ТАК/НІ разом із ймовірністю (у відсотках). Де можливо, вона спирається на статистичне міркування та науково обґрунтовані закономірності.",
    p5: "<strong>4) Якість вхідних даних = якість результату:</strong> Якщо у вхідних даних мало інформації або вона неясна, ШІ більше покладається на загальні середні значення та широкі шаблони. Чим більше деталей ви надаєте, тим вужчим стає діапазон можливих результатів і тим точнішим — прогноз.",
    p6: "<strong>5) Обмеження:</strong> ШІ може помилятися — особливо коли вхідні дані мізерні або суперечливі, або коли події залежать від багатьох непередбачуваних чинників. Forecastler не заявляє, що знає майбутнє; він оцінює ймовірності на основі доступних даних.",
    p7: "<strong>Примітка:</strong> Forecastler не надає медичних, фінансових чи юридичних порад. Сприймайте результати як допомогу у прийнятті рішень, а не як гарантовані наслідки."
  },
  dev: {
    title: "Розвиток Forecastler",
    p1: "Forecastler, як платформа й інтерфейс для прогнозування за допомогою ШІ, розробляється з <strong>грудня 2024 року</strong> у <strong>Суботиці, Республіка Сербія</strong>. Проєкт офіційно запущено <strong>17 червня 2025 року</strong> і він продовжує розвиватися ітеративно.",
    p2: "За Forecastler стоїть <strong>команда Forecastler</strong> із Суботиці — поєднання інженерного, аналітичного та дизайнерського досвіду зі спільною місією: зробити прогнози зрозумілими, корисними та справедливими для користувачів.",
    p3: "<strong>Заплановані покращення:</strong> Розширення функцій (більше типів запитань, додаткові індикатори результатів, гнучкіші формати відповідей).",
    p4: "Алгоритмічні вдосконалення (краще поєднання контекстної інформації та статистики; надійніші оцінки за меншої кількості вхідних даних).",
    p5: "Оптимізація інтерфейсу (швидше введення, чіткіші підказки для якісних вхідних даних, поліпшена доступність).",
    p6: "Більша прозорість (ясніші пояснення, чому оцінка саме така, де межі моделі та як поліпшити ваші введені дані).",
    p7: "Ми вважаємо, що майбутнє не повинно бути загадкою, а має бути обґрунтованим набором імовірностей, зрозумілим кожному. Якщо ви поділяєте це бачення, ставте запитання, тестуйте та пропонуйте — адже Forecastler зростає разом зі своєю спільнотою користувачів."
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
},
  how: {
    title: "Предсказание будущего",
    p1: "Люди всегда хотели заглянуть в собственное будущее — чтобы снизить неопределённость, принимать более взвешенные решения и защищать то, что для них важно. На протяжении истории предпринимались многие попытки предсказывать исходы: от хиромантии и бросания жребия или костей до провидцев и пророков, а также астрологических систем современной эпохи.",
    p2: "Хотя эти методы культурно и символически значимы, их точность и проверяемость были ограничены. Научный подход начинается с причины и следствия: если все релевантные параметры известны и подчиняются устойчивым законам, исход можно оценить — а иногда и вычислить — с высокой точностью.",
    p3: "Прогноз погоды — классический пример: при надёжных измерениях, моделях и математике хорошие данные дают полезные предсказания. Однако в реальном мире у нас редко есть полные данные; системы сложны и чувствительны к начальным условиям, поэтому практичнее говорить о вероятности, а не о гарантии.",
    p4: "В философии науки существует метафора «демона Лапласа» — идеального интеллекта, который, зная положение и скорость каждой частицы во Вселенной, мог бы вычислить и прошлое, и будущее. На практике такого полного знания не существует.",
    p5: "Тем не менее эта идея подчёркивает ключевой момент: чем полнее и качественнее наши данные, тем надёжнее прогнозы. Здесь полезен современный искусственный интеллект — как инструмент, быстро интегрирующий большие объёмы информации и предоставляющий вероятностные оценки будущих исходов."
  },
  work: {
    title: "Как работает Forecastler",
    p1: "<strong>Forecastler</strong> использует искусственный интеллект как современный подход к прогнозированию и является одним из пионерских проектов, создающих индивидуальные прогнозы прозрачно, понятно и на статистически обоснованной основе.",
    p2: "<strong>1) Ввод пользователя:</strong> Вы вводите информацию о субъекте, чьё будущее вас интересует (человек, объект, локация, событие и т. п.), и задаёте вопрос, допускающий бинарный ответ (ДА/НЕТ).",
    p3: "<strong>2) Обработка данных:</strong> ИИ рассматривает вашу информацию как переменные в модели, связывает их со своей базой знаний и релевантной статистикой и применяет правила рассуждения и математические методы.",
    p4: "<strong>3) Оценка вероятности:</strong> На основе обработанных данных система возвращает ответ ДА/НЕТ вместе с вероятностью (в процентах). Где возможно, она опирается на статистическое мышление и научно обоснованные закономерности.",
    p5: "<strong>4) Качество входных данных = качество результата:</strong> Если входные данные скудны или неясны, ИИ сильнее опирается на общие средние и широкие паттерны. Чем больше деталей вы предоставите, тем уже диапазон возможных исходов и тем точнее прогноз.",
    p6: "<strong>5) Ограничения:</strong> ИИ может ошибаться — особенно когда входные данные редки или противоречивы, либо когда события зависят от многих непредсказуемых факторов. Forecastler не утверждает, что знает будущее; он оценивает вероятности на основе доступных данных.",
    p7: "<strong>Примечание:</strong> Forecastler не предоставляет медицинских, финансовых или юридических консультаций. Рассматривайте результаты как помощь в принятии решений, а не как гарантированные исходы."
  },
  dev: {
    title: "Развитие Forecastler",
    p1: "Forecastler, как платформа и интерфейс для прогнозирования с помощью ИИ, разрабатывается с <strong>декабря 2024 года</strong> в <strong>Суботице, Республика Сербия</strong>. Проект официально запущен <strong>17 июня 2025 года</strong> и продолжает эволюционировать в рамках итеративной разработки.",
    p2: "За Forecastler стоит <strong>команда Forecastler</strong> из Суботицы — сочетание инженерного, аналитического и дизайнерского опыта с общей миссией: сделать прогнозы понятными, полезными и справедливыми для пользователей.",
    p3: "<strong>Планируемые улучшения:</strong> Расширение функционала (больше типов вопросов, дополнительные показатели результатов, более гибкие форматы ответов).",
    p4: "Алгоритмические улучшения (лучшее объединение контекстной информации и статистики; более устойчивые оценки при меньшем объёме входных данных).",
    p5: "Оптимизация интерфейса (более быстрый ввод, более понятные рекомендации для качественных входных данных, улучшенная доступность).",
    p6: "Большая прозрачность (более ясные объяснения, почему получена именно такая оценка, где границы модели и как улучшить ввод).",
    p7: "Мы считаем, что будущее не должно быть загадкой, а должно быть информированным набором вероятностей, понятным каждому. Если вы разделяете это видение, задавайте вопросы, тестируйте и предлагайте — Forecastler растёт вместе со своим сообществом пользователей."
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
},
  how: {
    title: "Geleceği Tahmin Etmek",
    p1: "İnsanlar belirsizliği azaltmak, daha iyi kararlar almak ve kendileri için önemli olanı korumak için her zaman kendi geleceklerine göz atmak istemiştir. Tarih boyunca sonuçları öngörmeye yönelik pek çok girişim olmuştur: avuç içi okuma ve kura çekme ya da kemiklerle faldan, kâhinler ve peygamberlere ve modern çağın astrolojik sistemlerine kadar.",
    p2: "Kültürel ve simgesel açıdan anlamlı olsalar da, bu yöntemler doğruluk ve doğrulanabilirlik bakımından sınırlıydı. Bilimsel yaklaşım neden-sonuçla başlar: ilgili tüm parametreler biliniyor ve istikrarlı yasalara tabiyse, bir sonuç yüksek hassasiyetle tahmin — hatta kimi zaman hesap — edilebilir.",
    p3: "Hava tahmini klasik bir örnektir: sağlam ölçümler, modeller ve matematikle, iyi veriler faydalı öngörüler üretir. Ne var ki gerçek dünyada nadiren eksiksiz verilere sahibiz; sistemler karmaşıktır ve başlangıç koşullarına duyarlıdır, bu yüzden kesinlikten ziyade olasılıklardan söz etmek daha pratiktir.",
    p4: "Bilim felsefesinde Laplace’in şeytanı metaforu vardır — evrendeki her parçacığın konumunu ve hızını bilse geçmişi de geleceği de hesaplayabilecek ideal bir zekâ. Pratikte böyle tam bir bilgi yoktur.",
    p5: "Yine de bu fikir önemli bir noktayı vurgular: verilerimiz ne kadar eksiksiz ve kaliteli olursa, öngörüler o kadar güvenilir olur. Modern yapay zekâ tam burada faydalıdır — büyük miktarda bilgiyi hızla bütünleştiren ve gelecekteki sonuçlara ilişkin olasılık tahminleri sunan bir araç olarak."
  },
  work: {
    title: "Forecastler Nasıl Çalışır",
    p1: "<strong>Forecastler</strong>, öngörüye çağdaş bir yaklaşım olarak yapay zekâyı kullanır ve bireysel tahminleri şeffaf, anlaşılır ve istatistiksel temele dayalı şekilde üretmeye yönelik öncü girişimlerden biridir.",
    p2: "<strong>1) Kullanıcı girişi:</strong> Geleceğiyle ilgilendiğiniz konu hakkında (kişi, nesne, konum, olay vb.) bilgi girer ve ikili yanıta (EVET/HAYIR) imkân veren bir soru sorarsınız.",
    p3: "<strong>2) Veri işleme:</strong> YZ, bilgilerinizi bir modeldeki değişkenler olarak ele alır, bunları bilgi tabanına ve ilgili istatistiklere bağlar ve akıl yürütme kuralları ile matematiksel yöntemleri uygular.",
    p4: "<strong>3) Olasılık tahmini:</strong> İşlenen verilere dayanarak sistem, bir EVET/HAYIR yanıtını olasılık (yüzde olarak) ile birlikte döndürür. Mümkün olduğunda istatistiksel akıl yürütme ve bilimsel olarak temellendirilmiş örüntülere dayanır.",
    p5: "<strong>4) Girdi kalitesi = çıktı kalitesi:</strong> Girdi az ya da belirsizse, YZ genel ortalamalar ve geniş örüntülere daha çok dayanır. Ne kadar çok ayrıntı sağlarsanız, olası sonuçların aralığı o kadar daralır ve tahmin o kadar hassas olur.", 
    p6: "<strong>5) Sınırlamalar:</strong> YZ yanılabilir — özellikle girdiler seyrek ya da çelişkili olduğunda veya olaylar çok sayıda öngörülemeyen etkene bağlıysa. Forecastler geleceği bildiğini iddia etmez; mevcut verilere dayanarak olasılıkları tahmin eder.",
    p7: "<strong>Not:</strong> Forecastler tıbbi, finansal veya hukuki danışmanlık sunmaz. Sonuçları garantili çıktılar değil, karar desteği olarak değerlendirin."
  },
  dev: {
    title: "Forecastler’in Gelişimi",
    p1: "YZ destekli tahmin için bir platform ve arayüz olan Forecastler, <strong>Aralık 2024</strong>’ten beri <strong>Subotica, Sırbistan Cumhuriyeti</strong>’nde geliştirilmektedir. Proje <strong>17 Haziran 2025</strong>’te resmen başlatıldı ve yinelemeli geliştirme yoluyla evrilmeye devam ediyor.",
    p2: "Forecastler’in arkasında, Subotica’daki <strong>Forecastler ekibi</strong> var — mühendislik, analitik ve tasarım deneyiminin ortak bir misyona sahip bileşimi: tahminleri kullanıcılar için açık, faydalı ve adil kılmak.",
    p3: "<strong>Planlanan iyileştirmeler:</strong> Özellik genişletmeleri (daha fazla soru türü, ek çıktı göstergeleri, daha esnek yanıt formatları).",
    p4: "Algoritmik iyileştirmeler (bağlamsal bilgi ile istatistiklerin daha iyi kaynaştırılması; daha az giriş verisiyle daha sağlam tahminler).",
    p5: "Arayüz optimizasyonu (daha hızlı giriş, yüksek kaliteli girdiler için daha net yönlendirme, geliştirilmiş erişilebilirlik).",
    p6: "Daha fazla şeffaflık (tahminin neden böyle olduğuna, modelin sınırlarına ve girdinizi nasıl iyileştirebileceğinize dair daha açık açıklamalar).",
    p7: "Geleceğin bir muamma değil, herkesin anlayabileceği, bilgilenmiş olasılıklar kümesi olması gerektiğine inanıyoruz. Bu vizyonu paylaşıyorsanız sorun, test edin ve önerin — çünkü Forecastler kullanıcı topluluğuyla birlikte büyür."
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
},
  how: {
    title: "التنبؤ بالمستقبل",
    p1: "لطالما أراد الناس إلقاء نظرة على مستقبلهم لتقليل عدم اليقين، واتخاذ قرارات أفضل، وحماية ما يهمهم. عبر التاريخ كانت هناك محاولات عديدة للتنبؤ بالنتائج: من قراءة الكفّ والقرعة أو رمي العظام، إلى العرّافين والأنبياء، وصولاً إلى الأنظمة الفلكية في العصر الحديث.",
    p2: "ومع أنها ذات دلالات ثقافية ورمزية، فإن هذه الأساليب كانت محدودة الدقة وقابلة للتحقق بدرجة ضعيفة. يبدأ المنهج العلمي من السبب والنتيجة: إذا عُرفت جميع المعلمات ذات الصلة وخضعت لقوانين ثابتة، أمكن تقدير النتيجة — وأحياناً حسابها — بدقّة عالية.",
    p3: "تنبؤات الطقس مثال كلاسيكي: فبفضل القياسات الموثوقة والنماذج والرياضيات تُنتج البيانات الجيدة تنبؤات مفيدة. لكننا في العالم الواقعي نادراً ما نملك بيانات كاملة؛ فالأنظمة معقّدة وحسّاسة للظروف الابتدائية، لذا من الأنسب الحديث بلغة الاحتمال لا اليقين.",
    p4: "وفي فلسفة العلم توجد استعارة «شيطان لابلاس» — وهو عقل مثالي لو عرف موقع وسرعة كل جسيم في الكون لأمكنه حساب الماضي والمستقبل كليهما. عملياً لا وجود لمثل هذه المعرفة التامة.",
    p5: "ومع ذلك تُبرز الفكرة نقطة أساسية: كلما كانت بياناتنا أكمل وأعلى جودة ازدادت موثوقية التنبؤات. وهنا تبرز فائدة الذكاء الاصطناعي الحديث — بوصفه أداة تدمج سريعاً كميات هائلة من المعلومات وتقدّم تقديرات احتمالية للنتائج المستقبلية."
  },
  work: {
    title: "كيف يعمل Forecastler",
    p1: "<strong>Forecastler</strong> يستخدم الذكاء الاصطناعي كمنهج معاصر للتنبؤ، مما يجعله من المحاولات الرائدة لإنتاج تنبؤات فردية بطريقة شفافة ومفهومة ومرتكزة إحصائياً.",
    p2: "<strong>1) إدخال المستخدم:</strong> تُدخل معلومات عن الموضوع الذي يهمّك مستقبله (شخص، كائن، موقع، حدث، إلخ)، وتطرح سؤالاً يسمح بإجابة ثنائية (نعم/لا).",
    p3: "<strong>2) معالجة البيانات:</strong> يتعامل الذكاء الاصطناعي مع معلوماتك باعتبارها متغيرات في نموذج، ويربطها بقاعدة معارفه والإحصاءات ذات الصلة، ويطبّق قواعد الاستدلال والأساليب الرياضية.",
    p4: "<strong>3) تقدير الاحتمال:</strong> استناداً إلى البيانات المعالجة، يعيد النظام إجابة نعم/لا مع نسبة احتمالية (بالمئة). حيثما أمكن، يعتمد على الاستدلال الإحصائي وأنماط ذات أسس علمية.",
    p5: "<strong>4) جودة المُدخلات = جودة المُخرجات:</strong> إذا احتوى الإدخال على معلومات قليلة أو غير واضحة، يعتمد الذكاء الاصطناعي أكثر على المتوسطات العامة والأنماط الواسعة. وكلما زوّدتَ بمزيد من التفاصيل ضاق نطاق النتائج الممكنة وازدادت دقة التنبؤ.",
    p6: "<strong>5) الحدود:</strong> قد يخطئ الذكاء الاصطناعي — خصوصاً عندما تكون المُدخلات شحيحة أو متناقضة، أو عندما تعتمد الأحداث على عوامل عديدة غير متوقّعة. لا يدّعي Forecastler معرفة المستقبل؛ إنما يقدّر الاحتمالات بناءً على البيانات المتاحة.",
    p7: "<strong>ملاحظة:</strong> لا يقدّم Forecastler نصائح طبية أو مالية أو قانونية. تعامل مع النتائج على أنها دعم لاتخاذ القرار، لا مخرجات مضمونة."
  },
  dev: {
    title: "تطوّر Forecastler",
    p1: "يُطوَّر Forecastler، بوصفه منصة وواجهة للتنبؤ بمساعدة الذكاء الاصطناعي، منذ <strong>ديسمبر 2024</strong> في <strong>سوبوتيتسا، جمهورية صربيا</strong>. أُطلق المشروع رسميًا في <strong>17 يونيو 2025</strong> وما يزال يتطور عبر دورات تطوير متتابعة.",
    p2: "يقف وراء Forecastler <strong>فريق Forecastler</strong> من سوبوتيتسا — مزيج من الخبرات الهندسية والتحليلية والتصميمية تجمعهم مهمة مشتركة: جعل التنبؤات واضحة ومفيدة وعادلة للمستخدمين.",
    p3: "<strong>التحسينات المخططة:</strong> توسيع الميزات (أنواع أسئلة أكثر، مؤشرات مخرجات إضافية، صيغ إجابة أكثر مرونة).",
    p4: "تحسينات خوارزمية (دمج أفضل للمعلومات السياقية والإحصاءات؛ تقديرات أكثر متانة مع مدخلات أقل).",
    p5: "تحسين الواجهة (إدخال أسرع، إرشادات أوضح لمدخلات عالية الجودة، وتحسين إمكانية الوصول).",
    p6: "مزيد من الشفافية (تفسيرات أوضح لسبب كون التقدير كما هو، وحدود النموذج، وكيفية تحسين مدخلاتك).",
    p7: "نؤمن بأن المستقبل لا ينبغي أن يكون لغزًا، بل مجموعة مستنيرة من الاحتمالات يفهمها أي شخص. إن كنت تشاركنا هذه الرؤية، فاسأل وجرّب واقترح — إذ ينمو Forecastler مع مجتمع مستخدميه."
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
},
  how: {
    title: "भविष्य की भविष्यवाणी",
    p1: "लोग हमेशा अपने भविष्य की एक झलक देखना चाहते रहे हैं — अनिश्चितता कम करने, बेहतर निर्णय लेने और अपनी महत्वपूर्ण चीज़ों की रक्षा करने के लिए। इतिहास भर में परिणामों की भविष्यवाणी के अनेक प्रयास हुए हैं: हथेली पढ़ने और चिट्ठियाँ निकालने या हड्डियाँ फेंकने से लेकर द्रष्टाओं और भविष्यवक्ताओं तक, तथा आधुनिक युग की ज्योतिषीय प्रणालियों तक।",
    p2: "सांस्कृतिक और प्रतीकात्मक रूप से महत्त्वपूर्ण होने के बावजूद, ये विधियाँ सटीकता और सत्यापन-योग्यता में सीमित थीं। वैज्ञानिक दृष्टिकोण कारण और प्रभाव से शुरू होता है: यदि सभी प्रासंगिक पैरामीटर ज्ञात हों और स्थिर नियमों द्वारा संचालित हों, तो परिणाम का आकलन — और कभी-कभी गणना — उच्च परिशुद्धता के साथ किया जा सकता है।",
    p3: "मौसम का पूर्वानुमान एक क्लासिक उदाहरण है: विश्वसनीय माप, मॉडलों और गणित के साथ, अच्छे डेटा उपयोगी पूर्वानुमान देते हैं। पर वास्तविक दुनिया में हमारे पास शायद ही कभी पूर्ण डेटा होता है; प्रणालियाँ जटिल होती हैं और प्रारंभिक स्थितियों के प्रति संवेदनशील, इसलिए निश्चितता के बजाय संभावना की भाषा में बात करना अधिक व्यावहारिक है।",
    p4: "विज्ञान के दर्शन में ‘लाप्लास का दानव’ रूपक है — एक आदर्श बुद्धि जो यदि ब्रह्मांड की हर कण का स्थान और वेग जान ले, तो अतीत और भविष्य दोनों की गणना कर सके। व्यवहार में इतनी पूर्ण जानकारी अस्तित्व में नहीं है।",
    p5: "फिर भी यह विचार एक मुख्य बात रेखांकित करता है: हमारे डेटा जितने अधिक पूर्ण और उच्च-गुणवत्ता के होंगे, पूर्वानुमान उतने ही विश्वसनीय होंगे। यहीं आधुनिक कृत्रिम बुद्धिमत्ता उपयोगी है — एक ऐसे उपकरण के रूप में जो विशाल जानकारी को तेजी से समेकित कर भविष्य के परिणामों की संभाव्यता का आकलन प्रदान करता है।"
  },
  work: {
    title: "Forecastler कैसे काम करता है",
    p1: "<strong>Forecastler</strong> भविष्यवाणी के समकालीन दृष्टिकोण के रूप में कृत्रिम बुद्धिमत्ता का उपयोग करता है, जिससे यह व्यक्तिगत पूर्वानुमानों को पारदर्शी, समझने योग्य और सांख्यिकीय आधार पर प्रस्तुत करने के अग्रणी प्रयासों में से एक बनता है.",
    p2: "<strong>1) उपयोगकर्ता इनपुट:</strong> आप उस विषय के बारे में जानकारी दर्ज करते हैं जिसका भविष्य आपको रुचिकर है (व्यक्ति, वस्तु, स्थान, घटना आदि) और ऐसा प्रश्न पूछते हैं जिसका उत्तर द्विआधारी (हाँ/नहीं) में दिया जा सके.",
    p3: "<strong>2) डेटा प्रोसेसिंग:</strong> AI आपकी जानकारी को मॉडल की चर के रूप में मानता है, उन्हें अपने ज्ञान-भंडार और प्रासंगिक आँकड़ों से जोड़ता है, और तर्क-नियमों तथा गणितीय विधियों को लागू करता है.",
    p4: "<strong>3) संभावना का आकलन:</strong> संसाधित डेटा के आधार पर सिस्टम हाँ/नहीं का उत्तर संभाव्यता (प्रतिशत में) के साथ देता है. जहाँ संभव हो, यह सांख्यिकीय तर्क और वैज्ञानिक रूप से समर्थित पैटर्न पर निर्भर करता है.",
    p5: "<strong>4) इनपुट की गुणवत्ता = आउटपुट की गुणवत्ता:</strong> यदि इनपुट में जानकारी कम या अस्पष्ट है, तो AI सामान्य औसत और व्यापक पैटर्न पर अधिक निर्भर करता है. जितना अधिक विवरण आप देंगे, संभावित परिणामों की सीमा उतनी ही संकरी होगी और पूर्वानुमान उतना ही सटीक होगा.",
    p6: "<strong>5) सीमाएँ:</strong> AI गलत हो सकता है — खासकर तब जब इनपुट कम या परस्पर-विरोधी हों, या जब घटनाएँ कई अप्रत्याशित कारकों पर निर्भर हों. Forecastler भविष्य को जानने का दावा नहीं करता; यह उपलब्ध डेटा के आधार पर संभावनाओं का आकलन करता है.",
    p7: "<strong>नोट:</strong> Forecastler चिकित्सकीय, वित्तीय या कानूनी सलाह प्रदान नहीं करता. परिणामों को सुनिश्चित निष्कर्ष नहीं, बल्कि निर्णय-सहायता के रूप में लें."
  },
  dev: {
    title: "Forecastler का विकास",
    p1: "AI-सहायता प्राप्त भविष्यवाणी हेतु प्लेटफ़ॉर्म और इंटरफ़ेस के रूप में Forecastler का विकास <strong>दिसंबर 2024</strong> से <strong>सुबोटिका, सर्बिया गणराज्य</strong> में हो रहा है। परियोजना का आधिकारिक शुभारंभ <strong>17 जून 2025</strong> को हुआ और यह क्रमिक (iterative) विकास के माध्यम से लगातार आगे बढ़ रही है.",
    p2: "Forecastler के पीछे सुबोटिका की <strong>Forecastler टीम</strong> है — इंजीनियरिंग, विश्लेषण और डिज़ाइन अनुभव का संगम, जिसकी साझा मिशन है: पूर्वानुमानों को उपयोगकर्ताओं के लिए स्पष्ट, उपयोगी और निष्पक्ष बनाना.",
    p3: "<strong>नियोजित सुधार:</strong> फ़ीचर विस्तार (अधिक प्रश्न-प्रकार, अतिरिक्त आउटपुट संकेतक, अधिक लचीले उत्तर-प्रारूप).",
    p4: "एल्गोरिथ्मिक उन्नयन (संदर्भात्मक जानकारी और आँकड़ों का बेहतर संयोजन; कम इनपुट डेटा के साथ अधिक सशक्त आकलन).",
    p5: "इंटरफ़ेस अनुकूलन (तेज़ इनपुट, उच्च-गुणवत्ता इनपुट हेतु स्पष्ट मार्गदर्शन, बेहतर अभिगम्यता).",
    p6: "अधिक पारदर्शिता (यह स्पष्ट करना कि अनुमान वैसा क्यों है, मॉडल की सीमाएँ कहाँ हैं, और अपना इनपुट कैसे बेहतर करें).",
    p7: "हम मानते हैं कि भविष्य कोई पहेली नहीं होना चाहिए, बल्कि सूचित संभावनाओं का ऐसा समूह होना चाहिए जिसे कोई भी समझ सके। यदि आप इस दृष्टि को साझा करते हैं, तो पूछें, परीक्षण करें और सुझाव दें — Forecastler अपने उपयोगकर्ता समुदाय के साथ मिलकर बढ़ता है."
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
},
  how: {
    title: "预测未来",
    p1: "人们一直希望窥见自己的未来——以减少不确定性、做出更好的决策，并保护对自己重要的事物。纵观历史，人类尝试过许多预测方式：从看手相、抽签或掷骨占卜，到占卜者与先知，再到近现代的占星体系。",
    p2: "尽管这些方式在文化与象征层面具有意义，但其准确性与可验证性有限。科学方法从因果关系出发：如果所有相关参数都已知并受稳定规律支配，就可以对结果进行估计——有时甚至可以高精度计算。",
    p3: "天气预报就是经典例子：在可靠测量、模型与数学的支持下，优质数据会产生有用的预测。然而在现实世界中，我们很少拥有完整数据；系统复杂且对初始条件敏感，因此更实际的做法是以概率而非确定性来表述。",
    p4: "在科学哲学中有一个比喻——“拉普拉斯妖”，一种理想的智能，如果它知道宇宙中每个粒子的位置与速度，就能计算出过去与未来。但在实践中，这样的完全知识并不存在。",
    p5: "尽管如此，这一思想强调了关键点：我们的数据越完整、质量越高，预测就越可靠。现代人工智能正有助于此——作为一种能够快速整合海量信息并提供未来结果概率估计的工具。"
  }
},
  work: {
    title: "Forecastler 的工作原理",
    p1: "<strong>Forecastler</strong> 将人工智能作为一种当代的预测方法，使其成为以透明、易懂且具有统计依据的方式生成个体化预测的先驱性尝试之一。",
    p2: "<strong>1) 用户输入：</strong> 你输入有关感兴趣主体（人物、物体、地点、事件等）的信息，并提出一个允许二元回答（是/否）的问题。",
    p3: "<strong>2) 数据处理：</strong> AI 将你的信息视为模型中的变量，将其与自身的知识库及相关统计数据相连接，并应用推理规则和数学方法。",
    p4: "<strong>3) 概率估计：</strong> 基于处理后的数据，系统给出“是/否”的回答，并附带概率（以百分比表示）。在可能的情况下，它依赖统计推理和有科学依据的模式。",
    p5: "<strong>4) 输入质量 = 输出质量：</strong> 如果输入信息较少或不清晰，AI 会更多依赖总体平均值和宽泛模式。你提供的细节越多，可能结果的范围就越窄，预测也就越精确。",
    p6: "<strong>5) 局限性：</strong> AI 可能出错——尤其是在输入稀少或相互矛盾，或事件受许多不可预测因素影响时。Forecastler 并不声称知晓未来；它是基于可用数据估计概率。",
    p7: "<strong>说明：</strong> Forecastler 不提供医疗、金融或法律建议。请将结果视为决策支持，而非保证的结论。"
  },
  dev: {
    title: "Forecastler 的发展",
    p1: "作为一款借助人工智能进行预测的平台与界面，Forecastler 自<strong>2024年12月</strong>起在<strong>塞尔维亚共和国苏博蒂察</strong>开发。该项目于<strong>2025年6月17日</strong>正式发布，并通过迭代开发持续演进。",
    p2: "在 Forecastler 背后，是来自苏博蒂察的<strong>Forecastler 团队</strong>——融合工程、分析与设计经验，肩负共同使命：让预测对用户而言清晰、实用且公平。",
    p3: "<strong>计划中的改进：</strong> 功能扩展（更多问题类型、额外的输出指标、更灵活的响应格式）。",
    p4: "算法增强（更好地融合上下文信息与统计数据；在较少输入数据的情况下得到更稳健的估计）。",
    p5: "界面优化（更快捷的输入、更清晰的高质量输入指引、改进的可访问性）。",
    p6: "更高透明度（更清楚地解释估计为何如此、模型的边界所在，以及如何改进你的输入）。",
    p7: "我们相信，未来不应是谜团，而应是任何人都能理解的、基于信息的概率集合。若你认同这一愿景，欢迎提问、测试并提出建议——Forecastler 与其用户社区一同成长。"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
},
  how: {
    title: "未来を予測する",
    p1: "人はいつの時代も、自分の未来をのぞき見たいと願ってきました——不確実性を減らし、より良い意思決定を行い、大切なものを守るために。歴史を通じて、結果を予測しようとする多くの試みがありました。手相占い、くじや骨を投げる占い、占い師や予言者、そして近代の占星術体系まで。",
    p2: "文化的・象徴的な意義はあるものの、こうした方法は精度や検証可能性に限界がありました。科学的アプローチは因果関係から始まります。すべての関連パラメータが既知で安定した法則に従うなら、結果は推定でき、場合によっては高い精度で計算することもできます。",
    p3: "天気予報は典型的な例です。信頼できる測定、モデル、数学があれば、良質なデータは有用な予測をもたらします。しかし現実の世界では、完全なデータを持つことは稀です。システムは複雑で初期条件に敏感であるため、確実性ではなく確率で語る方が実務的です。",
    p4: "科学哲学には「ラプラスの悪魔」という比喩があります——宇宙のあらゆる粒子の位置と速度を知っていれば、過去と未来の双方を計算できる理想的知性のことです。実際には、そのような完全な知識は存在しません。",
    p5: "それでもこの考え方は重要な点を示します。データがより完全で高品質であるほど、予測はより信頼できるということです。現代の人工知能はここで役立ちます——膨大な情報を迅速に統合し、将来の結果の確率推定を提供するためのツールとして。"
  },
  work: {
    title: "Forecastler の仕組み",
    p1: "<strong>Forecastler</strong> は予測への現代的アプローチとして人工知能を用い、個別の予測を透明で理解しやすく、統計的根拠に基づいて提供しようとする先駆的な試みの一つです。",
    p2: "<strong>1) ユーザー入力:</strong> 将来が気になる対象（人物・物・場所・イベント等）に関する情報を入力し、二択（はい/いいえ）で答えられる質問を行います。",
    p3: "<strong>2) データ処理:</strong> AI はあなたの情報をモデル内の変数として扱い、知識ベースや関連統計と結び付け、推論規則と数学的手法を適用します。",
    p4: "<strong>3) 確率推定:</strong> 処理済みデータに基づき、システムは「はい/いいえ」の回答と確率（パーセント）を返します。可能な限り、統計的推論と科学的に裏付けられたパターンに依拠します。",
    p5: "<strong>4) 入力の質 = 出力の質:</strong> 入力が少ない、または不明瞭な場合、AI は一般的な平均や大まかなパターンにより強く依存します。詳細を多く提供するほど、想定される結果の幅は狭まり、予測はより精密になります。",
    p6: "<strong>5) 制約:</strong> AI は誤ることがあります—特に入力が乏しい・矛盾している場合、または事象が多くの予測不可能な要因に依存する場合。Forecastler は未来を知っていると主張しません。利用可能なデータに基づいて確率を推定します。",
    p7: "<strong>注意:</strong> Forecastler は医療・金融・法的助言を提供しません。結果は保証された結論ではなく、意思決定の支援として扱ってください。"
  },
  dev: {
    title: "Forecastler の開発",
    p1: "AI 支援の予測プラットフォーム／インターフェースである Forecastler は、<strong>2024年12月</strong>から<strong>セルビア共和国スボティツァ</strong>で開発されています。プロジェクトは<strong>2025年6月17日</strong>に正式公開され、その後も反復的な開発によって進化を続けています。",
    p2: "Forecastler の背後にはスボティツァの<strong>Forecastler チーム</strong>がいます。エンジニアリング・分析・デザインの経験を併せ持ち、予測をユーザーにとって明確で有用かつ公正なものにするという共通の使命を掲げています。",
    p3: "<strong>計画中の改善:</strong> 機能拡張（質問タイプの追加、出力指標の追加、より柔軟な応答フォーマット）。",
    p4: "アルゴリズムの強化（文脈情報と統計のより良い融合；入力データが少ない場合でもより堅牢な推定）。",
    p5: "インターフェース最適化（入力の迅速化、高品質な入力のための明確なガイダンス、アクセシビリティの向上）。",
    p6: "透明性の向上（推定がそうなる理由、モデルの限界、入力の改善方法をより明確に説明）。",
    p7: "私たちは、未来は謎であるべきではなく、誰もが理解できる情報に基づく確率の集合であるべきだと考えます。このビジョンに共感いただけるなら、ぜひ質問・テスト・提案してください。Forecastler はユーザーコミュニティとともに成長します。"
    }
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations.en;
  localStorage.setItem('forecastlerLang', lang);
  trenutniJezik = lang;

  const setTxt  = (id, txt)  => { const el = document.getElementById(id); if (el && typeof txt  === "string") el.textContent = txt; };
  const setHTML = (id, html) => { const el = document.getElementById(id); if (el && typeof html === "string") el.innerHTML   = html; };

  // Header (desktop + mobile)
  if (t.headerLinks){
    setTxt("nav-home", t.headerLinks.home);
    setTxt("nav-about", t.headerLinks.about);
    setTxt("nav-contact", t.headerLinks.contact);
    setTxt("nav-blog", t.headerLinks.blog);

    setTxt("mnav-home", t.headerLinks.home);
    setTxt("mnav-about", t.headerLinks.about);
    setTxt("mnav-contact", t.headerLinks.contact);
    setTxt("mnav-blog", t.headerLinks.blog);
  }

  // HOW
  setTxt ("how-title",  t.how.title);
  setTxt ("how-text-1", t.how.p1);
  setTxt ("how-text-2", t.how.p2);
  setTxt ("how-text-3", t.how.p3);
  setTxt ("how-text-4", t.how.p4);
  setTxt ("how-text-5", t.how.p5);

  // WORK (ima <strong>)
  setTxt ("work-title",  t.work.title);
  setHTML("work-text-1", t.work.p1);
  setHTML("work-text-2", t.work.p2);
  setHTML("work-text-3", t.work.p3);
  setHTML("work-text-4", t.work.p4);
  setHTML("work-text-5", t.work.p5);
  setHTML("work-text-6", t.work.p6);
  setHTML("work-text-7", t.work.p7);

  // DEV (takođe ima <strong>)
  setTxt ("dev-title",  t.dev.title);
  setHTML("dev-text-1", t.dev.p1);
  setHTML("dev-text-2", t.dev.p2);
  setHTML("dev-text-3", t.dev.p3);
  setHTML("dev-text-4", t.dev.p4);
  setHTML("dev-text-5", t.dev.p5);
  setHTML("dev-text-6", t.dev.p6);
  setHTML("dev-text-7", t.dev.p7);

  // Footer linkovi
  if (t.footerLinks){
    setTxt("link-disclaimer", t.footerLinks.disclaimer);
    setTxt("link-terms",      t.footerLinks.terms);
    setTxt("link-privacy",    t.footerLinks.privacy);
    setTxt("link-cookies",    t.footerLinks.cookies);
    setTxt("link-sitemap",    t.footerLinks.sitemap);
    setTxt("link-faq",        t.footerLinks.faq);
  }

  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

// Inicijalizacija
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem('forecastlerLang');
  const browser = (navigator.language || 'en').slice(0,2);
  const initial = saved || (browser === 'sr' ? 'sr' : 'en');
  setLanguage(initial);
});

// izloži funkciju za klik na zastavice
window.setLanguage = setLanguage;

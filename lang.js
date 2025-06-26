let trenutniJezik = "en";

const translations = {
  en: {
    title: "GENERAL PREDICTOR",
    welcomeText: "A page for predicting future events based on artificial intelligence and logical analysis.",
    contextLabel: "Write something about yourself or about persons, objects, places, or situations whose future you want to predict. It is optional, but the more information you provide, the more accurate the forecast will be:",
    questionLabel: "Ask a question about the future that can be answered with YES or NO:",
    sendButton: "Submit question",
    howTitle: "How does Forecastler work?",
    howText1: "Forecastler does not use magic, horoscopes, or parapsychological powers for prediction. Instead, it is based on artificial intelligence that estimates the probability of future events using real data, statistics, and mathematical models.",
    howText2: "When you submit a question, the system first analyzes the textual information you provided — including context, relevant details, key terms, and possible cause-and-effect relationships.",
    howText3: "It then combines this data with its own knowledge base, which contains behavioral patterns, historical events, social and economic trends, and current scientific knowledge.",
    howText4: "Based on all this, the artificial intelligence simulates possible outcomes and calculates the probability of a specific event actually occurring.",
    howText5: "If that probability is greater than 50%, the answer is YES. If it is lower, the answer is NO.",
    howText6: "The more information you enter, the more accurate and reliable the forecast will be, as the algorithm will have more data for analysis and decision-making.",
    useTitle: "How to use Forecastler?",
    useList: [
      "Using Forecastler is completely free. No personal data, registration, or any kind of payment is required to submit a question.",
      `(Optional): In the first field, you can enter additional information about the persons, objects, places, or situations the question refers to.
The more details you provide, the stronger the basis the artificial intelligence will have for evaluation, and the forecast will be more accurate.
If you are interested in the future of a person (including yourself), you can enter: name and surname, date of birth, occupation, habits, life circumstances, and other important data from the past or present.
If you want an assessment of an object, item, or property, enter its purpose, characteristics, and history of use.
For places and geographical locations: describe the position, significance, history, and current condition.
For current situations: list all participants, the course of events so far, and key facts.`,
      "(Required): In the second field, enter a specific question about the future that can be answered with YES or NO.",
      "Click the 'Submit Question' button. The system will process the data and calculate the probability.",
      "You will receive a textual answer and a percentage of probability. After that, you can immediately ask a new question."
    ],
    useNote: "If the question is not clearly formulated, the system will notify you.",
    faqTitle: "What are the most frequently asked questions?",
    faqText: "Here are some examples of questions users most often ask Forecastler:",
    faqList: [
      "Will I change jobs soon?",
      "Will my partner and I stay together until the end of the year?",
      "Will I get sick this month?",
      "Will there be a storm next summer?",
      "Will a new war break out in the world this year?",
      "Will prices rise by 10% by the end of the year?",
      "Will my favorite club win the championship next year?"
    ],
    dynamic: {
      answerLabel: "Answer:",
      probabilityLabel: "Probability:"
    },
    alerts: {
      emptyQuestion: "Enter a question before submitting.",
      invalidPrefix: "The question must begin with an appropriate form ('Will...', 'Will I...', 'Will we...').",
      pastQuestion: "Ask a question related to the future.",
      unrecognizedResponse: "The answer is not in a recognizable format.",
      serverError: "There was an error in communication with the server."
    },
    answers: {
      yes: "YES",
      no: "NO"
    }
  },

  sr: {
    title: "OPŠTI PROGNOZER",
    welcomeText: "Stranica za predviđanje budućih događaja zasnovano na veštačkoj inteligenciji i logičkoj analizi.",
    contextLabel: "Napišite nešto o sebi ili o osobama, predmetima, mestima ili situacijama čiju budućnost želite da predvidite. Nije obavezno, ali što više informacija unesete, prognoza će biti preciznija:",
    questionLabel: "Postavite pitanje o budućnosti koje može imati odgovor DA ili NE:",
    sendButton: "Pošaljite pitanje",
    howTitle: "Kako funkcioniše Forecastler?",
    howText1: "Forecastler za predviđanje ne koristi magiju, horoskope niti parapsihološke moći. Umesto toga, zasniva se na veštačkoj inteligenciji koja procenjuje verovatnoću budućih događaja pomoću stvarnih podataka, statistike i matematičkih modela.",
    howText2: "Kada postavite pitanje, sistem najpre analizira tekstualne informacije koje ste uneli — uključujući kontekst, relevantne detalje, ključne pojmove i moguće uzročno-posledične veze.",
    howText3: "Zatim te podatke kombinuje sa sopstvenom bazom znanja, koja sadrži obrasce ponašanja, istorijske događaje, društvene i ekonomske trendove i aktuelna naučna saznanja.",
    howText4: "Na osnovu svega toga, veštačka inteligencija simulira moguće ishode i izračunava verovatnoću da se određeni događaj zaista dogodi.",
    howText5: "Ako je ta verovatnoća veća od 50%, odgovor glasi DA. Ako je manja, odgovor je NE.",
    howText6: "Što više informacija unesete, prognoza postaje preciznija i pouzdanija, jer algoritam tada ima više podataka za analizu i donošenje zaključka.",
    useTitle: "Kako se koristi Forecastler?",
    useList: [
      "Using Forecastler is completely free. No personal data, registration, or any kind of payment is required to submit a question.",
      `(Opciono): U prvom polju možete uneti dodatne informacije o osobama, predmetima, mestima ili situacijama na koje se pitanje odnosi.
Što više detalja unesete, veštačka inteligencija će imati veću osnovu za procenu i prognoza će biti preciznija.
Ako Vas zanima budućnost neke osobe (uključujući i Vas), možete uneti: ime i prezime, datum rođenja, zanimanje, navike, životne okolnosti i druge važne podatke iz prošlosti ili sadašnjosti.
Ako želite procenu za neki predmet, objekat ili imovinu, unesite njegovu svrhu, karakteristike i istoriju upotrebe.
Za mesta i geografske lokacije: opišite položaj, značaj, istoriju i sadašnje stanje.
Za trenutne situacije: navedite sve učesnike, dosadašnji tok događaja i ključne činjenice.`,
      "(Required): (Obavezno): U drugom polju postavite konkretno pitanje o budućnosti, na koje se može odgovoriti sa DA ili NE.",
      "Kliknite na dugme 'Pošaljite pitanje'. Sistem će obraditi podatke i izračunati verovatnoću.",
      "You will receive a textual answer and a percentage of probability. After that, you can immediately ask a new question."
    ],
    useNote: "Ukoliko pitanje nije jasno formulisano, sistem će Vas o tome obavestiti.",
    faqTitle: "Koja su najčešća pitanja?",
    faqText: "Evo nekoliko primera pitanja koje korisnici najčešće postavljaju Forecastleru:",
    faqList: [
      "Da li ću uskoro promeniti posao?",
      "Da li ćemo moj partner i ja ostati zajedno do kraja godine?",
      "Da li ću se razboleti ovog meseca?",
      "Da li će biti nevremena sledećeg leta?",
      "Da li će izbiti novi rat u svetu ove godine?",
      "Da li će poskupeti cene za 10% do kraja godine?",
      "Da li će moj omiljeni klub osvojiti prvenstvo sledeće godine?"
    ],
    dynamic: {
      answerLabel: "Odgovor:",
      probabilityLabel: "Verovatnoća:"
    },
    alerts: {
      emptyQuestion: "Unesite pitanje pre slanja.",
      invalidPrefix: "Pitanje mora početi odgovarajućim oblikom ('Will...', 'Will I...', 'Will we...').",
      pastQuestion: "Postavite pitanje koje se tiče budućnosti.",
      unrecognizedResponse: "Odgovor nije u prepoznatljivom formatu.",
      serverError: "Došlo je do greške u komunikaciji sa serverom."
    },
    answers: {
      yes: "DA",
      no: "NE"
    }
  },

  es: {
    title: "PRONOSTICADOR GENERAL",
    welcomeText: "Página para predecir eventos futuros basada en inteligencia artificial y análisis lógico.",
    contextLabel: "Escriba algo sobre usted o sobre personas, objetos, lugares o situaciones cuyo futuro desea predecir. No es obligatorio, pero cuanto más información proporcione, más precisa será la predicción:",
    questionLabel: "Formule una pregunta sobre el futuro que pueda responderse con SÍ o NO:",
    sendButton: "Enviar pregunta",
    howTitle: "¿Cómo funciona Forecastler",
    howText1: "Forecastler no utiliza magia, horóscopos ni poderes parapsicológicos para hacer predicciones. En su lugar, se basa en inteligencia artificial que estima la probabilidad de eventos futuros utilizando datos reales, estadísticas y modelos matemáticos.",
    howText2: "Cuando usted formula una pregunta, el sistema primero analiza la información textual que ha ingresado — incluyendo el contexto, detalles relevantes, términos clave y posibles relaciones causa-efecto.",
    howText3: "Luego, combina esos datos con su propia base de conocimientos, que contiene patrones de comportamiento, eventos históricos, tendencias sociales y económicas, y conocimientos científicos actuales.",
    howText4: "Con base en todo esto, la inteligencia artificial simula posibles resultados y calcula la probabilidad de que un evento específico realmente ocurra.",
    howText5: "Si esa probabilidad es mayor al 50 %, la respuesta será SÍ. Si es menor, la respuesta será NO.",
    howText6: "Cuanta más información proporcione, más precisa y confiable será la predicción, ya que el algoritmo tendrá más datos para analizar y tomar decisiones.",
    useTitle: "¿Cómo se utiliza Forecastler?",
    useList: [
      "El uso de Forecastler es completamente gratuito. No se requieren datos personales, registro ni ningún tipo de pago para enviar una pregunta.",
      `(Opcional): En el primer campo puede ingresar información adicional sobre las personas, objetos, lugares o situaciones a las que se refiere la pregunta.
Cuantos más detalles proporcione, mayor será la base de evaluación para la inteligencia artificial y más precisa será la predicción.
Si le interesa el futuro de una persona (incluyéndose a usted), puede ingresar: nombre y apellido, fecha de nacimiento, ocupación, hábitos, circunstancias de vida y otros datos importantes del pasado o del presente.
Si desea una evaluación de un objeto, artículo o propiedad, ingrese su propósito, características e historial de uso.
Para lugares y ubicaciones geográficas: describa la ubicación, importancia, historia y estado actual.
Para situaciones actuales: indique todos los participantes, el desarrollo hasta el momento y los hechos clave.`,
      "(Obligatorio): En el segundo campo, formule una pregunta concreta sobre el futuro, que pueda responderse con SÍ o NO.",
      "Haga clic en el botón 'Enviar pregunta'. El sistema procesará los datos y calculará la probabilidad.",
      "Recibirá una respuesta en texto y un porcentaje de probabilidad. Después de eso, podrá formular otra pregunta de inmediato."
    ],
    useNote: "Si la pregunta no está claramente formulada, el sistema se lo notificará.",
    faqTitle: "¿Cuáles son las preguntas más frecuentes?",
    faqText: "Aquí hay algunos ejemplos de preguntas que los usuarios suelen hacer a Forecastler:",
    faqList: [
      "¿Cambiaré de trabajo pronto?",
      "¿Mi pareja y yo estaremos juntos hasta fin de año?",
      "¿Me enfermaré este mes?",
      "¿Habrá tormenta el próximo verano?",
      "¿Estallará una nueva guerra en el mundo este año?",
      "¿Subirán los precios un 10 % antes de fin de año?",
      "¿Ganará mi club favorito el campeonato el próximo año?"
    ],
    dynamic: {
      answerLabel: "Respuesta:",
      probabilityLabel: "Probabilidad:"
    },
    alerts: {
      emptyQuestion: "Ingrese una pregunta antes de enviarla.",
      invalidPrefix: "La pregunta debe comenzar con una forma adecuada ('¿Pasará...?', '¿Pasaré...?', '¿Pasaremos...?').",
      pastQuestion: "Formule una pregunta relacionada con el futuro.",
      unrecognizedResponse: "La respuesta no tiene un formato reconocible.",
      serverError: "Se produjo un error en la comunicación con el servidor."
    },
    answers: {
      yes: "SÍ",
      no: "NO"
    }
  },

  fr: {
    title: "PRÉDICTEUR GÉNÉRAL",
    welcomeText: "Page de prédiction des événements futurs basée sur l’intelligence artificielle et l’analyse logique.",
    contextLabel: "Écrivez quelque chose sur vous-même ou sur des personnes, des objets, des lieux ou des situations dont vous souhaitez prévoir l’avenir. Ce n’est pas obligatoire, mais plus vous fournissez d’informations, plus la prévision sera précise :",
    questionLabel: "Posez une question sur l’avenir qui peut recevoir une réponse OUI ou NON:",
    sendButton: "Envoyer la question",
    howTitle: "Comment fonctionne Forecastler ?",
    howText1: "Forecastler n’utilise ni magie, ni horoscope, ni pouvoirs parapsychologiques pour ses prédictions. Il se base sur l’intelligence artificielle qui évalue la probabilité d’événements futurs à partir de données réelles, de statistiques et de modèles mathématiques.",
    howText2: "Lorsque vous posez une question, le système commence par analyser les informations textuelles que vous avez saisies — y compris le contexte, les détails pertinents, les termes clés et les relations de cause à effet possibles.",
    howText3: "Ensuite, il combine ces données avec sa propre base de connaissances, qui comprend des schémas de comportement, des événements historiques, des tendances sociales et économiques, ainsi que les connaissances scientifiques actuelles.",
    howText4: "Sur cette base, l’intelligence artificielle simule des résultats possibles et calcule la probabilité qu’un événement spécifique se produise réellement.",
    howText5: "Si cette probabilité est supérieure à 50 %, la réponse sera OUI. Si elle est inférieure, la réponse sera NON.",
    howText6: "Plus vous entrez d’informations, plus la prévision sera précise et fiable, car l’algorithme disposera de davantage de données à analyser pour tirer une conclusion.",
    useTitle: "Comment utiliser Forecastler ?",
    useList: [
      "L’utilisation de Forecastler est entièrement gratuite. Aucune donnée personnelle, inscription ni aucun paiement n’est requis pour poser une question.",
      `(Optionnel) : Dans le premier champ, vous pouvez entrer des informations supplémentaires sur les personnes, les objets, les lieux ou les situations auxquelles la question se rapporte.
Plus vous fournissez de détails, plus la base d’évaluation de l’intelligence artificielle sera solide, et plus la prévision sera précise.
Si vous souhaitez connaître l’avenir d’une personne (y compris vous-même), vous pouvez entrer : nom et prénom, date de naissance, profession, habitudes, circonstances de vie et autres données importantes du passé ou du présent.
Si vous souhaitez une évaluation concernant un objet, un bien ou une propriété, indiquez sa fonction, ses caractéristiques et son historique d’utilisation.
Pour des lieux ou des zones géographiques : décrivez leur emplacement, leur importance, leur histoire et leur état actuel.
Pour des situations actuelles : indiquez tous les participants, le déroulement jusqu’à présent et les faits clés.`,
      "(Obligatoire) : Dans le second champ, posez une question concrète sur l’avenir, à laquelle on peut répondre par OUI ou NON.",
      "Cliquez sur le bouton ' Envoyer la question '. Le système traitera les données et calculera la probabilité.",
      "Vous recevrez une réponse sous forme de texte et un pourcentage de probabilité. Ensuite, vous pouvez poser immédiatement une nouvelle question."
    ],
    useNote: "Si la question n’est pas formulée clairement, le système vous en informera.",
    faqTitle: "Quelles sont les questions les plus fréquentes ?",
    faqText: "Voici quelques exemples de questions fréquemment posées à Forecastler :",
    faqList: [
      "Vais-je changer de travail bientôt ?",
      "Mon partenaire et moi resterons-nous ensemble jusqu’à la fin de l’année ?",
      "Vais-je tomber malade ce mois-ci ?",
      "Y aura-t-il une tempête l’été prochain ?",
      "Une nouvelle guerre éclatera-t-elle dans le monde cette année ?",
      "Les prix augmenteront-ils de 10 % d’ici la fin de l’année ?",
      "Mon club préféré remportera-t-il le championnat l’année prochaine ?"
    ],
    dynamic: {
      answerLabel: "Réponse :",
      probabilityLabel: "Probabilité :"
    },
    alerts: {
      emptyQuestion: "Veuillez entrer une question avant d’envoyer.",
      invalidPrefix: "La question doit commencer par une forme appropriée ('Est-ce que...', 'Est-ce que je...', 'Est-ce que nous...').",
      pastQuestion: "Posez une question qui concerne l’avenir.",
      unrecognizedResponse: "La réponse n’est pas dans un format reconnaissable.",
      serverError: "Une erreur s’est produite lors de la communication avec le serveur."
    },
    answers: {
      yes: "OUI",
      no: "NON"
    }
  },

  de: {
    title: "ALLGEMEINER PROGNOSE-GENERATOR",
    welcomeText: "Eine Seite zur Vorhersage zukünftiger Ereignisse auf der Grundlage von künstlicher Intelligenz und logischer Analyse.",
    contextLabel: "Schreiben Sie etwas über sich selbst oder über Personen, Objekte, Orte oder Situationen, deren Zukunft Sie vorhersagen möchten. Dies ist optional, aber je mehr Informationen Sie angeben, desto genauer wird die Prognose:",
    questionLabel: "Stellen Sie eine Frage über die Zukunft, die mit JA oder NEIN beantwortet werden kann:",
    sendButton: "Frage absenden",
    howTitle: "Wie funktioniert Forecastler?",
    howText1: "Forecastler verwendet keine Magie, Horoskope oder parapsychologische Kräfte zur Vorhersage. Stattdessen basiert es auf künstlicher Intelligenz, die die Wahrscheinlichkeit zukünftiger Ereignisse anhand realer Daten, Statistiken und mathematischer Modelle berechnet.",
    howText2: "Wenn Sie eine Frage stellen, analysiert das System zunächst die von Ihnen eingegebenen Textinformationen – einschließlich Kontext, relevanter Details, Schlüsselbegriffe und möglicher Ursache-Wirkung-Zusammenhänge.",
    howText3: "Anschließend kombiniert es diese Daten mit seiner eigenen Wissensdatenbank, die Verhaltensmuster, historische Ereignisse, soziale und wirtschaftliche Trends sowie aktuelles wissenschaftliches Wissen enthält.",
    howText4: "Auf dieser Grundlage simuliert die künstliche Intelligenz mögliche Ergebnisse und berechnet die Wahrscheinlichkeit, dass ein bestimmtes Ereignis tatsächlich eintritt.",
    howText5: "Wenn diese Wahrscheinlichkeit über 50 % liegt, lautet die Antwort JA. Wenn sie darunter liegt, lautet die Antwort NEIN.",
    howText6: "Je mehr Informationen Sie eingeben, desto genauer und zuverlässiger wird die Prognose, da der Algorithmus dann über mehr Daten für die Analyse und Entscheidungsfindung verfügt.",
    useTitle: "Wie benutzt man Forecastler?",
    useList: [
      "Die Nutzung von Forecastler ist völlig kostenlos. Es werden keine persönlichen Daten, keine Registrierung und keine Zahlung für das Stellen von Fragen benötigt.",
      `(Optional): Im ersten Feld können Sie zusätzliche Informationen zu Personen, Objekten, Orten oder Situationen eingeben, auf die sich die Frage bezieht.
Je mehr Details Sie angeben, desto besser ist die Grundlage für die Bewertung durch die künstliche Intelligenz, und desto genauer wird die Prognose.
Wenn Sie an der Zukunft einer Person interessiert sind (einschließlich Ihrer eigenen), können Sie z. B. Name und Nachname, Geburtsdatum, Beruf, Gewohnheiten, Lebensumstände und andere wichtige Daten aus Vergangenheit oder Gegenwart eingeben.
Wenn Sie eine Einschätzung zu einem Objekt, Gegenstand oder Eigentum wünschen, geben Sie dessen Zweck, Eigenschaften und Nutzungsgeschichte an.
Für Orte und geografische Standorte: Beschreiben Sie die Lage, Bedeutung, Geschichte und den aktuellen Zustand.
Für aktuelle Situationen: Nennen Sie alle Beteiligten, den bisherigen Verlauf und die wichtigsten Fakten.`,
      "(Verpflichtend): Im zweiten Feld stellen Sie eine konkrete Frage zur Zukunft, die mit JA oder NEIN beantwortet werden kann.",
      "Klicken Sie auf die Schaltfläche 'Frage absenden'. Das System verarbeitet die Daten und berechnet die Wahrscheinlichkeit.",
      "Sie erhalten eine textuelle Antwort und eine prozentuale Wahrscheinlichkeit. Danach können Sie sofort eine neue Frage stellen."
    ],
    useNote: "Wenn die Frage nicht klar formuliert ist, wird das System Sie darüber informieren.",
    faqTitle: "Was sind die häufigsten Fragen?",
    faqText: "Hier sind einige Beispiele für Fragen, die Benutzer Forecastler häufig stellen:",
    faqList: [
      "Werde ich bald meinen Job wechseln?",
      "Werden mein Partner und ich bis zum Jahresende zusammenbleiben?",
      "Werde ich diesen Monat krank werden?",
      "Wird es nächsten Sommer ein Unwetter geben?",
      "Wird dieses Jahr ein neuer Krieg in der Welt ausbrechen?",
      "Werden die Preise bis zum Jahresende um 10 % steigen?",
      "Wird mein Lieblingsverein nächstes Jahr die Meisterschaft gewinnen?"
    ],
    dynamic: {
      answerLabel: "Antwort:",
      probabilityLabel: "Wahrscheinlichkeit:"
    },
    alerts: {
      emptyQuestion: "Bitte geben Sie vor dem Absenden eine Frage ein.",
      invalidPrefix: "Die Frage muss mit einer passenden Form beginnen ('Wird...', 'Werde ich...', 'Werden wir...').",
      pastQuestion: "Stellen Sie eine Frage, die sich auf die Zukunft bezieht.",
      unrecognizedResponse: "Die Antwort hat kein erkennbares Format.",
      serverError: "Es ist ein Fehler bei der Kommunikation mit dem Server aufgetreten."
    },
    answers: {
      yes: "JA",
      no: "NEIN"
    }
  },

  pt: {
    title: "PREVISOR GERAL",
    welcomeText: "Página para prever eventos futuros com base em inteligência artificial e análise lógica.",
    contextLabel: "Escreva algo sobre você ou sobre pessoas, objetos, lugares ou situações cujo futuro deseja prever. Não é obrigatório, mas quanto mais informações você fornecer, mais precisa será a previsão:",
    questionLabel: "Faça uma pergunta sobre o futuro que possa ser respondida com SIM ou NÃO:",
    sendButton: "Enviar pergunta",
    howTitle: "Como funciona o Forecastler?",
    howText1: "O Forecastler não utiliza magia, horóscopos nem poderes parapsicológicos para fazer previsões. Em vez disso, baseia-se em inteligência artificial que estima a probabilidade de eventos futuros com base em dados reais, estatísticas e modelos matemáticos.",
    howText2: "Quando você faz uma pergunta, o sistema primeiro analisa as informações textuais que você forneceu — incluindo contexto, detalhes relevantes, termos-chave e possíveis relações de causa e efeito.",
    howText3: "Em seguida, combina esses dados com sua própria base de conhecimento, que contém padrões de comportamento, eventos históricos, tendências sociais e econômicas, e conhecimentos científicos atuais.",
    howText4: "Com base nisso, a inteligência artificial simula resultados possíveis e calcula a probabilidade de que um determinado evento realmente ocorra.",
    howText5: "Se essa probabilidade for superior a 50%, a resposta será SIM. Se for inferior, a resposta será NÃO.",
    howText6: "Quanto mais informações você inserir, mais precisa e confiável será a previsão, pois o algoritmo terá mais dados para análise e tomada de decisão.",
    useTitle: "Como usar o Forecastler",
    useList: [
      "O uso do Forecastler é totalmente gratuito. Não são necessários dados pessoais, cadastro ou qualquer tipo de pagamento para enviar uma pergunta.",
      `(Opcional): No primeiro campo, você pode inserir informações adicionais sobre as pessoas, objetos, lugares ou situações relacionadas à pergunta.
Quanto mais detalhes você fornecer, maior será a base de avaliação da inteligência artificial, e mais precisa será a previsão.
Se você estiver interessado no futuro de uma pessoa (incluindo você mesmo), pode inserir: nome e sobrenome, data de nascimento, profissão, hábitos, circunstâncias de vida e outros dados importantes do passado ou do presente.
Se quiser uma avaliação sobre um objeto, bem ou propriedade, insira sua finalidade, características e histórico de uso.
Para locais e áreas geográficas: descreva sua localização, importância, história e estado atual.
Para situações atuais: mencione todos os envolvidos, o andamento até o momento e os fatos principais.`,
      "(Obrigatório): No segundo campo, insira uma pergunta concreta sobre o futuro, que possa ser respondida com SIM ou NÃO.",
      "Clique no botão 'Enviar pergunta'. O sistema processará os dados e calculará a probabilidade.",
      "Você receberá uma resposta em texto e um percentual de probabilidade. Depois disso, poderá imediatamente fazer uma nova pergunta."
    ],
    useNote: "Se a pergunta não estiver claramente formulada, o sistema irá notificá-lo.",
    faqTitle: "Quais são as perguntas mais frequentes?",
    faqText: "Aqui estão alguns exemplos de perguntas que os usuários mais frequentemente fazem ao Forecastler:",
    faqList: [
      "Vou mudar de emprego em breve?",
      "Meu parceiro e eu vamos continuar juntos até o final do ano?",
      "Vou adoecer este mês?",
      "Haverá uma tempestade no próximo verão?",
      "Uma nova guerra vai estourar no mundo este ano?",
      "Os preços vão subir 10% até o final do ano?",
      "Meu time favorito vai ganhar o campeonato no próximo ano?"
    ],
    dynamic: {
      answerLabel: "Resposta:",
      probabilityLabel: "Probabilidade:"
    },
    alerts: {
      emptyQuestion: "Insira uma pergunta antes de enviar.",
      invalidPrefix: "A pergunta deve começar com uma forma apropriada ('Será que...', 'Será que eu...', 'Será que nós...').",
      pastQuestion: "Faça uma pergunta relacionada ao futuro.",
      unrecognizedResponse: "A resposta não está em um formato reconhecível.",
      serverError: "Ocorreu um erro na comunicação com o servidor."
    },
    answers: {
      yes: "SIM",
      no: "NÃO"
    }
  },

  it: {
    title: "PREVISIONE GENERALE",
    welcomeText: "Pagina per prevedere eventi futuri basata sull’intelligenza artificiale e sull’analisi logica.",
    contextLabel: "Scrivi qualcosa su di te oppure su persone, oggetti, luoghi o situazioni di cui desideri prevedere il futuro. Non è obbligatorio, ma più informazioni inserisci, più precisa sarà la previsione:",
    questionLabel: "Formula una domanda sul futuro a cui si possa rispondere con SÌ o NO:",
    sendButton: "Invia la domanda",
    howTitle: "Come funziona Forecastler?",
    howText1: "Forecastler non utilizza magia, oroscopi né poteri parapsicologici per le previsioni. Al contrario, si basa sull’intelligenza artificiale che stima la probabilità degli eventi futuri utilizzando dati reali, statistiche e modelli matematici.",
    howText2: "Quando poni una domanda, il sistema analizza prima le informazioni testuali che hai inserito — inclusi contesto, dettagli rilevanti, parole chiave e possibili relazioni causa-effetto.",
    howText3: "Successivamente, combina questi dati con la propria base di conoscenze, che contiene schemi di comportamento, eventi storici, tendenze sociali ed economiche e conoscenze scientifiche attuali.",
    howText4: "Sulla base di tutto ciò, l’intelligenza artificiale simula possibili esiti e calcola la probabilità che un determinato evento si verifichi realmente.",
    howText5: "Se tale probabilità è superiore al 50%, la risposta sarà SÌ. Se è inferiore, la risposta sarà NO.",
    howText6: "Più informazioni inserisci, più la previsione sarà precisa e affidabile, poiché l’algoritmo avrà più dati da analizzare per trarre conclusioni.",
    useTitle: "Come si usa Forecastler?",
    useList: [
      "L’uso di Forecastler è completamente gratuito. Non sono richiesti dati personali, registrazione né alcun tipo di pagamento per inviare domande.",
      `(Facoltativo): Nel primo campo puoi inserire informazioni aggiuntive su persone, oggetti, luoghi o situazioni a cui si riferisce la domanda.
Più dettagli fornisci, maggiore sarà la base per la valutazione da parte dell’intelligenza artificiale e più precisa sarà la previsione.
Se sei interessato al futuro di una persona (incluso te stesso), puoi inserire: nome e cognome, data di nascita, professione, abitudini, circostanze di vita e altri dati importanti del passato o del presente.
Se desideri una valutazione di un oggetto, bene o proprietà, inserisci il suo scopo, le sue caratteristiche e la sua storia d’uso.
Per luoghi o aree geografiche: descrivi posizione, importanza, storia e stato attuale.
Per situazioni attuali: indica tutti i partecipanti, lo svolgimento fino ad ora e i fatti principali.`,
      "(Obbligatorio): Nel secondo campo, inserisci una domanda concreta sul futuro a cui si possa rispondere con SÌ o NO.",
      "Fai clic sul pulsante 'Invia la domanda'. Il sistema elaborerà i dati e calcolerà la probabilità.",
      "Riceverai una risposta testuale e una percentuale di probabilità. Dopo di ciò, potrai immediatamente porre una nuova domanda."
    ],
    useNote: "Se la domanda non è formulata chiaramente, il sistema te lo comunicherà.",
    faqTitle: "Quali sono le domande più frequenti?",
    faqText: "Ecco alcuni esempi di domande che gli utenti pongono più frequentemente a Forecastler:",
    faqList: [
      "Cambierò lavoro presto?",
      "Il mio partner e io resteremo insieme fino alla fine dell’anno?",
      "Mi ammalerò questo mese?",
      "Ci sarà una tempesta la prossima estate?",
      "Scoppierà una nuova guerra nel mondo quest’anno?",
      "I prezzi aumenteranno del 10% entro la fine dell’anno?",
      "La mia squadra preferita vincerà il campionato il prossimo anno?"
    ],
    dynamic: {
      answerLabel: "Risposta:",
      probabilityLabel: "Probabilità:"
    },
    alerts: {
      emptyQuestion: "Inserisci una domanda prima di inviare.",
      invalidPrefix: "La domanda deve iniziare con una forma appropriata ('Accadrà...', 'Accadrà a me...', 'Accadrà a noi...').",
      pastQuestion: "Fai una domanda riguardante il futuro.",
      unrecognizedResponse: "La risposta non è in un formato riconoscibile.",
      serverError: "Si è verificato un errore nella comunicazione con il server."
    },
    answers: {
      yes: "SÌ",
      no: "NO"
    }
  },

  ru: {
    title: "ОБЩИЙ ПРОГНОЗАТОР",
    welcomeText: "Страница для предсказания будущих событий на основе искусственного интеллекта и логического анализа.",
    contextLabel: "Напишите что-нибудь о себе или о людях, предметах, местах или ситуациях, чьё будущее вы хотите предсказать. Это необязательно, но чем больше информации вы предоставите, тем точнее будет прогноз:",
    questionLabel: "Задайте вопрос о будущем, на который можно ответить ДА или НЕТ:",
    sendButton: "Отправить вопрос",
    howTitle: "Как работает Forecastler?",
    howText1: "Forecastler не использует магию, гороскопы или парапсихологические способности для предсказаний. Вместо этого он основан на искусственном интеллекте, который оценивает вероятность будущих событий с использованием реальных данных, статистики и математических моделей.",
    howText2: "Когда вы задаёте вопрос, система сначала анализирует введённую вами текстовую информацию — включая контекст, важные детали, ключевые слова и возможные причинно-следственные связи.",
    howText3: "Затем эти данные объединяются с внутренней базой знаний, которая содержит модели поведения, исторические события, социальные и экономические тенденции, а также современные научные знания.",
    howText4: "На основе этой информации искусственный интеллект моделирует возможные исходы и рассчитывает вероятность того, что конкретное событие действительно произойдёт.",
    howText5: "Если вероятность превышает 50 %, ответ будет ДА. Если меньше — НЕТ.",
    howText6: "Чем больше информации вы вводите, тем точнее и надёжнее будет прогноз, поскольку алгоритм получает больше данных для анализа и вывода.",
    useTitle: "Как использовать Forecastler?",
    useList: [
      "Использование Forecastler полностью бесплатно. Не требуются личные данные, регистрация или какая-либо оплата для отправки вопроса.",
      `(Необязательно): В первом поле вы можете ввести дополнительную информацию о людях, предметах, местах или ситуациях, к которым относится ваш вопрос.
Чем больше деталей вы укажете, тем шире будет база для анализа, и тем точнее будет прогноз.
Если вас интересует будущее какого-либо человека (включая вас самих), вы можете указать: имя и фамилию, дату рождения, профессию, привычки, жизненные обстоятельства и другие важные сведения из прошлого или настоящего.
Если вы хотите получить оценку по какому-либо предмету, объекту или имуществу, укажите его назначение, характеристики и историю использования.
По поводу мест и географических объектов: опишите их расположение, значение, историю и текущее состояние.
Для оценки текущих ситуаций: перечислите всех участников, ход событий до настоящего момента и основные факты.`,
      "(Обязательно): Во втором поле введите конкретный вопрос о будущем, на который можно ответить ДА или НЕТ.",
      "Нажмите кнопку 'Отправить вопрос'. Система обработает данные и рассчитает вероятность.",
      "Вы получите текстовый ответ и процент вероятности. После этого вы можете сразу задать новый вопрос."
    ],
    useNote: "Если вопрос сформулирован неясно, система уведомит вас об этом.",
    faqTitle: "Какие вопросы задают чаще всего?",
    faqText: "Вот несколько примеров вопросов, которые пользователи чаще всего задают Forecastler:",
    faqList: [
      "Сменю ли я работу в ближайшее время?",
      "Останемся ли мы с моим партнёром вместе до конца года?",
      "Заболею ли я в этом месяце?",
      "Будет ли шторм следующим летом?",
      "Разразится ли новая война в мире в этом году?",
      "Вырастут ли цены на 10 % до конца года?",
      "Выиграет ли мой любимый клуб чемпионат в следующем году?"
    ],
    dynamic: {
      answerLabel: "Ответ:",
      probabilityLabel: "Вероятность:"
    },
    alerts: {
      emptyQuestion: "Введите вопрос перед отправкой.",
      invalidPrefix: "Вопрос должен начинаться с соответствующей формулировки ('Произойдёт ли...', 'Произойдёт ли со мной...', 'Произойдёт ли с нами...').",
      pastQuestion: "Задайте вопрос, связанный с будущим.",
      unrecognizedResponse: "Ответ не распознан по формату.",
      serverError: "Произошла ошибка при соединении с сервером."
    },
    answers: {
      yes: "ДА",
      no: "НЕТ"
    }
  },
};

function setLanguage(lang) {
  if (!translations[lang]) return;

  trenutniJezik = lang;
  localStorage.setItem("lang", lang);
  const t = translations[lang];

  document.getElementById("title").innerText = t.title;
  document.getElementById("welcome-text").innerText = t.welcomeText;
  document.getElementById("context-label").innerText = t.contextLabel;
  document.getElementById("question-label").innerText = t.questionLabel;
  document.getElementById("send-button").innerText = t.sendButton;
  document.getElementById("how-title").innerText = t.howTitle;
  document.getElementById("how-text-1").innerText = t.howText1;
  document.getElementById("how-text-2").innerText = t.howText2;
  document.getElementById("how-text-3").innerText = t.howText3;
  document.getElementById("how-text-4").innerText = t.howText4;
  document.getElementById("how-text-5").innerHTML = t.howText5;
  document.getElementById("how-text-6").innerText = t.howText6;
  document.getElementById("use-title").innerText = t.useTitle;

  const useList = document.getElementById("use-list");
  useList.innerHTML = "";
  t.useList.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    useList.appendChild(li);
  });

  document.getElementById("use-note").innerText = t.useNote;
  document.getElementById("faq-title").innerText = t.faqTitle;
  document.getElementById("faq-text").innerText = t.faqText;

  const faqList = document.getElementById("faq-list");
  faqList.innerHTML = "";
  t.faqList.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    faqList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  trenutniJezik = lang;
  setLanguage(lang);
});

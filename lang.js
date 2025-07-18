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
    howText4: "Na osnovu svega toga, veštačka inteligencija simulira moguće ishode i izračunava verovatnoću da se određeni događaj zaista desi.",
    howText5: "Ako je ta verovatnoća veća od 50%, odgovor glasi DA. Ako je manja, odgovor je NE.",
    howText6: "Što više informacija unesete, prognoza postaje preciznija i pouzdanija, jer algoritam tada ima više podataka za analizu i donošenje zaključka.",
    useTitle: "Kako se koristi Forecastler?",
    useList: [
      "Korišćenje Forecastlera je potpuno besplatno. Nisu potrebni lični podaci, registracija niti bilo kakva uplata da biste postavili pitanje.",
      `(Opciono): U prvom polju možete uneti dodatne informacije o osobama, predmetima, mestima ili situacijama na koje se pitanje odnosi.
Što više detalja unesete, veštačka inteligencija će imati veću osnovu za procenu i prognoza će biti preciznija.
Ako Vas zanima budućnost neke osobe (uključujući i Vas), možete uneti: ime i prezime, datum rođenja, zanimanje, navike, životne okolnosti i druge važne podatke iz prošlosti ili sadašnjosti.
Ako želite procenu za neki predmet, objekat ili imovinu, unesite njegovu svrhu, karakteristike i istoriju upotrebe.
Za mesta i geografske lokacije: opišite položaj, značaj, istoriju i sadašnje stanje.
Za trenutne situacije: navedite sve učesnike, dosadašnji tok događaja i ključne činjenice.`,
      "(Obavezno): U drugom polju postavite konkretno pitanje o budućnosti, na koje se može odgovoriti sa DA ili NE.",
      "Kliknite na dugme 'Pošaljite pitanje'. Sistem će obraditi podatke i izračunati verovatnoću.",
      "Dobićete tekstualni odgovor i procenat verovatnoće. Nakon toga, možete odmah postaviti novo pitanje."
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
    howTitle: "¿Cómo funciona Forecastler?",
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
      invalidPrefix: "La pregunta debe comenzar con una forma adecuada ('¿Pasará...?', '¿Ocurrirá...?').",
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
      "Cliquez sur le bouton 'Envoyer la question'. Le système traitera les données et calculera la probabilité.",
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
    title: "ALLGEMEINER PROGNOSTIKER",
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
    faqText: "Hier sind einige Beispiele für häufig gestellte Fragen an Forecastler:",
    faqList: [
      "Werde ich bald meinen Job wechseln?",
      "Werden mein Partner und ich bis zum Jahresende zusammenbleiben?",
      "Werde ich diesen Monat krank?",
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
    useNote: "Se a pergunta não estiver formulada de forma clara, o sistema irá avisar você.",
    faqTitle: "Quais são as perguntas mais frequentes?",
    faqText: "Veja alguns exemplos de perguntas que os usuários costumam fazer ao Forecastler:",
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
      "Mi ammalerò nel corso di questo mese?",
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
      invalidPrefix: "La domanda deve iniziare con una forma appropriata ('Accadrà...', 'Succederà...', 'Mi succederà...', 'Noi faremo...').",
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
    faqText: "Вот примеры часто задаваемых вопросов к Forecastler:",
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
      invalidPrefix: "Вопрос должен начинаться с соответствующей формулировки ('Случится ли...', 'Произойдёт ли...', 'Будет ли...', 'Сможем ли мы...').",
      pastQuestion: "Задайте вопрос, связанный с будущим.",
      unrecognizedResponse: "Ответ не распознан по формату.",
      serverError: "Произошла ошибка при соединении с сервером."
    },
    answers: {
      yes: "ДА",
      no: "НЕТ"
    }
  },

  pl: {
    title: "OGÓLNY PRZEWIDYWACZ",
    welcomeText: "Strona do przewidywania przyszłych wydarzeń na podstawie sztucznej inteligencji i analizy logicznej.",
    contextLabel: "Napisz coś o sobie lub o osobach, przedmiotach, miejscach albo sytuacjach, których przyszłość chcesz przewidzieć. Nie jest to obowiązkowe, ale im więcej informacji podasz, tym dokładniejsza będzie prognoza:",
    questionLabel: "Zadaj pytanie dotyczące przyszłości, na które można odpowiedzieć TAK lub NIE:",
    sendButton: "Wyślij pytanie",
    howTitle: "Jak działa Forecastler?",
    howText1: "Forecastler nie korzysta z magii, horoskopów ani zdolności parapsychologicznych. Opiera się na sztucznej inteligencji, która ocenia prawdopodobieństwo przyszłych wydarzeń za pomocą danych, statystyki i modeli matematycznych.",
    howText2: "Po zadaniu pytania system najpierw analizuje wprowadzone informacje tekstowe — w tym kontekst, istotne szczegóły, kluczowe pojęcia oraz możliwe związki przyczynowo-skutkowe.",
    howText3: "Następnie łączy te dane z własną bazą wiedzy, zawierającą wzorce zachowań, wydarzenia historyczne, trendy społeczne i ekonomiczne oraz aktualne odkrycia naukowe.",
    howText4: "Na tej podstawie sztuczna inteligencja symuluje możliwe scenariusze i oblicza prawdopodobieństwo wystąpienia danego wydarzenia.",
    howText5: "Jeśli to prawdopodobieństwo przekracza 50%, odpowiedź brzmi TAK. Jeśli jest mniejsze — NIE.",
    howText6: "Im więcej informacji podasz, tym prognoza będzie dokładniejsza i bardziej wiarygodna, ponieważ algorytm ma więcej danych do analizy i wnioskowania.",
    useTitle: "Jak korzystać z Forecastlera?",
    useList: [
      "Korzystanie z Forecastlera jest całkowicie bezpłatne. Nie są wymagane dane osobowe, rejestracja ani jakakolwiek płatność.",
      `(Opcjonalnie): W pierwszym polu możesz podać dodatkowe informacje o osobach, przedmiotach, miejscach lub sytuacjach, których dotyczy pytanie.
Im więcej szczegółów podasz, tym większą bazę do analizy będzie miała sztuczna inteligencja, a prognoza będzie dokładniejsza.
Jeśli chcesz przewidzieć przyszłość jakiejś osoby (w tym siebie), możesz podać: imię i nazwisko, datę urodzenia, zawód, nawyki, okoliczności życiowe i inne ważne dane z przeszłości lub teraźniejszości.
Jeśli pytanie dotyczy przedmiotu, obiektu lub majątku – opisz jego przeznaczenie, cechy i historię użytkowania.
W przypadku miejsc i lokalizacji geograficznych – opisz ich położenie, znaczenie, historię i obecny stan.
Dla bieżących sytuacji – podaj uczestników, dotychczasowy przebieg wydarzeń i kluczowe fakty.`,
      "(Wymagane): W drugim polu zadaj konkretne pytanie o przyszłość, na które można odpowiedzieć TAK lub NIE.",
      "Kliknij przycisk „Wyślij pytanie”. System przetworzy dane i obliczy prawdopodobieństwo.",
      "Otrzymasz odpowiedź tekstową i procent prawdopodobieństwa. Następnie możesz od razu zadać kolejne pytanie."
    ],
    useNote: "Jeśli pytanie będzie niejasne, system Cię o tym poinformuje.",
    faqTitle: "Jakie są najczęstsze pytania?",
    faqText: "Oto kilka przykładów pytań, które użytkownicy najczęściej zadają Forecastlerowi:",
    faqList: [
      "Czy wkrótce zmienię pracę?",
      "Czy mój partner i ja pozostaniemy razem do końca roku?",
      "Czy zachoruję w tym miesiącu?",
      "Czy tego lata będzie burza?",
      "Czy w tym roku wybuchnie nowa wojna na świecie?",
      "Czy ceny wzrosną o 10% do końca roku?",
      "Czy mój ulubiony klub zdobędzie mistrzostwo w przyszłym roku?"
    ],
    dynamic: {
      answerLabel: "Odpowiedź:",
      probabilityLabel: "Prawdopodobieństwo:"
    },
    alerts: {
      emptyQuestion: "Wprowadź pytanie przed wysłaniem.",
      invalidPrefix: "Pytanie musi zaczynać się od poprawnej formy (np. 'Czy...', 'Czy ja...', 'Czy my...').",
      pastQuestion: "Zadaj pytanie dotyczące przyszłości.",
      unrecognizedResponse: "Odpowiedź nie ma rozpoznawalnego formatu.",
      serverError: "Wystąpił błąd podczas komunikacji z serwerem."
    },
    answers: {
      yes: "TAK",
      no: "NIE"
    }
  },

  uk: {
    title: "ЗАГАЛЬНИЙ ПРОГНОЗ",
    welcomeText: "Сторінка для прогнозування майбутніх подій на основі штучного інтелекту та логічного аналізу.",
    contextLabel: "Напишіть щось про себе або про осіб, об'єкти, місця чи ситуації, майбутнє яких ви хочете передбачити. Це не обов’язково, але чим більше інформації ви надасте, тим точнішим буде прогноз:",
    questionLabel: "Задайте питання про майбутнє, на яке можна відповісти ТАК або НІ:",
    sendButton: "Надіслати питання",
    howTitle: "Як працює Forecastler?",
    howText1: "Forecastler не використовує магію, гороскопи чи парапсихологічні здібності. Замість цього він базується на штучному інтелекті, який оцінює ймовірність майбутніх подій, використовуючи реальні дані, статистику та математичні моделі.",
    howText2: "Коли ви ставите питання, система спочатку аналізує введену текстову інформацію — включаючи контекст, релевантні деталі, ключові поняття та можливі причинно-наслідкові зв’язки.",
    howText3: "Потім ці дані поєднуються з власною базою знань, яка містить моделі поведінки, історичні події, соціальні та економічні тенденції, а також сучасні наукові відкриття.",
    howText4: "На основі всього цього штучний інтелект моделює можливі результати та обчислює ймовірність того, що подія справді відбудеться.",
    howText5: "Якщо ця ймовірність перевищує 50%, відповідь — ТАК. Якщо нижча — НІ.",
    howText6: "Чим більше ви надасте інформації, тим точнішим і надійнішим буде прогноз, оскільки алгоритм матиме більше даних для аналізу та висновків.",
    useTitle: "Як користуватися Forecastler?",
    useList: [
      "Користування Forecastler є повністю безкоштовним. Для надсилання питання не потрібні особисті дані, реєстрація чи будь-яка оплата.",
      `(Необов’язково): У першому полі ви можете ввести додаткову інформацію про осіб, об'єкти, місця чи ситуації, до яких стосується ваше питання.
Чим більше деталей ви вкажете, тим ширшою буде база для аналізу штучного інтелекту, і прогноз буде точнішим.
Якщо вас цікавить майбутнє певної особи (включаючи себе), можна вказати: ім’я та прізвище, дату народження, професію, звички, життєві обставини та інші важливі дані з минулого або теперішнього.
Якщо вас цікавить об’єкт чи майно – опишіть його призначення, характеристики та історію використання.
Для місць та географічних локацій – опишіть їхнє розташування, значення, історію та поточний стан.
Для поточних ситуацій – перелічіть усіх учасників, перебіг подій і ключові факти.`,
      "(Обов’язково): У другому полі поставте чітке питання про майбутнє, на яке можна відповісти ТАК або НІ.",
      "Натисніть кнопку «Надіслати питання». Система обробить дані та розрахує ймовірність.",
      "Ви отримаєте текстову відповідь і відсоток ймовірності. Потім можете одразу ставити наступне питання."
    ],
    useNote: "Якщо питання сформульовано нечітко, система повідомить вас про це.",
    faqTitle: "Які найпоширеніші питання?",
    faqText: "Приклади найпоширеніших запитань до Forecastler:",
    faqList: [
      "Чи скоро я зміню роботу?",
      "Чи залишимось ми разом із моїм партнером до кінця року?",
      "Чи захворію я цього місяця?",
      "Чи буде шторм цього літа?",
      "Чи почнеться нова війна у світі цього року?",
      "Чи зростуть ціни на 10% до кінця року?",
      "Чи виграє мій улюблений клуб чемпіонат наступного року?"
    ],
    dynamic: {
      answerLabel: "Відповідь:",
      probabilityLabel: "Ймовірність:"
    },
    alerts: {
      emptyQuestion: "Введіть питання перед надсиланням.",
      invalidPrefix: "Питання повинно починатися з відповідної форми (напр., «Чи...», «Чи я...», «Чи ми...»).",
      pastQuestion: "Поставте питання, яке стосується майбутнього.",
      unrecognizedResponse: "Відповідь не має розпізнаваного формату.",
      serverError: "Сталася помилка при зв’язку з сервером."
    },
    answers: {
      yes: "ТАК",
      no: "НІ"
    }
  },

  tr: {
    title: "GENEL TAHMİN SİSTEMİ",
    welcomeText: "Gelecek olayların yapay zeka ve mantıksal analizle tahmin edildiği bir sayfa.",
    contextLabel: "Kendiniz, diğer kişiler, nesneler, yerler veya geleceğini öğrenmek istediğiniz durumlar hakkında bir şeyler yazın. Zorunlu değil, ancak ne kadar fazla bilgi verirseniz tahmin o kadar isabetli olur:",
    questionLabel: "Gelecekle ilgili EVET ya da HAYIR cevabı verilebilecek bir soru yazınız:",
    sendButton: "Soruyu gönder",
    howTitle: "Forecastler nasıl çalışır?",
    howText1: "Forecastler, tahmin yapmak için ne büyü, ne burçlar ne de parapsikolojik güçler kullanır. Bunun yerine, gelecekteki olayların olasılığını gerçek veriler, istatistikler ve matematiksel modellerle hesaplayan bir yapay zeka temellidir.",
    howText2: "Soru sorduğunuzda sistem önce girdiğiniz metinsel bilgileri analiz eder — bağlam, ilgili ayrıntılar, anahtar kavramlar ve olası neden-sonuç ilişkileri dahil.",
    howText3: "Sonra bu verileri, davranış kalıpları, tarihî olaylar, toplumsal ve ekonomik eğilimler ve güncel bilimsel bulgular içeren kendi bilgi tabanıyla birleştirir.",
    howText4: "Tüm bunlara dayanarak yapay zeka, olası senaryoları simüle eder ve belirli bir olayın gerçekleşme ihtimalini hesaplar.",
    howText5: "Bu olasılık %50'nin üzerindeyse cevap EVET olur. Daha düşükse cevap HAYIR’dır.",
    howText6: "Ne kadar çok bilgi verirseniz, tahmin o kadar doğru ve güvenilir olur, çünkü algoritma analiz için daha fazla veriye sahip olur.",
    useTitle: "Forecastler nasıl kullanılır?",
    useList: [
      "Forecastler’i kullanmak tamamen ücretsizdir. Soru sormak için kişisel bilgi, kayıt veya ödeme gerekmez.",
      `(İsteğe bağlı): İlk alana, sorunuzun ilgili olduğu kişiler, nesneler, yerler veya durumlarla ilgili ek bilgiler girebilirsiniz.
Ne kadar fazla ayrıntı girerseniz, yapay zekanın değerlendirme temeli o kadar geniş olur ve tahmin daha doğru olur.
Bir kişinin geleceğini merak ediyorsanız (kendiniz dahil), ad-soyad, doğum tarihi, meslek, alışkanlıklar, yaşam koşulları ve geçmişten ya da şimdiki zamandan önemli bilgileri girebilirsiniz.
Bir nesne, yapı ya da mülkle ilgili tahmin istiyorsanız, amacını, özelliklerini ve kullanım geçmişini belirtin.
Yerler ve coğrafi konumlar için: konum, önemi, geçmişi ve mevcut durumu tanımlayın.
Mevcut bir durum için: tüm tarafları, olayın gidişatını ve önemli gerçekleri açıklayın.`,
      "(Zorunlu): İkinci alana, gelecekle ilgili ve EVET ya da HAYIR cevabı verilebilecek net bir soru yazın.",
      "'Soruyu gönder' düğmesine tıklayın. Sistem bilgileri analiz edecek ve olasılığı hesaplayacaktır.",
      "Size metin tabanlı bir cevap ve olasılık yüzdesi verilecektir. Ardından hemen yeni bir soru sorabilirsiniz."
    ],
    useNote: "Eğer sorunuz açık biçimde yazılmamışsa, sistem sizi bu konuda bilgilendirecektir.",
    faqTitle: "En sık sorulan sorular nelerdir?",
    faqText: "İşte kullanıcıların Forecastler’e en sık sordukları bazı örnek sorular:",
    faqList: [
      "Yakında iş değiştirecek miyim?",
      "Partnerimle yıl sonuna kadar birlikte kalacak mıyız?",
      "Bu ay hastalanacak mıyım?",
      "Gelecek yaz fırtına olacak mı?",
      "Bu yıl dünyada yeni bir savaş çıkacak mı?",
      "Yıl sonuna kadar fiyatlar %10 artacak mı?",
      "Favori takımım gelecek yıl şampiyon olacak mı?"
    ],
    dynamic: {
      answerLabel: "Cevap:",
      probabilityLabel: "Olasılık:"
    },
    alerts: {
      emptyQuestion: "Lütfen bir soru girin.",
      invalidPrefix: "Soru, uygun bir kalıpla başlamalıdır.",
      pastQuestion: "Lütfen geleceğe dair bir soru sorun.",
      unrecognizedResponse: "Cevap tanınabilir formatta değil.",
      serverError: "Sunucuyla iletişimde bir hata oluştu."
    },
    answers: {
      yes: "EVET",
      no: "HAYIR"
    }
  },

  ar: {
    title: "نظام التنبؤ العام",
    welcomeText: "صفحة لتوقّع الأحداث المستقبلية باستخدام الذكاء الاصطناعي والتحليل المنطقي.",
    contextLabel: "اكتب شيئًا عن نفسك أو عن الأشخاص أو الأشياء أو الأماكن أو الحالات التي تريد معرفة مستقبلها. هذه الخطوة اختيارية، لكن كلما زادت المعلومات، كانت التوقعات أدق:",
    questionLabel: "اكتب سؤالًا عن المستقبل يمكن الإجابة عليه بـ نعم أو لا:",
    sendButton: "أرسل السؤال",
    howTitle: "كيف يعمل Forecastler؟",
    howText1: "لا يعتمد Forecastler على السحر أو الأبراج أو القوى الخارقة. بل يستند إلى الذكاء الاصطناعي الذي يُقيّم احتمالات الأحداث المستقبلية باستخدام البيانات الفعلية والإحصائيات والنماذج الرياضية.",
    howText2: "عند طرحك سؤالاً، يقوم النظام أولاً بتحليل المعلومات النصية التي أدخلتها — بما في ذلك السياق والتفاصيل الرئيسية والمفاهيم الأساسية والروابط السببية المحتملة.",
    howText3: "ثم يدمج هذه البيانات مع قاعدة معرفته الخاصة، التي تحتوي على أنماط سلوكية وأحداث تاريخية واتجاهات اجتماعية واقتصادية ومعارف علمية حديثة.",
    howText4: "استنادًا إلى كل ذلك، يحاكي الذكاء الاصطناعي النتائج المحتملة ويحسب احتمال وقوع الحدث.",
    howText5: "إذا كانت الاحتمالية أعلى من 50%، تكون الإجابة نعم. وإذا كانت أقل، تكون الإجابة لا.",
    howText6: "كلما زادت كمية المعلومات المدخلة، زادت دقة وموثوقية التوقعات، لأن الخوارزمية تحصل على بيانات أكثر للتحليل والاستنتاج.",
    useTitle: "كيف تستخدم Forecastler؟",
    useList: [
      "استخدام Forecastler مجاني تمامًا. لا حاجة لأي معلومات شخصية أو تسجيل أو دفع لطرح سؤال.",
      `(اختياري): في الحقل الأول يمكنك إدخال معلومات إضافية عن الأشخاص أو الأشياء أو الأماكن أو الحالات المتعلقة بالسؤال.
كلما زادت التفاصيل، حصل الذكاء الاصطناعي على أساس أفضل للتقييم، وكانت التوقعات أدق.
إذا كنت مهتمًا بمستقبل شخص ما (بما في ذلك نفسك)، يمكنك إدخال الاسم، تاريخ الميلاد، المهنة، العادات، الظروف المعيشية، والمعلومات الهامة من الماضي أو الحاضر.
إذا كان التوقع يخص شيئًا ماديًا أو ممتلكات، فاذكر الغرض منها وخصائصها وتاريخ استخدامها.
أما بالنسبة للأماكن: حدد الموقع، الأهمية، التاريخ، والحالة الحالية.
وفي حالة المواقف الحالية: اذكر جميع الأطراف، مجريات الأحداث حتى الآن، والحقائق الرئيسية.`,
      "(إجباري): في الحقل الثاني، اطرح سؤالًا محددًا عن المستقبل يمكن الإجابة عليه بـ نعم أو لا.",
      "اضغط على زر 'أرسل السؤال'. سيقوم النظام بمعالجة البيانات وحساب الاحتمال.",
      "ستتلقى إجابة نصية ونسبة مئوية لاحتمالية. بعد ذلك، يمكنك طرح سؤال جديد فورًا."
    ],
    useNote: "إذا لم يكن السؤال واضحًا، فسيقوم النظام بإعلامك بذلك.",
    faqTitle: "ما الأسئلة الأكثر شيوعًا؟",
    faqText: "إليك بعض الأسئلة الشائعة التي يطرحها المستخدمون على Forecastler:",
    faqList: [
      "هل سأغيّر عملي قريبًا؟",
      "هل سأبقى مع شريكي حتى نهاية السنة؟",
      "هل سأمرض هذا الشهر؟",
      "هل ستكون هناك عواصف في الصيف القادم؟",
      "هل ستندلع حرب جديدة هذا العام؟",
      "هل سترتفع الأسعار بنسبة 10٪ قبل نهاية السنة؟",
      "هل سيفوز فريقي المفضل بالبطولة العام المقبل؟"
    ],
    dynamic: {
      answerLabel: "الإجابة:",
      probabilityLabel: "الاحتمال:"
    },
    alerts: {
      emptyQuestion: "يرجى إدخال السؤال قبل الإرسال.",
      invalidPrefix: "يجب أن يبدأ السؤال بصيغة مناسبة.",
      pastQuestion: "يرجى طرح سؤال يتعلق بالمستقبل.",
      unrecognizedResponse: "لم يتم التعرف على تنسيق الإجابة.",
      serverError: "حدث خطأ في الاتصال بالخادم."
    },
    answers: {
      yes: "نعم",
      no: "لا"
    }
  },

  hi: {
    title: "जनरल प्रेडिक्टर",
    welcomeText: "यह पृष्ठ कृत्रिम बुद्धिमत्ता और तार्किक विश्लेषण पर आधारित भविष्य की घटनाओं की भविष्यवाणी करता है।",
    contextLabel: "अपने बारे में, उन व्यक्तियों, वस्तुओं, स्थानों या स्थितियों के बारे में कुछ लिखें जिनका भविष्य आप जानना चाहते हैं। यह अनिवार्य नहीं है, लेकिन आप जितनी अधिक जानकारी देंगे, भविष्यवाणी उतनी ही सटीक होगी:",
    questionLabel: "भविष्य से संबंधित ऐसा प्रश्न पूछें जिसका उत्तर हाँ या नहीं में दिया जा सके:",
    sendButton: "प्रश्न भेजें",
    howTitle: "Forecastler कैसे काम करता है?",
    howText1: "Forecastler भविष्यवाणी के लिए न तो जादू, न राशिफल और न ही परामनोविज्ञान का उपयोग करता है। इसके बजाय, यह कृत्रिम बुद्धिमत्ता पर आधारित है जो वास्तविक डेटा, सांख्यिकी और गणितीय मॉडलों के माध्यम से घटनाओं की संभाव्यता का आकलन करता है।",
    howText2: "जब आप एक प्रश्न पूछते हैं, तो सिस्टम पहले आपके द्वारा दर्ज की गई पाठ्य जानकारी का विश्लेषण करता है — जिसमें संदर्भ, प्रासंगिक विवरण, प्रमुख शब्द और संभावित कारण-प्रभाव संबंध शामिल होते हैं।",
    howText3: "इसके बाद यह डेटा अपने ज्ञान आधार के साथ जोड़ता है, जिसमें व्यवहार पैटर्न, ऐतिहासिक घटनाएं, सामाजिक और आर्थिक प्रवृत्तियाँ और वर्तमान वैज्ञानिक निष्कर्ष शामिल होते हैं।",
    howText4: "इन सभी के आधार पर, कृत्रिम बुद्धिमत्ता संभावित परिणामों का अनुकरण करती है और यह गणना करती है कि कोई विशेष घटना वास्तव में घटित होगी या नहीं।",
    howText5: "यदि संभाव्यता 50% से अधिक है, तो उत्तर होता है: हाँ। यदि कम है, तो उत्तर होता है: नहीं।",
    howText6: "जितनी अधिक जानकारी आप देंगे, भविष्यवाणी उतनी ही अधिक सटीक और विश्वसनीय होगी, क्योंकि एल्गोरिथ्म के पास विश्लेषण करने और निष्कर्ष निकालने के लिए अधिक डेटा होगा।",
    useTitle: "Forecastler का उपयोग कैसे करें?",
    useList: [
      "Forecastler का उपयोग पूरी तरह से निःशुल्क है। प्रश्न पूछने के लिए कोई व्यक्तिगत जानकारी, पंजीकरण या भुगतान आवश्यक नहीं है।",
      `(वैकल्पिक): पहले फ़ील्ड में आप उन व्यक्तियों, वस्तुओं, स्थानों या स्थितियों के बारे में अतिरिक्त जानकारी दर्ज कर सकते हैं जिनसे प्रश्न संबंधित है।
जितना अधिक विवरण आप दर्ज करेंगे, कृत्रिम बुद्धिमत्ता के पास मूल्यांकन के लिए बेहतर आधार होगा और भविष्यवाणी अधिक सटीक होगी।
यदि आप किसी व्यक्ति (अपने सहित) के भविष्य में रुचि रखते हैं, तो आप दर्ज कर सकते हैं: नाम, जन्मतिथि, व्यवसाय, आदतें, जीवन परिस्थितियाँ, और अतीत या वर्तमान से अन्य महत्वपूर्ण जानकारी।
यदि आप किसी वस्तु, संपत्ति या संसाधन के बारे में मूल्यांकन चाहते हैं, तो उसका उद्देश्य, विशेषताएँ और उपयोग का इतिहास दर्ज करें।
स्थानों और भौगोलिक क्षेत्रों के लिए: स्थान, महत्व, इतिहास और वर्तमान स्थिति का वर्णन करें।
वर्तमान स्थितियों के लिए: सभी प्रतिभागियों, अब तक की घटनाओं और प्रमुख तथ्यों का उल्लेख करें।`,
      "(आवश्यक): दूसरे फ़ील्ड में भविष्य से संबंधित एक स्पष्ट प्रश्न दर्ज करें जिसका उत्तर हाँ या नहीं में दिया जा सके।",
      "'प्रश्न भेजें' बटन पर क्लिक करें। सिस्टम डेटा का विश्लेषण करेगा और संभाव्यता की गणना करेगा।",
      "आपको एक टेक्स्ट उत्तर और संभाव्यता प्रतिशत मिलेगा। उसके बाद आप तुरंत एक नया प्रश्न पूछ सकते हैं।"
    ],
    useNote: "यदि प्रश्न स्पष्ट रूप से नहीं पूछा गया है, तो सिस्टम आपको सूचित करेगा।",
    faqTitle: "सबसे सामान्य प्रश्न कौन से हैं?",
    faqText: "यहाँ कुछ सामान्य प्रश्न हैं जो उपयोगकर्ता अक्सर Forecastler से पूछते हैं:",
    faqList: [
      "क्या मैं जल्द ही नौकरी बदलूंगा?",
      "क्या मेरा साथी और मैं साल के अंत तक साथ रहेंगे?",
      "क्या मैं इस महीने बीमार पड़ूँगा?",
      "क्या अगली गर्मियों में तूफान आएगा?",
      "क्या इस साल दुनिया में कोई नया युद्ध शुरू होगा?",
      "क्या साल के अंत तक कीमतों में 10% की वृद्धि होगी?",
      "क्या मेरी पसंदीदा टीम अगले साल चैंपियन बनेगी?"
    ],
    dynamic: {
      answerLabel: "उत्तर:",
      probabilityLabel: "संभाव्यता:"
    },
    alerts: {
      emptyQuestion: "कृपया प्रश्न दर्ज करें।",
      invalidPrefix: "प्रश्न उपयुक्त प्रारूप में शुरू होना चाहिए।",
      pastQuestion: "कृपया भविष्य से संबंधित प्रश्न पूछें।",
      unrecognizedResponse: "उत्तर मान्यता प्राप्त प्रारूप में नहीं है।",
      serverError: "सर्वर से संचार में त्रुटि हुई।"
    },
    answers: {
      yes: "हाँ",
      no: "नहीं"
    }
  },

  zh: {
    title: "通用预测器",
    welcomeText: "这是一个基于人工智能和逻辑分析的未来事件预测页面。",
    contextLabel: "请写一些关于你自己、你想预测其未来的人、事物、地点或情况的信息。此项非必填，但提供的信息越多，预测越准确：",
    questionLabel: "提出一个关于未来的问题，该问题只能以“是”或“否”回答：",
    sendButton: "提交问题",
    howTitle: "Forecastler 是如何运作的？",
    howText1: "Forecastler 不使用魔法、星座或超自然能力进行预测。它基于人工智能，通过真实数据、统计学和数学模型来评估未来事件的可能性。",
    howText2: "当您提交一个问题时，系统首先分析您提供的文本信息——包括背景、相关细节、关键词以及可能的因果关系。",
    howText3: "然后，它将这些数据与其内部知识库结合，该知识库包含行为模式、历史事件、社会经济趋势和当前的科学知识。",
    howText4: "基于所有这些信息，人工智能会模拟可能的结果，并计算特定事件发生的概率。",
    howText5: "如果概率超过 50%，答案是“是”；如果低于 50%，答案是“否”。",
    howText6: "您提供的信息越多，预测就越精确可靠，因为算法将拥有更多数据用于分析和决策。",
    useTitle: "如何使用 Forecastler？",
    useList: [
      "使用 Forecastler 是完全免费的。提交问题不需要任何个人信息、注册或付款。",
      "（可选）您可以在第一个字段中输入关于涉及问题的个人、物体、地点或情况的额外信息。",
      "（必填）在第二个字段中输入一个关于未来的具体问题，该问题只能以“是”或“否”回答。",
      "点击“提交问题”按钮。系统将处理数据并计算概率。",
      "您将收到文本答案和一个概率百分比。之后，您可以立即提交新问题。"
    ],
    useNote: "如果问题表达不清晰，系统会提醒您。",
    faqTitle: "常见问题有哪些？",
    faqText: "以下是用户最常提出的示例问题：",
    faqList: [
      "我很快会换工作吗？",
      "我和伴侣能坚持到年底吗？",
      "我这个月会生病吗？",
      "明年夏天会有暴风雨吗？",
      "今年会爆发新的战争吗？",
      "年底前价格会上涨10%吗？",
      "我最喜欢的球队明年会赢得冠军吗？"
    ],
    dynamic: {
      answerLabel: "答案：",
      probabilityLabel: "概率："
    },
    alerts: {
      emptyQuestion: "请在提交前输入问题。",
      invalidPrefix: "问题必须以合适的形式开始（例如：会…吗？）。",
      pastQuestion: "请提出与未来相关的问题。",
      unrecognizedResponse: "系统无法识别答案格式。",
      serverError: "与服务器通信时发生错误。"
    },
    answers: {
      yes: "是",
      no: "否"
    }
  },

  ja: {
    title: "ジェネラル予測システム",
    welcomeText: "人工知能と論理的分析に基づいて未来の出来事を予測するページです。",
    contextLabel: "あなた自身、または未来を知りたい人、物、場所、状況について何か書いてください。必須ではありませんが、情報が多いほど予測は正確になります：",
    questionLabel: "はい または いいえ で答えられる未来に関する質問をしてください：",
    sendButton: "質問を送信",
    howTitle: "Forecastler はどのように機能しますか？",
    howText1: "Forecastler は魔法や占星術、超能力を使って予測するのではなく、実際のデータ、統計、数学モデルに基づきイベントの確率を評価する人工知能です。",
    howText2: "質問を入力すると、システムはまず入力されたテキスト情報—コンテキスト、関連する詳細、キー概念、因果関係の可能性—を分析します。",
    howText3: "次に、それらのデータを行動パターン、歴史的出来事、社会・経済トレンド、最新の科学的発見を含む知識ベースと組み合わせます。",
    howText4: "その全てを元に、人工知能は可能な結果をシミュレートし、特定の出来事が実際に起こる確率を計算します。",
    howText5: "その確率が 50％ を超える場合、答えは「はい」となり、下回る場合は「いいえ」です。",
    howText6: "入力される情報が多ければ多いほど予測は精度が高まり、信頼性も向上します。",
    useTitle: "Forecastler の使い方",
    useList: [
      "Forecastler は完全無料でご利用いただけます。質問するために個人情報、登録、支払いは不要です。",
      `(オプション)：最初のフィールドには、質問対象の人物、物、場所、状況に関する追加情報を入力できます。
詳細が多いほど、AI はより多くのデータをもとに精度の高い予測を行います。
人物（あなた自身を含む）に関して未来を知りたい場合は、名前、生年月日、職業、習慣、生活状況、過去または現在の重要な情報を記載してください。
物や所有物についての評価を知りたい場合は、その目的、特徴、使用履歴を入力してください。
場所や地理的状況については、位置、重要性、歴史、現状を説明してください。
現在の状況については、関係者すべて、これまでの経緯、重要な事実などを記載してください。`,
      "(必須)：次のフィールドには、「はい」または「いいえ」で答えられる未来に関する具体的な質問を入力してください。",
      "「質問を送信」ボタンをクリックしてください。システムがデータを処理し、確率を算出します。",
      "テキスト形式の回答と確率のパーセンテージが表示されます。その後すぐに新しい質問をすることも可能です。"
    ],
    useNote: "質問が明確でない場合、システムが通知します。",
    faqTitle: "よくある質問",
    faqText: "ユーザーが Forecastler に最もよく尋ねる質問の例はこちらです：",
    faqList: [
      "近いうちに転職しますか？",
      "今年の終わりまでにパートナーと一緒にいますか？",
      "今月病気になりますか？",
      "来年の夏に天候が荒れますか？",
      "今年、新たな戦争が起きますか？",
      "今年末までに価格が10％上昇しますか？",
      "来年、私の好きなクラブは優勝しますか？"
    ],
    dynamic: {
      answerLabel: "回答：",
      probabilityLabel: "確率："
    },
    alerts: {
      emptyQuestion: "質問を入力してください。",
      invalidPrefix: "未来に関する質問を入力してください。",
      pastQuestion: "未来についての質問をしてください。",
      unrecognizedResponse: "回答が不明な形式です。",
      serverError: "サーバーとの通信中にエラーが発生しました。"
    },
    answers: {
      yes: "はい",
      no: "いいえ"
    }
  },
};

function setLanguage(lang) {
  localStorage.setItem('forecastlerLang', lang);
  if (!translations[lang]) return;

  trenutniJezik = lang;
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

  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("forecastlerLang") || "en";
  trenutniJezik = lang;
  setLanguage(lang);
});

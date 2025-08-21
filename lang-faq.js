// lang-faq.js (robustan za faq.html; radi i ako kasnije dodaš -en sufikse)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },

    faq: {
      b1: {
        q:  "What is Forecastler and how does it work?",
        a1: "Forecastler estimates the probability of future events. It does not predict with certainty.",
        a2: "It analyzes your question (context, key details, possible cause-and-effect links) and returns a percentage as a rational, information-based estimate."
      },
      b2: {
        q:  "Is this fortune-telling?",
        a1: "No. Forecastler does not use horoscopes, magic, or powers. It relies on AI, logic, statistics, and risk modeling to frame outcomes in probabilities."
      },
      b3: {
        q:  "How do I ask a good question to get a better answer?",
        a1: "Write a YES/NO question, include a clear time frame (e.g., “by Dec 31, 2025”), and define a measurable outcome.",
        a2: "Focus on one subject and one outcome per question."
      },
      b4: {
        q:  "How should I interpret the probability?",
        a1: "~80% = very likely (not guaranteed); ~50% = evenly balanced; ~20% = unlikely but possible.",
        a2: "Use it as one input to your decision, alongside your knowledge, constraints, and risk tolerance."
      },
      b5: {
        q:  "Why do I sometimes get a different result for a similar question?",
        a1: "Wording changes, added context, updated circumstances, or a sharper definition can shift the estimate.",
        a2: "For consistent comparisons, keep wording and time frames the same."
      },
      b6: {
        q:  "May I ask questions about other people?",
        a1: "<strong>Yes</strong>, but respect privacy and the law: avoid personal data (PII) and do not target people who publicly object to being a subject.",
        a2: "Keep such outputs for yourself and do <strong>not</strong> share predictions about identifiable third parties publicly without their explicit consent.",
        a3: "Forecastler is not a substitute for professional advice (medical, legal, financial, etc.)."
      },
      b7: {
        q:  "Do you collect my data? Do you use cookies?",
        a1: "<strong>Cookies:</strong> no cookies are currently set.",
        a2: "<strong>Cookieless GA4:</strong> basic traffic/performance only; no PII is sent; Google Signals and advertising features are off; in the EU, IPs are not logged/stored.",
        a3: "<strong>localStorage/sessionStorage:</strong> used for practical preferences in your browser; data stays on your device. Clearing browser data resets them."
      },
      b8: {
        q:  "May I share results (screenshots or copied text)?",
        a1: "For private, non-commercial use—yes.",
        a2: "For public sharing of predictions about identifiable third parties, you need their explicit permission. Without consent, do <strong>not</strong> post such predictions or screenshots."
      },
      b9: {
        q:  "May I share the platform on social media and talk about its performance?",
        a1: "<strong>Yes.</strong> You may share the site, describe features, UX, speed, and overall performance.",
        a2: "Posting interface screenshots and generic/demo examples is fine, as long as you don’t reveal personal data or concrete predictions about identifiable third parties without consent."
      },
      b10: {
        q:  "Is the service free?",
        a1: "Yes, for now. We may introduce limits, premium options, or ads later; any changes will be announced in the Terms of Use and/or via on-site notices."
      },
      cta: {
        title: "Still have questions?",
        text1: "If something isn’t clear or you’d like to suggest an improvement, feel free to reach out.",
        text2: 'Contact us at <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> or use the Contact page. Please avoid sharing personal data (PII) in your message.'
      }
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },

    faq: {
      b1: {
        q:  "Šta je Forecastler i kako radi?",
        a1: "Forecastler procenjuje verovatnoću budućih događaja. Ne daje apsolutna proročanstva.",
        a2: "Analizira vaše pitanje (kontekst, ključne detalje, moguće uzročno-posledične veze) i vraća procenat kao racionalnu procenu zasnovanu na informacijama."
      },
      b2: {
        q:  "Da li je ovo gatanje?",
        a1: "Ne. Forecastler ne koristi horoskope, magiju ili moći. Oslanja se na veštačku inteligenciju, logiku, statistiku i modeliranje rizika kako bi ishode izrazio u verovatnoćama."
      },
      b3: {
        q:  "Kako da postavim dobro pitanje da dobijem bolji odgovor?",
        a1: "Napišite pitanje na koje se odgovara DA/NE, uključite jasan rok (npr. „do 31. decembra 2025.“) i definišite merljiv ishod.",
        a2: "Fokusirajte se na jedan subjekt i jedan ishod po pitanju."
      },
      b4: {
        q:  "Kako da tumačim procenat verovatnoće?",
        a1: "~80% = vrlo verovatno (nije zagarantovano); ~50% = podjednaka šansa; ~20% = malo verovatno, ali moguće.",
        a2: "Koristite kao jedan od ulaza u odluku, uz vaše znanje, ograničenja i toleranciju na rizik."
      },
      b5: {
        q:  "Zašto ponekad dobijem drugačiji rezultat za slično pitanje?",
        a1: "Promena formulacije, dodatni kontekst, nove okolnosti ili preciznije definisanje mogu pomeriti procenu.",
        a2: "Za uporedive rezultate, držite istu formulaciju i iste vremenske okvire."
      },
      b6: {
        q:  "Sme li da se postavljaju pitanja o drugim osobama?",
        a1: "<strong>Da</strong>, ali poštujte privatnost i zakon: izbegavajte lične podatke (PII) i ne targetirajte osobe koje su javno prigovorile da budu predmet.",
        a2: "Takve izlaze zadržite za sebe i <strong>ne</strong> delite javno predviđanja o prepoznatljivim trećim licima bez njihove izričite saglasnosti.",
        a3: "Forecastler ne zamenjuje profesionalni savet (medicinski, pravni, finansijski itd.)."
      },
      b7: {
        q:  "Da li prikupljate moje podatke? Da li koristite kolačiće?",
        a1: "<strong>Kolačići:</strong> trenutno ne postavljamo kolačiće.",
        a2: "<strong>GA4 bez kolačića:</strong> samo osnovno merenje saobraćaja/perfomansi; PII se ne šalje; Google Signals i oglasne funkcije su isključene; u EU se IP adrese ne loguju niti čuvaju.",
        a3: "<strong>localStorage/sessionStorage:</strong> koriste se za praktična podešavanja u vašem pregledaču; podaci ostaju na vašem uređaju. Brisanjem podataka pregledača resetuju se."
      },
      b8: {
        q:  "Smeju li se deliti rezultati (skrinšotovi ili kopirani tekst)?",
        a1: "Za privatnu, nekomercijalnu upotrebu — da.",
        a2: "Za javno deljenje predviđanja o prepoznatljivim trećim licima potrebna je njihova izričita saglasnost. Bez saglasnosti, <strong>ne</strong> objavljujte takva predviđanja ni skrinšotove."
      },
      b9: {
        q:  "Sme li se platforma deliti na društvenim mrežama i komentarisati performanse?",
        a1: "<strong>Da.</strong> Možete deliti sajt, opisivati funkcije, UX, brzinu i opšti učinak.",
        a2: "Objava skrinšotova interfejsa i generičkih/demo primera je u redu, dok god ne otkrivate lične podatke ili konkretna predviđanja o prepoznatljivim trećim licima bez saglasnosti."
      },
      b10: {
        q:  "Da li je usluga besplatna?",
        a1: "Da, za sada. Kasnije možemo uvesti ograničenja, premium opcije ili oglase; promene će biti najavljene u Uslovima korišćenja i/ili putem obaveštenja na sajtu."
      },
      cta: {
        title: "Imate još pitanja?",
        text1: "Ako nešto nije jasno ili imate predlog za unapređenje, slobodno nam pišite.",
        text2: 'Kontakt: <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> ili strana Kontakt. Molimo ne delite lične podatke (PII) u poruci.'
      }
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  faq: {
    b1: {
      q: "¿Qué es Forecastler y cómo funciona?",
      a1: "Forecastler estima la probabilidad de acontecimientos futuros. No predice con certeza.",
      a2: "Analiza tu pregunta (contexto, detalles clave, posibles relaciones causa-efecto) y devuelve un porcentaje como una estimación racional basada en información."
    },
    b2: {
      q: "¿Esto es adivinación?",
      a1: "No. Forecastler no usa horóscopos, magia ni poderes. Se basa en IA, lógica, estadística y modelado de riesgos para expresar los resultados en probabilidades."
    },
    b3: {
      q: "¿Cómo hago una buena pregunta para obtener una mejor respuesta?",
      a1: "Escribe una pregunta de SÍ/NO, incluye un marco temporal claro (p. ej., “antes del 31 dic 2025”) y define un resultado medible.",
      a2: "Concéntrate en un solo sujeto y un solo resultado por pregunta."
    },
    b4: {
      q: "¿Cómo debo interpretar la probabilidad?",
      a1: "~80% = muy probable (no garantizado); ~50% = equilibrado; ~20% = poco probable pero posible.",
      a2: "Úsala como un insumo más para tu decisión, junto con tu conocimiento, limitaciones y tolerancia al riesgo."
    },
    b5: {
      q: "¿Por qué a veces obtengo un resultado diferente para una pregunta similar?",
      a1: "Cambios en la redacción, contexto añadido, circunstancias actualizadas o una definición más precisa pueden modificar la estimación.",
      a2: "Para comparaciones consistentes, mantén la misma redacción y los mismos plazos."
    },
    b6: {
      q: "¿Puedo hacer preguntas sobre otras personas?",
      a1: "<strong>Sí</strong>, pero respeta la privacidad y la ley: evita datos personales (PII) y no apuntes a personas que se opongan públicamente a ser objeto de la consulta.",
      a2: "Conserva esos resultados para ti y <strong>no</strong> compartas públicamente predicciones sobre terceros identificables sin su consentimiento expreso.",
      a3: "Forecastler no sustituye el asesoramiento profesional (médico, legal, financiero, etc.)."
    },
    b7: {
      q: "¿Recopilan mis datos? ¿Usan cookies?",
      a1: "<strong>Cookies:</strong> actualmente no se establecen cookies.",
      a2: "<strong>GA4 sin cookies:</strong> solo medición básica de tráfico/rendimiento; no se envía PII; Google Signals y las funciones publicitarias están desactivadas; en la UE, las direcciones IP no se registran ni almacenan.",
      a3: "<strong>localStorage/sessionStorage:</strong> se usan para preferencias prácticas en su navegador; los datos permanecen en su dispositivo. Al borrar los datos del navegador se restablecen."
    },
    b8: {
      q: "¿Puedo compartir resultados (capturas o texto copiado)?",
      a1: "Para uso privado y no comercial—sí.",
      a2: "Para compartir públicamente predicciones sobre terceros identificables, necesita su permiso expreso. Sin consentimiento, <strong>no</strong> publique esas predicciones ni capturas."
    },
    b9: {
      q: "¿Puedo compartir la plataforma en redes sociales y hablar de su rendimiento?",
      a1: "<strong>Sí.</strong> Puede compartir el sitio y describir funciones, UX, velocidad y rendimiento general.",
      a2: "Está bien publicar capturas de la interfaz y ejemplos genéricos/de demo, siempre que no revele datos personales ni predicciones concretas sobre terceros identificables sin consentimiento."
    },
    b10: {
      q: "¿El servicio es gratuito?",
      a1: "Sí, por ahora. Más adelante podríamos introducir límites, opciones premium o anuncios; cualquier cambio se anunciará en los Términos de Uso y/o mediante avisos en el sitio."
    },
    cta: {
      title: "¿Aún tienes preguntas?",
      text1: "Si algo no está claro o quieres sugerir una mejora, no dudes en escribirnos.",
      text2: 'Contáctanos en <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> o usa la página de Contacto. Por favor, evita compartir datos personales (PII) en tu mensaje.'
    }
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  faq: {
    b1: {
      q: "Qu’est-ce que Forecastler et comment ça marche ?",
      a1: "Forecastler estime la probabilité d’événements futurs. Il ne prédit pas avec certitude.",
      a2: "Il analyse votre question (contexte, éléments clés, liens de cause à effet possibles) et renvoie un pourcentage comme estimation rationnelle fondée sur l’information."
    },
    b2: {
      q: "Est-ce de la voyance ?",
      a1: "Non. Forecastler n’utilise ni horoscopes, ni magie, ni pouvoirs. Il s’appuie sur l’IA, la logique, les statistiques et la modélisation du risque pour exprimer les issues en probabilités."
    },
    b3: {
      q: "Comment poser une bonne question pour obtenir une meilleure réponse ?",
      a1: "Formulez une question OUI/NON, indiquez un horizon temporel clair (p. ex. « d’ici le 31 déc. 2025 ») et définissez un résultat mesurable.",
      a2: "Concentrez-vous sur un seul sujet et un seul résultat par question."
    },
    b4: {
      q: "Comment interpréter la probabilité ?",
      a1: "~80 % = très probable (non garanti) ; ~50 % = équilibré ; ~20 % = peu probable mais possible.",
      a2: "Utilisez-la comme un élément parmi d’autres dans votre décision, aux côtés de vos connaissances, contraintes et tolérance au risque."
    },
    b5: {
      q: "Pourquoi j’obtiens parfois un résultat différent pour une question similaire ?",
      a1: "Des changements de formulation, un contexte ajouté, des circonstances mises à jour ou une définition plus précise peuvent faire évoluer l’estimation.",
      a2: "Pour des comparaisons cohérentes, gardez la même formulation et les mêmes échéances."
    },
    b6: {
      q: "Puis-je poser des questions sur d’autres personnes ?",
      a1: "<strong>Oui</strong>, mais respectez la vie privée et la loi : évitez les données personnelles (PII) et ne ciblez pas des personnes qui s’opposent publiquement à être un sujet.",
      a2: "Conservez ces résultats pour vous et ne partagez <strong>pas</strong> publiquement des prédictions concernant des tiers identifiables sans leur consentement explicite.",
      a3: "Forecastler ne remplace pas les conseils professionnels (médicaux, juridiques, financiers, etc.)."
    },
    b7: {
      q: "Collectez-vous mes données ? Utilisez-vous des cookies ?",
      a1: "<strong>Cookies :</strong> aucun cookie n’est actuellement déposé.",
      a2: "<strong>GA4 sans cookies :</strong> mesure basique de trafic/performance uniquement ; aucune donnée personnelle (PII) n’est envoyée ; Google Signals et les fonctionnalités publicitaires sont désactivés ; dans l’UE, les adresses IP ne sont ni journalisées ni stockées.",
      a3: "<strong>localStorage/sessionStorage :</strong> utilisés pour des préférences pratiques dans votre navigateur ; les données restent sur votre appareil. La suppression des données de navigation les réinitialise."
    },
    b8: {
      q: "Puis-je partager des résultats (captures d’écran ou texte copié) ?",
      a1: "Pour un usage privé et non commercial — oui.",
      a2: "Pour un partage public de prédictions concernant des tiers identifiables, il vous faut leur autorisation explicite. Sans consentement, ne <strong>publiez pas</strong> de telles prédictions ni captures."
    },
    b9: {
      q: "Puis-je partager la plateforme sur les réseaux sociaux et parler de ses performances ?",
      a1: "<strong>Oui.</strong> Vous pouvez partager le site et décrire les fonctionnalités, l’UX, la vitesse et les performances globales.",
      a2: "La publication de captures de l’interface et d’exemples génériques/démo est acceptable, tant que vous ne divulguez pas de données personnelles ni de prédictions concrètes sur des tiers identifiables sans consentement."
    },
    b10: {
      q: "Le service est-il gratuit ?",
      a1: "Oui, pour l’instant. Nous pourrions plus tard introduire des limites, des options premium ou de la publicité ; toute modification sera annoncée dans les Conditions d’utilisation et/ou via des avis sur le site."
    },
    cta: {
      title: "Vous avez encore des questions ?",
      text1: "Si quelque chose n’est pas clair ou si vous souhaitez proposer une amélioration, n’hésitez pas à nous contacter.",
      text2: 'Contactez-nous à <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> ou utilisez la page Contact. Veuillez éviter de partager des données personnelles (PII) dans votre message.'
    }
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  faq: {
    b1: {
      q: "Was ist Forecastler und wie funktioniert es?",
      a1: "Forecastler schätzt die Wahrscheinlichkeit zukünftiger Ereignisse. Es sagt nichts mit Sicherheit voraus.",
      a2: "Es analysiert Ihre Frage (Kontext, Schlüsseldetails, mögliche Ursache-Wirkung-Zusammenhänge) und gibt einen Prozentsatz als rationale, informationsbasierte Schätzung zurück."
    },
    b2: {
      q: "Ist das Wahrsagerei?",
      a1: "Nein. Forecastler verwendet keine Horoskope, Magie oder Kräfte. Es stützt sich auf KI, Logik, Statistik und Risikomodellierung, um Ergebnisse als Wahrscheinlichkeiten darzustellen."
    },
    b3: {
      q: "Wie stelle ich eine gute Frage, um eine bessere Antwort zu erhalten?",
      a1: "Formulieren Sie eine JA/NEIN-Frage, geben Sie einen klaren Zeitrahmen an (z. B. „bis 31. Dez. 2025“) und definieren Sie ein messbares Ergebnis.",
      a2: "Konzentrieren Sie sich pro Frage auf ein Subjekt und ein Ergebnis."
    },
    b4: {
      q: "Wie soll ich die Wahrscheinlichkeit interpretieren?",
      a1: "~80 % = sehr wahrscheinlich (nicht garantiert); ~50 % = ausgeglichen; ~20 % = unwahrscheinlich, aber möglich.",
      a2: "Nutzen Sie sie als einen Baustein Ihrer Entscheidung – neben Ihrem Wissen, Ihren Rahmenbedingungen und Ihrer Risikotoleranz."
    },
    b5: {
      q: "Warum erhalte ich manchmal ein anderes Ergebnis für eine ähnliche Frage?",
      a1: "Änderungen in der Formulierung, zusätzlicher Kontext, aktualisierte Umstände oder eine schärfere Definition können die Schätzung verschieben.",
      a2: "Für konsistente Vergleiche behalten Sie Formulierungen und Zeitrahmen bei."
    },
    b6: {
      q: "Darf ich Fragen über andere Personen stellen?",
      a1: "<strong>Ja</strong>, aber respektieren Sie Privatsphäre und Recht: vermeiden Sie personenbezogene Daten (PII) und zielen Sie nicht auf Personen ab, die sich öffentlich dagegen aussprechen, Subjekt zu sein.",
      a2: "Behalten Sie solche Ergebnisse für sich und teilen Sie <strong>keine</strong> Vorhersagen über identifizierbare Dritte öffentlich ohne deren ausdrückliche Zustimmung.",
      a3: "Forecastler ersetzt keine professionelle Beratung (medizinisch, juristisch, finanziell etc.)."
    },
    b7: {
      q: "Sammeln Sie meine Daten? Verwenden Sie Cookies?",
      a1: "<strong>Cookies:</strong> Derzeit werden keine Cookies gesetzt.",
      a2: "<strong>GA4 ohne Cookies:</strong> nur grundlegende Verkehrs-/Leistungsmessung; es werden keine PII übermittelt; Google Signals und Werbefunktionen sind deaktiviert; in der EU werden IP-Adressen weder protokolliert noch gespeichert.",
      a3: "<strong>localStorage/sessionStorage:</strong> für praktische Voreinstellungen in Ihrem Browser; Daten verbleiben auf Ihrem Gerät. Das Löschen der Browserdaten setzt sie zurück."
    },
    b8: {
      q: "Darf ich Ergebnisse teilen (Screenshots oder kopierter Text)?",
      a1: "Für private, nichtkommerzielle Nutzung — ja.",
      a2: "Für die öffentliche Weitergabe von Vorhersagen über identifizierbare Dritte benötigen Sie deren ausdrückliche Zustimmung. Ohne Einwilligung <strong>keine</strong> solchen Vorhersagen oder Screenshots veröffentlichen."
    },
    b9: {
      q: "Darf ich die Plattform in sozialen Medien teilen und über ihre Leistung sprechen?",
      a1: "<strong>Ja.</strong> Sie dürfen die Website teilen und Features, UX, Geschwindigkeit sowie die Gesamtleistung beschreiben.",
      a2: "Screenshots der Oberfläche und generische/Demo-Beispiele sind in Ordnung, solange Sie ohne Einwilligung keine personenbezogenen Daten oder konkreten Vorhersagen über identifizierbare Dritte offenlegen."
    },
    b10: {
      q: "Ist der Dienst kostenlos?",
      a1: "Ja, vorerst. Später könnten wir Limits, Premium-Optionen oder Werbung einführen; Änderungen geben wir in den Nutzungsbedingungen und/oder durch Hinweise auf der Website bekannt."
    },
    cta: {
      title: "Noch Fragen?",
      text1: "Wenn etwas unklar ist oder Sie eine Verbesserung vorschlagen möchten, melden Sie sich gern.",
      text2: 'Kontaktieren Sie uns unter <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> oder nutzen Sie die Kontaktseite. Bitte teilen Sie in Ihrer Nachricht keine personenbezogenen Daten (PII).'
    }
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  faq: {
    b1: {
      q: "O que é o Forecastler e como funciona?",
      a1: "O Forecastler estima a probabilidade de eventos futuros. Ele não prevê com certeza.",
      a2: "Analisa sua pergunta (contexto, detalhes-chave, possíveis relações de causa e efeito) e retorna uma porcentagem como estimativa racional baseada em informação."
    },
    b2: {
      q: "Isso é adivinhação?",
      a1: "Não. O Forecastler não usa horóscopos, magia ou poderes. Baseia-se em IA, lógica, estatística e modelagem de risco para expressar os resultados em probabilidades."
    },
    b3: {
      q: "Como faço uma boa pergunta para obter uma resposta melhor?",
      a1: "Escreva uma pergunta de SIM/NÃO, inclua um prazo claro (ex.: “até 31 dez 2025”) e defina um resultado mensurável.",
      a2: "Foque em um assunto e um resultado por pergunta."
    },
    b4: {
      q: "Como devo interpretar a probabilidade?",
      a1: "~80% = muito provável (não garantido); ~50% = equilibrado; ~20% = improvável, mas possível.",
      a2: "Use-a como mais um insumo na sua decisão, junto com seu conhecimento, restrições e tolerância ao risco."
    },
    b5: {
      q: "Por que às vezes recebo um resultado diferente para uma pergunta semelhante?",
      a1: "Mudanças na redação, contexto adicional, circunstâncias atualizadas ou uma definição mais precisa podem alterar a estimativa.",
      a2: "Para comparações consistentes, mantenha a mesma redação e os mesmos prazos."
    },
    b6: {
      q: "Posso fazer perguntas sobre outras pessoas?",
      a1: "<strong>Sim</strong>, mas respeite a privacidade e a lei: evite dados pessoais (PII) e não direcione pessoas que se oponham publicamente a ser objeto da consulta.",
      a2: "Guarde esses resultados para você e <strong>não</strong> compartilhe publicamente previsões sobre terceiros identificáveis sem consentimento explícito.",
      a3: "O Forecastler não substitui aconselhamento profissional (médico, jurídico, financeiro, etc.)."
    },
    b7: {
      q: "Vocês coletam meus dados? Usam cookies?",
      a1: "<strong>Cookies:</strong> nenhum cookie é definido no momento.",
      a2: "<strong>GA4 sem cookies:</strong> apenas medição básica de tráfego/desempenho; nenhum dado pessoal (PII) é enviado; Google Signals e recursos de publicidade desativados; na UE, os IPs não são registrados nem armazenados.",
      a3: "<strong>localStorage/sessionStorage:</strong> usados para preferências práticas no seu navegador; os dados ficam no seu dispositivo. Limpar os dados do navegador os redefine."
    },
    b8: {
      q: "Posso compartilhar resultados (capturas ou texto copiado)?",
      a1: "Para uso privado e não comercial — sim.",
      a2: "Para compartilhamento público de previsões sobre terceiros identificáveis, é necessário o consentimento explícito deles. Sem consentimento, <strong>não</strong> publique tais previsões ou capturas."
    },
    b9: {
      q: "Posso divulgar a plataforma nas redes sociais e falar sobre seu desempenho?",
      a1: "<strong>Sim.</strong> Você pode compartilhar o site e descrever recursos, UX, velocidade e desempenho geral.",
      a2: "É aceitável publicar capturas da interface e exemplos genéricos/de demonstração, desde que não revele dados pessoais nem previsões concretas sobre terceiros identificáveis sem consentimento."
    },
    b10: {
      q: "O serviço é gratuito?",
      a1: "Sim, por enquanto. Podemos introduzir limites, opções premium ou anúncios no futuro; quaisquer mudanças serão anunciadas nos Termos de Uso e/ou por avisos no site."
    },
    cta: {
      title: "Ainda tem dúvidas?",
      text1: "Se algo não estiver claro ou se quiser sugerir uma melhoria, fique à vontade para entrar em contato.",
      text2: 'Fale conosco em <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> ou use a página de Contato. Evite compartilhar dados pessoais (PII) na mensagem.'
    }
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  faq: {
    b1: {
      q: "Che cos’è Forecastler e come funziona?",
      a1: "Forecastler stima la probabilità di eventi futuri. Non predice con certezza.",
      a2: "Analizza la tua domanda (contesto, dettagli chiave, possibili legami causa-effetto) e restituisce una percentuale come stima razionale basata sulle informazioni."
    },
    b2: {
      q: "È divinazione?",
      a1: "No. Forecastler non usa oroscopi, magia o poteri. Si basa su IA, logica, statistica e modelli di rischio per esprimere gli esiti in termini di probabilità."
    },
    b3: {
      q: "Come posso porre una buona domanda per ottenere una risposta migliore?",
      a1: "Scrivi una domanda SÌ/NO, indica un orizzonte temporale chiaro (es.: «entro il 31 dic 2025») e definisci un risultato misurabile.",
      a2: "Concentrati su un solo soggetto e un solo esito per domanda."
    },
    b4: {
      q: "Come devo interpretare la probabilità?",
      a1: "~80% = molto probabile (non garantito); ~50% = in equilibrio; ~20% = poco probabile ma possibile.",
      a2: "Usala come uno dei fattori della tua decisione, insieme a conoscenze, vincoli e tolleranza al rischio."
    },
    b5: {
      q: "Perché a volte ottengo un risultato diverso per una domanda simile?",
      a1: "Modifiche nella formulazione, contesto aggiunto, circostanze aggiornate o una definizione più precisa possono spostare la stima.",
      a2: "Per confronti coerenti, mantieni uguali formulazioni e scadenze temporali."
    },
    b6: {
      q: "Posso fare domande su altre persone?",
      a1: "<strong>Sì</strong>, ma rispetta la privacy e la legge: evita i dati personali (PII) e non prendere di mira persone che si oppongono pubblicamente a essere oggetto della domanda.",
      a2: "Tieni per te tali risultati e <strong>non</strong> condividere pubblicamente previsioni su terzi identificabili senza il loro consenso esplicito.",
      a3: "Forecastler non sostituisce il parere professionale (medico, legale, finanziario, ecc.)."
    },
    b7: {
      q: "Raccogliete i miei dati? Usate cookie?",
      a1: "<strong>Cookie:</strong> al momento non vengono impostati cookie.",
      a2: "<strong>GA4 senza cookie:</strong> solo misurazione di base di traffico/prestazioni; nessun dato personale (PII) inviato; Google Signals e funzioni pubblicitarie disattivati; nell’UE, gli IP non vengono registrati né conservati.",
      a3: "<strong>localStorage/sessionStorage:</strong> usati per preferenze pratiche nel tuo browser; i dati restano sul tuo dispositivo. La cancellazione dei dati del browser li azzera."
    },
    b8: {
      q: "Posso condividere i risultati (screenshot o testo copiato)?",
      a1: "Per uso privato e non commerciale — sì.",
      a2: "Per la condivisione pubblica di previsioni su terzi identificabili è necessario il loro consenso esplicito. Senza consenso, <strong>non</strong> pubblicare tali previsioni o screenshot."
    },
    b9: {
      q: "Posso condividere la piattaforma sui social e parlare delle sue prestazioni?",
      a1: "<strong>Sì.</strong> Puoi condividere il sito e descrivere funzionalità, UX, velocità e prestazioni complessive.",
      a2: "Sono consentiti screenshot dell’interfaccia ed esempi generici/demo, purché non divulghi dati personali né previsioni concrete su terzi identificabili senza consenso."
    },
    b10: {
      q: "Il servizio è gratuito?",
      a1: "Sì, per ora. In futuro potremmo introdurre limiti, opzioni premium o annunci; eventuali modifiche saranno comunicate nei Termini d’uso e/o tramite avvisi sul sito."
    },
    cta: {
      title: "Hai ancora domande?",
      text1: "Se qualcosa non è chiaro o vuoi suggerire un miglioramento, contattaci senza esitazioni.",
      text2: 'Scrivici a <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> oppure usa la pagina Contatti. Evita di condividere dati personali (PII) nel messaggio.'
    }
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  faq: {
    b1: {
      q: "Czym jest Forecastler i jak działa?",
      a1: "Forecastler szacuje prawdopodobieństwo przyszłych zdarzeń. Nie przewiduje z absolutną pewnością.",
      a2: "Analizuje Twoje pytanie (kontekst, kluczowe szczegóły, możliwe związki przyczynowo-skutkowe) i zwraca procent jako racjonalną, opartą na informacjach estymację."
    },
    b2: {
      q: "Czy to jest wróżbiarstwo?",
      a1: "Nie. Forecastler nie używa horoskopów, magii ani „mocy”. Opiera się na SI, logice, statystyce i modelowaniu ryzyka, aby ujmować wyniki w prawdopodobieństwach."
    },
    b3: {
      q: "Jak zadać dobre pytanie, aby dostać lepszą odpowiedź?",
      a1: "Napisz pytanie TAK/NIE, podaj wyraźny horyzont czasowy (np. „do 31 gru 2025”) i zdefiniuj mierzalny wynik.",
      a2: "Skup się na jednym podmiocie i jednym wyniku na pytanie."
    },
    b4: {
      q: "Jak interpretować prawdopodobieństwo?",
      a1: "~80% = bardzo prawdopodobne (bez gwarancji); ~50% = po równo; ~20% = mało prawdopodobne, ale możliwe.",
      a2: "Traktuj je jako jeden z elementów decyzji – obok własnej wiedzy, ograniczeń i tolerancji ryzyka."
    },
    b5: {
      q: "Dlaczego czasem dostaję inny wynik dla podobnego pytania?",
      a1: "Zmiana sformułowania, dodany kontekst, zaktualizowane okoliczności lub precyzyjniejsza definicja mogą przesunąć oszacowanie.",
      a2: "Dla spójnych porównań zachowuj te same sformułowania i ramy czasowe."
    },
    b6: {
      q: "Czy mogę zadawać pytania o innych ludzi?",
      a1: "<strong>Tak</strong>, ale szanuj prywatność i prawo: unikaj danych osobowych (PII) i nie kieruj pytań do osób, które publicznie sprzeciwiają się byciu „podmiotem”.",
      a2: "Zachowaj takie wyniki dla siebie i <strong>nie</strong> udostępniaj publicznie prognoz o identyfikowalnych osobach trzecich bez ich wyraźnej zgody.",
      a3: "Forecastler nie zastępuje profesjonalnej porady (medycznej, prawnej, finansowej itd.)."
    },
    b7: {
      q: "Czy zbieracie moje dane? Czy używacie cookies?",
      a1: "<strong>Cookies:</strong> obecnie nie są ustawiane żadne pliki cookie.",
      a2: "<strong>GA4 bez cookies:</strong> wyłącznie podstawowy pomiar ruchu/wydajności; żadne dane osobowe (PII) nie są wysyłane; Google Signals i funkcje reklamowe są wyłączone; w UE adresy IP nie są rejestrowane ani przechowywane.",
      a3: "<strong>localStorage/sessionStorage:</strong> używane do praktycznych preferencji w przeglądarce; dane pozostają na Twoim urządzeniu. Wyczyścienie danych przeglądarki je resetuje."
    },
    b8: {
      q: "Czy mogę udostępniać wyniki (zrzuty ekranu lub skopiowany tekst)?",
      a1: "Do prywatnego, niekomercyjnego użytku — tak.",
      a2: "Publiczne udostępnianie prognoz dotyczących identyfikowalnych osób trzecich wymaga ich wyraźnej zgody. Bez zgody <strong>nie</strong> publikuj takich prognoz ani zrzutów."
    },
    b9: {
      q: "Czy mogę udostępniać platformę w mediach społecznościowych i mówić o jej działaniu?",
      a1: "<strong>Tak.</strong> Możesz udostępniać serwis i opisywać funkcje, UX, szybkość i ogólną wydajność.",
      a2: "Dozwolone są zrzuty interfejsu oraz ogólne/przykładowe materiały demo, o ile bez zgody nie ujawniasz danych osobowych ani konkretnych prognoz o identyfikowalnych osobach trzecich."
    },
    b10: {
      q: "Czy usługa jest bezpłatna?",
      a1: "Tak, na razie. W przyszłości możemy wprowadzić limity, opcje premium lub reklamy; wszelkie zmiany zostaną ogłoszone w Warunkach korzystania i/lub poprzez komunikaty na stronie."
    },
    cta: {
      title: "Masz jeszcze pytania?",
      text1: "Jeśli coś jest niejasne lub chcesz zasugerować usprawnienie, śmiało skontaktuj się z nami.",
      text2: 'Napisz do nas na <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> lub użyj strony Kontakt. Prosimy, nie podawaj danych osobowych (PII) w wiadomości.'
    }
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  faq: {
    b1: {
      q: "Що таке Forecastler і як він працює?",
      a1: "Forecastler оцінює ймовірність майбутніх подій. Він не прогнозує з абсолютною певністю.",
      a2: "Він аналізує ваше запитання (контекст, ключові деталі, можливі причинно-наслідкові зв’язки) і повертає відсоток як раціональну, інформаційно обґрунтовану оцінку."
    },
    b2: {
      q: "Чи це ворожіння?",
      a1: "Ні. Forecastler не використовує гороскопи, магію чи надприродні «сили». Він спирається на ШІ, логіку, статистику та моделювання ризиків, щоб подати результати у вигляді ймовірностей."
    },
    b3: {
      q: "Як поставити хороше запитання, щоб отримати кращу відповідь?",
      a1: "Сформулюйте запитання ТАК/НІ, додайте чіткі часові рамки (наприклад, «до 31 груд. 2025»), і визначте вимірюваний результат.",
      a2: "Зосереджуйтесь на одному суб’єкті та одному результаті на запитання."
    },
    b4: {
      q: "Як інтерпретувати ймовірність?",
      a1: "~80% = дуже ймовірно (не гарантія); ~50% = приблизно порівну; ~20% = малоймовірно, але можливо.",
      a2: "Використовуйте її як один із чинників для рішення разом із власними знаннями, обмеженнями та толерантністю до ризику."
    },
    b5: {
      q: "Чому іноді отримую інший результат для подібного запитання?",
      a1: "Зміни формулювання, додатковий контекст, оновлені обставини або чіткіше визначення можуть змінити оцінку.",
      a2: "Для коректного порівняння зберігайте однакові формулювання та часові рамки."
    },
    b6: {
      q: "Чи можна ставити запитання про інших людей?",
      a1: "<strong>Так</strong>, але поважайте приватність і закон: уникайте персональних даних (PII) і не націлюйтеся на осіб, які публічно заперечують проти того, щоб бути суб’єктом.",
      a2: "Зберігайте такі результати для себе і <strong>не</strong> поширюйте публічно прогнози щодо ідентифікованих третіх осіб без їхньої явної згоди.",
      a3: "Forecastler не є заміною професійних порад (медичних, юридичних, фінансових тощо)."
    },
    b7: {
      q: "Чи збираєте ви мої дані? Чи використовуєте cookie?",
      a1: "<strong>Cookies:</strong> наразі жодні cookie не встановлюються.",
      a2: "<strong>GA4 без cookie:</strong> лише базове вимірювання трафіку/продуктивності; жодних персональних даних (PII) не надсилається; Google Signals та рекламні функції вимкнено; в ЄС IP-адреси не журналюються і не зберігаються.",
      a3: "<strong>localStorage/sessionStorage:</strong> використовуються для практичних налаштувань у вашому браузері; дані залишаються на вашому пристрої. Очищення даних браузера скидає їх."
    },
    b8: {
      q: "Чи можу я ділитися результатами (скриншотами або скопійованим текстом)?",
      a1: "Для приватного, некомерційного використання — так.",
      a2: "Для публічного поширення прогнозів щодо ідентифікованих третіх осіб потрібна їхня явна згода. Без згоди <strong>не</strong> публікуйте такі прогнози чи скриншоти."
    },
    b9: {
      q: "Чи можна ділитися платформою в соцмережах і обговорювати її продуктивність?",
      a1: "<strong>Так.</strong> Ви можете ділитися сайтом і описувати функції, UX, швидкість та загальну роботу.",
      a2: "Допустимо публікувати скриншоти інтерфейсу та узагальнені/демо приклади, якщо без згоди не розкриваєте персональні дані чи конкретні прогнози про ідентифікованих третіх осіб."
    },
    b10: {
      q: "Чи безкоштовний сервіс?",
      a1: "Так, наразі. Згодом ми можемо запровадити ліміти, преміум-опції або рекламу; про будь-які зміни повідомимо в Умовах користування та/або через повідомлення на сайті."
    },
    cta: {
      title: "Залишилися запитання?",
      text1: "Якщо щось незрозуміло або хочете запропонувати покращення, звертайтеся.",
      text2: 'Напишіть нам на <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> або скористайтеся сторінкою «Контакти». Будь ласка, не надсилайте персональні дані (PII) у повідомленні.'
    }
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  faq: {
    b1: {
      q: "Что такое Forecastler и как он работает?",
      a1: "Forecastler оценивает вероятность будущих событий. Он не даёт абсолютно точных предсказаний.",
      a2: "Он анализирует ваш вопрос (контекст, ключевые детали, возможные причинно-следственные связи) и возвращает процент как рациональную, основанную на информации оценку."
    },
    b2: {
      q: "Это гадание?",
      a1: "Нет. Forecastler не использует гороскопы, магию или «сверхспособности». Он опирается на ИИ, логику, статистику и моделирование рисков, выражая исходы в вероятностях."
    },
    b3: {
      q: "Как задать хороший вопрос, чтобы получить лучший ответ?",
      a1: "Сформулируйте вопрос ДА/НЕТ, укажите чёткий срок (например, «до 31 дек. 2025») и определите измеримый результат.",
      a2: "Сосредоточьтесь на одном субъекте и одном исходе на вопрос."
    },
    b4: {
      q: "Как интерпретировать вероятность?",
      a1: "~80% = весьма вероятно (не гарантируется); ~50% = примерно поровну; ~20% = маловероятно, но возможно.",
      a2: "Рассматривайте её как один из факторов при принятии решения — вместе с вашими знаниями, ограничениями и отношением к риску."
    },
    b5: {
      q: "Почему иногда я получаю другой результат для похожего вопроса?",
      a1: "Изменения формулировки, добавленный контекст, обновлённые обстоятельства или более точное определение могут сместить оценку.",
      a2: "Для сопоставимости сохраняйте одинаковые формулировки и сроки."
    },
    b6: {
      q: "Можно ли задавать вопросы о других людях?",
      a1: "<strong>Да</strong>, но уважайте частную жизнь и закон: избегайте персональных данных (PII) и не нацельтесь на людей, которые публично возражают против того, чтобы быть объектом прогноза.",
      a2: "Оставляйте такие результаты при себе и <strong>не</strong> публикуйте прогнозы об идентифицируемых третьих лицах без их явного согласия.",
      a3: "Forecastler не заменяет профессиональные консультации (медицинские, юридические, финансовые и т. п.)."
    },
    b7: {
      q: "Вы собираете мои данные? Используете ли cookie?",
      a1: "<strong>Cookies:</strong> сейчас cookie не устанавливаются.",
      a2: "<strong>GA4 без cookie:</strong> только базовые метрики трафика/производительности; персональные данные (PII) не передаются; Google Signals и рекламные функции отключены; в ЕС IP-адреса не логируются и не хранятся.",
      a3: "<strong>localStorage/sessionStorage:</strong> используются для практических настроек в вашем браузере; данные остаются на вашем устройстве. Очистка данных браузера их сбрасывает."
    },
    b8: {
      q: "Можно ли делиться результатами (скриншотами или скопированным текстом)?",
      a1: "Для личного некоммерческого использования — да.",
      a2: "Для публичного распространения прогнозов об идентифицируемых третьих лицах требуется их явное разрешение. Без согласия <strong>не</strong> публикуйте такие прогнозы или скриншоты."
    },
    b9: {
      q: "Можно ли делиться платформой в соцсетях и обсуждать её производительность?",
      a1: "<strong>Да.</strong> Можно делиться сайтом и описывать функции, UX, скорость и общую производительность.",
      a2: "Допустима публикация скриншотов интерфейса и общих/демонстрационных примеров, если без согласия не раскрываются персональные данные или конкретные прогнозы об идентифицируемых третьих лицах."
    },
    b10: {
      q: "Сервис бесплатный?",
      a1: "Да, пока что. Позже мы можем ввести ограничения, премиум-опции или рекламу; о любых изменениях сообщим в Условиях использования и/или через уведомления на сайте."
    },
    cta: {
      title: "Остались вопросы?",
      text1: "Если что-то непонятно или хотите предложить улучшение, смело пишите нам.",
      text2: 'Свяжитесь с нами по адресу <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> или через страницу «Контакты». Пожалуйста, не указывайте персональные данные (PII) в сообщении.'
    }
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  faq: {
    b1: {
      q: "Forecastler nedir ve nasıl çalışır?",
      a1: "Forecastler, gelecekteki olayların olasılığını tahmin eder. Kesinlik iddiasında bulunmaz.",
      a2: "Sorunuzu (bağlam, kritik ayrıntılar, olası neden-sonuç ilişkileri) analiz eder ve bilgiye dayalı rasyonel bir tahmin olarak yüzde değer döndürür."
    },
    b2: {
      q: "Bu falcılık mı?",
      a1: "Hayır. Forecastler burçlar, büyü veya güçler kullanmaz. Sonuçları olasılıklar olarak ifade etmek için YZ, mantık, istatistik ve risk modellemesine dayanır."
    },
    b3: {
      q: "Daha iyi bir cevap almak için iyi bir soru nasıl sorulur?",
      a1: "EVET/HAYIR sorusu yazın, net bir zaman aralığı ekleyin (örn. “31 Ara 2025’e kadar”) ve ölçülebilir bir sonuç tanımlayın.",
      a2: "Her soruda tek bir özneye ve tek bir sonuca odaklanın."
    },
    b4: {
      q: "Olasılığı nasıl yorumlamalıyım?",
      a1: "~%80 = çok olası (garanti değil); ~%50 = başa baş; ~%20 = düşük olasılık ama mümkün.",
      a2: "Bunu, bilginiz, kısıtlarınız ve risk toleransınızla birlikte kararınıza temel oluşturan girdilerden biri olarak kullanın."
    },
    b5: {
      q: "Benzer bir soru için neden bazen farklı sonuç alıyorum?",
      a1: "İfade değişiklikleri, ek bağlam, güncellenen koşullar veya daha net bir tanım tahmini kaydırabilir.",
      a2: "Tutarlı karşılaştırmalar için ifade ve zaman aralığını aynı tutun."
    },
    b6: {
      q: "Başkaları hakkında soru sorabilir miyim?",
      a1: "<strong>Evet</strong>, ancak mahremiyete ve hukuka saygı gösterin: kişisel verilerden (PII) kaçının ve kendileri hakkında özne olunmasına kamuya açık biçimde itiraz eden kişileri hedeflemeyin.",
      a2: "Bu tür çıktıları kendinize saklayın ve açık, net onayları olmadan tanımlanabilir üçüncü kişiler hakkında tahminleri kamuya <strong>paylaşmayın</strong>.",
      a3: "Forecastler, profesyonel danışmanlığın (tıbbi, hukuki, finansal vb.) yerine geçmez."
    },
    b7: {
      q: "Verilerimi topluyor musunuz? Çerez kullanıyor musunuz?",
      a1: "<strong>Çerezler:</strong> şu anda hiçbir çerez ayarlanmıyor.",
      a2: "<strong>Çerezsiz GA4:</strong> yalnızca temel trafik/performans ölçümü; PII gönderilmez; Google Signals ve reklam özellikleri kapalıdır; AB’de IP’ler kaydedilmez/depolanmaz.",
      a3: "<strong>localStorage/sessionStorage:</strong> tarayıcınızdaki pratik tercihleri için kullanılır; veriler cihazınızda kalır. Tarayıcı verilerini temizlemek bunları sıfırlar."
    },
    b8: {
      q: "Sonuçları (ekran görüntüsü veya kopyalanmış metin) paylaşabilir miyim?",
      a1: "Özel, ticari olmayan kullanım için — evet.",
      a2: "Tanımlanabilir üçüncü kişilerle ilgili tahminleri kamuya açık biçimde paylaşmak için açık izin gerekir. Onay yoksa bu tür tahminleri veya ekran görüntülerini <strong>paylaşmayın</strong>."
    },
    b9: {
      q: "Platformu sosyal medyada paylaşabilir ve performansından bahsedebilir miyim?",
      a1: "<strong>Evet.</strong> Siteyi paylaşabilir; özellikleri, UX’i, hızı ve genel performansı anlatabilirsiniz.",
      a2: "Arayüz ekran görüntüleri ve genel/demo örnekler paylaşılabilir; ancak izin olmadan kişisel verileri veya tanımlanabilir üçüncü kişiler hakkında somut tahminleri ifşa etmeyin."
    },
    b10: {
      q: "Hizmet ücretsiz mi?",
      a1: "Şimdilik evet. İleride limitler, premium seçenekler veya reklamlar ekleyebiliriz; değişiklikler, Kullanım Şartları’nda ve/veya sitedeki bildirimlerle duyurulacaktır."
    },
    cta: {
      title: "Hâlâ sorunuz var mı?",
      text1: "Bir şey net değilse ya da iyileştirme önermek istiyorsanız, bizimle iletişime geçmekten çekinmeyin.",
      text2: 'Bize <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> adresinden ulaşın veya İletişim sayfasını kullanın. Lütfen mesajınızda kişisel verileri (PII) paylaşmayın.'
    }
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  faq: {
    b1: {
      q: "ما هو Forecastler وكيف يعمل؟",
      a1: "يقدّر Forecastler احتمال وقوع الأحداث المستقبلية. لا يقدّم تنبؤًا يقينيًا.",
      a2: "يحلّل سؤالك (السياق، التفاصيل الأساسية، الروابط المحتملة بين السبب والنتيجة) ويُرجع نسبة مئوية كتقدير عقلاني قائم على المعلومات."
    },
    b2: {
      q: "هل هذه عِرافة؟",
      a1: "لا. لا يستخدم Forecastler الأبراج أو السحر أو القوى. يعتمد على الذكاء الاصطناعي والمنطق والإحصاء ونمذجة المخاطر لتأطير النتائج في صورة احتمالات."
    },
    b3: {
      q: "كيف أطرح سؤالًا جيدًا للحصول على إجابة أفضل؟",
      a1: "اكتب سؤالًا بنمط نعم/لا، وأضف إطارًا زمنيًا واضحًا (مثل: «بحلول 31 ديسمبر 2025»)، وحدِّد نتيجة قابلة للقياس.",
      a2: "ركّز على موضوع واحد ونتيجة واحدة لكل سؤال."
    },
    b4: {
      q: "كيف أفسّر الاحتمال؟",
      a1: "~80% = مرجّح جدًا (غير مضمون)؛ ~50% = متوازن؛ ~20% = غير محتمل لكنه ممكن.",
      a2: "استخدمه كمدخل واحد ضمن قرارك، إلى جانب معرفتك وقيودك وتحمّلِك للمخاطر."
    },
    b5: {
      q: "لماذا أحصل أحيانًا على نتيجة مختلفة لسؤال مشابه؟",
      a1: "تغيّر الصياغة أو إضافة سياق أو تحديث الظروف أو تعريف أوضح يمكن أن يغيّر التقدير.",
      a2: "للمقارنات المتسقة، حافظ على نفس الصياغة والأُطُر الزمنية."
    },
    b6: {
      q: "هل يجوز أن أسأل عن أشخاص آخرين؟",
      a1: "<strong>نعم</strong>، ولكن احترم الخصوصية والقانون: تجنّب البيانات الشخصية (PII) ولا تستهدف أشخاصًا يرفضون علنًا أن يكونوا موضوعًا للسؤال.",
      a2: "احتفظ بهذه المخرجات لنفسك ولا <strong>تشارك</strong> علنًا تنبؤات حول أطراف ثالثة مُعرَّفة دون موافقتهم الصريحة.",
      a3: "Forecastler ليس بديلاً عن المشورة المهنية (الطبية أو القانونية أو المالية، إلخ)."
    },
    b7: {
      q: "هل تجمعون بياناتي؟ وهل تستخدمون الكوكيز؟",
      a1: "<strong>الكوكيز:</strong> لا يتم تعيين أي كوكيز حاليًا.",
      a2: "<strong>GA4 بدون كوكيز:</strong> قياس أساسي لحركة الزيارات/الأداء فقط؛ لا تُرسل أي بيانات شخصية (PII)؛ Google Signals وميزات الإعلانات معطّلة؛ داخل الاتحاد الأوروبي لا تُسجَّل/تُخزَّن عناوين IP.",
      a3: "<strong>localStorage/sessionStorage:</strong> تُستخدم لتفضيلات عملية في متصفحك؛ تبقى البيانات على جهازك. مسح بيانات المتصفح يعيد ضبطها."
    },
    b8: {
      q: "هل يجوز أن أشارك النتائج (لقطات شاشة أو نصًا منسوخًا)؟",
      a1: "للاستخدام الخاص وغير التجاري — نعم.",
      a2: "للمشاركة العلنية لتنبؤات عن أطراف ثالثة مُعرَّفة تحتاج إلى إذنهم الصريح. دون موافقة، <strong>لا</strong> تنشر مثل هذه التنبؤات أو اللقطات."
    },
    b9: {
      q: "هل يمكنني مشاركة المنصّة على شبكات التواصل والتحدث عن أدائها؟",
      a1: "<strong>نعم.</strong> يمكنك مشاركة الموقع ووصف الميزات وتجربة الاستخدام والسرعة والأداء العام.",
      a2: "لا بأس بنشر لقطات للواجهة وأمثلة عامة/تجريبية، ما دمت لا تكشف بيانات شخصية أو تنبؤات محددة عن أطراف ثالثة مُعرَّفة من دون موافقة."
    },
    b10: {
      q: "هل الخدمة مجانية؟",
      a1: "نعم، في الوقت الحالي. قد نُدخل لاحقًا حدودًا أو خيارات مدفوعة (Premium) أو إعلانات؛ سيتم الإعلان عن أي تغييرات في شروط الاستخدام و/أو عبر إشعارات على الموقع."
    },
    cta: {
      title: "لا تزال لديك أسئلة؟",
      text1: "إذا كان هناك ما هو غير واضح أو كنت ترغب في اقتراح تحسين، فلا تتردد في التواصل معنا.",
      text2: 'راسلنا على <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> أو استخدم صفحة الاتصال. يُرجى تجنّب مشاركة البيانات الشخصية (PII) في رسالتك.'
    }
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  faq: {
    b1: {
      q: "Forecastler क्या है और यह कैसे काम करता है?",
      a1: "Forecastler भविष्य की घटनाओं की प्रायिकता का अनुमान लगाता है। यह निश्चितता के साथ भविष्यवाणी नहीं करता.",
      a2: "यह आपके प्रश्न का विश्लेषण करता है (संदर्भ, प्रमुख विवरण, संभावित कारण-परिणाम संबंध) और सूचना-आधारित तर्कसंगत अनुमान के रूप में प्रतिशत लौटाता है."
    },
    b2: {
      q: "क्या यह ज्योतिष/भविष्यवाणी है?",
      a1: "नहीं। Forecastler राशिफल, जादू या शक्तियों का उपयोग नहीं करता। यह AI, तर्क, सांख्यिकी और जोखिम मॉडलिंग पर निर्भर करता है ताकि परिणामों को संभावनाओं के रूप में प्रस्तुत किया जा सके."
    },
    b3: {
      q: "बेहतर उत्तर पाने के लिए अच्छा प्रश्न कैसे पूछें?",
      a1: "एक हाँ/नहीं वाला प्रश्न लिखें, स्पष्ट समय-सीमा शामिल करें (जैसे, “31 दिसंबर 2025 तक”), और एक मापने योग्य परिणाम परिभाषित करें.",
      a2: "हर प्रश्न में एक ही विषय और एक ही परिणाम पर ध्यान दें."
    },
    b4: {
      q: "मुझे प्रायिकता (probability) को कैसे समझना चाहिए?",
      a1: "~80% = बहुत संभव (गारंटी नहीं); ~50% = बराबर स्थिति; ~20% = असंभावित पर संभव.",
      a2: "इसे अपने निर्णय के एक इनपुट की तरह लें—अपने ज्ञान, सीमाओं और जोखिम सहनशीलता के साथ."
    },
    b5: {
      q: "कभी-कभी समान प्रश्न के लिए अलग परिणाम क्यों मिलता है?",
      a1: "शब्दों में बदलाव, जोड़ा गया संदर्भ, अद्यतन परिस्थितियाँ या अधिक सटीक परिभाषा अनुमान को बदल सकती हैं.",
      a2: "संगत तुलना के लिए, शब्दावली और समय-सीमा समान रखें."
    },
    b6: {
      q: "क्या मैं दूसरों के बारे में सवाल पूछ सकता/सकती हूँ?",
      a1: "<strong>हाँ</strong>, लेकिन गोपनीयता और क़ानून का सम्मान करें: व्यक्तिगत डेटा (PII) से बचें और उन लोगों को टार्गेट न करें जो सार्वजनिक रूप से विषय बनने पर आपत्ति करते हैं.",
      a2: "ऐसे आउटपुट अपने तक रखें और उनकी स्पष्ट सहमति के बिना पहचान योग्य तीसरे पक्ष के बारे में भविष्यवाणियाँ सार्वजनिक रूप से <strong>साझा न करें</strong>.",
      a3: "Forecastler किसी पेशेवर सलाह (मेडिकल, लीगल, फाइनेंशियल, आदि) का विकल्प नहीं है."
    },
    b7: {
      q: "क्या आप मेरा डेटा एकत्र करते हैं? क्या आप कुकीज़ इस्तेमाल करते हैं?",
      a1: "<strong>कुकीज़:</strong> वर्तमान में कोई कुकी सेट नहीं होती.",
      a2: "<strong>कुकी-रहित GA4:</strong> केवल बुनियादी ट्रैफ़िक/परफ़ॉर्मेंस मापन; कोई PII नहीं भेजी जाती; Google Signals और विज्ञापन फ़ीचर बंद; EU में IP लॉग/स्टोर नहीं होते.",
      a3: "<strong>localStorage/sessionStorage:</strong> आपके ब्राउज़र में व्यावहारिक प्राथमिकताओं के लिए उपयोग; डेटा आपके डिवाइस पर रहता है। ब्राउज़र डेटा साफ़ करने से ये रीसेट हो जाते हैं."
    },
    b8: {
      q: "क्या मैं परिणाम (स्क्रीनशॉट या कॉपी किया टेक्स्ट) साझा कर सकता/सकती हूँ?",
      a1: "निजी, गैर-व्यावसायिक उपयोग के लिए — हाँ.",
      a2: "पहचान योग्य तीसरे पक्ष की भविष्यवाणियाँ सार्वजनिक रूप से साझा करने के लिए उनकी स्पष्ट अनुमति चाहिए। बिना सहमति, ऐसी भविष्यवाणियाँ या स्क्रीनशॉट <strong>पोस्ट न करें</strong>."
    },
    b9: {
      q: "क्या मैं प्लेटफ़ॉर्म को सोशल मीडिया पर साझा कर सकता/सकती हूँ और उसके प्रदर्शन पर बात कर सकता/सकती हूँ?",
      a1: "<strong>हाँ.</strong> आप साइट साझा कर सकते हैं और फ़ीचर्स, UX, गति और समग्र प्रदर्शन का वर्णन कर सकते हैं.",
      a2: "इंटरफ़ेस के स्क्रीनशॉट और सामान्य/डेमो उदाहरण साझा करना ठीक है, बशर्ते आप बिना सहमति व्यक्तिगत डेटा या पहचान योग्य तीसरे पक्ष के बारे में ठोस भविष्यवाणियाँ उजागर न करें."
    },
    b10: {
      q: "क्या सेवा मुफ़्त है?",
      a1: "हाँ, फिलहाल। आगे चलकर हम सीमाएँ, प्रीमियम विकल्प या विज्ञापन ला सकते हैं; कोई भी बदलाव उपयोग की शर्तों में और/या साइट पर नोटिस के माध्यम से घोषित किया जाएगा."
    },
    cta: {
      title: "क्या अभी भी सवाल हैं?",
      text1: "यदि कुछ स्पष्ट नहीं है या आप सुधार सुझाना चाहते हैं, तो बेझिझक हमसे संपर्क करें.",
      text2: 'हमसे <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> पर या Contact पेज से संपर्क करें। कृपया अपने संदेश में व्यक्तिगत डेटा (PII) साझा करने से बचें.'
    }
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  faq: {
    b1: {
      q: "Forecastler 是什么？如何运作？",
      a1: "Forecastler 估计未来事件发生的概率。并不保证准确预测。",
      a2: "它会分析你的问题（上下文、关键信息、可能的因果关系），并以百分比形式给出基于信息的理性估计。"
    },
    b2: {
      q: "这是算命吗？",
      a1: "不是。Forecastler 不使用星座/魔法/能力。它依靠人工智能、逻辑、统计与风险建模，将结果表述为概率。"
    },
    b3: {
      q: "如何提出一个好问题以获得更好的答案？",
      a1: "写成一个“是/否”问题，包含明确的时间范围（例如：“在 2025 年 12 月 31 日之前”），并定义可度量的结果。",
      a2: "每个问题聚焦于一个主体和一个结果。"
    },
    b4: {
      q: "我该如何解读这个概率？",
      a1: "~80% = 很可能（并非保证）；~50% = 一半对一半；~20% = 不太可能但可能发生。",
      a2: "把它作为决策中的一个输入，与自身知识、限制条件和风险承受度一起衡量。"
    },
    b5: {
      q: "为何有时对类似问题会得到不同结果？",
      a1: "措辞变化、补充的背景、情势更新，或更明确的定义，都会改变估计值。",
      a2: "为保证可比性，请保持措辞与时间范围一致。"
    },
    b6: {
      q: "我可以就他人提出问题吗？",
      a1: "<strong>可以</strong>，但请尊重隐私与法律：避免个人数据（PII），且不要针对公开反对成为预测对象的人。",
      a2: "此类输出请自行保留；未经当事人明确同意，<strong>不得</strong>公开分享关于可识别第三方的预测。",
      a3: "Forecastler 不能替代专业建议（医疗、法律、财务等）。"
    },
    b7: {
      q: "你们会收集我的数据吗？会使用 Cookie 吗？",
      a1: "<strong>Cookie：</strong> 目前未设置任何 Cookie。",
      a2: "<strong>无 Cookie 的 GA4：</strong> 仅用于基础流量/性能衡量；不发送个人数据（PII）；Google Signals 与广告功能关闭；在欧盟不记录/存储 IP。",
      a3: "<strong>localStorage/sessionStorage：</strong> 用于浏览器中的实用偏好；数据保留在你的设备上。清除浏览器数据会将其重置。"
    },
    b8: {
      q: "我可以分享结果（截图或复制的文本）吗？",
      a1: "用于私人、非商业用途——可以。",
      a2: "若要公开分享关于可识别第三方的预测，需要对方明确同意。未经同意，请<strong>不要</strong>发布此类预测或截图。"
    },
    b9: {
      q: "我可以在社交媒体上分享该平台并谈谈其性能吗？",
      a1: "<strong>可以。</strong> 你可以分享网站，介绍功能、体验、速度和整体性能。",
      a2: "可以发布界面截图和通用/演示示例，但不得在未经同意的情况下披露个人数据或对可识别第三方的具体预测。"
    },
    b10: {
      q: "服务是免费的吗？",
      a1: "目前是的。未来我们可能引入额度限制、付费高级选项或广告；任何变更都会在《使用条款》及/或站内通知中公布。"
    },
    cta: {
      title: "还有问题吗？",
      text1: "如果有不清楚的地方或想提出改进建议，欢迎联系我们。",
      text2: '请通过 <a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> 与我们联系，或使用“联系”页面。请不要在消息中分享个人数据（PII）。'
    }
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  faq: {
    b1: {
      q: "Forecastler とは？どのように動作しますか？",
      a1: "Forecastler は将来の出来事の起こる確率を推定します。確実な予言ではありません。",
      a2: "質問（文脈、重要な要素、想定される因果関係）を分析し、情報に基づく合理的な推定としてパーセンテージを返します。"
    },
    b2: {
      q: "これは占いですか？",
      a1: "いいえ。Forecastler は星占い・魔法・超能力を使いません。AI・論理・統計・リスクモデリングに基づき、結果を確率として表現します。"
    },
    b3: {
      q: "より良い答えを得るために良い質問はどう書けばよいですか？",
      a1: "はい/いいえ で答えられる質問にし、明確な期間を含めてください（例：「2025年12月31日までに」）。さらに、測定可能なアウトカムを定義します。",
      a2: "1つの質問につき対象は1つ、アウトカムも1つに絞りましょう。"
    },
    b4: {
      q: "確率はどう解釈すればよいですか？",
      a1: "~80%＝高い確率（保証ではない）、~50%＝五分五分、~20%＝低いが可能性あり。",
      a2: "ご自身の知識・制約・リスク許容度とあわせて、意思決定の材料の一つとして用いてください。"
    },
    b5: {
      q: "似た質問でも結果が違うのはなぜ？",
      a1: "表現の違い、文脈の追加、状況の更新、定義の明確化などで推定が変わり得ます。",
      a2: "一貫した比較のため、表現と期間は同じに保ちましょう."
    },
    b6: {
      q: "他人について質問してもよいですか？",
      a1: "<strong>はい</strong>。ただしプライバシーと法令を尊重してください。個人データ（PII）は避け、対象となることに公に異議を唱えている人を狙わないでください。",
      a2: "そのような出力は自分用に留め、本人の明確な同意なく、特定可能な第三者に関する予測を公に<strong>共有しないでください</strong>。",
      a3: "Forecastler は専門的な助言（医療・法務・財務など）の代替ではありません。"
    },
    b7: {
      q: "データは収集しますか？クッキーは使いますか？",
      a1: "<strong>クッキー:</strong> 現在は一切設定していません。",
      a2: "<strong>クッキーなしの GA4:</strong> 基本的なトラフィック/パフォーマンス測定のみ。個人データ（PII）は送信しません。Google Signals と広告機能は無効。EU では IP を記録・保存しません。",
      a3: "<strong>localStorage/sessionStorage:</strong> ブラウザー内の実用的な設定に使用します。データは端末内に留まります。ブラウザーのデータを消去するとリセットされます。"
    },
    b8: {
      q: "結果（スクリーンショットやコピーしたテキスト）を共有できますか？",
      a1: "私的かつ非営利の用途であれば—可能です。",
      a2: "特定可能な第三者に関する予測を公開で共有する場合は、当人の明示的な許可が必要です。同意がない場合、そのような予測やスクリーンショットを<strong>投稿しないでください</strong>。"
    },
    b9: {
      q: "プラットフォームをSNSで共有し、性能について言及してもよいですか？",
      a1: "<strong>はい。</strong> サイトを共有し、機能・UX・速度・総合的なパフォーマンスを説明できます。",
      a2: "インターフェイスのスクリーンショットや汎用/デモの例の掲載は問題ありません。ただし、同意なく個人データや特定可能な第三者に対する具体的な予測を公開しないでください。"
    },
    b10: {
      q: "サービスは無料ですか？",
      a1: "現時点では無料です。将来的に上限、プレミアムオプション、広告を導入する可能性があります。変更がある場合は、利用規約および/またはサイト上のお知らせで告知します。"
    },
    cta: {
      title: "まだ質問がありますか？",
      text1: "不明点がある、または改善案をお寄せいただける場合は、お気軽にご連絡ください。",
      text2: '<a href="mailto:forecastlerteam@gmail.com">forecastlerteam@gmail.com</a> までご連絡いただくか、問い合わせページをご利用ください。メッセージには個人データ（PII）を記載しないでください。'
      }
    }
  }
};

// Helperi: pokušaj bez sufiksa, pa sa "-en"
function byId(id){ return document.getElementById(id) || document.getElementById(id + "-en"); }
function setTxtAny(id, txt){ const el = byId(id); if (el && typeof txt === "string") el.textContent = txt; }
function setHTMLAny(id, html){ const el = byId(id); if (el && typeof html === "string") el.innerHTML = html; }

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

  // Blok 1
  setTxtAny ("faq-q-1",   t.faq.b1.q);
  setTxtAny ("faq-a-1-1", t.faq.b1.a1);
  setTxtAny ("faq-a-1-2", t.faq.b1.a2);

  // Blok 2
  setTxtAny ("faq-q-2",   t.faq.b2.q);
  setTxtAny ("faq-a-2-1", t.faq.b2.a1);

  // Blok 3
  setTxtAny ("faq-q-3",   t.faq.b3.q);
  setTxtAny ("faq-a-3-1", t.faq.b3.a1);
  setTxtAny ("faq-a-3-2", t.faq.b3.a2);

  // Blok 4
  setTxtAny ("faq-q-4",   t.faq.b4.q);
  setTxtAny ("faq-a-4-1", t.faq.b4.a1);
  setTxtAny ("faq-a-4-2", t.faq.b4.a2);

  // Blok 5
  setTxtAny ("faq-q-5",   t.faq.b5.q);
  setTxtAny ("faq-a-5-1", t.faq.b5.a1);
  setTxtAny ("faq-a-5-2", t.faq.b5.a2);

  // Blok 6 (ima <strong>)
  setTxtAny   ("faq-q-6",   t.faq.b6.q);
  setHTMLAny  ("faq-a-6-1", t.faq.b6.a1);
  setHTMLAny  ("faq-a-6-2", t.faq.b6.a2);
  setTxtAny   ("faq-a-6-3", t.faq.b6.a3);

  // Blok 7 (ima <strong>)
  setTxtAny   ("faq-q-7",   t.faq.b7.q);
  setHTMLAny  ("faq-a-7-1", t.faq.b7.a1);
  setHTMLAny  ("faq-a-7-2", t.faq.b7.a2);
  setHTMLAny  ("faq-a-7-3", t.faq.b7.a3);

  // Blok 8 (drugi paragraf ima <strong>)
  setTxtAny   ("faq-q-8",   t.faq.b8.q);
  setTxtAny   ("faq-a-8-1", t.faq.b8.a1);
  setHTMLAny  ("faq-a-8-2", t.faq.b8.a2);

  // Blok 9 (prvi paragraf ima <strong>)
  setTxtAny   ("faq-q-9",   t.faq.b9.q);
  setHTMLAny  ("faq-a-9-1", t.faq.b9.a1);
  setTxtAny   ("faq-a-9-2", t.faq.b9.a2);

  // Blok 10
  setTxtAny ("faq-q-10",   t.faq.b10.q);
  setTxtAny ("faq-a-10-1", t.faq.b10.a1);

  // CTA blok (drugi ima link -> innerHTML)
  setTxtAny  ("faq-cta-title",   t.faq.cta.title);
  setTxtAny  ("faq-cta-text-1",  t.faq.cta.text1);
  setHTMLAny ("faq-cta-text-2",  t.faq.cta.text2);

  // Footer
  if (t.footerLinks){
    setTxtAny("link-disclaimer", t.footerLinks.disclaimer);
    setTxtAny("link-terms",      t.footerLinks.terms);
    setTxtAny("link-privacy",    t.footerLinks.privacy);
    setTxtAny("link-cookies",    t.footerLinks.cookies);
    setTxtAny("link-sitemap",    t.footerLinks.sitemap);
    setTxtAny("link-faq",        t.footerLinks.faq);
  }

  // RTL samo za arapski
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

// Inicijalizacija
document.addEventListener("DOMContentLoaded", () => {
  const saved  = localStorage.getItem('forecastlerLang');
  const browser = (navigator.language || 'en').slice(0,2);
  const initial = saved || (browser === 'sr' ? 'sr' : 'en');
  setLanguage(initial);
});

// Izloži funkcije + T() helper (poziva ga inline skripta u faq.html)
window.setLanguage = setLanguage;
window.T = function(){ return translations[trenutniJezik] || translations.en; };

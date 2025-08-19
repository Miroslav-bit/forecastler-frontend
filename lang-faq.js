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

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
      forecast: "Datum prognoze: 15. avgust 2025.",
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

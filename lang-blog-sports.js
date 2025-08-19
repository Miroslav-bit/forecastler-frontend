// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Sports Events and Results" },
    cta: {	
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The 2026 FIFA World Cup will be held in the United States, Canada, and Mexico. The United States last reached the quarterfinals in 2002; Mexico (as host) in 1986; Canada has never reached the quarterfinals.",
      qLabel: "Question for AI:",
      qText: "At the 2026 World Cup, will one of the host nations reach the quarterfinals?",
      aLabel: "AI answer:",
      aText: "YES. Probability 70%"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Jannik Sinner won Wimbledon 2024, the 2025 US Open, and the 2025 Australian Open. Carlos Alcaraz won Roland-Garros 2025.",
      qLabel: "Question for AI:",
      qText: "Will Jannik Sinner and Carlos Alcaraz play the 2025 Wimbledon final against each other?",
      aLabel: "AI answer:",
      aText: "YES. Probability 90%",
      valid: "AI forecast came true",
      source: "Confirmation source"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The United States has won the most medals at the Summer Olympics (over 3,000). At the previous Olympics, the U.S. also topped the medal table with 126 medals, including 40 golds. China likewise claimed 40 gold medals at the previous Games.",
      qLabel: "Question for AI:",
      qText: "At the 2028 Olympics, will China win more than 40 gold medals?",
      aLabel: "AI answer:",
      aText: "NO. Probability 40%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za sportske događaje i rezultate" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 15. avgust 2025.",
      lead: "Svetsko prvenstvo u fudbalu 2026. održaće se u Sjedinjenim Američkim Državama, Kanadi i Meksiku. SAD su poslednji put bile u četvrtfinalu 2002, Meksiko — kao domaćin — 1986, a Kanada nikada nije stigla do četvrtfinala.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će jedna od zemalja domaćina na Svetskom prvenstvu u fudbalu 2026. ući u četvrtfinale?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 70%"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Jannik Siner osvojio je Vimbldon 2024, US Open 2025. i Australian Open 2025. Carlos Alcaraz osvojio je Rolan Garos 2025.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će Jannik Siner i Carlos Alcaraz igrati u finalu Vimbldona 2025. godine?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 90%",
      valid: "Prognoza AI se obistinila",
      source: "Izvor potvrde"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Najviše osvojenih medalja na letnjim olimpijskim igrama imaju Sjedinjene Američke Države (preko 3.000 medalja). Na prethodnim olimpijskim igrama takođe su osvojile najviše medalja (126), od čega 40 zlatnih. Kina je na prethodnim igrama takođe osvojila 40 zlatnih medalja.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će na Olimpijskim igrama 2028. godine Kina osvojiti više od 40 zlatnih medalja?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 40%"
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

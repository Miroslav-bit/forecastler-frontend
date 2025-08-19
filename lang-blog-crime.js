// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for the Economy and Industry" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Bitcoin first exceeded 100,000 U.S. dollars in December 2024. On June 15, 2025, its price stood at 105,595 dollars.",
      qLabel: "Question for AI:",
      qText: "Will Bitcoin surpass 120,000 dollars by the end of the year?",
      aLabel: "AI answer:",
      aText: "YES. Probability 95%",
      valid: "AI forecast came true",
      source: "Confirmation source"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The poorest countries are largely in Sub-Saharan Africa. In 2021, 2.4 million children died from the consequences of malnutrition. In 2023, 281 million people faced hunger, and in 2024 a record 295 million.",
      qLabel: "Question for AI:",
      qText: "During 2025, will the number of people facing hunger worldwide exceed 300 million?",
      aLabel: "AI answer:",
      aText: "YES. Probability 65%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "In recent years, individual wealth creation has been driven mainly by financial investments and IT technologies. The number of U.S.-dollar billionaires totaled 2,640 in 2023 and 2,781 in 2024.",
      qLabel: "Question for AI:",
      qText: "In 2025, will there be more than 3,000 billionaires worldwide?",
      aLabel: "AI answer:",
      aText: "YES. Probability 99%",
      valid: "AI forecast came true",
      source: "Confirmation source"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za ekonomiju i privredu" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 15. avgust 2025.",
      lead: "Vrednost bitkoina prvi put je prešla 100.000 američkih dolara u decembru 2024. Dana 15.06.2025. vrednost bitkoina iznosila je 105.595 dolara.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do kraja godine vrednost bitkoina premašiti 120.000 dolara?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 95%",
      valid: "Prognoza AI se obistinila",
      source: "Izvor potvrde"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Najsiromašnije zemlje sveta uglavnom se nalaze u podsaharskoj Africi. Tokom 2021. godine od posledica neuhranjenosti umrlo je 2,4 miliona dece. Tokom 2023. godine 281 milion ljudi suočio se sa glađu, a 2024. godine rekordnih 295 miliona.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će tokom 2025. godine broj ljudi suočenih sa glađu u svetu premašiti 300 miliona?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 65%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Poslednjih godina pojedinci se najviše bogate kroz finansijska ulaganja i IT tehnologije. Broj milijardera (u američkim dolarima) iznosio je 2.640 u 2023, odnosno 2.781 u 2024. godini.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će 2025. godine u svetu biti više od 3.000 milijardera?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 99%",
      valid: "Prognoza AI se obistinila",
      source: "Izvor potvrde"
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
  togglePair("planet-2-forecast-date", lang);

  // Sekcija 3
  setTxtAny("planet-3-forecast-date", t.s3.forecast);
  setTxtAny("planet-3-lead",          t.s3.lead);
  setTxtAny("planet-3-q-label",       t.s3.qLabel);
  setTxtAny("planet-3-q-text",        t.s3.qText);
  setTxtAny("planet-3-a-label",       t.s3.aLabel);
  setTxtAny("planet-3-a-text",        t.s3.aText);
  setTxtAny("planet-3-valid",         t.s3.valid);
  setTxtAny("planet-3-source",        t.s3.source);
  togglePair("planet-3-forecast-date", lang);
  togglePair("planet-3-source",        lang);


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

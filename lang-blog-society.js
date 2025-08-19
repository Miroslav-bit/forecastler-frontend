// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Population, Social Relations, and Religion" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events.",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The Earth’s population reached 5 billion in 1987 and rose to 8 billion by 2022. The fastest growth is occurring in Eastern Africa and in South and Southeast Asia.",
      qLabel: "Question for AI:",
      qText: "Will the global population exceed 9 billion by 2030?",
      aLabel: "AI answer:",
      aText: "NO. Probability 5%"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The largest inflows of migrants to Europe come from Africa and Southwest Asia. In 2023, about 4.3 million migrants settled in Europe, and by 2024 migrants accounted for roughly 9.9% of the continent’s total population. Political crises and armed conflicts in parts of the world are driving migration to Europe.",
      qLabel: "Question for AI:",
      qText: "During 2025, will more than 1 million new migrants from Asia and Africa arrive in Europe?",
      aLabel: "AI answer:",
      aText: "YES. Probability 85%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "There are approximately 2.2 billion Christians, 2 billion Muslims, and 1.2 billion Hindus worldwide; other religions make up the remaining share of the population. Islam is the fastest-growing religion, as are certain movements within Christianity and other religious groups.",
      qLabel: "Question for AI:",
      qText: "By 2050, will a new religion emerge that attracts more than one billion followers?",
      aLabel: "AI answer:",
      aText: "NO. Probability 1%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za stanovništvo, društvene odnose i religiju" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja.",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 15. avgust 2025.",
      lead: "Broj stanovnika na Zemlji 1987. godine dostigao je 5 milijardi, a do 2022. porastao je na 8 milijardi. Najveći rast beleže istočna Afrika te južna i jugoistočna Azija.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će broj stanovnika premašiti 9 milijardi do 2030. godine?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 5%"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Najveći priliv migranata u Evropu dolazi iz Afrike i jugozapadne Azije. Tokom 2023. godine u Evropu se doselilo oko 4,3 miliona migranata, a do 2024. migranti su činili oko 9,9% ukupnog stanovništva evropskog kontinenta. Političke krize i ratni sukobi u pojedinim delovima sveta podstiču priliv migranata u Evropu.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će tokom 2025. godine u Evropu pristizati više od 1 miliona novih migranata iz Azije i Afrike?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 85%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "U svetu ima približno 2,2 milijarde hrišćana, 2 milijarde muslimana i 1,2 milijarde hindusa, dok ostale religije čine preostali deo stanovništva. Najbrže rastu islam, kao i pojedini pokreti unutar hrišćanstva i drugih verskih zajednica.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će se do 2050. godine pojaviti nova religija koja će pridobiti više od milijardu pristalica?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 1%"
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

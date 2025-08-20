// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Planet Earth" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 18.06.2025.",
      lead: "By June 2025, five earthquakes of magnitude above 7 on the Richter scale had been recorded worldwide, the strongest of which struck Myanmar on March 28. The last earthquake exceeding magnitude 8 on the Richter scale occurred on August 12, 2021, in the South Sandwich Islands.",
      qLabel: "Question for AI:",
      qText: "Will planet Earth be hit by an earthquake exceeding magnitude 8 on the Richter scale during 2025?",
      aLabel: "AI answer:",
      aText: "YES. Probability 65%",
      valid: "Forecast came true",
      source: "Confirmation source"
    },
    s2: {
      forecast: "Forecast date: 18.06.2025.",
      lead: "Asteroids pose a potential threat to planet Earth. The last significant impact event occurred on February 15, 2013, when, after entering Earth’s atmosphere, a celestial body exploded over the Russian city of Chelyabinsk, damaging about 7,000 buildings and injuring roughly 1,500 people.",
      qLabel: "Question for AI:",
      qText: "By 2030, will an asteroid strike Earth, causing casualties and material damage?",
      aLabel: "AI answer:",
      aText: "NO. Probability 5%"
    },
    s3: {
      forecast: "Forecast date: 18.06.2025.",
      lead: "Human influence has contributed to the warming of the atmosphere, oceans, and land, with consequences that include increasingly frequent extreme heat. The year 2024 was recorded as the warmest on record, about 1.55 degrees Celsius above the pre-industrial average.",
      qLabel: "Question for AI:",
      qText: "Will 2025 be the warmest year on record?",
      aLabel: "AI answer:",
      aText: "NO. Probability 25%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za planetu Zemlju" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Do juna 2025. godine zabeleženo je pet zemljotresa magnitude iznad 7 po Rihteru širom sveta, od kojih je najjači pogodio Mjanmar 28. marta. Poslednji zemljotres jači od magnitude 8 dogodio se 12. avgusta 2021. na Južnosandvičkim ostrvima.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će planetu Zemlju tokom 2025. godine pogoditi zemljotres jači od 8 po Rihteru?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 65%",
      valid: "Prognoza se obistinila",
      source: "Izvor potvrde"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Asteroidi predstavljaju potencijalnu pretnju planeti Zemlji. Poslednji značajan događaj zabeležen je 15. februara 2013, kada je nebesko telo eksplodiralo iznad ruskog grada Čeljabinska oštetivši oko 7.000 objekata i povredivši približno 1.500 ljudi.",
      qLabel: "Pitanje za AI:",
      qText: "Hoće li do 2030. godine asteroid pogoditi Zemlju i prouzrokovati žrtve i materijalnu štetu?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 5%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Ljudski uticaj doprineo je zagrevanju atmosfere, okeana i kopna, sa posledicama koje uključuju sve češće ekstremne vrućine. Godina 2024. zabeležena je kao najtoplija do sada, za oko 1,55 °C iznad predindustrijskog proseka.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će 2025. godina biti najtoplija godina do sada?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 25%"
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

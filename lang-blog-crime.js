// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Crime, Tragic Events, and Crime Reports" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "In the first half of 2025, terrorist attacks were recorded in several European cities, with around ten fatalities in total. Following Israel’s strikes on Iranian nuclear sites and U.S. support for those actions, the risk has increased of new attacks by lone actors and of pro-Iranian cyber activities in the near term.",
      qLabel: "Question for AI:",
      qText: "In July 2025, will terrorist attacks in European and U.S. cities result in more than 10 casualties?,
      aLabel: "AI answer:",
      aText: "NO. Probability 40%",
      valid: "AI forecast came true",
      source: "Confirmation source"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "In 2025, drug trafficking intensified, especially cocaine smuggling from the Andes toward Northern Europe. In the first half of 2025, more than 16 tons of cocaine were seized in Europe.",
      qLabel: "Question for AI:",
      qText: "By the end of 2025, will at least one cocaine shipment weighing more than one metric ton be seized?",
      aLabel: "AI answer:",
      aText: "YES. Probability 75%",
      valid: "AI forecast came true",
      source: "Confirmation source"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The most recent fatal attack on a senior political official occurred in Colombia on June 7, 2025. Last year, attempted assassinations of Donald Trump and Slovak Prime Minister Robert Fico were recorded.",
      qLabel: "Question for AI:",
      qText: "By the end of 2025, will an assassination with a fatal outcome target a president or prime minister of any country?",
      aLabel: "AI answer:",
      aText: "NO. Probability 5%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za kriminalitet, tragične događaje i crnu hroniku" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 15. avgust 2025.",
      lead: "Tokom prve polovine 2025. godine zabeleženi su teroristički napadi u više evropskih gradova, sa ukupno oko deset žrtava. Nakon izraelskih napada na iranske nuklearne lokacije i američke podrške tim akcijama, povećala se pretnja od novih napada usamljenih napadača i proiranskih sajber-aktivnosti u skorijem periodu.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će tokom jula 2025. godine u evropskim i američkim gradovima biti izvedeni teroristički napadi čiji će broj žrtava premašiti 10?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 40%",
      valid: "Prognoza AI se obistinila",
      source: "Izvor potvrde"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Tokom 2025. godine intenzivirala se trgovina opojnim sredstvima, naročito kokainom, švercom iz područja Anda ka severnoj Evropi. Tokom prve polovine 2025. u Evropi je zaplenjeno preko 16 tona kokaina.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do kraja 2025. godine uslediti zaplena makar jednog tovara kokaina teškog preko jedne tone?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 75%",
      valid: "Prognoza AI se obistinila",
      source: "Izvor potvrde"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Poslednji napad na visokog političkog zvaničnika sa smrtnim ishodom dogodio se u Kolumbiji 7. juna 2025. Prošle godine zabeleženi su pokušaji ubistva Donalda Trampa i slovačkog premijera Roberta Fica.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će se do kraja 2025. godine dogoditi atentat sa smrtnim ishodom na predsednika ili premijera bilo koje države?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 5%"
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

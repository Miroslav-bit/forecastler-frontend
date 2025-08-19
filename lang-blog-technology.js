// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Technological Progress and Achievements" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The rapid acceleration of AI began in 2017 with deep-learning architectures for language models. Since 2022, generative systems have gone mainstream. Some observers fear AI could quickly and uncontrollably take over the operation of systems and harm humanity.",
      qLabel: "Question for AI:",
      qText: "By 2030, will artificial intelligence take control of all electronic systems worldwide?",
      aLabel: "AI answer:",
      aText: "NO. Probability 2%"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Flying cars have been under experimental development since the last century. In recent years, their small-batch production and use have intensified, particularly for military and tourism purposes.",
      qLabel: "Question for AI:",
      qText: "By 2030, will flying cars be available for mass civilian use in public transportation?",
      aLabel: "AI answer:",
      aText: "YES. Probability 85%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "By 2030, will a metaverse platform emerge that brings more than one billion users into its virtual world?",
      qLabel: "Question for AI:",
      qText: "By 2030, will a metaverse platform emerge that brings more than one billion users into its virtual world?",
      aLabel: "AI answer:",
      aText: "YES. Probability 85%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za tehnološki napredak i dostignuća" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 15. avgust 2025.",
      lead: "Ubrzani razvoj veštačke inteligencije započinje 2017. uvođenjem arhitektura dubokog učenja za jezičke modele. Od 2022. generativni sistemi ulaze u mejnstrim. Pojedini strahuju da bi veštačka inteligencija mogla brzo i nekontrolisano da preuzme upravljanje sistemima i time nanese štetu čovečanstvu.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će veštačka inteligencija do 2030. godine preuzeti upravljanje nad svim elektronskim sistemima u svetu?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 2%"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Leteći automobili eksperimentalno se razvijaju još od prošlog veka. Poslednjih godina intenzivira se njihova maloserijska proizvodnja i upotreba u vojne i turističke svrhe.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do 2030. godine leteći automobili biti dostupni za masovnu civilnu upotrebu u javnom saobraćaju?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 85%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Metaverzum, kao skup povezanih uranjajućih 3D prostora u kojima korisnici mogu virtuelno da borave, rade, uče i zabavljaju se, svoje korene ima u devedesetim godinama prošlog veka. Koristi se preko potrošačkih platformi i kroz virtuelne prezentacije sistema, postrojenja i sl.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će se do 2030. godine pojaviti metaverzum platforma koja će u svoj virtuelni svet uključiti više od milijardu korisnika?",
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

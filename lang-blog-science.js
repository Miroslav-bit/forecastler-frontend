// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Humanity’s Scientific Development" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Despite many attempts, there is still no proof of extraterrestrial life, nor confirmed evidence of alien entities or craft, regardless of numerous personal accounts. Research and space missions continue in the search for new discoveries.",
      qLabel: "Question for AI:",
      qText: "By 2030, will scientists find indisputable evidence of extraterrestrial life?",
      aLabel: "AI answer:",
      aText: "NO. Probability 15%"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The first mammal was cloned in 1997, and the first pets in 2001. Today, animal cloning is used in agriculture, for preserving endangered species, and for commercial services upon clients’ request. Numerous ethical and legal norms oppose cloning and prevent the use of such techniques in human reproduction.",
      qLabel: "Question for AI:",
      qText: "By 2030, will the first human be cloned?",
      aLabel: "AI answer:",
      aText: "NO. Probability 5%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The last crewed Moon landing was in 1972. No human crew has yet reached other planets. The first spacecraft visited Mars in 1974 (Mariner 4), and projects are currently under development (e.g., SpaceX) aiming for the first crewed missions to the Moon and Mars, followed by potential colonization and permanent settlement.",
      qLabel: "Question for AI:",
      qText: "By 2050, will humans settle on Mars?",
      aLabel: "AI answer:",
      aText: "NO. Probability 10%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za naučni razvoj čovečanstva" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 15. avgust 2025.",
      lead: "Uprkos brojnim pokušajima, do sada nema dokaza o postojanju vanzemaljskog života, niti potvrde prisustva vanzemaljskih entiteta i njihovih letelica, bez obzira na brojna svedočenja. I dalje traju istraživanja i svemirske misije u potrazi za novim saznanjima.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će naučnici do 2030. godine pronaći neoborive dokaze o postojanju vanzemaljskog života?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 15%"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Prvi sisar kloniran je 1997. godine, a prvi kućni ljubimci 2001. Danas se kloniranje životinja koristi u poljoprivredi, za očuvanje ugroženih vrsta i za komercijalnu upotrebu na zahtev klijenata. Postoje brojne etičke i pravne norme koje se suprotstavljaju kloniranju i onemogućavaju primenu takvih tehnika u reprodukciji ljudi.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do 2030. godine biti klonirano prvo ljudsko biće?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 5%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Poslednje sletanje na Mesec s ljudskom posadom bilo je 1972. godine. Nijedna ljudska posada do sada nije pristupila drugim planetama. Prva letelica je posetila Mars 1974. godine (Mariner 4), a trenutno su u razvoju projekti (npr. SpaceX) čiji je cilj prva misija s ljudskom posadom na Mesec i Mars, a zatim i potencijalna kolonizacija i trajno naseljavanje.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će se do 2050. godine ljudi naseliti na Marsu?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 10%"
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

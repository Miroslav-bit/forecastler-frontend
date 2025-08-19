// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Human Life and Health." },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events.",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "COVID-19 emerged in late 2019 in Wuhan, China; the causative agent is the SARS-CoV-2 coronavirus. The pandemic lasted from January 30, 2020, to May 5, 2023. By 2025, more than 7 million confirmed deaths had been recorded. The virus continues to circulate with occasional waves and new variants and subvariants.",
      qLabel: "Question for AI:",
      qText: "Will a new COVID-19 pandemic be declared by the end of 2025?",
      aLabel: "AI answer:",
      aText: "NO. Probability 5%"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "One quarter of the world’s population lacks safely managed access to drinking water. Climate change and the melting of glaciers (“water towers”) could threaten the drinking-water supply for about 2 billion people. In addition, pollution and other human activities contribute to shrinking supplies of potable water.",
      qLabel: "Question for AI:",
      qText: "By 2050, will half of the world’s population be left without access to drinking water?",
      aLabel: "AI answer:",
      aText: "NO. Probability 10%"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "Air pollution is one of the greatest health risks to humanity, responsible for around 9 million deaths globally each year. The most polluted regions include Sub-Saharan Africa and South and Southeast Asia. Industrial impacts and deforestation contribute to a reduction of oxygen in the atmosphere.",
      qLabel: "Question for AI:",
      qText: "By 2050, will there be an oxygen shortage in Earth’s atmosphere?",
      aLabel: "AI answer:",
      aText: "NO. Probability 1%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: "Prognoze veštačke inteligencije za život i zdravlje čovečanstva." },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja.",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 15. avgust 2025.",
      lead: "COVID-19 pojavio se krajem 2019. godine u Vuhanu (Kina), a uzročnik je koronavirus SARS-CoV-2. Pandemija je trajala od 30.01.2020. do 05.05.2023. Do 2025. godine zabeleženo je više od 7 miliona potvrđenih smrtnih slučajeva. Virus i dalje cirkuliše uz povremene talase i nove varijante i podvarijante.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do kraja 2025. godine biti proglašena nova pandemija COVID-19?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 5%"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Četvrtina svetske populacije nema bezbedno obezbeđen pristup pijaćoj vodi. Klimatske promene i topljenje glečera („vodnih tornjeva“) mogu ugroziti snabdevanje pitkom vodom za oko 2 milijarde ljudi. Pored toga, zagađenje i druge ljudske aktivnosti doprinose smanjenju raspoložive pijaće vode.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do 2050. godine polovina svetskog stanovništva ostati bez pristupa pijaćoj vodi?",
      aLabel: "Odgovor AI:",
      aText: "NE. Verovatnoća 10%"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Zagađenje vazduha jedan je od najvećih zdravstvenih rizika za čovečanstvo i dovodi do oko 9 miliona smrtnih slučajeva godišnje u svetu. Najzagađenija područja nalaze se u podsaharskoj Africi te južnoj i jugoistočnoj Aziji. Industrijski uticaji i seča šuma doprinose smanjenju kiseonika u atmosferi.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do 2050. godine doći do nestašice kiseonika u Zemljinoj atmosferi?",
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

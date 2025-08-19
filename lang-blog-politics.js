// lang-blog-planet.js (robustan za blog-planet.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    page: { title: "Artificial Intelligence Forecasts for Geopolitics and International Relations" },
    cta: {
      p1: "You can also ask the AI about your future or the future of other people, objects, places, and events",
      here: "HERE"
    },
    s1: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "U.S.–Russia relations have been marked by crisis in recent years, especially after the Russia–Ukraine conflict; after February 2023, political contacts between Russia and the United States were reduced to a minimum. Following the election of Donald Trump as U.S. president, attempts were renewed to deepen political ties with Russia in order to address the Ukraine crisis.",
      qLabel: "Question for AI:",
      qText: "In 2025, will the presidents of the United States and Russia hold a meeting?",
      aLabel: "AI answer:",
      aText: "YES. Probability 85%",
      valid: "AI forecast came true",
      source: "Confirmation source"
    },
    s2: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "After Hamas’s attack on Israel on October 7, 2023, Israel launched an offensive in Gaza that has so far claimed more than 60,000 lives. The conflict has heightened tensions across the region and led to clashes between Israel and Hezbollah, the Houthis, and Iran, with Israel conducting military operations in Lebanon, Syria, Iraq, Iran, and Yemen.",
      qLabel: "Question for AI:",
      qText: "In the second half of 2025, will Israel carry out another attack on a foreign country?",
      aLabel: "AI answer:",
      aText: "YES. Probability 80%",
      valid: "AI forecast came true",
      source: "Confirmation source"
    },
    s3: {
      forecast: "Forecast date: 17.06.2025.",
      lead: "The last confirmed explosive nuclear test was conducted in September 2017 in North Korea. Some states have carried out tests without a chain reaction. North Korea has repeatedly signaled readiness for a seventh nuclear test.",
      qLabel: "Question for AI:",
      qText: "By the end of 2025, will any country conduct an explosive test of a nuclear bomb?",
      aLabel: "AI answer:",
      aText: "NO. Probability 25%"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    page: { title: " Prognoze veštačke inteligencije za geopolitiku i međunarodne odnose" },
    cta: {
      p1: "Možete pitati AI i o svojoj budućnosti ili o budućnosti drugih ljudi, predmeta, mesta i događaja",
      here: "OVDE"
    },
    s1: {
      forecast: "Datum prognoze: 15. avgust 2025.",
      lead: "Rusko-američke odnose poslednjih godina obeležila je kriza, naročito posle rusko-ukrajinskog sukoba, a nakon februara 2023. politički kontakti Rusije i Sjedinjenih Američkih Država svedeni su na minimum. Nakon izbora Donalda Trampa za predsednika SAD, obnovljeni su pokušaji produbljivanja političkih odnosa sa Rusijom radi rešavanja ukrajinske krize.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će tokom 2025. godine doći do susreta predsednika SAD i Rusije?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 85%",
      valid: "Prognoza AI se obistinila",
      source: "Izvor potvrde"
    },
    s2: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Nakon napada Hamasa na Izrael 7. oktobra 2023, usledila je izraelska ofanziva u Gazi koja je do sada odnela preko 60.000 života. Taj sukob izazvao je tenzije u čitavom regionu i sukobe Izraela sa Hezbolahom, Hutima i Iranom, usled čega je Izrael sprovodio vojne akcije na području Libana, Sirije, Iraka, Irana i Jemena.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će u drugoj polovini 2025. godine Izrael sprovesti novi napad na neku drugu zemlju?",
      aLabel: "Odgovor AI:",
      aText: "DA. Verovatnoća 80%",
      valid: "Prognoza AI se obistinila",
      source: "Izvor potvrde"
    },
    s3: {
      forecast: "Datum prognoze: 17.06.2025.",
      lead: "Poslednji potvrđeni eksplozivni nuklearni test izveden je u septembru 2017. u Severnoj Koreji. Pojedine države izvodile su testove bez lančane reakcije. Severna Koreja više puta signalizira spremnost za sedmi nuklearni test.",
      qLabel: "Pitanje za AI:",
      qText: "Da li će do kraja 2025. godine u bilo kojoj državi biti obavljeno eksplozivno testiranje nuklearne bombe?",
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

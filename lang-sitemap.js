// lang-sitemap.js (robustan za sitemap.html; radi i ako kasnije dodaš -en sufikse)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },

    ui: {
      pageTitle: "Sitemap",
      tagline: "Find any public page on Forecastler. Use the search box to filter links.",
      quickSearch: "Quick search",
      placeholder: "Type to filter… (e.g. privacy, faq, blog)",
      lastUpdated: "Last updated:",
      exportXml: "Export XML",
      exportXmlAria: "Export XML sitemap",
      counts: "Listed pages:",
      groups: { main: "Main Pages", legal: "Legal", blog: "Blog" }
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },

    ui: {
      pageTitle: "Mapa sajta",
      tagline: "Pronađite bilo koju javnu stranicu na Forecastler-u. Koristite polje za pretragu da filtrirate linkove.",
      quickSearch: "Brza pretraga",
      placeholder: "Kucajte za filtriranje… (npr. privacy, faq, blog)",
      lastUpdated: "Poslednje ažuriranje:",
      exportXml: "Izvezi XML",
      exportXmlAria: "Izvezi XML mapu sajta",
      counts: "Prikazane stranice:",
      groups: { main: "Glavne stranice", legal: "Pravna dokumenta", blog: "Blog" }
    }
  }
};

// Helperi: pokušaj bez sufiksa, pa sa "-en"
function byId(id){ return document.getElementById(id) || document.getElementById(id + "-en"); }
function setTxtAny(id, txt){ const el = byId(id); if (el && typeof txt === "string") el.textContent = txt; }
function setHTMLAny(id, html){ const el = byId(id); if (el && typeof html === "string") el.innerHTML = html; }
function setAttrAny(id, attr, val){ const el = byId(id); if (el && attr) el.setAttribute(attr, val); }

// Pomoćne funkcije za specifične delove stranice
function updateTagline(t){
  // prvi .main-section > p.sitemap-muted (uvodni pasus)
  const p = document.querySelector(".main-section p.sitemap-muted");
  if (p) p.textContent = t.ui.tagline;
}
function updateQuickSearch(t){
  const lbl = document.querySelector('label[for="sitemap-search"]');
  if (lbl) lbl.textContent = t.ui.quickSearch;
  const input = byId("sitemap-search");
  if (input){
    input.placeholder = t.ui.placeholder;
    input.setAttribute("aria-label", t.ui.quickSearch);
  }
  // Counts (zadrži broj, promeni prefiks)
  const c = byId("counts");
  if (c){
    const m = c.textContent.match(/\d+/);
    c.textContent = t.ui.counts + (m ? " " + m[0] : "");
  }
}
function updateLastUpdated(t){
  const pill = byId("last-updated");
  if (!pill) return;
  // Izvuci datum iz postojeće vrednosti (npr. "Last updated: 2025-08-14")
  const m = pill.textContent.match(/(\d{4}-\d{2}-\d{2})/);
  const date = m ? m[1] : "—";
  pill.textContent = t.ui.lastUpdated + " " + date;
}
function updateExportXml(t){
  const btn = byId("export-xml");
  if (btn){
    btn.textContent = t.ui.exportXml;
    btn.setAttribute("aria-label", t.ui.exportXmlAria);
  }
}
function updateGroupTitles(t){
  // Naslovi sekcija koje renderuje inline skript (Main Pages / Legal / Blog)
  // ograniči na blokove unutar #sitemap-blocks
  document.querySelectorAll("#sitemap-blocks .main-section h2").forEach(h=>{
    const txt = (h.textContent || "").trim();
    if (txt === "Main Pages") h.textContent = t.ui.groups.main;
    else if (txt === "Legal") h.textContent = t.ui.groups.legal;
    else if (txt === "Blog") h.textContent = t.ui.groups.blog;
  });
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

  // META/UI
  setTxtAny("sitemap-title", t.ui.pageTitle);
  updateTagline(t);
  updateQuickSearch(t);
  updateLastUpdated(t);
  updateExportXml(t);
  updateGroupTitles(t);

  // Footer
  if (t.footerLinks){
    setTxtAny("link-disclaimer", t.footerLinks.disclaimer);
    setTxtAny("link-terms",      t.footerLinks.terms);
    setTxtAny("link-privacy",    t.footerLinks.privacy);
    setTxtAny("link-cookies",    t.footerLinks.cookies);
    setTxtAny("link-sitemap",    t.footerLinks.sitemap);
    setTxtAny("link-faq",        t.footerLinks.faq);
  }

  // RTL samo za arapski
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

// Inicijalizacija (bez dupliranja logike u inline skripti)
document.addEventListener("DOMContentLoaded", () => {
  const saved   = localStorage.getItem('forecastlerLang');
  const browser = (navigator.language || 'en').slice(0,2);
  const initial = saved || (browser === 'sr' ? 'sr' : 'en');
  setLanguage(initial);
});

// Izloži za zastavice i za inline skriptu koja koristi T()
window.setLanguage = setLanguage;
window.T = function(){ return translations[trenutniJezik] || translations.en; };


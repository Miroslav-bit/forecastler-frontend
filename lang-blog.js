// lang-blog.js (robustan za blog.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    blog: {
      title: "AI Forecasts",
      desc1: "Explore what AI estimates about current global topics — politics, economy, science, sports, entertainment, and more.",
      categories: {
        planet: "Planet",
        health: "Health",
        society: "Society",
        politics: "Politics",
        crime: "Crime",
        economy: "Economy",
        technology: "Technology",
        science: "Science",
        entertainment: "Entertainment",
        sports: "Sports"
      }
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    blog: {
      title: "AI prognoze",
      desc1: "Istražite kako AI procenjuje aktuelne teme u svetu — politiku, ekonomiju, nauku, sport, zabavu i još mnogo toga.",
      categories: {
        planet: "Planeta",
        health: "Zdravlje",
        society: "Društvo",
        politics: "Politika",
        crime: "Kriminal",
        economy: "Ekonomija",
        technology: "Tehnologija",
        science: "Nauka",
        entertainment: "Zabava",
        sports: "Sport"
      }
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

  // BLOG naslov i opis
  setTxtAny("blog-title",   t.blog.title);
  setTxtAny("blog-desc-1",  t.blog.desc1);

  // BLOG kategorije (span-ovi u figcaption)
  const c = t.blog.categories;
  setTxtAny("blog-cat-planet",        c.planet);
  setTxtAny("blog-cat-health",        c.health);
  setTxtAny("blog-cat-society",       c.society);
  setTxtAny("blog-cat-politics",      c.politics);
  setTxtAny("blog-cat-crime",         c.crime);
  setTxtAny("blog-cat-economy",       c.economy);
  setTxtAny("blog-cat-technology",    c.technology);
  setTxtAny("blog-cat-science",       c.science);
  setTxtAny("blog-cat-entertainment", c.entertainment);
  setTxtAny("blog-cat-sports",        c.sports);

  // Footer linkovi
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

// Inicijalizacija (učitaj sačuvani ili na osnovu jezika pregledača)
document.addEventListener("DOMContentLoaded", () => {
  const saved  = localStorage.getItem('forecastlerLang');
  const browser = (navigator.language || 'en').slice(0,2);
  const initial = saved || (browser === 'sr' ? 'sr' : 'en');
  setLanguage(initial);
});

// Omogući promenu jezika klikom na zastavice
window.setLanguage = setLanguage;

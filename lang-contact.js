// lang-contact.js (robustan za contact.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    contact: {
      title: "Contact",
      // Bez zabranjenog preloma reda u stringu:
      p1: "If you have any questions, suggestions, or feedback regarding the Forecastler platform, feel free to contact us at any time. Your input is valuable and helps us improve the service.",
      p2: "Forecastler Team",
      p3: "Email: forecastlerteam@gmail.com",
      p4: "Follow us:",
      // p5 su linkovi u HTML-u (ostavljamo ih tamo)
      p6: "Note: Official addresses and additional contact channels will be announced in due course."
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    contact: {
      title: "Kontakt",
      p1: "Ako imate bilo kakvih pitanja, povratnih informacija ili sugestija u vezi sa platformom Forecastler, slobodno nas kontaktirajte u bilo koje vreme. Vaš doprinos je dragocen i pomaže nam da poboljšamo uslugu.",
      p2: "Forecastler tim",
      p3: "Imejl: forecastlerteam@gmail.com",
      p4: "Pratite nas:",
      p6: "Napomena: zvanične adrese i dodatni kanali za kontakt biće blagovremeno objavljeni."
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
function setHTMLAny(id, html){
  const el = byId(id);
  if (el && typeof html === "string") el.innerHTML = html;
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

  // CONTACT (p5 su linkovi u HTML-u; ostavljamo ih netaknute)
  setTxtAny("contact-title",  t.contact.title);
  setTxtAny("contact-text-1", t.contact.p1);
  setTxtAny("contact-text-2", t.contact.p2);
  setTxtAny("contact-text-3", t.contact.p3);
  setTxtAny("contact-text-4", t.contact.p4);
  setTxtAny("contact-text-6", t.contact.p6);

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

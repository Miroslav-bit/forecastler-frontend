// lang-contact.js (čista verzija samo za about.html)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    contact: {
      title: "Contact",
      p1: "If you have any questions, suggestions, or feedback regarding the Forecastler platform, 
    feel free to contact us at any time. Your input is valuable and helps us improve the service.",
      p2: "Forecastler Team",
      p3: "Email: forecastlerteam@gmail.com",
      p4: "Follow us:",
      p6: "Note: Official addresses and additional contact channels will be announced in due course."
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    contact: {
      title: "Kontakt",
      p1: "Ako imate bilo kakvih pitanja, povratnih informacija ili sugestija u vezi platforme Forecastler, slobodno nas kontaktirajete u bilo koje vreme. Vaš doprinos je dragocen i pomaže nam da poboljšamo uslugu.",
      p2: "Forecastler Team",
      p3: "Email: forecastlerteam@gmail.com",
      p4: "Pratite nas:",
      p6: "Napomena: Zvanične adrese i dodatni kanali za kontakt biće blagovremeno objavljeni."
    }
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations.en;
  localStorage.setItem('forecastlerLang', lang);
  trenutniJezik = lang;

  const setTxt  = (id, txt)  => { const el = document.getElementById(id); if (el && typeof txt  === "string") el.textContent = txt; };
  const setHTML = (id, html) => { const el = document.getElementById(id); if (el && typeof html === "string") el.innerHTML   = html; };

  // Header (desktop + mobile)
  if (t.headerLinks){
    setTxt("nav-home", t.headerLinks.home);
    setTxt("nav-about", t.headerLinks.about);
    setTxt("nav-contact", t.headerLinks.contact);
    setTxt("nav-blog", t.headerLinks.blog);

    setTxt("mnav-home", t.headerLinks.home);
    setTxt("mnav-about", t.headerLinks.about);
    setTxt("mnav-contact", t.headerLinks.contact);
    setTxt("mnav-blog", t.headerLinks.blog);
  }

  // CONTACT
  setTxt ("contact-title",  t.contact.title);
  setTxt ("contact-text-1", t.contact.p1);
  setTxt ("contact-text-2", t.contact.p2);
  setTxt ("contact-text-3", t.contact.p3);
  setTxt ("contact-text-4", t.contact.p4);
  setTxt ("contact-text-6", t.contact.p6);

  // Footer linkovi
  if (t.footerLinks){
    setTxt("link-disclaimer", t.footerLinks.disclaimer);
    setTxt("link-terms",      t.footerLinks.terms);
    setTxt("link-privacy",    t.footerLinks.privacy);
    setTxt("link-cookies",    t.footerLinks.cookies);
    setTxt("link-sitemap",    t.footerLinks.sitemap);
    setTxt("link-faq",        t.footerLinks.faq);
  }

  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

// Inicijalizacija
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem('forecastlerLang');
  const browser = (navigator.language || 'en').slice(0,2);
  const initial = saved || (browser === 'sr' ? 'sr' : 'en');
  setLanguage(initial);
});

// izloži funkciju za klik na zastavice
window.setLanguage = setLanguage;

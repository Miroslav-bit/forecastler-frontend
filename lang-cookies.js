// lang-cookies.js (robustan za cookies.html; radi i ako kasnije dodaš -en sufikse)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },

    meta: {
      title: "Cookies Policy",
      effective: "Effective Date: 17 June 2025",
      updated:  "Last Updated: 15 August 2025",
      intro: "This Policy explains how Forecastler uses cookies and similar technologies."
    },

    s1: {
      title: "1) Do we use cookies?",
      p1: "Currently — no. We do not set cookies, and therefore no cookie banner is shown. We do not use cookies for analytics, advertising, measurement, personalization, or authentication (registration/login is not enabled).",
      p2: "<strong>Analytics without cookies (GA4).</strong> We use Google Analytics 4 in a cookieless configuration solely for basic traffic and performance measurement. Measurement relies on aggregated, non-identifying signals without using local device identifiers and without personalization. We do not enable Google Signals or advertising features; GA4 is configured so that, in the EU, IP addresses are not logged or stored. We do not send GA4 any personal data (PII)."
    },

    s2: {
      title: "2) What do we use instead?",
      p1: "We use localStorage and, occasionally, sessionStorage — storage in your browser that helps the Platform work more smoothly (e.g., interface language, practical preferences, optionally last-entered values).",
      p2: "• Data in localStorage remain on your device, are not sent to our servers, and are not available to other users.",
      p3: "• You can delete them at any time in your browser settings (“Clear site data”, clear cache and local data).",
      p4: "• We do not use localStorage for analytics.",
      note: "<em>Compliance note.</em> Some laws treat localStorage as a “similar technology” to cookies. If we later store non-essential data (e.g., remembering last inputs for convenience), we will provide a clear opt-in control (“Remember my inputs”) and, where required, request your consent before activation."
    },

    s3: {
      title: "3) Third-party content and services",
      p1: "We do not currently load embedded third-party content that sets cookies. Our pages may contain external links (e.g., Facebook, Instagram, YouTube, TikTok). When you click and leave our site, the cookie policies of those third parties apply."
    },

    s4: {
      title: "4) Future changes (analytics with cookies, ads, embeds)",
      p1: "If we introduce technologies that use cookies (e.g., analytics with cookies, ad networks/AdSense, embedded players), we will update this Policy and, where required, seek your consent via a visible banner/preferences center before setting any non-essential cookies."
    },

    s5: {
      title: "5) How to manage data in your browser",
      p1: "Open your browser’s privacy settings and clear Site Data for the Forecastler domain, including localStorage and cache. If needed, use Private/Incognito mode so data persist only for the session."
    },

    s6: {
      title: "6) Changes to this Policy",
      p1: "We may update this Policy from time to time. Changes take effect upon publication here with an updated date."
    },

    s7: {
      title: "7) Contact",
      p1: "Forecastler Team",
      p2: "Email: forecastlerteam@gmail.com"
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },

    meta: {
      title: "Politika kolačića",
      effective: "Datum stupanja na snagu: 17. jun 2025.",
      updated:  "Poslednje ažuriranje: 15. avgust 2025.",
      intro: "Ova Politika objašnjava kako Forecastler koristi kolačiće i slične tehnologije."
    },

    s1: {
      title: "1) Da li koristimo kolačiće?",
      p1: "Trenutno — ne. Ne postavljamo kolačiće, pa se zato ne prikazuje baner za kolačiće. Ne koristimo kolačiće za analitiku, oglašavanje, merenje, personalizaciju ili autentifikaciju (registracija/prijava nije omogućena).",
      p2: "<strong>Analitika bez kolačića (GA4).</strong> Koristimo Google Analytics 4 u režimu bez kolačića isključivo za osnovno merenje saobraćaja i performansi. Merenje se zasniva na agregiranim, neidentifikujućim signalima, bez korišćenja lokalnih identifikatora uređaja i bez personalizacije. Ne uključujemo Google Signals ni oglasne funkcije; u EU, GA4 je podešen tako da IP adrese nisu logovane niti čuvane. GA4-u ne šaljemo lične podatke (PII)."
    },

    s2: {
      title: "2) Šta koristimo umesto toga?",
      p1: "Koristimo localStorage i, povremeno, sessionStorage — skladište u vašem pregledaču koje pomaže da Platforma radi glađe (npr. jezik interfejsa, praktična podešavanja, opciono poslednje unete vrednosti).",
      p2: "• Podaci u localStorage ostaju na vašem uređaju, ne šalju se našim serverima i nisu dostupni drugim korisnicima.",
      p3: "• Možete ih obrisati u bilo kom trenutku u podešavanjima pregledača („Clear site data“, brisanje keša i lokalnih podataka).",
      p4: "• Ne koristimo localStorage za analitiku.",
      note: "<em>Napomena o usklađenosti.</em> Neki propisi tretiraju localStorage kao „sličnu tehnologiju“ kolačićima. Ako kasnije budemo čuvali nenepo­trebne podatke (npr. pamćenje poslednjih unosa radi komfora), obezbedićemo jasno opt-in dugme („Zapamti moje unose“) i, gde je potrebno, zatražiti vaš pristanak pre aktivacije."
    },

    s3: {
      title: "3) Sadržaj i usluge trećih strana",
      p1: "Trenutno ne učitavamo ugnježđeni sadržaj trećih strana koji postavlja kolačiće. Naše stranice mogu sadržati spoljne linkove (npr. Facebook, Instagram, YouTube, TikTok). Kada kliknete i napustite naš sajt, primenjuju se politike kolačića tih trećih strana."
    },

    s4: {
      title: "4) Buduće izmene (analitika sa kolačićima, oglasi, embedovi)",
      p1: "Ako uvedemo tehnologije koje koriste kolačiće (npr. analitika sa kolačićima, oglasne mreže/AdSense, ugradni plejeri), ažuriraćemo ovu Politiku i, kada je potrebno, tražiti vaš pristanak preko vidljivog banera/centra za podešavanja pre postavljanja bilo kakvih neneophodnih kolačića."
    },

    s5: {
      title: "5) Kako da upravljate podacima u pregledaču",
      p1: "Otvorite podešavanja privatnosti svog pregledača i obrišite podatke sajta za domen Forecastler, uključujući localStorage i keš. Po potrebi koristite Privatni/Inkognito režim kako bi podaci važili samo za trajanje sesije."
    },

    s6: {
      title: "6) Izmene ove Politike",
      p1: "Ovu Politiku povremeno možemo ažurirati. Izmene važe od objave ovde uz ažurirani datum."
    },

    s7: {
      title: "7) Kontakt",
      p1: "Forecastler tim",
      p2: "Imejl: forecastlerteam@gmail.com"
    }
  }
};

// Helperi: pokušaj bez sufiksa, pa sa "-en"
function byId(id){ return document.getElementById(id) || document.getElementById(id + "-en"); }
function setTxtAny(id, txt){ const el = byId(id); if (el && typeof txt === "string") el.textContent = txt; }
function setHTMLAny(id, html){ const el = byId(id); if (el && typeof html === "string") el.innerHTML = html; }

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

  // META
  setTxtAny ("cp-title",  t.meta.title);
  setTxtAny ("cp-meta-1", t.meta.effective);
  setTxtAny ("cp-meta-2", t.meta.updated);
  setTxtAny ("cp-intro",  t.meta.intro);

  // 1)
  setTxtAny  ("cp-s1-title", t.s1.title);
  setTxtAny  ("cp-s1-1",     t.s1.p1);
  setHTMLAny ("cp-s1-2",     t.s1.p2);

  // 2)
  setTxtAny  ("cp-s2-title", t.s2.title);
  setTxtAny  ("cp-s2-1",     t.s2.p1);
  setTxtAny  ("cp-s2-2",     t.s2.p2);
  setTxtAny  ("cp-s2-3",     t.s2.p3);
  setTxtAny  ("cp-s2-4",     t.s2.p4);
  setHTMLAny ("cp-s2-note",  t.s2.note);

  // 3)
  setTxtAny ("cp-s3-title", t.s3.title);
  setTxtAny ("cp-s3-1",     t.s3.p1);

  // 4)
  setTxtAny ("cp-s4-title", t.s4.title);
  setTxtAny ("cp-s4-1",     t.s4.p1);

  // 5)
  setTxtAny ("cp-s5-title", t.s5.title);
  setTxtAny ("cp-s5-1",     t.s5.p1);

  // 6)
  setTxtAny ("cp-s6-title", t.s6.title);
  setTxtAny ("cp-s6-1",     t.s6.p1);

  // 7)
  setTxtAny ("cp-s7-title", t.s7.title);
  setTxtAny ("cp-s7-1",     t.s7.p1);
  setTxtAny ("cp-s7-2",     t.s7.p2);

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

// Inicijalizacija
document.addEventListener("DOMContentLoaded", () => {
  const saved  = localStorage.getItem('forecastlerLang');
  const browser = (navigator.language || 'en').slice(0,2);
  const initial = saved || (browser === 'sr' ? 'sr' : 'en');
  setLanguage(initial);
});

// Izloži funkcije + T() helper (koriste ih drugi skriptovi na strani)
window.setLanguage = setLanguage;
window.T = function(){ return translations[trenutniJezik] || translations.en; };

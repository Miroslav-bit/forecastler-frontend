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
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  ui: {
    pageTitle: "Mapa del sitio",
    tagline: "Encuentra cualquier página pública en Forecastler. Usa el cuadro de búsqueda para filtrar enlaces.",
    quickSearch: "Búsqueda rápida",
    placeholder: "Escribe para filtrar… (p. ej., privacidad, faq, blog)",
    lastUpdated: "Última actualización:",
    exportXml: "Exportar XML",
    exportXmlAria: "Exportar mapa del sitio XML",
    counts: "Páginas listadas:",
    groups: { main: "Páginas principales", legal: "Legal", blog: "Blog" }
  },
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  ui: {
    pageTitle: "Plan du site",
    tagline: "Trouvez toute page publique sur Forecastler. Utilisez la barre de recherche pour filtrer les liens.",
    quickSearch: "Recherche rapide",
    placeholder: "Saisissez pour filtrer… (p. ex. confidentialité, faq, blog)",
    lastUpdated: "Dernière mise à jour :",
    exportXml: "Exporter XML",
    exportXmlAria: "Exporter le plan du site XML",
    counts: "Pages répertoriées :",
    groups: { main: "Pages principales", legal: "Juridique", blog: "Blog" }
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  ui: {
    pageTitle: "Sitemap",
    tagline: "Finde jede öffentliche Seite auf Forecastler. Nutze das Suchfeld, um Links zu filtern.",
    quickSearch: "Schnellsuche",
    placeholder: "Tippen zum Filtern… (z. B. Datenschutz, FAQ, Blog)",
    lastUpdated: "Zuletzt aktualisiert:",
    exportXml: "XML exportieren",
    exportXmlAria: "XML-Sitemap exportieren",
    counts: "Aufgelistete Seiten:",
    groups: { main: "Hauptseiten", legal: "Rechtliches", blog: "Blog" }
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  ui: {
    pageTitle: "Mapa do site",
    tagline: "Encontre qualquer página pública no Forecastler. Use a busca para filtrar links.",
    quickSearch: "Busca rápida",
    placeholder: "Digite para filtrar… (ex.: privacidade, faq, blog)",
    lastUpdated: "Última atualização:",
    exportXml: "Exportar XML",
    exportXmlAria: "Exportar sitemap XML",
    counts: "Páginas listadas:",
    groups: { main: "Páginas principais", legal: "Jurídico", blog: "Blog" }
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  ui: {
    pageTitle: "Mappa del sito",
    tagline: "Trova qualsiasi pagina pubblica su Forecastler. Usa la casella di ricerca per filtrare i link.",
    quickSearch: "Ricerca rapida",
    placeholder: "Digita per filtrare… (es. privacy, faq, blog)",
    lastUpdated: "Ultimo aggiornamento:",
    exportXml: "Esporta XML",
    exportXmlAria: "Esporta la sitemap XML",
    counts: "Pagine elencate:",
    groups: { main: "Pagine principali", legal: "Legale", blog: "Blog" }
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  ui: {
    pageTitle: "Mapa witryny",
    tagline: "Znajdź dowolną publiczną stronę w Forecastler. Użyj wyszukiwarki, aby filtrować linki.",
    quickSearch: "Szybkie wyszukiwanie",
    placeholder: "Pisz, aby filtrować… (np. prywatność, FAQ, blog)",
    lastUpdated: "Ostatnia aktualizacja:",
    exportXml: "Eksportuj XML",
    exportXmlAria: "Eksport mapy witryny XML",
    counts: "Wymienione strony:",
    groups: { main: "Strony główne", legal: "Prawne", blog: "Blog" }
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  ui: {
    pageTitle: "Карта сайту",
    tagline: "Знайдіть будь-яку публічну сторінку на Forecastler. Скористайтеся пошуком, щоб фільтрувати посилання.",
    quickSearch: "Швидкий пошук",
    placeholder: "Вводьте, щоб фільтрувати… (напр., конфіденційність, FAQ, блог)",
    lastUpdated: "Останнє оновлення:",
    exportXml: "Експортувати XML",
    exportXmlAria: "Експортувати XML-карту сайту",
    counts: "Сторінок у списку:",
    groups: { main: "Основні сторінки", legal: "Юридичні", blog: "Блог" }
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  ui: {
    pageTitle: "Карта сайта",
    tagline: "Найдите любую публичную страницу на Forecastler. Используйте окно поиска, чтобы фильтровать ссылки.",
    quickSearch: "Быстрый поиск",
    placeholder: "Введите для фильтрации… (напр.: конфиденциальность, FAQ, блог)",
    lastUpdated: "Последнее обновление:",
    exportXml: "Экспорт XML",
    exportXmlAria: "Экспорт XML-карты сайта",
    counts: "Страниц в списке:",
    groups: { main: "Основные страницы", legal: "Юридическая информация", blog: "Блог" }
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  ui: {
    pageTitle: "Site haritası",
    tagline: "Forecastler’deki herkese açık sayfaları bulun. Bağlantıları filtrelemek için arama kutusunu kullanın.",
    quickSearch: "Hızlı arama",
    placeholder: "Filtrelemek için yazın… (örn. gizlilik, SSS, blog)",
    lastUpdated: "Son güncelleme:",
    exportXml: "XML’i Dışa Aktar",
    exportXmlAria: "XML site haritasını dışa aktar",
    counts: "Listelenen sayfalar:",
    groups: { main: "Ana sayfalar", legal: "Hukuki", blog: "Blog" }
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  ui: {
    pageTitle: "خريطة الموقع",
    tagline: "اعثر على أي صفحة عامة في Forecastler. استخدم مربع البحث لتصفية الروابط.",
    quickSearch: "بحث سريع",
    placeholder: "اكتب للتصفية… (مثل: الخصوصية، الأسئلة الشائعة، المدوّنة)",
    lastUpdated: "آخر تحديث:",
    exportXml: "تصدير XML",
    exportXmlAria: "تصدير خريطة موقع XML",
    counts: "الصفحات المُدرجة:",
    groups: { main: "الصفحات الرئيسية", legal: "القانونية", blog: "المدوّنة" }
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  ui: {
    pageTitle: "साइटमैप",
    tagline: "Forecastler पर कोई भी सार्वजनिक पेज खोजें। लिंक फ़िल्टर करने के लिए खोज बॉक्स का उपयोग करें.",
    quickSearch: "त्वरित खोज",
    placeholder: "फ़िल्टर करने के लिए टाइप करें… (जैसे गोपनीयता, FAQ, ब्लॉग)",
    lastUpdated: "अंतिम अपडेट:",
    exportXml: "XML निर्यात",
    exportXmlAria: "XML साइटमैप निर्यात",
    counts: "सूचीबद्ध पेज:",
    groups: { main: "मुख्य पेज", legal: "कानूनी", blog: "ब्लॉग" }
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  ui: {
    pageTitle: "网站地图",
    tagline: "查找 Forecastler 上的任何公开页面。使用搜索框筛选链接。",
    quickSearch: "快速搜索",
    placeholder: "输入以筛选…（例如：隐私、常见问题、博客）",
    lastUpdated: "最近更新：",
    exportXml: "导出 XML",
    exportXmlAria: "导出 XML 网站地图",
    counts: "已列出页面：",
    groups: { main: "主要页面", legal: "法律", blog: "博客" }
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  ui: {
    pageTitle: "サイトマップ",
    tagline: "Forecastler の公開ページを探せます。検索ボックスでリンクを絞り込みましょう。",
    quickSearch: "クイック検索",
    placeholder: "入力して絞り込み…（例：プライバシー、FAQ、ブログ）",
    lastUpdated: "最終更新：",
    exportXml: "XML をエクスポート",
    exportXmlAria: "XML サイトマップをエクスポート",
    counts: "掲載ページ数：",
    groups: { main: "メインページ", legal: "法務", blog: "ブログ" }
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

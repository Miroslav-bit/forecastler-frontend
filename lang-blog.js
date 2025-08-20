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
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  blog: {
    title: "Pronósticos de IA",
    desc1: "Explora lo que la IA estima sobre los temas globales actuales — política, economía, ciencia, deportes, entretenimiento y más.",
    categories: {
      planet: "Planeta",
      health: "Salud",
      society: "Sociedad",
      politics: "Política",
      crime: "Crimen",
      economy: "Economía",
      technology: "Tecnología",
      science: "Ciencia",
      entertainment: "Entretenimiento",
      sports: "Deportes"
    }
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  blog: {
    title: "Prédictions de l’IA",
    desc1: "Explorez ce que l’IA estime à propos des sujets mondiaux actuels — politique, économie, science, sport, divertissement, et plus encore.",
    categories: {
      planet: "Planète",
      health: "Santé",
      society: "Société",
      politics: "Politique",
      crime: "Criminalité",
      economy: "Économie",
      technology: "Technologie",
      science: "Science",
      entertainment: "Divertissement",
      sports: "Sport"
    }
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  blog: {
    title: "KI-Prognosen",
    desc1: "Entdecken Sie, was die KI über aktuelle globale Themen abschätzt — Politik, Wirtschaft, Wissenschaft, Sport, Unterhaltung und mehr.",
    categories: {
      planet: "Planet",
      health: "Gesundheit",
      society: "Gesellschaft",
      politics: "Politik",
      crime: "Kriminalität",
      economy: "Wirtschaft",
      technology: "Technologie",
      science: "Wissenschaft",
      entertainment: "Unterhaltung",
      sports: "Sport"
    }
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  blog: {
    title: "Previsões de IA",
    desc1: "Explore o que a IA estima sobre temas globais atuais — política, economia, ciência, esportes, entretenimento e mais.",
    categories: {
      planet: "Planeta",
      health: "Saúde",
      society: "Sociedade",
      politics: "Política",
      crime: "Crime",
      economy: "Economia",
      technology: "Tecnologia",
      science: "Ciência",
      entertainment: "Entretenimento",
      sports: "Esportes"
    }
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  blog: {
    title: "Previsioni dell’IA",
    desc1: "Esplora ciò che l’IA stima sui temi globali attuali — politica, economia, scienza, sport, intrattenimento e altro.",
    categories: {
      planet: "Pianeta",
      health: "Salute",
      society: "Società",
      politics: "Politica",
      crime: "Crimine",
      economy: "Economia",
      technology: "Tecnologia",
      science: "Scienza",
      entertainment: "Intrattenimento",
      sports: "Sport"
    }
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  blog: {
    title: "Prognozy SI",
    desc1: "Poznaj, co SI szacuje na temat bieżących tematów globalnych — polityki, gospodarki, nauki, sportu, rozrywki i innych.",
    categories: {
      planet: "Planeta",
      health: "Zdrowie",
      society: "Społeczeństwo",
      politics: "Polityka",
      crime: "Przestępczość",
      economy: "Gospodarka",
      technology: "Technologia",
      science: "Nauka",
      entertainment: "Rozrywka",
      sports: "Sport"
    }
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  blog: {
    title: "Прогнози ШІ",
    desc1: "Дізнайтеся, що ШІ оцінює щодо актуальних світових тем — політика, економіка, наука, спорт, розваги тощо.",
    categories: {
      planet: "Планета",
      health: "Здоров’я",
      society: "Суспільство",
      politics: "Політика",
      crime: "Злочинність",
      economy: "Економіка",
      technology: "Технології",
      science: "Наука",
      entertainment: "Розваги",
      sports: "Спорт"
    }
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  blog: {
    title: "Прогнозы ИИ",
    desc1: "Узнайте, что ИИ оценивает по актуальным мировым темам — политика, экономика, наука, спорт, развлечения и другое.",
    categories: {
      planet: "Планета",
      health: "Здоровье",
      society: "Общество",
      politics: "Политика",
      crime: "Преступность",
      economy: "Экономика",
      technology: "Технологии",
      science: "Наука",
      entertainment: "Развлечения",
      sports: "Спорт"
    }
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  blog: {
    title: "Yapay Zekâ Tahminleri",
    desc1: "Yapay zekânın güncel küresel konular hakkında — siyaset, ekonomi, bilim, spor, eğlence ve daha fazlası — ne öngördüğünü keşfedin.",
    categories: {
      planet: "Gezegen",
      health: "Sağlık",
      society: "Toplum",
      politics: "Siyaset",
      crime: "Suç",
      economy: "Ekonomi",
      technology: "Teknoloji",
      science: "Bilim",
      entertainment: "Eğlence",
      sports: "Spor"
    }
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  blog: {
    title: "توقعات الذكاء الاصطناعي",
    desc1: "استكشف ما يُقدّره الذكاء الاصطناعي بشأن الموضوعات العالمية الراهنة — السياسة والاقتصاد والعلوم والرياضة والترفيه وغيرها.",
    categories: {
      planet: "الكوكب",
      health: "الصحة",
      society: "المجتمع",
      politics: "السياسة",
      crime: "الجريمة",
      economy: "الاقتصاد",
      technology: "التكنولوجيا",
      science: "العلوم",
      entertainment: "الترفيه",
      sports: "الرياضة"
    }
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  blog: {
    title: "एआई पूर्वानुमान",
    desc1: "जानें कि एआई वर्तमान वैश्विक विषयों—राजनीति, अर्थव्यवस्था, विज्ञान, खेल, मनोरंजन आदि—पर क्या अनुमान लगाता है।",
    categories: {
      planet: "ग्रह",
      health: "स्वास्थ्य",
      society: "समाज",
      politics: "राजनीति",
      crime: "अपराध",
      economy: "अर्थव्यवस्था",
      technology: "प्रौद्योगिकी",
      science: "विज्ञान",
      entertainment: "मनोरंजन",
      sports: "खेल"
    }
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  blog: {
    title: "AI 预测",
    desc1: "探索 AI 对当前全球话题的估计——政治、经济、科学、体育、娱乐等。",
    categories: {
      planet: "星球",
      health: "健康",
      society: "社会",
      politics: "政治",
      crime: "犯罪",
      economy: "经济",
      technology: "科技",
      science: "科学",
      entertainment: "娱乐",
      sports: "体育"
    }
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  blog: {
    title: "AI予測",
    desc1: "政治・経済・科学・スポーツ・エンターテインメントなど、現在の世界的トピックについてAIがどう見積もるかを探りましょう。",
    categories: {
      planet: "惑星",
      health: "健康",
      society: "社会",
      politics: "政治",
      crime: "犯罪",
      economy: "経済",
      technology: "テクノロジー",
      science: "科学",
      entertainment: "エンターテインメント",
      sports: "スポーツ"
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

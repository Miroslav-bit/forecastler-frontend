// lang-contact.js (robustan za contact.html sa -en sufiksima)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    contact: {
      title: "Contact",
      p1: "If you have any questions, suggestions, or feedback regarding the Forecastler platform, feel free to contact us at any time. Your input is valuable and helps us improve the service.",
      p2: "Forecastler Team",
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
      p4: "Pratite nas:",
      p6: "Napomena: zvanične adrese i dodatni kanali za kontakt biće blagovremeno objavljeni."
    }
  },

es: {
  headerLinks: { home: "Inicio", about: "Sobre nosotros", contact: "Contacto", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Términos de uso", privacy:"Política de privacidad", cookies:"Política de cookies", sitemap:"Mapa del sitio", faq:"Preguntas frecuentes" },
  contact: {
    title: "Contacto",
    p1: "Si tienes preguntas, sugerencias o comentarios sobre la plataforma Forecastler, no dudes en ponerte en contacto con nosotros en cualquier momento. Tu opinión es valiosa y nos ayuda a mejorar el servicio.",
    p2: "Equipo de Forecastler",
    p4: "Síguenos:",
    p5: "",
    p6: "Nota: Las direcciones oficiales y canales adicionales de contacto se anunciarán a su debido tiempo."
  }
},

fr: {
  headerLinks: { home: "Accueil", about: "À propos", contact: "Contact", blog: "Blog" },
  footerLinks: { disclaimer:"Mentions légales", terms:"Conditions d'utilisation", privacy:"Politique de confidentialité", cookies:"Politique relative aux cookies", sitemap:"Plan du site", faq:"FAQ" },
  contact: {
    title: "Contact",
    p1: "Si vous avez des questions, des suggestions ou des retours concernant la plateforme Forecastler, n’hésitez pas à nous contacter à tout moment. Vos contributions sont précieuses et nous aident à améliorer le service.",
    p2: "Équipe Forecastler",
    p4: "Suivez-nous :",
    p5: "",
    p6: "Remarque : Les adresses officielles et d’autres canaux de contact seront annoncés en temps voulu."
  }
},

de: {
  headerLinks: { home: "Startseite", about: "Über uns", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Haftungsausschluss", terms:"Nutzungsbedingungen", privacy:"Datenschutzerklärung", cookies:"Cookie-Richtlinie", sitemap:"Sitemap", faq:"FAQ" },
  contact: {
    title: "Kontakt",
    p1: "Wenn Sie Fragen, Anregungen oder Feedback zur Forecastler-Plattform haben, können Sie uns jederzeit kontaktieren. Ihr Beitrag ist wertvoll und hilft uns, den Dienst zu verbessern.",
    p2: "Forecastler-Team",
    p4: "Folgen Sie uns:",
    p5: "",
    p6: "Hinweis: Offizielle Adressen und zusätzliche Kontaktkanäle werden zu gegebener Zeit bekanntgegeben."
  }
},

pt: {
  headerLinks: { home: "Início", about: "Sobre nós", contact: "Contato", blog: "Blog" },
  footerLinks: { disclaimer:"Aviso legal", terms:"Termos de uso", privacy:"Política de Privacidade", cookies:"Política de Cookies", sitemap:"Mapa do site", faq:"Perguntas frequentes" },
  contact: {
    title: "Contato",
    p1: "Se você tiver perguntas, sugestões ou feedback sobre a plataforma Forecastler, fique à vontade para nos contatar a qualquer momento. Sua opinião é valiosa e nos ajuda a melhorar o serviço.",
    p2: "Equipe Forecastler",
    p4: "Siga-nos:",
    p5: "",
    p6: "Observação: Endereços oficiais e canais adicionais de contato serão anunciados oportunamente."
  }
},

it: {
  headerLinks: { home: "Home", about: "Chi siamo", contact: "Contatti", blog: "Blog" },
  footerLinks: { disclaimer:"Note legali", terms:"Termini di utilizzo", privacy:"Informativa sulla privacy", cookies:"Informativa sui cookie", sitemap:"Mappa del sito", faq:"FAQ" },
  contact: {
    title: "Contatti",
    p1: "Se hai domande, suggerimenti o feedback relativi alla piattaforma Forecastler, contattaci in qualsiasi momento. Il tuo contributo è prezioso e ci aiuta a migliorare il servizio.",
    p2: "Team di Forecastler",
    p4: "Seguici:",
    p5: "",
    p6: "Nota: Gli indirizzi ufficiali e ulteriori canali di contatto saranno annunciati a tempo debito."
  }
},

pl: {
  headerLinks: { home: "Strona główna", about: "O nas", contact: "Kontakt", blog: "Blog" },
  footerLinks: { disclaimer:"Nota prawna", terms:"Warunki korzystania", privacy:"Polityka prywatności", cookies:"Polityka plików cookie", sitemap:"Mapa strony", faq:"FAQ" },
  contact: {
    title: "Kontakt",
    p1: "Jeśli masz pytania, sugestie lub uwagi dotyczące platformy Forecastler, skontaktuj się z nami w dowolnym momencie. Twoja opinia jest cenna i pomaga nam ulepszać usługę.",
    p2: "Zespół Forecastlera",
    p4: "Obserwuj nas:",
    p5: "",
    p6: "Uwaga: Oficjalne adresy i dodatkowe kanały kontaktu zostaną ogłoszone we właściwym czasie."
  }
},

uk: {
  headerLinks: { home: "Головна", about: "Про нас", contact: "Контакти", blog: "Блог" },
  footerLinks: { disclaimer:"Відмова від відповідальності", terms:"Умови використання", privacy:"Політика конфіденційності", cookies:"Політика щодо файлів cookie", sitemap:"Карта сайту", faq:"Поширені запитання" },
  contact: {
    title: "Контакти",
    p1: "Якщо у вас є запитання, пропозиції чи відгуки щодо платформи Forecastler, звертайтеся до нас у будь-який час. Ваші відгуки цінні та допомагають нам покращувати сервіс.",
    p2: "Команда Forecastler",
    p4: "Стежте за нами:",
    p5: "",
    p6: "Примітка: Офіційні адреси та додаткові канали зв’язку буде оголошено своєчасно."
  }
},

ru: {
  headerLinks: { home: "Главная", about: "О нас", contact: "Контакты", blog: "Блог" },
  footerLinks: { disclaimer:"Отказ от ответственности", terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика в отношении файлов cookie", sitemap:"Карта сайта", faq:"Частые вопросы" },
  contact: {
    title: "Контакты",
    p1: "Если у вас есть вопросы, предложения или отзывы по платформе Forecastler, свяжитесь с нами в любое время. Ваше мнение ценно и помогает нам улучшать сервис.",
    p2: "Команда Forecastler",
    p4: "Подписывайтесь на нас:",
    p5: "",
    p6: "Примечание: Официальные адреса и дополнительные каналы связи будут объявлены в надлежащее время."
  }
},

tr: {
  headerLinks: { home: "Ana sayfa", about: "Hakkımızda", contact: "İletişim", blog: "Blog" },
  footerLinks: { disclaimer:"Yasal Uyarı", terms:"Kullanım Şartları", privacy:"Gizlilik Politikası", cookies:"Çerez Politikası", sitemap:"Site haritası", faq:"SSS" },
  contact: {
    title: "İletişim",
    p1: "Forecastler platformasıyla ilgili sorularınız, önerileriniz veya geri bildirimleriniz varsa, dilediğiniz zaman bizimle iletişime geçebilirsiniz. Görüşleriniz değerlidir ve hizmeti geliştirmemize yardımcı olur.",
    p2: "Forecastler Ekibi",
    p4: "Bizi takip edin:",
    p5: "",
    p6: "Not: Resmî adresler ve ek iletişim kanalları zamanı geldiğinde duyurulacaktır."
  }
},

ar: {
  headerLinks: { home: "الصفحة الرئيسية", about: "من نحن", contact: "اتصل بنا", blog: "المدونة" },
  footerLinks: { disclaimer:"إخلاء المسؤولية", terms:"شروط الاستخدام", privacy:"سياسة الخصوصية", cookies:"سياسة ملفات تعريف الارتباط", sitemap:"خريطة الموقع", faq:"الأسئلة الشائعة" },
  contact: {
    title: "اتصل بنا",
    p1: "إذا كانت لديك أي أسئلة أو اقتراحات أو ملاحظات بشأن منصة Forecastler، فلا تتردد في التواصل معنا في أي وقت. رأيك مهم ويساعدنا على تحسين الخدمة.",
    p2: "فريق Forecastler",
    p4: "تابعونا:",
    p5: "",
    p6: "ملاحظة: سيتم الإعلان عن العناوين الرسمية وقنوات الاتصال الإضافية في الوقت المناسب."
  }
},

hi: {
  headerLinks: { home: "मुखपृष्ठ", about: "हमारे बारे में", contact: "संपर्क करें", blog: "ब्लॉग" },
  footerLinks: { disclaimer:"अस्वीकरण", terms:"उपयोग की शर्तें", privacy:"गोपनीयता नीति", cookies:"कुकी नीति", sitemap:"साइटमैप", faq:"सामान्य प्रश्न" },
  contact: {
    title: "संपर्क",
    p1: "यदि Forecastler प्लेटफ़ॉर्म के बारे में आपके कोई प्रश्न, सुझाव या फ़ीडबैक हैं, तो किसी भी समय हमसे बेझिझक संपर्क करें। आपका इनपुट मूल्यवान है और सेवा को बेहतर बनाने में मदद करता है।",
    p2: "Forecastler टीम",
    p4: "हमें फ़ॉलो करें:",
    p5: "",
    p6: "टिप्पणी: आधिकारिक पते और अतिरिक्त संपर्क माध्यम समय आने पर घोषित किए जाएंगे."
  }
},

zh: {
  headerLinks: { home: "首页", about: "关于我们", contact: "联系我们", blog: "博客" },
  footerLinks: { disclaimer:"免责声明", terms:"使用条款", privacy:"隐私政策", cookies:"Cookie 政策", sitemap:"网站地图", faq:"常见问题" },
  contact: {
    title: "联系我们",
    p1: "如果您对 Forecastler 平台有任何问题、建议或反馈，欢迎随时与我们联系。您的意见十分宝贵，有助于我们改进服务。",
    p2: "Forecastler 团队",
    p4: "关注我们：",
    p5: "",
    p6: "说明：官方地址和其他联系方式将适时公布。"
  }
},

ja: {
  headerLinks: { home: "ホーム", about: "私たちについて", contact: "お問い合わせ", blog: "ブログ" },
  footerLinks: { disclaimer:"免責事項", terms:"利用規約", privacy:"プライバシーポリシー", cookies:"クッキーポリシー", sitemap:"サイトマップ", faq:"よくある質問" },
  contact: {
    title: "お問い合わせ",
    p1: "Forecastler プラットフォームに関するご質問・ご提案・ご意見がございましたら、いつでもお気軽にご連絡ください。皆さまからの声は貴重で、サービス向上に役立ちます。",
    p2: "Forecastler チーム",
    p4: "フォローしてください：",
    p5: "",
    p6: "注：公式アドレスおよび追加の連絡チャネルは追って告知します。"
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

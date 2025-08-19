let trenutniJezik = "en";

const translations = {
  sr: {
    headerLinks: {
      home: "Početna",
      about: "O nama",
      contact: "Kontakt",
      blog: "Blog"
    },

    howTitle: "Kako funkcioniše Forecastler?",
    howText1: "Forecastler za predviđanje ne koristi magiju, horoskope niti parapsihološke moći. Umesto toga, zasniva se na veštačkoj inteligenciji koja procenjuje verovatnoću budućih događaja pomoću stvarnih podataka, statistike i matematičkih modela.",
    howText2: "Kada postavite pitanje, sistem najpre analizira tekstualne informacije koje ste uneli — uključujući kontekst, relevantne detalje, ključne pojmove i moguće uzročno-posledične veze.",
    howText3: "Zatim te podatke kombinuje sa sopstvenom bazom znanja, koja sadrži obrasce ponašanja, istorijske događaje, društvene i ekonomske trendove i aktuelna naučna saznanja.",
    howText4: "Na osnovu svega toga, veštačka inteligencija simulira moguće ishode i izračunava verovatnoću da se određeni događaj zaista desi.",
    howText5: "Ako je ta verovatnoća veća od 50%, odgovor glasi DA. Ako je manja, odgovor je NE.",

    disclaimerTitle: "Odricanje od odgovornosti",
    disclaimerText: "Forecastler ne garantuje tačnost, potpunost ili pouzdanost odgovora generisanih veštačkom inteligencijom i ne snosi odgovornost za bilo kakve posledice, štete ili gubitke nastale njihovim korišćenjem, uključujući i posledice zlonamerne ili neovlašćene upotrebe od strane korisnika ili trećih lica.",
  },


// Primeni mapu na postojeći objekat prevoda
for (const [lang, links] of Object.entries(footerLinksMap)) {
  translations[lang] = translations[lang] || {};
  translations[lang].footerLinks = links;
}

function setLanguage(lang) {
  localStorage.setItem('forecastlerLang', lang);
  if (!translations[lang]) return;

  trenutniJezik = lang;
  const t = translations[lang];

  document.getElementById("title").innerText = t.title;
  document.getElementById("welcome-text").innerText = t.welcomeText;
  document.getElementById("context-label").innerText = t.contextLabel;
  document.getElementById("question-label").innerText = t.questionLabel;
  document.getElementById("how-title").innerText = t.howTitle;
  document.getElementById("how-text-1").innerText = t.howText1;
  document.getElementById("how-text-2").innerText = t.howText2;
  document.getElementById("how-text-3").innerText = t.howText3;
  document.getElementById("how-text-4").innerText = t.howText4;
  document.getElementById("how-text-5").innerHTML = t.howText5;
  document.getElementById("how-text-6").innerText = t.howText6;
  document.getElementById("use-title").innerText = t.useTitle;

  const useList = document.getElementById("use-list");
  useList.innerHTML = "";
  t.useList.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    useList.appendChild(li);
  });

  document.getElementById("use-note").innerText = t.useNote;
  document.getElementById("faq-title").innerText = t.faqTitle;
  document.getElementById("faq-text").innerText = t.faqText;

  const faqList = document.getElementById("faq-list");
  faqList.innerHTML = "";
  t.faqList.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    faqList.appendChild(li);
  });

  const disTitleEl = document.getElementById("disclaimer-title");
  if (disTitleEl) disTitleEl.textContent = t.disclaimerTitle;

  const disTextEl = document.getElementById("disclaimer-text");
  if (disTextEl) disTextEl.textContent = t.disclaimerText;

  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  if (typeof applyRuntimeTranslations === "function") {
    applyRuntimeTranslations();
  }

   // Footer links
   const fl = t.footerLinks || translations.en.footerLinks;
   const elDisc = document.getElementById("link-disclaimer");
   const elTerms = document.getElementById("link-terms");
   const elPriv  = document.getElementById("link-privacy");
   const elCook  = document.getElementById("link-cookies");
   const elMap   = document.getElementById("link-sitemap");
   const elFaq   = document.getElementById("link-faq");

   if (elDisc) elDisc.textContent = fl.disclaimer;
   if (elTerms) elTerms.textContent = fl.terms;
   if (elPriv)  elPriv.textContent  = fl.privacy;
   if (elCook)  elCook.textContent  = fl.cookies;
   if (elMap)   elMap.textContent   = fl.sitemap;
   if (elFaq)   elFaq.textContent   = fl.faq;
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("forecastlerLang") || "en";
  trenutniJezik = lang;
  setLanguage(lang);
});

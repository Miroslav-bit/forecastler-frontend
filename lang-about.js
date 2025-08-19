// lang-about.js (čista verzija samo za about.html)
let trenutniJezik = localStorage.getItem('forecastlerLang') || 'en';

const translations = {
  en: {
    headerLinks: { home: "Home", about: "About Us", contact: "Contact", blog: "Blog" },
    footerLinks: { disclaimer:"Disclaimer", terms:"Terms of Use", privacy:"Privacy Policy", cookies:"Cookie Policy", sitemap:"Sitemap", faq:"FAQ" },
    how: {
      title: "Predicting the Future",
      p1: "People have always wanted to peek into their own future—to reduce uncertainty, make better decisions, and protect what matters to them. Throughout history there have been many attempts to predict outcomes: from palm reading and casting lots or bones, to seers and prophets, and to the astrological systems of the modern era.",
      p2: "Although culturally and symbolically significant, these methods were limited in accuracy and verifiability. The scientific approach starts with cause and effect: if all relevant parameters are known and governed by stable laws, an outcome can be estimated—and sometimes calculated—with high precision.",
      p3: "Weather forecasting is a classic example: with sound measurements, models, and mathematics, good data yields useful predictions. In the real world, however, we rarely have complete data; systems are complex and sensitive to initial conditions, so it is more practical to speak in terms of probability rather than certainty.",
      p4: "In the philosophy of science, there is the metaphor of Laplace’s demon—an ideal intellect that, if it knew the position and velocity of every particle in the universe, could compute both the past and the future. In practice, such complete knowledge does not exist.",
      p5: "Even so, the idea highlights a key point: the more complete and higher-quality our data, the more reliable the forecasts. This is where modern artificial intelligence is useful—as a tool that rapidly integrates large volumes of information and provides probability estimates of future outcomes."
    },
    work: {
      title: "How Forecastler Works",
      p1: "<strong>Forecastler</strong> uses artificial intelligence as a contemporary approach to prediction, making it one of the pioneering attempts to produce individual forecasts in a transparent, understandable, and statistically grounded way.",
      p2: "<strong>1) User input:</strong> You enter information about the subject whose future interests you (a person, object, location, event, etc.) and ask a question that permits a binary answer (YES/NO).",
      p3: "<strong>2) Data processing:</strong> The AI treats your information as variables in a model, links them to its knowledge base and relevant statistics, and applies rules of reasoning and mathematical methods.",
      p4: "<strong>3) Probability estimate:</strong> Based on the processed data, the system returns a YES/NO answer together with a probability (in percent). Wherever possible, it relies on statistical reasoning and scientifically grounded patterns.",
      p5: "<strong>4) Input quality = output quality:</strong> If the input contains little or unclear information, the AI relies more on general averages and broad patterns. The more detail you provide, the narrower the range of possible outcomes and the more precise the forecast becomes.",
      p6: "<strong>5) Limitations:</strong> The AI can be wrong—especially when inputs are sparse or contradictory, or when events depend on many unpredictable factors. Forecastler does not claim to know the future; it estimates probabilities based on the data available.",
      p7: "<strong>Note:</strong> Forecastler does not provide medical, financial, or legal advice. Treat the results as decision support, not as guaranteed outcomes."
    },
    dev: {
      title: "The Development of Forecastler",
      p1: "Forecastler, as a platform and interface for AI-assisted prediction, has been under development since <strong>December 2024</strong> in <strong>Subotica, Republic of Serbia</strong>. The project was officially launched on <strong>June 17, 2025</strong>, and continues to evolve through iterative development.",
      p2: "Behind Forecastler stands the <strong>Forecastler team</strong> from Subotica—a blend of engineering, analytical, and design experience with a shared mission: to make forecasts clear, useful, and fair for users.",
      p3: "<strong>Planned improvements:</strong> Feature expansions (more question types, additional output indicators, more flexible response formats).",
      p4: "Algorithmic enhancements (better fusion of contextual information and statistics; more robust estimates with less input data).",
      p5: "Interface optimization (quicker input, clearer guidance for high-quality inputs, improved accessibility).",
      p6: "Greater transparency (clearer explanations of why an estimate is what it is, where the model’s limits are, and how to improve your input).",
      p7: "We believe the future should not be an enigma but an informed set of probabilities anyone can understand. If you share that vision, you’re welcome to ask, test, and suggest—because Forecastler grows alongside its community of users."
    }
  },

  sr: {
    headerLinks: { home: "Početna", about: "O nama", contact: "Kontakt", blog: "Blog" },
    footerLinks: { disclaimer:"Odricanje od odgovornosti", terms:"Uslovi korišćenja", privacy:"Politika privatnosti", cookies:"Politika kolačića", sitemap:"Mapa sajta", faq:"FAQ" },
    how: {
      title: "Predviđanje budućnosti",
      p1: "Ljudi oduvek žele da zavire u sopstvenu budućnost — da smanje neizvesnost, donose bolje odluke i zaštite ono što im je važno. Kroz istoriju su postojali mnogi pokušaji da se predvide ishodi: od gledanja u dlan i bacanja kockica ili kostiju, preko vračeva i proroka, do astroloških sistema modernog doba.",
      p2: "Iako kulturno i simbolički značajne, te metode imaju ograničenu tačnost i proverljivost. Naučni pristup polazi od uzroka i posledice: ako su svi relevantni parametri poznati i potčinjeni stabilnim zakonima, ishod se može proceniti — ponekad i izračunati — sa visokom preciznošću.",
      p3: "Vremenska prognoza je klasičan primer: uz kvalitetna merenja, modele i matematiku, dobri podaci daju korisna predviđanja. Međutim, u stvarnosti retko imamo potpune podatke; sistemi su složeni i osetljivi na početne uslove, pa je praktičnije govoriti o verovatnoći nego o sigurnosti.",
      p4: "U filozofiji nauke postoji metafora Laplasovog demona — idealan intelekt koji bi, kad bi znao položaj i brzinu svake čestice u univerzumu, mogao da izračuna i prošlost i budućnost. U praksi, takvo potpuno znanje ne postoji.",
      p5: "Ipak, ideja ističe ključnu poentu: što su podaci potpuniji i kvalitetniji, to su prognoze pouzdanije. Tu je moderna veštačka inteligencija korisna — kao alat koji brzo integriše velike količine informacija i daje procene verovatnoće budućih ishoda."
    },
    work: {
      title: "Kako funkcioniše Forecastler",
      p1: "<strong>Forecastler</strong> koristi veštačku inteligenciju kao savremeni pristup predviđanju i predstavlja jedan od pionirskih pokušaja da se pojedinačne prognoze daju na transparentan, razumljiv i statistički utemeljen način.",
      p2: "<strong>1) Unos korisnika:</strong> Unosiš informacije o subjektu čija te budućnost zanima (osoba, predmet, lokacija, događaj itd.) i postavljaš pitanje koje dozvoljava binaran odgovor (DA/NE).",
      p3: "<strong>2) Obrada podataka:</strong> AI tretira tvoje informacije kao promenljive u modelu, povezuje ih sa sopstvenom bazom znanja i relevantnom statistikom i primenjuje pravila zaključivanja i matematičke metode.",
      p4: "<strong>3) Procena verovatnoće:</strong> Na osnovu obrađenih podataka, sistem vraća odgovor DA/NE zajedno sa verovatnoćom (u procentima). Gde god je moguće, oslanja se na statističko rezonovanje i naučno utemeljene obrasce.",
      p5: "<strong>4) Kvalitet ulaza = kvalitet izlaza:</strong> Ako je ulaz siromašan ili nejasan, AI se više oslanja na opšte proseke i široke obrasce. Što daš više detalja, to je raspon mogućih ishoda uži i prognoza preciznija.",
      p6: "<strong>5) Ograničenja:</strong> AI može pogrešiti — naročito kad su ulazi oskudni ili kontradiktorni, ili kad ishod zavisi od nepredvidivih faktora. Forecastler ne tvrdi da zna budućnost; procenjuje verovatnoće na osnovu dostupnih podataka.",
      p7: "<strong>Napomena:</strong> Forecastler ne pruža medicinski, finansijski ili pravni savet. Rezultate koristi kao podršku odlučivanju, ne kao garantovane ishode."
    },
    dev: {
      title: "Razvoj platforme Forecastler",
      p1: "Forecastler, kao platforma i interfejs za predviđanja uz pomoć veštačke inteligencije, razvija se od <strong>decembra 2024.</strong> u <strong>Subotici, Republika Srbija</strong>. Projekat je zvanično pokrenut <strong>17. juna 2025.</strong> i nastavlja da se razvija iterativno.",
      p2: "Iza Forecastlera stoji <strong>Forecastler tim</strong> iz Subotice — spoj inženjerskog, analitičkog i dizajn iskustva sa zajedničkom misijom da prognoze budu jasne, korisne i fer za korisnike.",
      p3: "<strong>Planirana unapređenja:</strong> širenje funkcija (više tipova pitanja, dodatni indikatori, fleksibilniji formati odgovora).",
      p4: "Poboljšanja algoritama (bolje spajanje konteksta i statistike; robusnije procene uz manje ulaznih podataka).",
      p5: "Optimizacija interfejsa (brži unos, jasnije smernice za kvalitetan unos, bolja pristupačnost).",
      p6: "Veća transparentnost (jasnije objašnjenje zašto je procena takva, gde su granice modela i kako da poboljšaš unos).",
      p7: "Verujemo da budućnost ne treba da bude enigma, već skup informisanih verovatnoća. Ako deliš tu viziju, pitaj, testiraj i predlaži — jer Forecastler raste zajedno sa svojom zajednicom."
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

  // HOW
  setTxt ("how-title",  t.how.title);
  setTxt ("how-text-1", t.how.p1);
  setTxt ("how-text-2", t.how.p2);
  setTxt ("how-text-3", t.how.p3);
  setTxt ("how-text-4", t.how.p4);
  setTxt ("how-text-5", t.how.p5);

  // WORK (ima <strong>)
  setTxt ("work-title",  t.work.title);
  setHTML("work-text-1", t.work.p1);
  setHTML("work-text-2", t.work.p2);
  setHTML("work-text-3", t.work.p3);
  setHTML("work-text-4", t.work.p4);
  setHTML("work-text-5", t.work.p5);
  setHTML("work-text-6", t.work.p6);
  setHTML("work-text-7", t.work.p7);

  // DEV (takođe ima <strong>)
  setTxt ("dev-title",  t.dev.title);
  setHTML("dev-text-1", t.dev.p1);
  setHTML("dev-text-2", t.dev.p2);
  setHTML("dev-text-3", t.dev.p3);
  setHTML("dev-text-4", t.dev.p4);
  setHTML("dev-text-5", t.dev.p5);
  setHTML("dev-text-6", t.dev.p6);
  setHTML("dev-text-7", t.dev.p7);

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

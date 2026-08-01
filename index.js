const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    const clickedInsideNav = nav.contains(e.target);
    const clickedBurger = burger.contains(e.target);

    if (!clickedInsideNav && !clickedBurger) {
      nav.classList.remove("active");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 800) {
      nav.classList.remove("active");
    }
  });
}

const sliderJs = new Swiper(".slider-js", {
  loop: true,
  speed: 3500,
  spaceBetween: 30,

  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
});

const cookie = document.getElementById("cookieModal");
const privacy = document.getElementById("privacyModal");
const terms = document.getElementById("termsModal");
const customBtn = document.getElementById("custom");
const customText = document.getElementById("customText");
const checkbox = document.getElementById("analytics");
const valikuline = document.getElementById("valikulineText");

const accept = document.getElementById("accept");
const reject = document.getElementById("reject");

const privacyAccept = document.getElementById("privacyAccept");
const privacyReject = document.getElementById("privacyReject");

const termsAccept = document.getElementById("termsAccept");
const termsReject = document.getElementById("termsReject");

const saved = localStorage.getItem("cookieConsent");

if (cookie) {
  cookie.style.display = saved ? "none" : "flex";
}
if (privacy) privacy.style.display = "none";
if (terms) terms.style.display = "none";

if (accept) {
  accept.addEventListener("click", () => saveConsent(true));
}

if (reject) {
  reject.addEventListener("click", () => saveConsent(false));
}

if (privacyAccept) {
  privacyAccept.addEventListener("click", () => {
    saveAgreement("privacy");
    closeModal("privacyModal");
  });
}
if (privacyReject) {
  privacyReject.addEventListener("click", () => {
    closeModal("privacyModal");
  });
}

if (termsAccept) {
  termsAccept.addEventListener("click", () => {
    saveAgreement("terms");
    closeModal("termsModal");
  });
}

if (termsReject) {
  termsReject.addEventListener("click", () => {
    closeModal("termsModal");
  });
}

if (customBtn && customText) {
  customBtn.addEventListener("click", () => {
    customText.classList.toggle("hidden");
  });
}

if (checkbox && valikuline) {
  checkbox.addEventListener("change", () => {
    valikuline.classList.toggle("active", checkbox.checked);
  });
}

function saveConsent(value) {
  localStorage.setItem("cookieConsent", JSON.stringify({ analytics: value }));

  if (cookie) cookie.style.display = "none";
}
function saveAgreement(type) {
  const saved = JSON.parse(localStorage.getItem("agreements")) || {};

  saved[type] = {
    accepted: true,
    timestamp: Date.now(),
  };

  localStorage.setItem("agreements", JSON.stringify(saved));
}

window.closeModal = function (id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = "none";
};

window.openModal = function (id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  const agreements = JSON.parse(localStorage.getItem("agreements") || "{}");

  modal.style.display = "flex";
};

const translations = {
  en: {
    title: "Koodiorav | Web Development for Businesses",
    solutions: "Solutions",
    worths: "Values",
    process: "Process",
    contact: "Contact",
    "hero-txt": "Websites and web solutions that",
    "hero-txt-2": "bring inquiries",
    "hero-sub": "We help businesses get",
    "hero-sub-span": "more clients",
    "hero-sub-span-2": "through fast and",
    "hero-sub-span-3": "well-designed",
    "hero-sbu-span-4": "websites",
    "hero-offer": "Request a quote",
    "hero-trust-txt": "✔ We reply within 24h",
    "hero-trust-txt-2": "✔ Initial consultation is free",
    "hero-trust-txt-3": "✔ No-obligation quote",
    "popular-txt": "Popular solutions",
    "single-pager": "One-page website",
    "page-check": "View website",
    "single-page-li": "Perfect if you need a simple and fast web solution",
    "single-page-li-2": "All information on one page - convenient for visitors",
    "single-page-li-3": "Great for startups and smaller businesses",
    "multi-pager": "Multi-page website",
    "multi-page-li": "Ideal when you have multiple services or more content",
    "multi-page-li-2": "Separate pages make navigation easier",
    "multi-page-li-3": "A great choice for growing businesses",
    reservation: "Booking systems",
    "reservation-li": "Customers can book appointments anytime",
    "reservation-li-2": "Reduces phone calls and manual work",
    "reservation-li-3": "Automatic reminders reduce cancellations",
    shop: "Online stores",
    "shop-li": "Sell your products online 24/7",
    "shop-li-2": "Easy product and order management in one place",
    "shop-li-3": "Built to grow together with your business",
    "all-solutions": "All solutions",
    "choose-us": "Why choose us?",
    results: "Results first",
    "results-sub":
      "We build websites designed to generate inquiries and sales - not just look good.",
    fast: "Fast and flexible",
    "fast-sub":
      "We deliver on time, respond quickly, and make collaboration easy.",
    trust: "Reliable",
    "trust-sub":
      "Clear communication, transparent process, and high-quality work.",
    seo: "SEO and performance",
    "seo-sub":
      "Technically optimized, fast, and search-engine friendly - more visibility, more visitors.",
    proccess: "How does the collaboration work?",
    "proccess-title": "Understanding your goals",
    "proccess-sub": "We identify what you actually need",
    "proccess-title-2": "Planning and design",
    "proccess-sub-2":
      "We create a clear plan and visual direction that supports your goals.",
    "proccess-title-3": "Development",
    "proccess-sub-3": "We build a fast and functional solution",
    "proccess-title-4": "Launch and support",
    "proccess-sub-4":
      "We launch the website and continue supporting you afterwards",
    "cta-ready": "Ready to get more inquiries? Request a quote",
    "cta-read-sub":
      "Let’s discuss your project and find the best solution for your business.",
    answer: "We reply within 24h",
    consult: "Initial consultation is free",
    quote: "No-obligation quote",
    name: "Name",
    email: "Your Email",
    field: "Industry",
    message: "Write your message here...",
    "send-message": "Send message",
    "footer-txt": "Simple and effective web solutions.",
    links: "Links",
    "foot-solutions": "Solutions",
    "foot-worths": "Values",
    "foot-proccess": "Process",
    "foot-contact": "Contact",
    info: "Info",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    social: "Social media",
    location: "Tartu, Estonia",
    "footer-sub": "© 2026 KoodiOrav. All rights reserved.",
    "terms-box-title": "Terms of Use",
    "terms-box-sub": "By using this website, you agree to the following terms.",
    "terms-box-sub-2":
      "All content on this website is informative and may not be copied without permission.",
    "terms-box-sub-3":
      "We are not responsible for damages caused by the use of this website.",
    "terms-box-sub-4":
      "We may change the content and terms at any time without prior notice.",
    accept: "Accept",
    decline: "Decline",
    "privacy-policy-title": "Privacy Policy",
    "privacy-policy-sub": "We respect your privacy.",
    "privacy-policy-sub-2":
      "This website does not collect your personal data unless you provide it voluntarily (e.g. through the contact form).",
    "privacy-policy-sub-3":
      "If you send us a message, your data will only be used to reply and will not be shared with third parties.",
    "privacy-policy-sub-4":
      "We do not use tracking software or sell your data.",
    "cookie-box-title": "We use cookies on our website",
    "cookie-box-sub":
      "Koodiorav uses cookies to ensure website functionality, improve performance, and provide a better browsing experience.",
    "cookie-box-sub-2":
      "You can choose which cookies you allow. Necessary cookies are always active, while optional cookies are only used with your consent.",
    "cookie-box-nec":
      "Necessary cookies: Required for website functionality and stored automatically. Always active.",
    "cookie-box-opt":
      "Optional cookies: Help analyze website usage and provide relevant content and advertisements. Used only with your consent.",
    "cookie-box-let": "Allow analytics cookies",
    customize: "Customize",
    also: "What We Also Offer",
    content: "🌐 Content & Marketing Pages",
    product: "Product pages",
    landing: "Landing pages",
    campaign: "Campaign pages",
    apps: "⚙️ Applications & Automation",
    "ai-solution": "AI solutions",
    "web-app": "Web applications",
    "mobile-app": "Mobile applications",
    automated: "Automated tools",
    optimization: "📈 SEO & Optimization",
    "seo-optimization": "SEO optimization",
    technical: "Technical audit",
    "google-search": "Google Search Console setup",
    design: "🎨 Design",
    "ui-ux": "UX/UI design",
    logos: "Logos",
    "business-cards": "Business cards",
    brochures: "Brochures",
    "product-page": "Product page",
    "open-project": "Open project ↗",
    "landing-page": "Landing page",
    "campaign-page": "Campaign page",
    "dentest-clinic": "Dentest Dental Clinic",
    "booking-system": "Booking system",
    business: "Business website",
    "automated-customer": "Automated customer support",
  },
  et: {
    title: "Koodiorav | Veebiarendus ettevõtetele",
    solutions: "Lahendused",
    worths: "Väärtused",
    process: "Protsess",
    contact: "Kontakt",
    "hero-txt": "Kodulehed ja veebilahendused, mis",
    "hero-txt-2": "toovad päringuid",
    "hero-sub": "Aitame ettevõtetel saada",
    "hero-sub-span": "rohkem kliente",
    "hero-sub-span-2": "läbi kiirete ja",
    "hero-sub-span-3": "läbimõeldud",
    "hero-sbu-span-4": "veebilehtede",
    "hero-offer": "Küsi pakkumist",
    "hero-trust-txt": "✔ Vastame 24h jooksul",
    "hero-trust-txt-2": "✔ Esmane konsultatsioon tasuta",
    "hero-trust-txt-3": "✔ Hinnapakkumine ilma kohustuseta",
    "popular-txt": "Populaarsed lahendused",
    "single-pager": "Üheleheküljeline veebileht",
    "page-check": "Vaata lehte",
    "single-page-li": "Kui vajad lihtsat ja kiiret veebilahendust",
    "single-page-li-2": "Kogu info ühel lehel - mugav külastajale",
    "single-page-li-3": "Sobib hästi alustavale või väiksemale ettevõttele",
    "multi-pager": "Mitmeleheküljeline veebileht",
    "multi-page-li": "Kui on mitu teenust või rohkem sisu",
    "multi-page-li-2": "Info eraldi lehtedele - lihtsam navigeerida",
    "multi-page-li-3": "Hea valik kasvavale ettevõttele",
    reservation: "Broneerimissüsteemid",
    "reservation-li": "Kliendid saavad broneerida aega igal ajal",
    "reservation-li-2": "Vähendab telefonikõnesid ja käsitööd",
    "reservation-li-3": "Automaatsed meeldetuletused vähendavad tühistamisi",
    shop: "E-poed",
    "shop-li": "Müü oma tooteid internetis ööpäevaringselt",
    "shop-li-2": "Lihtne toodete ja tellimuste haldus ühes kohas",
    "shop-li-3": "Valmis kasvama koos sinu äriga",
    "all-solutions": "Kõik lahendused",
    "choose-us": "Miks valida meid?",
    results: "Tulemus esikohal",
    "results-sub":
      "Loome veebilehti, mis on ehitatud päringute ja müügi toomiseks - mitte lihtsalt ilusaks olemiseks.",
    fast: "Kiire ja paindlik",
    "fast-sub":
      " Valmime kokkulepitud ajaks. Reageerime kiiresti ja teeme koostöö lihtsaks.",
    trust: "Usaldusväärne",
    "trust-sub":
      " Selge kommunikatsioon, läbipaistev protsess ja kvaliteetne töö.",
    seo: "SEO ja jõudlus",
    "seo-sub":
      " Tehniliselt korras, kiire ja otsingumootoritele optimeeritud - rohkem nähtavust, rohkem külastajaid.",
    proccess: "Kuidas koostöö käib?",
    "proccess-title": "Selgitame eesmärgi",
    "proccess-sub": "Selgitame välja, mida sul päriselt vaja on",
    "proccess-title-2": "Planeerime ja disainime",
    "proccess-sub-2":
      "Paneme paika selge plaani ja visuaali, mis toetab sinu eesmärke.",
    "proccess-title-3": "Arendame",
    "proccess-sub-3": "Loome kiire ja toimiva lahenduse",
    "proccess-title-4": "Käivitame ja toetame",
    "proccess-sub-4": "Paneme lehe tööle ja aitame ka pärast valmimist",
    "cta-ready": "Valmis rohkem päringuid saama? Küsi pakkumist",
    "cta-read-sub":
      "Räägime sinu projektist ja leiame parima lahenduse just sinu ärile.",
    answer: "Vastame 24h jooksul",
    consult: "Esmane konsultatsioon tasuta",
    quote: "Hinnapakkumine ilma kohustuseta",
    name: "Nimi",
    email: "Sinu E-post",
    field: "Valdkond",
    message: "Kirjuta siia...",
    "send-message": "Saada sõnum",
    "footer-txt": "Lihtsad ja toimivad veebilahendused.",
    links: "Lingid",
    "foot-solutions": "Lahendused",
    "foot-worths": "Väärtused",
    "foot-proccess": "Protsess",
    "foot-contact": "Kontakt",
    info: "Info",
    privacy: "Privaatsus",
    terms: "Tingimused",
    cookies: "Küpsised",
    social: "Sotsiaalmeedia",
    location: "Tartu, Estonia",
    "footer-sub": "© 2026 KoodiOrav. Kõik õigused kaitstud.",
    "terms-box-title": "Kasutustingimused",
    "terms-box-sub":
      "Seda veebilehte kasutades nõustud allolevate tingimustega.",
    "terms-box-sub-2":
      "Kogu sisu sellel lehel on informatiivne ning seda ei tohi kopeerida ilma loata.",
    "terms-box-sub-3":
      "Me ei vastuta kahjude eest, mis võivad tekkida selle veebilehe kasutamisest.",
    "terms-box-sub-4":
      "Me võime muuta sisu ja tingimusi igal ajal ilma ette teatamata.",
    accept: "Nõustu",
    decline: "Keeldu",
    "privacy-policy-title": "Privaatsuspoliitika",
    "privacy-policy-sub": "Me austame sinu privaatsust.",
    "privacy-policy-sub-2":
      "See veebileht ei kogu sinu isikuandmeid, välja arvatud juhul kui sa ise need meile edastad (nt kontaktvormi kaudu).",
    "privacy-policy-sub-3":
      "Kui sa saadad meile sõnumi, kasutatakse sinu andmeid ainult vastamiseks ning neid ei jagata kolmandatele osapooltele.",
    "privacy-policy-sub-4":
      "Me ei kasuta jälgimistarkvara ega müü sinu andmeid.",
    "cookie-box-title": "Kasutame veebilehel küpsiseid",
    "cookie-box-sub":
      "Koodiorav kasutab oma veebilehel küpsiseid, et tagada veebilehe toimivus, parandada selle jõudlust ning pakkuda sulle paremat sirvimiskogemust.",
    "cookie-box-sub-2":
      "Sa saad valida, milliste küpsiste kasutamiseks nõusoleku annad. Vajalikud küpsised on alati aktiivsed, kuid valikuliste küpsiste kasutamine toimub ainult sinu nõusolekul.",
    "cookie-box-nec":
      "Vajalikud küpsised: Hädavajalikud saidi toimimiseks ja salvestatakse automaatselt. Alati aktiivne",
    "cookie-box-opt":
      "Valikulised küpsised: Analüüsivad saidi kasutust ja aitavad pakkuda asjakohast sisu ning reklaame. Neid kasutame vaid teie nõusolekul.",
    "cookie-box-let": "Luba analüütika küpsised",
    customize: "Nõustu kõigiga",
    also: "Pakume lisaks ka",
    content: "🌐 Sisu- ja turunduslehed",
    product: "Tootelehed",
    landing: "Maandumislehed",
    campaign: "Kampaanialehed",
    apps: "⚙️ Rakendused ja automatiseerimine",
    "ai-solution": "AI lahendused",
    "web-app": "Veebirakendused",
    "mobile-app": "Mobiilirakendused",
    automated: "Automatiseeritud tööriistad",
    optimization: "📈 SEO ja optimeerimine",
    "seo-optimization": "SEO optimeerimine",
    technical: "Tehniline audit",
    "google-search": "Google Search Console",
    design: "🎨 Disain",
    "ui-ux": "UX/UI disain",
    logos: "Logod",
    "business-cards": "Visiitkaardid",
    brochures: "Brošüürid",
    "product-page": "Tooteleht",
    "open-project": "Ava leht ↗",
    "landing-page": "Maandumisleht",
    "campaign-page": "Kampaanialeht",
    "dentest-clinic": "Dentest hambakliinik",
    "booking-system": "Broneerimissüsteem",
    business: "Äriveeb",
    "automated-customer": "Automaatne klienditugi",
  },
};

let currentLang = "et";

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.classList.contains("total")) return;

    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = translations[lang][key];
  });
}

const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const messageOverlay = document.getElementById("messageOverlay");

document.body.appendChild(messageOverlay);
document.body.appendChild(messageBox);

function showMessage(text, isError = false) {
  document.body.style.overflow = "hidden";
  messageText.innerHTML = text;

  if (isError) {
    messageBox.classList.add("error");
  } else {
    messageBox.classList.remove("error");
  }

  messageBox.style.display = "block";
  messageOverlay.style.display = "block";

  setTimeout(() => {
    messageBox.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 100);
}

function closeMessage() {
  messageBox.style.display = "none";
  messageOverlay.style.display = "none";
  document.body.style.overflow = "";
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        showMessage(
          "✔️ Sinu sõnum on edukalt saadetud.<br>Võtame Sinuga esimesel võimalusel ühendust.<br>Aitäh!",
        );
        form.reset();
      } else {
        showMessage(
          "❌ Sõnumi saatmine ebaõnnestus. Palun proovi uuesti.",
          true,
        );
      }
    })
    .catch(() => {
      showMessage("❌ Võrguviga. Kontrolli internetiühendust.", true);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

const subject = encodeURIComponent("Veebilahenduse hinnapäring");

const body = encodeURIComponent(`Tere,

Soovin küsida hinnapakkumist veebilahenduse ja teenuste kohta.

Mind huvitavad järgmised lahendused:

-

Palun andke teada, millist lisainfot vajate pakkumise koostamiseks ning milline võiks olla tööde ajakava.

Parimate soovidega`);

const offerButton = document.querySelector(".hero-cta-btn");

if (offerButton) {
  offerButton.href = `mailto:info.koodiorav@gmail.com?subject=${subject}&body=${body}`;
}

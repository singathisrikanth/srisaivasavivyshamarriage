const btnEn = document.getElementById("btn-en");
const btnTe = document.getElementById("btn-te");

let currentLang = "en";

/* ---------- LANGUAGE SWITCH ---------- */
function setLang(lang){
  currentLang = lang;

  document.querySelectorAll("[data-en]").forEach(el=>{
    el.innerText = el.getAttribute("data-" + lang);
  });

  document.querySelectorAll("[data-en-placeholder]").forEach(el=>{
    el.placeholder = el.getAttribute("data-" + lang + "-placeholder");
  });

  document.querySelectorAll("option[data-en]").forEach(opt=>{
    opt.text = opt.getAttribute("data-" + lang);
  });

  btnEn.classList.remove("active");
  btnTe.classList.remove("active");
  (lang === "en" ? btnEn : btnTe).classList.add("active");
}

setLang("en");

/* ---------- MOBILE INPUT FILTER ---------- */
document.getElementById("phone").addEventListener("input", e => {
  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
});

/* ---------- WHATSAPP SEND ---------- */
function sendWhatsApp(event){
  event.preventDefault();

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const looking = document.getElementById("looking").value;
  const message = document.getElementById("msg").value.trim();

  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");

  nameError.textContent = "";
  phoneError.textContent = "";

  const messages = {
    en:{
      name:"Please enter your name",
      phone:"Please enter a valid 10-digit mobile number"
    },
    te:{
      name:"దయచేసి మీ పేరును నమోదు చేయండి",
      phone:"దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి"
    }
  };

  let valid = true;

  if(name.value.trim() === ""){
    nameError.textContent = messages[currentLang].name;
    valid = false;
  }

  if(!/^[6-9]\d{9}$/.test(phone.value.trim())){
    phoneError.textContent = messages[currentLang].phone;
    valid = false;
  }

  if(!valid) return;

  const whatsappNumber = "919849696766";

  const text =
`Sri Sai Vasavi Vysha Marriage Matrimony
Sri Vellanki Laxman
Founder & Matchmaker

📍 Warangal, Telangana

New Enquiry:
Name: ${name.value}
Mobile: ${phone.value}
Looking For: ${looking}
Message: ${message || "N/A"}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}


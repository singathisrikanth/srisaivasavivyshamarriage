const btnEn = document.getElementById("btn-en");
const btnTe = document.getElementById("btn-te");

function setLang(lang){

  // Normal text
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.innerText = el.getAttribute("data-" + lang);
  });

  // Placeholders
  document.querySelectorAll("[data-en-placeholder]").forEach(el=>{
    el.placeholder = el.getAttribute("data-" + lang + "-placeholder");
  });

  // Select options
  document.querySelectorAll("option[data-en]").forEach(opt=>{
    opt.text = opt.getAttribute("data-" + lang);
  });

  // Active button style
  btnEn.classList.remove("active");
  btnTe.classList.remove("active");
  (lang === "en" ? btnEn : btnTe).classList.add("active");
}

// Default language
setLang("en");

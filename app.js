const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
let li = document.querySelectorAll(".faq-text li");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


//faq js

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e) => {
    let clickedLi;
    if (e.target.classList.contains("question-arrow")) {
      clickedLi = e.target.parentElement;
    } else {
      clickedLi = e.target.parentElement.parentElement;
    }
    clickedLi.classList.toggle("showAnswer");
  });
}
//footer js
document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  const copyrightText = document.querySelector('.footer-copyright p');
  copyrightText.textContent = copyrightText.textContent.replace('2024', currentYear);
});




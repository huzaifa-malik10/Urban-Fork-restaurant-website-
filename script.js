const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
   navLinks.classList.toggle("active");
});

const sendBtn = document.querySelector(".send-btn");
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea');

if (sendBtn) {
   sendBtn.addEventListener("click", function () {
      if (nameInput.value === "") {
         nameInput.classList.add("shake");
      }
      if (emailInput.value === "") {
         emailInput.classList.add("shake");
      }
      if (messageInput.value === "") {
         messageInput.classList.add("shake");
      }
   });
}

const observer = new IntersectionObserver(function (entries) {
   entries.forEach(function (entry) {
      if (entry.isIntersecting)
         entry.target.classList.add("visible")
   });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(function (el) {
   observer.observe(el);
});
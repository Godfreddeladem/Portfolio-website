// Fade-in animation when scrolling
const elements = document.querySelectorAll('.fade-in');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

// Scroll-to-top button logic
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Loading animation
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
// Simple fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-content");
  hero.style.opacity = 0;
  hero.style.transition = "opacity 2s";
  setTimeout(() => {
    hero.style.opacity = 1;
  }, 500);
});



 // ===== Fade-in and Slide-in Animations =====
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show', 'visible');
        observer.unobserve(entry.target); // Stop re-checking once visible
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
});

// ===== Scroll-to-Top Button =====
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Page Loader =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// ===== Hero Fade-in on Page Load =====
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-content");
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transition = "opacity 2s ease-in";
    setTimeout(() => {
      hero.style.opacity = 1;
    }, 500);
  }
});
// PAGE FADE-IN EFFECT
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const url = new URL(link.href);
    if (url.origin === location.origin) {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        setTimeout(() => {
          window.location = link.href;
        }, 400);
      });
    }
  });
});
// ===== PROJECT MODAL FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-btn");

  const projects = {
    1: {
      title: "Brand Poster Design",
      desc: "This vibrant promotional poster was created for a new clothing line launch — highlighting brand identity and color balance.",
      img: "Images/ON black.png.jpg",
    },
    2: {
      title: "Logo Design",
      desc: "A minimalist luxury logo designed using geometric balance and strong typography to represent premium streetwear.",
      img: "Images/NEW BRAND .png",
    },
    3: {
      title: "Product Mockup",
      desc: "This AirPods mockup showcases Delboy’s Store products with a clean presentation and brand consistency.",
      img: "Images/On red.png.jpg",
    }
  };

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-project");
      modalImg.src = projects[id].img;
      modalTitle.textContent = projects[id].title;
      modalDesc.textContent = projects[id].desc;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

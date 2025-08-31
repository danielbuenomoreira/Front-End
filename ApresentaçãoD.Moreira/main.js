// Import Swiper styles
const swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    mousewheel: true,
    speed: 800,
  });
  
  function navigate(index) {
    const links = document.querySelectorAll(".Links li");
    links.forEach((link) => link.classList.remove("activeLink"));
    if (links[index]) {
      links[index].classList.add("activeLink");
    }
    swiper.slideTo(index);
  }
  
  // Ativa slide inicial ao carregar
  window.addEventListener("DOMContentLoaded", () => {
    navigate(0);
  });
  
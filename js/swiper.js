var swiper = new Swiper(".Swiper2", {
  slidesPerView: 3,
  spaceBetween: 4,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper = new Swiper('.swiper', {
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: 'auto',
  breakpoints: {
    700: {
      slidesPerView: 3
    }
  },
  freeMode: false,
  autoplay: {
    delay: 5000,
  },
  on: {
    click(event){
      swiper.slideTo(this.clickedIndex);
    },
  },
});

const testimonialSwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const latestArticlesSwiper = new Swiper(".latest_articles_swiper", {
  slidesPerView: 'auto',
  grabCursor: true,
  breakpoints: {
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
  freeMode: false,
  autoplay: {
    delay: 5000,
  },
  on: {
    click(event){
      swiper.slideTo(this.clickedIndex);
    },
  },

  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

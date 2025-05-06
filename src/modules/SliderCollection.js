import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

const rootSelector = '[data-js-slider]';

const sliderOptionsMap = {
  '.partners__slider': {
    slidesPerView: 'auto',
    spaceBetween: 0,
    allowTouchMove: true,
    navigation: {
      enabled: false,
    },
    breakpoints: {
      768: {
        navigation: {
          enabled: true,
        },
        slidesPerView: 'auto',
      },
      1023: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlides: false,
      },
    },
  },
  '.clients__slider': {
    slidesPerView: 'auto',
    spaceBetween: 0,
    allowTouchMove: true,
    navigation: {
      enabled: false,
    },
    breakpoints: {
      768: {
        navigation: {
          enabled: true,
        },
        slidesPerView: 'auto',
      },
      1023: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlides: false,
      },
    },
  },
  '.news__slider': {
    slidesPerView: 1,
    loop: false,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      enabled: false,
    },
    breakpoints: {
      769: {
        navigation: {
          enabled: true,
        },
      },
      1441: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        allowTouchMove: false,
      },
    },
  },
  '.services__slider': {
    slidesPerView: 1.35,
    slidesPerGroup: 1,
    spaceBetween: 10,
    centeredSlides: false,

    breakpoints: {
      400: {
        slidesPerView: 1.5,
      },

      480: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
  },
  '.services__slider-mobile': {
    enabled: true,
    allowTouchMove: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: false,
    breakpoints: {
      481: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },

      768: {
        spaceBetween: 0,
        enabled: false,
        slidesPerView: 'auto',
      },
    },
  },
};

class Slider {
  selectors = {
    root: rootSelector,
    navigation: '[data-js-slider-navigation]',
    prevButton: '[data-js-slider-prev-button]',
    nextButton: '[data-js-slider-next-button]',
    pagination: '[data-js-slider-pagination]',
  };

  defaultSliderParams = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      1441: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        allowTouchMove: false,
      },
    },
  };

  constructor(rootElement, customParams = {}) {
    this.rootElement = rootElement;
    this.params = {
      ...this.defaultSliderParams,
      ...customParams,
    };
    this.prevButtonElement = this.rootElement.querySelector(this.selectors.prevButton);
    this.nextButtonElement = this.rootElement.querySelector(this.selectors.nextButton);
    this.paginationElement = this.rootElement.querySelector(this.selectors.pagination);

    this.init();
  }

  init() {
    new Swiper(this.rootElement, {
      ...this.params,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: this.nextButtonElement,
        prevEl: this.prevButtonElement,
      },
    });
  }

  
}

class SliderCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      const matchedSelector = Object.keys(sliderOptionsMap).find((selector) => element.matches(selector));
      const customParams = matchedSelector ? sliderOptionsMap[matchedSelector] : {};
      new Slider(element, customParams);
    });
  }
}

export default SliderCollection;

import './choices.min.js';
import Choices from 'choices.js';

const rootSelector = '[data-js-select-custom]';

class SelectCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Choices(element);
    });
  }
}

export default SelectCollection;

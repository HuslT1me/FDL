const rootSelector = '[data-js-modal]';

class Modal {
  selectors = {
    root: rootSelector,
    trigger: '[data-js-modal-trigger]',
    buttonClose: '[data-js-modal-close]',
  };

  stateClasses = {
    isLock: 'is-lock',
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.triggerElements = document.querySelectorAll(this.selectors.trigger);
    this.buttonClose = document.querySelector(this.selectors.buttonClose);

    this.bindEvents();
  }

  bindEvents() {
    this.triggerElements.forEach((button) => {
      button.addEventListener('click', this.openModal);
    });
    this.buttonClose.addEventListener('click', this.closeModal);
    this.rootElement.addEventListener('click', this.closeModalOnOverlay);
  }

  openModal = () => {
    this.rootElement.showModal();
    document.documentElement.classList.add(this.stateClasses.isLock);
  };

  closeModal = () => {
    this.rootElement.close();
    document.documentElement.classList.remove(this.stateClasses.isLock);
  };

  closeModalOnOverlay = ({ currentTarget, target }) => {
    const modal = currentTarget,
      clickOnOverlay = target === modal;

    if (clickOnOverlay) {
      this.closeModal();
    }
  };
}

export default Modal;

import './styles/main.scss';
import SliderCollection from './modules/SliderCollection.js';
import Modal from './modules/Modal.js';
import OverlayMenu from './modules/OverlayMenu.js';
import SelectCollection from './modules/Choices.js';

console.log(window.Choices);

document.addEventListener('DOMContentLoaded', () => {
  new SliderCollection();
  new Modal();
  new OverlayMenu();
  new SelectCollection();
});

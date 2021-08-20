import './views/stylesheets/reset.css'
import './views/stylesheets/global.css'
import './views/stylesheets/header.css'
import './views/stylesheets/sidebar.css'
import './views/stylesheets/main.css'
import './views/stylesheets/popup.css'

import displayController from './controllers/displayController';

(() => {
    document.querySelector('.projects-header .plus')
    .addEventListener('click', () => {
        displayController.newProjectPopupHandler();
    });

    document.querySelector('.popup-film .cancel')
    .addEventListener('click', () => {
        displayController.cancelNewProjectPopupHandler();
    });

    document.querySelector('.popup-film .confirm')
    .addEventListener('click', () => {
        displayController.addNewProjectPopupHandler();
    });
})();
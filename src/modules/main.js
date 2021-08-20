/* Controls the logic of the program */

import Project from './Project'
import displayController from './displayController';

const main = (() => {
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

export default main;
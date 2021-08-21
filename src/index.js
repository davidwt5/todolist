import './views/stylesheets/reset.css'
import './views/stylesheets/global.css'
import './views/stylesheets/header.css'
import './views/stylesheets/sidebar.css'
import './views/stylesheets/main.css'
import './views/stylesheets/popup.css'

import displayController from './controllers/displayController';
import projectController from './controllers/projectController'

(() => {
    document.querySelector('.projects-header .plus')
    .addEventListener('click', () => {
        displayController.newProjectPopup();
    });

    document.querySelector('.popup-film .cancel')
    .addEventListener('click', () => {
        displayController.cancelNewProject();
    });

    document.querySelector('.popup-film .confirm')
    .addEventListener('click', () => {
        const newProjectName = document.getElementById('new-project-name').value;
        displayController.addNewProject();
        projectController.addNewProject(newProjectName);
        // console.log(projectController.getProjects());
    });
})();
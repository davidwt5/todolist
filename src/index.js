import './views/stylesheets/reset.css'
import './views/stylesheets/global.css'
import './views/stylesheets/header.css'
import './views/stylesheets/sidebar.css'
import './views/stylesheets/main.css'
import './views/stylesheets/popup.css'

import displayController from './controllers/displayController';
import projectController from './controllers/projectController'

(() => {
    displayController.renderProjects(projectController.getProjects());
    
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
        const newProject = document.getElementById('new-project-name');
        projectController.addNewProject(newProject.value);
        displayController.addNewProject(newProject);
        
        const projects = projectController.getProjects();
        displayController.renderProjects(projects);
    });
})();
import './views/stylesheets/reset.css'
import './views/stylesheets/global.css'
import './views/stylesheets/header.css'
import './views/stylesheets/sidebar.css'
import './views/stylesheets/main.css'
import './views/stylesheets/popup.css'

import displayController from './controllers/displayController';
import projectController from './controllers/projectController'

(() => {
    // Set up observer to watch projects changes. On change, attach all delete buttons with an eventlistener
    // Everytime the project list changes, all projects are re-rendered
    let projectsObserver = new MutationObserver(() => {
        const deleteProjectBtns = document.querySelectorAll('.project > .cross');
        deleteProjectBtns.forEach(del => {
            del.addEventListener('click', () => {
                displayController.deleteProject(del.parentNode);
                projectController.deleteProject(del.parentNode.dataset.id);
            });
            
        });
    });
    projectsObserver.observe(document.querySelector('.projects'), {childList: true});

    // Render all projects
    displayController.renderProjects(projectController.getProjects());
    
    // Attaching some eventListeners
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
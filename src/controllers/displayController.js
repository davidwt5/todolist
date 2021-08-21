/* Controls DOM interaction */
const displayController = (() => {
    const handlers = {
        newProjectPopup: () => document.querySelector('.popup-film').classList.remove('invisible'),
        cancelNewProject: () => document.querySelector('.popup-film').classList.add('invisible'),
        addNewProject: newProject => {
            newProject.value = "";
            document.querySelector('.popup-film').classList.add('invisible');
        },
        deleteProject: projectNode => projectNode.remove(),
    }

    const _createProjectComponent = project => {
        const projectDOM = document.createElement("div");
        projectDOM.classList.add("project");
        projectDOM.dataset.id = project.id;

        const projectMainDOM = document.createElement("div");
        projectMainDOM.classList.add("clickable");
        projectMainDOM.classList.add("project-main");
        projectMainDOM.innerText = project.name;

        const removeProjectDOM = document.createElement("span");
        removeProjectDOM.classList.add("clickable");
        removeProjectDOM.classList.add("cross");
        removeProjectDOM.innerText = 'X';
        projectDOM.appendChild(removeProjectDOM);

        projectDOM.appendChild(projectMainDOM);

        return projectDOM;
    }

    const renderProjects = projects => {
        const components = projects.map(project => _createProjectComponent(project));
        const projectsDOM = document.querySelector('.sidebar > .projects');
        projectsDOM.innerHTML = "";
        components.forEach(component => {
            projectsDOM.appendChild(component);
        });
    }

    return Object.assign({renderProjects}, handlers);
})();

export default displayController;
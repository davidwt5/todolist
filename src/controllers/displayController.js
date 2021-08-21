/* Controls DOM interaction */
const displayController = (() => {
    const handlers = {
        newProjectPopup: () => document.querySelector('.popup-film').classList.remove('invisible'),
        cancelNewProject: () => document.querySelector('.popup-film').classList.add('invisible'),
        addNewProject: newProject => {
            newProject.value = "";
            document.querySelector('.popup-film').classList.add('invisible');
        }
    }

    const _createProjectComponent = project => {
        const projectDOM = document.createElement("div");
        projectDOM.classList.add("project");
        projectDOM.classList.add("clickable");
        
        const nameDOM = document.createElement("span");
        nameDOM.classList.add("name");
        nameDOM.innerText = project.name;
        
        projectDOM.appendChild(nameDOM);
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
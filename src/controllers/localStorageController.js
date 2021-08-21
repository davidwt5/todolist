const localStorageController = (() => {
    // Initialises projects if it doens't exist in localStorage
    const getProjects = () => {
        if(!localStorage.getItem("projects"))
            localStorage.setItem("projects", "[]");
        return JSON.parse(localStorage.getItem("projects"));
    }

    // Converts an object to JSON then sets it on localStorage
    const setObjectToLocalStorage = (key, object) => {
        localStorage.setItem(key, JSON.stringify(object));
    }

    const addNewProject = project => {
        const projects = getProjects();
        projects.push(project);
        setObjectToLocalStorage("projects", projects);
    }

    const deleteProject = projectId => {
        const projects = getProjects();
        const ids = projects.map(project => project.id);
        const index = ids.indexOf(projectId);
        projects.splice(index, 1);
        setObjectToLocalStorage("projects", projects);
    }

    return {addNewProject, getProjects, deleteProject};
})();

export default localStorageController;
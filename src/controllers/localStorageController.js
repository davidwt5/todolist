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

    return {addNewProject, getProjects};
})();

export default localStorageController;
import Project from '../models/Project'
import localStorageController from './localStorageController';

const projectController = (() => {
    const addNewProject = name => {
        const newProject = Project(name);
        localStorageController.addNewProject(newProject);
    }
    const getProjects = () => localStorageController.getProjects();
    const deleteProject = projectId => localStorageController.deleteProject(projectId);

    return {addNewProject, getProjects, deleteProject};
})();

export default projectController;
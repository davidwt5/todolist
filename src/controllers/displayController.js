/* Controls DOM interaction */
const displayController = (() => {
    const handlers = {
        newProjectPopup: () => document.querySelector('.popup-film').classList.remove('invisible'),
        cancelNewProject: () => document.querySelector('.popup-film').classList.add('invisible'),
        addNewProject: () => {
            const newProjectName = document.getElementById('new-project-name');
            newProjectName.value = "";
            document.querySelector('.popup-film').classList.add('invisible');
        }
    }

    return Object.assign({}, handlers);
})();

export default displayController;
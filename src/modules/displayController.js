/* Controls DOM interaction */
const displayController = (() => {
    const handlers = {
        newProjectPopupHandler: () => document.querySelector('.popup-film').classList.remove('invisible'),
        cancelNewProjectPopupHandler: () => document.querySelector('.popup-film').classList.add('invisible'),
        addNewProjectPopupHandler: () => {
            const newProjectName = document.getElementById('new-project-name');
            newProjectName.value = "";
            document.querySelector('.popup-film').classList.add('invisible');
        }
    }

    return Object.assign({}, handlers);
})();

export default displayController;
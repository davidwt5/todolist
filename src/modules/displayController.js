const displayController = (() => {
    document.querySelector('.projects-header .plus')
        .addEventListener('click', () => {
            document.querySelector('.popup-film').classList.remove('invisible');
        });

    document.querySelector('.popup-film .cancel')
        .addEventListener('click', () => {
            document.querySelector('.popup-film').classList.add('invisible');
        });

    document.querySelector('.popup-film .confirm')
        .addEventListener('click', () => {
            const newProjectName = document.getElementById('new-project-name').value;
            console.log(newProjectName); // Placeholder for updating project DS in localStorage
            document.querySelector('.popup-film').classList.add('invisible');
        });

    return {};
})();

export default displayController;
import Todo from './Todo'

const Project = (name) => {
    const prototype = {
        getName: () => name,
        setName: newName => name = newName
    }

    return Object.create(prototype);
}

export default Project;
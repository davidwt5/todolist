import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';

const Project = (name) => {
    // const methods = {
    //     getName: () => name,
    //     setName: newName => name = newName
    // }

    // return Object.assign({}, methods);
    return {id: uuidv4(), name};
}

export default Project;
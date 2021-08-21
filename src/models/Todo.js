const Todo = (title, desc, dueDate, priority) => {
    // const getters = {
    //     getTitle: () => title,
    //     getDesc: () => desc,
    //     getDueDate: () => dueDate,
    //     getPriority: () => priority
    // }

    // const setters = {
    //     setTitle: newTitle => title = newTitle,
    //     setDesc: newDesc => desc = newDesc,
    //     setDueDate: newDueDate => dueDate = newDueDate,
    //     setPriority: newPriority => priority = newPriority
    // }

    // const methods = Object.assign({}, getters, setters);
    
    return {title, desc, dueDate, priority};
};

export default Todo;
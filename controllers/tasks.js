import { v4 as uuidv4 } from 'uuid';

export const getTasks = (req, res) => {
    res.send(tasks);
}

export const createTask = (req, res) => {
    const task = req.body;

    tasks.push({ ...task, id:uuidv4()});

    res.send(`Task with title ${task.title} added to the database!`);
}

export const getTask = (req, res) => {
    const { id } = req.params;

    const foundTask = tasks.find((task) => task.id === id);

    res.send(foundTask)
}

export const deleteTask = (req, res) => {
    const { id } = req.params;

    tasks = tasks.filter((task) => task.id !== id );
    
    res.send(`Task with id ${id} deleted from database`)
    // res.send(tasks)
}

export const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, due_date, description } = req.body;

    const task = tasks.find((task) => task.id === id);

    if (title) task.title = title;
    if (due_date) task.due_date = due_date;
    if (description) task.description = description;
    
    res.send(`User with id ${id} was updated`)

}


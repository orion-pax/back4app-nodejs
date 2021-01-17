const { query, ToDo } = require('./parse.service')

const saveNewTodo = async (newTodo) => {
    const todo = new ToDo();
    todo.set('name', 'name')
    for (const [key, value] of Object.entries(newTodo)) {
        `${key}` == 'schedule' ? todo.set(`${key}`, new Date(value)) : todo.set(`${key}`, value);
    }
    const response = todo.save()
        .then((data) => {
            return data;
        }, (error) => {
            return error;
        })

    return response;
}

const getAllToDos = async () => {
    const todoList = await query.find()
        .then(todos => {
            if (typeof todos !== 'undefined') {
                return todos;
            }
            return [];
        }).catch(() => { return [] });
    return todoList;
}

const getToDoCount = async () => {
    const count = await query.count().then(count => {
        console.log(`ParseObjects found: ${count}`);
        return count;
    });
    return count;
}

const updateTodoTitle = async (id, title) => {
    const object = await query.get(id)
    object.set('title', title);
    const result = await object.save().then((response) => {
        console.log('Updated ToDo', response);
        return response;
    }).catch((error) => {
        console.error('Error while updating ToDo', error);
        return error;
    })

    return result;
}

const getTodoById = async (id) => {
    const response = await query.get(id)
        .then((todo) => {
            return todo;
        }, (error) => {
            return error;
        });

    return response;
}

const deleteTodoById = async (id) => {
    const object = await query.get(id)
    if (!object.isDataAvailable()) {
        return "todo with id not found."
    }
    const response = await object.destroy().
        then((data) => {
            return data
        }).catch((error) => {
            return error;
        });
    return response;
}



module.exports = {
    getAllToDos,
    updateTodoTitle,
    getToDoCount,
    getTodoById,
    saveNewTodo,
    deleteTodoById
}
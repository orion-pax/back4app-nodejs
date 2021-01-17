const express = require('express')
const router = express.Router();
const { getAllToDos, updateTodoTitle, getToDoCount, getTodoById, saveNewTodo, deleteTodoById } = require('../services/todo.service')

router.get('/', async(req, res) =>{
    const todos = await getAllToDos();
    res.json(todos)
})

router.get('/count', async(req, res) =>{
    const count = await getToDoCount();
    res.json(count)
})

router.post('/:id', async(req, res) =>{
    const id = req.params.id;
    const { title } = req.body
    const response = await updateTodoTitle(id, title);
    res.json(response)
})


router.get('/:id', async(req, res) =>{
    const id = req.params.id;   
    const response = await getTodoById(id);
    res.json(response)
})

router.delete('/:id', async(req, res) =>{    
    const id = req.params.id;   
    const response = await deleteTodoById(id);  
    res.json(response)
})

router.post('/', async(req, res) =>{
    const newTodo = req.body;   
    const response = await saveNewTodo(newTodo);
    res.json(response)
})


module.exports = router;
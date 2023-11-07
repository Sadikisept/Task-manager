const task = require ('../models/task')
const getAllTasks = (req, res) =>{
    res.send('Get all Tasks')
}
const createTask = (req, res) =>{
    res.json(req.body)
}
const getTask = (req, res) =>{
    res.json({id:req.params.id})
}
const updateTask = (req, res) =>{
    res.send('Update Task')
}
const deleteTask = (req, res) =>{
    res.send('Delete Tasks')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
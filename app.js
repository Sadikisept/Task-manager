const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware

app.use(express.json())

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


//app.get('/api/vi/tasks') -get all the tasks
//app.post('/api/vi/tasks') -create a new task
//app.get('/api/vi/tasks/:id') -get single task
//app.patch('/api/vi/tasks/:id') -update task 
//app.delete('/api/vi/tasks/id') -delete task
const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
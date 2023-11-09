const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes


app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

//app.get('/api/vi/tasks') -get all the tasks
//app.post('/api/vi/tasks') -create a new task
//app.get('/api/vi/tasks/:id') -get single task
//app.patch('/api/vi/tasks/:id') -update task 
//app.delete('/api/vi/tasks/id') -delete task
const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
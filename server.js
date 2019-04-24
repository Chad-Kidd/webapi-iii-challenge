const express = require('express')
const morgan = require('morgan');

const postRouter = require('./posts/post-router.js')


const server = express()

    server.use(express.json())

    server.get('/', (req,res) => {
        res.send('Navigate to /api/users for data')
    })

    
server.use('/api/posts', postRouter)
// server.use('api/users', userRouter)
server.use(morgan('dev'));
module.exports = server;
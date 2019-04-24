const express = require('express')

const postRouter = require('./posts/post-router.js')

const server = express()

server.use(express.json())

server.get('/', (req,res) => {
    res.send('Navigate to /api/users for data')
})

server.use('api/posts', postRouter)

module.exports = server;
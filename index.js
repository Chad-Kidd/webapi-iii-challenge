// code away!
require('dotenv').config()

const server = require('./server.js')

//set PORT environment variable 
const port = process.env.PORT || 400

    server.listen(port, () => {
        console.log(`\n*** ITS WORKING on http://localhost:${port} ***\n`)
    });
    // change .listen(8000) to listen(port) to make dynamic

    // npm dotenv yarn add dotenv before anything else
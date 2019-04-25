const express = require('express')

const UserData = require('../data/helpers/userDb')

const server = express()

const userrouter = express.Router()

function upperCase(req, res, next) { 
    return req.body.name = req.body.name.toUpperCase();
    next();
} //put in post call after URL

server.use(upperCase);

    userrouter.get('/', async (req, res) => {
        try {
            const users = await UserData.get(req.query);
            res.status(200).json(users);
        } catch (err) {
            console.log(error);
            res.status(500).json({
                error: 'The users information could not be retrieved.'
            });
        }
    });

// CURRENT URL /api/users/1 etc

    userrouter.get('/:id', upperCase, async (req, res) => {
        try {
            const user = await UserData.getById(req.params.id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'The user with the specified ID does not exist.'});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'The user information could not be retrieved.'});
        }
    });
   
// CURRENT URL /api/users/ and insert user in body

    userrouter.post('/', async (req, res) => {
        try {
          const newuser = await UserData.insert(req.body);
          res.status(201).json(newuser);
        } catch (error) {
          // log error to database
          console.log(error);
          res.status(500).json({
            message: 'Error adding the new user',
          });
        }
      });

      userrouter.delete('/:id', async (req, res) => {
        try {
          const user = await UserData.remove(req.params.id);
          if (user > 0) {
            res.status(200).json({ message: 'The user has been nuked' });
          } else {
            res.status(404).json({ message: 'The user could not be found' });
          }
        } catch (error) {
          // log error to database
          console.log(error);
          res.status(500).json({
            message: 'Error removing the user',
          });
        }
      });

module.exports = userrouter;
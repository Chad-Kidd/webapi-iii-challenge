const express = require('express')

const PostData = require('../data/helpers/postDb')

const postrouter = express.Router()



    postrouter.get('/', async (req, res) => {
        try {
            const posts = await PostData.get(req.query);
            res.status(200).json(posts);
        } catch (err) {
            console.log(error);
            res.status(500).json({
                error: 'The posts information could not be retrieved.'
            });
        }
    });

// CURRENT URL /api/posts/1 etc

    postrouter.get('/:id', async (req, res) => {
        try {
            const post = await PostData.getById(req.params.id);
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ message: 'The post with the specified ID does not exist.'});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'The post information could not be retrieved.'});
        }
    });
   
// CURRENT URL /api/posts/ and insert post in body

    postrouter.post('/', async (req, res) => {
        try {
          const newpost = await PostData.insert(req.body);
          res.status(201).json(newpost);
        } catch (error) {
          // log error to database
          console.log(error);
          res.status(500).json({
            message: 'Error adding the new post',
          });
        }
      });

module.exports = postrouter;
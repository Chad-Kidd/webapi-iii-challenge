const express = require('express')

const PostData = require('../data/helpers/postDb')

const router = express.Router()



router.get('/', async (req, res) => {
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


module.exports = router;
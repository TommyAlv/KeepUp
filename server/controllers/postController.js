


const { Post } = require('../models');


module.exports = {


    getPost(req, res) {
        Post.find()
            .then((post) => res.json(post))
            .catch((err) => res.status(500).json(err));
    }, 

    getSinglePost(req, res) {
        Post.findOne({ _id: req.params.Id })
            .select('-__v')
            .then((post) => !post? 
            res.status(404).json({ message: 'No post with that ID!' })
                : res.json(post)
                )
                .catch((err) => res.status(500).json(err.message));
    },
}
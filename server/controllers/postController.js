


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
            .then((post) => !post ? 
            res.status(404).json({ message: 'No post with that ID!' })
                : res.json(post)
                )
                .catch((err) => res.status(500).json(err.message));
    },

    createPost(req, res) {
        Post.create(req.body)
            .then((post) => res.json(post))
            .catch((err) => res.status(500).json(err));
    },

    updatePost(req, res) {
        Post.findOneAndUpdate(req.body) 
            .then((post) => !post ?
                res.status(404).json({ message: 'No post with that ID!'})
                : res.json(post)
                )
                .catch((err) => res.status(500).json(err.message));
        
    },

    createComment(req, res) {
        Post.findByIdAndUpdate(req.params.postId, { $addToSet: { comment: req.body } }, { runValidators: true, new: true })
            .then(() => res.json({ message: 'Comment created! '}))
            .catch((err) => res.status(500).json(err));

    },

    deleteComment(req, res) {
        Post.findByIdAndUpdate(req.params.postId, { $pull: { comment: { commentId: req.params.commentId } }}, { runValidators: true, new: true })
            .then(() => res.json({ message: 'Comment Deleted' }))
            .catch((err) => res.status(500).json(err));
    }
}
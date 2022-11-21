


const router = require('express').Router();

const {
    getPost,
    getSinglePost,
    createPost,
    updatePost,
    createComment,
    deleteComment,
    deltePost,
} = require('../../controllers/postController');

router.route('/').get(getPost).post(createPost);

router.route('/:id').get(getSinglePost).delete(deltePost).put(updatePost);

router.route('/:postId/comment').post(createComment);

router.route('/:postId/comment/:commentId').delete(deleteComment);



module.exports = router;
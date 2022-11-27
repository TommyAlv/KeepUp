const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
    {
        postId: {
            type: String,
            require: true
        },

        commentBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 140,
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => dateFormat(date)
        }
    },

);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
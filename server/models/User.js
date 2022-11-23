


const { Schema, model } = require('mongoose');

const userSchema = new Schema({

    firstName: {
        type: String,
        required: 'Must have a name!',
        trim: true,
        minlength: 1,
        maxlength: 25,
        unique: true
    },

    lastName: {
        type: String,
        required: 'Must have a name!',
        trim: true,
        minlength: 1,
        maxlength: 25,
        unique: true
    },


    username: {
        type: String,
        require: 'Must have a username!',
        trim: true,
        minlength: 1,
        maxlength: 15,
        unique: true
    },

    email: {
        type: String,
        required: 'Must have an email!',
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },

    password: {
        type: String,
        required: 'Must have a password!',
        unique: true,
        match: [/^.{4,8}$/]
        // Matches any string between 4 and 8 characters in length. Limits the length of a string. Useful to add to password regular expressions.
    },

    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]

},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});


const User = model('User', userSchema);

module.exports = User;
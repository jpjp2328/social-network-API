const { Schema, model } = require('mongoose');

// Schema to create the User Model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            require: true,
            match: [
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Please enter a valid email address.",
            ],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual property 'friendCount' returns number of friends
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Initializing User model via User schema
const User = model('User', userSchema)

module.exports = User;
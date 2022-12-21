const { Schema, model } = require('mongoose');
const moment = require("moment");

// Schema to create Thought Model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format("MMMM Do YYYY, h:mm:ss a"),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// virtual property 'reactCount' returns number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Initializing Thought model via thought schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

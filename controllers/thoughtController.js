const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts - getThoughts
    getThoughts(req, res) {
        Thought.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    // Get a single thought - getSingleThought
    getSingleThoughts(req, res) {
        Thought.find({ _id: req.params.userId })
        .select('__v')
        .then((thought) => 
        !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Create a thought - createThought

    // Update a thought - updateThought

    // Delete a thought - deleteThought

    // Create a reaction - createReaction

    // Delete a reaction - deleteReaction
    
}

const { trusted } = require('mongoose');
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
        Thought.findOne({ _id: req.params.userId })
            .select('__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Create a thought - createThought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // Update a thought - updateThought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            {
                _id: req.params.thoughtId
            },
            {
                $set: req.body
            },
            {
                new: true, runValidators: true
            },
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Delete a thought - deleteThought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json({ message: 'Thoughts deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    },

    // Create a reaction - createReaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            {
                _id: req.params.thoughtId
            },
            {
                $addToSet: { reactions: req.body }
            },
            {
                new: true, runValidators: true
            },
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Delete a reaction - deleteReaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            {
                _id: req.params.thoughtId
            },
            {
                $pull: { reactions: req.params.reactionId }
            },
            {
                new: true
            },
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
};

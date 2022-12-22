const { User, Thought } = require('../models');

module.exports = {
    // Get all users - getUsers
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // Get a single user - getSingleUser
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) => 
                !user
                   ? res.status(404).json({ message: 'No user with that ID'})
                   : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Create a user - createUser

    // Update a user - updateUser

    // Delete a user - deleteUser

    // Add a friend - addFriend

    // Delete a friend - deleteFriend

}

const { Thought, User } = require('../models');

const thoughtController = {
    // Getting all thoughts
    async getThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find()
                .sort({ createdAt: -1 });
            
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // Get a thought by ID
    async getSingleThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOne({ _id: id });

            if (!dbThoughtData) {
                return res.status(404).json({ message: 'No thought found with this id! '});
            }

            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};

// Create thought

// Update Thought

// Delete Thought

// Add a Reaction to a Thought

// Remove a Reaction from a thought
const mongoose = require('mongoose');
const { User, Thought } = require('./models');
const db = require('./config/connection');

const seedUsers = [
    {
        username: 'john_doe',
        email: 'john@example.com',
        friends: [],
        thoughts: []
    },
    {
        username: 'jane_doe',
        email: 'jane@example.com',
        friends: [],
        thoughts: []
    }
];

const seedThoughts = [
    {
        thoughtText: 'This is a thought',
        username: 'john_doe',
        reactions: []
    },
    {
        thoughtText: 'This is another thought',
        username: 'jane_doe',
        reactions: []
    }
];

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Thought.deleteMany({});

        const createdUsers = await User.insertMany(seedUsers);
        const createdThoughts = await Thought.insertMany(seedThoughts);

        console.log('Database seeded!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
});
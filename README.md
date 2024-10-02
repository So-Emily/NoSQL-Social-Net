# NoSQL Social Network API

## Description

This project is a NoSQL-based social network API built using MongoDB, Express.js, and Mongoose. It allows users to create accounts, post thoughts, react to friends' thoughts, and manage their friend lists.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Models](#models)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/So-Emily/NoSQL-Social-Net
    ```
2. Navigate to the project directory:
    ```sh
    cd NoSQL-Social-Net
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The API will be available at `http://localhost:3001`.

## API Routes

### User Routes

- `GET /api/users` - Get all users
- `GET /api/users/:userId` - Get a single user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:userId` - Update a user by ID
- `DELETE /api/users/:userId` - Delete a user by ID
- `POST /api/users/:userId/friends/:friendId` - Add a friend to a user's friend list
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list

### Thought Routes

- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:thoughtId` - Get a single thought by ID
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:thoughtId` - Update a thought by ID
- `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## Models

### User

- `username`: String, required, unique, trimmed
- `email`: String, required, unique, must match an email format
- `thoughts`: Array of ObjectId references to Thought
- `friends`: Array of ObjectId references to User

### Thought

- `thoughtText`: String, required, between 1 and 280 characters
- `createdAt`: Date, default is current date, uses a getter to format the date
- `username`: String, required
- `reactions`: Array of nested documents created with the reactionSchema

### Reaction

- `reactionId`: ObjectId, default is a new ObjectId
- `reactionBody`: String, required, maximum 280 characters
- `username`: String, required
- `createdAt`: Date, default is current date, uses a getter to format the date

## Video

[Video Link](https://drive.google.com/file/d/11EO21kB0E6Hkh9T1lkUNlWQ6nxmTC6yW/view)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Questions

For any questions, please contact me at [So-Emily](https://github.com/So-Emily).

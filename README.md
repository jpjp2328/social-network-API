# Social Network API (Backend)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Building an API for a social network application where users can share their thoughts, react to friends’ thoughts, and create a friend list using Express.js, MonogoDB and Mongoose ODM. This application would have the ability to view, create, update, delete 'Users' and 'Thoughts' as well as adding and deleting 'Friends' and 'Reactions' via Get, Post, Put and Delete routes.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Tests](#tests)
- [Technology](#technology)
- [License](#license)
- [Contribution](#contribution)
- [Questions](#questions)

## Installation
- To install necessary dependencies, run the following commands:
npm i OR npm install

## Usage
- To run the application, type 'npm start' in the terminal where application is located. 

- The application would then be running and could be tested through Insomnia. 

- You would be able to Find all Users or a single user by ID, Create a new user, update user and delete user.
- In the application Users can add friends and delete friends via post and delete routes.
- Users could also create, update and delete 'Thoughts' which is linked to their userId.
- Similarly Thoughts could be found via Get routes.
- Users could also create and delete 'Reactions' they have to a 'Thought"

*Note - For routes, please refer to test section

## Demo
- Refer to this Demo Video below to guide you (fullscreen for better quality) :

https://user-images.githubusercontent.com/110818668/209149171-3243b2c4-c075-437f-80c6-112ae75abc8a.mp4

## Tests
- API routes could be tested through Insomnia 

- Users
  - Get all users: 'GET' /api/users
  - Get single user by id: 'GET' /api/users/:userId
  - Create user: 'POST' /api/users
  - Update user: 'PUT' /api/users/:userId
  - Delete user: 'DELETE' /api/users/userId
  
 - Friend
   - Add Friend: 'POST' /api/users/:userId/freinds/:friendId
   - Delete Friend: 'DELETE' /api/users/:userId/freinds/:friendId

- Thoughts
  - Get all thoughts: 'GET' /api/thoughts
  - Get single user by id: 'GET' /api/thoughts/:thoughtId
  - Create thought: 'POST' /api/thoughts
  - Update thought: 'PUT' /api/thoughts/:thoughtId
  - Delete thought: 'DELETE' /api/thoughts/:thoughtId
 
 - Reaction
   - Create Reaction: 'POST' /api/thoughts/:thoughtId/reactions
   - Delete Reaction: 'DELETE' /api/thoughts/:thoughtId/reactions/:reactionId

## Technology
- Javascript, node.js, MongoDb
- npm packages/ dependencies include: express, mongoose, moments
- testing: Insomnia

## License
- This project is licensed under MIT license.

## Contribution
- Please contact me for any contributions.
 
## Questions
- If you have any questions feel free to contact me directly at jeffreyp2328@gmail.com. You can also find more of my work at my Github: [jpjp2328](https://github.com/jpjp2328/).



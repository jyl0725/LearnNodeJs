const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken')

const {Todo} = require('./../../models/Todo');
const {User} = require('./../../models/User');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'jin111@example.com',
  password: 'userOnePass',
  tokens:[{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: userTwoId,
  email: 'angel@example.com',
  password: 'userTwoPass',
  tokens:[{
    access: 'auth',
    token: jwt.sign({_id: userTwoId, access: 'auth'}, 'abc123').toString()
  }]
}]

const todos =[{
  _id: new ObjectID(),
  text: 'First Test todo',
  _creator: userOneId
}, {
  _id: new ObjectID(),
  text: 'Second Test todo',
  completed: true,
  completedAt: 134245,
  _creator: userTwoId
}];




const populateTodos = (done) => {
  Todo.deleteMany({}).then(() => {
     return Todo.insertMany(todos);
   }).then(() => done())
}

const populateUsers = (done) => {
  User.deleteMany({}).then(() => {
    let userOne = new User(users[0]).save();
    let userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
}

module.exports = { todos, populateTodos, populateUsers, users}

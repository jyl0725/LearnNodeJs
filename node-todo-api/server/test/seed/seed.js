const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken')

const {Todo} = require('./../../models/Todo');
const {User} = require('./../../models/User');

const userOneId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'jin111@example.com',
  password: 'userOnePass',
  tokens:[{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: new ObjectID(),
  email: 'angel@example.com',
  password: 'userTwoPass',

}]

const todos =[{
  _id: new ObjectID(),
  text: 'First Test todo'
}, {
  _id: new ObjectID(),
  text: 'Second Test todo',
  completed: true,
  completedAt: 134245
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

const { List } = require('./list.model');
const { Task } = require('./task.model');
const { User } = require('./user.model');
const mongoose = require('../mongoose')

module.exports = {
    List,
    Task,
    User,
    mongoose
}
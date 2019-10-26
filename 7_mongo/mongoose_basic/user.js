const mongoose  = require('mongoose')

const schema = {
    name: { type: String, index:1 },
    age: Number,
    status: { type: String, required:true },    
    groups: [ String ]
}

const user_schema = new mongoose.Schema(schema)
const User = mongoose.model('User', user_schema)

module.exports = User

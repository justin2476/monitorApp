const mongoose = require('mongoose');

const schema = mongoose.Schema;
ObjectId = schema.ObjectId;
const users = new schema({
    _id: ObjectId,
    userName: String,
    firstName: String,
    lastName: String,  
    mobile: String,
    accountStatus:Boolean,
    role:String,
    login: {
        userName: String,
        password: String,
        locked: Boolean
    },
    createdDate: Date,
    updatedDate: Date
})
module.exports = mongoose.model("users", users, "users");

//mongoose.model("name of model","name of schema","collection to save")

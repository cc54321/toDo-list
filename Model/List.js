//create a toDoSchema 
const mongoose = require("mongoose");
const {v4: uuidv4} = require("uuid");



const toDoSchema = new mongoose.Schema({

    listName: {type: String,
    required: true},
    description: String,
    completed: {type: Boolean,
    required: true,
    default: false},
    status: { type: String, 
    enum: ['incomplete', 'complete', 'deferred'],
    default: 'incomplete',
    },
    dateCreated: { type: Date, default: Date.now(),
    required: true},
    dateCompleted: {type: Date},
    id: { type: String, default: uuidv4},

})

//register model
const list = mongoose.model('toDo-list',toDoSchema)



//make model accessible to outside files
module.exports = List;
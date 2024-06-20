const  mongoose = require('mongoose');

const  farmSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Animal name is required'],
        unique: [true, 'Name already exist']
    },
    Breed: {
        type: String,
        required: [true, 'Animal breed is reqiured'],
    },
    Colour: {
        type: String,
        required: [true, 'Animal colour is reqiured'],
    },
    Age: {
        type: Number,
        reqiured: [true, 'Age is reqiured'],
    },
    isMatured: {
        type: Boolean,
        default: false,
    },
    isSold: {
        type: Boolean,
        default: false
    },
}, {timestamps:true})

const farmModel = mongoose.model('farm', farmSchema)
module.exports = farmModel
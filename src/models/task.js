const mongoose = require('mongoose')
//  const validator = require('validator')



const Task = mongoose.model('Tasks', {

    description: {
        type: String,
        required: true,
        trim: true

    },
    compeleted: {
        type: Boolean,
        default: false
    }
})

module.exports = Task
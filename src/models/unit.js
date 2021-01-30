const mongoose = require('mongoose');
const Template = require('./template');

const unitSchema = new mongoose.Schema ({
    readableName: {
        type: String
    },
    vehicleTemplate: {
        type: Template
    },
    pilotName: {
        type: String
    },
    xp: {
        type: Number
    },
    modifiers: {
        active: [{type: Number}]
    },
    canScout: {
        type: Number
    }
})

module.exports = mongoose.model('Unit', unitSchema);
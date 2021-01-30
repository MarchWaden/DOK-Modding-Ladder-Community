const mongoose = require('mongoose');
const User = require('./user');
const Unit = require('./unit');

const fleetSchema = new mongoose.Schema ({
    player: {
        type: User
    },
    commanderName: {
        type: String
    },
    faction: {
        type: String
    },
    team: {
        type: Number
    },
    units: [
        Unit
    ],
    ap: {
        type: Number
    },
    mp: {
        type: Number
    },
    sp: {
        type: Number
    },
    location: {
        type: Number
    },
    cu: {
        type: Number
    },
    ru: {
        type: Number
    },
    bonuses: [
        {type: Number}
    ]
})

module.exports = mongoose.model('Fleet', fleetSchema);
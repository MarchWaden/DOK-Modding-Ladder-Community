const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema ({
    unitId: {
        type: Number
    },
    readableName: {
        type: String
    },
    description: {
        type: String
    },
    accessibleToFactions: [
        {type: String}
    ],
    cost: {
        cu: {type: Number},
        ru: {type: Number},
        sp: {type: Number},
        ap: {type: Number},
        upKeepCu: {type: Number},
        upKeepRu: {type: Number},
        upKeepAp: {type: Number},
        upKeepSp: {type: Number},
        battlegroupMpPenalty: {type: Number},
        manpower: {type: Number}
    },
    canScout: {type: Number},
    modifiers: {
        active: [{type: Number}]
    }
})

module.exports = mongoose.model('Template', templateSchema);
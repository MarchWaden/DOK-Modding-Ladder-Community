const mongoose = require('mongoose');
const User = require('./user');
const Fleet = require('./fleet');

const campaignSchema = new mongoose.Schema ({
    name:  {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
    },
    password: {
      type: String
    },
    owner: {
        type: User
    },
    fleets: [
        Fleet
    ]
})

module.exports = mongoose.model('Campaign', campaignSchema);

const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  demographicData: {
    avgHouseholdIncome: {
      type: Number,
    },
    avgIndividualIncome: {
      type: Number,
    },
    commuteByPublicTransit: {
      type: Number,
      min: 0,
      max: 100,
    },
    commuteByFoot: {
      type: Number,
      min: 0,
      max: 100,
    },
    commuteByBicycle: {
      type: Number,
      min: 0,
      max: 100,
    },
    commuteByCar: {
      type: Number,
      min: 0,
      max: 100,
    },
  }
},
{
    timestamps: true
});

module.exports = mongoose.model("Property", PropertySchema);
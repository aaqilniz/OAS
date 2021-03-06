const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let familyDetails = (module.exports = mongoose.model("familyDetails", {
  fatherOrGaurdianName: {
    type: String,
    required: true
  },
  fatherOrGaurdianPhoneNumber: {
    type: String
  },
  fatherLivingStatus: {
    type: String,
    required: true
  },
  fatherOrGaurdianOcupation: {
    type: String,
    required: true
  },
  monthlyIncome: {
    type: Number,
    required: true
  },
  fatherOrGaurdianMobileNumber: {
    type: Number,
    required: true
  },
  numberOfDependents: {
    type: Number,
    required: true
  }
}));

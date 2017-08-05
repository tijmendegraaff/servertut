const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema; is the same in ES6 as
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

mongoose.model("surveys", surveySchema);

const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema; is the same in ES6 as

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String]
});

mongoose.model("surveys", surveySchema);

const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema; is the same in ES6 as

const userSchema = new Schema({
  googleId: String,
  credits: {
    type: number,
    default: 0
  }
});

mongoose.model("users", userSchema);

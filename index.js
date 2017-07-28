const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./config/keys");

const app = express();

// https://console.developers.google.com
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret
  })
);

// server Config
const PORT = process.env.PORT || 5000;
app.listen(PORT);

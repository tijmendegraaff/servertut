const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./config/keys");
const app = express();

// https://console.developers.google.com
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accesToken => {
      console.log(accesToken);
    }
  )
);

// setup google Auth route
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// setup auth callback route
app.get("/auth/google/callback", passport.authenticate("google"));

// server Config
const PORT = process.env.PORT || 5000;
app.listen(PORT);

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
    (accesToken, refreshToken, profile, done) => {
      console.log("acces token", accesToken);
      console.log("refresh token", refreshToken);
      console.log("profile", profile);
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

// setup Auth callback route
app.get("/auth/google/callback", passport.authenticate("google"));

// server Config
const PORT = process.env.PORT || 5000;
app.listen(PORT);

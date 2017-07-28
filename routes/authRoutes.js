const passport = require("passport");

module.exports = app => {
  // setup google Auth route
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // setup Auth callback route
  app.get("/auth/google/callback", passport.authenticate("google"));
};

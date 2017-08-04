const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys");
// need to define model first!!!
require("./models/User");
require("./services/passport");

// connect to remote mongoDB database
mongoose.connect(keys.mongoURI);

// Initialize server
const app = express();

app.use(bodyParser.json());

// declare use of cookies
app.use(
  cookieSession({
    // cookies persist for 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
// initialize cookies with passport
app.use(passport.initialize());
app.use(passport.session());

// import routes
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

// server Config
const PORT = process.env.PORT || 5000;
app.listen(PORT);

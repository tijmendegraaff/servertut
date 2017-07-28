const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
// need to define model first!!!
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

// server Config
const PORT = process.env.PORT || 5000;
app.listen(PORT);

require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
// const hbs = require("./helpers/hsbHelpers")(exphbs);

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(express.static(path.join(__dirname, "public")));

// Create `ExpressHandlebars` instance with a default layout.
var hbs = exphbs.create({
  helpers: require("./helpers/hsbHelpers.js").helpers,
  defaultLayout: "main",
  // layoutsDir: __dirname + "/views/pages/",
  partialsDir: __dirname + "/views/partials/"
  // partialsDir: ["shared/templates/", "views/partials/"]
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  console.log(`Database & tables created!`)
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

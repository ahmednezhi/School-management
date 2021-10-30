const dbConfig = require("../../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = mongoose;
db.mongoose = mongoose;
db.url = dbConfig.url;
db.teacher = require("./teacher.model.js")(mongoose);

module.exports = db;

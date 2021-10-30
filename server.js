const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();




const start = async () => {
  await mongoose
  .connect('mongodb+srv://db_user:Nu0UTyRpUohtaEz3@cluster0.wdml4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {})
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
}
start();
  const db = mongoose.connection;
db.on('error',(error) =>{
  console.error('ttt');
    console.error(error);
}, 'disconnected', () => {
  logger.debug(`Mongoose connection disconnected`);
  mongoose.connect(path);
})
//once success and open
db.once('open',()=>{
    console.log("database opened")
})

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(function (req, res, next) {
  console.log("Middleware called")
  next();
});

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to school management application." });
});

// 
require("./app/routes/teacher.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

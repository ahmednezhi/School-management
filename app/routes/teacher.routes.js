module.exports = app => {
  const teachers = require("../controller/teacher.contoller");

  var router = require("express").Router();

  // Create a new Teacher
  router.post("/", teachers.create);

  // Retrieve all Teachers
  router.get('/', teachers.findAll);

  // Retrieve all Teachers by Specialty 
  router.get('/specialty', teachers.findAllSpecialty);

  // Retrieve a single Teacher with id
  router.get("/:id", teachers.findOne);

  // Update a Teacher with id
  router.put("/:id", teachers.update);

  // Delete a Teacher with id
  router.delete("/:id", teachers.delete);

  // Create a new Teacher
  router.delete("/", teachers.deleteAll);

  app.use('/api/Teachers', router);
};

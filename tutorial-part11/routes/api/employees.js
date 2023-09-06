const express = require("express");
const router = express.Router();
const employeesController = require("../../controllers/employeesController");
//const verifyJWT = require("../../middleware/verifyJWT");

//to use verifyJWT only for select routes, put it as the first parameter 
// ex:  .get(verifyJWT, employeesController.getAllEmployees)

router
  .route("/")
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

router.route("/:id").get(employeesController.getEmployee);

module.exports = router;

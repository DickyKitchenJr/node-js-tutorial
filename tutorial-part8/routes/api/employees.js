const express = require("express");
const router = express.Router();
const data = {};
data.employees = require("../../data/employees.json");

// code in this section would be different for an actual API but is being used just as an example to make it do something vs being empty code
router
  .route("/")
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .delete((req, res) => {
    res.json({
      id: req.body.id,
    });
  });

router.route('/:id')
  .get((req, res)=>{
    res.json({
        "id": req.params.id
    });
  })

module.exports = router;

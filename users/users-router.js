const router = require('express').Router();

const Users = require('./users-model.js');  

// CRUD

router.get("/", (req, res) => {
  Users.getAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
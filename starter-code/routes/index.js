const express = require('express');
const router  = express.Router();
const Place = require("../models/place");

router.get('/', (req, res, next) => {
  Place.find()
  .then((places) => {
    res.render('index', { places });
  })
});

module.exports = router;

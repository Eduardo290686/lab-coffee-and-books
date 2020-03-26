const express = require('express');
const router  = express.Router();
const Place = require("../models/place");

router.get('/', (req, res, next) => {
  Place.find()
  .then((places) => {
    let key = process.env.MAPS_KEY;
    res.render('index', { places, key });
  })
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Place = require("../models/place");

router.get('/gettingLocations', (req, res, next) => {
  Place.find()
    .then((places) => {
      res.send(places);
    })
});

module.exports = router;

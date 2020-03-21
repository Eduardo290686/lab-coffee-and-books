const express = require('express');
const router = express.Router();
const Place = require("../models/place")

router.post('/place', (req, res, next) => {
  let placeName = req.body.name;
  let placeType = req.body.type;
  Place.create({
    name: placeName,
    type: placeType
  })
    .then((place) => {
      res.send(place);
    })
});

router.get('/deletePlace/:id', (req, res, next) => {
  let placeId = req.params.id;
  Place.findByIdAndDelete(placeId)
    .then((place) => {
      res.send(place);
    })
})

router.post('/updatePlace/:id', (req, res, next) => {
  let placeId = req.params.id;
  let placeName = req.body.name;
  let placeType = req.body.type;
  Place.findByIdAndUpdate({ _id: placeId }, {
    name: placeName,
    type: placeType
  })
    .then((oldPlace) => {
      res.send(oldPlace);
    })
})

module.exports = router;

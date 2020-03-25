const express = require('express');
const router = express.Router();
const Place = require("../models/place");

router.get("/createPlace", (req, res, next) => {
  res.render("createLocation");
})

router.post('/createPlace', (req, res, next) => {
  let placeName = req.body.name;
  let placeType = req.body.type;
  let placeLocation = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };
  Place.create({
    name: placeName,
    type: placeType,
    location: placeLocation
  })
    .then((place) => {
      res.redirect("/");
    })
});

router.get('/deletePlace/:id', (req, res, next) => {
  let placeId = req.params.id;
  Place.findByIdAndDelete(placeId)
    .then((place) => {
      res.send(place);
    })
})

router.get('/updatePlace/:id', (req, res, next) => {
  let placeId = req.params.id;
  Place.findById(placeId)
    .then((place) => {
      res.render("updateLocation", { place });
    })
})

router.post('/updatePlace/:id', (req, res, next) => {
  let placeId = req.params.id;
  let placeName = req.body.name;
  let placeType = req.body.type;
  let placeLatitude = req.body.latitude;
  let placeLongitude = req.body.longitude;
  if(placeName === "" || placeLatitude === "" || placeLongitude === ""){
    res.redirect(`/updatePlace/${placeId}`);
  }
  Place.findByIdAndUpdate({ _id: placeId }, {
    name: placeName,
    type: placeType,
    location: { type: "Point" , coordinates: [placeLatitude, placeLongitude] }
  })
    .then((oldPlace) => {
      res.redirect("/");
    })
})

module.exports = router;

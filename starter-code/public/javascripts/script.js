function startMap(arr) {

  const mapCenter = { lat: 30.3977000, lng: 2.190471916 };

  const myMap = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 5,
      center: mapCenter
    }
  );

  arr.forEach((place) => {
    const mapMarker = new google.maps.Marker({
      position: {
        lat: place[1][0],
        lng: place[1][1]
      },
      map: myMap,
      title: place[0]
    });
  })

}

const apiUrl = `http://localhost:3000/gettingLocations`;

axios
  .get(apiUrl)
  .then(responseFromAPI => {
    let placesArr = responseFromAPI.data;
    let positionArr = [];
    positionArr = placesArr.map((place) => {
      return [place.name, place.location.coordinates, place._id];
    })
    startMap(positionArr);
  })
  .catch(err => {
    console.log("Error while getting the data: ", err);
  });

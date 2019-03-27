
const request =require('request');


const geocode = (location, callback) => {


  let url ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token=pk.eyJ1IjoiYWxleHJ1bWEiLCJhIjoiY2p0MjllOHpjMXRvcDN5cXhyZmxsMTczdyJ9.1x_y5TQNWhKmtKiGa4Em3w";

request({ url: url, json: true}, (error, response) =>{
  if (error) {
    callback("Unable to connect to location services")
    }
    else if (response.body.features.length===0) {
      callback("Location not found.");
    }
    else {
      callback(undefined, {
        longitude: response.body.features[0].geometry.coordinates[0],
        latitude: response.body.features[0].geometry.coordinates[1],
        location: response.body.features[0].place_name

      })
    }
  })
}


module.exports =geocode

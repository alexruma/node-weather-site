const request =require('request');

const weatherGet = (lat,long, place, callback) => {
  const url="https://api.darksky.net/forecast/626e4bcb4ec70a807640a82f6b5f295d/"+lat+","+long;
  // console.log(url);
  request({ url: url, json: true}, (error, response) => {
  //     //console.log(response.body.currently.precipProbability)
  if (error) {
    callback("Unable to connect to location services")
    }
    else if (response.body.code===400) {
      callback("Location not found.");
    }
    else {

     const temp=response.body.currently.temperature;
      const precipOdds=response.body.currently.precipProbability;

      callback(undefined,`In ${place} it is currently ${temp} degrees out. There is a ${precipOdds}% chance of rain`)
      }
    });
}

module.exports={weatherGet}

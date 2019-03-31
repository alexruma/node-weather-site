
fetch("/weather?address=cleveland").then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
});



document.getElementById('submit').addEventListener('click', () => {

  let location = document.getElementById('weather-input').value;

fetch("/weather?address="+location).then((response) => {
  response.json().then((data) => {
    console.log(data)
    document.querySelector('#forecast-results').innerText=data.forecast;
    document.querySelector('#summary-results').innerText=data.summary;
    document.querySelector('#tempHigh').innerText="Today's high temperature: "+ data.high+ " degrees.";
    document.querySelector('#tempLow').innerText="Today's low temperature: "+ data.low+ " degrees.";
  })
});
});


fetch("http://localhost:3000/weather?address=cleveland").then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
});



document.getElementById('submit').addEventListener('click', () => {

  let location = document.getElementById('weather-input').value;

fetch("http://localhost:3000/weather?address="+location).then((response) => {
  response.json().then((data) => {
    console.log(data)
    document.querySelector('#forecast-results').innerText=data.forecast;
  })
});
});

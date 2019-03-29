const path = require('path');
const express = require('express');
const hbs = require('hbs');
const request = require('request');
const yargs = require('yargs');

const geocodePath=path.join(__dirname, '../src/utils/geocode')
const forecastPath=path.join(__dirname, '../src/utils/forecast')
console.log(geocodePath)
const geocode = require(geocodePath);
const forecast = require(forecastPath);
//const html= require('./src/htm-test.html')
const app = express();
const port = process.env.PORT || 3000


//alternative path for views
const viewsPath= path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname,'../template/partials')
console.log("views" + viewsPath)
console.log(__dirname);
console.log(path.join(__dirname, '../public'));
//Setup handlebars engine
app.set('view engine', 'hbs')
//Set views to alternative path
app.set('views',viewsPath)

//Set partials path
hbs.registerPartials(partialsPath)
//Setup static directory to server
app.use(express.static(path.join(__dirname, '../public')));

//renders index page/homepage
 app.get('', (req,res) => {
    res.render('indexo', {
      title: 'Weather App',
      name: 'Alex'
    }
  )
 });


 //renders about page

 app.get('/about', (req,res)=>{

   res.render('about', {
     title: "About",
     name: "Alex"
   })
 });

 app.get('/help', (req,res)=>{

   res.render('help', {
    title: 'Help',
     pageName: "Help"
   })
 });




app.get('/weather', (req, res) => {

  if(!req.query.address){
    return res.send({
      error: 'You must provide a location'
    });
      }
    geocode(req.query.address, (error,data) => {
if (error){
  return res.send({error:error})
          };

const {latitude, longitude, location} = data;


if (data) {

  forecast.weatherGet(latitude, longitude,location, (error, data) =>{

if (data){res.send (
  {
    forecast:data
  }
)
}

    }
    )
  }
});

});

app.get('/mri', (req, res) => {
  res.render('mri', {
    title:"MRI",
    name: "Alex"
  }
)
});

app.get('/help/*', (req, res) => {
  res.send(
    "Help article not found."
)
});
//renders 404 page
app.get('*', (req, res) => {
  res.render('404', {
    title:"404",
    name: "Alex"
  }
)
});

app.listen(port, () => {
  console.log('Server is up on port '+ port)
});

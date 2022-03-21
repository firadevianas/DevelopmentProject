const express = require('express');
const https = require('https');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.sendFile(__dirname+"/index.html");
    console.log(req.body.cityName);
});

app.post('/', (req, res) =>{
    const city =req.body.cityName;
    const appid = "ad561d73c8bbdc3b36a5f4264bed914e";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=" + unit +"&appid=" + appid;
    https.get(url, function(resApi){
        console.log(resApi.statusCode);
        resApi.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            console.log(temp);
            const desc = weatherData.weather[0].description;
            console.log(desc);
            const icon = weatherData.weather[0].icon;
            const imageUrl  = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
            res.write("<p> The weather currently "+desc+"</p>")
            res.write("<h1>The weather in "+city+" is " +temp+" degree celcius</h1> ")
            res.write("<img src="+imageUrl+">")
            res.send();
        })
    })
});
    

app.listen(3000, function() {
    console.log('listening on port 3000');
})
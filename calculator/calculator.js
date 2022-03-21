const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended:true}));

app.use('/css',express.static(__dirname +'/css'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    var firstNum = Number(req.body.num1);
    var secondNum = Number(req.body.num2);
    var result = firstNum + secondNum;
    res.send("The calculation of "+firstNum+" and "+secondNum+" is "+result);
});

app.get('/bmiCalculator',(req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmiCalculator', (req, res) => {
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var resultBmi = w / (h*h);
    res.send("Your BMI is "+ Math.round(resultBmi));
});



app.listen(3001,function(){
    console.log("server listening on 3001");
});
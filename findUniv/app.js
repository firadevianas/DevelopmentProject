const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.post('/',function(req,res){
    const countryName = req.body.univName;
    const url = "http://universities.hipolabs.com/search?country="+countryName;
    http.get(url,function(resApi){
        const chuncks = [];
        resApi.on("data",function(chunck){
            chuncks.push(chunck);
        })
        resApi.on('end',function(){
            const data = Buffer.concat(chuncks)
            var got = JSON.parse(data)
            for(var i = 0; i < 10; i++){
                const univname = got[i].name
                const univUrl = got[i].domains
                res.write("<p> University name : "+univname+"</p>")
                res.write("<p> URL : <b> "+univUrl+" </b></p>")
            }
            res.send();
        })
    })
    
})

app.listen(3001,function(){
    console.log('Success');
})
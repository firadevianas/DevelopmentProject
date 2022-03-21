const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to this apps lalallala</h1>')
});

app.get('/contact', (req, res) => {
    res.send("You can contact me at firadevianas@gmail.com")
});

app.get('/about', (req, res) => {
    res.send("an Qae who interested with web development")
});
app.get('/hobbies', (req, res) => {
    res.send("i like coffee and day6")
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});
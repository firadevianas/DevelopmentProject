//testing hello

const mongoose = require('mongoose');
//connect db
mongoose.connect("mongodb://localhost:27017/FruitDB",{useNewURLParser:true});
//mongoose.connect("mongodb://localhost:27017/FruitDB",{useNewURLParser:true});

const fruitSchema = new mongoose.Schema({
    name : String,
    rating: {
      type: Number,
      min: 1,
      max:10
    },
    review: String
});
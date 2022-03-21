const mongoose = require('mongoose');
//connect db
mongoose.connect("mongodb://localhost:27017/FruitDB",{useNewURLParser:true});

//create schema

const fruitSchema = new mongoose.Schema({
    name : String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name : "Apple",
  rating : 7,
  review : "good i like it"
})

const kiwi = new Fruit({
  name : "kiwi",
  rating : 4,
  review : "its too sour"
})


const orange = new Fruit({
  name : "orange",
  rating : 9,
  review : "i love it"
})


const banana= new Fruit({
  name : "banana",
  rating : 7,
  review : "not bad"
})

// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("successfully added")
//   }
// });

Fruit.find(function(err, fruits){
  if(err){
    console.log(err)
  }else{
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name)
    })
  }
})
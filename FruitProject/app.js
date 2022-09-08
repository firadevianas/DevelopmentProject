const mongoose = require('mongoose');
//connect db
mongoose.connect("mongodb://localhost:27017/FruitDB",{useNewURLParser:true});

//create schema

const fruitSchema = new mongoose.Schema({
    name : String,
    rating: {
      type: Number,
      min: 1,
      max:10
    },
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
Fruit.updateOne({_id:"62a21df80167bf712dfa14ac"},{name:"peaches"},function(err){
  if(err) {
      console.log(err);
  }else {
      console.log("succesfully update the doc")
  }
})

Fruit.deleteOne({_id:"62a21ef281e3a5c864f08332"},function(err){
  if(err) {
    console.log(err);
  }else{
    console.log("succesfully delete the doc")
  }
})
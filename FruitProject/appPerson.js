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

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    rating : 5,
    review : "its too sour"
  })

//fruit.save();

const personSchema = new mongoose.Schema({
    name : String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const mango = new Fruit({
    name : "mango",
    score: 7,
    review: "its good one"
});
mango.save();


Person.updateOne({name:"John"},{favoriteFruit:mango},function(err){
    if(err) {
        console.log(err);
    }else {
        console.log("succesfully update the doc")
    }
  })

// const person = new Person({
//     name : "John",
//     age : 30
// })

// person.save();

// Person.deleteMany({name: "John"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("success delete john");
//     } 
// })




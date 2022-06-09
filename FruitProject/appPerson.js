const mongoose = require('mongoose');
//connect db
mongoose.connect("mongodb://localhost:27017/FruitDB",{useNewURLParser:true});
//mongoose.connect("mongodb://localhost:27017/FruitDB",{useNewURLParser:true});

//create schema

const personSchema = new mongoose.Schema({
    name : String,
    age: Number
});

const Person = mongoose.model("Person",personSchema);

const person = new Person({
    name : "Johny",
    age : 37
})

//person.save();

Person.deleteMany({name: "Johny"},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("success delete john");
    } 
})

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


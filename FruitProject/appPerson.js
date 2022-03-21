const mongoose = require('mongoose');
//connect db
mongoose.connect("mongodb://localhost:27017/PersonDB",{useNewURLParser:true});

//create schema

const personSchema = new mongoose.Schema({
    name : String,
    age: Number
});

const Person = mongoose.model("Person",personSchema);

const person = new Person({
    name : "John",
    age : 37
})

person.save();
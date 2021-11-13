var tweet = prompt("Whats happening?");
alert("you have written" + tweet.length + " character, you have" + (140-tweet.length) + "character remaining"); 


//.slice(x,y)
var tweet = prompt("Whats happening?");
alert("your tweet" + tweet.slice(0,140));
alert("you have written " + tweet.length + " character, you have " + (140-tweet.length) + " character remaining"); 

//toUpperCase() / toLowerCase()

var name = "fira" ;
name = name.toUpperCase();

//create first char to Upper case 

var name = prompt("what is your name");
name = name.slice(0,1).toUpperCase() + name.slice(1,name.length)
alert("Hello " + name);

// basic artimatic
var dogAge = prompt("input dog age");
var humanAge = ((dogAge - 2)* 4) + 21;
alert(humanAge);

//increment expression 
var x = 5 
x = x + 1 ; //is the same with -> x++
x++;

//decrement expression
var x = 5;
x = x-1;
x--;

var y = 5
x += 2 ; //7

var a = 5;
var b = 3 ;
x +=y ; //8

// += / -= / *= / /=

var x = 3; //x =3;
var y = x++; //y = 3,
y +=1; //4

// function

function getMilk(money, costMilk){
  console.log("buy " +calBottle(money, costMilk)+ " bottle of milk");
  return calCharge(money,costMilk);
}
function calBottle(startMoney, costPerBottle){
  var numberOfBottles = Math.floor(startMoney/costPerBottle);
  
  return numberOfBottles;
    
}

function calCharge(startAmount,costBottle){
    var charge = startAmount % costBottle;
    return charge;
}

console.log("Here is your charge "+ getMilk(10,2));

function getMilk(money){

    var numberOfBottles = Math.floor(money/1.5);
   
    console.log("buy " +numberOfBottles+ " bottle of milk");
    return money % 1.5; // to get output from function , when not using return on var charge will not recieve any value;
  }
  //calling function
  var charge = getMilk(7);
  console.log("here is your charge " + charge);

//bmi function 
function bmiCalculator(weight,height){
  // var cal = weight / Math.pow(height,2);
  var bmi = weight / (height*height);
  return Math.round(bmi);
}

var bmi = bmiCalculator(82, 1.68); 

console.log("Your BMI is " + Math.round(bmi));

//random number 
var n = Math.random() //produce number 0 - 0.9999999
//if want to display number between 1 - 6 
n * 6 //display number 0- 5.999999
//instead use floor 
Math.floor(n*6) // display 0-6 number
Math.floor(n*6)+1 // display 1-6 number

//randomize
var m = Math.random()*100;
m = Math.floor(m) +1;
alert("Your love percentage is " + m + "%");
   
// comparator and equality
// different between '===' and '=='
// '===' check the datatype , '==' dont care about datatype

//combining comparator 
&& AND 
|| OR 
! NOT 

//bmicalculator

//my solution
function bmiCalculator (weight, height) {
  var cal = weight / (height*height);
  var bmi = Math.round(cal);
  if(bmi > 24.9){
      console.log('Your BMI is '+bmi +' so you are overweight');
  }else if(bmi >= 18.5 && bmi <= 24.9){
      console.log('Your BMI is '+bmi+' so you are normal');
  }else if(bmi < 18.5){
      console.log('Your BMI is '+bmi+' so you are underweight');
  }
  return bmi;
}

bmiCalculator(80,1.7);

//internet
function bmiCalculator(weight,height) {
  var bmi = Math.round(weight / Math.pow(height,2));
  var interpretation;
  if (bmi < 18.5) {
  interpretation = "Your BMI is " + bmi + ", so you are underweight.";
}

if (bmi >= 18.5 && bmi < 24.9) {
  interpretation ="Your BMI is " + bmi + ", so you have a normal weight.";
}
if (bmi >= 25) {
  interpretation ="Your BMI is " + bmi + ", so you are overweight.";
}
 return interpretation;

}

bmiCalculator(63,1.65);


//leap year 
function isLeap(year) {

  if(year%4 == 0){
      var a
      if(a = year%100!= 0){
          console.log(a +" leap year")
      }else{
          if(year%400 == 0){
              console.log(a+" leap year")
          }else{
              console.log(a+" not leap year")
          }
      }
  }else{
      console.log(a +" Not leap year")
  } 
  
  }
  
  isLeap(1989);
  
//Array 
var eggs = [a,b,c,d,e]

var myeggs= eggs[1]; //b

eggs.length // 5

eggs.includes('a') //true

eggs.push(1) //adding to the array [a,b,c,d,e,1]
eggs.pop(1) //kick out the lastest value of array [a,b,c,d,e]

var guesslist = ["Angela","Jack","Pam","James","Lara","Jason"];

var yourname = prompt("Enter your name ");

if(guesslist.includes(yourname)){
    console.log("Welcome to the party")
}else{
    console.log("Sorry")
}

// push 
// every devisible by 3 print fizz
// by 5 print buzz
//by 3 & 5 print fizzbuzz
var output = [];
var count = 1;

function fizzbuzz(){
   
   if(count % 3 === 0 && count % 5 === 0 ){
       output.push('fizzbuzz')
   }
   else if(count % 3 === 0){
       output.push('fizz')
   }
   else if(count % 5 === 0){
       output.push('buzz')
   }
   else{
       output.push(count)
   }
   count++;
   console.log(output);    
}
// randomize array 
function whosPaying(names) {
    
  var numPeoples = names.length;
  var randomizePeoplePosition = Math.floor(Math.random() * numPeoples);
  var randomPerson = names[randomizePeoplePosition];

  return randomPerson + " is going to buy lunch today!"
 
}
// while 
var i =1;
while(i<10){
  console.log(i);
  i++;
}

//implement while on fizzbuzz
var output = [];
var count = 1;

function fizzbuzz(){

  while(count<=100){
   
   if(count % 3 === 0 && count % 5 === 0 ){
       output.push('fizzbuzz')
   }
   else if(count % 3 === 0){
       output.push('fizz')
   }
   else if(count % 5 === 0){
       output.push('buzz')
   }
   else{
       output.push(count)
   } 
   count++;
   }
   console.log(output);    
}
//while challenge 
function beer(){
  var numberOfBottles = 99
while (numberOfBottles > 0) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
}
}

//for
for(i=0; i<2; i++){

}

//code fizzbuzz using for
var output = [];


function fizzbuzz(){

  for(var count = 1; count<=101; count++){
   
   if(count % 3 === 0 && count % 5 === 0 ){
       output.push('fizzbuzz')
   }
   else if(count % 3 === 0){
       output.push('fizz')
   }
   else if(count % 5 === 0){
       output.push('buzz')
   }
   else{
       output.push(count)
   } 
   
   }
   console.log(output);    
}

// when do you use while or for
// while -> state
// for -> iterate

//fibonnacci challenge
function fibonacciGenerator (n) {
  //Do NOT change any of the code above 👆
      
      //Write your code here:
      
      var output = [];
      if(n===1){
        output =[0];
      }else if(n===2){
        output = [0,1];
      }else{
        output = [0,1];
        for(var i=2;i<n;i++){
        output.push(output[output.length-1] + output[output.length-2]);	
        }
        
      }
      return output;
      //Return an array of fibonacci numbers starting from 0.
      
  //Do NOT change any of the code below 👇
  }
  

  //dom challange
  var list = document.lastElementChild.lastElementChild.lastElementChild.previousElementSibling.lastElementChild
  //get last 2 element
  
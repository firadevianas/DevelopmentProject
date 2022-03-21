var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

const img1 = document.getElementsByClassName("img1")[0];
img1.setAttribute("src","images/dice"+randomNumber1+".png");

const img2 = document.getElementsByClassName("img2")[0];
img2.setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}


//other solution
var urlImg = "images/dice"+randomNumber1+".png";
var imgs1 = document.querySelectorAll("img")[0].setAttribute("src",urlImg);
console.log(urlImg);
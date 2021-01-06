
var randomNumber1= Math.floor(Math.random()*6)+1; //1-6

var randomImageSource="images/dice"+randomNumber1+".png";//images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];//first image.
//document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
image1.setAttribute("src",randomImageSource);//attribute change


var randomNumber2=Math.floor(Math.random()*6)+1;//1-6

var randomImageSource2="images/dice"+randomNumber2+".png";

 var image2=document.querySelectorAll("img")[1];
//document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 is the winner 🚩";
}
else if(randomNumber2>randomNumber1)
{
document.querySelector("h1").innerHTML="Player 2 is the winner 🚩";
}
else if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").innerHTML="Match Draw";
}

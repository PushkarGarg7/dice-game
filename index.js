var randomNumber1=Math.random();
randomNumber1*=6;
randomNumber1++;
randomNumber1=Math.floor(randomNumber1);
var randomimage1="dice"+randomNumber1+".png";
var randomimagesource1="images/"+randomimage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource1);
var randomNumber2=Math.random();
randomNumber2*=6;
randomNumber2++;
randomNumber2=Math.floor(randomNumber2);
var randomimage2="dice"+randomNumber2+".png";
var randomimagesource2="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins! &#128681;"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! &#128681;"
    document.querySelector("h1").style.marginLeft="100px";

}
else {
    document.querySelector("h1").innerHTML="Draw";
}



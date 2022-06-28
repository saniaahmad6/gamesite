var random_num1=1+Math.floor(Math.random()*6);

var image1="images/dice"+random_num1+".png";
document.querySelector(".img1").setAttribute("src",image1);





var random_num2=1+Math.floor(Math.random()*6);


var image2="images/dice"+random_num2+".png";
document.querySelector(".img2").setAttribute("src",image2);


if (random_num1>random_num2){
    document.querySelector("h1").textContent="Player 1 Wins! ✨";
}
else if (random_num1<random_num2){
    document.querySelector("h1").textContent="✨ Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent="Retry Plz 😅";
}


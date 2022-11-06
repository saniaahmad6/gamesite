var gamepattern=[];
var userClickedPattern=[];
var buttoncolors=["red","blue","green","yellow"];
var level=0;
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomnumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttoncolors[randomnumber];
    gamepattern.push(randomChosenColor);
   
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColor);

   
}



$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function playsound(name){
    var audio=new Audio("sounds/" + name+".mp3");
    audio.play();
}

function animatePress(currentcolor){
    $("."+currentcolor).addClass("pressed");
    setTimeout(function () {
        $("."+currentcolor).removeClass("pressed");
    }, 100);
}

var start=false;
$(document).keypress(function(){
    if (start===false){
        $("#level-title").text("Level " + level);
        start=true;
        nextSequence();
    }
});

function checkAnswer(currentlevel){
    if (gamepattern[currentlevel]===userClickedPattern[currentlevel]){
        
        if (userClickedPattern.length === gamepattern.length){
            // console.log("success");
            setTimeout(function () {
              nextSequence();
            }, 1000);
        }
        
    }
    else{
        // console.log("wrong");
        var wrongAudio=new Audio("sounds/wrong.mp3");
        wrongAudio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        },2000);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

    }
}
function startOver(){
    level=0;
    gamepattern=[];
    start=false;
}
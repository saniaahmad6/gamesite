for (var i=0;i<document.querySelectorAll("button.drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        var letter=this.innerHTML;
        playaudio(letter);
        animation(letter);
        });
}

document.addEventListener("keypress",function(event){
    var key=event.key;
    playaudio(key);
    animation(key);
})
function playaudio(letter){
    switch (letter){
        case "w":
            var audio_obj=new Audio("sounds/crash.mp3");
            audio_obj.play();
            break;
        case "a":
            var audio_obj=new Audio("sounds/kick-bass.mp3");
            audio_obj.play();
            break;
        case "s":
            var audio_obj=new Audio("sounds/snare.mp3");
            audio_obj.play();
            break;
        case "d":
            var audio_obj=new Audio("sounds/tom-1.mp3");
            audio_obj.play();
            break;
        case "j":
            var audio_obj=new Audio("sounds/tom-2.mp3");
            audio_obj.play();
            break;
        case "k":
            var audio_obj=new Audio("sounds/tom-3.mp3");
            audio_obj.play();
            break;
        case "l":
            var audio_obj=new Audio("sounds/tom-4.mp3");
            audio_obj.play();
            break;
        default: 
            alert("Press given key letters please");
    }
}


function animation(letter){
    document.querySelector("."+letter).classList.add("pressed");
    setTimeout(function (){document.querySelector("."+letter).classList.remove("pressed")},100);
    
}
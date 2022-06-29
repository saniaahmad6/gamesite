for (var i=0;i<document.querySelectorAll("button.drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        var letter=this.innerHTML;
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

        }
        });
}




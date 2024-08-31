var numberofDrums = document.querySelectorAll(".drum").length;
for(var i=0; i<numberofDrums; i++){

// For button click sound
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var letterIs = this.innerHTML;
    makeSound(letterIs);
    buttonAnimation(letterIs);
});

// For keypress sound
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        
            case "d":
                var crash = new Audio('crash.mp3');
                crash.play();
                break;
    
            case "r":
                var kick = new Audio('kick-bass.mp3');
                kick.play();
                break;
    
            case "u":
                var snare = new Audio('snare.mp3');
                snare.play();
                break;
    
            case "m":
                var tom1 = new Audio('tom-1.mp3');
                tom1.play();
                break;
    
            case "k":
                var tom2 = new Audio('tom-2.mp3');
                tom2.play();
                break;
    
            case "i":
                var tom3 = new Audio('tom-3.mp3');
                tom3.play();
                break;
    
            case "t":
                var tom4 = new Audio('tom-4.mp3');
                tom4.play();
                break;
    
        default:
            console.log(key);
    }
}

// For adding Animation to buttons
function buttonAnimation(currentKey) {
var activeKey = document.querySelector("." + currentKey);
activeKey.classList.add("pressed");

setTimeout(function(){
activeKey.classList.remove("pressed");
} ,100);
}


}

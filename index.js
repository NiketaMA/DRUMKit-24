let numOfButtons = document.querySelectorAll(".drum").length;

for(i =0; i < numOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // let audio =  new Audio("./sounds/crash.mp3");
        // audio.play();
        let buttonInnerHTML = this.innerHTML;
        listeningEvent(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    })
}

// Keyboard Event 

document.addEventListener("keypress", (e) => {
    listeningEvent(e.key)
    buttonAnimation(e.key)
})


function listeningEvent(listen){
    let description = document.getElementById("drumDescription");
    switch (listen) {
        case "w": 
            description.textContent = "Tom 1 was pressed";
            let tom1 =  new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a": 
            description.textContent = "Tom 2 was pressed";
            let tom2 =  new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s": 
            description.textContent = "Tom 3 was pressed";
            let tom3 =  new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d": 
            description.textContent = "Tom 4 was pressed";
            let tom4 =  new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j": 
            description.textContent = "Crash was pressed";
            let crash =  new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "k": 
            description.textContent = "Kick Bass was pressed";
            let kick =  new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l": 
            description.textContent = "Snare was pressed";
            let snare =  new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log("Unknown button pressed");
            break;
    }
}
function buttonAnimation(key) {
    // element with the class corresponding to the key pressed
    var activeButton = document.querySelector("." + key);

    // "pressed" class to the selected button for visual feedback
    activeButton.classList.add("pressed");

    // Remove the "pressed" class after a short delay (100 milliseconds)
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
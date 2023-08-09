var numberOfDrumButtons=document.querySelectorAll(".drum").length;


for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHtml;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });


}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key)
{
    switch(key)
    {
        case "W":
            var HTom=new Audio("sounds/High Tom.mp3");
            HTom.play();
            break;

        case "A":
            var MTom=new Audio("sounds/MidTom.mp3");
            MTom.play();
            break; 

        case "S":
            var FTom=new Audio("sounds/Footer.mp3");
            FTom.play();
            break;

        case "D":
           var HatTom=new Audio("sounds/Hat.mp3");
           HatTom.play();
           break; 

        case "J":
            var snareTom=new Audio("sounds/snare.mp3");
            snareTom.play();
            break;
 
       case "K":
           var crashTom=new Audio("sounds/crash.mp3");
           crashTom.play();
           break;


        case "L":
            var KickTom=new Audio("sounds/Kick.mp3");
            KickTom.play();
            break;
    
        default:console.log(key);
    }
}


function buttonAnimation(currentKey){

    var activeButton=document.querySelectorAll("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){

         activeButton.classList.remove("pressed");

   },100);
}
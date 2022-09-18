
for(var n=0;n<7;n++)
{
document.querySelectorAll(".drum")[n].addEventListener("click",function()
{
  var buttonInnerHTML=this.innerHTML;

makeSound(buttonInnerHTML);
 newAnimation(buttonInnerHTML);
  }
);
}

document.addEventListener("keydown",function()
{
  makeSound(event.key);
  newAnimation(event.key);
});

function makeSound(key)
{
  switch (key) {
  case "j":
  var tom1 =new Audio("sounds/tom-1.mp3");
  tom1.play();
    break;
  case "s":
    var tom2 =new Audio("sounds/tom-2.mp3");
    tom2.play();
      break;
      case "a":
        var tom3 =new Audio("sounds/tom-3.mp3");
        tom3.play();
          break;
          case "d":
            var tom4 =new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            case "d":
              var tom4 =new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;
              case "w":
                var crash =new Audio("sounds/crash.mp3");
                crash.play();
                  break;
                  case "k":
                  var tom5 =new Audio("sounds/tom-1.mp3");
                  tom5.play();
                    break;
                      case "l":
                        var snare =new Audio("sounds/snare.mp3");
                        snare.play();
                          break;


  default:console.log(buttonInnerHTML);}
}

function newAnimation(kkey)
{
  var current=document.querySelector("."+kkey);
  current.classList.add("pressed");
  setTimeout(function()
  {
    current.classList.remove("pressed");
  },
100);
}

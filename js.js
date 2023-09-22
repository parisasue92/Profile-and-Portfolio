import java.io.File;  // Import the File class
import java.io.IOException;  // Import the IOException class to handle errors

public class CreateFile {
  public static void main(String[] args) {
    try {
      File myObj = new File("filename.txt");
      if (myObj.createNewFile()) {
        System.out.println("File created: " + myObj.getName());
      } else {
        System.out.println("File already exists.");
      }
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}






const flipCardWrapAll = document.querySelector("#flip-card-wrap-all")
const cardsWrapper = document.querySelectorAll(".flip-card-3D-wrapper")
const cards = document.querySelectorAll(".flip-card")
let frontButtons = ""
let backButtons = ""

for (let i = 0; i < cardsWrapper.length; i++) {
frontButtons = cardsWrapper[i].querySelector(".flip-card-btn-turn-to-back")
frontButtons.style.visibility = "visible"
frontButtons.onclick = function() {
cards[i].classList.toggle('do-flip')
}
  
backButtons = cardsWrapper[i].querySelector(".flip-card-btn-turn-to-front")
backButtons.style.visibility = "visible"
backButtons.onclick = function() {
cards[i].classList.toggle('do-flip')
 }  
} 

let cardTransitionTime = 500;

let $card = $('.js-card')
let switching = false

$('#btn').click(flipCard)

function flipCard () {
   if (switching) {
      return false
   }
   switching = true
   
   $card.toggleClass('is-switched')
   window.setTimeout(function () {
      $card.children().children().toggleClass('is-active')
      switching = false
   }, cardTransitionTime / 2)
}

var card = document.querySelector(".card");
var playing = false;

card.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});

$(document).ready(function(){
    $("button").click(function(){
      $("div").animate(

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
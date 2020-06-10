$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    const userInput = $("input#entry").val();
    const constArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    const vowelsArray = ["a", "e", "i", "o", "u"]

    function isLetter(userInput) {
      if (!isNaN(userInput)) {
        alert("Please enter a sentence");
     
      }
    }
    isLetter(userInput);
  })
})
let pigArr = [];



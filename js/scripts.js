$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    
    const userInput = $("input#entry").val();
    const vowelsArray = ["a", "e", "i", "o", "u"]
    let pigArr = [];

    function isLetter(userInput) { 
      if (!isNaN(userInput)) {
        alert("Please enter a sentence");
      }
    }
    isLetter(userInput);

    const arrStr = userInput.split(" ");
    arrStr.forEach(function(word){
      if(vowelsArray.includes(word[0])){
        word = word + "way"
        pigArr.push(word)
        console.log(pigArr)
      } else if (word[0]==="q" && word[1]==="u"){
        word = word + word[0] + word[1] + "ay"
        word = word.substr(2,word.length-1)
        pigArr.push(word);
        console.log(pigArr);
      }
      else if (word[0]==="s" && word [1]==="q" && word[2]==="u"){
        word = word + word[0] + word[1] + word[2] + "ay"
        word = word.substr(3,word.length-1)
        pigArr.push(word);
        console.log(pigArr);
      }
      
    }); 
    })
  })



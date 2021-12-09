// $(".choices").hide();


$(".play").click(function(){
  $(".choices").show();
  
  let userInput= $(".input").val();
  $(".userChoice").text(userInput);
  
    let userOutput= Math.ceil(Math.random() * 3);
  //write the numbers as rock paper scissors
  if(userOutput === 1) {
    let userInput = "rock;"
    // (".userChoice").text("rock");
} else if(userOutput === 2) {
      let userInput = "paper;"
    // (".userChoice").text("paper");
} else if (userOutput === 3) {
      let userInput = "sicssor;"
  // (".userChoice").text("scissor")
}
  
  let ComputerInput= $(".input").val();
  $(".computerChoice").text(ComputerInput);
  
  let computerOutput= Math.ceil(Math.random() * 3);
  //write the numbers as rock paper scissors
  if(computerOutput === 1) {
    let ComputerInput = "rock;"
    // (".computerChoice").text("rock");
} else if(computerOutput === 2) {
      let ComputerInput = "paper;"
    // (".computerChoice").text("paper");
} else if (computerOutput === 3) {
      let ComputerInput = "sicssor;"
  // (".computerChoice").text("scissor")
}
 
 $(".shoot").click(function () {
  if (userInput ===  ) {
     
   } else{
                   
          // $(".button-one").click(function() { (use this for actions?)
    //let userInput_one = $(".answer-one").val();
    //let userInput_two = $(".answer-two").val();
    
    
});
   }
 })
  
  //text of win or lose
});









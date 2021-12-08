// $(".choices").hide();


$(".play").click(function(){
  $(".choices").show();
  
  let userInput= $(".input").val();
  $(".userChoice").text(userInput);
  
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
   if(userInput === computerInput) {
     $("body").css("background-color","green");
   } else{
          $("body").css("background-color","red");
   }
 })
  
  //text of win or lose
});




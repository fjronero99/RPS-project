$(".play").click(function() {
let userinput = $(".input").val();
 $(".userChoice").text(userinput);
});

let num = Math.random();
console.log(num);

$(".play").click(function() {
let userinput = $(".input").val();
 $(".computerChoice").text(num);
});

// .333>num(rock)<.6666(paper)
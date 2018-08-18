//guess a number to start
//assign random number to each crystal

//add score of crystal to total score
//display total score
//win condition
//loss condition

var wins = 0;
var losses = 0;
var counter = 0;

//Create array of crystal images
var images = ["assets/images/crystal_blue.jpg", 
"assets/images/crystal_yellow.jpg",
"assets/images/crystal_red.jpg",
"assets/images/crystal_purple.jpg"]

// var targetNumber = (Math.floor(Math.random))
// $("#number-to-guess").text
// (Math.floor(Math.random() * 100) + 19);

//function newGame() {
//Create random number between 19 and 120 and display in HTML

var targetNumber = (Math.floor(Math.random() * 100) + 19);
    $("#number-to-guess").text(targetNumber)


//set random number options
var numberOptions = [3, 5, 8, 11];

//Choose crystal image from array
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", images[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

$("#totalScore").text(counter);


function reset () {
    counter = 0;
    $("#totalScore").text(counter);
    var targetNumber = (Math.floor(Math.random() * 100) + 19);
    $("#number-to-guess").text(targetNumber);
    $("#crystals")=[];

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", images[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

$("#totalScore").text(counter);


};
// newGame();


//Onclick  function for crystals

 $(".crystal-image").on("click", function() {

     var crystalValue = ($(this).attr("data-crystalvalue"));
     crystalValue = parseInt(crystalValue);
     counter += crystalValue;
     $("#totalScore").text(counter);
    
    if (counter == targetNumber) {
        ++wins;
        $("#totalWins").html(wins)
        alert("You Win!");
        //console.log("you win");
        reset ();

   }  else if (counter >= targetNumber) {
     ++losses;
      $("#totalLosses").html(losses)
       alert("You Lose!");
       console.log("You Lose");
      reset();
    }

});



//click on crystal to play game




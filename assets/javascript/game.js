//guess a number to start
//assign random number to each crystal

//add score of crystal to total score
//display total score
//win condition
//loss condition


var wins;
var losses;
var totalScore;

var images = ["assets/images/crystal_blue.jpg", 
"assets/images/crystal_yellow.jpg",
"assets/images/crystal_red.jpg",
"assets/images/crystal_purple.jpg"]


//Create random number between 19 and 120 and display in HTML

var numberOptions = [3, 5, 8, 11];

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", images[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

// function resetCrystals () {
// for (var i = 0; i < images.length; i++) {
//     var crystal = $("<img");
//     crystal.addClass("crystal");
//     crystal.attr('src', images[i]);
//     crystal.attr("value", increment);
//     $("crystal-images").append(crystal)
// }
// };

var increment = numberOptions [Math.round(Math.random())];



var targetNumber = (Math.floor(Math.random))
$("#number-to-guess").text
(Math.floor(Math.random() * 100) + 19);


//Create onclick function for crystals
var counter = 0;

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    counter += increment;
    alert("Your new score is: " + counter);

    if (counter === targetNumber) {
        alert("You Win!");
    }
    else if (counter <= targetNumber) {
        alert("You Lose!");
    }
});


//click on crystal to play game




function startGame () {
totalScore = 0;

}
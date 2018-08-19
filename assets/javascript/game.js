var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber;

//Create array of crystal images
var images = ["assets/images/crystal_blue.jpg", 
"assets/images/crystal_yellow.jpg",
"assets/images/crystal_red.jpg",
// "assets/images/crystal_red.png",
"assets/images/crystal_purple.jpg"]


//Create random number between 19 and 120 and display in HTML
function randomNumber() {
 targetNumber = (Math.floor(Math.random() * 100) + 19);
    $("#number-to-guess").text(targetNumber)
    console.log(targetNumber);
}

//set random number options


function resetCrystals() {
    for (var i = 0; i < images.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", images[i]);
        imageCrystal.attr("data-crystalvalue", (Math.floor(Math.random() * 12) + 1));
        $("#crystals").append(imageCrystal);
    }
}

randomNumber();
resetCrystals()
crystalClick();


$("#totalScore").text(counter);

function reset () {
    counter = 0;
    $("#totalScore").text(counter);
    var targetNumber = (Math.floor(Math.random() * 100) + 19);
    $("#number-to-guess").text(targetNumber);
    $("#crystals").empty();
    resetCrystals()
    crystalClick();
    randomNumber();
    console.log(randomNumber);

}

$("#totalScore").text(counter);

//Onclick  function for crystals

function crystalClick() {

 $(".crystal-image").on("click", function() {

     var crystalValue = ($(this).attr("data-crystalvalue"));
     crystalValue = parseInt(crystalValue);
     counter += crystalValue;
     $("#totalScore").text(counter);
     console.log(crystalValue);
    
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
 })
};







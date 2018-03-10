$( document ).ready(function(){
// Selects a random number to be shown at the start of the game
var Random = Math.floor(Math.random()*101+19)
// Number should be between 19-120
$('#scoreToMatch').text(Random);
//Appending random number to the randomNumber id in the html doc
var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)
//Setting up random numbers for each jewel
// Random number has to be between 1 - 12
var userTotal = 0;
var wins= 0;
var losses= 0;
// Declaring variables for counters
$('#wins').text(wins);
$('#losses').text(losses);
//resets the game
function reset(){
    random= Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#scoreToMatch').text(Random);
    num1= Math.floor(Math.random()*11+1)
    num2= Math.floor(Math.random()*11+1)
    num3= Math.floor(Math.random()*11+1)
    num4= Math.floor(Math.random()*11+1)
    userTotal= 0;
    $('#totalScore').text(userTotal);
    }
//adds wins to the userTotal
function yep (){
    wins++;
    $('#wins').text(wins);
    reset();
}
//adds losses to the userTotal
function nope (){
    losses++;
    $('#losses').text(losses);
    reset();
    }
//sets up click for jewels
//sets up red crystal
$('.red').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal);
    if (userTotal == Random){
        yep();
    }
    else if ( userTotal > Random){
        nope();
    }
})
//sets up blue crystal
$('.blue').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal);
    if (userTotal == Random){
        yep();
    }
    else if ( userTotal > Random){
        nope();
    }
})
//sets up yellow crystal
$('.yellow').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal);
    if (userTotal == Random){
        yep();
    }
    else if ( userTotal > Random){
        nope();
    }
})
//sets up green crystal
$('.green').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal);
    if (userTotal == Random){
        yep();
        }
    else if ( userTotal > Random){
        nope();
        }
    });
});
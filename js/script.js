// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$(document).ready(function (){
    $("#shoot").click(function() {
      var userPlayString = $("#input").val();
      userPlayString = userPlayString.toLowerCase();
      var userPlay;
      $("#userChoice").text(userPlayString);

      switch(userPlayString){
        case "rock":
          userPlay = 0;
          break;
        case "paper":
          userPlay = 1;
          break;
        case "scissors":
          userPlay = 2;
          break;
        case "spock":
          userPlay = 3;
          break;          
        case "lizard":
          userPlay = 4;
          break;


        default:
          alert("this is not an option, please enter rock, paper, or scissors");
      }

      var computerPlay = Math.floor(Math.random()*5);
      var computerPlayString;
      switch(computerPlay){
        case 0:
          computerPlayString="rock";
          break;
        case 1:
          computerPlayString="paper";
          break;
        case 2:
          computerPlayString="scissors";
          break;
        case 3:
          computerPlayString="spock";
          break;
        case 4:
          computerPlayString="lizard";
          break;
      }
      $("#computerChoice").text(computerPlayString);

      var humanWins = 0; //0 for lose, 1 for tie, 2 for win
      if((computerPlay + 1)%5 === userPlay){
        humanWins = 2;
        $("#result").text("You win!");
        console.log("You win!");
      }
      else if((userPlay+1)%5 === computerPlay){
        humanWins = 0;
        $("#result").text("You lose!");
        console.log("You lose!");
      }

      if((computerPlay + 2)%5 === userPlay){
        humanWins = 0;
        $("#result").text("You lose!");
        console.log("You win!");
      }
      else if((userPlay+2)%5 === computerPlay){
        humanWins = 2;
        $("#result").text("You win!");
        console.log("You lose!");
      }
      else if(userPlay === computerPlay){
        humanWins = 1;
        $("#result").text("Tie!");
        console.log("Tie!");
      }
    });
});

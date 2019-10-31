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
      }

      console.log(userPlay);
    });
});

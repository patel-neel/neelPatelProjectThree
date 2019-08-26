const myApp = [];

const maxRounds = 10;
let rounds = 0;






$(document).ready(function(){

    //get player response from form
    $('#submit').on('click', function(){

        //check number of rounds
        if (rounds >= maxRounds) {
            alert("No more rounds available");
            return;
        }
        rounds++;  //increment rounds
        $('#rounds').text(rounds);

        //change button color if rounds get close to 10

        if (rounds >= 5) {
            $("h3").css("background-color", "coral");
        }
        if (rounds >= 8) {
            $("h3").css("background-color", "orangered");
        }



        //read players words from text boxes
        let playerOne = $("#playerOneInput").val();
        let playerTwo = $("#playerTwoInput").val();

        //check for empty input

        if(playerOne === "") {
            alert("player One please eneter a word");
            return;
        }

        if (playerTwo === "") {
            alert("player Two please eneter a word");
            return;
        }


        // compare players responses

        let correct = false;
        if (playerOne == playerTwo) {
            //win game - game over
            correct = true;
            alert('you win!')
        } 
            //print players response and symbol to screen

            
            
            let html_playerOne = "<li> " + playerOne + "</li>";
            let html_playerSymbol = "<li> " + " X " + "</li>";
            if (correct === true) {
                html_playerSymbol = "<li> " + " Y " + "</li>";
            }
        
            
            let html_playerTwo = "<li> " + playerTwo + "</li>";

            $('#playerOneOutput').append(html_playerOne);
            $('#winOrLoseSymbol').append(html_playerSymbol);
            $('#playerTwoOutput').append(html_playerTwo);

        $("#playerOneInput").val("");
        $("#playerTwoInput").val("");

    });

    $('#resetButton').on('click', function(){
        $("#playerOneInput").val("");
        $("#playerTwoInput").val("");
        location.reload();
    })

    $("form input[name=playerOneInput]").val("")
    $("form input[name=playerTwoInput]").val("")


});


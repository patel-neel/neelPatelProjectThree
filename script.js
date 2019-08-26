const myApp = [];

myApp.scroll = () => {
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                window.location.hash = hash;
            });
        } 
    });
};

const maxRounds = 10;
let rounds = 1;

myApp.refresh = () => {
    //empty form input on refresh
    $("form input[name=playerOneInput]").val("")
    $("form input[name=playerTwoInput]").val("")
};

myApp.submitButton = () => {
    $('#submit').on('click', function () {

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
        if (playerOne === "") {
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



        let htmlPlayerOne = "<li> " + playerOne + "</li>";
        let htmlPlayerSymbol = "<li> " + `<i class="far fa-times-circle"></i>` + "</li>";

        if (correct === true) {
            htmlPlayerSymbol = "<li> " + " 🥳 " + "</li>";
        }


        let htmlPlayerTwo = "<li> " + playerTwo + "</li>";

        $('#playerOneOutput').append(htmlPlayerOne);
        $('#winOrLoseSymbol').append(htmlPlayerSymbol);
        $('#playerTwoOutput').append(htmlPlayerTwo);

        $("#playerOneInput").val("");
        $("#playerTwoInput").val("");

    });
}

myApp.resetButton = () => {
    $('#resetButton').on('click', function () {
        $("#playerOneInput").val("");
        $("#playerTwoInput").val("");
        location.reload();
    })
}

myApp.init = () => {
    myApp.scroll()
    myApp.submitButton();
    myApp.resetButton();
    myApp.refresh()
}






$(document).ready(function () {

    myApp.init();

});


$(document).ready(function () {

    // Initial Variables
    var computerPick = Math.floor(Math.random() * 120) + 1;
    var lockGame = false;
    var sum = 0;

    // We log the computer's pick to console to make it easier to troubleshoot
    console.log("Computer Pick: " + computerPick);

    $("#computer-pick").text(computerPick);


    // Here we create the on click event that gets the user"s pick
    $(".container").on("click", ".btn-choice", function () {


        // Here this lockGame line prevents the user from changing the option after the game is done.


        // We get the value associated with the button the user picked from here
        var yourPick = Math.floor(Math.random() * 12) + 1;;
        console.log("Your gems: " + yourPick);

        // We then reveal the computer's pick in the html
        $(this).text(yourPick);

        sum = yourPick + sum;

        console.log("sum: ", sum);

        $("#result").text("Your total gem points are: " + sum);

        // If your pick matched the computer's pick you let them know.
        if (sum === computerPick) {
            $("#result").text("Yep! You got it! Refresh the page to play again.");

        }

        // If the numbers did not match. You also let them know
        else if (sum > computerPick) {
            console.log("lost");
            $("#result").text("Lost. Refresh the page to play again.");

        }


    });
});
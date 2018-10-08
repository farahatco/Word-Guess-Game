var myWord = [{ W: "MAN", H: "name" },
{ W: "ALI", H: "AL" },
{ W: "TAS", H: "TA" }];
var word_test = [];
var lose = 1;
var cntr = 1;
var tries = 1;
var no = 0;
$(document).ready(function () {
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    var b = "";
    var i = 1;
    for (var i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("button-1");
        letterBtn.addClass("btn btn-primary");
        letterBtn.addClass("btn-lg active");
        letterBtn.text(letters[i]);
        $(".panel").append(letterBtn);
    }
    $("#newgame").on("click", function () {
        n = 0;
        newGame();
    });
    $(".button-1").on("click", function () {
        var pickLetter = $("<button>");
        pickLetter.addClass('button-1');
        pickLetter = $(this).text();
        var pos = foundLetter(pickLetter, no);
        var str = (myWord[no].W);

        // check number of tries          
        if (tries <= 6) {
            cntr = parseInt(cntr) * 1;
            $("#Total_tries").text(" ");
            $("#Total_tries").append(cntr);
            cntr++;
            // check if user pick all word letters.           
            if (str.length !== word_test.length) {
                switch (pos) {
                    case 0:
                        $("#buttoninput11").empty();
                        $("#buttoninput11").removeClass("btn-lg active");
                        $("#buttoninput11").removeClass("btn-outline-primary");
                        $("#buttoninput11").addClass("btn-success");
                        $("#buttoninput11").addClass("btn-lg active");
                        $("#buttoninput11").append(pickLetter);
                        word_test.push(pickLetter);
                        break;
                    case 1:
                        $("#buttoninput12").empty();
                        $("#buttoninput12").removeClass("btn-lg active");
                        $("#buttoninput12").removeClass("btn-outline-primary");
                        $("#buttoninput12").addClass("btn-success");
                        $("#buttoninput12").addClass("btn-lg active");
                        $("#buttoninput12").append(pickLetter);
                        word_test.push(pickLetter);
                        break;
                    case 2:
                        $("#buttoninput13").empty();
                        $("#buttoninput13").removeClass("btn-lg active");
                        $("#buttoninput13").removeClass("btn-outline-primary");
                        $("#buttoninput13").addClass("btn-success");
                        $("#buttoninput13").addClass("btn-lg active");
                        $("#buttoninput13").append(pickLetter);
                        word_test.push(pickLetter);
                        $("#win").append(correct);
                        correct += 1;
                        alert("conguradulation!!!!!!!");
                        resetall();
                        break;
                }
            }
            if (tries === 6) {
                $("#lose").append(lose);
                lose += 1;
                resetall();
            }
            tries++;
        }
    });
});
function resetall() {
    $("#buttoninput11").empty();
    $("#buttoninput11").addClass("button-1");
    $("#buttoninput12").empty();
    $("#buttoninput12").addClass("button-1");
    $("#buttoninput13").empty();
    $("#buttoninput13").addClass("button-1");
    no++;
    tries = 0;
    cntr = 1;
    word_test.splice(0, 2);
}
function foundLetter(c, no) {
    var c1 = c;
    var str = (myWord[no].W);
    s = str.search(c);
    return s;
}
function newGame() {
    location.reload();
}



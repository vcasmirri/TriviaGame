function gameSet () {

// Resets initial variables, defines questions and answers, resets user choices

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var questionOne = {
    question : "In the novel American Gods by Neil Gaiman and its eponymous TV adaptation on Starz, which Norse god is most likely Mr. Wednesday's true identity?",
    choices : ["Thor", "Loki", "Odin", "Heimdall"],
    outtaTime: false,
    correct: false,
    incorrect: false,
}
var questionTwo = {
    question : "Science has declared that cephalopods are the coolest animals (don't look it up). Which of the following is a cephalopod?",
    choices : ["African grey parrots", "Four-toed hedgehogs", "Axolotls", "Flamboyant cuttlefish"],
    outtaTime : false,
    correct : false,
    incorrect : false,
}

// Defines array used in for loop that displays each question.
var questionArray = [questionOne, questionTwo];

// Removes "start" button displayed when game first loads
$("button").remove("#startButton");

for (i = 0; i < questionArray.length; i++) {
    var questionTimer = "Timer will go here.";
    $("#currentQuestion").append(questionTimer);

    
    $("#currentQuestion").append(questionArray[i].question);
    console.log("The current question is: " + questionArray[i].question);
    
    // Tells game which question the user is on
    if ((questionArray[i].outtaTime == true) || (questionArray[i].correct == true) || (questionArray[i].incorrect == true)) continue;
}

}

$("#startButton").on("click", function() {

gameSet();
})
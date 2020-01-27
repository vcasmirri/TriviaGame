function gameSet () {

// Resets initial variables, defines questions and answers, resets user choices

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var questionOne = {
    question : "Mr. Wednesday is a character in the novel American Gods by Neil Gaiman and its eponymous TV adaptation on Starz. Based on North mythology, which god is he most likely to be?",
    choices : ["Thor", "Loki", "Odin", "Heimdall"],
    outtaTime: false,
    correct: false,
    incorrect: false,
    correctChoice : "Odin"
}
var questionTwo = {
    question : "Science has declared that cephalopods are the coolest animals (don't look it up). Which of the following is a cephalopod?",
    choices : ["African grey parrots", "Four-toed hedgehogs", "Axolotls", "Flamboyant cuttlefish"],
    outtaTime : false,
    correct : false,
    incorrect : false,
    correctChoice : "Flamboyant cuttlefish"
}
var questionThree = {
    question : "In the Netflix show Stranger Things, the boys play a classic game that helps them contextualize the strange events that befall them. Which game is that?",
    choices : ["Risk", "Dungeons & Dragons", "Sorry", "Chutes & Ladders"],
    outtaTime : false,
    correct : false,
    incorrect : false,
    correctChoice : "Dungeons & Dragons"
}
var questionFour = {
    question : "Which of the following legendary composers is most associated with the Romantic era?",
    choices : ["Chopin", "Bach", "Mozart", "Rachmaninoff"],
    outtaTime : false,
    correct : false,
    incorrect : false,
    correctChoice : "Chopin"
}
var questionFive = {
    question : "What did Harry Potter choose for his profession after he (spoiler alert) defeated Voldemort?",
    choices : ["Defense Against the Dark Arts Professor", "Hagrid's assistant", "Minister of Magic", "Auror"],
    outtaTime : false,
    correct : false,
    incorrect : false,
    correctChoice : "Auror"
}

// Defines array of questions
var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var questionIndex = 0;
var currentQuestion = questionArray[questionIndex];

// Removes "start" button displayed when game first loads
$("button").remove("#startButton");

function displayQuestion () {

    $("#currentQuestion").empty();
    // Define/display question timer
    var timerDisplay = $("<div>");
    timerDisplay.addClass("timer");
    timerDisplay.text("Timer will go here.");
    $("#currentQuestion").append(timerDisplay);

    // Define/display current question
    var questionDisplay = $("<div>");
    questionDisplay.addClass("question");
    questionDisplay.text(currentQuestion.question);
    $("#currentQuestion").append(questionDisplay);
    console.log("The current question is: " + currentQuestion.question);

    // Display question choices
    var buttonGroup = $("<div>");
    buttonGroup.addClass("btn-group btn-group-vertical");
    $("#currentQuestion").append(buttonGroup);
    for (i = 0; i < currentQuestion.choices.length; i++) {
        var choiceButton = $("<button>");
        choiceButton.addClass("btn choiceButton");
        choiceButton.text(currentQuestion.choices[i]);
        buttonGroup.append(choiceButton);
        console.log("Choice: " + currentQuestion.choices[i]);
    }
    
    // Defines what happens when choice is made
    $("button").on("click", function() {
    var choiceMade = $(this).text();
    console.log(choiceMade);
    if (choiceMade == currentQuestion.correctChoice) {
        console.log("You made the correct choice!")

        // Increment number of correct answers given and change object key value
        correctAnswers++;
        currentQuestion.correct = true;
        console.log("Did this object value change to true? " + currentQuestion.correct);
        console.log("The number of correct answers so far is: " + correctAnswers);
        console.log("The index of the current question is: " + questionArray.indexOf(currentQuestion));
        
    }
    else if (choiceMade != currentQuestion.correctChoice) {
        console.log("You made the wrong choice.");
        
        // Increment number of incorrect answers given
        incorrectAnswers++;
        currentQuestion.incorrect = true;
        console.log("The number of incorrect answers so far is: " + incorrectAnswers);
    }

    // Moves game to next question
    questionIndex += 1;
    currentQuestion = questionArray[questionIndex];
    console.log("The index of the next question is: " + questionArray.indexOf(currentQuestion));
    displayQuestion();

    });

}



// Displays first question upon game setup
displayQuestion();

}


$("#startButton").on("click", function() {
console.log("You pressed start!");
gameSet();
})
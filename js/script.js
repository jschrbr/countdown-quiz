// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// questions = {question:answer, question:[answer, ringer]}

// start timer (30 secs)
// load game card
// var questionKeys = Object.keys(questions)
// var questionNum = questionKeys.length random
// var question = questionKeys[questionNum]
// questions[question].length > 1

// Logging queestions from myQuestions object in questions.js
var i = 0;
while (i < myQuestions.length) {
  console.log(myQuestions[i].question);
  i++;
}

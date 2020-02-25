var count = 30;
var gameScore = 0;
var questionIndex = 0;

function loadScores() {
  $("ul").hide();
  $("#status").hide();
  $("table").show();
  $("#start").show();
  $("tbody").text("");
  $("h5").text("High Scores");
  gameScore = 0;
  count = 30;
  if (typeof Storage !== "undefined") {
    scores = localStorage.getItem("result");
    if (scores !== "") {
      scores = JSON.parse(scores);
      if (scores.length > 0) {
        scores.sort((a, b) => (a.score < b.score ? 1 : -1));
        var i = 0;
        while (i < scores.length) {
          var row = $("<tr>"),
            pos = $("<th>").text(i + 1),
            player = $("<th>").text(scores[i].player),
            score = $("<th>").text(scores[i].score);
          row.append(pos, player, score);
          $("tbody").append(row);
          i++;
        }
      }
    }
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support Web Storage...";
  }
}

function gameOver() {
  var init = $("input").val();
  if (init == "") {
    init = "ASS";
  }
  var game = { player: init.toUpperCase(), score: gameScore };
  var scores = localStorage.getItem("result");
  if (scores !== "") {
    scores = JSON.parse(scores);
    scores.push(game);
  } else {
    scores = [game];
  }
  localStorage.setItem("result", JSON.stringify(scores));
  $("input").val("");
  $("#gameOver").modal("hide");
}

function startTimer() {
  loadGame();
  let timer = setInterval(function() {
    $("#timer").text(`Time: ${--count}`);
    $("#score").text(`Score: ${gameScore}`);
    if (count <= 0) {
      clearInterval(timer);
      $("#gameOver").modal(focus);
    }
  }, 1000);
}

function checkAns(ans) {
  if (ans.target.value === myQuestions[questionIndex].correctAnswer) {
    gameScore += 10;
    $("#score").text(`Score: ${gameScore}`);
  } else {
    count -= 2;
    if (count <= 0) {
      count = 1;
    }
  }
  loadGame();
}

function loadGame() {
  $("table").hide();
  $("#start").hide();
  $("#status").show();
  $("ul").show();
  $("ul").text("");
  questionIndex = Math.floor(Math.random() * myQuestions.length);
  var randQuest = myQuestions[questionIndex].question;
  var randAns = myQuestions[questionIndex].answers;
  $("h5").text(randQuest);
  for (var key in randAns) {
    var choice = randAns[key];
    var anc = $("<a>")
      .text(choice)
      .val(key)
      .attr("class", "btn");
    var choiceItem = $("<li>").attr("class", "list-group-item");
    choiceItem.append(anc);
    $("ul").append(choiceItem);
  }
  $("li").on("click", checkAns);
}

$("#start").on("click", startTimer);
$("#save").on("click", gameOver);
$("#gameOver").on("hidden.bs.modal", loadScores);
loadScores();

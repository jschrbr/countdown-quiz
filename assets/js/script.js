const headingEl = $("h5");
const questionListEl = $("ul");
const statusEl = $("#status-panel");
const tableEl = $("table");
const highScoreEl = $("#score-table");
const startBtn = $("#start");
const saveBtn = $("#save");
const scoreEl = $("#score");
const timerEl = $("#timer");
const initialsInput = $("input");
const gameOverModal = $("#game-over");
const localItem = "result";

const gameTimer = {
  slider: null,
  Start: function() {
    this.slider = setInterval(function() {
      let count = parseInt(timerEl.text());
      let score = parseInt(scoreEl.text());
      if (count <= 0) {
        clearInterval(this.slider);
      } else {
        timerEl.text(--count);
        scoreEl.text(score);
      }
    }, 1000);
  },
  Stop: function() {
    window.clearTimeout(this.slider);
    gameOverModal.modal(focus);
  }
};

const start = gameTimer.Start; // Start the slider
const stop = gameTimer.Stop; // Stop the slider

function clearBoard() {
  questionListEl.text("");
  questionListEl.hide();
  statusEl.hide();
  tableEl.hide();
  startBtn.hide();
  highScoreEl.text("");
}

function gameOver() {
  let score = parseInt(scoreEl.text());
  let init = initialsInput.val();
  if (init == "") {
    init = "ASS";
  }
  let game = { player: init.toUpperCase(), score: score };
  let scores = localStorage.getItem(localItem);
  if (scores !== null) {
    scores = JSON.parse(scores);
    scores.push(game);
  } else {
    scores = [game];
  }
  localStorage.setItem(localItem, JSON.stringify(scores));
  initialsInput.val("");
  gameOverModal.modal("hide");
}

function checkAns(ans) {
  let count = parseInt(timerEl.text());
  let score = parseInt(scoreEl.text());
  if (ans.target.value === "correct") {
    score += 10;
    scoreEl.text(score);
  } else {
    count -= 2;
    if (count <= 0) {
      count = 0;
      stop();
    }
    timerEl.text(count);
  }
  loadGame();
}

function loadGame() {
  clearBoard();
  statusEl.show();
  questionListEl.show();
  questionIndex = Math.floor(Math.random() * myQuestions.length);
  let randQuest = myQuestions[questionIndex].question;
  let randAns = myQuestions[questionIndex].answers;
  let correctAns = myQuestions[questionIndex].correctAnswer;
  headingEl.text(randQuest);
  for (let key in randAns) {
    let choice = randAns[key];
    let anc = $("<a>")
      .text(choice)
      .addClass("btn");
    if (key === correctAns) {
      anc.val("correct");
    }
    var choiceItem = $("<li>").addClass("list-group-item");
    choiceItem.append(anc);
    questionListEl.append(choiceItem);
  }
  $("li").on("click", checkAns);
}

function loadScores() {
  clearBoard();
  tableEl.show();
  startBtn.show();
  headingEl.text("High Scores");
  let scores = localStorage.getItem(localItem);
  if (scores !== null) {
    scores = JSON.parse(scores);
    if (scores.length > 0) {
      scores.sort((a, b) => (a.score < b.score ? 1 : -1));
      scores.forEach((score, i) => {
        var row = $("<tr>"),
          pos = $("<th>").text(i + 1),
          player = $("<th>").text(score.player),
          playerScore = $("<th>").text(score.score);
        row.append(pos, player, playerScore);
        highScoreEl.append(row);
      });
    }
  }
}

loadScores();

saveBtn.on("click", gameOver);
gameOverModal.on("hidden.bs.modal", loadScores);
startBtn.on("click", function() {
  loadGame();
  timerEl.text(30);
  scoreEl.text(0);
  start();
});

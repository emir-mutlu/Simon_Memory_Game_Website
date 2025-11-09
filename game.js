// Renkler
var buttonColors = ["red", "blue", "green", "yellow"];

// Oyun dizisi & kullanıcının bastığı dizi
var gamePattern = [];
var userClickedPattern = [];

// Durum değişkenleri
var started = false;
var level = 0;
var score = 0;
var highScore = 0;

$(document).ready(function () {
  // Skoru ve rekoru yükle
  loadHighScore();
  updateScoreboard();

  // Başlat butonu
  $("#start-btn").on("click", function () {
    if (!started) {
      startGame();
    }
  });

  // Klavyeden başlatma (Enter veya Space)
  $(document).on("keydown", function (event) {
    if (
      !started &&
      (event.key === "Enter" ||
        event.key === " " ||
        event.key === "Spacebar")
    ) {
      startGame();
    }
  });

  // Renk segmentlerine tıklama
  $(".btn").on("click", function () {
    if (!started) return; // oyun başlamadıysa ignore

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  });
});

// Oyunu başlat
function startGame() {
  $("#intro-overlay").addClass("hidden");

  setTimeout(function () {
    level = 0;
    score = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = true;
    updateScoreboard();
    $("#level-title").text("Level " + level);
    $(".level-subtitle").text("Renklerin yandığı sırayı hatırla ve tekrar et.");
    nextSequence();
  }, 200);
}

// Yeni level oluştur
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  // Level ilerledikçe skor artar
  if (level > 1) {
    score = level - 1;
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("simonHighScore", highScore);
    }
  }
  updateScoreboard();

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  // Sıra gösterimi
  var $btn = $("#" + randomChosenColour);
  $btn.addClass("active-sequence");
  playSound(randomChosenColour);

  setTimeout(function () {
    $btn.removeClass("active-sequence");
  }, 200);
}

// Ses çalma
function playSound(name) {
  var audio = new Audio(name + ".mp3");
  audio.play();
}

// Kullanıcının bastığı segmentin animasyonu
function animatePress(currentColour) {
  var $btn = $("#" + currentColour);
  $btn.addClass("pressed");

  setTimeout(function () {
    $btn.removeClass("pressed");
  }, 120);
}

// Cevap kontrolü
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Şu ana kadarki tüm tıklamalar doğruysa ve dizi tamamlandıysa
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 800);
    }
  } else {
    // Yanlış cevap
    playSound("wrong");

    $("body").addClass("game-over");
    $(".simon-board").addClass("game-over-shake");

    $("#level-title").text("Oyun bitti 😵");
    $(".level-subtitle").text(
      "Birazdan tekrar ekranı gelecek, nefes al ve yeni pattern'e hazır ol."
    );

    // Efektler bittikten sonra intro / restart ekranını göster
    setTimeout(function () {
      $("body").removeClass("game-over");
      $(".simon-board").removeClass("game-over-shake");
      showRestartIntro();
    }, 900);

    startOver();
  }
}

// Game over sonrası intro ekranını tekrar göster
function showRestartIntro() {
  $("#start-btn").text("Tekrar Başla");
  $(".intro-subtitle").text(
    "Bu sefer diziyi biraz daha dikkatli takip et, rekorunu geçmeye çalış!"
  );
  $("#intro-overlay").removeClass("hidden");
}

// Oyunu resetle (high score silinmez)
function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
  score = 0;
}

// Skor / rekor yazılarını güncelle
function updateScoreboard() {
  $("#score-value").text(score);
  $("#high-score-value").text(highScore);
}

/* High score'u localStorage'dan yükle */
function loadHighScore() {
  var storedHigh = localStorage.getItem("simonHighScore");
  if (storedHigh !== null) {
    var parsed = parseInt(storedHigh, 10);
    if (!isNaN(parsed)) {
      highScore = parsed;
    }
  }
}

function shuffle(deck) {
  //   console.log("---> shuffle")
  let currentIndex = deck.length
  let temporaryValue
  let randomIndex
  const newArray = deck.slice()
  // While there remains elements to shuffle...
  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // Swap it with the current element.
    temporaryValue = newArray[currentIndex]
    newArray[currentIndex] = newArray[randomIndex]
    newArray[randomIndex] = temporaryValue
  }
  return newArray
}



function readyDeck(deck) {
  let li = ""
  deck = shuffle(deck)
  deck.forEach(l => {
    li += `<li class="card"><i class="${l}"></i></li>`
  })
  $("#deck").html(li)
}

function resetGame() {
  document.location.reload(true)
}

function timer() {
  timerRunning = true
  counter= setInterval(function() {
  secs=secs+1
  $("#timer").html("Time: " + getTimeStr(secs))
  }, 1000)
}


function handleGame() {
  let arrCards = []
  // Handling cards
  $("#deck").on("click", "li", function(e) {
    e.preventDefault()
    if (!timerRunning) {
      timer()
      
    }

    console.log($(this).children().attr("class"))
    
    // putting values of clicked cards into the array
    //if 2 cards are active, disables you from selecting other cards
    if (!$(this).hasClass("stay")) {
      
      arrCards.push($(this))
      console.log(arrCards)
    }
    if (
      arrCards.length <= 2 &&
      !$(this).hasClass("face-up") &&
      !$(this).hasClass("stay")
    ) {

      $(this).not(".stay").toggleClass("face-up")
    }
    if (arrCards.length === 2) {
      turn = turn + 1
      
      $(".turns").html(`Turns:${turn}`)

      // if total cards in array are equal to 2 then compare win/lose scenario
      if (arrCards[0].html() != arrCards[1].html()) {
        setTimeout(function() {
          arrCards[0].toggleClass("face-up")
          arrCards[1].toggleClass("face-up")
          arrCards = []
        }, 1200)
        wrong.play()
      } else {
        pairs = pairs + 1
        arrCards[0].addClass("stay")
        arrCards[1].addClass("stay")
        arrCards = []
        whohoo.play()
        if (pairs === 9) {
          clearInterval(counter) //to stop interval
          turnsScore()
          timerscore()
          winnerScreen()
        }
      }
    }
  })
}


function getTimeStr(sec) {
  var minutes = sec / 60
  var seconds = Math.floor((minutes - Math.floor(minutes)) * 60)
  return (
    "0" +  Math.floor(minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds.toFixed(0) : seconds.toFixed(0))
  )
}

function finalscreen(){
  result = turnbonus + timerbonus
  if (result > 8){
    outcome="Amazing"
   } else if (result === 7 || result === 8){
    outcome="Great Job"
   } else if (result === 5 || result === 6){
    outcome="Not Bad"
   } else if (result === 3 || result === 4){
     $("img").attr("src", "https://media.giphy.com/media/ZHdaDyeI3ISGI/giphy.gif")
    outcome="Pretty Bad"
   } else if (result < 3){
    $("img").attr("src", "https://media.giphy.com/media/ZHdaDyeI3ISGI/giphy.gif")
    outcome="You Suck!"
   }
}

function winnerScreen() {
  finalscreen()
  $(".stats").html(`<p> Outcome: ${outcome}!</p>`)
  if (result>=5){
    win.play()
  }

  $(".congrat").show()
  $(".stats").show()


}

function turnsScore() {

if(turn>=0 && turn<=15)
{
    turnbonus=10
} else if(turn>=25){
  turnbonus=0
}

switch (turn)
{
  case 16:
    turnbonus=9;
    break
  case 17:
    turnbonus=8;
    break
  case 18:
    turnbonus=7;
    break
  case 19:
    turnbonus=6;
    break
  case 20:
    turnbonus=5;
    break
  case 21:
    turnbonus=4;
    break
  case 22:
    turnbonus=3;
    break
  case 23:
    turnbonus=2;
    break
  case 24:
    turnbonus=1;
    break
                
}

}

function timerscore() {
  let howmanysecs =secs 
  if (howmanysecs < 60) {
    timerbonus = 3
  } else if (howmanysecs >= 60 && howmanysecs < 120) {
    timerbonus = 2
  } else if (howmanysecs >= 120 && howmanysecs < 180) {
    timerbonus = 1
  } else {
    timerbonus = 0
  }
  
  }

$(document).ready(function() {
  readyDeck(deck)
  handleGame()
})

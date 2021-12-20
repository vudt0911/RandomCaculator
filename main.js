//=======CountDown=========
const startBtn = document.querySelector(".startBtn");
const replayBtn = document.querySelector(".replayBtn");
const primaryNumber = document.getElementById("primary-number");
const operator = document.getElementById("operator");
const secondaryNumber = document.getElementById("secondary-number");
const result = document.getElementById("result");
const scoreEle = document.querySelector(".score");
const messageEle = document.querySelector(".message");

var mins = 0.5; //Set the number of minutes you need
var secs = mins * 60;
var currentSeconds = 0;
var currentMinutes = 0;

function Decrement() {
  currentMinutes = Math.floor(secs / 60);
  currentSeconds = secs % 60;
  if (currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
  if (secs == 0) {
    document.querySelector(".time").innerHTML = "00:00";
  } // dòng code if làm thời gian sai số chậm mất 1s sau thì thông báo hết giờ mới hiện ra
  secs--;
  document.querySelector(".time").innerHTML =
    currentMinutes + ":" + currentSeconds; //Set the element id you need the time put into.
  if (secs !== -2) {
    setTimeout(Decrement, 1000);
  } else {
    alert("Hết giờ - Số điểm của bạn là: " + scoreEle.innerText);
    document.querySelector(".time").innerHTML = "00:00";
    startBtn.classList.add("hidden");
    replayBtn.classList.remove("hidden");
  }
}

//==========main contain=============

// random number
let operatorKey;
let resultValueTrue;
scoreEle.innerText = "0";
let scoreValue;

primaryNumber.innerText = randomNumber();
secondaryNumber.innerText = randomNumber();
primaryNumberValue = Number(primaryNumber.innerText);
secondaryNumberValue = Number(secondaryNumber.innerText);

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

// caculatorKey random
function calculatorRandom(length) {
  var result = "";
  var characters = "+-*/";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  Array.from(result).map((ele) => {
    operator.innerText = ele;
  });

  operatorKey = operator.innerText;

  switch (operatorKey) {
    case "+":
      resultValueTrue = primaryNumberValue + secondaryNumberValue;
      break;
    case "-":
      resultValueTrue = primaryNumberValue - secondaryNumberValue;
      break;
    case "*":
      resultValueTrue = primaryNumberValue * secondaryNumberValue;
      break;
    case "/":
      secondaryNumberValue != 0;
      resultValueTrue = primaryNumberValue / secondaryNumberValue;
      break;
  }
  return operator;
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    scoreValue = Number(scoreEle.innerText);
    resultValue = Number(result.value);

    if (resultValueTrue.toFixed(1) == resultValue) {
      scoreValue++;
      scoreEle.innerText = String(scoreValue);
      clear();
      start();
      return;
    } else {
      messageEle.classList.remove("hidden");
    }
  }
});

// clear inputResult
function clear() {
  messageEle.classList.add("hidden");
  result.value = "";
}

// start
function start() {
  primaryNumber.innerText = randomNumber();
  secondaryNumber.innerText = randomNumber();
  primaryNumberValue = Number(primaryNumber.innerText);
  secondaryNumberValue = Number(secondaryNumber.innerText);
  calculatorRandom(4);
}

startBtn.addEventListener("click", () => {
  Decrement();
});

replayBtn.addEventListener("click", () => {
  scoreEle.innerText = "0";
  mins = 0.5;
  secs = mins * 60;
  currentSeconds = 0;
  currentMinutes = 0;
  Decrement();
  start();
});

start();

// CountDown ver2
// var myCounter = new Countdown({
//     seconds:5,  // number of seconds to count down
//     onUpdateStatus: Decrement, // callback for each second
//     onCounterEnd: function(){ alert('counter ended!');} // final action
// });

// myCounter.start();

// function Countdown(options) {
//     var timer,
//     instance = this,
//     seconds = options.seconds || 10,
//     updateStatus = options.onUpdateStatus || function () {},
//     counterEnd = options.onCounterEnd || function () {};

//     function decrementCounter() {
//       updateStatus(seconds);
//       if (seconds === 0) {
//         counterEnd();
//         instance.stop();
//       }
//       seconds--;
//     }

//     this.start = function () {
//       clearInterval(timer);
//       timer = 0;
//       seconds = options.seconds;
//       timer = setInterval(decrementCounter, 1000);
//     };

//     this.stop = function () {
//       clearInterval(timer);
//     };
//   }

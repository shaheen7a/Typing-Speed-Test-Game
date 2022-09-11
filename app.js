const words = [
  "React",
  "Angular",
  "Vue",
  "JavaScript",
  "Bootstrap",
  "SCSS",
  "HTML",
  "CSS",
  "Programming",
  "Youtube",
  "Linkedin",
  "Facebook",
  "Twitter",
  "Whatsapp",
  "Kotlin",
  "Java",
  "Clanguage",
  "Csharp",
  "Swift",
  "Android",
  "Developer",
  "Programmer",
  "Dart",
];


const lvls = {
  "Easy": 5,
  "Normal": 3,
  "Hard": 1,
}

let defaultLevel = "Easy";
let defaultLevelSeconds = lvls[defaultLevel];

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");


lvlNameSpan.innerHTML = defaultLevel;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;


input.onpaste = function () {
  return false;
}

startButton.onclick = function () {
  this.remove();
  input.focus();

  getWords()
}

function getWords() {
  let randomWord = words[Math.floor(Math.random() * words.length)];

  let wordIndex = words.indexOf(randomWord);

  words.splice(wordIndex, 1);

  theWord.innerHTML = randomWord;

  upcomingWords.innerHTML = "";

  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }

  startPlay()
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;

  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if(timeLeftSpan.innerHTML === "0") {
      clearInterval(start);

      if(theWord.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
        input.value = "";
        scoreGot.innerHTML++;

        if(words.length > 0) {
          getWords();
        }else {
          let span = document.createElement("span");
          span.className = 'good';
          let spanText = document.createTextNode("Very Good");
          span.appendChild(spanText);
          finishMessage.appendChild(span)
          upcomingWords.remove;
        }

      }else {
        let span = document.createElement("span");
        span.className = 'bad';
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000)
}
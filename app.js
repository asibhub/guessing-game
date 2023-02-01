// Generat Random Number
let randomNumber = Math.floor(Math.random() * 10 + 1);
let getRandomNumber = (document.getElementById("random").textContent =
  randomNumber);

//   Massage Status
let rightMassage = document.querySelector(".massage");
let wrongMassage = document.querySelector(".massage");

// Select output color
let getColor = document.getElementById("hide");

// Reset all value
let load = document.getElementById("reset");
load.addEventListener("click", () => {
  location.reload();
});

// Win Massaage
let winMsg = document.querySelector(".winmsg");
let win = document.getElementById("win");

// Final result count
let result = document.getElementById("count");
let count = 0;

// Input number
let getInput = document.getElementById("input-number");
let checkNumber = document.getElementById("check");
checkNumber.addEventListener("click", () => {
  count++;
  result.textContent = count;
  let output = getInput.value;
  if (output == getRandomNumber) {
    rightMassage.textContent = "Correct Number 😃";
    winMsg.textContent = "YOU WIN 😍";
    win.style.display = "block";
    getColor.style.display = "none";
  } else if (output < getRandomNumber) {
    wrongMassage.textContent = "Lower Number 😒";
    win.style.display = "none";
    winMsg.textContent = "TRY AGAIN 👍";
    getColor.style.backgroundImage = "url('./image/low.png')";
    getColor.style.display = "block";
  } else if (output > getRandomNumber) {
    wrongMassage.textContent = "Higher Number 😲";
    win.style.display = "none";
    winMsg.textContent = "TRY AGAIN 👍";
    getColor.style.backgroundImage = "url('./image/high.png')";
    getColor.style.display = "block";
  }
  getInput.value = "";
});

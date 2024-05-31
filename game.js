let userScore = 0; // initial value set kiya hai
let compScore = 0;

const choices = document.querySelectorAll(".choice"); //2.) choices ko acess kiya
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// 5.) iska use kiya choice generate karwane ke liye
const genCompChoice = () => {
  const options = ["rock", "papar", "scissors"]; // array form to index value accesable
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// 8.) yeh draw wala case hai

const drawGame = () => {
  //   console.log("game was draw!");
  msg.innerText = "Game Was Draw ! Play Again.";
  msg.style.backgroundColor = "#081b31";
  // alert(" Please Try Again"); // ek alert create kar saktey ha
};

// 7.) yaha par jo jeetey usko dikhana hai
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You win");
    msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You lose");
    msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
// 4.) userchoice and computer choice
// 6.) fhir yaha par user and computer ke bech main fihgt hogi
const playGame = (userChoice) => {
  console.log("user choice= ", userChoice);
  // generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);
  if (userChoice === compChoice) {
    // draw consdition
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors , paper
      userWin = compChoice === "paper" ? false : true; // yaha par turnary operrator lagaya gaya hai
    } else if (userChoice === "paper") {
      // rock, sissors
      userWin = compChoice == "scissors" ? false : true;
    } else {
      // rock,paper
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice); // yeh show kar dengey ki winner kon hai
  }
};

// generate computer choice -> modular way to progarmming using functions

// for each loop choice ko acsess karne ke liye
choices.forEach((choice) => {
  // fir hum har ek choice ke upar event listener add kar dengey. 3.) jaise hi koi  choice select ho
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // id se access kar saktey hai
    console.log("choice was clicked!", userChoice);
    playGame(userChoice);
  });
});

let userScore = 0;
let compScore = 0;
let userScoreDisplay = document.querySelector("#user-score");
let compScoreDisplay = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const draw = () => {
    console.log("Game was draw.");
    msg.innerText = "It's a draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("you win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreDisplay.innerText = userScore;
    }else{
        console.log("you loss");
        msg.innerText = `You Loss! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreDisplay.innerText = compScore;
    }
}

const genCompChoice = () => {
    //rock,paper,scissors
    let options = ["rock","paper","scissors"];
    const rantIdx = Math.floor(Math.random()*3);
    return options[rantIdx];

}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        play(userChoice);
    });
});

const play = (userChoice) => {
    console.log("User choice: ",userChoice);
    //computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = " , compChoice);

    if(userChoice === compChoice){
        //draw game
        draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};



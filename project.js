let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
const drawGame=()=>{
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor="081b31";
};
const showWiner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++
        userScorePara.innerText=userscore;    
        msg.innerText=` You win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`You lost.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"
    }
}

const playGame = (userChoice) => {
    //genrate comp choice
   const compChoice = genCompChoice();
    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;
        if (userChoice==='rock'){
            //scissors,paper
            userWin=compChoice==='paper'? false:true;
        }else if (userChoice==='paper'){
            //rock,scissors
            userWin=compChoice==='scissors'? false:true;

        }else{
            //rock,paper
            userWin=compChoice==='rock'? false:true;
        }
        showWiner(userWin,userChoice,compChoice)
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);   // ✅ function call here
    });
});
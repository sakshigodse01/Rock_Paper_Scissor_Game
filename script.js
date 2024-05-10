let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const mes = document.querySelector("#message");
const bmes=document.querySelector("#beats-message")
const userCout = document.querySelector("#user-score");
const compCount = document.querySelector("#comp-score");
let u=1,c=1;

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor((Math.random()*3));
    return options[randIdx]; 
};

const drawGame=(uChoice,cChoice)=>{
    mes.innerText="Game was draw, Play Again!";
    mes.style.backgroundColor="black";
    bmes.innerText=`Your ${uChoice} Tie's Computer ${cChoice}`;
    bmes.style.color="black";

};

const showWinner=(uWin,uChoice,cChoice)=>{
    if(uWin){
        mes.innerText="You Win, Well Done!!";
        mes.style.backgroundColor="Green";
        bmes.innerText=`Your ${uChoice} beats Computer ${cChoice}`;
        bmes.style.color="Green";
        userCout.innerText=u++;
    }
    else{
        mes.innerText="You lose, Try Again";
        mes.style.backgroundColor="Red";
        bmes.innerText=`Computer ${cChoice} beats Your ${uChoice} `;
        bmes.style.color="Red";
        compCount.innerText=c++;
    }
}

const playGame=(userChoice)=>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        drawGame(userChoice,compChoice);
    }else{
        let userWin= true ;
        if(userChoice === "rock"){
            //paper,scissor
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //scissor,rock
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
       
    })
})


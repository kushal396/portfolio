let userscore = 0;
let compscore = 0;

const userScore = document.getElementById('userScore');
const compScore = document.getElementById('compScore');

const choices = document.querySelectorAll(".btn");

const mesg = document.getElementById("mesg");

const genCompChoice = ()=>{
    const options = ['rock' , 'paper', 'scissors'];
    const indexNum = Math.floor(Math.random()*3);
    return options[indexNum];
}

const matchDraw = ()=>{
    mesg.innerText = "Match is Draw";
    mesg.style.backgroundColor = 'rgb(69, 69, 255)';
}

const showWinner = (userWin ,u,c)=>{
    if(userWin){
        mesg.innerText = "You Win! your " + u +" beats "+ c;
        mesg.style.backgroundColor = 'rgb(35, 146, 35)';
        userscore++;
        userScore.innerText = userscore;
    }else{
        mesg.innerText = "You Lose! "+c+" beats your "+u;
        mesg.style.backgroundColor = 'rgb(255, 59, 59)';
        compscore++;
        compScore.innerText = compscore;

    }
}

const playGame = (userchoice)=>{
    const compchoice = genCompChoice();
    // console.log(compchoice);

    if(userchoice===compchoice){
        matchDraw();
    }else{
        let userWin = true;
        if(userchoice==="rock"){
            if(compchoice==='paper'){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }else if(userchoice==="paper"){
            if(compchoice==='scissors'){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }else{
            if(compchoice==='rock'){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin , userchoice ,compchoice);
        
    }
}





choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        const userchoice = choice.getAttribute('id');
        playGame(userchoice);
    })
})
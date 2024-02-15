// We can modify the Script to take counts of win and also input of the player names and displey who is winner 

// ******************************************************************************************************


let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelectorAll('.reset-btn');

let winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let turn = true;



boxes.forEach((box) => {
    // console.log(box);
    box.addEventListener('click', ()=>{
        console.log('box was clicked');
        if(turn){
            box.innerText = "X";
            turn = false;
        }else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;

        checkwinner();
    })
});


const checkwinner = () => {
    for (let pattern of winpatterns){ 
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != '' && pos2val != '' && pos3val != ''){
            if(pos1val === pos2val && pos2val === pos3val){
                boxes.forEach((box)=>{
                box.disabled = true;
            });
            console.log('winner is diclared');
            // document.getElementById('inner-container').innertext = "<h2>"+ pos1val + " is Winner </h2>";
            document.getElementById('winnertext').innerText= "Congratulations, " + pos1val  + " is Winner"  ;
            }
        }
    }
}

const reset = document.getElementById('reset-btn');
reset.addEventListener('click', ()=>{
    window.location.reload();
});



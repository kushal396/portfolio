let circles = document.querySelectorAll(".circles");
let backline = document.querySelector(".back-line");
let prev = document.getElementById('Prev');
let next = document.getElementById('Next');

let currentActive = 1;

next.addEventListener('click',()=>{
    currentActive++;
    
    if(currentActive>circles.length){
        currentActive=circles.length;
    }

    uptade();
    
});

prev.addEventListener('click',()=>{
    currentActive--;
    
    if(currentActive<1){
        currentActive=1;
    }

    uptade();

});


function uptade(){
    circles.forEach((circle,idx)=>{
        if(idx<currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    backline.style.width= ((actives.length-1)/(circles.length-1)) *100 + '%';

    if(currentActive===1){
        prev.disabled = true;
    }else if(currentActive===circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
        
    }

    

}
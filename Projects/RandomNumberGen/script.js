// function onlynumber(input){
//     let num = /[^0-9]/gi;
//     input.value = input.value.replace(num,"");
// }

// function helo(inputvalue) {
//     console.log(inputvalue.value);
// }


// console.log(input);
// add onkeyup event 
// one way to do it but not full prove





const fromv = document.getElementById('from');
const tov = document.getElementById('to');
const mesg = document.getElementById('mesg');

// const mesgunderline = window.getComputedStyle(mesg, '::before');
// console.log(mesgunderline.backgroundColor);
// mesg.style.setProperty('--backgroundcolor', 'green');

const find = document.getElementById('btn');

find.addEventListener('click', () => {
   let a=Number(fromv.value);
   console.log(a);
   let b=Number(tov.value);
   if (a === 0 || b === 0) {
      mesg.innerText = 'Invalid Input';
      mesg.style.setProperty('--backgroundcolor', 'red');

   } else if (a === b) {
      mesg.innerText = 'Range Value is Equal';
      mesg.style.setProperty('--backgroundcolor', 'red');
   } else if (a >= b) {
      console.log(typeof(fromv.value));
      mesg.innerText = 'Invalid Range';
      mesg.style.setProperty('--backgroundcolor', 'red');
   } else {
      let step1 = tov.value - fromv.value + 1;
      let number = Math.floor(Math.random() * step1);
      let result = number + parseInt(fromv.value);
      
      mesg.innerText = result;
      mesg.style.setProperty('--backgroundcolor', 'green');
   }


});


// we can also use Number in the place of parseInt



function lightmode() {
    document.getElementById('text-color').style.color = "black";
    document.getElementById('backgcolor').style.backgroundColor = "white";
    document.getElementById('lightmode').style.display = "none";
    document.getElementById('darkmode').style.display = "inline";
    let aTag = document.querySelectorAll('#links a');
    aTag.forEach(element => {
        element.style.color = 'Black';
    });
    try{
    document.querySelector('#projects h1').style.color='black';
    let projects_link = document.querySelectorAll('.projects_link a');
    projects_link.forEach(element => {
        element.style.color = 'blue';
    });
    }catch{}

    try {
    document.getElementById('aboutsection').style.color='black';
        
    } catch{}

    try {
        document.getElementById('imgshadow').style.boxShadow = "0px 0px 20px Black";
        document.getElementById('other-portfolio-a-tag').style.color = "black";
        document.querySelectorAll('.social-media-icons a').forEach(element=>{
            element.style.color='black';
        })

    } catch{}

    
}
function darkmode() {
    document.getElementById('text-color').style.color = "white";
    document.getElementById('backgcolor').style.backgroundColor = "#181526";
    document.getElementById('darkmode').style.display = "none";
    document.getElementById('lightmode').style.display = "inline";
    let aTag = document.querySelectorAll('#links a');
    aTag.forEach((aTag) => {
        aTag.style.color = 'white';
    });

    try {
    document.querySelector('#projects h1').style.color='rgb(130, 67, 255)';
        let projects_link = document.querySelectorAll('.projects_link a');
    projects_link.forEach(element => {
        element.style.color = 'white';
    });
    } catch{}

    try{
    document.getElementById('aboutsection').style.color='whitesmoke';
    }catch{}

    try{
    document.getElementById('imgshadow').style.boxShadow = "0px 0px 20px white";
    document.getElementById('other-portfolio-a-tag').style.color = "white";
    document.querySelectorAll('.social-media-icons a').forEach(element=>{
        element.style.color='white';
    })
}catch{}

}

// function navbarslider() {
//     document.getElementById('navbaricon').style.display = "none";
//     document.getElementById('navbaricon1').style.display = "block";

// const count = document.querySelectorAll('.links li');
// for (let index = 0; index < count.length; index++) {
//     count[index].style.display = "block";
// }

//     document.getElementById('links').style.display="block";
//     document.getElementById('links').style.flexDirection="column";

// }
// function navbarslider1() {

//     document.getElementById('navbaricon').style.display = "block";
//     document.getElementById('navbaricon1').style.display = "none";

//     const count = document.querySelectorAll('.links li');

//     for (let index = 0; index < count.length; index++) {
//         count[index].style.display = "none";
//     }
// }

function navbarslider() {
    document.getElementById('navbaricon').style.display = "none";
    document.getElementById('navbaricon1').style.display = "block";
    document.getElementById('links').style.left = "0";
}
function navbarslider1() {
    document.getElementById('navbaricon1').style.display = "none";
    document.getElementById('navbaricon').style.display = "block";
    document.getElementById('links').style.left = "-100%";
}

// **************************************************************
// how to select before and after style with js
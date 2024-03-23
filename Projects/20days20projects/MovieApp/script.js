let formInput = document.getElementById('form');
let input = document.getElementById('input');
input.value='';

const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=2f081411b83545bbc26bf3dbece3ae7e";
const searchURL = "https://api.themoviedb.org/3/search/movie?query=";
const imgPATH = 'https://image.tmdb.org/t/p/original';

const movieDisplays = document.querySelectorAll('.top5-Container');
const container = document.querySelector('.container');
const message = document.querySelector('.mesg');
const movieCardContainer = document.querySelector('.movie-card-container');




async function getDisplayMovie(url) {

    const config = {
        headers: {
            accept: 'application/json',
          }
    }

    let response = await fetch(url,config);
    let datares = await response.json();
    let data = datares.results; 

    DisplayMovie(data);
    movieCardContainer.innerHTML='';

    data.forEach(movie=>{
        createMovieCard(movie);
    })

    
    
}

async function DisplayMovie(data){
    // console.log(data);

    movieDisplays.forEach((movieDisplay,idx)=>{
        movieDisplay.querySelector('h2').innerText=data[idx].title;
        movieDisplay.querySelector('small').innerText=data[idx].release_date;
        movieDisplay.querySelector('p').innerText=data[idx].overview;
        movieDisplay.style.backgroundImage=`url(${imgPATH+data[idx].poster_path})`
    })

    

}

getDisplayMovie(baseURL);

const rightbtn = document.getElementById('right');
const leftbtn = document.getElementById('left');

let currentShow =0;

rightbtn.addEventListener('click', ()=>{
    currentShow++;
    if(currentShow>(movieDisplays.length-1)){
        currentShow=(movieDisplays.length-1);
    }
    // console.log(currentShow);

    update();

})
leftbtn.addEventListener('click', ()=>{
    currentShow--;
    if(currentShow<0){
        currentShow=0;
    }
    // console.log(currentShow);

    update();

})

function update(){
    movieDisplays.forEach((movieDisplay,idx)=>{
        if(currentShow===idx){
            movieDisplay.classList.add('show');
        }else{
            movieDisplay.classList.remove('show');

        }
    })

    if(currentShow===0){
        leftbtn.disabled = true;
    }else if(currentShow===movieDisplays.length-1){
        rightbtn.disabled = true;
    }else{
    leftbtn.disabled = false;
        rightbtn.disabled = false;
        
    }
}




formInput.addEventListener('submit',(event)=>{
    event.preventDefault();
    // console.log(input.value.replace(' ','+'));
    
    fullsearchURL = `${searchURL+input.value.replace(' ','+')}&api_key=2f081411b83545bbc26bf3dbece3ae7e`;
    // console.log(fullsearchURL);

    // console.log(input.value);
    if(input.value==''){
        return;
    }
    getMovie(fullsearchURL);

    message.classList.add('space');

    removeContainer();




    
})

async function getMovie(url) {

    const config = {
        headers: {
            accept: 'application/json',
          }
    }

    let response = await fetch(url,config);
    let datares = await response.json();
    let data = datares.results; 

    console.log(data);

    

    movieCardContainer.innerHTML='';

    

    if(data.length==0){
        message.innerHTML='<h1>No Movie Found</h1>';
        return;
    }else if(input.value!=null){
        message.innerHTML=`<h1>${input.value}</h1>`;
        
    }
    
    data.forEach(movie=>{
        
        createMovieCard(movie);

    })

    
    


}

function findRating(rating){
    if(rating>=7.5){
        return 'green';
    }else if(rating>=5.5){
        return 'yellow';
    }else{
        return 'red';
    }
}


function removeContainer(){
    container.style.display='none';
}


function createMovieCard(movie){
    const {title, poster_path,overview,release_date,vote_average}=movie;
        // console.log(title);

        if(poster_path==null){
            return;
        }

        const movieCardEl = document.createElement('div');
        movieCardEl.classList.add('movie-card');
        
        movieCardEl.innerHTML = `
        <img src="${imgPATH+poster_path}" alt="Network Error">
        <div class="card-text">
            <h2>${title}</h2>
        <small>${release_date}</small>
        <h4>Rating : <span class="${findRating(vote_average)}">${vote_average.toFixed(1)}</span></h4>
        </div>
        <div class="overview">
            <h4>Overview</h4>
            <p>${overview}</p>
        </div>`

        movieCardContainer.appendChild(movieCardEl);
}
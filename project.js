const container = document.querySelector('.projects_link');
const day20Li = document.querySelector('.firstlicolor');
const miniProjects = document.getElementById('miniProjects');

miniProjects.addEventListener('click',()=>{
    container.innerHTML='';
    day20Li.classList.remove('firstlicolor');
    container.innerHTML=`
    <li><a href="Projects/20days20projects/MovieApp/index.html" target="_blank">Movie App</a></li>
    <li><a href="Projects/20days20projects/Clock/index.html" target="_blank">Clock</a></li>
    <li><a href="Projects/20days20projects/ProgressSteps/index.html" target="_blank">Progress Steps</a></li>
    <li><a href="Projects/20days20projects/AnimatedNavBar/index.html" target="_blank">Animated NavBar</a></li>
    <li><a href="Projects/20days20projects/SplitLanding/index.html" target="_blank">Split Landing Page</a></li>
    <li><a href="Projects/20days20projects/CardExpanding/index.html" target="_blank">Card Expanding Effect</a></li>
    <li><a href="Projects/20days20projects/ScrollEffect/index.html" target="_blank">Contant ComeIn on Scroll</a></li>
    <li><a href="Projects/20days20projects/SearchButton/index.html" target="_blank">Search Button Animation</a></li>
    <li><a href="Projects/20days20projects/ImageBlur/index.html" target="_blank">Image Blur Effect</a></li>
    <li><a href="Projects/20days20projects/WaveEffect/index.html" target="_blank">Wave Effect in login Form</a></li>
    <li><a href="Projects/20days20projects/JokeGen/index.html" target="_blank">Random Joke Gen (API)</a></li>
    <li><a href="Projects/20days20projects/SoundBoard/index.html" target="_blank">Sound Board</a></li>
    <li><a href="Projects/20days20projects/Loader/index.html" target="_blank">Loader</a></li>
    <li><a href="Projects/20days20projects/HeartAnimation/index.html" target="_blank">Double Click Heart Effect</a></li>
    <li><a href="Projects/20days20projects/StickyNavBar/index.html" target="_blank">Sticky NavBar</a></li>
    <li><a href="Projects/20days20projects/AutoTypeCss/index.html" target="_blank">Auto Typing Animation with CSS</a></li>
    <li><a href="Projects/20days20projects/AutoTypeJs/index.html" target="_blank">Auto Typing Animation with JS</a></li>
    <li><a href="Projects/20days20projects/CheckBox/index.html" target="_blank">Check Box Animation</a></li>
    <li><a href="Projects/20days20projects/QFA/index.html" target="_blank">QFA Page</a></li>
    <li><a href="Projects/20days20projects/DragNDrop/index.html" target="_blank">Drag N Drop</a></li>
    `;
})
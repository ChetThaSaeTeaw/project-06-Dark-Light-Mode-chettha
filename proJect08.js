const switchToggle = document.querySelector('.check-box');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');


alert('Wecome To My Website!');

function switchMode(event){
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
    }
}

function darkMode(){
    toggleIcon.children[0].textContent = "Dark-Mode";
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    nav.style.backgroundColor='rgba(0,0,0,50%)';
}

function lightMode(){
    toggleIcon.children[0].textContent = "Light-Mode";
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    nav.style.backgroundColor='rgba(255,255,255,50%)';
}

switchToggle.addEventListener('change', switchMode);






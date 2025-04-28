const navButtons = document.querySelector('nav').querySelectorAll('a');
const lightbutton = document.querySelector('button');
const allElements = document.querySelector('*');

function lightChanger() {
    if (document.querySelector('body').classList.contains('lightmode') == true){
        document.querySelector('body').classList.remove('lightmode');
        document.getElementById('modeIcon').innerHTML ='<svg id="modeIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
        document.getElementById('modeLabel').innerHTML = 'Dark';
    } else if (document.querySelector('body').classList.contains('lightmode') == false){
        document.querySelector('body').classList.add('lightmode');
        document.getElementById('modeIcon').innerHTML = 
        '<svg id="modeIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
        document.getElementById('modeLabel').innerHTML = 'Light';
    }
}


navButtons.forEach(button => {  
    button.addEventListener("click", function(event) {
        navButtons.forEach(button => button.classList.remove("active"));
        this.classList.add("active");
    })
});

lightbutton.onclick = lightChanger;
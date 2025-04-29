function lightChanger() {
    const body = document.querySelector('body');
    const icon = document.getElementById('modeIcon');
    const label = document.getElementById('modeLabel');

    if (body.classList.contains('lightmode') == true){
        body.classList.remove('lightmode');
        icon.innerHTML ='<svg id="modeIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
        label.innerHTML = 'Dark';
    } else if (body.classList.contains('lightmode') == false){
        body.classList.add('lightmode');
        icon.innerHTML = 
        '<svg id="modeIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
        label.innerHTML = 'Light';
    }
}

document.querySelector('nav').querySelector('button').onclick = lightChanger;
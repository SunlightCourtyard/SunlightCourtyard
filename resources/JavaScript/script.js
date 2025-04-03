const navButtons = document.querySelector('nav').querySelectorAll('a');
const lightbutton = document.querySelector('button');
const allElements = document.querySelector('*');

function lightChanger() {
    if (document.querySelector('body').classList.contains('lightmode') == true){
        document.querySelector('body').classList.remove('lightmode');
    } else if (document.querySelector('body').classList.contains('lightmode') == false){
        document.querySelector('body').classList.add('lightmode');
    }
}


navButtons.forEach(button => {  
    button.addEventListener("click", function(event) {
        event.preventDefault();
        navButtons.forEach(button => button.classList.remove("active"));
        this.classList.add("active");
    })
});

lightbutton.onclick = lightChanger;
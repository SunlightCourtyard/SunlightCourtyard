const navButtons = document.querySelector('nav').querySelectorAll('a');

navButtons.forEach(button => {  
    button.addEventListener("click", function(event) {
        event.preventDefault();
        navButtons.forEach(button => button.classList.remove("active"));
        this.classList.add("active");
    })
});
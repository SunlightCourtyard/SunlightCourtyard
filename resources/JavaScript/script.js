const navButtons = document.querySelector('nav').querySeletorAll('a')

navButtons.forEach(button => {  
    button.addEventListener("click", function() {
        navButtons.forEach(button => button.classList.remove("active"));
        this.classList.add("active");
        window.alert("test");
    })
});
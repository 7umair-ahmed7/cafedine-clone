let secondNav = document.querySelector(".second-nav")
let hamburger = document.querySelector(".hamburger")



hamburger.addEventListener("click", () => {
    if (secondNav.classList.contains("clicked")) {
        secondNav.classList.remove("clicked")
        secondNav.style.display = "none";
       


    } else {
        secondNav.style.display = "block";
        secondNav.classList.add("clicked")
        
    }

})


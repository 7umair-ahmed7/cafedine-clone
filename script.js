let divBackground = document.querySelector(".upper-portion")
let moreNavOptions1 = document.querySelector(".more-nav-op-1")
let moreNavOptions2 = document.querySelector(".more-nav-op-2")
let inner1 = document.querySelector(".inner-1");
let inner2 = document.querySelector(".inner-2");


let numberImg = 1;
setInterval(() => {
    if (numberImg < 4) {
        divBackground.style.backgroundImage = `url(./assets/slide-${numberImg}.jpg)`
    } else {
        numberImg = 1;
        divBackground.style.backgroundImage = `url(./assets/slide-${numberImg}.jpg)`
    }
    numberImg++;
}, 6000);


moreNavOptions1.addEventListener("mouseover", () => {
    inner1.style.display = "block";
})
moreNavOptions1.addEventListener("mouseout", () => {
    inner1.style.display = "none";
})
moreNavOptions2.addEventListener("mouseover", () => {
    inner2.style.display = "block";
})
moreNavOptions2.addEventListener("mouseout", () => {
    inner2.style.display = "none";
})
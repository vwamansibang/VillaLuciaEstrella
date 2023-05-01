const navVertical = document.querySelector(".nav-vertical")
const button = document.querySelector("button.nav-toggle")

let width = document.body.clientWidth;
let toggle = false;
window.addEventListener('resize', () => {
    width = document.body.clientWidth;
    console.log(width)
})


button.addEventListener('click', () => {
    console.log("Yep");
    console.log(navVertical.style.display);
    toggle = !toggle;
    if (toggle) {
        navVertical.style.display = 'block';
        console.log(navVertical.childNodes)
    } else {
        navVertical.style.display = 'none';
    }
})
if (width <= 550) {
    toggle = !toggle;
}

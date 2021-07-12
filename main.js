const loader = document.querySelector(".loader");
const main = document.querySelector(".main");
const about = document.querySelector(".about");

function preloader(){
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = "none";

        setTimeout(() => {
            main.style.opacity = 1;
            about.style.opacity = 1;
        }, 50);
    }, 1000);
}

preloader();
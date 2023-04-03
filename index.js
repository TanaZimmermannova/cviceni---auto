let auto = document.querySelector ("img");

const moveRight = (event) => {
    if (event.code === "ArrowRight") {
        auto.classList.add ("move--right");
        console.log ("posunuto vpravo");
    }
}

const moveBack = (event) => {
    if (event.code === "ArrowLeft") {
        auto.classList.remove ("move--right");
        console.log ("posunuto zpět");
    }
}

document.addEventListener ("keydown", moveRight);
document.addEventListener ("keydown", moveBack)


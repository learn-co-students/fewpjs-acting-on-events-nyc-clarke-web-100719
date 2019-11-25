// SOME VARIABLES AND CONTROLS!!
let dodger = document.getElementById("dodger");


// LISTEN FOR KEYS 

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

// MAKE IT MOVEEE!!! 
function moveDodgerLeft() {
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);

        if (left > 0) {
            dodger.style.left = `${left - 1}px`;
        }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}
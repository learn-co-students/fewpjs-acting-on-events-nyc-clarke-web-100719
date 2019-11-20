let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers);

    if (left > 0) {
        dodger.style.left = `${left - 5}px`;
    }
}

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(rightNumbers);

    dodger.style.left = `${left + 5}px`; 
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
})
// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers);
    dodger.style.left = `${left + 1}px`;
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerUp() {
    let upNumbers = dodger.style.top.replace("px", "");
    let top = parseInt(upNumbers);
    dodger.style.top = `${top - 1}px`;
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
});
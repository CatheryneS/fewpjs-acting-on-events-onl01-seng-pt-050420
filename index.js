// find element to manipulate 
let dodger = document.getElementById("dodger");

// def an action for manipulating the element to the left
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//  listen for an event to trigger fuction/action
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key == "ArrowRight") {
      moveDodgerRight();
    }
  });

// def an action for moving dodger right
function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(leftNumbers, 10);
   
    if (right < 360) {
      dodger.style.left = `${right + 1}px`;
    }
  }
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;
let interval = null;

function updateCount() {
    countLabel.textContent = count;
}

// Function for starting continuous adjustment
function startAdjusting(adjustment) {
    if (interval == null) {
        interval = setInterval(() => {
            count += adjustment;
            updateCount();

        }, 150); // Adjusts interval in every 150 ms

    }
}

// Function for stopping continuous adjustment
function stopAdjusting() {
    clearInterval(interval);
    interval = null;
}

// Event listeners for increase button
increaseBtn.onmousedown = () => startAdjusting(1);
increaseBtn.onmouseup = stopAdjusting;
increaseBtn.onmouseleave = stopAdjusting; // Stops if mouse leaves button

// Event listeners for decrease button
decreaseBtn.onmousedown = () => startAdjusting(-1);
decreaseBtn.onmouseup = stopAdjusting;
decreaseBtn.onmouseleave = stopAdjusting;

// Event listener for reset button
resetBtn.onclick = () => {
    count = 0;
    updateCount();
};

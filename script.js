// function startAnimation() {
//     // Step 1: Fade out the button container
//     const buttonDiv = document.querySelector(".But_start");
//     buttonDiv.style.opacity = "0";

//     // Step 2: After fade completes (e.g. 500ms), hide the button and show the candle
//     setTimeout(() => {
//         buttonDiv.style.display = "none";

//         const candle = document.querySelector(".candle");
//         candle.style.display = "block";

//         // Step 3: Make the flame visible (it will flicker via CSS)
//         const flame = document.getElementById("flame");
//         flame.style.opacity = "1";
//     }, 500); // Delay matches CSS transition
// }

// function startCandle() {
//     const buttonContainer = document.getElementById("buttonContainer");
//     const candle = document.getElementById("candle");
//     const flame = document.getElementById("flame");

//     // Fade out the button
//     buttonContainer.style.opacity = "0";

//     // After fade-out, hide button and show candle with flame
//     setTimeout(() => {
//         buttonContainer.style.display = "none";
//         candle.style.display = "block";
//         flame.style.opacity = "1"; // Flame becomes visible and starts flickering
//     }, 500); // Matches the 0.5s transition
// }

function startCandle() {
    const buttonContainer = document.getElementById("buttonContainer");
    const candle = document.querySelector(".candle");
    const flame = document.getElementById("flame");

    // Fade out the button
    buttonContainer.style.opacity = "0";

    // After fade-out, hide button and show candle with flame
    setTimeout(() => {
        buttonContainer.style.display = "none";
        candle.style.display = "block";
        flame.style.opacity = "1"; // Flame becomes visible
    }, 500); // Matches the 0.5s transition
}
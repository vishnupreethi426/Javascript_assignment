let temps = [32, 34, 31, 29, 28, 30, 33];

let sum = temps.reduce((a, b) => a + b, 0);
let avg = sum / temps.length;

document.getElementById("result").innerText =
  "Average Temperature: " + avg.toFixed(2);
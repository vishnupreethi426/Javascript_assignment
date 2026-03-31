let marks = [45, 67, 89, 32, 56, 78, 90, 66, 74, 50];

let highest = Math.max(...marks);
let lowest = Math.min(...marks);

document.getElementById("result").innerText =
  "Highest: " + highest + ", Lowest: " + lowest;
let rollNumbers = [101, 102, 103, 104, 105, 106, 107];

let odd = rollNumbers.filter(n => n % 2 !== 0);
let even = rollNumbers.filter(n => n % 2 === 0);

document.getElementById("result").innerText =
  "Odd: " + odd + " | Even: " + even;
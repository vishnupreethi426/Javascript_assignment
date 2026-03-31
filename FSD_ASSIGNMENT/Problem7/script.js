let visitors = [101, 102, 103, 101, 104, 102, 105];

let unique = [...new Set(visitors)];

document.getElementById("result").innerText =
  "Unique Visitors: " + unique;
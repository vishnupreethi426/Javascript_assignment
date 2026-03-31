let prices = [250, 150, 400, 100, 300];

let total = prices.reduce((sum, price) => sum + price, 0);

document.getElementById("result").innerText =
  "Total Cost: ₹" + total;
let changes = [100, -50, 200, -150, 300, -100];

let net = changes.reduce((a, b) => a + b, 0);

document.getElementById("result").innerText =
  "Net Profit/Loss: ₹" + net;
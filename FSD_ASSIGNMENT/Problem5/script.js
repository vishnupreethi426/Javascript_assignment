let products = ["Laptop", "Mobile", "Tablet", "Keyboard", "Mouse"];

let found = products.includes("Tablet");

document.getElementById("result").innerText =
  found ? "Tablet is available" : "Tablet not found";
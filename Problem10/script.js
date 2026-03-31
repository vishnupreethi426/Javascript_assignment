let names = ["Amit", "Suresh", "Rohan", "Priyanka", "Anjali", "Ravi"];

let longNames = names.filter(name => name.length > 5);

document.getElementById("result").innerText =
  "Names > 5 characters: " + longNames;
let borrowed = [2, 5, 0, 3, 1, 4, 0, 6];

let count = borrowed.filter(n => n === 0).length;

document.getElementById("result").innerText =
  "Students with 0 books: " + count;
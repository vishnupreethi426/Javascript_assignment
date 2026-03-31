let playlist = ["Song1", "Song2", "Song3", "Song4", "Song5"];

let reversed = [...playlist].reverse();

document.getElementById("result").innerText =
  "Reversed Playlist: " + reversed;
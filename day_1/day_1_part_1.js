const fs = require("fs");
const data = fs.readFileSync("../day_1_input.txt", "utf8");

const rotations = data.trim().split("\n");

let dial = 50;
let count = 0;

rotations.forEach(move => {
  const direction = move[0];
  const value = Number(move.slice(1));

  if (direction === "L") {
    dial = (dial - value) % 100;
  } else if (direction === "R") {
    dial = (dial + value) % 100;
  }

  if (dial < 0) {
    dial += 100;
  }

    if (dial === 0) {
    count = count + 1;
  }
});

console.log("Answer : " + count);

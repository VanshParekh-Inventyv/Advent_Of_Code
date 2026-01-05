const fs = require("fs");

const data = fs.readFileSync("../day_1_input.txt", "utf8");
const rotations = data.trim().split("\n");

let dial = 50;
let Count = 0;

rotations.forEach(move => {
  const direction = move[0];
  const steps = Number(move.slice(1));

  for (let i = 0; i < steps; i++) {
    if (direction === "L") {
      dial = (dial - 1 + 100) % 100;
    } else {
      dial = (dial + 1) % 100;
    }

    if (dial === 0) {
      Count++;
    }
  }
});

console.log("Answer:", Count);

import fs from "fs";

const input = fs.readFileSync("day_2_input.txt", "utf-8").trim();

function isInvalidID(num) {
    const s = num.toString();

    if (s.length % 2 !== 0) 
        return false;

    const half = s.length / 2;
    return s.slice(0, half) === s.slice(half);
}

const ranges = input.split(",");

let totalInvalidCount = 0;
let totalInvalidSum = 0;

for (let range of ranges) {
    let [start, end] = range.split("-").map(Number);

    for (let i = start; i <= end; i++) {
        if (isInvalidID(i)) {
            totalInvalidCount += 1;
            totalInvalidSum += i;
        }
    }
}

console.log("Total Invalid IDs:", totalInvalidCount);
console.log("Sum of Invalid IDs:", totalInvalidSum);
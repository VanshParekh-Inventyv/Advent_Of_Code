import fs from "fs";

const input = fs.readFileSync("day_2_input.txt", "utf-8").trim();

function isInvalidID(num) {
    const s = num.toString();
    const len = s.length;

    for (let patternLen = 1; patternLen <= len / 2; patternLen++) {
        if (len % patternLen !== 0) continue;
        
        const pattern = s.slice(0, patternLen);
        const repeatCount = len / patternLen;

        if (pattern.repeat(repeatCount) === s) {
            return true;
        }
    }
    return false;
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
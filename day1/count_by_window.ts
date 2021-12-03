import { copy } from "https://deno.land/std@0.116.0/io/util.ts";

const text = await Deno.readTextFile(Deno.args[0]);
const depths = text.trim().split("\n").map((line) => parseInt(line));
const depthsInWindow = [];

for (let i = 0; i < depths.length - 2; i++) {
  depthsInWindow.push(depths.slice(i, i + 3).reduce((x, y) => x + y));
}

let increaseCount = 0;
let notChanged = 0;
let decreaseCount = 0;

for (let i = 1; i < depths.length; i++) {
  if (depthsInWindow[i - 1] < depthsInWindow[i]) {
    increaseCount++;
  } else if (depthsInWindow[i - 1] == depthsInWindow[i]) {
    notChanged++;
  } else {
    decreaseCount++;
  }
}

console.log("Increase count=" + increaseCount);
console.log("decreaseCount count=" + decreaseCount);
console.log("notChanged count=" + notChanged);

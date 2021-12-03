import { copy } from "https://deno.land/std@0.116.0/io/util.ts";

const text = await Deno.readTextFile(Deno.args[0]);
const depths = text.trim().split("\n").map((line) => parseInt(line));

let increaseCount = 0;
let decreaseCount = 0;

for (let i = 1; i < depths.length; i++) {
  if (depths[i - 1] < depths[i]) {
    increaseCount++;
  } else {
    decreaseCount++;
  }
}

console.log("Increase count=" + increaseCount);
console.log("decreaseCount count=" + decreaseCount);
////deno run --allow-read count_increments.ts sonar_data.txt

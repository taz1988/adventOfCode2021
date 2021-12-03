import { copy } from "https://deno.land/std@0.116.0/io/util.ts";

const text = await Deno.readTextFile(Deno.args[0]);
const lines = text
  .trim()
  .split("\n");

const instructionToNumberConverter = (line: string) => {
  if (line.includes("up")) {
    return -parseInt(line.slice(3));
  } else {
    return parseInt(line.slice(5));
  }
};

const horizontalPosition = lines
  .filter((line) => line.includes("forward"))
  .map((line) => parseInt(line.slice(8)))
  .reduce((x, y) => x + y);

const depth = lines
  .filter((line) => !line.includes("forward"))
  .map(instructionToNumberConverter)
  .reduce((x, y) => x + y);

console.log("horizontalPosition=" + horizontalPosition);
console.log("depth=" + depth);
console.log(
  "horizontalPositionxdepth=" +
    horizontalPosition * depth,
);
////deno run --allow-read determine_position.ts submarine_movements.txt

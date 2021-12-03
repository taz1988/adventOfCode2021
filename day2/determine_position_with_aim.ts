import { copy } from "https://deno.land/std@0.116.0/io/util.ts";

const text = await Deno.readTextFile(Deno.args[0]);
const lines = text
  .trim()
  .split("\n");

let aim = 0;
let horizontalPosition = 0;
let depthPosition = 0;

const executeInstructions = (line: string) => {
  if (line.includes("up")) {
    aim += -parseInt(line.slice(3));
  } else if (line.includes("down")) {
    aim += parseInt(line.slice(5));
  } else {
    let value = parseInt(line.slice(8));
    horizontalPosition += value;
    depthPosition += aim * value;
  }
};

lines.forEach(executeInstructions);

console.log("horizontalPosition=" + horizontalPosition);
console.log("depthPosition=" + depthPosition);
console.log("aim=" + aim);
console.log(
  "horizontalPositionxdepthPosition=" + horizontalPosition * depthPosition,
);
////deno run --allow-read determine_position_with_aim.ts submarine_movements.txt

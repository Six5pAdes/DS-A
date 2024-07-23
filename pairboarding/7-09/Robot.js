/*Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represented by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.*/

// function takes a string as input and returns a boolean value
// if the robot makes a circle, return true, else return false
// if the robot moves back to the original place, it makes a circle
// robot starts at position (0, 0) represented by x and y coordinates
// each move is represented by a character (R, L, U, D)
// R increments on x axis; L decrements on x axis; U increments on y axis; D decrements on y axis

function Robot(str) {
  x = 0;
  y = 0;

  for (let s of str) {
    if (s === "U") y++;
    if (s === "D") y--;
    if (s === "L") x--;
    if (s === "R") x++;
  }

  //   if (x === 0 && y === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return x === 0 && y === 0;
}

console.log(Robot("UD"));
console.log(Robot("LL"));
console.log(Robot("RRULL"));
console.log(Robot("RULD"));

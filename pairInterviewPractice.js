// takes in a message
// increment amount of letters in message
// outputs letters shifted by the amount in the alphabet
// all lowercase, spaces included, no punctuation
function letterShift(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let letters = message.slice();
  const letter = [];

  const sum = 0;

  if (letters.has(alphabet)) {
    letter.push(letters);
    sum += letter;
  }

  return sum;
}

// count how many letters are in message
console.log(letterShift("brian")); // 5 letters

const sentence = "Our goal is to animate the sentence";
let sentenceDelay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, sentenceDelay += 50) 
}
setTimeout(() => {
  process.stdout.write("\n");
}, sentenceDelay);
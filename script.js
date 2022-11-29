// put your globals here - hint: select elements from the HTML
const textInput = document.getElementById('text-area');
const countBtn = document.getElementById('countBtn');
const wordCount = document.getElementById('wordCountInput');
const findInput = document.getElementById('findWordInput');
const findBtn = document.getElementById('findBtn');
const chosenWrdCnt = document.getElementById('wordFoundInput');

// dont' forget to add event listeners to teh buttons
countBtn.addEventListener('click', countWords);
findBtn.addEventListener('click', findWords);

function countWords() {
  let words = textInput.value.split(" ");
  let numWords = words.length;
  for (let i = 0; i < words.length; i++){
    if (words[i] == ''){
      totalWords = numWords - 1;
    }
  }
  printData(totalWords, wordCount)
}


function findWords() {
  let foundWords = [];
  let words = textInput.value.split(" ");
  for (let i = 0; i < words.length; i++){
    if (words[i] == findInput.value){
      foundWords.push(words[i]);
    }
  }
  printData(foundWords.length, chosenWrdCnt);
}


// change param1 and param2 to identifiers that make sense
function printData(count, print) {
  print.value = `${count} words`;
}

//Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

 function badWordsNotGood(word, text) {
  let badWordArray = text.split(" ");
   badWordArray.forEach(function(element) {
     if (element.toLowerCase().includes(word.toLowerCase())) {
       return badWordArray.filter(word);
     }
   });
   
}

const word = "zoinks";
const text = "you little zoinks"

badWordsNotGood(word, text);


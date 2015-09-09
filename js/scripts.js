var palindromeCheck = function(word) {

  if (isNaN(word) === false){
    word = String(word);
  }

  // original words
  var splitWord = word.split(" ");
  var joinedWord = splitWord.join("");

  // reversed words
  var splitJoinedWord = joinedWord.split("");
  var reversedWordArray = splitJoinedWord.reverse();
  var reversedJoinedWord = reversedWordArray.join("");



  if (joinedWord === reversedJoinedWord) {
    return true;
  } else {
    return false;
  }

};

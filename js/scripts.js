var palindromeCheck = function(word) {
  var split_word = word.split("");
  var reversed_word = split_word.reverse();

  if (word === reversed_word.join) {
    return true;
  } else {
    return false;
  }

};

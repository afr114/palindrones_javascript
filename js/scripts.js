var palindromeCheck = function(word) {

  if (isNaN(word) === false){
    word = String(word);
  }

  // original words
  var splitWord = word.toLowerCase().split(" ");
  var joinedWord = splitWord.join("");

  // reversed words
  var splitJoinedWord = joinedWord.toLowerCase().split("");
  var reversedWordArray = splitJoinedWord.reverse();
  var reversedJoinedWord = reversedWordArray.join("");



  if (joinedWord === reversedJoinedWord) {
    return "This is a palindrome!";
  } else {
    return "This is not a palindrome!";
  }

};

$(document).ready(function() {
  $("form#phrase").submit(function(event){
    var string = $("input#phrase").val()
    var result = palindromeCheck(string)

    $(".palindrome-result").text(result);

    $("#result").show();
    event.preventDefault();
  })
})

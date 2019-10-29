$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#sentence").val();
    var letters = sentence.split("");

    var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

    for (i = 0; i < letters.length; i += 1) {
      if (vowels.includes(letters[i])) {
        letters[i] = "-";
      }
    };

    $("#output").text(letters.join(""));

    // var array = letters.map(function(letter) {
    //     if (vowels.includes(letter)) {
    //       return letter = "-";
    //     } else {
    //       return letter;
    //     }
    // });
    //
    // $("#output").text(array.join(""));

  });
});

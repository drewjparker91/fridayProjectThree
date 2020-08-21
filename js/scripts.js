$(document).ready(function() {
  $("#numberForm").submit(function(event) {
  event.preventDefault();
  let end = $("#inputnumber").val();
  let 
  

  }




  function submitArray (end) {
    let numbers = [];
    for (let i = 0; i < origNumber; i++) {
      let sentence = index.toString();
      if(sentence.includes(3)) {
      numbers.push("Won't you be my neighbor?");
      } else if (words.includes(2)) {
        numbers.push("Boop!");
      } else if (words.includes(1)) {
        numbers.push("Beep!")
      } else {
        numbers.push(sentence);
      }

    } 
    return numbers;
  }
});
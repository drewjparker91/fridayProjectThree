function displayResults(result) {
  $("#results").text(result);
  $("#results").show();
}

$(document).ready(function () {
  $("#numberForm").submit(function () {
    event.preventDefault();

    //Create error messages
    let userNum = parseInt($("#inputNumber").val());
    if (userNum > 1000) {
      displayResults("Mr. Roboger can't count above 1000 or he will break!");
      return;
    } else if (userNum < 0) {
      displayResults("Mr. Roboger only works with positive numbers!");
      return;
    }

    //Construct output array
    let outputArray = [];
    for (let i = 0; i <= userNum; i++) {
      let asString = i.toString();
      if (asString.includes("3")) {
        outputArray.push("Won't you be my neighbor");
      } else if (asString.includes("2")) {
        outputArray.push("Boop!");
      } else if (asString.includes("1")) {
        outputArray.push("Beep!");
      } else {
        outputArray.push(i);
      }
    }
    displayResults(outputArray);
  });
});

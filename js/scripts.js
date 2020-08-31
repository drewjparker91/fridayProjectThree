// function isInputValid(input) {
//   if (input > 1000) {
//     displayResults("Mr. Roboger can't count above 1000 or he will break!");
//     return false;
//   } else if (input < 0) {
//     displayResults("Mr. Roboger only works with positive numbers!");
//     return false;
//   } else return true;
// }

// function constructOutputArray(userNum) {
//   let outputArray = [];
//   for (let i = 0; i <= userNum; i++) {
//     let asString = i.toString();
//     if (asString.includes("3")) {
//       outputArray.push("Won't you be my neighbor");
//     } else if (asString.includes("2")) {
//       outputArray.push("Boop!");
//     } else if (asString.includes("1")) {
//       outputArray.push("Beep!");
//     } else {
//       outputArray.push(i);
//     }
//   }
//   return outputArray;
// }

// $(document).ready(function () {
//   $("#numberForm").submit(function () {
//     event.preventDefault();

//     // Get num
//     let userNum = parseInt($("#inputNumber").val());

//     let isValid = isInputValid(userNum);
//     if (isValid) {
//       // Construct output array
//       // let outputArray = [];
//       // for (let i = 0; i <= userNum; i++) {
//       //   let asString = i.toString();
//       //   if (asString.includes("3")) {
//       //     outputArray.push("Won't you be my neighbor");
//       //   } else if (asString.includes("2")) {
//       //     outputArray.push("Boop!");
//       //   } else if (asString.includes("1")) {
//       //     outputArray.push("Beep!");
//       //   } else {
//       //     outputArray.push(i);
//       //   }
//       // }
//       let result = constructOutputArray(userNum);
//       // Display Output Arrayd
//       displayResults(result);
//     }
//   });
// });

// // GOAL: create error messages

// // if userNumber is Nan
// // else if user number is empty
// // return "Whoops! Thats not a number! Please enter a number!"
// // else usernumber is over 1000
// // return "Mr Roboto can only count to 10000!"


function displayResults(result) {
  $("#results").text(result);
  $("#results").show();
}

function isInputValid(input) {
  if (input > 1000) {
    displayResults("Mr. Roboger can't count above 1000 or he will break!");
    return false;
  } else if (input < 0) {
    displayResults("Mr. Roboger only works with positive numbers!");
    return false;
  } else return true;
}

function constructOutputArray(userNum) {
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
  return outputArray;
}

$(document).ready(function () {
  $("#numberForm").submit(function () {
    event.preventDefault();

    // Get num
    let userNum = parseInt($("#inputNumber").val());

    let isValid = isInputValid(userNum);
    if (isValid) {
      // Construct output array
      // let outputArray = [];
      // for (let i = 0; i <= userNum; i++) {
      //   let asString = i.toString();
      //   if (asString.includes("3")) {
      //     outputArray.push("Won't you be my neighbor");
      //   } else if (asString.includes("2")) {
      //     outputArray.push("Boop!");
      //   } else if (asString.includes("1")) {
      //     outputArray.push("Beep!");
      //   } else {
      //     outputArray.push(i);
      //   }
      // }
      let result = constructOutputArray(userNum);
      // Display Output Arrayd
      displayResults(result);
    }
  });
});
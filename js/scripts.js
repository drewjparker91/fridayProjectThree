$(document).ready(function() {
  $("#numberForm").submit(function() {
  event.preventDefault();
    // Get user input
    let userNum = parseInt($("#inputNumber").val());



    // Looping Logic
    let outputArray = []

    for (let i=0; i <= userNum; i++){
      let asString = i.toString();
      if (asString.includes("3")){
      outputArray.push("Won't you be my neighbor");
      }else{
        outputArray.push(i);   
      }
      console.log('>>> ' + asString);
      
      
    }

    // Display Results
    $("#outputText").text(outputArray);
    $("#outputText").show();
  })
})




 



// GOAL: convert userNumber into an array from 0-userNumber


// GOAL: replace 1 with beep! | replace 2 with boop! | replace 3 with "wont you be my neighbor"

// const userNum = 7
// let outputArray = []
// for (let i=0; index <= userNum; i++) {
//   console.log('>>>' + i)

//}
  // if a number in usernum.length .includes(3)
  // .push "won't you be my neighbor" to outputArray
  // else if a number in userArray .includes(2)
  // .push "boop!" to outputArray
  // else if a number in userArray .includes(1)
  // .push "beep!" to outputArray
  // else if the number contains none of the numbers, push back original number in UserArray




  // GOAL: create error messages

  // if userNumber is Nan 
  // else if user number is empty
  // return "Whoops! Thats not a number! Please enter a number!"
  // else usernumber is over 1000
  // return "Mr Roboto can only count to 10000!"

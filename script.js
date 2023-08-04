  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var blockElements = [
  $("#hour-9"),
  $("#hour-10"),
  $("#hour-11"),
  $("#hour-12"),
  $("#hour-1"),
  $("#hour-2"),
  $("#hour-3"),
  $("#hour-4"),
  $("#hour-5"),
];



$(document).ready(function () {
  
  setInterval(function(){
    currTime = dayjs();
    $("#currentDay").text("Current time is " + currTime.$H + ":" + currTime.$m);

    // loop that checks whether boxes should be set for past, present, or future    
    for (var i=0; i<9; i++) {
      if ((currTime.$H)-9 > i) 
        setPast(i);

      else if ((currTime.$H)-9 == i)
        setPresent(i);

      else 
        setFuture(i);
    }

  },500)
  
  //console.log ("Current time is " + currTime);
  //$("header").append("Current time is " + dayjs().$H + ":" + dayjs().$m);

  //TODO fix formatting on this and update it so it shows AM and PM rather than 24 hours.
  //A simple if statement will do. If time is greater than 12, ...
  

  




  $("button").click (function(){
    //I want to save the button's sibling text to the key of the box class
    console.log ("Button was pressed");
    localStorage.setItem(    $(this).parent().attr("id")   ,    $(this).siblings("textArea").val());
  })

  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //I can probably use the parent function to check which button has been clicked.
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



$(function checkHour (blockTime) {
  if (blockTime < dayjs().$H) {
    
  }

  else if (blockTime == dayjs().$H) {

  }

  else {

  }
    
})


//functions that change class to match current time
function setPast (hourIndex) {
  if ($(blockElements[hourIndex]).hasClass("past") == false) {

    $(blockElements[hourIndex]).addClass ("past");
    $(blockElements[hourIndex]).removeClass("present");
    $(blockElements[hourIndex]).removeClass("future");

  }

}

function setPresent (hourIndex) {
  if ($(blockElements[hourIndex]).hasClass("present") == false) {

    $(blockElements[hourIndex]).addClass ("present");
    $(blockElements[hourIndex]).removeClass("past");
    $(blockElements[hourIndex]).removeClass("future");

  }
}

function setFuture (hourIndex) {
  if ($(blockElements[hourIndex]).hasClass("future") == false) {

    $(blockElements[hourIndex]).addClass ("future");
    $(blockElements[hourIndex]).removeClass("past");
    $(blockElements[hourIndex]).removeClass("present");

  }
}
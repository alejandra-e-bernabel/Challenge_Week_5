$(document).ready(function () {

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


  
  setInterval(function(){
    currTime = dayjs();

    //prints out current time and date in specificed format

    $("#currentDate").text ("Today's date is " + currTime.format ("MMM D, YYYY"));
    $("#currentTime").text("Current time is " + currTime.format("h:mm A"))

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
  
//these if statements make it so that when the page is regreshed, all text box content is retrieved
//from local memory and printed back to the calendar in the correct location

  if (localStorage.getItem("hour-9") != null) {
    $("#hour-9-button").text(localStorage.getItem("hour-9"));
  }

  if (localStorage.getItem("hour-10") != null) {
    $("#hour-10-button").text(localStorage.getItem("hour-10"));
  }

  if (localStorage.getItem("hour-11") != null) {
    $("#hour-11-button").text(localStorage.getItem("hour-11"));
  }

  if (localStorage.getItem("hour-12") != null) {
    $("#hour-12-button").text(localStorage.getItem("hour-12"));
  }

  
  if (localStorage.getItem("hour-1") != null) {
    $("#hour-1-button").text(localStorage.getItem("hour-1"));
  }

  
  if (localStorage.getItem("hour-2") != null) {
    $("#hour-2-button").text(localStorage.getItem("hour-2"));
  }

  if (localStorage.getItem("hour-2") != null) {
    $("#hour-2-button").text(localStorage.getItem("hour-2"));
  }

  
  if (localStorage.getItem("hour-3") != null) {
    $("#hour-3-button").text(localStorage.getItem("hour-3"));
  }

  
  if (localStorage.getItem("hour-4") != null) {
    $("#hour-4-button").text(localStorage.getItem("hour-4"));
  }

  
  if (localStorage.getItem("hour-5") != null) {
    $("#hour-5-button").text(localStorage.getItem("hour-5"));
  }



//buttons to reset scheduler and save new events to local memory.
  $(".saveBtn").click(function(){
    //I want to save the button's sibling text to the key of the box class
    console.log ("Button was pressed");
    localStorage.setItem(    $(this).parent().attr("id")   ,    $(this).siblings("textArea").val());
  })

  $("#clearMem").click(function(){
    localStorage.clear();
    location.reload();
  })

});


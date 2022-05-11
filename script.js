
// //set current day and time in header
// var todaysDate = $("#currentDay");
// var todaysDate= moment().format('dddd MMMM Do YYYY');
// $("currentDay").text(todaysDate);
// var saveActivity = $(".saveBtn")


$(init);

function init() {
  // get current day and display on top of page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // //grab current hour of day to determine past, present, future:
  
  $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    // load saved data from local storage
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });

// //add evvent listener for save button:
  $(".saveBtn").on("click", handleSave);
}

function colorTimeBlocks() {
  // for each time block
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format("H"));
    // remove any class we may have added before
    $(this).removeClass("past present future");
    // color block based on past, present, future class
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

colorTimeBlocks();
setInterval(colorTimeBlocks, 60000);
// //save to local storage:
// window.localStorage.setItem("","");
function handleSave(event) {
  // get the id of our parent
  var hourId = $(this).parent().attr("id");
  // save data in local storage
  localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
}

// var textValue = $(this).siblings("color-block".value)
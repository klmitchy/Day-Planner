
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
  colorTimeBlocks();
  setInterval(colorTimeBlocks, 60000);

  
  $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    // load saved data from local storage
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });

// //add evvent listener for save button:
  $(".saveBtn").on("click", handleSave);
}

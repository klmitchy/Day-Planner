
//set current day and time in header
var todaysDate = $("#currentDay");

var todaysDate= moment().format('dddd MMMM Do YYYY');
$("currentDay").text(todaysDate);


//grab current hour of day to determine past, present, future:

var currentTime = moment().hours();

//add evvent listener for save button:

var saveActivity = $(".saveBtn")

$(".saveBtn")("click", function() {
 
    var textValue = $(this).siblings("color-block".value)

})

//save to local storage:
window.localStorage.setItem("","");
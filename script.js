
// //set current day and time in header
// var todaysDate = $("#currentDay");
// var todaysDate= moment().format('dddd MMMM Do YYYY');
// $("currentDay").text(todaysDate);
// var saveActivity = $(".saveBtn")


  // -------- CURRENT DAY -------- \\
$('#currentDay').text(moment().format('[Today\'s Date: ]dddd, MMMM Do, YYYY'));

// -------- TIME BLOCK RENDERING -------- \\
$(function renderTextArea() {
    let timeBlockRows = $('.row');
    let currentTime = Number(moment().format('H'));

    timeBlockRows.each(function (i) {
        let rowText = $(this).children('textarea');
        let storedText = JSON.parse(localStorage.getItem('row ' + i))

        // adjust background color depending on current time
        if (currentTime === $(this).data('time')) {
            $(this).children('textarea').addClass('present');
            $(this).prevAll().children('textarea').addClass('past');
            $(this).nextAll().children('textarea').addClass('future');
        }
        
        // validate if there is any saved text
        if (storedText === null) {
            return;
        }

        // set value as saved text
        rowText.val(storedText);
    });

    if (currentTime < 9) {
        // set background to green if before 9 AM
        $('.container').find('textarea').addClass('future');

    } else if (currentTime > 17) {
        // set background to gray if after 5 PM
        $('.container').find('textarea').addClass('past');
    }
});

// -------- SAVE BUTTON --------\\
$('.saveBtn').on('click', function () {
    let textArea = $(this).siblings('textarea').val();
    let rowIndex = $(this).parent().data('index');
    let textValue = textArea;

    localStorage.setItem('row ' + rowIndex, JSON.stringify(textValue));
})


$('.clearBtn').on('click', function () {
    localStorage.clear();
    location.reload();
})
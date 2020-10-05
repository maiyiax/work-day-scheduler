// create a function to display current date in the header
var currentDate = moment();
$("#currentDay").text(currentDate.format("ddd, MMMM Do, YYYY"));


// determine current hour block
var time = currentDate.hour();

// check if block of hour is in the past, present or future of current time
$(".row").each(function() {
    var selectedHour = parseInt($(this).attr("id"));

    if (selectedHour < time) {
        $(this).addClass("past");
    }
    else if (selectedHour === time) {
        $(this)
            .removeClass("past")
            .addClass("present");
    }
    else {
        $(this)
            .removeClass("past", "present")
            .addClass("future");
    }
});

$( document ).ready(function() {
    // Handler for .ready() called.
    $(".saveBtn").on("click", function() {
        var eventText = $(this).siblings(".description").val();
        var eventTime = $(this).parent().attr("id");
        console.log(eventText);
        console.log(eventTime);
        localStorage.setItem(eventTime, eventText);
    });

    // retrieve info from localStorage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
});
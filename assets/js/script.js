// create a function to display current date in the header
var currentDate = moment();
$("#currentDay").text(currentDate.format("ddd, MMMM Do, YYYY"));

// variable for event per time block
var events = {
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
};

// determine current hour block
var time = currentDate.hour();
console.log(time);

// check if block of hour is in the past, present or future of current time
$(".row").each(function() {
    var selectedHour = parseInt($(this).attr("id"));
    console.log(selectedHour);

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
    console.log($(this));
});


// color-code timeblocks to indicate whether it is in the past, present, or future


// save events to localstorage
$("event").click(function() {
    var eventText = $(this)
        .text()
        .trim();

    console.log(eventText);
})

// click listener for save button
$(".saveBtn")
    .click(function() {
        localStorage.setItem("event", JSON.stringify(event))
    console.log($(this));
});

//var saveEvents = function () {
 //   localStorage.setItem("events", JSON.stringify(events);
   // console.log(saveEvents);
// };
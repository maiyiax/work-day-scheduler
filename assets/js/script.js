// create a function to display current date in the header
var currentDate = moment();
$("#currentDay")
    .text(currentDate
    .format("ddd, MMMM Do, YYYY")
    );
console.log(currentDate);
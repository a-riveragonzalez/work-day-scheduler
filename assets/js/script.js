//naming variables
var currentDayEl = $('#currentDay');

var today = moment();
console.log(today);

currentDayEl.text(today.format("dddd, MMMM Do"));
console.log(currentDayEl);
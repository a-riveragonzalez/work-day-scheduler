//naming variables
var currentDayEl = $('#currentDay');

var today = moment();

currentDayEl.text(today.format("dddd, MMMM Do"));

// todo setting up local storage
// todo set up buttons so they save whats on the input text into local storage

// todo upon refresh get from local storage and show it on input field (text content)



// todo this function should start on refresh (so call it)
// todo set up rows so they turn colors based on the time 
// todo if moment now is === to moment on row, then present
    //display present. display none past, display non future
// todo else if it after moment on row , then future
    //display future. display none past, display non present
// todo else it is in the past 
    //display past. display none present, display non future

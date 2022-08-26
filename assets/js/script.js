//naming variables
var currentDayEl = $("#currentDay");
var inputEls = $("input");
console.log(inputEls)

var today = moment();
var todayHour = moment().format("H");

console.log(todayHour)

inputEls.each(function(i , input){
  console.log($(input).attr("id"))
  $(input).addClass(setBGColor($(input).attr("id")))

})

function setBGColor(id){
  if (id == todayHour) {
    return "present";
  } else if (id < todayHour) {
    return "past";
  } else {
    return "future";
  }
}
  




// todo this function should start on refresh (so call it)
// ? set data-state = 9am . So if data-state.value = moment(format(h -- use military time for less confusion))
// todo set up rows so they turn colors based on the time
// todo if moment now is === to moment on row, then present
//display present. display none past, display non future

// todo else if it after moment on row , then future
//display future. display none past, display non present

// todo else it is in the past
//display past. display none present, display non future

// todo setting up local storage
// todo set up buttons so they save whats on the input text into local storage

// todo upon refresh get from local storage and show it on input field (text content)


//Sets the date
currentDayEl.text(today.format("dddd, MMMM Do"));


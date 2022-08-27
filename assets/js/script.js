//naming variables
var currentDayEl = $("#currentDay");
var inputEls = $("input");
console.log(inputEls)

var iconEls = $(".saveBtn");

var today = moment();
var todayHour = moment().format("H");

// on page load, sets time blocks' background colors
inputEls.each(function(i , input){
  $(input).addClass(setBGColor($(input).attr("id")))

})

iconEls.each(function(i, icon){
  $(icon).on("click", setStorage)
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

// todo setting up local storage
// todo set up buttons so they save whats on the input text into local storage
function setStorage(event){
  var input = event.currentTarget.previousElementSibling.firstElementChild.value; //get correct text 
  var id = event.currentTarget.previousElementSibling.firstElementChild.id;
  // console.log("do i work?");
  // console.log(input);
  localStorage.setItem(id + "-text", input);

}

// todo upon refresh get from local storage and show it on input field (text content)
function renderStorage(){
  // can text be saved to input tag ? 
  // var savedText = localStorage.getItem("9am-text");
  // inputEls[0].value = savedText;
  var times = ["09", "10", "11", "12", "13" , "14", "15", "16", "17"];
  times.forEach(function(timeItems){
    var savedText = localStorage.getItem(timeItems + "-text");
    $("#"+timeItems).val(savedText);
  })

}

//Sets the date
currentDayEl.text(today.format("dddd, MMMM Do"));

renderStorage();
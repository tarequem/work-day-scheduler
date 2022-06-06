//the current day is displayed at the top of the calendar using moment.js
var currentDate = document.querySelector("#currentDay");

var currentTime = moment();

currentDate.textContent = currentTime.format("DD MMMM, YYYY")

//WHEN I scroll down

//THEN I am presented with time blocks for standard business hours
    //FEATURE: use grid system

//WHEN I view the time blocks for that day

//THEN each time block is color-coded to indicate whether it is in the past, present, or future
    //FEATURE: use .past, .present. and .future CSS classes. use moment.js to apply them with time being the condition. 

//WHEN I click into a time block

//THEN I can enter an event
    //FEATURE: click(), $(textarea), focus, and blur functions

//WHEN I click the save button for that time block

//THEN the text for that event is saved in local storage
    //FEATURE: add persistence - buttons should initiate save function/setItem for their appended text area.

//WHEN I refresh the page

//THEN the saved events persist
    //localStorage.getItem
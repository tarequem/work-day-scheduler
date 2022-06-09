//loads when document is loaded and ready
$(document).ready(function () {    
    //the current day is displayed at the top of the calendar using moment.js
    var currentDate = document.querySelector("#currentDay");

    var currentTime = moment();

    currentDate.textContent = currentTime.format("DD MMMM, YYYY.")
    
    var hour = moment().format("H");

    //function for rendering time blocks, text area, and save buttons
    for (var i = 9; i <= 17; i++){
        var hourBlock = $(
            `<div class="d-flex flex-row time-block">
                <div id="hour${i}" class="hour col-1">
                    ${i}:00
                </div>
                <textarea id="text-area${i}" class="form-control description col-6 textarea"></textarea>
                <button id="save-btn" class="saveBtn col-1"></button>
            </div>`);
        //appends div in hourBlock to container section
        $("#container").append(hourBlock);

        //colour codes text area by comparing described time with real time
        function colourCode() {
            for (var i = 9; i <= 17; i++) {
                
                if (hour===i) {
                    $(`#text-area${i}`).addClass("present");
                } else if (hour > i){
                    $(`#text-area${i}`).addClass("past");
                } else if (hour < i) {
                    $(`#text-area${i}`).addClass("future");
                } 
            }
        }
    };
    //calls colour coding function
    colourCode();

    //saves values from textareas
    $(".saveBtn.col-1").on("click", function () {
        for (var i = 9; i <= 17; i++) {
            var text = $(`#text-area${i}`).val();
            var time = $(`#hour${i}`).attr("id");
            console.log(time, text);

            var taskObj = {time, text};

            taskArray.push(taskObj);
            
            //stores array into local storage
            localStorage.setItem("taskArray", JSON.stringify(taskArray));
        }
    });

    var taskArray = []; 

    //loading feature in progress

});
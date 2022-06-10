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
            `<div class="d-flex flex-row time-block justify-content-center">
                <div id="hour${i}" class="hour col-1">
                    ${i}:00
                </div>
                <textarea id="text-area${i}" class="form-control description col-6 textarea"></textarea>
                <button id="save-btn" class="saveBtn col-1"><img src="./assets/images/image.png" /></button>
            </div>`);
        //appends div in hourBlock to container section
        $("#container").append(hourBlock);

        //colour codes text area by comparing described time with real time
        function colourCode() {
            for (var i = 9; i <= 17; i++) {
                
                if (hour==i) {
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

    //saves values from textareas if save button is clicked
    $(document).on({
        "click": function () {
            const hour = $(this).siblings(".hour.col-1").text();
            const text = $(this).siblings(".form-control.description.col-6.textarea").val();
            localStorage.setItem(hour, text);

    }}, '.saveBtn')

    //ensures persistence of saved 
    function loadPlanner () {
        $(".hour.col-1").each(function() {
            var hour = $(this).text();
            var text = localStorage.getItem(hour);

            if(text !== null) {
                $(this).siblings(".form-control.description.col-6.textarea").val(text);
            }
        })

    }
    loadPlanner();
});
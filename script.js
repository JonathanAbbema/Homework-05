var currentTimeEl = $('#currentTime');
var eventsData = $('.eventsData');
var hourBlock=$('.saveBtn');
var textarea = $('.textAreaBorder');
var timeBlock = $('.hour');

function displayTime () {
    var rightNow = moment().format('hh:mm:ss a');
    currentTimeEl.text(rightNow);
}

function setHourColors() {
    for (var i= 9; i < 19; i++ ) {
        if (i < currentTimeEl) {
            $(".hour"+ i + hour).css("background-color", "rgb(122, 242, 154)");
        } else if (i == currentTimeEl) {
            $(".hour" + i + hour).addClass(".present");
        } else if (i > currentTimeEl) {
            $(".hour" + i + hour).addClass(".future");
        }
    }
}

function loadStoredData() {
    var eventsData = JSON.parse(localStorage.getItem('calendarEvents'));
    if(!eventsData) {
        eventsData = {
            hour9: '', 
            hour10: '', 
            hour11: '', 
            hour12: '', 
            hour13: '', 
            hour14: '', 
            hour15: '', 
            hour16: '',
            hour17: '', 
            hour18: '',  
        }
    }
}

function handleSavedClick(event) {
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children('textarea').val();
    var hour = hourBlock.attr('id').split('-')[1];
    eventsData["hour" + hour] = value;
    localStorage.setItem('calendarEvents', JSON.stringify(eventsData));
    
}

$('.saveBtn').on('click', handleSavedClick);

$(function(){
    loadStoredData();
    setHourColors();
}) 

setInterval(displayTime, 1000);

//localStorage.setItem('calendarEvents', JSON.stringify(eventsData));
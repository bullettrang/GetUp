
'use strict';

//how do i mark the button as selected after a click?

function setAlarm(event) {
    
  //grab the minute selected from toolbar
  let minutes = parseFloat(event.target.value);
  chrome.browserAction.setBadgeText({text: 'ON'});
  //trying to repeat alarm with periodInMinutes
  chrome.alarms.create({delayInMinutes: minutes,periodInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});

 window.close();
}






//upon clicking 'clear alarm' in tool bar menu
//deletes the entire alarm
//closes window after
function clearAlarm() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.alarms.clearAll();
  window.close();
}

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute incriments if released
document.getElementById('sampleSecond').addEventListener('click', setAlarm);
document.getElementById('1min').addEventListener('click', setAlarm);
document.getElementById('15min').addEventListener('click', setAlarm);
document.getElementById('30min').addEventListener('click', setAlarm);
document.getElementById('45min').addEventListener('click', setAlarm);
document.getElementById('60min').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);

var btns = ["1min","15min","30min","45min","60min","cancelAlarm"];


//when doc is ready, go to chrome.storage.sync
//mark the option that is already selected
$(document).ready(function(){
  chrome.storage.sync.get("minutes",function(obj){
    console.log(obj.minutes);
    $("#"+obj.minutes+"min").css('background-color',"purple");
  })
})





//one an option is clicked
//display countdown timer
//once it count downs to 0
//display notification prompt

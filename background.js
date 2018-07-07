
'use strict';

//TODO:
//find a way to display total times sat up 

var titles = ['Stand Up!', 'Trying to Save You!'];
var facts =['You are avoiding cellulite!! Thigh nice baby','Nice Calves','A sedentary lifestyle increases the risk of developing diabetes, obesity, and weak muscles and bones.','According to the CDC, nationally in 2000, 78% of the population was at risk for health problems related to lack of exercise, which is regular and sustained physical activity.',"Assuming a strong posture and holding it for as little as two minutes has been found to increase confidence levels and decrease stress hormone levels like cortisol","People who sat for less than 30 minutes at a time had the lowest risk of early death according to Annals of internal medicine"];


//on alarm creation, create a notification

chrome.alarms.onAlarm.addListener(function() {
  
  chrome.browserAction.setBadgeText({text: ''});
  //this creates notification window with icon, title , and fact

  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'get_up.png',
      title:    'Stand Up! ',
      // grab random fact
      message: facts[Math.floor(Math.random()*facts.length)],
      priority: 0 
      //user must dismiss the notification window
      //requireInteraction:true
    
    });
  
});

chrome.notifications.onButtonClicked.addListener(function() {
  chrome.storage.sync.get(['minutes'], function(item) {
    chrome.browserAction.setBadgeText({text: 'ON'});
    //trying to repeatedly fire alarm with periodInMintues: item.minutes
    chrome.alarms.create({delayInMinutes: item.minutes,periodInMinutes: item.minutes});
    console.log(" notification button pressed.");

  });
});


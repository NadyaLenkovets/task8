let chat = document.querySelector('.chat');

// create date

function getTime() {
   let today = new Date();
   hours = today.getHours();
   minutes = today.getMinutes();

   if (hours < 10) {
      hours = "0" + hours;
   }

   if (minutes < 10) {
      minutes = "0" + minutes;
   }
   return currentTime = 'Сегодня в ' + hours + ':' + minutes;
}


// add first bot message to chat

function firstBotMessage() {
   let firstMessage = 'Привет! Как дела?';

   document.getElementById('bot-starter-message').innerHTML = '<p class="bot-text"><span class="bot-text__span">' + firstMessage + '</span></p>';

   let time = getTime();
   // add date to chat
   document.getElementById('timestamp').innerHTML = time;
}

firstBotMessage();



function getHardResponse(userText) {
   
   let botResponse = getBotResponse(userText);

    // create bot response with loader first
   let botHTML = document.createElement('p');
   botHTML.classList.add('bot-text');
   botHTML.innerHTML = '<span class="loader-block"><span class="loader loader--left"></span><span class="loader loader--center"></span><span class="loader loader--right"></span></span>';

   // add bot loader to chat
   chat.appendChild(botHTML);

   setTimeout(() => {
      showBotAnswer();
   }, 2500);

   function showBotAnswer() {
      // create bot response with words
      botHTML.innerHTML = '<span class="bot-text__span">' + botResponse + '</span>';
   }
}


function getResponse() {
   let userText = document.querySelector('.text-input');
   let userTextValue = document.querySelector('.text-input').value;

   if (userText.value == '') {
      userText.value = 'Мне нравится этот бот)).';
      userTextValue = 'Мне нравится этот бот)).';
   }

   // create user response
   let userHTML = document.createElement('p');
   userHTML.classList.add('user-text');
   userHTML.innerHTML = '<span>' + userText.value + '</span>';

   // add user response to chat
   chat.appendChild(userHTML);

   // clear user input
   userText.value = '';

   // show bot response
   setTimeout(() => {
      getHardResponse(userTextValue);
   }, 500);
}

// press Enter to send user message
document.querySelector('.text-input').addEventListener('keydown', function(event) {
   if (event.code == 'Enter' || event.code == 'NumpadEnter') {
      getResponse();
   }
})

document.querySelector('.text-input').addEventListener('change', function() {
   getResponse();
})

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
   return currentTime = hours + ':' + minutes;
}

function firstBotMessage() {
   let firstMessage = 'Привет! Как дела?'
}
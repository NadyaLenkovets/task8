function getBotResponse(input) {
   switch(checkString(input)) {
      case 'расскажи шутку' :
         return tellAJoke();
      break;
      case 'какой сегодня день':
         return getDay();
      break;
      case 'сколько дней осталось до нового года':
         return daysLeftToNewYear();
      break;
      case 'скинь мемасик':
         return '<img class="bot-image" src="img/image.jpg">';
      break;
      case 'хочу записаться на стрижку к алине':
         return 'В какой день и время вам будет удобно?';
      break;
      case 'в субботу в 10:30':
         return 'Вы записаны на стрижку к мастеру Алине в субботу в 10:30.';
      break;
      case 'пока':
         return 'До свидания!';
      break;
      default:
         return 'Я вас не понимаю.'
      break;
   }
} 


function getDay() {
   let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
   let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

   let today = new Date();
   
   let day = today.getDay();
   let date = today.getDate();
   let month = today.getMonth();

   return days[day] + ' , ' + date + ' ' + months[month] + '.';
}


function daysLeftToNewYear() {
   let now = new Date();
   let newYear = new Date(now.getFullYear(), 11, 31);

   let diff = newYear - now; // разница

   if (diff > 0) {
      return 'До Нового года осталось ' + Math.round(diff / (1000 * 60 * 60 * 24)) + ' дней.';
   } else if (diff == 0) {
      return 'Новый год сегодня!';
   }
}


function tellAJoke() {
   let jokes = [`"Красиво сделайте" -
                  ТЗ, которое мы заслужили.`,
                `Ревность - когда таксист берёт
                 новый заказ, но ещё не довёз тебя.`,
                `Страшилка: однажды Лиля не сфотографировала, 
                 что летит бизнес-классом и все подумали,
                  что она бедная.`, 
                `Торговый комплекс - когда тебе неудобно торговаться.`,
                `Воскнедельник - момент, когда воскресенье
                 перестает ощущаться как воскресенье и начинается 
                 понедельничное беспокойство.`,
                 `Печатает... - то, что ты видишь 10 минут
                 перед тем, как тебе напишут "ок".`,
               ];
   let counter = getRandomInt(0, 5);

   function getRandomInt(min, max) {
      return Math.floor(Math.random()*(max-min+1)) + min;
   }

   return jokes[counter];
}


function checkString(str) {
   let strLastSymbol = str[str.length-1];
   if (strLastSymbol == '.' || strLastSymbol == '!' || strLastSymbol == '?') {
      return str.slice(0, str.length-1).toLowerCase();
   } else {
       return str.toLowerCase();
   }
}  

'use strict'

// Task 1

let userInput;
const numbers = [];
let total = 0;
 

do{
   const userInput = prompt('Введите любое число');
   const isNumbers = Number(userInput);
   const isTrueNumber = !Number.isNaN(isNumbers);

   if(userInput === null || userInput === '') {
      // alert('Спасибо за игру!')
      break;
   }else if(isTrueNumber === false) {
      alert('Было введено не число! Попробуйте еще раз!')
   }else {
      numbers.push(isNumbers); 
   }
   
}while(userInput !== true);

for(let key of numbers){
   total += key;
}

numbers.length > 0 ? alert(`Общая сумма чисел равна ${total}`) : null




// Task 2


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let user;

do {
  user = prompt('Введите пароль');

   if(passwords.includes(user)){
      alert('Добро пожаловать!');
      break;
   } else if (user=== ''){
      alert('Введите пароль повторно!')

   } else if (user === null) {
      alert('Приходите еще!');
      break;

   }else if(!passwords.includes(user)){
      attempts -= 1;
      alert(`Неверный пароль, у Вас осталось ${attempts} попыток`);
   }if(attempts === 0){
      alert('У вас закончились попытки, аккаунт заблокирован!');
      break;
   }


} while(user !== true)

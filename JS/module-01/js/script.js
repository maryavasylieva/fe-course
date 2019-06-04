'use strict';

// Task 1

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const toСancel = 'Отменено пользователем!';
const greeting = 'Добро пожаловать!';
const untrulyLogin = 'Доступ запрещен, неверный логин!';
const untrulyPassword = 'Доступ запрещен, неверный пароль!';

const login = prompt('Введите логин', 'admin');
if (login === null) {
   alert(toСancel);
} else if (login !== adminLogin) {
   alert(untrulyLogin);

} else {
   const password = prompt('Введите пароль');
   if (password === null) {
      alert(toСancel);

   } else if (password !== adminPassword) {
      alert(untrulyPassword);

   } else {
      password === adminPassword;
      alert(greeting);
   }
}

// Task 2

const isSpotSharm = 15;
const isSpotHurgada = 25;
const isSpotTaba = 6;

const isNumbSpot = Number(prompt('Введите количество мест', ''));
const isWrongSpot = isNumbSpot != null && Number.isInteger(isNumbSpot);

const isFalseSpot = 'Ошибка ввода!';
const isOut = 'Нам очень жаль, приходите еще!';
const isBigGroup = 'Извените, столько мест мы не найдем';
// const isOutGroup = 'Приходите еще!';
let voucherGroup;

const isTrueSpot = 'Приятного путешествия в группе';

if(isWrongSpot === false) {
   alert(isFalseSpot);
}else if (isNumbSpot === 0) {
   alert(isOut);
} else if(isNumbSpot){
   if(isNumbSpot <= isSpotTaba){
      voucherGroup = 'Таба';
      confirm(`Есть место в группе ${voucherGroup}, согласны ли Вы быть в этой группе?`)
      ? alert(`${isTrueSpot} ${voucherGroup}`)
      : alert(isOut);
   }else if (isNumbSpot <= isSpotSharm){
      voucherGroup = 'Шарм';
      confirm(`Есть место в группе ${voucherGroup}, согласны ли Вы быть в этой группе?`)
      ? alert(`${isTrueSpot} ${voucherGroup}`)
      : alert(isOut);
   }else if (isNumbSpot <= isSpotHurgada){
      voucherGroup = 'Хургада';
      confirm(`Есть место в группе ${voucherGroup}, согласны ли Вы быть в этой группе?`)
      ? alert(`${isTrueSpot} ${voucherGroup}`)
      : alert(isOut);
   }else{
      alert(isBigGroup);
   }
   
}

if(voucherGroup){
   const isFreeSpot = confirm(`Есть место в группе ${voucherGroup}`)
  if(isFreeSpot === true){
   alert(isTrueSpot);
  }else{
   alert(isOutGroup);
  }
}

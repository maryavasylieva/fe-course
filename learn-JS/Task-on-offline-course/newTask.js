'use strict'

// ========= TASK 2 ===============================================


/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить первый элемент массива
// users.shift('');
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
// users.pop('');
// console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
// users.unshift('Lux');
// console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push('Jay', 'Kiwi');
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// users.splice(2,1);
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// users.splice(2, 0, 'Kong');
// const userToInsertBefore = "Jay";
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]


/*
 * Есть массив имен пользователей users
 *
 * Напиши цикл, который для каждого пользователя будет выводить в консоль
 * сообщение в формате [номер элемента] - [значение элемента]. 
 * 
 * Нумерация должна начинаться с 1. К примеру для первого элемента массива
 * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
 *
 * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
 */

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// let n = 0;

// for(let i = 0; i < users.length; i++){
// n++;
// console.log(`${n} - ${users[i]}`);
// }



/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;
// price = 10;
// const words = message.split(' ');
// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// console.log(words);

// // Выведи в консоли длину массива words
// const res = words.length;
// console.log(res); // 8

// // Вычисли сколько будет стоить гравировка и запиши результат в переменную price
// // let word = price * res;
// price = price * res;
// console.log(price); // 80


/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
*/
// let addNumber;

// do{
//    addNumber = Number(prompt('Enter your number'))
//    if(Number < 100){
//       alert('Try again!');
//    }

// }while(addNumber === 100 && addNumber !== null)



/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// Var 1

// for(let i of numbers){
//    if(num < i ){
//       matched.push(i);
//    }
// }

// Var 2

// for(let i = 0; i < numbers.length; i++){
//    if(numbers[i] > num){
//       matched.push(numbers[i]);
//    }
// }

// console.log(matched); // [17, 14, 14, 32, 18, 26]


/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const message = "May the force be with you";
// const newWords = message.split(' ');
// console.log(newWords);
// let longestWord = 0;
// let num = 0;

// for(let key of newWords){
//    if(key.length > num){
//       num = key.length;
//       longestWord = key;
//    }
// }

// console.log(longestWord); // 'force'


/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// let min = 1;
// let max =  100;


// const userNumbers = Number(prompt(`Введите цифру между ${min}  и ${max}`));

// for(let i = 0; i < numbers.length; i++) {
//   if(max < numbers[i]) {
//     max = numbers[i];
//   }

//   if(numbers.includes(userNumbers)){
//     alert('Поздравляем, Вы угадали!');
//     break;
//   }else{
//     alert('Сожалеем, Вы не угадали!');
//     break;
//   }
// }



/*
  Напиши скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// const addNumber;
// let total = 0;
// const newArrNumber = [];

// do{

//   const addNumber = Number(prompt('Enter any number'));
//   const isTrueNumber = !Number.isNaN(addNumber); 

//   if(addNumber === null || addNumber === '') {
//     break;
//   }else if(addNumber !== false){
//     alert('You entered not a number');
//   }else{
//     addNumber === isTrueNumber;
//     newArrNumber.push(addNumber);
//   }

// }while(addNumber !== true)

// for(let key of newArrNumber){
//   total += key;
//   alert(`Summ: ${total}`);
// }


// ===================== TASK 3 ===============================


// 3.1

/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// const checkNumberType = (num) => {
//   if(num % 2 === 0) {
//     num = `${num} is Even`
//   }else if (num % 2 !== 0) {
//     num =`${num} is Odd`
//   }

//   return num;
// }





// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'


// 3.2

/*
  Напиши функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
//  const formatString = (str) => {
//    if(str.length < 40){
//      str === str;
//    }else {
//      str = str.slice(0, 40);
//    }
//    return str;
//  }

// // Вызовы функции для проверки
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка

//  3.3

/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// const checkForSpam = (str) => {
//   str = str.toLowerCase();
//   if(str.includes('spam') || str.includes('sale')){
//     return true;
//   }else{
//     return false;
//   }

// }


// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


// 3.4

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
// const getPx = (str) => {
//   const isValid = str !== '' && str !== null;

//   if(isValid) {
//     str === Number.parseFloat(str);
//   }
//    return str;
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // true
// console.log( getPx("10.5") === 10.5 ); // true
// console.log( getPx("0") === 0 ); // true
// console.log( getPx(-1) ); // null
// console.log( getPx(10) ); // null

// 3.5 

/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/

// function findLongestWord(str) {
//   let num = 0;
//   let longestWord = 0;
//   let toArr = str.split(' ');
//   for (let key of toArr) {
//     if (key.length > num) {
//       num = key.length;
//       longestWord = key;
//     }
//   }

//    return longestWord;
// }

// // Вызовы функции для проверки
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // 'jumped'

// console.log(findLongestWord("Google do a roll")
// ); // 'Google'

// console.log(findLongestWord("May the force be with you")
// ); // 'force'

// 3.6

/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// const findLargestNumber = (numbers) => {
//   largestNum = 0;
//   // for (let key of numbers) {
//   //   if(largestNum < key) {
//   //     largestNum = key;
//   //   }

//   // }
//   // return largestNum;

//   // for(let i = 0; i < numbers.length; i++){
//   //   if(largestNum < numbers[i]){
//   //     largestNum = numbers[i]
//   //   }
//   // }
//   // return largestNum;
// }

// // Вызовы функции для проверки
// console.log(
//   findLargestNumber([1, 2, 3])
// ); // 3

// console.log(
//   findLargestNumber([27, 12, 18, 5])
// ); // 27

// console.log(
//   findLargestNumber([31, 128, 14, 74])
// ); // 128


// 3.7 

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers = [2, 1, 4, 9];
// // const num = [];

// const addUniqueNumbers = (...args) => {
//   // console.log(uniqueNumbers);
//   for (let key of args) {
//     if (!uniqueNumbers.includes(key)) {
//       uniqueNumbers.push(key)

//     }
//     return uniqueNumbers;
//   }
// }
// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

// 3.8

/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = function(a, ...args) {

// }; 

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]


// ======================== TASK 4 ================================

/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = 'happy';
// user.hobby = 'javascript';

// const entries = Object.entries(user);

// for(entry of entries) {
//  const key  = entry[0];
//  const value = entry[1];
//  console.log(`${key} : ${value}`);
// }


// const entries = Object.entries(user);
// for (let key of entries) {
//   console.log(`${key[0]} - ${key[1]}`);
// }


// console.log(user);


// const keys = Object.keys(user);
// const values = Object.values(user);
// // console.log(keys);
// // console.log(values);

// for ( let i = 0; i < user.length; i++) {
//   console.log(`${keys[i]} - ${values[i]} `);
// }


// 5.2

/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// let keys = Object.keys(tasksCompleted);
// let max = tasksCompleted[keys[0]];
// let maxKey = keys[0];
// for(let key of keys){
//   if(tasksCompleted[key] > max){
//     max =tasksCompleted[key];
//     maxKey = key;

//   }
// }
// console.log(`${maxKey} ${max}`);











// ================ TASK 5 ================================

/*  
 * Расставь отсутствующие this в методах объекта account
 */

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   }
// };

// account.changeDiscount(0.15);
// console.log(this.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(this.balance); // 19000
// console.log(orders); // ['order-1', 'order-2', 'order-3', 'order-4']


/*  
 Расставь отсутствующие this в конструкторе Account
*/

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;
//   };

//   this.getInfo = function() {
//     console.log(`
//       Login: ${this.login}, 
//       Pass: ${this.password}, 
//       Type: ${this.type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account);

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc");
// console.log(account.password); // 'asdzxc'

// account.getInfo();// Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

// function User({name, age, friends}){
//   this.name = name;
//   this.age = age;
//   this.friends = friends;

//   this.getInfo = function(){
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
//   }

// }


// const mango = new User({ name: "Mango", age: 2, friends: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 friends

// const poly = new User({ name: "Poly", age: 3, friends: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 friends

// /*  
//  * Напиши конструктор Storage(items), который будет создавать объекты для управления складом товаров
//  * При вызове будет получать один аргумент - начальный массив товаров, и записываеть его в свойство items
//  *
//  * Добавь метод getItems, который возвращает массив текущих товаров
//  * Добавь метод addItem(item), который получает новый товар и добавляет его к текущим
//  * Добавь метод removeItem(item), который получет товар и, если он есть, удаляет его из текущих
// */

// const Storage = function(items){
//   this.items = items;

//   this.getItems = function(){
//     return this.items;
//   }

//   this.addItem =function(item){
//     this.items.push(item); 
//     return this.items;
//   }

//   this.removeItem = function(item){
//     for(let i = 0; i < this.items.length; i++){
//       if(this.items[i] === item){
//         this.items.splice(i, 1);
//         return this.items;
//       }
//     }
//   }
// }



// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор"
// ]);

// const items = storage.getItems();
// console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


// ================ TASK 6 ===========================================

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// const Account = function(login, email){
//   this.login = login;
//   this.email = email;
// }


// Account.prototype.getInfo = function(){
//   console.log(this);
// }


// const account = new Account('Mangozedog', 'mango@dog.woof');
// const testAccount = new Account ('Kitty', 'missy@cat.meow');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// testAccount.getInfo();


/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder{
//   constructor(string){
//     this._value = string;
//   }

//   get value(){
//     return this._value;

//   }

//   append(str){
//     this._value = this._value.split('');
//     this._value.unshift(str);
//     this._value = this._value.join('');
//   }

//   prepend(str){
//     this._value = this._value.split('');
//     this._value.push(str);
//     this._value = this._value.join('');
//   }

//   pad(str){
//     this._value = this._value.split('')
//     this._value.unshift(str);
//     this._value.push(str);
//     this._value = this._value.join('')
//   }


// }




// const builder = new StringBuilder('.');
// // console.log(StringBuilder);

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='



// ================ TASK 9 =========================================
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/







/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/


// const sub = document.querySelector('button[data-action="sub"]')

// const add = document.querySelector('button[data-action="add"]')

// const result = document.querySelector('.value')

// class Value {
//   constructor(onChange){
//    this.value = 0;
//    this.onChange = onChange;
//    this.decrement = this.decrement.bind(this)
//    this.increment = this.increment.bind(this)
//   //  result .textContent = value
//   }

//   increment(){
//     this.value++;
//     onChange(this.value)
//   }

//   decrement(){
//     this.value--;
//     onChange(this.value)
//  }
// }

// function onChange(value){
//   result.textContent = value

// }

// const value = new Value();

// sub.addEventListener('click', value.decrement)
// add.addEventListener('click', value.increment)



/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// const form = document.querySelector('form')
// const input = document.querySelectorAll('.question-form input')
// const result = document.querySelector('.result')

// function change(e){
//   e.preventDefault()
//   input.forEach(el => {
//     if(el.checked){
//       result.textContent = `Result: ${el.parentElement.textContent}`
//     }
//   })

// }

// form.addEventListener('submit', change)




// ====================== TASK 8 ===============================================================

// 8.1

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/


// const list = document.querySelector('.categories');
// // console.log(list.children);
// const items = list.children;
// // console.log(items);
// const listCategories = Array.from(items);
// // console.log(listCategories);
// const test = listCategories.forEach(list => console.log(list.children))
// // const test = listCategories.map(item => item + item);


// 8.2

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/


// const selectChild = document.querySelector('.list');
// // console.log(selectChild);

// const selectChildRed = selectChild.firstElementChild;
// selectChildRed.style.color = 'red';
// console.log(selectChildRed);

// const selectChildBlue = selectChild.lastElementChild;
// selectChildBlue.style.color= 'blue';
// console.log(selectChildBlue);


// 8.3

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const list = document.querySelector('.list');
// // console.log(listElement)

// const insertElement = function(newArr){
//   list.innerHTML = newArr.reduce((elem, item) => elem + `<li>${item}</li>`, '');
// }


// const createFirstEl = document.createElement('li');
// createFirstEl.textContent = elements[0];
// // list.insertBefore = (list.children[0]);
// // console.log(createFirstEl);
// // console.log(list);
// insertElement(elements); 
// функция принимает elements, а elements - это массив аргументов. newArr - принимает как параметр массив аргументов elements;

// 8.4

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Two Brown Hen and One Red Rooster"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Macaw Birds"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "2 Lion on Grass Field during Daytime"
//   }
// ];



// const list = document.querySelector('.gallery');

// const listItems = list.children;
// const arr = galleryItems.map(image => `<li><img src ="${image.url}"></li>`);
// list.innerHTML = arr;

// const image = listItems.children;

// for(let i = 0; i < listItems.length; i ++){
//   const test = listItems[i];
//   let img = listItems[i].children[0];
//   img.style.width = '300px';

// };


// 8.5

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.(создали массив из списка(Array.from))
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.(filter(input => input.checked))
  
  Возвращает массив значений атрибута value.(map(input => input.value))

*/
//  const size = document.querySelectorAll('input');
// //  console.log(size);
// const sizeInputs = Array.from(size);
// // console.log(sizeInputs);

// const collectInputData = function (inputs){
//   const trueInputs = inputs.filter(input => input.checked).map(input => input.value);

//   return trueInputs;

// } 

// console.log(collectInputData(sizeInputs));


// 8.6

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// const body = document.body;


// function createMovieCard() {
//   const movie = document.createElement('div');
//   movie.classList.add('movie');

//   const movieImage = document.createElement('img');
//   movieImage.classList.add('movie__image');
//   movieImage.src = "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg";
//   movieImage.setAttribute("alt", "movie image");
//   // console.log(movieImage.attributes);



//   const movieBody = document.createElement('div');
//   movieBody.classList.add('movie__body');

//   const movieTitle = document.createElement('h2');
//   movieTitle.classList.add('movie__title');
//   movieTitle.textContent = 'The Godfather';

//   const movieDescription = document.createElement('p');
//   movieDescription.classList.add('movie__description')
//   movieDescription.textContent = "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of theSpanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge."


//   const movieDate = document.createElement('p')
//   movieDate.classList.add('movie__date');
//   movieDate.textContent = 'Released: 1972-03-14';

//   const movieRating = document.createElement('p');
//   movieRating.classList.add('movie__rating');
//   movieRating.textContent = 'Rating: 8.6';


//   movieBody.append(movieTitle);
//   movieBody.append(movieDescription);
//   movieBody.append(movieDate);
//   movieBody.append(movieRating);

//   movie.append(movieImage);
//   movie.append(movieBody);

//   body.append(movie);

// }

// createMovieCard();



// 8.7

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

// const body = document.body;

// function createBoxes(num){
//   let count = 30;

//   for(let i = 0; i <= num; i++ ){
//     const color = {
//       red: Math.floor(Math.random() * 255),
//       green: Math.floor(Math.random() * 255),
//       blue: Math.floor(Math.random()* 255)
//     }

//     count += 10;
//     const box = document.createElement('div');
//     box.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
//     box.style.width = count + 'px';
//     box.style.height = count + 'px';

//     body.append(box);


//   }
// }

// createBoxes(50);


// ==================================== TASK 9 ======================================


// 9.1

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// const button = document.querySelector('.button');

// let num = 0;

// const handleClick = () => button.textContent = num += 1;

// button.addEventListener('click', handleClick)

// 9.2

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

// const button = document.querySelector('[data-action="add"]');
// const leftInput = document.querySelector('input');
// const rightInput  = leftInput.nextElementSibling.nextElementSibling;
// const result = document.querySelector('.result');
// // console.log(input);

// button.addEventListener('click', () => result.textContent = +leftInput.value + +rightInput.value)

// result.addEventListener('submit', handleClick);

// 9.3
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/


// const sub = document.querySelector('button[data-action="sub"]')

// const add = document.querySelector('button[data-action="add"]')

// const result = document.querySelector('.value')

// class Value {
//   constructor(onChange){
//    this.value = 0;
//    this.onChange = onChange;
//    this.decrement = this.decrement.bind(this)
//    this.increment = this.increment.bind(this)
//   //  result .textContent = value
//   }

//   increment(){
//     this.value++;
//     onChange(this.value)
//   }

//   decrement(){
//     this.value--;
//     onChange(this.value)
//  }
// }

// function onChange(value){
//   result.textContent = value

// }

// const value = new Value();

// sub.addEventListener('click', value.decrement)
// add.addEventListener('click', value.increment)

// 9.4

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// const form = document.querySelector('form')
// const input = document.querySelectorAll('.question-form input')
// const result = document.querySelector('.result')

// function change(e){
//   e.preventDefault()
//   input.forEach(el => {
//     if(el.checked){
//       result.textContent = `Result: ${el.parentElement.textContent}`
//     }
//   })

// }

// form.addEventListener('submit', change)


// 9.5

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// const img = document.querySelector('.images');

// img.addEventListener('click', (event) => alert(event.target.src));

// 9.6


// Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
// Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
// она находится. Обязательно используйте делегирование событий.


// const list = document.querySelector('.list');
// const liList = document.querySelector('li');
// const btn = document.querySelector('[data-action="delete"]')

// const removeItem = (event) => {
//   if(!list.remove){
//     list.remove = () =>{
//       if(list.parentNode){
//         list.parentNode.removeChild(liList);
//       }
//     }
//   }
// }

// btn.addEventListener('click', removeItem);



// 9.7 
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/


// const inputList = document.querySelector('.input-list');
// const firstInput = document.querySelector('[data-length="2"]');
// const secondInput = document.querySelector('[data-length="4"]');
// const thirdInput = document.querySelector('[data-length="8"]');
// const fourthInput = document.querySelector('[data-length="16"]');

// firstInput.addEventListener('blur',(event)=> {
// if(firstInput.value.length === 2){
//   firstInput.classList.add('valid');
//   firstInput.classList.remove('invalid');
// }else{  
//   firstInput.value.length !== 2
//   firstInput.classList.add('invlaid')
// }
// })

// secondInput.addEventListener('blur', (event) => {
//  if(secondInput.value.length === 4){
//    secondInput.classList.add('valid')
//    firstInput.classList.remove('invalid');
//  }else{
//    secondInput.value.length !== 4
//    secondInput.classList.remove('invalid')
//  }
// })

// thirdInput.addEventListener('blur',(event) => {
//   if(thirdInput.value.length === 8){
//     thirdInput.classList.add('valid')
//     firstInput.classList.remove('invalid');
//   }else{
//     thirdInput.value.length !== 8
//     thirdInput.classList.remove('invalid')
//   }
// })

// fourthInput.addEventListener('blur',(event) => {
//   if(fourthInput.value.length === 16){
//     fourthInput.classList.add('valid')
//     firstInput.classList.remove('invalid');
//   }else{
//     fourthInput.value.length !== 16
//     fourthInput.classList.remove('invalid')
//   }
// })



// firstInput.addEventListener('focus', (event) =>{
//   if(firstInput.value.length === 2){
//     firstInput.classList.add('valid');
//     firstInput.classList.add('invalid');
//   }else 
// })



// ====================== TRAINING TASK ====================================

// 1.

// Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

// const arr = ['a', 'b', 'c'];
// alert(arr);

// 2. 
// С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

// const arr = ['a', 'b', 'c'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// 3.

// Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.


// const arr = ['a', 'b', 'c', 'd'];
// const newArr = `${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`;
// console.log(newArr);

// 4.

// Создайте массив arr с элементами 2, 5, 3, 9. 
// Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

// const arr = [2, 5, 3, 9];
// const newArr = arr[0] * arr[1];
// const newArr2 = arr[2] * arr[3];
// // console.log(newArr);
// // console.log(newArr2);
// const plusRes = newArr + newArr2;
// // console.log(plusRes);
// const result = plusRes;
// console.log(result);

// 5.

// Создайте объект obj. 
// Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// console.log(obj['c']);
// console.log(obj.c);



// const arr = `${obj[4]} : ${obj[5]}`;
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// console.log(keys);
// console.log(values);
// console.log(arr);

// 6.
// Создайте массив заработных плат obj. 
// Выведите на экран зарплату Пети и Коли

// const obj = {
//   Коля: '1000',
//   Вася: '500',
//   Петя: '200'
// };

// // console.log(obj['Петя'])
// // console.log(obj['Вася']);
// console.log(obj.Вася);
// console.log(obj.Петя);

// 7.
// Создайте объект с днями недели. 
// Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). 
// Выведите на экран текущий день недели


// const weekDay = {
//   first: 'monday',
//   second: 'thuesday',
//   third: 'wednesday',
//   fourth: 'thursday',
//   fifth: 'friday',
//   sixth: 'saturday',
//   seventh: 'sunday'
// };

// const keys = Object.keys(weekDay);
// const values = Object.values(weekDay);
// console.log(`${keys[6]} : ${values[6]}`);
// // for(let value of values){
// //   if(value === weekDay){
// //   }
// //   console.log(value);
// // }

// // const entries = Object.entries(weekDay);

// // for(const entry of entries){
// //   const value = entry[1];
// //   console.log(value);
// // }

// 8.
// Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. 
// Выведите день недели, соответствующий значению переменной day.


// const day = 'third';

// const weekDay = {
//   first: 'monday',
//   second: 'thuesday',
//   third: 'wednesday',
//   fourth: 'thursday',
//   fifth: 'friday',
//   sixth: 'saturday',
//   seventh: 'sunday'
// };

// const newDay = weekDay === day;
// console.log(newDay);

// console.log(weekDay);
// for(let key in weekDay){
//   if(key === day){
//     console.log(key);

//   }
// }
// const values = Object.values(weekDay);


// 9.
// ========================     Работа с if-else ========

//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

//  Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1

// const a = 15;
// const b = 17;
// if((a > 2 && a < 11) || (b >= 6 && b <=14)){
//  console.log('true');

// }else{
//   console.log('false');

// }

// 10. 

// function multiply(a, b){
//   return a * b

// }

// const multi = multiply(2, 5)
// console.log(multi);

// const letter = 'a, e, i, o, u';

// function getCount(str) {
//   let vowelsCount = 0;
//   const toArr = letter.split('');
//   // console.log(toArr);
//   for(let i = 0; i < toArr.length; i++){
//     vowelsCount += str[i];
//   }

//   return vowelsCount;


// }

// console.log(vowelsCount);
// getCount(letter);

// var arr = [3,2,5,6];
// function arraySum(array){
// var sum = 0;
// for(var i = 0; i < array.length; i++){
//     sum += array[i];
//     }
// console.log(sum);
// }
// arraySum(arr);

// const getCount = (str) => {
//   //  console.log(str);
//   let vowelsCount = 0;

//   for (let key of str) {
//     vowelsCount += key
//   };

//   return vowelsCount;
// }


// console.log(getCount(['a', 'e', 'i', 'o', 'u']));


// Test
// const URL = 'https://pixabay.com/api/?key=1526992-244fc9e878f615410b07ab410&q='
// const kitten = 'cat'

// const container = document.querySelector('.container');
// const text = document.querySelector('.text');
// const btn = document.querySelector('.btn');


// const drawPhoto = () => {
//   const name = text.value;
//   container.innerHTML = '';
//   return fetch(URL + name)
//     .then(response => response.json())
//     .then(data => {
//       data.hits.forEach(el => {
//         console.log(el)
//         const li = document.createElement('li');
//         const img = document.createElement('img');
//         img.src = el.largeImageURL;
//         li.appendChild(img);
//         container.append(li)
//       });
//     })
// }


// drawPhoto().then(data => {
//   data.hits.forEach(el => {
//     console.log(el)
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     img.src = el.largeImageURL;
//     li.appendChild(img);
//     container.append(li)
//   });
// })

// btn.addEventListener('click', drawPhoto)

// document.body.addEventListener('click', (e) => {
//   if(e.target.nodeName === 'IMG'){
//     if(e.target.className === 'big'){
//      return e.target.classList.remove('big');
//     }else{
//       e.target.classList.add('big');
//     }
//   }
// })


// 12

// 12.1

// const body = document.querySelector('body');
// // console.log(body)

// const btnDark = document.querySelector('button[data-theme="dark"]');
// const btnLight = document.querySelector('button[data-theme="light"]');



// const getLightTheme = () => {
//   localStorage.setItem('theme','theme-light');
//   setTheme();
// }

// const getDarkTheme = () => {
//   localStorage.setItem('theme', 'theme-dark');
//   setTheme();
// }

// const setTheme = () => {
//   theme = localStorage.getItem('theme');
//   body.className = theme;
// }

// let theme = localStorage.getItem('theme');
// body.className = theme;



// btnDark.addEventListener('click', getDarkTheme);
// btnLight.addEventListener('click', getLightTheme);


// 12.2

/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

let count = 0;

const btnStart = document.querySelector('[ data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');


const timer = {
  startColour: null,
  start(){
    this.startColour = Math.random(colors);
  }
}

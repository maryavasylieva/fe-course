const takeAway = confirm('take awawy')

// console.log(takeAway)
let result;
const tea = 14;
const coffee = 30;
const cola = 4;
const milk = 7;

let sale = Math.floor(Math.random()*20)

let drink;

if(takeAway || !takeAway) {
   // console.log('ok')
   const chose = prompt('chose what you want !', 'only coffee tea cola')
   if(chose !== null && chose !== '') {
     switch(chose) {
       case 'cofee':
         drink = 'coffee'
         break;
       case 'tea': 
         drink = 'tea'
         break;
       case 'cola':
         drink = 'cola'
         break;
      }

      const money = prompt('how money do you have?')
      const chack = money - drink

      result = `you chose ${chose} don't forget your change ${chack}`

      if(!takeAway) {
        result = `you chose ${chose} you have sale ${sale} don't forget your change ${chack + sale} dont forget clean`
      } 
      // console.log(result)
      alert(result)

   } 

}



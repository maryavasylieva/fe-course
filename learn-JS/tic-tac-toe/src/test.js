const itGame = document.querySelector('.game');


for(let i = 0; i < 9; i++){
   const blockGame = document.createElement('div');
   blockGame.classList.add('block');
   itGame.appendChild(blockGame);
}

let move = 0;

itGame.onclick = function(event) {
   console.log(event);
   if(event.target.className === 'block'){
      if(move % 2 === 0){
         event.target.innerHTML = 'x';
      }else{
         event.target.innerHTML = '0';
      }

      move++;
      checkWinner();
   }
}

function checkWinner(){
   const allBlock = document.getElementsByClassName('block')
   console.log(allBlock);
   if(allBlock[0].innerHTML === 'x' && allBlock[1].innerHTML === 'x' && allBlock[2].innerHTML === 'x') {
      alert('You are winner!');
   }

   if(allBlock[3].innerHTML === 'x' && allBlock[4].innerHTML === 'x' && allBlock[5].innerHTML === 'x') {
      alert('You are winner!');
   }

   if(allBlock[6].innerHTML === 'x' && allBlock[7].innerHTML === 'x' && allBlock[8].innerHTML === 'x') {
      alert('You are winner!');
   }
}
// const handleGameCLick = (event) => {
//    console.log(event);
//    // console.log(handleGameClick);
   
// }



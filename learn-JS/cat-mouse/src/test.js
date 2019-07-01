document.onmousemove = function () {
   document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<img src ="https://cdn2.iconfinder.com/data/icons/cat-power/256/cat_purr.png" id="cat">');
   const cat = document.getElementById('cat');
   cat.style.position = 'fixed';

   document.onmousemove = function (event) {
      cat.style.left = event.clientX + 20 + 'px';
      cat.style.top = event.clientY + 20 + 'px';
   
   }
}




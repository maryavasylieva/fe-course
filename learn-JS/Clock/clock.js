const clock = document.querySelector('.clock');
      // hand = document.querySelector('.hand')
      sec = document.querySelector('.sec')
      min = document.querySelector('.min')
      hour = document.querySelector('.hour')

      let counter = 0;

      function run(){
        const nav = new Date()
        const seconds = nav.getSeconds();
        const minutes = nav.getMinutes();
        const hours = nav.getHours();
        console.log(seconds);
        console.log(minutes);
        console.log(hours);
        
        const handSeconds = ((seconds / 60) * 360) + 90;
        const handMinutes = (( minutes / 60) * 360) + 90;
        const handHours = ((hours / 12) * 360) + 90;
      //   console.log(handSeconds);
        // min.style.transform({rotate: handMinutes, origin: [0, 0]})
        sec.style.transform = `rotate(${handSeconds}deg)`
        min.style.transform = `rotate(${handMinutes}deg)`
        hour.style.transform = `rotate(${handHours}deg)`
        
         
         // counter ++;
         // console.log(counter);
         
      }

      setInterval(run, 1000);
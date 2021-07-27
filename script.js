function playSound(e){
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from executing
     audio.currentTime = 0;//rewind to the start
     audio.play();
     key.classList.add('playing');
   };
   
   
    document.addEventListener('keydown', playSound );

   function removeTransition(e){
       if(e.propertyName !== 'transform') return ;//skip if it not a transform
       this.classList.remove('playing');
   }
   
   
   
   const keys=document.querySelectorAll('.key');
   keys.forEach(key=>key.addEventListener('transitionend', removeTransition));
   
   
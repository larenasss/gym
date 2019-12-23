// Использована библиотека Animate.js
// https://animejs.com/

import { default as anime } from '../../node_modules/animejs/lib/anime.js';
import { delay } from 'q';

$(document).ready(function(){

// Анимация лыжник

let skierAnimate = anime({
  targets: '.event__animate',
  left: '-192px',
  bottom: '-65px',
  easing: 'linear',
  duration: 4000,
  delay: 2000,
  loop: true
})

// Анимация движущегося мужчины

let myTimeline = anime.timeline({
  update: function(anim) {
    let result = +Math.round(anim.progress);
    
    if(result >= 50 ){
      $('.counter__animate').css({transform: 'rotateY(180deg)'});
    } else {
      $('.counter__animate').css({transform: 'rotateY(360deg)'});
    }
    
  },
  loop: true,
  easing: 'linear',
  duration: 5000,
  targets: '.counter__animate',
});

myTimeline
  .add({
    left: '80%',
    loop: true,
  })
  .add({
    left: '0',
    loop: true,
  })


// Счетчик на табличке

let metr = $('.counter__info-metr');
let call = $('.counter__info-call');


setInterval(function (){
    metr.text(parseInt(metr.text())+1);
    call.text(Number(parseFloat(call.text())+0.087).toFixed(2));
}, 1000);
}); 






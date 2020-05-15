import { homeTemplete } from './home.js'

let root = document.querySelector('#root');

export const templeteProyects = () =>{
    let home =`
        <button class="button1">Inicio</button>
        <button class="button2">Proyectos</button>
        <button class="button3">Contacto</button>
        <button class="button4">Acerca de mí</button>

     <div class="card1">
    <p class='triv'>Trivia<p>
    <img class='imgTrivia' src="./images/trivia.png" />
    <a href="https://adriana121.github.io/Trivia-Mexicana/" class="-btn -bg -txt">
    DEMO
   </a>
   </div>
   <div class="card2">
   <p class='cifrado'>Cifrado César<p>
   <img class='imgCipher' />
   <a href="https://adriana121.github.io/Trivia-Mexicana/" class="-bttn -big -txt1">
   DEMO
  </a>
  </div>

   


     `;
      root.innerHTML = home;
     
      let btn1 = document.querySelector('.button1');
      btn1.addEventListener('click', homeTemplete)
      let btn4 = document.querySelector('.button4');
      btn4.addEventListener('click', function(){
          console.log('ggg');
      })
      let btni = document.querySelector('.button3');
      btni.addEventListener('click', function(){
          console.log('ggg');
      })
}
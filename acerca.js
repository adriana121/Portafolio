import { homeTemplete } from './home.js'
import { templeteProyects } from './proyects.js'

let root = document.querySelector('#root');

 export const viewMe = () =>{
   let templeteMe = `
   <nav class="buttons">
    <button id="button1" class="button1">Inicio</button>
    <button id="button2" class="button1">Proyectos</button>
    <button id="button3" class="button1">Acerca de mí</button>
    </nav>
  <div class="description">
      <img class="imgProfile" src="./images/profile.jpeg" />
      <p class="information">Adriana Aguilar Frontend Developer</p>
      <p class="info2">Mujer perseverante, que nunca se rinde a pesar de las adversidades y que siempre busca una solución a cualquier problema, me gusta trabajar en equipo siempre pensado en las necesidades del proyecto y/o objetivo que se tenga con el equipo.</p>
</div>
   `;
   root.innerHTML= templeteMe;
     
   let btn1 = document.querySelector('#button1');
   btn1.addEventListener('click', homeTemplete);
   
   let btn2 = document.querySelector('#button2');
   btn2.addEventListener('click', templeteProyects)
}
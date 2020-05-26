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

    <div class="container">
      <img class="imgProfile" src="./images/profile.jpeg" />
      <div class="description">
      <p class="information">Adriana Aguilar Frontend Developer</p>
      <p class="info2">Mujer perseverante, que nunca se rinde a pesar de las adversidades y que siempre busca una solución a cualquier problema, me gusta trabajar en equipo siempre pensado en las necesidades del proyecto y/o objetivo que se tenga con el equipo.</p>
      <img class="imgIcon" src="./images/correo-electronico.png"/><p class="gmail">adrianafrontendcdmx@gmail.com</p>
      <img class="img-tel" src="./images/telefono.png"/><p class="tel">5614388812</p>
      <a href="https://github.com/adriana121"><img class="git" src="./images/icon.png" /></a>
      <a href="https://www.linkedin.com/in/adriana-paola-6bb4891a9/"><img class="link" src="./images/linkedin.png" /></a>
      </div>
   </div>
   `;
   root.innerHTML= templeteMe;
     
   let btn1 = document.querySelector('#button1');
   btn1.addEventListener('click', homeTemplete);
   
   let btn2 = document.querySelector('#button2');
   btn2.addEventListener('click', templeteProyects)
}
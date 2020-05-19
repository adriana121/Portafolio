import { templeteProyects } from './proyects.js'
import { viewMe } from './acerca.js'
let root = document.querySelector('#root');

export const homeTemplete = ()=>{
let templeteH = `
<nav class="buttons">
    <button id="button1" class="button1">Inicio</button>
    <button id="button2" class="button1">Proyectos</button>
    <button id="button3" class="button1">Contacto</button>

</nav>

    <h1 class="sombra_movil">&lt;Adriana Aguilar&gt;</h1>
    <h2 class="sombra_movil">Frontend Developer</h2>

`;
root.innerHTML =templeteH;
let btnProyect = document.querySelector('#button2');
btnProyect.addEventListener('click', templeteProyects);

}
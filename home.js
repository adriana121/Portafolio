import { templeteProyects } from './proyects.js'
let root = document.querySelector('#root');

export const homeTemplete = ()=>{
let templeteH = `
    <button  class="button1">Inicio</button>
    <button  class="button2">Proyectos</button>
    <button  class="button3">Contacto</button>
    <button  class="button4">Acerca de mí</button>
    <h1 class="sombra_movil">&lt;Adriana Aguilar&gt;</h1>
    <h2 class="sombra_movil">Frontend Developer</h2>
`;
root.innerHTML =templeteH;
let btnProyect = document.querySelector('.button2');
btnProyect.addEventListener('click', templeteProyects);

}
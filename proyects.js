import { homeTemplete } from './home.js'
import { viewMe } from './acerca.js'

let root = document.querySelector('#root');

export const templeteProyects = () =>{
    let home =`
    <nav class="buttons">
    <button id="button1" class="button1">Inicio</button>
    <button id="button2" class="button1">Proyectos</button>
    <button id="button3" class="button1">Acerca de mí</button>
    </nav>
    <div id="container"></div>
 `;
 root.innerHTML = home;
     
      let btn1 = document.querySelector('#button1');
      btn1.addEventListener('click', homeTemplete)
      let btni = document.querySelector('#button3');
      btni.addEventListener('click', function(){
        viewMe()
      });


    let listProyect= { "Proyectos": [{
        "tile":"Trivia",
        "demo":"https://adriana121.github.io/Trivia-Mexicana/",
        "img": "./images/trivia.png"
    }, {
        "tile":"Cifrado César",
        "demo":" https://adriana121.github.io/Cifrado/",
        "img": "./images/cifrado.png"
    },{
        "tile":"Pakimanes",
        "demo":"https://adriana121.github.io/CDMX009-Data-Lovers/",
        "img": "./images/pakimanes.jpg"
    },{
        "tile":"Code Woman",
        "demo":"https://code-woman-37553.web.app/",
        "img": "./images/codewoman.jpg"
    }
]};


let container = document.querySelector('#container');

let pro = listProyect.Proyectos;
console.log(pro);
pro.map(c=>{
    let p = document.createElement('p')
    p.classList.add("card")
    p.innerHTML = `
    <img src=${c.img} />
    <p class='title'>${c.tile}</p>
    <form action=${c.demo}>
    <input class="demo" type="submit" value="DEMO" />
</form>
    `;
    container.appendChild(p)
})

    }
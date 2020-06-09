import '../css/componentes.css';
import { listaTareas } from '../index';
import { Tarea } from '../class';

const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const filtros = document.querySelector('.filtros');
const afiltros = document.querySelectorAll('.filtros a');



export function crearLista(tarea) {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
    <i class="fas fa-check-circle" data-id="${tarea.id}"></i>
        <ul>
            <li>
                <p>${tarea.nombre}</p>
            </li>
        </ul>
    <i class="fas fa-times" data-id="${tarea.id}"></i>
    `;

    lista.append(div);
    return div;
};

input.addEventListener('keyup',(event)=> {
    
    const enter = event.keyCode;
    let valor = event.target.value;

    if (enter === 13) {
        const tarea = new Tarea(valor);
        listaTareas.nuevaTarea(tarea);
        crearLista(tarea);
        input.value = '';
        console.log(listaTareas);
    }
});

lista.addEventListener('click', (event)=>{

    const elemento = event.target;
    const claseElemento = elemento.classList;
    const elementoPadre = elemento.parentElement;
    const dataID = elemento.getAttribute('data-id');

    console.log(elemento);

    if( claseElemento.contains('fa-times') ) {
        listaTareas.eliminarTarea(dataID);
        elementoPadre.remove();

    }else if (claseElemento.contains('fa-check-circle')) {
        elementoPadre.classList.toggle('completed');
        elemento.classList.toggle('check');
        listaTareas.marcarCompletado(dataID);
        console.log(listaTareas);
    }
});

filtros.addEventListener('click', (event)=> {

    const elemento = event.target;
    const filtro = elemento.text;

    if ( !filtro ){  return; }

    afiltros.forEach(elem => elem.classList.remove('seleccion'));
    elemento.classList.add('seleccion');

    for (const hijo of lista.children) {

        hijo.classList.remove('hidden');
        const completado = hijo.classList.contains('completed');

        if( filtro === 'PENDIENTES' ){
            if( completado ){
                hijo.classList.add('hidden');
            }
        }else if( filtro === 'COMPLETADOS' ){
            if( !completado ){
                hijo.classList.add('hidden');
            }
        }
    }

} )






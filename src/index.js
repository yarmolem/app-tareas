import './style.css';
import {Tarea, ListaTareas} from './class';
import { crearLista } from './js/componentes';

// const react = new Tarea('Aprender Redux');
// const typeScript = new Tarea('Aprender TypeScript');
// const js = new Tarea('Aprender JavaScript');
// const node = new Tarea('Aprender Node.js');

export const listaTareas = new ListaTareas();


// listaTareas.nuevaTarea(typeScript);
// listaTareas.nuevaTarea(js);
// listaTareas.nuevaTarea(node);

listaTareas.tareas.forEach( crearLista );

console.log(listaTareas);








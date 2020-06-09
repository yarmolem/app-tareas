
import { Tarea } from './index'

export class ListaTareas {

    constructor() {
        // this.tareas = [];
        this.cargarLS();
    }

    nuevaTarea( tarea ) {
        this.tareas.push(tarea);
        this.guardarLS();
    }

    marcarCompletado( id ) {

        for (const tarea of this.tareas) {
            if( id == tarea.id ){
                tarea.completado = !tarea.completado;
                this.guardarLS();
                break;
            }
        }
    }

    eliminarTarea( id ) {
        this.tareas = this.tareas.filter(tarea => tarea.id != id );
        this.guardarLS();
    }

    guardarLS() {
        localStorage.setItem('Tarea', JSON.stringify(this.tareas));
    }

    cargarLS() {

        this.tareas = localStorage.getItem( 'Tarea' ) 
            ? JSON.parse( localStorage.getItem( 'Tarea' ) ) 
            : [];

        this.tareas = this.tareas.map(Tarea.fromJson);

    }

}
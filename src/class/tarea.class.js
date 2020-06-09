

export class Tarea {

    static fromJson ({ nombre, id, completado, creado }){

        const tempTodo = new Tarea( nombre );

        tempTodo.id = id;
        tempTodo.nombre = nombre
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor( nombre ) {
        this.nombre = nombre;
        this.completado = false;
        this.id     = new Date().getTime();
        this.creado = new Date();
    }

}
import React from "react";
import { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../Stylesheets/ListaDeTareas.css";

function ListaDeTareas() {

    // Incialmente tareas es un arreglo vacío (estado inicial)
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        // Primero se verifica que la cadena no esta vacía
        if (tarea.texto.trim()) {
            //Se quitan los espacios innecesarios
            tarea.texto = tarea.texto.trim();
            //Se agrega la tarea nueva en primer lugar
            const tareasActualizadas = [tarea, ...tareas];
            //Se actualiza tareas con setTareas
            setTareas(tareasActualizadas);
        }
    }
    //Metodo para eliminar tareas por id
    const eliminarTarea = id => {
        //Se filtran las tareas dejando sólo las que no corresponden al id
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }
    //Metodo para indicar tarea completada
    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            //Actualiza la tarea por id
            if(tarea.id === id) {
                //Si el valor es verdadero lo convierte en falso, y viceversa
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return(
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map(
                        (tarea) => 
                            <Tarea
                                key={tarea.id}
                                id={tarea.id}
                                texto={tarea.texto}
                                completada={tarea.completada}
                                completarTarea={completarTarea}
                                eliminarTarea={eliminarTarea}
                            />
                    )
                }
            </div>
        </>
    );
}
export default ListaDeTareas;
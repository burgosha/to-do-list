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

    return(
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map(
                        (tarea) => 
                            <Tarea
                                texto={tarea.texto}
                                completada={tarea.completada}
                            />
                    )
                }
            </div>
        </>
    );
}
export default ListaDeTareas;
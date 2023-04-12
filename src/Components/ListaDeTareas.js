import React from "react";
import { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../Stylesheets/ListaDeTareas.css";

function ListaDeTareas() {

    // Incialmente tareas es un arreglo vacío (estado inicial)
    const [tareas, setTareas] = useState([]);

    return(
        <>
            <TareaFormulario />
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
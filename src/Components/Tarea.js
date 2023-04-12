import React from "react";
import "../Stylesheets/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
    return(
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-contenedor-iconos">
                <AiOutlineCloseCircle className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;
import React from "react";
import "../Stylesheets/Tarea.css";

function Tarea({texto}) {
    return(
        <div className="tarea-contenedor">
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-icono">
                X
            </div>
        </div>
    );
}

export default Tarea;
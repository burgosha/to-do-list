import React from "react";
import { useState } from "react";
import "../Stylesheets/TareaFormulario.css";
import { v4 as uuidv4} from "uuid";

function TareaFormulario(props) {
    const [input, setInput] = useState("");

    const manejarCambio = e => {
        // Extrae el valor del texto que ingresa el usuario
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        // Evita que toda la aplicación se vuelva a cargar cuando se envía el formulario
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }
    return(
        <form 
            className="tarea-formulario"
            onSubmit={manejarEnvio}>
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    );
}
export default TareaFormulario;
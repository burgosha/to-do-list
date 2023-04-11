import './App.css';
import Tarea from './Components/Tarea';
import TareaFormulario from './Components/TareaFormulario';

function App() {
  return (
    <div className="App">
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <TareaFormulario />
        <Tarea texto="Ejemplo de texto" completada={true}/>
      </div>
    </div>
  );
}

export default App;

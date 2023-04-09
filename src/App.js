import './App.css';
import Tarea from './Components/Tarea';

function App() {
  return (
    <div className="App">
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto="Ejemplo de texto"/>
      </div>
    </div>
  );
}

export default App;

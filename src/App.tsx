import './App.css';
import Questions from './Questions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz tech</h1>
      </header>
      <div>
        <p className='App-subtitle'>Esse é um quiz sobre tecnologia desenvolvido pela equipe: Maria, Daniel, Thallyson, {<br />} Gustavo, Nathalia, Raynara, Tell, Felipe, Nicole e Geovana </p>
        <Questions />
      </div>
    </div>
  );
}

export default App;

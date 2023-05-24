import './App.css';
import './components/backgroundScene.css'
import Weather from './components/Weather'
import Clock from './components/Clock';
import NScene from './components/NScene';

function App() {
  return (
    <div className="App">
        <NScene/>
        <div className="card text-bg-dark bg-opacity-25 mb-3 centered">
        <Clock/>
        <Weather/>
         <footer>
          This project was coded by Jasmin Carter and is partly open-sourced on <span><a href="https://github.com/sleepykanguru22" target="_blank" rel="noreferrer">github</a></span>
        </footer>
        </div>
    </div>
  );
}

export default App;

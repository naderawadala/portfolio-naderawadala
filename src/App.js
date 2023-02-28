import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About/About';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      </main>
    </div>
  );
}

export default App;

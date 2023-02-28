import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
      </main>
    </div>
  );
}

export default App;

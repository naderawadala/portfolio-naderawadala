import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUp from './components/Footer/ScrollUp';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      {/* <Projects/> */}
      <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  );
}

export default App;

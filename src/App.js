import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
      <Home/>
      <About/>
      </main>
    </div>
  );
}

export default App;

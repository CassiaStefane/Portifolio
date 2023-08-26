import './App.css';
import Intro from './components/Intro';
import Project from './components/Project';
import Nav from './components/Nav';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Project />
    </div>
  );
}

export default App;

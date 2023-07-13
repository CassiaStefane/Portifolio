import './App.css';
import Intro from './components/Intro';
import Project from './components/Project';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Project />
    </div>
  );
}

export default App;

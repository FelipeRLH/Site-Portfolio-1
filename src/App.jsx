import { BrowserRouter as Router } from 'react-router-dom';

// COMPONENTS
import Home from "./Pages/Home";
import Projects from './Pages/Projects';
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {

  return (
    <Router>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;

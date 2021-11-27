import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Theme from "./Theme";
import Toggle from "./Toggle";
import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="main_page">
      <Navbar />
      <Toggle />
      <Theme />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

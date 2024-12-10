import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

import About from "./Components/About";
import JobExample from "./Components/JobExample";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="about">
      <NavLink to="/">About</NavLink>
      <NavLink to="/jobexample">JobExample</NavLink>
      <NavLink to="/contact">Contact</NavLink>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/jobexample" element={<JobExample />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

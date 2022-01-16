import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// stylesheets
import './App.css';

// components
import Contact from './components/contact.component';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Skills from './components/skills.component';

function App() {
  return (
    <div className="App container">
      <Router>
        <Nav />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact-me" element={<Contact />} />
            <Route exact path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

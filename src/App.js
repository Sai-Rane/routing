import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
const Home = () => {
  <>
    <h1>Home</h1>
    <h1>Home Page</h1>
  </>;
};

const About = () => {
  return (
    <>
      <h1>About</h1>
      <h1>About Page</h1>
    </>
  );
};

const Contact = () => {
  <>
    <h1>Contact</h1>
    <h1>Contact Page</h1>
  </>;
};

import React from "react";
import "./App.css";
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Art } from './components/Art.js';
import { Projects } from './components/Projects.js';
import { About } from './components/About.js';
import { Contact } from './components/Contact.js';
import ThreeDScene from "./newComponents/TreasureCoralScene.js";
import { Footer } from './newComponents/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome() {
  return (
    <h1>
      Hello and Welcome.
    </h1>
  )
}

function App() {
    return (
        <div className="App">
            <ThreeDScene/>
        </div>
    )
}

function oldApp() {
  return (
      <div className="App2">
          <NavBar/>
          <Banner/>
          <About/>
          <Projects/>
          <Art/>
          <Contact/>
          <Footer/>
      </div>
  )
}

export default App;
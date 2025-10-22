import "./App.css";
import ThreeDScene from "./newComponents/TreasureCoralScene.js";
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

export default App;
import React from "react";
import "./App.css";
import Note from "./components/Note";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
        <div className="App-body">
          <span>test</span>
          <Note />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

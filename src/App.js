import React from "react";
import "./App.css";
import Note from "./components/AddNote";
import NavBar from "./components/NavBar";
import ViewNote from "./components/ViewNote";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
        <div className="App-body">
          <Switch>
            <Route path="/addnote" component={Note} />
            <Route path="/viewnote/:id" component={ViewNote} />
            <Route path="/" component={ViewNote} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

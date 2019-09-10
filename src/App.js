import React from "react";
import "./App.css";
import Note from "./components/AddNote";
import NavBar from "./components/NavBar";
import ViewNote from "./components/ViewNote";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ViewAllNotes from "./components/ViewAllNotes";
import EditNote from "./components/EditNote";
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
            <Route path="/viewallnotes" component={ViewAllNotes} />
            <Route path="/editnote/:id" component={EditNote} />
            <Route path="/" component={ViewAllNotes} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

import React, { Component } from "react";
import "../css/Note.css";
class Note extends Component {
  state = {
    topic: "Choose...",
    title: "",
    URL: "",
    notes: "tt"
  };
  handleSubmit = () => {
    console.log(this.state.notes);
  };
  handleChangeTopic = event => {
    this.setState({ topic: event.target.value });
  };
  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  handleChangeURL = event => {
    this.setState({ URL: event.target.value });
  };
  handleChangeNotes = event => {
    this.setState({ notes: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="Note-header">Add new note</div>
        <div className="Note-body">
          <div className="Note-form">
            <form>
              <div className="form-group">
                <label className="my-1 mr-2">Topic</label>
                <select
                  className="custom-select my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  onChange={this.handleChangeTopic}
                  value={this.state.value}
                >
                  <option defaultValue>Choose...</option>
                  <option value="Java">Java</option>
                  <option value="React">React</option>
                  <option value="Postgre">Postgre</option>
                  <option value="Add">Add new topic</option>
                </select>
              </div>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  aria-describedby="titleHelp"
                  placeholder="Enter title for new note"
                  onChange={this.handleChangeTitle}
                />
              </div>
              <div className="form-group">
                <label>URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputURL"
                  placeholder="Enter tutorial url (optional)"
                  onChange={this.handleChangeURL}
                />
              </div>
              <div className="form-group">
                <label>Notes</label>
                <textarea
                  className="form-control"
                  id="inputNoteText"
                  placeholder="Enter note details here"
                  cols="30"
                  rows="15"
                  onChange={this.handleChangeNotes}
                />
              </div>
              <button
                type="submit"
                className="btn btn-custom"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Note;

import React, { Component } from "react";
import "../css/Note.css";
class Note extends Component {
  state = {};
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
                >
                  <option defaultValue>Choose...</option>
                  <option value="1">Java</option>
                  <option value="2">React</option>
                  <option value="3">Postgre</option>
                  <option value="3">Add new topic</option>
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
                />
              </div>
              <div className="form-group">
                <label>URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputURL"
                  placeholder="Enter tutorial url (optional)"
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
                />
              </div>
              <button type="submit" className="btn btn-custom">
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

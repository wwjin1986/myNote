import React, { Component } from "react";
import "../css/Note.css";
import fetchGetAPI from "../commons/fetchGetAPI";
import config from "../commons/config.json";
import fetchPostAPI from "../commons/fetchPostAPI";
class Note extends Component {
  state = {
    topic: "Choose...",
    title: "",
    URL: "",
    noteText: "",
    categories: [],
    show: "true"
  };

  async componentDidMount() {
    fetchGetAPI(config.apiEndPoint + "/categories")
      .then(data =>
        Object.keys(data).length
          ? this.setState({
              categories: data
            })
          : {}
      )
      .catch(error => {
        throw error;
      });
  }
  handleSubmit = () => {
    let body = JSON.stringify({
      topic: this.state.topic,
      title: this.state.title,
      url: this.state.URL,
      noteText: this.state.noteText
    });
    fetchPostAPI(config.apiEndPoint + "/notes", body);
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
    this.setState({ noteText: event.target.value });
  };
  handleClose = () => {};
  render() {
    return (
      <React.Fragment>
        <div className="Note-header">Add new note</div>
        <div className="Note-body">
          <div className="Note-form">
            <form>
              <div className="form-group">
                <label className="my-1 mr-2">Topic</label>{" "}
                <select
                  className="custom-select my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  onChange={this.handleChangeTopic}
                  value={this.state.value}
                >
                  <option defaultValue>Choose...</option>
                  {this.state.categories.map(category => (
                    <option key={category.id} value={category.topic}>
                      {category.topic}
                    </option>
                  ))}

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

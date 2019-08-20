import React, { Component } from "react";
import "../css/Note.css";
import fetchGetAPI from "../commons/fetchGetAPI";
import config from "../commons/config.json";
import fetchPostAPI from "../commons/fetchPostAPI";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withRouter } from "react-router-dom";

class Note extends Component {
  state = {
    topic: "Choose...",
    title: "",
    URL: "",
    noteText: "",
    categories: [],
    showModal: false,
    modalTopic: "",
    modalCategory: ""
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
    fetchPostAPI(config.apiEndPoint + "/notes", body).then(data =>
      this.props.history.push("/viewnote/" + data.id)
    );
  };
  handleChangeTopic = event => {
    if (event.target.value === "Add") this.handleToggleModal();
    else {
      this.setState({ topic: event.target.value });
    }
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
  handleToggleModal = () => {
    this.state.showModal === false
      ? this.setState({ showModal: true })
      : this.setState({ showModal: false });
  };

  handleChangeTopicModal = event => {
    this.setState({ modalTopic: event.target.value }, () =>
      console.log(this.state.modalTopic)
    );
  };
  handleChangeCategoryModal = event => {
    this.setState({ modalCategory: event.target.value }, () =>
      console.log(this.state.modalCategory)
    );
  };
  handleSubmitNewTopic = () => {
    let body = JSON.stringify({
      topic: this.state.modalTopic,
      category: this.state.modalCategory
    });
    //save to table category
    fetchPostAPI(config.apiEndPoint + "/categories", body);
    //fetch table category to update topic options
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
    this.setState({ showModal: false });
  };
  render() {
    return (
      <React.Fragment>
        <div className="Note-header">
          <i className="fa fa-sticky-note-o" aria-hidden="true" />
          {"    "}
          Add new note
        </div>
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
                      {category.topic + "  (" + category.category + ")"}
                    </option>
                  ))}

                  <option value="Add">Add new topic</option>
                </select>
              </div>

              <div>
                <Modal isOpen={this.state.showModal}>
                  <ModalHeader>
                    <i className="fa fa-list-ul" aria-hidden="true" />
                    {"    "}Add new topic
                  </ModalHeader>
                  <ModalBody className="ModalBody">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label>Topic</label>
                        <input
                          type="text"
                          className="form-control"
                          id="modalTopic"
                          placeholder="Enter topic name here"
                          onChange={this.handleChangeTopicModal}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label>Category</label>
                        <input
                          type="text"
                          className="form-control"
                          id="modalCategory"
                          onChange={this.handleChangeCategoryModal}
                        />
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <input
                      value="Submit"
                      className="btn btn-note-custom"
                      onClick={this.handleSubmitNewTopic}
                      readOnly
                    />
                    <input
                      onClick={this.handleToggleModal}
                      value="Cancel"
                      className="btn btn-note-custom"
                      readOnly
                    />
                  </ModalFooter>
                </Modal>
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

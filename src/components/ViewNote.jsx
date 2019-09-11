import React, { Component } from "react";
import "../css/Note.css";
import fetchGetAPI from "../commons/fetchGetAPI";
import config from "../commons/config.json";
import fetchDeleteAPI from "../commons/fetchDeleteAPI";
class ViewNote extends Component {
  state = { topic: "", noteText: "", url: "", updatedAt: "", title: "" };
  async componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({ id: id });
    fetchGetAPI(config.apiEndPoint + "/notes/" + id).then(data => {
      let time = new Date();
      time.setTime(data.updatedAt);

      this.setState({
        topic: data.topic,
        noteText: data.noteText,
        url: data.url,
        updatedAt: time.toLocaleString(),
        title: data.title
      });
    });
  }
  handleDelete = async () => {
    if (window.confirm("Are you sure to delete this note?")) {
      await fetchDeleteAPI(config.apiEndPoint + "/notes/" + this.state.id);
      this.props.history.push("/viewallnotes");
    }
  };
  handleEdit = () => {
    this.props.history.push("/editnote/" + this.state.id);
  };
  handleChanglePage = event => {
    this.props.history.push("/viewallnotes");
  };
  render() {
    return (
      <React.Fragment>
        <div className="Note-header">
          <i className="fa fa-list-alt" aria-hidden="true" />
          {"  "}
          <a>View note details</a>
        </div>
        <div className="Note-body">
          <div className="Note-table">
            <table className="table table-bordered table-hover ">
              <caption>{this.state.title}</caption>
              <tbody>
                <tr>
                  <th>
                    <label className="my-1 mr-2">Topic</label>
                  </th>
                  <td>
                    <label className="my-1 mr-2">{this.state.topic}</label>
                  </td>
                </tr>
                <tr>
                  <th>
                    <label className="my-1 mr-2">Url</label>
                  </th>
                  <td>
                    <a
                      href={this.state.url}
                      className="my-1 mr-2"
                      target="_blank"
                    >
                      {this.state.url}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>
                    <label className="my-1 mr-2">Note</label>
                  </th>
                  <td>
                    <p style={{ whiteSpace: "pre-line" }}>
                      {this.state.noteText}
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <label className="my-1 mr-2">Updated At</label>
                  </th>
                  <td>
                    <label className="my-1 mr-2">{this.state.updatedAt}</label>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <button
                id="edit"
                className="btn btn-view-custom"
                onClick={this.handleEdit}
              >
                Edit this note
              </button>
              <button
                id="delete"
                className="btn btn-view-custom"
                onClick={this.handleDelete}
              >
                Delete this note
              </button>

              <button
                id="viewTopic"
                className="btn btn-view-custom"
                onClick={this.handleChanglePage}
              >
                View all notes
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewNote;

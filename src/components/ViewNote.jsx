import React, { Component } from "react";
import "../css/Note.css";
import fetchGetAPI from "../commons/fetchGetAPI";
import config from "../commons/config.json";
class ViewNote extends Component {
  state = { topic: "", noteText: "", url: "", updatedAt: "", title: "" };
  async componentDidMount() {
    let id = this.props.match.params.id;
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
  render() {
    return (
      <React.Fragment>
        <div className="Note-header">Note: {this.state.title} added</div>
        <div className="Note-body">
          <div className="Note-form">
            <div className="form-group">
              <label className="my-1 mr-2">Topic</label>{" "}
              <label className="my-1 mr-2">{this.state.topic}</label>{" "}
            </div>
            <div className="form-group">
              <label className="my-1 mr-2">Url</label>{" "}
              <label className="my-1 mr-2">{this.state.url}</label>{" "}
            </div>
            <div className="form-group">
              <label className="my-1 mr-2">Note</label>{" "}
              <p style={{ whiteSpace: "pre-line" }}>{this.state.noteText}</p>
            </div>
            <div className="form-group">
              <label className="my-1 mr-2">Updated At</label>{" "}
              <label className="my-1 mr-2">{this.state.updatedAt}</label>{" "}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewNote;

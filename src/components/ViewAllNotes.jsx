import React, { Component } from "react";
import fetchGetAPI from "../commons/fetchGetAPI";
import config from "../commons/config.json";
class ViewAllNotes extends Component {
  state = { notes: [] };
  async componentDidMount() {
    fetchGetAPI(config.apiEndPoint + "/notes")
      .then(data =>
        Object.keys(data).length
          ? this.setState({
              notes: data
            })
          : {}
      )
      .catch(error => {
        throw error;
      });
  }

  handleDelete = event => {
    console.log(event.currentTarget.id);
  };
  handleDetail = event => {
    this.props.history.push("/viewnote/" + event.currentTarget.id);
  };
  render() {
    return (
      <React.Fragment>
        <div className="Note-header">All Notes</div>
        <div className="Note-body">
          <div className="Note-table">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Title</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Detail</th>
                  <th scope="col">Like</th>
                </tr>
              </thead>
              <tbody>
                {this.state.notes.map(note => (
                  <tr key={note.id}>
                    <td>{note.id}</td>
                    <td>{note.topic}</td>
                    <td>{note.title}</td>
                    <td>
                      <button
                        className="btn btn-outline-dark btn-sm"
                        id={note.id}
                        onClick={this.handleDelete}
                      >
                        <i className="fa fa-trash-o" aria-hidden="true" />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-dark btn-sm"
                        id={note.id}
                        onClick={this.handleDetail}
                      >
                        <i className="fa fa-list" aria-hidden="true" />
                      </button>
                    </td>
                    <td>
                      <i className="fa fa-heart" aria-hidden="true" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewAllNotes;

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

  handleDelete = () => {
    console.log("delete");
  };
  render() {
    return (
      <React.Fragment>
        <div className="Note-header">All Notes</div>
        <div className="Note-body">
          <div className="Note-table">
            <table className="table table-striped">
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
                    <td>delete</td>
                    <td>detail</td>
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

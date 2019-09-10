import React, { Component } from "react";
import fetchGetAPI from "../commons/fetchGetAPI";
import config from "../commons/config.json";
import fetchDeleteAPI from "../commons/fetchDeleteAPI";
import Like from "../commons/Like";
class ViewAllNotes extends Component {
  state = { notes: [], sortById: "fa fa-sort-desc" };
  async componentDidMount() {
    await fetchGetAPI(config.apiEndPoint + "/notes/id/DESC")
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

  handleDelete = async event => {
    if (window.confirm("Are you sure you wish to delete this note?")) {
      await fetchDeleteAPI(
        config.apiEndPoint + "/notes/" + event.currentTarget.id
      );
      await fetchGetAPI(config.apiEndPoint + "/notes/id/DESC")
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
  };
  handleDetail = event => {
    this.props.history.push("/viewnote/" + event.currentTarget.id);
  };

  handleSort = async event => {
    if (event.currentTarget.id === "sortByTopic") {
      this.setState({ sortById: "" });
      if (this.state.sortByTopic === "fa fa-sort-desc") {
        this.setState({ sortByTopic: "fa fa-sort-asc" });
        await fetchGetAPI(config.apiEndPoint + "/notes/topic/ASC")
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
      } else {
        this.setState({ sortByTopic: "fa fa-sort-desc" });
        await fetchGetAPI(config.apiEndPoint + "/notes/topic/DESC")
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
    } else if (event.currentTarget.id === "sortById") {
      this.setState({ sortByTopic: "" });
      if (this.state.sortById === "fa fa-sort-desc") {
        this.setState({ sortById: "fa fa-sort-asc" });
        await fetchGetAPI(config.apiEndPoint + "/notes/id/ASC")
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
      } else {
        this.setState({ sortById: "fa fa-sort-desc" });
        await fetchGetAPI(config.apiEndPoint + "/notes/id/DESC")
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
    }
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
                  <th scope="col" id="sortById" onClick={this.handleSort}>
                    #{"  "}
                    <i className={this.state.sortById} aria-hidden="true" />
                  </th>
                  <th scope="col" id="sortByTopic" onClick={this.handleSort}>
                    Topic{"  "}
                    <i className={this.state.sortByTopic} aria-hidden="true" />
                  </th>
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
                        {note.liked}
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
                      <Like liked={note.liked} id={note.id} />
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

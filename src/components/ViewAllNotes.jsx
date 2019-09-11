import React, { Component } from "react";
import fetchGetAPI from "../commons/fetchGetAPI";
import config from "../commons/config.json";
import fetchDeleteAPI from "../commons/fetchDeleteAPI";
import Like from "../commons/Like";
class ViewAllNotes extends Component {
  state = {
    notes: [],
    sortByUpdated: "fa fa-sort-desc",
    sortedBy: "updatedAt",
    direction: "DESC"
  };
  async componentDidMount() {
    await fetchGetAPI(
      config.apiEndPoint +
        "/notes/" +
        this.state.sortedBy +
        "/" +
        this.state.direction
    )
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
      await fetchGetAPI(
        config.apiEndPoint +
          "/notes/" +
          this.state.sortedBy +
          "/" +
          this.state.direction
      )
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
      this.setState({ sortByUpdated: "", sortedBy: "topic" });
      if (this.state.sortByTopic === "fa fa-sort-desc") {
        this.setState({ sortByTopic: "fa fa-sort-asc", direction: "ASC" });
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
        this.setState({ sortByTopic: "fa fa-sort-desc", direction: "DESC" });
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
    } else if (event.currentTarget.id === "sortByUpdated") {
      this.setState({ sortByTopic: "", sortedBy: "updatedAt" });
      if (this.state.sortByUpdated === "fa fa-sort-desc") {
        this.setState({ sortByUpdated: "fa fa-sort-asc", direction: "ASC" });
        await fetchGetAPI(config.apiEndPoint + "/notes/updatedAt/ASC")
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
        this.setState({ sortByUpdated: "fa fa-sort-desc", direction: "DESC" });
        await fetchGetAPI(config.apiEndPoint + "/notes/updatedAt/DESC")
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
                  <th scope="col" id="sortByUpdated" onClick={this.handleSort}>
                    Updated Time{"  "}
                    <i
                      className={this.state.sortByUpdated}
                      aria-hidden="true"
                    />
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
                    <td>{new Date(note.updatedAt).toLocaleString()}</td>
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

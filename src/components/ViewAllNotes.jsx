import React, { Component } from "react";
import fetchGetAPI from "../utils/fetchGetAPI";
import config from "../utils/config.json";
import fetchDeleteAPI from "../utils/fetchDeleteAPI";
import Like from "../commons/Like";
import Pagination from "../commons/Pagination";
import { paginate } from "../utils/paginate";
import Filter from "../commons/Filter";
class ViewAllNotes extends Component {
  state = {
    notes: [],
    sortByUpdated: "fa fa-sort-desc",
    sortedBy: "updatedAt",
    direction: "DESC",
    pageSize: 8,
    currentPage: 1,
    filteredBy: "topic"
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

  //handle page change on pagination
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleItemSelect = topic => {
    this.setState({ filteredBy: topic });
  };
  render() {
    const {
      sortByTopic,
      pageSize,
      sortByUpdated,
      notes,
      currentPage,
      filteredBy
    } = this.state;
    const filtered =
      filteredBy === "topic"
        ? notes
        : notes.filter(m => m.topic === filteredBy);
    const paginatedNotes = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="Note-header">
          <div
            style={{
              width: "55%",
              marginRight: 0,
              display: "inline-block",
              textAlign: "right"
            }}
          >
            {" "}
            <i className="fa fa-file-text-o" aria-hidden="true" />
            {"   "}
            View all notes
          </div>
          <div style={{ width: "45%", display: "inline-block" }}>
            <Filter
              items={notes}
              onItemSelect={this.handleItemSelect}
              filteredBy={filteredBy}
            />
          </div>
        </div>
        <div className="Note-body">
          <div className="Note-table">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col" id="sortByUpdated" onClick={this.handleSort}>
                    Updated Time{"  "}
                    <i className={sortByUpdated} aria-hidden="true" />
                  </th>
                  <th
                    scope="col"
                    style={{ maxWidth: "80px" }}
                    id="sortByTopic"
                    onClick={this.handleSort}
                  >
                    Topic{"  "}
                    <i className={sortByTopic} aria-hidden="true" />
                  </th>
                  <th scope="col">Title</th>
                  <th scope="col" className="col-small">
                    Detail
                  </th>
                  <th scope="col" className="col-small">
                    Delete
                  </th>
                  <th scope="col" className="col-small">
                    Bookmark
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedNotes.map(note => (
                  <tr key={note.id}>
                    <td>{new Date(note.updatedAt).toLocaleString()}</td>
                    <td style={{ maxWidth: "80px" }}>{note.topic}</td>
                    <td>{note.title}</td>
                    <td className="col-small">
                      <button
                        className="btn btn-outline-dark btn-sm"
                        id={note.id}
                        onClick={this.handleDetail}
                      >
                        <i className="fa fa-list" aria-hidden="true" />
                      </button>
                    </td>
                    <td className="col-small">
                      <button
                        className="btn btn-outline-dark btn-sm"
                        id={note.id}
                        onClick={this.handleDelete}
                      >
                        {note.liked}
                        <i className="fa fa-trash-o" aria-hidden="true" />
                      </button>
                    </td>
                    <td className="col-small">
                      <Like liked={note.liked} id={note.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "2em"
              }}
            >
              <Pagination
                itemCount={filtered.length}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewAllNotes;

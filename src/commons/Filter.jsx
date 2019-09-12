import React, { Component } from "react";
import config from "../utils/config";
import fetchGetAPI from "../utils/fetchGetAPI";
class Filter extends Component {
  state = { categories: [] };
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
  handleFilter = event => {
    // event.currentTarget.style.backgroundColor = "red";
    // console.log(event.target.style.backgroundColor);
  };
  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-sm dropdown-toggle"
          data-toggle="dropdown"
          style={{
            marginRight: 0,
            border: "1px solid #46546b"
          }}
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter by <b>topic</b>
          {"  "}
        </button>
        <div className="dropdown-menu">
          {this.state.categories.map(category => (
            <a
              className="dropdown-item"
              key={category.id}
              onClick={this.handleFilter}
              id={category.topic}
            >
              {category.topic}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Filter;

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
    this.setState({ topic: event.currentTarget.id });
  };
  render() {
    const { items, onItemSelect, filteredBy } = this.props;
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
          Filter by <b>{filteredBy}</b>
          {"  "}
        </button>
        <div className="dropdown-menu">
          {this.state.categories.map(category => (
            <a
              className="dropdown-item"
              key={category.id}
              onClick={() => onItemSelect(category.topic)}
              id={category.topic}
            >
              {category.topic}
            </a>
          ))}
          <div class="dropdown-divider" />
          <a
            class="dropdown-item"
            id="all"
            onClick={() => onItemSelect("topic")}
          >
            Show all notes
          </a>
        </div>
      </div>
    );
  }
}

export default Filter;

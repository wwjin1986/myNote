import React, { Component } from "react";
import config from "./config.json";
import fetchPutAPI from "./fetchPutAPI";
class Like extends Component {
  state = { liked: this.props.liked };
  handleLiked = async () => {
    this.setState({ liked: !this.state.liked });
    await fetchPutAPI(
      config.apiEndPoint + "/notes/" + this.props.id + "/like",
      ""
    );
  };
  render() {
    return (
      <div>
        {this.state.liked === true ? (
          <i className="fa fa-bookmark" onClick={this.handleLiked} />
        ) : (
          <i className="fa fa-bookmark-o" onClick={this.handleLiked} />
        )}
      </div>
    );
  }
}

export default Like;

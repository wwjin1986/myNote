import React, { Component } from "react";
class ViewNote extends Component {
  state = {};
  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}

export default ViewNote;

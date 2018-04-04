import React, { Component } from "react";
class Result extends React.Component {
  render() {
    let { data } = this.props,
      cssClassName = data < 0 ? "negative" : "positive";
    return <div>{data}</div>;
  }
}
export default Result;

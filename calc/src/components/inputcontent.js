import React, { Component } from "react";
class InputContent extends React.Component {
  render() {
    let { displayName, onValueChange } = this.props;
    return (
      <section>
        <label>{displayName}</label>
        <input
          type="number"
          onChange={evt => onValueChange(evt.target.valueAsNumber)}
        />
      </section>
    );
  }
}
export default InputContent;

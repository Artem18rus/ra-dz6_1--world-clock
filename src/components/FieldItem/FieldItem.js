import React from "react";
import ClockScript from "../Clock/ClockScript";

class FieldItem extends React.Component {
  render() {
    return (
      <li className="fields">
        <ClockScript fieldItem={this.props.field} />
      </li>
    );
  }
}

export default FieldItem;

import React from "react";
import FieldItem from "../FieldItem/FieldItem";

class FieldList extends React.Component {
  render() {
    if (this.props.fields.length === 0) return;
    // console.log(fields);
    return (
      <ol className="result">
        {this.props.fields.map((field) => (
          <FieldItem key={field.id} field={field} />
        ))}
      </ol>
    );
  }
}
export default FieldList;
import React from "react";

class Input extends React.Component {
  render() {
    const { placeholder, value, onChange } = this.props;
    return (
      <input placeholder={placeholder} value={value} onChange={onChange} />
    );
  }
}

export default Input;

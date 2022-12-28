import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    const { onClick, children, ...nextProps } = this.props;
    return (
      <button onClick={onClick} {...nextProps}>
        {children}
      </button>
    );
  }
}

export default Button;

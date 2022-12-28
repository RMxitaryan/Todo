import React from 'react'
import '../App.css'


class Section extends React.Component {

  render() {
    return (
      <div className="Section">{this.props.children}</div>
    );
  }
}

export default Section;


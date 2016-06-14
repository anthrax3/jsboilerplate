import React, {Component, PropTypes} from "react";
import Radium from "radium";

@Radium
class Example extends Component {

  static propTypes = {
    exampleProps: PropTypes.string
  }

  render () {

    return (
      <div style={styles.example}>
        <h1 style={styles.h1Example}>Example Component</h1>
        <p>{this.props.exampleProps}</p>
      </div>
    );
  }
};

var styles = {
  example: {
    backgroundColor: "Tomato",
    border: "10px solid Firebrick"
  },
  h1Example: {
    color: "moccasin"
  }
};

export default Example;

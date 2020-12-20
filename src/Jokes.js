import React from "react";
import "./Jokes.css";

class Jokes extends React.Component {
  render(props) {
    return (
      <div className="jq">
        <p id="status" sytle={{ textAlign: "center" }}>
          {this.props.status}
        </p>
        <p id="joke">{this.props.jq}</p>
        <p id="author" style={{ fontStyle: "italic" }}>
          {this.props.author}
        </p>
        <p id="error">{this.props.error}</p>
      </div>
    );
  }
}

export default Jokes;

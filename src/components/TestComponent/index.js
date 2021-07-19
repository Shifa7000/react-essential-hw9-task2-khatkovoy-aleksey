import React from "react";
import "./index.css";

class TestComponent extends React.Component {
  render() {
    throw new Error("Unexpected Error");
    return <div className="TestComponent">TestComponent</div>;
  }
}

export default TestComponent;

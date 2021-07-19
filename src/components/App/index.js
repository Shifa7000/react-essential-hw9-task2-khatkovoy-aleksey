import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import TestComponent from "../TestComponent";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <TestComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

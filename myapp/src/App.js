import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React App!</h1>
        <p>Welcome!</p>
        <Ninjas name="Benny" age="30" belt="Green" />
        <Ninjas name="Bug" age="33" belt="Pink" />
        <Ninjas name="Noly" age="27" belt="Brown" />
      </div>
    );
  }
}

export default App;

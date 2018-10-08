import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Benny", age: 30, belt: "black", id: 1 },
      { name: "Bug", age: 33, belt: "pink", id: 2 },
      { name: "Noly", age: 27, belt: "brown", id: 3 },
      { name: "Coop", age: 77, belt: "green", id: 4 }
    ]
  };

  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };

  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Ninja's Dojo!</h1>
        <p>Welcome!</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;

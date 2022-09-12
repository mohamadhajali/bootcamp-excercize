import "./App.css";
import { Component } from "react";

class App extends Component {
  componentDidMount = () => {
    console.log("Before the render");
    debugger;
  };

  render() {
    return (
      <div>
        <p>Hello react</p>
      </div>
    );
  }
}

export default App;

import "./App.css";
import { Component } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AboutUs />
      </div>
    );
  }
}

export default App;

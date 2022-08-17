import { Component } from "react";
class Dummy extends Component {
  render() {
    return <b>Hellooooo</b>;
  }
}
const DummyFunction = function () {
  return <h1>function dummy</h1>;
};
class Navbar extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <div>About</div>
        <Dummy />
        <DummyFunction />
      </div>
    );
  }
}
export default Navbar;

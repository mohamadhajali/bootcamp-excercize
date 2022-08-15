import "./App.css";
import { Component } from "react";

class App extends Component {
  showComapany(name, revenue) {
    return (
      <div id={name}>
        <p>
          {name} makes {revenue} every year
        </p>
      </div>
    );
  }
  render() {
    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 },
    ];
    return companies.map((c) => {
      this.showComapany(c.name, c.revenue);
    });
  }
}

export default App;

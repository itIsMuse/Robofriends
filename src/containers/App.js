import React, { Component } from "react";
import CardList from "../components/CardList";
import Search from "../components/Search";
import Scroll from "../components/scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  // functions that are not predefined are used with = and arrow
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filtered = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Robofriends</h1>
          <Search searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filtered} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;

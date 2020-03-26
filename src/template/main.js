import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../apps/Home";
import Stuff from "../apps/Stuff";
import Contact from "../apps/Contact";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      home_clicked: true,
      stuff_clicked: false,
      contact_clicked: false
    };
  }

  homeActive() {
    this.setState({ home_clicked: true });
    this.setState({ stuff_clicked: false });
    this.setState({ contact_clicked: false });
  }

  stuffActive() {
    this.setState({ home_clicked: false });
    this.setState({ stuff_clicked: true });
    this.setState({ contact_clicked: false });
  }

  contactActive() {
    this.setState({ home_clicked: false });
    this.setState({ stuff_clicked: false });
    this.setState({ contact_clicked: true });
  }

  render() {
    let btn_home_active = this.state.home_clicked
      ? "btn btn-danger"
      : "btn btn-warning";

    let btn_stuff_active = this.state.stuff_clicked
      ? "btn btn-danger"
      : "btn btn-warning";

    let btn_contact_active = this.state.contact_clicked
      ? "btn btn-danger"
      : "btn btn-warning";

    return (
      <HashRouter>
        <div class="container">
          <div class="display-4 py-4">Simple Game</div>
          <ul class="list-group">
            <li class="list-group-item">
              <NavLink exact to="/">
                <button
                  class={btn_home_active}
                  onClick={this.homeActive.bind(this)}
                >
                  Home
                </button>
              </NavLink>
            </li>
            <li class="list-group-item">
              <NavLink to="/stuff">
                <button
                  class={btn_stuff_active}
                  onClick={this.stuffActive.bind(this)}
                >
                  Stuff
                </button>
              </NavLink>
            </li>
            <li class="list-group-item">
              <NavLink to="/contact">
                <button
                  class={btn_contact_active}
                  onClick={this.contactActive.bind(this)}
                >
                  Contact
                </button>
              </NavLink>
            </li>
          </ul>
          <div class="content">
            <Route exact path="/" component={Home}></Route>
            <Route path="/stuff" component={Stuff}></Route>
            <Route path="/contact" component={Contact}></Route>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

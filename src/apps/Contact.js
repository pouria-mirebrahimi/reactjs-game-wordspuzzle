import React, { Component } from "react";
import { HashRouter, NavLink, Route } from "react-router-dom";
import Home from "./Home";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>
          The easiest thing to do is post on our{" "}
          <a href="http://forum.kirupa.com">forums</a>.
        </p>

        <NavLink exact to="/">
          <button class="btn btn-warning">Home</button>
        </NavLink>
      </div>
    );
  }
}

export default Contact;

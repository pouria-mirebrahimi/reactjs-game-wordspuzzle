import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../apps/Home";
import Stuff from "../apps/Stuff";
import Contact from "../apps/Contact";

const range = require("range");
const _ = require("lodash");

class Main extends Component {
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  constructor() {
    super();

    var WORDS = {
      WORD1_1: "غوک",
      WORD1_2: "قورباغه",
      WORD2_1: "منظره",
      WORD2_2: "چشم‌انداز",
      WORD3_1: "ارمغان",
      WORD3_2: "هدیه",
      WORD4_1: "سطر",
      WORD4_2: "خط",
      WORD5_1: "مکتب",
      WORD5_2: "مدرسه",
      WORD6_1: "گرداگرد",
      WORD6_2: "اطراف"
    };

    var rnd_array = [];
    rnd_array.push(this.getRandomInt(12));
    for (var i in range.range(0, 100)) {
      var new_random = this.getRandomInt(12);
      if (rnd_array.indexOf(new_random) !== -1) {
        continue;
      } else {
        rnd_array.push(new_random);
        if (rnd_array.size === 12) {
          break;
        }
      }
    }

    this.rnd_words = [];
    for (var j in range.range(0, 12)) {
      this.rnd_words.push(_.get(_.values(WORDS), rnd_array[j]));
      // console.log(_.get(_.values(WORDS), rnd_array[j]));
    }

    console.log("This is an report:");
    for (var k in range.range(0, 12)) {
      console.log(this.rnd_words[k]);
    }

    this.state = {
      home_clicked: true,
      stuff_clicked: false,
      contact_clicked: false
    };
  }

  refreshPage() {
    window.location.reload(false);
  }

  homeActive() {
    this.setState({ home_clicked: true });
    this.setState({ stuff_clicked: false });
    this.setState({ contact_clicked: false });

    this.refreshPage();
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
      ? "btn square btn-warning"
      : "btn square btn-warning";

    let btn_stuff_active = this.state.stuff_clicked
      ? "btn btn-danger"
      : "btn btn-warning";

    let btn_contact_active = this.state.contact_clicked
      ? "btn btn-danger"
      : "btn btn-warning";

    return (
      <HashRouter>
        <div class="container">
          <div class="persian-yekan h4 text-center py-3">
            نام بازی: پازل کلمات
          </div>
          <div class="text-center pb-2">
            <NavLink exact to="/">
              <button
                class={btn_home_active}
                onClick={this.homeActive.bind(this)}
              >
                <div class="persian-vazir">شروع مجدد</div>
              </button>
            </NavLink>
            {/* <NavLink to="/stuff">
              <button
                class={btn_stuff_active}
                onClick={this.stuffActive.bind(this)}
              >
                Stuff
              </button>
            </NavLink>
            <NavLink to="/contact">
              <button
                class={btn_contact_active}
                onClick={this.contactActive.bind(this)}
              >
                Contact
              </button>
            </NavLink> */}
          </div>

          {/* <span class="btn btn-primary d-flex">
            <div class="persian-vazir h4">چشم‌انداز</div>
          </span> */}

          <div class="row">
            <div class="col-lg-2 col-6 my-3">
              <span
                class="btn btn-primary d-flex"
                onClick={this.stuffActive.bind(this)}
              >
                <div class="persian-vazir h4">{this.rnd_words[0]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[1]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[2]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[3]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[4]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[5]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[6]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[7]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[8]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[9]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[10]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-3">
              <span class="btn btn-primary d-flex">
                <div class="persian-vazir h4">{this.rnd_words[11]}</div>
              </span>
            </div>
          </div>

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

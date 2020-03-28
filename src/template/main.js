import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../apps/Home";
import Stuff from "../apps/Stuff";
import Contact from "../apps/Contact";

import { Button, Modal } from "react-bootstrap";

const range = require("range");
const _ = require("lodash");

class Main extends Component {
  selected_words = [];

  selected_buttons = [];

  finished_words = 0;
  total_words = 6;

  state = {
    home_clicked: true,
    stuff_clicked: false,
    contact_clicked: false,

    isShowing: false,

    _0_clicked: false,
    _1_clicked: false,
    _2_clicked: false,
    _3_clicked: false,
    _4_clicked: false,
    _5_clicked: false,
    _6_clicked: false,
    _7_clicked: false,
    _8_clicked: false,
    _9_clicked: false,
    _10_clicked: false,
    _11_clicked: false
  };

  btn_home_active = this.state.home_clicked
    ? "btn square btn-warning"
    : "btn square btn-warning";

  btn_stuff_active = this.state.stuff_clicked
    ? "btn btn-danger"
    : "btn btn-warning";

  btn_contact_active = this.state.contact_clicked
    ? "btn btn-danger"
    : "btn btn-warning";

  btn_0_active = this.state._0_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_1_active = this.state._1_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_2_active = this.state._2_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_3_active = this.state._3_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_4_active = this.state._4_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_5_active = this.state._5_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_6_active = this.state._6_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_7_active = this.state._7_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_8_active = this.state._8_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_9_active = this.state._9_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_10_active = this.state._10_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  btn_11_active = this.state._11_clicked
    ? "btn btn-danger d-flex"
    : "btn btn-primary d-flex";

  isShowing = true;

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  isEven(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  constructor() {
    super();

    this.WORDS = {
      WORD01_1: "غوک",
      WORD01_2: "قورباغه",
      WORD02_1: "منظره",
      WORD02_2: "چشم‌انداز",
      WORD03_1: "ارمغان",
      WORD03_2: "هدیه",
      WORD04_1: "سطر",
      WORD04_2: "خط",
      WORD05_1: "مکتب",
      WORD05_2: "مدرسه",
      WORD06_1: "گرداگرد",
      WORD06_2: "اطراف",
      WORD07_1: "دمی",
      WORD07_2: "لحظه‌ای",
      WORD08_1: "بیاب",
      WORD08_2: "پیدا کن",
      WORD09_1: "یک چند",
      WORD09_2: "گاهی",
      WORD10_1: "بُوَد",
      WORD10_2: "باشد",
      WORD11_1: "جهان‌افروز",
      WORD11_2: "عالم‌تاب",
      WORD12_1: "گلگون",
      WORD12_2: "رنگارنگ",
      WORD13_1: "قشر",
      WORD13_2: "پوسته",
      WORD14_1: "نگار",
      WORD14_2: "تصویر زیبا",
      WORD15_1: "چیره‌دست",
      WORD15_2: "ماهر",
      WORD16_1: "معرفت",
      WORD16_2: "شناخت",
      WORD17_1: "انبوه",
      WORD17_2: "بسیار فراوان",
      WORD18_1: "مسئولیت",
      WORD18_2: "وظیفه",
      WORD19_1: "لطیف",
      WORD19_2: "ملایم",
      WORD20_1: "جامه",
      WORD20_2: "لباس",
      WORD21_1: "حیرت",
      WORD21_2: "شگفتی",
      WORD22_1: "بازرگان",
      WORD22_2: "تاجر",
      WORD23_1: "دلنشین",
      WORD23_2: "جذاب",
      WORD24_1: "پی‌در‌پی",
      WORD24_2: "پیوسته",
      WORD25_1: "پیشین",
      WORD25_2: "گذشته",
      WORD26_1: "کوچ",
      WORD26_2: "مهاجرت",
      WORD27_1: "حاکم",
      WORD27_2: "فرمانروا",
      WORD28_1: "معذرت",
      WORD28_2: "عذرخواهی",
      WORD29_1: "خشمگین",
      WORD29_2: "عصبانی",
      WORD30_1: "اندیشیدن",
      WORD30_2: "فکر کردن",
      WORD31_1: "آفرین",
      WORD31_2: "درود",
      WORD32_1: "حَدس",
      WORD32_2: "گُمان",
      WORD33_1: "امیر",
      WORD33_2: "پادشاه",
      WORD34_1: "حکیم",
      WORD34_2: "دانشمند",
      WORD35_1: "فیلسوف",
      WORD35_2: "فلسفه‌دان",
      WORD36_1: "شادمان",
      WORD36_2: "خوشحال",
      WORD37_1: "قصد",
      WORD37_2: "اراده",
      WORD38_1: "چاره",
      WORD38_2: "راه‌حل",
      WORD39_1: "حاضر",
      WORD39_2: "موجود",
      WORD40_1: "آماده",
      WORD40_2: "در دسترس",
      WORD41_1: "توفان",
      WORD41_2: "تندباد",
      WORD42_1: "دانش",
      WORD42_2: "علم",
      WORD43_1: "بلا",
      WORD43_2: "سختی",
      WORD44_1: "نیک‌نامی",
      WORD44_2: "خوش‌نامی",
      WORD45_1: "تعلیم",
      WORD45_2: "آموزش",
      WORD46_1: "شهرت",
      WORD46_2: "نام‌آوری",
      WORD47_1: "افزودن",
      WORD47_2: "بیشتر شدن"
    };

    var rnd_array = [];
    rnd_array.push(this.getRandomInt(94));
    for (let i in range.range(0, 1000)) {
      var new_random = this.getRandomInt(94);
      if (this.isEven(new_random)) {
        if (rnd_array.indexOf(new_random + 1) !== -1) {
          continue;
        }
      } else {
        if (rnd_array.indexOf(new_random - 1) !== -1) {
          continue;
        }
      }
      if (rnd_array.indexOf(new_random) !== -1) {
        continue;
      } else {
        rnd_array.push(new_random);
        if (rnd_array.length >= 6) {
          break;
        }
      }
    }

    var rnd_tiles = [];
    for (let i in range.range(0, 6)) {
      if (this.isEven(rnd_array[i])) {
        rnd_tiles.push(rnd_array[i]);
        rnd_tiles.push(rnd_array[i] + 1);
      } else {
        rnd_tiles.push(rnd_array[i] - 1);
        rnd_tiles.push(rnd_array[i]);
      }
    }

    console.log("Tiles:");
    for (let i in range.range(rnd_tiles.length)) {
      console.log(rnd_tiles[i]);
    }

    rnd_array = [];
    rnd_array.push(this.getRandomInt(12));
    for (let i in range.range(0, 100)) {
      new_random = this.getRandomInt(12);
      if (rnd_array.indexOf(new_random) !== -1) {
        continue;
      } else {
        rnd_array.push(new_random);
        if (rnd_array.length >= 12) {
          break;
        }
      }
    }

    console.log("Arrays:");
    for (let i in range.range(rnd_array.length)) {
      console.log(rnd_array[i]);
    }

    this.rnd_words = [];
    for (let j in range.range(0, 12)) {
      this.rnd_words.push(_.get(_.values(this.WORDS), rnd_tiles[rnd_array[j]]));
      // console.log(_.get(_.values(WORDS), rnd_array[j]));
    }

    console.log("Words:");
    for (let i in range.range(this.rnd_words.length)) {
      console.log(this.rnd_words[i]);
    }

    console.log("This is an report:");
    for (let k in range.range(0, 12)) {
      console.log(this.rnd_words[k]);
    }

    // this.selected_words.push("A stuff");
  }

  refreshPage() {
    window.location.reload(false);
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });

    this.refreshPage();
  };

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

  _0_clicked() {
    if (this.btn_0_active.includes("success")) {
      return;
    }
    this.setState({ _0_clicked: true });
    this.selected_buttons.push("0");
    this.btn_0_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[0]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _1_clicked() {
    if (this.btn_1_active.includes("success")) {
      return;
    }
    this.setState({ _1_clicked: true });
    this.selected_buttons.push("1");
    this.btn_1_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[1]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _2_clicked() {
    if (this.btn_2_active.includes("success")) {
      return;
    }
    this.setState({ _2_clicked: true });
    this.selected_buttons.push("2");
    this.btn_2_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[2]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _3_clicked() {
    if (this.btn_3_active.includes("success")) {
      return;
    }
    this.setState({ _3_clicked: true });
    this.selected_buttons.push("3");
    this.btn_3_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[3]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _4_clicked() {
    if (this.btn_4_active.includes("success")) {
      return;
    }
    this.setState({ _4_clicked: true });
    this.selected_buttons.push("4");
    this.btn_4_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[4]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _5_clicked() {
    if (this.btn_5_active.includes("success")) {
      return;
    }
    this.setState({ _5_clicked: true });
    this.selected_buttons.push("5");
    this.btn_5_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[5]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _6_clicked() {
    if (this.btn_6_active.includes("success")) {
      return;
    }
    this.setState({ _6_clicked: true });
    this.selected_buttons.push("6");
    this.btn_6_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[6]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _7_clicked() {
    if (this.btn_7_active.includes("success")) {
      return;
    }
    this.setState({ _7_clicked: true });
    this.selected_buttons.push("7");
    this.btn_7_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[7]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _8_clicked() {
    if (this.btn_8_active.includes("success")) {
      return;
    }
    this.setState({ _8_clicked: true });
    this.selected_buttons.push("8");
    this.btn_8_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[8]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _9_clicked() {
    if (this.btn_9_active.includes("success")) {
      return;
    }
    this.setState({ _9_clicked: true });
    this.selected_buttons.push("9");
    this.btn_9_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[9]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _10_clicked() {
    if (this.btn_10_active.includes("success")) {
      return;
    }
    this.setState({ _10_clicked: true });
    this.selected_buttons.push("10");
    this.btn_10_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[10]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  _11_clicked() {
    if (this.btn_11_active.includes("success")) {
      return;
    }
    this.setState({ _11_clicked: true });
    this.selected_buttons.push("11");
    this.btn_11_active = "btn btn-info d-flex";
    this.selected_words.push(this.rnd_words[11]);

    if (this.selected_words.length === 2) {
      // check 2 words

      // console.log(this.selected_words[i]);
      // console.log(_.invert(this.WORDS)[this.selected_words[i]]);

      if (
        _.invert(this.WORDS)[this.selected_words[0]] ===
        _.invert(this.WORDS)[this.selected_words[1]]
      ) {
        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-primary d-flex";
        }

        this.selected_buttons = [];
        this.selected_words = [];
      } else if (
        _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) ===
        _.invert(this.WORDS)[this.selected_words[1]].substr(0, 6)
      ) {
        console.log(
          _.invert(this.WORDS)[this.selected_words[0]].substr(0, 6) +
            " => Match"
        );

        this.play_correct({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-success d-flex";
        }

        this.finished_words++;
        if (this.finished_words >= this.total_words) {
          this.openModalHandler();

          this.play_win({
            onplay: function() {
              console.log("Yay, playing");
            },
            onerror: function(errorCode, description) {
              // maybe failure happened _during_ playback, maybe it failed to start.
              // depends on what is passed to the function.
              // errorCode is currently based on W3 specs for HTML5 playback failures.
              // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
            }
          });
        }
        this.selected_buttons = [];
      } else {
        console.log("Do not match");

        this.pause_wrong({
          onpause: function() {
            console.log("Yay, pausing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        this.play_wrong({
          onplay: function() {
            console.log("Yay, playing");
          },
          onerror: function(errorCode, description) {
            // maybe failure happened _during_ playback, maybe it failed to start.
            // depends on what is passed to the function.
            // errorCode is currently based on W3 specs for HTML5 playback failures.
            // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
          }
        });

        for (let i in range.range(2)) {
          this["btn_" + this.selected_buttons[i] + "_active"] =
            "btn btn-danger d-flex";
        }

        setTimeout(() => {
          for (let i in range.range(2)) {
            this["btn_" + this.selected_buttons[i] + "_active"] =
              "btn btn-primary d-flex";

            console.log(this["btn_" + this.selected_buttons[i] + "_active"]);
          }

          this.selected_buttons = [];
        }, 500);
      }

      this.selected_words = [];
    }
  }

  play_correct = () => {
    const audioEl = document.getElementsByClassName("audio-correct")[0];
    audioEl.play({
      onplay: function() {
        console.log("Yay, playing");
      },
      onerror: function(errorCode, description) {
        // maybe failure happened _during_ playback, maybe it failed to start.
        // depends on what is passed to the function.
        // errorCode is currently based on W3 specs for HTML5 playback failures.
        // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
      }
    });
  };

  play_wrong = () => {
    const audioEl = document.getElementsByClassName("audio-wrong")[0];
    audioEl.play({
      onplay: function() {
        console.log("Yay, playing");
      },
      onerror: function(errorCode, description) {
        // maybe failure happened _during_ playback, maybe it failed to start.
        // depends on what is passed to the function.
        // errorCode is currently based on W3 specs for HTML5 playback failures.
        // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
      }
    });
  };

  pause_wrong = () => {
    const audioEl = document.getElementsByClassName("audio-wrong")[0];
    audioEl.pause({
      onpause: function() {
        console.log("Yay, pausing");
      },
      onerror: function(errorCode, description) {
        // maybe failure happened _during_ playback, maybe it failed to start.
        // depends on what is passed to the function.
        // errorCode is currently based on W3 specs for HTML5 playback failures.
        // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
      }
    });
  };

  play_win = () => {
    const audioEl = document.getElementsByClassName("audio-win")[0];
    audioEl.play({
      onplay: function() {
        console.log("Yay, playing");
      },
      onerror: function(errorCode, description) {
        // maybe failure happened _during_ playback, maybe it failed to start.
        // depends on what is passed to the function.
        // errorCode is currently based on W3 specs for HTML5 playback failures.
        // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
      }
    });
  };

  Example = () => {
    // const [show, setShow] = React.useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
      <>
        <Modal show={this.state.isShowing} onHide={this.closeModalHandler}>
          <Modal.Header closeButton>
            {/* <Modal.Title class="right">
              <div class="right persian-vazir">پایان بازی</div>
            </Modal.Title> */}
          </Modal.Header>
          <Modal.Body class="text-center py-3">
            <div class="right persian-vazir">
              باریکلاااا... همه‌ی کلمات رو به درستی تشخیص دادی
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info btn-block" onClick={this.closeModalHandler}>
              <div class="right persian-vazir">ادامه میدم!</div>
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  render() {
    return (
      <HashRouter>
        <this.Example />

        <div>
          <audio className="audio-correct">
            <source src="https://pouria-mirebrahimi.ir/correct.wav"></source>
          </audio>
        </div>

        <div>
          <audio className="audio-wrong">
            <source src="https://pouria-mirebrahimi.ir/wrong.wav"></source>
          </audio>
        </div>

        <div>
          <audio className="audio-win">
            <source src="https://pouria-mirebrahimi.ir/finalwin.wav"></source>
          </audio>
        </div>

        <div class="container">
          <div class="persian-yekan h4 text-center py-3">
            نام بازی: یافتن کلمات مترادف
          </div>

          <div class="text-center pb-2">
            <NavLink exact to="/">
              <button
                class={this.btn_home_active}
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

          <div class="row mt-3">
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_0_active}
                onClick={this._0_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[0]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_1_active}
                onClick={this._1_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[1]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_2_active}
                onClick={this._2_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[2]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_3_active}
                onClick={this._3_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[3]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_4_active}
                onClick={this._4_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[4]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_5_active}
                onClick={this._5_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[5]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_6_active}
                onClick={this._6_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[6]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_7_active}
                onClick={this._7_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[7]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_8_active}
                onClick={this._8_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[8]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_9_active}
                onClick={this._9_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[9]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_10_active}
                onClick={this._10_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[10]}</div>
              </span>
            </div>
            <div class="col-lg-2 col-6 my-1">
              <span
                class={this.btn_11_active}
                onClick={this._11_clicked.bind(this)}
              >
                <div class="persian-vazir h5 pt-1">{this.rnd_words[11]}</div>
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

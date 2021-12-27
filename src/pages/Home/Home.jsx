import React, { Component } from "react";
import HeaderTop from "../../components/Header/HeaderTop/HeaderTop";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Body from "../../components/Body/Body";
import Sections from "../../components/Sections/Sections";
import Footer from "../../components/Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderTop />
        <Header />
        <Navbar />
        <Body />
        <Sections />
        <Footer />
      </div>
    );
  }
}

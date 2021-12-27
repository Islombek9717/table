import React, { Component } from "react";
import SubNavbar from "./SubNavbar/SubNavber";
import BodyContent from "./BodyContent/BodyContent";

import { Wrap } from "./style";

export default class Body extends Component {
  render() {
    return (
      <Wrap>
        <SubNavbar />
        <BodyContent />
      </Wrap>
    );
  }
}

import React, { Component } from "react";
import { Wrap } from "./style";

export default class SubNavbar extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Link>All</Wrap.Link>
        <Wrap.Link>New Arrivals</Wrap.Link>
        <Wrap.Link>Hot sale</Wrap.Link>
        <Wrap.Link>Furniture</Wrap.Link>
        <Wrap.Link>Amrature</Wrap.Link>
        <Wrap.Link>Tabble</Wrap.Link>
        <Wrap.Link>Chair</Wrap.Link>
        <Wrap.Link>Sofa</Wrap.Link>
        <Wrap.Link>Mirrors</Wrap.Link>
        <Wrap.Link>Stools</Wrap.Link>
        <Wrap.Link>Benches</Wrap.Link>
      </Wrap>
    );
  }
}

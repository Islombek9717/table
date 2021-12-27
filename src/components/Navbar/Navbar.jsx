import React, { Component } from "react";
import { Wrap } from "./style";

export default class Navbar extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Container>
          <Wrap.Menu>
            <Wrap.MenuIcon />
            ALL COLLECTIONS
          </Wrap.Menu>
          <Wrap.Link>HOME</Wrap.Link>
          <Wrap.Link>SHOP</Wrap.Link>
          <Wrap.Link>BLOG</Wrap.Link>
          <Wrap.Link>ABOUT</Wrap.Link>
          <Wrap.Link>CONTACT US</Wrap.Link>
        </Wrap.Container>
      </Wrap>
    );
  }
}

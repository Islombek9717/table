import React, { Component } from "react";
import { Wrap } from "./style";

export default class HeaderTop extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Container>
          <Wrap.H1>Welcome to our online shop</Wrap.H1>
          <Wrap.TopLeft>
            <Wrap.Select>
              <option value="USD">English(USD)</option>
              <option value="SUM">Uzbek(SUM)</option>
            </Wrap.Select>
            <Wrap.Stick />
            <Wrap.Button>Login</Wrap.Button>
            or
            <Wrap.Button>Sign up</Wrap.Button>
          </Wrap.TopLeft>
        </Wrap.Container>
      </Wrap>
    );
  }
}

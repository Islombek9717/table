import React, { Component } from "react";
import { Wrap } from "./style";

export default class Header extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Logo>
          <Wrap.LogoIcon />
          Furniking
        </Wrap.Logo>
        <Wrap.InputWrapper>
          <Wrap.Input placeholder="Search here" />
          <Wrap.Select>
            <option value="Categories">Categories</option>
            <option value="free">Free</option>
            <option value="online">Online</option>
          </Wrap.Select>
          <Wrap.Search />
        </Wrap.InputWrapper>
        <Wrap.IconWrapper>
          <Wrap.Button>
            <Wrap.BoxIcon />
          </Wrap.Button>
          <Wrap.Button>
            <Wrap.NotifyIcon />
          </Wrap.Button>
          <Wrap.Button>
            <Wrap.UserIcon />
          </Wrap.Button>
        </Wrap.IconWrapper>
      </Wrap>
    );
  }
}

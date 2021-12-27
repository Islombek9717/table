import React, { Component } from "react";
import SofaOne from "../../../assets/img/sofaOne.png";
import SofaTwo from "../../../assets/img/sofaTwo.png";
import SofaThree from "../../../assets/img/sofaThree.png";
import { Wrap } from "./style";

export default class BodyContent extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Content>
          <Wrap.ContentLeft>
            <Wrap.Title>Top collections 2022</Wrap.Title>
            <Wrap.Heading>We Serve Your Dream Furniture</Wrap.Heading>
            <Wrap.Text>Get 50% off all products</Wrap.Text>
            <Wrap.Btn>SHOP NOW</Wrap.Btn>
          </Wrap.ContentLeft>
          <Wrap.Img />
          <Wrap.Prices>
            <Wrap.Sofa>
              <img src={SofaOne} alt="Sofa" width="55px" height="53px" />
              <Wrap.SofaPrice>$120</Wrap.SofaPrice>
              <Wrap.SofaTitle>Office Desk Chair</Wrap.SofaTitle>
            </Wrap.Sofa>
            <Wrap.Sofa>
              <img src={SofaTwo} alt="Sofa" width="55px" height="53px" />
              <Wrap.SofaPrice>$180</Wrap.SofaPrice>
              <Wrap.SofaTitle> Home Alisa Sofa</Wrap.SofaTitle>
            </Wrap.Sofa>
            <Wrap.Sofa>
              <img src={SofaThree} alt="Sofa" width="55px" height="53px" />
              <Wrap.SofaPrice>$250</Wrap.SofaPrice>
              <Wrap.SofaTitle>Modern Chair</Wrap.SofaTitle>
            </Wrap.Sofa>
          </Wrap.Prices>
        </Wrap.Content>
        <Wrap.Slider>
          <Wrap.Dote />
          <Wrap.Dote />
          <Wrap.Dote2 />
          <Wrap.Dote />
        </Wrap.Slider>
      </Wrap>
    );
  }
}

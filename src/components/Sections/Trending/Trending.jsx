import { useState } from "react";
import { data } from "../../../data/data";
import { Wrap } from "./style";
import { Feature } from "./style";
import Circlegrey from "../../../assets/img/circlegreey.png";
import Circlegreen from "../../../assets/img/circlegreen.png";
import Like from "../../../assets/icons/like.svg";
import Shopping from "../../../assets/icons/shopping.svg";
import Refresh from "../../../assets/icons/refresh.svg";
import Eyes from "../../../assets/icons/eyes.svg";

const Trending = () => {
  const data1 = data.slice(0, 8);
  return (
    <Wrap>
      <Wrap.Title>TRENDING</Wrap.Title>
      <Wrap.Links>
        <Wrap.LinkTitle>Top Products</Wrap.LinkTitle>
        <Wrap.LinkTitle>New Arrivals</Wrap.LinkTitle>
        <Wrap.LinkTitle>Best Sellers</Wrap.LinkTitle>
      </Wrap.Links>
      <Wrap.Items>
        {data1.map((value) => (
          <Wrap.Chairs key={value.id}>
            <img src={value.img} alt="" width={269} height={287} />
            <Wrap.New bgcolor={value.type}>{value.type}</Wrap.New>
            <Feature>
              <Feature.FeatureItems>
                <Feature.Icons src={Like} />
              </Feature.FeatureItems>
              <Feature.FeatureItems>
                <Feature.Icons src={Shopping} />
              </Feature.FeatureItems>
              <Feature.FeatureItems>
                <Feature.Icons src={Refresh} />
              </Feature.FeatureItems>
              <Feature.FeatureItems>
                <Feature.Icons src={Eyes} />
              </Feature.FeatureItems>
            </Feature>
            <Wrap.Type>{value.name}</Wrap.Type>
            <Wrap.ChairTitle>{value.title}</Wrap.ChairTitle>
            <Wrap.Prices>
              <Wrap.Cost>{value.price}</Wrap.Cost>
              <Wrap.Sale>{value.sale}</Wrap.Sale>
              <img src={value.rating} alt="" width={66} height={9} />
            </Wrap.Prices>
          </Wrap.Chairs>
        ))}
      </Wrap.Items>
      <Wrap.Circles>
        <img src={Circlegrey} alt="circle" />
        <img src={Circlegreen} alt="circle" />
      </Wrap.Circles>
    </Wrap>
  );
};

export default Trending;

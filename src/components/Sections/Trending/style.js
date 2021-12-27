import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  align-items: center;
  margin-bottom: 99px;
`;

Wrap.Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  color: #555555;
  text-align: center;
  margin-bottom: 45px;
`;
Wrap.Links = styled.div`
  display: flex;
  margin-bottom: 70px;
`;

Wrap.LinkTitle = styled.a`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #c2c2c2;
  margin-right: 70px;
  cursor: pointer;
  &:active {
    color: #7ac751;
  }
  &:hover {
    color: #7ac751;
  }
`;

Wrap.Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Feature = styled.div`
  display: none;
  flex-direction: column;
  width: 38.85px;
  position: absolute;
  top: 91px;
  left: 223px;
`;

Feature.FeatureItems = styled.div`
  width: 38.85px;
  height: 38.89px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 33px rgba(0, 0, 0, 0.09);
  margin-bottom: 8.7px;
  &:hover {
    background: #7ac751;
  }
`;
Feature.Icons = styled.img`
  display: block;
`;

Wrap.Chairs = styled.div`
  display: flex;
  flex-direction: column;
  width: 269px;
  margin-bottom: 45px;
  position: relative;
  &:hover ${Feature} {
    display: flex;
  }
`;

const getBgcolor = ({ bgcolor }) => {
  switch (bgcolor) {
    case "New":
      return "#00B7F1";
    case "Sale":
      return "#7AC751";
    case "-30%":
      return "#FF6868";
  }
};

Wrap.New = styled.div`
  width: 44.68px;
  height: 20.42px;
  color: #fff;
  box-sizing: border-box;
  padding: 1px 6px;
  position: absolute;
  top: 0;
  background: ${getBgcolor};
  border-radius: 0px 0px 5px 0px;
`;

Wrap.ChairTitle = styled.div`
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #555555;
  margin-bottom: 9px;
`;
Wrap.Type = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.008em;
  text-transform: uppercase;
  color: rgba(117, 117, 117, 0.71);
  margin-top: 15px;
  margin-bottom: 9px;
`;

Wrap.Prices = styled.div`
  display: flex;
  align-items: center;
`;

Wrap.Cost = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.005em;
  color: #7ac751;
`;

Wrap.Sale = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.005em;
  text-decoration-line: line-through;
  color: #cccccc;
  margin-left: 7px;
  margin-right: 95px; ;
`;

Wrap.Circles = styled.div`
  display: flex;
  img {
    margin-right: 15px;
  }
`;
Wrap.Pagination = styled.div`
  display: flex;
  align-items: center;
  margin-left: 650px;
`;

Wrap.NextPageBtn = styled.button`
  width: 161px;
  height: 40px;
  background: #7ac751;
  border-radius: 2px;
  border: none;
  color: #fff;
  margin-right: 143px;
  cursor: pointer;
`;
Wrap.Text = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.008em;
  color: #757575;
`;
Wrap.CountNum = styled.div`
  font-size: 18px;
  line-height: 130%;
  display: flex;
  align-items: center;
  letter-spacing: 0.008em;
  color: #757575;
  background: #f8fafb;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 5px 20px;
  margin-left: 9px;
  margin-right: 19px;
`;

Wrap.Count = styled.div`
  font-weight: normal;
  font-size: 16px;
  // line-height: 130%;
  letter-spacing: 0.008em;
  color: #757575;
  margin-right: 5px;
`;

Wrap.NextPrev = styled.div`
  width: 58px;
  height: 29px;
  // margin-left: 14px;
  background: #7ac751;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

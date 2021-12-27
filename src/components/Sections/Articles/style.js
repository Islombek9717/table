import styled from "styled-components";
import Article1 from "../../../assets/img/article1.png";
import Article2 from "../../../assets/img/article2.png";
import Article3 from "../../../assets/img/article3.png";
import Article4 from "../../../assets/img/article4.png";

export const Wrap = styled.div`
  margin-top: 115px;
`;

Wrap.Articles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

Wrap.Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  margin-bottom: 56px;
  text-transform: uppercase;
  color: #555555;
`;

const getBgImg = ({ bgImg }) => {
  switch (bgImg) {
    case "article1":
      return { bgimg: `${Article1}` };
    case "article2":
      return { bgimg: `${Article2}` };
    case "article3":
      return { bgimg: `${Article3}` };
    case "article4":
      return { bgimg: `${Article4}` };
  }
};

Wrap.Article = styled.div`
  width: 569.75px;
  height: 455.28px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(interior-dark-blue-wall-with-yellow-sofa-decor-living-room.jpg);
  background-image: url(${(props) => getBgImg(props).bgimg});
  border-radius: 8px;
  margin-bottom: 22px;
  box-sizing: border-box;
  padding: 249px 50px 30px 44px;
`;

Wrap.Top = styled.div`
  display: flex;
  align-items: center;
`;

Wrap.Misc = styled.div`
  width: 99.6px;
  height: 23.96px;
  display: flex;
  align-items: center;
  background: #f8fafb;
  border-radius: 3px;
  margin-right: 8px;
  justify-content: center;
`;
Wrap.MiscTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  margin-left: 5px;
  letter-spacing: 0.008em;
  text-transform: uppercase;
  color: #7ac751;
`;

Wrap.MiscDate = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.008em;
  color: #ffffff;
`;

Wrap.Heading = styled.div`
  font-weight: bold;
  font-size: 39px;
  line-height: 120%;
  letter-spacing: 0.005em;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 25px;
`;

Wrap.ReadMore = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  padding: 0;
  line-height: 130%;
  letter-spacing: 0.008em;
  color: #ffffff;
  background: none;
`;

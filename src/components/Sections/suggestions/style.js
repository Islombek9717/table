import styled from "styled-components";
import Modern from "../../../assets/img/modern.png";
import Geometric from "../../../assets/img/geometric.png";
import Minimal from "../../../assets/img/minimal.png";

export const Wrap = styled.div`
  margin-top: 65px;
`;

Wrap.ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
`;

Wrap.Item = styled.div`
  display: flex;
`;

Wrap.Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

Wrap.Heading = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #555555;
`;

Wrap.Text = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  color: rgba(81, 81, 81, 0.71);
`;

Wrap.Collections = styled.div`
  display: flex;
`;

const getSize = ({ title }) => {
  switch (title) {
    case "modern":
      return {
        width: "669px",
        height: "511px",
        mright: "18px",
        bgcimg: `${Modern}`,
      };
    case "geometric":
      return {
        width: "485px",
        height: "247px",
        mbottom: "15px",
        bgcimg: `${Geometric}`,
      };
    case "minimal":
      return { width: "485px", height: "247px", bgcimg: `${Minimal}` };
  }
};

Wrap.Modern = styled.div`
  width: ${(props) => getSize(props).width};
  height: ${(props) => getSize(props).height};
  background-image: url(${(props) => getSize(props).bgcimg});
  margin-right: ${(props) => getSize(props).mright};
  margin-bottom: ${(props) => getSize(props).mbottom};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  padding-top: 49px;
  padding-left: 31px;
`;
Wrap.CollectionLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
Wrap.ColTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #555555;
`;
Wrap.Price = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #7ac751;
  margin-top: 10px;
  margin-bottom: 13px;
`;
Wrap.ReadMore = styled.a`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #757575;
  cursor: pointer;
`;

import styled from "styled-components";
import { ReactComponent as Sofa } from "../../../assets/img/sofa.svg";

export const Wrap = styled.div`
  width: 899px;
  height: 439px;
  background: linear-gradient(
    103.4deg,
    rgba(241, 250, 255, 0.88) 0.89%,
    #f1faff 101.61%
  );
  backdrop-filter: blur(155px);
  border-radius: 1px;
  box-sizing: border-box;
  padding: 36px 39px 0 47px;
  margin-top: 15px;
`;
Wrap.Content = styled.div`
  width: 813px;
  height: 374px;
  display: flex;
`;

Wrap.ContentLeft = styled.div`
  width: 318px;
  display: flex;
  box-sizing: border-box;
  padding: 50px 0;
  flex-direction: column;
`;
Wrap.Title = styled.div`
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #7ac751;
  text-transform: uppercase;
`;
Wrap.Heading = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 47px;
  color: #2f2f2f;
  margin-top: 6px;
  margin-bottom: 29px;
`;

Wrap.Text = styled.div`
  font-weight: 600;
  font-size: 27px;
  line-height: 26px;
  color: rgba(81, 81, 81, 0.71);
  margin-bottom: 35px;
`;

Wrap.Btn = styled.button`
  width: 129px;
  background: #7ac751;
  border-radius: 5px;
  padding: 10px 18px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

Wrap.Img = styled(Sofa)`
  width: 374px;
  height: 374px;
`;

Wrap.Prices = styled.div`
  display: flex;
  flex-direction: column;
`;

Wrap.Sofa = styled.div`
  width: 98px;
  height: 91px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.56) 100%
  );
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 29px;
  padding-top: 5px;
`;

Wrap.SofaPrice = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #7ac751;
`;

Wrap.SofaTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 10px;
  display: flex;
  align-items: center;
  color: #555555;
`;

Wrap.Slider = styled.div`
  display: flex;
  width: 148px;
  margin: 0 auto;
`;

Wrap.Dote = styled.div`
  width: 12px;
  height: 12px;
  background: rgba(122, 199, 81, 0.29);
  margin-right: 15px;
  border-radius: 50%;
`;

Wrap.Dote2 = styled.div`
  width: 24px;
  height: 9px;
  background: #7ac751;
  border-radius: 666px;
  margin-right: 15px;
`;

import styled from "styled-components";
import OfferOne from "../../../assets/img/offer1.png";
import OfferTwo from "../../../assets/img/offer2.png";

export const Wrap = styled.div`
  margin-bottom: 120px;
`;

Wrap.Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  text-transform: uppercase;
  color: #555555;
  text-align: center;
  margin-bottom: 60px;
`;

Wrap.Offers = styled.div`
  display: flex;
  justify-content: space-between;
`;
Wrap.OfferItemOne = styled.div`
  width: 570px;
  height: 249px;
  background: url(${OfferOne});
  box-sizing: border-box;
  padding: 28px 319px 29px 24px;
  position: relative;
`;
Wrap.OfferItemTwo = styled.div`
  width: 570px;
  height: 249px;
  background: url(${OfferTwo});
  box-sizing: border-box;
  padding: 28px 319px 29px 24px;
  position: relative;
`;

Wrap.OfferTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #555555;
`;

Wrap.OfferText = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #757575;
  margin-top: 11px;
  margin-bottom: 20px;
`;

Wrap.Prices = styled.div`
  display: flex;
  margin-bottom: 29px;
  align-items: center;
`;
Wrap.Cost = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.005em;
  color: #7ac751;
`;

Wrap.Sale = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.005em;
  text-decoration-line: line-through;
  color: #cccccc;
  margin-left: 7px;
  margin-right: 19px;
`;

Wrap.Btn = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  border: none;
  align-items: center;
  color: #ffffff;
  padding: 6px 20px;
  background: #7ac751;
  border-radius: 2px;
  cursor: pointer;
`;

Wrap.Time = styled.div`
  display: flex;
  justify-content: space-between;
`;

Wrap.Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #7ac751;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

Wrap.Number = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  color: #ffffff;
`;

Wrap.Times = styled.div`
  font-weight: normal;
  font-size: 6px;
  line-height: 120%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: #ffffff;
`;

Wrap.SalePer = styled.div`
  width: 64px;
  height: 23px;
  background: #00b7f1;
  border-radius: 0px 0px 0px 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.008em;
  color: #ffffff;
  box-sizing: border-box;
  padding: 5px 8px;
  position: absolute;
  top: 0;
  left: 506px;
`;

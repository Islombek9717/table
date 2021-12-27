import styled from "styled-components";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";

export const Wrap = styled.div`
  width: 100%;
  height: 67px;
  background-color: #f7f8fa;
  z-index: 0:
`;

Wrap.Container = styled.div`
width: 1186px;
margin 0 auto;
display: flex;
align-items: center;
`;

Wrap.Menu = styled.a`
  box-sizing: border-box;
  padding: 19px 25px;
  font-weight: 500;
  width: 260px;
  background-color: #7ac751;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #ffffff;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 82px;
  cursor: pointer;
`;
Wrap.MenuIcon = styled(Menu)`
  width: 24px;
  height: 24px;
  dsiplay: block;
`;
Wrap.Link = styled.a`
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #555555;
  margin-right: 55px;
  height: 67px;
  cursor: pointer;
  padding: 25px 15px;
  box-sizing: border-box;

  &:hover {
    background-color: #7ac751;
    color: #fff;
  }
  &:active {
    color: #7ac751;
  }
`;

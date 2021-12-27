import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Box } from "../../assets/icons/box.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";

export const Wrap = styled.div`
width: 1186px;
margin 23px auto;
background-color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
`;

Wrap.Logo = styled.a`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #555555;
  align-items: center;
  cursor: pointer;
`;

Wrap.LogoIcon = styled(Logo)`
  width: 31px;
  height: 28px;
  margin-right: 5px;
`;

Wrap.InputWrapper = styled.div`
  width: 582px;
  height: 46px;
  display: flex;
`;

Wrap.Input = styled.input`
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  width: 403px;
  color: #b0b0b0;
  border: 2px solid #7ac751;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  padding-left: 25px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 1.5px solid rgba(227, 227, 227, 0.78); ;
`;
Wrap.Select = styled.select`
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  width: 123px;
  color: #555555;
  border: 2px solid #7ac751;
  box-sizing: border-box;
  border-left: none;
  border-right: none;
  outline: none;
  padding-left: 15px;
`;
Wrap.Search = styled(Search)`
  width: 16px;
  height: 16px;
  padding 13px 19px;
    border: 2px solid #7ac751;
    border-radius: 8px;
    border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
background: #7AC751;
cursor: pointer;
`;

Wrap.IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

Wrap.Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

Wrap.BoxIcon = styled(Box)`
  width: 24px;
  height: 24px;
`;
Wrap.NotifyIcon = styled(Notification)`
  width: 18px;
  height: 21px;
  margin-right: 26px;
  margin-left: 31px;
`;
Wrap.UserIcon = styled(User)`
  width: 20px;
  height: 24px;
`;

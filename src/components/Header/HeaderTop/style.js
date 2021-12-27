import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: #7ac751;
`;

Wrap.Container = styled.div`
  width: 1186px;
  margin: 0 auto;
  padding 15px 0;
  box-sizing: border-box;
  display:flex;
  justify-content: space-between;
`;

Wrap.H1 = styled.h1`
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin: 0;
  font-weight: 400;
`;

Wrap.TopLeft = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
Wrap.Select = styled.select`
  border: none;
  background-color: #7ac751;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #ffffff;
  outline: none;
`;
Wrap.Stick = styled.div`
  width: 2.2px;
  height: 19px;
  background: #ffffff;
  border-radius: 0.4px;
  margin: 0 20px;
`;
Wrap.Button = styled.button`
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  background-color: #7ac751;
  cursor: pointer;
  font-weight: 400;
`;

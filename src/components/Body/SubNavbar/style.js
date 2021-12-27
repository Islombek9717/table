import styled from "styled-components";

export const Wrap = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  background: #f7f8fa;
  margin-right: 11px;
`;

Wrap.Link = styled.a`
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #555555;
  padding: 13px 29px;
  &:hover {
    background-color: #7ac751;
    color: #fff;
  }
`;

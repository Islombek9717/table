import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Wrap.Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  text-transform: uppercase;
  color: #555555;
  margin-bottom: 50px;
`;
Wrap.CommentWrapper = styled.div`
  width: 1034px;
  display: flex;
  align-items: center;
  margin-top: 32px;
  justify-content: space-between;
`;

Wrap.Comments = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
Wrap.Text = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  width: 566px;
  letter-spacing: 0.005em;
  color: #515151;
`;

Wrap.UserName = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0.005em;
  color: #555555;
  margin-top: 32px;
  margin-bottom: 8px;
`;

Wrap.Status = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0.005em;
  color: #515151;
`;

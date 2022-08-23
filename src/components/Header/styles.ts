import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 296px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(1, 44, 87);
  background: linear-gradient(
    0deg,
    rgba(1, 44, 87, 1) 0%,
    rgba(11, 27, 43, 1) 88%,
    rgba(11, 27, 43, 1) 92%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img`
  width: 148px;
  height: 98px;
`;

export const Effect = styled.img`
  width: 409px;
  height: 188px;
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

export const Effect1 = styled.img`
  width: 371px;
  height: 236px;
`;

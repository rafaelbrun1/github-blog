import styled from "styled-components";

export const CardContainer = styled.div`
  width: 56rem;
  height: 212px;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  z-index: 1;
  margin-top: -80px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding: 30px;
  gap: 32px;
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  left: 40px;
  top: calc(50% - 148px / 2);
  background: white;
  border-radius: 8px;
  border: transparent;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TitleText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
export const Name = styled.strong`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
`;

export const GitLink = styled.a`
  color: ${(props) => props.theme["base-blue"]};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Description = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex: 1;
  gap: 30px;
  align-items: center;
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin-top: 24px;
  height: 26px;
`;

export const ContainerTextInfo = styled.div`
  color: ${(props) => props.theme["base-subtitle"]};
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

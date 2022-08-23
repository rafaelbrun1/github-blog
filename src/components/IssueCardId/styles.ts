import styled from "styled-components";

export const CardContainer = styled.div`
width: 56rem;
height: 212px;
background: ${props => props.theme["base-profile"]};
border-radius: 10px;
z-index: 1;
margin-top: -80px;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
padding: 30px;
gap: 32px;
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`

export const TitleText = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
margin-bottom: 20px;
`
export const Name = styled.strong`
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 130%;
color: ${props => props.theme["base-title"]};
`

export const GitLink = styled.a`
color: ${props => props.theme["base-blue"]};
display: flex;
align-items: center;
gap: 8px;
`

export const Description = styled.span`
font-weight: 700;
font-size: 24px;
line-height: 130%;
color: ${props => props.theme["base-title"]};
`

export const ProfileInfo = styled.div`
display: flex;
gap: 24px;
align-items: center;
color: ${props => props.theme["base-subtitle"]};
font-weight: 400;
font-size: 16px;
line-height: 160%;
margin-top: 24px;
flex: 1;
height: 26px;
`

export const ContainerTextInfo = styled.div`
color: ${props => props.theme["base-subtitle"]};
display: flex;
flex-direction: row;
width: full;
gap: 8px;
align-items: center;
`

export const BackContainer = styled.div`
font-weight: 700;
font-size: 12px;
line-height: 160%;
color: ${props => props.theme["base-blue"]};
display: flex;
gap: 8px;
align-items: center;
text-decoration-color: transparent;
`
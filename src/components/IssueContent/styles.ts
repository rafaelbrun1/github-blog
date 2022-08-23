import styled from "styled-components";

export const IssueContentContainer = styled.div`
flex-direction: column;
align-items: center;
padding: 40px 32px;
gap: 24px;
width: 864px;
height: 422px;
`

export const IssueContentText = styled.div`
font-weight: 700;
font-size: 16px;
line-height: 160%;
color: ${props => props.theme["base-text"]};

`
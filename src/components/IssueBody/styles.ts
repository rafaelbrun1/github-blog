import styled from "styled-components";

export const Body = styled.div`
width: 100vw;
height: 100vh;
background: ${props => props.theme["base-background"]};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`
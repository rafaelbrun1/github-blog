import styled from "styled-components";

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
gap: 12px;
width: 54rem;
margin-top: 72px;
`

export const TextContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const Posts = styled.span`
font-weight: 700;
font-size: 18px;
line-height: 160%;
color: ${props => props.theme["base-subtitle"]};
`

export const AmountOfPosts = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 160%;
color: ${props => props.theme["base-span"]};
`

export const InputSearchForm = styled.input`
background: ${props => props.theme["base-input"]};
flex: 1;
border: 1px solid #1C2F41;
border-radius: 6px;
padding: 12px 16px;
display: flex;
align-items: center;
height: 50px;
border: 1px solid ${props => props.theme["base-border"]};
border-radius: 6px;
font-weight: 400;
font-size: 16px;
line-height: 160%;
color: ${props => props.theme["base-text"]};
margin-bottom: 48px;


&:focus { 
  border-color: ${props => props.theme["base-blue"]};
}

&::placeholder { 
font-weight: 400;
font-size: 16px;
line-height: 160%;
color: ${props => props.theme["base-label"]};
}
`


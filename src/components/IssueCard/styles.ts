import styled from "styled-components";

export const IssueCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 54rem;
`;

export const IssueCards = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 416px;
  height: 260px;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  flex-direction: column;
  gap: 20px;
  text-decoration: none;
  &:hover {
    border: 2px solid #3a536b;
  }
`;

export const TitleCard = styled.span`
  width: 180px;
  height: 4rem;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: ${(props) => props.theme["base-title"]};
`;

export const TextTitleContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const PostTime = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  width: 130px;
  height: 40px;
  color: ${(props) => props.theme["base-span"]};
`;

export const IssueDescription = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  width: 352px;
  max-height: 115px;
  color: ${(props) => props.theme["base-text"]};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

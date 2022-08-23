import { useContext } from "react";
import { IssueContext } from "../../context/IssuesContext";
import {
  IssueCardContainer,
  IssueCards,
  IssueDescription,
  PostTime,
  TextTitleContainer,
  TitleCard,
} from "./styles";
import ptBR from 'date-fns/locale/pt-BR'
import {formatDistance} from 'date-fns'

export function IssueCard() {
  
  const { posts } = useContext(IssueContext);
  return (
    <IssueCardContainer>
      {posts.map((issue) => {
        return (
          <IssueCards href={`/posts/${issue.number}`} key={issue.id}>
            <TextTitleContainer>
              <TitleCard>{issue.title}</TitleCard>

              <PostTime>{formatDistance(Date.parse(issue.created_at), new Date(), { 
                addSuffix: true,
                locale: ptBR
              })}</PostTime>
            </TextTitleContainer>

            <IssueDescription>{issue.body}</IssueDescription>
          </IssueCards>
        );
      })}
    </IssueCardContainer>
  );
}

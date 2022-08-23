import ReactMarkdown from "react-markdown";
import { IssueContentContainer, IssueContentText } from "./styles";

export function IssueContent({ issue }: any) {
  return (
    <IssueContentContainer>
      <IssueContentText>
        <ReactMarkdown children={issue?.body} />
      </IssueContentText>
    </IssueContentContainer>
  );
}

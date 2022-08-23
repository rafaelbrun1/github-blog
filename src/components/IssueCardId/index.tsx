import {
  BackContainer,
  CardContainer,
  ContainerTextInfo,
  Description,
  GitLink,
  ProfileInfo,
  TextContainer,
  TitleText,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faUser,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IssueContext } from "../../context/IssuesContext";
import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function IssueCardId({ issue }: any) {
  const { user } = useContext(IssueContext);

  return (
    <CardContainer>
      <TextContainer>
        <TitleText>
          <Link to="/">
            <BackContainer>
              <FontAwesomeIcon icon={faChevronLeft} />
              VOLTAR
            </BackContainer>
          </Link>
          <GitLink href={issue?.html_url}>
            VER NO GITHUB
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </GitLink>
        </TitleText>
        <Description>{issue?.title}</Description>
        <ProfileInfo>
          <ContainerTextInfo>
            {" "}
            <FontAwesomeIcon icon={faUser} /> {user?.login}
          </ContainerTextInfo>
          
          <ContainerTextInfo>
            {" "}
            <FontAwesomeIcon icon={faComment} /> {issue?.comments} comentários
          </ContainerTextInfo>
        </ProfileInfo>
      </TextContainer>
    </CardContainer>
  );
}

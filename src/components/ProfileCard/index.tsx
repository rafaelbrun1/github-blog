import {
  Avatar,
  CardContainer,
  ContainerTextInfo,
  Description,
  GitLink,
  Name,
  ProfileInfo,
  TextContainer,
  TitleText,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";;
import { useContext } from "react";
import { IssueContext } from "../../context/IssuesContext";
  
export function ProfileCard() {
 const {user} = useContext(IssueContext)

  return (
    <CardContainer>
      <Avatar src={user?.avatar_url} />
      <TextContainer>
        <TitleText>
          <Name>{user?.name}</Name>
          <GitLink href="https://github.com/rafaelbrun1">
            GITHUB
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </GitLink>
        </TitleText>
        <Description>{user?.bio}</Description>
        <ProfileInfo>
          <ContainerTextInfo>
            {" "}
            <FontAwesomeIcon icon={faUser} /> {user?.login}
          </ContainerTextInfo>
          <ContainerTextInfo>
            {" "}
            <FontAwesomeIcon icon={faUpRightFromSquare} /> RocketSeat
          </ContainerTextInfo>
          <ContainerTextInfo>
            {" "}
            <FontAwesomeIcon icon={faUserGroup} /> {user?.followers} followers
          </ContainerTextInfo>
        </ProfileInfo>
      </TextContainer>
    </CardContainer>
  );
}

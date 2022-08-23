import { IssueCard } from "../IssueCard";
import { ProfileCard } from "../ProfileCard";
import { SearchForm } from "../SearchForm";
import { Body } from "./styles";

export function BodyContainerMain() { 
  return ( 
    <Body>
      <ProfileCard />
      <SearchForm />
      <IssueCard />
    </Body>
  )
}
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IssueContext } from "../../context/IssuesContext";
import { api } from "../../libs/axios";
import { IssueCardId } from "../IssueCardId";
import { IssueContent } from "../IssueContent";
import { Body } from "./styles";



export function IssueBody() {
  const {issueNumber} = useParams()
  const [issue, setIssue] = useState<any>() // puts as any here because i would have to create a type for every key in API (not a real project just for study)

  async function fetchIssue() { 
    await api
    .get(`repos/rafaelbrun1/github-blog/issues/${issueNumber}`)
    .then((response) => {
      setIssue(response.data);
      console.log(response.data)
    }).catch(error => { 
      console.log(error.response)
    });
    }
  
  useEffect(() => {
    fetchIssue()
  }, [])
   return (
    <Body>
      <IssueCardId issue={issue}/>
      <IssueContent issue={issue} />
    </Body>
  );
}

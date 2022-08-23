import { useContext } from "react";
import { IssueContext } from "../../context/IssuesContext";
import {
  AmountOfPosts,
  FormContainer,
  InputSearchForm,
  Posts,
  TextContainer,
} from "./styles";

export function SearchForm() {
  const { SearchIssue, posts } = useContext(IssueContext);

  async function handleSearchIssue(inputTarget: string) {
    await SearchIssue(inputTarget);
  }

  return (
    <FormContainer>
      <TextContainer>
        <Posts>Publicações</Posts>
        <AmountOfPosts>{posts.length} publicações</AmountOfPosts>
      </TextContainer>
      <InputSearchForm
        onChange={(e) => handleSearchIssue(e.target.value)}
        placeholder="Buscar conteúdo"
      />
    </FormContainer>
  );
}

import { createContext, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../libs/axios";

interface TransactionsProviderProps {
  children: ReactNode;
}



interface UserProps {
  name: string;
  avatar_url: string;
  followers: number;
  url: string;
  bio: string;
  login: string;
}

interface PostsProps {
  title: string;
  created_at: string;
  body: string;
  id: number;
  number: number;
}


interface IssueContextType {
  posts: PostsProps[];
  inputValue: string;
  SearchIssue: (query: string) => Promise<void>;
  user: UserProps;
}

export const IssueContext = createContext({} as IssueContextType);

export function IssuesProvider({ children }: TransactionsProviderProps) {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState<UserProps>({
    name: "",
    avatar_url: "",
    followers: 0,
    url: "",
    bio: "",
    login: "",
  });


  useEffect(() => {
    api.get("users/rafaelbrun1").then((response) => {
      setUser(response.data);
    });
  }, []);

  async function SearchIssue(query: string) {
    setInputValue(query);

    await api
      .get("search/issues", {
        params: {
          q: `${query} repo:rafaelbrun1/github-blog`,
        },
      })
      .then((response) => {
        setPosts(response.data.items);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  useEffect(() => {
    SearchIssue(inputValue);
  }, []);

 

  return (
    <IssueContext.Provider
      value={{ posts, inputValue, SearchIssue, user }}
    >
      {children}
    </IssueContext.Provider>
  );
}

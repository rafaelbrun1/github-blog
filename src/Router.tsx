import { Route, Routes } from "react-router-dom";
import { BodyContainerMain } from "./components/BodyContainer";
import { IssueBody } from "./components/IssueBody";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<BodyContainerMain />} />
      <Route path="/posts/:issueNumber" element={<IssueBody />} />
    </Routes>
  );
}

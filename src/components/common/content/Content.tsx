import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";

import Topbar from "./Topbar";
import Admin from "../../admin/Admin";
interface ContentProps {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void; // Define the type for toggleSidebar function if needed
}

// const Content = ({ sidebarIsOpen, toggleSidebar }) => (
const Content: React.FC<ContentProps> = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container fluid className={classNames("content", { "is-open": sidebarIsOpen })}>
    <Topbar toggleSidebar={toggleSidebar} sidebarIsOpen={false} />
    <Routes>
      <Route path={process.env.REACT_APP_DOMAIN_DIR} element={<Admin />}></Route>
    </Routes>
  </Container>
);

export default Content;

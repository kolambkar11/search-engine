import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";

interface ContentProps {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void;
}

// const  = ({ toggleSidebar }) => {
const Topbar: React.FC<ContentProps> = ({ toggleSidebar }) => {
  return (
    <>
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
    </>
  );
};

export default Topbar;

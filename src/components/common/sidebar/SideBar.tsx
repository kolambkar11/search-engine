import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy, faRocket, faUsers, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

interface SideBarProps {
  isOpen: boolean;
  toggle: () => void; // Define the type for the toggle function
}

const SideBar: FC<SideBarProps> = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Search Engine</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Admin Dashboard</p>
        <SubMenu title="Category" icon={faListAlt} items={submenus[0]} />
        <SubMenu title="Business" icon={faRocket} items={submenus[1]} />
        <SubMenu title="Admin" icon={faUsers} items={submenus[2]} />{" "}
        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <FontAwesomeIcon icon={faSignOut} className="me-2" />
            Sign out
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "View Category",
      target: "view-category",
    },
  ],
  [
    {
      title: "View Business",
      target: "view-business",
    },
  ],
  [
    {
      title: "View Admin",
      target: "view-admin",
    },
  ],
];

export default SideBar;

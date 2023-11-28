import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Content from './content/Content'
import SideBar from './sidebar/SideBar'

const Mainsidebar = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <>
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router></>
  )
}

export default Mainsidebar
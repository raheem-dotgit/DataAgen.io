import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightSideBar from './components/RightSideBar';
import Dashboards from './components/Dashboards';
import React, { useState } from 'react';



function App() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleLeftSidebar = () =>
  {
    setIsLeftSidebarVisible(!isLeftSidebarVisible)
  }
  return (
    <>
    <Sidebar isVisible={isLeftSidebarVisible}></Sidebar>
    <Navbar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible}
    toggleLeftSidebar ={toggleLeftSidebar} isLeftSidebarVisible={isLeftSidebarVisible} ></Navbar>
    <RightSideBar isVisible={isSidebarVisible}></RightSideBar>
    <Dashboards />

    


    </>
  );
}

export default App;

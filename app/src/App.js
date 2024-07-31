import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightSideBar from './components/RightSideBar';
import Dashboards from './components/Dashboards';
import React, { useState } from 'react';



function App() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
    <Sidebar ></Sidebar>
    <Navbar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} ></Navbar>
    <RightSideBar isVisible={isSidebarVisible}></RightSideBar>
    <Dashboards />

    


    </>
  );
}

export default App;

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
    <div className='inline-flex'>
          <Sidebar isVisible={isLeftSidebarVisible}></Sidebar>
    </div>
    <div className='inline-flex'>
      <Navbar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible}
    toggleLeftSidebar ={toggleLeftSidebar} isLeftSidebarVisible={isLeftSidebarVisible} ></Navbar>
    </div>

    <div className='inline'>
               <Dashboards className=""></Dashboards>
    </div>
    <div className='float-end'>
          <RightSideBar isVisible={isSidebarVisible}></RightSideBar>
    </div>


    </>
  );
}

export default App;

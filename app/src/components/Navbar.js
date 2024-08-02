import { CiSearch } from "react-icons/ci";
import { PiStarDuotone } from "react-icons/pi";
import { PiSidebar } from "react-icons/pi";
import { PiSunDuotone } from "react-icons/pi";
import { GiBackwardTime } from "react-icons/gi";
import { AiTwotoneBell } from "react-icons/ai";

import { useState, useEffect } from 'react';




const Navbar = ({ toggleSidebar, isSidebarVisible, toggleLeftSidebar, isLeftSidebarVisible }) =>
{

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

return(


<nav className="sm:bg-white flex-row h-[10vh] items-center dark:bg-gray-900 w-[71vw] inline-flex border-b absolute top-0 justify-between">
  <div className="order-1 ml-4 space-x-7">
    <ul className=" inline-flex align-middle gap-2">
  <button onClick={toggleLeftSidebar}><PiSidebar/></button>
  <li><PiStarDuotone/></li>
</ul>
<div className="inline-flex align-middle">
    <ul className="flex gap-3">
    <li className="text-zinc-400 font-thin">Dashboard</li>
    <li>/</li>
    <li>Default</li>
  </ul>
</div>
  </div>

  <div className="order-last flex align-middle justify-center items-center mr-10 gap-1 overflow-hidden">

  <div className="align-middle items-center justify-center ">
  <i className="inline-flex absolute m-2"><CiSearch/></i>
  <input type="text" placeholder="Search" className="border-none bg-zinc-100 dark:bg-gray-900 dark:border-white pl-8 rounded-[8px] py-1"/>
  </div>
      <ul className="flex gap-4">
    <button  onClick={toggleDarkMode}><PiSunDuotone/></button>
    <li><GiBackwardTime/></li>
    <li><AiTwotoneBell/></li>
    <button onClick={toggleSidebar}><PiSidebar/></button>
  </ul>
  </div>

</nav>


)



}


export default Navbar;
import { CiSearch } from "react-icons/ci";
import { PiStarDuotone } from "react-icons/pi";
import { PiSidebar } from "react-icons/pi";
import { PiSunDuotone } from "react-icons/pi";
import { GiBackwardTime } from "react-icons/gi";
import { AiTwotoneBell } from "react-icons/ai";

import { useState, useEffect } from 'react';




const Navbar = ({ toggleSidebar, isSidebarVisible }) =>
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

 <>
<nav className="sm:bg-white flex-row h-20 items-center dark:bg-gray-900 justify-start w-full inline-flex border-y flex-wrap">
<ul className="inline-flex absolute left-60 gap-3">
  <li><PiSidebar/></li>
  <li><PiStarDuotone/></li>
</ul>
  <ul className="sm:flex flex-row gap-5 mx-80">
    <li className="text-zinc-400 font-thin">Dashboard</li>
    <li>/</li>
    <li>Default</li>
  </ul>
  <div className="sm:flex flex-row mx-32 absolute right-80">
  <i className=" mt-2 mx-2 absolute"><CiSearch/></i>
  <input type="text" placeholder="Search" className="border-none bg-zinc-100 dark:bg-gray-900 dark:border-white pl-8 rounded-[8px] py-1"/>
  </div>

  <ul className="sm:flex gap-4 right-80 absolute">
    <li  onClick={toggleDarkMode}><PiSunDuotone/></li>
    <li><GiBackwardTime/></li>
    <li><AiTwotoneBell/></li>
    <button onClick={toggleSidebar}><PiSidebar/></button>
  </ul>
</nav>
</>

)



}


export default Navbar;
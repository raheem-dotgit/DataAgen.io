import { CiSearch } from "react-icons/ci";
import { PiStarDuotone } from "react-icons/pi";
import { PiSidebar } from "react-icons/pi";
import { PiSunDuotone } from "react-icons/pi";
import { GiBackwardTime } from "react-icons/gi";
import { AiTwotoneBell } from "react-icons/ai";






const Navbar = () =>
{

return(

 <>
<nav className="sm:bg-white flex-row h-20 items-center justify-start w-full inline-flex border-y flex-wrap">
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
  <input type="text" placeholder="Search" className="border-none bg-zinc-100 border-7 pl-8 rounded-md py-1"/>
  </div>

  <ul className="sm:flex gap-4 right-80 absolute">
    <li><PiSunDuotone/></li>
    <li><GiBackwardTime/></li>
    <li><AiTwotoneBell/></li>
    <li><PiSidebar/></li>
  </ul>
</nav>
</>

)



}


export default Navbar;
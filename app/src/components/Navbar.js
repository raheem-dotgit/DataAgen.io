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
 <div className="nav-container">
 <nav className="nav">
 <i className="side-bar-icon"><PiSidebar /></i>
 <i className="star-icon"><PiStarDuotone /></i>
 <h4>Dashboard</h4>
 <h4 className="slash">/</h4>
 <h4 className="default">Default</h4>
 <input type="text" name="" id="" placeholder="search"/>
 <i className="search-icon"><CiSearch /></i>
 <i className="sun-icon"><PiSunDuotone /></i>
 <i className="time-icon"><GiBackwardTime /></i>
 <i className="bell-icon"><AiTwotoneBell /></i>
 <i className="side-bar-icon2"><PiSidebar /></i>
</nav>
</div>
<hr />
</>

)




}


export default Navbar;
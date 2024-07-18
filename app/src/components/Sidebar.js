import { PiChartPieSliceFill } from "react-icons/pi";
import { TbMessageChatbot } from "react-icons/tb";
import { FaRobot } from "react-icons/fa6";
import { IoIosBook } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa6";
import { GiBreakingChain } from "react-icons/gi";
import { BiSolidUserAccount } from "react-icons/bi";






const Sidebar = () =>

{

 return(

  <div className="sidebar">
   <div>
   <h1>LAZER</h1>
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <div className="sidebar-content">

    <div className="content-list">
      <i><PiChartPieSliceFill /></i>
   <span>Overview</span>
    </div>
   
      <div className="content-list">
      <i><TbMessageChatbot /></i>
   <span>Chatbot</span>
    </div>
      <div className="content-list">
      <i><FaRobot /></i>
   <span>Autobot</span>
    </div>

       <div className="content-list">
      <i><IoIosBook /></i>
   <span>Chatbot Sample</span>
    </div>

         <div className="content-list"> 
      <i><FaRegAddressBook /></i>
   <span>Autobot Sample</span>
    </div>

         <div className="content-list">
      <i><GiBreakingChain /></i>
   <span>Integrative System</span>
    </div>
         <div className="content-list">
      <i><BiSolidUserAccount /></i>
   <span>Account</span>
    </div>

   </div>
  
   </div>
  <div class="vertical-hr-container">
        <hr class="vertical-hr"/>
    </div>

  </div>


 )

}

export default Sidebar
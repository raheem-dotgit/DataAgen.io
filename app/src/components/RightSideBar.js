
import img from '../images/Screenshot 2024-07-29 at 1.32.56 AM.png'
//import img2 from '../images/Screenshot 2024-07-29 at 1.35.38 AM.png'
//import img3 from '../images/Screenshot 2024-07-29 at 1.35.44 AM.png'



const RightSideBar = ({isVisible}) =>
{
  


 return(

  <div  className={`transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'}  bg-white border-l   w-[17vw] h-[100vh]  dark:bg-gray-900 overflow-auto`}>

  <div className="m-4">
    <p>History</p>
  </div>

  <div className="">
    <img src={img} alt="" className="w-10 m-4 rounded-full inline-flex"/>
    <span className="-ml-2">You upgraded to HR module</span>
    <dd className="ml-16 -mt-7 font-thin">just now</dd>
  </div>

    <div className="">
    <img src={img} alt="" className="w-10 m-4 rounded-full inline-flex"/>
    <span className="-ml-2">New Autobot deploy</span>
    <dd className="ml-16 -mt-7 font-thin">just now</dd>
  </div>

    <div className="">
    <img src={img} alt="" className="w-10 m-4 rounded-full inline-flex"/>
    <span className="-ml-2">You fixed a bug</span>
    <dd className="ml-16 -mt-7 font-thin">just now</dd>
  </div>
    <br />
   <div className="m-4">
    <p>Activities</p>
  </div>

      <div className="">
    <img src={img} alt="" className="w-10 m-4 rounded-full inline-flex"/>
    <span className="-ml-2">Chatbot deploy</span>
    <dd className="ml-16 -mt-7 font-thin">just now</dd>
  </div>
      <div className="">
    <img src={img} alt="" className="w-10 m-4 rounded-full inline-flex"/>
    <span className="-ml-2">Release a new autobot</span>
    <dd className="ml-16 -mt-7 font-thin">just now</dd>
  </div>
  <br />
     <div className="m-4">
    <p>Autobot Ready</p>
  </div>

    <div className="-space-y-6">
<div className="">
    <img src={img} alt="" className="w-10 m-4 rounded-full inline-flex"/>
    <span className="-ml-2">Alex</span>
    
  </div>
        <div className="">
    <img src={img} alt="" className="w-10 m-4 rounded-full inline-flex"/>
    <span className="-ml-2">Adam</span>

  </div>
        <div className="">
    <img src={img} alt="" className="w-10 m-4 rounded-full inline-flex"/>
    <span className="-ml-2">raheem</span>

  </div>
    </div>
        
  </div>

  
 )

}

export default RightSideBar
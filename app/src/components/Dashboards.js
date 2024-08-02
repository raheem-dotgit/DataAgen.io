import { Views } from '../components/Views';
import { View2 } from './View2';

const Dashboards = () => {



return(
 <div className="sm:bg-white inline-flex flex-col h-[90vh] dark:bg-gray-900 w-[71vw] items-center">
  <div className=''>
      <div className="sm:flex flex-col  p-8 ">
   <button className="flex-col -rotate-90 inline-block absolute">^</button>
   <button className="inline-block rotate-90 absolute ml-4">^</button>
     <ul className="sm:flex flex-row gap-2 mx-12">
    <li className="text-zinc-400 font-thin">Dashboard</li>
    <li>/</li>
    <li>Overview</li>
  </ul>
  </div>
  <div className='sm:flex flex-col p-8 gap-x-20 border rounded-3xl shadow-lg w-[1000px]'>
    <h3 className='font-extrabold'>One Spot of your Businesses</h3>
    <br />
    <p>Experience the control of customer service and HR Management at one place</p>
  </div>
  <div className='sm:flex flex-row p-8 gap-x-20 border rounded-3xl shadow-2xl mt-10 w-[1000px]'>
        <Views className=""></Views>
        <View2 className=""/>
  </div>
  </div>


 </div>
)
}

export default Dashboards
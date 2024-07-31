
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import img from '../images/Screenshot 2024-07-29 at 1.32.56 AM.png'
import img2 from '../images/Screenshot 2024-07-29 at 1.35.38 AM.png'
import img3 from '../images/Screenshot 2024-07-29 at 1.35.44 AM.png'



const RightSideBar = ({isVisible}) =>
{
 return(
  <div  className={`transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'}  bg-white border-x  fixed w-1/6 h-full  inline-flex right-0 dark:bg-gray-900`}>
   <div className="" >
  <h1 className="top-4 left-4 absolute">
   History
  </h1>
  <div className="flex flex-col top-14 left-4 absolute gap-3">
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>loading</AvatarFallback>
  </Avatar>
    <span className="absolute left-14 top-2 font-thin text-sm w-60">You Upgrade the HR Module</span>
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
  
</Avatar>
 <span className="absolute left-14 top-16 font-thin text-sm w-60">New autobot deploy</span>
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
 <span className="absolute left-14 top-28 font-thin text-sm w-60">You fix a bug</span>
   <h1 className="mt-8">Activities</h1>
  <div className="flex flex-col gap-3">
    <Avatar>
  <AvatarImage src={img} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<span className="absolute left-12 font-thin text-sm w-60 m-2">chatbot deploying</span>
    <Avatar>
  <AvatarImage src={img2} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<span className="absolute left-12 mt-[66px] font-thin text-sm w-60 m-2">Release a new chatbot</span>
  <h1 className="mt-6">Autobot ready</h1>
  </div>
   <Avatar>
  <AvatarImage src={img3} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </div>
</div>
    </div>
 )
}

export default RightSideBar
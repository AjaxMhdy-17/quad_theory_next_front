
import { FaRegUser } from "react-icons/fa";

import { IoSearchOutline } from "react-icons/io5";
import MenuButton from "./menuButton/menuButton";

const Header = () => {
  return (
    <header className='pt-[25px] bg-greeen-800 pb-[20px] border-b border-gray-200 md:border-0'>
        <div className='flex items-center justify-between'>
            <div className="text-2xl sm:text-4xl text-logo__color font-bold">pti.</div>
            {/* logo part */}

            <div className="flex items-center w-[85%] sm:w-[70%] md:w-[60%] gap-2 ">
                <div className="w-full">
                    <div className="flex items-center">
                        <div className="text-xs px-[8px] py-[14px] pr-[0] text-background__color__secondary bg-background__color__white rounded-tl-lg rounded-bl-lg sm:text-base sm:p-[12px] sm:pr-[0]" >
                            <IoSearchOutline />
                        </div>
                        <div className="w-full">
                            <input type="text" className="text-sm w-full px-[5px] py-[10px] focus:outline-none bg-background__color__white rounded-tr-lg rounded-br-lg"  placeholder="Search Audiobook" />
                        </div>
                    </div>
                </div>
                <MenuButton/>
            </div>
            
            {/* search bar  */}

            <div className="hidden text-background__color__white bg-background__color__secondary h-[50px] w-[50px] rounded-full md:flex justify-center items-center text-text__color__white text-xl">
                <FaRegUser />
            </div>
        </div>
    </header>
  )
}

export default Header
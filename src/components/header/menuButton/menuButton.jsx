

"use client"

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";


const MenuButton = () => {

    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div onClick={toggleShow} className="relative text-sm sm:text-base bg-background__color__white flex items-center gap-[8px] md:gap-[60px] py-[9px] px-[10px] sm:px-[15px] rounded-lg cursor-pointer text-text__color__primary font-bold uppercase">
            <div>
                menu
            </div>
            <div className="text-background__color__secondary">
                {show ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
            </div>
            <>
                {show ? (<div className="font-normal absolute -bottom-[230px] md:-bottom-[190px] left-[0] text-sm bg-background__color__white flex items-center gap-[8px] md:gap-[60px] pl-[14px]  py-[9px] px-[10px] sm:px-[15px] rounded-lg cursor-pointer text-text__color__secondary capitalize md:w-[155px] ">
                    <ul className="w-full cursor-pointer">
                        <li className="py-1 hover:text-background__color__secondary"><Link href="#">Home</Link></li>
                        <li className="py-1 hover:text-background__color__secondary"><Link href="#">Details</Link></li>
                        <li className="py-1 hover:text-background__color__secondary"><Link href="#">Category</Link></li>
                        <li className="py-1 hover:text-background__color__secondary"><Link href="#">my favorites</Link></li>
                        <li className="py-1 hover:text-background__color__secondary"><Link href="#">profile</Link></li>
                        <li className="py-1 hover:text-background__color__secondary"><Link href="#">login / sign up</Link></li>
                    </ul>
                </div>) : (null)}
            </>


        </div>
    )
}

export default MenuButton
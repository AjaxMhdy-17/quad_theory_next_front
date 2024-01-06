
"use client"

import { useGlobalCtx } from "@/CtxAndReducer/CtxAndReducer";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const AddMore = () => {
    const { openModal } = useGlobalCtx()
    return (
        <div onClick={openModal} className="flex items-center gap-1 cursor-pointer">
            <div className="text-base text-background__color__secondary">
                Add More
            </div>
            <div className="flex items-center">
                <span><IoIosArrowBack /></span>
                <span><IoIosArrowForward /></span>
            </div>
        </div>
    )
}

export default AddMore
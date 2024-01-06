import Image from "next/image"
import BoxLayout from "../boxLayout/boxLayout"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footer_img from "@/assets/footer_img.png"


const Footer = () => {
  return (
    <div className="flex w-full bg-background__color__primary pt-[50px] md:pt-[30px] pb-[60px]">
      <BoxLayout>
        <div className="flex w-full justify-between items-center">
          <div className="w-full md:w-[65%]">
            <div>
              <div className="mb-[40px] md:mb-[0] flex items-center bg-background__color__white h-[40px] md:h-[45px] rounded-xl">
                <div className="w-[60%]">
                  <input type="text" placeholder="Enter Your Email" className="text-text__color__secondary text-sm px-3 w-full h-full rounded-tl-xl rounded-bl-xl focus:outline-none" />
                </div>
                <div className="w-[40%] h-[80%] mr-2 items-center flex gap-2 text-background__color__secondary justify-center md:bg-background__color__secondary md:text-background__color__white rounded-xl">
                  <button>Subscribe</button>
                  <span><FaArrowRightLong /></span>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-col items-center md:items-start">
                <div className="text-center md:text-left  mt-[20px] md:mt-[40px] md:mb-[20px] text-2xl sm:text-4xl text-logo__color font-bold">
                  pti<span className="text-background__color__secondary">.</span> 
                  <div className="text-sm md:hidden mt-[15px]">
                    Copyright@tripp.All Right Reserved
                  </div>
                </div>
                <div className="flex flex-col-reverse items-center justify-between text-sm font-bold w-full md:flex-row">
                  <div className="hidden md:block">
                    Copyright@tripp.All Right Reserved
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="social__icons"><FaGoogle /></div>
                    <div className="social__icons"><FaTwitter /></div>
                    <div className="social__icons"><FaInstagram /></div>
                  </div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
          <div className="w-0 md:w-[30%]">
            <Image src={footer_img} style={{height:"100%",width:"100%"}} height={1000} width={1000} alt="image"/>
          </div>
        </div>
      </BoxLayout>
    </div>
  )
}

export default Footer
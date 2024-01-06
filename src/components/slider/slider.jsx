
import sImage from "@/assets/slider_img.png"
import Image from "next/image"

const Slider = () => {
  return (
    <div className='bg-transparent  mt-[80px] mb-[80px] rounded-3xl mx-[10px] md:bg-background__color__primary'>
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="w-full md:w-[56%] capitalize text-center  md:pl-[40px] md:pr-[20px]  md:text-left">
          <div className="text-text__color__primary md:text-background__color__white text-3xl lg:text-5xl font-bold mb-[15px]">
            Deliver food to your door step|
          </div>
          <div className="text-text__color__secondary text-sm  md:text-background__color__white md:text-base ">
            Authentic food, Quick service, Fast delivery 
          </div>
        </div>
        <div className="w-full rounded-3xl bg-gradient-to-t from-background__color__primary  mx-auto md:w-[45%]">
          <Image src={sImage} style={{height:"100%",width:"100%"}} priority height={500} width={500}  alt='slider_img' className="mx-auto h-full w-full" />
        </div>
      </div>
    </div>
  )
}

export default Slider
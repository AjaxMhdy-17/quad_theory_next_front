
import Image from "next/image";

import AddMore from "../addMore/addMore";


const CardList = async ({ data, heading }) => {

    

    return (
        <div className="my-[50px]">
            <div className="flex items-center justify-between mb-[20px]">
                <div className="capitalize text-xl font-bold text-text__color__primary">
                    {heading}
                </div>
                
                <AddMore/>

            </div>
            <div className="overflow-x-scroll">
                <div className="inline-flex pb-[20px]">
                    {data.map(item => (
                        <div key={item.Id} className="w-[160px] md:w-[200px] mr-[20px]">
                            <div className="h-[260px] rounded-lg cursor-pointer">
                                <Image
                                    src={`${item.ImageUrl}`}
                                    width={200}
                                    height={260}
                                    style={{ width: "100%", height: "100%" }}
                                    className="rounded-lg"
                                    alt="popular_image"
                                />
                            </div>
                            <div className="mt-2 text-center text-text__color__secondary">
                                {item.Name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardList
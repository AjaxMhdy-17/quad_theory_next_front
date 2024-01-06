
"use client"

import { useGlobalCtx } from "@/CtxAndReducer/CtxAndReducer"

const Overlay = ({ children }) => {

    const { showModal , closeModal} = useGlobalCtx()


    return (
        <>
            {showModal ? (
                <div
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="relative bg-white m-auto p-8 w-[90%] sm:w-[60%] md:w-[40%] xl:w-[30%] rounded-xl">
                        <div className="flex flex-col items-center">
                            <div className="flex w-full">
                                {children}
                            </div>
                            <br />
                            <button onClick={closeModal} type="button" className="-rotate-45 absolute top-[0px] right-5 rounded-full h-[60px] bg-red-500 text-white p-2">X</button>
                        </div>

                    </div>
                </div>
            ) : (
                null
            )}

        </>
    )
}

export default Overlay
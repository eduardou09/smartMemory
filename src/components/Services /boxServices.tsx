import { IServiceBox } from "@/interfaces/componets";

import { FaCheck } from "react-icons/fa6";
import Button from "../Button/button";
import Image from "next/image";
import Link from "next/link";

const ServiceBox = ({ service, subtitleService, photo, stages, widthImg, photo2 }: IServiceBox) => {
    return (
        <div className='flex flex-col px-16 py-8 pt-0  max-lg:px-3'>
            
            <div className="flex gap-32 mt-10">
                <div className="w-2/4 max-md:w-full">
                    <div className="mt-7 max-md:flex  max-md:flex-col ">
                        <div className="font-semibold text-2xl max-md:items-center max-md:px-6">{service}</div>
                        <div className="text-textColorSecondary mb-7 mt-3 w-4/5 max-md:px-6 max-md:w-full ">{subtitleService}</div>


                        <div className="flex flex-col gap-3 mb-7 max-md:w-full max-md:px-6 ">
                            <div className="text-textColorSecondary">Dia da foto:</div>
                            {stages.map((item: any) => (
                                <div className="flex gap-2" key={item}>
                                    <div className=" flex justify-center items-center rounded-full bg-primaryColor w-5 h-5 text-black">
                                        <FaCheck className="" />
                                    </div>
                                    <div key={item} className="flex items-center justify-center">

                                        {item}
                                    </div>
                                </div>

                            ))}</div>
                        
                      


                    </div>
                </div>
                <div className=" flex gap-3 max-md:hidden max-md:w-0">
                <div className=" ">
                        <Image src={photo} alt="Imagem Hero" className={` p-1 rounded-2xl text-black w-64  h-90
                        `} />
                    </div>
                    <div className="">
                        <Image src={photo2} alt="Imagem Hero" className={` p-1 rounded-2xl text-black w-64  h-90
                        `} />
                    </div>
                </div>
            </div>

        </div >
    );
}

export default ServiceBox;
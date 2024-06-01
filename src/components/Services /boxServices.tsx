import { IServiceBox } from "@/interfaces/componets";

import { FaCheck } from "react-icons/fa6";
import Button from "../Button/button";
import Image from "next/image";

const ServiceBox = ({ service, subtitleService, photo, stages, widthImg}: IServiceBox) => {
    return (
        <div className='flex flex-col px-16 py-8 max-lg:px-3'>
            <div className="items-center justify-center text-center">
                <div className="text-primaryColor text-3xl font-semibold ">Nossos Serviços</div>
                <div className="text-textColorSecondary">Descubra como qual dos nossos serviços se encaixa melhor para impulsionar seu negócio</div>
            </div>
            <div className="flex justify-between ">
                <div className="w-2/4 max-md:w-full">
                    <div className="mt-7 max-md:flex  max-md:flex-col ">
                        <div className="font-semibold text-2xl max-md:items-center max-md:px-6">{service}</div>
                        <div className="text-textColorSecondary mb-7 mt-3 w-4/5 max-md:px-6 max-md:w-full ">{subtitleService}</div>


                        <div className="flex flex-col gap-3 mb-7 max-md:w-full max-md:px-6 ">
                            <div className="text-textColorSecondary">Etapas do serviço:</div>
                            {stages.map((item: any) => (
                                <div className="flex gap-2">
                                    <div className=" flex justify-center items-center rounded-full bg-primaryColor w-5 h-5 text-black">
                                        <FaCheck className="" />
                                    </div>
                                    <div key={item} className="flex items-center justify-center">

                                        {item}
                                    </div>
                                </div>

                            ))}</div>

                        <Button  title="Ver mais" width="w-72" padding= "p-2" />


                    </div>
                </div>
                <div className="flex  items-center justify-center w-2/4 max-md:hidden max-md:w-0">
                    <div className="flex items-center justify-center">
                    <Image src={photo} alt="Imagem Hero" className={` p-1 rounded-2xl text-black ${widthImg} `} />
                    </div>
                </div>
            </div>

        </div >
    );
}

export default ServiceBox;
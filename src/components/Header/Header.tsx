import { isMobile } from "react-device-detect"
import Button from "../Button/button"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import useStore from '../../utils/stateSite';
import { RiCustomerService2Line, RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { GrServices } from "react-icons/gr";
import iconAbout from '@/public/icons/icons8-about-50 (1).png'
import Image from "next/image";
import { MdOutlineContactMail } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
const Header = (
) => {
    const { isHeader, setIsHeader } = useStore();

    console.log(isHeader)
    console.log('isHeader:', isHeader); // Verifique o valor de isHeader
    console.log('setIsHeader:', typeof setIsHeader); // Verifique o tipo de setIsHeader
    return (
        <div>
            {isMobile ? (
                <div className="flex justify-between items-center text-xl pt-4 border-b border-gray-900 px-10 relative">
                    <h1 className="text-primaryColor font-bold font-league-spartan py-3">Nek.</h1>
                    <div>{isHeader ? <div className="h-screen flex flex-col  absolute top-0 right-0 bg-black border-l border-gray-900 z-50 p-2 transition-all px-4 py-4">
                        <div className="flex w-full "> <RiMenuFold4Fill  className="text-primaryColor text-3xl" onClick={() => setIsHeader(!isHeader)} />
                        </div>
                        <div className="flex gap-3 flex-col mt-4">
                            <div className="flex items-center gap-2 bg-secondaryColor justify-center py-2 rounded-xl" ><GrServices /><p> Serviços</p></div>
                            <div className="flex items-center gap-2 bg-secondaryColor justify-center py-2 rounded-xl" >  <Image src={iconAbout} alt="" className='w-5  ' /><p>Sobre nós</p></div>
                            <div className="flex items-center gap-2 bg-secondaryColor  justify-center py-2 rounded-xl" ><RiCustomerService2Line /> <p>Área do Cliente </p></div>

                            <div className="flex items-center gap-2 bg-secondaryColor pl-5 py-2 rounded-xl">
                               
                                <MdOutlineContactMail /> <p>Entrar em contato </p>
                                <span className="relative flex h-3 w-3 right-1 bottom-5  ">
                                    <span className="animate-ping absolute left-2 inline-flex h-full w-full rounded-full bg-primaryColor opacity-75"></span>
                                    <span className="relative inline-flex left-2 rounded-full h-3 w-3 bg-primaryColor "></span>
                                </span>
                            </div>


                        </div>

                        {/* <div>i</div>
                <div>i</div> */}
                    </div> : <div className="transition-all">  <RiMenuUnfold4Fill  className="text-primaryColor text-3xl" onClick={() => setIsHeader(!isHeader)} /></div>}</div>
                </div>
            ) : (
                <div className="flex justify-between items-center text-xl pt-4 border-b border-gray-900 py-3 px-56">
                    <h1 className="text-primaryColor font-bold font-league-spartan">Nek.</h1>

                    <div className="flex gap-6">
                        <p>Serviços</p>
                        <p>Sobre nós</p>
                        <p>Área do Cliente </p>
                    </div>

                    <Button title="Contato" />
                </div>
            )}
        </div>
    );


}
export default Header
import Button from "../Button/button";
import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import Image from "next/image";
import { MdOutlineContactMail } from "react-icons/md";
import useStore from '../../utils/stateSite';
import iconAbout from '@/public/icons/icons8-about-50 (1).png';
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { isMobile } from "react-device-detect";
const Header = ({ handleClick, isHeader, onClickFirst, onClickSecond, second, first, isContact, Contractfirst }: any) => {


    return (
        <div>
            {isMobile? (
                <div>
                    <div className="flex justify-between items-center text-xl pt-4 border-b border-gray-900 px-10 w-full bg-black z-50 top-0 right-0 ">
                        <Link href={'/home'}>
                            <h1 className="text-primaryColor font-bold font-league-spartan py-3 cursor-pointer">Nek.</h1>
                        </Link>

                        <div>
                            {isHeader ? (
                                <div>
                                    <div className="h-screen flex flex-col top-0 right-0 bg-black border-l border-gray-900 z-50 p-2 transition-all px-4 py-4 fixed ">
                                        <div className="flex w-full ">
                                            <RiMenuFold4Fill className="text-primaryColor text-3xl" onClick={handleClick} />
                                        </div>
                                        {isContact ?
                                           
                                                 <div className="flex gap-3 flex-col mt-4">
                                                 <button className="flex items-center gap-2 bg-secondaryColor justify-center py-2 rounded-xl" onClick={onClickFirst}>
                                                     <GrServices /> <a href="#servico" className="">{first}</a>
                                                 </button>
                                                 <button className="flex items-center gap-2 bg-secondaryColor justify-center py-2 rounded-xl" onClick={onClickSecond}>
                                                     <Image src={iconAbout} alt="" className='w-5' />
                                                     <a href="#about">{second}</a>
                                                 </button>
                                                 <Link href={'/contact'}>
                                                     <button onClick={handleClick} className="flex items-center gap-2 bg-secondaryColor pl-5 py-2 rounded-xl" >
                                                         <MdOutlineContactMail />   <p>Entrar em contato</p>
                                                         <span className="relative flex h-3 w-3 right-1 bottom-5">
                                                             <span className="animate-ping absolute left-2 inline-flex h-full w-full rounded-full bg-primaryColor opacity-75"></span>
                                                             <span className="relative inline-flex left-2 rounded-full h-3 w-3 bg-primaryColor "></span>
                                                         </span>
                                                     </button>
                                                 </Link>
                                             </div> : <Link href={'/home'}>
                                                <button className="flex items-center gap-2 bg-secondaryColor justify-center py-2 rounded-xl w-64 mt-4" onClick={onClickFirst} >
                                                    <IoHome /> <a href="#servico" className="">{Contractfirst}</a>
                                                </button> </Link>  
                                           }

                                    </div>

                                    <div className="m-0 p-0 fixed bg-black z-40 w-full inset-0 bg-opacity-70" onClick={handleClick}></div>
                                </div>
                            ) : (
                                <div className="transition-all">
                                    <RiMenuUnfold4Fill className="text-primaryColor text-3xl" onClick={handleClick} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between items-center text-xl pt-4 border-b border-gray-900 py-3 px-56">
                    <Link href={'/home'}>
                        <h1 className="text-primaryColor font-bold font-league-spartan py-3 cursor-pointer">Nek.</h1>
                    </Link>
                    <div className="flex gap-6">
                        <button className="hover:bg-gray-900 px-4 rounded-3xl " onClick={onClickFirst}>{first}</button>
                        <button onClick={onClickSecond} className="hover:bg-gray-900 px-4 rounded-3xl ">{second}</button>
                    </div>

                    {isContact && <Link href={'/contact'}>
                        <button type="button" className={` bg-primaryColor text-black px-8 rounded-3xl max-md:text-lg py-2 `} >
                            Contato
                        </button>
                    </Link>}
                </div>


            )}
        </div>
    );
}

export default Header;

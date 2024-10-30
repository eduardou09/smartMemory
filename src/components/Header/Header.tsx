import Button from "../Button/button";
import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import Image from "next/image";
import { MdOutlineContactMail } from "react-icons/md";
import useStore from '../../utils/stateSite';

import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { isMobile } from "react-device-detect";
const Header = ({ handleClick, isHeader, onClickFirst, onClickSecond, second, first, isContact, Contractfirst }: any) => {


    return (
        <div className="">
            {isMobile? (
                <div>
                    <div className="flex justify-center items-center bg-roxo py-4 font-semibold">
                    Para quem tem dificuldade de estudar.
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center bg-roxo py-4 font-semibold">
                 
                 Para quem tem dificuldade de estudar.

                   
                </div>


            )}
        </div>
    );
}

export default Header;

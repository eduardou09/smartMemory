"use client"
import { IBox } from '@/interfaces/componets';
import Image from 'next/image';
import React from 'react';

const Box = ({title, text, icon, photo, isPhoto, ref
 }:IBox ) => {
    return (
        <div className='bg-[#e4e4e4] flex p-3 flex-col rounded-xl gap-4 items- w-[550px] max-md:w-10/12 items-center' ref={ref}>
           
            <div className=' text-black text-center' >{text}</div>
        </div>
    )
}

export default Box
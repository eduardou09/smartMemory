"use client"
import { IBox } from '@/interfaces/componets';
import Image from 'next/image';
import React from 'react';

const Box = ({title, text, icon, photo, isPhoto, ref
 }:IBox ) => {
    return (
        <div className='bg-secondaryColor flex p-3 flex-col rounded-xl gap-4 ' ref={ref}>
            <div className='flex gap-3 items-center'>
               {isPhoto ? <div> <Image src={photo} alt="Imagem Hero" className='  rounded-lg text-primaryColor w-12' />
               </div> 
                :
               <div className=' p-1 rounded-lg text-primaryColor text-4xl'>{icon}</div> } 
                <div className='text-primaryColor font-bold'>{title}</div>
            </div>
            <div className=' text-textColorSecondary' >{text}</div>
        </div>
    )
}

export default Box
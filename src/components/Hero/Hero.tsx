


"use client"
import React from 'react';

import { IButton } from '@/interfaces/componets';
import Button from '../Button/button';
import Image from 'next/image';
import foto from '@/public/fotosSibele/fotoLaguna.jpeg'
import fotoMobile from '@/public/fotosSibele/fotoLaguna.jpeg'
import { isMobile } from 'react-device-detect';



const Hero = ({ handleScrollServiceButton}:any) => {
    return (
        <div className='flex justify-between mt-20 items-center max-md:mt-5 max-md:flex-col-reverse'>
            <div className='max-w-xl flex flex-col gap-6 max-md:items-center'>
                <p className='text-white text-5xl font-bold  text-left  max-md:text-center  max-md:text-4xl'>
                     <span className='text-primaryColor'>Eu te amo</span> muito meu amor
                </p>
                <p className='text-textColorSecondary text-xl max-md:text-center max-md:text-lg '>Da indireita pro mundo, ainda vamos rodar o mundo juntos</p>
                <div className='text-xl '>
                    <Button
                        title='ver nossos momentos'
                        width='max-md:w-full'
                        onClick={ handleScrollServiceButton}
                    />
                </div>

            </div>
            <div >
                <div className='mr-32'>
                    {/* Usando a tag <Image> do Next.js com a largura especificada */}
                    <Image src={isMobile ? fotoMobile : foto} alt="Imagem Hero" className=' h-96 w-72 max-md:mb-10 rounded-md' />
                  
                </div>

            </div>
        </div>
    );
}

export default Hero;



"use client"
import React from 'react';

import { IButton } from '@/interfaces/componets';
import Button from '../Button/button';
import Image from 'next/image';
import foto from '@/public/images/fotoHero.svg'
import fotoMobile from '@/public/images/fotoHeroMobile.svg'
import { isMobile } from 'react-device-detect';



const Hero = ({ handleScrollServiceButton}:any) => {
    return (
        <div className='flex justify-between mt-20 items-center max-md:mt-5 max-md:flex-col-reverse'>
            <div className='max-w-xl flex flex-col gap-6 max-md:items-center'>
                <p className='text-white text-5xl font-bold  text-left  max-md:text-center  max-md:text-4xl'>
                    Automatize processos, ganhe <span className='text-primaryColor'>tempo</span>, <span className='text-primaryColor'>dinheiro</span> e impulsione seus <span className='text-primaryColor'>resultados </span>
                </p>
                <p className='text-textColorSecondary text-xl max-md:text-center max-md:text-lg '>Da Concepção à execução, transformamos suas ideias em produtos digitais de alta qualidade.</p>
                <div className='text-xl '>
                    <Button
                        title='VER SERVIÇOS'
                        width='max-md:w-full'
                        onClick={ handleScrollServiceButton}
                    />
                </div>

            </div>
            <div >
                <div>
                    {/* Usando a tag <Image> do Next.js com a largura especificada */}
                    <Image src={isMobile ? fotoMobile : foto} alt="Imagem Hero" className='w-94 max-md:mb-10 ' />
                  
                </div>

            </div>
        </div>
    );
}

export default Hero;
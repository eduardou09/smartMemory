"use client"
    ;
import { IBoxGrid } from '@/interfaces/componets';
import React from 'react';
import BoxGrid from './BoxGrid';
import Image from 'next/image';
import photo from '@/public/fotosSibele/primeiraFoto.jpg'
import { isMobile } from 'react-device-detect';

const About = ({aboutRef}:any) => {
    
    return (
        <div className=' flex bg-secondaryColor rounded-2xl p-4 max-md:p-8 mb-12' ref={aboutRef}>
            <div className='flex pl-8 flex-col justify-center max-md:pl-0 '>
                <div className='text-3xl font-semibold mb-10  '>Como nos Conhcemos</div>
                <div className='w-5/6 text-lg max-md:w-full'>Fomos apresentados pela Julia, fomos na festa dela porem não falasse comigo, então mandei uma mesagemzinha e fui ignorado. Depois de um tempo, nos encontramos novamente no Endireita, e mesmo com muita vergonha, tomei coragem e fui falar com você. Conversamos e marcamos de sair. Íamos no Hangout, mas estava muito cheio, então fomos no Afonso, onde tiramos a foto que está ao lado. A partir daí, vivemos felizes para sempre.</div>
            </div>
            {isMobile ? <div> </div> :
                <div className='flex flex-col w-full text-center '>
                    <Image src={photo} alt="Imagem Hero" className={` p-1 rounded-2xl text-black `} />
                    <p className='text-sm'>Nossa primeira foto</p>
                </div>}

        </div>
    )


}
export default About 

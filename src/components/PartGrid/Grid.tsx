"use client"
    ;
import { IBoxGrid } from '@/interfaces/componets';
import React from 'react';
import BoxGrid from './BoxGrid';
import About from './About';
import { isMobile } from 'react-device-detect';


const GridBoxes = ({aboutRef}:any) => {
    return (

       
         
                <div className={isMobile ? `flex gap-6 flex-col ` : `grid  grid-rows-2 gap-10 `}>
                    <div className='flex'>
                        <BoxGrid
                          
                            mainText='Beijinho, Boa noite te amo.'
                            isLeft={true}
                        />
                    </div>
                    <div className='flex '>
                        <BoxGrid
                         mainText='Eu te amo mais que tudo nessa vida, pitica. Quero passar o resto da vida com vôce. '
                           
                        />
                    </div>
                    <div className='col-span-2' id='about'>
                        <About 
                        aboutRef={aboutRef}
                        />
                    </div>
                </div>

    )


}
export default GridBoxes 

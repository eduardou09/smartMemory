"use client"
    ;
import { IBoxGrid } from '@/interfaces/componets';
import React from 'react';
import BoxGrid from './BoxGrid';
import About from './About';
import { isMobile } from 'react-device-detect';


const GridBoxes = () => {
    return (

       
         
                <div className={isMobile ? `flex gap-6 flex-col ` : `grid  grid-rows-2 gap-10 `}>
                    <div className='flex'>
                        <BoxGrid
                            mainText='Uma equipe altamente capacitada pra grandes projetos'
                            subText='Uma equipe de profissionais altamente capacitada para transforma suas ideia e seus problemas em soluções inovadoras '
                            isLeft={true}
                        />
                    </div>
                    <div className='flex '>
                        <BoxGrid
                            mainText='Utilizando a tecnologia e o digital para alavancar seu negócio.'
                        />
                    </div>
                    <div className='col-span-2' id='about'>
                        <About />
                    </div>
                </div>

    )


}
export default GridBoxes 

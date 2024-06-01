"use client"
import React from 'react';
import Box from '../Box/box';
import { IoIosBusiness } from "react-icons/io";
import IconErrorPc from '@/public/icons/iconErrorPC.png'
import { AiOutlineCluster } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { isMobile } from 'react-device-detect';
const ForWho = () => {
    return (
        <div className='flex items-center flex-col justify-center mt-24'>
            <div className='text-3xl font-semibold mb-10'>
                Pra quem é a <span className='text-primaryColor'>NEK</span>
            </div>
            <div className={isMobile ? `flex flex-wrap gap-6` : `grid grid-cols-2 gap-10 `}>
                <Box 
                icon= {<IoIosBusiness />}
                title='Pequenas, Médias e Grandes Empresas.'
                text='Para empresas que necessitam automatizar seus processos em busca de ganhar tempo, melhorar a produtividade da empresa, reduzir erros e garantir segurança.'
                />
                <Box 
                isPhoto={true}
                photo={IconErrorPc}
                title='Empresas enfretam problemas no sistema '
                text='Softwares sob medida para abordar os problemas internos de sua empresa, impulsionando a eficiência operacional e promovendo um ambiente de trabalho mais produtivo.'
                />
                <Box 
                icon= {<GiReceiveMoney />}
                title='Empresas querem vender mais '
                text='Empresas que não estão contentes com a quantidade de vendas e necessitam vender mais, mas não sabem como, se precisam de trafego, sistema pra gerir, etc.'
                />
                <Box 
                icon={<AiOutlineCluster />}
                title='Empresa que buscam tecnologia de ponta'
                text='Empresas que estão sempre em busca de tecnologias inovadoras para se manterem na liderança do mercado e garantirem sua vantagem competitiva.'
                />
            </div>
        </div>
    )
}

export default ForWho
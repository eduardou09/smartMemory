"use client"
import React from 'react';
import Box from '../Box/box';
import { FaHeart } from "react-icons/fa";
import { isMobile } from 'react-device-detect';
const ForWho = ({ref, serviceRef}:any) => {
    return (
        <div className='flex items-center flex-col justify-center mt-24 '>
            <div className='text-3xl  mb-3 text-black font-bold'>
            O melhor e-book de estudos para o <span className='text-[#00a857]'>ENEM!</span>
            </div>
            <div className='mb-10'>Esses são apenas alguns dos motivos pelos quais eu te amo tanto. Você é incrível e sou muito feliz por compartilhar minha vida com você.</div>
            <div className={isMobile ? `flex flex-wrap gap-6` : `grid grid-cols-2 gap-10 `}>
                <Box 
                icon= {<FaHeart />}
                title='Seu Jeito'
                text='Estude até 8 horas com total absorção e foco!'
                />
                <Box 
               // isPhoto={true}
                icon={<FaHeart />}
                title='Seu Companheirismo'
                text='Você está sempre ao meu lado, não importa o que aconteça. O seu companheirismo é uma força silenciosa que me dá coragem para enfrentar qualquer desafio. Você é minha parceira nas aventuras da vida, me apoiando nos momentos difíceis e celebrando comigo nas conquistas. Saber que posso contar com você é uma das maiores bênçãos da minha vida.'
                />
                <Box 
                icon= {<FaHeart />}
                title='Seu Sorriso'
                text='O seu sorriso é simplesmente contagiante. Não importa o quão difícil tenha sido o meu dia, ver o seu sorriso derrete todas as minhas preocupações e aquece meu coração. Ele me lembra constantemente que o amor e a felicidade são as coisas mais importantes da vida. Cada vez que você sorri, eu me apaixono um pouco mais.'
                />
                <div ref={ serviceRef}>
                <Box 
          
                icon={<FaHeart />}
                title=' Sua Inteligência'
                text='A sua inteligência é uma das coisas que mais admiro em você. Você tem uma maneira incrível de ver o mundo, de resolver problemas e de entender as coisas mais complexas com tanta facilidade. Conversar com você é sempre estimulante e enriquecedor. A sua curiosidade e o seu desejo de aprender me inspiram todos os dias a ser uma pessoa melhor.'
                />
                </div>
            </div>
        </div>
    )
}

export default ForWho
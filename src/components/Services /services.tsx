"use client";
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import custom Swiper styles
import '../../app/swiperCustom.css'; // Importa o CSS personalizado
import { useRef } from 'react';

///import
import ServiceBox from './boxServices';
import photoMarlene from '@/public/images/marlenefoto.png'
import photoMentoriaTeste from '@/public/images/mentoria.webp'
import photoTrafego from '@/public/images/trafego.webp'
import photoManutencao from '@/public/images/manutencao.webp'
import photoSite from '@/public/images/site.webp'
import photoSoft from '@/public/images/software.webp'

const Service = ({serviceRef}:any) => {
 
    services: [
        {
            timeLine: ['discovery', 'Design', 'Desenvolvimento', 'Implantação']
        }]
    return (
        <div id='servico' ref={serviceRef} className='mb-10 bg-secondaryColor rounded-2xl mt-10  md:p-1 max-md:'>
            <div className="items-center justify-center text-center pt-6">
                <div className="text-primaryColor text-3xl font-semibold ">Nossos Serviços</div>
                <div className="text-textColorSecondary">Descubra como qual dos nossos serviços se encaixa melhor para impulsionar seu negócio</div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide >
                    <ServiceBox
                        service='Desenvolvimento de Software'
                        subtitleService='Imagine seu negócio operando com eficiência máxima, cada processo otimizado e cada tarefa automatizada. Isso é possível com nosso serviço de desenvolvimento de software sob medida!'
                        stages={['Discovery', 'Design', 'Desenvolvimento', 'Implantação']}
                        photo={photoSoft}
                    />
                </SwiperSlide>
                <SwiperSlide>
                <ServiceBox
                        service='Desenvolvimento de Sites'
                        subtitleService={`Desenvolvemos diversos tipos de sites para impulsionar o crescimento de clientes e aumentar suas vendas.`}
                        stages={['Discovery', 'Design', 'Desenvolvimento', 'Implantação']}
                        photo={photoSite}
                        widthImg={'w-max'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceBox
                        service='Gestão de Tráfego'
                        subtitleService={`Imagine aumentar suas vendas e serviços exponencialmente em questão de semanas. Com nosso serviço de tráfego pago, direcionamos clientes qualificados diretamente para o seu negócio.`}
                        photo={photoTrafego}
                        stages={['Criar/usar contas em meios de tráfego', 'Gerar o tráfego ', 'Gerar Leads', 'Conversão de leads']}
                    />
                </SwiperSlide>
               
                <SwiperSlide> 
                    <ServiceBox
                        service='Manutenção de Software'
                        subtitleService={`Seu software está apresentando falhas ou precisa de atualizações ou quer reformular ele? Nós podemos ajudar!  Oferecemos manutenção especializada para garantir que seu sistema funcione sempre de maneira eficiente e segura. `}
                        stages={['Correção', 'Adpatação', 'Optimização', 'Atualização']}
                        photo={photoManutencao}
                        widthImg={'w-max'}
                    />
                </SwiperSlide>
                <SwiperSlide> 
                    <ServiceBox
                        service='Mentoria pra empresas'
                        subtitleService={`Imagine ter uma equipe de especialistas ao seu lado, identificando os pontos fracos e áreas de melhoria da sua empresa. `}
                        stages={['Entender a empresa', 'Ver Pontos de melhora', 'Buscar soluções', 'Apresentação da solução']}
                        photo={photoMentoriaTeste }
                        widthImg={'w-max'}
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

Services: [
    {
        title: 'Desenvolvimento de Software',
        text: 'Desenvolvimento de softwares do zero, Desde a validação da ideia até a implantação',
        timeLine: ['Discovery', 'Design', 'Desenvolvimento', 'Implantação']
    }
]

export default Service;

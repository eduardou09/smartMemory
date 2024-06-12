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
import fotoFigueira from '@/public/fotosSibele/fotoFigueira.jpeg'
import fotoFigueira2 from '@/public/images/fotoJogodoFigueria.jpeg'
import fotoLaguna from '@/public/fotosSibele/fotoLaguna.jpeg'
import fotoLaguna2 from '@/public/images/emLaguna.jpeg'
import fotoVirada from '@/public/images/primeiraVirada.jpg'
import fotoVirada2 from '@/public/images/fotoVirada2.jpeg'
import showMatue from '@/public/fotosSibele/showMatue.jpeg'
import fotoShowArmando from '@/public/images/fotoShow.jpeg'
import ViagemSF from '@/public/images/fotoEmSf.jpeg'
import ViagemS2 from '@/public/images/saoChico.jpeg'
const Service = ({ serviceRef }: any) => {

    services: [
        {
            timeLine: ['discovery', 'Design', 'Desenvolvimento', 'Implantação']
        }]
    return (
        <div id='servico' ref={serviceRef} className='mb-10 bg-secondaryColor rounded-2xl mt-10  md:p-1 max-md:'>
            <div className="items-center justify-center text-center pt-6">
                <div className="text-primaryColor text-3xl font-semibold ">Nossos Momentos</div>
                <div className="text-textColorSecondary">vamos relembrar alguns momentos que ja passamos junto.</div>
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
                        service='Nossa Segunda Foto junta.'
                        subtitleService='Primeira vez que postamos uma foto junto. Lembro como se fosse hoje, a gente não sabia se postava ainda tinha vergonha um dos outros ai a Elisa deu um empurrão na gente e postei.
                         '
                        stages={[' 12/06/2022']}
                        photo={fotoFigueira}
                        photo2={fotoFigueira2}
                        widthImg='h-72'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceBox
                        service='Nossa Primeira viagem'
                        subtitleService={`Primeria viagem de muitas. destino: Laguna/rosa, ficamos 3 dias em Laguna e depois partimos pro Rosa, fomos na paria do Rosa, Silveira e saimos bebados pra comer`}
                        stages={[' 13/01/2023']}
                        photo={fotoLaguna}
                        photo2={fotoLaguna2}
                        widthImg={'w-max'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceBox
                        service='Nossas viradas'
                        subtitleService={`Duas viradas de muitas, primeira virada passamos no campeche, passei mal kkkkk, segunda virada fomos numa festa muuuuuito legal chamada nossa virada`}
                        stages={[' 31/12/2022-01/01/2023', '31/12/2023-01/01/2024']}
                        photo={fotoVirada}
                        photo2={fotoVirada2}

                    />

                </SwiperSlide>

                <SwiperSlide>
                    <ServiceBox
                        service='Shows que ja fomos'
                        subtitleService={`Fomos em muitos shows legais separei dois que temos fotos bonitas: mas ja fomos no show da 30 (Matue, Teto e Wiu), Turma do pagode, show do Davi, NK, Gaab, Vitor Klay, Armandinho, Menos é mais e posso ter esqucido de algum `}
                        stages={['21/01/2023 pode ta errada', '28/01/2024']}
                        // photo={photoManutencao}
                        widthImg={'w-max'}

                        photo={showMatue}
                        photo2={fotoShowArmando}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceBox
                        service='Nossa segunda Viagem'
                        subtitleService={`Segunda viagem de muitas. destino: São francisco do sul, fomos sabado e voltamos domingo, chegamos e vimos o Felipe treinar depois fizemos um churrasquinho no Gue, conheçemos a cidade fomos curtir o hotel, pos hotel fomos no pizzaria e no outro dia fomos na praça com os tonhos.`}
                        stages={['10/06/2023']}
                        photo={ViagemSF}
                        photo2={ViagemS2}
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

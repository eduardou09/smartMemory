"use client";
import ForWho from "@/components/ForWho/ForWho";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import GridBoxes from "@/components/PartGrid/Grid";
import Service from "@/components/Services /services";

import useStoreMain from "@/utils/stateSite";
import fotoLogo from "@/public/fotosSibele/relogio.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Button from "@/components/Button/button";

const Home = () => {
  // Inicializa o estado com um objeto vazio
  const [forms, setForms] = useState<any>({});
  const { isHeader, setIsHeader, form } = useStoreMain();

  


  const serviceRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const handleScrollService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsHeader(!isHeader);
  };
  const handleScrollServiceButton = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsHeader(!isHeader);
  };

  const handleClick = () => {
    setIsHeader(!isHeader);
  };

  return (
    <div className=" bg-gradient-to-r from-black to-[#340854]">
      <Header
        onClickSecond={handleScrollAbout}
        onClickFirst={handleScrollServiceButton}
        first="Momentos"
        second="Sobre nós"
        serviceRef={serviceRef}
        isHeader={isHeader}
        handleClick={handleClick}
        isContact={true}
      />
      <div className="mx-56 max-lg:mx-4">
        <Hero handleScrollServiceButton={handleScrollServiceButton} />
      </div>
      <div className="bg-white ">
        <ForWho />
      </div>

      <div className="mx-56 max-lg:mx-4">
        <Service />
      </div>
      <div>
        <div className="flex justify-center items-center bg-roxo py-4 font-bold text-2xl">
          <div className="flex gap-3 items-center">
            <Image src={fotoLogo} alt="Imagem logo" />
            <div className="text-lg">OPORTUNIDADE ÚNICA</div>
            <div>
              <Image src={fotoLogo} alt="Imagem logo" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white flex flex-col px-4 pb-10">
        <div className="text-3xl  mb-3 text-black font-bold max-md:text-center ">
          <div className="text-center mt-5">
          O Smart Memory é <span className="text-[#00a857]">para você </span> que:
          </div>
          <div className="flex  text-lg font-normal mt-3 gap-2 ">
            <div className=" flex items-center justify-center">
              <FaCheck className="text-[#00a857]" />
            </div>
            <div className="m-0 text-start ">
              Melhorar suas técnicas de estudos e seu desempenho em
              provas.
            </div>
          </div>
          <div className="flex  text-lg font-normal mt-3 gap-2">
            <div className=" flex items-center justify-center">
              <FaCheck className="text-[#00a857]" />
            </div>
            <div className="m-0 text-start ">
              Estratégias eficientes para absorver conteúdos.
            </div>
          </div>
          <div className="flex  text-lg font-normal mt-3 gap-2">
            <div className=" flex items-center justify-center">
              <FaCheck className="text-[#00a857]" />
            </div>
            <div className="m-0 text-start ">
              Otimizar seu tempo de estudo com métodos comprovados.
            </div>
          </div>
          <div className="flex  text-lg font-normal mt-3 gap-2">
            <div className=" flex items-center justify-center">
              <FaCheck className="text-[#00a857]" />
            </div>
            <div className="m-0 text-start ">
              Como melhorar sua organização diária e de estudos.
              
            </div>
          </div>
          <div className="flex  text-lg font-normal mt-3 gap-2">
            <div className=" flex items-center justify-center">
              <FaCheck className="text-[#00a857]" />
            </div>
            <div className="m-0 text-start ">
              Reduzir o estresse e ansiedade em situações cruciais.
              
            </div>
          </div>
        </div>

        <Button title="ver nossos momentos" />
      </div>
      <div className="mx-56 max-lg:mx-4 mt-10 flex flex-col items-center">
        <div className="text-center text-lg">
          Se você leu todas as informações e{" "}
          <span className="font-bold">acredita</span> que é{" "}
          <span className="font-bold">seu momento</span> de ser{" "}
          <span className="font bold text-[#00a857] font-bold">aprovado no ENEM</span>, não
          deixe essa oportunidade passar!
        </div>
        <div>
          <div className="text-center mt-5 font-semibold text-3xl">
            TUDO QUE VOCÊ VAI{" "}
            <span className="text-secondaryColor">APRENDER:</span>
          </div>
        </div>
        <div>
          <div>
            
            <div className="bg-white px-6 py-6 mb-10 mt-10 w-96 rounded-2xl ">
              <div className="font-bold text-black text-2xl mb-6">
                Smart Memory
              </div>
              <div className="text-black flex flex-col gap-3 text-lg">
                <li>Metodologia Smart Memory</li>
                <li>Checklists para organização </li>
                <li>Conteúdos Enem 2024</li>
                <li>Dicas para estudos</li>
                <li>Dicas para estresse e ansiedade</li>
                <li>Ferramentas para estudo</li>
                <li>
                  Formas de estudos validadas por estudantes do Brasil e Europa
                </li>
              </div>

              <div className="text-black flex items-center flex-col text-center mt-4">
                <div>
                  De <span className="text-red-500 font-bold text-3xl line-through">R$64,95</span> por
                </div>
                <div className="text-6xl  font-bold text-[#00a857] animate-bounce mt-4">R$29,99</div>
              </div>
              <div className="mt-2">
                <Button title="ver nossos momentos" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

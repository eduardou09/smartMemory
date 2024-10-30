"use client";
import React from "react";
import Box from "../Box/box";
import { FaCheck, FaHeart } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import Button from "../Button/button";
const ForWho = ({ ref, serviceRef }: any) => {
  return (
    <div className="flex items-center flex-col justify-center mt-24 max-md:mt-10 max-md:mb-10 mx-56 max-lg:mx-4">
      <div className="text-3xl  mb-3 text-black font-bold max-md:text-center mt-5">
        O MELHOR E-BOOK DE ESTUDOS PARA O{" "}
        <span className="text-[#00a857]">ENEM!</span>
      </div>

      <div className={`flex flex-col gap-6 w-full items-center mb-10`}>
        <Box
          icon={<FaHeart />}
          title="Seu Jeito"
          text={
            <div>
              ESTUDE <span className="font-bold">ATÉ 8 HORAS</span> COM{" "}
              <span className="font-bold">TOTAL ABSORÇÃO E FOCO</span>!
            </div>
          }
        />
        <Box
          // isPhoto={true}
          icon={<FaHeart />}
          title="Seu Companheirismo"
          text={
            <div>
              {" "}
              <span className="font-bold">PASSE COM CONFIANÇA NO ENEM</span> E
              NOS VESTIBULARES
            </div>
          }
        />
        <Box
          icon={<FaHeart />}
          title="Seu Sorriso"
          text={
            <div>
              {" "}
              ESTRATÉGIA <span className="font-bold">VALIDADA</span>{" "}
            </div>
          }
        />
      </div>
      <div>
        <div className="text-3xl  mb-3 text-black font-bold max-md:text-center mt-5">
       <div className="text-center">
       PRINCIPAIS <span className="text-[#00a857]">BENEFÍCIOS:</span>
        </div>  
          <div className="flex  text-lg font-normal mt-3 gap-2">
            <div className=" flex items-center justify-center">
              <FaCheck  className="text-[#00a857]"/>
            </div>
            <div className="m-0 text-start ">
              O método Smart Memory permite você maximizar sua capacidade
              de memorização.
            </div>
          </div>
          <div className="flex  text-lg font-normal mt-3 gap-2">
            <div className=" flex items-center justify-center">
              <FaCheck  className="text-[#00a857]"/>
            </div>
            <div className="m-0 text-start ">
            Checklist para se organizar melhor.
            </div>
          </div>
          <div className="flex  text-lg font-normal mt-3 gap-2">
            <div className=" flex items-center justify-center">
              <FaCheck  className="text-[#00a857]"/>
            </div>
            <div className="m-0 text-start ">
            Saber quais os principais conteúdos do ENEM.
            </div>
          </div>
          <div className="flex  text-lg font-normal mt-3 gap-2">
            <div className=" flex items-center justify-center">
              <FaCheck  className="text-[#00a857]"/>
            </div>
            <div className="m-0 text-start ">
            Ferramentas de estudos.
            </div>
          </div>
          <div className="flex  text-lg font-normal mt-3 gap-2">
            <div className=" flex items-center justify-center">
              <FaCheck  className="text-[#00a857]"/>
            </div>
            <div className="m-0 text-start ">
            Formas de estudos validadas por estudantes do Brasil e Europa.
            </div>
          </div>
        </div>
        <div className="mb-10">
        <Button
                title="ver nossos momentos"
                width="max-md:w-full"
               
              />
            </div>
      
      </div>
    </div>
  );
};

export default ForWho;

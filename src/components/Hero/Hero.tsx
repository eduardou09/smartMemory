"use client";
import React from "react";
import fotoLogo from "@/public/fotosSibele/logo.png";
import { IButton } from "@/interfaces/componets";
import Button from "../Button/button";
import Image from "next/image";
import foto from "@/public/fotosSibele/fotoAI.webp";
import fotoMobile from "@/public/fotosSibele/fotoAI.webp";
import { isMobile } from "react-device-detect";

const Hero = ({ handleScrollServiceButton }: any) => {
  return (
    <>
      {isMobile ? (
        <div className="flex justify-between mt-20 items-center max-md:mt-5 max-md:flex-col ">
          <div className="max-w-xl flex flex-col gap-6 ">
            <div className="w-10 h-10 flex  gap-3 mb-4 mt-10">
              <Image src={fotoLogo} alt="Imagem logo" />
              <div>
                {" "}
                Smart <span className="font-bold">Memory</span>
              </div>
            </div>
            <p className="text-white text-5xl font-bold  text-left  max-md:text-center  max-md:text-4xl mb-4">
            Você estuda e parece que{" "}
  <span className="text-secondaryColor">nada fica na cabeça?</span>
            </p>
            <p className="text-white text-xl max-md:text-center max-md:text-lg mb-1">
            Criei um E-book completo para quem está com<span className="font-bold"> dificuldade em estudar para o ENEM.</span> {" "}
            </p>
            <div>
         
          </div>
            <div className="text-xl mb-0">
              <Button
                title="ver nossos momentos"
                width="max-md:w-full"
                onClick={handleScrollServiceButton}
              />
            </div>
          </div>
          <div className="mt-10 w-full flex">
              {/* Usando a tag <Image> do Next.js com a largura especificada */}
              <Image
                src={isMobile ? fotoMobile : foto}
                alt="Imagem Hero"
                className="w-full max-md:mb-10 rounded-md"
              />
            </div>
        </div>
      ) : (
        <div className="flex justify-between mt-20 items-center max-md:mt-5 max-md:flex-col-reverse">
          <div className="max-w-xl flex flex-col gap-6 max-md:items-center">
            <div className="w-10 h-10 flex gap-3 mb-4 mt-1">
              <Image src={fotoLogo} alt="Imagem logo" />
              <div>
                {" "}
                Smart <span className="font-bold">Memory</span>
              </div>
            </div>
            <p className="text-white text-5xl font-bold  text-left  max-md:text-center  max-md:text-4xl mb-10">
              Está muito {" "}
              <span className="text-secondaryColor mb-">difícil estudar </span> para o {" "}
              <span className="text-secondaryColor">ENEM?</span> 
            </p>
            <p className="text-[#EEEEEE] text-xl max-md:text-center max-md:text-lg mb-10">
              Criei um E-book completo para quem estuda e parece que nada fica na cabeça {" "}
            </p>
            <div className="text-xl ">
              <Button
                title="ver nossos momentos"
                width="max-md:w-full"
                onClick={handleScrollServiceButton}
              />
            </div>
          </div>
          <div>
            <div className="mr-32">
              {/* Usando a tag <Image> do Next.js com a largura especificada */}
              <Image
                src={isMobile ? fotoMobile : foto}
                alt="Imagem Hero"
                className=" h-96 w-96 max-md:mb-10 rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;

"use client";
import React from "react";
import fotoLogo from "@/public/fotosSibele/fotoEbook.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import custom Swiper styles
import "../../app/swiperCustom.css"; // Importa o CSS personalizado
import Image from "next/image";

const Service = ({ serviceRef }: any) => {
  return (
    <div
      id="servico"
      className="mb-10 rounded-2xl mt-10  md:p-1 max-md:"
    >
      <div className="text-3xl  mb-3 text-white font-bold max-md:text-center mt-5">
        ESSA METODOLOGIA É O QUE FALTAVA PARA VOCÊ PASSAR NO{" "}
        <span className="text-secondaryColor">ENEM!</span>
      </div>
      <Image src={fotoLogo} alt="Imagem logo" />
    </div>
  );
};

Services: [
  {
    title: "Desenvolvimento de Software",
    text: "Desenvolvimento de softwares do zero, Desde a validação da ideia até a implantação",
    timeLine: ["Discovery", "Design", "Desenvolvimento", "Implantação"],
  },
];

export default Service;

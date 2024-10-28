"use client";
import React from "react";
import Link from "next/link";
import { IButton } from "@/interfaces/componets";

const Button = ({
  title,
  width,
  padding = "py-1",
  onClick,
  radius = "rounded-3xl",
}: IButton) => {
  return (
    <Link href={"https://pay.kirvano.com/ef582c9e-6a1c-403b-8876-5ff647a041a3"} target="_blank" className="flex w-full">
      <div className="relative w-full ">
        {/* Bolinha pulsante */}
        {/* Bolinha pulsante */}
        <span className="absolute left-full -ml-[30px] -mt-[10px] flex h-8 w-8">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-8 w-8  bg-red-600"></span>
        </span>

        {/* Botão */}
        <button
          type="button"
          className={`${width} ${padding} bg-secondaryColor px-8 text-black font-semibold rounded-xl  py-3 w-full max-md:text-base ${radius} underline`}
        >
          QUERO GARANTIR MEU E-BOOK
        </button>
      </div>
    </Link>
  );
};

export default Button;

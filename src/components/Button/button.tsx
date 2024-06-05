
"use client"
import React from 'react';
import Link from 'next/link';
import { IButton } from '@/interfaces/componets';

const Button = ({ title, width, padding = "py-1", onClick, radius = "rounded-3xl", }: IButton) => {
  return (
 
      <button type="button" className={`${width} ${padding} bg-primaryColor text-black px-8 rounded-3xl max-md:text-lg ${radius}`} onClick={onClick}>
        {title}
      </button>
    
  );
}

export default Button;

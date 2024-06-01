

"use client"
import React from 'react';

import { IButton } from '@/interfaces/componets';


const Button = ({title, width, padding = "py-1"}:IButton) => {
  return (
    <button type="button" className={`${width} ${padding} bg-primaryColor text-black  px-8 rounded-3xl max-md:text-lg`}>
        {title}
    </button>
  );
}

export default Button;
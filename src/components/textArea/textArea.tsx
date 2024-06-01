"use client"

import { ITextArea } from '@/interfaces/componets';
import React, { useState } from 'react';



const TextArea = ({placeholder}:ITextArea) => {
    return(
        <div className='flex'>
           <textarea
  name=""
  id=""
  cols={parseInt("20")} // Convertendo a string "20" para um número usando parseInt
  rows={10} // Este é um número, então não há necessidade de conversão
  placeholder={placeholder}
  className="px-4 py-1 border border-white rounded-xl hover:border-primaryColor bg-transparent flex-1"
>
</textarea>
        </div>
    )


}
export default TextArea
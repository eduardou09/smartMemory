"use client";
import ForWho from '@/components/ForWho/ForWho';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import GridBoxes from '@/components/PartGrid/Grid';
import Service from '@/components/Services /services';
import { supabase } from '@/config/supabaseClient';
import useStoreMain from '@/utils/stateSite';
import { Router } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

const Home = () => {



  // Inicializa o estado com um objeto vazio
  const [forms, setForms] = useState<any>({});
  const { isHeader, setIsHeader, form } = useStoreMain();

  useEffect(() => {
    loadForm();
  }, []);

  const loadForm = async () => {
    const { data, error } = await supabase
      .from('form')
      .select();
    console.log(data)
    if (error) {
      console.error(error);
      return;
    }
    setForms(data)
  };

  const serviceRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const handleScrollService = () => {
    serviceRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsHeader(!isHeader)
  };
  const handleScrollAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsHeader(!isHeader)
  };

  const handleClick = () => {
    setIsHeader(!isHeader)
  }



  return (

    <div>
      <Header
        serviceRef={serviceRef}
        handleScrollService={handleScrollService}
        isHeader={isHeader}
        handleClick={handleClick}
        handleScrollAbout={handleScrollAbout}
      />
      <div className='mx-56 max-lg:mx-4'>
        <Hero 
         handleScrollService={handleScrollService}
        />
        <ForWho 
        serviceRef={serviceRef}
        
        />
        <Service
         // serviceRef={serviceRef}

        />
        <GridBoxes 
         aboutRef={ aboutRef}
        />
      </div>
    </div>
  );
}

export default Home;

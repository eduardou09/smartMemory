"use client";
import ForWho from '@/components/ForWho/ForWho';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import GridBoxes from '@/components/PartGrid/Grid';
import Service from '@/components/Services /services';
import { supabase } from '@/config/supabaseClient';
import useStore from '@/utils/stateSite';
import { Router } from 'next/router';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const { form, setIsHeader } = useStore(); // Chame o hook useStore aqui


  // Inicializa o estado com um objeto vazio
  const [forms, setForms] = useState<any>({});
  

    useEffect(() => {
        loadForm ();
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

    

      console.log(forms)
  return (
    <div>
      <Header  
      
      />
      <div className='mx-56 max-lg:mx-4'>
        <Hero />
        <ForWho />
        <Service />
        <GridBoxes />
      </div>
    </div>
  );
}

export default Home;

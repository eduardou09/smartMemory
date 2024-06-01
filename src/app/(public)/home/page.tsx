"use client"
import  ForWho  from '@/components/ForWho/ForWho';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import GridBoxes from '@/components/PartGrid/Grid';
import { useStore } from "zustand";
import Service from '@/components/Services /services';
import React, { useState } from 'react';



const Home = (

  
) => {
    return(
        <div>
            <Header/>
            <div className='mx-56 max-lg:mx-4 '>
            <Hero/>
            <ForWho/>
            <Service/>
            <GridBoxes />
            </div>
        </div>
    )


}
export default Home
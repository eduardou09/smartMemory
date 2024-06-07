"use client"
import Header from "@/components/Header/Header"
import Input from "@/components/Input/input"
import TextArea from "@/components/textArea/textArea"
import { ChangeEvent, useRef, useState } from "react"
import useStore from "@/utils/containerForm"
import Button from "@/components/Button/button"
import { supabase } from "@/config/supabaseClient"
import useStoreMain from "@/utils/stateSite"



const Contact = () => {
    // const { values, setValues } = useStore();
   
    const [value, setValue] = useState<any>({
        name: "",
        email: "",
        number: "",
        about: "",
        software: false,
        site: false,
        mentorship: false,
        trafficManagement: false,
        softwareMaintenance: false,
    });
    const { isHeader, setIsHeader, form } = useStoreMain();
    const handleChange = (field: any, value: string) => {
        setValue((prevState: any) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleServiceChange = (service: string) => {
        setValue((prevState:any) => ({
            ...prevState,
            [service]: !prevState[service]
        }));
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission
        await SaveForm({...value});
        setValue({
            name: '',
            email: '',
            number: '',
            about: '',
          
        });

      
    }

    const SaveForm = async (values: any) => {
        if(values){
            return await supabase
            .from('form')
            .insert({ ...values })
            .eq('id', values.id); // S
        }
    }


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
            <div className='mx-56 max-lg:mx-4 h-screen flex items-center max-md:mt-4'>
                <div className="w-full flex bg-primaryColor max-h-fit rounded-3xl p-3  max-md:flex-col">
                    <div className="flex items-center max-md:hidden ">
                        <h2 className="text-5xl text-black font-semibold max-md:text-3xl ">
                            Olá! O que você
                            busca para sua
                            empresa ?
                        </h2>
                    </div>
                    <div>
                        <div className=" bg-secondaryColor rounded-3xl">
                            <form action="" className="flex flex-wrap gap-2 p-5 flex-col" >
                                <h3 className="text-2xl font-semibold">Entre em Contato</h3>
                                <p className="mt-4">Selecione o Serviço</p>
                                <div className="flex flex-wrap gap-5 max-md:gap-3">
                                    <button type="button" className={`px-4 py-1 border rounded-xl text-lg ${value.software ? 'border-primaryColor' : 'border-white'}`}
                                    onClick={() => handleServiceChange('software')}>
                                    Software</button>
                                    
                                    <button type="button" className={`px-4 py-1 border rounded-xl text-lg ${value.site ? 'border-primaryColor' : 'border-white'}`}
                                    onClick={() => handleServiceChange('site')}>
                                    Site</button>

                                    <button type="button" className={`px-4 py-1 border rounded-xl text-lg ${value.mentorship ? 'border-primaryColor' : 'border-white'}`}
                                    onClick={() => handleServiceChange('mentorship')}>
                                    Mentoria para empresas</button>

                                    <button type="button" className={`px-4 py-1 border rounded-xl text-lg ${value.trafficManagement ? 'border-primaryColor' : 'border-white'}`}
                                    onClick={() => handleServiceChange('trafficManagement')}>
                                    Gestão de trafego</button>

                                    <button type="button" className={`px-4 py-1 border rounded-xl text-lg ${value.softwareMaintenance ? 'border-primaryColor' : 'border-white'}`}
                                    onClick={() => handleServiceChange('softwareMaintenance')}>
                                    Manutenção de software</button>
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    Conte-nos mais sobre
                                    <TextArea
                                        placeholder="Conte-nos mais sobre sua nescessidade" 
                                         value={value.about || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("about", e.target.value)}
                                        />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Input
                                        type="text"
                                        placeholder="Digite seu nome"
                                        label="Nome"
                                        value={value.name || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("name", e.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        placeholder=" Digite se número"
                                        label="Número"
                                        value={value.number || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("number", e.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        label="Email"
                                        placeholder="Digite se email"
                                        value={value.email || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
                                    />

                                   <Button 
                                    title="Enviar" 
                                    padding="py-3"
                                    radius="rounded-xl" 
                                    onClick={ handleSave}
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Contact
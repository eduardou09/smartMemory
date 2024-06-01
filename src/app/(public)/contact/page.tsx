"use client"
import Header from "@/components/Header/Header"
import TextArea from "@/components/textArea/textArea"


const Contact = (


) => {
    return (
        <div>
            <Header />
            <div className='mx-56 max-lg:mx-4 h-screen flex items-center'>
                <div className="w-full flex bg-primaryColor max-h-fit rounded-3xl p-3">
                    <div className="flex items-center ">
                        <h2 className="text-5xl text-textColorSecondary font-semibold">
                            Olá! O que você
                            busca para sua
                            empresa ?
                        </h2>
                    </div>
                    <div>
                        <div className=" bg-secondaryColor rounded-3xl">
                            <form action="" className="flex flex-wrap gap-2 p-5 flex-col">
                                <h3 className="text-2xl font-semibold">Entre em Contato</h3>
                                <p className="mt-4">Selecione o Serviço</p>
                                <div className="flex flex-wrap gap-5 ">
                                    <button type="button" className="px-4 py-1 border border-white rounded-xl hover:border-primaryColor text-lg "  >Software</button>
                                    <button type="button" className="px-4 py-1 border border-white rounded-xl hover:border-primaryColor text-lg">Site</button>
                                    <button type="button" className="px-4 py-1 border border-white rounded-xl hover:border-primaryColor text-lg">Mentoria para empresas</button>
                                    <button type="button" className="px-4 py-1 border border-white rounded-xl hover:border-primaryColor text-lg">Gestão de trafego</button>
                                    <button type="button" className="px-4 py-1 border border-white rounded-xl hover:border-primaryColor text-lg">Manutenção de software</button>   
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    Conte-nos mais sobre
                                    <TextArea 
                                    placeholder="Conte-nos mais sobre sua nescessidade"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Nome" />
                                    <input type="text" placeholder="Email" />
                                    <input type="text" placeholder="Telefone" />
                                    <input type="text" placeholder="Assunto" />
                                    <textarea placeholder="Mensagem"></textarea>
                                    <button>Enviar</button>
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
import Image from "next/image"
import fachada from "../../../public/fachada.jpeg"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About(){
    return(
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                        src={fachada}
                        alt="Imagem Sobre 01"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority
                    />
                </div>

                <div className="space-y-6 mt-3 ">
                        <h1 className="text-4xl font-bold">Nossa Igreja</h1>
                        <p>
                        Somos uma Igreja de identidade Reformada. Prezamos pelo ensino correto e fiel da Bíblia Sagrada, a qual é nossa única regra de fé e prática,

                        e o Evangelho de Cristo Jesus, o qual nasceu, morreu e ressuscitou; e brevemente voltará para buscar os seus filhos. <br/><br/>

                        Faça-nos uma visita! Você e sua família serão acolhidos e certamente aprenderão mais do Senhor Jesus. Lembre-se, apenas 
                        Cristo pode te dar vida Eterna e transformar a sua vida!
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 font-bold"><Check className="text-green-950"/>Reunião de Oração - Todas as Quartas a partir das 20h</li>
                            <li className="flex items-center gap-2 font-bold"><Check className="text-green-950"/>Escola Dominical - Todos os Domingos a partir das 17h</li>
                            <li className="mb-10 flex items-center gap-2 font-bold"><Check className="text-green-950"/>Culto da Familia - Todos os Domingos a partir das 18h30</li>
                        </ul>
                        
                        <div className="flex gap-2">
                        <a href="https://wa.me/5511914315524?text=Olá, vim pelo site e gostaria de mais informações sobre a igreja." target="_blank" className="bg-green-500 text-white flex items-center justify-center ml-5 w-50 gap-2 px-4 py-2 rounded-md">
                            <WhatsappLogo className="w-8 h-6 text-white"/>
                            Contato via Whatsapp! 
                        </a>

                        <a href="https://maps.app.goo.gl/y3QZMu1VgBsh8Xcz9" target="_blank" className=" text-black flex items-center justify-center w-fit gap-2 px-4 py-4 rounded-md">
                            <MapPin className="w-8 h-6"/>
                            Onde Estamos! 
                        </a>
                        </div>

                </div>

                </div>
            </div>
        </section>  
    )
}
import logoBranco from "../../../public/logoBranco.png"
import logoConsagracao from "../../../public/LogoConsagracao.png"
import Image from "next/image"
import { Inter } from 'next/font/google'

const mainFontFamily = Inter ({
    weight: ['300', '400', '700'],
    subsets: ["latin"]
})
export function Hero(){
    return(
        <body className={(mainFontFamily).className}>      
        <section className="bg-[#015b42] text-white relative overflow-hidden">
            <div>
                <Image 
                    src={logoBranco}
                    alt="Imagem"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover opacity-20 lg:hidden"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className=" container mx-auto pt-16 pb-16 md:pb-0 px-16 py-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                    <div>
                        <Image 
                            src={logoConsagracao}
                            alt="logo"
                            width={100}
                            height={100}
                            className="mb-10"
                        />
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-10">Igreja Presbiteriana Consagração</h1>
                        <p className="mt-5 mb-10 lg:text-lg"><b>2 Coríntios 5:17</b> - E, assim, se alguém está em Cristo, é nova criatura; as coisas antigas já passaram; 
                        eis que se fizeram novas.</p>
                    </div>
                    <div className="hidden md:block h-full">
                        < Image 
                            src={logoBranco} 
                            alt="Imagem" 
                            className="object-contain md:hidden lg:block ml-100"
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"                            
                        />
                    </div>
                </article>
            </div>
        </section>
        </body>
    )
}
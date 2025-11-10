import Image from "next/image"
import pastorImage from "../../../public/pastor.jpg"
import { Inter } from 'next/font/google'

const mainFontFamily = Inter ({
    weight: ['300', '400', '700'],
    subsets: ["latin"]
})

export  function Pastor(){
    return (
        <body className={(mainFontFamily).className}>


        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                    <h2 className="text-4xl font-bold">Nosso Pastor</h2>
                    <p>
                       Pastor Josimar Miranda é bacharel em teologia,
                       possui especialização em Teologia Sistemática e
                       Bíblica pelo Centro Presbiteriano de Pós-graduação
                       Andrew Jumper. Casado com Rita há mais de 15 anos,
                       com quem tem dois filhos, Calebe e Ester.
                    </p>
                </div>
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                        src={pastorImage}
                        alt="foto do pastor"
                        className="object-cover hover:scale-110 duration-300"
                        fill
                        quality={100}
                        priority
                    />
                </div>

                </div>


            </div>
        </section>
        </body>
    )
}

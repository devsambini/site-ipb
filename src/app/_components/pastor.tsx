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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatem voluptatum dicta quam. Sit, consectetur veniam 
                        dolorum deleniti veritatis distinctio reiciendis earum 
                        odio sed itaque numquam tempore velit. Repellendus, numquam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatem voluptatum dicta quam. Sit, consectetur veniam 
                        dolorum deleniti veritatis distinctio reiciendis earum 
                        odio sed itaque numquam tempore velit. Repellendus, numquam.
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
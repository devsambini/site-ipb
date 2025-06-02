"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Inter } from 'next/font/google'

const mainFontFamily = Inter({
    weight: ['300', '400', '700'],
    subsets: ["latin"]
})

import img01 from "../../../public/galeria/img01.jpg"
import img02 from "../../../public/galeria/img02.jpg"
import img04 from "../../../public/galeria/img04.jpg"
import img05 from "../../../public/galeria/img05.jpg"
import img06 from "../../../public/galeria/img06.jpg"
import img07 from "../../../public/galeria/img07.jpg"
import img08 from "../../../public/galeria/img08.jpg"
import img09 from "../../../public/galeria/img09.jpg"
import img10 from "../../../public/galeria/img10.jpg"
import img11 from "../../../public/galeria/img11.jpg"
import img12 from "../../../public/galeria/img12.jpg"
import img13 from "../../../public/galeria/img13.jpg"
import img14 from "../../../public/galeria/img14.jpg"
import img15 from "../../../public/galeria/img15.jpg"
import img16 from "../../../public/galeria/img16.jpg"
import img17 from "../../../public/galeria/img17.jpg"
import img18 from "../../../public/galeria/img18.jpg"
import img19 from "../../../public/galeria/img19.jpg"
import img20 from "../../../public/galeria/img20.jpg"
import img21 from "../../../public/galeria/img21.jpg"
import img22 from "../../../public/galeria/img22.jpg"
import img23 from "../../../public/galeria/img23.png"
import img24 from "../../../public/galeria/img24.png"
import img25 from "../../../public/galeria/img25.jpg"
import img26 from "../../../public/galeria/img26.png"
import img27 from "../../../public/galeria/img27.png"
import img28 from "../../../public/galeria/img28.png"

const fotos = [
    { image: img01 },
    { image: img02 },
    { image: img04 },
    { image: img05 },
    { image: img06 },
    { image: img07 },
    { image: img08 },
    { image: img09 },
    { image: img10 },
    { image: img11 },
    { image: img12 },
    { image: img13 },
    { image: img14 },
    { image: img15 },
    { image: img16 },
    { image: img17 },
    { image: img18 },
    { image: img19 },
    { image: img20 },
    { image: img21 },
    { image: img22 },
    { image: img23 },
    { image: img24 },
    { image: img25 },
    { image: img26 },
    { image: img27 },
    { image: img28 }
]

export function Galery() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })
    function scrollPrev() {
        emblaApi?.scrollPrev()
    }
    function scrollNext() {
        emblaApi?.scrollNext()
    }
    return (
        <body className={(mainFontFamily).className}>
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12">Galeria de Fotos</h2>
                    <div className="relative">

                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className="flex">
                                {fotos.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                        <article className=" space-y-4 h-full flex flex-col">
                                            <div className="flex flex-col items-center space-y-6">
                                                <div className="relative">
                                                    <Image
                                                        className="object-cover rounded-2xl h-100"
                                                        src={item.image}
                                                        alt="galeria"
                                                        width={600}
                                                        height={400}                                                        
                                                    />
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}


                            </div>
                        </div>

                        <button
                            className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg absolute left-2 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                            onClick={scrollPrev}>
                            <ChevronLeft className="w-6 h-6 text-gray-600"
                            />
                        </button>

                        <button
                            className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg absolute -right-8 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                            onClick={scrollNext}>
                            <ChevronRight className="w-6 h-6 text-gray-600"
                            />
                        </button>

                    </div>
                </div>
            </section>
        </body>
    )
}
"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import encontroCasais from "../../../public/nextEventsImages/encontroCasais.png";
import mulheres from "../../../public/nextEventsImages/mulheres.png";
import Image from 'next/image'

const events = [
    {
        content: "Chá de Mulheres",
        data: "Sábado dia 24/05/2025",
        role: "Você mulher está convidada para participar desse momento poderoso na presença do Senhor. Venha e traga convidadas para participar conosco.",
        image: mulheres
    },
    {
        content: "Encontro de Casais",
        data: "Sábado dia 14/06/2025",
        role: "Palestrante: Rev. Thiago Naruse. Venha participar conosco, e tenha sua vida matrimonial transformada pelo poder de Deus. Investimento de R$50,00 por casal.",
        image: encontroCasais
    }

]

export function NextEvents() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    })


    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold text-center mb-12">Próximos Eventos</h2>

                <div className="relative max-w-4xl mx-auto">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {events.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-[#002D21] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image
                                                src={item.image}
                                                alt='fotos'
                                                sizes='100px'
                                                fill
                                                className='object-cover rounded-full'
                                                
                                            />
                                            </div>
                                            
                                            <p className='text-2xl'>{item.content}</p>

                                            <div>
                                                <p className='font-bold -mt-3'>{item.data}</p>
                                                <p className='mt-3 mb-3'>{item.role}</p>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className='w-4 h-4 text-gray-600' />
                    </button>

                    <button
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollNext}
                    >
                        <ChevronRight className='w-4 h-4 text-gray-600' />
                    </button>

                </div>

            </div>
        </section>
    )
}
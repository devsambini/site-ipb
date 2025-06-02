import { Hero } from "../app/_components/hero"
import { About } from './_components/about'
import { Galery } from "./_components/galery"
import { Pastor } from "./_components/pastor"
import { NextEvents } from "./_components/nextEvents"
import { Footer } from "./_components/footer"
import { register } from "swiper/element/bundle"

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function Home(){
  return(
    <main>
     <Hero />
     <About />
     <Galery />
     <Pastor />
     <NextEvents />
     <Footer />
    </main>
  )
}
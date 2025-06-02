import { Hero } from "../app/_components/hero"
import { About } from './_components/about'
import { Galery } from "./_components/galery"
import { Pastor } from "./_components/pastor"
import { NextEvents } from "./_components/nextEvents"
import { Footer } from "./_components/footer"


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
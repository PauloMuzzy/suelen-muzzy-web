'use client'

import { Button, Image } from '@nextui-org/react'

export default function StartSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-[16px] w-full custom-background-image container-section">
      <Image
        width={240}
        alt="NextUI Fruit Image with Zoom"
        src="/assets/suelen.jpeg"
        shadow="lg"
      />
      <h1 className="text-4xl font-[400] w-full text-center text-quintenary">
        Bem - vindo!
      </h1>
      <p className="w-full h-fit text-[14px] font[300] text-center text-quintenary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        sagittis nibh tellus, in mollis nunc consectetur sed. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.
      </p>
      <Button size="lg" className="bg-primary shadow-xl text-quintenary">
        Quero agendar uma consulta
      </Button>
    </section>
  )
}

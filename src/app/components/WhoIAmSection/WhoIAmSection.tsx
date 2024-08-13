'use client'

import { Button } from '@nextui-org/react'

export default function WhoIAmSection() {
  return (
    <section className="flex flex-col items-start justify-center gap-6 w-full bg-secondary container-section">
      <h1 className="text-[32px] font-normal w-full text-left text-quintenary">
        Quem sou eu?
      </h1>
      <div className="flex flex-col items-start justify-center w-full h-fit">
        <span className="w-full h-fit text-[20px] text-start text-quintenary">
          Suelen dos Santos Muzzy
        </span>
        <span className="w-full h-fit text-[16px] text-start text-quintenary">
          CRM 00/00000000
        </span>
      </div>
      <p className="w-full h-fit text-[14px] text-start text-quintenary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        sagittis nibh tellus, in mollis nunc consectetur sed. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Etiam eros nisl, imperdiet id elementum suscipit, blandit ut
        sem. Quisque convallis mattis nunc, sit amet dictum nibh finibus id.
        <br />
        <br />
        Mauris imperdiet diam nunc, ac sagittis lectus vehicula mattis. Sed eget
        massa at nunc dignissim congue. Vivamus sit amet vulputate nunc. Morbi
        commodo congue enim id sagittis. Nullam et sagittis augue. Aliquam
        auctor ultrices lectus ut tempus.
      </p>
      <Button size="lg" className="bg-senary shadow-xl text-quintenary">
        Quero agendar uma consulta
      </Button>
    </section>
  )
}

'use client'

import { Button } from '@nextui-org/react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

export default function ContactSection() {
  return (
    <section className="flex flex-col items-start justify-center gap-6 w-full bg-secondary container-section">
      <span className="w-full h-fit text-[32px] text-start text-quintenary">
        Entre em contato
      </span>
      <h1 className="text-[20px] font-normal w-full text-left text-quintenary">
        Ainda ficou alguma dúvida?
      </h1>

      <Button
        size="lg"
        className="bg-senary shadow-xl text-quintenary w-full h-[100px] p-2"
      >
        <FaWhatsapp size={48} color={'#B49D8B'} className="m-3" />
        <div className="flex flex-col items-start justify-between w-full">
          <span className="text-[20px] font-normal w-full text-left text-quintenary">
            WhatsApp
          </span>
          <span className="text-[16px] font-normal w-full text-left text-quintenary">
            (67)91111-1111
          </span>
          <span className="text-[12px] font-normal w-full text-left text-quintenary">
            Seg a sáb 08:00h às 18:00h
          </span>
        </div>
      </Button>
      <Button
        size="lg"
        className="bg-senary shadow-xl text-quintenary w-full h-[100px] p-2"
      >
        <MdOutlineEmail size={48} color={'#B49D8B'} className="m-3" />
        <div className="flex flex-col items-start justify-between w-full">
          <span className="text-[20px] font-normal w-full text-left text-quintenary">
            Email
          </span>
          <span className="text-[16px] font-normal w-full text-left text-quintenary">
            email@gmail.com
          </span>
        </div>
      </Button>
    </section>
  )
}

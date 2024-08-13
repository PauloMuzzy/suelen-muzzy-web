'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

export default function DoubtsSection() {
  const doubts = [
    {
      question: 'Qual é a cor do cavalo do Napoleão?',
      response:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'Quem matou Lineu?',
      response:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'Cleitinho vem?',
      response:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]

  return (
    <section className="flex flex-col items-start justify-center gap-6 w-full bg-quaternary container-section">
      <h1 className="text-[32px] font-normal w-full text-left text-quintenary">
        Dúvidas frequentes
      </h1>
      <p className="w-full h-fit text-[16px] text-start text-quintenary">
        As principais dúvidas relacionadas à consulta, agendamento e muito mais.
      </p>

      <Accordion variant="splitted" className="p-0">
        {doubts.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              aria-label="Accordion 1"
              title={
                <span className="w-full h-fit text-[14px] text-start text-quintenary">
                  {item.question}
                </span>
              }
              className="bg-primary shadow-lg text-sm"
            >
              <span className="w-full h-fit text-[12px] text-start text-quintenary">
                {item.response}
              </span>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}

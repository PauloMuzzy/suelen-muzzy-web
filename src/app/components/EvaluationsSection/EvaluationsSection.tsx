'use client'

import { Divider } from '@nextui-org/react'
import { FaStar } from 'react-icons/fa6'
import { RiDoubleQuotesR } from 'react-icons/ri'

export default function EvaluationsSection() {
  const list = [
    {
      name: 'J.P.',
      evaluation:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce mollis odio in massa mollis, nec vulputate nunc imperdiet. Morbi ullamcorper consectetur semper. Duis suscipit mauris neque, a blandit nisi blandit nec. Integer quis egestas velit, sed interdum risus.Morbi et ultrices diam. Aliquam sollicitudin dui aliquam malesuada laoreet.',
    },
    {
      name: 'A.P.',
      evaluation:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce mollis odio in massa mollis, nec vulputate nunc imperdiet. Morbi ullamcorper consectetur semper. Duis suscipit mauris neque, a blandit nisi blandit nec. Integer quis egestas velit, sed interdum risus.Morbi et ultrices diam. Aliquam sollicitudin dui aliquam malesuada laoreet.',
    },
    {
      name: 'A.P.',
      evaluation:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce mollis odio in massa mollis, nec vulputate nunc imperdiet. Morbi ullamcorper consectetur semper. Duis suscipit mauris neque, a blandit nisi blandit nec. Integer quis egestas velit, sed interdum risus.Morbi et ultrices diam. Aliquam sollicitudin dui aliquam malesuada laoreet.',
    },
  ]

  return (
    <section className="flex flex-col items-start justify-center gap-6 w-full bg-quaternary container-section">
      <h1 className="text-[32px] font-normal w-full text-left text-quintenary">
        Avaliação dos nossos pacientes
      </h1>
      {list.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="flex flex-col items-start gap-4 w-full h-fit"
        >
          <RiDoubleQuotesR color="#8C7E74" size={24} />
          <span className="text-[16px] text-start text-quintenary">
            {item.name}
          </span>
          <div className="flex flex-row items-start justify-start gap-2">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color="#D3B379" size={20} />
            ))}
          </div>
          <span className="text-[14px] text-start text-quintenary">
            {item.evaluation}
          </span>
          {index + 1 < list.length && <Divider />}
        </div>
      ))}
    </section>
  )
}

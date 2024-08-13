'use client'

import { Image } from '@nextui-org/react'

export default function OurServicesSection() {
  const listServicesImages = [
    {
      src: '/assets/services1.png',
      alt: 'Imagem de terapia',
      description: 'Terapia',
    },
    {
      src: '/assets/services2.png',
      alt: 'Imagem de terapia',
      description: 'Terapia',
    },
    {
      src: '/assets/services3.png',
      alt: 'Imagem de terapia',
      description: 'Terapia',
    },
    {
      src: '/assets/services4.png',
      alt: 'Imagem de terapia',
      description: 'Terapia',
    },
    {
      src: '/assets/services5.png',
      alt: 'Imagem de terapia',
      description: 'Terapia',
    },
  ]

  return (
    <section className="flex flex-col items-center justify-center gap-6 w-full bg-secondary container-section">
      <h1 className="text-[32px] font-normal w-full text-center text-quintenary">
        Nossos serviços
      </h1>
      <div className="flex flex-col items-center justify-center w-full h-fit gap-[64px]">
        {listServicesImages.map((service, index) => (
          <div
            className="flex flex-col items-center justify-center w-full h-fit gap-[16px]"
            key={`${service.src}-${index}`}
          >
            <Image
              isZoomed
              width={164}
              alt={service.alt}
              src={service.src}
              shadow="lg"
            />
            <span className="w-full h-fit text-[14px] font[300] text-center text-quintenary">
              {service.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

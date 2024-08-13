'use client'
import { Button, Image } from '@nextui-org/react'
import { FaInstagram } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'

export default function InstagramSection() {
  const listServicesImages = [
    {
      src: '/assets/suelen.jpeg',
      alt: 'Imagem de terapia',
      description: 'Terapia',
    },
    {
      src: '/assets/suelen02.jpeg',
      alt: 'Imagem de terapia',
      description: 'Terapia',
    },
    {
      src: '/assets/suelen03.jpeg',
      alt: 'Imagem de terapia',
      description: 'Terapia',
    },
    {
      src: '/assets/suelen.jpeg',
      alt: 'Imagem de terapia',
      description: 'Terapia',
    },
    {
      src: '/assets/suelen02.jpeg',
      alt: 'Imagem de terapia',
      description: 'Terapia',
    },
  ]

  return (
    <section className="flex flex-col items-start justify-center gap-6 w-full bg-secondary container-section">
      <h1 className="text-[32px] font-normal w-full text-left text-quintenary">
        Conheça meu Instagram
      </h1>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        onClickItem={() => console.log('chamou')}
        infiniteLoop
        autoPlay
        interval={3000}
        className="max-w-full"
      >
        {listServicesImages.map((service, index) => (
          <div
            className="flex flex-col items-center justify-center w-full h-fit gap-[16px] p-2"
            key={`${service.src}-${index}`}
          >
            <Image
              width={240}
              alt="NextUI Fruit Image with Zoom"
              src={service.src}
              shadow="sm"
            />
          </div>
        ))}
      </Carousel>

      <Button size="lg" className="bg-senary shadow-xl text-quintenary">
        <FaInstagram color="#010E21" size={24} />
        Instagram
      </Button>
    </section>
  )
}

'use client'

import { FaCheck } from 'react-icons/fa6'

export default function DoYouNeedTherapySection() {
  const list = [
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
  ]

  return (
    <section className="flex flex-col items-start justify-center gap-6 w-full bg-quaternary container-section">
      <h1 className="text-[32px] font-normal w-full text-left text-quintenary">
        Você precisa de terapia?
      </h1>
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
      {list.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="flex items-start gap-2 w-full h-fit"
        >
          <FaCheck color="#D7B5AE" />
          <span className="text-[14px] text-start text-quintenary">{item}</span>
        </div>
      ))}
    </section>
  )
}

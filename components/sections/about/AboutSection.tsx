import React from 'react'
import AboutText from './AboutText'

interface AboutSectionProps {
  leftText: string
  rightText: string
}

const AboutSection: React.FC<AboutSectionProps> = ({ leftText, rightText }) => {
  return (
    <section className='flex overflow-hidden text-left flex-col justify-center p-20 text-lg md:text-2xl tracking-wide leading-10 text-neutral-600 max-md:px-5 3xl:mt-6'>
      <div
        className='flex flex-col md:flex-row gap-10 items-start w-full max-md:max-w-full'
        id='#about'
      >
        <AboutText text={leftText} />
        <AboutText text={rightText} />
      </div>
    </section>
  )
}

export default AboutSection

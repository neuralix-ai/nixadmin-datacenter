import React from 'react'

interface AboutTextProps {
  text: string
}

const AboutText: React.FC<AboutTextProps> = ({ text }) => {
  return (
    <p className='flex-1 shrink basis-0 max-md:max-w-full leading-loose'>
      {text}
    </p>
  )
}

export default AboutText

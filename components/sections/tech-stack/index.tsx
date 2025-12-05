'use client'
import techStackAnimation from '@/app/lotties/stack.json'
import Lottie from 'lottie-react'

const TechStackSection = () => {
  return (
    <div
      className='flex items-center justify-center flex-col gap-y-20  w-[80%]'
      id='#tech-stack'
    >
      <h3 className='text-5xl font-semibold text-center'>
        State of the art <i className='text-primary'>AI technology </i> stack
      </h3>
      <Lottie animationData={techStackAnimation} />
    </div>
  )
}

TechStackSection.displayName = 'TechStackSection'
export default TechStackSection

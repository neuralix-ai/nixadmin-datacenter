import { solutionsData } from '@/constants/solution-section'
import React from 'react'
import SolutionCard from './SolutionCard'

const SolutionsSection: React.FC = () => {
  return (
    <section
      className='flex overflow-hidden flex-col w-[360px] md:w-full justify-center p-20 text-center border-t border-b border-solid bg-zinc-900 border-y-gray-200 max-md:px-5'
      id='#solutions'
    >
      <div className='relative'>
        <div className='flex flex-wrap max-md:max-w-full justify-center items-center'>
          <p className='sm:text-xl md:text-6xl max-md:text-4xl font-bold leading-none text-white '>
            Tailored AI Solutions for Your Business
          </p>
        </div>
        <div className='flex flex-wrap gap-10 justify-center items-start mt-10 w-full max-md:max-w-full'>
          {solutionsData.map((solution, index) => (
            <SolutionCard
              key={index}
              imageSrc={solution.imageSrc}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection

import Image from 'next/image'
import React from 'react'
interface SolutionCardProps {
  imageSrc: string
  title: string
  description: string
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <article className='flex overflow-hidden flex-col grow shrink items-center w-full md:w-[480px] rounded-2xl min-w-[240px] max-md:max-w-full'>
      <Image
        loading='lazy'
        src={imageSrc}
        alt=''
        width='20'
        height='20'
        className='object-contain w-20 rounded-lg aspect-square'
      />
      <div className='w-[350px] md:w-[375px]'>
        <h3 className='self-stretch mt-4 text-3xl font-bold leading-none text-white max-md:max-w-full'>
          {title}
        </h3>
      </div>
      <div className='w-[340px] md:w-[375px]'>
        <p className='mt-4 text-md tracking-wide leading-7 text-slate-300'>
          {description}
        </p>
      </div>
    </article>
  )
}

export default SolutionCard

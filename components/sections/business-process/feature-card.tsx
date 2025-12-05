import Image from 'next/image'
import React from 'react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  isActive: boolean
  onClick: () => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`flex overflow-hidden flex-col mt-6 w-full rounded-2xl max-md:max-w-full cursor-pointer ${
        isActive ? 'text-teal-900' : 'text-gray-500'
      }`}
      onClick={onClick}
    >
      <div className='flex flex-wrap gap-4 items-center w-full text-3xl font-bold leading-none text-[#7A8B8A] max-md:max-w-full transition ease-in-out delay-150 hover:text-teal-900 duration-300'>
        <Image
          src={icon}
          alt=''
          width='20'
          height='20'
          className={`object-contain shrink-0 self-stretch my-auto w-12 aspect-square" ${
            isActive ? 'text-teal-900' : 'text-gray-500'
          }`}
        />
        <h2
          className={`flex-1 shrink text-xl self-stretch my-auto basis-0 max-md:max-w-full ${
            isActive ? 'text-teal-900' : 'text-gray-500'
          }`}
        >
          {title}
        </h2>
      </div>
      {isActive && description && (
        <p className='mt-4 text-xl tracking-wide leading-7 text-neutral-600 max-md:max-w-full'>
          {description}
        </p>
      )}
    </div>
  )
}

export default FeatureCard

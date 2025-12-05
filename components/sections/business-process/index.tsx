import { featureData } from '@/constants/feature-section'
import Image from 'next/image'
import React, { useState } from 'react'
import FeatureCard from './feature-card'

const BusinessProcessOptimizationn: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0)

  return (
    <section
      className='flex overflow-hidden flex-col justify-center p-20 bg-gray-50 max-md:px-5'
      id='#features'
    >
      <h1 className='text-6xl font-bold text-center leading-[63px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]'>
        Utilizing the Power of <br /> Business Process Optimization
      </h1>
      <div className='flex flex-wrap gap-10 items-start mt-10 w-full max-md:max-w-full'>
        <Image
          src={featureData[selectedFeature].image}
          alt={featureData[selectedFeature].title}
          width={380}
          height={380}
          className='object-contain flex-1 rounded-2xl shrink w-full aspect-[1.29] basis-0 min-w-[240px] max-md:max-w-full'
        />
        <div className='flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full'>
          {featureData.map((feature, index) => (
            <React.Fragment key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={
                  index === selectedFeature ? feature.description : ''
                }
                isActive={index === selectedFeature}
                onClick={() => setSelectedFeature(index)}
              />
              {index < featureData.length - 1 && (
                <hr className='mt-6 w-full bg-gray-200 border border-gray-200 border-solid min-h-[1px] max-md:max-w-full' />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessProcessOptimizationn

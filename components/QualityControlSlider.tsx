'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const slides = [
  {
    id: 1,
    image: '/slide-1-high-upfront-investments.png',
    heading: 'High upfront investments',
    description:
      'Significant initial capital required for AI infrastructure and talent',
  },
  {
    id: 2,
    image: '/slide-2-no-assured-roi.png',
    heading: 'No assured return on investments',
    description:
      'Uncertainty in measuring and guaranteeing AI implementation benefits',
  },
  {
    id: 3,
    image: '/slide-3-integration-complexity.png',
    heading: 'Integration complexity',
    description: 'Difficulties merging AI with existing technology ecosystems',
  },
  {
    id: 4,
    image: '/slide-4-lack-of-standards.png',
    heading: 'Lack of industry standards',
    description:
      'Absence of unified frameworks for AI development and deployment',
  },
  {
    id: 5,
    image: '/slide-5-scalability-issues.png',
    heading: 'Scalability issues',
    description:
      'Challenges in expanding AI solutions across enterprise operations',
  },
  {
    id: 6,
    image: '/slide-6-defence-adaptability.png',
    heading: 'Defence-specific adaptability issues',
    description: 'Difficulties tailoring AI solutions to the Defence sector',
  },
]

export default function QualityControlSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className='relative w-full h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 text-slate-900 overflow-hidden p-12'>
      <div className='h-full flex flex-col'>
        <div className='flex-shrink-0 p-8 md:p-12 lg:p-16'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-4xl mb-8'>
              {currentSlideData.heading}
            </h1>
            <p className='text-lg md:text-xl text-slate-600 max-w-3xl'>
              {currentSlideData.description}
            </p>
          </div>
        </div>

        <div className='flex-1 relative overflow-hidden'>
          <div
            className='flex h-full transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className='w-full flex-shrink-0 px-8 md:px-12 lg:px-16 py-12'
              >
                <div className='max-w-6xl mx-auto h-full'>
                  <div className='flex flex-col items-center justify-center h-full w-full p-16'>
                    <div className='bg-white w-full rounded-2xl border border-slate-200 shadow-lg'>
                      <Image
                        src={slide.image}
                        alt={slide.heading}
                        width={1200}
                        height={800}
                        className='w-full h-auto rounded-2xl'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex-shrink-0 p-8 md:p-12 lg:p-16'>
          <div className='max-w-6xl mx-auto'>
            <div className='w-full bg-slate-300 h-1 rounded-full'>
              <div
                className='bg-teal-500 h-1 rounded-full transition-all duration-500'
                style={{
                  width: `${((currentSlide + 1) / slides.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <button
        type='button'
        className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg backdrop-blur-sm z-10 rounded-md p-3 ml-10 transition-all duration-200'
        onClick={prevSlide}
        aria-label='Previous Slide'
      >
        <ChevronLeft className='h-6 w-6' />
      </button>

      <button
        type='button'
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg backdrop-blur-sm z-10 rounded-md p-3 mr-10 transition-all duration-200'
        onClick={nextSlide}
        aria-label='Next Slide'
      >
        <ChevronRight className='h-6 w-6' />
      </button>
    </div>
  )
}

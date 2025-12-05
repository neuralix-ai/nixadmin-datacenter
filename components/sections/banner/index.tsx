'use client'

import Image from 'next/image'
import mainBg from '../../../assets/images/MAIN-BG-2.jpg'

const BannerSection = () => {
  return (
    <div className='relative w-full min-h-screen overflow-hidden'>
      <Image
        src={mainBg}
        alt='Background'
        fill
        className='absolute inset-0 w-full h-full object-cover'
        priority
      />

      <div className='absolute inset-0 bg-black/15 z-10' />

      <div className='relative z-20 flex flex-col min-h-screen w-full'>
        <div className='flex-1 flex items-center px-6 lg:px-12 w-full'>
          <div className='max-w-5xl w-full'>
            <h1 className='text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6 lg:mb-8'>
              Empowering India&apos;s Defence with Indigenous AI
            </h1>

            <p className='text-lg lg:text-xl text-white/90 max-w-3xl'>
              Neuralix Datacenter delivers secure, indigenous AI solutions to
              advance India&apos;s defence capabilities, ensuring operational
              excellence and strategic autonomy for the nation.
            </p>
          </div>
        </div>

        {/* <div className='px-6 lg:px-12 pb-8 lg:pb-12 w-full flex justify-center'>
          <div className='w-full'>
            <h2 className='text-4xl lg:text-7xl xl:text-9xl font-bold text-white/90 text-center tracking-wide'>
              Neuralix Datacenter
            </h2>
          </div>
        </div> */}
      </div>
    </div>
  )
}

BannerSection.displayName = 'BannerSection'

export default BannerSection

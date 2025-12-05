'use client'

const CTASection = () => {
  return (
    <div className='relative mt-10 h-[20rem] lg:h-[40rem] xl:h-[50rem] max-h-[93rem] w-full 3xl:h-[60vw] overflow-hidden'>
      <div className='flex flex-col justify-center items-center gap-2 lg:gap-10 pt-32 lg:pt-28 w-full'>
        <div className='flex items-stretch h-[8rem] md:h-[50rem] xl:h-[50rem] 3xl:h-[63rem] max-h-[93rem] w-full'>
          <div className='w-full'>
            <video
              playsInline
              className='flex absolute top-0 left-0 w-full z-0 h-full object-cover'
              autoPlay
              muted
              loop
            >
              <source src='/assets/videos/cta_video_h264.mp4' type='video/mp4' />
            </video>
            <div className='absolute top-0 inset-0 bg-black bg-opacity-40 z-5'></div>

          </div>
          <div className='absolute flex-col transform -translate-x-1/2 flex  z-5 grid-rows-2 justify-center items-center left-1/2 top-1/2 -translate-y-1/2  lg:left-1/2 h-full'>
            <div className='flex justify-center items-center col-span-full sm:w-[30rem] md:w-[40rem] lg:w-[1072px]'>
              <p className='text-white text-center text-2xl font-semibold md:text-3xl lg:text-7xl md:font-bold leading-normal'>
                Ready to Elevate Your <br /> Business with AI?
              </p>
            </div>
            <div className='flex justify-center items-center col-span-full'>
              <div className='h-18 md:h-28 w-[20rem] md:w-[40rem] grid grid-cols-1 gap-4 content-center lg:w-[800px]'>
                <p className='text-[#E4E8E8] text-center text-[0.7rem] md:text-base lg:text-xl font-normal px-10 '>
                  Discover the transformative power of Neuralix&apos;s AI
                  solutions. Whether you need customized strategies or
                  innovative tools, we&apos;re here to enhance your efficiency,
                  drive sustainable growth, and unlock new opportunities to
                  succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTASection.displayName = 'CTASection'

export default CTASection

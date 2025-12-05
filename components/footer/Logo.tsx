import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gemLogo from '../../assets/images/GEM.png'
import makeInIndia from '../../assets/images/Make_In_India.png'
import minIndia1 from '../../assets/images/Ministry_of_Micro_Small_Medium_Enterprises.png'
import thub from '../../assets/images/T-Hub.png'
import neuralixLogo from '../../assets/logos/neuralix-datacenter-text.jpg'
interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className='flex flex-col grow shrink min-w-[240px] w-[512px] max-md:max-w-full'>
      <div className='flex flex-col w-full max-md:max-w-full'>
        <Link href='#' legacyBehavior>
          <a rel='noopener noreferrer'>
            <div className='flex gap-3 items-center self-start'>
              <Image
                loading='lazy'
                src={neuralixLogo}
                alt='Neuralix Datacenter logo'
                width={600}
                height={400}
                className='object-contain'
              />
            </div>
          </a>
        </Link>

        <p className='mt-4 text-base tracking-wide leading-6 text-gray-400 max-md:max-w-full'>
          Neuralix Datacenter delivers tailored AI solutions that transform
          complex data into actionable insights, empowering industries to
          achieve operational excellence and sustainability.
        </p>
      </div>
      <div className='flex flex-wrap overflow-hidden gap-2 items-start mt-10 w-[300px] md:w-full text-xs tracking-normal leading-loose text-white max-md:max-w-full'>
        <Image
          loading='lazy'
          src={gemLogo}
          alt='Partner logo 1'
          width={100}
          height={100}
          className='object-contain shrink aspect-[1.5] mx-1'
        />
        <Image
          loading='lazy'
          src={makeInIndia}
          alt='Partner logo 2'
          width={100}
          height={100}
          className='object-contain shrink aspect-[1.85] mx-1'
        />
        <Image
          loading='lazy'
          src={minIndia1}
          alt=''
          width={100}
          height={100}
          className='object-contain shrink aspect-[1.85] mx-1'
        />
        <Image
          loading='lazy'
          src={thub}
          width={100}
          height={100}
          alt='Partner logo 3'
          className='object-contain shrink aspect-[1.85] mx-1'
        />
      </div>
    </div>
  )
}

export default Logo

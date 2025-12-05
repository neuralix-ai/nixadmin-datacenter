'use client'
import { TEAM_MEMBERS_DATA } from '@/constants/team-members'
import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import SliderButton from './slider-button'
import TeamMember from './team-member'

const settings = {
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  className: 'slider',
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        initialSlide: 0,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 740,
      settings: {
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
      },
    },
  ],
}

export const OurTeamSection = () => {
  const sliderRef = useRef<Slider>(null)
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }
  return (
    <div
      className='w-full px-6 md:px16 mt-10 flex flex-col lg:flex-row'
      id='#ourteam'
    >
      <div className='flex flex-col w-full gap-y-12 items-center lg:items-start'>
        <div className='flex flex-row w-full items-center justify-between'>
          <div className='flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full'>
            <h2 className='text-6xl font-bold leading-none text-neutral-800 max-md:max-w-full max-md:text-4xl md:pl-10'>
              Meet Our Team
            </h2>
            <p className='mt-4 text-lg tracking-wide leading-loose text-neutral-600 max-md:max-w-full md:pl-10'>
              Get to know the experts behind our mission.
            </p>
          </div>
          <div className='flex flex-row gap-2 object-contain shrink-0 self-stretch my-auto md:pr-10'>
            <SliderButton variant='previous' handleClick={handlePrev} />
            <SliderButton variant='next' handleClick={handleNext} />
          </div>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {TEAM_MEMBERS_DATA.map((item, index) => (
            <div key={index}>
              <TeamMember
                name={item.name}
                linkedinHref={item.linkedinHref}
                designation={item.designation}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

OurTeamSection.displayName = 'OurTeamSection'

export default OurTeamSection

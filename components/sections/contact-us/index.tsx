'use client'

import { FOOTER_DATA } from '@/constants/footer'

import { Element } from 'react-scroll'
import LocationInfo from './LocationInfo'
import ContactUsForm from './contact-us-form'

interface ContactUsProps {}

const ContactUsSection: React.FC<ContactUsProps> = () => {
  return (
    <Element
      name='contact-element'
      id='#contact'
      className='relative w-full bg-gradient-to-b from-[#F6FBFB] via-[#E4E8E8] to-[#DEEDED] py-16'
    >
      <section
        data-layername='contactUs'
        className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:py-8 lg:px-20'
      >
        <div className='flex flex-col w-full'>
          <div data-layername='titleSubtitle' className='lg:w-[500px]'>
            <h1
              data-layername='contactTitle'
              className='text-4xl md:text-6xl font-bold leading-tight text-neutral-800'
            >
              Get Started <br /> with Neuralix
            </h1>
            <p
              data-layername='contactSubtitle'
              className='mt-4 text-base md:text-lg leading-7 text-neutral-600'
            >
              For inquiries, to learn more or explore collaboration
              opportunities, reach out to our team by filling out the form.
            </p>
          </div>
          <div
            data-layername='officeLocation'
            className='hidden md:flex flex-col p-6 mt-10 text-base rounded-2xl bg-neutral-100 md:w-[360px]'
          >
            <h2
              data-layername='locationsTitle'
              className='text-xl md:text-2xl font-bold leading-snug text-neutral-800'
            >
              Our Locations
            </h2>
            {FOOTER_DATA.locations.map((location, index) => (
              <LocationInfo
                key={index}
                country={location.country}
                address={location.address}
              />
            ))}
          </div>
        </div>
        <div
          data-layername='content'
          className='flex flex-col min-w-[240px] lg:w-[600px]'
        >
          <ContactUsForm />
        </div>
        <div
          data-layername='officeLocationMobile'
          className='flex md:hidden flex-col p-6 mt-10 text-base rounded-2xl bg-neutral-100 w-full'
        >
          <h2
            data-layername='locationsTitle'
            className='text-xl md:text-2xl font-bold leading-snug text-neutral-800'
          >
            Our Locations
          </h2>
          {FOOTER_DATA.locations.map((location, index) => (
            <LocationInfo
              key={index}
              country={location.country}
              address={location.address}
            />
          ))}
        </div>
      </section>
    </Element>
  )
}

ContactUsSection.displayName = 'ContactUsSection'

export default ContactUsSection

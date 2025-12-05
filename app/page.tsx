'use client'
import QualityControlSlider from '@/components/QualityControlSlider'
import { BannerSection, ContactUsSection } from '@/components/sections'
import { useEffect } from 'react'
import { scroller } from 'react-scroll'
import IndustryFocusSection from '../components/IndustryFocusSection'
import KeyProjects from '../components/KeyProjects'
import TeamsCarousel from '../components/TeamsCarousel'
import WhatWeDoSection from '../components/WhatWeDoSection'

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      scroller.scrollTo(hash, {
        smooth: true,
        duration: 500,
        offset: -50,
      })
    }
  }, [])

  return (
    <main className='flex relative flex-col max-w-[100vw] overflow-x-hidden overflow-y-hidden items-center '>
      <section id='#about' className='w-full'>
        <BannerSection />
      </section>
      <section id='#challenges' className='w-full'>
        <QualityControlSlider />
      </section>
      <section id='#solutions' className='w-full'>
        <WhatWeDoSection />
      </section>
      <section id='#projects' className='w-full'>
        <KeyProjects />
      </section>
      <section id='#focus' className='w-full'>
        <IndustryFocusSection />
      </section>
      <section id='#ourteam' className='w-full'>
        <TeamsCarousel />
      </section>
      <section id='#contact' className='w-full'>
        <ContactUsSection />
      </section>
    </main>
  )
}

'use client'

import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { TEAM_MEMBERS_DATA } from '../constants/team-members'

interface TeamMember {
  name: string
  linkedinHref: string
  designation: string
  description: string
  image: any
}

export default function TeamsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % TEAM_MEMBERS_DATA.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      prevIndex =>
        (prevIndex - 1 + TEAM_MEMBERS_DATA.length) % TEAM_MEMBERS_DATA.length,
    )
  }

  const getCardPosition = (memberIndex: number) => {
    const diff = memberIndex - currentIndex
    const totalMembers = TEAM_MEMBERS_DATA.length

    let normalizedDiff = diff
    if (diff > totalMembers / 2) {
      normalizedDiff = diff - totalMembers
    } else if (diff < -totalMembers / 2) {
      normalizedDiff = diff + totalMembers
    }

    return normalizedDiff
  }

  const getCardStyles = (position: number) => {
    const absPosition = Math.abs(position)

    if (position === 0) {
      return {
        transform: 'translateX(0px) scale(1)',
        opacity: 1,
        zIndex: 30,
        filter: 'blur(0px)',
        width: '400px',
        height: '500px',
      }
    } else if (absPosition === 1) {
      return {
        transform: `translateX(${position * 350}px) scale(0.8)`,
        opacity: 0.7,
        zIndex: 20,
        filter: 'blur(0px)',
        width: '350px',
        height: '440px',
      }
    } else if (absPosition === 2) {
      return {
        transform: `translateX(${position * 1000}px) scale(0.6)`,
        opacity: 0.4,
        zIndex: 10,
        filter: 'blur(1px)',
        width: '300px',
        height: '380px',
      }
    } else {
      return {
        transform: `translateX(${position * 600}px) scale(0.3)`,
        opacity: 0,
        zIndex: 0,
        filter: 'blur(2px)',
        width: '250px',
        height: '320px',
      }
    }
  }

  return (
    <section className='py-16  px-4 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 min-h-screen w-full'>
      <div className='w-full '>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-slate-900 mb-4'>
            Meet Our Team
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            Our diverse team of experts brings together decades of experience to
            drive innovation and deliver exceptional results.
          </p>
        </div>

        <div className='relative h-[600px] w-full flex items-center justify-center mb-8'>
          <div className='relative w-full flex items-center justify-center'>
            {TEAM_MEMBERS_DATA.map((member, index) => {
              const position = getCardPosition(index)
              const styles = getCardStyles(position)
              const isCenter = position === 0

              if (Math.abs(position) > 2) return null

              return (
                <div
                  key={index}
                  className='absolute transition-all duration-700 ease-in-out'
                  style={{
                    transform: styles.transform,
                    opacity: styles.opacity,
                    zIndex: styles.zIndex,
                    filter: styles.filter,
                    width: styles.width,
                    height: styles.height,
                  }}
                >
                  <div className='bg-white rounded-3xl shadow-2xl overflow-hidden w-full h-full relative group cursor-pointer border border-slate-200'>
                    <div className='relative w-full h-full overflow-hidden'>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent' />
                      <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                        <h3 className='text-xl font-bold mb-1 drop-shadow-lg'>
                          {member.name}
                        </h3>
                        <p className='text-teal-300 font-semibold text-sm uppercase tracking-wide drop-shadow-md'>
                          {member.designation}
                        </p>
                      </div>
                      {isCenter && (
                        <div className='absolute inset-0 bg-slate-900/95 backdrop-blur-sm p-6 flex flex-col justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-50'>
                          <div className='text-center text-white'>
                            <h3 className='text-2xl font-bold mb-2'>
                              {member.name}
                            </h3>
                            <p className='text-teal-300 font-semibold text-sm uppercase tracking-wide mb-4'>
                              {member.designation}
                            </p>
                            <p className='text-slate-200 text-sm leading-relaxed mb-6 max-h-40 overflow-y-auto'>
                              {member.description}
                            </p>
                            {member.linkedinHref && (
                              <a
                                href={member.linkedinHref}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 shadow-lg'
                                onClick={e => e.stopPropagation()}
                              >
                                <Linkedin size={16} />
                                Connect on LinkedIn
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='flex justify-center space-x-4'>
          <button
            onClick={prevSlide}
            className='bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 group border border-slate-200'
          >
            <ChevronLeft
              size={24}
              className='text-slate-600 group-hover:text-slate-900'
            />
          </button>
          <button
            onClick={nextSlide}
            className='bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 group border border-slate-200'
          >
            <ChevronRight
              size={24}
              className='text-slate-600 group-hover:text-slate-900'
            />
          </button>
        </div>
      </div>
    </section>
  )
}

'use client'
import { HEADER_LARGE_DATA } from '@/constants/header'
import Image from 'next/image'

import Link from 'next/link'
import NavItem from '../nav-item'
import { HeaderProps } from './types'

const HeaderLarge = ({ hideNavs }: HeaderProps) => {
  return (
    <nav className='flex py-0 gap-10 px-28 items-center fixed top-0 left-0 w-full z-50 justify-between backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-md transition-all duration-300 text-slate-900'>
      {/* <Link href={'/'}>
        <Image
          src='/Full_Logo-Black-removebg-preview.png'
          width={150}
          height={30}
          alt='neuralix-datacenter-logo'
          className='object-contain drop-shadow-sm'
        />
      </Link> */}
      <Link href={'/'}>
        <Image
          src='/Full_Logo-Black-removebg-preview.png'
          width={150}
          height={30}
          alt='neuralix-datacenter-logo'
          className='object-contain drop-shadow-sm'
        />
      </Link>
      {!hideNavs && (
        <>
          <div className='flex justify-content-center items-center gap-10'>
            {HEADER_LARGE_DATA.map(item => {
              if (item.label != 'Contact Us')
                return (
                  <NavItem
                    key={item.id}
                    label={item.label}
                    id={item.id}
                    fromHeader
                    type={item.type}
                  />
                )
            })}
          </div>
          <div className='flex justify-content-center items-center gap-10'>
            {HEADER_LARGE_DATA.map(item => {
              if (item.label == 'Contact Us')
                return (
                  <div
                    key={item.id}
                    className='overflow-hidden gap-3 self-stretch px-6 py-3 my-auto text-base font-bold leading-loose rounded-2xl border border-slate-300 border-solid text-slate-900 hover:bg-slate-900 hover:text-white max-md:px-5 transition-colors duration-200'
                  >
                    <NavItem
                      label={item.label}
                      id={item.id}
                      fromHeader
                      type={item.type}
                    />
                  </div>
                )
            })}
          </div>
        </>
      )}
    </nav>
  )
}
export default HeaderLarge

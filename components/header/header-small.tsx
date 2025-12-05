'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import Sidebar from './sidebar'
import { HeaderProps } from './types'

const HeaderSmall = ({ hideNavs }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='flex py-6 gap-10 px-8 items-center fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 rounded-b-2xl shadow-md transition-all duration-300 text-slate-900'>
      <Image
        src='/logo-with-text-black.png'
        width={180}
        height={30}
        alt='neuralix-datacenter-logo'
      />
      <span className='grow' />
      {!hideNavs && (
        <Button
          isIconOnly
          variant='light'
          className='-mr-4 rounded-full bg-teal-400'
          onPress={() => setIsOpen(prev => !prev)}
        >
          {!isOpen && <LuMenu size={24} className='text-white' />}
          {isOpen && <LuX size={24} className='text-white' />}
        </Button>
      )}

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}

export default HeaderSmall

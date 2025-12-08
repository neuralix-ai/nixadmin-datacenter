'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import Sidebar from './sidebar'
import { HeaderProps } from './types'

const HeaderSmall = ({ hideNavs }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    console.log('Toggle clicked, current state:', isOpen)
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <nav className='flex py-6 gap-10 px-8 items-center fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 rounded-b-2xl shadow-md transition-all duration-300 text-slate-900'>
        <Image
          src='/Full_Logo-Black-removebg-preview.png'
          width={120}
          height={20}
          alt='neuralix-datacenter-logo'
          className='w-[120px] h-auto object-contain'
        />
        <span className='grow' />
        {!hideNavs && (
          <Button
            isIconOnly
            variant='light'
            className='-mr-4 rounded-full bg-teal-400 z-[80]'
            onPress={handleToggle}
          >
            {!isOpen && <LuMenu size={24} className='text-white' />}
            {isOpen && <LuX size={24} className='text-white' />}
          </Button>
        )}
      </nav>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default HeaderSmall

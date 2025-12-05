'use client'
import { FOOTER_DATA } from '@/constants/footer'
import React from 'react'
import NavItem from '../nav-item'

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <nav className='flex flex-col grow shrink w-40 text-base leading-loose text-gray-400'>
      <h2 className='font-bold text-white'>MENU</h2>
      <div className='flex flex-col items-start gap-y-2'>
        {FOOTER_DATA.tableOne.map((item, index) => (
          <NavItem
            key={index}
            label={item.label}
            id={item.id}
            type={item.type}
          />
        ))}
      </div>
    </nav>
  )
}

export default Menu

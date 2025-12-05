'use client'
import { HEADER_LARGE_DATA } from '@/constants/header'
import { useOutsideClick } from '@/utils/hooks'
import { cva } from 'class-variance-authority'
import { useRef } from 'react'
import NavItem from '../nav-item'

const sidebarVariants = cva(
  [
    'fixed right-0 bottom-0 top-20',
    'bg-content1',
    'flex py-6 gap-10 px-12',
    'flex-col',
    'w-[390px]',
  ],
  {
    variants: {
      isOpen: {
        true: 'transition translate-x-0',
        false: 'transition translate-x-full',
      },
    },
  },
)
type SidebarProps = {
  isOpen: boolean
  setIsOpen: (v: boolean) => void
}
const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, () => setIsOpen(false))

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <div className={sidebarVariants({ isOpen: isOpen })} ref={ref}>
      {HEADER_LARGE_DATA.map((item, index) => (
        <NavItem
          key={index}
          label={item.label}
          id={item.id}
          fromHeader
          type={item.type}
          closeSidebar={closeSidebar}
        />
      ))}
    </div>
  )
}

export default Sidebar

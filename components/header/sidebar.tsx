'use client'
import { HEADER_LARGE_DATA } from '@/constants/header'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

type SidebarProps = {
  isOpen: boolean
  setIsOpen: (v: boolean) => void
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const router = useRouter()

  console.log('Sidebar render, isOpen:', isOpen)

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    console.log('Sidebar effect triggered, isOpen:', isOpen)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClick = (id: string) => {
    console.log('Menu item clicked:', id)
    setIsOpen(false)
    if (id === '#about') {
      router.push('/')
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[999]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 animate-in fade-in duration-300"
        onClick={() => {
          console.log('Backdrop clicked')
          setIsOpen(false)
        }}
      />

      {/* Sidebar */}
      <div className="absolute top-0 right-0 h-full w-full bg-white shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Menu</h2>
            <button
              onClick={() => {
                console.log('Close button clicked')
                setIsOpen(false)
              }}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-slate-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-1">
              {HEADER_LARGE_DATA.map((item, index) => (
                <li key={index}>
                  {item.label === 'Contact Us' ? (
                    <ScrollLink
                      to={item.id}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => handleClick(item.id)}
                    >
                      <div className="block px-4 py-3 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors cursor-pointer text-center">
                        {item.label}
                      </div>
                    </ScrollLink>
                  ) : (
                    <ScrollLink
                      to={item.id}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => handleClick(item.id)}
                    >
                      <div className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                        {item.label}
                      </div>
                    </ScrollLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

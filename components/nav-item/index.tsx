import { usePathname, useRouter } from 'next/navigation'
import { SyntheticEvent, useCallback, useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

type NavItemProps = {
  label: string
  id?: string
  closeSidebar?: (e: SyntheticEvent<any>) => void
  fromHeader?: boolean
  url?: string
  type: string
}

const NavItem = ({
  label,
  id = '',
  closeSidebar = () => {},
  fromHeader,
  url = '',
  type,
}: NavItemProps) => {
  const [active, setActive] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleSetActive = (to: string) => {
    if (to === id) {
      setActive(true)
    }
  }

  useEffect(() => {
    setActive(false)
  }, [pathname])

  const handleSetInactive = useCallback(() => {
    setActive(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const onClick = useCallback(
    (e: SyntheticEvent<any>) => {
      e.preventDefault()
      closeSidebar(e)
      setActive(true)
      if (id === '#home' && pathname !== '/') {
        router.push('/')
      }
      if (type === 'text') {
        router.push(`/${id}`)
      }
      if (url) router.push(url)
    },
    [closeSidebar, id, router, type, url, pathname],
  )

  return (
    <>
      {type === 'link' ? (
        <NavElement
          fromHeader={fromHeader}
          onClick={onClick}
          label={label}
          active={active}
        />
      ) : (
        <ScrollLink
          to={id}
          smooth={true}
          offset={-100}
          duration={500}
          spy={true}
          activeClass='active'
          onSetActive={handleSetActive}
          onSetInactive={handleSetInactive}
        >
          <NavElement
            fromHeader={fromHeader}
            onClick={onClick}
            label={label}
            active={active}
          />
        </ScrollLink>
      )}
    </>
  )
}

type NavElementProps = {
  label: string
  active: boolean
  onClick?: (e: SyntheticEvent<any>) => void
  fromHeader?: boolean
}

const NavElement = ({
  fromHeader,
  onClick,
  label,
  active,
}: NavElementProps) => {
  return (
    <div
      className={`flex flex-col ${fromHeader ? 'items-center' : 'items-start'}`}
      onClick={onClick}
    >
      <p className='cursor-pointer'>{label}</p>
      {fromHeader &&
        (active && label != 'Contact Us' ? (
          <div className='w-[6px] h-[6px] rounded-full ml-2 mb-1 bg-primary ' />
        ) : label != 'Contact Us' ? (
          <div className='w-[6px] h-[6px] rounded-full ml-2 mb-1 bg-transparent' />
        ) : (
          ''
        ))}
    </div>
  )
}

NavItem.displayName = 'NavItem'

export default NavItem

/*

{fromHeader &&
        (active ? (
          <div className='w-[6px] h-[6px] rounded-full ml-2 mb-1 bg-primary ' />
        ) : label != "Contact Us" ?
          (
            <div className='w-[6px] h-[6px] rounded-full ml-2 mb-1 bg-transparent' />
          )
          : ""
        )}


*/

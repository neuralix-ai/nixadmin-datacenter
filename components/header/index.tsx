'use client'

import HeaderLarge from './header-large'
import HeaderSmall from './header-small'
import { HeaderProps } from './types'

const Header = ({ hideNavs = false }: HeaderProps) => {
  return (
    <div className='fixed top-0 right-0 left-0 z-50'>
      <div className='hidden lg:block'>
        <HeaderLarge hideNavs={hideNavs} />
      </div>
      <div className='block lg:hidden'>
        <HeaderSmall hideNavs={hideNavs} />
      </div>
    </div>
  )
}
Header.displayName = 'Header'
export default Header

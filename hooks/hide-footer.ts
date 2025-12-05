import { usePathname } from 'next/navigation'

const useHideFooter = () => {
  const pathname = usePathname()
  const hideLinks = ['/tnc', '/privacy-policy']
  const checkHide = () => {
    if (hideLinks.includes(pathname)) return true
    else return false
  }
  return { checkHide }
}

export default useHideFooter

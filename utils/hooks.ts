'use client'
import { useParams } from 'next/navigation'
import { RefObject, useEffect, useMemo, useState } from 'react'

const getHash = () =>
  typeof window !== 'undefined' ? window.location.hash : undefined

export const useHash = () => {
  const [isClient, setIsClient] = useState(false)
  const [hash, setHash] = useState(getHash())
  const params = useParams()

  useEffect(() => {
    setIsClient(true)
    setHash(getHash())
  }, [params])

  return isClient ? hash : null
}

export function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      IntersectionObserver &&
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref],
  )

  useEffect(() => {
    ref.current && observer.observe(ref.current)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isIntersecting
}

export function useOutsideClick(
  ref: RefObject<HTMLElement>,
  callback: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }
    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])
}

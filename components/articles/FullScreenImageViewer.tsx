'use client'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

interface FullScreenImageViewerProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  layout?: string
  objectFit?: string
  caption?: string
}

const FullScreenImageViewer: React.FC<FullScreenImageViewerProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  layout = 'fill',
  objectFit = 'cover',
  caption,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false)
        setZoomLevel(1)
      }
    },
    [isFullScreen],
  )

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (!isFullScreen) return

      event.preventDefault()

      const zoomAmount = 0.03
      const direction = event.deltaY < 0 ? 1 : -1

      const newZoomLevel = Math.max(
        0.1,
        Math.min(5, zoomLevel + direction * zoomAmount),
      )

      setZoomLevel(newZoomLevel)
    },
    [isFullScreen, zoomLevel],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey)

    const contentElement = contentRef.current
    if (isFullScreen && contentElement) {
      contentElement.addEventListener('wheel', handleWheel as EventListener, {
        passive: false,
      })
    }

    if (isFullScreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      if (contentElement) {
        contentElement.removeEventListener(
          'wheel',
          handleWheel as EventListener,
        )
      }
      document.body.style.overflow = 'auto'
    }
  }, [isFullScreen, handleEscapeKey, handleWheel])

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
    if (isFullScreen) {
      setZoomLevel(1)
    }
  }

  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (zoomLevel < 3) {
      setZoomLevel(prevZoom => prevZoom + 0.5)
    }
  }

  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (zoomLevel > 0.5) {
      setZoomLevel(prevZoom => prevZoom - 0.5)
    }
  }

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation()
    setZoomLevel(1)
  }

  const getCursorStyle = () => {
    if (isFullScreen) {
      return 'cursor-zoom-out'
    } else if (isHovering) {
      return 'cursor-zoom-in'
    }
    return ''
  }

  return (
    <>
      <div
        className={`relative ${getCursorStyle()} ${className}`}
        onClick={toggleFullScreen}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout={layout as any}
          objectFit={objectFit as any}
          className={`transition-transform duration-300 rounded-lg`}
        />
        {caption && (
          <figcaption className='text-center text-sm text-gray-700 mt-2 italic underline'>
            {caption}
          </figcaption>
        )}
      </div>

      {isFullScreen && (
        <div
          className='fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center cursor-zoom-out'
          onClick={toggleFullScreen}
        >
          <div className='fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-gradient-to-b from-black to-transparent h-24 pointer-events-none'>
            <div className='flex space-x-2 pointer-events-auto'>
              <button
                onClick={zoomIn}
                className='text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition-colors shadow-lg'
                title='Zoom in'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='11' cy='11' r='8'></circle>
                  <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                  <line x1='11' y1='8' x2='11' y2='14'></line>
                  <line x1='8' y1='11' x2='14' y2='11'></line>
                </svg>
              </button>
              <button
                onClick={zoomOut}
                className='text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition-colors shadow-lg'
                title='Zoom out'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='11' cy='11' r='8'></circle>
                  <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                  <line x1='8' y1='11' x2='14' y2='11'></line>
                </svg>
              </button>
              <button
                onClick={resetZoom}
                className='text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition-colors shadow-lg'
                title='Reset zoom'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z'></path>
                  <path d='M9 12h6'></path>
                </svg>
              </button>
            </div>

            <div className='pointer-events-auto bg-black bg-opacity-70 text-white px-4 py-2 rounded-full shadow-lg font-medium'>
              {Math.round(zoomLevel * 100)}%
            </div>

            <button
              onClick={toggleFullScreen}
              className='pointer-events-auto text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition-colors shadow-lg'
              title='Close fullscreen'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            </button>
          </div>

          {caption && (
            <div className='fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black to-transparent pointer-events-none'>
              <div className='text-center text-white'>
                <p className='text-lg font-medium shadow-lg'>{caption}</p>
              </div>
            </div>
          )}

          <div className='relative w-full h-full max-w-7xl max-h-screen px-4 py-20 flex items-center justify-center'>
            <div
              ref={contentRef}
              className='overflow-auto w-full h-full flex items-center justify-center'
            >
              <div
                className='transition-transform duration-200 ease-out'
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center',
                  maxHeight: zoomLevel > 1 ? 'none' : '85vh',
                  maxWidth: zoomLevel > 1 ? 'none' : '100%',
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  layout='intrinsic'
                  width={1200}
                  height={800}
                  objectFit='contain'
                  className='w-auto'
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FullScreenImageViewer

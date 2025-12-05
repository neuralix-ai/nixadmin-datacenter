import { cva } from 'class-variance-authority'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const button = cva(
  [
    'flex',
    'flex-row',
    'border',
    'border-slate-300',
    'bg-slate-200',
    'rounded-full',
    'h-[2.5rem]',
    'w-[2.5rem]',
    'md:h-[4.5rem]',
    'md:w-[4.5rem]',
    'p-3',
    'cursor-pointer',
    'text-slate-400',
    'active:bg-teal-400',
    'active:border-none',
    'active:text-white',
  ],
  {
    variants: {
      intent: {
        next: ['items-center justify-center'],
        previous: ['items-center justify-center'],
      },
    },
  },
)

type SliderButtonProps = {
  variant: 'previous' | 'next'
  handleClick: () => void
}

const SliderButton = ({ variant, handleClick }: SliderButtonProps) => {
  const getIcon = () => {
    switch (variant) {
      case 'next':
        return <BsArrowRight className='text-inherit w-3 h-3 md:w-5 md:h-5' />
      case 'previous':
        return <BsArrowLeft className='text-inherit w-3 h-3 md:w-5 md:h-5' />
    }
  }

  return (
    <div className={button({ intent: variant })} onClick={handleClick}>
      {getIcon()}
    </div>
  )
}

export default SliderButton

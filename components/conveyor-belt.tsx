import Image from 'next/image'

export const ConveyorBelt = () => {
  return (
    <div className='absolute left-20 -mt-10 -z-10 hidden xl:block'>
      <Image src='/assets/belt.svg' width={120} height={10} alt='belt' />
    </div>
  )
}

ConveyorBelt.displayName = 'ConveyorBelt'

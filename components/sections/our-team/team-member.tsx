import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'

type TeamMemberProps = {
  name: string
  linkedinHref?: string
  designation: string
  description: string
  image: string | StaticImport
}
const TeamMember = ({
  name,
  linkedinHref,
  designation,
  description,
  image,
}: TeamMemberProps) => {
  return (
    <div className='flex flex-col items-start gap-3 w-fit px-4 max-w-sm '>
      <div className='relative group'>
        <div
          className='flex items-end justify-center sm:h-[640px] md:h-[400px] xl:h-[480px] bg-[#DEEDED] bg-opacity-90 rounded-t-2xl md:rounded-2xl mb-5 cursor-pointer 
        gap-10 w-[14rem] md:w-[320px] lg:w-[320px] xl:w-[360px]'
        >
          <Image
            src={image}
            width={300}
            height={500}
            alt={name}
            className='object-cover shrink-0 self-stretch aspect-square grayscale w-full h-full md:rounded-2xl scale-100 md:w-[280px] lg:w-[280px] xl:w-[360px]'
          />
        </div>

        <div
          className='flex flex-col w-[14rem] md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:px-4 md:pt-4 md:pb-36 md:w-full md:h-[100px]
        md:text-center bg-white md:opacity-80 lg:group-hover:h-[360px] xl:group-hover:h-[460px] md:group-hover:top-3 md:rounded-2xl md:transition-opacity md:duration-300 lg:w-[300px] xl:w-[340px]'
        >
          <div className='flex'>
            <p className='text-xl font-semibold flex-1 shrink self-stretch my-auto basis-0'>
              {name}
            </p>
            {linkedinHref && (
              <Link href={linkedinHref} legacyBehavior>
                <a target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin size={30} className='text-gray-700' />
                </a>
              </Link>
            )}
          </div>
          <p className='text-lg text-[#52625D] font-medium'>{designation}</p>
          <div className='opacity-80 md:opacity-0 md:group-hover:opacity-80 bg-white rounded-2xl transition-opacity duration-300'>
            <p className='text-sm xl:text-lg text-[#52625D] font-light '>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember

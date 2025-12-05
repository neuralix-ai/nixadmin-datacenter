import Image from 'next/image'

export default function IndustryFocusSection() {
  return (
    <section className='w-full flex flex-col items-center justify-center min-h-screen  bg-gradient-to-b from-[#F6FBFB] via-[#E4E8E8] to-[#DEEDED] '>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='relative mb-8'>
          <Image
            src='/neuralix-logo-whitebg.jpg'
            alt='Neuralix Datacenter Logo'
            width={240}
            height={240}
            className='mix-blend-multiply'
          />
          <div className='absolute inset-0 bg-teal-400/20 rounded-full blur-3xl -z-10'></div>
        </div>
        <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center'>
          What industries are we focused on?
        </h2>
        <p className='text-lg md:text-xl text-slate-700 max-w-2xl text-center leading-relaxed'>
          Defence & Security — our solutions for the military (e.g., AI for
          border security, defence infrastructure monitoring, situational
          awareness, AI‑as‑a‑Service).
        </p>
      </div>
    </section>
  )
}
